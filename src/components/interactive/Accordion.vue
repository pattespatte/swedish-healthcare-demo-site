<template>
	<div class="w-full">
		<div
			v-for="item in items"
			:key="item.id"
			class="border-b border-neutral-200 last:border-b-0"
		>
			<button
				type="button"
				class="flex justify-between items-center w-full py-4 px-2 text-left font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors"
				:aria-expanded="isItemOpen(item.id)"
				:aria-controls="`accordion-content-${item.id}`"
				@click="toggleItem(item.id)"
			>
				<span>{{ item.title }}</span>
				<svg
					class="w-5 h-5 text-neutral-500 transition-transform duration-300"
					:class="{ 'rotate-180': isItemOpen(item.id) }"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<Transition
				enter-active-class="transition-all duration-300 ease-out overflow-hidden"
				enter-from-class="max-h-0 opacity-0"
				enter-to-class="max-h-96 opacity-100"
				leave-active-class="transition-all duration-300 ease-in overflow-hidden"
				leave-from-class="max-h-96 opacity-100"
				leave-to-class="max-h-0 opacity-0"
			>
				<div
					v-show="isItemOpen(item.id)"
					:id="`accordion-content-${item.id}`"
					class="pb-4 px-2 text-neutral-700"
				>
					<div class="pt-2">
						{{ item.content }}
					</div>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Interface for accordion item
export interface AccordionItem {
	id: string | number;
	title: string;
	content: string;
}

// Props
interface Props {
	items: AccordionItem[];
	allowMultiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	items: () => [],
	allowMultiple: false,
});

// State for open items
const openItems = ref<(string | number)[]>([]);

// Check if an item is open
const isItemOpen = (id: string | number) => {
	return openItems.value.includes(id);
};

// Toggle an item
const toggleItem = (id: string | number) => {
	if (props.allowMultiple) {
		// If multiple items can be open, toggle the clicked item
		const index = openItems.value.indexOf(id);
		if (index > -1) {
			openItems.value.splice(index, 1);
		} else {
			openItems.value.push(id);
		}
	} else {
		// If only one item can be open, close all others and open the clicked one
		if (isItemOpen(id)) {
			openItems.value = [];
		} else {
			openItems.value = [id];
		}
	}
};

// Expose methods for external control
defineExpose({
	openItem: (id: string | number) => {
		if (props.allowMultiple) {
			if (!openItems.value.includes(id)) {
				openItems.value.push(id);
			}
		} else {
			openItems.value = [id];
		}
	},
	closeItem: (id: string | number) => {
		const index = openItems.value.indexOf(id);
		if (index > -1) {
			openItems.value.splice(index, 1);
		}
	},
	closeAll: () => {
		openItems.value = [];
	},
	openAll: () => {
		if (props.allowMultiple) {
			openItems.value = props.items.map((item) => item.id);
		}
	},
});
</script>
