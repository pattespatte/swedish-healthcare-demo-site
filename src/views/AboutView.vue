<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Om oss</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Detta är en exempelsida för svensk vårdportal.
			</p>

			<div class="bg-white rounded-lg shadow-md p-6">
				<h2 class="text-xl font-semibold mb-4">Vårt uppdrag</h2>
				<p class="text-neutral-700 mb-4">
					Vi strävar efter att göra svensk vård mer tillgänglig och
					effektiv för alla medborgare.
				</p>
				<p class="text-neutral-700">
					Genom vår digitala plattform kan du enkelt hantera dina
					vårdkontakter och få tillgång till viktig information när du
					behöver den.
				</p>
			</div>
		</div>
	</div>
</template>
