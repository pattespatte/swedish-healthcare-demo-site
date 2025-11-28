<template>
	<SecondaryNavigation />
	<Breadcrumbs />
	<div class="container mx-auto mb-8 px-4 py-4 md:mb-16 lg:mb-24">
		<div class="mx-auto max-w-4xl">
			<h1 class="mb-6 text-3xl font-bold text-gray-800">Jobba hos oss</h1>
			<div class="rounded-lg bg-white p-6 shadow-md">
				<p class="mb-6 text-gray-600">
					Vill du bli en del av vårt team? Här hittar du information om lediga tjänster och vad det innebär att arbeta
					hos oss.
				</p>
				<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="rounded-lg bg-blue-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-blue-800">Varför välja oss?</h2>
						<ul class="list-disc space-y-2 pl-5 text-neutral-700">
							<li>Utvecklande arbetsmiljö</li>
							<li>Konkurrenskraftiga villkor</li>
							<li>Möjlighet till fortbildning</li>
							<li>Moderna lokaler och utrustning</li>
						</ul>
					</div>
					<div class="rounded-lg bg-green-50 p-6">
						<h2 class="mb-3 text-xl font-semibold text-green-800">Lediga tjänster</h2>
						<p class="mb-3 text-gray-700">Just nu söker vi:</p>
						<ul class="list-disc space-y-2 pl-5 text-neutral-700">
							<li>Specialistsjuksköterskor</li>
							<li>Läkare inom olika specialiteter</li>
							<li>Undersköterskor</li>
							<li>Administrativ personal</li>
						</ul>
					</div>
				</div>
				<div class="text-center">
					<router-link
						to="/om-oss/lediga-tjanster"
						class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-500 inline-block rounded-lg px-6 py-3 text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
					>
						Se alla lediga jobb
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SecondaryNavigation from '@/components/common/SecondaryNavigation.vue'
	import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

	export default {
		name: 'JobbaHosOssPage',
		components: {
			SecondaryNavigation,
			Breadcrumbs
		}
	}
</script>
