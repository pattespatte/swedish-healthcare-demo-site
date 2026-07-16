<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Vårdguide</h1>
			<p class="mb-8 text-lg text-neutral-800">
				I vår vårdguide hittar du information om vanliga sjukdomar och besvär, samt råd om när du ska söka vård.
				Informationen är ett komplement till 1177 Vårdguiden.
			</p>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">När ska jag söka vård?</h2>
				<p class="mb-4 text-neutral-700">
					Det kan vara svårt att veta när man ska söka vård och var man ska vända sig. Här är några riktlinjer:
				</p>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>
						<span class="font-medium">Akut livshotande tillstånd:</span>
						Ring 112 direkt
					</li>
					<li>
						<span class="font-medium">Akuta besvär som inte kan vänta:</span>
						Kontakta 1177 eller akutmottagning
					</li>
					<li>
						<span class="font-medium">Besvär som kan vänta till nästa dag:</span>
						Kontakta vår vårdcentral
					</li>
					<li>
						<span class="font-medium">Egen vård:</span>
						Många vanliga besvär kan du behandla själv
					</li>
				</ul>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="rounded-lg bg-white p-6 shadow-md">
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Förkylning och influensa</h2>
					<p class="mb-4 text-neutral-700">
						Förkylning och influensa orsakas av virus och går oftast över av sig själv. Vila och mycket vätska är den
						bästa behandlingen.
					</p>
					<p class="mb-4 text-neutral-700">
						<span class="font-medium">Sök vård om:</span>
					</p>
					<ul class="list-disc space-y-1 pl-5 text-neutral-700">
						<li>Du får hög feber som inte sjunker</li>
						<li>Du har andningsbesvär</li>
						<li>Du blir mycket sämre efter några dagar</li>
					</ul>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-md">
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Mag- och tarminfektioner</h2>
					<p class="mb-4 text-neutral-700">
						Mag- och tarminfektioner (magsjuka) orsakas oftast av virus eller bakterier. Det är viktigt att dricka
						mycket vätska för att undvika uttorkning.
					</p>
					<p class="mb-4 text-neutral-700">
						<span class="font-medium">Sök vård om:</span>
					</p>
					<ul class="list-disc space-y-1 pl-5 text-neutral-700">
						<li>Du har tecken på uttorkning (torr i munnen, mindre urin)</li>
						<li>Du har blod i avföringen</li>
						<li>Du har hög feber</li>
					</ul>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-md">
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Hudproblem</h2>
					<p class="mb-4 text-neutral-700">
						Eksem, psoriasis och andra hudproblem kan ofta behandlas med receptfria produkter. Undvik att använda starka
						tvålparfymer.
					</p>
					<p class="mb-4 text-neutral-700">
						<span class="font-medium">Sök vård om:</span>
					</p>
					<ul class="list-disc space-y-1 pl-5 text-neutral-700">
						<li>Hudproblemet inte förbättras med egenvård</li>
						<li>Du har infektionssymptom (rodnad, svullnad, värme)</li>
						<li>Du har sår som inte läker</li>
					</ul>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-md">
					<h2 class="mb-3 text-xl font-semibold text-primary-700">Smärta i leder och muskler</h2>
					<p class="mb-4 text-neutral-700">
						Led- och muskelsmärta kan bero på många orsaker, till exempel överbelastning, inflammation eller ålder.
					</p>
					<p class="mb-4 text-neutral-700">
						<span class="font-medium">Sök vård om:</span>
					</p>
					<ul class="list-disc space-y-1 pl-5 text-neutral-700">
						<li>Smärtan är mycket kraftig eller plötslig</li>
						<li>Du har feber samtidigt</li>
						<li>Leden är svullen, röd och varm</li>
					</ul>
				</div>
			</div>

			<div class="mt-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">Egenvårdsråd</h2>
				<p class="mb-4 text-neutral-700">För många vanliga besvär kan du själv göra mycket för att lindra symtomen:</p>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>
						<span class="font-medium">Vila:</span>
						Ge kroppen tid att läka
					</li>
					<li>
						<span class="font-medium">Vätska:</span>
						Drick mycket vatten, särskilt vid feber
					</li>
					<li>
						<span class="font-medium">Receptfria läkemedel:</span>
						Använd enligt anvisning på förpackningen
					</li>
					<li>
						<span class="font-medium">Kyla eller värme:</span>
						Kyla vid svullnad, värme vid muskelsmärta
					</li>
					<li>
						<span class="font-medium">Elevera:</span>
						Lägg benen i högläge vid svullnad
					</li>
				</ul>
			</div>

			<div class="mt-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-3 text-xl font-semibold text-primary-700">Mer information</h2>
				<p class="mb-4 text-neutral-700">
					För mer detaljerad information om sjukdomar och besvär, besök 1177 Vårdguidens webbplats.
				</p>
				<a
					href="https://www.1177.se"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-lg bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800"
				>
					Besök 1177 Vårdguiden
				</a>
			</div>
		</div>
	</div>
</template>
