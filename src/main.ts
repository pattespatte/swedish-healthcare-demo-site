import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import { routes } from './router'

import './assets/main.css'

// Export for SSG
export const createApp = ViteSSG(
	App,
	{
		routes,
		base: import.meta.env.BASE_URL
	},
	(ctx) => {
		// install plugins
		const app = ctx.app
		app.use(createPinia())
	}
)