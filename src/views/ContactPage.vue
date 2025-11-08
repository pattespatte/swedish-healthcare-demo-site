<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Kontakt</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Här hittar du kontaktinformation till vår vårdcentral. Välkommen att kontakta oss för frågor eller för att boka
				tid.
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Kontaktinformation</h2>
					<div class="space-y-3 text-neutral-700">
						<p>
							<span class="font-medium">Adress:</span>
							Storgatan 12, 123 45 Stockholm
						</p>
						<p>
							<span class="font-medium">Telefon:</span>
							08-123 456 78
						</p>
						<p>
							<span class="font-medium">E-post:</span>
							info@vardcentralen.se
						</p>
						<p>
							<span class="font-medium">Öppettider:</span>
							måndag-fredag 08:00-17:00
						</p>
					</div>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Akuta ärenden</h2>
					<p class="mb-4 text-neutral-700">För akuta ärenden utanför vår öppettid, kontakta:</p>
					<div class="space-y-3 text-neutral-700">
						<p>
							<span class="font-medium">1177 Vårdguiden:</span>
							1177
						</p>
						<p>
							<span class="font-medium">Akutmottagning:</span>
							Södersjukhuset, Stockholm
						</p>
						<p>
							<span class="font-medium">Nödnummer:</span>
							112
						</p>
					</div>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">Kontakta oss via formulär</h2>
				<p class="mb-4 text-neutral-700">
					Fyll i formuläret nedan så kontaktar vi dig. Observera att detta formulär inte är för akuta ärenden.
				</p>

				<form class="space-y-4">
					<div>
						<label for="name" class="mb-1 block text-sm font-medium text-neutral-700">Namn</label>
						<input
							type="text"
							id="name"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
							placeholder="Ditt namn"
						>
					</div>

					<div>
						<label for="email" class="mb-1 block text-sm font-medium text-neutral-700">E-post</label>
						<input
							type="email"
							id="email"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
							placeholder="din.epost@exempel.se"
						>
					</div>

					<div>
						<label for="phone" class="mb-1 block text-sm font-medium text-neutral-700">Telefonnummer</label>
						<input
							type="tel"
							id="phone"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
							placeholder="070-123 45 67"
						>
					</div>

					<div>
						<label for="message" class="mb-1 block text-sm font-medium text-neutral-700">Meddelande</label>
						<textarea
							id="message"
							rows="4"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
							placeholder="Skriv ditt meddelande här..."
						/>
					</div>

					<div class="text-right">
						<button
							type="submit"
							class="rounded-lg bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800"
						>
							Skicka meddelande
						</button>
					</div>
				</form>
			</CardContainer>

			<CardContainer class="mt-6">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">Hitta hit</h2>
				<p class="mb-4 text-neutral-700">Vår vårdcentral ligger centralt i Stockholm med goda kommunikationer.</p>
				<div class="flex h-64 items-center justify-center rounded-lg bg-neutral-200">
					<p class="font-medium text-neutral-700">Karta över vår vårdcentral</p>
				</div>
			</CardContainer>
		</div>
	</div>
</template>
