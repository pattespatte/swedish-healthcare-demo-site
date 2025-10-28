<script setup lang="ts">
// Navigation links for the footer
const footerNavLinks = [
	{ name: "Start", path: "/" },
	{ name: "Om oss", path: "/om-oss" },
	{ name: "Tjänster", path: "/tjanster" },
	{ name: "Mottagningar", path: "/mottagningar" },
	{ name: "Patientinformation", path: "/patientinformation" },
	{ name: "Boka tid", path: "/boka-tid" },
	{ name: "Kontakt", path: "/kontakt" },
	{ name: "Jobba hos oss", path: "/om-oss/jobba-hos-oss" },
];

// Contact information
const contactInfo = {
	address: "Storgatan 12, 123 45 Stockholm",
	phone: "08-123 456 78",
	email: "info@vardcentralen.se",
};

// Opening hours
const openingHours = [
	{ day: "Måndag-Fredag", hours: "08:00 - 17:00" },
	{ day: "Lördag", hours: "09:00 - 13:00" },
	{ day: "Söndag", hours: "Stängt" },
];

// Social media links (placeholders)
const socialLinks = [
	{ name: "Facebook", icon: "facebook", url: "#" },
	{ name: "Instagram", icon: "instagram", url: "#" },
	{ name: "Twitter", icon: "twitter", url: "#" },
];

// Current year for copyright
const currentYear = new Date().getFullYear();

// Format phone number for tel: link
const formatPhoneLink = (phone: string): string => {
	if (!phone) return "";

	// Remove all non-digit characters
	let digits = phone.replace(/\D/g, "");

	// If the number starts with 0 (Swedish domestic format), replace with +46
	if (digits.startsWith("0")) {
		digits = "46" + digits.substring(1);
	}
	// If the number doesn't start with country code, assume Swedish number
	else if (!digits.startsWith("46")) {
		digits = "46" + digits;
	}

	return `tel:+${digits}`;
};
</script>

<template>
	<footer class="bg-neutral-800 text-white">
		<div class="container mx-auto px-4 py-4 sm:py-6">
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
			>
				<!-- Site Navigation -->
				<div>
					<h3 class="text-base font-semibold mb-1 sm:mb-2">
						Navigering
					</h3>
					<nav class="flex flex-col space-y-1 sm:space-y-2">
						<router-link
							v-for="link in footerNavLinks"
							:key="link.path"
							:to="link.path"
							class="text-neutral-300 hover:text-white transition-colors duration-200"
						>
							{{ link.name }}
						</router-link>
					</nav>
				</div>

				<!-- Contact Information -->
				<div>
					<h3 class="text-base font-semibold mb-1 sm:mb-2">
						Kontakt
					</h3>
					<address
						class="not-italic text-neutral-300 space-y-1 sm:space-y-2 text-sm"
					>
						<p>{{ contactInfo.address }}</p>
						<p>
							Telefon:
							<a
								:href="formatPhoneLink(contactInfo.phone)"
								class="hover:text-white transition-colors duration-200"
								>{{ contactInfo.phone }}</a
							>
						</p>
						<p>
							E-post:
							<a
								:href="`mailto:${contactInfo.email}`"
								class="hover:text-white transition-colors duration-200"
								>{{ contactInfo.email }}</a
							>
						</p>
					</address>
				</div>

				<!-- Opening Hours -->
				<div>
					<h3 class="text-base font-semibold mb-1 sm:mb-2">
						Öppettider
					</h3>
					<div
						class="text-neutral-300 space-y-1 sm:space-y-2 text-sm"
					>
						<div
							v-for="(item, index) in openingHours"
							:key="index"
							class="flex justify-between"
						>
							<span>{{ item.day }}</span>
							<span>{{ item.hours }}</span>
						</div>
					</div>
				</div>

				<!-- Social Media -->
				<div>
					<h3 class="text-base font-semibold mb-1 sm:mb-2">
						Följ oss
					</h3>
					<div class="flex space-x-3 sm:space-x-4">
						<a
							v-for="link in socialLinks"
							:key="link.name"
							:href="link.url"
							:aria-label="`Följ oss på ${link.name}`"
							class="text-neutral-300 hover:text-white transition-colors duration-200"
						>
							<!-- Placeholder icons - in a real implementation, you would use actual icon components -->
							<div
								class="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center"
							>
								<span class="text-xs font-semibold">{{
									link.icon.charAt(0).toUpperCase()
								}}</span>
							</div>
						</a>
					</div>
				</div>
			</div>

			<!-- Bottom Section -->
			<div
				class="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center"
			>
				<div class="text-neutral-400 text-xs mb-3 md:mb-0">
					&copy; {{ currentYear }} Vårdportalen. Alla rättigheter
					förbehålls.
				</div>
				<div class="flex space-x-6">
					<router-link
						to="/integritetspolicy"
						class="text-neutral-400 hover:text-white text-xs transition-colors duration-200"
					>
						Integritetspolicy
					</router-link>
					<router-link
						to="/cookies"
						class="text-neutral-400 hover:text-white text-xs transition-colors duration-200"
					>
						Cookies
					</router-link>
					<router-link
						to="/tillganglighet"
						class="text-neutral-400 hover:text-white text-xs transition-colors duration-200"
					>
						Tillgänglighet
					</router-link>
				</div>
			</div>
		</div>
	</footer>
</template>
