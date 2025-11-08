<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Patientinformation</h1>
			<div class="rounded-lg bg-white p-6 shadow-md">
				<p class="mb-6 text-gray-600 dark:text-dark-text-secondary">
					Här hittar du viktig information för dig som patient hos oss.
				</p>

				<div class="space-y-6">
					<div class="border-l-4 border-blue-500 pl-4">
						<h2 class="mb-2 text-xl font-semibold">Inför ditt besök</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">Vad du behöver tänka på innan din vårdkontakt</p>
					</div>

					<div class="border-l-4 border-green-500 pl-4">
						<h2 class="mb-2 text-xl font-semibold">Dina rättigheter</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Information om patientlagstiftning och dina rättigheter
						</p>
					</div>

					<div class="border-l-4 border-yellow-500 pl-4">
						<h2 class="mb-2 text-xl font-semibold">Journal och information</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Hur du får tillgång till din journal och hälsodata
						</p>
					</div>

					<div class="border-l-4 border-purple-500 pl-4">
						<h2 class="mb-2 text-xl font-semibold">Priser och avgifter</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">Information om kostnader för vård och behandling</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
