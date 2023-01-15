<script lang="ts">
	let quotes = [
		{ author: 'Albert Einstein', text: 'Imagination is more important than knowledge.' },
		{
			author: 'Steve Jobs',
			text: 'Design is not just what it looks like and feels like. Design is how it works.'
		},
		{
			author: 'Mahatma Gandhi',
			text: 'The weak can never forgive. Forgiveness is the attribute of the strong.'
		},
		{
			author: 'Ada Lovelace',
			text: 'I think imagination is divided into two main branches: First, the ability of reunite. These combinations reunites objects, ideas, concepts in a novel, original, limitless and diverse way. They find the common points even if there is no significant relationship between objects. Secondly, it helps to think and imagine the objects which is far away, invisible or is not exist in our body and consciousness.'
		},
		{
			author: 'Michael Faraday',
			text: 'Lectures which really teach will never be popular; lectures which are popular will never really teach.'
		}
	];
	let currentQuoteIndex = 0;
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
    <div class="left" style="width: {timeoutCompletePercentage}%"></div>
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
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 50%; /* or any value you want */
	}
	.footer-quote {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 10px 50px;
		justify-content: flex-end;
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
    background-color: #FF3535;
  }

	@media (min-width: 1360px) {
		.quote-card {
			flex-wrap: nowrap;
			grid-gap: 1rem;
		}
	}
</style>
