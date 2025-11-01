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
				:value="modelValue"
				@input="handleInput"
				@keyup.enter="handleSearch"
				@keyup.esc="handleClear"
				@keydown="handleKeydown"
				:disabled="disabled"
				:aria-label="ariaLabel"
			/>

			<div
				v-if="modelValue && clearable"
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
					:disabled="disabled || !modelValue"
				>
					Sök
				</button>
			</div>
		</div>

		<!-- Search suggestions dropdown -->
		<div
			v-if="showSuggestions && suggestions.length > 0"
			class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
			role="listbox"
			aria-labelledby="listbox-label"
		>
			<ul
				class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
			>
				<li
					v-for="(suggestion, index) in suggestions"
					:key="suggestion.id || index"
					class="text-neutral-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-primary-50"
					:class="{ 'bg-primary-50': selectedIndex === index }"
					role="option"
					@click="selectSuggestion(suggestion)"
					@mouseenter="selectedIndex = index"
				>
					<span class="font-normal block truncate">
						{{ suggestion.label || suggestion }}
					</span>

					<span
						v-if="selectedIndex === index"
						class="text-primary-700 absolute inset-y-0 right-0 flex items-center pr-4"
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
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";

// Interface for suggestion item
export interface SuggestionItem {
	id?: string | number;
	label: string;
	[key: string]: any;
}

// Props
interface Props {
	modelValue: string;
	placeholder?: string;
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	clearable?: boolean;
	showSearchButton?: boolean;
	suggestions?: SuggestionItem[];
	showSuggestions?: boolean;
	ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
	modelValue: "",
	placeholder: "Sök...",
	size: "medium",
	disabled: false,
	clearable: true,
	showSearchButton: false,
	suggestions: () => [],
	showSuggestions: false,
	ariaLabel: "Sök",
});

// Emits
const emit = defineEmits<{
	"update:modelValue": [value: string];
	search: [query: string];
	clear: [];
	"suggestion-select": [suggestion: SuggestionItem];
}>();

// Refs
const searchInput = ref<HTMLInputElement | null>(null);
const selectedIndex = ref(0);

// Handle input event
const handleInput = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
};

// Handle search action
const handleSearch = () => {
	if (props.modelValue.trim()) {
		emit("search", props.modelValue.trim());
	}
};

// Handle clear action
const handleClear = () => {
	emit("update:modelValue", "");
	emit("clear");
	nextTick(() => {
		if (searchInput.value) {
			searchInput.value.focus();
		}
	});
};

// Select a suggestion
const selectSuggestion = (suggestion: SuggestionItem) => {
	emit("update:modelValue", suggestion.label || suggestion.toString());
	emit("suggestion-select", suggestion);
	emit("search", suggestion.label || suggestion.toString());
};

// Watch for changes in suggestions to reset selected index
watch(
	() => props.suggestions,
	() => {
		selectedIndex.value = 0;
	},
	{ deep: true }
);

// Handle keyboard navigation for suggestions
const handleKeydown = (event: KeyboardEvent) => {
	if (!props.showSuggestions || props.suggestions.length === 0) return;

	switch (event.key) {
		case "ArrowDown":
			event.preventDefault();
			selectedIndex.value =
				(selectedIndex.value + 1) % props.suggestions.length;
			break;
		case "ArrowUp":
			event.preventDefault();
			selectedIndex.value =
				selectedIndex.value <= 0
					? props.suggestions.length - 1
					: selectedIndex.value - 1;
			break;
		case "Enter":
			event.preventDefault();
			if (props.suggestions[selectedIndex.value]) {
				selectSuggestion(props.suggestions[selectedIndex.value]);
			}
			break;
		case "Escape":
			event.preventDefault();
			handleClear();
			break;
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
