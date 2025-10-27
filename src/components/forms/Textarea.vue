<template>
	<div class="mb-4">
		<label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<textarea
			:id="id"
			:name="name"
			:placeholder="placeholder"
			:value="modelValue"
			:rows="rows"
			:maxlength="maxLength"
			:required="required"
			:disabled="disabled"
			:class="[
				'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-none',
				error
					? 'border-red-500 focus:ring-red-500 focus:border-red-500'
					: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
				disabled ? 'bg-gray-100 cursor-not-allowed' : '',
			]"
			@input="$emit('update:modelValue', $event.target.value)"
			@blur="$emit('blur')"
		></textarea>

		<!-- Character counter -->
		<div
			v-if="showCharacterCounter"
			class="mt-1 text-sm text-gray-500 text-right"
		>
			{{ currentLength }} / {{ maxLength }}
		</div>

		<p v-if="error" class="mt-1 text-sm text-red-600">
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	value?: string;
	modelValue?: string;
	rows?: number;
	maxLength?: number;
	showCharacterCounter?: boolean;
}

interface Emits {
	(e: "update:modelValue", value: string): void;
	(e: "blur"): void;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: "Ange text här...",
	required: false,
	disabled: false,
	error: "",
	value: "",
	modelValue: "",
	rows: 4,
	maxLength: 500,
	showCharacterCounter: true,
});

const emit = defineEmits<Emits>();

// Calculate current text length
const currentLength = computed(() => {
	return props.modelValue ? props.modelValue.length : 0;
});
</script>
