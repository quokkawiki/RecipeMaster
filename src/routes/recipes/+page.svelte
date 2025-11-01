<script>
	export let data;
    const { recipes } = data;
</script>

<h1>Recipes</h1>

{#if recipes.length === 0}
	<p>No recipes found.</p>
{:else}
	<ul>
		{#each recipes as recipe}
			<li>
				<a href={`/recipes/${recipe.slug}`}>{recipe.name}</a>
			</li>
		{/each}
	</ul>
{/if}
