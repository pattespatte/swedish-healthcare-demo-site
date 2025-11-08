<script setup lang="ts">
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
  import InfoCard from '../components/display/InfoCard.vue'
  import Accordion from '../components/interactive/Accordion.vue'

  const accordionItems = [
    {
      id: '1',
      title: 'Hur förbereder jag mig inför mitt besök?',
      content:
        'Inför ditt besök är det bra att tänka igenom dina frågor och symtom. Skriv gärna ner dem i förväg så du inte glömmer något viktigt. Ta med dig giltig legitimation, eventuella mediciner du använder och tidigare journaler om det är relevant för besöket. Om du har en remiss, ta med den också.'
    },
    {
      id: '2',
      title: 'När ska jag kontakta 1177 och när vårdcentralen?',
      content:
        'Kontakta 1177 för sjukvårdsrådgivning när du är osäker på var du ska söka vård, behöver råd om symtom eller har frågor om mediciner. Kontakta din vårdcentral för att boka tid, få vård för kända sjukdomar eller för uppföljning. Vid livshotande tillstånd, ring alltid 112.'
    },
    {
      id: '3',
      title: 'Vad ingår i ett läkarbesök?',
      content:
        'Ett läkarbesök innefattar vanligtvis en samtal om dina besvär, en undersökning, diagnos och behandlingsplan. Läkaren kan skriva ut recept, remittera till specialist eller boka återbesök. Besöket varar vanligtvis 15-30 minuter beroende på ärende.'
    },
    {
      id: '4',
      title: 'Hur fungerar e-tjänster och digital vårdkontakt?',
      content:
        'Genom 1177.se kan du logga in med BankID för att boka och avboka tider, förnya recept, se dina provsvar och läsa din journal. Vissa vårdcentraler erbjuder även digitala besök via videosamtal. Kontakta din vårdcentral för att veta vilka e-tjänster som erbjuds.'
    }
  ]
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-800">Din vårdkontakt</h1>
      <p class="mb-8 text-lg text-neutral-800">
        Här hittar du information om hur du bäst förbereder dig för ditt besök och vilka olika vägar du kan ha för
        kontakt med vården.
      </p>

      <div class="mb-8 border-2 border-l-4 border-blue-100 bg-blue-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-blue-800">
              <strong>Viktigt:</strong>
              Kom alltid i tid till ditt besök. Om du behöver avboka, gör det minst 24 timmar i förväg så att någon
              annan kan få din tid.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Direktkontakt</h2>
        <div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Telefon" content="08-123 456 78" variant="primary" />
          <InfoCard title="1177" content="Sjukvårdsrådgivning" variant="primary" />
          <InfoCard title="112" content="Akuta situationer" variant="primary" />
        </div>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Kontaktvägar</h2>
        <div class="space-y-4">
          <div class="border border-l-4 border-blue-500 pb-4 pl-4 pt-2">
            <h3 class="mb-2 text-lg font-semibold">Vårdcentralen</h3>
            <p class="text-neutral-700">
              Kontakta din vårdcentral för att boka tid, få rådgivning för kända sjukdomar, förnya recept eller för
              uppföljning av tidigare behandlingar.
            </p>
          </div>
          <div class="border border-l-4 border-green-500 pb-4 pl-4 pt-2">
            <h3 class="mb-2 text-lg font-semibold">1177 Vårdguiden</h3>
            <p class="text-neutral-700">
              Ring 1177 för sjukvårdsrådgivning dygnet runt. Du kan få råd om symtom, hjälp att hitta rätt
              vårdmottagning och svar på medicinska frågor.
            </p>
          </div>
          <div class="border border-l-4 border-red-500 pb-4 pl-4 pt-2">
            <h3 class="mb-2 text-lg font-semibold">Akutvård</h3>
            <p class="text-neutral-700">
              Vid livshotande tillstånd eller allvarliga skador, ring 112 direkt. För andra akuta besvär som inte kan
              vänta, kontakta närmaste akutmottagning.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Digitala tjänster</h2>
        <p class="mb-4 text-neutral-700">Med BankID kan du logga in på 1177.se för att:</p>
        <ul class="mb-4 list-inside list-disc space-y-2 text-neutral-700">
          <li>Boka och avboka tider</li>
          <li>Förnya recept</li>
          <li>Se dina provsvar</li>
          <li>Läsa din journal</li>
          <li>Kommunicera säkert med din vårdgivare</li>
        </ul>
        <p class="text-neutral-700">
          Många vårdcentraler erbjuder även digitala besök via videosamtal. Fråga din vårdcentral om detta är ett
          alternativ för ditt ärende.
        </p>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Vanliga frågor om din vårdkontakt</h2>
        <Accordion :items="accordionItems" />
      </div>

      <div class="rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Dina rättigheter som patient</h2>
        <ul class="list-inside list-disc space-y-2 text-neutral-700">
          <li>Du har rätt att få information om din hälsa och vård</li>
          <li>Du har rätt att välja vårdcentral i hela landet</li>
          <li>Du har rätt till en fast läkarkontakt</li>
          <li>Du har rätt att få en andra medicinsk bedömning</li>
          <li>Du har rätt att ta med dig en anhörig vid besöket</li>
          <li>Du har rätt att få information på ett språk du förstår</li>
        </ul>
      </div>
    </div>
  </div>
</template>
