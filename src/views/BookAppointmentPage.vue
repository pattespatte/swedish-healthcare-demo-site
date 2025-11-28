<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Boka tid</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Här kan du boka tid för vårdbesök, vaccinationer och hälsokontroller. Välj den typ av tid du behöver boka.
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<CardContainer>
					<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Akut tid</h2>
					<p class="mb-4 text-neutral-700">
						För akuta besvär som inte kan vänta. Ring oss direkt på telefonnummer 08-123 456 78.
					</p>
					<button class="bg-primary-700 hover:bg-primary-800 rounded-lg px-4 py-2 text-white transition-colors">
						Ring oss nu
					</button>
				</CardContainer>

				<CardContainer>
					<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Planerat besök</h2>
					<p class="mb-4 text-neutral-700">Boka tid för planerat vårdbesök, hälsokontroll eller uppföljning.</p>
					<router-link
						to="/boka-tid/form"
						class="bg-primary-700 hover:bg-primary-800 inline-block rounded-lg px-4 py-2 text-white transition-colors"
					>
						Boka tid online
					</router-link>
				</CardContainer>

				<CardContainer>
					<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Vaccination</h2>
					<p class="mb-4 text-neutral-700">Boka tid för vaccination, inklusive influensa- och COVID-19-vaccin.</p>
					<button class="bg-primary-700 hover:bg-primary-800 rounded-lg px-4 py-2 text-white transition-colors">
						Boka vaccinationstid
					</button>
				</CardContainer>

				<CardContainer>
					<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Laboratorieprov</h2>
					<p class="mb-4 text-neutral-700">Boka tid för provtagning. Observera att vissa prover kräver faste.</p>
					<button class="bg-primary-700 hover:bg-primary-800 rounded-lg px-4 py-2 text-white transition-colors">
						Boka provtagning
					</button>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Information vid bokning</h2>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>Ha ditt personnummer och bankID tillgängligt vid bokning</li>
					<li>Om du behöver avboka din tid, gör det senast 24 timmar innan</li>
					<li>Vid akuta besvär, ring oss istället för att boka online</li>
					<li>Medtag giltig legitimation vid ditt besök</li>
				</ul>
			</CardContainer>
		</div>
	</div>
</template>
