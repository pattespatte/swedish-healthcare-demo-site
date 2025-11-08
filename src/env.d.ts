// / <reference types="vite/client" />

interface ImportMetaEnv {
	readonly SSR?: boolean
	readonly BASE_URL?: string
	readonly MODE?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

// SVG module declaration
declare module '*.svg' {
	const content: string
	export default content
}

// PNG module declaration
declare module '*.png' {
	const src: string
	export default src
}

// JPG module declaration
declare module '*.jpg' {
	const src: string
	export default src
}

// GIF module declaration
declare module '*.gif' {
	const src: string
	export default src
}
