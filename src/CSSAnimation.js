import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group';
import normalizeTime from './utils/normalizeTime';
import defaultProps from './utils/defaultProps';
import propTypes from './utils/propTypes';

const addEndListener = (node, done) => {
  if ('animationName' in node.style) {
    node.addEventListener('animationend', done, false);
  }
};

const CSSAnimation = props => {
  const {
    enterAnimation,
    enterDelay,
    enterDirection,
    enterDuration,
    enterFillMode,
    enterIterationCount,
    enterTimingFunction,
    exitAnimation,
    exitDelay,
    exitDirection,
    exitDuration,
    exitFillMode,
    exitIterationCount,
    exitTimingFunction,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...restProps
  } = props;

  const handleEnter = node => {
    if ('animationName' in node.style) {
      node.style.animation = '0s none';
    }

    if (onEnter) {
      onEnter(node);
    }
  };

  const handleEntering = node => {
    if ('animationName' in node.style) {
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

  const handleEntered = node => {
    if ('animationName' in node.style) {
      node.style.animationPlayState = 'paused';
    }

    if (onEntered) {
      onEntered(node);
    }
  };

  const handleExit = node => {
    if ('animationName' in node.style) {
      node.style.animation = '0s none';
    }

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = node => {
    if ('animationName' in node.style) {
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

  const handleExited = node => {
    if ('animationName' in node.style) {
      node.style.animationPlayState = 'paused';
    }

    if (onExited) {
      onExited(node);
    }
  };

  return (
    <Transition
      {...restProps}
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

CSSAnimation.defaultProps = defaultProps;
CSSAnimation.propTypes = {
  ...propTypes,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
};

export default CSSAnimation;
