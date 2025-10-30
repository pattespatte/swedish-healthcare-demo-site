/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['Roboto Slab', 'serif'],
			},
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					300: '#93c5fd',
					500: '#2e60ff',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
				},
				success: '#10b981',
				warning: '#f59e0b',
				error: '#ef4444',
				neutral: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#081130',
				}
			}
		},
	},
	plugins: [],
}