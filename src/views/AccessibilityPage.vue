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
			<h1 class="text-3xl font-bold text-gray-800 mb-6">
				Tillgänglighet
			</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Vi strävar efter att vår webbplats och vår vårdcentral ska vara
				tillgänglig för alla. Här hittar du information om
				tillgängligheten på vår webbplats och i våra lokaler.
			</p>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Tillgänglighet på webbplatsen
				</h2>
				<p class="text-neutral-700 mb-4">
					Vi arbetar kontinuerligt för att förbättra tillgängligheten
					på vår webbplats och följer riktlinjerna för Web Content
					Accessibility Guidelines (WCAG) 2.1 på nivå AA.
				</p>
				<p class="text-neutral-700 mb-4">På vår webbplats kan du:</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>Använda skärmläsare för att navigera</li>
					<li>
						Zooma in och ut på sidorna utan att innehållet
						försvinner
					</li>
					<li>Navigera med tangentbordet</li>
					<li>Få god kontrast mellan text och bakgrund</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Bristande tillgänglighet
				</h2>
				<p class="text-neutral-700 mb-4">
					Vi är medvetna om att det finns delar av vår webbplats som
					inte är fullt tillgängliga för alla användare. Vi arbetar
					för att åtgärda dessa brister.
				</p>
				<p class="text-neutral-700 mb-4">Kända brister:</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>
						Vissa PDF-dokument saknar text som kan läsas av
						skärmläsare
					</li>
					<li>Vissa bilder saknar alt-texter</li>
					<li>
						Vissa formulär kan vara svåra att navigera med
						tangentbordet
					</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Rapportera brister i tillgänglighet
				</h2>
				<p class="text-neutral-700 mb-4">
					Om du upptäcker brister i webbplatsens tillgänglighet är vi
					tacksamma om du rapporterar det till oss. Beskriv så
					detaljerat som möjligt vilket innehåll det gäller och vilket
					problem du har upptäckt.
				</p>
				<p class="text-neutral-700 mb-4">Du kan kontakta oss via:</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>E-post: tillganglighet@vardcentralen.se</li>
					<li>Telefon: 08-123 456 78</li>
					<li>Post: Vårdportalen, Storgatan 12, 123 45 Stockholm</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Tillgänglighet i våra lokaler
				</h2>
				<p class="text-neutral-700 mb-4">
					Vår vårdcentral är anpassad för att vara tillgänglig för
					personer med funktionsnedsättning.
				</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>
						<span class="font-medium">Entré:</span>
						Rullstolsanpassad ingång utan trappor
					</li>
					<li>
						<span class="font-medium">Parkering:</span>
						Handikapparkering finns nära ingången
					</li>
					<li>
						<span class="font-medium">Toaletter:</span>
						Handikappanpassad toalett finns i bottenvåningen
					</li>
					<li>
						<span class="font-medium">Hiss:</span> Hiss finns mellan
						våningarna
					</li>
					<li>
						<span class="font-medium">Rullstol:</span> Vi har
						rullstolar att låna ut vid behov
					</li>
					<li>
						<span class="font-medium">Hörselslinga:</span>
						Hörselslinga finns i receptionen och i några av våra
						mottagningsrum
					</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Tolk och hjälpmedel
				</h2>
				<p class="text-neutral-700 mb-4">
					Om du behöver tolk eller har behov av andra hjälpmedel vid
					ditt besök, meddela oss när du bokar tid så att vi kan
					förbereda detta.
				</p>
				<p class="text-neutral-700 mb-4">Vi kan hjälpa till med:</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>Tolk (teckenspråk eller andra språk)</li>
					<li>Texttelefon</li>
					<li>Material i punktskrift eller med förstorad text</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6">
				<h2 class="text-xl font-semibold text-primary-600 mb-3">
					Tillsynsmyndighet
				</h2>
				<p class="text-neutral-700 mb-4">
					Om du inte är nöjd med hur vi hanterar dina synpunkter på
					tillgänglighet kan du kontakta Myndigheten för digital
					förvaltning (DIGG) och påtala bristen.
				</p>
				<p class="text-neutral-700 mb-4">
					Myndigheten för digital förvaltning (DIGG)
				</p>
				<ul class="list-disc pl-5 text-neutral-700 space-y-2">
					<li>Box 12345</li>
					<li>123 45 Stockholm</li>
					<li>Telefon: 08-578 287 00</li>
					<li>
						Webbplats:
						<a
							href="https://digg.se"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
							>digg.se</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
