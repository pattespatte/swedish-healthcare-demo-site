<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses,
      disabled || loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
    ]"
    @click="$emit('click')"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="-ml-1 mr-2 h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25"
cx="12"
cy="12"
r="10"
stroke="currentColor"
stroke-width="4"/>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Button content -->
    <slot>
      {{ buttonText }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    type?: 'submit' | 'button' | 'reset'
    variant?: 'primary' | 'secondary'
    disabled?: boolean
    loading?: boolean
    text?: string
  }

  interface Emits {
    (e: 'click'): void
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    variant: 'primary',
    disabled: false,
    loading: false,
    text: ''
  })

  const emit = defineEmits<Emits>()

  // Default button text based on type and variant
  const buttonText = computed(() => {
    if (props.text) {return props.text}

    switch (props.type) {
      case 'submit':
        return 'Skicka'
      case 'reset':
        return 'Återställ'
      case 'button':
      default:
        return props.variant === 'primary' ? 'Fortsätt' : 'Avbryt'
    }
  })

  // CSS classes based on variant
  const variantClasses = computed(() => {
    switch (props.variant) {
      case 'primary':
        return 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500'
      case 'secondary':
        return 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-500'
      default:
        return 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500'
    }
  })
</script>
