<script setup lang="ts">
import { usePageTitle } from "../composables/usePageTitle";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Set page title
const { pageTitle } = usePageTitle();
</script>

<template>
	<head>
		<title>{{ pageTitle.title }}</title>
	</head>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Boka tid</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Här kan du boka tid för vårdbesök, vaccinationer och
				hälsokontroller. Välj den typ av tid du behöver boka.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6">
					<h2
						class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3"
					>
						Akut tid
					</h2>
					<p class="text-neutral-700 mb-4">
						För akuta besvär som inte kan vänta. Ring oss direkt på
						telefonnummer 08-123 456 78.
					</p>
					<button
						class="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
					>
						Ring oss nu
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2
						class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3"
					>
						Planerat besök
					</h2>
					<p class="text-neutral-700 mb-4">
						Boka tid för planerat vårdbesök, hälsokontroll eller
						uppföljning.
					</p>
					<button
						class="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
					>
						Boka tid online
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2
						class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3"
					>
						Vaccination
					</h2>
					<p class="text-neutral-700 mb-4">
						Boka tid för vaccination, inklusive influensa- och
						COVID-19-vaccin.
					</p>
					<button
						class="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
					>
						Boka vaccinationstid
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2
						class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3"
					>
						Laboratorieprov
					</h2>
					<p class="text-neutral-700 mb-4">
						Boka tid för provtagning. Observera att vissa prover
						kräver faste.
					</p>
					<button
						class="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
					>
						Boka provtagning
					</button>
				</div>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mt-6">
				<h2
					class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3"
				>
					Information vid bokning
				</h2>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>
						Ha ditt personnummer och bankID tillgängligt vid bokning
					</li>
					<li>
						Om du behöver avboka din tid, gör det senast 24 timmar
						innan
					</li>
					<li>
						Vid akuta besvär, ring oss istället för att boka online
					</li>
					<li>Medtag giltig legitimation vid ditt besök</li>
				</ul>
			</div>
		</div>
	</div>
</template>
