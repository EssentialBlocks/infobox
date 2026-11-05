import { useBlockProps } from "@wordpress/block-editor";

import InfoboxContainer from "./components/infobox-save";
import { sanitizeLinkUrl } from "./helpers";

/**
 * Build the save function. `cleanLink` filters the box / button link; the
 * current save uses sanitizeLinkUrl, and a deprecation reuses the same markup
 * with the link left as stored so blocks saved before links were sanitized
 * still validate (see deprecated.js).
 */
export const makeSave = (cleanLink) => function save({ attributes }) {
    const {
        blockId,
        selectedIcon,
        infoboxIcon,
        number = 0,
        media,
        imageUrl,
        imageAlt,
        useFigureTag,
        displayCaption,
        imageCaption,
        captionPreset,
        showPrefix,
        prefixText,
        prefixStyle,
        prefixPosition,
        enableImageLink,
        imageLink,
        enableSubTitle,
        enableDescription,
        infoboxLink,
        linkNewTab,
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
    } = attributes;

    const requiredProps = {
        selectedIcon,
        infoboxIcon,
        blockId,
        number,
        media,
        imageUrl,
        imageAlt,
        useFigureTag,
        displayCaption,
        imageCaption,
        captionPreset,
        showPrefix,
        prefixText,
        prefixStyle,
        prefixPosition,
        enableImageLink,
        imageLink,
        enableSubTitle,
        enableDescription,
        infoboxLink,
        linkNewTab,
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
        cleanLink,
    };

    return (
        <div {...useBlockProps.save()}>
            {isInfoClick ? (
                <a
                    href={infoboxLink ? cleanLink(infoboxLink) : infoboxLink}
                    target={linkNewTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="info-click-link info-wrap-link"
                >
                    <InfoboxContainer requiredProps={requiredProps} />
                </a>
            ) : (
                <InfoboxContainer requiredProps={requiredProps} />
            )}
        </div>
    );
};

export default makeSave(sanitizeLinkUrl);
