import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.is-array";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.reduce";
import "core-js/modules/es.array.some";
import "core-js/modules/es.array.sort";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.parse-int";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { chainPropTypes } from '@material-ui/utils';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { useEventCallback, ownerWindow, useIsFocusVisible, useForkRef } from '@material-ui/core/utils';
import ValueLabel from './ValueLabel';

function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (acc, value, index) {
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.pageX,
          y: touch.pageY
        };
      }
    }

    return false;
  }

  return {
    x: event.pageX,
    y: event.pageY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('e-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step) {
  var nearest = Math.round(value / step) * step;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex(_ref) {
  var values = _ref.values,
      source = _ref.source,
      newValue = _ref.newValue,
      index = _ref.index;

  // Performance shortcut
  if (values[index] === newValue) {
    return source;
  }

  var output = _toConsumableArray(values);

  output[index] = newValue;
  return output;
}

function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef,
      activeIndex = _ref2.activeIndex,
      setActive = _ref2.setActive;

  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector("[data-index=\"".concat(activeIndex, "\"]")).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  'horizontal-reverse': {
    offset: function offset(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};
var defaultMarks = [];

var Identity = function Identity(x) {
  return x;
};

export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: '100%',
      boxSizing: 'content-box',
      padding: '11px 0',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      color: theme.palette.primary.main,
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        cursor: 'default',
        color: theme.palette.grey[400]
      },
      '&$vertical': {
        width: 2,
        height: '100%',
        padding: '0 11px'
      }
    },

    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      '&$vertical': {
        marginBottom: 'auto',
        marginRight: 20
      }
    },

    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the rail element. */
    rail: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      opacity: 0.38,
      '$vertical &': {
        height: '100%',
        width: 2
      }
    },

    /* Styles applied to the track element. */
    track: {
      display: 'block',
      position: 'absolute',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      '$vertical &': {
        width: 2
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      position: 'absolute',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 'none',
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create(['box-shadow'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(fade(theme.palette.primary.main, 0.16)),
        '@media (hover: none)': {
          boxShadow: 'none'
        }
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(fade(theme.palette.primary.main, 0.16))
      },
      '$disabled &': {
        pointerEvents: 'none',
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '$vertical &': {
        marginLeft: -5,
        marginBottom: -6
      },
      '$vertical$disabled &': {
        marginLeft: -3,
        marginBottom: -4
      }
    },

    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},

    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},

    /* Styles applied to the thumb label element. */
    valueLabel: {},

    /* Styles applied to the mark element. */
    mark: {
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: lighten(theme.palette.primary.main, 0.76)
    },

    /* Styles applied to the mark label element. */
    markLabel: _objectSpread({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: 'absolute',
      top: 22,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      '$vertical &': {
        top: 'auto',
        left: 22,
        transform: 'translateY(50%)'
      }
    }),

    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = React.forwardRef(function Slider(props, ref) {
  var _clsx;

  var ariaLabel = props['aria-label'],
      ariaLabelledby = props['aria-labelledby'],
      ariaValuetext = props['aria-valuetext'],
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? defaultMarks : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$ThumbComponent = props.ThumbComponent,
      ThumbComponent = _props$ThumbComponent === void 0 ? 'span' : _props$ThumbComponent,
      valueProp = props.value,
      _props$ValueLabelComp = props.ValueLabelComponent,
      ValueLabelComponent = _props$ValueLabelComp === void 0 ? ValueLabel : _props$ValueLabelComp,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      _props$unsorted = props.unsorted,
      unsorted = _props$unsorted === void 0 ? false : _props$unsorted,
      other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "component", "defaultValue", "disabled", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "step", "ThumbComponent", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat", "unsorted"]);

  var theme = useTheme();

  var _React$useRef = React.useRef(valueProp != null),
      isControlled = _React$useRef.current;

  var touchId = React.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transfered when inversing a range slider.

  var _React$useState = React.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var _React$useState3 = React.useState(-1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _React$useState5 = React.useState(defaultValue),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      valueState = _React$useState6[0],
      setValueState = _React$useState6[1];

  var valueDerived = isControlled ? valueProp : valueState;
  var range = Array.isArray(valueDerived);
  var instanceRef = React.useRef();
  var values = range ? unsorted ? valueDerived : valueDerived.sort(asc) : [valueDerived];
  values = values.map(function (value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? _toConsumableArray(Array(Math.floor((max - min) / step) + 1)).map(function (_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp;
  instanceRef.current = {
    source: valueDerived // Keep track of the input value to leverage immutable state comparison.

  };

  var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState7 = React.useState(-1),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      focusVisible = _React$useState8[0],
      setFocusVisible = _React$useState8[1];

  var sliderRef = React.useRef();
  var handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  var handleRef = useForkRef(ref, handleFocusRef);
  var handleFocus = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));

    if (isFocusVisible(event)) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  var handleBlur = useEventCallback(function () {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }

    setOpen(-1);
  });
  var handleMouseOver = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  var handleMouseLeave = useEventCallback(function () {
    setOpen(-1);
  });
  var handleKeyDown = useEventCallback(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function (mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;

      case 'End':
        newValue = max;
        break;

      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }

        break;

      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }

        break;

      case 'ArrowRight':
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }

        break;

      case 'ArrowLeft':
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }

        break;

      default:
        return;
    }

    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values,
        source: valueDerived,
        newValue: newValue,
        index: index
      });

      if (!unsorted) {
        newValue.sort(asc);
        focusThumb({
          sliderRef: sliderRef,
          activeIndex: newValue.indexOf(previousValue)
        });
      }
    }

    if (!isControlled) {
      setValueState(newValue);
    }

    setFocusVisible(index);

    if (onChange) {
      onChange(event, newValue);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = React.useRef();
  var axis = orientation;

  if (theme.direction === 'rtl' && orientation === 'horizontal') {
    axis += '-reverse';
  }

  var getFingerNewValue = React.useCallback(function (_ref3) {
    var finger = _ref3.finger,
        _ref3$move = _ref3.move,
        move = _ref3$move === void 0 ? false : _ref3$move,
        values2 = _ref3.values,
        source = _ref3.source;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom + ownerWindow(slider).pageYOffset - finger.y) / height;
    } else {
      percent = (finger.x - left - ownerWindow(slider).pageXOffset) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    var newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step);
    } else {
      var marksValues = marks.map(function (mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    var activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source: source,
        newValue: newValue,
        index: activeIndex
      });

      if (!unsorted) {
        newValue.sort(asc);
        activeIndex = newValue.indexOf(previousValue);
      }

      previousIndex.current = activeIndex;
    }

    return {
      newValue: newValue,
      activeIndex: activeIndex
    };
  }, [max, min, axis, range, step, marks, unsorted]);
  var handleTouchMove = useEventCallback(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue = getFingerNewValue({
      finger: finger,
      move: true,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue.newValue,
        activeIndex = _getFingerNewValue.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = useEventCallback(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue2 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue2.newValue;

    setActive(-1);

    if (event.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }

    touchId.current = undefined;
    document.body.removeEventListener('mousemove', handleTouchMove);
    document.body.removeEventListener('mouseup', handleTouchEnd); // eslint-disable-next-line no-use-before-define

    document.body.removeEventListener('mouseenter', handleMouseEnter);
    document.body.removeEventListener('touchmove', handleTouchMove);
    document.body.removeEventListener('touchend', handleTouchEnd);
  });
  var handleMouseEnter = useEventCallback(function (event) {
    // If the slider was being interacted with but the mouse went off the window
    // and then re-entered while unclicked then end the interaction.
    if (event.buttons === 0) {
      handleTouchEnd(event);
    }
  });
  var handleTouchStart = useEventCallback(function (event) {
    // Workaround as Safari has partial support for touchAction: 'none'.
    event.preventDefault();
    var touch = event.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    var finger = trackFinger(event, touchId);

    var _getFingerNewValue3 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue3.newValue,
        activeIndex = _getFingerNewValue3.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }

    document.body.addEventListener('touchmove', handleTouchMove);
    document.body.addEventListener('touchend', handleTouchEnd);
  });
  React.useEffect(function () {
    if (disabled) {
      return function () {};
    }

    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('mousemove', handleTouchMove);
      document.body.removeEventListener('mouseup', handleTouchEnd);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, handleMouseEnter, handleTouchEnd, handleTouchMove, handleTouchStart]);
  var handleMouseDown = useEventCallback(function (event) {
    if (onMouseDown) {
      onMouseDown(event);
    }

    if (disabled) {
      return;
    }

    event.preventDefault();
    var finger = trackFinger(event, touchId);

    var _getFingerNewValue4 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue4.newValue,
        activeIndex = _getFingerNewValue4.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }

    document.body.addEventListener('mousemove', handleTouchMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseup', handleTouchEnd);
  });
  var sortedValues = unsorted ? _toConsumableArray(values).sort(asc) : values;
  var trackOffset = valueToPercent(range ? sortedValues[0] : min, min, max);
  var trackLeap = valueToPercent(sortedValues[sortedValues.length - 1], min, max) - trackOffset;

  var trackStyle = _objectSpread({}, axisProps[axis].offset(trackOffset), {}, axisProps[axis].leap(trackLeap));

  return React.createElement(Component, _extends({
    ref: handleRef,
    className: clsx(classes.root, (_clsx = {}, _defineProperty(_clsx, classes.disabled, disabled), _defineProperty(_clsx, classes.marked, marks.length > 0 && marks.some(function (mark) {
      return mark.label;
    })), _defineProperty(_clsx, classes.vertical, orientation === 'vertical'), _clsx), className),
    onMouseDown: handleMouseDown
  }, other), React.createElement("span", {
    className: classes.rail
  }), React.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), React.createElement("input", {
    value: values.join(','),
    name: name,
    type: "hidden"
  }), marks.map(function (mark) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive = range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0];
    return React.createElement(React.Fragment, {
      key: mark.value
    }, React.createElement("span", {
      style: style,
      className: clsx(classes.mark, _defineProperty({}, classes.markActive, markActive))
    }), React.createElement("span", {
      style: style,
      className: clsx(classes.markLabel, _defineProperty({}, classes.markLabelActive, markActive))
    }, mark.label));
  }), values.map(function (value, index) {
    var _clsx4;

    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return React.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat: valueLabelFormat,
      valueLabelDisplay: valueLabelDisplay,
      className: classes.valueLabel,
      value: value,
      index: index,
      open: open === index || active === index,
      disabled: disabled
    }, React.createElement(ThumbComponent, {
      className: clsx(classes.thumb, (_clsx4 = {}, _defineProperty(_clsx4, classes.active, active === index), _defineProperty(_clsx4, classes.focusVisible, focusVisible === index), _clsx4)),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style: style,
      "data-index": index,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      "aria-valuetext": getAriaValueText ? getAriaValueText(value, index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
Slider.propTypes = {
  /**
   * The label of the slider.
   */
  'aria-label': PropTypes.string,

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': PropTypes.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': chainPropTypes(PropTypes.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext']) {
      return new Error('Material-UI: you need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range input.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format
   * @param {number} index The thumb label's index to format
   */
  getAriaValueText: PropTypes.func,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: PropTypes.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: PropTypes.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback
   * @param {any} value The new value
   */
  onChange: PropTypes.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback
   * @param {any} value The new value
   */
  onChangeCommitted: PropTypes.func,

  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,

  /**
   * The slider orientation.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: PropTypes.number,

  /**
   * The component used to display the value label.
   */
  ThumbComponent: PropTypes.elementType,

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /**
   * The value label componnet.
   */
  ValueLabelComponent: PropTypes.elementType,

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: PropTypes.oneOf(['on', 'auto', 'off']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
export default withStyles(styles, {
  name: 'MuiSlider'
})(Slider);