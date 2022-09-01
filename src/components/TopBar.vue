<script setup lang="ts">
import LogoPath from "@/assets/logo.png";

const getScroll = (function() {
	if (window.pageYOffset === undefined) {
		const scrollElement = document.documentElement || document.body;
		if (scrollElement) return () => scrollElement.scrollTop;
		return () => 0;
	}
	return () => window.pageYOffset;
}());

// eslint-disable-next-line no-unused-vars
let scroll = $ref(0);
addEventListener("scroll", () => scroll = getScroll());

const logoSize = $computed(() => Math.max(80 - scroll / 3, 0));
const titleSize = $computed(() => `${Math.max(2.4 - scroll / 400, 1.5)}em`);
</script>

<template>
	<div class="c-topbar">
		<span
			class="c-topbar__title"
			:style="{ fontSize: titleSize }"
		>
			QC SCIENCE ASSOCIATION
		</span>
		<img
			class="c-topbar__logo-image"
			:src="LogoPath"
			:width="logoSize"
			:height="logoSize"
		>
	</div>
</template>

<style scoped>
.c-topbar {
	display: flex;
	flex-direction: column;
	place-items: center;
	position: sticky;
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

.c-topbar__title {
	font-size: 2.4em;
	line-height: 1.2;
	font-weight: 900;
	margin: 10px;
	color: #fffb;
	text-shadow: 0 0 var(--colour-accent);
}

.c-topbar__logo-image {
	border-radius: 50%;
	filter: drop-shadow(var(--colour-accent) 0 0 20px) drop-shadow(var(--colour-accent) 0 0 10px);
}
</style>