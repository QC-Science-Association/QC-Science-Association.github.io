<script setup lang="ts">
import { Roadmap, RoadmapDBEntry } from "./events-roadmap";

import App from "@/App.vue";
import Card from "@/components/Card.vue";

interface RoadmapVueEntry extends RoadmapDBEntry {
	lastSpacing: number
	totalSpacing: number
}

const roadmapEntries: RoadmapVueEntry[] = [];
const currentTime = Date.now();
let timeSpacing = 0;
for (let idx = 0; idx < Roadmap.length; idx++) {
	const event = Roadmap[idx];
	const space = idx === 0 ? 0 : Math.log2(event.date.getTime() - Roadmap[idx - 1].date.getTime()) * 10 - 205;
	if (currentTime <= event.date.getTime() && !timeSpacing) {
		timeSpacing = roadmapEntries[idx - 1].totalSpacing + space *
			(1 - (event.date.getTime() - currentTime) / (event.date.getTime() - Roadmap[idx - 1].date.getTime()));
	}
	roadmapEntries.push({
		...event,
		lastSpacing: space,
		totalSpacing: idx === 0 ? 25 : roadmapEntries[idx - 1].totalSpacing + space
	});
}
const totalLength = roadmapEntries[roadmapEntries.length - 1].totalSpacing;
if (!timeSpacing) timeSpacing = totalLength;
</script>

<template>
	<App>
		<Card>
			<template #header>
				Roadmap of Events
			</template>
			<h4>
				NOTE: Most of the events here are still tentative, as the school year has only just started.
				Events may be added, removed, or changed in due course. Do not use this as an absolute guide
				to our year plan just yet.
			</h4>
			<div class="c-svg-container">
				<svg
					class="c-svg-el"
					:height="totalLength + 50"
				>
					<line
						x1="20"
						x2="20"
						y1="25"
						:y2="totalLength"
						class="c-central-line"
					/>
					<line
						x1="20"
						x2="20"
						y1="25"
						:y2="timeSpacing"
						class="c-central-line--time-spacing"
					/>
					<g
						v-for="(event, eventId) in roadmapEntries"
						:key="eventId"
					>
						<foreignObject
							x="0"
							:y="event.totalSpacing - 50"
							width="100%"
							height="100"
						>
							<div
								class="c-event-text"
								:style="{
									color: timeSpacing >= event.totalSpacing ? '#87bfe6' : 'var(--colour-accent)'
								}"
							>
								{{ event.date.toLocaleDateString(undefined,
									{ year: "numeric", month: "2-digit", day: "2-digit" }
								) }}:
								{{ event.title }}
							</div>
						</foreignObject>
						<circle
							cx="20"
							:cy="event.totalSpacing"
							r="8"
							class="c-event-point"
							:style="{
								stroke: timeSpacing >= event.totalSpacing ? '#37afe6' : 'var(--colour-accent)'
							}"
						/>
					</g>
				</svg>
			</div>
		</Card>
	</App>
</template>

<style scoped>
.c-svg-container {
	width: 100%;
	max-width: 600px;
	margin: auto;
}

.c-svg-el {
	width: 100%;
}
.c-central-line {
	stroke-width: 5;
	stroke: var(--colour-accent);
}

.c-central-line--time-spacing {
	stroke-width: 5;
	stroke: #37afe6;
	stroke-linecap: round;
}

.c-event-point {
	stroke-width: 6;
	fill: var(--colour-background);
}

.c-event-text {
	font-size: 13px;
	max-width: calc(100% - 50px);
	position: relative;
	top: 50%;
	left: 40px;
	font-weight: 300;
	text-shadow: none;
	transform: translateY(-50%);
}
</style>