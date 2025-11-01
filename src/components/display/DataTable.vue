<template>
	<div
		class="bg-white dark:bg-dark-bg-tertiary shadow-md rounded-lg overflow-hidden border border-neutral-200 dark:border-dark-border-primary"
	>
		<div
			class="overflow-x-auto"
			tabindex="0"
			role="region"
			aria-label="Tabell med data"
		>
			<table
				class="min-w-full divide-y divide-neutral-200 dark:divide-dark-border-primary"
			>
				<thead class="bg-neutral-50 dark:bg-dark-bg-secondary">
					<tr>
						<th
							v-for="(column, index) in columns"
							:key="index"
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-dark-text-muted uppercase tracking-wider"
							:class="{
								'cursor-pointer hover:bg-neutral-100': sortable,
							}"
							@click="sortable ? sortBy(column.key) : null"
						>
							<div class="flex items-center">
								{{ column.label }}
								<span v-if="sortable" class="ml-1">
									<svg
										v-if="
											sortKey === column.key &&
											sortOrder === 'asc'
										"
										class="h-4 w-4 text-neutral-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 15l7-7 7 7"
										/>
									</svg>
									<svg
										v-else-if="
											sortKey === column.key &&
											sortOrder === 'desc'
										"
										class="h-4 w-4 text-neutral-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
									<svg
										v-else
										class="h-4 w-4 text-neutral-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
										/>
									</svg>
								</span>
							</div>
						</th>
					</tr>
				</thead>
				<tbody
					class="bg-white dark:bg-dark-bg-tertiary divide-y divide-neutral-200 dark:divide-dark-border-primary"
				>
					<tr
						v-for="(row, rowIndex) in paginatedData"
						:key="rowIndex"
						class="hover:bg-neutral-50 dark:hover:bg-dark-hover-bg"
					>
						<td
							v-for="(column, colIndex) in columns"
							:key="colIndex"
							class="px-6 py-4 whitespace-nowrap text-sm"
							:class="getTextColorClass(column.key)"
						>
							<slot
								:name="`cell-${column.key}`"
								:row="row"
								:value="row[column.key]"
							>
								{{
									formatCellValue(row[column.key], column.key)
								}}
							</slot>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div
			v-if="paginated && totalPages > 1"
			class="bg-white dark:bg-dark-bg-tertiary px-4 py-3 flex items-center justify-between border-t border-neutral-200 dark:border-dark-border-primary sm:px-6"
		>
			<div class="flex-1 flex justify-between sm:hidden">
				<button
					@click="prevPage"
					:disabled="currentPage === 1"
					class="relative inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-dark-border-primary text-sm font-medium rounded-md text-neutral-700 dark:text-dark-text-primary bg-white dark:bg-dark-bg-quaternary hover:bg-neutral-50 dark:hover:bg-dark-hover-bg disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Föregående
				</button>
				<button
					@click="nextPage"
					:disabled="currentPage === totalPages"
					class="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-dark-border-primary text-sm font-medium rounded-md text-neutral-700 dark:text-dark-text-primary bg-white dark:bg-dark-bg-quaternary hover:bg-neutral-50 dark:hover:bg-dark-hover-bg disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Nästa
				</button>
			</div>
			<div
				class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
			>
				<div>
					<p
						class="text-sm text-neutral-700 dark:text-dark-text-secondary"
					>
						Visar
						<span class="font-medium">{{ startIndex + 1 }}</span>
						till
						<span class="font-medium">{{
							Math.min(endIndex, sortedData.length)
						}}</span>
						av
						<span class="font-medium">{{ sortedData.length }}</span>
						resultat
					</p>
				</div>
				<div>
					<nav
						class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						<button
							@click="prevPage"
							:disabled="currentPage === 1"
							class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 dark:border-dark-border-primary bg-white dark:bg-dark-bg-quaternary text-sm font-medium text-neutral-500 dark:text-dark-text-muted hover:bg-neutral-50 dark:hover:bg-dark-hover-bg disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<span class="sr-only">Föregående</span>
							<svg
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						<button
							v-for="page in visiblePages"
							:key="page"
							@click="goToPage(page)"
							class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							:class="
								page === currentPage
									? 'z-10 bg-primary-50 border-primary-500 text-primary-700'
									: 'bg-white dark:bg-dark-bg-quaternary border-neutral-300 dark:border-dark-border-primary text-neutral-500 dark:text-dark-text-muted hover:bg-neutral-50 dark:hover:bg-dark-hover-bg'
							"
						>
							{{ page }}
						</button>

						<button
							@click="nextPage"
							:disabled="currentPage === totalPages"
							class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 dark:border-dark-border-primary bg-white dark:bg-dark-bg-quaternary text-sm font-medium text-neutral-500 dark:text-dark-text-muted hover:bg-neutral-50 dark:hover:bg-dark-hover-bg disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<span class="sr-only">Nästa</span>
							<svg
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</div>

		<div v-if="sortedData.length === 0" class="text-center py-12">
			<svg
				class="mx-auto h-12 w-12 text-neutral-400 dark:text-dark-text-muted"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<h3
				class="mt-2 text-sm font-medium text-neutral-900 dark:text-dark-text-primary"
			>
				Ingen data att visa
			</h3>
			<p class="mt-1 text-sm text-neutral-500 dark:text-dark-text-muted">
				Det finns ingen data tillgänglig för tillfället.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

interface TableColumn {
	key: string;
	label: string;
	type?: "text" | "number" | "date" | "currency";
}

interface Props {
	columns: TableColumn[];
	data: Record<string, any>[];
	sortable?: boolean;
	paginated?: boolean;
	pageSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
	sortable: true,
	paginated: true,
	pageSize: 10,
});

const sortKey = ref<string>("");
const sortOrder = ref<"asc" | "desc">("asc");
const currentPage = ref(1);

const sortedData = computed(() => {
	if (!sortKey.value || !props.sortable) {
		return props.data;
	}

	return [...props.data].sort((a, b) => {
		const aValue = a[sortKey.value];
		const bValue = b[sortKey.value];

		if (aValue < bValue) {
			return sortOrder.value === "asc" ? -1 : 1;
		}
		if (aValue > bValue) {
			return sortOrder.value === "asc" ? 1 : -1;
		}
		return 0;
	});
});

const totalPages = computed(() => {
	return Math.ceil(sortedData.value.length / props.pageSize);
});

const startIndex = computed(() => {
	return (currentPage.value - 1) * props.pageSize;
});

const endIndex = computed(() => {
	return startIndex.value + props.pageSize;
});

const paginatedData = computed(() => {
	if (!props.paginated) {
		return sortedData.value;
	}

	return sortedData.value.slice(startIndex.value, endIndex.value);
});

const visiblePages = computed(() => {
	const pages = [];
	const maxVisible = 5;
	let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
	let endPage = Math.min(totalPages.value, startPage + maxVisible - 1);

	if (endPage - startPage + 1 < maxVisible) {
		startPage = Math.max(1, endPage - maxVisible + 1);
	}

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}

	return pages;
});

const sortBy = (key: string) => {
	if (!props.sortable) return;

	if (sortKey.value === key) {
		sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
	} else {
		sortKey.value = key;
		sortOrder.value = "asc";
	}
};

const prevPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
};

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
};

const goToPage = (page: number) => {
	currentPage.value = page;
};

const formatCellValue = (value: any, key: string) => {
	const column = props.columns.find((col) => col.key === key);

	if (!column || !column.type) {
		return value;
	}

	switch (column.type) {
		case "date":
			return value ? new Date(value).toLocaleDateString("sv-SE") : "-";
		case "currency":
			return value ? `${value.toLocaleString("sv-SE")} kr` : "-";
		case "number":
			return value !== null && value !== undefined
				? value.toLocaleString("sv-SE")
				: "-";
		default:
			return value !== null && value !== undefined ? value : "-";
	}
};

const getTextColorClass = (key: string) => {
	const column = props.columns.find((col) => col.key === key);

	if (column?.type === "number" || column?.type === "currency") {
		return "text-neutral-900 dark:text-dark-text-primary font-medium";
	}

	return "text-neutral-600 dark:text-dark-text-secondary";
};

watch(
	() => props.data,
	() => {
		currentPage.value = 1;
	}
);
</script>
