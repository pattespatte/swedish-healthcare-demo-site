import { ref, reactive, computed } from 'vue'

// Form data interfaces
export interface PersonalInfo {
	firstName: string
	lastName: string
	personalNumber: string
	phone: string
	email: string
}

export interface AppointmentDetails {
	visitType: string
	preferredDate: string
	preferredTime: string
	clinic: string
	priority: string
}

export interface MedicalInfo {
	reason: string
	symptoms: string
	medications: string
	allergies: string[]
	previousConditions: string[]
	otherAllergy?: string
	otherCondition?: string
}

export interface Preferences {
	language: string
	needsInterpreter: string
	specialNeeds: string[]
	prefersDigital: string
	message: string
}

export interface Consent {
	privacyPolicy: boolean
	dataProcessing: boolean
	smsReminder: boolean
	documents: File[]
}

export interface FormData {
	personalInfo: PersonalInfo
	appointmentDetails: AppointmentDetails
	medicalInfo: MedicalInfo
	preferences: Preferences
	consent: Consent
}

export function useFormValidation() {
	// Error state
	const errors = reactive<Record<string, string>>({})

	// Validation functions
	const validateRequired = (value: string, fieldName: string): string | null => {
		if (!value || value.trim() === '') {
			return `Fältet ${fieldName} är obligatoriskt`
		}
		return null
	}

	const validateName = (value: string, fieldName: string): string | null => {
		const requiredError = validateRequired(value, fieldName)
		if (requiredError) return requiredError

		if (value.length < 2) {
			return `${fieldName} måste innehålla minst 2 tecken`
		}

		if (value.length > 50) {
			return `${fieldName} får inte innehålla mer än 50 tecken`
		}

		if (!/^[a-zA-ZåäöÅÄÖ\s\-']+$/.test(value)) {
			return `${fieldName} får endast innehålla bokstäver, bindestreck och apostrofer`
		}

		return null
	}

	const validatePersonalNumber = (value: string): string | null => {
		const requiredError = validateRequired(value, 'personnummer')
		if (requiredError) return requiredError

		// Check format: YYYYMMDD-XXXX or YYMMDD-XXXX
		const regex = /^(\d{2}|\d{4})(\d{2})(\d{2})[-+]?\d{4}$/
		if (!regex.test(value.replace(/\s/g, ''))) {
			return 'Ange ett giltigt personnummer i formatet ÅÅÅÅMMDD-XXXX'
		}

		// Basic checksum validation (simplified)
		const cleanNumber = value.replace(/[-\s]/g, '')
		if (cleanNumber.length !== 10 && cleanNumber.length !== 12) {
			return 'Ange ett giltigt personnummer i formatet ÅÅÅÅMMDD-XXXX'
		}

		return null
	}

	const validatePhone = (value: string): string | null => {
		const requiredError = validateRequired(value, 'telefonnummer')
		if (requiredError) return requiredError

		const cleanPhone = value.replace(/[-\s]/g, '')

		if (!/^0\d{7,}$|^46\d{9,}$/.test(cleanPhone)) {
			return 'Ange ett giltigt svenskt telefonnummer'
		}

		return null
	}

	const validateEmail = (value: string): string | null => {
		const requiredError = validateRequired(value, 'e-postadress')
		if (requiredError) return requiredError

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(value)) {
			return 'Ange en giltig e-postadress'
		}

		return null
	}

	const validateSelect = (value: string, fieldName: string): string | null => {
		if (!value) {
			return `Välj ${fieldName}`
		}
		return null
	}

	const validateDate = (value: string): string | null => {
		const requiredError = validateRequired(value, 'datum')
		if (requiredError) return requiredError

		const selectedDate = new Date(value)
		const today = new Date()
		today.setHours(0, 0, 0, 0)

		const maxDate = new Date()
		maxDate.setMonth(maxDate.getMonth() + 6)

		if (selectedDate < today) {
			return 'Datumet kan inte vara i det förflutna'
		}

		if (selectedDate > maxDate) {
			return 'Datumet får inte vara mer än 6 månader framåt i tiden'
		}

		return null
	}

	const validateTextarea = (value: string, fieldName: string, minLength: number, maxLength: number): string | null => {
		if (value && value.length > maxLength) {
			return `${fieldName} får inte överstiga ${maxLength} tecken`
		}

		if (value && value.length > 0 && value.length < minLength) {
			return `${fieldName} måste innehålla minst ${minLength} tecken`
		}

		return null
	}

	const validateCheckboxGroup = (values: string[], fieldName: string): string | null => {
		if (values.length === 0) {
			return `Välj minst ett alternativ för ${fieldName}`
		}
		return null
	}

	const validateConsent = (value: boolean, fieldName: string): string | null => {
		if (!value) {
			return `Du måste godkänna ${fieldName} för att fortsätta`
		}
		return null
	}

	// Field validation
	const validateField = (fieldName: string, value: any, fieldType: string, required: boolean = true): string | null => {
		if (!required && !value) return null

		switch (fieldType) {
			case 'firstName':
			case 'lastName':
				return validateName(value, fieldName)
			case 'personalNumber':
				return validatePersonalNumber(value)
			case 'phone':
				return validatePhone(value)
			case 'email':
				return validateEmail(value)
			case 'select':
				return validateSelect(value, fieldName)
			case 'date':
				return validateDate(value)
			case 'reason':
				return validateTextarea(value, fieldName, 5, 300)
			case 'symptoms':
			case 'medications':
				return validateTextarea(value, fieldName, 0, 500)
			case 'message':
				return validateTextarea(value, fieldName, 0, 300)
			case 'checkboxGroup':
				return validateCheckboxGroup(value, fieldName)
			case 'consent':
				return validateConsent(value, fieldName)
			default:
				return validateRequired(value, fieldName)
		}
	}

	// Form validation
	const validateForm = (formData: FormData): boolean => {
		// Clear previous errors
		Object.keys(errors).forEach(key => delete errors[key])

		let isValid = true

		// Personal Information
		let error = validateField('firstName', formData.personalInfo.firstName, 'firstName')
		if (error) {
			errors.firstName = error
			isValid = false
		}

		error = validateField('lastName', formData.personalInfo.lastName, 'lastName')
		if (error) {
			errors.lastName = error
			isValid = false
		}

		error = validateField('personnummer', formData.personalInfo.personalNumber, 'personalNumber')
		if (error) {
			errors.personalNumber = error
			isValid = false
		}

		error = validateField('telefonnummer', formData.personalInfo.phone, 'phone')
		if (error) {
			errors.phone = error
			isValid = false
		}

		error = validateField('e-postadress', formData.personalInfo.email, 'email')
		if (error) {
			errors.email = error
			isValid = false
		}

		// Appointment Details
		error = validateField('typ av besök', formData.appointmentDetails.visitType, 'select')
		if (error) {
			errors.visitType = error
			isValid = false
		}

		error = validateField('datum', formData.appointmentDetails.preferredDate, 'date')
		if (error) {
			errors.preferredDate = error
			isValid = false
		}

		error = validateField('önskad tid', formData.appointmentDetails.preferredTime, 'select')
		if (error) {
			errors.preferredTime = error
			isValid = false
		}

		error = validateField('vårdcentral/mottagning', formData.appointmentDetails.clinic, 'select')
		if (error) {
			errors.clinic = error
			isValid = false
		}

		error = validateField('prioritet', formData.appointmentDetails.priority, 'select')
		if (error) {
			errors.priority = error
			isValid = false
		}

		// Medical Information
		error = validateField('anledning till besök', formData.medicalInfo.reason, 'reason')
		if (error) {
			errors.reason = error
			isValid = false
		}

		error = validateField('symtom', formData.medicalInfo.symptoms, 'symptoms')
		if (error) {
			errors.symptoms = error
			isValid = false
		}

		error = validateField('nuvarande mediciner', formData.medicalInfo.medications, 'medications')
		if (error) {
			errors.medications = error
			isValid = false
		}

		// Preferences
		error = validateField('tolkbehov', formData.preferences.needsInterpreter, 'select')
		if (error) {
			errors.needsInterpreter = error
			isValid = false
		}

		error = validateField('mötesform', formData.preferences.prefersDigital, 'select')
		if (error) {
			errors.prefersDigital = error
			isValid = false
		}

		error = validateField('meddelande', formData.preferences.message, 'message')
		if (error) {
			errors.message = error
			isValid = false
		}

		// Consent
		error = validateField('integritetspolicy', formData.consent.privacyPolicy, 'consent')
		if (error) {
			errors.privacyPolicy = error
			isValid = false
		}

		error = validateField('datahantering', formData.consent.dataProcessing, 'consent')
		if (error) {
			errors.dataProcessing = error
			isValid = false
		}

		return isValid
	}

	// Clear specific error
	const clearError = (fieldName: string) => {
		if (errors[fieldName]) {
			delete errors[fieldName]
		}
	}

	// Clear all errors
	const clearAllErrors = () => {
		Object.keys(errors).forEach(key => delete errors[key])
	}

	return {
		errors,
		validateField,
		validateForm,
		clearError,
		clearAllErrors
	}
}