<template>
	<nav aria-label="Framstegsindikator">
		<ol class="flex items-center">
			<li
				v-for="(step, index) in steps"
				:key="index"
				class="relative"
				:class="{ 'flex-1': index < steps.length - 1 }"
			>
				<div class="flex items-center">
					<div
						class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2"
						:class="getStepClasses(index)"
					>
						<span v-if="index < currentStep" class="text-white">
							<svg
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</span>
						<span v-else class="text-sm font-medium">
							{{ index + 1 }}
						</span>
					</div>

					<div v-if="labels && labels[index]" class="ml-4 min-w-0">
						<p
							class="text-sm font-medium"
							:class="
								index <= currentStep
									? 'text-primary-600'
									: 'text-neutral-500'
							"
						>
							{{ labels[index] }}
						</p>
					</div>
				</div>

				<div
					v-if="index < steps.length - 1"
					class="absolute top-5 left-10 w-full h-0.5"
					:class="
						index < currentStep
							? 'bg-primary-600'
							: 'bg-neutral-200'
					"
					aria-hidden="true"
				></div>
			</li>
		</ol>
	</nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
	steps: number;
	currentStep: number;
	labels?: string[];
}

const props = withDefaults(defineProps<Props>(), {
	currentStep: 0,
});

const getStepClasses = (index: number) => {
	if (index < props.currentStep) {
		return "bg-primary-600 border-primary-600";
	} else if (index === props.currentStep) {
		return "border-primary-600 bg-white text-primary-600";
	} else {
		return "border-neutral-300 bg-white text-neutral-500";
	}
};
</script>
