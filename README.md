# react-css-animation-group

Use [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) when a React component enters or leaves the DOM.

Based on [`react-transition-group`](https://github.com/reactjs/react-transition-group).

## Usage

### Example

```jsx
<CSSAnimationGroup
  enterAnimation="bounceIn"
  enterDuration="200ms"
  enterTimingFunction="ease"
  exitAnimation="fadeOut"
  exitDuration="150ms"
  exitTimingFunction="linear"
>
  {children}
</CSSAnimationGroup>
```

### Properties

- `enterAnimation` enter animation name
- `enterDelay` enter animation delay
- `enterDirection` enter animation direction
- `enterDuration` enter animation duration
- `enterFillMode` enter animation fill mode
- `enterIterationCount` enter animation iteration count
- `enterTimingFunction` enter animation timing function
- `exitAnimation` leave animation name
- `exitDelay` leave animation delay
- `exitDirection` leave animation direction
- `exitDuration` leave animation duration
- `exitFillMode` leave animation fill mode
- `exitIterationCount` leave animation iteration count
- `exitTimingFunction` leave animation timing function

Any additional properties will be passed down to `TransitionGroup`.

## Browser support

Works on [browsers with CSS Animation support](https://caniuse.com/#feat=css-animation), otherwise will gracefully degrade.
