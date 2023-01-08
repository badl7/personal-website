<script lang="ts">
	import Fork from '$lib/icons/Fork.svelte';
	import Star from '$lib/icons/Star.svelte';
	import type { Project } from '$lib/models/project';
	import { dateTimeFormat } from '../store';

	export let project: Project;
	let truncatedTopics: string;

	$: formattedCreatedAt = $dateTimeFormat.format(new Date(project.createdAt as string));
	$: if (project.topics) {
		truncatedTopics = project.topics?.length > 5 ? project.topics?.slice(5).join(', ') : '';
	}
</script>

<div class="project-card">
	<div class="head">
		<a href={project.url || project.sourceUrl} target="_blank" rel="noreferrer">
			<h3>{project.name}</h3>
		</a>
		<p>{formattedCreatedAt}</p>
	</div>
	<p class="description">
		{project.description}
	</p>
	<div class="footer">
		{#if project.topics}
			<div class="topics">
				{#each project.topics.slice(0, 5) as topic}
					<span class="topic-chip" title={topic}>{topic}</span>
				{/each}
				{#if truncatedTopics}
					<span class="topic-chip" title={truncatedTopics}>...</span>
				{/if}
			</div>
		{/if}
		<div class="footer-end">
			<p>{project.language}</p>
			<div class="counts">
				<div class="count">
					<p>{project.starCount}</p>
					<Star size={18} color="var(--app-text-color)" />
				</div>
				<div class="count">
					<p>{project.forkCount}</p>
					<Fork size={18} color="var(--app-text-color)" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		border: 2px solid var(--app-foreground-color);
		border-radius: 5px;
		padding: 10px 20px;
		gap: 1rem;
	}
	.head {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.head h3:hover {
		text-decoration: underline;
	}
	.footer {
		justify-content: space-between;
		display: flex;
		flex-wrap: wrap;
		grid-gap: 1rem;
	}
	.footer .topics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		height: fit-content;
	}
	.topic-chip {
		max-width: 100px;
		height: fit-content;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: var(--app-primary-color);
		color: var(--app-text-color);
		font-size: 14px;
		border-radius: 5px;
		padding: 4px 6px;
	}
	.footer-end {
		display: flex;
		align-items: flex-end;
		width: 100%;
		justify-content: space-between;
	}
	.counts {
		display: flex;
		gap: 1rem;
	}
	.counts .count {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	@media (min-width: 1360px) {
		.footer {
			flex-wrap: nowrap;
			grid-gap: 1rem;
		}
	}
</style>
