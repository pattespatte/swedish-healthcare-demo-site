import { ref, onMounted, watch } from 'vue'

// Create a reactive reference for the dark mode state
const isDarkMode = ref(false)

// Key for localStorage
const DARK_MODE_KEY = 'dark-mode'
const USER_PREFERENCE_KEY = 'user-dark-mode-preference'

// Check if user prefers dark mode
const prefersDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

// Load dark mode preference from localStorage
const loadDarkModePreference = (): boolean => {
  if (typeof window !== 'undefined') {
    const userPreference = localStorage.getItem(USER_PREFERENCE_KEY)
    if (userPreference !== null) {
      return userPreference === 'true'
    }
  }
  return prefersDarkMode()
}

// Save dark mode preference to localStorage
const saveDarkModePreference = (value: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_PREFERENCE_KEY, value.toString())
  }
}

// Apply dark mode class to document
const applyDarkMode = (dark: boolean): void => {
  if (typeof document !== 'undefined') {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}

// Toggle dark mode
const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value
}

// Set dark mode explicitly
const setDarkMode = (dark: boolean): void => {
  isDarkMode.value = dark
}

// Initialize dark mode on component mount
onMounted(() => {
  isDarkMode.value = loadDarkModePreference()
  applyDarkMode(isDarkMode.value)
})

// Watch for changes and apply them
watch(isDarkMode, newValue => {
  applyDarkMode(newValue)
  saveDarkModePreference(newValue)
})

// Listen for system theme changes
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if user hasn't explicitly set a preference
    if (localStorage.getItem(USER_PREFERENCE_KEY) === null) {
      isDarkMode.value = e.matches
    }
  }

  // Add event listener (with fallback for older browsers)
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleChange)
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handleChange)
  }
}

export function useDarkMode() {
  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode
  }
}
