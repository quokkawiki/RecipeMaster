import { dev } from '$app/environment';

export const siteConfig = {
    url: dev ? 'http://localhost:5173' : 'https://yourdomain.com',
    name: 'RecipeMaster',
    author: 'Daniel Jacob Butcher'
} as const;