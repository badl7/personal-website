<script>
	import Dropdown from './Dropdown.svelte';
</script>

<nav>
	<a href="/" class="banner">Betül Gürbüz</a>
	<div class="links">
		<a href="/projects">Projects</a>
		<a href="/library">Library</a>
		<a href="/contact">Contact</a>
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
