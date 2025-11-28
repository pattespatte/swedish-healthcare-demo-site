<template>
	<button
		:type="type"
		:disabled="disabled || loading"
		:class="[
			'inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
			variantClasses,
			disabled || loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
		]"
		@click="$emit('click')"
	>
		<!-- Loading spinner with Phosphor icon -->
		<PhSpinner v-if="loading" size="16" class="mr-2 -ml-1 animate-spin" />
		
		<!-- Button icon based on type/variant -->
		<component
			v-if="!loading && showIcon"
			:is="getButtonIcon()"
			:size="16"
			class="mr-2"
		/>

		<!-- Button content -->
		<slot>
			{{ buttonText }}
		</slot>
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	interface Props {
		type?: 'submit' | 'button' | 'reset'
		variant?: 'primary' | 'secondary'
		disabled?: boolean
		loading?: boolean
		text?: string
		showIcon?: boolean
	}

	interface Emits {
		(e: 'click'): void
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'button',
		variant: 'primary',
		disabled: false,
		loading: false,
		text: '',
		showIcon: true
	})

	const emit = defineEmits<Emits>()

	// Default button text based on type and variant
	const buttonText = computed(() => {
		if (props.text) {
			return props.text
		}

		switch (props.type) {
			case 'submit':
				return 'Skicka'
			case 'reset':
				return 'Återställ'
			case 'button':
			default:
				return props.variant === 'primary' ? 'Fortsätt' : 'Avbryt'
		}
	})

	// Get appropriate icon based on button type and variant
	const getButtonIcon = () => {
		if (props.loading) return null
		
		switch (props.type) {
			case 'submit':
				return props.variant === 'primary' ? 'PhPaperPlaneRight' : 'PhPaperPlaneRight'
			case 'reset':
				return 'PhArrowCounterClockwise'
			case 'button':
			default:
				if (props.text) {
					// Try to infer icon from text content
					const text = props.text.toLowerCase()
					if (text.includes('boka') || text.includes('book')) return 'PhCalendarPlus'
					if (text.includes('kontakta') || text.includes('contact')) return 'PhPhone'
					if (text.includes('logga') || text.includes('login')) return 'PhSignIn'
					if (text.includes('spara') || text.includes('save')) return 'PhFloppyDisk'
					if (text.includes('avboka') || text.includes('cancel')) return 'PhX'
					if (text.includes('radera') || text.includes('delete')) return 'PhTrash'
					if (text.includes('ändra') || text.includes('edit')) return 'PhPencil'
					if (text.includes('visa') || text.includes('view')) return 'PhEye'
					if (text.includes('ladda') || text.includes('download')) return 'PhDownload'
					if (text.includes('sök') || text.includes('search')) return 'PhMagnifyingGlass'
				}
				return props.variant === 'primary' ? 'PhArrowRight' : 'PhArrowRight'
		}
	}

	// CSS classes based on variant
	const variantClasses = computed(() => {
		switch (props.variant) {
			case 'primary':
				return 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-400'
			case 'secondary':
				return 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-500 dark:text-dark-text-primary dark:bg-dark-bg-secondary dark:border-dark-border-secondary dark:hover:bg-dark-bg-tertiary dark:focus:ring-primary-400'
			default:
				return 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-400'
		}
	})
</script>
