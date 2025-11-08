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
	import DatePicker from '../components/forms/DatePicker.vue'
	import Pagination from '../components/interactive/Pagination.vue'

	// Define lab test data
	const labTests = [
		{
			name: 'Blodprov',
			description: 'Allmänna blodprover för att kontrollera hälsostatus',
			category: 'Blod',
			preparation: 'Fastaräkommendationer kan gälla',
			duration: '10-15 minuter',
			fasting: true,
			price: 'Gratis med remiss',
			tags: ['Hälsokontroll', 'Blodvärden'],
			availability: 'Mån-fre: 7:00-16:00'
		},
		{
			name: 'Urinvägsprov',
			description: 'Analys av urin för att upptäcka infektioner eller sjukdomar',
			category: 'Urin',
			preparation: 'Morgonurin föredras',
			duration: '5 minuter',
			fasting: false,
			price: 'Gratis med remiss',
			tags: ['Infektion', 'Blodprov'],
			availability: 'Mån-fre: 7:00-16:00'
		},
		{
			name: 'Svampprov',
			description: 'Provtagning för att identifiera svampinfektioner',
			category: 'Svamp',
			preparation: 'Ingen särskild förberedelse',
			duration: '10 minuter',
			fasting: false,
			price: 'Gratis med remiss',
			tags: ['Svampinfektion', 'Hud'],
			availability: 'Mån-fre: 8:00-16:00'
		},
		{
			name: 'Cellprov',
			description: 'Gynekologiskt cellprov för tidig upptäckt av cellförändringar',
			category: 'Cellprov',
			preparation: 'Bokas inte under menstruation',
			duration: '15 minuter',
			fasting: false,
			price: 'Gratis',
			tags: ['Gynekologi', 'Prevention'],
			availability: 'Mån-fre: 8:00-16:00'
		},
		{
			name: 'Allergitest',
			description: 'Test för att identifiera allergener',
			category: 'Allergi',
			preparation: 'Undvik antihistaminer 3 dagar före test',
			duration: '30-45 minuter',
			fasting: false,
			price: '300-800 kr',
			tags: ['Allergi', 'Hudtest'],
			availability: 'Efter tidsbokning'
		},
		{
			name: 'EKG',
			description: 'Elektrokardiogram för att undersöka hjärtats aktivitet',
			category: 'Hjärt',
			preparation: 'Bära löst sittande kläder',
			duration: '15 minuter',
			fasting: false,
			price: 'Gratis med remiss',
			tags: ['Hjärta', 'Diagnos'],
			availability: 'Mån-fre: 8:00-16:00'
		},
		{
			name: 'Spirometri',
			description: 'Lungfunktionsprov för att mäta lungkapacitet',
			category: 'Lungor',
			preparation: 'Undvik ansträngande aktivitet 2 timmar före',
			duration: '30 minuter',
			fasting: false,
			price: 'Gratis med remiss',
			tags: ['Lungor', 'Andning'],
			availability: 'Efter tidsbokning'
		},
		{
			name: 'Glukostoleranstest',
			description: 'Test för att undersöka kroppens sockeromsättning',
			category: 'Metabolism',
			preparation: '12 timmars fasta krävs',
			duration: '2 timmar',
			fasting: true,
			price: 'Gratis med remiss',
			tags: ['Diabetes', 'Blodsocker'],
			availability: 'Mån-fre: 7:00-10:00'
		}
	]

	// Define preparation instructions
	const preparationInstructions = [
		{
			title: 'Inför blodprov',
			description: 'De flesta blodprov kräver att du fastar i 8-12 timmar. Du kan dricka vatten.',
			icon: 'blood'
		},
		{
			title: 'Inför urinprov',
			description: 'Använd medelstrålen när du kissar i provburken för att undvika bakterier.',
			icon: 'urine'
		},
		{
			title: 'Mediciner',
			description: 'Meddela alltid vilka mediciner du tar. Vissa mediciner kan påverka provsvaren.',
			icon: 'medicine'
		},
		{
			title: 'Tidpunkt',
			description: 'Kom i tid till din bokade tid. Sen ankomst kan innebära att du behöver boka om.',
			icon: 'time'
		}
	]

	// Reactive data for interactive components
	const activeTab = ref('overview')
	const showBookingModal = ref(false)
	const selectedTest = ref('')
	const searchQuery = ref('')
	const selectedCategory = ref('')
	const currentPage = ref(1)
	const itemsPerPage = 6

	// Tab data
	const tabs = [
		{ id: 'overview', label: 'Översikt', content: 'Se alla provtyper' },
		{
			id: 'preparation',
			label: 'Förberedelser',
			content: 'Information inför provtagning'
		},
		{ id: 'results', label: 'Provsvar', content: 'Hämta dina provsvar' }
	]

	// Category options for filter
	const categoryOptions = [
		{ value: '', label: 'Alla kategorier' },
		{ value: 'blod', label: 'Blodprov' },
		{ value: 'urin', label: 'Urinvägsprov' },
		{ value: 'cellprov', label: 'Cellprov' },
		{ value: 'allergi', label: 'Allergitest' },
		{ value: 'hjärta', label: 'Hjärt- och lungprov' }
	]

	// Filter tests based on search and category
	const filteredTests = computed(() => {
		const filtered = labTests.filter(test => {
			const matchesSearch =
				test.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				test.description.toLowerCase().includes(searchQuery.value.toLowerCase())
			const matchesCategory =
				!selectedCategory.value || test.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
			return matchesSearch && matchesCategory
		})

		// Pagination
		const startIndex = (currentPage.value - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		return filtered.slice(startIndex, endIndex)
	})

	// Total pages for pagination
	const totalPages = computed(() => {
		const filtered = labTests.filter(test => {
			const matchesSearch =
				test.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				test.description.toLowerCase().includes(searchQuery.value.toLowerCase())
			const matchesCategory =
				!selectedCategory.value || test.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
			return matchesSearch && matchesCategory
		})
		return Math.ceil(filtered.length / itemsPerPage)
	})

	// Function to handle booking
	const handleBooking = (testName: string) => {
		selectedTest.value = testName
		showBookingModal.value = true
	}

	// Function to submit booking form
	const submitBooking = () => {
		// In a real app, this would submit to a backend
		alert(`Tid bokad för ${selectedTest.value}`)
		showBookingModal.value = false
		selectedTest.value = ''
	}

	// Function to handle page change
	const handlePageChange = (page: number) => {
		currentPage.value = page
	}
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<h1 class="mb-6 text-3xl font-bold text-gray-800">Labbprov</h1>

		<!-- Alert for important information -->
		<Alert
			type="info"
			title="Remiss krävs för de flesta prover"
			message="För de flesta laboratorieprover krävs remiss från läkare. Kontakta din vårdcentral om du är osäker."
			class="mb-6"
		/>

		<!-- Tabs for different views -->
		<Tabs :tabs="tabs" v-model:activeTab="activeTab" class="mb-6" />

		<!-- Search and filter section -->
		<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
			<div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
				<TextInput
					id="search"
					name="search"
					label="Sök provtyp"
					placeholder="Sök efter provtyp eller test..."
					v-model="searchQuery"
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
		<div v-if="activeTab === 'overview'" class="rounded-lg bg-white p-6 shadow-md">
			<p class="mb-6 text-gray-600">
				På vår laboratorieavdelning erbjuder vi ett brett utbud av provtagningstjänster. All personal är utbildad för
				att ta prover på ett säkert och professionellt sätt.
			</p>

			<!-- Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ServiceCard
					v-for="(test, index) in filteredTests"
					:key="index"
					:title="test.name"
					:description="test.description"
					:tags="test.tags"
					link="#"
				>
					<div class="mt-4 space-y-2">
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Kategori:</span>
							<Badge :text="test.category" variant="secondary" />
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Tid:</span>
							<span class="text-sm font-medium">{{ test.duration }}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Pris:</span>
							<span class="text-sm font-medium">{{ test.price }}</span>
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Förberedelse:</span>
							{{ test.preparation }}
						</div>
						<div v-if="test.fasting" class="mt-2">
							<Badge text="Fasta krävs" variant="warning" />
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Tillgänglighet:</span>
							{{ test.availability }}
						</div>
						<FormButton text="Boka tid" variant="primary" @click="handleBooking(test.name)" class="mt-3" />
					</div>
				</ServiceCard>
			</div>

			<!-- Pagination -->
			<div v-if="totalPages > 1" class="mt-8">
				<Pagination
					:current-page="currentPage"
					:total-pages="totalPages"
					:items-per-page="itemsPerPage"
					:total-items="labTests.length"
					@update:current-page="handlePageChange"
				/>
			</div>
		</div>

		<!-- Preparation view -->
		<div v-else-if="activeTab === 'preparation'" class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-xl font-semibold">Förberedelser inför provtagning</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<ListItem
					v-for="(instruction, index) in preparationInstructions"
					:key="index"
					:title="instruction.title"
					:description="instruction.description"
				>
					<template #icon>
						<svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</template>
				</ListItem>
			</div>

			<Alert
				type="warning"
				title="Viktigt att tänka på"
				message="Om du tar blodförtunnande medicin ska du alltid meddela detta innan provtagning. Vissa prover kan kräva att du pausar din medicinering."
				class="mt-6"
			/>
		</div>

		<!-- Results view -->
		<div v-else-if="activeTab === 'results'" class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-xl font-semibold">Hämta dina provsvar</h2>
			<div class="space-y-4">
				<ListItem
					title="1177 Vårdguiden"
					description="Logga in på 1177.se för att se dina provsvar. De flesta provsvar publiceras där inom 1-7 dagar."
				>
					<template #action>
						<FormButton text="Gå till 1177" variant="primary" />
					</template>
				</ListItem>
				<ListItem
					title="Telefon"
					description="Ring oss på 08-123 456 00 för att få dina provsvar per telefon. Ha ditt personnummer redo."
				>
					<template #action>
						<Badge text="08-123 456 00" variant="primary" />
					</template>
				</ListItem>
				<ListItem
					title="Besök på mottagningen"
					description="Du kan alltid hämta dina provsvar direkt på vår mottagning under öppettiderna."
				>
					<template #action>
						<Badge text="Mån-fre: 8:00-16:00" variant="secondary" />
					</template>
				</ListItem>
			</div>

			<Alert
				type="info"
				title="Tid för provsvar"
				message="Vanliga blodprover är klara inom 1-3 dagar. Mer komplexa prover kan ta upp till 2 veckor. Du får ett meddelande när dina provsvar är klara."
				class="mt-6"
			/>
		</div>

		<!-- Booking Modal -->
		<Modal title="Boka tid för provtagning" v-model:visible="showBookingModal" size="medium">
			<div class="space-y-4">
				<div class="rounded-md bg-blue-50 p-4">
					<p class="text-sm text-blue-800">
						Du bokar tid för:
						<strong>{{ selectedTest }}</strong>
					</p>
				</div>

				<TextInput
					id="patient-name"
					name="patient-name"
					label="Fullständigt namn"
					placeholder="Ditt fullständiga namn"
					required
				/>

				<TextInput
					id="patient-personnummer"
					name="patient-personnummer"
					label="Personnummer"
					placeholder="ÅÅMMDD-XXXX"
					required
				/>

				<TextInput
					id="patient-phone"
					name="patient-phone"
					label="Telefonnummer"
					type="tel"
					placeholder="070-123 45 67"
					required
				/>

				<SelectInput
					id="time-slot"
					name="time-slot"
					label="Önskad tid"
					:options="[
						{ value: 'morning', label: 'Förmiddag (8:00-12:00)' },
						{
							value: 'afternoon',
							label: 'Eftermiddag (12:00-16:00)'
						}
					]"
					required
				/>

				<DatePicker
					id="preferred-date"
					name="preferred-date"
					label="Önskat datum"
					:min="new Date().toISOString().split('T')[0]"
				/>
			</div>

			<template #footer>
				<div class="flex justify-end space-x-3">
					<FormButton text="Avbryt" variant="secondary" @click="showBookingModal = false" />
					<FormButton text="Boka tid" variant="primary" @click="submitBooking" />
				</div>
			</template>
		</Modal>
	</div>
</template>
