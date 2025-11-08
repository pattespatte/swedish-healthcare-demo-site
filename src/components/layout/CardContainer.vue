<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    /**
     * Additional CSS classes to apply to the container
     */
    class?: string
    /**
     * Whether the container should have hover effects
     */
    hoverable?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    hoverable: false
  })

  const containerClasses = computed(() => {
    const baseClasses = 'bg-white rounded-lg shadow-md p-6'
    const darkModeClasses = 'dark:bg-dark-bg-tertiary'
    const hoverClasses = props.hoverable ? 'transition-transform hover:scale-105 hover:shadow-lg cursor-pointer' : ''
    const customClasses = props.class || ''

    return [baseClasses, darkModeClasses, hoverClasses, customClasses].filter(Boolean).join(' ')
  })
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<style scoped>
  /**
 * Component-specific styles for CardContainer
 * This component encapsulates the common bg-white rounded-lg shadow-md p-6 pattern
 * with dark mode support using the existing CSS variables from main.css
 */
</style>
