import PropTypes from 'prop-types';
import * as React from 'react';
import { Transition } from 'react-transition-group';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';
import supportsAnimation from './utils/supportsAnimation';

const addEndListener = (node, done) => {
  if (supportsAnimation(node)) {
    const handleAnimationEnd = () => {
      done();
      node.removeEventListener('animationend', handleAnimationEnd, false);
    };
    node.addEventListener('animationend', handleAnimationEnd, false);
  }
};

const resetAnimation = (node) => {
  if (supportsAnimation(node)) {
    node.style.animation = '0s none';
  }
};

const startAnimation = (
  node,
  { name, duration, timingFunction, delay, direction, iterationCount, fillMode }
) => {
  if (supportsAnimation(node)) {
    node.style.animationName = name;
    node.style.animationDuration = normalizeTime(duration);
    node.style.animationTimingFunction = timingFunction;
    node.style.animationDelay = normalizeTime(delay);
    node.style.animationDirection = direction;
    node.style.animationIterationCount = iterationCount;
    node.style.animationFillMode = fillMode;
    node.style.animationPlayState = 'running';
  }
};

const stopAnimation = (node) => {
  if (supportsAnimation(node)) {
    node.style.animationPlayState = 'paused';
  }
};

const noop = () => {};

const CSSAnimation = ({
  enterAnimation = '',
  enterDelay = 0,
  enterDirection = 'normal',
  enterDuration = 0,
  enterFillMode = 'none',
  enterIterationCount = 1,
  enterTimingFunction = 'ease',
  exitAnimation = '',
  exitDelay = 0,
  exitDirection = 'normal',
  exitDuration = 0,
  exitFillMode = 'none',
  exitIterationCount = 1,
  exitTimingFunction = 'ease',
  onEnter = noop,
  onEntering = noop,
  onEntered = noop,
  onExit = noop,
  onExiting = noop,
  onExited = noop,
  ...rest
}) => (
  <Transition
    {...rest}
    addEndListener={addEndListener}
    onEnter={(node) => {
      resetAnimation(node);
      onEnter(node);
    }}
    onEntering={(node) => {
      startAnimation(node, {
        name: enterAnimation,
        duration: enterDuration,
        timingFunction: enterTimingFunction,
        delay: enterDelay,
        direction: enterDirection,
        iterationCount: enterIterationCount,
        fillMode: enterFillMode,
      });
      onEntering(node);
    }}
    onEntered={(node) => {
      stopAnimation(node);
      onEntered(node);
    }}
    onExit={(node) => {
      resetAnimation(node);
      onExit(node);
    }}
    onExiting={(node) => {
      startAnimation(node, {
        name: exitAnimation,
        duration: exitDuration,
        timingFunction: exitTimingFunction,
        delay: exitDelay,
        direction: exitDirection,
        iterationCount: exitIterationCount,
        fillMode: exitFillMode,
      });
      onExiting(node);
    }}
    onExited={(node) => {
      stopAnimation(node);
      onExited(node);
    }}
  />
);

if (process.env.NODE_ENV !== 'production') {
  CSSAnimation.propTypes = {
    enterAnimation: PropTypes.string,
    enterDelay: timeType,
    enterDirection: directionType,
    enterDuration: timeType,
    enterFillMode: fillModeType,
    enterIterationCount: PropTypes.number,
    enterTimingFunction: PropTypes.string,
    exitAnimation: PropTypes.string,
    exitDelay: timeType,
    exitDirection: directionType,
    exitDuration: timeType,
    exitFillMode: fillModeType,
    exitIterationCount: PropTypes.number,
    exitTimingFunction: PropTypes.string,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
  };
}

export default CSSAnimation;
