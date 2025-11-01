<script>
	export let data;
	const { recipes } = data;

	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import LinkButton from '$lib/components/ui/LinkButton.svelte';
	import { cn } from '$lib/utils.js';

	// difficulty mapping helper
	const difficultyMap = [
		{ color: 'bg-green-500', label: 'easy' },
		{ color: 'bg-yellow-400', label: 'intermediate' },
		{ color: 'bg-red-500', label: 'hard' }
	];
</script>

<h1>Recipes</h1>

{#if recipes.length === 0}
	<p>No recipes found.</p>
{:else}
	<ul class="recipe-grid">
		{#each recipes as recipe}
			<li>
				<Card.Root class="transition hover:scale-102">
					<Card.Header>
						<img class="mb-1 rounded-md" src={`/images/${recipe.slug}.jpg`} alt={recipe.name} />
						<Card.Title>
							{recipe.name}
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger
										class={cn(
											'ms-1 inline-flex size-2 rounded-full',
											difficultyMap[recipe.difficulty]?.color
										)}
									/>
									<Tooltip.Content>
										<p>This recipe is {difficultyMap[recipe.difficulty]?.label}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						</Card.Title>
						<Card.Description>{recipe.description}</Card.Description>
					</Card.Header>
					<Card.Content class="-my-2 flex flex-wrap gap-1">
						{#each recipe.tags as tag}
							<Badge class="cursor-pointer transition hover:scale-105">{tag}</Badge>
						{/each}
					</Card.Content>
					<Card.Footer>
						<LinkButton href={`/recipes/${recipe.slug}`} class="w-full">View recipe</LinkButton>
					</Card.Footer>
				</Card.Root>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.recipe-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
		gap: 1.5rem;
	}
</style>
