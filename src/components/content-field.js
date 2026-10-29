/**
 * Sidebar text field for a rich-text attribute (title, subtitle,
 * description). It edits the same attribute as typing on the box, so the two
 * always match. The field is plain text: when the value carries formatting
 * (bold, italic, links, or line breaks in a single-line field) a note
 * explains that editing here removes it.
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
    // A single-line field cannot hold the line breaks (<br>) that Shift+Enter
    // adds on the box, so editing here would drop them too.
    const losesFormatting =
        hasRichFormatting(value) ||
        (!multiline && /<br\s*\/?>/i.test(String(value || "")));

    return (
        <Control
            label={label}
            value={richTextToPlain(value)}
            rows={multiline ? 4 : undefined}
            onChange={(text) => onChange(plainToRichText(text))}
            help={
                losesFormatting
                    ? __(
                          "This text has formatting (bold, italic, links or line breaks). Editing it here removes the formatting; edit it on the box to keep it.",
                          "essential-blocks"
                      )
                    : undefined
            }
        />
    );
}
