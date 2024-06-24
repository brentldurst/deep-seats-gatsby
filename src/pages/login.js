import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Input, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"login"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderDeepseats height="150px" width="auto" />
		<Box min-width="100px" min-height="15px" background="--color-indigo" />
		<Section
			height="800px"
			background="--color-dark"
			color="#d20c0c"
			display="flex"
			grid-template-rows="repeat(auto-fill, 100px)"
			grid-auto-flow="column"
			grid-auto-columns="inherit"
		>
			<Override
				slot="SectionContent"
				align-self="auto"
				display="flex"
				justify-content="flex-start"
				align-items="center"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				width="800px"
				height="200px"
				display="grid"
				align-content="start"
				position="relative"
				flex-direction="row"
				justify-content="start"
				justify-items="center"
				text-align="left"
				overflow-x="visible"
				overflow-y="visible"
				padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 0px 0px"
					display="grid"
					height="75px"
					justify-content="center"
					color="--light"
					font="normal 500 42px/1.2 --fontFamily-sans"
					text-align="left"
					position="relative"
					left="20px"
					width="700px"
					overflow-x="visible"
					overflow-y="visible"
					padding="0px 0px 0px 0px"
					align-items="center"
					justify-items="start"
					align-content="center"
				>
					Login
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					display="grid"
					height="75px"
					justify-content="center"
					color="--light"
					font="normal 300 28px/1.2 --fontFamily-sans"
					text-align="center"
					position="relative"
					left="20px"
					width="700px"
					align-content="center"
					flex-wrap="no-wrap"
					overflow-x="visible"
					overflow-y="visible"
					padding="0px 0px 0px 0px"
					justify-self="auto"
					order="0"
					align-items="center"
					justify-items="start"
				>
					Join the community to start sharing experiences
					<br />
					{" "}and gain insights
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				height="500px"
				width="1000px"
				display="flex"
				border-color="--color-greyD2"
				order="0"
				flex="0 0 auto"
				position="relative"
				align-items="center"
				justify-content="flex-start"
				flex-wrap="no-wrap"
				align-content="center"
				flex-direction="row"
			>
				<Text
					margin="0px 0px 0px 0px"
					height="24px"
					width="150px"
					font="24px sans-serif"
					color="--light"
					position="relative"
					top="-200px"
					bottom={0}
				>
					Username
				</Text>
				<Input
					display="flex"
					placeholder-color="LightGray"
					background="--color-greyD2"
					type="text"
					name="username"
					border-color="--color-greyD2"
					border-radius="0px"
					border-width="0px"
					height="40px"
					width="300px"
					position="relative"
					top="-150px"
					align-items="flex-start"
					justify-content="flex-start"
					align-content="flex-start"
					left="-150px"
				/>
				<Text
					margin="0px 0px 0px 0px"
					height="24px"
					width="150px"
					font="24px sans-serif"
					color="--light"
					position="relative"
					top="-75px"
					bottom={0}
					right="450px"
				>
					Password
				</Text>
				<Input
					display="flex"
					placeholder-color="LightGray"
					background="--color-greyD2"
					type="text"
					name="username"
					border-color="--color-greyD2"
					border-radius="0px"
					border-width="0px"
					height="40px"
					width="300px"
					position="relative"
					top="-20px"
					align-items="flex-start"
					justify-content="flex-start"
					align-content="flex-start"
					left="-600px"
				/>
			</Box>
		</Section>
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