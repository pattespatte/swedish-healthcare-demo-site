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
					<div class="flex items-center space-x-3 mb-4">
						<PhAddressBook size="24" class="text-blue-600" weight="fill" />
						<h2 class="text-primary-700 text-xl font-semibold">Kontaktinformation</h2>
					</div>
					<div class="space-y-4 text-neutral-700">
						<div class="flex items-start space-x-3">
							<PhMapPin size="20" class="text-gray-500 mt-0.5 flex-shrink-0" />
							<div>
								<span class="font-medium">Adress:</span>
								<p>Storgatan 12, 123 45 Stockholm</p>
							</div>
						</div>
						<div class="flex items-center space-x-3">
							<PhPhone size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">Telefon:</span>
								<p>08-123 456 78</p>
							</div>
						</div>
						<div class="flex items-center space-x-3">
							<PhEnvelope size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">E-post:</span>
								<p>info@vardcentralen.se</p>
							</div>
						</div>
						<div class="flex items-center space-x-3">
							<PhClock size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">Öppettider:</span>
								<p>måndag-fredag 08:00-17:00</p>
							</div>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-center space-x-3 mb-4">
						<PhWarningCircle size="24" class="text-red-600" weight="fill" />
						<h2 class="text-primary-700 text-xl font-semibold">Akuta ärenden</h2>
					</div>
					<p class="mb-4 text-neutral-700">För akuta ärenden utanför vår öppettid, kontakta:</p>
					<div class="space-y-4 text-neutral-700">
						<div class="flex items-center space-x-3">
							<PhPhone size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">1177 Vårdguiden:</span>
								<p>1177</p>
							</div>
						</div>
						<div class="flex items-center space-x-3">
							<PhHospital size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">Akutmottagning:</span>
								<p>Södersjukhuset, Stockholm</p>
							</div>
						</div>
						<div class="flex items-center space-x-3">
							<PhPoliceCar size="20" class="text-gray-500 flex-shrink-0" />
							<div>
								<span class="font-medium">Nödnummer:</span>
								<p>112</p>
							</div>
						</div>
					</div>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<div class="flex items-center space-x-3 mb-4">
					<PhEnvelopeSimple size="24" class="text-green-600" weight="fill" />
					<h2 class="text-primary-700 text-xl font-semibold">Kontakta oss via formulär</h2>
				</div>
				<p class="mb-4 text-neutral-700">
					Fyll i formuläret nedan så kontaktar vi dig. Observera att detta formulär inte är för akuta ärenden.
				</p>

				<form class="space-y-4">
					<div>
						<label for="name" class="mb-1 flex items-center text-sm font-medium text-neutral-700">
							<PhUser size="16" class="mr-2 text-gray-500" />
							Namn
						</label>
						<input
							type="text"
							id="name"
							class="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 px-3 py-2 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
							placeholder="Ditt namn"
						/>
					</div>

					<div>
						<label for="email" class="mb-1 flex items-center text-sm font-medium text-neutral-700">
							<PhEnvelope size="16" class="mr-2 text-gray-500" />
							E-post
						</label>
						<input
							type="email"
							id="email"
							class="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 px-3 py-2 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
							placeholder="din.epost@exempel.se"
						/>
					</div>

					<div>
						<label for="phone" class="mb-1 flex items-center text-sm font-medium text-neutral-700">
							<PhPhone size="16" class="mr-2 text-gray-500" />
							Telefonnummer
						</label>
						<input
							type="tel"
							id="phone"
							class="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 px-3 py-2 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
							placeholder="070-123 45 67"
						/>
					</div>

					<div>
						<label for="message" class="mb-1 flex items-center text-sm font-medium text-neutral-700">
							<PhChatCircleText size="16" class="mr-2 text-gray-500" />
							Meddelande
						</label>
						<textarea
							id="message"
							rows="4"
							class="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none"
							placeholder="Skriv ditt meddelande här..."
						/>
					</div>

					<div class="text-right">
						<button
							type="submit"
							class="bg-primary-700 hover:bg-primary-800 flex items-center rounded-lg px-4 py-2 text-white transition-colors"
						>
							<PhPaperPlaneRight size="18" class="mr-2" />
							Skicka meddelande
						</button>
					</div>
				</form>
			</CardContainer>

			<CardContainer class="mt-6">
				<div class="flex items-center space-x-3 mb-4">
					<PhMapTrifold size="24" class="text-purple-600" weight="fill" />
					<h2 class="text-primary-700 text-xl font-semibold">Hitta hit</h2>
				</div>
				<p class="mb-4 text-neutral-700">Vår vårdcentral ligger centralt i Stockholm med goda kommunikationer.</p>
				<div class="flex h-64 items-center justify-center rounded-lg bg-neutral-200">
					<div class="text-center">
						<PhMapPin size="32" class="text-gray-500 mx-auto mb-2" />
						<p class="font-medium text-neutral-700">Karta över vår vårdcentral</p>
					</div>
				</div>
			</CardContainer>
		</div>
	</div>
</template>
