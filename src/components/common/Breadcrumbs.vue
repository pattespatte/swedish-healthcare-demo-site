<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Define breadcrumb item type
interface BreadcrumbItem {
	name: string;
	path: string;
	isCurrent: boolean;
}

// Generate breadcrumbs from the current route
const breadcrumbs = computed<BreadcrumbItem[]>(() => {
	const pathArray = route.path.split("/").filter((p) => p);

	// Start with home
	const crumbs: BreadcrumbItem[] = [
		{ name: "Start", path: "/", isCurrent: pathArray.length === 0 },
	];

	// Build path for each segment
	let currentPath = "";

	pathArray.forEach((segment, index) => {
		currentPath += `/${segment}`;

		// Convert URL segment to readable name (kebab-case to Title Case)
		const readableName = segment
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");

		// Check if this is the last segment (current page)
		const isCurrent = index === pathArray.length - 1;

		crumbs.push({
			name: readableName,
			path: currentPath,
			isCurrent,
		});
	});

	return crumbs;
});

// Navigate to a breadcrumb path
const navigateTo = (path: string) => {
	if (path !== route.path) {
		router.push(path);
	}
};
</script>

<template>
	<nav class="bg-neutral-100 py-3" aria-label="Brödsmula">
		<div class="container mx-auto px-4">
			<ol class="flex items-center space-x-2 text-sm">
				<li
					v-for="(crumb, index) in breadcrumbs"
					:key="crumb.path"
					class="flex items-center"
				>
					<!-- Breadcrumb Item -->
					<button
						v-if="!crumb.isCurrent"
						@click="navigateTo(crumb.path)"
						class="text-primary-700 hover:text-primary-800 hover:underline transition-colors duration-200"
						:aria-current="crumb.isCurrent ? 'page' : undefined"
					>
						{{ crumb.name }}
					</button>

					<span
						v-else
						class="text-neutral-800 font-medium"
						aria-current="page"
					>
						{{ crumb.name }}
					</span>

					<!-- Separator (not shown after last item) -->
					<svg
						v-if="index < breadcrumbs.length - 1"
						class="ml-2 w-4 h-4 text-neutral-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</li>
			</ol>
		</div>
	</nav>
</template>
