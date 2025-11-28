import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import PhosphorIconsVue from '@phosphor-icons/vue'

import './assets/main.css'

// Export for SSG
export const createApp = ViteSSG(
	App,
	{
		routes,
		base: import.meta.env?.BASE_URL || '/'
	},
	(ctx: any) => {
		// install plugins
		const app = ctx.app
		app.use(createPinia())
		app.use(PhosphorIconsVue)

		// Set up head management for SSG
		if (ctx.router) {
			ctx.router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: () => void) => {
				// Set head properties for SSR/SSG
				if (to.meta.title && ctx.head) {
					ctx.head.title = to.meta.title as string

					// Initialize meta array if it doesn't exist
					if (!ctx.head.meta) {
						ctx.head.meta = []
					}

					// Update meta description
					const descriptionMeta = ctx.head.meta.find((meta: any) => meta.name === 'description')
					if (descriptionMeta) {
						descriptionMeta.content = (to.meta.description as string) || ''
					} else if (to.meta.description) {
						ctx.head.meta.push({
							name: 'description',
							content: to.meta.description as string
						})
					}
				}
				next()
			})

			// Update document title for client-side navigation
			ctx.router.afterEach((to: RouteLocationNormalized) => {
				if (typeof document !== 'undefined') {
					document.title = (to.meta.title as string) || 'Vårdcentralen Vårdportalen'
				}
			})
		}
	}
)
