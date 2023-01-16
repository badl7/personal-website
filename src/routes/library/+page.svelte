<script lang="ts">
	import BookSection from './BookSection.svelte';
	import QuoteSection from './QuoteSection.svelte';
</script>

<svelte:head>
	<title>Betül Gürbüz - Library</title>

	<meta name="twitter:title" content="Betül Gürbüz - Library" />
</svelte:head>

<div class="library-container">
	<div class="quotes-container">
		<h2>Favorite Quotes</h2>
		<QuoteSection />
	</div>

	<div class="books-container">
		<h2>Favorite Books</h2>
		<BookSection />
	</div>
</div>

<style>
	.library-container {
		padding: 50px 25px;
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
	.quotes-container {
		display: flex;
		flex-direction: column;
	}
	.quotes-container h2 {
		color: var(--app-link-color);
	}
	.books-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@media (min-width: 1360px) {
		.quotes-container {
			flex-wrap: nowrap;
			grid-gap: 0.25rem;
		}
	}
</style>
