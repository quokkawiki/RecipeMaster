export interface Ingredient {
	name: string;
	quantity?: number;
	unit?: string;
}

export interface Recipe {
	name: string;
	description: string;
	servings: number;
	prep_time: string;
	cook_time: string;
	total_time: string;
	difficulty: number;
	tags: string[];
	ingredients: Ingredient[];
	steps: string[];
	date: string;
}
