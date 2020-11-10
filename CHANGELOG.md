# Changelog

## Unreleased

### Added

- Added cleanup to `animationend` event listeners.
- Added source maps to build output.

### Changed

- Refactored internals for less duplication of code.
- Updated devDependencies.
- Updated React import to avoid using default import.

### Removed

- Removed `defaultProps` in favour of default values in object destructuring.

## v2.3.0 - 2020-09-01

### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.
- Added `defaultProps` for all props in `CSSAnimation` and `CSSAnimationGroup` components.

### Changed

- Updated devDependencies.
- Updated `propTypes` to only be defined in non-production environments.

## v2.2.0 - 2020-05-26

### Changed

- Bumped up version of [react-transition-group](https://www.npmjs.com/package/react-transition-group) to v4.4.1.
- Enabled loose mode on '@babel/preset-env' to reduce build output.
- Updated devDependencies.

## v2.1.0 - 2020-04-27

### Added

- Added ES Module build.

### Changed

- Bumped up version of [react-transition-group](https://www.npmjs.com/package/react-transition-group) to v4.3.0.
- Updated devDependencies.

## v2.0.0 - 2019-06-20

### Changed

- **BREAKING** Bumped up version of [react-transition-group](https://www.npmjs.com/package/react-transition-group) to v4.1.1.
- **BREAKING** Requires [react](https://www.npmjs.com/package/react) peerDependency to be v16.6.0 or newer.
- Bumped up version of [prop-types](https://www.npmjs.com/package/prop-types) to v15.7.2.
- Refactored `CSSAnimation` component to function.
- Updated devDependencies.

### Removed

- **BREAKING** Removed `CSSAnimationGroup` as default export.
- Removed [react-dom](https://www.npmjs.com/package/react-dom) peerDependency (again.)

### Fixed

- Added missing propTypes to `CSSAnimation` component.

## v1.2.0 - 2018-10-21

### Changed

- Updated devDependencies.
- Refactored internals.

## v1.1.0 - 2018-04-20

### Changed

- Bumped up version of [prop-types](https://www.npmjs.com/package/prop-types) to v15.6.1.
- Bumped up version of [react-transition-group](https://www.npmjs.com/package/react-transition-group) to v2.3.1.
- Updated `CSSAnimation` component to use `TransitionGroup` `childFactory` prop to pass down latest props.
- Updated devDependencies.

## v1.0.2 - 2017-12-04

### Changed

- Updated devDependencies.

### Fixed

- Fixed a bug where animations sometimes wouldn't play if `enterAnimation` and `exitAnimation` were the same.

## v1.0.1 - 2017-12-01

### Removed

- Removed unused [react-dom](https://www.npmjs.com/package/react-dom) peerDependency.

## v1.0.0 - 2017-12-01

Initial public version! :tada:
