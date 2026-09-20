<script setup lang="ts">
	import { useId } from 'vue'
	import { useRoute } from 'vue-router'
	import type { RelatedLink } from '@/data/omOssSection'

	// Right-hand section sidebar: a small heading over a link list separated from
	// the content by a vertical rule. Pairs with the two-column grid wrapper on
	// the section pages; the current page is highlighted and marked with
	// aria-current="page".
	const props = withDefaults(
		defineProps<{
			links: RelatedLink[]
			title?: string
		}>(),
		{
			title: 'Relaterad information'
		}
	)

	const route = useRoute()
	const headingId = useId()
</script>

<template>
	<nav class="mt-14" :aria-labelledby="headingId">
		<h2 :id="headingId" class="mb-5 text-xl font-semibold text-gray-800 dark:text-dark-text-primary">
			{{ props.title }}
		</h2>
		<ul class="flex list-none flex-col gap-6 border-l-2 border-neutral-200 pl-5 dark:border-dark-border-primary">
			<li v-for="link in props.links" :key="link.to">
				<router-link
					:to="link.to"
					class="text-neutral-600 transition-colors duration-200 hover:text-gray-800 hover:underline dark:text-dark-text-muted dark:hover:text-dark-text-primary"
					:class="{
						'font-semibold text-gray-800 dark:text-dark-text-primary': route.path === link.to
					}"
					:aria-current="route.path === link.to ? 'page' : undefined"
				>
					{{ link.label }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>
