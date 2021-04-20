import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="100px 0" sm-padding="40px 0" background="#5463DE">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Components.QuarklycommunityKitAnimation
				trigger="Onload"
				iteration="once"
				animation="Jello"
				timingFunction="ease-in-out"
				delay="2s"
				test={false}
			>
				<Button font="--lead" margin="20px" background="--color-orange">
					Button
				</Button>
			</Components.QuarklycommunityKitAnimation>
		</Section>
		<Components.QuarklycommunityKitCarousel
			slidesProp="4"
			aspectRatio="16:9"
			functionProp="ease-out"
			showHead
			showLink
			showText
			showArrows
			showDots
			durationProp="0.2s"
		>
			<Override slot="Slide Image 3" src="https://images.unsplash.com/photo-1618775132849-52dd1846e5ef?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Slide Image 1" src="https://images.unsplash.com/photo-1618698342260-ae6fafb2620b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Slide Image" src="https://images.unsplash.com/photo-1618762058219-e8928e457b3c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
		</Components.QuarklycommunityKitCarousel>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});