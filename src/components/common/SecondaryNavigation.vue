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
	<div class="bg-neutral-800 border-b border-blue-200">
		<div class="container mx-auto px-4 py-4">
			<nav
				class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0"
				aria-label="Sekundär navigering"
			>
				<router-link
					v-for="item in navItems"
					:key="item.path"
					:to="item.path"
					class="text-white hover:text-blue-200 font-medium transition-colors duration-200 py-1"
					:class="{
						'text-yellow-100 font-bold active-nav-link': isActive(
							item.path
						),
					}"
				>
					{{ item.name }}
				</router-link>
			</nav>
		</div>
	</div>
</template>

<style scoped>
.active-nav-link {
	position: relative;
}

.active-nav-link::after {
	content: "";
	position: absolute;
	bottom: -0.4rem;
	left: 0;
	width: 100%;
	height: 4px; /* 4px thick underline */
	background-color: #9dc1fa;
}
</style>
