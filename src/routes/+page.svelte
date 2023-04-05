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

<svelte:head>
	<title>Betül Gürbüz</title>

	<meta property="og:title" content="Betül Gürbüz" />
	<meta property="og:description" content="Personal website of Betül Gürbüz" />
	<meta name="twitter:title" content="Betül Gürbüz" />
	<meta name="twitter:description" content="Personal website of Betül Gürbüz" />
	<meta name="Description" content="Personal website of Betül Gürbüz" />
</svelte:head>

<div class="landing-container">
	<div class="greetings-container">
		<div class="greetings">
			<p>Hello, World!</p>
			<p>
				I'm Betül, passionate about AI and with a background in mathematics and mathematical
				physics. I constantly seek new challenges and opportunities to explore the limitless
				potential of AI through data analysis, machine learning, and mathematical modeling. I'm
				dedicated, enthusiastic, and determined to succeed in the field of AI.
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
		padding: 100px 50px;
		grid-gap: 50px;
	}
	.greetings-container {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-gap: 4rem;
		flex-wrap: wrap;
	}
	.greetings {
		display: flex;
		flex-direction: column;
		grid-gap: 25px;
		order: 2;
	}
	.personal-photo {
		border-radius: 15px;
		box-shadow: 10px 5px var(--app-header-color);
		order: 1;
		width: 700px;
	}
	.blog-posts {
		display: flex;
		flex-direction: column;
		grid-gap: 50px 0px;
	}
	.blog-posts h2 {
		color: var(--app-header-color);
	}
	.post-content {
		display: flex;
		flex-direction: column;
		grid-gap: 0.5rem;
	}
	@media (min-width: 485px) {
		.personal-photo {
			width: 280px;
			box-shadow: 20px 10px var(--app-background-color);
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
