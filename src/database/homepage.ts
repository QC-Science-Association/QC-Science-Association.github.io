import HorseshoeCrabImg from "@/assets/horseshoe-crab.jpg";
import LogoImgBig from "@/assets/logo-big.png";

import { Page } from ".";

Page.content.cards = [{
	headerImage: {
		href: LogoImgBig,
		width: 200
	},
	title: `Welcome to our homepage!`,
	content: `We are the Queen's College Science Association, a club dedicated to education of students on
	miscellaneous scientific topics. Although our specialisation is Chemistry, we also strive to connect it
	with other disciplines of science, such as Physics and Biology, to provide a more complete and fulfilling
	scientific understanding of the universe that we live in.
	<br>
	<br>
	Of course, we have to <b>do something</b> about our goals. That's why we release a new edition of our
	publication, <i>Scientia</i>, biannually. Additionally, we will also hold tons of events this year!`,
},
{
	title: `Events`,
	content: `This year, we will hold quizzes with prizes (!!!), invite ALL OF YOU to write an article about
	a scientific topic and possibly get featured on <i>Scientia</i>, <s>build</s> <b>look after</b> <s>an army</s>
	<b>a culture</b> of horseshoe crabs, host a <i>Rube Goldberg machine</i> designing competition, and possibly
	even invite famous science communicator Dr Fire to come to QC for a demonstration! Stay tuned to our Instagram
	page and this website.`
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
	title: `FEATURE: <u>Horseshoe Crabs</u>`,
	content: `Horseshoe crabs are truly the pinnacle of evolution. Their fossil records date back more than
	480 million years ago, and since then they have changed very little. Due to this, they are often referred
	to as living fossils. It's like if the Trilobites so pervasive in the Cambrian era never went extinct!
	<br>
	Despite their name, they aren't so much crabs as much as they are anything else. In fact, they're more
	closely related to the spider crawling in the corner of your bathroom. And their anatomy shows this- They
	have two primary eyes and many smaller ones, and many pairs of legs. But unlike spiders, they have a
	long "tail" behind their back which enhances their mobility, and a hard shell surrounding their body
	(though much looser than a crab's).
	<br>
	<br>
	Sadly, this majestic species is being endangered by destruction of its habitat by coastline development, and
	their blood is often harvested due to a unique cell, which when broken down can detect bacterial poisons.
	<br>
	<br>
	<b>But before we continue, a word from our sponsors Ocean Park</b>, who have decided to give us a chance to culture
	REAL horseshoe crabs, as part of a conservation project. We have teamed up with many functional groups to
	take care of and promote the project, including making postcards and products featuring horseshoe crabs,
	designing a proper tank for them to live in, and even using TECHNOLOGY (!!!!!) to monitor water quality! We
	hope this event can teach as all more about horseshoe crabs.`
}];