import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
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
		<Components.HeaderDeepseats />
		<Section background="--color-dark" height="450px">
			<Override slot="SectionContent" display="flex" height="400px" />
			<Box
				min-width="100px"
				min-height="100px"
				background="--color-purple"
				width="300px"
				height="550px"
				display="flex"
				position="relative"
				top="0px"
				left="600px"
			>
				<Image
					src="https://uploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19:15:52.031Z"
					display="block"
					position="relative"
					top="15px"
					right="15px"
					height="200px"
					srcSet="https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19%3A15%3A52.031Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Text
				margin="0px 0px 0px 1px"
				background="--color-dark"
				color="--light"
				height="300px"
				width="500px"
				display="grid"
				position="relative"
				top="-150px"
				font="normal 500 48px/1.2 --fontFamily-sans"
				text-align="left"
				justify-items="start"
				justify-content="start"
			>
				Connect with your sports like never before.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-items="center"
				justify-content="space-around"
				width="500px"
				position="relative"
				bottom="75px"
			>
				<Button
					width="125px"
					height="50px"
					display="flex"
					position="relative"
					left="0px"
					align-items="center"
					justify-content="center"
					font="normal 550 18px/1.5 --fontFamily-sans"
					background="--color-indigo"
					type="link"
					href="/signup"
					color="--light"
					text-decoration-line="initial"
				>
					Join Now
				</Button>
				<Button
					width="125px"
					height="50px"
					display="flex"
					position="relative"
					left="0px"
					align-items="center"
					justify-content="center"
					font="normal 550 18px/1.5 --fontFamily-sans"
					background="--color-purple"
					type="link"
					href="/login"
					text-decoration-line="initial"
				>
					Sign In
				</Button>
			</Box>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			background="--color-indigo"
			height="100px"
			position="relative"
			display="flex"
			align-items="center"
			justify-content="center"
		>
			<Text
				margin="0px 0px 0px 0"
				display="flex"
				height="80px"
				color="--lightD2"
				font="normal 400 28px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				justify-content="flex-start"
				flex-wrap="wrap"
				align-items="center"
				align-content="flex-start"
				width="800px"
			>
				Track your sports history with fellow fans and discover new insights into Teams, Players, Merchandise, Travel and More{"\n\n"}
			</Text>
		</Box>
		<Components.FooterDeepseats quarkly-title="Footer-Deepseats" />
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"665535898e2e8e00217c24fc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});