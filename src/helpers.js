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

/**
 * True when the prefix / badge is pinned to a corner of the box instead of
 * sitting above the title.
 */
export const isCornerPrefix = (prefixPosition) =>
    !!prefixPosition && prefixPosition !== "inline";

/**
 * Class list for the prefix / badge.
 */
export const prefixClass = (prefixStyle, prefixPosition) =>
    [
        "eb-infobox-prefix",
        prefixStyle === "badge" ? "eb-infobox-prefix-badge" : "",
        isCornerPrefix(prefixPosition)
            ? `eb-infobox-prefix-pos eb-infobox-prefix-${prefixPosition}`
            : "",
    ]
        .filter(Boolean)
        .join(" ");

/**
 * Title, subtitle and description are rich text (HTML). The sidebar edits them
 * as plain text: line breaks become "\n", tags are dropped, entities decoded.
 */
export const richTextToPlain = (html) => {
    if (!html) {
        return "";
    }
    const doc = new window.DOMParser().parseFromString(
        `<body>${String(html).replace(/<br\s*\/?>/gi, "\n")}</body>`,
        "text/html"
    );
    return doc.body.textContent || "";
};

/**
 * Plain text from the sidebar back to rich text: escape it so typed "<" or
 * "&" can never become markup, and keep line breaks as <br>.
 */
export const plainToRichText = (text) =>
    String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");

/**
 * True when rich text holds formatting (bold, italic, links...) that editing
 * it as plain text in the sidebar would remove. Line breaks don't count.
 */
export const hasRichFormatting = (html) =>
    /<(?!br\s*\/?>)[a-z]/i.test(String(html || ""));
