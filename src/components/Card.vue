<script setup lang="ts">
import type { CardDBEntry } from "@/database";

const { card } = defineProps<{
	card: CardDBEntry
}>();
</script>

<template>
	<div class="c-paragraph-card">
		<div
			v-if="card.headerImage"
			class="c-paragraph-card__header-image"
		>
			<img
				:src="card.headerImage.href"
				:width="card.headerImage.width"
			>
			<a
				v-if="card.headerImage.source"
				target="_blank"
				:href="card.headerImage.source.url"
			>
				Source: {{ card.headerImage.source.description }}
			</a>
		</div>
		<h2
			v-if="card.title"
			class="c-paragraph-card__title"
			v-html="card.title"
		/>
		<span v-html="card.content" />
	</div>
</template>

<style scoped>
.c-paragraph-card {
	max-width: 960px;
	width: calc(100vw - 40px);
	padding: 30px;
	margin: 20px;
	border-radius: 10px;
	background-color: rgba(137, 119, 185, 0.3);
	text-shadow: 0 0 var(--colour-accent);
	line-height: 1.6;
}

.c-paragraph-card :deep(img) {
	display: block;
	margin: 0 auto;
	border-radius: 10px;
	max-width: 100%;
}

.c-paragraph-card__header-image {
	text-align: center;
	font-style: italic;
	font-size: 12px;
}

.c-paragraph-card__title {
	border-bottom: 2px solid var(--colour-accent);
	margin-top: 0;
	padding-bottom: 10px;
}
</style>