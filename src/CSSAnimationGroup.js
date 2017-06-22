import PropTypes from "prop-types";
import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSAnimationGroupChild from "./CSSAnimationGroupChild";

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
}) =>
  React.createElement(TransitionGroup, {
    ...restProps,
    childFactory: child =>
      React.createElement(
        CSSAnimationGroupChild,
        {
          enterAnimation: {
            delay: enterDelay,
            direction: enterDirection,
            duration: enterDuration,
            fillMode: enterFillMode,
            iterationCount: enterIterationCount,
            name: enterAnimation,
            timingFunction: enterTimingFunction
          },
          leaveAnimation: {
            delay: leaveDelay,
            direction: leaveDirection,
            duration: leaveDuration,
            fillMode: leaveFillMode,
            iterationCount: leaveIterationCount,
            name: leaveAnimation,
            timingFunction: leaveTimingFunction
          },
          runOnMount
        },
        child
      )
  });

const directionType = PropTypes.oneOf([
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse"
]);

const fillModeType = PropTypes.oneOf(["none", "forwards", "backwards", "both"]);

const timeType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

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
  runOnMount: PropTypes.bool
};

CSSAnimationGroup.defaultProps = {
  enterDelay: 0,
  enterDirection: "normal",
  enterDuration: 0,
  enterFillMode: "none",
  enterIterationCount: 1,
  enterTimingFunction: "ease",
  leaveDelay: 0,
  leaveDirection: "normal",
  leaveDuration: 0,
  leaveFillMode: "none",
  leaveIterationCount: 1,
  leaveTimingFunction: "ease",
  runOnMount: false
};

export default CSSAnimationGroup;
