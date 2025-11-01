<script setup lang="ts">
import { usePageTitle } from "../composables/usePageTitle";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Set page title
const { pageTitle } = usePageTitle();
</script>

<template>
	<head>
		<title>{{ pageTitle.title }}</title>
	</head>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Mina Sidor</h1>
			<p class="text-lg text-neutral-800 mb-8">
				På Mina Sidor kan du hantera dina vårdärenden, boka tid och se
				dina journaler. Logga in med BankID för att komma åt dina
				personuppgifter.
			</p>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">Logga in</h2>
				<p class="text-neutral-700 mb-4">
					För att komma åt Mina Sidor behöver du logga in med BankID.
				</p>
				<button
					class="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
				>
					Logga in med BankID
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Mina bokningar
					</h2>
					<p class="text-neutral-700 mb-4">
						Se dina kommande och tidigare besök. Boka om eller
						avboka dina tider.
					</p>
					<button
						class="text-primary-600 hover:text-primary-700 font-medium"
					>
						Se mina bokningar
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Mina journaler
					</h2>
					<p class="text-neutral-700 mb-4">
						Läs dina journalanteckningar och se dina provsvar.
					</p>
					<button
						class="text-primary-600 hover:text-primary-700 font-medium"
					>
						Se mina journaler
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Mina recept
					</h2>
					<p class="text-neutral-700 mb-4">
						Se dina aktuella recept och förnya recept om det behövs.
					</p>
					<button
						class="text-primary-600 hover:text-primary-700 font-medium"
					>
						Se mina recept
					</button>
				</div>

				<div class="bg-white rounded-lg shadow-md p-6">
					<h2 class="text-xl font-semibold text-primary-700 mb-3">
						Mina kontakter
					</h2>
					<p class="text-neutral-700 mb-4">
						Kontakta vården via e-tjänster och ställ frågor till
						vårdpersonal.
					</p>
					<button
						class="text-primary-600 hover:text-primary-700 font-medium"
					>
						Kontakta vården
					</button>
				</div>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mt-6">
				<h2 class="text-xl font-semibold text-primary-700 mb-3">
					Information om Mina Sidor
				</h2>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>Alla dina uppgifter är skyddade och krypterade</li>
					<li>
						Du kan när som helst se vilka som har läst din journal
					</li>
					<li>
						Du kan anmäla om du upptäcker felaktigheter i dina
						journaluppgifter
					</li>
					<li>
						Logga ut när du är klar, särskilt om du använder en
						delad dator
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
