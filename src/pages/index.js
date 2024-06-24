import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Button, Section, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
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
			<Override slot="SectionContent" display="flex" height="400px" sm-width="auto" />
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
				lg-left="500px"
				md-width="200px"
				md-height="140px"
				md-left="430px"
				md-top="10px"
				sm-width="120px"
				sm-height="50px"
				sm-left="350px"
			>
				<Image
					src="https://uploads.quarkly.io/665535898e2e8e00217c24fe/images/istockphoto-637332860-612x612.jpg?v=2024-06-24T19:15:52.031Z"
					display="block"
					position="relative"
					top="15px"
					right="15px"
					height="200px"
					md-width="200px"
					md-height="150px"
					md-left="-20px"
					md-bottom="-20px"
					sm-width="120px"
					sm-height="120px"
					sm-left="-10px"
					sm-top={0}
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
				md-font="normal 500 34px/1.2 --fontFamily-sans"
				md-width="300px"
				md-height="auto"
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
					md-left="-20px"
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
					md-left="-75px"
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
			lg-width="auto"
			lg-height="auto"
			sm-flex-direction="row"
			sm-align-items="center"
			sm-justify-content="center"
			sm-align-content="center"
			sm-text-align="center"
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
				sm-font="normal 400 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				md-font="normal 400 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			>
				Track your sports history with fellow fans and discover new insights into Teams, Players, Merchandise, Travel and More{"\n\n"}
			</Text>
		</Box>
		<Section
			padding="80px 0 80px 0"
			background="#000000"
			quarkly-title="Footer-Deepseats"
			md-padding="40px 0 40px 0"
			border-style="solid"
			display="flex"
			width="auto"
			height="auto"
			max-height="350px"
			lg-display="flex"
			md-max-height="none"
			lg-max-height="none"
			lg-position="relative"
		>
			<Override
				slot="SectionContent"
				height="auto"
				width="auto"
				flex-direction="row"
				justify-content="flex-start"
				flex-wrap="no-wrap"
				align-content="flex-start"
			/>
			<Box
				display="flex"
				lg-width="auto"
				flex-direction="row"
				lg-flex-direction="row"
				justify-content="space-between"
				padding="0 0px 0 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 50px 0px"
				sm-flex-direction="column"
				md-flex-direction="column"
				md-display="grid"
				md-grid-gap="54px"
				lg-height="auto"
				lg-align-items="center"
				lg-justify-content="center"
				lg-align-content="center"
				lg-position="relative"
				lg-left="0x"
				width="auto"
				height="auto"
				md-position="relative"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="30%"
					display="flex"
					lg-width="auto"
					sm-width="100%"
					flex-direction="column"
					padding="0px 50px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					height="250px"
					md-position="relative"
					lg-height="auto"
				>
					<Text margin="0px 0px 0px 0px" height="40px" color="--light" font="700 28px --fontFamily-sans">
						Deep Seats
						<br />
					</Text>
					<Text margin="0px 0px 0px 0px" height="40px" color="--light" font="500 20px --fontFamily-sans">
						Go Deep
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						height="40px"
						color="--light"
						font="500 20px --fontFamily-sans"
						position="relative"
						top="25px"
					>
						Connect with us
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="grid"
						grid-template-columns="repeat(5, 1fr)"
						grid-gap="16px 24px"
						md-align-self="flex-start"
						align-self="flex-start"
						position="relative"
						top="20px"
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
					width="700px"
					md-position="relative"
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
							Partners
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
							Join Our Network
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
							Members
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
							FAQ
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
							Support
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