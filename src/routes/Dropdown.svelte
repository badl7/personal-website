<script lang="ts">
    import Close from '$lib/icons/Close.svelte';
    import Menu from '$lib/icons/Menu.svelte';
    import { fly } from 'svelte/transition';
    import { clickOutside } from '$lib/actions/click-outside';

    let isDropdownOpened = false;
    let button: HTMLButtonElement;

    // Click Outside Handler'ı oluştur
    let clickOutsideHandler: { destroy: () => void } | undefined;

    $: {
        if (isDropdownOpened) {
            // Eğer dropdown açıksa, clickOutsideHandler'ı oluştur
            clickOutsideHandler = clickOutside(button);
        } else {
            // Eğer dropdown kapalıysa, clickOutsideHandler'ı yok et
            clickOutsideHandler?.destroy();
        }
    }
</script>

<button
    class="dropdown-trigger"
    on:click={() => (isDropdownOpened = !isDropdownOpened)}
    bind:this={button}
>
    {#if isDropdownOpened}
        <Close size={32} color="var(--app-link-color)" />
    {:else}
        <Menu size={32} color="var(--app-link-color)" />
    {/if}
</button>

{#if isDropdownOpened}
    <div
        class="dropdown-content"
        transition:fly={{ y: -100, duration: 300 }}
        use:clickOutside={button}
        on:clickOut={() => (isDropdownOpened = false)}
    >
        <a href="/projects">Projects</a>
        <a href="/library">Library</a>
        <a href="/contact">Contact</a>
    </div>
{/if}

<style>
    /* stil tanımlamaları */
    .dropdown-trigger {
        background-color: transparent;
        border: none;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .dropdown-content {
        position: absolute;
        display: flex;
        align-items: center;
        grid-gap: 0.5rem;
        flex-direction: column;
        left: 0;
        top: 0;
        width: 100%;
        height: fit-content;
        background-color: #2e130a;
        padding-top: 60px;
        padding-bottom: 10px;
        font-size: 21px;
    }
</style>
