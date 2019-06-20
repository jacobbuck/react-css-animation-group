import PropTypes from 'prop-types';

const directionType = PropTypes.oneOf([
  'normal',
  'reverse',
  'alternate',
  'alternate-reverse',
]);

const fillModeType = PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']);

const timeType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export default {
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
