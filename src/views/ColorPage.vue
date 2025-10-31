<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Swedish Healthcare Brand Colors
const customColors = ref([
	{
		name: "Primära färger",
		description: "De primära färgerna är våra varumärkesbärande färger",
		shades: [
			{ name: "50", value: "#E6F2FF", class: "bg-primary-50" },
			{ name: "100", value: "#CCE0FF", class: "bg-primary-100" },
			{ name: "200", value: "#99CEFF", class: "bg-primary-200" },
			{ name: "300", value: "#66B8FF", class: "bg-primary-300" },
			{ name: "400", value: "#33A5FF", class: "bg-primary-400" },
			{ name: "500", value: "#0092FF", class: "bg-primary-500" },
			{ name: "600", value: "#007CE8", class: "bg-primary-600" },
			{ name: "700", value: "#0066CC", class: "bg-primary-700" },
			{ name: "800", value: "#232948", class: "bg-primary-800" },
			{ name: "900", value: "#081130", class: "bg-primary-900" },
		],
	},
	{
		name: "Sekundära färger",
		description: "Komplementära färger till de primära färgerna",
		shades: [
			{ name: "50", value: "#FFF8E1", class: "bg-secondary-50" },
			{ name: "100", value: "#FFEBCC", class: "bg-secondary-100" },
			{ name: "200", value: "#FFDAB3", class: "bg-secondary-200" },
			{ name: "300", value: "#FFC999", class: "bg-secondary-300" },
			{ name: "400", value: "#FFB880", class: "bg-secondary-400" },
			{ name: "500", value: "#FF9666", class: "bg-secondary-500" },
			{ name: "600", value: "#E67E50", class: "bg-secondary-600" },
			{ name: "700", value: "#CC6633", class: "bg-secondary-700" },
			{ name: "800", value: "#EDF06F", class: "bg-secondary-800" },
		],
	},
	{
		name: "Komplementära färger",
		description: "Beige och ljusblå för bakgrunder",
		shades: [
			{ name: "Beige", value: "#F0ECE4", class: "bg-beige" },
			{ name: "Ljusblå", value: "#D3DEEA", class: "bg-lightblue" },
		],
	},
	{
		name: "Funktionsfärger",
		description: "Specifika färger för olika funktioner",
		shades: [
			{ name: "Success", value: "#10B981", class: "bg-success" },
			{ name: "Info", value: "#3B82F6", class: "bg-info" },
			{ name: "Warning", value: "#F59E0B", class: "bg-warning" },
			{ name: "Error", value: "#EF4444", class: "bg-error" },
		],
	},
	{
		name: "Grafikfärger",
		description: "Färger för illustrationer och diagram",
		shades: [
			{ name: "Blå", value: "#1849A9", class: "bg-graphics-blue" },
			{
				name: "Ljusblå",
				value: "#598DFF",
				class: "bg-graphics-lightblue",
			},
			{ name: "Grön", value: "#077353", class: "bg-graphics-green" },
			{
				name: "Ljusgrön",
				value: "#2DA682",
				class: "bg-graphics-lightgreen",
			},
			{ name: "Brun", value: "#964100", class: "bg-graphics-brown" },
			{
				name: "Ljusbrun",
				value: "#C9844F",
				class: "bg-graphics-lightbrown",
			},
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
