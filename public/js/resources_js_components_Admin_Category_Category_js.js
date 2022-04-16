"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Category_Category_js"],{

/***/ "./node_modules/antd/es/_util/hooks/useFlexGapSupport.js":
/*!***************************************************************!*\
  !*** ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styleChecker */ "./node_modules/antd/es/_util/styleChecker.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      flexible = _React$useState2[0],
      setFlexible = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_2__.detectFlexGapSupported)());
  }, []);
  return flexible;
});

/***/ }),

/***/ "./node_modules/antd/es/_util/responsiveObserve.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd/es/_util/responsiveObserve.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsiveArray": () => (/* binding */ responsiveArray),
/* harmony export */   "responsiveMap": () => (/* binding */ responsiveMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, screens), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (responsiveObserve);

/***/ }),

/***/ "./node_modules/antd/es/_util/styleChecker.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/es/_util/styleChecker.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseDocElement": () => (/* binding */ canUseDocElement),
/* harmony export */   "isStyleSupport": () => (/* reexport safe */ rc_util_es_Dom_styleChecker__WEBPACK_IMPORTED_MODULE_1__.isStyleSupport),
/* harmony export */   "detectFlexGapSupported": () => (/* binding */ detectFlexGapSupported)
/* harmony export */ });
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");
/* harmony import */ var rc_util_es_Dom_styleChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/styleChecker */ "./node_modules/rc-util/es/Dom/styleChecker.js");


var canUseDocElement = function canUseDocElement() {
  return (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__["default"])() && window.document.documentElement;
};

var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};

/***/ }),

/***/ "./node_modules/antd/es/col/index.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/es/col/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/antd/es/grid/col.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_grid__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/antd/es/grid/RowContext.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/es/grid/RowContext.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowContext);

/***/ }),

/***/ "./node_modules/antd/es/grid/col.js":
/*!******************************************!*\
  !*** ./node_modules/antd/es/grid/col.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/es/grid/RowContext.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_5__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap,
      supportFlexGap = _React$useContext2.supportFlexGap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sizeClassObj), (_extends2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {}; // Horizontal gutter use padding

  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  } // Vertical gutter use padding when gap not support


  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
Col.displayName = 'Col';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "./node_modules/antd/es/grid/row.js":
/*!******************************************!*\
  !*** ./node_modules/antd/es/grid/row.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/es/grid/RowContext.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/es/_util/type.js");
/* harmony import */ var _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/es/_util/responsiveObserve.js");
/* harmony import */ var _util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/hooks/useFlexGapSupport */ "./node_modules/antd/es/_util/hooks/useFlexGapSupport.js");





var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var RowAligns = (0,_util_type__WEBPACK_IMPORTED_MODULE_6__.tuple)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0,_util_type__WEBPACK_IMPORTED_MODULE_6__.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_7__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var supportFlexGap = (0,_util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var gutterRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(gutter); // ================================== Effect ==================================

  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    var token = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter[0]) === 'object' || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["default"].unsubscribe(token);
    };
  }, []); // ================================== Render ==================================

  var getGutter = function getGutter() {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(g) === 'object') {
        for (var i = 0; i < _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__.responsiveArray.length; i++) {
          var breakpoint = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__.responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(align), align), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // Add gutter related style

  var rowStyle = {};
  var horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gutters, 2);

    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  } // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.


  var _gutters2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gutters, 2),
      gutterH = _gutters2[0],
      gutterV = _gutters2[1];

  var rowContext = react__WEBPACK_IMPORTED_MODULE_4__.useMemo(function () {
    return {
      gutter: [gutterH, gutterV],
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutterH, gutterV, wrap, supportFlexGap]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_RowContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: rowContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
    className: classes,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rowStyle), style),
    ref: ref
  }), children));
});
Row.displayName = 'Row';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./node_modules/antd/es/row/index.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/es/row/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/antd/es/grid/row.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_grid__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/Admin/Category/Category.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/Category/Category.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _config_axiosClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/axiosClient */ "./resources/js/config/axiosClient.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/cjs/react-router-dom */ "./node_modules/react-router-dom/cjs/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Category() {
  var _category$parent;

  var _useParams = (0,react_router_dom_cjs_react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_config_axiosClient__WEBPACK_IMPORTED_MODULE_1__.getRequest)("admin/category/".concat(id)).then(function (res) {
      setCategory(res.data.data);
      setLoading(false);
    });
  }, []);
  return !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutter: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "\xDCst Kategori"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: (_category$parent = category.parent) === null || _category$parent === void 0 ? void 0 : _category$parent.name
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutter: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "Ba\u015Fl\u0131k"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: category.name
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutter: {
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: "S\u0131ra"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "gutter-row",
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: category.order
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/styleChecker.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/styleChecker.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isStyleSupport": () => (/* binding */ isStyleSupport)
/* harmony export */ });
/* harmony import */ var _canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");


var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0,_canUseDom__WEBPACK_IMPORTED_MODULE_0__["default"])() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }

  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};

function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }

  return isStyleNameSupport(styleName);
}

/***/ }),

/***/ "./node_modules/react-router-dom/cjs/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/cjs/react-router-dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var history = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var warning = _interopDefault(__webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js"));
var invariant = _interopDefault(__webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js"));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = history.createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(reactRouter.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(React.Component);

{
  BrowserRouter.propTypes = {
    basename: PropTypes.string,
    children: PropTypes.node,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") ;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = history.createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(reactRouter.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(React.Component);

{
  HashRouter.propTypes = {
    basename: PropTypes.string,
    children: PropTypes.node,
    getUserConfirmation: PropTypes.func,
    hashType: PropTypes.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") ;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? history.createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = React.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/React.createElement("a", props);
});

{
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/React.createElement(reactRouter.__RouterContext.Consumer, null, function (context) {
    !context ?  invariant(false, "You should not use <Link> outside a <Router>")  : void 0;
    var history$1 = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history$1.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = history.createPath(context.location) === history.createPath(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history$1.replace : history$1.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/React.createElement(component, props);
  });
});

{
  var toType = PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]);
  var refType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: PropTypes.func,
    replace: PropTypes.bool,
    target: PropTypes.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = React.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/React.createElement(reactRouter.__RouterContext.Consumer, null, function (context) {
    !context ?  invariant(false, "You should not use <NavLink> outside a <Router>")  : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? reactRouter.matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = _extends({}, style, activeStyle);
    }

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/React.createElement(Link, props);
  });
});

{
  NavLink.displayName = "NavLink";
  var ariaCurrentType = PropTypes.oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = _extends({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    location: PropTypes.object,
    sensitive: PropTypes.bool,
    strict: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
  });
}

Object.defineProperty(exports, "MemoryRouter", ({
  enumerable: true,
  get: function () {
    return reactRouter.MemoryRouter;
  }
}));
Object.defineProperty(exports, "Prompt", ({
  enumerable: true,
  get: function () {
    return reactRouter.Prompt;
  }
}));
Object.defineProperty(exports, "Redirect", ({
  enumerable: true,
  get: function () {
    return reactRouter.Redirect;
  }
}));
Object.defineProperty(exports, "Route", ({
  enumerable: true,
  get: function () {
    return reactRouter.Route;
  }
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return reactRouter.Router;
  }
}));
Object.defineProperty(exports, "StaticRouter", ({
  enumerable: true,
  get: function () {
    return reactRouter.StaticRouter;
  }
}));
Object.defineProperty(exports, "Switch", ({
  enumerable: true,
  get: function () {
    return reactRouter.Switch;
  }
}));
Object.defineProperty(exports, "generatePath", ({
  enumerable: true,
  get: function () {
    return reactRouter.generatePath;
  }
}));
Object.defineProperty(exports, "matchPath", ({
  enumerable: true,
  get: function () {
    return reactRouter.matchPath;
  }
}));
Object.defineProperty(exports, "useHistory", ({
  enumerable: true,
  get: function () {
    return reactRouter.useHistory;
  }
}));
Object.defineProperty(exports, "useLocation", ({
  enumerable: true,
  get: function () {
    return reactRouter.useLocation;
  }
}));
Object.defineProperty(exports, "useParams", ({
  enumerable: true,
  get: function () {
    return reactRouter.useParams;
  }
}));
Object.defineProperty(exports, "useRouteMatch", ({
  enumerable: true,
  get: function () {
    return reactRouter.useRouteMatch;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return reactRouter.withRouter;
  }
}));
exports.BrowserRouter = BrowserRouter;
exports.HashRouter = HashRouter;
exports.Link = Link;
exports.NavLink = NavLink;
//# sourceMappingURL=react-router-dom.js.map


/***/ })

}]);