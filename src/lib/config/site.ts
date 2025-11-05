import { dev } from '$app/environment';

export const siteConfig = {
    url: dev ? 'http://localhost:5173' : 'https://recipes.quokka.wiki',
    name: 'RecipeMaster',
    author: 'Daniel Jacob Butcher'
} as const;