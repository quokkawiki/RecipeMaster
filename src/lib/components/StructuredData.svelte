<script lang="ts">
    export let data: object | object[];
    
    const jsonLdString = JSON.stringify(Array.isArray(data) ? data : [data]);
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>