<script lang="ts">
	import type { Quote } from '$lib/models/quote';
	import BookSection from './BookSection.svelte';
	import QuoteSection from './QuoteSection.svelte';

	const fetchQuotes = async () => {
		const res = await fetch('/api/quotes');
		const body = await res.json();
		return body as Quote[];
	};
</script>

<svelte:head>
	<title>Betül Gürbüz - Library</title>

	<meta name="twitter:title" content="Betül Gürbüz - Library" />
</svelte:head>

<div class="library-container">
	<div class="quotes-container">
		<h2>Favorite Quotes</h2>
		{#await fetchQuotes()}
			<h1>...</h1>
		{:then quotes}
			<QuoteSection {quotes} />
		{:catch err}
			<h1>An error occured</h1>
		{/await}
	</div>

	<div class="books-container">
		<h2>Favorite Books</h2>
		<!-- <BookSection /> -->
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
		color: var(--app-header-color);
	}
	.books-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.books-container h2 {
		color: var(--app-header-color);
	}
	@media (min-width: 1360px) {
		.quotes-container {
			flex-wrap: nowrap;
			grid-gap: 0.25rem;
		}
	}
</style>
