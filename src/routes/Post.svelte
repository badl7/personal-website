<script lang="ts">
	import type { BlogPost } from '$lib/models/blog-post';
	import { dateTimeFormat } from './store';

	export let post: BlogPost;
	$: formattedPubDate = $dateTimeFormat.format(new Date(post.pubDate));
</script>

<div class="post">
	<div class="head">
		<a href={post.link} target="_blank" rel="noreferrer">
			<h3>{post.title}</h3>
		</a>
		<p>{formattedPubDate}</p>
	</div>
	<p class="description">{post.description}</p>
	<div class="categories">
		{#each post.categories as category}
			<span class="category-chip">{category}</span>
		{/each}
	</div>
</div>

<style>
	a:hover h3 {
		text-decoration: underline;
		color: var(--app-primary-color);
	}
	.post {
		display: flex;
		flex-direction: column;
		grid-gap: 5px;
		padding: 5px 10px;
		border: 1px solid #250d08;
		border-radius: 10px;
		background-color: #2e130a;
	}
	.head {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.categories {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 10px;
	}
	.category-chip {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px 6px;
		border-radius: 5px;
		background-color: var(--app-header-color);
		color: var(--app-primary-color);
		font-size: 14px;
	}

	@media (min-width: 560px) {
		.post {
			padding: 10px 20px;
		}
	}

	@media (min-width: 720px) {
		.post {
			padding: 20px 40px;
		}
	}
</style>
