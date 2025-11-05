<script lang="ts">
    import SEO from '$lib/components/SEO.svelte';
    import * as Card from '$lib/components/ui/card';
    import { ChefHat, Clock, Star, ArrowRight } from '@lucide/svelte';
    import Icon from '$lib/assets/icon.svelte';
    import LinkButton from '$lib/components/LinkButton.svelte';
    import RecipeCard from '$lib/components/RecipeCard.svelte';

    let { data } = $props();
    const { featuredRecipes, totalRecipes, averageTime } = data;
</script>

<SEO />

<!-- Hero Section -->
<section class="relative mb-8 overflow-hidden rounded-lg">
    <div class="flex min-h-[400px] flex-col items-center justify-center px-6 py-16 text-center">
        <div class="mb-4 flex items-center gap-2">
            <Icon class="size-16" />
        </div>
        <h1 class="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Welcome to RecipeMaster
        </h1>
        <p class="mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            Discover delicious recipes for every occasion. From quick weeknight dinners to impressive gourmet dishes.
        </p>
        <div class="flex flex-wrap gap-4">
            <LinkButton size="lg" class="text-lg" href="/recipes">
                Browse All Recipes
                <ArrowRight />
            </LinkButton>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
    <Card.Root class="flex-1 text-center transition hover:scale-102">
        <Card.Content class="pt-6">
            <ChefHat class="mx-auto mb-2 h-12 w-12 text-primary" />
            <p class="text-3xl font-bold">{totalRecipes}</p>
            <p class="text-muted-foreground">Recipes</p>
        </Card.Content>
    </Card.Root>
    
    <Card.Root class="flex-1 text-center transition hover:scale-102">
        <Card.Content class="pt-6">
            <Clock class="mx-auto mb-2 h-12 w-12 text-primary" />
            <p class="text-3xl font-bold">{averageTime}</p>
            <p class="text-muted-foreground">Average Time</p>
        </Card.Content>
    </Card.Root>
    
    <Card.Root class="flex-1 text-center transition hover:scale-102">
        <Card.Content class="pt-6">
            <Star class="mx-auto mb-2 h-12 w-12 text-primary" />
            <p class="text-3xl font-bold">Easy</p>
            <p class="text-muted-foreground">To Follow</p>
        </Card.Content>
    </Card.Root>
</section>

<!-- Featured Recipes Section -->
<section class="mb-12">
    <div class="mb-6 flex items-center justify-between">
        <h2 class="text-4xl font-bold">Featured Recipes</h2>
        <LinkButton variant="ghost" href="/recipes">
            View All
            <ArrowRight />
        </LinkButton>
    </div>
    
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        {#each featuredRecipes as recipe}
            <RecipeCard {recipe} />
        {/each}
    </div>
</section>