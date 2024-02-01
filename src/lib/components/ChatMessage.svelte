<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai';
	export let type: ChatCompletionRequestMessageRoleEnum;
	export let message: string | undefined;

	const isUser = type === 'user';
</script>

<div class="chat {isUser && 'chat-end'} ">
	<div class="chat-header {isUser && 'chat-header-end'} ">
		<img
			class="chat-image"
			src="https://ui-avatars.com/api/?name={isUser ? 'Me' : 'Hari'}"
			alt="{type} avatar"
		/>
		<h4>{isUser ? 'Me' : 'Hari'}</h4>
	</div>
	<div class="chat-bubble {isUser ? 'chat-bubble-primary' : 'chat-bubble-secondary'}">
		<p>{message}</p>
	</div>
</div>

<style>
	.chat {
		background-color: var(--app-background-color);
		display: flex;
		gap: 8px;
		padding: 4px;

		flex-direction: column;
	}
	.chat-end {
		align-items: flex-end;
	}
	.chat-image {
		width: 32px;
		border-radius: 50%;
	}
	.chat-header {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.chat-header h4 {
		font-size: small;
	}
	.chat-header-end {
		flex-direction: row-reverse;
	}
	.chat-bubble {
		padding: 4px 6px;
		border-radius: 8px;
	}
	.chat-bubble-primary {
		background-color: var(--app-foreground-color);
	}
	.chat-bubble-secondary {
		background-color: var(--app-primary-color);
	}
</style>
