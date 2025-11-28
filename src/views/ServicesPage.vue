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
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhStethoscope size="32" class="text-blue-600" weight="fill" />
						</div>
						<div>
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Allmänmedicin</h2>
							<p class="text-neutral-700">
								Vi erbjuder allmänmedicinsk vård för vuxna och barn. Hos oss kan du få hjälp med vanliga sjukdomar,
								hälsokontroller och rådgivning.
							</p>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhBaby size="32" class="text-pink-600" weight="fill" />
						</div>
						<div>
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Barnmorskemottagning</h2>
							<p class="text-neutral-700">
								Vår barnmorskemottagning erbjuder mödrahälsovård, preventivmedelsrådgivning och cellprovtagning.
							</p>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhChild size="32" class="text-green-600" weight="fill" />
						</div>
						<div>
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">BVC (Barnavårdscentral)</h2>
							<p class="text-neutral-700">
								Vi erbjuder barnhälsovård för barn från födseln tills de börjar skolan. Hos oss får ditt barn regelbundna
								hälsokontroller och vaccinationer.
							</p>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhTestTube size="32" class="text-purple-600" weight="fill" />
						</div>
						<div>
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Laboratorium</h2>
							<p class="text-neutral-700">
								Vi har ett eget laboratorium där vi tar de vanligaste proverna. Du behöver inte boka tid för provtagning om
								du har remiss.
							</p>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhBrain size="32" class="text-indigo-600" weight="fill" />
						</div>
						<div>
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Psykiatri</h2>
							<p class="text-neutral-700">
								Vi erbjuder psykiatrisk vård för vuxna. Hos oss kan du få hjälp med depression, ångest och andra psykiska
								besvär.
							</p>
						</div>
					</div>
				</CardContainer>
			</div>
		</div>
	</div>
</template>
