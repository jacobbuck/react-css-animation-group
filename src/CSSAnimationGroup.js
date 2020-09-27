import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import CSSAnimation from './CSSAnimation';
import defaultProps from './utils/defaultProps';
import propTypes from './utils/propTypes';

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
    ...propTypes,
    children: PropTypes.node,
  };
}

export default CSSAnimationGroup;
