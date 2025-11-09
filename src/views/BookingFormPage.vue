<script setup lang="ts">
	import { ref, reactive, computed, onMounted } from 'vue'
	import { useRouter } from 'vue-router'
	import Breadcrumbs from '../components/common/Breadcrumbs.vue'
	import CardContainer from '../components/layout/CardContainer.vue'
	import Alert from '../components/display/Alert.vue'

	// Form components
	import TextInput from '../components/forms/TextInput.vue'
	import SelectInput from '../components/forms/SelectInput.vue'
	import DatePicker from '../components/forms/DatePicker.vue'
	import RadioGroup from '../components/forms/RadioGroup.vue'
	import CheckboxGroup from '../components/forms/CheckboxGroup.vue'
	import Textarea from '../components/forms/Textarea.vue'
	import FileUpload from '../components/forms/FileUpload.vue'
	import FormButton from '../components/forms/FormButton.vue'

	// Form validation composable
	import { useFormValidation, type FormData } from '../composables/useFormValidation'

	const router = useRouter()
	const { errors, validateField, validateForm, clearError, clearAllErrors } = useFormValidation()

	// Form state
	const isSubmitting = ref(false)
	const errorMessage = ref('')
	const successMessage = ref('')

	// Alert state for form submission
	const showAlert = ref(false)
	const alertType = ref<'info' | 'success' | 'warning' | 'error'>('success')
	const alertTitle = ref('')
	const alertMessage = ref('')

	// Form data
	const formData = reactive<FormData>({
		personalInfo: {
			firstName: '',
			lastName: '',
			personalNumber: '',
			phone: '',
			email: ''
		},
		appointmentDetails: {
			visitType: '',
			preferredDate: '',
			preferredTime: '',
			clinic: '',
			priority: ''
		},
		medicalInfo: {
			reason: '',
			symptoms: '',
			medications: '',
			allergies: [],
			previousConditions: []
		},
		preferences: {
			language: '',
			needsInterpreter: '',
			specialNeeds: [],
			prefersDigital: '',
			message: ''
		},
		consent: {
			privacyPolicy: false,
			dataProcessing: false,
			smsReminder: false,
			documents: []
		}
	})

	// Options for select inputs
	const visitTypeOptions = [
		{ value: 'general', label: 'Allmän konsultation' },
		{ value: 'followup', label: 'Uppföljningsbesök' },
		{ value: 'vaccination', label: 'Vaccination' },
		{ value: 'lab', label: 'Laboratorieprovtagning' },
		{ value: 'specialist', label: 'Specialistmottagning' },
		{ value: 'physio', label: 'Fysioterapi/sjukgymnastik' },
		{ value: 'psychology', label: 'Psykolog/psykoterapeut' },
		{ value: 'other', label: 'Annat' }
	]

	const timeOptions = [
		{ value: 'morning', label: 'Förmiddag (08:00-12:00)' },
		{ value: 'lunch', label: 'Lunchtid (12:00-13:00)' },
		{ value: 'afternoon', label: 'Eftermiddag (13:00-17:00)' },
		{ value: 'evening', label: 'Kväll (17:00-19:00)' },
		{ value: 'any', label: 'Spelar ingen roll' }
	]

	const clinicOptions = [
		{ value: 'central', label: 'Vårdcentralen Centrum' },
		{ value: 'nord', label: 'Vårdcentralen Nord' },
		{ value: 'syd', label: 'Vårdcentralen Syd' },
		{ value: 'ost', label: 'Vårdcentralen Öst' },
		{ value: 'vast', label: 'Vårdcentralen Väst' },
		{ value: 'specialist', label: 'Specialistmottagningen' }
	]

	const priorityOptions = [
		{ value: 'routine', label: 'Rutinbesök' },
		{ value: 'urgent', label: 'Brådskande (ej akut)' },
		{ value: 'followup', label: 'Uppföljning' }
	]

	const allergyOptions = [
		{ value: 'penicillin', label: 'Penicillin' },
		{ value: 'nuts', label: 'Nötter' },
		{ value: 'pollen', label: 'Pollen' },
		{ value: 'animals', label: 'Djur' },
		{ value: 'latex', label: 'Latex' },
		{ value: 'food', label: 'Matallergier' },
		{ value: 'none', label: 'Inga kända allergier' },
		{ value: 'other', label: 'Annan' }
	]

	const conditionOptions = [
		{ value: 'diabetes', label: 'Diabetes' },
		{ value: 'hypertension', label: 'Högt blodtryck' },
		{ value: 'heart', label: 'Hjärtsjukdom' },
		{ value: 'asthma', label: 'Astma/KOL' },
		{ value: 'thyroid', label: 'Sköldkörtelsjukdom' },
		{ value: 'autoimmune', label: 'Autoimmun sjukdom' },
		{ value: 'none', label: 'Inga kända sjukdomar' },
		{ value: 'other', label: 'Annan' }
	]

	const languageOptions = [
		{ value: 'swedish', label: 'Svenska' },
		{ value: 'english', label: 'Engelska' },
		{ value: 'arabic', label: 'Arabiska' },
		{ value: 'somali', label: 'Somaliska' },
		{ value: 'farsi', label: 'Farsi/Dari' },
		{ value: 'spanish', label: 'Spanska' },
		{ value: 'other', label: 'Annat språk' }
	]

	const specialNeedsOptions = [
		{ value: 'wheelchair', label: 'Rullstolsanpassning' },
		{ value: 'hearing', label: 'Hörselslinga' },
		{ value: 'vision', label: 'Synhjälpmedel' },
		{ value: 'mobility', label: 'Hjälp med förflyttning' },
		{ value: 'none', label: 'Inga specialbehov' }
	]

	const interpreterOptions = [
		{ value: 'yes', label: 'Ja, jag behöver tolk' },
		{ value: 'no', label: 'Nej, jag behöver ingen tolk' }
	]

	const digitalMeetingOptions = [
		{ value: 'yes', label: 'Ja, om möjligt' },
		{ value: 'no', label: 'Nej, jag vill komma till mottagningen' },
		{ value: 'either', label: 'Spelar ingen roll' }
	]

	const consentOptions = [
		{ value: 'privacy', label: 'Jag har läst och godkänner integritetspolicyn för hantering av mina personuppgifter' },
		{
			value: 'data',
			label: 'Jag samtycker till att mina uppgifter sparas och används för vårdändamål enligt gällande lagstiftning'
		},
		{ value: 'sms', label: 'Ja, skicka gärna en påminnelse via SMS dagen innan besöket' }
	]

	// Computed properties
	const showOtherAllergy = computed(() => formData.medicalInfo.allergies.includes('other'))

	const showOtherCondition = computed(() => formData.medicalInfo.previousConditions.includes('other'))

	const languageRequired = computed(() => formData.preferences.needsInterpreter === 'yes')

	const minDate = computed(() => {
		const today = new Date()
		return today.toISOString().split('T')[0]
	})

	const maxDate = computed(() => {
		const maxDate = new Date()
		maxDate.setMonth(maxDate.getMonth() + 6)
		return maxDate.toISOString().split('T')[0]
	})

	// Form handlers
	const handleBlur = (fieldName: string, value: any, fieldType: string, required: boolean = true) => {
		const error = validateField(fieldName, value, fieldType, required)
		if (error) {
			errors[fieldName] = error
		} else {
			clearError(fieldName)
		}
	}

	const handleSubmit = async () => {
		// Clear all messages and alerts first
		errorMessage.value = ''
		successMessage.value = ''
		showAlert.value = false

		if (!validateForm(formData)) {
			errorMessage.value = 'Vänligen korrigera felen i formuläret'
			// Scroll to top of form
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}

		isSubmitting.value = true

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000))

			// Clear any error messages before showing success
			errorMessage.value = ''

			// Show success message with form data
			successMessage.value = 'Din tid har bokats! Du kommer att få en bekräftelse via e-post.'

			// Show alert with form data
			submitForm()
		} catch (error) {
			errorMessage.value = 'Något gick fel. Vänligen försök igen senare.'
			console.error('Form submission error:', error)
		} finally {
			isSubmitting.value = false
		}
	}

	const submitForm = () => {
		// Clear any existing error messages first
		errorMessage.value = ''
		successMessage.value = ''

		// Validate all form fields
		if (!validateForm(formData)) {
			errorMessage.value = 'Vänligen korrigera felen i formuläret'
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}

		// Clear all validation errors when form is successfully validated
		clearAllErrors()

		// Create a summary of the form data in Swedish
		const visitTypeLabel =
			visitTypeOptions.find(opt => opt.value === formData.appointmentDetails.visitType)?.label ||
			formData.appointmentDetails.visitType
		const timeLabel =
			timeOptions.find(opt => opt.value === formData.appointmentDetails.preferredTime)?.label ||
			formData.appointmentDetails.preferredTime
		const clinicLabel =
			clinicOptions.find(opt => opt.value === formData.appointmentDetails.clinic)?.label ||
			formData.appointmentDetails.clinic
		const priorityLabel =
			priorityOptions.find(opt => opt.value === formData.appointmentDetails.priority)?.label ||
			formData.appointmentDetails.priority

		const allergyLabels = formData.medicalInfo.allergies
			.map((allergy: string) => allergyOptions.find(opt => opt.value === allergy)?.label || allergy)
			.join(', ')

		const conditionLabels = formData.medicalInfo.previousConditions
			.map((condition: string) => conditionOptions.find(opt => opt.value === condition)?.label || condition)
			.join(', ')

		const languageLabel =
			languageOptions.find(opt => opt.value === formData.preferences.language)?.label || formData.preferences.language
		const interpreterLabel =
			interpreterOptions.find(opt => opt.value === formData.preferences.needsInterpreter)?.label ||
			formData.preferences.needsInterpreter
		const digitalLabel =
			digitalMeetingOptions.find(opt => opt.value === formData.preferences.prefersDigital)?.label ||
			formData.preferences.prefersDigital

		const specialNeedsLabels = formData.preferences.specialNeeds
			.map((need: string) => specialNeedsOptions.find(opt => opt.value === need)?.label || need)
			.join(', ')

		// Format the form data summary with proper HTML
		const formSummary = `
<div style="line-height: 1.6;">
	<p><strong>Personuppgifter:</strong></p>
	<ul style="margin-left: 20px; margin-bottom: 16px;">
		<li>Namn: ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}</li>
		<li>Personnummer: ${formData.personalInfo.personalNumber}</li>
		<li>Telefon: ${formData.personalInfo.phone}</li>
		<li>E-post: ${formData.personalInfo.email}</li>
	</ul>

	<p><strong>Bokningsdetaljer:</strong></p>
	<ul style="margin-left: 20px; margin-bottom: 16px;">
		<li>Typ av besök: ${visitTypeLabel}</li>
		<li>Önskat datum: ${formData.appointmentDetails.preferredDate}</li>
		<li>Önskad tid: ${timeLabel}</li>
		<li>Vårdcentral/mottagning: ${clinicLabel}</li>
		<li>Prioritet: ${priorityLabel}</li>
	</ul>

	<p><strong>Medicinsk information:</strong></p>
	<ul style="margin-left: 20px; margin-bottom: 16px;">
		<li>Anledning till besök: ${formData.medicalInfo.reason}</li>
		<li>Symtom: ${formData.medicalInfo.symptoms || 'Ej angivna'}</li>
		<li>Nuvarande mediciner: ${formData.medicalInfo.medications || 'Ej angivna'}</li>
		<li>Kända allergier: ${allergyLabels || 'Inga kända allergier'}</li>
		<li>Tidigare sjukdomar: ${conditionLabels || 'Inga kända sjukdomar'}</li>
	</ul>

	<p><strong>Preferenser och särskilda behov:</strong></p>
	<ul style="margin-left: 20px; margin-bottom: 16px;">
		<li>Språkpreferens: ${languageLabel || 'Ej angivet'}</li>
		<li>Behöver tolk: ${interpreterLabel}</li>
		<li>Specialbehov: ${specialNeedsLabels || 'Inga specialbehov'}</li>
		<li>Önskar digitalt möte: ${digitalLabel}</li>
		<li>Meddelande: ${formData.preferences.message || 'Ej angivet'}</li>
	</ul>

	<p><strong>Samtycken:</strong></p>
	<ul style="margin-left: 20px; margin-bottom: 0;">
		<li>Integritetspolicy: ${formData.consent.privacyPolicy ? 'Godkänd' : 'Ej godkänd'}</li>
		<li>Datahantering: ${formData.consent.dataProcessing ? 'Godkänd' : 'Ej godkänd'}</li>
		<li>SMS-påminnelse: ${formData.consent.smsReminder ? 'Ja' : 'Nej'}</li>
		<li>Dokument: ${formData.consent.documents.length > 0 ? `${formData.consent.documents.length} fil(er) uppladdade` : 'Inga dokument uppladdade'}</li>
	</ul>
</div>
		`.trim()

		// Show alert with form data
		alertType.value = 'success'
		alertTitle.value = 'Formulärdata som skulle skickas'
		alertMessage.value = formSummary
		showAlert.value = true

		// Scroll to top to show the alert
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleCancel = () => {
		router.push('/boka-tid')
	}

	// Format personal number as user types
	const formatPersonalNumber = (value: string) => {
		// Remove all non-digit characters
		const clean = value.replace(/\D/g, '')

		// Format as YYYYMMDD-XXXX or YYMMDD-XXXX
		if (clean.length <= 8) {
			return clean
		}
		if (clean.length <= 10) {
			return `${clean.slice(0, 8)}-${clean.slice(8)}`
		}
		return `${clean.slice(0, 8)}-${clean.slice(8, 12)}`
	}

	const handlePersonalNumberInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		const formatted = formatPersonalNumber(target.value)
		formData.personalInfo.personalNumber = formatted
	}

	// Format phone number as user types
	const formatPhoneNumber = (value: string) => {
		const clean = value.replace(/\D/g, '')

		if (clean.startsWith('46') && clean.length > 2) {
			// International format
			if (clean.length <= 5) {
				return `+${clean.slice(0, 3)}-${clean.slice(3)}`
			}
			if (clean.length <= 8) {
				return `+${clean.slice(0, 3)}-${clean.slice(3, 5)} ${clean.slice(5)}`
			}
			return `+${clean.slice(0, 3)}-${clean.slice(3, 5)} ${clean.slice(5, 8)} ${clean.slice(8, 12)}`
		}

		// Swedish format
		if (clean.length <= 3) {
			return clean
		}
		if (clean.length <= 6) {
			return `${clean.slice(0, 3)}-${clean.slice(3)}`
		}
		return `${clean.slice(0, 3)}-${clean.slice(3, 6)} ${clean.slice(6, 8)}`
	}

	const handlePhoneInput = (event: Event) => {
		const target = event.target as HTMLInputElement
		const formatted = formatPhoneNumber(target.value)
		formData.personalInfo.phone = formatted
	}

	onMounted(() => {
		// Set default date to 3 days from now
		const defaultDate = new Date()
		defaultDate.setDate(defaultDate.getDate() + 3)
		formData.appointmentDetails.preferredDate = defaultDate.toISOString().split('T')[0]
	})
</script>

<template>
	<Breadcrumbs />

	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Boka tid &ndash; planerat besök</h1>
			<p class="mb-8 text-lg text-neutral-800">
				Fyll i formuläret nedan för att boka en tid för ett planerat vårdbesök.
			</p>

			<!-- Error/Success Alert -->
			<Alert v-if="errorMessage" type="error" :message="errorMessage" class="mb-6" />
			<Alert v-if="successMessage" type="success" :message="successMessage" class="mb-6" />

			<!-- Form Data Alert -->
			<Alert
				v-if="showAlert"
				:type="alertType"
				:title="alertTitle"
				:message="alertMessage"
				:dismissible="true"
				:html-content="true"
				class="mb-6"
			/>

			<CardContainer>
				<form @submit.prevent="handleSubmit">
					<!-- Section 1: Personal Information -->
					<section class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-400">Personuppgifter</h2>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<TextInput
								v-model="formData.personalInfo.firstName"
								label="Förnamn"
								id="firstName"
								name="firstName"
								placeholder="Ange ditt förnamn"
								:required="true"
								:error="errors.firstName"
								@blur="handleBlur('förnamn', formData.personalInfo.firstName, 'firstName')"
							/>

							<TextInput
								v-model="formData.personalInfo.lastName"
								label="Efternamn"
								id="lastName"
								name="lastName"
								placeholder="Ange ditt efternamn"
								:required="true"
								:error="errors.lastName"
								@blur="handleBlur('efternamn', formData.personalInfo.lastName, 'lastName')"
							/>

							<div class="md:col-span-2">
								<TextInput
									v-model="formData.personalInfo.personalNumber"
									label="Personnummer"
									id="personalNumber"
									name="personalNumber"
									placeholder="ÅÅÅÅMMDD-XXXX"
									:required="true"
									:error="errors.personalNumber"
									@input="handlePersonalNumberInput"
									@blur="handleBlur('personnummer', formData.personalInfo.personalNumber, 'personalNumber')"
								/>
								<p class="mt-1 text-sm text-gray-500">Format: ÅÅÅÅMMDD-XXXX (t.ex. 19850612-3456)</p>
							</div>

							<TextInput
								v-model="formData.personalInfo.phone"
								label="Telefonnummer"
								id="phone"
								name="phone"
								type="tel"
								placeholder="070-123 45 67"
								:required="true"
								:error="errors.phone"
								@input="handlePhoneInput"
								@blur="handleBlur('telefonnummer', formData.personalInfo.phone, 'phone')"
							/>

							<TextInput
								v-model="formData.personalInfo.email"
								label="E-postadress"
								id="email"
								name="email"
								type="email"
								placeholder="din.epost@exempel.se"
								:required="true"
								:error="errors.email"
								@blur="handleBlur('e-postadress', formData.personalInfo.email, 'email')"
							/>
						</div>
					</section>

					<!-- Section 2: Appointment Details -->
					<section class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-400">Bokningsdetaljer</h2>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div class="md:col-span-2">
								<SelectInput
									v-model="formData.appointmentDetails.visitType"
									label="Typ av besök"
									id="visitType"
									name="visitType"
									:options="visitTypeOptions"
									:required="true"
									:error="errors.visitType"
									@blur="handleBlur('typ av besök', formData.appointmentDetails.visitType, 'select')"
								/>
							</div>

							<DatePicker
								v-model="formData.appointmentDetails.preferredDate"
								label="Önskat datum"
								id="preferredDate"
								name="preferredDate"
								:min-date="minDate"
								:max-date="maxDate"
								:required="true"
								:error="errors.preferredDate"
								@blur="handleBlur('datum', formData.appointmentDetails.preferredDate, 'date')"
							/>

							<SelectInput
								v-model="formData.appointmentDetails.preferredTime"
								label="Önskad tid"
								id="preferredTime"
								name="preferredTime"
								:options="timeOptions"
								:required="true"
								:error="errors.preferredTime"
								@blur="handleBlur('önskad tid', formData.appointmentDetails.preferredTime, 'select')"
							/>

							<SelectInput
								v-model="formData.appointmentDetails.clinic"
								label="Vårdcentral/mottagning"
								id="clinic"
								name="clinic"
								:options="clinicOptions"
								:required="true"
								:error="errors.clinic"
								@blur="handleBlur('vårdcentral/mottagning', formData.appointmentDetails.clinic, 'select')"
							/>

							<RadioGroup
								v-model="formData.appointmentDetails.priority"
								label="Prioritet"
								name="priority"
								:options="priorityOptions"
								:required="true"
								:error="errors.priority"
								layout="horizontal"
								@blur="handleBlur('prioritet', formData.appointmentDetails.priority, 'select')"
							/>
						</div>
					</section>

					<!-- Section 3: Medical Information -->
					<section class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-400">Medicinsk information</h2>
						<div class="space-y-4">
							<Textarea
								v-model="formData.medicalInfo.reason"
								label="Anledning till besök"
								id="reason"
								name="reason"
								placeholder="Beskriv kort varför du söker vård..."
								:required="true"
								:error="errors.reason"
								:rows="3"
								:max-length="300"
								@blur="handleBlur('anledning till besök', formData.medicalInfo.reason, 'reason')"
							/>

							<Textarea
								v-model="formData.medicalInfo.symptoms"
								label="Symtom"
								id="symptoms"
								name="symptoms"
								placeholder="Beskriv dina symtom och när de började..."
								:error="errors.symptoms"
								:rows="4"
								:max-length="500"
								@blur="handleBlur('symtom', formData.medicalInfo.symptoms, 'symptoms')"
							/>

							<Textarea
								v-model="formData.medicalInfo.medications"
								label="Nuvarande mediciner"
								id="medications"
								name="medications"
								placeholder="Ange alla mediciner du tar regelbundet, inklusive dosering..."
								:error="errors.medications"
								:rows="4"
								:max-length="500"
								@blur="handleBlur('nuvarande mediciner', formData.medicalInfo.medications, 'medications')"
							/>

							<CheckboxGroup
								v-model="formData.medicalInfo.allergies"
								label="Kända allergier"
								name="allergies"
								:options="allergyOptions"
								layout="horizontal"
								@blur="handleBlur('allergier', formData.medicalInfo.allergies, 'checkboxGroup')"
							/>

							<!-- Other allergy text field -->
							<TextInput
								v-if="showOtherAllergy"
								v-model="formData.medicalInfo.otherAllergy"
								label="Annan allergi"
								id="otherAllergy"
								name="otherAllergy"
								placeholder="Ange vilken allergi"
								class="mt-2"
							/>

							<CheckboxGroup
								v-model="formData.medicalInfo.previousConditions"
								label="Tidigare sjukdomar/kroniska tillstånd"
								name="previousConditions"
								:options="conditionOptions"
								layout="horizontal"
								@blur="handleBlur('sjukdomar', formData.medicalInfo.previousConditions, 'checkboxGroup')"
							/>

							<!-- Other condition text field -->
							<TextInput
								v-if="showOtherCondition"
								v-model="formData.medicalInfo.otherCondition"
								label="Annan sjukdom"
								id="otherCondition"
								name="otherCondition"
								placeholder="Ange vilken sjukdom"
								class="mt-2"
							/>
						</div>
					</section>

					<!-- Section 4: Preferences and Special Requirements -->
					<section class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-400">
							Preferenser och särskilda behov
						</h2>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<SelectInput
								v-model="formData.preferences.language"
								label="Språkpreferens vid konsultation"
								id="language"
								name="language"
								:options="languageOptions"
								:required="languageRequired"
								:error="errors.language"
								@blur="handleBlur('språkpreferens', formData.preferences.language, 'select')"
							/>

							<RadioGroup
								v-model="formData.preferences.needsInterpreter"
								label="Behöver du tolk?"
								name="needsInterpreter"
								:options="interpreterOptions"
								:required="true"
								:error="errors.needsInterpreter"
								layout="horizontal"
								@blur="handleBlur('tolkbehov', formData.preferences.needsInterpreter, 'select')"
							/>

							<div class="md:col-span-2">
								<CheckboxGroup
									v-model="formData.preferences.specialNeeds"
									label="Specialbehov"
									name="specialNeeds"
									:options="specialNeedsOptions"
									layout="horizontal"
									@blur="handleBlur('specialbehov', formData.preferences.specialNeeds, 'checkboxGroup')"
								/>
							</div>

							<div class="md:col-span-2">
								<RadioGroup
									v-model="formData.preferences.prefersDigital"
									label="Önskar du digitalt möte (videosamtal)?"
									name="prefersDigital"
									:options="digitalMeetingOptions"
									:required="true"
									:error="errors.prefersDigital"
									layout="horizontal"
									@blur="handleBlur('digitalt möte', formData.preferences.prefersDigital, 'select')"
								/>
							</div>

							<div class="md:col-span-2">
								<Textarea
									v-model="formData.preferences.message"
									label="Meddelande till personalen"
									id="message"
									name="message"
									placeholder="Annan information du vill dela med oss..."
									:error="errors.message"
									:rows="3"
									:max-length="300"
									@blur="handleBlur('meddelande', formData.preferences.message, 'message')"
								/>
							</div>
						</div>
					</section>

					<!-- Section 5: Consent and Confirmation -->
					<section class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-primary-700 dark:text-primary-400">Samtycke och bekräftelse</h2>
						<div class="space-y-4">
							<div class="space-y-2">
								<label class="flex items-center">
									<input
										type="checkbox"
										v-model="formData.consent.privacyPolicy"
										class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										@change="handleBlur('integritetspolicy', formData.consent.privacyPolicy, 'consent')"
									/>
									<span class="ml-2 text-sm text-gray-700">{{ consentOptions[0].label }}</span>
								</label>
								<p v-if="errors.privacyPolicy" class="mt-1 text-sm text-red-600">{{ errors.privacyPolicy }}</p>

								<label class="flex items-center">
									<input
										type="checkbox"
										v-model="formData.consent.dataProcessing"
										class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										@change="handleBlur('datahantering', formData.consent.dataProcessing, 'consent')"
									/>
									<span class="ml-2 text-sm text-gray-700">{{ consentOptions[1].label }}</span>
								</label>
								<p v-if="errors.dataProcessing" class="mt-1 text-sm text-red-600">{{ errors.dataProcessing }}</p>

								<label class="flex items-center">
									<input
										type="checkbox"
										v-model="formData.consent.smsReminder"
										class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									<span class="ml-2 text-sm text-gray-700">{{ consentOptions[2].label }}</span>
								</label>
							</div>

							<FileUpload
								v-model="formData.consent.documents"
								label="Ladda upp relevanta dokument (valfritt)"
								id="documents"
								name="documents"
								accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
								:multiple="true"
								:max-file-size="10 * 1024 * 1024"
								:max-files="3"
							/>
							<p class="text-sm text-gray-500">
								Du kan ladda upp remisser, tidigare journalutdrag eller andra relevanta dokument. Max storlek: 10MB per
								fil, max 3 filer.
							</p>
						</div>
					</section>

					<!-- Form Buttons -->
					<div class="flex justify-end space-x-4">
						<FormButton type="button" variant="secondary" text="Avbryt" @click="handleCancel" />
						<FormButton
							type="button"
							variant="primary"
							text="Skicka bokning"
							:loading="isSubmitting"
							:disabled="isSubmitting"
							@click="submitForm"
						/>
					</div>
				</form>
			</CardContainer>
		</div>
	</div>
</template>
