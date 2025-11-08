import { createRouter, createWebHistory, createMemoryHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			title: 'Vårdcentralen Vårdportalen - Start',
			description: 'Boka tid, kontakta vården och hantera dina vårdärenden'
		}
	},
	{
		path: '/om-oss',
		name: 'About',
		component: () => import('@/views/AboutView.vue'),
		meta: {
			title: 'Om Oss - Vårdcentralen Vårdportalen',
			description: 'Information om Vårdcentralen Vårdportalen och vår verksamhet'
		}
	},
	{
		path: '/om-oss/jobba-hos-oss',
		name: 'JobbaHosOss',
		component: () => import('@/views/JobbaHosOssPage.vue'),
		meta: {
			title: 'Jobba Hos Oss - Vårdcentralen Vårdportalen',
			description: 'Lediga tjänster och karriärmöjligheter inom vården'
		}
	},
	{
		path: '/om-oss/lediga-tjanster',
		name: 'LedigaTjanster',
		component: () => import('@/views/LedigaTjansterPage.vue'),
		meta: {
			title: 'Lediga Tjänster - Vårdcentralen Vårdportalen',
			description: 'Se alla lediga tjänster inom svensk vård'
		}
	},
	{
		path: '/om-oss/formaner',
		name: 'Formaner',
		component: () => import('@/views/FormanerPage.vue'),
		meta: {
			title: 'Formaner - Vårdcentralen Vårdportalen',
			description: 'Ansök till utbildningar och tjänster inom vården'
		}
	},
	{
		path: '/om-oss/karriarvagar',
		name: 'Karriarvagar',
		component: () => import('@/views/KarriarvagarPage.vue'),
		meta: {
			title: 'Karriär - Vårdcentralen Vårdportalen',
			description: 'Karriärmöjligheter och utvecklingsmöjligheter'
		}
	},
	{
		path: '/tjanster',
		name: 'Services',
		component: () => import('@/views/ServicesPage.vue'),
		meta: {
			title: 'Tjänster - Vårdcentralen Vårdportalen',
			description: 'Våra tjänster och behandlingar'
		}
	},
	{
		path: '/tjanster/specialistmottagningar',
		name: 'Specialistmottagningar',
		component: () => import('@/views/SpecialistmottagningarPage.vue'),
		meta: {
			title: 'Specialistmottagningar - Vårdcentralen Vårdportalen',
			description: 'Specialiserad vård och mottagning'
		}
	},
	{
		path: '/tjanster/labbprov',
		name: 'Labbprov',
		component: () => import('@/views/LabbprovPage.vue'),
		meta: {
			title: 'Labbprov - Vårdcentralen Vårdportalen',
			description: 'Information om laboratorieprov och analyser'
		}
	},
	{
		path: '/tjanster/hemsjukvard',
		name: 'Hemsjukvard',
		component: () => import('@/views/HemsjukvardPage.vue'),
		meta: {
			title: 'Hemsjukvård - Vårdcentralen Vårdportalen',
			description: 'Vård och behandling i hemmet'
		}
	},
	{
		path: '/kontakt',
		name: 'Contact',
		component: () => import('@/views/ContactPage.vue'),
		meta: {
			title: 'Kontakt - Vårdcentralen Vårdportalen',
			description: 'Kontaktuppgifter och kontaktinformation'
		}
	},
	{
		path: '/fragor-och-svar',
		name: 'FAQ',
		component: () => import('@/views/FaqPage.vue'),
		meta: {
			title: 'FAQ - Vårdcentralen Vårdportalen',
			description: 'Vanliga frågor och svar om vården'
		}
	},
	{
		path: '/vardguide',
		name: 'HealthcareGuide',
		component: () => import('@/views/HealthcareGuidePage.vue'),
		meta: {
			title: 'Vårdguide - Vårdcentralen Vårdportalen',
			description: 'Guide till svensk vård'
		}
	},
	{
		path: '/boka-tid',
		name: 'BookAppointment',
		component: () => import('@/views/BookAppointmentPage.vue'),
		meta: {
			title: 'Boka Tid - Vårdcentralen Vårdportalen',
			description: 'Boka tid hos läkare och mottagningar'
		}
	},
	{
		path: '/mina-sidor',
		name: 'MyPages',
		component: () => import('@/views/MyPagesPage.vue'),
		meta: {
			title: 'Mina Sidor - Vårdcentralen Vårdportalen',
			description: 'Personlig vårdinformation och journaler'
		}
	},
	{
		path: '/tillganglighet',
		name: 'Accessibility',
		component: () => import('@/views/AccessibilityPage.vue'),
		meta: {
			title: 'Tillgänglighet - Vårdcentralen Vårdportalen',
			description: 'Information om tillgänglighet och rättigheter'
		}
	},
	{
		path: '/mottagningar',
		name: 'Mottagningar',
		component: () => import('@/views/MottagningarPage.vue'),
		meta: {
			title: 'Mottagningar - Vårdcentralen Vårdportalen',
			description: 'Våra mottagningar och specialistkliniker'
		}
	},
	{
		path: '/patientinformation',
		name: 'Patientinformation',
		component: () => import('@/views/PatientinformationPage.vue'),
		meta: {
			title: 'Patientinformation - Vårdcentralen Vårdportalen',
			description: 'Information om patientdata och journaler'
		}
	},
	{
		path: '/patientinformation/vardgaranti',
		name: 'Vardgaranti',
		component: () => import('@/views/VardgarantiPage.vue'),
		meta: {
			title: 'Vårdgaranti - Vårdcentralen Vårdportalen',
			description: 'Information om vårdgaranti och dina rättigheter'
		}
	},
	{
		path: '/patientinformation/avgifter',
		name: 'Avgifter',
		component: () => import('@/views/AvgifterPage.vue'),
		meta: {
			title: 'Avgifter - Vårdcentralen Vårdportalen',
			description: 'Information om avgifter och kostnader'
		}
	},
	{
		path: '/patientinformation/din-vardkontakt',
		name: 'DinVardkontakt',
		component: () => import('@/views/DinVardkontaktPage.vue'),
		meta: {
			title: 'Din Vårdkontakt - Vårdcentralen Vårdportalen',
			description: 'Dina personliga vårdkontakter och journaler'
		}
	},
	{
		path: '/integritetspolicy',
		name: 'Integritetspolicy',
		component: () => import('@/views/IntegritetspolicyPage.vue'),
		meta: {
			title: 'Integritetspolicy - Vårdcentralen Vårdportalen',
			description: 'Policy för hantering av personuppgifter och integritet'
		}
	},
	{
		path: '/cookies',
		name: 'Cookies',
		component: () => import('@/views/CookiesPage.vue'),
		meta: {
			title: 'Cookies - Vårdcentralen Vårdportalen',
			description: 'Information om cookies och användarvillkor'
		}
	},
	{
		path: '/components',
		name: 'Components',
		component: () => import('@/views/ComponentsPage.vue'),
		meta: {
			title: 'Komponenter - Vårdcentralen Vårdportalen',
			description: 'Översikt av alla komponenter och deras funktioner'
		}
	},
	{
		path: '/colors',
		name: 'Colors',
		component: () => import('@/views/ColorPage.vue'),
		meta: {
			title: 'Färger - Vårdcentralen Vårdportalen',
			description: 'Testa olika färgkombinationer och teman'
		}
	},
	{
		path: '/sok',
		name: 'SearchResults',
		component: () => import('@/views/SearchResultsPage.vue'),
		meta: {
			title: 'Sökresultat - Vårdcentralen Vårdportalen',
			description: 'Sökresultat för din sökning'
		}
	},
	{
		// Catch all 404 routes
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFoundPage.vue'),
		meta: {
			title: 'Sidan hittades inte - Vårdcentralen Vårdportalen',
			description: 'Sidan du letar efter kunde inte hittas'
		}
	}
]

const router = createRouter({
	history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
	routes
})

export { routes }
export default router
