import PropTypes from 'prop-types';
import React from 'react';
import Transition from 'react-transition-group/Transition';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';

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

  const onEnter = node => {
    if ('animationName' in node.style) {
      node.style.animation = '0s none';
    }

    if (onEnter) {
      onEnter(node);
    }
  };

  const onEntering = node => {
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

  const onEntered = node => {
    if ('animationName' in node.style) {
      node.style.animationPlayState = 'paused';
    }

    if (onEntered) {
      onEntered(node);
    }
  };

  const onExit = node => {
    if ('animationName' in node.style) {
      node.style.animation = '0s none';
    }

    if (onExit) {
      onExit(node);
    }
  };

  const onExiting = node => {
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

  const onExited = node => {
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
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    />
  );
};

CSSAnimation.defaultProps = {
  enterAnimation: '',
  enterDelay: 0,
  enterDirection: 'normal',
  enterDuration: 0,
  enterFillMode: 'none',
  enterIterationCount: 1,
  enterTimingFunction: 'ease',
  exitAnimation: '',
  exitDelay: 0,
  exitDirection: 'normal',
  exitDuration: 0,
  exitFillMode: 'none',
  exitIterationCount: 1,
  exitTimingFunction: 'ease',
};

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
};

export default CSSAnimation;
