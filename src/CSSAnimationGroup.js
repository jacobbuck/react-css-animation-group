import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import CSSAnimation from './CSSAnimation';
import defaultProps from './utils/defaultProps';
import propTypes from './utils/propTypes';

const CSSAnimationGroup = (props) => {
  const {
    children,
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
    ...restProps
  } = props;

  return (
    <TransitionGroup
      {...restProps}
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
};

CSSAnimationGroup.defaultProps = defaultProps;

CSSAnimationGroup.propTypes = {
  ...propTypes,
  children: PropTypes.node,
};

export default CSSAnimationGroup;
