<template>
	<div class="w-full">
		<!-- Tab navigation -->
		<div class="border-b border-neutral-200">
			<nav
				class="-mb-px flex space-x-8 overflow-x-auto"
				aria-label="Flikar"
			>
				<button
					v-for="tab in tabs"
					:key="tab.id"
					type="button"
					class="py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-t-md transition-colors"
					:class="[
						tab.id === activeTab
							? 'border-primary-500 text-primary-600'
							: tab.disabled
							? 'border-transparent text-neutral-400 cursor-not-allowed'
							: 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300',
					]"
					:aria-selected="tab.id === activeTab"
					:aria-controls="`tabpanel-${tab.id}`"
					:disabled="tab.disabled"
					:tabindex="tab.disabled ? -1 : 0"
					@click="selectTab(tab.id)"
					@keydown="handleKeydown($event, tab.id)"
				>
					{{ tab.label }}
				</button>
			</nav>
		</div>

		<!-- Tab panels -->
		<div class="mt-4">
			<div
				v-for="tab in tabs"
				:key="`panel-${tab.id}`"
				:id="`tabpanel-${tab.id}`"
				role="tabpanel"
				:aria-labelledby="`tab-${tab.id}`"
				:hidden="tab.id !== activeTab"
				tabindex="0"
			>
				<div v-if="tab.id === activeTab">
					{{ tab.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

// Interface for tab item
export interface TabItem {
	id: string | number;
	label: string;
	content: string;
	disabled?: boolean;
}

// Props
interface Props {
	tabs: TabItem[];
	activeTab?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
	tabs: () => [],
	activeTab: "",
});

// Emits
const emit = defineEmits<{
	"update:activeTab": [value: string | number];
	"tab-change": [tab: TabItem];
}>();

// Internal active tab state
const internalActiveTab = ref(
	props.activeTab || (props.tabs.length > 0 ? props.tabs[0].id : "")
);

// Computed active tab
const computedActiveTab = computed({
	get: () => props.activeTab || internalActiveTab.value,
	set: (value) => {
		internalActiveTab.value = value;
		emit("update:activeTab", value);

		// Find the tab and emit tab-change event
		const selectedTab = props.tabs.find((tab) => tab.id === value);
		if (selectedTab) {
			emit("tab-change", selectedTab);
		}
	},
});

// Watch for props changes
watch(
	() => props.activeTab,
	(newVal) => {
		if (newVal !== undefined) {
			internalActiveTab.value = newVal;
		}
	}
);

// Select a tab
const selectTab = (tabId: string | number) => {
	const tab = props.tabs.find((t) => t.id === tabId);
	if (tab && !tab.disabled) {
		computedActiveTab.value = tabId;
	}
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent, tabId: string | number) => {
	const currentIndex = props.tabs.findIndex((tab) => tab.id === tabId);

	switch (event.key) {
		case "ArrowRight":
			event.preventDefault();
			// Find next enabled tab
			for (let i = currentIndex + 1; i < props.tabs.length; i++) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id);
					break;
				}
			}
			break;
		case "ArrowLeft":
			event.preventDefault();
			// Find previous enabled tab
			for (let i = currentIndex - 1; i >= 0; i--) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id);
					break;
				}
			}
			break;
		case "Home":
			event.preventDefault();
			// Find first enabled tab
			for (let i = 0; i < props.tabs.length; i++) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id);
					break;
				}
			}
			break;
		case "End":
			event.preventDefault();
			// Find last enabled tab
			for (let i = props.tabs.length - 1; i >= 0; i--) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id);
					break;
				}
			}
			break;
	}
};

// Expose methods for external control
defineExpose({
	selectTab,
	nextTab: () => {
		const currentIndex = props.tabs.findIndex(
			(tab) => tab.id === computedActiveTab.value
		);
		for (let i = currentIndex + 1; i < props.tabs.length; i++) {
			if (!props.tabs[i].disabled) {
				selectTab(props.tabs[i].id);
				break;
			}
		}
	},
	previousTab: () => {
		const currentIndex = props.tabs.findIndex(
			(tab) => tab.id === computedActiveTab.value
		);
		for (let i = currentIndex - 1; i >= 0; i--) {
			if (!props.tabs[i].disabled) {
				selectTab(props.tabs[i].id);
				break;
			}
		}
	},
});
</script>
