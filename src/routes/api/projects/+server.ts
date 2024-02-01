import type { Project } from '$lib/models/project';
import { error } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';
import type { GithubRepoResponse } from './response';

const { VITE_GITHUB_ACCESS_TOKEN } = import.meta.env;
const GITHUG_REPO_URL = 'https://api.github.com/repos/badl7';
const projects: Project[] = [
	{
		name: 'Forecasting_future_sales',
		url: ''
	},
	{
		name: 'heart_disease-ML_project',
		url: '',
		inProgress: true
	},
	{
		name: 'yolov8-webcam-live',
		url: '',
		inProgress: true
	},
	{
		name: 'CatsVsDogs-FlaskApp',
		url: ''
	},
	{
		name: 'personal-website',
		url: '',
		inProgress: true
	},
	{
		name: 'STeachApp-Proje',
		url: '',
		inProgress: true
	}
	
];

export const GET = (async ({ fetch }) => {
	try {
		const promises = projects.map((project) => getProjectRepository(fetch, project.name));
		const responseMap = await Promise.all(promises);
		const response = (await Promise.all(
			responseMap.map((res) => res.json())
		)) as GithubRepoResponse[];

		return new Response(JSON.stringify(simplifyResponse(response)));
	} catch (err) {
		throw error(500, "couldn't fetched github projects");
	}
}) satisfies RequestHandler;

const getProjectRepository = (
	fetch: RequestEvent['fetch'],
	projectName: string
): Promise<Response> => {
	const headers = new Headers();
	headers.append('Authorization', `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`);
	return fetch(`${GITHUG_REPO_URL}/${projectName}`, { headers });
};

const simplifyResponse = (repositories: GithubRepoResponse[]): Project[] => {
	return repositories.map((repo, i) => ({
		...projects[i],
		createdAt: repo.created_at,
		description: repo.description,
		language: repo.language,
		licence: repo.license?.name,
		starCount: repo.stargazers_count,
		forkCount: repo.forks_count,
		topics: repo.topics,
		sourceUrl: repo.html_url
	}));
};
