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
