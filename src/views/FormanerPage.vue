<template>
	<SecondaryNavigation />
	<Breadcrumbs />
	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Förmåner</h1>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<p class="mb-6 text-gray-600">
					Som medarbetare hos oss får du tillgång till ett omfattande förmånspaket som är utformat för att ge dig
					trygghet och balans i livet.
				</p>

				<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="rounded-lg bg-blue-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-blue-800">Hälsa och välmående</h2>
						<ul class="list-disc space-y-2 pl-5 text-gray-700">
							<li>Friskvårdsbidrag på 5000 kr/år</li>
							<li>Subventionerad träning på lokala gym</li>
							<li>Regelbundna hälsokontroller</li>
							<li>Tillgång till företagshälsovård</li>
							<li>Stresshanteringskurser</li>
							<li>Ergonomiska arbetsplatser</li>
						</ul>
					</div>
					<div class="rounded-lg bg-green-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-green-800">Ekonomiska förmåner</h2>
						<ul class="list-disc space-y-2 pl-5 text-gray-700">
							<li>Konkurrenskraftig lön</li>
							<li>Årsbonus baserad på prestation</li>
							<li>Pensionsavtal med ITP</li>
							<li>Försäkringar via kollektivavtal</li>
							<li>Råvarubidrag</li>
							<li>Subventionerad lunch</li>
						</ul>
					</div>
				</div>

				<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="rounded-lg bg-yellow-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-yellow-800">Arbetstid och ledighet</h2>
						<ul class="list-disc space-y-2 pl-5 text-gray-700">
							<li>Flextid</li>
							<li>30 dagars semester</li>
							<li>Extra semesterdagar efter 40 år</li>
							<li>Föräldralönstillägg</li>
							<li>VAB-ersättning</li>
							<li>Möjlighet till deltid</li>
						</ul>
					</div>
					<div class="rounded-lg bg-purple-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-purple-800">Utveckling och karriär</h2>
						<ul class="list-disc space-y-2 pl-5 text-gray-700">
							<li>Interna utbildningsprogram</li>
							<li>Extern fortbildning</li>
							<li>Konferensdeltagande</li>
							<li>Mentorprogram</li>
							<li>Karriärvägar</li>
							<li>Forskningsmöjligheter</li>
						</ul>
					</div>
				</div>

				<div class="mb-6 rounded-lg bg-gray-50 p-6">
					<h2 class="mb-3 text-xl font-semibold text-gray-800">Andra förmåner</h2>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div>
							<h3 class="mb-2 font-semibold text-gray-700">Föräldraförmåner</h3>
							<ul class="space-y-1 text-sm text-gray-600">
								<li>Föräldrapenningstillägg upp till 90% av lönen</li>
								<li>Tillfällig föräldrapenning (VAB)</li>
								<li>Rätt till deltidsarbete</li>
							</ul>
						</div>
						<div>
							<h3 class="mb-2 font-semibold text-gray-700">Tjänsteresor</h3>
							<ul class="space-y-1 text-sm text-gray-600">
								<li>Fria parkeringsplatser</li>
								<li>Subventionerad kollektivtrafik</li>
								<li>Tjänstebil för vissa tjänster</li>
							</ul>
						</div>
						<div>
							<h3 class="mb-2 font-semibold text-gray-700">Sociala förmåner</h3>
							<ul class="space-y-1 text-sm text-gray-600">
								<li>Personalaktiviteter</li>
								<li>Årliga kickoff-dagar</li>
								<li>Julbord och festligheter</li>
							</ul>
						</div>
						<div>
							<h3 class="mb-2 font-semibold text-gray-700">Teknik och verktyg</h3>
							<ul class="space-y-1 text-sm text-gray-600">
								<li>Modern arbetsutrustning</li>
								<li>Mobiltelefon och surfplatta</li>
								<li>Hemarbetsplatser</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="mb-6 rounded-lg bg-blue-50 p-6">
					<h2 class="mb-3 text-xl font-semibold text-blue-800">Förmånshandbok</h2>
					<p class="mb-4 text-gray-600">
						Som ny medarbetare får du tillgång till vår förmånshandbok där alla förmåner beskrivs i detalj. Handboken
						uppdateras regelbundet och innehåller all information du behöver för att kunna nyttja dina förmåner på bästa
						sätt.
					</p>
					<div class="flex space-x-4">
						<button
							class="rounded-lg bg-primary-700 px-6 py-3 text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
						>
							Ladda ner förmånshandbok (PDF)
						</button>
						<button
							class="rounded-lg bg-neutral-600 px-6 py-3 text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
						>
							Kontakta HR
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SecondaryNavigation from '@/components/common/SecondaryNavigation.vue'
	import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

	export default {
		name: 'FormanerPage',
		components: {
			SecondaryNavigation,
			Breadcrumbs
		}
	}
</script>
