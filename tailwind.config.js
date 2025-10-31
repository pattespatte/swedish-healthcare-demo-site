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
		// Complementary colors
		'bg-beige', 'bg-lightblue',
		// Functional colors
		'bg-success', 'bg-success-50', 'bg-success-100', 'bg-success-200', 'bg-success-300', 'bg-success-400',
		'bg-success-500', 'bg-success-600', 'bg-success-700',
		'text-success', 'text-success-50', 'text-success-100', 'text-success-200', 'text-success-300', 'text-success-400',
		'text-success-500', 'text-success-600', 'text-success-700',
		'border-success', 'border-success-50', 'border-success-100', 'border-success-200', 'border-success-300', 'border-success-400',
		'border-success-500', 'border-success-600', 'border-success-700',
		'bg-info', 'bg-info-50', 'bg-info-100', 'bg-info-200', 'bg-info-300', 'bg-info-400',
		'bg-info-500', 'bg-info-600', 'bg-info-700',
		'text-info', 'text-info-50', 'text-info-100', 'text-info-200', 'text-info-300', 'text-info-400',
		'text-info-500', 'text-info-600', 'text-info-700',
		'border-info', 'border-info-50', 'border-info-100', 'border-info-200', 'border-info-300', 'border-info-400',
		'border-info-500', 'border-info-600', 'border-info-700',
		'bg-warning', 'bg-warning-50', 'bg-warning-100', 'bg-warning-200', 'bg-warning-300', 'bg-warning-400',
		'bg-warning-500', 'bg-warning-600', 'bg-warning-700',
		'text-warning', 'text-warning-50', 'text-warning-100', 'text-warning-200', 'text-warning-300', 'text-warning-400',
		'text-warning-500', 'text-warning-600', 'text-warning-700', 'text-warning-strong',
		'border-warning', 'border-warning-50', 'border-warning-100', 'border-warning-200', 'border-warning-300', 'border-warning-400',
		'border-warning-500', 'border-warning-600', 'border-warning-700',
		'bg-error', 'bg-error-50', 'bg-error-100', 'bg-error-200', 'bg-error-300', 'bg-error-400',
		'bg-error-500', 'bg-error-600', 'bg-error-700',
		'text-error', 'text-error-50', 'text-error-100', 'text-error-200', 'text-error-300', 'text-error-400',
		'text-error-500', 'text-error-600', 'text-error-700',
		'border-error', 'border-error-50', 'border-error-100', 'border-error-200', 'border-error-300', 'border-error-400',
		'border-error-500', 'border-error-600', 'border-error-700',
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
				success: {
					50: '#F0FDF4', // Lightest success
					100: '#D1FAE5', // Light success
					200: '#A7F3D0', // Medium success
					300: '#6EE7B7', // Dark success
					400: '#34D399', // Bright success
					500: '#10B981', // Success (brand color)
					600: '#059669', // Dark success
					700: '#047857', // Darker success
					background: '#D2F9E5', // Success background
					text: '#077353', // Success text
				},
				info: {
					50: '#EFF6FF', // Lightest info
					100: '#DBEAFE', // Light info
					200: '#BFDBFE', // Medium-light info
					300: '#93C5FD', // Medium info
					400: '#60A5FA', // Medium-dark info
					500: '#3B82F6', // Info (brand color)
					600: '#2563EB', // Dark info
					700: '#1D4ED8', // Darker info
					background: '#D1E9FF', // Info background
					text: '#1849A9', // Info text
				},
				warning: {
					50: '#FFFBEB', // Lightest warning
					100: '#FEF3C7', // Light warning
					200: '#FDE68A', // Medium-light warning
					300: '#FCD34D', // Medium warning
					400: '#FBBF24', // Medium-dark warning
					500: '#F59E0B', // Warning (brand color)
					600: '#D97706', // Dark warning
					700: '#B45309', // Darker warning
					background: '#FEFBE8', // Warning background
					text: '#92400E', // Warning text
					strong: '#A15C07', // Strong warning
				},
				error: {
					50: '#FEF2F2', // Lightest error
					100: '#FEE2E2', // Light error
					200: '#FECACA', // Medium-light error
					300: '#FCA5A5', // Medium error
					400: '#F87171', // Medium-dark error
					500: '#EF4444', // Error (brand color)
					600: '#DC2626', // Dark error
					700: '#B91C1C', // Darker error
					background: '#FEE2E2', // Error background
					text: '#991B1B', // Error text
				},
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
				}
			}
		},
	},
	plugins: [],
}