<template>
	<div class="mb-4">
		<label :for="id" class="dark:text-dark-text-primary mb-1 block text-sm font-medium text-gray-700">
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
				'w-full resize-none rounded-md border px-3 py-2 shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none',
				error
					? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400'
					: 'dark:focus:border-primary-400 dark:focus:ring-primary-400 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500',
				disabled ? 'dark:bg-dark-bg-quaternary cursor-not-allowed bg-gray-100' : 'dark:bg-dark-bg-secondary bg-white'
			]"
			@input="handleInput"
			@blur="$emit('blur')"
		/>

		<!-- Character counter -->
		<div v-if="showCharacterCounter" class="dark:text-dark-text-muted mt-1 text-right text-sm text-gray-500">
			{{ currentLength }} / {{ maxLength }}
		</div>

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
		placeholder?: string
		required?: boolean
		disabled?: boolean
		error?: string
		value?: string
		modelValue?: string
		rows?: number
		maxLength?: number
		showCharacterCounter?: boolean
	}

	interface Emits {
		(e: 'update:modelValue', value: string): void
		(e: 'blur'): void
	}

	const props = withDefaults(defineProps<Props>(), {
		placeholder: 'Ange text här...',
		required: false,
		disabled: false,
		error: '',
		value: '',
		modelValue: '',
		rows: 4,
		maxLength: 500,
		showCharacterCounter: true
	})

	const emit = defineEmits<Emits>()

	// Handle input event with proper type casting
	const handleInput = (event: Event) => {
		const target = event.target as HTMLTextAreaElement
		emit('update:modelValue', target.value)
	}

	// Calculate current text length
	const currentLength = computed(() => {
		return props.modelValue ? props.modelValue.length : 0
	})
</script>
