<template>
	<div class="w-full">
		<!-- Tab navigation -->
		<div class="relative pl-1">
			<!-- Tab border line (behind tabs) -->
			<div class="dark:bg-dark-border-primary absolute right-0 bottom-0 left-0 z-0 h-px bg-neutral-200" />

			<nav class="relative z-10 flex min-w-max" aria-label="Flikar">
				<button
					v-for="(tab, index) in tabs"
					:key="tab.id"
					:id="`tab-${tab.id}`"
					type="button"
					class="focus:ring-primary-500 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
					:class="[
						tab.id === activeTab
							? 'text-primary-700 dark:border-dark-border-primary dark:border-b-dark-bg-secondary dark:bg-dark-bg-secondary dark:text-primary-400 relative z-20 -mb-px rounded-t-md border border-neutral-200 border-b-white bg-white'
							: tab.disabled
								? 'dark:text-dark-text-muted cursor-not-allowed border-transparent text-neutral-400'
								: 'dark:text-dark-text-secondary dark:hover:border-dark-border-primary dark:hover:text-dark-text-primary border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-900',
						index === 0 ? 'ml-0' : '-ml-px'
					]"
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

		<!-- Tab panels with border -->
		<div
			class="dark:border-dark-border-primary dark:bg-dark-bg-secondary rounded-b-md border border-t-0 border-neutral-200 bg-white p-4"
		>
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
	import { ref, computed, watch } from 'vue'

	// Interface for tab item
	export interface TabItem {
		id: string | number
		label: string
		content: string
		disabled?: boolean
	}

	// Props
	interface Props {
		tabs: TabItem[]
		activeTab?: string | number
	}

	const props = withDefaults(defineProps<Props>(), {
		tabs: () => [],
		activeTab: ''
	})

	// Emits
	const emit = defineEmits<{
		'update:activeTab': [value: string | number]
		'tab-change': [tab: TabItem]
	}>()

	// Internal active tab state
	const internalActiveTab = ref(props.activeTab || (props.tabs.length > 0 ? props.tabs[0].id : ''))

	// Computed active tab
	const computedActiveTab = computed({
		get: () => props.activeTab || internalActiveTab.value,
		set: value => {
			internalActiveTab.value = value
			emit('update:activeTab', value)

			// Find the tab and emit tab-change event
			const selectedTab = props.tabs.find(tab => tab.id === value)
			if (selectedTab) {
				emit('tab-change', selectedTab)
			}
		}
	})

	// Watch for props changes
	watch(
		() => props.activeTab,
		newVal => {
			if (newVal !== undefined) {
				internalActiveTab.value = newVal
			}
		}
	)

	// Select a tab
	const selectTab = (tabId: string | number) => {
		const tab = props.tabs.find(t => t.id === tabId)
		if (tab && !tab.disabled) {
			computedActiveTab.value = tabId
		}
	}

	// Handle keyboard navigation
	const handleKeydown = (event: KeyboardEvent, tabId: string | number) => {
		const currentIndex = props.tabs.findIndex(tab => tab.id === tabId)

		switch (event.key) {
			case 'ArrowRight':
				event.preventDefault()
				// Find next enabled tab
				for (let i = currentIndex + 1; i < props.tabs.length; i++) {
					if (!props.tabs[i].disabled) {
						selectTab(props.tabs[i].id)
						break
					}
				}
				break
			case 'ArrowLeft':
				event.preventDefault()
				// Find previous enabled tab
				for (let i = currentIndex - 1; i >= 0; i--) {
					if (!props.tabs[i].disabled) {
						selectTab(props.tabs[i].id)
						break
					}
				}
				break
			case 'Home':
				event.preventDefault()
				// Find first enabled tab
				for (let i = 0; i < props.tabs.length; i++) {
					if (!props.tabs[i].disabled) {
						selectTab(props.tabs[i].id)
						break
					}
				}
				break
			case 'End':
				event.preventDefault()
				// Find last enabled tab
				for (let i = props.tabs.length - 1; i >= 0; i--) {
					if (!props.tabs[i].disabled) {
						selectTab(props.tabs[i].id)
						break
					}
				}
				break
		}
	}

	// Expose methods for external control
	defineExpose({
		selectTab,
		nextTab: () => {
			const currentIndex = props.tabs.findIndex(tab => tab.id === computedActiveTab.value)
			for (let i = currentIndex + 1; i < props.tabs.length; i++) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id)
					break
				}
			}
		},
		previousTab: () => {
			const currentIndex = props.tabs.findIndex(tab => tab.id === computedActiveTab.value)
			for (let i = currentIndex - 1; i >= 0; i--) {
				if (!props.tabs[i].disabled) {
					selectTab(props.tabs[i].id)
					break
				}
			}
		}
	})
</script>
