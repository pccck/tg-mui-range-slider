import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

var styles = function styles(theme) {
  return {
    thumb: {
      '&$open': {
        '& $offset': {
          transform: 'scale(1) translateY(-10px)'
        }
      }
    },
    open: {},
    offset: _objectSpread({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      left: 'calc(-50% + -4px)',
      transformOrigin: 'bottom center',
      transform: 'scale(0)',
      position: 'absolute'
    }),
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'currentColor',
      transform: 'rotate(-45deg)'
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: 'rotate(45deg)'
    }
  };
};
/**
 * @ignore - internal component.
 */


function ValueLabel(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      index = props.index,
      open = props.open,
      value = props.value,
      valueLabelDisplay = props.valueLabelDisplay,
      valueLabelFormat = props.valueLabelFormat;

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return React.cloneElement(children, {
    className: clsx(children.props.className, _defineProperty({}, classes.open, open || valueLabelDisplay === 'on'), classes.thumb)
  }, React.createElement("span", {
    className: clsx(classes.offset, className)
  }, React.createElement("span", {
    className: classes.circle
  }, React.createElement("span", {
    className: classes.label
  }, typeof valueLabelFormat === 'function' ? valueLabelFormat(value, index) : valueLabelFormat))));
}

export default withStyles(styles, {
  name: 'PrivateValueLabel'
})(ValueLabel);