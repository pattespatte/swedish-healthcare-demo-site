<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { useDarkMode } from '@/composables/useDarkMode'
	import SearchBox from '@/components/interactive/SearchBox.vue'

	const route = useRoute()
	const { isDarkMode, toggleDarkMode } = useDarkMode()

	// Define the navigation item interface
	interface NavItem {
		name: string
		path: string
		hasDropdown: boolean
		dropdownItems: { name: string; path: string }[]
	}

	// State for mobile menu and dropdowns
	const isMenuOpen = ref(false)
	const openDropdown = ref<string | null>(null)
	// Initialize with a default value for SSR, then update on client side
	const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

	// Update window width on resize
	const updateWindowWidth = () => {
		if (typeof window !== 'undefined') {
			windowWidth.value = window.innerWidth
		}
	}

	// Add event listener for window resize
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', updateWindowWidth)
	}

	// Navigation links with dropdowns (merged from Navigation.vue)
	const navLinks: NavItem[] = [
		{
			name: 'Om oss',
			path: '/om-oss',
			hasDropdown: true,
			dropdownItems: [
				{ name: 'Om oss', path: '/om-oss' },
				{ name: 'Jobba hos oss', path: '/om-oss/jobba-hos-oss' },
				{ name: 'Lediga tjänster', path: '/om-oss/lediga-tjanster' },
				{ name: 'Karriärvägar', path: '/om-oss/karriarvagar' },
				{ name: 'Förmåner', path: '/om-oss/formaner' }
			]
		},
		{
			name: 'Tjänster',
			path: '/tjanster',
			hasDropdown: true,
			dropdownItems: [
				{ name: 'Översikt', path: '/tjanster' },
				{ name: 'Mottagningar', path: '/mottagningar' },
				{
					name: 'Specialistmottagningar',
					path: '/tjanster/specialistmottagningar'
				},
				{ name: 'Labbprov', path: '/tjanster/labbprov' },
				{ name: 'Hemsjukvård', path: '/tjanster/hemsjukvard' }
			]
		},
		{
			name: 'Patientinformation',
			path: '/patientinformation',
			hasDropdown: true,
			dropdownItems: [
				{ name: 'Översikt', path: '/patientinformation' },
				{ name: 'Vårdgaranti', path: '/patientinformation/vardgaranti' },
				{ name: 'Avgifter', path: '/patientinformation/avgifter' },
				{
					name: 'Din vårdkontakt',
					path: '/patientinformation/din-vardkontakt'
				}
			]
		},
		{
			name: 'Boka tid',
			path: '/boka-tid',
			hasDropdown: false,
			dropdownItems: []
		},
		{
			name: 'Mina sidor',
			path: '/mina-sidor',
			hasDropdown: false,
			dropdownItems: []
		},
		{
			name: 'Kontakt',
			path: '/kontakt',
			hasDropdown: false,
			dropdownItems: []
		}
	]

	// Toggle mobile menu
	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value
	}

	// Toggle dropdown
	const toggleDropdown = (name: string) => {
		if (openDropdown.value === name) {
			openDropdown.value = null
		} else {
			openDropdown.value = name
		}
	}

	// Close dropdowns when clicking outside
	const closeDropdowns = () => {
		openDropdown.value = null
	}

	// Handle ESC key press to close dropdowns
	const handleEscKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && openDropdown.value !== null) {
			closeDropdowns()
		}
	}

	// Handle click outside to close dropdowns
	const handleClickOutside = (event: Event) => {
		// Check if any dropdown is open
		if (openDropdown.value === null) {
			return
		}

		// Get the target element
		const target = event.target as Element

		// Check if the click is outside any dropdown container
		// We need to check if the click is on a dropdown toggle button or inside a dropdown menu
		const isClickInsideDropdown =
			target.closest('[data-dropdown-container]') || target.closest('[data-dropdown-toggle]')

		if (!isClickInsideDropdown) {
			closeDropdowns()
		}
	}

	// Add event listeners when component mounts
	onMounted(() => {
		if (typeof window !== 'undefined') {
			document.addEventListener('keydown', handleEscKey)
			document.addEventListener('click', handleClickOutside)
		}
	})

	// Clean up event listeners when component unmounts
	onUnmounted(() => {
		if (typeof window !== 'undefined') {
			document.removeEventListener('keydown', handleEscKey)
			document.removeEventListener('click', handleClickOutside)
		}
	})

	// Check if a link is active
	const isActive = (path: string) => {
		return route.path === path
	}

	// Check if a dropdown item is active
	const isDropdownActive = (dropdownItems: any[]) => {
		return dropdownItems.some(item => route.path === item.path)
	}
</script>

<template>
	<header class="shadow-md" role="banner">
		<!-- Row 1: Logo, empty space, search and language selector - Full width -->
		<div
			class="dark:border-dark-border-primary dark:bg-dark-bg-primary flex items-center justify-between border-b border-neutral-600 bg-slate-900 py-3"
		>
			<div class="container mx-auto flex items-center justify-between px-4">
				<!-- Logo with health icon -->
				<router-link to="/" class="group flex items-center">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-slate-500"
					>
						<PhFirstAid size="28" class="text-neutral-300 transition-colors duration-300 group-hover:text-white" weight="fill" />
					</div>
					<span class="group-hover:text-primary-300 ml-3 text-xl font-bold text-white transition-colors duration-300">
						Vårdportalen
					</span>
				</router-link>

				<!-- Empty space in the middle - this will expand to push search and language to the right -->
				<div class="flex-1" />

				<!-- Right side: Search and Language -->
				<div class="hidden items-center space-x-4 md:flex">
					<!-- Search functionality -->
					<SearchBox size="medium" :clearable="true" :show-search-button="true" aria-label="Sök på webbplatsen" />

					<!-- Language selector placeholder -->
					<div class="relative">
						<select
							class="focus:ring-primary-500 dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-dark-text-primary appearance-none rounded-lg border border-neutral-300 bg-white py-1 pr-8 pl-3 focus:border-transparent focus:ring-2 focus:outline-none"
							aria-label="Välj språk"
						>
							<option value="sv">Svenska</option>
							<option value="en">English</option>
							<option value="fi">Suomi</option>
						</select>
						<div
							class="dark:text-dark-text-muted pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700"
						>
							<svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>

				<!-- Mobile menu button -->
				<button
					@click="toggleMenu"
					class="hover:text-primary-300 text-white focus:outline-none md:hidden"
					aria-label="Öppna meny"
					aria-expanded="false"
				>
					<PhList v-if="!isMenuOpen" size="24" />
					<PhX v-else size="24" />
				</button>
			</div>
		</div>

		<!-- Row 2: Navigation links centered - Full width -->
		<div class="hidden justify-center bg-slate-800 py-2 md:flex dark:bg-slate-800">
			<div class="container mx-auto px-4">
				<!-- Desktop Navigation -->
				<nav class="relative hidden md:flex" aria-label="Huvudnavigering">
					<!-- Two-row layout for laptop screens (1024px or narrower) -->
					<div class="grid grid-cols-2 gap-x-8 gap-y-2 lg:hidden">
						<div v-for="link in navLinks" :key="link.path" class="relative" data-dropdown-container>
							<!-- Dropdown Menu for laptop view -->
							<div
								v-if="link.hasDropdown"
								class="dark:bg-dark-bg-tertiary absolute left-0 z-10 mt-0 w-56 rounded-b-lg bg-slate-600 shadow-lg"
								:class="{
									block: openDropdown === link.name,
									hidden: openDropdown !== link.name
								}"
								data-dropdown-container
							>
								<ul>
									<li v-for="item in link.dropdownItems" :key="item.path">
										<router-link
											:to="item.path"
											class="dark:text-dark-text-primary dark:hover:bg-dark-hover-bg block px-4 py-3 text-white transition-colors duration-200 hover:text-slate-800"
											:class="{
												'dark:bg-dark-bg-quaternary dark:text-dark-text-primary bg-slate-800 font-medium text-white':
													isActive(item.path)
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
									class="block flex-1 py-2 font-medium text-slate-200 transition-colors duration-200 hover:text-white"
									:class="{
										'active-nav-link font-bold text-yellow-100':
											isActive(link.path) || (link.hasDropdown && isDropdownActive(link.dropdownItems))
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
									<PhCaretDown
										class="transition-transform duration-200"
										:class="{
											'rotate-180': openDropdown === link.name
										}"
										size="16"
									/>
								</button>
							</div>
						</div>
					</div>

					<!-- Single row layout for larger screens -->
					<div class="hidden space-x-8 lg:flex">
						<div v-for="link in navLinks" :key="link.path" class="relative" data-dropdown-container>
							<!-- Dropdown Menu for desktop view -->
							<div
								v-if="link.hasDropdown"
								class="dark:bg-dark-bg-tertiary absolute left-0 z-10 mt-0 w-56 rounded-b-lg bg-slate-700 shadow-lg"
								:class="{
									block: openDropdown === link.name,
									hidden: openDropdown !== link.name
								}"
								data-dropdown-container
							>
								<ul>
									<li v-for="item in link.dropdownItems" :key="item.path">
										<router-link
											:to="item.path"
											class="dark:text-dark-text-primary dark:hover:bg-dark-hover-bg block px-4 py-3 text-white transition-colors duration-200 hover:bg-slate-900"
											:class="{
												'dark:bg-dark-bg-quaternary dark:text-dark-text-primary bg-slate-800 font-medium text-white':
													isActive(item.path)
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
									class="block flex-1 py-4 font-medium text-slate-200 transition-colors duration-200 hover:text-white"
									:class="{
										'active-nav-link font-bold text-yellow-100':
											isActive(link.path) || (link.hasDropdown && isDropdownActive(link.dropdownItems))
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
									<PhCaretDown
										class="transition-transform duration-200"
										:class="{
											'rotate-180': openDropdown === link.name
										}"
										size="16"
									/>
								</button>
							</div>
						</div>

						<!-- Dark Mode Toggle Button -->
						<button
							@click="toggleDarkMode"
							class="ml-4 p-2 text-slate-200 transition-colors duration-200 hover:text-white focus:outline-none"
							:aria-label="isDarkMode ? 'Växla till ljust läge' : 'Växla till mörkt läge'"
							title="Växla tema"
						>
							<PhSun v-if="!isDarkMode" size="20" />
							<PhMoon v-else size="20" />
						</button>
					</div>
				</nav>
			</div>
		</div>

		<!-- Mobile Navigation - Full width -->
		<div v-if="isMenuOpen" class="border-t border-neutral-600 bg-slate-800 py-4 md:hidden">
			<div class="container mx-auto px-4">
				<nav class="flex flex-col space-y-1" aria-label="Mobilnavigering">
					<div v-for="link in navLinks" :key="link.name" data-dropdown-container>
						<!-- Mobile Dropdown Menu -->
						<ul v-if="link.hasDropdown && openDropdown === link.name" class="bg-slate-800 pl-6" data-dropdown-container>
							<li v-for="item in link.dropdownItems" :key="item.path">
								<router-link
									:to="item.path"
									class="block px-4 py-3 text-white transition-colors duration-200 hover:bg-slate-800"
									:class="{
										'bg-slate-700 font-medium text-yellow-200': isActive(item.path)
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
								class="block flex-1 px-4 py-3 font-medium text-white transition-colors duration-200 hover:text-white"
								:class="{
									'active-nav-link font-bold text-yellow-100':
										isActive(link.path) || (link.hasDropdown && isDropdownActive(link.dropdownItems))
								}"
								@click="link.hasDropdown ? toggleDropdown(link.name) : (isMenuOpen = false)"
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
								<PhCaretDown
									class="transition-transform duration-200"
									:class="{
										'rotate-180': openDropdown === link.name
									}"
									size="16"
								/>
							</button>
						</div>
					</div>
				</nav>

				<!-- Mobile Search -->
				<div class="mt-4">
					<SearchBox size="large" :clearable="true" :show-search-button="true" aria-label="Sök på webbplatsen" />
				</div>

				<!-- Mobile Language Selector -->
				<div class="mt-4">
					<select
						class="focus:ring-primary-500 dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-dark-text-primary w-full appearance-none rounded-lg border border-neutral-300 bg-white py-2 pr-8 pl-3 focus:border-transparent focus:ring-2 focus:outline-none"
						aria-label="Välj språk"
					>
						<option value="sv">Svenska</option>
						<option value="en">English</option>
						<option value="fi">Suomi</option>
					</select>
				</div>

				<!-- Mobile Dark Mode Toggle -->
				<div class="mt-4 flex items-center justify-between">
					<span class="font-medium text-white">Tema</span>
					<button
						@click="toggleDarkMode"
						class="p-2 text-slate-200 transition-colors duration-200 hover:text-white focus:outline-none"
						:aria-label="isDarkMode ? 'Växla till ljust läge' : 'Växla till mörkt läge'"
						title="Växla tema"
					>
						<PhSun v-if="!isDarkMode" size="20" />
						<PhMoon v-else size="20" />
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
		content: '';
		position: absolute;
		bottom: 0; /* Default for mobile */
		left: 0;
		width: 100%;
		height: 4px; /* 4px thick underline */
		background-color: #33a5ff; /* primary-400 from Tailwind config */
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
			bottom: 0.4rem; /* Slight adjustment for better visual alignment in second row */
		}
	}
</style>
