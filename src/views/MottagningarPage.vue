<script setup lang="ts">
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Define clinic data with comprehensive information
const clinics = [
	{
		name: "Allmänmedicin",
		description: "Vårdcentral för allmän sjukvård",
		hours: "Mån-fre: 8:00-17:00",
		phone: "08-123 456 78",
		details: "Allmän medicinsk vård för vuxna och barn",
	},
	{
		name: "Barnmottagning",
		description: "Specialiserad vård för barn",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 79",
		details: "Medicinsk vård för barn 0-18 år",
	},
	{
		name: "Akutmottagning",
		description: "Akut vård dygnet runt",
		hours: "Dygnet runt",
		phone: "08-123 456 80",
		details: "Akut medicinsk vård vid allvarliga sjukdomar och skador",
	},
	{
		name: "Specialistmottagningar",
		description: "Specialiserad vård inom olika områden",
		hours: "Mån-fre: 8:00-17:00",
		phone: "08-123 456 81",
		details: "Specialiserad vård inom olika medicinska områden",
	},
	{
		name: "Kirurgmottagning",
		description: "Kirurgisk vård och behandling",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 82",
		details: "Utredning och behandling av kirurgiska tillstånd",
	},
	{
		name: "Medicinmottagning",
		description: "Internmedicinsk specialistvård",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 83",
		details: "Specialiserad vård inom internmedicin",
	},
	{
		name: "Ortopedmottagning",
		description: "Vård för rörelseorganens sjukdomar",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 84",
		details: "Utredning och behandling av ortopediska tillstånd",
	},
	{
		name: "Gynmottagning",
		description: "Kvinnosjukvård och förlossning",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 85",
		details: "Gynekologisk vård och mödrahälsovård",
	},
	{
		name: "Öron-näsa-hals",
		description: "Specialiserad vård för öron, näsa och hals",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 86",
		details: "Utredning och behandling av öron-, näs- och halssjukdomar",
	},
	{
		name: "Ögonmottagning",
		description: "Ögonsjukvård och synundersökningar",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 87",
		details: "Utredning och behandling av ögonsjukdomar",
	},
	{
		name: "Hudmottagning",
		description: "Dermatologisk vård och behandling",
		hours: "Mån-fre: 8:00-16:00",
		phone: "08-123 456 88",
		details: "Utredning och behandling av hudsjukdomar",
	},
	{
		name: "Neurologmottagning",
		description: "Nervsystemets sjukdomar",
		hours: "Mån-fre: 8:00-16:30",
		phone: "08-123 456 89",
		details: "Utredning och behandling av neurologiska sjukdomar",
	},
];
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Mottagningar</h1>
		<div class="bg-white rounded-lg shadow-md p-6">
			<p class="text-gray-600 mb-6">
				Här hittar du information om våra olika mottagningar och
				kliniker. Vi erbjuder specialistvård inom de flesta medicinska
				områden med erfarna läkare och sjuksköterskor.
			</p>

			<!-- Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on wide screens -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
			>
				<div
					v-for="(clinic, index) in clinics"
					:key="index"
					class="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
				>
					<h2 class="text-xl font-semibold mb-2 text-blue-700">
						{{ clinic.name }}
					</h2>
					<p class="text-gray-600 mb-3">{{ clinic.description }}</p>
					<p class="text-sm text-gray-700 mb-2">
						<span class="font-medium">Öppettider:</span>
						{{ clinic.hours }}
					</p>
					<p class="text-sm text-gray-700 mb-3">
						<span class="font-medium">Telefon:</span>
						{{ clinic.phone }}
					</p>
					<p class="text-sm text-gray-600">{{ clinic.details }}</p>
				</div>
			</div>

			<div class="mt-8 p-4 bg-blue-50 rounded-lg">
				<h3 class="text-lg font-semibold text-blue-800 mb-2">
					Viktig information
				</h3>
				<p class="text-sm text-blue-700">
					För akuta livshotande tillstånd, ring alltid 112. För akut
					men inte livshotande sjukdomar eller skador, kontakta vår
					akutmottagning eller ring 1177 för sjukvårdsrådgivning.
				</p>
			</div>
		</div>
	</div>
</template>
