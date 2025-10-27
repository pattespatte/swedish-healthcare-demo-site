<template>
	<div class="bg-blue-100 border-b border-blue-200 p-4">
		<p class="text-blue-800 font-bold">Secondary Navigation Component</p>
		<nav class="flex space-x-4 mt-2">
			<a href="/om-oss" class="text-blue-700 hover:text-blue-900"
				>Om oss</a
			>
			<a
				href="/om-oss/jobba-hos-oss"
				class="text-blue-700 hover:text-blue-900"
				>Jobba hos oss</a
			>
			<a
				href="/om-oss/lediga-tjanster"
				class="text-blue-700 hover:text-blue-900"
				>Lediga tjänster</a
			>
		</nav>
	</div>
</template>

<script>
export default {
	name: "SecondaryNavigation",
};
</script>
