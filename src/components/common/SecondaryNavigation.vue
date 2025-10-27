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
			<nav class="flex space-x-6">
				<router-link
					v-for="item in navItems"
					:key="item.path"
					:to="item.path"
					class="text-white hover:text-blue-300 font-medium transition-colors duration-200"
					:class="{
						'text-yellow-100 font-bold': isActive(item.path),
					}"
				>
					{{ item.name }}
				</router-link>
			</nav>
		</div>
	</div>
</template>
