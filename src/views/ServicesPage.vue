<script setup lang="ts">
import { usePageTitle } from "../composables/usePageTitle";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Set page title
const { pageTitle } = usePageTitle();
</script>

<template>
	<head>
		<title>{{ pageTitle.title }}</title>
	</head>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Våra Tjänster</h1>
			<p class="text-lg text-neutral-800 mb-8">
				Här hittar du information om alla de tjänster och vårdinsatser
				som vi erbjuder på vår vårdcentral.
			</p>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2
					class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-3"
				>
					Allmänmedicin
				</h2>
				<p class="text-neutral-700">
					Vi erbjuder allmänmedicinsk vård för vuxna och barn. Hos oss
					kan du få hjälp med vanliga sjukdomar, hälsokontroller och
					rådgivning.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2
					class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-3"
				>
					Barnmorskemottagning
				</h2>
				<p class="text-neutral-700">
					Vår barnmorskemottagning erbjuder mödrahälsovård,
					preventivmedelsrådgivning och cellprovtagning.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2
					class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-3"
				>
					BVC (Barnavårdscentral)
				</h2>
				<p class="text-neutral-700">
					Vi erbjuder barnhälsovård för barn från födseln tills de
					börjar skolan. Hos oss får ditt barn regelbundna
					hälsokontroller och vaccinationer.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6 mb-6">
				<h2
					class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-3"
				>
					Laboratorium
				</h2>
				<p class="text-neutral-700">
					Vi har ett eget laboratorium där vi tar de vanligaste
					proverna. Du behöver inte boka tid för provtagning om du har
					remiss.
				</p>
			</div>

			<div class="bg-white rounded-lg shadow-md p-6">
				<h2
					class="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-3"
				>
					Psykiatri
				</h2>
				<p class="text-neutral-700">
					Vi erbjuder psykiatrisk vård för vuxna. Hos oss kan du få
					hjälp med depression, ångest och andra psykiska besvär.
				</p>
			</div>
		</div>
	</div>
</template>
