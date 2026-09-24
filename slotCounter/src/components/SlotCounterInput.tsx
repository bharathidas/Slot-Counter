import { ReactElement, createElement } from "react";
import SlotCounter from "react-slot-counter";

export type Direction = "bottom-up" | "top-down";

export interface SlotCounterInputProps {
    counterNumber: string | number;
    startValue?: string | number;
    startValueOnce?: boolean;
    durationValue?: number;
    speedValue?: number;
    delayValue?: number;
    dummyCharacters?: string[];
    dummyCharacterCount?: number;
    autoAnimationStart?: boolean;
    animateUnchanged?: boolean;
    hasInfiniteList?: boolean;
    containerClassName?: string;
    charClassName?: string;
    separatorClassName?: string;
    valueClassName?: string;
    numberSlotClassName?: string;
    numberClassName?: string;
    sequentialAnimationMode?: boolean;
    useMonospaceWidth?: boolean;
    direction?: string;
    debounceDelay?: number;
    animateOnVisible?: boolean;
}

/** Only "top-down" switches the direction; anything else (or empty) means "bottom-up". */
export function toDirection(value: string | undefined): Direction {
    return value === "top-down" ? "top-down" : "bottom-up";
}

export function SlotCounterInput(props: SlotCounterInputProps): ReactElement {
    return (
        <SlotCounter
            value={props.counterNumber}
            startValue={props.startValue}
            startValueOnce={props.startValueOnce}
            duration={props.durationValue}
            speed={props.speedValue}
            delay={props.delayValue}
            dummyCharacters={props.dummyCharacters}
            dummyCharacterCount={props.dummyCharacterCount}
            autoAnimationStart={props.autoAnimationStart}
            animateUnchanged={props.animateUnchanged}
            hasInfiniteList={props.hasInfiniteList}
            containerClassName={props.containerClassName}
            charClassName={props.charClassName}
            separatorClassName={props.separatorClassName}
            valueClassName={props.valueClassName}
            numberSlotClassName={props.numberSlotClassName}
            numberClassName={props.numberClassName}
            sequentialAnimationMode={props.sequentialAnimationMode}
            useMonospaceWidth={props.useMonospaceWidth}
            direction={toDirection(props.direction)}
            debounceDelay={props.debounceDelay}
            animateOnVisible={props.animateOnVisible}
        />
    );
}
