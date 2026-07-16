<script setup lang="ts">
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mt-10 mb-6 text-3xl font-bold text-gray-800">Välkommen till Vårdportalen</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Här kan du enkelt boka tider, kontakta vården och hantera dina vårdärenden.
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<router-link to="/boka-tid" class="block">
					<CardContainer class="h-full" hoverable>
						<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
							<PhCalendar size="32" class="text-primary-700" />
						</div>
						<h2 class="mb-3 text-center text-xl font-semibold text-primary-700">Boka tid</h2>
						<p class="text-center text-neutral-700">Boka tid hos läkare, sjuksköterska eller annan vårdpersonal.</p>
					</CardContainer>
				</router-link>

				<router-link to="/tjanster" class="block">
					<CardContainer class="h-full" hoverable>
						<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<PhComputerTower size="32" class="text-green-600" />
						</div>
						<h2 class="mb-3 text-center text-xl font-semibold text-primary-700">E-tjänster</h2>
						<p class="text-center text-neutral-700">Få tillgång till dina journaler, provsvar och recept.</p>
					</CardContainer>
				</router-link>

				<router-link to="/kontakt" class="block">
					<CardContainer class="h-full" hoverable>
						<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
							<PhHeadset size="32" class="text-purple-600" />
						</div>
						<h2 class="mb-3 text-center text-xl font-semibold text-primary-700">Kontakta oss</h2>
						<p class="text-center text-neutral-700">Ställ frågor eller kontakta vården via 1177 Vårdguiden.</p>
					</CardContainer>
				</router-link>
			</div>
		</div>
	</div>
</template>
