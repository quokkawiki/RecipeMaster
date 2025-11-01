<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import faviconDark from '$lib/assets/favicon-dark.svg';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="icon" href={faviconDark} media="(prefers-color-scheme: dark)">
</svelte:head>

<ModeWatcher />

<ThemeSwitcher />
{@render children()}
