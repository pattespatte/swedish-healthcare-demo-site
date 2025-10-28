<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// State for mobile menu and secondary navigation
const isMenuOpen = ref(false);
const showSecondaryNav = ref(false);
// Initialize with a default value for SSR, then update on client side
const windowWidth = ref(
	typeof window !== "undefined" ? window.innerWidth : 1200
);
let hoverTimeout: number | null = null;

// Update window width on resize
const updateWindowWidth = () => {
	if (typeof window !== "undefined") {
		windowWidth.value = window.innerWidth;
	}
};

// Add event listener for window resize
if (typeof window !== "undefined") {
	window.addEventListener("resize", updateWindowWidth);
}

// Navigation links for the 8 pages
const navLinks = [
	// { name: "Start", path: "/" },
	{ name: "Om oss", path: "/om-oss" },
	{ name: "Tjänster", path: "/tjanster" },
	{ name: "Mottagningar", path: "/mottagningar" },
	{ name: "Patientinformation", path: "/patientinformation" },
	{ name: "Boka tid", path: "/boka-tid" },
	{ name: "Kontakt", path: "/kontakt" },
];

// Om oss sub-navigation items
const omOssSubNav = [
	{ name: "Jobba hos oss", path: "/om-oss/jobba-hos-oss" },
	{ name: "Lediga tjänster", path: "/om-oss/lediga-tjanster" },
	{ name: "Karriärvägar", path: "/om-oss/karriarvagar" },
	{ name: "Förmåner", path: "/om-oss/formaner" },
];

// Toggle mobile menu
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
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
	if (typeof window !== "undefined") {
		hoverTimeout = window.setTimeout(() => {
			showSecondaryNav.value = false;
		}, 200); // 200ms delay before hiding
	}
};

// Keep secondary navigation visible when hovering over it
const keepSecondaryNavVisible = () => {
	if (hoverTimeout) {
		clearTimeout(hoverTimeout);
		hoverTimeout = null;
	}
	showSecondaryNav.value = true;
};

// Check if a link is active
const isActive = (path: string) => {
	return route.path === path;
};

// Calculate position of "Om oss" link for secondary navigation alignment
const getOmOssPosition = () => {
	const omOssIndex = navLinks.findIndex((link) => link.name === "Om oss");
	if (omOssIndex === -1) return 0;

	// Check if we're in laptop view (where we use a 2-column grid)
	const isLaptopView = windowWidth.value < 1024;

	if (isLaptopView) {
		// For laptop view with 2-column grid
		// Calculate position based on whether "Om oss" is in first or second column
		const isInFirstColumn = omOssIndex % 2 === 0;
		const rowIndex = Math.floor(omOssIndex / 2);

		// Base position for first column items
		const basePosition = isInFirstColumn ? 0 : 150; // Approximate width of first column

		// Adjust for the container padding
		const finalPosition = basePosition - 20;

		return finalPosition;
	} else {
		// For larger screens with single row layout
		// Calculate the approximate position based on the index
		// This accounts for the space-x-8 (32px) spacing between items
		// and the average width of navigation items
		const basePosition = omOssIndex * 120; // More realistic width per nav item

		// Adjust for the container padding and move significantly more to the left
		const finalPosition = basePosition - 40; // Further reduced offset for better alignment (additional 20px to the left)

		return finalPosition;
	}
};
</script>

<template>
	<header class="bg-white shadow-md">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center py-4">
				<!-- Logo placeholder -->
				<router-link to="/" class="flex items-center">
					<div
						class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center"
					>
						<span class="text-white font-bold text-xl">VÅ</span>
					</div>
					<span class="ml-3 text-xl font-bold text-neutral-800"
						>Vårdportalen</span
					>
				</router-link>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex relative">
					<!-- Two-row layout for laptop screens (1024px or narrower) -->
					<div class="lg:hidden grid grid-cols-2 gap-x-8 gap-y-2">
						<div
							v-for="link in navLinks"
							:key="link.path"
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
								class="text-primary-700 hover:text-neutral-700 font-medium transition-colors duration-200 block py-2"
								:class="{
									'text-primary-700 font-semibold active-nav-link':
										isActive(link.path),
								}"
							>
								{{ link.name }}
							</router-link>
						</div>
					</div>

					<!-- Single row layout for larger screens -->
					<div class="hidden lg:flex space-x-8">
						<div
							v-for="link in navLinks"
							:key="link.path"
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
								class="text-primary-700 hover:text-neutral-700 font-medium transition-colors duration-200 block py-4"
								:class="{
									'text-primary-700 font-semibold active-nav-link':
										isActive(link.path),
								}"
							>
								{{ link.name }}
							</router-link>
						</div>
					</div>

					<!-- Secondary Navigation for "Om oss" -->
					<div
						class="absolute top-full bg-blue-100 border-b border-blue-200 transition-all duration-300 ease-in-out z-20"
						:style="{
							left: `${getOmOssPosition()}px`,
							width: '400px',
						}"
						:class="{
							'opacity-100 translate-y-0': showSecondaryNav,
							'opacity-0 -translate-y-2 pointer-events-none':
								!showSecondaryNav,
						}"
						@mouseenter="keepSecondaryNavVisible"
						@mouseleave="hideSecondaryNavOnHover"
					>
						<div class="px-4 py-4">
							<nav
								class="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0"
							>
								<div
									v-for="(item, index) in omOssSubNav"
									:key="item.path"
									class="relative"
								>
									<!-- Divider for mobile view -->
									<div
										v-if="index > 0"
										class="absolute top-0 left-0 right-0 h-px bg-blue-300 md:hidden"
									></div>
									<router-link
										:to="item.path"
										class="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200 py-3 px-3 rounded hover:bg-blue-200 md:hover:bg-transparent md:p-0 block"
										:class="{
											'text-blue-900 font-bold': isActive(
												item.path
											),
											'pt-4': index > 0,
										}"
									>
										{{ item.name }}
									</router-link>
								</div>
							</nav>
						</div>
					</div>
				</nav>

				<!-- Right side: Search and Language -->
				<div class="hidden xl:flex items-center space-x-4">
					<!-- Search functionality -->
					<div class="relative">
						<input
							type="text"
							placeholder="Sök..."
							class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
							aria-label="Sök på webbplatsen"
						/>
						<svg
							class="absolute left-3 top-2.5 w-5 h-5 text-neutral-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>

					<!-- Language selector placeholder -->
					<div class="relative">
						<select
							class="appearance-none bg-white border border-neutral-300 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
							aria-label="Välj språk"
						>
							<option value="sv">Svenska</option>
							<option value="en">English</option>
							<option value="fi">Suomi</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700"
						>
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<!-- Mobile menu button -->
				<button
					@click="toggleMenu"
					class="md:hidden text-neutral-700 hover:text-primary-700 focus:outline-none"
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

			<!-- Mobile Navigation -->
			<div
				v-if="isMenuOpen"
				class="md:hidden py-4 border-t border-neutral-200"
			>
				<nav class="flex flex-col space-y-3">
					<router-link
						v-for="link in navLinks"
						:key="link.path"
						:to="link.path"
						class="text-neutral-700 hover:text-primary-700 font-medium py-2 transition-colors duration-200"
						active-class="text-primary-700 font-semibold active-nav-link"
						@click="isMenuOpen = false"
					>
						{{ link.name }}
					</router-link>
				</nav>

				<!-- Mobile Search -->
				<div class="mt-4 relative">
					<input
						type="text"
						placeholder="Sök..."
						class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						aria-label="Sök på webbplatsen"
					/>
					<svg
						class="absolute left-3 top-2.5 w-5 h-5 text-neutral-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>

				<!-- Mobile Language Selector -->
				<div class="mt-4">
					<select
						class="w-full appearance-none bg-white border border-neutral-300 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						aria-label="Välj språk"
					>
						<option value="sv">Svenska</option>
						<option value="en">English</option>
						<option value="fi">Suomi</option>
					</select>
				</div>
			</div>
		</div>
	</header>
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
	background-color: #d1d5db; /* Light gray color */
}

/* For desktop screens (lg and xl) */
@media (min-width: 768px) {
	.active-nav-link::after {
		bottom: 0.3rem; /* Position 0.3rem below the text on larger screens */
	}
}
</style>
