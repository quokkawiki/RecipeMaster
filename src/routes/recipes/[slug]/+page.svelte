<script lang="ts">
    import SEO from '$lib/components/SEO.svelte';
    import StructuredData from '$lib/components/StructuredData.svelte';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import { createRecipeSchema } from '$lib/utils';

    export let data;
    const { recipe } = data;

    const recipeSchema = createRecipeSchema(recipe);
</script>

<SEO
    title={recipe.name}
    description={recipe.description}
    image={recipe.image}
    imageAlt={recipe.name}
    publishedTime={recipe.date}
    keywords={recipe.tags.join()}
/>

<StructuredData data={recipeSchema} />

<Breadcrumb items={[
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: recipe.name, path: `/recipes/${recipe.slug}` }
]} />

<div class="relative my-2">
    <img class="fade-bottom w-full rounded-xl select-none" src={recipe.image} alt={recipe.name} />
    <div class="absolute inset-0 flex flex-col justify-end p-4">
        <h1 class="text-6xl font-bold my-2">{recipe.name}</h1>
        <p class="text-3xl text-muted-foreground italic">{recipe.description}</p>
    </div>
</div>

<style>
    .fade-bottom {
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0));
    }
</style>
