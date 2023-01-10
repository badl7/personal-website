<div class="contact fade-out">
	<h1>
		<a href="mailto:betul.gurbuz.dev@gmail.com?subject=Mail from betulgurbuz.dev"
			>betul.gurbuz.dev@gmail.com</a
		>
	</h1>
</div>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 240px;
		grid-gap: 90px;
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
