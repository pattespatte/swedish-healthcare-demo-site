<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Define the navigation item interface
interface NavItem {
	name: string;
	path: string;
	hasDropdown: boolean;
	dropdownItems: { name: string; path: string }[];
}

// State for mobile menu and dropdowns
const isMenuOpen = ref(false);
const openDropdown = ref<string | null>(null);

// Navigation links with dropdowns
const navLinks: NavItem[] = [
	{
		name: "Start",
		path: "/",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Tjänster",
		path: "/tjanster",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Boka tid",
		path: "/boka-tid",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Mina sidor",
		path: "/mina-sidor",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Kontakt",
		path: "/kontakt",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Frågor och svar",
		path: "/fragor-och-svar",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Vårdguide",
		path: "/vardguide",
		hasDropdown: false,
		dropdownItems: [],
	},
	{
		name: "Tillgänglighet",
		path: "/tillganglighet",
		hasDropdown: false,
		dropdownItems: [],
	},
];

// Toggle mobile menu
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

// Toggle dropdown
const toggleDropdown = (name: string) => {
	if (openDropdown.value === name) {
		openDropdown.value = null;
	} else {
		openDropdown.value = name;
	}
};

// Check if a link is active
const isActive = (path: string) => {
	return route.path === path;
};

// Check if a dropdown item is active
const isDropdownActive = (dropdownItems: any[]) => {
	return dropdownItems.some((item) => route.path === item.path);
};

// Close dropdowns when clicking outside
const closeDropdowns = () => {
	openDropdown.value = null;
};
</script>

<template>
	<nav class="bg-white shadow-sm">
		<div class="container mx-auto px-4">
			<!-- Desktop Navigation -->
			<div class="hidden md:flex">
				<ul class="flex space-x-1">
					<li
						v-for="link in navLinks"
						:key="link.name"
						class="relative"
					>
						<router-link
							:to="link.path"
							class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200"
							:class="{
								'text-primary-700 font-semibold':
									isActive(link.path) ||
									(link.hasDropdown &&
										isDropdownActive(link.dropdownItems)),
							}"
							@click="closeDropdowns"
						>
							{{ link.name }}
						</router-link>

						<!-- Dropdown Menu -->
						<div
							v-if="link.hasDropdown"
							class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg z-10"
							:class="{
								block: openDropdown === link.name,
								hidden: openDropdown !== link.name,
							}"
						>
							<ul>
								<li
									v-for="item in link.dropdownItems"
									:key="item.path"
								>
									<router-link
										:to="item.path"
										class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
										:class="{
											'bg-primary-50 text-primary-700 font-medium':
												isActive(item.path),
										}"
										@click="closeDropdowns"
									>
										{{ item.name }}
									</router-link>
								</li>
							</ul>
						</div>

						<!-- Dropdown Toggle Button -->
						<button
							v-if="link.hasDropdown"
							@click="toggleDropdown(link.name)"
							class="absolute right-0 top-3.5 px-2 text-neutral-500 hover:text-primary-700 focus:outline-none"
							:aria-expanded="openDropdown === link.name"
							:aria-label="`Visa undermeny för ${link.name}`"
						>
							<svg
								class="w-4 h-4 transition-transform duration-200"
								:class="{
									'rotate-180': openDropdown === link.name,
								}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								></path>
							</svg>
						</button>
					</li>
				</ul>
			</div>

			<!-- Mobile Navigation Toggle -->
			<div class="md:hidden flex justify-between items-center py-3">
				<span class="font-semibold text-neutral-800">Meny</span>
				<button
					@click="toggleMenu"
					class="text-neutral-700 hover:text-primary-700 focus:outline-none"
					aria-label="Öppna meny"
					aria-expanded="false"
				>
					<svg
						v-if="!isMenuOpen"
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
					<svg
						v-else
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation Menu -->
			<div
				v-if="isMenuOpen"
				class="md:hidden py-2 border-t border-neutral-200"
			>
				<ul class="space-y-1">
					<li v-for="link in navLinks" :key="link.name">
						<div class="flex items-center justify-between">
							<router-link
								:to="link.path"
								class="flex-1 px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200"
								:class="{
									'text-primary-700 font-semibold':
										isActive(link.path) ||
										(link.hasDropdown &&
											isDropdownActive(
												link.dropdownItems
											)),
								}"
								@click="
									link.hasDropdown
										? toggleDropdown(link.name)
										: toggleMenu()
								"
							>
								{{ link.name }}
							</router-link>

							<!-- Mobile Dropdown Toggle Button -->
							<button
								v-if="link.hasDropdown"
								@click="toggleDropdown(link.name)"
								class="px-4 py-3 text-neutral-500 hover:text-primary-700 focus:outline-none"
								:aria-expanded="openDropdown === link.name"
								:aria-label="`Visa undermeny för ${link.name}`"
							>
								<svg
									class="w-4 h-4 transition-transform duration-200"
									:class="{
										'rotate-180':
											openDropdown === link.name,
									}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</button>
						</div>

						<!-- Mobile Dropdown Menu -->
						<ul
							v-if="
								link.hasDropdown && openDropdown === link.name
							"
							class="bg-neutral-50 pl-6"
						>
							<li
								v-for="item in link.dropdownItems"
								:key="item.path"
							>
								<router-link
									:to="item.path"
									class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
									:class="{
										'bg-primary-50 text-primary-700 font-medium':
											isActive(item.path),
									}"
									@click="toggleMenu"
								>
									{{ item.name }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
