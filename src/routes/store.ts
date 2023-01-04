import { readable } from 'svelte/store';

export const dateTimeFormat = readable<Intl.DateTimeFormat>(
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	})
);
