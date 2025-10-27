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
	{ name: "Jobba hos oss", path: "/jobba-hos-oss" },
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
</script>

<template>
	<footer class="bg-neutral-800 text-white">
		<div class="container mx-auto px-4 py-12">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<!-- Site Navigation -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Navigering</h3>
					<nav class="flex flex-col space-y-2">
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
					<h3 class="text-lg font-semibold mb-4">Kontakt</h3>
					<address class="not-italic text-neutral-300 space-y-2">
						<p>{{ contactInfo.address }}</p>
						<p>
							Telefon:
							<a
								:href="`tel:${contactInfo.phone}`"
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
					<h3 class="text-lg font-semibold mb-4">Öppettider</h3>
					<div class="text-neutral-300 space-y-2">
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
					<h3 class="text-lg font-semibold mb-4">Följ oss</h3>
					<div class="flex space-x-4">
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
				class="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center"
			>
				<div class="text-neutral-400 text-sm mb-4 md:mb-0">
					&copy; {{ currentYear }} Vårdcentralen. Alla rättigheter
					förbehålls.
				</div>
				<div class="flex space-x-6">
					<a
						href="#"
						class="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
					>
						Integritetspolicy
					</a>
					<a
						href="#"
						class="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
					>
						Cookies
					</a>
					<a
						href="#"
						class="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
					>
						Tillgänglighet
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>
