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
const showSecondaryNav = ref(false);
let hoverTimeout: number | null = null;

// Navigation links with dropdowns
const navLinks: NavItem[] = [
	{
		name: "Om oss",
		path: "/om-oss",
		hasDropdown: true,
		dropdownItems: [
			{ name: "Om oss", path: "/om-oss" },
			{ name: "Jobba hos oss", path: "/om-oss/jobba-hos-oss" },
			{ name: "Lediga tjänster", path: "/om-oss/lediga-tjanster" },
			{ name: "Karriärvägar", path: "/om-oss/karriarvagar" },
			{ name: "Förmåner", path: "/om-oss/formaner" },
		],
	},
	{
		name: "Tjänster",
		path: "/tjanster",
		hasDropdown: true,
		dropdownItems: [
			{ name: "Översikt", path: "/tjanster" },
			{ name: "Mottagningar", path: "/mottagningar" },
			{
				name: "Specialistmottagningar",
				path: "/tjanster/specialistmottagningar",
			},
			{ name: "Labbprov", path: "/tjanster/labbprov" },
			{ name: "Hemsjukvård", path: "/tjanster/hemsjukvard" },
		],
	},
	{
		name: "Patientinformation",
		path: "/patientinformation",
		hasDropdown: true,
		dropdownItems: [
			{ name: "Översikt", path: "/patientinformation" },
			{ name: "Vårdgaranti", path: "/patientinformation/vardgaranti" },
			{ name: "Avgifter", path: "/patientinformation/avgifter" },
			{
				name: "Din vårdkontakt",
				path: "/patientinformation/din-vardkontakt",
			},
		],
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

// Show secondary navigation on hover
const showSecondaryNavOnHover = () => {
	if (hoverTimeout) {
		clearTimeout(hoverTimeout);
		hoverTimeout = null;
	}
	showSecondaryNav.value = true;
};

// Hide secondary navigation with delay
const hideSecondaryNavOnHover = () => {
	hoverTimeout = window.setTimeout(() => {
		showSecondaryNav.value = false;
	}, 200); // 200ms delay before hiding
};

// Keep secondary navigation visible when hovering over it
const keepSecondaryNavVisible = () => {
	if (hoverTimeout) {
		clearTimeout(hoverTimeout);
		hoverTimeout = null;
	}
	showSecondaryNav.value = true;
};

// Calculate position of "Om oss" link for secondary navigation alignment
const getOmOssPosition = () => {
	const omOssIndex = navLinks.findIndex((link) => link.name === "Om oss");
	if (omOssIndex === -1) return 0;

	// Calculate the approximate position based on the index
	// This accounts for the space-x-1 (4px) spacing between items
	// and the average width of navigation items
	const basePosition = omOssIndex * 100; // More realistic width per nav item

	// Adjust for the container padding and move significantly more to the left
	return basePosition - 40; // Further reduced offset for better alignment (additional 20px to the left)
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
						@mouseenter="
							link.name === 'Om oss'
								? showSecondaryNavOnHover()
								: null
						"
						@mouseleave="
							link.name === 'Om oss'
								? hideSecondaryNavOnHover()
								: null
						"
					>
						<router-link
							:to="link.path"
							class="px-4 py-3 block text-neutral-700 hover:text-neutral-800 font-medium transition-colors duration-200"
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
										class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-neutral-800 transition-colors duration-200"
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
							class="absolute right-0 top-3.5 px-2 text-neutral-500 hover:text-neutral-800 focus:outline-none"
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

				<!-- Secondary Navigation for "Om oss" -->
				<div
					class="absolute top-full bg-blue-100 border-b border-blue-200 transition-all duration-300 ease-in-out z-20"
					:style="{ left: `${getOmOssPosition()}px`, width: '400px' }"
					:class="{
						'opacity-100 translate-y-0': showSecondaryNav,
						'opacity-0 -translate-y-2 pointer-events-none':
							!showSecondaryNav,
					}"
					@mouseenter="keepSecondaryNavVisible"
					@mouseleave="hideSecondaryNavOnHover"
				>
					<div class="px-4 py-4">
						<nav class="flex space-x-6">
							<router-link
								v-for="item in navLinks.find(
									(link) => link.name === 'Om oss'
								)?.dropdownItems || []"
								:key="item.path"
								:to="item.path"
								class="text-blue-700 hover:text-neutral-800 font-medium transition-colors duration-200"
								:class="{
									'text-blue-900 font-bold': isActive(
										item.path
									),
								}"
								@click="closeDropdowns"
							>
								{{ item.name }}
							</router-link>
						</nav>
					</div>
				</div>
			</div>

			<!-- Mobile Navigation Toggle -->
			<div class="md:hidden flex justify-between items-center py-3">
				<span class="font-semibold text-neutral-800">Meny</span>
				<button
					@click="toggleMenu"
					class="text-neutral-700 hover:text-neutral-800 focus:outline-none"
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
								class="flex-1 px-4 py-3 block text-neutral-700 hover:text-neutral-800 font-medium transition-colors duration-200"
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
								class="px-4 py-3 text-neutral-500 hover:text-neutral-800 focus:outline-none"
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
									class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-neutral-800 transition-colors duration-200"
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
