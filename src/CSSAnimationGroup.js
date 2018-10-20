import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSAnimation from './CSSAnimation';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';

class CSSAnimationGroup extends React.Component {
  static propTypes = {
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

  static defaultProps = {
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

  render() {
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
    } = this.props;

    return (
      <TransitionGroup
        {...restProps}
        childFactory={child =>
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
          child => child && <CSSAnimation key={child.key}>{child}</CSSAnimation>
        )}
      </TransitionGroup>
    );
  }
}

export default CSSAnimationGroup;
