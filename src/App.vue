<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import Header from './components/common/Header.vue'
	import Footer from './components/common/Footer.vue'
	import DemoNotification from './components/common/DemoNotification.vue'
	import { useDarkMode } from './composables/useDarkMode'

	// Initialize dark mode
	const { isDarkMode } = useDarkMode()
</script>

<template>
	<div class="dark:bg-dark-bg-primary flex min-h-screen flex-col bg-neutral-100">
		<DemoNotification />
		<Header />
		<main class="dark:text-dark-text-primary flex-grow text-neutral-900" id="main-content">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
