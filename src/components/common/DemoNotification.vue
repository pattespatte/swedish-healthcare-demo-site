<script setup lang="ts">
	import { ref } from 'vue'
	import prototypeBadge from '@/assets/prototype-badge.svg'

	// State to manage notification visibility
	const isVisible = ref(true)

	// Function to dismiss the notification
	const dismiss = () => {
		isVisible.value = false
	}

	// Number of repeated watermark strings. The tile grid scales with vmax, so a
	// fixed count covers any viewport; surplus tiles are clipped outside the view.
	const watermarkCount = 200
</script>

<template>
	<div v-if="isVisible" class="demo-watermark" aria-hidden="true">
		<div class="demo-watermark__grid">
			<span v-for="n in watermarkCount" :key="n" class="demo-watermark__item font-serif text-primary-800">
				DEMO SITE
			</span>
		</div>
	</div>
	<!-- z-[10001] keeps the opaque banner above .demo-watermark (z-index 10000) so the watermark strings behind it are hidden -->
	<div
		v-if="isVisible"
		class="relative z-[10001] border-b border-l-4 border-r border-t border-amber-400 bg-amber-50 p-4"
		role="alert"
		aria-labelledby="demo-notification-message"
	>
		<div class="flex">
			<div class="flex-shrink-0">
				<svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="ml-3">
				<p id="demo-notification-message" class="text-sm font-medium text-amber-800">
					<strong>Detta är en demowebbplats</strong>
					och inte en faktisk vårdcentral. Ingen information på denna sida är verklig och ingen medicinsk rådgivning
					erbjuds.
				</p>
			</div>
			<div class="ml-auto pl-3">
				<div class="-mx-1.5 -my-1.5">
					<button
						@click="dismiss"
						type="button"
						class="inline-flex rounded-md bg-amber-50 p-1.5 text-amber-500 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-50"
						aria-label="Stäng meddelande"
					>
						<span class="sr-only">Stäng</span>
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Prototype Badge - Fixed positioned -->
	<div v-if="isVisible" class="fixed right-8 top-24 z-50" aria-hidden="true">
		<img :src="prototypeBadge" alt="Prototype badge" class="h-auto min-h-[300px] w-[20vw] min-w-[240px]" />
	</div>
</template>

<style scoped>
	/* Full-page decorative watermark, tied to the banner's visibility state.
	   Purely visual: aria-hidden, non-interactive and exempt from contrast rules
	   (WCAG 1.4.3 pure decoration). */
	.demo-watermark {
		position: fixed;
		inset: 0;
		z-index: 10000; /* above the site's overlay layers (Modal, dropdowns use z-50); pointer-events keeps it inert */
		overflow: hidden;
		pointer-events: none;
		user-select: none;
		opacity: 0.18;
	}

	/* Oversized rotated tile grid: the viewport maps onto its center band, so
	   rotating cannot reveal uncovered corners. */
	.demo-watermark__grid {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 240vmax;
		height: 240vmax;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		gap: 6vmax 5vmax;
		transform: translate(-50%, -50%) rotate(-30deg);
	}

	.demo-watermark__item {
		font-size: 2.2vmax;
		font-weight: 600;
		letter-spacing: 0.15em;
		white-space: nowrap;
	}
</style>
