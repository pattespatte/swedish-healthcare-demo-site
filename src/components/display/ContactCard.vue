<template>
  <div class="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md">
    <div class="p-6">
      <div class="flex items-start">
        <div v-if="image || $slots.image" class="flex-shrink-0">
          <slot name="image">
            <img v-if="image"
:src="image"
:alt="name"
class="h-16 w-16 rounded-full object-cover" >
            <div v-else class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200">
              <svg
                class="h-8 w-8 text-neutral-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </slot>
        </div>

        <div class="ml-4 flex-1">
          <h3 v-if="title" class="text-lg font-medium text-neutral-900">
            {{ title }}
          </h3>
          <div v-if="name || role" class="mt-1">
            <p v-if="name" class="text-sm font-medium text-neutral-900">
              {{ name }}
            </p>
            <p v-if="role" class="text-sm text-neutral-600">
              {{ role }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="email || phone || address" class="mt-6 space-y-3">
        <div v-if="email" class="flex items-start">
          <svg
            class="mr-3 mt-0.5 h-5 w-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a :href="`mailto:${email}`" class="text-sm text-primary-700 hover:text-primary-800">
            {{ email }}
          </a>
        </div>

        <div v-if="phone" class="flex items-start">
          <svg
            class="mr-3 mt-0.5 h-5 w-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a :href="formatPhoneLink(phone)" class="text-sm text-primary-700 hover:text-primary-800">
            {{ phone }}
          </a>
        </div>

        <div v-if="address" class="flex items-start">
          <svg
            class="mr-3 mt-0.5 h-5 w-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p class="whitespace-pre-line text-sm text-neutral-600">
            {{ address }}
          </p>
        </div>
      </div>

      <div v-if="$slots.default" class="mt-6">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title?: string
    name?: string
    role?: string
    email?: string
    phone?: string
    address?: string
    image?: string
  }

  defineProps<Props>()

  // Format phone number for tel: link
  const formatPhoneLink = (phone: string): string => {
    if (!phone) {return ''}

    // Remove all non-digit characters
    let digits = phone.replace(/\D/g, '')

    // If the number starts with 0 (Swedish domestic format), replace with +46
    if (digits.startsWith('0')) {
      digits = `46${  digits.substring(1)}`
    }
    // If the number doesn't start with country code, assume Swedish number
    else if (!digits.startsWith('46')) {
      digits = `46${  digits}`
    }

    return `tel:+${digits}`
  }
</script>
