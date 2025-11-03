<script lang="ts">
    import SEO from '$lib/components/SEO.svelte';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import RecipeGrid from '$lib/components/RecipeGrid.svelte';

    export let data;
    const { recipes } = data;
</script>

<SEO
    title="Recipes"
    description="Browse our collection of easy-to-follow recipes, from quick meals to gourmet dishes."
    canonical="/recipes"
    keywords="recipes, cooking, food, meals"
/>

<Breadcrumb items={[
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' }
]} />

<h1 class="my-2 text-4xl font-bold">Recipes</h1>

<RecipeGrid {recipes} />