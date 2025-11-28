<script setup lang="ts">
import HealthIconsDemo from '../components/display/HealthIconsDemo.vue'
import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-6xl">
			<main>
				<div class="mb-8">
					<h1 class="mb-4 text-3xl font-bold text-gray-800">Health Icons Demo</h1>
					<p class="mb-6 text-lg text-neutral-700">
						This page demonstrates the Health icons library integration in our Vue application.
						Health icons are specifically designed for healthcare applications and can be used throughout the application.
					</p>

					<div class="mb-8 rounded-lg border border-green-200 bg-green-50 p-6">
						<h3 class="mb-3 text-lg font-semibold text-green-800">About Health Icons</h3>
						<ul class="list-disc space-y-2 px-4 text-sm text-green-700">
							<li>Health Icons is a collection of over 4,000 free icons designed for healthcare projects</li>
							<li>Covers a wide range of medical concepts, procedures, and healthcare facilities</li>
							<li>Available in multiple styles and customizable with size and color</li>
							<li>Optimized for web applications with SVG format</li>
							<li>Designed with accessibility and semantic clarity in mind</li>
							<li>Perfect for healthcare applications like this Swedish healthcare demo site</li>
						</ul>
					</div>
				</div>

				<!-- The actual demo component -->
				<HealthIconsDemo />

				<!-- Additional Resources -->
				<div class="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
					<h3 class="mb-4 text-lg font-semibold text-gray-800">Additional Resources</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div>
							<h4 class="mb-2 font-medium text-gray-700">Official Documentation</h4>
							<a
								href="https://healthicons.org/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-800 underline"
							>
								Health Icons Website →
							</a>
						</div>
						<div>
							<h4 class="mb-2 font-medium text-gray-700">Icon Library</h4>
							<a
								href="https://github.com/resolvetosavelives/healthicons"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-800 underline"
							>
								Health Icons on GitHub →
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
