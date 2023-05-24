import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
    css: [resolve('./assets/custom.css')],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
})
