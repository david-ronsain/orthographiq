/// <reference types='vitest' />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig({
	root: __dirname,
	cacheDir: '../../node_modules/.vite/apps/front',

	server: {
		port: 3001,
		host: 'localhost',
	},

	preview: {
		port: 3101,
		host: 'localhost',
	},

	plugins: [vue(), nxViteTsPaths(), vuetify({ autoImport: true })],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },

	build: {
		outDir: '../../dist/apps/front',
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},

	test: {
		globals: true,
		server: {
			deps: {
				inline: ['vuetify'],
			},
		},
		cache: {
			dir: '../../node_modules/.vitest',
		},
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

		reporters: ['default'],
		coverage: {
			reportsDirectory: '../../coverage/apps/front',
			provider: 'v8',
		},
	},
})
