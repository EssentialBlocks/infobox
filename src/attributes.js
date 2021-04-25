const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},

	// blockMeta is for keeping all the styles
	blockMeta: {
		type: "object",
	},

	// background attributes ⬇
	backgroundType: {
		type: "string",
		default: "fill",
	},
	backgroundSize: {
		type: "string",
	},
	backgroundImageURL: {
		type: "string",
	},
	backgroundColor: {
		type: "string",
	},
	backgroundImageID: {
		type: "number",
	},
	backgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg,#0072ff,#00c6ff)",
	},

	// infobox top head (image/icon/number) control attributes ⬇
	imageOrIcon: {
		type: "string",
		default: "icon",
	},
	iconPosition: {
		type: "string",
		default: "top",
	},
	selectedIcon: {
		source: "attribute",
		selector: ".infobox-icon",
		attribute: "data-icon",
		default: "far fa-sun",
	},
	isClickable: {
		type: "boolean",
		default: false,
	},
	clickableLink: {
		type: "string",
	},
	imageUrl: {
		source: "attribute",
		selector: ".infobox-image-wrapper",
		attribute: "data-image-url",
	},
	imageId: {
		type: "string",
	},

	header: {
		type: "text",
		selector: ".eb-infobox-header",
		default: "This is an info box",
	},
	content: {
		type: "text",
		selector: ".eb-infobox-content",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	flexDirection: {
		eype: "string",
		default: "column",
	},
	order: {
		type: "number",
		default: 0,
	},
	showButton: {
		type: "boolean",
		default: false,
	},
	buttonText: {
		type: "string",
		default: "Click Me",
	},
	imageHeight: {
		type: "number",
		default: 150,
	},
	imageWidth: {
		type: "number",
		default: 150,
	},
	number: {
		type: "number",
		selector: ".infobox-number",
		default: 0,
	},
	headerTag: {
		type: "string",
		default: "h3",
	},
	contentFontSize: {
		type: "number",
	},
	contentColor: {
		type: "string",
	},
	headerColor: {
		type: "string",
	},
	headerTextTransform: {
		type: "string",
		default: "none",
	},
	boxBackground: {
		type: "string",
	},
	numberColor: {
		type: "string",
	},
	numberSize: {
		type: "number",
		default: 36,
	},
	iconSize: {
		type: "number",
	},
	iconColor: {
		type: "string",
	},
	iconBackground: {
		type: "string",
	},
	linkedIconPadding: {
		type: "boolean",
	},
	iconPaddingTop: {
		type: "number",
	},
	iconPaddingRight: {
		type: "number",
	},
	iconPaddingBottom: {
		type: "number",
	},
	iconPaddingLeft: {
		type: "number",
	},
	linkedHeaderPadding: {
		type: "boolean",
	},
	headerPaddingTop: {
		type: "number",
	},
	headerPaddingRight: {
		type: "number",
	},
	headerPaddingBottom: {
		type: "number",
	},
	headerPaddingLeft: {
		type: "number",
	},
	linkedImagePadding: {
		type: "boolean",
		default: false,
	},
	imagePaddingTop: {
		type: "number",
	},
	imagePaddingRight: {
		type: "number",
	},
	imagePaddingBottom: {
		type: "number",
	},
	imagePaddingLeft: {
		type: "number",
	},
	linkedButtonPadding: {
		type: "boolean",
		default: false,
	},
	buttonPaddingTop: {
		type: "number",
		default: 12,
	},
	buttonPaddingRight: {
		type: "number",
		default: 28,
	},
	buttonPaddingBottom: {
		type: "number",
		default: 12,
	},
	buttonPaddingLeft: {
		type: "number",
		default: 28,
	},
	buttonSize: {
		type: "string",
		default: "normal",
	},
	buttonAlign: {
		type: "string",
		default: "center",
	},
	buttonColor: {
		type: "string",
	},
	buttonTextColor: {
		type: "string",
	},

	// margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},

	marginTop: {
		type: "string",
	},
	marginRight: {
		type: "string",
	},
	marginBottom: {
		type: "string",
	},
	marginLeft: {
		type: "string",
	},

	paddingUnit: {
		type: "string",
		default: "px",
	},

	paddingTop: {
		type: "string",
	},
	paddingRight: {
		type: "string",
	},
	paddingBottom: {
		type: "string",
	},
	paddingLeft: {
		type: "string",
	},

	TABmarginUnit: {
		type: "string",
		default: "px",
	},

	TABmarginTop: {
		type: "string",
	},
	TABmarginRight: {
		type: "string",
	},
	TABmarginBottom: {
		type: "string",
	},
	TABmarginLeft: {
		type: "string",
	},

	TABpaddingUnit: {
		type: "string",
		default: "px",
	},

	TABpaddingTop: {
		type: "string",
	},
	TABpaddingRight: {
		type: "string",
	},
	TABpaddingBottom: {
		type: "string",
	},
	TABpaddingLeft: {
		type: "string",
	},

	MOBmarginUnit: {
		type: "string",
		default: "px",
	},

	MOBmarginTop: {
		type: "string",
	},
	MOBmarginRight: {
		type: "string",
	},
	MOBmarginBottom: {
		type: "string",
	},
	MOBmarginLeft: {
		type: "string",
	},

	MOBpaddingUnit: {
		type: "string",
		default: "px",
	},

	MOBpaddingTop: {
		type: "string",
	},
	MOBpaddingRight: {
		type: "string",
	},
	MOBpaddingBottom: {
		type: "string",
	},
	MOBpaddingLeft: {
		type: "string",
	},

	// Border attributes ⬇
	borderWidth: {
		type: "number",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderColor: {
		type: "string",
	},
	borderRadius: {
		type: "number",
	},

	// Shadow attributes ⬇
	shadowColor: {
		type: "string",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	contentSizeUnit: {
		type: "string",
		default: "px",
	},
	iconSizeUnit: {
		type: "string",
		default: "px",
	},

	radiusUnit: {
		type: "string",
		default: "px",
	},
	headerPaddingUnit: {
		type: "string",
		default: "px",
	},
	iconPaddingUnit: {
		type: "string",
		default: "px",
	},
	borderWidthUnit: {
		type: "string",
		default: "px",
	},
	buttonPaddingUnit: {
		type: "string",
		default: "px",
	},
	headerFontFamily: {
		type: "string",
	},
	headerFontSize: {
		type: "number",
	},
	headerSizeUnit: {
		type: "string",
		default: "px",
	},
	headerFontWeight: {
		type: "string",
		default: "normal",
	},
	headerTextDecoration: {
		type: "string",
	},
	headerLetterSpacing: {
		type: "number",
	},
	headerLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	headerLineHeight: {
		type: "number",
	},
	headerLineHeightUnit: {
		type: "string",
		default: "px",
	},
	contentFontFamily: {
		type: "string",
	},
	contentFontWeight: {
		type: "string",
		default: "normal",
	},
	contentTextDecoration: {
		type: "string",
	},
	contentTextTransform: {
		type: "string",
		default: "none",
	},
	contentLetterSpacing: {
		type: "number",
	},
	contentLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
