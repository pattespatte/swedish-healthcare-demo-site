<template>
	<!-- Modal backdrop -->
	<div>
		<Transition
			enter-active-class="transition-opacity duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="visible"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
				@click="handleBackdropClick"
				aria-hidden="true"
			/>
		</Transition>

		<!-- Modal content -->
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-from-class="opacity-0 scale-95"
			enter-to-class="opacity-100 scale-100"
			leave-active-class="transition-all duration-200 ease-in"
			leave-from-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-95"
		>
			<div
				v-if="visible"
				ref="modalElement"
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
				role="dialog"
				aria-modal="true"
				:aria-labelledby="titleId"
				@keydown.esc="handleEscapeKey"
			>
				<div
					:class="modalSizeClasses"
					class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white shadow-xl"
					@click.stop
				>
					<!-- Modal header -->
					<div v-if="$slots.header || title" class="border-b border-neutral-200 px-6 py-4">
						<div class="flex items-center justify-between">
							<h2 :id="titleId" class="text-xl font-semibold text-neutral-800">
								{{ title }}
							</h2>
							<button
								v-if="closable"
								type="button"
								class="rounded-full p-1 text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
								@click="$emit('update:visible', false)"
								aria-label="Stäng"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<slot name="header" />
					</div>

					<!-- Modal body -->
					<div class="flex-1 overflow-y-auto px-6 py-4">
						<slot />
					</div>

					<!-- Modal footer -->
					<div v-if="$slots.footer" class="border-t border-neutral-200 bg-neutral-50 px-6 py-4">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'

	// Props
	interface Props {
		title?: string
		visible: boolean
		size?: 'small' | 'medium' | 'large'
		closable?: boolean
	}

	const props = withDefaults(defineProps<Props>(), {
		title: '',
		visible: false,
		size: 'medium',
		closable: true
	})

	// Emits
	const emit = defineEmits<{
		'update:visible': [value: boolean]
	}>()

	// Generate unique ID for title
	const titleId = ref(`modal-title-${Math.random().toString(36).substring(2, 9)}`)

	// Reference to the modal element
	const modalElement = ref<HTMLElement>()
	// Store the element that had focus before modal opened
	const previousFocusElement = ref<HTMLElement | null>(null)

	// Compute modal size classes
	const modalSizeClasses = computed(() => {
		switch (props.size) {
			case 'small':
				return 'max-w-md w-full'
			case 'large':
				return 'max-w-4xl w-full'
			case 'medium':
			default:
				return 'max-w-2xl w-full'
		}
	})

	// Handle backdrop click
	const handleBackdropClick = () => {
		if (props.closable) {
			emit('update:visible', false)
		}
	}

	// Handle escape key
	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && props.closable) {
			event.preventDefault()
			emit('update:visible', false)
		}
	}

	// Global ESC key handler
	const globalEscapeHandler = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && props.visible && props.closable) {
			event.preventDefault()
			emit('update:visible', false)
		}
	}

	// Get all focusable elements within the modal
	const getFocusableElements = (): HTMLElement[] => {
		if (!modalElement.value) {
			return []
		}

		const focusableSelectors = [
			'button:not([disabled])',
			'[href]',
			'input:not([disabled])',
			'select:not([disabled])',
			'textarea:not([disabled])',
			'[tabindex]:not([tabindex="-1"])'
		].join(', ')

		return Array.from(modalElement.value.querySelectorAll(focusableSelectors)) as HTMLElement[]
	}

	// Trap focus within the modal
	const trapFocus = (event: KeyboardEvent) => {
		if (event.key !== 'Tab') {
			return
		}

		const focusableElements = getFocusableElements()
		if (focusableElements.length === 0) {
			return
		}

		const firstElement = focusableElements[0]
		const lastElement = focusableElements[focusableElements.length - 1]

		// If shift + tab and focus is on first element, move to last
		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault()
			lastElement.focus()
		}
		// If tab and focus is on last element, move to first
		else if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault()
			firstElement.focus()
		}
	}

	// Set up focus trapping and event listeners when modal opens
	const setupModalFocus = () => {
		// Store the currently focused element
		previousFocusElement.value = document.activeElement as HTMLElement

		// Add global ESC key listener
		document.addEventListener('keydown', globalEscapeHandler)

		// Focus the first focusable element after a short delay
		setTimeout(() => {
			const focusableElements = getFocusableElements()
			if (focusableElements.length > 0) {
				focusableElements[0].focus()
			}
		}, 100)

		// Add focus trap listener
		document.addEventListener('keydown', trapFocus)
	}

	// Clean up when modal closes
	const cleanupModalFocus = () => {
		// Remove global ESC key listener
		document.removeEventListener('keydown', globalEscapeHandler)

		// Remove focus trap listener
		document.removeEventListener('keydown', trapFocus)

		// Return focus to the element that opened the modal
		if (previousFocusElement.value) {
			setTimeout(() => {
				previousFocusElement.value?.focus()
			}, 100)
		}
	}

	// Watch for modal visibility changes
	watch(
		() => props.visible,
		newVal => {
			if (newVal) {
				setupModalFocus()
			} else {
				cleanupModalFocus()
			}
		}
	)

	// Clean up on component unmount
	onBeforeUnmount(() => {
		if (props.visible) {
			cleanupModalFocus()
		}
	})
</script>
