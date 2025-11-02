// src/routes/recipes/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { Recipe } from '$lib/types/recipe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;
    const modules = import.meta.glob<Recipe>('$lib/recipes/*.json', { eager: true });
    const recipeData = modules[`/src/lib/recipes/${slug}.json`];

    if (!recipeData) {
        throw error(404, `Recipe not found.`);
    }

    const recipe = { ...recipeData, image: `http://localhost:5173/images/${slug}.jpg` };

    return { recipe };
};
