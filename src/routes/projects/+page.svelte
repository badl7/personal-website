<script lang="ts">
	import type { Project } from '$lib/models/project';
	import ProjectCard from './ProjectCard.svelte';

	const fetchProjects = async () => {
		const res = await fetch('/api/projects');
		const body = await res.json();
		return body as Project[];
	};

	const projectsPromise = fetchProjects();
</script>

<svelte:head>
	<title>Betül Gürbüz - Projects</title>

	<meta name="twitter:title" content="Betül Gürbüz - Projects" />
</svelte:head>

<div class="projects-container">
	{#await projectsPromise}
		<h1>...</h1>
	{:then projects}
		<div class="projects">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/await}
</div>

<style>
	.projects-container {
		padding: 50px 25px;
	}
	.projects {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 750px) {
		.projects {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
