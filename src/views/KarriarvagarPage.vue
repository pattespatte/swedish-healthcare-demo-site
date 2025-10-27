<template>
	<SecondaryNavigation />
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Karriärvägar</h1>

		<div class="bg-white rounded-lg shadow-md p-6 mb-6">
			<p class="text-gray-600 mb-6">
				Hos oss finns det många möjligheter att utvecklas och växa i din
				karriär. Vi erbjuder tydliga karriärvägar och stöd för din
				professionella utveckling.
			</p>

			<div class="bg-blue-50 rounded-lg p-6 mb-6">
				<h2 class="text-xl font-semibold mb-3 text-blue-800">
					Karriärsteg för läkare
				</h2>
				<div class="space-y-4">
					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-800">AT-läkare</h3>
						<p class="text-gray-600">
							Börja din karriär hos oss med din
							allmäntjänstgöring. Vi erbjuder en strukturerad
							AT-tjänstgöring med rotation mellan olika
							specialiteter.
						</p>
					</div>

					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-800">ST-läkare</h3>
						<p class="text-gray-600">
							Specialisera dig inom ditt intresseområde. Vi har
							ST-tjänster inom de flesta specialiteter med erfarna
							handledare.
						</p>
					</div>

					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-800">
							Specialistläkare
						</h3>
						<p class="text-gray-600">
							Arbeta som specialist hos oss med möjlighet till
							vidareutbildning och sub-specialisering.
						</p>
					</div>

					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-800">Överläkare</h3>
						<p class="text-gray-600">
							Ta ett större ansvar för verksamhetsutveckling och
							ledarskap inom din specialitet.
						</p>
					</div>

					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-800">Klinikchef</h3>
						<p class="text-gray-600">
							Ledare för en hel klinik med ansvar för personal,
							ekonomi och verksamhetsutveckling.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-green-50 rounded-lg p-6 mb-6">
				<h2 class="text-xl font-semibold mb-3 text-green-800">
					Karriärsteg för sjuksköterskor
				</h2>
				<div class="space-y-4">
					<div class="border-l-4 border-green-500 pl-4">
						<h3 class="font-semibold text-gray-800">
							Nyutexaminerad sjuksköterska
						</h3>
						<p class="text-gray-600">
							Börja din karriär med vårt introduktionsprogram som
							ger dig en trygg start i professionen.
						</p>
					</div>

					<div class="border-l-4 border-green-500 pl-4">
						<h3 class="font-semibold text-gray-800">
							Sjuksköterska
						</h3>
						<p class="text-gray-600">
							Utveckla din kompetens inom olika områden med
							regelbunden fortbildning och handledning.
						</p>
					</div>

					<div class="border-l-4 border-green-500 pl-4">
						<h3 class="font-semibold text-gray-800">
							Specialistsjuksköterska
						</h3>
						<p class="text-gray-600">
							Specialisera dig inom ditt intresseområde med stöd
							för vidareutbildning.
						</p>
					</div>

					<div class="border-l-4 border-green-500 pl-4">
						<h3 class="font-semibold text-gray-800">
							Avdelningsföreståndare
						</h3>
						<p class="text-gray-600">
							Ta ledarskap för en avdelning med ansvar för
							personal och verksamhet.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div class="bg-yellow-50 rounded-lg p-6">
					<h2 class="text-xl font-semibold mb-3 text-yellow-800">
						Kompetensutveckling
					</h2>
					<ul class="space-y-2 text-gray-700">
						<li>• Individuell utvecklingsplan</li>
						<li>• Regelbundna utvecklingssamtal</li>
						<li>• Internutbildningar</li>
						<li>• Externa kurser och konferenser</li>
						<li>• Mentorprogram</li>
						<li>• Forskningsmöjligheter</li>
					</ul>
				</div>
				<div class="bg-purple-50 rounded-lg p-6">
					<h2 class="text-xl font-semibold mb-3 text-purple-800">
						Ledarskapsutveckling
					</h2>
					<ul class="space-y-2 text-gray-700">
						<li>• Grundläggande ledarskapsutbildning</li>
						<li>• Avancerad ledarskapsutbildning</li>
						<li>• Coaching och handledning</li>
						<li>• Nätverksträffar för chefer</li>
						<li>• Internationella utbyten</li>
						<li>• Projektledarutbildning</li>
					</ul>
				</div>
			</div>

			<div class="bg-gray-50 rounded-lg p-6 mb-6">
				<h2 class="text-xl font-semibold mb-3 text-gray-800">
					Karriärberättelser
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-white rounded-lg p-4 shadow-sm">
						<h3 class="font-semibold text-gray-800 mb-2">
							Anna, överläkare
						</h3>
						<p class="text-gray-600 text-sm italic">
							"Jag började som AT-läkare här för 10 år sedan och
							har kunnat växa inom organisationen. Stödet för min
							utveckling har varit fantastiskt."
						</p>
					</div>
					<div class="bg-white rounded-lg p-4 shadow-sm">
						<h3 class="font-semibold text-gray-800 mb-2">
							Erik, specialistsjuksköterska
						</h3>
						<p class="text-gray-600 text-sm italic">
							"Efter min examen fick jag gå ett
							introduktionsprogram som gav mig trygghet. Nu har
							jag specialiserat mig inom intensivvård."
						</p>
					</div>
				</div>
			</div>

			<div class="text-center">
				<button
					class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mr-4"
				>
					Kontakta karriärrådgivare
				</button>
				<button
					class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
				>
					Läs mer om våra utbildningar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import SecondaryNavigation from "@/components/common/SecondaryNavigation.vue";

export default {
	name: "KarriarvagarPage",
	components: {
		SecondaryNavigation,
	},
};
</script>
