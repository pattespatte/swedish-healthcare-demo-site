<template>
  <Modal :visible="visible"
:title="title"
size="small"
@update:visible="$emit('update:visible', $event)">
    <template #default>
      <div class="py-2">
        <p class="text-neutral-700">{{ message }}</p>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          @click="handleCancel"
        >
          {{ cancelText }}
        </button>
        <button
          type="button"
          class="rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
