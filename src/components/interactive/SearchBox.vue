<template>
	<div class="relative">
		<div
			class="relative flex items-center"
			:class="[
				size === 'small' ? 'w-64' : size === 'large' ? 'w-96' : 'w-80',
			]"
		>
			<div
				class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
			>
				<svg
					class="h-5 w-5 text-neutral-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>

			<input
				ref="searchInput"
				type="text"
				class="block w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-dark-border-primary rounded-md leading-5 bg-white dark:bg-dark-bg-tertiary placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
				:class="[
					size === 'small'
						? 'py-1 text-sm'
						: size === 'large'
						? 'py-3 text-base'
						: 'py-2 text-sm',
				]"
				:placeholder="placeholder"
				:value="searchQuery"
				@input="handleInput"
				@keyup.enter="handleSearch"
				@keyup.esc="handleClear"
				@keydown="handleKeydown"
				:disabled="disabled"
				:aria-label="ariaLabel"
			/>

			<div
				v-if="searchQuery && clearable"
				class="absolute inset-y-0 right-0 pr-3 flex items-center"
			>
				<button
					type="button"
					class="text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
					@click="handleClear"
					aria-label="Rensa sökning"
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
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				v-if="showSearchButton"
				class="absolute inset-y-0 right-0 flex items-center"
			>
				<button
					type="button"
					class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
					:class="[
						size === 'small'
							? 'py-1 text-xs'
							: size === 'large'
							? 'py-3 text-base'
							: 'py-2 text-sm',
					]"
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
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useSearch } from "@/composables/useSearch";
import SearchResults from "./SearchResults.vue";
import type { SearchResult } from "@/composables/useSearch";

// Props
interface Props {
	placeholder?: string;
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	clearable?: boolean;
	showSearchButton?: boolean;
	ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: "Sök...",
	size: "medium",
	disabled: false,
	clearable: true,
	showSearchButton: true,
	ariaLabel: "Sök",
});

// Use router and search composable
const router = useRouter();
const {
	searchQuery,
	searchResults,
	isLoading,
	hasResults,
	navigateToResult,
	clearSearch,
} = useSearch();

// Refs
const searchInput = ref<HTMLInputElement | null>(null);
const searchResultsComponent = ref<InstanceType<typeof SearchResults> | null>(
	null
);

// Handle input event
const handleInput = (event: Event) => {
	const target = event.target as HTMLInputElement;
	searchQuery.value = target.value;
};

// Handle search action
const handleSearch = () => {
	if (searchQuery.value.trim()) {
		// Search is already performed by the composable
		// This is just for the search button functionality
	}
};

// Handle clear action
const handleClear = () => {
	clearSearch();
	nextTick(() => {
		if (searchInput.value) {
			searchInput.value.focus();
		}
	});
};

// Handle result selection
const handleResultSelect = (result: SearchResult | null) => {
	if (result) {
		navigateToResult(result);
	} else {
		clearSearch();
	}
};

// Handle view all results
const handleViewAllResults = () => {
	console.log("View all results clicked with query:", searchQuery.value);
	if (searchQuery.value.trim()) {
		// Navigate to search results page with the query
		router.push({
			name: "SearchResults",
			query: { q: searchQuery.value.trim() },
		});
	}
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
	// Forward keyboard events to the search results component
	if (searchResultsComponent.value && searchQuery.value) {
		searchResultsComponent.value.handleKeydown(event);
	}
};

// Expose methods for external control
defineExpose({
	focus: () => {
		if (searchInput.value) {
			searchInput.value.focus();
		}
	},
	blur: () => {
		if (searchInput.value) {
			searchInput.value.blur();
		}
	},
	clear: handleClear,
	search: handleSearch,
});
</script>
