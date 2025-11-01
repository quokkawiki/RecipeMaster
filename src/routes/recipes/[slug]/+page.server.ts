import { error } from '@sveltejs/kit';
import type { Recipe } from '$lib/types/recipe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob<Recipe>('$lib/recipes/*.json', { eager: true });
	const recipe = modules[`/src/lib/recipes/${params.slug}.json`];

	if (!recipe) {
		throw error(404, `Recipe not found.`);
	}

	return { recipe };
};
