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
		justify-content: center;
		align-items: center;
	}
	.contact a {
		color: var(--app-primary-color);
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
