import type { Recipe } from '$lib/types/recipe';

export async function load() {
    const modules = import.meta.glob<Recipe>('$lib/recipes/*.json', { eager: true });

    const recipes = Object.entries(modules).map(([path, recipe]) => {
        const fileName = path.split('/').pop() ?? '';
        const slug = fileName.replace('.json', '');

        return {
            slug,
            ...recipe
        };
    });

    return { recipes };
}
