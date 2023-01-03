<script>
	import Github from '$lib/icons/Github.svelte';
	import Kaggle from '$lib/icons/Kaggle.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Medium from '$lib/icons/Medium.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<footer>
	<a href="">
		<Linkedin size={24} color="var(--app-text-color)" />
	</a>
	<a href="">
		<Kaggle size={24} color="var(--app-text-color)" />
	</a>
	<a href="">
		<Github size={24} color="var(--app-text-color)" />
	</a>
	<a href="">
		<Medium size={24} color="var(--app-text-color)" />
	</a>
	<a href="">
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
