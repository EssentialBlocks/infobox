/**
 * Sidebar text field for a rich-text attribute (title, subtitle,
 * description). It edits the same attribute as typing on the box, so the two
 * always match. The field is plain text: when the value carries formatting
 * (bold, italic, links) a note explains that editing here removes it.
 */
import { __ } from "@wordpress/i18n";
import { TextControl, TextareaControl } from "@wordpress/components";

import {
    richTextToPlain,
    plainToRichText,
    hasRichFormatting,
} from "../helpers";

export default function ContentField({ label, value, onChange, multiline }) {
    const Control = multiline ? TextareaControl : TextControl;

    return (
        <Control
            label={label}
            value={richTextToPlain(value)}
            rows={multiline ? 4 : undefined}
            onChange={(text) => onChange(plainToRichText(text))}
            help={
                hasRichFormatting(value)
                    ? __(
                          "This text has formatting (bold, italic or links). Editing it here removes the formatting; edit it on the box to keep it.",
                          "essential-blocks"
                      )
                    : undefined
            }
        />
    );
}
