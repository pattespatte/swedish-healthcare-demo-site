<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
	<div class="min-h-screen bg-neutral-100 flex flex-col">
		<Header />
		<main class="flex-grow">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
