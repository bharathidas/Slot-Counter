/**
 * This file was generated from SlotCounter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface SlotCounterContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    counterNumberKey: EditableValue<string | Big>;
    startValueKey?: EditableValue<string | Big>;
    startValueOnceKey?: EditableValue<boolean>;
    durationKey?: EditableValue<Big>;
    speedKey?: EditableValue<Big>;
    delayKey?: EditableValue<Big>;
    dummyCharactersKey?: EditableValue<string>;
    dummyCharacterCountKey?: EditableValue<Big>;
    autoAnimationStartKey?: EditableValue<boolean>;
    animateUnchangedKey?: EditableValue<boolean>;
    hasInfiniteListKey?: EditableValue<boolean>;
    sequentialAnimationModeKey?: EditableValue<boolean>;
    useMonospaceWidthKey?: EditableValue<boolean>;
    directionKey?: EditableValue<string>;
    debounceDelayKey?: EditableValue<Big>;
    animateOnVisibleKey?: EditableValue<boolean>;
    containerClassNameKey?: EditableValue<string>;
    charClassNameKey?: EditableValue<string>;
    separatorClassNameKey?: EditableValue<string>;
    valueClassNameKey?: EditableValue<string>;
    numberSlotClassNameKey?: EditableValue<string>;
    numberClassNameKey?: EditableValue<string>;
}

export interface SlotCounterPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    counterNumberKey: string;
    startValueKey: string;
    startValueOnceKey: string;
    durationKey: string;
    speedKey: string;
    delayKey: string;
    dummyCharactersKey: string;
    dummyCharacterCountKey: string;
    autoAnimationStartKey: string;
    animateUnchangedKey: string;
    hasInfiniteListKey: string;
    sequentialAnimationModeKey: string;
    useMonospaceWidthKey: string;
    directionKey: string;
    debounceDelayKey: string;
    animateOnVisibleKey: string;
    containerClassNameKey: string;
    charClassNameKey: string;
    separatorClassNameKey: string;
    valueClassNameKey: string;
    numberSlotClassNameKey: string;
    numberClassNameKey: string;
}
