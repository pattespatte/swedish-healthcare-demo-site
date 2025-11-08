<template>
  <div
    class="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md dark:border-dark-border-primary dark:bg-dark-bg-tertiary"
  >
    <div class="overflow-x-auto"
tabindex="0"
role="region"
aria-label="Tabell med data">
      <table class="min-w-full divide-y divide-neutral-200 dark:divide-dark-border-primary">
        <thead class="bg-neutral-50 dark:bg-dark-bg-secondary">
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-dark-text-muted"
              :class="{
                'cursor-pointer hover:bg-neutral-100': sortable
              }"
              @click="sortable ? sortBy(column.key) : null"
            >
              <div class="flex items-center">
                {{ column.label }}
                <span v-if="sortable" class="ml-1">
                  <svg
                    v-if="sortKey === column.key && sortOrder === 'asc'"
                    class="h-4 w-4 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M5 15l7-7 7 7" />
                  </svg>
                  <svg
                    v-else-if="sortKey === column.key && sortOrder === 'desc'"
                    class="h-4 w-4 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M19 9l-7 7-7-7" />
                  </svg>
                  <svg v-else
class="h-4 w-4 text-neutral-300"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200 bg-white dark:divide-dark-border-primary dark:bg-dark-bg-tertiary">
          <tr
            v-for="(row, rowIndex) in paginatedData"
            :key="rowIndex"
            class="hover:bg-neutral-50 dark:hover:bg-dark-hover-bg"
          >
            <td
              v-for="(column, colIndex) in columns"
              :key="colIndex"
              class="whitespace-nowrap px-6 py-4 text-sm"
              :class="getTextColorClass(column.key)"
            >
              <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
                {{ formatCellValue(row[column.key], column.key) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="paginated && totalPages > 1"
      class="flex items-center justify-between border-t border-neutral-200 bg-white px-4 py-3 dark:border-dark-border-primary dark:bg-dark-bg-tertiary sm:px-6"
    >
      <div class="flex flex-1 justify-between sm:hidden">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="relative inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-primary dark:bg-dark-bg-quaternary dark:text-dark-text-primary dark:hover:bg-dark-hover-bg"
        >
          Föregående
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="relative ml-3 inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-primary dark:bg-dark-bg-quaternary dark:text-dark-text-primary dark:hover:bg-dark-hover-bg"
        >
          Nästa
        </button>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-neutral-700 dark:text-dark-text-secondary">
            Visar
            <span class="font-medium">{{ startIndex + 1 }}</span>
            till
            <span class="font-medium">{{ Math.min(endIndex, sortedData.length) }}</span>
            av
            <span class="font-medium">{{ sortedData.length }}</span>
            resultat
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="relative inline-flex items-center rounded-l-md border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-primary dark:bg-dark-bg-quaternary dark:text-dark-text-muted dark:hover:bg-dark-hover-bg"
            >
              <span class="sr-only">Föregående</span>
              <svg class="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
                <path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              class="relative inline-flex items-center border px-4 py-2 text-sm font-medium"
              :class="
                page === currentPage
                  ? 'z-10 border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-50 dark:border-dark-border-primary dark:bg-dark-bg-quaternary dark:text-dark-text-muted dark:hover:bg-dark-hover-bg'
              "
            >
              {{ page }}
            </button>

            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="relative inline-flex items-center rounded-r-md border border-neutral-300 bg-white px-2 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-primary dark:bg-dark-bg-quaternary dark:text-dark-text-muted dark:hover:bg-dark-hover-bg"
            >
              <span class="sr-only">Nästa</span>
              <svg class="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
                <path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>

    <div v-if="sortedData.length === 0" class="py-12 text-center">
      <svg
        class="mx-auto h-12 w-12 text-neutral-400 dark:text-dark-text-muted"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-neutral-900 dark:text-dark-text-primary">Ingen data att visa</h3>
      <p class="mt-1 text-sm text-neutral-500 dark:text-dark-text-muted">
        Det finns ingen data tillgänglig för tillfället.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue'

  interface TableColumn {
    key: string
    label: string
    type?: 'text' | 'number' | 'date' | 'currency'
  }

  interface Props {
    columns: TableColumn[]
    data: Record<string, any>[]
    sortable?: boolean
    paginated?: boolean
    pageSize?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    sortable: true,
    paginated: true,
    pageSize: 10
  })

  const sortKey = ref<string>('')
  const sortOrder = ref<'asc' | 'desc'>('asc')
  const currentPage = ref(1)

  const sortedData = computed(() => {
    if (!sortKey.value || !props.sortable) {
      return props.data
    }

    return [...props.data].sort((a, b) => {
      const aValue = a[sortKey.value]
      const bValue = b[sortKey.value]

      if (aValue < bValue) {
        return sortOrder.value === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortOrder.value === 'asc' ? 1 : -1
      }
      return 0
    })
  })

  const totalPages = computed(() => {
    return Math.ceil(sortedData.value.length / props.pageSize)
  })

  const startIndex = computed(() => {
    return (currentPage.value - 1) * props.pageSize
  })

  const endIndex = computed(() => {
    return startIndex.value + props.pageSize
  })

  const paginatedData = computed(() => {
    if (!props.paginated) {
      return sortedData.value
    }

    return sortedData.value.slice(startIndex.value, endIndex.value)
  })

  const visiblePages = computed(() => {
    const pages = []
    const maxVisible = 5
    let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
    const endPage = Math.min(totalPages.value, startPage + maxVisible - 1)

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  })

  const sortBy = (key: string) => {
    if (!props.sortable) {return}

    if (sortKey.value === key) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortKey.value = key
      sortOrder.value = 'asc'
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const goToPage = (page: number) => {
    currentPage.value = page
  }

  const formatCellValue = (value: any, key: string) => {
    const column = props.columns.find(col => col.key === key)

    if (!column || !column.type) {
      return value
    }

    switch (column.type) {
      case 'date':
        return value ? new Date(value).toLocaleDateString('sv-SE') : '-'
      case 'currency':
        return value ? `${value.toLocaleString('sv-SE')} kr` : '-'
      case 'number':
        return value !== null && value !== undefined ? value.toLocaleString('sv-SE') : '-'
      default:
        return value !== null && value !== undefined ? value : '-'
    }
  }

  const getTextColorClass = (key: string) => {
    const column = props.columns.find(col => col.key === key)

    if (column?.type === 'number' || column?.type === 'currency') {
      return 'text-neutral-900 dark:text-dark-text-primary font-medium'
    }

    return 'text-neutral-600 dark:text-dark-text-secondary'
  }

  watch(
    () => props.data,
    () => {
      currentPage.value = 1
    }
  )
</script>
