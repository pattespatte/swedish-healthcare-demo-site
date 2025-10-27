<template>
	<div
		class="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200 transition-all duration-200 hover:shadow-lg"
	>
		<div
			v-if="image || $slots.image"
			class="h-48 bg-neutral-100 flex items-center justify-center"
		>
			<slot name="image">
				<img
					v-if="image"
					:src="image"
					:alt="title"
					class="w-full h-full object-cover"
				/>
				<div v-else class="text-neutral-400">
					<svg
						class="w-16 h-16"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
			</slot>
		</div>

		<div class="p-6">
			<div class="flex justify-between items-start">
				<h3 class="text-xl font-semibold text-neutral-900">
					{{ title }}
				</h3>
				<div v-if="link" class="ml-4 flex-shrink-0">
					<a
						:href="link"
						class="text-primary-600 hover:text-primary-800"
						aria-label="Läs mer om {{ title }}"
					>
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
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
				</div>
			</div>

			<p v-if="description" class="mt-3 text-base text-neutral-600">
				{{ description }}
			</p>

			<div v-if="$slots.default" class="mt-4">
				<slot></slot>
			</div>

			<div
				v-if="tags && tags.length > 0"
				class="mt-4 flex flex-wrap gap-2"
			>
				<span
					v-for="(tag, index) in tags"
					:key="index"
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
				>
					{{ tag }}
				</span>
			</div>

			<div v-if="link" class="mt-6">
				<a
					:href="link"
					class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800"
				>
					Läs mer
					<svg
						class="ml-1 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	description?: string;
	image?: string;
	link?: string;
	tags?: string[];
}

defineProps<Props>();
</script>
