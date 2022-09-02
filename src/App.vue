<script setup lang="ts">
import { Page } from "./database";

import Card from "./components/Card.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
	<div>
		<TopBar />
		<Card
			v-for="(card, cardId) in Page.content.cards"
			:key="cardId"
			:card="card"
		/>
	</div>
</template>