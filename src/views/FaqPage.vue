<script setup lang="ts">
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-800">Frågor och Svar</h1>
      <p class="mb-8 text-lg text-neutral-800">
        Här har vi samlat vanliga frågor och svar om vår verksamhet. Hittar du inte svar på din fråga är du välkommen
        att kontakta oss.
      </p>

      <div class="space-y-6">
        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Hur bokar jag en tid?</h2>
          <p class="text-neutral-700">
            Du kan boka tid på flera sätt: via vår webbplats under "Boka tid", genom att ringa oss på 08-123 456 78,
            eller genom att besöka oss direkt under våra öppettider. För akuta ärenden, ring oss alltid direkt.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Vad kostar ett besök?</h2>
          <p class="text-neutral-700">
            Priset för ett vårdbesök varierar beroende på typ av besök och din ålder. För vuxna (18 år och äldre) är det
            högkostnadsskydd som gäller. Barn och ungdomar under 18 år har fri vård. För mer detaljerad prisinformation,
            kontakta vår reception.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Hur avbokar jag en tid?</h2>
          <p class="text-neutral-700">
            Du kan avboka din tid via Mina Sidor på vår webbplats, genom att ringa oss, eller genom att besöka oss.
            Observera att du måste avboka senast 24 timmar innan ditt besök för att undvika en avgift.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Kan jag få mina recept förnyade?</h2>
          <p class="text-neutral-700">
            Ja, du kan förnya dina recept via Mina Sidor på vår webbplats. Vissa recept kräver dock ett nytt besök hos
            läkare. Om du är osäker, kontakta oss via telefon eller e-post.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Hur får jag tillgång till mina journaler?</h2>
          <p class="text-neutral-700">
            Du kan logga in på Mina Sidor med BankID för att läsa dina journaler. Du kan också beställa en utskrift av
            din journal genom att kontakta oss. Observera att det kan ta upp till 7 dagar att få en utskrift.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Erbjuder ni vaccinationer?</h2>
          <p class="text-neutral-700">
            Ja, vi erbjuder vaccinationer mot influensa, COVID-19 och andra sjukdomar enligt nationella
            vaccinationsprogrammet. Vissa vaccinationer är gratis medan andra kostar. Kontakta oss för mer information
            och för att boka tid.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">
            Vad gör jag om jag blir sjuk på kvällen eller helgen?
          </h2>
          <p class="text-neutral-700">
            Om du blir akut sjuk utanför våra öppettider, kontakta 1177 Vårdguiden för rådgivning. För livshotande
            tillstånd, ring 112. Du kan också besöka en akutmottagning eller jourcentral.
          </p>
        </div>

        <div class="rounded-lg bg-white p-6 shadow-md">
          <h2 class="mb-3 text-xl font-semibold text-primary-700">Kan jag byta vårdcentral?</h2>
          <p class="text-neutral-700">
            Ja, du har rätt att byta vårdcentral när du vill. Du kan göra det direkt via 1177 Vårdguidens e-tjänster
            eller genom att kontakta din nya vårdcentral. Observera att det kan ta några dagar innan bytet är
            registrerat i systemet.
          </p>
        </div>
      </div>

      <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-3 text-xl font-semibold text-primary-700">Har du fler frågor?</h2>
        <p class="mb-4 text-neutral-700">Kontakta oss så hjälper vi dig.</p>
        <router-link
          to="/kontakt"
          class="inline-block rounded-lg bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800"
        >
          Kontakta oss
        </router-link>
      </div>
    </div>
  </div>
</template>
