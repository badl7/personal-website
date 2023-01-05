<script>
	import Github from '$lib/icons/Github.svelte';
	import Kaggle from '$lib/icons/Kaggle.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Medium from '$lib/icons/Medium.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<footer>
	<a href="https://www.linkedin.com/in/betul-gurbuz-dev/">
		<Linkedin size={24} color="var(--app-text-color)" />
	</a>
	<a href="https://www.kaggle.com/badl071">
		<Kaggle size={24} color="var(--app-text-color)" />
	</a>
	<a href="https://github.com/badl7">
		<Github size={24} color="var(--app-text-color)" />
	</a>
	<a href="https://medium.com/@betul.gurbuz.dev">
		<Medium size={24} color="var(--app-text-color)" />
	</a>
	<a href="https://twitter.com/7Betl">
		<Twitter size={24} color="var(--app-text-color)" />
	</a>
</footer>

<style>
	footer {
		display: flex;
		width: fit-content;
		align-self: center;
		grid-gap: 25px;
	}
</style>
