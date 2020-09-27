import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import CSSAnimation from './CSSAnimation';
import { directionType, fillModeType, timeType } from './utils/propTypes';

const CSSAnimationGroup = ({
  children = null,
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
  ...rest
}) => (
  <TransitionGroup
    {...rest}
    childFactory={(child) =>
      React.cloneElement(child, {
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
      })
    }
  >
    {React.Children.map(
      children,
      (child) => child && <CSSAnimation key={child.key}>{child}</CSSAnimation>
    )}
  </TransitionGroup>
);

if (process.env.NODE_ENV !== 'production') {
  CSSAnimationGroup.propTypes = {
    children: PropTypes.node,
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
}

export default CSSAnimationGroup;
