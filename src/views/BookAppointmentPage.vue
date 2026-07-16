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
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhWarningCircle size="32" class="text-red-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Akut tid</h2>
							<p class="mb-4 text-neutral-700">
								För akuta besvär som inte kan vänta. Ring oss direkt på telefonnummer 08-123 456 78.
							</p>
							<button
								class="flex items-center rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
							>
								<PhPhone size="18" class="mr-2" />
								Ring oss nu
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhCalendarCheck size="32" class="text-primary-700" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Planerat besök</h2>
							<p class="mb-4 text-neutral-700">Boka tid för planerat vårdbesök, hälsokontroll eller uppföljning.</p>
							<router-link
								to="/boka-tid/form"
								class="flex inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-white transition-colors hover:bg-primary-700"
							>
								<PhCalendarPlus size="18" class="mr-2" />
								Boka tid online
							</router-link>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhSyringe size="32" class="text-green-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Vaccination</h2>
							<p class="mb-4 text-neutral-700">Boka tid för vaccination, inklusive influensa- och COVID-19-vaccin.</p>
							<button
								class="flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
							>
								<PhSyringe size="18" class="mr-2" />
								Boka vaccinationstid
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhTestTube size="32" class="text-purple-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="mb-3 text-xl font-semibold text-primary-700 dark:text-primary-400">Laboratorieprov</h2>
							<p class="mb-4 text-neutral-700">Boka tid för provtagning. Observera att vissa prover kräver faste.</p>
							<button
								class="flex items-center rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
							>
								<PhTestTube size="18" class="mr-2" />
								Boka provtagning
							</button>
						</div>
					</div>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<div class="mb-4 flex items-center space-x-3">
					<PhInfo size="24" class="text-primary-700" weight="fill" />
					<h2 class="text-xl font-semibold text-primary-700 dark:text-primary-400">Information vid bokning</h2>
				</div>
				<ul class="list-disc space-y-3 pl-5 text-neutral-700">
					<li class="flex items-start">
						<PhIdentificationCard size="16" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
						<span>Ha ditt personnummer och bankID tillgängligt vid bokning</span>
					</li>
					<li class="flex items-start">
						<PhClockCounterClockwise size="16" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
						<span>Om du behöver avboka din tid, gör det senast 24 timmar innan</span>
					</li>
					<li class="flex items-start">
						<PhWarning size="16" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
						<span>Vid akuta besvär, ring oss istället för att boka online</span>
					</li>
					<li class="flex items-start">
						<PhIdentificationCard size="16" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
						<span>Medtag giltig legitimation vid ditt besök</span>
					</li>
				</ul>
			</CardContainer>
		</div>
	</div>
</template>
