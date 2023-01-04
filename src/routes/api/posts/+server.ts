import { truncate } from '$lib/helpers/truncate';
import type { BlogPost, BlogFeed } from '$lib/models/blog-post';
import type { RequestHandler } from './$types';
import constants from './constants';

export const GET = (async ({ fetch }) => {
	const res = await fetch(`${constants.FEED_URL}${constants.USERNAME}`);
	const { items } = (await res.json()) as BlogFeed;
	const mapped = items.map<BlogPost>((blog) => {
		const truncatedDescription = truncate(blog.description.replace(/<[^>]*>?/gm, ''), 320);
		return {
			title: blog.title,
			categories: blog.categories,
			link: blog.link,
			pubDate: blog.pubDate,
			description: `${truncatedDescription}...`
		};
	});
	return new Response(JSON.stringify(mapped), { status: 200 });
}) satisfies RequestHandler;
