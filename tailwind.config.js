/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	safelist: [
		// Primary colors
		'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400',
		'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
		'text-primary-50', 'text-primary-100', 'text-primary-200', 'text-primary-300', 'text-primary-400',
		'text-primary-500', 'text-primary-600', 'text-primary-700', 'text-primary-800', 'text-primary-900',
		'border-primary-50', 'border-primary-100', 'border-primary-200', 'border-primary-300', 'border-primary-400',
		'border-primary-500', 'border-primary-600', 'border-primary-700', 'border-primary-800', 'border-primary-900',
		// Secondary colors
		'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400',
		'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800',
		'text-secondary-50', 'text-secondary-100', 'text-secondary-200', 'text-secondary-300', 'text-secondary-400',
		'text-secondary-500', 'text-secondary-600', 'text-secondary-700', 'text-secondary-800',
		'border-secondary-50', 'border-secondary-100', 'border-secondary-200', 'border-secondary-300', 'border-secondary-400',
		'border-secondary-500', 'border-secondary-600', 'border-secondary-700', 'border-secondary-800',
		// Status colors
		'bg-success', 'bg-warning', 'bg-error',
		'text-success', 'text-warning', 'text-error',
		'border-success', 'border-warning', 'border-error',
		// Neutral colors
		'bg-neutral-50', 'bg-neutral-100', 'bg-neutral-200', 'bg-neutral-300', 'bg-neutral-400',
		'bg-neutral-500', 'bg-neutral-600', 'bg-neutral-700', 'bg-neutral-800', 'bg-neutral-900',
		'text-neutral-50', 'text-neutral-100', 'text-neutral-200', 'text-neutral-300', 'text-neutral-400',
		'text-neutral-500', 'text-neutral-600', 'text-neutral-700', 'text-neutral-800', 'text-neutral-900',
		'border-neutral-50', 'border-neutral-100', 'border-neutral-200', 'border-neutral-300', 'border-neutral-400',
		'border-neutral-500', 'border-neutral-600', 'border-neutral-700', 'border-neutral-800', 'border-neutral-900',
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