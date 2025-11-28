<template>
	<nav class="flex items-center justify-between" aria-label="Paginering">
		<div class="flex flex-1 justify-between sm:hidden">
			<button
				type="button"
				class="focus:ring-primary-500 relative inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
				:disabled="currentPage === 1"
				@click="goToPage(currentPage - 1)"
			>
				Föregående
			</button>
			<button
				type="button"
				class="focus:ring-primary-500 relative ml-3 inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
				:disabled="currentPage === totalPages"
				@click="goToPage(currentPage + 1)"
			>
				Nästa
			</button>
		</div>

		<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
			<div>
				<p class="text-sm text-neutral-700">
					Visar
					<span class="font-medium">{{ startItem }}</span>
					till
					<span class="font-medium">{{ endItem }}</span>
					av
					<span class="font-medium">{{ totalItems }}</span>
					resultat
				</p>
			</div>

			<div>
				<div class="flex items-center space-x-2">
					<!-- First page button -->
					<button
						type="button"
						class="focus:ring-primary-500 relative inline-flex items-center rounded-l-md border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
						:disabled="currentPage === 1"
						@click="goToPage(1)"
						aria-label="Första sidan"
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
								d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!-- Previous page button -->
					<button
						type="button"
						class="focus:ring-primary-500 relative inline-flex items-center border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
						:disabled="currentPage === 1"
						@click="goToPage(currentPage - 1)"
						aria-label="Föregående sida"
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
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!-- Page numbers -->
					<div class="hidden md:flex">
						<template v-for="page in visiblePages">
							<button
								v-if="page !== '...'"
								:key="`page-${page}`"
								type="button"
								class="focus:ring-primary-500 relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:ring-2 focus:outline-none"
								:class="[
									page === currentPage
										? 'border-primary-500 bg-primary-50 text-primary-700 z-10'
										: 'border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-50'
								]"
								@click="typeof page === 'number' && goToPage(page)"
								:aria-current="page === currentPage ? 'page' : undefined"
							>
								{{ page }}
							</button>
							<span
								v-else
								:key="`ellipsis-${page}`"
								class="relative inline-flex items-center border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
							>
								...
							</span>
						</template>
					</div>

					<!-- Next page button -->
					<button
						type="button"
						class="focus:ring-primary-500 relative inline-flex items-center border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
						:disabled="currentPage === totalPages"
						@click="goToPage(currentPage + 1)"
						aria-label="Nästa sida"
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
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!-- Last page button -->
					<button
						type="button"
						class="focus:ring-primary-500 relative inline-flex items-center rounded-r-md border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 focus:ring-2 focus:outline-none"
						:disabled="currentPage === totalPages"
						@click="goToPage(totalPages)"
						aria-label="Sista sidan"
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
								d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
							<path
								fill-rule="evenodd"
								d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	// Props
	interface Props {
		currentPage: number
		totalPages: number
		itemsPerPage?: number
		totalItems?: number
	}

	const props = withDefaults(defineProps<Props>(), {
		currentPage: 1,
		totalPages: 1,
		itemsPerPage: 10,
		totalItems: 0
	})

	// Emits
	const emit = defineEmits<{
		'update:currentPage': [value: number]
		'page-change': [page: number]
	}>()

	// Calculate start and end item numbers
	const startItem = computed(() => {
		if (props.totalItems === 0) {
			return 0
		}
		return (props.currentPage - 1) * props.itemsPerPage + 1
	})

	const endItem = computed(() => {
		if (props.totalItems === 0) {
			return 0
		}
		const end = props.currentPage * props.itemsPerPage
		return end > props.totalItems ? props.totalItems : end
	})

	// Calculate visible page numbers with ellipsis
	const visiblePages = computed(() => {
		const pages: (number | string)[] = []
		const current = props.currentPage
		const total = props.totalPages

		if (total <= 7) {
			// If there are 7 or fewer pages, show all pages
			for (let i = 1; i <= total; i++) {
				pages.push(i)
			}
		} else {
			// Always include first page
			pages.push(1)

			if (current <= 4) {
				// Near the beginning
				for (let i = 2; i <= 5; i++) {
					pages.push(i)
				}
				pages.push('...')
				pages.push(total)
			} else if (current >= total - 3) {
				// Near the end
				pages.push('...')
				for (let i = total - 4; i <= total; i++) {
					pages.push(i)
				}
			} else {
				// In the middle
				pages.push('...')
				for (let i = current - 1; i <= current + 1; i++) {
					pages.push(i)
				}
				pages.push('...')
				pages.push(total)
			}
		}

		return pages
	})

	// Navigate to a specific page
	const goToPage = (page: number) => {
		if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
			emit('update:currentPage', page)
			emit('page-change', page)
		}
	}

	// Expose methods for external control
	defineExpose({
		goToPage,
		nextPage: () => {
			if (props.currentPage < props.totalPages) {
				goToPage(props.currentPage + 1)
			}
		},
		previousPage: () => {
			if (props.currentPage > 1) {
				goToPage(props.currentPage - 1)
			}
		},
		firstPage: () => {
			goToPage(1)
		},
		lastPage: () => {
			goToPage(props.totalPages)
		}
	})
</script>
