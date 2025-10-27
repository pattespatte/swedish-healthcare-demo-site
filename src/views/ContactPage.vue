<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
</script>

<template>
	<div class="min-h-screen bg-neutral-100 flex flex-col">
		<Header />
		<Breadcrumbs />

		<main class="flex-grow container mx-auto px-4 py-8">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-3xl font-bold text-gray-800 mb-6">Kontakt</h1>
				<p class="text-lg text-neutral-800 mb-8">
					Här hittar du kontaktinformation till vår vårdcentral.
					Välkommen att kontakta oss för frågor eller för att boka
					tid.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-white rounded-lg shadow-md p-6">
						<h2 class="text-xl font-semibold text-primary-600 mb-3">
							Kontaktinformation
						</h2>
						<div class="space-y-3 text-neutral-700">
							<p>
								<span class="font-medium">Adress:</span>
								Storgatan 12, 123 45 Stockholm
							</p>
							<p>
								<span class="font-medium">Telefon:</span> 08-123
								456 78
							</p>
							<p>
								<span class="font-medium">E-post:</span>
								info@vardcentralen.se
							</p>
							<p>
								<span class="font-medium">Öppettider:</span>
								Måndag-Fredag 08:00-17:00
							</p>
						</div>
					</div>

					<div class="bg-white rounded-lg shadow-md p-6">
						<h2 class="text-xl font-semibold text-primary-600 mb-3">
							Akuta ärenden
						</h2>
						<p class="text-neutral-700 mb-4">
							För akuta ärenden utanför vår öppettid, kontakta:
						</p>
						<div class="space-y-3 text-neutral-700">
							<p>
								<span class="font-medium"
									>1177 Vårdguiden:</span
								>
								1177
							</p>
							<p>
								<span class="font-medium">Akutmottagning:</span>
								Södersjukhuset, Stockholm
							</p>
							<p>
								<span class="font-medium">Nödnummer:</span> 112
							</p>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6 mt-6">
					<h2 class="text-xl font-semibold text-primary-600 mb-3">
						Kontakta oss via formulär
					</h2>
					<p class="text-neutral-700 mb-4">
						Fyll i formuläret nedan så kontaktar vi dig. Observera
						att detta formulär inte är för akuta ärenden.
					</p>

					<form class="space-y-4">
						<div>
							<label
								for="name"
								class="block text-sm font-medium text-neutral-700 mb-1"
							>
								Namn
							</label>
							<input
								type="text"
								id="name"
								class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
								placeholder="Ditt namn"
							/>
						</div>

						<div>
							<label
								for="email"
								class="block text-sm font-medium text-neutral-700 mb-1"
							>
								E-post
							</label>
							<input
								type="email"
								id="email"
								class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
								placeholder="din.epost@exempel.se"
							/>
						</div>

						<div>
							<label
								for="phone"
								class="block text-sm font-medium text-neutral-700 mb-1"
							>
								Telefonnummer
							</label>
							<input
								type="tel"
								id="phone"
								class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
								placeholder="070-123 45 67"
							/>
						</div>

						<div>
							<label
								for="message"
								class="block text-sm font-medium text-neutral-700 mb-1"
							>
								Meddelande
							</label>
							<textarea
								id="message"
								rows="4"
								class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
								placeholder="Skriv ditt meddelande här..."
							></textarea>
						</div>

						<div>
							<button
								type="submit"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
							>
								Skicka meddelande
							</button>
						</div>
					</form>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6 mt-6">
					<h2 class="text-xl font-semibold text-primary-600 mb-3">
						Hitta hit
					</h2>
					<p class="text-neutral-700 mb-4">
						Vår vårdcentral ligger centralt i Stockholm med goda
						kommunikationer.
					</p>
					<div
						class="bg-neutral-200 h-64 rounded-lg flex items-center justify-center"
					>
						<p class="text-neutral-500">
							Karta över vår vårdcentral
						</p>
					</div>
				</div>
			</div>
		</main>

		<Footer />
	</div>
</template>
