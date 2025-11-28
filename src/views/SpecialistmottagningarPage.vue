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
	import ProgressIndicator from '../components/display/ProgressIndicator.vue'

	// Define specialist clinic data
	const specialistClinics = [
		{
			name: 'Kardiologimottagning',
			description: 'Hjärt- och kärlsjukdomar',
			specialists: ['Dr. Anna Andersson', 'Dr. Erik Bergman'],
			hours: 'Mån-fre: 8:00-16:30',
			phone: '08-123 456 90',
			waitTime: '3 veckor',
			tags: ['Hjärta', 'Kärl', 'EKG'],
			status: 'Tar emot nya patienter',
			requiresReferral: true
		},
		{
			name: 'Endokrinologimottagning',
			description: 'Hormon- och ämnesomsättningsjukdomar',
			specialists: ['Dr. Maria Larsson', 'Dr. Johan Nilsson'],
			hours: 'Mån-fre: 8:00-16:00',
			phone: '08-123 456 91',
			waitTime: '4 veckor',
			tags: ['Diabetes', 'Sköldkörtel', 'Hormoner'],
			status: 'Tar emot nya patienter',
			requiresReferral: true
		},
		{
			name: 'Gastroenterologimottagning',
			description: 'Mag- och tarmsjukdomar',
			specialists: ['Dr. Sofia Pettersson', 'Dr. Magnus Johansson'],
			hours: 'Mån-fre: 8:00-16:30',
			phone: '08-123 456 92',
			waitTime: '5 veckor',
			tags: ['Magsjukdomar', 'Tarmsjukdomar', 'Endoskopi'],
			status: 'Fullbokad',
			requiresReferral: true
		},
		{
			name: 'Reumatologimottagning',
			description: 'Led- och bindvävssjukdomar',
			specialists: ['Dr. Lisa Svensson', 'Dr. Peter Karlsson'],
			hours: 'Mån-fre: 8:00-16:00',
			phone: '08-123 456 93',
			waitTime: '6 veckor',
			tags: ['Reumatism', 'Ledvärk', 'Autoimmuna sjukdomar'],
			status: 'Tar emot nya patienter',
			requiresReferral: true
		},
		{
			name: 'Pulmonologimottagning',
			description: 'Lungsjukdomar och andningsproblem',
			specialists: ['Dr. Emma Gustafsson', 'Dr. Robert Lindberg'],
			hours: 'Mån-fre: 8:00-16:30',
			phone: '08-123 456 94',
			waitTime: '3 veckor',
			tags: ['Astma', 'KOL', 'Allergi'],
			status: 'Tar emot nya patienter',
			requiresReferral: true
		},
		{
			name: 'Nefrologimottagning',
			description: 'Njur- och urinvägssjukdomar',
			specialists: ['Dr. Helena Hedberg', 'Dr. Fredrik Sandberg'],
			hours: 'Mån-fre: 8:00-16:00',
			phone: '08-123 456 95',
			waitTime: '4 veckor',
			tags: ['Njurar', 'Dialys', 'Högt blodtryck'],
			status: 'Tar emot nya patienter',
			requiresReferral: true
		}
	]

	// Reactive data for interactive components
	const activeTab = ref('overview')
	const showBookingModal = ref(false)
	const selectedClinic = ref('')
	const searchQuery = ref('')
	const selectedSpecialty = ref('')
	const bookingStep = ref(1)

	// Tab data
	const tabs = [
		{
			id: 'overview',
			label: 'Översikt',
			content: 'Se alla specialistmottagningar'
		},
		{ id: 'specialists', label: 'Specialister', content: 'Våra specialister' },
		{ id: 'referral', label: 'Remiss', content: 'Remissinformation' }
	]

	// Specialty options for filter
	const specialtyOptions = [
		{ value: '', label: 'Alla specialiteter' },
		{ value: 'kardiologi', label: 'Kardiologi' },
		{ value: 'endokrinologi', label: 'Endokrinologi' },
		{ value: 'gastroenterologi', label: 'Gastroenterologi' },
		{ value: 'reumatologi', label: 'Reumatologi' },
		{ value: 'pulmonologi', label: 'Pulmonologi' },
		{ value: 'nefrologi', label: 'Nefrologi' }
	]

	// Filter clinics based on search and specialty
	const filteredClinics = computed(() => {
		return specialistClinics.filter(clinic => {
			const matchesSearch =
				clinic.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				clinic.description.toLowerCase().includes(searchQuery.value.toLowerCase())
			const matchesSpecialty =
				!selectedSpecialty.value || clinic.name.toLowerCase().includes(selectedSpecialty.value.toLowerCase())
			return matchesSearch && matchesSpecialty
		})
	})

	// Progress steps for booking
	const bookingSteps = [{}, {}, {}, {}]

	// Function to handle booking
	const handleBooking = (clinicName: string) => {
		selectedClinic.value = clinicName
		bookingStep.value = 1
		showBookingModal.value = true
	}

	// Function to submit booking form
	const submitBooking = () => {
		// In a real app, this would submit to a backend
		alert(`Remissansökan skickad för ${selectedClinic.value}`)
		showBookingModal.value = false
		selectedClinic.value = ''
		bookingStep.value = 1
	}
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<h1 class="mb-6 text-3xl font-bold text-gray-800">Specialistmottagningar</h1>
		<!-- Alert for referral information -->
		<Alert
			type="info"
			title="Remiss krävs"
			message="För att besöka våra specialistmottagningar krävs i de flesta fall remiss från din vårdcentral eller annan läkare. Vissa akuta fall kan undantas."
			class="mb-6"
			headingLevel="h2"
		/>

		<!-- Tabs for different views -->
		<Tabs :tabs="tabs" v-model:activeTab="activeTab" class="mb-6" />

		<!-- Search and filter section -->
		<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
			<div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
				<TextInput
					id="search"
					name="search"
					label="Sök specialistmottagning"
					placeholder="Sök efter mottagning eller specialitet..."
					v-model="searchQuery"
				/>
				<SelectInput
					id="specialty"
					name="specialty"
					label="Filtrera specialitet"
					:options="specialtyOptions"
					v-model="selectedSpecialty"
				/>
			</div>
		</div>

		<!-- Main content based on active tab -->
		<div v-if="activeTab === 'overview'" class="rounded-lg bg-white p-6 shadow-md">
			<p class="mb-6 text-gray-600">
				Våra specialistmottagningar erbjuder avancerad medicinsk vård inom olika områden. Alla våra specialister är
				erfarna och uppdaterade med den senaste kunskapen inom sina fält.
			</p>

			<!-- Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ServiceCard
					v-for="(clinic, index) in filteredClinics"
					:key="index"
					:title="clinic.name"
					:description="clinic.description"
					:tags="clinic.tags"
					link="#"
				>
					<div class="mt-4 space-y-2">
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Status:</span>
							<Badge :text="clinic.status" :variant="clinic.status.includes('Tar emot') ? 'success' : 'secondary'" />
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Väntetid:</span>
							<span class="text-sm font-medium">{{ clinic.waitTime }}</span>
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Öppettider:</span>
							{{ clinic.hours }}
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Telefon:</span>
							{{ clinic.phone }}
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Specialister:</span>
							<div class="mt-1">
								<span v-for="(specialist, idx) in clinic.specialists" :key="idx" class="inline-block">
									<Badge :text="specialist" variant="primary" class="mr-1 mb-1" />
								</span>
							</div>
						</div>
						<div v-if="clinic.requiresReferral" class="mt-2">
							<Badge text="Remiss krävs" variant="warning" />
						</div>
						<FormButton text="Ansök om remiss" variant="primary" @click="handleBooking(clinic.name)" class="mt-3" />
					</div>
				</ServiceCard>
			</div>
		</div>

		<!-- Specialists view -->
		<div v-else-if="activeTab === 'specialists'" class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-xl font-semibold">Våra specialister</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ContactCard
					v-for="(clinic, index) in specialistClinics"
					:key="`specialist-${index}`"
					:title="clinic.name"
					:name="clinic.specialists[0]"
					phone="08-123 456 90"
					address="Specialistmottagningen, 123 45 Stockholm"
				>
					<div class="mt-4">
						<p class="mb-2 text-sm text-gray-600">
							{{ clinic.description }}
						</p>
						<p class="mb-2 text-sm text-gray-600">
							<span class="font-medium">Öppettider:</span>
							{{ clinic.hours }}
						</p>
						<div class="flex flex-wrap gap-1">
							<Badge v-for="tag in clinic.tags" :key="tag" :text="tag" variant="primary" />
						</div>
					</div>
				</ContactCard>
			</div>
		</div>

		<!-- Referral view -->
		<div v-else-if="activeTab === 'referral'" class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-xl font-semibold">Remissinformation</h2>
			<div class="space-y-4">
				<ListItem
					title="Hur får jag en remiss?"
					description="Kontakta din vårdcentral för att få en remiss till specialistmottagning. Din läkare bedömer om du behöver specialistvård."
				/>
				<ListItem
					title="Vad kostar en remiss?"
					description="Remissen själv kostar ingenting, men besöket hos specialisten omfattas av vanlig patientavgift."
				/>
				<ListItem
					title="Hur lång tid tar det?"
					description="Väntetiden varierar mellan olika specialiteter. Se översikten för aktuell väntetid."
				/>
				<ListItem
					title="Akuta fall"
					description="Vid akuta tillstånd kan du kontakta 1177 för rådgivning om du behöver söka akut specialistvård."
				/>
			</div>

			<Alert
				type="warning"
				title="Viktigt att veta"
				message="En remiss är giltig i 6 månader från utfärdandedatum. Kontakta mottagningen om din remiss närmar sig utgångsdatum."
				class="mt-6"
			/>
		</div>

		<!-- Referral Modal -->
		<Modal title="Ansök om remiss" v-model:visible="showBookingModal" size="large">
			<div class="space-y-6">
				<!-- Progress indicator -->
				<ProgressIndicator
					:steps="bookingSteps"
					:current-step="bookingStep - 1"
					:labels="['Välj mottagning', 'Personuppgifter', 'Symptom', 'Bekräfta']"
				/>

				<div v-if="bookingStep === 1" class="space-y-4">
					<div class="rounded-md bg-blue-50 p-4">
						<p class="text-sm text-blue-800">
							Du ansöker om remiss till:
							<strong>{{ selectedClinic }}</strong>
						</p>
					</div>

					<SelectInput
						id="referral-reason"
						name="referral-reason"
						label="Anledning till remiss"
						:options="[
							{ value: 'new-symptoms', label: 'Nya symptom' },
							{
								value: 'follow-up',
								label: 'Uppföljning av tidigare behandling'
							},
							{
								value: 'second-opinion',
								label: 'Andrahandsutlåtande'
							},
							{ value: 'other', label: 'Annat' }
						]"
						required
					/>
				</div>

				<div v-else-if="bookingStep === 2" class="space-y-4">
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
				</div>

				<div v-else-if="bookingStep === 3" class="space-y-4">
					<TextInput
						id="symptoms"
						name="symptoms"
						label="Beskriv dina symptom"
						placeholder="Beskriv dina symptom och hur länge du haft dem..."
						required
					/>

					<TextInput
						id="medications"
						name="medications"
						label="Nuvarande medicinering"
						placeholder="Ange eventuella mediciner du tar..."
					/>

					<TextInput
						id="allergies"
						name="allergies"
						label="Kända allergier"
						placeholder="Ange eventuella kända allergier..."
					/>
				</div>

				<div v-else-if="bookingStep === 4" class="space-y-4">
					<div class="rounded-md bg-green-50 p-4">
						<h3 class="mb-2 text-lg font-medium text-green-800">Granska din ansökan</h3>
						<p class="text-sm text-green-700">
							Kontrollera att all information är korrekt innan du skickar din ansökan.
						</p>
					</div>

					<div class="rounded-md bg-gray-50 p-4">
						<p class="text-sm text-gray-700">
							<strong>Mottagning:</strong>
							{{ selectedClinic }}
							<br />
							<strong>Anledning:</strong>
							Remiss för specialistvård
							<br />
							<strong>Personuppgifter:</strong>
							[Dina uppgifter]
							<br />
							<strong>Symptom:</strong>
							[Dina symptom]
						</p>
					</div>
				</div>
			</div>

			<template #footer>
				<div class="flex justify-between">
					<div>
						<FormButton v-if="bookingStep > 1" text="Föregående" variant="secondary" @click="bookingStep--" />
					</div>
					<div class="flex space-x-3">
						<FormButton text="Avbryt" variant="secondary" @click="showBookingModal = false" />
						<FormButton v-if="bookingStep < 4" text="Nästa" variant="primary" @click="bookingStep++" />
						<FormButton v-else text="Skicka ansökan" variant="primary" @click="submitBooking" />
					</div>
				</div>
			</template>
		</Modal>
	</div>
</template>
