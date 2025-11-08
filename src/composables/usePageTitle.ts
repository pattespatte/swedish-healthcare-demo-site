import { ref, watch } from 'vue'

interface PageTitle {
  title: string
  description?: string
}

const pageTitle = ref<PageTitle>({
  title: '',
  description: ''
})

// Define page titles for all routes
const pageTitles: Record<string, PageTitle> = {
  '/': {
    title: 'Vårdcentralen Vårdportalen - Start',
    description: 'Boka tid, kontakta vården och hantera dina vårdärenden'
  },
  '/om-oss': {
    title: 'Om Oss - Vårdcentralen Vårdportalen',
    description: 'Information om Vårdcentralen Vårdportalen och vår verksamhet'
  },
  '/om-oss/jobba-hos-oss': {
    title: 'Jobba Hos Oss - Vårdcentralen Vårdportalen',
    description: 'Lediga tjänster och karriärmöjligheter inom vården'
  },
  '/om-oss/lediga-tjanster': {
    title: 'Lediga Tjänster - Vårdcentralen Vårdportalen',
    description: 'Se alla lediga tjänster inom svensk vård'
  },
  '/om-oss/formaner': {
    title: 'Formaner - Vårdcentralen Vårdportalen',
    description: 'Ansök till utbildningar och tjänster inom vården'
  },
  '/om-oss/karriarvagar': {
    title: 'Karriär - Vårdcentralen Vårdportalen',
    description: 'Karriärmöjligheter och utvecklingsmöjligheter'
  },
  '/tjanster': {
    title: 'Tjänster - Vårdcentralen Vårdportalen',
    description: 'Våra tjänster och behandlingar'
  },
  '/om-oss/specialistmottagningar': {
    title: 'Specialistmottagningar - Vårdcentralen Vårdportalen',
    description: 'Våra specialistmottagningar och mottagningar'
  },
  '/tjanster/specialistmottagningar': {
    title: 'Specialistmottagningar - Vårdcentralen Vårdportalen',
    description: 'Specialiserad vård och mottagning'
  },
  '/tjanster/labbprov': {
    title: 'Labbprov - Vårdcentralen Vårdportalen',
    description: 'Information om laboratorieprov och analyser'
  },
  '/tjanster/hemsjukvard': {
    title: 'Hemsjukvård - Vårdcentralen Vårdportalen',
    description: 'Vård och behandling i hemmet'
  },
  '/mottagningar': {
    title: 'Mottagningar - Vårdcentralen Vårdportalen',
    description: 'Våra mottagningar och specialistkliniker'
  },
  '/kontakt': {
    title: 'Kontakt - Vårdcentralen Vårdportalen',
    description: 'Kontaktuppgifter och kontaktinformation'
  },
  '/fragor-och-svar': {
    title: 'FAQ - Vårdcentralen Vårdportalen',
    description: 'Vanliga frågor och svar om vården'
  },
  '/vardguide': {
    title: 'Vårdguide - Vårdcentralen Vårdportalen',
    description: 'Guide till svensk vård'
  },
  '/boka-tid': {
    title: 'Boka Tid - Vårdcentralen Vårdportalen',
    description: 'Boka tid hos läkare och mottagningar'
  },
  '/mina-sidor': {
    title: 'Mina Sidor - Vårdcentralen Vårdportalen',
    description: 'Personlig vårdinformation och journaler'
  },
  '/tillganglighet': {
    title: 'Tillgänglighet - Vårdcentralen Vårdportalen',
    description: 'Information om tillgänglighet och rättigheter'
  },
  '/patientinformation': {
    title: 'Patientinformation - Vårdcentralen Vårdportalen',
    description: 'Information om patientdata och journaler'
  },
  '/patientinformation/vardgaranti': {
    title: 'Vårdgaranti - Vårdcentralen Vårdportalen',
    description: 'Information om vårdgaranti och dina rättigheter'
  },
  '/patientinformation/avgifter': {
    title: 'Avgifter - Vårdcentralen Vårdportalen',
    description: 'Information om avgifter och kostnader'
  },
  '/patientinformation/din-vardkontakt': {
    title: 'Din Vårdkontakt - Vårdcentralen Vårdportalen',
    description: 'Dina personliga vårdkontakter och journaler'
  },
  '/integritetspolicy': {
    title: 'Integritetspolicy - Vårdcentralen Vårdportalen',
    description: 'Policy för hantering av personuppgifter och integritet'
  },
  '/cookies': {
    title: 'Cookies - Vårdcentralen Vårdportalen',
    description: 'Information om cookies och användarvillkor'
  },
  '/components': {
    title: 'Komponenter - Vårdcentralen Vårdportalen',
    description: 'Översikt av alla komponenter och deras funktioner'
  },
  '/colors': {
    title: 'Färger - Vårdcentralen Vårdportalen',
    description: 'Testa olika färgkombinationer och teman'
  }
}

// Function to update the document title
function updateDocumentTitle(title: string) {
  if (typeof document !== 'undefined') {
    document.title = title
  }
}

// Watch for route changes
watch(
  () => window.location.pathname,
  newPath => {
    const routePageTitle = pageTitles[newPath]
    if (routePageTitle) {
      pageTitle.value = routePageTitle
      updateDocumentTitle(routePageTitle.title)
    }
  },
  { immediate: true } // Run immediately on component mount
)

// Watch for pageTitle changes and update document title
watch(pageTitle, newPageTitle => {
  if (newPageTitle.title) {
    updateDocumentTitle(newPageTitle.title)
  }
})

export function usePageTitle() {
  return {
    pageTitle,
    pageTitles
  }
}
