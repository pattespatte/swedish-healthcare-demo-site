<script setup lang="ts">
import { ref } from "vue";
import { usePageTitle } from "../composables/usePageTitle";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import DataTable from "../components/display/DataTable.vue";
import InfoCard from "../components/display/InfoCard.vue";

// Set page title
const { pageTitle } = usePageTitle();

// Define table columns
const feeColumns = [
	{ key: "service", label: "Tjänst", type: "text" as const },
	{ key: "price", label: "Kostnad", type: "currency" as const },
	{
		key: "highCostProtection",
		label: "Högkostnadsskydd",
		type: "text" as const,
	},
];

// Fee data
const feeData = [
	{
		service: "Läkarbesök på vårdcentral",
		price: 200,
		highCostProtection: "Ja",
	},
	{ service: "Sjuksköterskebesök", price: 150, highCostProtection: "Ja" },
	{ service: "Barn under 20 år", price: 0, highCostProtection: "Ja" },
	{ service: "Telefonkonsultation", price: 100, highCostProtection: "Ja" },
	{ service: "Laboratorieprov", price: 50, highCostProtection: "Ja" },
	{ service: "EKG", price: 100, highCostProtection: "Ja" },
	{ service: "Återbesök inom 7 dagar", price: 50, highCostProtection: "Ja" },
	{
		service: "Hemsjukvård (per tillfälle)",
		price: 250,
		highCostProtection: "Ja",
	},
];

// Define high cost protection table columns
const highCostColumns = [
	{ key: "period", label: "Period", type: "text" as const },
	{ key: "limit", label: "Beloppsgräns", type: "currency" as const },
	{ key: "description", label: "Beskrivning", type: "text" as const },
];

// High cost protection data
const highCostData = [
	{
		period: "12 månader",
		limit: 1250,
		description: "Egenavgifter för vård inom landstinget",
	},
	{
		period: "12 månader",
		limit: 2400,
		description: "Egenavgifter för läkemedel (apotek)",
	},
	{
		period: "12 månader",
		limit: 1150,
		description: "Resor till och från vård",
	},
];

// Define specialist care table columns
const specialistColumns = [
	{ key: "service", label: "Tjänst", type: "text" as const },
	{ key: "price", label: "Kostnad", type: "currency" as const },
	{
		key: "highCostProtection",
		label: "Högkostnadsskydd",
		type: "text" as const,
	},
];

// Specialist care data
const specialistData = [
	{ service: "Specialistläkarbesök", price: 400, highCostProtection: "Ja" },
	{
		service: "Sjukhusvistelse (per dag)",
		price: 100,
		highCostProtection: "Ja",
	},
	{ service: "Operation", price: 100, highCostProtection: "Ja" },
	{ service: "Akutbesök", price: 400, highCostProtection: "Ja" },
	{ service: "Röntgenundersökning", price: 250, highCostProtection: "Ja" },
];
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-6xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Avgifter</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Här hittar du information om kostnader för vård och behandling.
				Sverige har ett högkostnadsskydd som innebär att du betalar
				högst en viss summa per år.
			</p>

			<div class="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg
							class="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<p class="text-sm text-green-800">
							<strong>Frikort:</strong> När du har nått
							högkostnadsskyddet får du frikort som ger fri vård
							under resterande del av perioden. Kortet skickas
							automatiskt till din folkbokföringsadress.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
				<InfoCard
					title="1 250 kr"
					content="Högkostnadsskydd för vård"
					variant="primary"
				/>
				<InfoCard
					title="2 400 kr"
					content="Högkostnadsskydd för läkemedel"
					variant="primary"
				/>
				<InfoCard
					title="1 150 kr"
					content="Högkostnadsskydd för resor"
					variant="primary"
				/>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">Vårdcentral - Priser</h2>
				<p class="text-neutral-700 mb-4">
					Nedan ser du gällande avgifter för besök på vår vårdcentral.
					Alla priser är angivna i svenska kronor.
				</p>
				<DataTable
					:columns="feeColumns"
					:data="feeData"
					:sortable="true"
					:paginated="false"
				/>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">
					Specialistvård - Priser
				</h2>
				<p class="text-neutral-700 mb-4">
					Nedan ser du gällande avgifter för specialistvård. Alla
					priser är angivna i svenska kronor.
				</p>
				<DataTable
					:columns="specialistColumns"
					:data="specialistData"
					:sortable="true"
					:paginated="false"
				/>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">Högkostnadsskydd</h2>
				<p class="text-neutral-700 mb-4">
					Högkostnadsskyddet innebär att du betalar högst en viss
					summa under en 12-månadersperiod. När du har nått gränsen
					får du frikort som ger fri vård under resterande del av
					perioden.
				</p>
				<DataTable
					:columns="highCostColumns"
					:data="highCostData"
					:sortable="false"
					:paginated="false"
				/>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6">
				<h2 class="text-xl font-semibold mb-4">Viktigt att veta</h2>
				<ul
					class="list-disc list-inside text-neutral-700 space-y-2 px-4"
				>
					<li>
						Barn och ungdomar under 20 år har gratis vård inom
						landstinget
					</li>
					<li>Om du har frikort, ta med det vid varje besök</li>
					<li>
						Vissa tjänster kan ha andra avgifter än de som anges
						ovan
					</li>
					<li>
						Privat vård har andra priser och omfattas inte av
						högkostnadsskyddet
					</li>
					<li>
						För mer information om avgifter och frikort, kontakta
						vår reception
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
