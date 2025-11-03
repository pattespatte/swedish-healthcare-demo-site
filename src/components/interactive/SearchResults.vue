<template>
	<div
		v-if="showResults"
		class="absolute z-50 mt-1 w-full bg-white dark:bg-dark-bg-tertiary shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm max-h-96"
		role="listbox"
		aria-labelledby="search-results-label"
	>
		<div
			class="px-3 py-2 text-xs font-medium text-neutral-500 dark:text-dark-text-muted border-b border-neutral-200 dark:border-dark-border-primary"
		>
			Sökresultat
		</div>

		<!-- Loading state -->
		<div
			v-if="isLoading"
			class="px-4 py-3 text-sm text-neutral-500 dark:text-dark-text-muted"
		>
			Söker...
		</div>

		<!-- No results state -->
		<div
			v-else-if="!hasResults && searchQuery"
			class="px-4 py-3 text-sm text-neutral-500 dark:text-dark-text-muted"
		>
			Inga sökresultat för "{{ searchQuery }}"
		</div>

		<!-- Results list -->
		<ul v-else-if="hasResults" class="py-1">
			<li
				v-for="(result, index) in searchResults"
				:key="result.id"
				class="text-neutral-900 dark:text-dark-text-primary cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-primary-50 dark:hover:bg-dark-hover-bg transition-colors duration-150"
				:class="{
					'bg-primary-50 dark:bg-dark-hover-bg':
						selectedIndex === index,
				}"
				role="option"
				@click="selectResult(result)"
				@mouseenter="selectedIndex = index"
			>
				<div class="flex flex-col">
					<!-- Result title -->
					<div
						class="font-medium text-sm text-primary-700 dark:text-primary-400 truncate"
					>
						{{ highlightText(result.title, searchQuery) }}
					</div>

					<!-- Result snippet -->
					<div
						class="text-xs text-neutral-600 dark:text-dark-text-muted mt-1 line-clamp-2"
					>
						{{ result.snippet || result.description }}
					</div>

					<!-- Result URL -->
					<div
						class="text-xs text-neutral-400 dark:text-dark-text-muted mt-1"
					>
						{{ result.url }}
					</div>
				</div>

				<!-- Selected indicator -->
				<span
					v-if="selectedIndex === index"
					class="text-primary-700 dark:text-primary-400 absolute inset-y-0 right-0 flex items-center pr-4"
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
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</li>
		</ul>

		<!-- View all results link -->
		<div
			v-if="hasResults"
			class="px-3 py-2 text-xs text-center border-t border-neutral-200 dark:border-dark-border-primary"
		>
			<button
				@click="viewAllResults"
				class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
			>
				Visa alla resultat
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import type { SearchResult } from "@/composables/useSearch";

interface Props {
	showResults: boolean;
	searchResults: SearchResult[];
	searchQuery: string;
	isLoading: boolean;
	hasResults: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	"result-select": [result: SearchResult];
	"view-all-results": [];
}>();

const selectedIndex = ref(0);

// Reset selected index when results change
watch(
	() => props.searchResults,
	() => {
		selectedIndex.value = 0;
	}
);

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
	if (!props.showResults || !props.hasResults) return;

	switch (event.key) {
		case "ArrowDown":
			event.preventDefault();
			selectedIndex.value =
				(selectedIndex.value + 1) % props.searchResults.length;
			break;
		case "ArrowUp":
			event.preventDefault();
			selectedIndex.value =
				selectedIndex.value <= 0
					? props.searchResults.length - 1
					: selectedIndex.value - 1;
			break;
		case "Enter":
			event.preventDefault();
			if (props.searchResults[selectedIndex.value]) {
				selectResult(props.searchResults[selectedIndex.value]);
			}
			break;
		case "Escape":
			event.preventDefault();
			emit("result-select", null as any); // Close results
			break;
	}
};

// Select a result
const selectResult = (result: SearchResult) => {
	emit("result-select", result);
};

// View all results
const viewAllResults = () => {
	console.log("View all results button clicked in SearchResults component");
	emit("view-all-results");
};

// Highlight matching text in results
const highlightText = (text: string, query: string): string => {
	if (!query.trim()) return text;

	const regex = new RegExp(
		`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
		"gi"
	);
	return text.replace(
		regex,
		'<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>'
	);
};

// Expose keyboard navigation method
defineExpose({
	handleKeydown,
});
</script>

<style scoped>
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

:deep(mark) {
	padding: 0 1px;
	border-radius: 2px;
}
</style>
