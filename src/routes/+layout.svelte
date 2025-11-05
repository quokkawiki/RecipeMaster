<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    import faviconDark from '$lib/assets/favicon-dark.svg';
    import { ModeWatcher } from 'mode-watcher';
    import SEO from '$lib/components/SEO.svelte';
    import Header from '$lib/components/Header.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="icon" href={faviconDark} media="(prefers-color-scheme: dark)" />
</svelte:head>

<ModeWatcher />

<Header />
<main class="px-12 sm:px-24 py-6">
	{@render children()}
</main>