webpackHotUpdate("static/development/pages/post/next-js-on-gh-pages.js",{

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
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
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









react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('bash', react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2___default.a);
var setupOut = "$ rm -rf ./out/\n$ echo \"out/\" >> .gitignore\n$ git worktree add out gh-pages\n$ git add .\n$ git commit -m \"Ignore the out directory.\"\n";
var setupGitWorkTree = "$ git worktree add out gh-pages";
var updateGhPages = "$ yarn build\n$ yarn export\n$ cd ./out\n$ git add .\n$ git commit -m \"Deploy to gh-pages\"\n$ git push origin gh-pages\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "constrained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "So, you've built an amazing Next.js site. But where do you host it?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "For free, on GitHub pages of course \uD83D\uDE00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "There's always a caveat... this only works if you can statically export your site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#static-html-export",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Read more about it on next.js"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "If you can, then you're good to go."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#usage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Follow the steps"), " to create ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "exportPathMap"), " in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "next.config.js"), " add ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "next build"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "next export"), " scripts to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "package.json"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "You should have an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "./out"), " directory with your entire website in it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "I use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "serve"), " module to test the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "out"), " directory has everything it needs. Make sure you test loading specific URLs to ensure a direct page load works (versus client side navigation)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Now comes the tricky part... setting up GitHub pages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Actually, it's not too confusing unless you want to set up a custom domain. I found their documentation mind boggling; due to the fact there are quite a few different types of GitHub repositories including organisation, user and projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Here is how it's going to work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "We'll exclude the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "out"), " directory from Git. We'll then use a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://git-scm.com/docs/git-worktree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Git Worktree"), " to create a kind of alias between the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "out"), " directory and the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "gh-pages"), " branch."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Okay, let's get started by clearing the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "out"), " directory:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, setupOut), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Now we can create the Git worktree:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, setupGitWorkTree), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Let's take a closer look here..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "If you run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "git branch"), " you should be on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "master"), ". Now change into the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "out"), " directory and run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "git branch"), ", you should be on the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "gh-pages"), " branch. So the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "out"), " directory has been directly aliased to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "gh-pages"), " directory. That's kinda neat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Do the following every time you want to deploy a new version of the site:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, updateGhPages)));
}));

/***/ })

})
//# sourceMappingURL=next-js-on-gh-pages.js.36d81e9ef4a5f540d031.hot-update.js.map