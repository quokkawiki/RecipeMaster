<!-- src/lib/components/RecipeGrid.svelte -->
<script lang="ts">
    import type { Recipe } from '$lib/types/recipe';
    import RecipeCard from '$lib/components/RecipeCard.svelte';
    
    export let recipes: (Recipe & { slug: string })[];
</script>

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