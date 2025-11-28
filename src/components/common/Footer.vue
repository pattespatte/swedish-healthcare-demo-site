<script setup lang="ts">
	// Navigation links for the footer
	const footerNavLinks = [
		{ name: 'Start', path: '/' },
		{ name: 'Om oss', path: '/om-oss' },
		{ name: 'Tjänster', path: '/tjanster' },
		{ name: 'Mottagningar', path: '/mottagningar' },
		{ name: 'Patientinformation', path: '/patientinformation' },
		{ name: 'Boka tid', path: '/boka-tid' },
		{ name: 'Kontakt', path: '/kontakt' },
		{ name: 'Jobba hos oss', path: '/om-oss/jobba-hos-oss' }
	]

	// Contact information
	const contactInfo = {
		address: 'Storgatan 12, 123 45 Stockholm',
		phone: '08-123 456 78',
		email: 'info@vardcentralen.se'
	}

	// Opening hours
	const openingHours = [
		{ day: 'Måndag-Fredag', hours: '08:00 - 17:00' },
		{ day: 'Lördag', hours: '09:00 - 13:00' },
		{ day: 'Söndag', hours: 'Stängt' }
	]

	// Social media links (placeholders)
	const socialLinks = [
		{ name: 'Facebook', icon: 'facebook', url: '#' },
		{ name: 'Instagram', icon: 'instagram', url: '#' },
		{ name: 'Twitter', icon: 'twitter', url: '#' }
	]

	// Current year for copyright
	const currentYear = new Date().getFullYear()

	// Format phone number for tel: link
	const formatPhoneLink = (phone: string): string => {
		if (!phone) {
			return ''
		}

		// Remove all non-digit characters
		let digits = phone.replace(/\D/g, '')

		// If the number starts with 0 (Swedish domestic format), replace with +46
		if (digits.startsWith('0')) {
			digits = `46${digits.substring(1)}`
		}
		// If the number doesn't start with country code, assume Swedish number
		else if (!digits.startsWith('46')) {
			digits = `46${digits}`
		}

		return `tel:+${digits}`
	}
</script>

<template>
	<footer class="dark:bg-dark-bg-primary dark:text-dark-text-primary bg-slate-800 text-white" role="contentinfo">
		<div class="container mx-auto px-4 py-4 sm:py-6">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
				<!-- Site Navigation -->
				<div>
					<h3 class="mb-1 text-base font-semibold sm:mb-2">Navigering</h3>
					<nav class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-2">
						<router-link
							v-for="link in footerNavLinks"
							:key="link.path"
							:to="link.path"
							class="dark:text-dark-text-secondary dark:hover:text-dark-text-primary pr-3 text-sm text-neutral-300 transition-colors duration-200 hover:text-white"
						>
							{{ link.name }}
						</router-link>
					</nav>
				</div>

				<!-- Contact Information -->
				<div>
					<h3 class="mb-1 text-base font-semibold sm:mb-2">Kontakt</h3>
					<address class="dark:text-dark-text-secondary space-y-1 text-sm text-neutral-300 not-italic sm:space-y-2">
						<p>{{ contactInfo.address }}</p>
						<p>
							Telefon:
							<a
								:href="formatPhoneLink(contactInfo.phone)"
								class="dark:hover:text-dark-text-primary transition-colors duration-200 hover:text-white"
							>
								{{ contactInfo.phone }}
							</a>
						</p>
						<p>
							E-post:
							<a
								:href="`mailto:${contactInfo.email}`"
								class="dark:hover:text-dark-text-primary transition-colors duration-200 hover:text-white"
							>
								{{ contactInfo.email }}
							</a>
						</p>
					</address>
				</div>

				<!-- Opening Hours -->
				<div>
					<h3 class="mb-1 text-base font-semibold sm:mb-2">Öppettider</h3>
					<div class="dark:text-dark-text-secondary space-y-1 text-sm text-neutral-300 sm:space-y-2">
						<div v-for="(item, index) in openingHours" :key="index" class="flex justify-between">
							<span>{{ item.day }}</span>
							<span>{{ item.hours }}</span>
						</div>
					</div>
				</div>

				<!-- Social Media -->
				<div>
					<h3 class="mb-1 text-right text-base font-semibold sm:mb-2">Följ oss</h3>
					<div class="flex justify-end space-x-3 sm:space-x-4">
						<a
							v-for="link in socialLinks"
							:key="link.name"
							:href="link.url"
							:aria-label="`Följ oss på ${link.name}`"
							class="dark:text-dark-text-secondary dark:hover:text-dark-text-primary text-neutral-300 transition-colors duration-200 hover:text-white"
						>
							<!-- Placeholder icons - in a real implementation, you would use actual icon components -->
							<div class="dark:bg-dark-bg-tertiary flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
								<span class="text-xs font-semibold">{{ link.icon.charAt(0).toUpperCase() }}</span>
							</div>
						</a>
					</div>
				</div>
			</div>

			<!-- Bottom Section -->
			<div
				class="dark:border-dark-border-primary mt-4 flex flex-col items-center justify-between border-t border-neutral-700 pt-3 sm:mt-6 sm:pt-4 md:flex-row"
			>
				<div class="dark:text-dark-text-muted mb-3 text-xs text-neutral-400 md:mb-0">
					&copy; {{ currentYear }} Vårdportalen. Alla rättigheter förbehålls.
				</div>
				<div class="flex space-x-6">
					<a
						href="https://github.com/pattespatte/swedish-healthcare-demo-site"
						class="dark:text-dark-text-muted dark:hover:text-dark-text-primary text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
					>
						Källkod
					</a>
					<router-link
						to="/integritetspolicy"
						class="dark:text-dark-text-muted dark:hover:text-dark-text-primary text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
					>
						Integritetspolicy
					</router-link>
					<router-link
						to="/cookies"
						class="dark:text-dark-text-muted dark:hover:text-dark-text-primary text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
					>
						Cookies
					</router-link>
					<router-link
						to="/tillganglighet"
						class="dark:text-dark-text-muted dark:hover:text-dark-text-primary text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
					>
						Tillgänglighet
					</router-link>
				</div>
			</div>
		</div>
	</footer>
</template>
