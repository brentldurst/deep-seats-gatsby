import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Icon, LinkBox, Box, Link, Section } from "@quarkly/widgets";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
const defaultProps = {
	"padding": "80px 0 80px 0",
	"background": "#000000",
	"quarkly-title": "Footer-11",
	"md-padding": "40px 0 40px 0",
	"border-style": "solid",
	"display": "flex",
	"width": "auto",
	"height": "auto",
	"max-height": "350px"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"lg-width": "100%",
			"flex-direction": "row",
			"lg-flex-direction": "row",
			"justify-content": "space-between",
			"padding": "0 0px 0 0px",
			"md-padding": "0 0px 30px 0px",
			"lg-padding": "0 0px 50px 0px",
			"sm-flex-direction": "column",
			"md-flex-direction": "column",
			"md-display": "grid",
			"md-grid-gap": "54px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"lg-margin": "0px 0px 0px 0px",
			"width": "30%",
			"display": "flex",
			"lg-width": "50%",
			"sm-width": "100%",
			"flex-direction": "column",
			"padding": "0px 50px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"height": "250px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"height": "40px",
			"color": "--light",
			"font": "700 28px --fontFamily-sans",
			"children": <>
				Deep Seats
				<br />
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"height": "40px",
			"color": "--light",
			"font": "500 20px --fontFamily-sans",
			"children": "Go Deep"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"height": "40px",
			"color": "--light",
			"font": "500 20px --fontFamily-sans",
			"position": "relative",
			"top": "25px",
			"children": "Connect with us"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "grid",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"md-align-self": "flex-start",
			"align-self": "flex-start",
			"position": "relative",
			"top": "20px"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebook,
			"size": "24px",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "24px",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitterSquare,
			"size": "24px",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox3": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaYoutube,
			"size": "24px",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"transition": "background-color 1s ease 0s"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "grid",
			"grid-template-columns": "repeat(4, 1fr)",
			"grid-gap": "36px 34px",
			"lg-align-items": "start",
			"md-grid-template-columns": "repeat(4, 1fr)",
			"md-grid-gap": "36px 34px",
			"sm-grid-gap": "36px 34px",
			"sm-grid-template-columns": "repeat(2, 1fr)",
			"width": "700px"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"align-items": "flex-start",
			"lg-align-items": "flex-start",
			"justify-content": "flex-start",
			"display": "grid",
			"lg-flex-direction": "column",
			"lg-margin": "0px 0px 0px 0px",
			"flex-direction": "column",
			"flex-wrap": "wrap",
			"align-content": "start",
			"grid-gap": "8px 0",
			"lg-justify-content": "start"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"children": "Partners"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"border-color": "--color-primary",
			"display": "flex",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"margin": "0px 0 0px 0",
			"lg-border-width": "0px 0px 0px 2px",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Marketing"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"display": "flex",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Analytics"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"display": "flex",
			"children": "Commerce"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"display": "flex",
			"children": "Join Our Network"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"align-items": "flex-start",
			"lg-align-items": "flex-start",
			"justify-content": "flex-start",
			"display": "grid",
			"lg-flex-direction": "column",
			"lg-margin": "0px 0px 0px 0px",
			"flex-direction": "column",
			"flex-wrap": "wrap",
			"align-content": "start",
			"grid-gap": "8px 0",
			"lg-justify-content": "start"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"children": "Members"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"border-color": "--color-primary",
			"display": "flex",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"margin": "0px 0 0px 0",
			"lg-border-width": "0px 0px 0px 2px",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Pricing"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"display": "flex",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Documentation"
		}
	},
	"link6": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"display": "flex",
			"children": "FAQ"
		}
	},
	"link7": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"display": "flex",
			"children": "Support"
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"align-items": "flex-start",
			"lg-align-items": "flex-start",
			"justify-content": "flex-start",
			"display": "grid",
			"lg-flex-direction": "column",
			"lg-margin": "0px 0px 0px 0px",
			"flex-direction": "column",
			"flex-wrap": "wrap",
			"align-content": "start",
			"grid-gap": "8px 0",
			"lg-justify-content": "start"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"children": "Company"
		}
	},
	"link8": {
		"kind": "Link",
		"props": {
			"border-color": "--color-primary",
			"display": "flex",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"margin": "0px 0 0px 0",
			"lg-border-width": "0px 0px 0px 2px",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "About"
		}
	},
	"link9": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"display": "flex",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Blog"
		}
	},
	"link10": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"display": "flex",
			"children": "Press"
		}
	},
	"link11": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"display": "flex",
			"children": "Partners"
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"align-items": "flex-start",
			"lg-align-items": "flex-start",
			"justify-content": "flex-start",
			"display": "grid",
			"lg-flex-direction": "column",
			"lg-margin": "0px 0px 0px 0px",
			"flex-direction": "column",
			"flex-wrap": "wrap",
			"align-content": "start",
			"grid-gap": "8px 0",
			"lg-justify-content": "start"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"children": "Legal"
		}
	},
	"link12": {
		"kind": "Link",
		"props": {
			"border-color": "--color-primary",
			"display": "flex",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"margin": "0px 0 0px 0",
			"lg-border-width": "0px 0px 0px 2px",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Claim"
		}
	},
	"link13": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"display": "flex",
			"href": "#",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "#a78bfa",
			"children": "Privacy"
		}
	},
	"link14": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"hover-color": "#a78bfa",
			"href": "#",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"display": "flex",
			"children": "Terms"
		}
	}
};

const FooterDeepseats = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" height="auto" width="auto" />
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
				<Box {...override("box2")}>
					<LinkBox {...override("linkBox")}>
						<Icon {...override("icon")} />
					</LinkBox>
					<LinkBox {...override("linkBox1")}>
						<Icon {...override("icon1")} />
					</LinkBox>
					<LinkBox {...override("linkBox2")}>
						<Icon {...override("icon2")} />
					</LinkBox>
					<LinkBox {...override("linkBox3")}>
						<Icon {...override("icon3")} />
					</LinkBox>
				</Box>
			</Box>
			<Box {...override("box3")}>
				<Box {...override("box4")}>
					<Text {...override("text3")} />
					<Link {...override("link")} />
					<Link {...override("link1")} />
					<Link {...override("link2")} />
					<Link {...override("link3")} />
				</Box>
				<Box {...override("box5")}>
					<Text {...override("text4")} />
					<Link {...override("link4")} />
					<Link {...override("link5")} />
					<Link {...override("link6")} />
					<Link {...override("link7")} />
				</Box>
				<Box {...override("box6")}>
					<Text {...override("text5")} />
					<Link {...override("link8")} />
					<Link {...override("link9")} />
					<Link {...override("link10")} />
					<Link {...override("link11")} />
				</Box>
				<Box {...override("box7")}>
					<Text {...override("text6")} />
					<Link {...override("link12")} />
					<Link {...override("link13")} />
					<Link {...override("link14")} />
				</Box>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(FooterDeepseats, { ...Section,
	defaultProps,
	overrides
});
export default FooterDeepseats;