import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
import node from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $stores: resolve('./src/stores'),
          $assets: resolve('./src/assets'),
        },
      },
    },
  },
}

export default config
