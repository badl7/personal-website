<div class="contact fade-out">
	<h1>
		<a href="mailto:betul.gurbuz.dev@gmail.com?subject=Mail from betulgurbuz.dev"
			>betul.gurbuz.dev@gmail.com</a
		>
	</h1>
</div>

<svelte:head>
	<title>Betül Gürbüz - Contact</title>

	<meta name="twitter:title" content="Betül Gürbüz - Contact" />
</svelte:head>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 240px;
		grid-gap: 90px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.contact a {
		color: #FF3535;
	}
	.contact a:hover {
		text-decoration: underline;
	}
	.contact h1 {
		font-size: 42px;
	}
	@media (max-width: 615px) {
		.contact {
			grid-gap: 40px;
		}
		.contact h1 {
			font-size: 24px;
		}
	}
	@media (max-width: 450px) {
		.contact {
			grid-gap: 20px;
		}
		.contact h1 {
			font-size: 18px;
		}
	}
</style>
