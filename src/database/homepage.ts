import ChlorophyllImg from "@/assets/chlorophyll.png";
import HorseshoeCrabImg from "@/assets/horseshoe-crab.jpg";

import { Page } from ".";

Page.content.cards = [{
	headerImage: {
		href: ChlorophyllImg,
		width: 200,
		source: {
			url: "https://commons.wikimedia.org/wiki/File:Chlorophyll_d_structure.svg",
			description: "Wikipedia (Chlorophyll)"
		}
	},
	title: `Welcome to our homepage!`,
	content: `We are the Queen's College Science Association, a club dedicated to education of students
	on miscellaneous scientific topics. Although our specialisation is Chemistry, we also strive to
	connect it with other disciplines of science, such as Physics and Biology.`,
},
{
	headerImage: {
		href: HorseshoeCrabImg,
		width: 250,
		source: {
			url: "https://commons.wikimedia.org/wiki/File:Limulus.jpg",
			description: "Wikipedia (Horseshoe Crab)"
		}
	},
	title: `Horseshoe Crabs`,
	content: `Insert description about horseshoe crabs and the plan.`
}];