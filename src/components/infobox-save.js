import { RichText } from "@wordpress/block-editor";
import { isSvgUrl, imageWrapperClass, sanitizeLinkUrl } from "../helpers";
const { EBDisplayIcon } = window.EBInfoboxControls;
export default function InfoboxContainer({ requiredProps }) {
    const {
        blockId,
        infoboxIcon,
        media,
        number,
        imageUrl,
        imageAlt,
        useFigureTag,
        displayCaption,
        imageCaption,
        captionPreset,
        enableImageLink,
        imageLink,
        infoboxLink,
        linkNewTab,
        enableSubTitle,
        enableDescription,
        enableButton,
        isInfoClick,
        buttonText,
        title,
        subTitle,
        description,
        titleTag,
        subTitleTag,
        btnEffect,
        classHook,
    } = requiredProps;

    // With every image extra off this renders exactly the pre-existing
    // markup, so older saved blocks still validate.
    const ImageWrapperTag = useFigureTag ? "figure" : "div";
    const CaptionTag = useFigureTag ? "figcaption" : "div";
    const showCaption = displayCaption && imageCaption;
    const safeImageLink = enableImageLink ? sanitizeLinkUrl(imageLink) : "";
    const image = (
        <img className="eb-infobox-image" src={imageUrl} alt={imageAlt} />
    );

    return (
        <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
            <div className={`${blockId} eb-infobox-wrapper`}>
                <div className="infobox-wrapper-inner">
                    {media === "icon" ? (
                        <div className="icon-img-wrapper">
                            <div className="eb-icon number-or-icon">
                                {isSvgUrl(infoboxIcon) ? (
                                    <img
                                        className="eb-infobox-icon-data-selector eb-infobox-svg-icon"
                                        src={infoboxIcon}
                                        alt=""
                                    />
                                ) : (
                                    <EBDisplayIcon icon={infoboxIcon} className={`eb-infobox-icon-data-selector`} />
                                )}
                            </div>
                        </div>
                    ) : null}

                    {media === "number" ? (
                        <div className="icon-img-wrapper">
                            <div className="eb-infobox-num-wrapper number-or-icon">
                                <span className="eb-infobox-number">
                                    {number}
                                </span>
                            </div>
                        </div>
                    ) : null}

                    {media === "image" ? (
                        <div className="icon-img-wrapper">
                            <ImageWrapperTag
                                className={imageWrapperClass(
                                    showCaption,
                                    captionPreset
                                )}
                            >
                                {/* No nested link when the whole infobox is already one */}
                                {safeImageLink && !isInfoClick ? (
                                    <a
                                        href={safeImageLink}
                                        className="eb-infobox-image-link"
                                    >
                                        {image}
                                    </a>
                                ) : (
                                    image
                                )}
                                {showCaption ? (
                                    <CaptionTag className="eb-infobox-image-caption">
                                        {imageCaption}
                                    </CaptionTag>
                                ) : null}
                            </ImageWrapperTag>
                        </div>
                    ) : null}

                    <div className="contents-wrapper">
                        <RichText.Content
                            tagName={titleTag}
                            className="title"
                            value={title}
                        />

                        {enableSubTitle ? (
                            <RichText.Content
                                tagName={subTitleTag}
                                className="subtitle"
                                value={subTitle}
                            />
                        ) : null}

                        {enableDescription ? (
                            <RichText.Content
                                tagName="p"
                                className="description"
                                value={description}
                            />
                        ) : null}

                        {enableButton && !isInfoClick ? (
                            <div className="eb-infobox-btn-wrapper">
                                <a
                                    href={infoboxLink}
                                    target={linkNewTab ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className={`infobox-btn  ${btnEffect || " "
                                        }`}
                                >
                                    {buttonText}
                                </a>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
