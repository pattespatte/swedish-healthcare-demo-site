<template>
	<div class="mb-4">
		<label :for="id" class="mb-1 block text-sm font-medium text-gray-700">
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<input
			:id="id"
			:name="name"
			type="date"
			:value="formattedValue"
			:min="minDate"
			:max="maxDate"
			:required="required"
			:disabled="disabled"
			:class="[
				'w-full rounded-md border px-3 py-2 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
				error
					? 'border-red-500 focus:border-red-500 focus:ring-red-500'
					: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
				disabled ? 'cursor-not-allowed bg-gray-100' : ''
			]"
			@input="handleDateInput"
			@blur="$emit('blur')"
		/>
		<p v-if="error" class="mt-1 text-sm text-red-600">
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'

	interface Props {
		label: string
		id: string
		name: string
		required?: boolean
		disabled?: boolean
		error?: string
		value?: string
		modelValue?: string
		minDate?: string
		maxDate?: string
	}

	interface Emits {
		(e: 'update:modelValue', value: string): void
		(e: 'blur'): void
	}

	const props = withDefaults(defineProps<Props>(), {
		required: false,
		disabled: false,
		error: '',
		value: '',
		modelValue: '',
		minDate: '',
		maxDate: ''
	})

	const emit = defineEmits<Emits>()

	// Format the value for the input element (YYYY-MM-DD)
	const formattedValue = computed(() => {
		if (!props.modelValue) {
			return ''
		}

		// If the value is already in YYYY-MM-DD format, return it as is
		if (/^\d{4}-\d{2}-\d{2}$/.test(props.modelValue)) {
			return props.modelValue
		}

		// Otherwise, try to parse and format it
		try {
			const date = new Date(props.modelValue)
			if (!isNaN(date.getTime())) {
				const year = date.getFullYear()
				const month = String(date.getMonth() + 1).padStart(2, '0')
				const day = String(date.getDate()).padStart(2, '0')
				return `${year}-${month}-${day}`
			}
		} catch (e) {
			console.error('Invalid date format:', e)
		}

		return ''
	})

	// Handle date input and emit in YYYY-MM-DD format
	const handleDateInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		emit('update:modelValue', target.value)
	}
</script>
