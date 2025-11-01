<script lang="ts">
	import type { Recipe } from '$lib/types/recipe';
	export let data: { recipe: Recipe };
    const { recipe } = data;
</script>

<h1>{recipe.name}</h1>
