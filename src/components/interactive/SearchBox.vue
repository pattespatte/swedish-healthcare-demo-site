<template>
	<div class="relative">
		<div class="relative flex items-center" :class="[size === 'small' ? 'w-64' : size === 'large' ? 'w-96' : 'w-80']">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<PhMagnifyingGlass
					size="20"
					class="text-neutral-400"
					aria-hidden="true"
				/>
			</div>

			<input
				ref="searchInput"
				type="text"
				class="focus:border-primary-500 focus:ring-primary-500 dark:border-dark-border-primary dark:bg-dark-bg-tertiary block w-full rounded-md border border-neutral-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:outline-none sm:text-sm"
				:class="[size === 'small' ? 'py-1 text-sm' : size === 'large' ? 'py-3 text-base' : 'py-2 text-sm']"
				:placeholder="placeholder"
				:value="searchQuery"
				@input="handleInput"
				@keyup.enter="handleSearch"
				@keyup.esc="handleClear"
				@keydown="handleKeydown"
				:disabled="disabled"
				:aria-label="ariaLabel"
			/>

			<div v-if="searchQuery && clearable" class="absolute inset-y-0 right-0 flex items-center pr-3">
				<button
					type="button"
					class="focus:ring-primary-500 rounded-full p-1 text-neutral-400 hover:text-neutral-500 focus:ring-2 focus:outline-none"
					@click="handleClear"
					aria-label="Rensa sökning"
				>
					<PhX
						size="20"
						class="h-5 w-5"
						aria-hidden="true"
					/>
				</button>
			</div>

			<div v-if="showSearchButton" class="absolute inset-y-0 right-0 flex items-center">
				<button
					type="button"
					class="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 relative inline-flex items-center rounded-r-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
					:class="[size === 'small' ? 'py-1 text-xs' : size === 'large' ? 'py-3 text-base' : 'py-2 text-sm']"
					@click="handleSearch"
					:disabled="disabled || !searchQuery"
				>
					Sök
				</button>
			</div>
		</div>

		<!-- Search results dropdown -->
		<SearchResults
			v-if="searchQuery"
			:show-results="searchQuery.length > 0"
			:search-results="searchResults"
			:search-query="searchQuery"
			:is-loading="isLoading"
			:has-results="hasResults"
			@result-select="handleResultSelect"
			@view-all-results="handleViewAllResults"
			ref="searchResultsComponent"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ref, nextTick } from 'vue'
	import { useRouter } from 'vue-router'
	import { useSearch } from '@/composables/useSearch'
	import SearchResults from './SearchResults.vue'
	import type { SearchResult } from '@/composables/useSearch'

	// Props
	interface Props {
		placeholder?: string
		size?: 'small' | 'medium' | 'large'
		disabled?: boolean
		clearable?: boolean
		showSearchButton?: boolean
		ariaLabel?: string
	}

	const props = withDefaults(defineProps<Props>(), {
		placeholder: 'Sök...',
		size: 'medium',
		disabled: false,
		clearable: true,
		showSearchButton: true,
		ariaLabel: 'Sök'
	})

	// Use router and search composable
	const router = useRouter()
	const { searchQuery, searchResults, isLoading, hasResults, navigateToResult, clearSearch } = useSearch()

	// Refs
	const searchInput = ref<HTMLInputElement | null>(null)
	const searchResultsComponent = ref<InstanceType<typeof SearchResults> | null>(null)

	// Handle input event
	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		searchQuery.value = target.value
	}

	// Handle search action
	const handleSearch = () => {
		if (searchQuery.value.trim()) {
			// Search is already performed by the composable
			// This is just for the search button functionality
		}
	}

	// Handle clear action
	const handleClear = () => {
		clearSearch()
		nextTick(() => {
			if (searchInput.value) {
				searchInput.value.focus()
			}
		})
	}

	// Handle result selection
	const handleResultSelect = (result: SearchResult | null) => {
		if (result) {
			navigateToResult(result)
		} else {
			clearSearch()
		}
	}

	// Handle view all results
	const handleViewAllResults = () => {
		console.log('View all results clicked with query:', searchQuery.value)
		if (searchQuery.value.trim()) {
			// Navigate to search results page with the query
			router.push({
				name: 'SearchResults',
				query: { q: searchQuery.value.trim() }
			})
		}
	}

	// Handle keyboard navigation
	const handleKeydown = (event: KeyboardEvent) => {
		// Forward keyboard events to the search results component
		if (searchResultsComponent.value && searchQuery.value) {
			searchResultsComponent.value.handleKeydown(event)
		}
	}

	// Expose methods for external control
	defineExpose({
		focus: () => {
			if (searchInput.value) {
				searchInput.value.focus()
			}
		},
		blur: () => {
			if (searchInput.value) {
				searchInput.value.blur()
			}
		},
		clear: handleClear,
		search: handleSearch
	})
</script>
