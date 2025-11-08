<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Om oss</h1>
			<p class="mb-8 text-lg text-neutral-800">Detta är en exempelsida för svensk vårdportal.</p>

			<CardContainer>
				<h2 class="mb-4 text-xl font-semibold">Vårt uppdrag</h2>
				<p class="mb-4 text-neutral-700">
					Vi strävar efter att göra svensk vård mer tillgänglig och effektiv för alla medborgare.
				</p>
				<p class="text-neutral-700">
					Genom vår digitala plattform kan du enkelt hantera dina vårdkontakter och få tillgång till viktig information
					när du behöver den.
				</p>
			</CardContainer>
		</div>
	</div>
</template>
