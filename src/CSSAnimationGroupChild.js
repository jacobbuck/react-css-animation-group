import PropTypes from "prop-types";
import React from "react";
import { findDOMNode } from "react-dom";

class CSSAnimationGroupChild extends React.Component {
  animate(animation, callback) {
    const node = findDOMNode(this);

    // Bail if node doesn't exist, or browser doesn't support CSS Animation
    if (!node || !node.style.hasOwnProperty("animationName")) {
      callback();
      return;
    }

    // Pause any existing animations
    node.style.animationPlayState = "paused";

    // Set new animation
    node.style.animationName = animation.name;
    node.style.animationDelay = animation.delay;
    node.style.animationDirection = animation.direction;
    node.style.animationDuration = animation.duration;
    node.style.animationFillMode = animation.fillMode;
    node.style.animationIterationCount = animation.iterationCount;
    node.style.animationTimingFunction = animation.timingFunction;
    node.style.animationPlayState = "running";

    const animationEnd = event => {
      if (event.animationName === animation.name) {
        callback();
        node.removeEventListener("animationend", animationEnd);
      }
    };

    // Call callback on animationend event, and only listen once.
    node.addEventListener("animationend", animationEnd);
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
