<script lang="ts">
    export let data;
    const { recipes } = data;

    import { Badge } from '$lib/components/ui/badge';
    import * as Card from '$lib/components/ui/card';
    import * as Tooltip from '$lib/components/ui/tooltip';
    import * as Breadcrumb from '$lib/components/ui/breadcrumb';
    import LinkButton from '$lib/components/LinkButton.svelte';
    import RecipeCard from '$lib/components/RecipeCard.svelte';
    import { Duration } from 'luxon';
    import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
    title="Recipes"
    description="Browse our collection of easy-to-follow recipes, from quick meals to gourmet dishes."
    canonical="/recipes"
    keywords="recipes, cooking, food, meals"
/>

<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>Recipes</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>

<h1 class="my-2 text-4xl font-bold">Recipes</h1>

{#if recipes.length === 0}
    <p class="text-muted-foreground italic">No recipes found.</p>
{:else}
    <ul class="recipe-grid">
        {#each recipes as recipe}
            <li>
                <RecipeCard {recipe} />
            </li>
        {/each}
    </ul>
{/if}

<style>
    .recipe-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
        grid-auto-rows: 1fr;
        gap: 1.5rem;
    }
</style>