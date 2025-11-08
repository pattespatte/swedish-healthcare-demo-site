<template>
  <SecondaryNavigation />
  <Breadcrumbs />
  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 text-3xl font-bold text-gray-800">Lediga tjänster</h1>

      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <p class="mb-6 text-gray-600">
          Vi söker ständig nya medarbetare som vill vara med och utveckla vården. Här hittar du våra lediga tjänster för
          specialistläkare och annan vårdpersonal.
        </p>

        <div class="mb-6 rounded-lg bg-blue-50 p-6 dark:bg-dark-bg-tertiary">
          <h2 class="mb-3 text-xl font-semibold text-blue-800">Aktuella tjänster</h2>
          <div class="space-y-4">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800">Specialistläkare i allmänmedicin</h3>
              <p class="text-gray-600">
                Vi söker en driven specialistläkare till vår vårdcentral. Tillsvidareanställning med start enligt
                överenskommelse.
              </p>
              <p class="mt-2 text-sm text-neutral-600">Sista ansökningsdag: 2025-12-15</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800">Specialistläkare i kirurgi</h3>
              <p class="text-gray-600">
                Till vår kirurgiska mottagning söker vi en specialistläkare med intresse för både planerad och akut
                kirurgi.
              </p>
              <p class="mt-2 text-sm text-neutral-600">Sista ansökningsdag: 2025-12-20</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800">Specialistläkare i psykiatri</h3>
              <p class="text-gray-600">
                Vi utökar vår psykiatriska verksamhet och söker nu specialistläkare till vår öppenvårdsmottagning.
              </p>
              <p class="mt-2 text-sm text-neutral-600">Sista ansökningsdag: 2026-01-10</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800">Specialistläkare i radiologi</h3>
              <p class="text-gray-600">
                Till vår moderna röntgenavdelning söker vi en specialistläkare med bred kompetens inom diagnostisk
                radiologi.
              </p>
              <p class="mt-2 text-sm text-neutral-600">Sista ansökningsdag: 2025-12-31</p>
            </div>
          </div>
        </div>

        <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="rounded-lg bg-green-50 p-6">
            <h2 class="mb-3 text-xl font-semibold text-green-800">Vi erbjuder</h2>
            <ul class="list-disc pl-5 text-gray-700">
              <li>Konkurrenskraftig lön</li>
              <li>Förmånlig arbetstid</li>
              <li>Möjlighet till forskning</li>
              <li>Intern fortbildning</li>
              <li>Moderne arbetslokaler</li>
              <li>Subventionerad lunch</li>
            </ul>
          </div>
          <div class="rounded-lg bg-yellow-50 p-6">
            <h2 class="mb-3 text-xl font-semibold text-yellow-800">Kvalifikationer</h2>
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

        <div class="mb-6 rounded-lg bg-gray-50 p-6">
          <h2 class="mb-3 text-xl font-semibold text-gray-800">Ansökan</h2>
          <p class="mb-4 text-gray-600">
            Välkommen att skicka in din ansökan via vår e-post: rekrytering@vardcentral.se. Ange vilken tjänst du söker
            i ämnesraden.
          </p>
          <p class="mb-4 text-gray-600">
            Din ansökan ska innehålla CV, personligt brev och kopior på relevanta intyg och legitimationer.
          </p>
          <p class="text-gray-600">
            Vi tillämpar löpande urval och kan komma att kalla till intervju innan sista ansökningsdag.
          </p>
        </div>

        <div class="text-center">
          <router-link
            to="/kontakt"
            class="mr-4 inline-block rounded-lg bg-primary-700 px-6 py-3 text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Kontakta oss
          </router-link>
          <button
            class="rounded-lg bg-neutral-600 px-6 py-3 text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
          >
            Prenumerera på lediga jobb
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SecondaryNavigation from '@/components/common/SecondaryNavigation.vue'
  import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

  export default {
    name: 'LedigaTjansterPage',
    components: {
      SecondaryNavigation,
      Breadcrumbs
    }
  }
</script>
