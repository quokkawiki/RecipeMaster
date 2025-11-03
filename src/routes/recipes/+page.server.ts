// src/routes/recipes/+page.server.ts
import type { Recipe } from '$lib/types/recipe';
import type { PageServerLoad } from './$types';
import { siteConfig } from '$lib/config/site';

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

    return { recipes };
};