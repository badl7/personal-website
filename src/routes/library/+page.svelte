<script lang="ts">
  import BookCard from './BookCard.svelte';
  import QuoteCard from './QuoteCard.svelte';
</script>

<div class="quotes-container">
  <h2>Completing me Quotations</h2>
  <div class="quotes">
    <QuoteCard />   
  </div>
</div>

<div class="books-container">
  <h2>Library</h2>
  <div class="books">
    <BookCard />
  </div>
</div>

<style>
  .quotes-container {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
         
  }
  .quotes-container h2 {
    color: var(--app-link-color);
  }
  .quotes {
    padding: 5px;
  }
  .books-container {
		display: flex;
		flex-direction: column;
		grid-gap: 50px 0px;
  }
  .books-container h2 {
    color: var(--app-link-color);
  }
  .books {
		padding: 20px;
  }

	@media (min-width: 1360px) {
		.quotes-container {
			flex-wrap: nowrap;
			grid-gap: 0.25rem;
		}
	}

	@media (min-width: 750px) {
		.books-container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

