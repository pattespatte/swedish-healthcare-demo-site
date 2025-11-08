<script setup lang="ts">
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-800">Tillgänglighet</h1>
      <p class="mb-8 text-lg text-neutral-800">
        Vi strävar efter att vår webbplats och vår vårdcentral ska vara tillgänglig för alla. Här hittar du information
        om tillgängligheten på vår webbplats och i våra lokaler.
      </p>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Tillgänglighet på webbplatsen</h2>
        <p class="mb-4 text-neutral-700">
          Vi arbetar kontinuerligt för att förbättra tillgängligheten på vår webbplats och följer riktlinjerna för Web
          Content Accessibility Guidelines (WCAG) 2.1 på nivå AA.
        </p>
        <p class="mb-4 text-neutral-700">På vår webbplats kan du:</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Använda skärmläsare för att navigera</li>
          <li>Zooma in och ut på sidorna utan att innehållet försvinner</li>
          <li>Navigera med tangentbordet</li>
          <li>Få god kontrast mellan text och bakgrund</li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Bristande tillgänglighet</h2>
        <p class="mb-4 text-neutral-700">
          Vi är medvetna om att det finns delar av vår webbplats som inte är fullt tillgängliga för alla användare. Vi
          arbetar för att åtgärda dessa brister.
        </p>
        <p class="mb-4 text-neutral-700">Kända brister:</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Vissa PDF-dokument saknar text som kan läsas av skärmläsare</li>
          <li>Vissa bilder saknar alt-texter</li>
          <li>Vissa formulär kan vara svåra att navigera med tangentbordet</li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Rapportera brister i tillgänglighet</h2>
        <p class="mb-4 text-neutral-700">
          Om du upptäcker brister i webbplatsens tillgänglighet är vi tacksamma om du rapporterar det till oss. Beskriv
          så detaljerat som möjligt vilket innehåll det gäller och vilket problem du har upptäckt.
        </p>
        <p class="mb-4 text-neutral-700">Du kan kontakta oss via:</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>E-post: tillganglighet@vardcentralen.se</li>
          <li>Telefon: 08-123 456 78</li>
          <li>Post: Vårdportalen, Storgatan 12, 123 45 Stockholm</li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Tillgänglighet i våra lokaler</h2>
        <p class="mb-4 text-neutral-700">
          Vår vårdcentral är anpassad för att vara tillgänglig för personer med funktionsnedsättning.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
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
            <span class="font-medium">Hiss:</span>
            Hiss finns mellan våningarna
          </li>
          <li>
            <span class="font-medium">Rullstol:</span>
            Vi har rullstolar att låna ut vid behov
          </li>
          <li>
            <span class="font-medium">Hörselslinga:</span>
            Hörselslinga finns i receptionen och i några av våra mottagningsrum
          </li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Tolk och hjälpmedel</h2>
        <p class="mb-4 text-neutral-700">
          Om du behöver tolk eller har behov av andra hjälpmedel vid ditt besök, meddela oss när du bokar tid så att vi
          kan förbereda detta.
        </p>
        <p class="mb-4 text-neutral-700">Vi kan hjälpa till med:</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Tolk (teckenspråk eller andra språk)</li>
          <li>Texttelefon</li>
          <li>Material i punktskrift eller med förstorad text</li>
        </ul>
      </div>

      <div class="rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Tillsynsmyndighet</h2>
        <p class="mb-4 text-neutral-700">
          Om du inte är nöjd med hur vi hanterar dina synpunkter på tillgänglighet kan du kontakta Myndigheten för
          digital förvaltning (DIGG) och påtala bristen.
        </p>
        <p class="mb-4 text-neutral-700">Myndigheten för digital förvaltning (DIGG)</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Box 12345</li>
          <li>123 45 Stockholm</li>
          <li>Telefon: 08-578 287 00</li>
          <li>
            Webbplats:
            <a
              href="https://digg.se"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-700 underline hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              digg.se
            </a>
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
