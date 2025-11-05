// src/routes/+page.server.ts
import type { Recipe } from '$lib/types/recipe';
import type { PageServerLoad } from './$types';
import { siteConfig } from '$lib/config/site';
import { Duration } from 'luxon';

export const load: PageServerLoad = async () => {
    const modules = import.meta.glob<Recipe>('$lib/recipes/*.json', { eager: true });

    const recipes = Object.entries(modules).map(([path, recipe]) => {
        const fileName = path.split('/').pop() ?? '';
        const slug = fileName.replace('.json', '');

        return {
            slug,
            image: `${siteConfig.url}/images/${slug}.jpg`,
            ...recipe
        };
    });

    // Get featured recipes (first 6)
    const featuredRecipes = recipes.slice(0, 3);

    // Calculate average total time
    const totalMinutes = recipes.reduce((sum, recipe) => {
        const duration = Duration.fromISO(recipe.total_time);
        return sum + duration.as('minutes');
    }, 0);

    const avgMinutes = Math.round(totalMinutes / recipes.length);
    const averageTime = Duration.fromObject({ minutes: avgMinutes }).toHuman();

    return {
        featuredRecipes,
        totalRecipes: recipes.length,
        averageTime
    };
};