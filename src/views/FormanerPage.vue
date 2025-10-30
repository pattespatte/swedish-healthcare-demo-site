<template>
	<SecondaryNavigation />
	<Breadcrumbs />
	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Förmåner</h1>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<p class="text-gray-600 mb-6">
					Som medarbetare hos oss får du tillgång till ett omfattande
					förmånspaket som är utformat för att ge dig trygghet och
					balans i livet.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div class="bg-blue-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-blue-800">
							Hälsa och välmående
						</h2>
						<ul class="list-disc pl-5 space-y-2 text-gray-700">
							<li>Friskvårdsbidrag på 5000 kr/år</li>
							<li>Subventionerad träning på lokala gym</li>
							<li>Regelbundna hälsokontroller</li>
							<li>Tillgång till företagshälsovård</li>
							<li>Stresshanteringskurser</li>
							<li>Ergonomiska arbetsplatser</li>
						</ul>
					</div>
					<div class="bg-green-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-green-800">
							Ekonomiska förmåner
						</h2>
						<ul class="list-disc pl-5 space-y-2 text-gray-700">
							<li>Konkurrenskraftig lön</li>
							<li>Årsbonus baserad på prestation</li>
							<li>Pensionsavtal med ITP</li>
							<li>Försäkringar via kollektivavtal</li>
							<li>Råvarubidrag</li>
							<li>Subventionerad lunch</li>
						</ul>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div class="bg-yellow-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-yellow-800">
							Arbetstid och ledighet
						</h2>
						<ul class="list-disc pl-5 space-y-2 text-gray-700">
							<li>Flextid</li>
							<li>30 dagars semester</li>
							<li>Extra semesterdagar efter 40 år</li>
							<li>Föräldralönstillägg</li>
							<li>VAB-ersättning</li>
							<li>Möjlighet till deltid</li>
						</ul>
					</div>
					<div class="bg-purple-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-purple-800">
							Utveckling och karriär
						</h2>
						<ul class="list-disc pl-5 space-y-2 text-gray-700">
							<li>Interna utbildningsprogram</li>
							<li>Extern fortbildning</li>
							<li>Konferensdeltagande</li>
							<li>Mentorprogram</li>
							<li>Karriärvägar</li>
							<li>Forskningsmöjligheter</li>
						</ul>
					</div>
				</div>

				<div class="bg-gray-50 rounded-lg p-6 mb-6">
					<h2 class="text-xl font-semibold mb-3 text-gray-800">
						Andra förmåner
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<h3 class="font-semibold text-gray-700 mb-2">
								Föräldraförmåner
							</h3>
							<ul class="space-y-1 text-gray-600 text-sm">
								<li>
									Föräldrapenningstillägg upp till 90% av
									lönen
								</li>
								<li>Tillfällig föräldrapenning (VAB)</li>
								<li>Rätt till deltidsarbete</li>
							</ul>
						</div>
						<div>
							<h3 class="font-semibold text-gray-700 mb-2">
								Tjänsteresor
							</h3>
							<ul class="space-y-1 text-gray-600 text-sm">
								<li>Fria parkeringsplatser</li>
								<li>Subventionerad kollektivtrafik</li>
								<li>Tjänstebil för vissa tjänster</li>
							</ul>
						</div>
						<div>
							<h3 class="font-semibold text-gray-700 mb-2">
								Sociala förmåner
							</h3>
							<ul class="space-y-1 text-gray-600 text-sm">
								<li>Personalaktiviteter</li>
								<li>Årliga kickoff-dagar</li>
								<li>Julbord och festligheter</li>
							</ul>
						</div>
						<div>
							<h3 class="font-semibold text-gray-700 mb-2">
								Teknik och verktyg
							</h3>
							<ul class="space-y-1 text-gray-600 text-sm">
								<li>Modern arbetsutrustning</li>
								<li>Mobiltelefon och surfplatta</li>
								<li>Hemarbetsplatser</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="bg-blue-50 rounded-lg p-6 mb-6">
					<h2 class="text-xl font-semibold mb-3 text-blue-800">
						Förmånshandbok
					</h2>
					<p class="text-gray-600 mb-4">
						Som ny medarbetare får du tillgång till vår
						förmånshandbok där alla förmåner beskrivs i detalj.
						Handboken uppdateras regelbundet och innehåller all
						information du behöver för att kunna nyttja dina
						förmåner på bästa sätt.
					</p>
					<div class="flex space-x-4">
						<button
							class="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
						>
							Ladda ner förmånshandbok (PDF)
						</button>
						<button
							class="bg-neutral-600 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
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
import SecondaryNavigation from "@/components/common/SecondaryNavigation.vue";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";

export default {
	name: "FormanerPage",
	components: {
		SecondaryNavigation,
		Breadcrumbs,
	},
};
</script>
