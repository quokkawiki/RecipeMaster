import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// src/lib/utils/structured-data.ts
import type { Recipe } from '$lib/types/recipe';
import { siteConfig } from '$lib/config/site';

interface BreadcrumbItem {
    name: string;
    path: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.path}`
        }))
    };
}

export function createRecipeSchema(recipe: Recipe & { slug: string; image: string }) {
    return {
        '@context': 'https://schema.org/',
        '@type': 'Recipe',
        name: recipe.name,
        description: recipe.description,
        author: { '@type': 'Person', name: siteConfig.author },
        datePublished: recipe.date,
        prepTime: recipe.prep_time,
        cookTime: recipe.cook_time,
        totalTime: recipe.total_time,
        recipeYield: `${recipe.servings} servings`,
        keywords: recipe.tags?.join(', '),
        recipeIngredient: recipe.ingredients.map(i => 
            i.quantity || i.unit 
                ? `${i.quantity || ''} ${i.unit || ''} ${i.name}`.trim()
                : i.name
        ),
        recipeInstructions: recipe.steps.map((step, index) => ({
            '@type': 'HowToStep',
            text: step,
            position: index + 1
        })),
        image: recipe.image
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
