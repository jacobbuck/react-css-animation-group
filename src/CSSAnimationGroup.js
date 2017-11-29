import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSAnimation from './CSSAnimation';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';

const CSSAnimationGroup = ({
  enterAnimation,
  enterDelay,
  enterDirection,
  enterDuration,
  enterFillMode,
  enterIterationCount,
  enterTimingFunction,
  leaveAnimation,
  leaveDelay,
  leaveDirection,
  leaveDuration,
  leaveFillMode,
  leaveIterationCount,
  leaveTimingFunction,
  runOnMount,
  ...restProps
}) => (
  <TransitionGroup
    {...restProps}
    childFactory={child => (
      <CSSAnimationGroupChild
        enterAnimation={{
          delay: normalizeTime(enterDelay),
          direction: enterDirection,
          duration: normalizeTime(enterDuration),
          fillMode: enterFillMode,
          iterationCount: enterIterationCount,
          name: enterAnimation,
          timingFunction: enterTimingFunction,
        }}
        leaveAnimation={{
          delay: normalizeTime(leaveDelay),
          direction: leaveDirection,
          duration: normalizeTime(leaveDuration),
          fillMode: leaveFillMode,
          iterationCount: leaveIterationCount,
          name: leaveAnimation,
          timingFunction: leaveTimingFunction,
        }}
        runOnMount={runOnMount}
      >
        {child}
      </CSSAnimationGroupChild>
    )}
  />
);

CSSAnimationGroup.propTypes = {
  enterAnimation: PropTypes.string,
  enterDelay: timeType,
  enterDirection: directionType,
  enterDuration: timeType,
  enterFillMode: fillModeType,
  enterIterationCount: PropTypes.number,
  enterTimingFunction: PropTypes.string,
  leaveAnimation: PropTypes.string,
  leaveDelay: timeType,
  leaveDirection: directionType,
  leaveDuration: timeType,
  leaveFillMode: fillModeType,
  leaveIterationCount: PropTypes.number,
  leaveTimingFunction: PropTypes.string,
  runOnMount: PropTypes.bool,
};

CSSAnimationGroup.defaultProps = {
  enterAnimation: '',
  enterDelay: 0,
  enterDirection: 'normal',
  enterDuration: 0,
  enterFillMode: 'none',
  enterIterationCount: 1,
  enterTimingFunction: 'ease',
  leaveAnimation: '',
  leaveDelay: 0,
  leaveDirection: 'normal',
  leaveDuration: 0,
  leaveFillMode: 'none',
  leaveIterationCount: 1,
  leaveTimingFunction: 'ease',
  runOnMount: false,
};

export default CSSAnimationGroup;
