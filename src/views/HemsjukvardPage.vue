<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Breadcrumbs from '../components/common/Breadcrumbs.vue'
  import ServiceCard from '../components/display/ServiceCard.vue'
  import ContactCard from '../components/display/ContactCard.vue'
  import ListItem from '../components/display/ListItem.vue'
  import Badge from '../components/display/Badge.vue'
  import Alert from '../components/display/Alert.vue'
  import Tabs from '../components/interactive/Tabs.vue'
  import Modal from '../components/interactive/Modal.vue'
  import FormButton from '../components/forms/FormButton.vue'
  import TextInput from '../components/forms/TextInput.vue'
  import SelectInput from '../components/forms/SelectInput.vue'
  import Textarea from '../components/forms/Textarea.vue'

  // Define home healthcare services
  const homeCareServices = [
    {
      name: 'Sjukvård i hemmet',
      description: 'Medicinsk behandling och omvårdnad i hemmet för patienter som inte kan ta sig till mottagningen',
      category: 'Sjukvård',
      duration: 'Efter behov',
      staff: 'Sjuksköterskor, undersköterskor',
      price: 'Gratis med beslut',
      tags: ['Medicinering', 'Omvårdnad', 'Injektioner'],
      availability: 'Dygnet runt vid behov'
    },
    {
      name: 'Rehabilitering i hemmet',
      description: 'Fysioterapi och arbetsterapi i hemmet för att förbättra funktion och självständighet',
      category: 'Rehabilitering',
      duration: 'Enligt behandlingsplan',
      staff: 'Fysioterapeuter, arbetsterapeuter',
      price: 'Gratis med remiss',
      tags: ['Fysioterapi', 'Arbetsterapi', 'Träning'],
      availability: 'Vardagar 8:00-17:00'
    },
    {
      name: 'Palliativ vård',
      description: 'Lindrande vård i livets slutskede för att ge bästa möjliga livskvalitet',
      category: 'Palliativ vård',
      duration: 'Kontinuerligt',
      staff: 'Specialutbildad personal',
      price: 'Gratis med beslut',
      tags: ['Lindrande vård', 'Livskvalitet', 'Stöd'],
      availability: 'Dygnet runt'
    },
    {
      name: 'Hjälp med grundläggande behov',
      description: 'Hjälp med personlig hygien, måltider och andra grundläggande behov',
      category: 'Omsorg',
      duration: 'Efter behov',
      staff: 'Undersköterskor, vårdassistenter',
      price: 'Gratis med beslut',
      tags: ['Personlig hygien', 'Måltider', 'Trygghet'],
      availability: 'Dygnet runt vid behov'
    },
    {
      name: 'Medicinska bedömningar',
      description: 'Läkare gör hembesök för medicinska bedömningar och behandling',
      category: 'Medicinsk bedömning',
      duration: '30-60 minuter',
      staff: 'Läkare',
      price: 'Gratis med remiss',
      tags: ['Läkarbesök', 'Bedömning', 'Behandling'],
      availability: 'Vardagar 8:00-17:00'
    },
    {
      name: 'Teknisk hjälpmedel',
      description: 'Utlåning och anpassning av hjälpmedel för att underlätta vardagen',
      category: 'Hjälpmedel',
      duration: 'Efter behov',
      staff: 'Hjälpmedelskonsulenter',
      price: 'Gratis med beslut',
      tags: ['Rullator', 'Kryckor', 'Anpassning'],
      availability: 'Vardagar 8:00-16:00'
    }
  ]

  // Define eligibility criteria
  const eligibilityCriteria = [
    {
      title: 'Medicinska behov',
      description: 'Du har medicinska behov som kräver professionell vård i hemmet',
      icon: 'medical'
    },
    {
      title: 'Svårt att ta sig till mottagning',
      description: 'Din hälsa gör det svårt eller omöjligt att besöka vårdcentralen',
      icon: 'mobility'
    },
    {
      title: 'Läkarintyg',
      description: 'Du behöver ett läkarintyg som styrker ditt behov av hemsjukvård',
      icon: 'certificate'
    },
    {
      title: 'Kommunalt beslut',
      description: 'Vissa insatser kräver beslut från kommunens biståndshandläggare',
      icon: 'decision'
    }
  ]

  // Define staff members
  const staffMembers = [
    {
      name: 'Anna Lindberg',
      role: 'Distriktssköterska, hemsjukvård',
      phone: '08-123 456 70',
      email: 'anna.lindberg@vardcentralen.se',
      specialization: 'Medicinsk behandling i hemmet'
    },
    {
      name: 'Erik Johansson',
      role: 'Fysioterapeut',
      phone: '08-123 456 71',
      email: 'erik.johansson@vardcentralen.se',
      specialization: 'Rehabilitering i hemmet'
    },
    {
      name: 'Maria Andersson',
      role: 'Arbetsterapeut',
      phone: '08-123 456 72',
      email: 'maria.andersson@vardcentralen.se',
      specialization: 'Hjälpmedel och anpassning'
    },
    {
      name: 'Lars Nilsson',
      role: 'Läkare, hemsjukvård',
      phone: '08-123 456 73',
      email: 'lars.nilsson@vardcentralen.se',
      specialization: 'Medicinska bedömningar i hemmet'
    }
  ]

  // Reactive data for interactive components
  const activeTab = ref('overview')
  const showContactModal = ref(false)
  const selectedService = ref('')
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const contactForm = ref({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: ''
  })

  // Tab data
  const tabs = [
    { id: 'overview', label: 'Översikt', content: 'Se alla tjänster' },
    {
      id: 'eligibility',
      label: 'Behov & rättigheter',
      content: 'Vem kan få hemsjukvård'
    },
    { id: 'contact', label: 'Kontakta oss', content: 'Kontaktuppgifter' }
  ]

  // Category options for filter
  const categoryOptions = [
    { value: '', label: 'Alla kategorier' },
    { value: 'sjukvard', label: 'Sjukvård' },
    { value: 'rehabilitering', label: 'Rehabilitering' },
    { value: 'omsorg', label: 'Omsorg' },
    { value: 'hjalpmedel', label: 'Hjälpmedel' }
  ]

  // Filter services based on search and category
  const filteredServices = computed(() => {
    return homeCareServices.filter(service => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesCategory =
        !selectedCategory.value || service.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
      return matchesSearch && matchesCategory
    })
  })

  // Function to handle contact
  const handleContact = (serviceName: string) => {
    selectedService.value = serviceName
    contactForm.value.service = serviceName
    showContactModal.value = true
  }

  // Function to submit contact form
  const submitContact = () => {
    // In a real app, this would submit to a backend
    alert(`Kontaktformulär skickat för ${contactForm.value.service}`)
    showContactModal.value = false
    selectedService.value = ''
    contactForm.value = {
      name: '',
      phone: '',
      email: '',
      message: '',
      service: ''
    }
  }
</script>

<template>
  <Breadcrumbs />

  <div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Hemsjukvård</h1>

    <!-- Alert for important information -->
    <Alert
      type="info"
      title="Professionell vård i ditt hem"
      message="Vi erbjuder medicinskt och omvårdnadande insatser i hemmet för dig som har svårt att ta dig till vår mottagning. All personal är utbildad och har tystnadsplikt."
      class="mb-6"
    />

    <!-- Tabs for different views -->
    <Tabs :tabs="tabs" v-model:activeTab="activeTab" class="mb-6" />

    <!-- Search and filter section -->
    <div class="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-dark-bg-secondary">
      <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextInput
          id="search"
          name="search"
          label="Sök tjänst"
          placeholder="Sök efter hemsjukvårdstjänst..."
          v-model="searchQuery"
          class="dark:border-dark-border-primary"
        />
        <SelectInput
          id="category"
          name="category"
          label="Filtrera kategori"
          :options="categoryOptions"
          v-model="selectedCategory"
        />
      </div>
    </div>

    <!-- Main content based on active tab -->
    <div v-if="activeTab === 'overview'" class="rounded-lg bg-white p-6 shadow-md dark:bg-dark-bg-secondary">
      <p class="mb-6 text-gray-600">
        Vår hemsjukvård erbjuder professionell vård och behandling i ditt hem. Vi arbetar för att du ska kunna få den
        vård du behöver med bibehållen självständighet och livskvalitet.
      </p>

      <!-- Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="(service, index) in filteredServices"
          :key="index"
          :title="service.name"
          :description="service.description"
          :tags="service.tags"
          link="#"
        >
          <div class="mt-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Kategori:</span>
              <Badge :text="service.category" variant="secondary" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Personal:</span>
              <span class="text-sm font-medium">{{ service.staff }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Pris:</span>
              <span class="text-sm font-medium">{{ service.price }}</span>
            </div>
            <div class="text-sm text-gray-600">
              <span class="font-medium">Tillgänglighet:</span>
              {{ service.availability }}
            </div>
            <FormButton text="Kontakta oss"
variant="primary"
@click="handleContact(service.name)"
class="mt-3" />
          </div>
        </ServiceCard>
      </div>
    </div>

    <!-- Eligibility view -->
    <div v-else-if="activeTab === 'eligibility'" class="rounded-lg bg-white p-6 shadow-md dark:bg-dark-bg-secondary">
      <h2 class="mb-4 text-xl font-semibold">Behov & rättigheter</h2>
      <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ListItem
          v-for="(criteria, index) in eligibilityCriteria"
          :key="index"
          :title="criteria.title"
          :description="criteria.description"
        >
          <template #icon>
            <svg class="h-5 w-5 text-blue-500"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </template>
        </ListItem>
      </div>

      <Alert
        type="warning"
        title="Så ansöker du"
        message="Kontakta din distriktssköterska eller läkare för att göra en behovsbedömning. Vissa insatser kräver även beslut från kommunen."
        class="mb-6"
      />

      <div class="rounded-md bg-gray-50 p-4">
        <h3 class="mb-2 text-lg font-medium text-gray-800">Vad kostar hemsjukvård?</h3>
        <p class="mb-3 text-sm text-gray-700">
          För de flesta medicinska insatser gäller högkostnadsskyddet precis som vid besök på vårdcentralen. Vissa
          omsorgsinsatser kan vara avgiftsbelagda baserat på inkomst.
        </p>
        <p class="text-sm text-gray-700">
          <strong>Maxavgift:</strong>
          För medicinsk hemsjukvård gäller samma maxavgift som för övrig sjukvård, för närvarande 1 150 kr per år.
        </p>
      </div>
    </div>

    <!-- Contact view -->
    <div v-else-if="activeTab === 'contact'" class="rounded-lg bg-white p-6 shadow-md dark:bg-dark-bg-secondary">
      <h2 class="mb-4 text-xl font-semibold">Kontakta oss</h2>
      <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ContactCard
          v-for="(staff, index) in staffMembers"
          :key="`staff-${index}`"
          :name="staff.name"
          :role="staff.role"
          :phone="staff.phone"
          :email="staff.email"
        >
          <div class="mt-4">
            <p class="text-sm text-gray-600">
              <span class="font-medium">Specialisering:</span>
              {{ staff.specialization }}
            </p>
          </div>
        </ContactCard>
      </div>

      <div class="rounded-md bg-blue-50 p-4">
        <h3 class="mb-2 text-lg font-medium text-blue-800">Akut hemsjukvård</h3>
        <p class="mb-3 text-sm text-blue-700">
          För akut hemsjukvård utanför ordinarie arbetstid, ring vår akutmottagning på 08-123 456 80.
        </p>
        <p class="text-sm text-blue-700">Vid livshotande tillstånd, ring alltid 112.</p>
      </div>
    </div>

    <!-- Contact Modal -->
    <Modal title="Kontakta oss om hemsjukvård" v-model:visible="showContactModal" size="medium">
      <div class="space-y-4">
        <div class="rounded-md bg-blue-50 p-4">
          <p class="text-sm text-blue-800">
            Du kontaktar oss gällande:
            <strong>{{ selectedService }}</strong>
          </p>
        </div>

        <TextInput
          id="contact-name"
          name="contact-name"
          label="Ditt namn"
          placeholder="Ditt fullständiga namn"
          v-model="contactForm.name"
          required
        />

        <TextInput
          id="contact-phone"
          name="contact-phone"
          label="Telefonnummer"
          type="tel"
          placeholder="070-123 45 67"
          v-model="contactForm.phone"
          required
        />

        <TextInput
          id="contact-email"
          name="contact-email"
          label="E-postadress"
          type="email"
          placeholder="din.epost@exempel.se"
          v-model="contactForm.email"
        />

        <Textarea
          id="contact-message"
          name="contact-message"
          label="Meddelande"
          placeholder="Beskriv ditt behov eller dina frågor..."
          v-model="contactForm.message"
          :rows="4"
        />
      </div>

      <template #footer>
        <div class="flex justify-end space-x-3">
          <FormButton text="Avbryt" variant="secondary" @click="showContactModal = false" />
          <FormButton text="Skicka meddelande" variant="primary" @click="submitContact" />
        </div>
      </template>
    </Modal>
  </div>
</template>
