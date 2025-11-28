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
						<div class="mb-4 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
							<PhCalendar size="32" class="text-blue-600" />
						</div>
						<h2 class="text-primary-700 mb-3 text-xl font-semibold text-center">Boka tid</h2>
						<p class="text-neutral-700 text-center">Boka tid hos läkare, sjuksköterska eller annan vårdpersonal.</p>
					</CardContainer>
				</router-link>

				<router-link to="/tjanster" class="block">
					<CardContainer class="h-full" hoverable>
						<div class="mb-4 flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto">
							<PhComputerTower size="32" class="text-green-600" />
						</div>
						<h2 class="text-primary-700 mb-3 text-xl font-semibold text-center">E-tjänster</h2>
						<p class="text-neutral-700 text-center">Få tillgång till dina journaler, provsvar och recept.</p>
					</CardContainer>
				</router-link>

				<router-link to="/kontakt" class="block">
					<CardContainer class="h-full" hoverable>
						<div class="mb-4 flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto">
							<PhHeadset size="32" class="text-purple-600" />
						</div>
						<h2 class="text-primary-700 mb-3 text-xl font-semibold text-center">Kontakta oss</h2>
						<p class="text-neutral-700 text-center">Ställ frågor eller kontakta vården via 1177 Vårdguiden.</p>
					</CardContainer>
				</router-link>
			</div>
		</div>
	</div>
</template>
