webpackHotUpdate("static/development/pages/post/next-js-on-gh-pages.js",{

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
false,

/***/ "./node_modules/babel-runtime/helpers/extends.js":
false,

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/create-element.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  return classNames.reduce(function (styleObject, className) {
    return (0, _objectSpread2.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function (className) {
      return !stylesheet[className];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : undefined;
    var props = useInlineStyles ? (0, _objectSpread2.default)({}, properties, {
      className: className && createClassNameString(className)
    }, {
      style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
    }) : (0, _objectSpread2.default)({}, properties, {
      className: createClassNameString(properties.className)
    });
    var children = childrenCreator(node.children);
    return _react.default.createElement(TagName, (0, _extends2.default)({
      key: key
    }, props), children);
  }
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/highlight.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/highlight.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createElement = _interopRequireDefault(__webpack_require__(/*! ./create-element */ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js"));

var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react.default.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === void 0 ? {
    float: 'left',
    paddingRight: '10px'
  } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;
  return _react.default.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineProps = _ref3.lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className;
  var properties = (typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps) || {};
  properties.className = properties.className ? className.concat(properties.className) : className;
  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }

  return newTree;
}

function wrapLinesInSpan(codeTree, lineProps) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = newTree.length + 1;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        };

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          newTree.push(createLineElement({
            children: _children,
            lineNumber: lineNumber,
            lineProps: lineProps
          }));
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];

          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: 'text',
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            newTree.push(createLineElement({
              children: [newChild],
              lineNumber: lineNumber,
              lineProps: lineProps,
              className: node.properties.className
            }));
          }
        } else {
          newTree.push(createLineElement({
            children: [newChild],
            lineNumber: lineNumber,
            lineProps: lineProps,
            className: node.properties.className
          }));
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      newTree.push(createLineElement({
        children: children,
        lineNumber: newTree.length + 1,
        lineProps: lineProps
      }));
    }
  }

  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;
  return rows.map(function (node, i) {
    return (0, _createElement.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}

function getCodeTree(_ref5) {
  var astGenerator = _ref5.astGenerator,
      language = _ref5.language,
      code = _ref5.code,
      defaultCodeValue = _ref5.defaultCodeValue;

  if (astGenerator.getLanguage) {
    var hasLanguage = language && astGenerator.getLanguage(language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }

  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

function _default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref6) {
    var language = _ref6.language,
        children = _ref6.children,
        _ref6$style = _ref6.style,
        style = _ref6$style === void 0 ? defaultStyle : _ref6$style,
        _ref6$customStyle = _ref6.customStyle,
        customStyle = _ref6$customStyle === void 0 ? {} : _ref6$customStyle,
        _ref6$codeTagProps = _ref6.codeTagProps,
        codeTagProps = _ref6$codeTagProps === void 0 ? {
      style: style['code[class*="language-"]']
    } : _ref6$codeTagProps,
        _ref6$useInlineStyles = _ref6.useInlineStyles,
        useInlineStyles = _ref6$useInlineStyles === void 0 ? true : _ref6$useInlineStyles,
        _ref6$showLineNumbers = _ref6.showLineNumbers,
        showLineNumbers = _ref6$showLineNumbers === void 0 ? false : _ref6$showLineNumbers,
        _ref6$startingLineNum = _ref6.startingLineNumber,
        startingLineNumber = _ref6$startingLineNum === void 0 ? 1 : _ref6$startingLineNum,
        lineNumberContainerStyle = _ref6.lineNumberContainerStyle,
        lineNumberStyle = _ref6.lineNumberStyle,
        wrapLines = _ref6.wrapLines,
        _ref6$lineProps = _ref6.lineProps,
        lineProps = _ref6$lineProps === void 0 ? {} : _ref6$lineProps,
        renderer = _ref6.renderer,
        _ref6$PreTag = _ref6.PreTag,
        PreTag = _ref6$PreTag === void 0 ? 'pre' : _ref6$PreTag,
        _ref6$CodeTag = _ref6.CodeTag,
        CodeTag = _ref6$CodeTag === void 0 ? 'code' : _ref6$CodeTag,
        _ref6$code = _ref6.code,
        code = _ref6$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref6$code,
        astGenerator = _ref6.astGenerator,
        rest = (0, _objectWithoutProperties2.default)(_ref6, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    astGenerator = astGenerator || defaultAstGenerator;
    var lineNumbers = showLineNumbers ? _react.default.createElement(LineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: 'hljs'
    });

    if (!astGenerator) {
      return _react.default.createElement(PreTag, preProps, lineNumbers, _react.default.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined
     */


    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }

    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineProps) : codeTree.value;
    return _react.default.createElement(PreTag, preProps, lineNumbers, _react.default.createElement(CodeTag, codeTagProps, renderer({
      rows: tree,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/prism-light.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/prism-light.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highlight = _interopRequireDefault(__webpack_require__(/*! ./highlight */ "./node_modules/react-syntax-highlighter/dist/cjs/highlight.js"));

var _core = _interopRequireDefault(__webpack_require__(/*! refractor/core */ "./node_modules/refractor/core.js"));

var SyntaxHighlighter = (0, _highlight.default)(_core.default, {});

SyntaxHighlighter.registerLanguage = function (_, language) {
  return _core.default.register(language);
};

var _default = SyntaxHighlighter;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/create-element.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/highlight.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/prism-light.js":
false,

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/extends.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/extends.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectSpread.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/post/next-js-on-gh-pages.js":
/*!*******************************************!*\
  !*** ./pages/post/next-js-on-gh-pages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_prism_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/prism-light */ "./node_modules/react-syntax-highlighter/dist/cjs/prism-light.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_prism_light__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_prism_light__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/languages/prism/bash */ "./node_modules/react-syntax-highlighter/dist/languages/prism/bash.js");
/* harmony import */ var react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism/prism */ "./node_modules/react-syntax-highlighter/dist/styles/prism/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/with-post-props */ "./lib/with-post-props.js");
/* harmony import */ var _components_Bonus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Bonus */ "./components/Bonus.js");
/* harmony import */ var _components_External__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/External */ "./components/External.js");
/* harmony import */ var _components_Inline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Inline */ "./components/Inline.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");
var _jsxFileName = "/Users/smebberson/Developer/scott.mebberson.codes/pages/post/next-js-on-gh-pages.js";









react_syntax_highlighter_dist_cjs_prism_light__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('bash', react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2___default.a);
var first = "$ rm -rf ./out/\n$ git worktree add out gh-pages\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "constrained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "So, you've built an amazing Next.js site. But where do you host it?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "For free, on GitHub pages of course \uD83D\uDE00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "There's always a caveat... this only works if you can statically export your site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#static-html-export",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Read more about it on next.js"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "If you can, then you're good to go."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#usage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Follow the steps"), " to create ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "exportPathMap"), " in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "next.config.js"), " add ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "next build"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "next export"), " scripts to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "package.json"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "You should have an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "./out"), " directory with your entire website in it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "I use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "serve"), " module to test the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "out"), " directory has everything it needs. Make sure you test loading specific URLs to ensure a direct page load works (versus client side navigation)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Now comes the tricky part... setting up GitHub pages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Actually, it's not too confusing unless you want to set up a custom domain. I found their documentation mind boggling; due to the fact there are quite a few different types of GitHub repositories including organisation, user and projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Here is how it's going to work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "We'll exclude the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "out"), " directory from Git. We'll then use a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://git-scm.com/docs/git-worktree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Git Worktree"), " to create a kind of alias between the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "out"), " directory and the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "gh-pages"), " branch."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Okay, you can follow along below:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter_dist_cjs_prism_light__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, first)));
}));

/***/ })

})
//# sourceMappingURL=next-js-on-gh-pages.js.b843d04715aa9e1f0db3.hot-update.js.map