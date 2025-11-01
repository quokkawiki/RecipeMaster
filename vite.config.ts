import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit()],
    optimizeDeps: {
        exclude: ['bits-ui'] // don't try to prebundle it
    },
    ssr: {
        noExternal: ['bits-ui'] // let Vite process bits-ui for SSR
    }
});
