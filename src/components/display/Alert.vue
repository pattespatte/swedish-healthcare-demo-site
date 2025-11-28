<template>
	<div v-if="isVisible" :class="alertClasses" role="alert" :aria-live="type === 'error' ? 'assertive' : 'polite'">
	<div class="flex items-start">
		<div class="flex-shrink-0">
			<!-- Phosphor Icons for different alert types -->
			<PhInfo
				v-if="type === 'info'"
				size="20"
				class="text-blue-400"
				weight="fill"
				aria-hidden="true"
			/>
			<PhCheckCircle
				v-else-if="type === 'success'"
				size="20"
				class="text-green-400"
				weight="fill"
				aria-hidden="true"
			/>
			<PhWarning
				v-else-if="type === 'warning'"
				size="20"
				class="text-yellow-400"
				weight="fill"
				aria-hidden="true"
			/>
			<PhXCircle
				v-else-if="type === 'error'"
				size="20"
				class="text-red-400"
				weight="fill"
				aria-hidden="true"
			/>
		</div>
			<div class="ml-3 flex-1">
				<component v-if="title" :is="headingTag" class="text-sm font-medium">
					{{ title }}
				</component>
				<div v-if="message" :class="title ? 'mt-2 text-sm' : 'text-sm'">
					<p v-if="htmlContent" v-html="message"></p>
					<p v-else>{{ message }}</p>
				</div>
				<div v-if="$slots.default" class="mt-2 text-sm">
					<slot />
				</div>
			</div>
			<div v-if="dismissible" class="ml-auto pl-3">
				<button
					@click="dismiss"
					class="inline-flex rounded-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
					:class="dismissButtonClasses"
					aria-label="Stäng"
				>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'

	interface Props {
		type?: 'info' | 'success' | 'warning' | 'error'
		title?: string
		message?: string
		dismissible?: boolean
		headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
		htmlContent?: boolean
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'info',
		dismissible: false,
		headingLevel: 'h3',
		htmlContent: false
	})

	const isVisible = ref(true)

	const headingTag = computed(() => props.headingLevel)

	const alertClasses = computed(() => {
		const baseClasses = 'p-4 rounded-md'

		switch (props.type) {
			case 'info':
				return `${baseClasses} bg-blue-50 border border-blue-200`
			case 'success':
				return `${baseClasses} bg-green-50 border border-green-200`
			case 'warning':
				return `${baseClasses} bg-yellow-50 border border-yellow-200`
			case 'error':
				return `${baseClasses} bg-red-50 border border-red-200`
			default:
				return `${baseClasses} bg-blue-50 border border-blue-200`
		}
	})

	const dismissButtonClasses = computed(() => {
		switch (props.type) {
			case 'info':
				return 'text-blue-400 hover:bg-blue-100 focus:ring-blue-500 focus:ring-offset-blue-50'
			case 'success':
				return 'text-green-400 hover:bg-green-100 focus:ring-green-500 focus:ring-offset-green-50'
			case 'warning':
				return 'text-yellow-400 hover:bg-yellow-100 focus:ring-yellow-500 focus:ring-offset-yellow-50'
			case 'error':
				return 'text-red-400 hover:bg-red-100 focus:ring-red-500 focus:ring-offset-red-50'
			default:
				return 'text-blue-400 hover:bg-blue-100 focus:ring-blue-500 focus:ring-offset-blue-50'
		}
	})

	const dismiss = () => {
		isVisible.value = false
	}
</script>
