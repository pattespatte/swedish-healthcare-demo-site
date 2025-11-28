<template>
	<div class="mb-4">
		<label :for="id" class="dark:text-dark-text-primary mb-1 flex items-center text-sm font-medium text-gray-700">
			<component :is="getInputIcon()" size="16" class="mr-2 text-gray-500" />
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<div class="relative">
			<input
				:id="id"
				:type="type"
				:name="name"
				:placeholder="placeholder"
				:value="modelValue"
				:required="required"
				:disabled="disabled"
				:class="[
					'w-full rounded-md border px-3 py-2 shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none',
					error
						? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400'
						: 'dark:focus:border-primary-400 dark:focus:ring-primary-400 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500',
					disabled ? 'dark:bg-dark-bg-quaternary cursor-not-allowed bg-gray-100' : 'dark:bg-dark-bg-tertiary bg-white'
				]"
				@input="handleInput"
				@blur="$emit('blur')"
			/>
			<div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3">
				<PhWarningCircle size="16" class="text-red-500" weight="fill" />
			</div>
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
		type?: 'text' | 'email' | 'tel' | 'password'
		modelValue?: string
	}

	interface Emits {
		(e: 'update:modelValue', value: string): void
		(e: 'blur'): void
	}

	const props = withDefaults(defineProps<Props>(), {
		placeholder: '',
		required: false,
		disabled: false,
		error: '',
		value: '',
		type: 'text',
		modelValue: ''
	})

	const emit = defineEmits<Emits>()

	// Handle input event with proper type casting
	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		emit('update:modelValue', target.value)
	}

	// Get appropriate icon based on input type
	const getInputIcon = () => {
		switch (props.type) {
			case 'email':
				return 'PhEnvelope'
			case 'tel':
				return 'PhPhone'
			case 'password':
				return 'PhLock'
			case 'text':
			default:
				return 'PhTextT'
		}
	}

	// Default Swedish placeholders based on input type
	const defaultPlaceholders = computed(() => {
		switch (props.type) {
			case 'email':
				return 'din.epost@exempel.se'
			case 'tel':
				return '070-123 45 67'
			case 'password':
				return '••••••••'
			default:
				return 'Ange text här...'
		}
	})

	// Use provided placeholder or default based on type
	const placeholder = computed(() => {
		return props.placeholder || defaultPlaceholders.value
	})
</script>
