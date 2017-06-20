import PropTypes from "prop-types";
import React from "react";
import { findDOMNode } from "react-dom";

class CSSAnimationGroupChild extends React.Component {
  animate(animation, callback) {
    const node = findDOMNode(this);

    /**
     * Bail and immediatly invoke callback if there is no animation defined,
     * there is no node to animate, or browser doesn't support CSS Animation.
     */
    if (!animation.name || !node || !node.style.hasOwnProperty("animation")) {
      callback();
      return;
    }

    if (this.removeListener) {
      this.removeListener();
    }

    node.style.animation = `${animation.name} ${animation.duration} ${animation.timingFunction} ${animation.delay} ${animation.iterationCount} ${animation.direction} ${animation.fillMode} running`;

    const animationEnd = event => {
      if (event.animationName === animation.name) {
        removeListener();
        callback();
      }
    };

    const removeListener => {
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
