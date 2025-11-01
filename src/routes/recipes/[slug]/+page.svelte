<script lang="ts">
  import type { Recipe } from '$lib/types/recipe';

  export let data: { recipe: Recipe & { image: URL } };
  const { recipe } = data;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.name,
    "description": recipe.description,
    "author": { "@type": "Person", "name": "John Smith" },
    "datePublished": recipe.date,
    "prepTime": recipe.prep_time,
    "cookTime": recipe.cook_time,
    "totalTime": recipe.total_time,
    "recipeYield": `${recipe.servings} servings`,
    "keywords": recipe.tags?.join(", "),
    "recipeIngredient": recipe.ingredients.map(i => {
      if (!i.quantity && !i.unit) {
        return i.name;
      }

      const ingredient: any = {
        "@type": "PropertyValue",
        "name": i.name
      };

      if (i.quantity !== undefined && i.quantity !== null) {
        ingredient.value = i.quantity;
      }

      if (i.unit) {
        ingredient.unitText = i.unit;
      }

      return ingredient;
    }),
	"recipeInstructions": recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      "text": step,
      "position": index + 1
    })),
	"image": recipe.image
  };

  const jsonLdString = JSON.stringify(jsonLd);
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>

<h1>{recipe.name}</h1>
<p>{recipe.description}</p>
