<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
							data-dropdown-container
						>
							<!-- Dropdown Menu for laptop view -->
							<div
								v-if="link.hasDropdown"
								class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg z-10"
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

							<!-- Link with inline dropdown toggle button -->
							<div class="flex items-center">
								<router-link
									:to="link.path"
									class="text-primary-700 hover:text-neutral-700 font-medium transition-colors duration-200 block py-2 flex-1"
									:class="{
										'text-primary-700 font-semibold active-nav-link':
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
									class="ml-2 px-2 text-neutral-500 hover:text-neutral-800 focus:outline-none"
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
								class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg z-10"
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

							<!-- Link with inline dropdown toggle button -->
							<div class="flex items-center">
								<router-link
									:to="link.path"
									class="text-primary-700 hover:text-neutral-700 font-medium transition-colors duration-200 block py-4 flex-1"
									:class="{
										'text-primary-700 font-semibold active-nav-link':
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
									class="ml-2 px-2 text-neutral-500 hover:text-neutral-800 focus:outline-none"
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
				<nav class="flex flex-col space-y-1">
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
							class="bg-neutral-50 pl-6"
							data-dropdown-container
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
								class="flex-1 px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200"
								:class="{
									'text-primary-700 font-semibold active-nav-link':
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
								class="px-4 py-3 text-neutral-500 hover:text-neutral-800 focus:outline-none"
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
