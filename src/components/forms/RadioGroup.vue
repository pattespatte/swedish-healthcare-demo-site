<template>
	<div class="mb-4">
		<fieldset :disabled="disabled">
			<legend class="mb-2 block text-sm font-medium text-gray-700">
				{{ label }}
				<span v-if="required" class="text-red-500">*</span>
			</legend>

			<div :class="layout === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-2'">
				<div v-for="option in options" :key="option.value" class="flex items-center">
					<input
						:id="`${id}-${option.value}`"
						:name="name"
						type="radio"
						:value="option.value"
						:checked="modelValue === option.value"
						:required="required"
						:disabled="disabled"
						:class="['h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500', error ? 'border-red-500' : '']"
						@change="$emit('update:modelValue', option.value)"
						@blur="$emit('blur')"
					/>
					<label :for="`${id}-${option.value}`" class="ml-2 block text-sm text-gray-700">
						{{ option.label }}
					</label>
				</div>
			</div>

			<p v-if="error" class="mt-1 text-sm text-red-600">
				{{ error }}
			</p>
		</fieldset>
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
		name: string
		options: Option[]
		required?: boolean
		disabled?: boolean
		error?: string
		value?: string | number
		modelValue?: string | number
		layout?: 'horizontal' | 'vertical'
		id?: string
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
		layout: 'vertical',
		id: 'radio-group'
	})

	defineEmits<Emits>()
</script>
