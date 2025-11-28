<script setup lang="ts">
	import { computed } from 'vue'
	import { useRoute, useRouter } from 'vue-router'

	const route = useRoute()
	const router = useRouter()

	// Define breadcrumb item type
	interface BreadcrumbItem {
		name: string
		path: string
		isCurrent: boolean
	}

	// Generate breadcrumbs from the current route
	const breadcrumbs = computed<BreadcrumbItem[]>(() => {
		const pathArray = route.path.split('/').filter(p => p)

		// Start with home
		const crumbs: BreadcrumbItem[] = [{ name: 'Start', path: '/', isCurrent: pathArray.length === 0 }]

		// Build path for each segment
		let currentPath = ''

		pathArray.forEach((segment, index) => {
			currentPath += `/${segment}`

			// Convert URL segment to readable name (kebab-case to sentence case for Swedish)
			// Handle special Swedish characters that might be encoded in URLs
			let readableSegment = segment

			// Special case mappings for Swedish characters in URLs
			const swedishMappings: { [key: string]: string } = {
				vard: 'vård',
				formaner: 'förmåner',
				avgifter: 'avgifter', // No special chars but keeping for consistency
				karriarvagar: 'karriärvägar',
				tjanster: 'tjänster',
				hemsjukvard: 'hemsjukvård',
				labbprov: 'labbprov', // No special chars
				specialistmottagningar: 'specialistmottagningar', // No special chars
				mottagningar: 'mottagningar', // No special chars
				vardgaranti: 'vårdgaranti',
				integritetspolicy: 'integritetspolicy', // No special chars
				cookies: 'cookies' // No special chars
			}

			// Apply Swedish character mappings
			for (const [urlSegment, swedishSegment] of Object.entries(swedishMappings)) {
				if (readableSegment.includes(urlSegment)) {
					readableSegment = readableSegment.replace(urlSegment, swedishSegment)
					break // Only apply first match to avoid conflicts
				}
			}

			const readableName = readableSegment
				.split('-')
				.map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.toLowerCase()))
				.join(' ')

			// Check if this is the last segment (current page)
			const isCurrent = index === pathArray.length - 1

			crumbs.push({
				name: readableName,
				path: currentPath,
				isCurrent
			})
		})

		return crumbs
	})

	// Navigate to a breadcrumb path
	const navigateTo = (path: string) => {
		if (path !== route.path) {
			router.push(path)
		}
	}
</script>

<template>
	<nav class="bg-neutral-100 py-3" aria-label="Brödsmula">
		<div class="container mx-auto px-4">
			<ol class="flex items-center space-x-2 text-sm">
				<li v-for="(crumb, index) in breadcrumbs" :key="crumb.path" class="flex items-center">
					<!-- Breadcrumb Item -->
					<!-- Special case: Hide "Start" text on home page but keep container for layout -->
					<span
						v-if="crumb.path === '/' && route.path === '/'"
						class="font-medium text-neutral-800"
						aria-current="page"
					>
						&nbsp;
						<!-- Empty span to maintain layout structure -->
					</span>
					<button
						v-else-if="!crumb.isCurrent"
						@click="navigateTo(crumb.path)"
						class="text-primary-700 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 hover:underline"
						:aria-current="crumb.isCurrent ? 'page' : undefined"
					>
						{{ crumb.name }}
					</button>

					<span v-else class="font-medium text-neutral-800" aria-current="page">
						{{ crumb.name }}
					</span>

					<!-- Separator (not shown after last item) -->
					<svg
						v-if="index < breadcrumbs.length - 1"
						class="ml-2 h-4 w-4 text-neutral-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</li>
			</ol>
		</div>
	</nav>
</template>
