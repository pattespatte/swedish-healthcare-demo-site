<template>
	<div class="mb-4">
		<label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<select
			:id="id"
			:name="name"
			:value="modelValue"
			:required="required"
			:disabled="disabled"
			:class="[
				'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors',
				error
					? 'border-red-500 focus:ring-red-500 focus:border-red-500'
					: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
				disabled ? 'bg-gray-100 cursor-not-allowed' : '',
			]"
			@change="handleChange"
			@blur="$emit('blur')"
		>
			<option value="" disabled selected>
				{{ placeholder || "Välj ett alternativ..." }}
			</option>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>
		<p v-if="error" class="mt-1 text-sm text-red-600">
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Option {
	value: string | number;
	label: string;
}

interface Props {
	label: string;
	id: string;
	name: string;
	options: Option[];
	required?: boolean;
	disabled?: boolean;
	error?: string;
	value?: string | number;
	modelValue?: string | number;
	placeholder?: string;
}

interface Emits {
	(e: "update:modelValue", value: string | number): void;
	(e: "blur"): void;
}

const props = withDefaults(defineProps<Props>(), {
	required: false,
	disabled: false,
	error: "",
	value: "",
	modelValue: "",
	placeholder: "Välj ett alternativ...",
});

const emit = defineEmits<Emits>();

// Handle change event with proper type casting
const handleChange = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	emit("update:modelValue", target.value);
};
</script>
