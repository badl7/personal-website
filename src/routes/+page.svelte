<script lang="ts">
	import Post from './Post.svelte';
	import personalPhoto from '$lib/images/photo.jpg';
	import type { BlogPost } from '$lib/models/blog-post';

	const fetchPosts = async (): Promise<BlogPost[]> => {
		const res = await fetch('/api/posts');
		const body = await res.json();

		return body as BlogPost[];
	};

	const postsPromise = fetchPosts();
</script>

<div class="landing-container">
	<div class="greetings-container">
		<div class="greetings">
			<p>Hello, World!</p>
			<p>
				I’m Betül: With a background in mathematics and mathematical physics, I am now pursuing my
				passion for artificial intelligence.
			</p>
			<p>
				As a mathematician and researcher, I am constantly seeking new ways to push the boundaries
				and explore the limitless potential of this exciting field. Whether it's through data
				analysis, machine learning, or mathematical modeling, I am always seeking out new challenges
				and opportunities to make a difference in the world of AI.
			</p>
			<p>
				I am dedicated, enthusiastic, and driven to succeed, and I am excited to see where my work
				in artificial intelligence will take me.
			</p>
		</div>
		<img src={personalPhoto} alt="Personal photograph of Betül Gürbüz" class="personal-photo" />
	</div>
	<div class="blog-posts">
		<h2>Blog Posts</h2>
		<div class="post-content">
			{#await postsPromise}
				<h1>Welcome!</h1>
			{:then posts}
				{#each posts as post}
					<Post {post} />
				{/each}
			{:catch err}
				<h1>error..</h1>
			{/await}
	    </div>
	</div>
</div>

<style>
	.landing-container {
		display: flex;
		flex-direction: column;
		padding: 50px 0;
		grid-gap: 50px;
	}
	.greetings-container {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-gap: 2rem;
		flex-wrap: wrap;
	}
	.greetings {
		display: flex;
		flex-direction: column;
		grid-gap: 25px;
		order: 2;
	}
	.personal-photo {
		border-radius: 10px;
		box-shadow: 10px 5px var(--app-primary-color);
		order: 1;
		width: 200px;
	}
	.blog-posts {
		display: flex;
		flex-direction: column;
		grid-gap: 50px 0px;
	}
	.blog-posts h2 {
		color: var(--app-link-color);
	}
	.post-content {
		display: flex;
		flex-direction: column;
		grid-gap: 1rem;
	}
	@media (min-width: 485px) {
		.personal-photo {
			width: 280px;
			box-shadow: 20px 10px var(--app-primary-color);
		}
	}
	@media (min-width: 750px) {
		.landing-container {
			padding: 50px 25px;
		}
		.greetings-container {
			flex-wrap: nowrap;
		}
		.greetings {
			order: 1;
		}
		.personal-photo {
			order: 2;
		}
	}
</style>
