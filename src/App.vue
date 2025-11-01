<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import DemoNotification from "./components/common/DemoNotification.vue";
import { useDarkMode } from "./composables/useDarkMode";

// Initialize dark mode
const { isDarkMode } = useDarkMode();
</script>

<template>
	<div
		class="min-h-screen bg-neutral-100 dark:bg-dark-bg-primary flex flex-col"
	>
		<DemoNotification />
		<Header />
		<main
			class="flex-grow text-neutral-900 dark:text-dark-text-primary"
			id="main-content"
		>
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
