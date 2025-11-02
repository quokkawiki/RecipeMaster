<script lang="ts">
    interface Props {
        title?: string;
        description?: string;
        canonical?: string;
        image?: string;
        imageAlt?: string;
        type?: 'website' | 'article';
        publishedTime?: string;
        author?: string;
        keywords?: string;
        noindex?: boolean;
    }

    const {
        title,
        description,
        canonical,
        image = 'http://localhost:5173/images/opengraph.png',
        imageAlt = 'Logo of RecipeMaster',
        type = 'website',
        publishedTime,
        author,
        keywords,
        noindex = false
    }: Props = $props();

    // Construct title with site name suffix
    const fullTitle = title ? `${title} | RecipeMaster` : 'RecipeMaster';
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="title" content={fullTitle} />
    {#if description}
        <meta name="description" content={description} />
    {/if}
    {#if keywords}
        <meta name="keywords" content={keywords} />
    {/if}
    {#if author}
        <meta name="author" content={author} />
    {/if}
    {#if noindex}
        <meta name="robots" content="noindex, nofollow" />
    {/if}
    {#if canonical}
        <link rel="canonical" href={canonical} />
    {/if}

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:title" content={fullTitle} />
    {#if description}
        <meta property="og:description" content={description} />
    {/if}
    {#if canonical}
        <meta property="og:url" content={canonical} />
    {/if}
    {#if image}
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={imageAlt} />
    {/if}
    {#if publishedTime && type === 'article'}
        <meta property="article:published_time" content={publishedTime} />
        {#if author}
            <meta property="article:author" content={author} />
        {/if}
    {/if}

    <!-- Twitter -->
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={fullTitle} />
    {#if description}
        <meta name="twitter:description" content={description} />
    {/if}
    {#if image}
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={imageAlt} />
    {/if}
</svelte:head>