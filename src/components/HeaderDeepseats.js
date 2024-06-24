import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, LinkBox, Box } from "@quarkly/widgets";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"margin": "0px 0px 0px 0px",
	"background": "--color-dark",
	"display": "flex",
	"height": "150px",
	"quarkly-title": "Header-Deepseats"
};
const overrides = {
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"display": "flex",
			"href": "/index",
			"position": "relative",
			"justify-content": "flex-start",
			"top": 0,
			"bottom": 0,
			"width": "200px",
			"height": "150px",
			"left": "50px",
			"align-content": "flex-start",
			"flex-wrap": "no-wrap",
			"align-items": "flex-start",
			"flex-direction": "column",
			"overflow-x": "visible",
			"flex": "0 1 auto",
			"order": "0",
			"align-self": "flex-start",
			"overflow-y": "visible"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0x 0",
			"background": "--color-dark",
			"color": "--light",
			"height": "50px",
			"width": "200px",
			"display": "flex",
			"position": "relative",
			"top": 0,
			"font": "normal 700 32px/1.2 --fontFamily-sans",
			"left": 0,
			"children": "Deep Seats"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0x 0",
			"background": "--color-dark",
			"color": "--light",
			"height": "50px",
			"width": "200px",
			"display": "flex",
			"position": "relative",
			"top": "-30px",
			"font": "normal 400 20px/1.2 --fontFamily-sans",
			"left": 0,
			"flex-direction": "column",
			"align-items": "flex-start",
			"bottom": 0,
			"children": "Go Deep"
		}
	}
};

const HeaderDeepseats = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<LinkBox {...override("linkBox")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</LinkBox>
		{children}
	</Box>;
};

Object.assign(HeaderDeepseats, { ...Box,
	defaultProps,
	overrides
});
export default HeaderDeepseats;