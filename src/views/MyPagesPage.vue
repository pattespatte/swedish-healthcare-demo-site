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
				<h2 class="mb-4 text-xl font-semibold">Logga in</h2>
				<p class="mb-4 text-neutral-700">För att komma åt Mina Sidor behöver du logga in med BankID.</p>
				<button class="rounded-lg bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800">
					Logga in med BankID
				</button>
			</CardContainer>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Mina bokningar</h2>
					<p class="mb-4 text-neutral-700">Se dina kommande och tidigare besök. Boka om eller avboka dina tider.</p>
					<button class="font-medium text-primary-700 hover:text-primary-800">Se mina bokningar</button>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Mina journaler</h2>
					<p class="mb-4 text-neutral-700">Läs dina journalanteckningar och se dina provsvar.</p>
					<button class="font-medium text-primary-700 hover:text-primary-800">Se mina journaler</button>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Mina recept</h2>
					<p class="mb-4 text-neutral-700">Se dina aktuella recept och förnya recept om det behövs.</p>
					<button class="font-medium text-primary-700 hover:text-primary-800">Se mina recept</button>
				</CardContainer>

				<CardContainer>
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Mina kontakter</h2>
					<p class="mb-4 text-neutral-700">Kontakta vården via e-tjänster och ställ frågor till vårdpersonal.</p>
					<button class="font-medium text-primary-700 hover:text-primary-800">Kontakta vården</button>
				</CardContainer>
			</div>

			<CardContainer class="mt-6">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">Information om Mina Sidor</h2>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>Alla dina uppgifter är skyddade och krypterade</li>
					<li>Du kan när som helst se vilka som har läst din journal</li>
					<li>Du kan anmäla om du upptäcker felaktigheter i dina journaluppgifter</li>
					<li>Logga ut när du är klar, särskilt om du använder en delad dator</li>
				</ul>
			</CardContainer>
		</div>
	</div>
</template>
