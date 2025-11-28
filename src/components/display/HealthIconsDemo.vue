<template>
	<div class="space-y-8">
		<!-- Header -->
		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-bold text-gray-800">Health Icons Demo</h2>
			<p class="text-gray-600">
				This demo showcases various Health icons with different configurations including styles and categories. Health
				Icons are free, open source health icons available for any use.
			</p>
		</div>

		<!-- Basic Health Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Basic Health Icons</h3>
			<p class="mb-4 text-gray-600">Common health-related icons:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'people', 'outpatient')" alt="Patient" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Patient</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'people', 'doctor')" alt="Doctor" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Doctor</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'hospital_symbol')" alt="Hospital" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Hospital</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'stethoscope')" alt="Stethoscope" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Stethoscope</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'medicine_bottle')" alt="Medicine" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Medicine</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'thermometer')" alt="Thermometer" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Thermometer</span>
				</div>
			</div>
		</section>

		<!-- Style Variations (Filled vs Outline) -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Style Variations</h3>
			<p class="mb-4 text-gray-600">Icons in different styles (filled and outline):</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('filled', 'people', 'nurse')" alt="Nurse Filled" class="h-8 w-8" />
					<div>
						<div class="font-medium">Filled</div>
						<div class="text-sm text-gray-600">Nurse (filled style)</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('outline', 'people', 'nurse')" alt="Nurse Outline" class="h-8 w-8" />
					<div>
						<div class="font-medium">Outline</div>
						<div class="text-sm text-gray-600">Nurse (outline style)</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('filled', 'devices', 'syringe')" alt="Syringe Filled" class="h-8 w-8" />
					<div>
						<div class="font-medium">Filled</div>
						<div class="text-sm text-gray-600">Syringe (filled style)</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('outline', 'devices', 'syringe')" alt="Syringe Outline" class="h-8 w-8" />
					<div>
						<div class="font-medium">Outline</div>
						<div class="text-sm text-gray-600">Syringe (outline style)</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('filled', 'devices', 'xray')" alt="X-ray Filled" class="h-8 w-8" />
					<div>
						<div class="font-medium">Filled</div>
						<div class="text-sm text-gray-600">X-ray (filled style)</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<img :src="getIconPath('outline', 'devices', 'xray')" alt="X-ray Outline" class="h-8 w-8" />
					<div>
						<div class="font-medium">Outline</div>
						<div class="text-sm text-gray-600">X-ray (outline style)</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Size Variations -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Size Variations</h3>
			<p class="mb-4 text-gray-600">Icons in different sizes (24px to 64px):</p>
			<div class="flex flex-wrap items-end gap-8">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'heart')" alt="Heart" class="h-6 w-6" />
					<span class="text-xs text-gray-600">24px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'heart')" alt="Heart" class="h-8 w-8" />
					<span class="text-xs text-gray-600">32px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'heart')" alt="Heart" class="h-12 w-12" />
					<span class="text-xs text-gray-600">48px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'heart')" alt="Heart" class="h-16 w-16" />
					<span class="text-xs text-gray-600">64px</span>
				</div>
			</div>
		</section>

		<!-- Blood Type Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Blood Type Icons</h3>
			<p class="mb-4 text-gray-600">Different blood type indicators:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_a_p')" alt="Blood A+" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood A+</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_b_p')" alt="Blood B+" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood B+</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_ab_p')" alt="Blood AB+" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood AB+</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_o_p')" alt="Blood O+" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood O+</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_a_n')" alt="Blood A-" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood A-</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'blood', 'blood_bag')" alt="Blood Bag" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Blood Bag</span>
				</div>
			</div>
		</section>

		<!-- Medical Condition Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Medical Condition Icons</h3>
			<p class="mb-4 text-gray-600">Icons representing various medical conditions:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'conditions', 'viral_lung_infection')" alt="COVID-19" class="h-8 w-8" />
					<span class="text-xs text-gray-600">COVID-19</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'people', 'diabetes')" alt="Diabetes" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Diabetes</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'conditions', 'chills_fever')" alt="Fever" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Fever</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'conditions', 'headache')" alt="Headache" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Headache</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'conditions', 'coughing_alt')" alt="Cough" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Cough</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'specialties', 'ears_nose_and_throat')" alt="Sore Throat" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Sore Throat</span>
				</div>
			</div>
		</section>

		<!-- Medical Device Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Medical Device Icons</h3>
			<p class="mb-4 text-gray-600">Various medical devices and equipment:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'wheelchair')" alt="Wheelchair" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Wheelchair</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'crutches')" alt="Crutches" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Crutches</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'ppe', 'ppe_face_mask')" alt="Oxygen Mask" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Oxygen Mask</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'defibrillator')" alt="Defibrillator" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Defibrillator</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'symbols', 'cardiogram')" alt="ECG" class="h-8 w-8" />
					<span class="text-xs text-gray-600">ECG</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'ventilator')" alt="Ventilator" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Ventilator</span>
				</div>
			</div>
		</section>

		<!-- Nutrition Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Nutrition Icons</h3>
			<p class="mb-4 text-gray-600">Icons related to nutrition and diet:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'nutrition', 'fruits')" alt="Fruits" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Fruits</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'nutrition', 'hot_meal')" alt="Hot Meal" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Hot Meal</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'devices', 'treated_water')" alt="Water" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Water</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'people', 'lactation')" alt="Breastfeeding" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Breastfeeding</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'nutrition', 'baby_formula')" alt="Baby Formula" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Baby Formula</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img :src="getIconPath('filled', 'nutrition', 'nutrition')" alt="Nutrition" class="h-8 w-8" />
					<span class="text-xs text-gray-600">Nutrition</span>
				</div>
			</div>
		</section>

		<!-- Interactive Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Interactive Icons</h3>
			<p class="mb-4 text-gray-600">Icons with hover and click interactions:</p>
			<div class="flex flex-wrap gap-6">
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-gray-100"
					@click="toggleFavorite"
				>
					<img
						:src="getIconPath(isFavorite ? 'filled' : 'outline', 'symbols', 'heart')"
						alt="Heart"
						:class="isFavorite ? 'h-8 w-8 text-red-500' : 'h-8 w-8 text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Toggle Favorite</span>
				</button>
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-blue-50"
					@click="toggleNotification"
				>
					<img
						:src="getIconPath('filled', 'symbols', 'alert')"
						alt="Alert"
						:class="hasNotification ? 'h-8 w-8 text-blue-500' : 'h-8 w-8 text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Notifications</span>
				</button>
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-gray-100"
					@click="toggleMask"
				>
					<img
						:src="getIconPath(isMaskOn ? 'filled' : 'outline', 'ppe', 'ppe_face_mask')"
						alt="Mask"
						:class="isMaskOn ? 'h-8 w-8 text-green-500' : 'h-8 w-8 text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Toggle Mask</span>
				</button>
			</div>
		</section>

		<!-- Usage Examples -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Usage Examples</h3>
			<p class="mb-4 text-gray-600">Common usage patterns in healthcare applications:</p>
			<!-- Button with Icon -->
			<div class="mb-6">
				<h4 class="mb-2 font-medium text-gray-700">Button with Icon</h4>
				<div class="flex flex-wrap gap-4">
					<button
						class="flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
					>
						<img :src="getIconPath('filled', 'people', 'doctor')" alt="Doctor" class="h-5 w-5" />
						<span>Book Appointment</span>
					</button>
					<button
						class="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
					>
						<img :src="getIconPath('filled', 'devices', 'microscope')" alt="Lab" class="h-5 w-5" />
						<span>View Results</span>
					</button>
					<button
						class="flex items-center space-x-2 rounded-lg border border-red-300 px-4 py-2 text-red-600 transition-colors hover:bg-red-50"
					>
						<img :src="getIconPath('filled', 'symbols', 'alert')" alt="Warning" class="h-5 w-5" />
						<span>Emergency</span>
					</button>
				</div>
			</div>

			<!-- Status Indicators -->
			<div>
				<h4 class="mb-2 font-medium text-gray-700">Status Indicators</h4>
				<div class="flex flex-wrap gap-4">
					<div class="flex items-center space-x-2">
						<img :src="getIconPath('filled', 'symbols', 'yes')" alt="Check" class="h-5 w-5 text-green-500" />
						<span class="text-sm text-gray-600">Completed</span>
					</div>
					<div class="flex items-center space-x-2">
						<img
							:src="getIconPath('filled', 'symbols', 'alert_triangle')"
							alt="Warning"
							class="h-5 w-5 text-yellow-500"
						/>
						<span class="text-sm text-gray-600">Pending</span>
					</div>
					<div class="flex items-center space-x-2">
						<img :src="getIconPath('filled', 'symbols', 'no')" alt="X" class="h-5 w-5 text-red-500" />
						<span class="text-sm text-gray-600">Urgent</span>
					</div>
					<div class="flex items-center space-x-2">
						<img :src="getIconPath('filled', 'symbols', 'info')" alt="Info" class="h-5 w-5 text-blue-500" />
						<span class="text-sm text-gray-600">Information</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Code Examples -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Code Examples</h3>
			<p class="mb-4 text-gray-600">How to use Health Icons in your components:</p>
			<div class="space-y-4">
				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">Basic Usage</h4>
					<pre
						class="overflow-x-auto text-sm"
					><code><img :src="getIconPath('filled', 'people', 'doctor')" alt="Doctor" class="h-8 w-8" />
<img :src="getIconPath('outline', 'devices', 'stethoscope')" alt="Stethoscope" class="h-8 w-8" /></code></pre>
				</div>

				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">Helper Function</h4>
					<pre
						class="overflow-x-auto text-sm"
					><code>const getIconPath = (style: string, category: string, icon: string) => {
  return `/node_modules/healthicons/public/icons/svg/${style}/${category}/${icon}.svg`
}</code></pre>
				</div>

				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">Interactive Icon</h4>
					<pre class="overflow-x-auto text-sm"><code><button @click="toggleFavorite">
  <img
    :src="getIconPath(isFavorite ? 'filled' : 'outline', 'symbols', 'heart')"
    alt="Heart"
    :class="isFavorite ? 'h-8 w-8 text-red-500' : 'h-8 w-8 text-gray-400'"
  />
</button></code></pre>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	// Interactive icon states
	const isFavorite = ref(false)
	const hasNotification = ref(false)
	const isMaskOn = ref(false)

	// Helper function to get icon path
	const getIconPath = (style: string, category: string, icon: string) => {
		return `/node_modules/healthicons/public/icons/svg/${style}/${category}/${icon}.svg`
	}

	// Interactive icon methods
	const toggleFavorite = () => {
		isFavorite.value = !isFavorite.value
	}

	const toggleNotification = () => {
		hasNotification.value = !hasNotification.value
		if (hasNotification.value) {
			setTimeout(() => {
				hasNotification.value = false
			}, 3000)
		}
	}

	const toggleMask = () => {
		isMaskOn.value = !isMaskOn.value
	}
</script>

<style scoped>
	/* Custom styles for Health Icons */
	img {
		display: inline-block;
		vertical-align: middle;
	}

	/* Ensure icons maintain their aspect ratio */
	img.h-6 {
		height: 1.5rem;
		width: 1.5rem;
	}

	img.h-8 {
		height: 2rem;
		width: 2rem;
	}

	img.h-12 {
		height: 3rem;
		width: 3rem;
	}

	img.h-16 {
		height: 4rem;
		width: 4rem;
	}

	img.h-5 {
		height: 1.25rem;
		width: 1.25rem;
	}
</style>
