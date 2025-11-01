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
			<h1 class="text-3xl font-bold text-gray-800 mb-6">
				Välkommen till Vårdportalen
			</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Här kan du enkelt boka tider, kontakta vården och hantera dina
				vårdärenden.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Boka tid
					</h2>
					<p class="text-neutral-700">
						Boka tid hos läkare, sjuksköterska eller annan
						vårdpersonal.
					</p>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						E-tjänster
					</h2>
					<p class="text-neutral-700">
						Få tillgång till dina journaler, provsvar och recept.
					</p>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Kontakta oss
					</h2>
					<p class="text-neutral-700">
						Ställ frågor eller kontakta vården via 1177 Vårdguiden.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
