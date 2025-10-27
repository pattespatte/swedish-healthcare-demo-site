<script setup lang="ts">
import { ref } from "vue";

// State for mobile menu
const isMenuOpen = ref(false);

// Navigation links for the 8 pages
const navLinks = [
	{ name: "Start", path: "/" },
	{ name: "Om oss", path: "/om-oss" },
	{ name: "Tjänster", path: "/tjanster" },
	{ name: "Mottagningar", path: "/mottagningar" },
	{ name: "Patientinformation", path: "/patientinformation" },
	{ name: "Boka tid", path: "/boka-tid" },
	{ name: "Kontakt", path: "/kontakt" },
	{ name: "Jobba hos oss", path: "/jobba-hos-oss" },
];

// Toggle mobile menu
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<header class="bg-white shadow-md">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center py-4">
				<!-- Logo placeholder -->
				<div class="flex items-center">
					<div
						class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center"
					>
						<span class="text-white font-bold text-xl">VÅ</span>
					</div>
					<span class="ml-3 text-xl font-bold text-neutral-800"
						>Vårdcentralen</span
					>
				</div>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex space-x-8">
					<router-link
						v-for="link in navLinks"
						:key="link.path"
						:to="link.path"
						class="text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200"
						active-class="text-primary-700 font-semibold"
					>
						{{ link.name }}
					</router-link>
				</nav>

				<!-- Right side: Search and Language -->
				<div class="hidden md:flex items-center space-x-4">
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
						active-class="text-primary-700 font-semibold"
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
