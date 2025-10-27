<template>
	<div>
		<SecondaryNavigation />
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Jobba hos oss</h1>
			<div class="bg-white rounded-lg shadow-md p-6">
				<p class="text-gray-600 mb-6">
					Vill du bli en del av vårt team? Här hittar du information
					om lediga tjänster och vad det innebär att arbeta hos oss.
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div class="bg-blue-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-blue-800">
							Varför välja oss?
						</h2>
						<ul class="space-y-2 text-gray-700">
							<li>• Utvecklande arbetsmiljö</li>
							<li>• Konkurrenskraftiga villkor</li>
							<li>• Möjlighet till fortbildning</li>
							<li>• Moderna lokaler och utrustning</li>
						</ul>
					</div>
					<div class="bg-green-50 rounded-lg p-6">
						<h2 class="text-xl font-semibold mb-3 text-green-800">
							Lediga tjänster
						</h2>
						<p class="text-gray-700 mb-3">Just nu söker vi:</p>
						<ul class="space-y-2 text-gray-700">
							<li>• Specialistsjuksköterskor</li>
							<li>• Läkare inom olika specialiteter</li>
							<li>• Undersköterskor</li>
							<li>• Administrativ personal</li>
						</ul>
					</div>
				</div>
				<div class="text-center">
					<button
						class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
					>
						Se alla lediga jobb
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SecondaryNavigation from "@/components/common/SecondaryNavigation.vue";

export default {
	name: "JobbaHosOssPage",
	components: {
		SecondaryNavigation,
	},
};
</script>
