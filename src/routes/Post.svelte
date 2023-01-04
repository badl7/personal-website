<script lang="ts">
	import type { BlogPost } from '$lib/models/blog-post';
	import { dateTimeFormat } from './store';

	export let post: BlogPost;
	$: formattedPubDate = $dateTimeFormat.format(new Date(post.pubDate));
</script>

<a href={post.link} target="_blank" rel="noreferrer">
	<div class="post">
		<div class="head">
			<h3>{post.title}</h3>
			<p>{formattedPubDate}</p>
		</div>
		<p class="description">{post.description}</p>
		<div class="categories">
			{#each post.categories as category}
				<span class="category-chip">{category}</span>
			{/each}
		</div>
	</div>
</a>

<style>
	a:hover h3 {
		text-decoration: underline;
	}
	.post {
		display: flex;
		flex-direction: column;
		grid-gap: 10px;
		padding: 0 40px 20px 40px;
		border-bottom: 1px solid var(--app-header-color);
	}
	.head {
		display: flex;
		justify-content: space-between;
	}
	.categories {
		display: flex;
		grid-gap: 10px;
	}
	.category-chip {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px 6px;
		border-radius: 5px;
		background-color: var(--app-primary-color);
		color: #323232;
		font-size: 14px;
	}
</style>
