<script lang="ts">
    import type { Recipe } from '$lib/types/recipe';
    import * as Breadcrumb from '$lib/components/ui/breadcrumb';
    import SEO from '$lib/components/SEO.svelte';

    export let data: { recipe: Recipe & { image: string } };
    const { recipe } = data;

    const jsonLd = {
        '@context': 'https://schema.org/',
        '@type': 'Recipe',
        name: recipe.name,
        description: recipe.description,
        author: { '@type': 'Person', name: 'John Smith' },
        datePublished: recipe.date,
        prepTime: recipe.prep_time,
        cookTime: recipe.cook_time,
        totalTime: recipe.total_time,
        recipeYield: `${recipe.servings} servings`,
        keywords: recipe.tags?.join(', '),
        recipeIngredient: recipe.ingredients.map((i) => {
            if (!i.quantity && !i.unit) {
                return i.name;
            }

            const ingredient: any = {
                '@type': 'PropertyValue',
                name: i.name
            };

            if (i.quantity !== undefined && i.quantity !== null) {
                ingredient.value = i.quantity;
            }

            if (i.unit) {
                ingredient.unitText = i.unit;
            }

            return ingredient;
        }),
        recipeInstructions: recipe.steps.map((step, index) => ({
            '@type': 'HowToStep',
            text: step,
            position: index + 1
        })),
        image: recipe.image
    };

    const jsonLdString = JSON.stringify(jsonLd);
</script>

<SEO 
  title={recipe.name}
  description={recipe.description}
  image={recipe.image}
  imageAlt={recipe.name}
  publishedTime={recipe.date}
  keywords={recipe.tags.join()}
/>

<svelte:head>
    {@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>

<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/recipes">Recipes</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>{recipe.name}</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>


<div class="relative my-2">
  <img
    class="fade-bottom rounded-xl w-full select-none"
    src={recipe.image}
    alt={recipe.name}
  />
  <div class="absolute inset-0 flex flex-col justify-end p-4">
    <h1 class="font-bold text-6xl">{recipe.name}</h1>
    <h2 class="text-3xl italic text-muted-foreground">{recipe.description}</h2>
  </div>
</div>



<style>
  .fade-bottom {
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 35%, rgba(0,0,0,0));
  }
</style>