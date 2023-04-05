<script>
	import { page } from '$app/stores';
	import '$lib/fonts/jasques-family.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header activePage={$page.url} />
	<main>
		<slot />
	</main>
	<div class="footer-wrapper">
		<Footer />
	</div>
</div>

<style>
	:root {
		--app-background-color: #260C07;
		--app-foreground-color: #8C5346;
		--app-primary-color: #590902;
		--app-link-color: #BF9484;
		--app-header-color: #8C5346;
		--app-text-color: #F0F2F2;
		--app-header-font: 'Kaisei Decol';
		--app-text-font: 'Jacques Francois';
	}

	.app {
		padding: 10px 20px;
		height: calc(100% - 42px);
		display: flex;
		flex-direction: column;
	}

	.footer-wrapper {
		margin-top: auto;
		width: fit-content;
		align-self: center;
		height: 32px;
	}

	@media (min-width: 345px) {
		.app {
			padding: 15px 25px;
			height: calc(100% - 47px);
		}
	}

	@media (min-width: 880px) {
		.app {
			padding: 25px 10%;
			height: calc(100% - 57px);
		}
	}

	@media (min-width: 1090px) {
		.app {
			padding: 50px 20%;
			height: calc(100% - 82px);
		}
	}
</style>
