<template>
	<Modal :visible="visible" :title="title" size="small" @update:visible="$emit('update:visible', $event)">
		<template #default>
			<div class="py-2">
				<p class="text-neutral-700">{{ message }}</p>
			</div>
		</template>

		<template #footer>
			<div class="flex justify-end space-x-3">
				<button
					type="button"
					class="focus:ring-primary-500 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:ring-2 focus:ring-offset-2 focus:outline-none"
					@click="handleCancel"
				>
					{{ cancelText }}
				</button>
				<button
					type="button"
					class="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
					@click="handleConfirm"
				>
					{{ confirmText }}
				</button>
			</div>
		</template>
	</Modal>
</template>

<script setup lang="ts">
	import Modal from './Modal.vue'

	// Props
	interface Props {
		title?: string
		message: string
		visible: boolean
		confirmText?: string
		cancelText?: string
	}

	const props = withDefaults(defineProps<Props>(), {
		title: 'Bekräfta',
		message: '',
		visible: false,
		confirmText: 'Ja, bekräfta',
		cancelText: 'Avbryt'
	})

	// Emits
	const emit = defineEmits<{
		'update:visible': [value: boolean]
		confirm: []
		cancel: []
	}>()

	// Handle confirm action
	const handleConfirm = () => {
		emit('confirm')
		emit('update:visible', false)
	}

	// Handle cancel action
	const handleCancel = () => {
		emit('cancel')
		emit('update:visible', false)
	}
</script>
