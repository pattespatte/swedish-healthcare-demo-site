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
            type="checkbox"
            :value="option.value"
            :checked="isChecked(option.value)"
            :required="required && !hasAnySelection"
            :disabled="disabled"
            :class="[
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
              error ? 'border-red-500' : ''
            ]"
            @change="handleCheckboxChange(option.value)"
            @blur="$emit('blur')"
          >
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
    value?: (string | number)[]
    modelValue?: (string | number)[]
    layout?: 'horizontal' | 'vertical'
    id?: string
  }

  interface Emits {
    (e: 'update:modelValue', value: (string | number)[]): void
    (e: 'blur'): void
  }

  const props = withDefaults(defineProps<Props>(), {
    required: false,
    disabled: false,
    error: '',
    value: () => [],
    modelValue: () => [],
    layout: 'vertical',
    id: 'checkbox-group'
  })

  const emit = defineEmits<Emits>()

  // Check if a specific option is selected
  const isChecked = (value: string | number) => {
    return props.modelValue.includes(value)
  }

  // Check if any option is selected (for required validation)
  const hasAnySelection = computed(() => {
    return props.modelValue.length > 0
  })

  // Handle checkbox change events
  const handleChange = (value: string | number, checked: boolean) => {
    let newValue = [...props.modelValue]

    if (checked) {
      // Add the value if it's not already in the array
      if (!newValue.includes(value)) {
        newValue.push(value)
      }
    } else {
      // Remove the value if it's in the array
      newValue = newValue.filter(item => item !== value)
    }

    // Emit the updated array
    emit('update:modelValue', newValue)
  }

  // Handle checkbox change event with proper type casting
  const handleCheckboxChange = (value: string | number) => {
    return (event: Event) => {
      const target = event.target as HTMLInputElement
      handleChange(value, target.checked)
    }
  }
</script>
