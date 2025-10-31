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
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#232948',
					900: '#081130',
				},
				secondary: {
					50: '#f6f3ee',
					100: '#f2ede6',
					200: '#ede7de',
					300: '#e8e0d6',
					400: '#e3d9ce',
					500: '#ded2c6',
					600: '#d9cbbd',
					700: '#d4c4b5',
					800: '#edf06f',
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
					900: '#111827',
				}
			}
		},
	},
	plugins: [],
}