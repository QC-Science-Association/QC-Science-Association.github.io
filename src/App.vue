<script setup lang="ts">
import { Page } from "./database";

import Card from "./components/Card.vue";
import FrontPageNotification from "./components/FrontPageNotification.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
	<TopBar />
	<FrontPageNotification
		v-if="Page.content.notification"
		:notification="Page.content.notification"
	/>
	<Card
		v-for="(card, cardId) in Page.content.cards"
		:key="cardId"
		:card="card"
	/>
</template>