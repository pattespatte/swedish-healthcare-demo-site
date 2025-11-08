<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Våra Tjänster</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Här hittar du information om alla de tjänster och vårdinsatser som vi erbjuder på vår vårdcentral.
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Allmänmedicin</h2>
					<p class="text-neutral-700">
						Vi erbjuder allmänmedicinsk vård för vuxna och barn. Hos oss kan du få hjälp med vanliga sjukdomar,
						hälsokontroller och rådgivning.
					</p>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Barnmorskemottagning</h2>
					<p class="text-neutral-700">
						Vår barnmorskemottagning erbjuder mödrahälsovård, preventivmedelsrådgivning och cellprovtagning.
					</p>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">BVC (Barnavårdscentral)</h2>
					<p class="text-neutral-700">
						Vi erbjuder barnhälsovård för barn från födseln tills de börjar skolan. Hos oss får ditt barn regelbundna
						hälsokontroller och vaccinationer.
					</p>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Laboratorium</h2>
					<p class="text-neutral-700">
						Vi har ett eget laboratorium där vi tar de vanligaste proverna. Du behöver inte boka tid för provtagning om
						du har remiss.
					</p>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Psykiatri</h2>
					<p class="text-neutral-700">
						Vi erbjuder psykiatrisk vård för vuxna. Hos oss kan du få hjälp med depression, ångest och andra psykiska
						besvär.
					</p>
				</CardContainer>
			</div>
		</div>
	</div>
</template>
