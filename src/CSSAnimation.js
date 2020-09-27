import PropTypes from 'prop-types';
import * as React from 'react';
import { Transition } from 'react-transition-group';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';
import supportsAnimation from './utils/supportsAnimation';

const addEndListener = (node, done) => {
  if (supportsAnimation(node)) {
    node.addEventListener('animationend', done, false);
  }
};

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
  onEnter = null,
  onEntering = null,
  onEntered = null,
  onExit = null,
  onExiting = null,
  onExited = null,
  ...rest
}) => {
  const handleEnter = (node) => {
    if (supportsAnimation(node)) {
      node.style.animation = '0s none';
    }

    if (onEnter) {
      onEnter(node);
    }
  };

  const handleEntering = (node) => {
    if (supportsAnimation(node)) {
      node.style.animationName = enterAnimation;
      node.style.animationDuration = normalizeTime(enterDuration);
      node.style.animationTimingFunction = enterTimingFunction;
      node.style.animationDelay = normalizeTime(enterDelay);
      node.style.animationDirection = enterDirection;
      node.style.animationIterationCount = enterIterationCount;
      node.style.animationFillMode = enterFillMode;
      node.style.animationPlayState = 'running';
    }

    if (onEntering) {
      onEntering(node);
    }
  };

  const handleEntered = (node) => {
    if (supportsAnimation(node)) {
      node.style.animationPlayState = 'paused';
    }

    if (onEntered) {
      onEntered(node);
    }
  };

  const handleExit = (node) => {
    if (supportsAnimation(node)) {
      node.style.animation = '0s none';
    }

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = (node) => {
    if (supportsAnimation(node)) {
      node.style.animationName = exitAnimation;
      node.style.animationDuration = normalizeTime(exitDuration);
      node.style.animationTimingFunction = exitTimingFunction;
      node.style.animationDelay = normalizeTime(exitDelay);
      node.style.animationDirection = exitDirection;
      node.style.animationIterationCount = exitIterationCount;
      node.style.animationFillMode = exitFillMode;
      node.style.animationPlayState = 'running';
    }

    if (onExiting) {
      onExiting(node);
    }
  };

  const handleExited = (node) => {
    if (supportsAnimation(node)) {
      node.style.animationPlayState = 'paused';
    }

    if (onExited) {
      onExited(node);
    }
  };

  return (
    <Transition
      {...rest}
      addEndListener={addEndListener}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
    />
  );
};

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
