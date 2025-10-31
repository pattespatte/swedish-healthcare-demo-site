<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Custom color palette from tailwind.config.js
const customColors = ref([
	{
		name: "Primary",
		description: "Primary brand colors for main UI elements",
		shades: [
			{ name: "50", value: "#eff6ff", class: "bg-primary-50" },
			{ name: "100", value: "#dbeafe", class: "bg-primary-100" },
			{ name: "200", value: "#bfdbfe", class: "bg-primary-200" },
			{ name: "300", value: "#93c5fd", class: "bg-primary-300" },
			{ name: "400", value: "#60a5fa", class: "bg-primary-400" },
			{ name: "500", value: "#3b82f6", class: "bg-primary-500" },
			{ name: "600", value: "#2563eb", class: "bg-primary-600" },
			{ name: "700", value: "#1d4ed8", class: "bg-primary-700" },
			{ name: "800", value: "#232948", class: "bg-primary-800" },
			{ name: "900", value: "#081130", class: "bg-primary-900" },
		],
	},
	{
		name: "Secondary",
		description: "Secondary brand colors for supporting elements",
		shades: [
			{ name: "50", value: "#f6f3ee", class: "bg-secondary-50" },
			{ name: "100", value: "#f2ede6", class: "bg-secondary-100" },
			{ name: "200", value: "#ede7de", class: "bg-secondary-200" },
			{ name: "300", value: "#e8e0d6", class: "bg-secondary-300" },
			{ name: "400", value: "#e3d9ce", class: "bg-secondary-400" },
			{ name: "500", value: "#ded2c6", class: "bg-secondary-500" },
			{ name: "600", value: "#d9cbbd", class: "bg-secondary-600" },
			{ name: "700", value: "#d4c4b5", class: "bg-secondary-700" },
			{ name: "800", value: "#edf06f", class: "bg-secondary-800" },
		],
	},
	{
		name: "Neutral",
		description: "Neutral colors for text, backgrounds, and borders",
		shades: [
			{ name: "50", value: "#f9fafb", class: "bg-neutral-50" },
			{ name: "100", value: "#f3f4f6", class: "bg-neutral-100" },
			{ name: "200", value: "#e5e7eb", class: "bg-neutral-200" },
			{ name: "300", value: "#d1d5db", class: "bg-neutral-300" },
			{ name: "400", value: "#9ca3af", class: "bg-neutral-400" },
			{ name: "500", value: "#6b7280", class: "bg-neutral-500" },
			{ name: "600", value: "#4b5563", class: "bg-neutral-600" },
			{ name: "700", value: "#374151", class: "bg-neutral-700" },
			{ name: "800", value: "#1f2937", class: "bg-neutral-800" },
			{ name: "900", value: "#111827", class: "bg-neutral-900" },
		],
	},
	{
		name: "Status Colors",
		description: "Semantic colors for different states",
		shades: [
			{ name: "Success", value: "#10b981", class: "bg-success" },
			{ name: "Warning", value: "#f59e0b", class: "bg-warning" },
			{ name: "Error", value: "#ef4444", class: "bg-error" },
		],
	},
]);

// Common Tailwind CSS colors
const tailwindColors = ref([
	{
		name: "Gray",
		description: "Standard gray color palette",
		shades: [
			{ name: "50", value: "#f9fafb", class: "bg-gray-50" },
			{ name: "100", value: "#f3f4f6", class: "bg-gray-100" },
			{ name: "200", value: "#e5e7eb", class: "bg-gray-200" },
			{ name: "300", value: "#d1d5db", class: "bg-gray-300" },
			{ name: "400", value: "#9ca3af", class: "bg-gray-400" },
			{ name: "500", value: "#6b7280", class: "bg-gray-500" },
			{ name: "600", value: "#4b5563", class: "bg-gray-600" },
			{ name: "700", value: "#374151", class: "bg-gray-700" },
			{ name: "800", value: "#1f2937", class: "bg-gray-800" },
			{ name: "900", value: "#111827", class: "bg-gray-900" },
		],
	},
	{
		name: "Blue",
		description: "Standard blue color palette",
		shades: [
			{ name: "50", value: "#eff6ff", class: "bg-blue-50" },
			{ name: "100", value: "#dbeafe", class: "bg-blue-100" },
			{ name: "200", value: "#bfdbfe", class: "bg-blue-200" },
			{ name: "300", value: "#93c5fd", class: "bg-blue-300" },
			{ name: "400", value: "#60a5fa", class: "bg-blue-400" },
			{ name: "500", value: "#3b82f6", class: "bg-blue-500" },
			{ name: "600", value: "#2563eb", class: "bg-blue-600" },
			{ name: "700", value: "#1d4ed8", class: "bg-blue-700" },
			{ name: "800", value: "#1e40af", class: "bg-blue-800" },
			{ name: "900", value: "#1e3a8a", class: "bg-blue-900" },
		],
	},
	{
		name: "Green",
		description: "Standard green color palette",
		shades: [
			{ name: "50", value: "#f0fdf4", class: "bg-green-50" },
			{ name: "100", value: "#dcfce7", class: "bg-green-100" },
			{ name: "200", value: "#bbf7d0", class: "bg-green-200" },
			{ name: "300", value: "#86efac", class: "bg-green-300" },
			{ name: "400", value: "#4ade80", class: "bg-green-400" },
			{ name: "500", value: "#22c55e", class: "bg-green-500" },
			{ name: "600", value: "#16a34a", class: "bg-green-600" },
			{ name: "700", value: "#15803d", class: "bg-green-700" },
			{ name: "800", value: "#166534", class: "bg-green-800" },
			{ name: "900", value: "#14532d", class: "bg-green-900" },
		],
	},
	{
		name: "Red",
		description: "Standard red color palette",
		shades: [
			{ name: "50", value: "#fef2f2", class: "bg-red-50" },
			{ name: "100", value: "#fee2e2", class: "bg-red-100" },
			{ name: "200", value: "#fecaca", class: "bg-red-200" },
			{ name: "300", value: "#fca5a5", class: "bg-red-300" },
			{ name: "400", value: "#f87171", class: "bg-red-400" },
			{ name: "500", value: "#ef4444", class: "bg-red-500" },
			{ name: "600", value: "#dc2626", class: "bg-red-600" },
			{ name: "700", value: "#b91c1c", class: "bg-red-700" },
			{ name: "800", value: "#991b1b", class: "bg-red-800" },
			{ name: "900", value: "#7f1d1d", class: "bg-red-900" },
		],
	},
]);

// Filter colors by category
const filteredCategory = ref("custom");

const filteredColors = ref(customColors.value);

const filterByCategory = (category: string) => {
	filteredCategory.value = category;
	if (category === "custom") {
		filteredColors.value = customColors.value;
	} else if (category === "tailwind") {
		filteredColors.value = tailwindColors.value;
	} else {
		filteredColors.value = [...customColors.value, ...tailwindColors.value];
	}
};

// Function to copy text to clipboard
const copyToClipboard = (text: string) => {
	navigator.clipboard.writeText(text);
};
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-6xl mx-auto">
			<main>
				<div class="mb-8">
					<h1 class="text-3xl font-bold text-gray-800 mb-4">
						Color Palette
					</h1>
					<p class="text-lg text-neutral-700 mb-6">
						This is a comprehensive reference of all available
						colors in the Swedish Healthcare Demo Site. Colors are
						organized by custom brand colors and standard Tailwind
						CSS colors.
					</p>

					<!-- Category Filter -->
					<div class="flex flex-wrap gap-2 mb-8">
						<button
							@click="filterByCategory('custom')"
							:class="[
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								filteredCategory === 'custom'
									? 'bg-primary-500 text-white'
									: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
							]"
						>
							Custom Colors
						</button>
						<button
							@click="filterByCategory('tailwind')"
							:class="[
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								filteredCategory === 'tailwind'
									? 'bg-primary-500 text-white'
									: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
							]"
						>
							Tailwind Colors
						</button>
						<button
							@click="filterByCategory('all')"
							:class="[
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								filteredCategory === 'all'
									? 'bg-primary-500 text-white'
									: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
							]"
						>
							All Colors
						</button>
					</div>
				</div>

				<!-- Color Categories -->
				<div
					v-for="colorCategory in filteredColors"
					:key="colorCategory.name"
					class="mb-12"
				>
					<div class="mb-6">
						<h2 class="text-2xl font-semibold text-gray-800 mb-2">
							{{ colorCategory.name }}
						</h2>
						<p class="text-neutral-600">
							{{ colorCategory.description }}
						</p>
					</div>

					<!-- Color Shades -->
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
					>
						<div
							v-for="shade in colorCategory.shades"
							:key="shade.name"
							class="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden"
						>
							<div :class="['h-24 w-full', shade.class]"></div>
							<div class="p-4">
								<div
									class="flex justify-between items-center mb-2"
								>
									<h3
										class="text-sm font-semibold text-gray-800"
									>
										{{ colorCategory.name }}-{{
											shade.name
										}}
									</h3>
									<button
										@click="copyToClipboard(shade.class)"
										class="text-xs text-primary-600 hover:text-primary-800 transition-colors"
										title="Copy class name"
									>
										Copy
									</button>
								</div>
								<div class="text-xs text-neutral-600 mb-1">
									Class:
									<span class="font-mono">{{
										shade.class
									}}</span>
								</div>
								<div class="text-xs text-neutral-600">
									HEX:
									<span class="font-mono">{{
										shade.value
									}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Usage Guidelines -->
				<div
					class="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
				>
					<h3 class="text-lg font-semibold text-blue-800 mb-3">
						Color Usage Guidelines
					</h3>
					<ul class="list-disc space-y-2 text-sm text-blue-700 px-4">
						<li>
							Primary colors should be used for main UI elements
							like buttons, links, and important highlights
						</li>
						<li>
							Secondary colors are for supporting elements and
							less prominent features
						</li>
						<li>
							Neutral colors are ideal for text, backgrounds, and
							borders
						</li>
						<li>
							Status colors (success, warning, error) should only
							be used for their semantic meaning
						</li>
						<li>
							Ensure sufficient contrast between text and
							background colors for accessibility
						</li>
						<li>
							Use lighter shades (50-200) for backgrounds and
							darker shades (700-900) for text
						</li>
					</ul>
				</div>
			</main>
		</div>
	</div>
</template>
