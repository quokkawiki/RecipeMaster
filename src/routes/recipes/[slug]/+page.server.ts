import { error } from '@sveltejs/kit';
import type { Recipe } from '$lib/types/recipe';
import type { PageServerLoad } from './$types';
import { siteConfig } from '$lib/config/site';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;
    const modules = import.meta.glob<Recipe>('$lib/recipes/*.json', { eager: true });
    const recipeData = modules[`/src/lib/recipes/${slug}.json`];

    if (!recipeData) {
        throw error(404, 'Recipe not found.');
    }

    const recipe = { 
        ...recipeData, 
        image: `${siteConfig.url}/images/${slug}.jpg`, 
        slug
    };

    return { recipe };
};