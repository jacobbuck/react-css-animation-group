import React from 'react';
import { findDOMNode } from 'react-dom';
import normalizeTime from './utils/normalizeTime';
import { directionType, fillModeType, timeType } from './utils/propTypes';

class CSSAnimation extends React.Component {
  animate(animationType, callback) {
    const node = findDOMNode(this);
    const { props } = thisl;

    /**
     * Bail and immediatly invoke callback if there is no animation defined,
     * there is no node to animate, or browser doesn't support CSS Animation.
     */
    if (!name || !node || !('animationName' in node.style)) {
      callback();
      return;
    }

    if (this.removeListener) {
      this.removeListener();
    }

    node.style.animationName = props[`${animationType}Animation`];
    node.style.animationDuration = normalizeTime(
      props[`${animationType}Duration`]
    );
    node.style.animationTimingFunction =
      props[`${animationType}TimingFunction`];
    node.style.animationDelay = normalizeTime(props[`${animationType}Delay`]);
    node.style.animationDirection = props[`${animationType}Direction`];
    node.style.animationIterationCount =
      props[`${animationType}IterationCount`];
    node.style.animationFillMode = props[`${animationType}FillMode`];
    node.style.animationPlayState = 'running';

    const handleAnimationEnd = event => {
      if (event.animationName === name) {
        removeListener();
        callback();
      }
    };

    const removeListener = () => {
      node.removeEventListener('animationend', handleAnimationEnd);
      delete this.removeListener;
    };

    node.addEventListener('animationend', handleAnimationEnd);

    this.removeListener = removeListener;
  }

  componentWillAppear(done) {
    const { runOnMount } = this.props;

    if (runOnMount) {
      this.animate('enter', done);
    } else {
      done();
    }
  }

  componentWillEnter(done) {
    this.animate('enter', done);
  }

  componentWillLeave(done) {
    this.animate('exit', done);
  }

  componentWillUnmount() {
    if (this.removeListener) {
      this.removeListener();
    }
  }

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
      runOnMount,
      ...restProps
    } = this.props;

    return React.cloneElement(React.Children.only(children), restProps);
  }
}

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

export default CSSAnimation;
