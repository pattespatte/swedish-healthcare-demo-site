<script setup lang="ts">
import PhosphorIconsDemo from '../components/display/PhosphorIconsDemo.vue'
import Breadcrumbs from '../components/common/Breadcrumbs.vue'
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-6xl">
			<main>
				<div class="mb-8">
					<h1 class="mb-4 text-3xl font-bold text-gray-800">Phosphor Icons Demo</h1>
					<p class="mb-6 text-lg text-neutral-700">
						This page demonstrates the Phosphor icons library integration in our Vue application.
						Phosphor icons are globally registered and can be used throughout the application.
					</p>

					<div class="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
						<h3 class="mb-3 text-lg font-semibold text-blue-800">About Phosphor Icons</h3>
						<ul class="list-disc space-y-2 px-4 text-sm text-blue-700">
							<li>Phosphor is a flexible icon family with over 7,000 icons</li>
							<li>Multiple weights: Thin, Light, Regular, Bold, Fill, and Duotone</li>
							<li>Fully customizable with size, color, and CSS classes</li>
							<li>Optimized for web applications with SVG format</li>
							<li>Accessible with proper semantic markup</li>
							<li>Already globally registered in this Vue application</li>
						</ul>
					</div>
				</div>

				<!-- The actual demo component -->
				<PhosphorIconsDemo />

				<!-- Additional Resources -->
				<div class="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
					<h3 class="mb-4 text-lg font-semibold text-gray-800">Additional Resources</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div>
							<h4 class="mb-2 font-medium text-gray-700">Official Documentation</h4>
							<a
								href="https://phosphoricons.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-800 underline"
							>
								Phosphor Icons Website →
							</a>
						</div>
						<div>
							<h4 class="mb-2 font-medium text-gray-700">Vue Integration</h4>
							<a
								href="https://github.com/phosphor-icons/vue"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-800 underline"
							>
								@phosphor-icons/vue on GitHub →
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
