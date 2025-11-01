<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">
				Patientinformation
			</h1>
			<div class="bg-white rounded-lg shadow-md p-6">
				<p class="text-gray-600 dark:text-dark-text-secondary mb-6">
					Här hittar du viktig information för dig som patient hos
					oss.
				</p>

				<div class="space-y-6">
					<div class="border-l-4 border-blue-500 pl-4">
						<h2 class="text-xl font-semibold mb-2">
							Inför ditt besök
						</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Vad du behöver tänka på innan din vårdkontakt
						</p>
					</div>

					<div class="border-l-4 border-green-500 pl-4">
						<h2 class="text-xl font-semibold mb-2">
							Dina rättigheter
						</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Information om patientlagstiftning och dina
							rättigheter
						</p>
					</div>

					<div class="border-l-4 border-yellow-500 pl-4">
						<h2 class="text-xl font-semibold mb-2">
							Journal och information
						</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Hur du får tillgång till din journal och hälsodata
						</p>
					</div>

					<div class="border-l-4 border-purple-500 pl-4">
						<h2 class="text-xl font-semibold mb-2">
							Priser och avgifter
						</h2>
						<p class="text-gray-600 dark:text-dark-text-secondary">
							Information om kostnader för vård och behandling
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
