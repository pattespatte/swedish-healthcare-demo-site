<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useDarkMode } from "@/composables/useDarkMode";
import SearchBox from "@/components/interactive/SearchBox.vue";

const route = useRoute();
const { isDarkMode, toggleDarkMode } = useDarkMode();

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
// Initialize with a default value for SSR, then update on client side
const windowWidth = ref(
	typeof window !== "undefined" ? window.innerWidth : 1200
);

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

// Navigation links with dropdowns (merged from Navigation.vue)
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

// Close dropdowns when clicking outside
const closeDropdowns = () => {
	openDropdown.value = null;
};

// Handle ESC key press to close dropdowns
const handleEscKey = (event: KeyboardEvent) => {
	if (event.key === "Escape" && openDropdown.value !== null) {
		closeDropdowns();
	}
};

// Handle click outside to close dropdowns
const handleClickOutside = (event: Event) => {
	// Check if any dropdown is open
	if (openDropdown.value === null) return;

	// Get the target element
	const target = event.target as Element;

	// Check if the click is outside any dropdown container
	// We need to check if the click is on a dropdown toggle button or inside a dropdown menu
	const isClickInsideDropdown =
		target.closest("[data-dropdown-container]") ||
		target.closest("[data-dropdown-toggle]");

	if (!isClickInsideDropdown) {
		closeDropdowns();
	}
};

// Add event listeners when component mounts
onMounted(() => {
	if (typeof window !== "undefined") {
		document.addEventListener("keydown", handleEscKey);
		document.addEventListener("click", handleClickOutside);
	}
});

// Clean up event listeners when component unmounts
onUnmounted(() => {
	if (typeof window !== "undefined") {
		document.removeEventListener("keydown", handleEscKey);
		document.removeEventListener("click", handleClickOutside);
	}
});

// Check if a link is active
const isActive = (path: string) => {
	return route.path === path;
};

// Check if a dropdown item is active
const isDropdownActive = (dropdownItems: any[]) => {
	return dropdownItems.some((item) => route.path === item.path);
};
</script>

<template>
	<header class="shadow-md" role="banner">
		<!-- Row 1: Logo, empty space, search and language selector - Full width -->
		<div
			class="flex justify-between items-center py-3 border-b border-neutral-600 bg-slate-900 dark:bg-dark-bg-primary dark:border-dark-border-primary"
		>
			<div
				class="container mx-auto px-4 flex justify-between items-center"
			>
				<!-- Logo placeholder -->
				<router-link to="/" class="flex items-center group">
					<div
						class="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-slate-500 group-hover:scale-105"
					>
						<span
							class="text-neutral-300 font-bold text-xl transition-colors duration-300 group-hover:text-white"
							>VÅ</span
						>
					</div>
					<span
						class="ml-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-300"
						>Vårdportalen</span
					>
				</router-link>

				<!-- Empty space in the middle - this will expand to push search and language to the right -->
				<div class="flex-1"></div>

				<!-- Right side: Search and Language -->
				<div class="hidden md:flex items-center space-x-4">
					<!-- Search functionality -->
					<SearchBox
						size="medium"
						:clearable="true"
						:show-search-button="false"
						aria-label="Sök på webbplatsen"
					/>

					<!-- Language selector placeholder -->
					<div class="relative">
						<select
							class="appearance-none bg-white border border-neutral-300 dark:bg-dark-bg-tertiary dark:border-dark-border-primary rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-dark-text-primary"
							aria-label="Välj språk"
						>
							<option value="sv">Svenska</option>
							<option value="en">English</option>
							<option value="fi">Suomi</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700 dark:text-dark-text-muted"
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
					class="md:hidden text-white hover:text-primary-300 focus:outline-none"
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
		</div>

		<!-- Row 2: Navigation links centered - Full width -->
		<div
			class="hidden md:flex justify-center py-2 bg-slate-800 dark:bg-slate-800"
		>
			<div class="container mx-auto px-4">
				<!-- Desktop Navigation -->
				<nav
					class="hidden md:flex relative"
					aria-label="Huvudnavigering"
				>
					<!-- Two-row layout for laptop screens (1024px or narrower) -->
					<div class="lg:hidden grid grid-cols-2 gap-x-8 gap-y-2">
						<div
							v-for="link in navLinks"
							:key="link.path"
							class="relative"
							data-dropdown-container
						>
							<!-- Dropdown Menu for laptop view -->
							<div
								v-if="link.hasDropdown"
								class="absolute left-0 mt-0 w-56 bg-slate-600 dark:bg-dark-bg-tertiary shadow-lg rounded-b-lg z-10"
								:class="{
									block: openDropdown === link.name,
									hidden: openDropdown !== link.name,
								}"
								data-dropdown-container
							>
								<ul>
									<li
										v-for="item in link.dropdownItems"
										:key="item.path"
									>
										<router-link
											:to="item.path"
											class="block px-4 py-3 text-white dark:text-dark-text-primary hover:text-slate-800 dark:hover:bg-dark-hover-bg transition-colors duration-200"
											:class="{
												'bg-slate-800 dark:bg-dark-bg-quaternary text-white dark:text-dark-text-primary font-medium':
													isActive(item.path),
											}"
											@click="closeDropdowns"
										>
											{{ item.name }}
										</router-link>
									</li>
								</ul>
							</div>

							<!-- Link with inline dropdown toggle button -->
							<div class="flex items-center">
								<router-link
									:to="link.path"
									class="text-slate-200 hover:text-white font-medium transition-colors duration-200 block py-2 flex-1"
									:class="{
										'font-semibold active-nav-link':
											isActive(link.path) ||
											(link.hasDropdown &&
												isDropdownActive(
													link.dropdownItems
												)),
									}"
									@click="closeDropdowns"
								>
									{{ link.name }}
								</router-link>

								<!-- Dropdown Toggle Button -->
								<button
									v-if="link.hasDropdown"
									@click="toggleDropdown(link.name)"
									class="ml-2 px-2 text-white hover:text-neutral-200 focus:outline-none"
									:aria-expanded="openDropdown === link.name"
									:aria-label="`Visa undermeny för ${link.name}`"
									data-dropdown-toggle
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
						</div>
					</div>

					<!-- Single row layout for larger screens -->
					<div class="hidden lg:flex space-x-8">
						<div
							v-for="link in navLinks"
							:key="link.path"
							class="relative"
							data-dropdown-container
						>
							<!-- Dropdown Menu for desktop view -->
							<div
								v-if="link.hasDropdown"
								class="absolute left-0 mt-0 w-56 bg-slate-700 dark:bg-dark-bg-tertiary shadow-lg rounded-b-lg z-10"
								:class="{
									block: openDropdown === link.name,
									hidden: openDropdown !== link.name,
								}"
								data-dropdown-container
							>
								<ul>
									<li
										v-for="item in link.dropdownItems"
										:key="item.path"
									>
										<router-link
											:to="item.path"
											class="block px-4 py-3 text-white dark:text-dark-text-primary hover:bg-slate-900 dark:hover:bg-dark-hover-bg transition-colors duration-200"
											:class="{
												'bg-slate-800 dark:bg-dark-bg-quaternary text-white dark:text-dark-text-primary font-medium':
													isActive(item.path),
											}"
											@click="closeDropdowns"
										>
											{{ item.name }}
										</router-link>
									</li>
								</ul>
							</div>

							<!-- Link with inline dropdown toggle button -->
							<div class="flex items-center">
								<router-link
									:to="link.path"
									class="text-slate-200 hover:text-white font-medium transition-colors duration-200 block py-4 flex-1"
									:class="{
										'font-semibold active-nav-link':
											isActive(link.path) ||
											(link.hasDropdown &&
												isDropdownActive(
													link.dropdownItems
												)),
									}"
									@click="closeDropdowns"
								>
									{{ link.name }}
								</router-link>

								<!-- Dropdown Toggle Button -->
								<button
									v-if="link.hasDropdown"
									@click="toggleDropdown(link.name)"
									class="ml-2 px-2 text-white hover:text-neutral-200 focus:outline-none"
									:aria-expanded="openDropdown === link.name"
									:aria-label="`Visa undermeny för ${link.name}`"
									data-dropdown-toggle
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
						</div>

						<!-- Dark Mode Toggle Button -->
						<button
							@click="toggleDarkMode"
							class="ml-4 p-2 text-slate-200 hover:text-white focus:outline-none transition-colors duration-200"
							:aria-label="
								isDarkMode
									? 'Växla till ljust läge'
									: 'Växla till mörkt läge'
							"
							title="Växla tema"
						>
							<!-- Sun icon for light mode -->
							<svg
								v-if="!isDarkMode"
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								></path>
							</svg>
							<!-- Moon icon for dark mode -->
							<svg
								v-else
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
			</div>
		</div>

		<!-- Mobile Navigation - Full width -->
		<div
			v-if="isMenuOpen"
			class="md:hidden py-4 border-t border-neutral-600 bg-slate-800"
		>
			<div class="container mx-auto px-4">
				<nav
					class="flex flex-col space-y-1"
					aria-label="Mobilnavigering"
				>
					<div
						v-for="link in navLinks"
						:key="link.name"
						data-dropdown-container
					>
						<!-- Mobile Dropdown Menu -->
						<ul
							v-if="
								link.hasDropdown && openDropdown === link.name
							"
							class="bg-slate-800 pl-6"
							data-dropdown-container
						>
							<li
								v-for="item in link.dropdownItems"
								:key="item.path"
							>
								<router-link
									:to="item.path"
									class="block px-4 py-3 text-white hover:bg-slate-800 transition-colors duration-200"
									:class="{
										'bg-slate-700 text-yellow-200 font-medium':
											isActive(item.path),
									}"
									@click="isMenuOpen = false"
								>
									{{ item.name }}
								</router-link>
							</li>
						</ul>

						<!-- Link with inline dropdown toggle button -->
						<div class="flex items-center justify-between">
							<router-link
								:to="link.path"
								class="flex-1 px-4 py-3 block text-white hover:text-white font-medium transition-colors duration-200"
								:class="{
									'font-semibold active-nav-link':
										isActive(link.path) ||
										(link.hasDropdown &&
											isDropdownActive(
												link.dropdownItems
											)),
								}"
								@click="
									link.hasDropdown
										? toggleDropdown(link.name)
										: (isMenuOpen = false)
								"
							>
								{{ link.name }}
							</router-link>

							<!-- Mobile Dropdown Toggle Button -->
							<button
								v-if="link.hasDropdown"
								@click="toggleDropdown(link.name)"
								class="px-4 py-3 text-white hover:text-neutral-200 focus:outline-none"
								:aria-expanded="openDropdown === link.name"
								:aria-label="`Visa undermeny för ${link.name}`"
								data-dropdown-toggle
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
					</div>
				</nav>

				<!-- Mobile Search -->
				<div class="mt-4">
					<SearchBox
						size="large"
						:clearable="true"
						:show-search-button="true"
						aria-label="Sök på webbplatsen"
					/>
				</div>

				<!-- Mobile Language Selector -->
				<div class="mt-4">
					<select
						class="w-full appearance-none bg-white border border-neutral-300 dark:bg-dark-bg-tertiary dark:border-dark-border-primary rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-dark-text-primary"
						aria-label="Välj språk"
					>
						<option value="sv">Svenska</option>
						<option value="en">English</option>
						<option value="fi">Suomi</option>
					</select>
				</div>

				<!-- Mobile Dark Mode Toggle -->
				<div class="mt-4 flex items-center justify-between">
					<span class="text-white font-medium">Tema</span>
					<button
						@click="toggleDarkMode"
						class="p-2 text-slate-200 hover:text-white focus:outline-none transition-colors duration-200"
						:aria-label="
							isDarkMode
								? 'Växla till ljust läge'
								: 'Växla till mörkt läge'
						"
						title="Växla tema"
					>
						<!-- Sun icon for light mode -->
						<svg
							v-if="!isDarkMode"
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							></path>
						</svg>
						<!-- Moon icon for dark mode -->
						<svg
							v-else
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							></path>
						</svg>
					</button>
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
		bottom: 0.2rem; /* Slight adjustment for better visual alignment in second row */
	}
}
</style>
