import PropTypes from "prop-types";

export const directionType = PropTypes.oneOf([
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse"
]);

export const fillModeType = PropTypes.oneOf([
  "none",
  "forwards",
  "backwards",
  "both"
]);

export const timeType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
]);
