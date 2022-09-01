<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
</script>

<template>
	<div>
		<TopBar />
		<br
			v-for="i in 100"
			:key="i"
		>
	</div>
</template>

<style scoped>

</style>