<template>
	<div :class="cardClasses">
		<div v-if="icon || $slots.icon" class="flex-shrink-0">
			<slot name="icon">
				<svg
					v-if="icon"
					class="h-6 w-6"
					:class="iconClasses"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</slot>
		</div>
		<div class="ml-4 flex-1">
			<h3
				v-if="title"
				class="text-lg font-medium leading-6"
				:class="titleClasses"
			>
				{{ title }}
			</h3>
			<div v-if="content || $slots.default" class="mt-2">
				<slot>
					<p class="text-sm" :class="contentClasses">{{ content }}</p>
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
	title?: string;
	content?: string;
	icon?: string;
	variant?: "default" | "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
	variant: "default",
});

const cardClasses = computed(() => {
	const baseClasses = "flex p-4 rounded-lg border";

	switch (props.variant) {
		case "primary":
			return `${baseClasses} bg-white border-neutral-300`;
		case "secondary":
			return `${baseClasses} bg-white border-neutral-300`;
		default:
			return `${baseClasses} bg-white border-neutral-200 shadow-sm`;
	}
});

const titleClasses = computed(() => {
	switch (props.variant) {
		case "primary":
			return "text-neutral-800";
		case "secondary":
			return "text-neutral-800";
		default:
			return "text-neutral-900";
	}
});

const contentClasses = computed(() => {
	switch (props.variant) {
		case "primary":
			return "text-neutral-700";
		case "secondary":
			return "text-neutral-700";
		default:
			return "text-neutral-600";
	}
});

const iconClasses = computed(() => {
	switch (props.variant) {
		case "primary":
			return "text-neutral-600";
		case "secondary":
			return "text-neutral-600";
		default:
			return "text-neutral-500";
	}
});
</script>
