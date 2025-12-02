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
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Akut tid</h2>
							<p class="mb-4 text-neutral-700">
								För akuta besvär som inte kan vänta. Ring oss direkt på telefonnummer 08-123 456 78.
							</p>
							<button class="bg-red-600 hover:bg-red-700 flex items-center rounded-lg px-4 py-2 text-white transition-colors">
								<PhPhone size="18" class="mr-2" />
								Ring oss nu
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhCalendarCheck size="32" class="text-blue-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Planerat besök</h2>
							<p class="mb-4 text-neutral-700">Boka tid för planerat vårdbesök, hälsokontroll eller uppföljning.</p>
							<router-link
								to="/boka-tid/form"
								class="bg-blue-600 hover:bg-blue-700 flex items-center inline-flex rounded-lg px-4 py-2 text-white transition-colors"
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
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Vaccination</h2>
							<p class="mb-4 text-neutral-700">Boka tid för vaccination, inklusive influensa- och COVID-19-vaccin.</p>
							<button class="bg-green-600 hover:bg-green-700 flex items-center rounded-lg px-4 py-2 text-white transition-colors">
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
							<h2 class="text-primary-700 dark:text-primary-400 mb-3 text-xl font-semibold">Laboratorieprov</h2>
							<p class="mb-4 text-neutral-700">Boka tid för provtagning. Observera att vissa prover kräver faste.</p>
							<button class="bg-purple-600 hover:bg-purple-700 flex items-center rounded-lg px-4 py-2 text-white transition-colors">
								<PhTestTube size="18" class="mr-2" />
								Boka provtagning
							</button>
						</div>
					</div>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<div class="flex items-center space-x-3 mb-4">
					<PhInfo size="24" class="text-blue-600" weight="fill" />
					<h2 class="text-primary-700 dark:text-primary-400 text-xl font-semibold">Information vid bokning</h2>
				</div>
				<ul class="list-disc space-y-3 pl-5 text-neutral-700">
					<li class="flex items-start">
						<PhIdentificationCard size="16" class="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
						<span>Ha ditt personnummer och bankID tillgängligt vid bokning</span>
					</li>
					<li class="flex items-start">
						<PhClockCounterClockwise size="16" class="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
						<span>Om du behöver avboka din tid, gör det senast 24 timmar innan</span>
					</li>
					<li class="flex items-start">
						<PhWarning size="16" class="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
						<span>Vid akuta besvär, ring oss istället för att boka online</span>
					</li>
					<li class="flex items-start">
						<PhIdentificationCard size="16" class="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
						<span>Medtag giltig legitimation vid ditt besök</span>
					</li>
				</ul>
			</CardContainer>
		</div>
	</div>
</template>
