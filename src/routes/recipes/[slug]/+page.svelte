<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    import SEO from '$lib/components/SEO.svelte';
    import StructuredData from '$lib/components/StructuredData.svelte';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import { createRecipeSchema } from '$lib/utils';
    import { ChefHat, CookingPot, Clock, Minus, Plus } from '@lucide/svelte';
    import { Duration } from 'luxon';
    import type { Component } from 'svelte';

    let { data } = $props();
    const { recipe } = data;

    const recipeSchema = createRecipeSchema(recipe);
    let servings = $state(recipe.servings);
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

<Breadcrumb
    items={[
        { name: 'Home', path: '/' },
        { name: 'Recipes', path: '/recipes' },
        { name: recipe.name, path: `/recipes/${recipe.slug}` }
    ]}
/>

<Card.Root class="my-2">
    <Card.Header>
        <div class="relative">
            <img
                class="fade-bottom max-h-128 w-full rounded-md object-cover select-none"
                src={recipe.image}
                alt={recipe.name}
            />

            <!-- Overlay text on large screens, stacked below on small -->
            <div class="px-4 sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-end">
                <Card.Title class="my-2 text-3xl leading-tight font-bold min-[1000px]:text-6xl">
                    <h1>{recipe.name}</h1>
                </Card.Title>
                <Card.Description
                    class="text-lg text-muted-foreground italic min-[1000px]:text-3xl"
                >
                    {recipe.description}
                </Card.Description>
            </div>
        </div>
    </Card.Header>

    <Card.Content>
        <!-- Time badges – now using the icons directly -->
        <div class="mb-4 flex flex-wrap gap-2">
            {#snippet stepTime(Icon: Component, label: string, time: string)}
                <Badge variant="secondary" class="transition hover:scale-105">
                    <Icon />
                    {label}:
                    <time datetime={time}>
                        {Duration.fromISO(time).toHuman()}
                    </time>
                </Badge>
            {/snippet}

            {@render stepTime(ChefHat, 'Preparation time', recipe.prep_time)}
            {@render stepTime(CookingPot, 'Cooking time', recipe.cook_time)}
            {@render stepTime(Clock, 'Total time', recipe.total_time)}
        </div>

        <div class="mb-1 text-3xl font-semibold">
            Servings:
            <div class="mx-2 inline-flex gap-2">
                <Button
                    variant="secondary"
                    size="icon-sm"
                    class="cursor-pointer rounded-full transition-transform hover:scale-115"
                    disabled={servings === 1}
                    onclick={() => {
                        if (servings > 1) servings--;
                    }}
                >
                    <Minus />
                </Button>
                <span class="font-mono">
                    {servings}
                </span>
                <Button
                    variant="secondary"
                    size="icon-sm"
                    class="cursor-pointer rounded-full transition-transform hover:scale-115"
                    onclick={() => servings++}
                >
                    <Plus />
                </Button>
            </div>
        </div>
        <div class="flex flex-wrap gap-6">
            <section class="min-w-0 flex-1 basis-sm" id="ingredients">
                <h2 class="mb-1 text-3xl font-semibold">Ingredients:</h2>
                <ul class="ms-4 list-inside list-disc">
                    {#each recipe.ingredients as ingredient}
                        <li>
                            {#if ingredient.quantity}
                                {Number(
                                    (servings * (ingredient.quantity / recipe.servings)).toFixed(2)
                                )}
                                {ingredient.unit}
                                {ingredient.name}
                            {:else}
                                {ingredient.unit} {ingredient.name}
                            {/if}
                        </li>
                    {/each}
                </ul>
            </section>

            <section class="min-w-0 flex-1 basis-sm" id="steps">
                <h2 class="mb-1 text-3xl font-semibold">Steps:</h2>
                <ol class="ms-4 list-inside list-decimal">
                    {#each recipe.steps as step}
                        <li>{step}</li>
                    {/each}
                </ol>
            </section>
        </div>
    </Card.Content>

    <Card.Footer>
        <div class="flex w-full justify-between gap-4">
            <div class="flex flex-wrap gap-2">
                <p class="text-muted-foreground italic">Tags:</p>
                {#each recipe.tags as tag}
                    <Badge class="cursor-pointer transition hover:scale-105">
                        {tag}
                    </Badge>
                {/each}
            </div>
            <time datetime={recipe.date} class="text-sm text-muted-foreground italic">
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(new Date(recipe.date))}
            </time>
        </div>
    </Card.Footer>
</Card.Root>

<style>
    .fade-bottom {
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
</style>
