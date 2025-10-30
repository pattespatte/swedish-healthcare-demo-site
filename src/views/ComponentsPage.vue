<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

// Component data organized by category
const componentCategories = ref([
	{
		name: "Display Components",
		description: "Components for displaying information and data",
		components: [
			{
				name: "Alert",
				path: "src/components/display/Alert.vue",
				description:
					"Displays alert messages with different types (info, success, warning, error). Supports dismissible alerts and custom content.",
				props: ["type", "title", "message", "dismissible"],
				example: `<Alert type="info" title="Information" message="This is an informational alert." />`,
			},
			{
				name: "Badge",
				path: "src/components/display/Badge.vue",
				description:
					"Small status indicators with different variants (default, primary, secondary, success, warning, error).",
				props: ["text", "variant"],
				example: `<Badge text="New" variant="primary" />`,
			},
			{
				name: "ContactCard",
				path: "src/components/display/ContactCard.vue",
				description:
					"Card component for displaying contact information with image, name, role, email, phone, and address.",
				props: [
					"title",
					"name",
					"role",
					"email",
					"phone",
					"address",
					"image",
				],
				example: `<ContactCard name="John Doe" role="Doctor" email="john@example.com" phone="123-456-7890" />`,
			},
			{
				name: "DataTable",
				path: "src/components/display/DataTable.vue",
				description:
					"Sortable and paginated data table with customizable columns and cell formatting.",
				props: ["columns", "data", "sortable", "paginated", "pageSize"],
				example: `<DataTable :columns="columns" :data="tableData" />`,
			},
			{
				name: "InfoCard",
				path: "src/components/display/InfoCard.vue",
				description:
					"Card component for displaying information with icon, title, and content in different variants.",
				props: ["title", "content", "icon", "variant"],
				example: `<InfoCard title="Important" content="This is important information" variant="primary" />`,
			},
			{
				name: "ListItem",
				path: "src/components/display/ListItem.vue",
				description:
					"List item component with icon, title, description, and optional action button.",
				props: ["title", "description", "icon", "action"],
				example: `<ListItem title="Item Title" description="Item description" />`,
			},
			{
				name: "ProgressIndicator",
				path: "src/components/display/ProgressIndicator.vue",
				description:
					"Step-by-step progress indicator showing completion status of multi-step processes.",
				props: ["steps", "currentStep", "labels"],
				example: `<ProgressIndicator :steps="[1,2,3]" :currentStep="1" :labels="['Step 1', 'Step 2', 'Step 3']" />`,
			},
			{
				name: "ServiceCard",
				path: "src/components/display/ServiceCard.vue",
				description:
					"Card component for displaying services with image, title, description, tags, and link.",
				props: ["title", "description", "image", "link", "tags"],
				example: `<ServiceCard title="Service" description="Service description" :tags="['tag1', 'tag2']" />`,
			},
		],
	},
	{
		name: "Form Components",
		description: "Components for building forms and collecting user input",
		components: [
			{
				name: "CheckboxGroup",
				path: "src/components/forms/CheckboxGroup.vue",
				description:
					"Group of checkboxes with support for horizontal/vertical layout and validation.",
				props: [
					"label",
					"name",
					"options",
					"required",
					"disabled",
					"error",
					"modelValue",
					"layout",
				],
				example: `<CheckboxGroup label="Options" :options="[{value: '1', label: 'Option 1'}]" v-model="selected" />`,
			},
			{
				name: "DatePicker",
				path: "src/components/forms/DatePicker.vue",
				description:
					"Date input field with min/max date constraints and validation.",
				props: [
					"label",
					"id",
					"name",
					"required",
					"disabled",
					"error",
					"modelValue",
					"minDate",
					"maxDate",
				],
				example: `<DatePicker label="Birth Date" v-model="date" />`,
			},
			{
				name: "FileUpload",
				path: "src/components/forms/FileUpload.vue",
				description:
					"File upload component with drag-and-drop support, file validation, and file list display.",
				props: [
					"label",
					"id",
					"name",
					"accept",
					"required",
					"disabled",
					"error",
					"multiple",
					"maxFileSize",
					"maxFiles",
				],
				example: `<FileUpload label="Upload File" v-model="files" />`,
			},
			{
				name: "FormButton",
				path: "src/components/forms/FormButton.vue",
				description:
					"Button component with loading state and different variants (primary, secondary).",
				props: ["type", "variant", "disabled", "loading", "text"],
				example: `<FormButton text="Submit" variant="primary" />`,
			},
			{
				name: "RadioGroup",
				path: "src/components/forms/RadioGroup.vue",
				description:
					"Group of radio buttons with support for horizontal/vertical layout and validation.",
				props: [
					"label",
					"name",
					"options",
					"required",
					"disabled",
					"error",
					"modelValue",
					"layout",
				],
				example: `<RadioGroup label="Choose One" :options="[{value: '1', label: 'Option 1'}]" v-model="selected" />`,
			},
			{
				name: "SelectInput",
				path: "src/components/forms/SelectInput.vue",
				description:
					"Dropdown select input with options list and validation.",
				props: [
					"label",
					"id",
					"name",
					"options",
					"required",
					"disabled",
					"error",
					"modelValue",
					"placeholder",
				],
				example: `<SelectInput label="Country" :options="countries" v-model="selected" />`,
			},
			{
				name: "Textarea",
				path: "src/components/forms/Textarea.vue",
				description:
					"Multi-line text input with character counter and validation.",
				props: [
					"label",
					"id",
					"name",
					"placeholder",
					"required",
					"disabled",
					"error",
					"modelValue",
					"rows",
					"maxLength",
					"showCharacterCounter",
				],
				example: `<Textarea label="Comments" v-model="comments" />`,
			},
			{
				name: "TextInput",
				path: "src/components/forms/TextInput.vue",
				description:
					"Text input field with different types (text, email, tel, password) and validation.",
				props: [
					"label",
					"id",
					"name",
					"placeholder",
					"required",
					"disabled",
					"error",
					"modelValue",
					"type",
				],
				example: `<TextInput label="Name" v-model="name" />`,
			},
		],
	},
	{
		name: "Interactive Components",
		description:
			"Components for interactive UI elements and user interactions",
		components: [
			{
				name: "Accordion",
				path: "src/components/interactive/Accordion.vue",
				description:
					"Collapsible accordion component with support for multiple open items and smooth transitions.",
				props: ["items", "allowMultiple"],
				example: `<Accordion :items="accordionItems" />`,
			},
			{
				name: "ConfirmDialog",
				path: "src/components/interactive/ConfirmDialog.vue",
				description:
					"Modal dialog for confirming actions with customizable title, message, and button text.",
				props: [
					"title",
					"message",
					"visible",
					"confirmText",
					"cancelText",
				],
				example: `<ConfirmDialog message="Are you sure?" v-model:visible="showDialog" />`,
			},
			{
				name: "Modal",
				path: "src/components/interactive/Modal.vue",
				description:
					"Modal dialog component with customizable size, header, footer, and close functionality.",
				props: ["title", "visible", "size", "closable"],
				example: `<Modal title="Dialog" v-model:visible="showModal">Content here</Modal>`,
			},
			{
				name: "Pagination",
				path: "src/components/interactive/Pagination.vue",
				description:
					"Pagination component with page navigation, item count display, and responsive design.",
				props: [
					"currentPage",
					"totalPages",
					"itemsPerPage",
					"totalItems",
				],
				example: `<Pagination :current-page="1" :total-pages="10" @update:current-page="page = $event" />`,
			},
			{
				name: "SearchBox",
				path: "src/components/interactive/SearchBox.vue",
				description:
					"Search input with suggestions, keyboard navigation, and clear functionality.",
				props: [
					"modelValue",
					"placeholder",
					"size",
					"disabled",
					"clearable",
					"showSearchButton",
					"suggestions",
					"showSuggestions",
				],
				example: `<SearchBox v-model="searchQuery" :suggestions="suggestions" />`,
			},
			{
				name: "Tabs",
				path: "src/components/interactive/Tabs.vue",
				description:
					"Tab navigation component with keyboard support and disabled tab handling.",
				props: ["tabs", "activeTab"],
				example: `<Tabs :tabs="tabItems" v-model:active-tab="activeTab" />`,
			},
		],
	},
]);

// Filter components by category
const filteredCategory = ref("all");

const filteredComponents = ref(componentCategories.value);

const filterByCategory = (category: string) => {
	filteredCategory.value = category;
	if (category === "all") {
		filteredComponents.value = componentCategories.value;
	} else {
		filteredComponents.value = componentCategories.value.filter(
			(cat) => cat.name === category
		);
	}
};
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto px-4 py-4 mb-8 md:mb-16 lg:mb-24">
		<div class="max-w-6xl mx-auto">
			<main>
				<div class="mb-8">
					<h1 class="text-3xl font-bold text-gray-800 mb-4">
						Component Library
					</h1>
					<p class="text-lg text-neutral-700 mb-6">
						This is a comprehensive reference of all available
						components in the Swedish Healthcare Demo Site.
						Components are organized by category for easy
						navigation.
					</p>

					<!-- Category Filter -->
					<div class="flex flex-wrap gap-2 mb-8">
						<button
							@click="filterByCategory('all')"
							:class="[
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								filteredCategory === 'all'
									? 'bg-primary-500 text-white'
									: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
							]"
						>
							All Components
						</button>
						<button
							v-for="category in componentCategories"
							:key="category.name"
							@click="filterByCategory(category.name)"
							:class="[
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								filteredCategory === category.name
									? 'bg-primary-500 text-white'
									: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
							]"
						>
							{{ category.name }}
						</button>
					</div>
				</div>

				<!-- Component Categories -->
				<div
					v-for="category in filteredComponents"
					:key="category.name"
					class="mb-12"
				>
					<div class="mb-6">
						<h2 class="text-2xl font-semibold text-gray-800 mb-2">
							{{ category.name }}
						</h2>
						<p class="text-neutral-600">
							{{ category.description }}
						</p>
					</div>

					<!-- Component Cards -->
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div
							v-for="component in category.components"
							:key="component.name"
							class="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden"
						>
							<div class="p-6">
								<div
									class="flex justify-between items-start mb-4"
								>
									<h3
										class="text-xl font-semibold text-primary-600"
									>
										{{ component.name }}
									</h3>
									<span
										class="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded"
									>
										{{ component.name }}.vue
									</span>
								</div>

								<div class="mb-4">
									<p class="text-sm text-neutral-700 mb-2">
										{{ component.description }}
									</p>
									<div class="text-xs text-neutral-500">
										<strong>Path:</strong>
										{{ component.path }}
									</div>
								</div>

								<div class="mb-4">
									<h4
										class="text-sm font-medium text-gray-700 mb-2"
									>
										Key Props:
									</h4>
									<div class="flex flex-wrap gap-1">
										<span
											v-for="prop in component.props"
											:key="prop"
											class="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
										>
											{{ prop }}
										</span>
									</div>
								</div>

								<div>
									<h4
										class="text-sm font-medium text-gray-700 mb-2"
									>
										Example Usage:
									</h4>
									<div
										class="bg-neutral-50 border border-neutral-200 rounded p-3 overflow-x-auto"
									>
										<pre
											class="text-xs text-neutral-700 whitespace-pre-wrap"
											>{{ component.example }}</pre
										>
									</div>
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
						Usage Guidelines
					</h3>
					<ul class="list-disc space-y-2 text-sm text-blue-700 px-4">
						<li>
							All components follow the design system of the
							Swedish Healthcare Demo Site
						</li>
						<li>
							Components use Tailwind CSS for styling and are
							fully responsive
						</li>
						<li>
							Form components support v-model for two-way data
							binding
						</li>
						<li>
							Interactive components include proper accessibility
							attributes (ARIA)
						</li>
						<li>
							Components emit appropriate events for parent
							component handling
						</li>
						<li>
							All components are TypeScript-enabled with proper
							type definitions
						</li>
					</ul>
				</div>
			</main>
		</div>
	</div>
</template>
