<script lang="ts">
    import { Badge } from '$lib/components/ui/badge';
    import * as Card from '$lib/components/ui/card';
    import * as Tooltip from '$lib/components/ui/tooltip';
    import LinkButton from '$lib/components/LinkButton.svelte';
    import { ChefHat, CookingPot, Clock, ImageIcon } from '@lucide/svelte';
    import type { Component } from 'svelte';
    import { Duration } from 'luxon';
    import type { Recipe } from '$lib/types/recipe';
    import RecipeDifficulty from '$lib/components/RecipeDifficulty.svelte';
    import ImagePlaceholder from './ImagePlaceholder.svelte';

    export let recipe: Recipe & { slug: string };
</script>

<Card.Root class="transition hover:scale-102">
    <Card.Header>
        <ImagePlaceholder
            class="rounded-md"
            src={`/images/${recipe.slug}.jpg`}
            alt={recipe.name}
        />
        <Card.Title>
            {recipe.name}
            <RecipeDifficulty {recipe} />
        </Card.Title>
        <Card.Description class="line-clamp-2">{recipe.description}</Card.Description>
    </Card.Header>
    <Card.Content class="-my-2">
        <div class="flex flex-wrap gap-2">
            {#snippet stepTime(Icon: Component, label: string, time: string)}
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <Badge
                                variant="secondary"
                                class="inline-flex cursor-pointer gap-1 transition hover:scale-105"
                            >
                                <Icon /><span class="sr-only">{label}</span>
                                <time dateTime={time}>
                                    {(() => {
                                        const { hours, minutes } = Duration.fromISO(time).toObject();
                                        return `${hours ? `${hours}h ` : ''}${minutes ? `${minutes}min` : ''}`;
                                    })()}
                                </time>
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
