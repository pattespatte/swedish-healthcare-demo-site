<template>
	<div class="space-y-8">
		<!-- Header -->
		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-bold text-gray-800">Phosphor Icons Demo</h2>
			<p class="text-gray-600">
				This demo showcases various Phosphor icons with different configurations including sizes, colors, and weights.
				Phosphor icons are already globally registered in the application.
			</p>
		</div>

		<!-- Basic Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Basic Icons</h3>
			<p class="mb-4 text-gray-600">Common icons used throughout the application:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<PhHouse size="32" />
					<span class="text-xs text-gray-600">Home</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhUser size="32" />
					<span class="text-xs text-gray-600">User</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhPhone size="32" />
					<span class="text-xs text-gray-600">Phone</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhEnvelope size="32" />
					<span class="text-xs text-gray-600">Email</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhCalendar size="32" />
					<span class="text-xs text-gray-600">Calendar</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhClock size="32" />
					<span class="text-xs text-gray-600">Clock</span>
				</div>
			</div>
		</section>

		<!-- Size Variations -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Size Variations</h3>
			<p class="mb-4 text-gray-600">Icons in different sizes (16px to 64px):</p>
			<div class="flex flex-wrap items-end gap-8">
				<div class="flex flex-col items-center space-y-2">
					<PhHeart size="16" />
					<span class="text-xs text-gray-600">16px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHeart size="24" />
					<span class="text-xs text-gray-600">24px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHeart size="32" />
					<span class="text-xs text-gray-600">32px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHeart size="48" />
					<span class="text-xs text-gray-600">48px</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHeart size="64" />
					<span class="text-xs text-gray-600">64px</span>
				</div>
			</div>
		</section>

		<!-- Color Variations -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Color Variations</h3>
			<p class="mb-4 text-gray-600">Icons with different colors using Tailwind classes:</p>
			<div class="flex flex-wrap items-center gap-8">
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-gray-500" />
					<span class="text-xs text-gray-600">Gray</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-red-500" />
					<span class="text-xs text-gray-600">Red</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-green-500" />
					<span class="text-xs text-gray-600">Green</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-blue-500" />
					<span class="text-xs text-gray-600">Blue</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-yellow-500" />
					<span class="text-xs text-gray-600">Yellow</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStar size="32" class="text-purple-500" />
					<span class="text-xs text-gray-600">Purple</span>
				</div>
			</div>
		</section>

		<!-- Weight Variations -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Weight Variations</h3>
			<p class="mb-4 text-gray-600">Icons with different weights (thin, light, regular, bold, fill):</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="thin" />
					<div>
						<div class="font-medium">Thin</div>
						<div class="text-sm text-gray-600">PhBell weight="thin"</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="light" />
					<div>
						<div class="font-medium">Light</div>
						<div class="text-sm text-gray-600">PhBell weight="light"</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="regular" />
					<div>
						<div class="font-medium">Regular</div>
						<div class="text-sm text-gray-600">PhBell weight="regular"</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="bold" />
					<div>
						<div class="font-medium">Bold</div>
						<div class="text-sm text-gray-600">PhBell weight="bold"</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="fill" />
					<div>
						<div class="font-medium">Fill</div>
						<div class="text-sm text-gray-600">PhBell weight="fill"</div>
					</div>
				</div>
				<div class="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
					<PhBell size="32" weight="duotone" />
					<div>
						<div class="font-medium">Duotone</div>
						<div class="text-sm text-gray-600">PhBell weight="duotone"</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Healthcare-Specific Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Healthcare-Specific Icons</h3>
			<p class="mb-4 text-gray-600">Icons relevant to healthcare applications:</p>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
				<div class="flex flex-col items-center space-y-2">
					<PhFirstAid size="32" class="text-red-500" />
					<span class="text-xs text-gray-600">First Aid</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHeartbeat size="32" class="text-red-500" />
					<span class="text-xs text-gray-600">Heartbeat</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhPrescription size="32" class="text-blue-500" />
					<span class="text-xs text-gray-600">Prescription</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhTestTube size="32" class="text-green-500" />
					<span class="text-xs text-gray-600">Test Tube</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhHospital size="32" class="text-blue-500" />
					<span class="text-xs text-gray-600">Hospital</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhStethoscope size="32" class="text-gray-700" />
					<span class="text-xs text-gray-600">Stethoscope</span>
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
					@click="toggleHeart"
				>
					<PhHeart
						:size="32"
						:class="isHeartFilled ? 'text-red-500 fill-current' : 'text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Click to Fill</span>
				</button>
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-gray-100"
					@click="toggleStar"
				>
					<PhStar
						:size="32"
						:class="isStarFilled ? 'text-yellow-500 fill-current' : 'text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Click to Fill</span>
				</button>
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-blue-50"
					@click="showNotification"
				>
					<PhBell
						:size="32"
						:class="hasNotification ? 'text-blue-500' : 'text-gray-400'"
					/>
					<span class="text-xs text-gray-600">Notifications</span>
				</button>
				<button
					class="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all duration-200 hover:bg-gray-100"
					@click="toggleTheme"
				>
					<PhMoon
						v-if="!isDarkMode"
						:size="32"
						class="text-gray-600"
					/>
					<PhSun
						v-else
						:size="32"
						class="text-yellow-500"
					/>
					<span class="text-xs text-gray-600">Toggle Theme</span>
				</button>
			</div>
		</section>

		<!-- Animated Icons -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Animated Icons</h3>
			<p class="mb-4 text-gray-600">Icons with CSS animations:</p>
			<div class="flex flex-wrap gap-6">
				<div class="flex flex-col items-center space-y-2">
					<PhSpinner size="32" class="animate-spin text-blue-500" />
					<span class="text-xs text-gray-600">Loading</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhArrowClockwise size="32" class="animate-spin text-green-500" />
					<span class="text-xs text-gray-600">Refresh</span>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<PhArrowBendUpLeft size="32" class="animate-bounce text-purple-500" />
					<span class="text-xs text-gray-600">Back</span>
				</div>
			</div>
		</section>

		<!-- Usage Examples -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Usage Examples</h3>
			<p class="mb-4 text-gray-600">Common usage patterns in the application:</p>
			<!-- Button with Icon -->
			<div class="mb-6">
				<h4 class="mb-2 font-medium text-gray-700">Button with Icon</h4>
				<div class="flex flex-wrap gap-4">
					<button class="flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
						<PhPlus size="20" />
						<span>Add New</span>
					</button>
					<button class="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50">
						<PhEye size="20" />
						<span>View Details</span>
					</button>
					<button class="flex items-center space-x-2 rounded-lg border border-red-300 px-4 py-2 text-red-600 transition-colors hover:bg-red-50">
						<PhTrash size="20" />
						<span>Delete</span>
					</button>
				</div>
			</div>

			<!-- Input with Icon -->
			<div class="mb-6">
				<h4 class="mb-2 font-medium text-gray-700">Input with Icon</h4>
				<div class="flex max-w-md flex-col space-y-4">
					<div class="relative">
						<PhEnvelope class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size="20" />
						<input
							type="email"
							placeholder="Enter your email"
							class="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						/>
					</div>
					<div class="relative">
						<PhLock class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size="20" />
						<input
							type="password"
							placeholder="Enter your password"
							class="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						/>
					</div>
				</div>
			</div>

			<!-- Status Indicators -->
			<div>
				<h4 class="mb-2 font-medium text-gray-700">Status Indicators</h4>
				<div class="flex flex-wrap gap-4">
					<div class="flex items-center space-x-2">
						<PhCircleWavyCheck size="20" class="text-green-500" />
						<span class="text-sm text-gray-600">Completed</span>
					</div>
					<div class="flex items-center space-x-2">
						<PhWarning size="20" class="text-yellow-500" />
						<span class="text-sm text-gray-600">Pending</span>
					</div>
					<div class="flex items-center space-x-2">
						<PhCircleWavyWarning size="20" class="text-red-500" />
						<span class="text-sm text-gray-600">Urgent</span>
					</div>
					<div class="flex items-center space-x-2">
						<PhInfo size="20" class="text-blue-500" />
						<span class="text-sm text-gray-600">Information</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Code Examples -->
		<section class="rounded-lg bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Code Examples</h3>
			<p class="mb-4 text-gray-600">How to use Phosphor icons in your components:</p>
			<div class="space-y-4">
				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">Basic Usage</h4>
					<pre class="overflow-x-auto text-sm"><code><PhHouse size="32" />
<PhUser size="24" class="text-blue-500" /></code></pre>
				</div>

				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">With Different Weights</h4>
					<pre class="overflow-x-auto text-sm"><code><PhHeart size="32" weight="thin" />
<PhHeart size="32" weight="light" />
<PhHeart size="32" weight="regular" />
<PhHeart size="32" weight="bold" />
<PhHeart size="32" weight="fill" /></code></pre>
				</div>

				<div class="rounded-lg bg-gray-50 p-4">
					<h4 class="mb-2 font-medium text-gray-700">Interactive Icon</h4>
					<pre class="overflow-x-auto text-sm"><code><button @click="toggleStar">
		<PhStar
				:size="32"
				:class="isStarFilled ? 'text-yellow-500 fill-current' : 'text-gray-400'"
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
const isHeartFilled = ref(false)
const isStarFilled = ref(false)
const hasNotification = ref(false)
const isDarkMode = ref(false)

// Interactive icon methods
const toggleHeart = () => {
	isHeartFilled.value = !isHeartFilled.value
}

const toggleStar = () => {
	isStarFilled.value = !isStarFilled.value
}

const showNotification = () => {
	hasNotification.value = !hasNotification.value
	if (hasNotification.value) {
		setTimeout(() => {
			hasNotification.value = false
		}, 3000)
	}
}

const toggleTheme = () => {
	isDarkMode.value = !isDarkMode.value
}
</script>

<style scoped>
/* Custom animations for icons */
@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}

.animate-pulse {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
