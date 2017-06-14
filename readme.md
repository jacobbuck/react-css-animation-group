# react-css-animation-group

Use CSS Animations when a React component enters or leaves the DOM.

Based on the [`TransitionGroup`](https://github.com/reactjs/react-transition-group/blob/master/README.md#low-level-api-transitiongroup) API.

## Usage

### Example

```jsx
  <CSSAnimationGroup
    enterAnimation="bounceIn"
    enterDuration="200ms"
    enterTimingFunction="ease"
    leaveAnimation="fadeOut"
    leaveDuration="150ms"
    leaveTimingFunction="linear"
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
- `leaveAnimation` leave animation name
- `leaveDelay` leave animation delay
- `leaveDirection` leave animation direction
- `leaveDuration` leave animation duration
- `leaveFillMode` leave animation fill mode
- `leaveIterationCount` leave animation iteration count
- `leaveTimingFunction` leave animation timing function
- `runOnMount` if true, runs the enter animation on mount

Any additional properties will be passed down to `TransitionGroup`.

## Browser support

Works on [browsers with CSS Animation](https://caniuse.com/#feat=css-animation), otherwise will gracefully degrade.
