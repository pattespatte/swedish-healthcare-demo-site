<template>
	<div class="mb-4">
		<label :for="id" class="mb-1 block text-sm font-medium text-gray-700 dark:text-dark-text-primary">
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<select
			:id="id"
			:name="name"
			:required="required"
			:disabled="disabled"
			:class="[
				'w-full rounded-md border px-3 py-2 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
				error
					? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400'
					: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500 dark:focus:border-primary-400 dark:focus:ring-primary-400',
				disabled ? 'cursor-not-allowed bg-gray-100 dark:bg-dark-bg-quaternary' : 'bg-white dark:bg-dark-bg-secondary'
			]"
			@change="handleChange"
			@blur="$emit('blur')"
		>
			<option value="">
				{{ placeholder || 'Välj ett alternativ...' }}
			</option>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
				:selected="modelValue === option.value"
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
	import { computed } from 'vue'

	interface Option {
		value: string | number
		label: string
	}

	interface Props {
		label: string
		id: string
		name: string
		options: Option[]
		required?: boolean
		disabled?: boolean
		error?: string
		value?: string | number
		modelValue?: string | number
		placeholder?: string
	}

	interface Emits {
		(e: 'update:modelValue', value: string | number): void
		(e: 'blur'): void
	}

	const props = withDefaults(defineProps<Props>(), {
		required: false,
		disabled: false,
		error: '',
		value: '',
		modelValue: '',
		placeholder: 'Välj ett alternativ...'
	})

	const emit = defineEmits<Emits>()

	// Handle change event with proper type casting
	const handleChange = (event: Event) => {
		const target = event.target as HTMLSelectElement
		emit('update:modelValue', target.value)
	}
</script>
