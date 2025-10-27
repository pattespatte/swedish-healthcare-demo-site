<template>
	<div class="mb-4">
		<label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>

		<div
			class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
			:class="[
				error ? 'border-red-500' : 'border-gray-300',
				disabled
					? 'bg-gray-100 cursor-not-allowed'
					: 'hover:border-gray-400',
			]"
		>
			<div class="space-y-1 text-center">
				<svg
					class="mx-auto h-12 w-12 text-gray-400"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true"
				>
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<div class="flex text-sm text-gray-600">
					<label
						:for="id"
						class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
					>
						<span>Ladda upp en fil</span>
						<input
							:id="id"
							:name="name"
							type="file"
							class="sr-only"
							:accept="accept"
							:multiple="multiple"
							:required="required"
							:disabled="disabled"
							@change="handleFileChange"
							@blur="$emit('blur')"
						/>
					</label>
					<p class="pl-1">eller dra och släpp</p>
				</div>
				<p class="text-xs text-gray-500">
					{{ fileTypeInfo }}
				</p>
			</div>
		</div>

		<!-- File list -->
		<div v-if="files.length > 0" class="mt-2">
			<h4 class="text-sm font-medium text-gray-700">Uppladdade filer:</h4>
			<ul class="mt-1 text-sm text-gray-500">
				<li
					v-for="(file, index) in files"
					:key="index"
					class="flex items-center justify-between py-1"
				>
					<span
						>{{ file.name }} ({{ formatFileSize(file.size) }})</span
					>
					<button
						v-if="!disabled"
						type="button"
						class="text-red-500 hover:text-red-700"
						@click="removeFile(index)"
					>
						<svg
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</li>
			</ul>
		</div>

		<p v-if="error" class="mt-1 text-sm text-red-600">
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
	label: string;
	id: string;
	name: string;
	accept?: string;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	multiple?: boolean;
	maxFileSize?: number; // in bytes
	maxFiles?: number;
}

interface Emits {
	(e: "update:modelValue", files: File[]): void;
	(e: "blur"): void;
}

const props = withDefaults(defineProps<Props>(), {
	accept: "",
	required: false,
	disabled: false,
	error: "",
	multiple: false,
	maxFileSize: 10 * 1024 * 1024, // 10MB default
	maxFiles: 5,
});

const emit = defineEmits<Emits>();

const files = ref<File[]>([]);

// Generate file type information text based on accept prop
const fileTypeInfo = computed(() => {
	if (!props.accept) return "Alla filtyper stöds";

	const types = props.accept.split(",").map((type) => type.trim());
	const formattedTypes = types.map((type) => {
		if (type.startsWith(".")) return type;
		if (type.includes("/*")) {
			const category = type.split("/*")[0];
			switch (category) {
				case "image":
					return "bilder";
				case "video":
					return "videor";
				case "audio":
					return "ljudfiler";
				case "application":
					return "dokument";
				default:
					return `${category}-filer`;
			}
		}
		return type;
	});

	return `Stödda format: ${formattedTypes.join(
		", "
	)}. Max storlek: ${formatFileSize(props.maxFileSize)}.`;
});

// Handle file input change
const handleFileChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const selectedFiles = Array.from(target.files || []);

	if (selectedFiles.length === 0) {
		files.value = [];
		emit("update:modelValue", []);
		return;
	}

	// Validate files
	const validFiles: File[] = [];
	const errors: string[] = [];

	selectedFiles.forEach((file) => {
		// Check file size
		if (file.size > props.maxFileSize) {
			errors.push(
				`Filen "${
					file.name
				}" är för stor. Max storlek är ${formatFileSize(
					props.maxFileSize
				)}.`
			);
			return;
		}

		// Check file type if accept is specified
		if (props.accept) {
			const acceptedTypes = props.accept
				.split(",")
				.map((type) => type.trim());
			const isAccepted = acceptedTypes.some((acceptedType) => {
				if (acceptedType.startsWith(".")) {
					return file.name
						.toLowerCase()
						.endsWith(acceptedType.toLowerCase());
				}
				if (acceptedType.includes("/*")) {
					const category = acceptedType.split("/*")[0];
					return file.type.startsWith(category + "/");
				}
				return file.type === acceptedType;
			});

			if (!isAccepted) {
				errors.push(
					`Filen "${file.name}" har inte ett giltigt filformat.`
				);
				return;
			}
		}

		validFiles.push(file);
	});

	// Check max files limit
	if (!props.multiple && validFiles.length > 1) {
		errors.push("Du kan bara ladda upp en fil.");
		validFiles.splice(1);
	}

	if (props.multiple && validFiles.length > props.maxFiles) {
		errors.push(`Du kan ladda upp maximalt ${props.maxFiles} filer.`);
		validFiles.splice(props.maxFiles);
	}

	files.value = validFiles;
	emit("update:modelValue", validFiles);

	// If there were errors, you could emit them or handle them as needed
	if (errors.length > 0) {
		console.warn("File validation errors:", errors);
	}
};

// Remove a file from the list
const removeFile = (index: number) => {
	const newFiles = [...files.value];
	newFiles.splice(index, 1);
	files.value = newFiles;
	emit("update:modelValue", newFiles);
};

// Format file size for display
const formatFileSize = (bytes: number): string => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const sizes = ["Bytes", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
</script>
