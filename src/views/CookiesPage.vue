<script setup lang="ts">
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Cookies</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Denna sida förklarar hur vår webbplats använder cookies (kakor) och vilka val du har gällande dem.
			</p>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Vad är cookies?</h2>
				<p class="mb-4 text-neutral-700">
					Cookies är små textfiler som lagras på din enhet (dator, mobil eller surfplatta) när du besöker en webbplats.
					De hjälper webbplatsen att komma ihåg information om ditt besök och kan förbättra din användarupplevelse.
				</p>
				<p class="text-neutral-700">
					Cookies används av de flesta webbplatser idag och är vanligtvis ofarliga. De kan inte innehålla virus eller
					skadlig kod och kan inte användas för att identifiera dig personligen.
				</p>
			</div>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Hur vi använder cookies</h2>
				<p class="mb-4 text-neutral-700">Vi använder olika typer av cookies för olika ändamål på vår webbplats:</p>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>
						<span class="font-medium">Nödvändiga cookies:</span>
						Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De möjliggör grundläggande funktioner
						som sidnavigering, åtkomst till säkra områden och hantering av dina bokningar.
					</li>
					<li>
						<span class="font-medium">Funktionella cookies:</span>
						Dessa cookies hjälper webbplatsen att komma ihåg dina val och preferenser, såsom språkinställningar eller
						inloggningsinformation, för att ge dig en mer personlig upplevelse.
					</li>
					<li>
						<span class="font-medium">Analyscookies:</span>
						Dessa cookies hjälper oss att förstå hur besökare använder vår webbplats genom att samla in och rapportera
						information anonymt. Detta hjälper oss att förbättra webbplatsens prestanda och användbarhet.
					</li>
					<li>
						<span class="font-medium">Marknadsföringscookies:</span>
						Dessa cookies används för att leverera annonser som är relevanta för dig och dina intressen. De kan också
						användas för att mäta effektiviteten av reklamkampanjer.
					</li>
				</ul>
			</div>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Specifika cookies vi använder</h2>
				<p class="mb-4 text-neutral-700">
					Nedan listas de specifika cookies som används på vår webbplats och deras syfte:
				</p>
				<div class="overflow-x-auto">
					<table class="w-full text-sm text-neutral-700">
						<thead class="bg-neutral-100">
							<tr>
								<th class="px-4 py-2 text-left">Cookie-namn</th>
								<th class="px-4 py-2 text-left">Typ</th>
								<th class="px-4 py-2 text-left">Lagringstid</th>
								<th class="px-4 py-2 text-left">Syfte</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b">
								<td class="px-4 py-2">session_id</td>
								<td class="px-4 py-2">Nödvändig</td>
								<td class="px-4 py-2">Session</td>
								<td class="px-4 py-2">Hanterar din inloggningssession</td>
							</tr>
							<tr class="border-b">
								<td class="px-4 py-2">csrf_token</td>
								<td class="px-4 py-2">Nödvändig</td>
								<td class="px-4 py-2">Session</td>
								<td class="px-4 py-2">Skyddar mot CSRF-attacker</td>
							</tr>
							<tr class="border-b">
								<td class="px-4 py-2">language_preference</td>
								<td class="px-4 py-2">Funktionell</td>
								<td class="px-4 py-2">1 år</td>
								<td class="px-4 py-2">Kommer ihåg ditt språkval</td>
							</tr>
							<tr class="border-b">
								<td class="px-4 py-2">_ga</td>
								<td class="px-4 py-2">Analys</td>
								<td class="px-4 py-2">2 år</td>
								<td class="px-4 py-2">Google Analytics för statistik</td>
							</tr>
							<tr class="border-b">
								<td class="px-4 py-2">_gid</td>
								<td class="px-4 py-2">Analys</td>
								<td class="px-4 py-2">24 timmar</td>
								<td class="px-4 py-2">Google Analytics för statistik</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Dina val och rättigheter</h2>
				<p class="mb-4 text-neutral-700">Du har flera alternativ när det gäller cookies på vår webbplats:</p>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>
						<span class="font-medium">Acceptera alla cookies:</span>
						Du kan välja att acceptera alla cookies för den bästa upplevelsen på vår webbplats.
					</li>
					<li>
						<span class="font-medium">Avvisa icke-nödvändiga cookies:</span>
						Du kan välja att endast acceptera nödvändiga cookies och avvisa alla andra.
					</li>
					<li>
						<span class="font-medium">Anpassa dina inställningar:</span>
						Du kan välja vilka typer av cookies du vill acceptera eller avvisa.
					</li>
					<li>
						<span class="font-medium">Hantera cookies i din webbläsare:</span>
						Du kan när som helst radera eller blockera cookies genom att ändra inställningarna i din webbläsare.
					</li>
				</ul>
			</div>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Hur du hanterar cookies i din webbläsare</h2>
				<p class="mb-4 text-neutral-700">
					Most web browsers allow you to control cookies through their settings. Here's how you can manage cookies in
					the most common browsers:
				</p>
				<ul class="list-disc space-y-2 pl-5 text-neutral-700">
					<li>
						<span class="font-medium">Chrome:</span>
						Gå till Inställningar → Sekretess och säkerhet → Cookies och andra webbplatsdata
					</li>
					<li>
						<span class="font-medium">Firefox:</span>
						Gå till Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata
					</li>
					<li>
						<span class="font-medium">Safari:</span>
						Gå till Inställningar → Sekretess → Hantera webbplatsdata
					</li>
					<li>
						<span class="font-medium">Edge:</span>
						Gå till Inställningar → Sekretess, sökning och tjänster → Cookies och webbplatsbehörigheter
					</li>
				</ul>
				<p class="mt-4 text-neutral-700">
					Observera att om du blockerar eller raderar cookies kan vissa funktioner på vår webbplatis sluta fungera
					korrekt.
				</p>
			</div>

			<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Uppdateringar av vår cookie-policy</h2>
				<p class="mb-4 text-neutral-700">
					Vi kan komma att uppdatera denna cookie-policy från tid till annan för att återspegla ändringar i vår
					användning av cookies eller av juridiska skäl. Eventuella ändringar kommer att publiceras på denna sida med
					uppdaterat datum.
				</p>
				<p class="text-neutral-700">
					Vi rekommenderar att du regelbundet granskar denna sida för att hålla dig informerad om vår användning av
					cookies.
				</p>
			</div>

			<div class="rounded-lg bg-white p-6 shadow-md">
				<h2 class="mb-4 text-xl font-semibold">Kontaktinformation</h2>
				<p class="mb-4 text-neutral-700">
					Om du har frågor om vår användning av cookies eller denna policy är du välkommen att kontakta oss.
				</p>
				<div class="space-y-3 text-neutral-700">
					<p>
						<span class="font-medium">E-post:</span>
						dataskydd@vardcentralen.se
					</p>
					<p>
						<span class="font-medium">Telefon:</span>
						08-123 456 78
					</p>
					<p>
						<span class="font-medium">Adress:</span>
						Vårdportalen, Storgatan 12, 123 45 Stockholm
					</p>
				</div>
				<p class="mt-4 text-neutral-700">Senast uppdaterad: 2023-11-15</p>
			</div>
		</div>
	</div>
</template>
