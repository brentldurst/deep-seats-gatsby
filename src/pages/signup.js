import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Input, Box, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { GiFairyWings } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"signup"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			sm-padding="8px 0 8px 0"
			quarkly-title="Header-4"
			border-color="#000000"
			background="#000000"
			height="auto"
			width="auto"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				height="auto"
				background="#000000"
			/>
			<Link
				href="/index"
				color="#ffffff"
				font="normal 700 32px/1.2 --fontFamily-sansTrebuchet"
				target="_blank"
				link-text-decoration-line="initial"
			>
				Deep Seats
			</Link>
		</Section>
		<Section
			padding="160px 0 170px 0"
			md-padding="80px 0 90px 0"
			quarkly-title="Hero-8"
			background="#000000"
			display="grid"
			border-color="#b91010"
			position="relative"
			height="auto"
			width="auto"
		>
			<Override
				slot="SectionContent"
				position="relative"
				top="-250px"
				bottom="500px"
				height="600px"
				font="20px sans-serif"
				align-self="start"
			/>
			<Text
				margin="0px 0px 20px 100px"
				font="normal 700 48px/1.2 --fontFamily-sansTrebuchet"
				sm-font="normal 700 42px/1.2 --fontFamily-sans"
				padding="0px 0px 0px 0px"
				color="--light"
				lg-padding="0px 0 0px 0"
				width="50% content-box"
				display="block"
				align-items="flex-start"
				justify-content="flex-start"
				align-content="center"
				max-width="50%"
				flex-direction="column"
				flex-wrap="wrap"
				text-align="left"
				position="relative"
				top="200px"
			>
				Signup
			</Text>
			<Text
				margin="0px 0px 0px 100px"
				flex="0 1 auto"
				align-self="flex-start"
				display="flex"
				height="100px"
				color="--light"
				font="normal 200 20px/1.5 --fontFamily-sans"
				width="600px"
				position="relative"
				top="200px"
				order="1"
			>
				Some fields are optional but the more we know about your history and background, the more insights we can give you such as which players share your birthday, or went to your high school or college.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				position="relative"
				top="250px"
				height="800px"
				order="1"
			>
				<Input
					display="flex"
					placeholder-color="LightGray"
					background="white"
					position="relative"
					left="200px"
					top="10px"
					flex-direction="row"
				/>
				<Input
					display="flex"
					placeholder-color="LightGray"
					background="white"
					position="relative"
					left="200px"
					top="30px"
					flex-direction="row"
					width="600px"
				/>
				<Text
					margin="0px 0px 0px 75px"
					height="30px"
					width="125px"
					position="relative"
					top="-67px"
					color="--light"
					text-align="left"
					font="22px sans-serif"
					display="flex"
					left="-10px"
				>
					First Name
				</Text>
				<Text
					margin="0px 0px 0px 75px"
					height="30px"
					width="125px"
					position="relative"
					top="-38px"
					color="--light"
					text-align="left"
					font="22px sans-serif"
					display="flex"
					left="-10px"
				>
					Address 1
				</Text>
				<Text
					margin="0px 0px 0px 75px"
					height="30px"
					width="125px"
					position="relative"
					top="-125px"
					color="--light"
					text-align="left"
					font="22px sans-serif"
					display="flex"
					left="400px"
				>
					Last Name
				</Text>
				<Input
					display="block"
					placeholder-color="LightGray"
					background="white"
					position="relative"
					left="600px"
					top="-160px"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			background="#000000"
			quarkly-title="Footer-11"
			md-padding="40px 0 40px 0"
			border-style="solid"
			width="auto"
			height="auto"
		>
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="row"
				justify-content="space-between"
				width="100%"
				padding="0 0px 0 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 50px 0px"
				sm-flex-direction="column"
				md-flex-direction="column"
				md-display="grid"
				md-grid-gap="54px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="30%"
					display="flex"
					lg-width="50%"
					sm-width="100%"
					flex-direction="column"
					padding="0px 50px 0px 0px"
					sm-margin="0px 0px 0px 0px"
				>
					<LinkBox
						justify-content="center"
						border-radius="100%"
						width="36px"
						height="36px"
						align-items="center"
						display="flex"
						href="#"
					>
						<Icon
							category="gi"
							icon={GiFairyWings}
							color="#6d32ec"
							size="37px"
							margin="0px 0px 0 0px"
						/>
					</LinkBox>
					<Text
						margin="40px 0px 35px 0px"
						font="--base"
						color="#c3c8d0"
						sm-text-align="left"
						sm-margin="25px 0px 20px 0px"
					>
						It is the best way to improve your professional skills and become more valued
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="grid"
						grid-template-columns="repeat(5, 1fr)"
						grid-gap="16px 24px"
						md-align-self="flex-start"
						align-self="flex-start"
					>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaFacebook}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaInstagram}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaTwitterSquare}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaGithub}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaYoutube}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="36px 34px"
					lg-align-items="start"
					md-grid-template-columns="repeat(4, 1fr)"
					md-grid-gap="36px 34px"
					sm-grid-gap="36px 34px"
					sm-grid-template-columns="repeat(2, 1fr)"
				>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Solution
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Marketing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Analytics
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Commerce
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Insights
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Support
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Pricing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Documentation
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Guides
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							API status
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Company
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							About
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Blog
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Jobs
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Press
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Partners
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Legal
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Claim
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Privacy
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Terms
						</Link>
					</Box>
				</Box>
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