import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import App from './App.vue'
import router from './router'
import PhosphorIconsVue from '@phosphor-icons/vue'

import './assets/main.css'

// Update <title>, meta description, and noindex robots tags for the current
// route. Runs client-side on every navigation; during prerender the snapshot
// is taken after these have executed, so the static HTML inherits the right
// head per route.
function upsertMetaTag(name: string, content: string): void {
	if (typeof document === 'undefined') return
	let tag = document.querySelector(`meta[name="${name}"]`)
	if (!tag) {
		tag = document.createElement('meta')
		tag.setAttribute('name', name)
		document.head.appendChild(tag)
	}
	tag.setAttribute('content', content)
}

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: () => void) => {
	if (to.meta.title) {
		document.title = to.meta.title as string
	}
	if (to.meta.description) {
		upsertMetaTag('description', to.meta.description as string)
	}
	// The site is intentionally blocked from indexing (demo/prototype).
	upsertMetaTag('robots', 'noindex, nofollow')
	upsertMetaTag('googlebot', 'noindex, nofollow')
	next()
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PhosphorIconsVue)
app.mount('#app')
