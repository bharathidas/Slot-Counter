## **Slot Counter**

Counter is a widget that helps you add animated and interactive number displays to your web applications. It's easy to use, works with different types of data, and lets you customize the animations to make your numbers stand out.

## Version 1.1.0 for Mendix Studio Pro 10.24.17

Download `mendix.SlotCounter.mpk` from the [Version1.1.0 release](https://github.com/bharathidas/Slot-Counter/releases/tag/Version1.1.0). The `mendix.SlotCounter.mpk` on `main` is always the latest version (**1.1.0**). For Mendix 9, use the [Version1.0 release](https://github.com/bharathidas/Slot-Counter/releases/tag/Version1.0).

- Rebuilt with `@mendix/pluggable-widgets-tools` 10.16.0 for Studio Pro 10.24.17 (React client) and updated to react-slot-counter 3.0.1.
- **autoAnimationStart** is now honoured. In 1.0 the counter always animated on load, whatever the attribute value.
- **numberSlotClassName** and **numberClassName** are now applied.
- An empty **dummyCharacters** attribute now uses random digits (1.0 showed blank characters while spinning).
- Integer values are shown in full, without exponent notation (for example `123456789012345678901234`).
- While the attribute is loading, the counter keeps showing its last value instead of going blank. Unavailable or empty settings fall back to their defaults.
- The CSS class from the widget's **Class** property is added to the container.
- The design-mode preview in Studio Pro shows the selected attribute, for example `[Amount]`.
- Removed console logging; clearer property descriptions. The package is now about 16 KB.

**Important when upgrading:** if an app sets the **autoAnimationStart** attribute to `false`, the counter will now show the value on load without animating (1.0 ignored the setting). Leave the attribute empty or set it to `true` to keep the old behaviour.

**Upgrading:** replace the `.mpk` in your app's `widgets` folder, press **F4** in Studio Pro, and choose **Update all widgets** if Studio Pro reports that the widget definition has changed. If the running app still shows the old widget, use **App > Clean Deployment Directory** and run the app again.

### Source code

The widget source is in [`slotCounter/`](slotCounter). To build it:

```
cd slotCounter
npm install
npm run release
```

The package is written to `dist/<version>/mendix.SlotCounter.mpk`.

### Features
#### •	Counter Number  
The value to be displayed.
#### •	StartValue  
The initial value to be displayed before the animation starts. It sets the beginning of the slot machine animation. 
#### •	startValueOnce
If set to true, the animation starts from the startValue only for the first render. For subsequent animations, it starts from the last value.
#### •	duration
The duration of the animation in seconds.
#### •	speed
The speed of counter when running.
#### •	Delay
The delay time of each column.
#### •	dummyCharacters
An array of dummy characters to be used in the animation.
#### •	dummyCharacterCount
The number of dummy characters to be displayed in the animation before reaching the target character.
#### •	autoAnimationStart
Determines whether the animation should start automatically when the component is first mounted.
#### •	animateUnchanged
Determines whether to animate only the characters that have changed.
#### •	hasInfiniteList
Determines whether the list should appear as continuous, with the end of the target character seamlessly connected to the beginning.
#### •	sequentialAnimationMode
Determines if the animation should increment or decrement sequentially from the startValue to value instead of random animation.
#### •	useMonospaceWidth
Ensures that all numeric characters occupy the same horizontal space, just like they would in a monospace font.
#### •	direction
Sets the direction of the slot machine animation. Accepted values are ‘bottom-up' and 'top-down'.
#### •	debounceDelay
Specifies the delay in milliseconds for debouncing animations. When the value changes rapidly, it allows the animation to execute smoothly.
#### •	animateOnVisible
Activates the animation when the component is visible in the viewport. rootMargin sets the margin around the viewport for triggering the animation, while triggerOnce determines if the animation should occur only once (true) or every time the component becomes visible (false).
#### •	containerClassName
The class name of container.
#### •	charClassName
The class name of each character.
#### •	separatorClassName
The class name of the separator character (. or ,).
#### •	valueClassName
The class name for the value of the slot, making it possible to customize the styling and visibility of the value.
#### •	numberSlotClassName
The class name for the number slot, allowing you to customize the styling of the number slot.
#### •	numberClassName
The class name for the number, allowing you to customize the styling of the number.

### Dependencies:

• Mendix Studio Pro 10.24.17 (widget 1.1.0). Widget 1.0 (release Version1.0) is for Mendix 9.24.18.

### Demo URL:
https://slotcouter-sandbox.mxapps.io/login.html?profile=Responsive

demo_administrator

Eb42f1yQ93aL

### Issues, suggestions and feature requests
https://github.com/bharathidas/Slot-Counter/issues

### Screenshots:

![Screenshot_1](https://github.com/user-attachments/assets/6a915cbd-4a41-47db-805a-f61484131e5d)

![Screenshot_2](https://github.com/user-attachments/assets/f09bf5fd-f2cc-4445-9da4-331798ac7dcb)

![Screenshot_3](https://github.com/user-attachments/assets/7d42150b-1665-48f5-b370-0e3fcdb82cb7)

![Screenshot_4](https://github.com/user-attachments/assets/2c6be0f7-bfec-4a76-b232-6b49900b32a9)






