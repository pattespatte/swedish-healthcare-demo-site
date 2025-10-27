import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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
		path: '/tjanster',
		name: 'Services',
		component: () => import('@/views/ServicesPage.vue')
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
		path: '/jobba-hos-oss',
		name: 'JobbaHosOss',
		component: () => import('@/views/JobbaHosOssPage.vue')
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router