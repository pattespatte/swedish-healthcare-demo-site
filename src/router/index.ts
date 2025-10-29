import { createRouter, createWebHistory, createMemoryHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/HomeView.vue')
	},
	{
		path: '/om-oss',
		name: 'About',
		component: () => import('@/views/AboutView.vue')
	},
	{
		path: '/om-oss/jobba-hos-oss',
		name: 'JobbaHosOss',
		component: () => import('@/views/JobbaHosOssPage.vue')
	},
	{
		path: '/om-oss/lediga-tjanster',
		name: 'LedigaTjanster',
		component: () => import('@/views/LedigaTjansterPage.vue')
	},
	{
		path: '/om-oss/formaner',
		name: 'Formaner',
		component: () => import('@/views/FormanerPage.vue')
	},
	{
		path: '/om-oss/karriarvagar',
		name: 'Karriarvagar',
		component: () => import('@/views/KarriarvagarPage.vue')
	},
	{
		path: '/tjanster',
		name: 'Services',
		component: () => import('@/views/ServicesPage.vue')
	},
	{
		path: '/tjanster/specialistmottagningar',
		name: 'Specialistmottagningar',
		component: () => import('@/views/SpecialistmottagningarPage.vue')
	},
	{
		path: '/tjanster/labbprov',
		name: 'Labbprov',
		component: () => import('@/views/LabbprovPage.vue')
	},
	{
		path: '/tjanster/hemsjukvard',
		name: 'Hemsjukvard',
		component: () => import('@/views/HemsjukvardPage.vue')
	},
	{
		path: '/kontakt',
		name: 'Contact',
		component: () => import('@/views/ContactPage.vue')
	},
	{
		path: '/fragor-och-svar',
		name: 'FAQ',
		component: () => import('@/views/FaqPage.vue')
	},
	{
		path: '/vardguide',
		name: 'HealthcareGuide',
		component: () => import('@/views/HealthcareGuidePage.vue')
	},
	{
		path: '/boka-tid',
		name: 'BookAppointment',
		component: () => import('@/views/BookAppointmentPage.vue')
	},
	{
		path: '/mina-sidor',
		name: 'MyPages',
		component: () => import('@/views/MyPagesPage.vue')
	},
	{
		path: '/tillganglighet',
		name: 'Accessibility',
		component: () => import('@/views/AccessibilityPage.vue')
	},
	{
		path: '/mottagningar',
		name: 'Mottagningar',
		component: () => import('@/views/MottagningarPage.vue')
	},
	{
		path: '/patientinformation',
		name: 'Patientinformation',
		component: () => import('@/views/PatientinformationPage.vue')
	},
	{
		path: '/patientinformation/vardgaranti',
		name: 'Vardgaranti',
		component: () => import('@/views/VardgarantiPage.vue')
	},
	{
		path: '/patientinformation/avgifter',
		name: 'Avgifter',
		component: () => import('@/views/AvgifterPage.vue')
	},
	{
		path: '/patientinformation/din-vardkontakt',
		name: 'DinVardkontakt',
		component: () => import('@/views/DinVardkontaktPage.vue')
	},
	{
		path: '/integritetspolicy',
		name: 'Integritetspolicy',
		component: () => import('@/views/IntegritetspolicyPage.vue')
	},
	{
		path: '/cookies',
		name: 'Cookies',
		component: () => import('@/views/CookiesPage.vue')
	},
	{
		path: '/components',
		name: 'Components',
		component: () => import('@/views/ComponentsPage.vue')
	},
	{
		// Catch all 404 routes
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFoundPage.vue')
	}
]

const router = createRouter({
	history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
	routes
})

export { routes }
export default router