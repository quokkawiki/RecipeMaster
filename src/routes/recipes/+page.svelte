<script lang="ts">
	export let data;
	const { recipes } = data;

	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { cn } from '$lib/utils.js';
	import { ChefHat, CookingPot, Clock } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { Duration } from 'luxon';

	// difficulty mapping helper
	const difficultyMap = [
		{ color: 'bg-green-500', label: 'easy' },
		{ color: 'bg-yellow-400', label: 'intermediate' },
		{ color: 'bg-red-500', label: 'difficult' }
	];

</script>


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
					<Card.Content class="-my-2">
						<div class="flex flex-wrap gap-2">
							{#snippet stepTime(icon: Component, label: string, time: string)}
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger>
												<Badge variant="secondary" class="inline-flex gap-1">
													<svelte:component this={icon} /><span class="sr-only">{label}</span>
													{Duration.fromISO(time).toHuman()}
												</Badge>
											</Tooltip.Trigger>
											<Tooltip.Content>
												<p>{label}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
							{/snippet}

							{@render stepTime(ChefHat, 'Preparation time', recipe.prep_time)}
							{@render stepTime(CookingPot, 'Cooking time', recipe.cook_time)}
							{@render stepTime(Clock, 'Total time', recipe.total_time)}
						</div>
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
