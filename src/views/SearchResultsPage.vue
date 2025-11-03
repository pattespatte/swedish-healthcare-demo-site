<template>
	<div class="container mx-auto px-4 py-8">
		<div class="max-w-4xl mx-auto">
			<h1
				class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6"
			>
				Sökresultat för "{{ searchQuery }}"
			</h1>

			<div v-if="isLoading" class="text-center py-8">
				<p class="text-gray-600 dark:text-gray-400">Söker...</p>
			</div>

			<div v-else-if="!hasResults" class="text-center py-8">
				<p class="text-gray-600 dark:text-gray-400">
					Inga sökresultat för "{{ searchQuery }}"
				</p>
			</div>

			<div v-else>
				<p class="text-gray-600 dark:text-gray-400 mb-6">
					Hittade {{ searchResults.length }} resultat
				</p>

				<div class="space-y-6">
					<div
						v-for="result in searchResults"
						:key="result.id"
						class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<h2
							class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-2"
						>
							<router-link
								:to="result.url"
								class="hover:underline"
							>
								{{ result.title }}
							</router-link>
						</h2>

						<p class="text-gray-600 dark:text-gray-400 mb-3">
							{{ result.snippet || result.description }}
						</p>

						<div class="text-sm text-gray-500 dark:text-gray-500">
							{{ result.url }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSearch } from "@/composables/useSearch";

const route = useRoute();
const router = useRouter();
const {
	searchQuery,
	searchResults,
	isLoading,
	hasResults,
	performSearch,
	searchIndex,
} = useSearch();

// Initialize search query from route parameter
onMounted(() => {
	const query = route.query.q as string;
	if (query) {
		searchQuery.value = query;
		// Perform a full search without limiting results for the dedicated results page
		performFullSearch(query);
	}
});

// Watch for route changes
watch(
	() => route.query.q,
	(newQuery) => {
		if (newQuery) {
			searchQuery.value = newQuery as string;
			// Perform a full search without limiting results for the dedicated results page
			performFullSearch(newQuery as string);
		}
	}
);

// Perform a full search without limiting results
const performFullSearch = (query: string) => {
	if (!query.trim()) {
		searchResults.value = [];
		return;
	}

	const queryLower = query.toLowerCase().trim();
	const results: any[] = [];

	// Early exit for very short queries
	if (queryLower.length < 2) {
		searchResults.value = [];
		return;
	}

	// Search through all items in the index
	for (const item of searchIndex.value) {
		// Calculate relevance score (copied from useSearch)
		const titleLower = item.title.toLowerCase();
		const contentLower = item.content.toLowerCase();
		const descriptionLower = (item.description || "").toLowerCase();

		let score = 0;

		// Title matches are most important
		if (titleLower.includes(queryLower)) {
			score += 10;
		}

		// Exact phrase matches in title
		if (titleLower === queryLower) {
			score += 20;
		}

		// Description matches
		if (descriptionLower.includes(queryLower)) {
			score += 5;
		}

		// Content matches
		if (contentLower.includes(queryLower)) {
			score += 3;
		}

		// Keyword matches
		if (item.keywords) {
			const queryWords = queryLower.split(/\s+/);
			for (const word of queryWords) {
				if (item.keywords.includes(word)) {
					score += 2;
				}
			}
		}

		// Boost score for shorter titles (likely more specific)
		score += Math.max(0, 5 - item.title.length / 10);

		if (score > 0) {
			// Generate snippet
			const index = contentLower.indexOf(queryLower);
			let snippet = "";
			if (index === -1) {
				snippet =
					item.content.substring(0, 150) +
					(item.content.length > 150 ? "..." : "");
			} else {
				const start = Math.max(0, index - 50);
				const end = Math.min(
					item.content.length,
					index + query.length + 100
				);
				snippet = item.content.substring(start, end);
				if (start > 0) snippet = "..." + snippet;
				if (end < item.content.length) snippet = snippet + "...";
			}

			results.push({
				...item,
				score,
				snippet,
			});
		}
	}

	// Sort by score (descending) but don't limit results for the dedicated results page
	searchResults.value = results.sort(
		(a, b) => (b.score || 0) - (a.score || 0)
	);
};
</script>
