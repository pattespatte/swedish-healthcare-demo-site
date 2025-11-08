<template>
	<span :class="badgeClasses" role="status" :aria-label="text">
		{{ text }}
	</span>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	interface Props {
		text: string
		variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
	}

	const props = withDefaults(defineProps<Props>(), {
		variant: 'default'
	})

	const badgeClasses = computed(() => {
		const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

		switch (props.variant) {
			case 'primary':
				return `${baseClasses} bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-700`
			case 'secondary':
				return `${baseClasses} bg-neutral-100 text-neutral-800 dark:bg-dark-bg-tertiary dark:text-dark-text-primary`
			case 'success':
				return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
			case 'warning':
				return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`
			case 'error':
				return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
			default:
				return `${baseClasses} bg-neutral-100 text-neutral-800 dark:bg-dark-bg-tertiary dark:text-dark-text-primary`
		}
	})
</script>
