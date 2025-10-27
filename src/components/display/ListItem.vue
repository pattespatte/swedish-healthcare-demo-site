<template>
	<div
		class="bg-white rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors duration-150"
	>
		<div class="flex items-start">
			<div v-if="icon || $slots.icon" class="flex-shrink-0">
				<slot name="icon">
					<svg
						v-if="icon"
						class="h-5 w-5 text-neutral-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</slot>
			</div>

			<div class="ml-3 flex-1">
				<div class="flex items-center justify-between">
					<h3
						v-if="title"
						class="text-sm font-medium text-neutral-900"
					>
						{{ title }}
					</h3>
					<div
						v-if="action || $slots.action"
						class="ml-4 flex-shrink-0"
					>
						<slot name="action">
							<button
								v-if="action"
								@click="action"
								class="text-sm font-medium text-primary-600 hover:text-primary-800"
							>
								Hantera
							</button>
						</slot>
					</div>
				</div>

				<div v-if="description || $slots.default" class="mt-1">
					<slot>
						<p v-if="description" class="text-sm text-neutral-600">
							{{ description }}
						</p>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

interface Props {
	title?: string;
	description?: string;
	icon?: string;
	action?: () => void;
}

defineProps<Props>();
</script>
