<script lang="ts">
	import type { Quote } from "$lib/models/quote";

	export let quotes: Quote[];
	
	export let currentQuoteIndex = 0;
	let timeoutCompleteTime = 0;
	let timeoutCompletePercentage = 0;
	let latestPercentageInterval: NodeJS.Timer;

	const setupQuoteTimeout = () => {
		const timeoutTime = quotes[currentQuoteIndex].text.length * 100;
		if (latestPercentageInterval) {
			clearInterval(latestPercentageInterval);
			timeoutCompletePercentage = 0;
			timeoutCompleteTime = 0;
		}
		latestPercentageInterval = setupCompletePercentage(timeoutTime);
		setTimeout(() => {
			currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
			setupQuoteTimeout();
		}, timeoutTime);
	};

	const setupCompletePercentage = (total: number) => {
		return setInterval(() => {
			timeoutCompleteTime += 100;
			timeoutCompletePercentage = (timeoutCompleteTime / total) * 100;
		}, 100);
	};

	setupQuoteTimeout();
</script>

<div class="quote-card">
	<div class="head-quote">
		<p class="quote">
			''{quotes[currentQuoteIndex].text}''
		</p>
	</div>
	<div class="footer-quote">
		<h3>-{quotes[currentQuoteIndex].author}</h3>
	</div>
	<div class="timer">
		<div class="left" style="width: {timeoutCompletePercentage}%" />
	</div>
</div>

<style>
	.quote-card {
		display: flex;
		flex-direction: column;
		padding: 50px 20px 10px;
		gap: 1rem;
	}
	.head-quote {
		text-align: center;
	}
	.quote {
		font-size: 18px;
	}
	.footer-quote {
		text-align: end;
		padding-right: 50px;
	}
	.footer-quote h3 {
		font-weight: 700;
	}
	.timer {
		width: 100%;
		height: 2.5px;
		background-color: var(--app-primary-color);
		position: relative;
	}
	.left {
		position: absolute;
		height: 3px;
		left: 0;
		top: 0;
		background-color: #ff3535;
	}

	@media (min-width: 1360px) {
		.quote-card {
			flex-wrap: nowrap;
			grid-gap: 1rem;
		}
	}
</style>
