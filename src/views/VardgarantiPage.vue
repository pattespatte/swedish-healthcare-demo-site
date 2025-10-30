<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import InfoCard from "../components/display/InfoCard.vue";
import Accordion from "../components/interactive/Accordion.vue";

const accordionItems = [
	{
		id: "1",
		title: "Vad innebär vårdgarantin?",
		content:
			"Vårdgarantin är en lagstadgad rättighet som säkerställer att du får vård inom en viss tid. Den garanterar att du får kontakt med vårdcentral inom 7 dagar, får träffa specialist inom 90 dagar, och får behandling inom 90 dagar efter att diagnosen har ställts. Syftet är att säkerställa jämlik tillgång till vård oavsett var i landet du bor.",
	},
	{
		id: "2",
		title: "Vad gäller för akuta besvär?",
		content:
			"Vårdgarantin gäller inte för akuta sjukdomar eller skador som kräver omedelbar vård. Om du har akuta besvär ska du alltid kontakta 1177 för rådgivning, söka vårdcentralens akutmottagning eller vid allvarliga tillstånd ringa 112. Akuta fall prioriteras alltid och ska få vård omedelbart.",
	},
	{
		id: "3",
		title: "Vad händer om tiden överskrids?",
		content:
			"Om du inte får vård inom den garanterade tiden har du rätt att söka vård i ett annat landsting/region. Du kan också kontakta vården och fråga om varför väntetiden är längre än garanterat. I vissa fall kan du ha rätt till ersättning om du har fått bekosta vården själv på grund av att väntetiden överskreds.",
	},
	{
		id: "4",
		title: "Gäller garantin för alla typer av vård?",
		content:
			"Vårdgarantin gäller för de flesta typer av specialiserad vård inom landstingets hälso- och sjukvård. Den omfattar bland annat läkarbesök, operationer och vissa undersökningar. Vissa specifika behandlingar kan ha egna väntetider som inte omfattas av garantin. Din vårdgivare kan ge dig mer information om vad som gäller för just ditt fall.",
	},
];
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Vårdgaranti</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Som patient i Sverige har du lagstadgad rätt till vård inom en
				viss tid. Här hittar du information om vad vårdgarantin innebär
				och vilka rättigheter du har.
			</p>

			<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg
							class="h-5 w-5 text-blue-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<p class="text-sm text-blue-800">
							<strong>Viktigt:</strong> Vårdgarantin gäller från
							den dag du söker vård och fram till att du fått den
							vård du behöver. Spara alla remisser och journaler
							som bevis på när du sökte vård.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
				<InfoCard
					title="7 dagar"
					content="Kontakt med vårdcentral"
					variant="primary"
				/>
				<InfoCard
					title="90 dagar"
					content="Specialistvård"
					variant="primary"
				/>
				<InfoCard
					title="90 dagar"
					content="Behandling efter diagnos"
					variant="primary"
				/>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">
					Vad innebär vårdgarantin för dig?
				</h2>
				<p class="text-neutral-700 mb-4">
					Vårdgarantin är en del av hälso- och sjukvårdslagen och
					syftar till att säkerställa att alla patienter får vård i
					tid oavsett var i landet de bor. Garantin gäller från det
					att du söker vård tills du har fått behövlig behandling.
				</p>
				<p class="text-neutral-700">
					Det är viktigt att veta att vårdgarantin inte gäller för
					alla typer av vård. Vissa planerade operationer och
					behandlingar kan ha längre väntetider. Din läkare eller
					vårdgivare kan ge dig mer information om vad som gäller för
					just ditt fall.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">
					Vanliga frågor om vårdgaranti
				</h2>
				<Accordion :items="accordionItems" />
			</div>

			<div class="bg-white rounded-lg shadow-md p-6">
				<h2 class="text-xl font-semibold mb-4">
					Kontakt och mer information
				</h2>
				<p class="text-neutral-700 mb-4">
					Om du har frågor om vårdgarantin eller om du tror att dina
					rättigheter har åsidosatts kan du kontakta:
				</p>
				<ul
					class="list-disc list-inside text-neutral-700 space-y-2 px-4"
				>
					<li>Din vårdcentral för information om väntetider</li>
					<li>
						1177 Vårdguiden för generell rådgivning om vårdgarantin
					</li>
					<li>
						Patientnämnden i ditt landsting för att framföra
						klagomål
					</li>
					<li>
						Inspektionen för vård och omsorg (IVO) för mer
						information om patienträttigheter
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
