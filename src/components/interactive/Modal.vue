<template>
	<!-- Modal backdrop -->
	<div>
		<Transition
			enter-active-class="transition-opacity duration-300 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="visible"
				class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
				@click="handleBackdropClick"
				aria-hidden="true"
			></div>
		</Transition>

		<!-- Modal content -->
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-from-class="opacity-0 scale-95"
			enter-to-class="opacity-100 scale-100"
			leave-active-class="transition-all duration-200 ease-in"
			leave-from-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-95"
		>
		<div
			v-if="visible"
			class="fixed inset-0 z-50 flex items-center justify-center p-4"
			role="dialog"
			aria-modal="true"
			:aria-labelledby="titleId"
			@keydown.esc="handleEscapeKey"
		>
			<div
				:class="modalSizeClasses"
				class="bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col overflow-hidden"
				@click.stop
			>
				<!-- Modal header -->
				<div
					v-if="$slots.header || title"
					class="px-6 py-4 border-b border-neutral-200"
				>
					<div class="flex items-center justify-between">
						<h2
							:id="titleId"
							class="text-xl font-semibold text-neutral-800"
						>
							{{ title }}
						</h2>
						<button
							v-if="closable"
							type="button"
							class="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
							@click="$emit('update:visible', false)"
							aria-label="Stäng"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<slot name="header"></slot>
				</div>

				<!-- Modal body -->
				<div class="flex-1 overflow-y-auto px-6 py-4">
					<slot></slot>
				</div>

				<!-- Modal footer -->
				<div
					v-if="$slots.footer"
					class="px-6 py-4 border-t border-neutral-200 bg-neutral-50"
				>
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

// Props
interface Props {
	title?: string;
	visible: boolean;
	size?: "small" | "medium" | "large";
	closable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	title: "",
	visible: false,
	size: "medium",
	closable: true,
});

// Emits
const emit = defineEmits<{
	"update:visible": [value: boolean];
}>();

// Generate unique ID for title
const titleId = ref(
	`modal-title-${Math.random().toString(36).substring(2, 9)}`
);

// Compute modal size classes
const modalSizeClasses = computed(() => {
	switch (props.size) {
		case "small":
			return "max-w-md w-full";
		case "large":
			return "max-w-4xl w-full";
		case "medium":
		default:
			return "max-w-2xl w-full";
	}
});

// Handle backdrop click
const handleBackdropClick = () => {
	if (props.closable) {
		emit("update:visible", false);
	}
};

// Handle escape key
const handleEscapeKey = () => {
	if (props.closable) {
		emit("update:visible", false);
	}
};

// Focus trap when modal is open
watch(
	() => props.visible,
	(newVal) => {
		if (newVal) {
			// Store the currently focused element
			const activeElement = document.activeElement as HTMLElement;
			if (activeElement) {
				// Return focus to this element when modal closes
				setTimeout(() => {
					const firstFocusable = document.querySelector(
						'[role="dialog"] button, [role="dialog"] input, [role="dialog"] select, [role="dialog"] textarea'
					) as HTMLElement;
					if (firstFocusable) {
						firstFocusable.focus();
					}
				}, 100);
			}
		}
	}
);
</script>
