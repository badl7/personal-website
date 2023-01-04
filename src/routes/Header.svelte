<script lang="ts">
	import Dropdown from './Dropdown.svelte';

	export let activePage: URL;
</script>

<nav>
	<a href="/" class="banner">Betül Gürbüz</a>
	<div class="links">
		<a href="/projects" class:underline={activePage.pathname === '/projects'}>Projects</a>
		<a href="/library" class:underline={activePage.pathname === '/library'}>Library</a>
		<a href="/contact" class:underline={activePage.pathname === '/contact'}>Contact</a>
	</div>
	<div class="dropdown-wrapper">
		<Dropdown />
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
	}
	.banner {
		font-size: 24px;
		z-index: 1;
	}
	.links {
		display: none;
		font-size: 21px;
		margin-left: auto;
		grid-gap: 25px;
		align-items: flex-end;
	}
	.dropdown-wrapper {
		display: flex;
		margin-left: auto;
	}
	.underline {
		text-decoration: underline;
	}
	@media (min-width: 425px) {
		.banner {
			font-size: 28px;
		}

		.links {
			font-size: 24px;
		}
	}

	@media (min-width: 575px) {
		.links {
			display: flex;
		}

		.dropdown-wrapper {
			display: none;
		}
	}

	@media (min-width: 900px) {
		.banner {
			font-size: 40px;
		}

		.links {
			font-size: 24px;
		}
	}
</style>
