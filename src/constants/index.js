import { __ } from "@wordpress/i18n";

export const LAYOUT_TYPES = [
	{ label: __("preset-1"), value: "preset1" },
	{ label: __("preset-2"), value: "preset2" },
	{ label: __("preset-3"), value: "preset3" },
	{ label: __("preset-4"), value: "preset4" },
];

export const MEDIA_TYPES = ["image", "icon", "number", "none"];

export const ICON_IMAGE_BG_TYPES = [
	{ label: "Gradient", value: "gradient" },
	{ label: "Fill", value: "fill" },
];

export const sizeUnitTypes = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];
