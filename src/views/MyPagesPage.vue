<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Mina Sidor</h1>
			<p class="mb-8 text-lg text-neutral-800">
				På Mina Sidor kan du hantera dina vårdärenden, boka tid och se dina journaler. Logga in med BankID för att komma
				åt dina personuppgifter.
			</p>

			<CardContainer class="mb-6">
				<div class="flex items-center space-x-3 mb-4">
					<PhLock size="24" class="text-blue-600" weight="fill" />
					<h2 class="text-xl font-semibold">Logga in</h2>
				</div>
				<p class="mb-4 text-neutral-700">För att komma åt Mina Sidor behöver du logga in med BankID.</p>
				<button class="bg-primary-700 hover:bg-primary-800 flex items-center rounded-lg px-4 py-2 text-white transition-colors">
					<PhKey size="18" class="mr-2" />
					Logga in med BankID
				</button>
			</CardContainer>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhCalendarCheck size="32" class="text-blue-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="text-primary-700 mb-3 text-xl font-semibold">Mina bokningar</h2>
							<p class="mb-4 text-neutral-700">Se dina kommande och tidigare besök. Boka om eller avboka dina tider.</p>
							<button class="text-primary-700 hover:text-primary-800 flex items-center font-medium">
								<PhArrowRight size="16" class="ml-1" />
								Se mina bokningar
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhFileText size="32" class="text-green-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="text-primary-700 mb-3 text-xl font-semibold">Mina journaler</h2>
							<p class="mb-4 text-neutral-700">Läs dina journalanteckningar och se dina provsvar.</p>
							<button class="text-primary-700 hover:text-primary-800 flex items-center font-medium">
								<PhArrowRight size="16" class="ml-1" />
								Se mina journaler
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhPrescription size="32" class="text-purple-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="text-primary-700 mb-3 text-xl font-semibold">Mina recept</h2>
							<p class="mb-4 text-neutral-700">Se dina aktuella recept och förnya recept om det behövs.</p>
							<button class="text-primary-700 hover:text-primary-800 flex items-center font-medium">
								<PhArrowRight size="16" class="ml-1" />
								Se mina recept
							</button>
						</div>
					</div>
				</CardContainer>

				<CardContainer>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0">
							<PhChatCircle size="32" class="text-orange-600" weight="fill" />
						</div>
						<div class="flex-1">
							<h2 class="text-primary-700 mb-3 text-xl font-semibold">Mina kontakter</h2>
							<p class="mb-4 text-neutral-700">Kontakta vården via e-tjänster och ställ frågor till vårdpersonal.</p>
							<button class="text-primary-700 hover:text-primary-800 flex items-center font-medium">
								<PhArrowRight size="16" class="ml-1" />
								Kontakta vården
							</button>
						</div>
					</div>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<div class="flex items-center space-x-3 mb-4">
					<PhInfo size="24" class="text-blue-600" weight="fill" />
					<h2 class="text-primary-700 text-xl font-semibold">Information om Mina Sidor</h2>
				</div>
				<ul class="list-disc space-y-3 pl-5 text-neutral-700">
					<li class="flex items-start">
						<PhShieldCheck size="16" class="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
						<span>Alla dina uppgifter är skyddade och krypterade</span>
					</li>
					<li class="flex items-start">
						<PhEye size="16" class="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
						<span>Du kan när som helst se vilka som har läst din journal</span>
					</li>
					<li class="flex items-start">
						<PhWarningCircle size="16" class="mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
						<span>Du kan anmäla om du upptäcker felaktigheter i dina journaluppgifter</span>
					</li>
					<li class="flex items-start">
						<PhSignOut size="16" class="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
						<span>Logga ut när du är klar, särskilt om du använder en delad dator</span>
					</li>
				</ul>
			</CardContainer>
		</div>
	</div>
</template>
