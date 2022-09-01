<script setup lang="ts">
import LogoPath from "@/assets/logo.png";
</script>

<template>
	<div class="c-topbar">
		<img
			class="c-topbar__logo-image"
			:src="LogoPath"
			width="80"
			height="80"
		>
	</div>
</template>

<style scoped>
.c-topbar {
	display: flex;
	flex-direction: column;
	place-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	border-bottom: 5px solid var(--colour-accent);
	padding: 10px 0;
	background: linear-gradient(transparent, var(--colour-accent));
	/* Zoom in vertically and move the background upwards a little to make transparent effect instead of
	a solid colour at the bottom and none at the top */
	background-size: 100% 240%;
	background-position-y: 20%;
}

.c-topbar__logo-image {
	border-radius: 50%;
	filter: drop-shadow(var(--colour-accent) 0 0 20px) drop-shadow(var(--colour-accent) 0 0 10px);
}
</style>