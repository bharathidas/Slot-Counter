import { ReactElement, createElement, useMemo, useRef } from "react";
import type { Big } from "big.js";
import { EditableValue } from "mendix";

import { SlotCounterContainerProps } from "../typings/SlotCounterProps";
import { SlotCounterInput } from "./components/SlotCounterInput";
import "./ui/SlotCounter.css";

type TextOrNumberAttribute = EditableValue<string | Big> | undefined;

/**
 * Converts a String / Integer attribute to the text shown by the counter.
 * Integer values arrive as Big.js objects; toFixed() avoids exponent notation for very large numbers.
 * Returns undefined while the attribute is still loading, "" when it is empty or unavailable.
 */
function attributeText(attribute: TextOrNumberAttribute): string | undefined {
    if (!attribute) {
        return "";
    }
    if (attribute.status === "loading") {
        return undefined;
    }
    if (attribute.status !== "available" || attribute.value === undefined || attribute.value === null) {
        return "";
    }
    const value = attribute.value;
    return typeof value === "string" ? value : value.toFixed();
}

/** Integer attribute -> number, or the default when the attribute is not set / empty / not available. */
function attributeNumber(attribute: EditableValue<Big> | undefined, defaultValue: number): number {
    if (attribute?.status !== "available" || attribute.value === undefined || attribute.value === null) {
        return defaultValue;
    }
    const value = Number(attribute.value);
    return Number.isFinite(value) ? value : defaultValue;
}

function attributeBoolean(attribute: EditableValue<boolean> | undefined, defaultValue: boolean): boolean {
    if (attribute?.status !== "available" || attribute.value === undefined || attribute.value === null) {
        return defaultValue;
    }
    return attribute.value;
}

function attributeString(attribute: EditableValue<string> | undefined): string | undefined {
    return attribute?.status === "available" && attribute.value ? attribute.value : undefined;
}

export function SlotCounter(props: SlotCounterContainerProps): ReactElement {
    // Keep showing the last known number while the attribute is (re)loading instead of flashing an empty counter.
    const lastCounterNumber = useRef("");
    const counterText = attributeText(props.counterNumberKey);
    if (counterText !== undefined) {
        lastCounterNumber.current = counterText;
    }
    const counterNumber = lastCounterNumber.current;

    const autoAnimationStart = attributeBoolean(props.autoAnimationStartKey, true);

    // An empty start value is passed as "" (as in 1.0.0), which makes the counter animate in on first render.
    // With auto start switched off the value is shown directly instead (an empty start value would render a blank counter).
    const startValueText = attributeText(props.startValueKey) || "";
    const startValue = startValueText || autoAnimationStart ? startValueText : undefined;

    const dummyCharactersText = attributeString(props.dummyCharactersKey);
    const dummyCharacters = useMemo(
        () => (dummyCharactersText ? dummyCharactersText.split(",") : undefined),
        [dummyCharactersText]
    );

    const containerClassName = [attributeString(props.containerClassNameKey) ?? "custom-class", props.class]
        .filter(Boolean)
        .join(" ");

    return (
        <SlotCounterInput
            counterNumber={counterNumber}
            startValue={startValue}
            startValueOnce={attributeBoolean(props.startValueOnceKey, false)}
            durationValue={attributeNumber(props.durationKey, 0.7)}
            speedValue={attributeNumber(props.speedKey, 1.4)}
            delayValue={attributeNumber(props.delayKey, 0)}
            dummyCharacters={dummyCharacters}
            dummyCharacterCount={attributeNumber(props.dummyCharacterCountKey, 6)}
            autoAnimationStart={autoAnimationStart}
            animateUnchanged={attributeBoolean(props.animateUnchangedKey, false)}
            hasInfiniteList={attributeBoolean(props.hasInfiniteListKey, false)}
            containerClassName={containerClassName}
            charClassName={attributeString(props.charClassNameKey) ?? "custom-char"}
            separatorClassName={attributeString(props.separatorClassNameKey)}
            valueClassName={attributeString(props.valueClassNameKey)}
            numberSlotClassName={attributeString(props.numberSlotClassNameKey)}
            numberClassName={attributeString(props.numberClassNameKey)}
            sequentialAnimationMode={attributeBoolean(props.sequentialAnimationModeKey, false)}
            useMonospaceWidth={attributeBoolean(props.useMonospaceWidthKey, false)}
            direction={attributeString(props.directionKey) ?? "bottom-up"}
            debounceDelay={attributeNumber(props.debounceDelayKey, 0)}
            animateOnVisible={attributeBoolean(props.animateOnVisibleKey, false)}
        />
    );
}
