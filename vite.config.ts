import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
    enhancedImages(),
    tailwindcss(),
    sveltekit(),
    devtoolsJson()
  ]
});
