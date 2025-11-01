<script setup lang="ts">
import { ref } from "vue";

// State to manage notification visibility
const isVisible = ref(true);

// Function to dismiss the notification
const dismiss = () => {
	isVisible.value = false;
};
</script>

<template>
	<div
		v-if="isVisible"
		class="bg-amber-50 border-t border-r border-l-4 border-b border-amber-400 p-4 relative"
		role="alert"
		aria-labelledby="demo-notification-message"
	>
		<div class="flex">
			<div class="flex-shrink-0">
				<svg
					class="h-5 w-5 text-amber-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="ml-3">
				<p
					id="demo-notification-message"
					class="text-sm font-medium text-amber-800"
				>
					<strong>Detta är en demowebbplats</strong> och inte en
					faktisk vårdcentral. Ingen information på denna sida är
					verklig och ingen medicinsk rådgivning erbjuds.
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
						<svg
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
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
	<div v-if="isVisible" class="fixed top-24 right-8 z-50" aria-hidden="true">
		<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
			<g
				transform="matrix(.96592583 -.25881905 .25881905 .96592583 -13.484692 17.573593)"
			>
				<path
					d="m25 45 1-1 2 1 2-1 2 1 63-2 2 1 1-1 2 1 1 1 1 2-1 2 1 2 1 9m0 14-1 3-1 1-1 2-2-1-2 1-66 2-2-1-2 1-2-1-1-1-1-2 1-2-1-2-1-14m0-10 1-2 1-2z"
					fill="none"
					stroke="#c1121f"
					stroke-width="2"
				/>
				<text
					fill="#c1121f"
					font-family="Impact, 'Arial Black', sans-serif"
					font-size="13"
					text-anchor="middle"
				>
					<tspan
						transform="matrix(.99965732 -.02617695 .02617695 .99965732 -1.743575 .808268)"
						x="30"
						y="67"
					>
						P
					</tspan>
					<tspan
						transform="matrix(.9998477 .01745241 -.01745241 .9998477 1.175099 -.652987)"
						x="38"
						y="67"
					>
						R
					</tspan>
					<tspan
						transform="matrix(.99996192 -.00872654 .00872654 .99996192 -.582926 .403972)"
						x="46"
						y="67"
					>
						O
					</tspan>
					<tspan
						transform="matrix(.99965732 .02617695 -.02617695 .99965732 1.77236 -1.390596)"
						x="54"
						y="67"
					>
						T
					</tspan>
					<tspan
						transform="matrix(.9998477 -.01745241 .01745241 .9998477 -1.160021 1.074801)"
						x="61"
						y="67"
					>
						O
					</tspan>
					<tspan
						transform="matrix(.99996192 .00872654 -.00872654 .99996192 .587305 -.59958)"
						x="69"
						y="67"
					>
						T
					</tspan>
					<tspan
						transform="matrix(.99965732 -.02617695 .02617695 .99965732 -1.727812 2.012407)"
						x="76"
						y="67"
					>
						Y
					</tspan>
					<tspan
						transform="matrix(.9998477 .01745241 -.01745241 .9998477 1.182105 -1.455798)"
						x="84"
						y="67"
					>
						P
					</tspan>
					<tspan
						transform="matrix(.99996192 -.00872654 .00872654 .99996192 -.581175 .805392)"
						x="92"
						y="67"
					>
						E
					</tspan>
				</text>
			</g>
		</svg>
	</div>
</template>
