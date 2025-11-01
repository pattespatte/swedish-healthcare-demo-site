<script setup lang="ts">
import { ref } from "vue";
import { usePageTitle } from "../composables/usePageTitle";

// Set page title
const { pageTitle } = usePageTitle();
import { useRouter } from "vue-router";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import SearchBox from "../components/interactive/SearchBox.vue";
import FormButton from "../components/forms/FormButton.vue";

const router = useRouter();
const searchQuery = ref("");

// Popular pages/services that users might be looking for
const popularPages = [
	{
		name: "Boka tid",
		path: "/boka-tid",
		description: "Boka tid hos läkare eller sjuksköterska",
	},
	{
		name: "Mottagningar",
		path: "/mottagningar",
		description: "Hitta rätt mottagning för ditt behov",
	},
	{
		name: "Vårdguide",
		path: "/vardguide",
		description: "Information om sjukdomar och behandlingar",
	},
	{
		name: "Kontakt",
		path: "/kontakt",
		description: "Kontaktuppgifter och öppettider",
	},
	{
		name: "Mina sidor",
		path: "/mina-sidor",
		description: "Logga in för att se dina vårdärenden",
	},
	{
		name: "Frågor och svar",
		path: "/fragor-och-svar",
		description: "Vanliga frågor om vården",
	},
];

// Handle search functionality
const handleSearch = (query: string) => {
	// In a real application, this would navigate to a search results page
	// For now, we'll just log the query and show an alert
	console.log("Searching for:", query);
	alert(`Sökning efter "${query}" skulle här leda till en sökresultatsida.`);
};

// Navigate to home page
const goToHome = () => {
	router.push("/");
};

// Navigate to a specific page
const navigateToPage = (path: string) => {
	router.push(path);
};
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<main class="text-center">
				<!-- 404 Error Icon and Message -->
				<div class="mb-8">
					<div class="mx-auto w-32 h-32 mb-6 text-primary-700">
						<svg
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>

					<h1
						class="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
					>
						Sidan kunde inte hittas
					</h1>

					<p class="text-xl text-neutral-700 mb-6">
						Tyvärr, sidan du letar efter finns inte.
					</p>

					<p class="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
						Sidan kan ha flyttats, tagits bort eller så har du
						angett felaktig webbadress. Du kan använda sökfunktionen
						nedan eller välja en av våra populära sidor.
					</p>
				</div>

				<!-- Search Box -->
				<div class="mb-10 max-w-xl mx-auto">
					<SearchBox
						v-model="searchQuery"
						placeholder="Leta vidare..."
						size="large"
						show-search-button
						@search="handleSearch"
						aria-label="Sök på webbplatsen"
					/>
				</div>

				<!-- Back to Home Button -->
				<div class="mb-12">
					<FormButton
						variant="primary"
						text="Till startsidan"
						@click="goToHome"
						class="px-6 py-3 text-base"
					/>
				</div>

				<!-- Popular Pages Section -->
				<div class="bg-white rounded-lg shadow-md p-6 md:p-8 text-left">
					<h2
						class="text-2xl font-semibold text-gray-800 mb-6 text-center"
					>
						Populära sidor
					</h2>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div
							v-for="page in popularPages"
							:key="page.path"
							class="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
							@click="navigateToPage(page.path)"
						>
							<h3 class="font-semibold text-primary-700 mb-2">
								{{ page.name }}
							</h3>
							<p class="text-neutral-600 text-sm">
								{{ page.description }}
							</p>
						</div>
					</div>
				</div>

				<!-- Contact Information -->
				<div class="mt-10 p-6 bg-blue-50 rounded-lg">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">
						Behöver du hjälp?
					</h2>
					<p class="text-neutral-700 mb-4">
						Om du inte hittar det du söker kan du kontakta oss:
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:08-123 456 78"
							class="flex items-center justify-center text-primary-700 hover:text-primary-800 font-medium"
						>
							<svg
								class="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
								></path>
							</svg>
							08-123 456 78
						</a>
						<a
							href="mailto:info@vardcentralen.se"
							class="flex items-center justify-center text-primary-700 hover:text-primary-800 font-medium"
						>
							<svg
								class="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
								></path>
								<path
									d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
								></path>
							</svg>
							info@vardcentralen.se
						</a>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
/* Custom styles for the 404 page */
</style>
