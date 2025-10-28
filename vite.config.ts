import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			name: 'create-nojekyll',
			closeBundle() {
				// Create .nojekyll file in dist folder
				writeFileSync('dist/.nojekyll', '')
			}
		}
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	base: process.env.NODE_ENV === 'production' ? process.env.VITE_BASE_URL || '/swedish-healthcare-demo-site/' : '/',
	build: {
		outDir: 'dist'
	},
	ssr: {
		noExternal: []
	}
})