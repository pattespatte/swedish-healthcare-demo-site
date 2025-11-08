<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Välkommen till Vårdportalen</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Här kan du enkelt boka tider, kontakta vården och hantera dina vårdärenden.
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<router-link to="/boka-tid" class="block">
					<CardContainer class="h-full" hoverable>
						<h2 class="mb-3 text-xl font-semibold text-primary-700">Boka tid</h2>
						<p class="text-neutral-700">Boka tid hos läkare, sjuksköterska eller annan vårdpersonal.</p>
					</CardContainer>
				</router-link>

				<router-link to="/tjanster" class="block">
					<CardContainer class="h-full" hoverable>
						<h2 class="mb-3 text-xl font-semibold text-primary-700">E-tjänster</h2>
						<p class="text-neutral-700">Få tillgång till dina journaler, provsvar och recept.</p>
					</CardContainer>
				</router-link>

				<router-link to="/kontakt" class="block">
					<CardContainer class="h-full" hoverable>
						<h2 class="mb-3 text-xl font-semibold text-primary-700">Kontakta oss</h2>
						<p class="text-neutral-700">Ställ frågor eller kontakta vården via 1177 Vårdguiden.</p>
					</CardContainer>
				</router-link>
			</div>
		</div>
	</div>
</template>
