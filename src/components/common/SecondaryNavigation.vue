<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// Navigation items for "Om oss" section
const navItems = [
	{ name: "Om oss", path: "/om-oss" },
	{ name: "Jobba hos oss", path: "/om-oss/jobba-hos-oss" },
	{ name: "Lediga tjänster", path: "/om-oss/lediga-tjanster" },
	{ name: "Karriärvägar", path: "/om-oss/karriarvagar" },
	{ name: "Förmåner", path: "/om-oss/formaner" },
];

// Check if a link is active
const isActive = (path: string) => {
	return route.path === path;
};
</script>

<template>
	<nav
		class="bg-neutral-800 border-b border-blue-200 px-4 py-4"
		aria-label="Sekundär navigering"
	>
		<ul
			class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0"
		>
			<li v-for="item in navItems" :key="item.path">
				<router-link
					:to="item.path"
					class="text-white hover:text-blue-200 font-medium transition-colors duration-200 py-1 relative"
					:class="{
						'text-yellow-100 font-bold active-nav-link': isActive(
							item.path
						),
					}"
				>
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.active-nav-link {
	position: relative;
}

.active-nav-link::after {
	content: "";
	position: absolute;
	bottom: 0; /* Default for mobile */
	left: 0;
	width: 100%;
	height: 4px; /* 4px thick underline */
	background-color: #2e60ff; /* Blue color from the palette */
}

/* For desktop screens (md and up) */
@media (min-width: 768px) {
	.active-nav-link::after {
		bottom: 0.3rem; /* Position 0.3rem below the text on larger screens */
	}
}

/* Ensure proper spacing for the two-row layout */
@media (min-width: 1024px) {
	/* Adjust the active nav link positioning for the second row */
	nav .active-nav-link::after {
		bottom: -0.4rem; /* Slight adjustment for better visual alignment in second row */
	}
}
</style>
