<template>
	<span :class="badgeClasses" role="status" :aria-label="text">
		{{ text }}
	</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
	text: string;
	variant?:
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error";
}

const props = withDefaults(defineProps<Props>(), {
	variant: "default",
});

const badgeClasses = computed(() => {
	const baseClasses =
		"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

	switch (props.variant) {
		case "primary":
			return `${baseClasses} bg-primary-100 text-primary-800`;
		case "secondary":
			return `${baseClasses} bg-neutral-100 text-neutral-800`;
		case "success":
			return `${baseClasses} bg-green-100 text-green-800`;
		case "warning":
			return `${baseClasses} bg-yellow-100 text-yellow-800`;
		case "error":
			return `${baseClasses} bg-red-100 text-red-800`;
		default:
			return `${baseClasses} bg-neutral-100 text-neutral-800`;
	}
});
</script>
