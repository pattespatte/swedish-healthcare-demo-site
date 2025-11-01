<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import ServiceCard from "../components/display/ServiceCard.vue";
import ContactCard from "../components/display/ContactCard.vue";
import ListItem from "../components/display/ListItem.vue";
import Badge from "../components/display/Badge.vue";
import Alert from "../components/display/Alert.vue";
import Tabs from "../components/interactive/Tabs.vue";
import Modal from "../components/interactive/Modal.vue";
import FormButton from "../components/forms/FormButton.vue";
import TextInput from "../components/forms/TextInput.vue";
import SelectInput from "../components/forms/SelectInput.vue";

// Define clinic data with comprehensive information
const clinics = [
	{
		name: "Allmänmedicin",
		description: "Vårdcentral för allmän sjukvård",
		hours: "Mån-fre: 8:00-17:00",
		phone: "08-123 456 78",
		details: "Allmän medicinsk vård för vuxna och barn",
		tags: ["Vårdcentral", "Vuxna", "Barn"],
		status: "Öppet",
		waitTime: "15 min",
	},
	{
		name: "Barnmottagning",
		description: "Specialiserad vård för barn",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 79",
		details: "Medicinsk vård för barn 0-18 år",
		tags: ["Barnvård", "BVC"],
		status: "Öppet",
		waitTime: "20 min",
	},
	{
		name: "Akutmottagning",
		description: "Akut vård dygnet runt",
		hours: "Dygnet runt",
		phone: "08-123 456 80",
		details: "Akut medicinsk vård vid allvarliga sjukdomar och skador",
		tags: ["Akut", "Dygnet runt"],
		status: "Öppet",
		waitTime: "45 min",
	},
	{
		name: "Specialistmottagningar",
		description: "Specialiserad vård inom olika områden",
		hours: "Mån-fre: 8:00-17:00",
		phone: "08-123 456 81",
		details: "Specialiserad vård inom olika medicinska områden",
		tags: ["Specialistvård"],
		status: "Öppet",
		waitTime: "30 min",
	},
	{
		name: "Kirurgmottagning",
		description: "Kirurgisk vård och behandling",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 82",
		details: "Utredning och behandling av kirurgiska tillstånd",
		tags: ["Kirurgi"],
		status: "Stängt",
		waitTime: "-",
	},
	{
		name: "Medicinmottagning",
		description: "Internmedicinsk specialistvård",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 83",
		details: "Specialiserad vård inom internmedicin",
		tags: ["Internmedicin"],
		status: "Öppet",
		waitTime: "25 min",
	},
	{
		name: "Ortopedmottagning",
		description: "Vård för rörelseorganens sjukdomar",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 84",
		details: "Utredning och behandling av ortopediska tillstånd",
		tags: ["Ortopedi"],
		status: "Öppet",
		waitTime: "40 min",
	},
	{
		name: "Gynmottagning",
		description: "Kvinnosjukvård och förlossning",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 85",
		details: "Gynekologisk vård och mödrahälsovård",
		tags: ["Gynekologi", "Mödrahälsovård"],
		status: "Öppet",
		waitTime: "35 min",
	},
	{
		name: "Öron-näsa-hals",
		description: "Specialiserad vård för öron, näsa och hals",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 86",
		details: "Utredning och behandling av öron-, näs- och halssjukdomar",
		tags: ["ÖNH"],
		status: "Öppet",
		waitTime: "30 min",
	},
	{
		name: "Ögonmottagning",
		description: "Ögonsjukvård och synundersökningar",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 87",
		details: "Utredning och behandling av ögonsjukdomar",
		tags: ["Oftalmologi"],
		status: "Öppet",
		waitTime: "50 min",
	},
	{
		name: "Hudmottagning",
		description: "Dermatologisk vård och behandling",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 88",
		details: "Utredning och behandling av hudsjukdomar",
		tags: ["Dermatologi"],
		status: "Öppet",
		waitTime: "60 min",
	},
	{
		name: "Neurologmottagning",
		description: "Nervsystemets sjukdomar",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 89",
		details: "Utredning och behandling av neurologiska sjukdomar",
		tags: ["Neurologi"],
		status: "Öppet",
		waitTime: "45 min",
	},
];

// Reactive data for interactive components
const activeTab = ref("overview");
const showBookingModal = ref(false);
const selectedClinic = ref("");
const searchQuery = ref("");
const selectedDepartment = ref("");

// Tab data
const tabs = [
	{ id: "overview", label: "Översikt", content: "Se alla mottagningar" },
	{
		id: "waiting-times",
		label: "Väntetider",
		content: "Aktuella väntetider",
	},
	{ id: "contact", label: "Kontakt", content: "Kontaktinformation" },
];

// Department options for filter
const departmentOptions = [
	{ value: "", label: "Alla avdelningar" },
	{ value: "allmänmedicin", label: "Allmänmedicin" },
	{ value: "specialist", label: "Specialistmottagningar" },
	{ value: "akut", label: "Akutmottagning" },
];

// Function to handle booking
const handleBooking = (clinicName: string) => {
	selectedClinic.value = clinicName;
	showBookingModal.value = true;
};

// Function to submit booking form
const submitBooking = () => {
	// In a real app, this would submit to a backend
	alert(`Bokning skickad för ${selectedClinic.value}`);
	showBookingModal.value = false;
	selectedClinic.value = "";
};
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Mottagningar</h1>

		<!-- Alert for important information -->
		<Alert
			type="info"
			title="Viktig information"
			message="För akuta livshotande tillstånd, ring alltid 112. För akut men inte livshotande sjukdomar eller skador, kontakta vår akutmottagning eller ring 1177 för sjukvårdsrådgivning."
			class="mb-6"
		/>

		<!-- Tabs for different views -->
		<Tabs :tabs="tabs" v-model:activeTab="activeTab" class="mb-6" />

		<!-- Search and filter section -->
		<div
			class="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6 mb-6"
		>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<TextInput
					id="search"
					name="search"
					label="Sök mottagning"
					placeholder="Sök efter mottagning..."
					v-model="searchQuery"
				/>
				<SelectInput
					id="department"
					name="department"
					label="Filtrera avdelning"
					:options="departmentOptions"
					v-model="selectedDepartment"
				/>
			</div>
		</div>

		<!-- Main content based on active tab -->
		<div
			v-if="activeTab === 'overview'"
			class="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6"
		>
			<p class="text-gray-600 mb-6">
				Här hittar du information om våra olika mottagningar och
				kliniker. Vi erbjuder specialistvård inom de flesta medicinska
				områden med erfarna läkare och sjuksköterskor.
			</p>

			<!-- Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on wide screens -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
			>
				<ServiceCard
					v-for="(clinic, index) in clinics"
					:key="index"
					:title="clinic.name"
					:description="clinic.description"
					:tags="clinic.tags"
					link="#"
				>
					<div class="mt-4 space-y-2">
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">Status:</span>
							<Badge
								:text="clinic.status"
								:variant="
									clinic.status === 'Öppet'
										? 'success'
										: 'secondary'
								"
							/>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">Väntetid:</span>
							<span class="text-sm font-medium">{{
								clinic.waitTime
							}}</span>
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Öppettider:</span>
							{{ clinic.hours }}
						</div>
						<div class="text-sm text-gray-600">
							<span class="font-medium">Telefon:</span>
							{{ clinic.phone }}
						</div>
						<FormButton
							text="Boka tid"
							variant="primary"
							@click="handleBooking(clinic.name)"
							class="mt-3"
						/>
					</div>
				</ServiceCard>
			</div>
		</div>

		<!-- Waiting times view -->
		<div
			v-else-if="activeTab === 'waiting-times'"
			class="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6"
		>
			<h2 class="text-xl font-semibold mb-4">Aktuella väntetider</h2>
			<div class="space-y-3">
				<ListItem
					v-for="(clinic, index) in clinics"
					:key="`waiting-${index}`"
					:title="clinic.name"
					:description="`Väntetid: ${clinic.waitTime} | Status: ${clinic.status}`"
				>
					<template #action>
						<Badge
							:text="clinic.status"
							:variant="
								clinic.status === 'Öppet'
									? 'success'
									: 'secondary'
							"
						/>
					</template>
				</ListItem>
			</div>
		</div>

		<!-- Contact view -->
		<div
			v-else-if="activeTab === 'contact'"
			class="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6"
		>
			<h2 class="text-xl font-semibold mb-4">Kontaktinformation</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<ContactCard
					v-for="(clinic, index) in clinics.slice(0, 6)"
					:key="`contact-${index}`"
					:title="clinic.name"
					:phone="clinic.phone"
					address="Vårdcentralen, 123 45 Stockholm"
				>
					<div class="mt-4">
						<p class="text-sm text-gray-600 mb-2">
							{{ clinic.details }}
						</p>
						<p class="text-sm text-gray-600">
							<span class="font-medium">Öppettider:</span>
							{{ clinic.hours }}
						</p>
					</div>
				</ContactCard>
			</div>
		</div>

		<!-- Booking Modal -->
		<Modal
			title="Boka tid"
			v-model:visible="showBookingModal"
			size="medium"
		>
			<div class="space-y-4">
				<div class="bg-blue-50 p-4 rounded-md">
					<p class="text-sm text-blue-800">
						Du bokar tid för: <strong>{{ selectedClinic }}</strong>
					</p>
				</div>

				<TextInput
					id="patient-name"
					name="patient-name"
					label="Namn"
					placeholder="Ditt namn"
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
					id="appointment-type"
					name="appointment-type"
					label="Typ av besök"
					:options="[
						{ value: 'regular', label: 'Vanligt besök' },
						{ value: 'follow-up', label: 'Uppföljning' },
						{ value: 'urgent', label: 'Akut' },
					]"
					required
				/>
			</div>

			<template #footer>
				<div class="flex justify-end space-x-3">
					<FormButton
						text="Avbryt"
						variant="secondary"
						@click="showBookingModal = false"
					/>
					<FormButton
						text="Boka tid"
						variant="primary"
						@click="submitBooking"
					/>
				</div>
			</template>
		</Modal>
	</div>
</template>
