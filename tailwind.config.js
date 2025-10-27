/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#eff6ff',
					500: '#3b82f6',
					700: '#1d4ed8',
				},
				success: '#10b981',
				warning: '#f59e0b',
				error: '#ef4444',
				neutral: {
					100: '#f3f4f6',
					200: '#e5e7eb',
					800: '#1f2937',
				}
			}
		},
	},
	plugins: [],
}