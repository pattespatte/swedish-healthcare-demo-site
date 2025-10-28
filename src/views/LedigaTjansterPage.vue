<template>
	<SecondaryNavigation />
	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">
				Lediga tjänster
			</h1>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<p class="text-gray-600 mb-6">
					Vi söker ständig nya medarbetare som vill vara med och
					utveckla vården. Här hittar du våra lediga tjänster för
					specialistläkare och annan vårdpersonal.
				</p>

				<div class="bg-blue-50 rounded-lg p-6 mb-6">
					<h2 class="text-xl font-semibold mb-3 text-blue-800">
						Aktuella tjänster
					</h2>
					<div class="space-y-4">
						<div class="border-l-4 border-blue-500 pl-4">
							<h3 class="font-semibold text-gray-800">
								Specialistläkare i allmänmedicin
							</h3>
							<p class="text-gray-600">
								Vi söker en driven specialistläkare till vår
								vårdcentral. Tillsvidareanställning med start
								enligt överenskommelse.
							</p>
							<p class="text-sm text-gray-500 mt-2">
								Sista ansökningsdag: 2025-12-15
							</p>
						</div>

						<div class="border-l-4 border-blue-500 pl-4">
							<h3 class="font-semibold text-gray-800">
								Specialistläkare i kirurgi
							</h3>
							<p class="text-gray-600">
								Till vår kirurgiska mottagning söker vi en
								specialistläkare med intresse för både planerad
								och akut kirurgi.
							</p>
							<p class="text-sm text-gray-500 mt-2">
								Sista ansökningsdag: 2025-12-20
							</p>
						</div>

						<div class="border-l-4 border-blue-500 pl-4">
							<h3 class="font-semibold text-gray-800">
								Specialistläkare i psykiatri
							</h3>
							<p class="text-gray-600">
								Vi utökar vår psykiatriska verksamhet och söker
								nu specialistläkare till vår
								öppenvårdsmottagning.
							</p>
							<p class="text-sm text-gray-500 mt-2">
								Sista ansökningsdag: 2026-01-10
							</p>
						</div>

						<div class="border-l-4 border-blue-500 pl-4">
							<h3 class="font-semibold text-gray-800">
								Specialistläkare i radiologi
							</h3>
							<p class="text-gray-600">
								Till vår moderna röntgenavdelning söker vi en
								specialistläkare med bred kompetens inom
								diagnostisk radiologi.
							</p>
							<p class="text-sm text-gray-500 mt-2">
								Sista ansökningsdag: 2025-12-31
							</p>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div class="bg-green-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-green-800">
							Vi erbjuder
						</h2>
						<ul class="list-disc pl-5 text-gray-700">
							<li>Konkurrenskraftig lön</li>
							<li>Förmånlig arbetstid</li>
							<li>Möjlighet till forskning</li>
							<li>Intern fortbildning</li>
							<li>Moderne arbetslokaler</li>
							<li>Subventionerad lunch</li>
						</ul>
					</div>
					<div class="bg-yellow-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-yellow-800">
							Kvalifikationer
						</h2>
						<ul class="list-disc pl-5 text-gray-700">
							<li>Legitimerad läkare</li>
							<li>Specialistkompetens</li>
							<li>Svenska språket flytande</li>
							<li>Engelska språket goda kunskaper</li>
							<li>Samarbetförmåga</li>
							<li>Patientfokus</li>
						</ul>
					</div>
				</div>

				<div class="bg-gray-50 rounded-lg p-6 mb-6">
					<h2 class="text-xl font-semibold mb-3 text-gray-800">
						Ansökan
					</h2>
					<p class="text-gray-600 mb-4">
						Välkommen att skicka in din ansökan via vår e-post:
						rekrytering@vardcentral.se. Ange vilken tjänst du söker
						i ämnesraden.
					</p>
					<p class="text-gray-600 mb-4">
						Din ansökan ska innehålla CV, personligt brev och kopior
						på relevanta intyg och legitimationer.
					</p>
					<p class="text-gray-600">
						Vi tillämpar löpande urval och kan komma att kalla till
						intervju innan sista ansökningsdag.
					</p>
				</div>

				<div class="text-center">
					<button
						class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mr-4"
					>
						Kontakta oss
					</button>
					<button
						class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
					>
						Prenumerera på lediga jobb
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SecondaryNavigation from "@/components/common/SecondaryNavigation.vue";

export default {
	name: "LedigaTjansterPage",
	components: {
		SecondaryNavigation,
	},
};
</script>
