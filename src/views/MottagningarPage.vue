<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
</script>

<template>
	<div class="min-h-screen bg-neutral-100 flex flex-col">
		<Header />
		<Breadcrumbs />

		<main class="flex-grow container mx-auto px-4 py-8">
			<div class="container mx-auto px-4 py-8">
				<h1 class="text-3xl font-bold text-gray-800 mb-6">Mottagningar</h1>
				<div class="bg-white rounded-lg shadow-md p-6">
					<p class="text-gray-600 mb-4">
						Här hittar du information om våra olika mottagningar och
						kliniker.
					</p>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="border rounded-lg p-4">
							<h2 class="text-xl font-semibold mb-2">
								Allmänmedicin
							</h2>
							<p class="text-gray-600">
								Vårdcentral för allmän sjukvård
							</p>
						</div>
						<div class="border rounded-lg p-4">
							<h2 class="text-xl font-semibold mb-2">
								Barnmottagning
							</h2>
							<p class="text-gray-600">
								Specialiserad vård för barn
							</p>
						</div>
						<div class="border rounded-lg p-4">
							<h2 class="text-xl font-semibold mb-2">
								Akutmottagning
							</h2>
							<p class="text-gray-600">Akut vård dygnet runt</p>
						</div>
						<div class="border rounded-lg p-4">
							<h2 class="text-xl font-semibold mb-2">
								Specialistmottagningar
							</h2>
							<p class="text-gray-600">
								Specialiserad vård inom olika områden
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

