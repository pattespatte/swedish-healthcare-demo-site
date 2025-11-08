<script setup lang="ts">
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-800">Integritetspolicy</h1>
      <p class="mb-8 text-lg text-neutral-800">
        Den här integritetspolicyn beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du använder
        vår webbplats och våra tjänster.
      </p>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Vilken information samlar vi in?</h2>
        <p class="mb-4 text-neutral-700">
          Vi samlar in olika typer av personuppgifter för att kunna erbjuda dig bästa möjliga vård och service.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span class="font-medium">Personuppgifter:</span>
            Namn, personnummer, kontaktuppgifter (telefonnummer, e-postadress, adress)
          </li>
          <li>
            <span class="font-medium">Hälsoinformation:</span>
            Meddelande till vården, bokningar, besökshistorik, medicinsk information
          </li>
          <li>
            <span class="font-medium">Användardata:</span>
            IP-adress, webbläsartyp, enhetsinformation, tid och datum för användning
          </li>
          <li>
            <span class="font-medium">Kommunikation:</span>
            Korrespondens med oss, samtycken, feedback och klagomål
          </li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Hur använder vi din information?</h2>
        <p class="mb-4 text-neutral-700">
          Vi använder dina personuppgifter för olika ändamål som är nödvändiga för att kunna erbjuda vårdtjänster.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>För att kunna diagnostisera, behandla och vårda dig</li>
          <li>För att boka och administrera dina besök hos oss</li>
          <li>För att kommunicera med dig om din vård</li>
          <li>För att utveckla och förbättra våra tjänster</li>
          <li>För att uppfylla lagkrav inom hälso- och sjukvården</li>
          <li>För att hantera fakturering och betalningar</li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Rättslig grund för behandling</h2>
        <p class="mb-4 text-neutral-700">
          Vår behandling av dina personuppgifter baseras på olika rättsliga grunder enligt GDPR.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span class="font-medium">Rättslig förpliktelse:</span>
            Vissa uppgifter måste vi hantera enligt lag (t.ex. patientjournal-lagen)
          </li>
          <li>
            <span class="font-medium">Allmänt intresse:</span>
            För att kunna bedriva hälso- och sjukvård
          </li>
          <li>
            <span class="font-medium">Samtycke:</span>
            När du aktivt har gett ditt samtycke till viss behandling
          </li>
          <li>
            <span class="font-medium">Avtal:</span>
            När behandlingen är nödvändig för att fullgöra ett avtal med dig
          </li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Delning av information</h2>
        <p class="mb-4 text-neutral-700">
          Vi delar dina personuppgifter endast när det är nödvändigt för att kunna erbjuda vård och service.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span class="font-medium">Vårdpersonal:</span>
            Dina uppgifter delas med den vårdpersonal som är involverad i din behandling
          </li>
          <li>
            <span class="font-medium">Regionens journalsystem:</span>
            Din journal lagras i regionens gemensamma journalsystem
          </li>
          <li>
            <span class="font-medium">Myndigheter:</span>
            Vi delar information när vi är skyldiga enligt lag (t.ex. till Socialstyrelsen)
          </li>
          <li>
            <span class="font-medium">Vårdgivare:</span>
            Information kan delas med andra vårdgivare vid remisser eller samverkan
          </li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Säkerhet</h2>
        <p class="mb-4 text-neutral-700">
          Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Alla system är skyddade med kryptering</li>
          <li>Endast behörig personal har tillgång till dina uppgifter</li>
          <li>Vi genomför regelbundna säkerhetskontroller</li>
          <li>All personal är bunden av tystnadsplikt</li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Dina rättigheter</h2>
        <p class="mb-4 text-neutral-700">Som registrerad har du flera rättigheter enligt GDPR.</p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span class="font-medium">Rätt att få information:</span>
            Du har rätt att veta vilka uppgifter vi behandlar om dig
          </li>
          <li>
            <span class="font-medium">Rätt till registerutdrag:</span>
            Du kan begära en kopia av dina personuppgifter
          </li>
          <li>
            <span class="font-medium">Rätt till rättelse:</span>
            Du kan begära att vi korrigerar felaktiga uppgifter
          </li>
          <li>
            <span class="font-medium">Rätt till radering:</span>
            I vissa fall kan du begära att dina uppgifter raderas
          </li>
          <li>
            <span class="font-medium">Rätt till dataportabilitet:</span>
            Du kan begära att få dina uppgifter i ett maskinläsbart format
          </li>
          <li>
            <span class="font-medium">Rätt att invända:</span>
            Du kan invända mot viss behandling av dina personuppgifter
          </li>
        </ul>
      </div>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Kakor (Cookies)</h2>
        <p class="mb-4 text-neutral-700">
          Vår webbplats använder kakor för att förbättra användarupplevelsen och för webbanalys.
        </p>
        <ul class="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span class="font-medium">Nödvändiga kakor:</span>
            Grundläggande funktioner på webbplatsen kräver vissa kakor
          </li>
          <li>
            <span class="font-medium">Analyskakor:</span>
            Vi använder analysverktyg för att förstå hur webbplatsen används
          </li>
          <li>
            <span class="font-medium">Valfrihet:</span>
            Du kan välja att inte acceptera kakor via dina webbläsarinställningar
          </li>
        </ul>
      </div>

      <div class="rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-xl font-semibold">Kontaktinformation</h2>
        <p class="mb-4 text-neutral-700">
          Om du har frågor om vår integritetspolicy eller hur vi behandlar dina personuppgifter är du välkommen att
          kontakta oss.
        </p>
        <div class="space-y-3 text-neutral-700">
          <p>
            <span class="font-medium">Dataskyddsombud:</span>
            Anna Andersson
          </p>
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
