import React from "react";
import { findDOMNode } from "react-dom";

class CSSAnimationGroupChild extends React.Component {
  animate(animation, callback) {
    const {
      delay,
      direction,
      duration,
      fillMode,
      iterationCount,
      name,
      timingFunction,
    } = animation;

    const node = findDOMNode(this);

    /**
     * Bail and immediatly invoke callback if there is no animation defined,
     * there is no node to animate, or browser doesn't support CSS Animation.
     */
    if (!name || !node || !("animation" in node.style)) {
      callback();
      return;
    }

    if (this.removeListener) {
      this.removeListener();
    }

    node.style.animation = `${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} running ${name}`;

    const animationEnd = event => {
      if (event.animationName === name) {
        removeListener();
        callback();
      }
    };

    const removeListener = () => {
      node.removeEventListener("animationend", animationEnd);
      delete this.removeListener;
    };

    node.addEventListener("animationend", animationEnd);

    this.removeListener = removeListener;
  }

  componentWillAppear(done) {
    const { enterAnimation, runOnMount } = this.props;

    if (runOnMount) {
      this.animate(enterAnimation, done);
    } else {
      done();
    }
  }

  componentWillEnter(done) {
    const { enterAnimation } = this.props;

    this.animate(enterAnimation, done);
  }

  componentWillLeave(done) {
    const { leaveAnimation } = this.props;

    this.animate(leaveAnimation, done);
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
      leaveAnimation,
      runOnMount,
      ...restProps
    } = this.props;

    return React.cloneElement(React.Children.only(children), restProps);
  }
}

export default CSSAnimationGroupChild;
