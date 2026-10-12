/**
 * Icon control with a checkerboard preview, a clear button and an
 * "Icon Library | Upload SVG" action bar.
 *
 * Ported from the newer `controls` icon picker. The pinned `controls`
 * submodule only ships the bare picker, so this wraps it: the library
 * popover is still the submodule's `EBIconPicker`, opened by clicking its
 * `#wipIcon` trigger.
 */
import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";
import { BaseControl, Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

// Styles live in ./icon-picker.scss, pulled in by src/style.scss: webpack
// emits a single dist/style.css, so a second scss import here clashes with it.
import { isSvgUrl } from "../helpers";

const { EBIconPicker } = window.EBInfoboxControls;

export default function InfoboxIconPicker({ label, value, onChange }) {
    const containerRef = useRef(null);
    const isSvg = isSvgUrl(value);

    const openLibrary = () => {
        const trigger = containerRef.current?.querySelector("#wipIcon");
        if (!trigger) {
            return;
        }
        trigger.click();

        // The popover opens on the Dashicon tab; switch to Font Awesome.
        setTimeout(() => {
            const tabs = document.querySelectorAll(
                ".wip-iconpicker-popup .wip-icon-tab"
            );
            if (tabs[1]) {
                tabs[1].click();
            }
        }, 100);
    };

    return (
        <BaseControl className="eb-icon-picker-base" label={label}>
            <div className="ebip__wrap" ref={containerRef}>
                <div
                    className={`ebip__preview${isSvg ? " ebip__preview--svg" : ""}${value ? " ebip__preview--icon" : ""}`}
                >
                    {isSvg && (
                        <div className="ebip__preview__svg_wrap">
                            <img src={value} alt="" />
                        </div>
                    )}

                    {/* Kept in the DOM even for SVG values so its popover can open. */}
                    <EBIconPicker
                        showHeading={false}
                        value={isSvg ? "" : value}
                        onChange={onChange}
                    />

                    <Button
                        className="ebip__clear"
                        icon="trash"
                        label={__("Clear", "essential-blocks")}
                        disabled={!value}
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange("");
                        }}
                    />
                </div>

                <div className="ebip__actions">
                    <Button className="ebip__action" onClick={openLibrary}>
                        {__("Icon Library", "essential-blocks")}
                    </Button>
                    <span className="ebip__divider" aria-hidden="true" />
                    <MediaUploadCheck>
                        <MediaUpload
                            allowedTypes={["image/svg+xml"]}
                            title={__("Select SVG", "essential-blocks")}
                            multiple={false}
                            onSelect={(media) => {
                                if (
                                    media?.mime === "image/svg+xml" ||
                                    isSvgUrl(media?.url)
                                ) {
                                    onChange(media.url);
                                }
                            }}
                            render={({ open }) => (
                                <Button className="ebip__action" onClick={open}>
                                    {__("Upload SVG", "essential-blocks")}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
            </div>
        </BaseControl>
    );
}
