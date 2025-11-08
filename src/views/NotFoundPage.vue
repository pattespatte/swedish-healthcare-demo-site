<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
  import SearchBox from '../components/interactive/SearchBox.vue'
  import FormButton from '../components/forms/FormButton.vue'

  const router = useRouter()
  const searchQuery = ref('')

  // Popular pages/services that users might be looking for
  const popularPages = [
    {
      name: 'Boka tid',
      path: '/boka-tid',
      description: 'Boka tid hos läkare eller sjuksköterska'
    },
    {
      name: 'Mottagningar',
      path: '/mottagningar',
      description: 'Hitta rätt mottagning för ditt behov'
    },
    {
      name: 'Vårdguide',
      path: '/vardguide',
      description: 'Information om sjukdomar och behandlingar'
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      description: 'Kontaktuppgifter och öppettider'
    },
    {
      name: 'Mina sidor',
      path: '/mina-sidor',
      description: 'Logga in för att se dina vårdärenden'
    },
    {
      name: 'Frågor och svar',
      path: '/fragor-och-svar',
      description: 'Vanliga frågor om vården'
    }
  ]

  // Handle search functionality
  const handleSearch = (query: string) => {
    // In a real application, this would navigate to a search results page
    // For now, we'll just log the query and show an alert
    console.log('Searching for:', query)
    alert(`Sökning efter "${query}" skulle här leda till en sökresultatsida.`)
  }

  // Navigate to home page
  const goToHome = () => {
    router.push('/')
  }

  // Navigate to a specific page
  const navigateToPage = (path: string) => {
    router.push(path)
  }
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <div class="mx-auto max-w-4xl">
      <main class="text-center">
        <!-- 404 Error Icon and Message -->
        <div class="mb-8">
          <div class="mx-auto mb-6 h-32 w-32 text-primary-700">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <h1 class="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">Sidan kunde inte hittas</h1>

          <p class="mb-6 text-xl text-neutral-700">Tyvärr, sidan du letar efter finns inte.</p>

          <p class="mx-auto mb-8 max-w-2xl text-lg text-neutral-600">
            Sidan kan ha flyttats, tagits bort eller så har du angett felaktig webbadress. Du kan använda sökfunktionen
            nedan eller välja en av våra populära sidor.
          </p>
        </div>

        <!-- Search Box -->
        <div class="mx-auto mb-10 max-w-xl">
          <SearchBox
            v-model="searchQuery"
            placeholder="Leta vidare..."
            size="large"
            show-search-button
            @search="handleSearch"
            aria-label="Sök på webbplatsen"
          />
        </div>

        <!-- Back to Home Button -->
        <div class="mb-12">
          <FormButton variant="primary"
text="Till startsidan"
@click="goToHome"
class="px-6 py-3 text-base" />
        </div>

        <!-- Popular Pages Section -->
        <div class="rounded-lg bg-white p-6 text-left shadow-md md:p-8">
          <h2 class="mb-6 text-center text-2xl font-semibold text-gray-800">Populära sidor</h2>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              v-for="page in popularPages"
              :key="page.path"
              class="cursor-pointer rounded-lg border border-neutral-200 p-4 transition-all duration-200 hover:border-primary-300 hover:shadow-sm"
              @click="navigateToPage(page.path)"
            >
              <h3 class="mb-2 font-semibold text-primary-700">
                {{ page.name }}
              </h3>
              <p class="text-sm text-neutral-600">
                {{ page.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="mt-10 rounded-lg bg-blue-50 p-6">
          <h2 class="mb-4 text-xl font-semibold text-gray-800">Behöver du hjälp?</h2>
          <p class="mb-4 text-neutral-700">Om du inte hittar det du söker kan du kontakta oss:</p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:08-123 456 78"
              class="flex items-center justify-center font-medium text-primary-700 hover:text-primary-800"
            >
              <svg class="mr-2 h-5 w-5"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              08-123 456 78
            </a>
            <a
              href="mailto:info@vardcentralen.se"
              class="flex items-center justify-center font-medium text-primary-700 hover:text-primary-800"
            >
              <svg class="mr-2 h-5 w-5"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              info@vardcentralen.se
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
  /* Custom styles for the 404 page */
</style>
