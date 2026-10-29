/**
 * True when an icon value is an uploaded SVG file URL rather than an
 * icon-font class such as "far fa-gem" or "dashicons-star-filled".
 */
export const isSvgUrl = (value) =>
    typeof value === "string" && /\.svg(\?|#|$)/i.test(value);

/**
 * Class list for the image wrapper. The caption preset class is only added
 * when a caption is actually shown, so blocks without one keep the exact
 * class they were saved with.
 */
export const imageWrapperClass = (showCaption, captionPreset) =>
    showCaption
        ? `eb-infobox-image-wrapper eb-infobox-caption-${captionPreset || "below"}`
        : "eb-infobox-image-wrapper";

// Schemes that run script when the link is followed. Every other scheme,
// including app links such as whatsapp: or skype:, is kept.
const BLOCKED_SCHEMES = ["javascript", "vbscript", "data"];

/**
 * A link URL that is safe to save as an href, or "" when it uses a scheme
 * that runs script. Browsers ignore whitespace and control characters
 * inside a scheme, so those are removed before the scheme is checked.
 * Any other URL is returned unchanged.
 */
export const sanitizeLinkUrl = (url) => {
    if (typeof url !== "string") {
        return "";
    }
    const scheme = url
        .replace(/[\u0000- \u007f]/g, "")
        .match(/^([a-z][a-z0-9+.-]*):/i);
    if (scheme && BLOCKED_SCHEMES.includes(scheme[1].toLowerCase())) {
        return "";
    }
    return url;
};
