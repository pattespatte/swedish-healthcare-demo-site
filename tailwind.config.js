/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: 'class',
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
		// Complementary colors
		'bg-beige', 'bg-lightblue',
		// Functional colors
		'bg-success', 'bg-info', 'bg-warning', 'bg-error',
		'text-success', 'text-info', 'text-warning', 'text-error',
		'border-success', 'border-info', 'border-warning', 'border-error',
		// Graphics colors
		'bg-graphics-blue', 'bg-graphics-lightblue', 'bg-graphics-green', 'bg-graphics-lightgreen',
		'bg-graphics-brown', 'bg-graphics-lightbrown',
		'text-graphics-blue', 'text-graphics-lightblue', 'text-graphics-green', 'text-graphics-lightgreen',
		'text-graphics-brown', 'text-graphics-lightbrown',
		'border-graphics-blue', 'border-graphics-lightblue', 'border-graphics-green', 'border-graphics-lightgreen',
		'border-graphics-brown', 'border-graphics-lightbrown',
		// Text colors
		'text-primary', 'text-secondary', 'text-light', 'text-muted', 'text-inverse',
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
				// Swedish Healthcare Brand Colors
				primary: {
					50: '#E6F2FF', // Lightest primary blue
					100: '#CCE0FF', // Light primary blue
					200: '#99CEFF', // Medium-light primary blue
					300: '#66B8FF', // Medium primary blue
					400: '#33A5FF', // Medium-dark primary blue
					500: '#0092FF', // Primary blue (brand color)
					600: '#007CE8', // Dark primary blue
					700: '#0066CC', // Darker primary blue
					800: '#232948', // Darkest primary blue
					900: '#081130', // Almost black primary blue
				},
				secondary: {
					50: '#FFF8E1', // Lightest secondary yellow
					100: '#FFEBCC', // Light secondary yellow
					200: '#FFDAB3', // Medium-light secondary yellow
					300: '#FFC999', // Medium secondary yellow
					400: '#FFB880', // Medium-dark secondary yellow
					500: '#FF9666', // Secondary yellow (brand color)
					600: '#E67E50', // Dark secondary yellow
					700: '#CC6633', // Darker secondary yellow
					800: '#EDF06F', // Special secondary yellow (from original)
				},
				// Complementary Colors
				beige: '#F0ECE4', // Beige background
				lightblue: '#D3DEEA', // Light blue background
				// Functional Colors
				success: '#10B981', // Success (brand color)
				info: '#3B82F6', // Info (brand color)
				warning: '#F59E0B', // Warning (brand color)
				error: '#EF4444', // Error (brand color)
				// Graphics Colors
				graphics: {
					blue: '#1849A9', // Graphics blue
					lightblue: '#598DFF', // Graphics light blue
					green: '#077353', // Graphics green
					lightgreen: '#2DA682', // Graphics light green
					brown: '#964100', // Graphics brown
					lightbrown: '#C9844F', // Graphics light brown
				},
				// Neutral Colors
				neutral: {
					50: '#F9FAFB', // Lightest neutral
					100: '#F3F4F6', // Light neutral
					200: '#E5E7EB', // Medium-light neutral
					300: '#D1D5DB', // Medium neutral
					400: '#9CA3AF', // Medium-dark neutral
					500: '#6B7280', // Neutral
					600: '#4B5563', // Dark neutral
					700: '#374151', // Darker neutral
					800: '#1F2937', // Darkest neutral
					900: '#111827', // Almost black neutral
				},
				// Text Colors
				text: {
					primary: '#232948', // Primary text
					secondary: '#081130', // Secondary text
					light: '#6B7280', // Light text
					muted: '#9CA3AF', // Muted text
					inverse: '#FFFFFF', // Inverse text (for dark backgrounds)
				},
				// Dark mode specific colors
				dark: {
					bg: {
						primary: '#0f172a', // slate-900 - Main dark background
						secondary: '#1e293b', // slate-800 - Secondary dark background
						tertiary: '#334155', // slate-700 - Tertiary dark background
						quaternary: '#475569', // slate-600 - Quaternary dark background
					},
					text: {
						primary: '#f8fafc', // slate-50 - Primary dark text
						secondary: '#e2e8f0', // slate-200 - Secondary dark text
						muted: '#94a3b8', // slate-400 - Muted dark text
						inverse: '#0f172a', // slate-900 - Inverse dark text
					},
					border: {
						primary: '#334155', // slate-700 - Primary dark border
						secondary: '#475569', // slate-600 - Secondary dark border
					},
					hover: {
						bg: '#1e293b', // slate-800 - Hover background in dark mode
					}
				}
			}
		},
	},
	plugins: [],
}