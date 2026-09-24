import { ReactElement, createElement } from "react";
import { SlotCounterPreviewProps } from "../typings/SlotCounterProps";

export function preview(props: SlotCounterPreviewProps): ReactElement {
    const caption = props.counterNumberKey ? `[${props.counterNumberKey}]` : "[No attribute selected]";
    return (
        <span className="custom-class">
            <span className="custom-char slotcounter-preview">{caption}</span>
        </span>
    );
}

export function getPreviewCss(): string {
    return require("./ui/SlotCounter.css");
}
