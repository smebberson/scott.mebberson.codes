webpackHotUpdate("static/development/pages/post/next-js-on-gh-pages.js",{

/***/ "./node_modules/react-syntax-highlighter/dist/styles/prism/funky.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/styles/prism/funky.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "black",
        "color": "white",
        "boxShadow": "-.3em 0 0 .3em black, .3em 0 0 .3em black"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": ".4em .8em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>')",
        "backgroundSize": "1em 1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "borderRadius": ".3em",
        "boxShadow": "none",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#aaa"
    },
    "prolog": {
        "color": "#aaa"
    },
    "doctype": {
        "color": "#aaa"
    },
    "cdata": {
        "color": "#aaa"
    },
    "punctuation": {
        "color": "#999"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#0cf"
    },
    "tag": {
        "color": "#0cf"
    },
    "boolean": {
        "color": "#0cf"
    },
    "number": {
        "color": "#0cf"
    },
    "constant": {
        "color": "#0cf"
    },
    "symbol": {
        "color": "#0cf"
    },
    "selector": {
        "color": "yellow"
    },
    "attr-name": {
        "color": "yellow"
    },
    "string": {
        "color": "yellow"
    },
    "char": {
        "color": "yellow"
    },
    "builtin": {
        "color": "yellow"
    },
    "operator": {
        "color": "yellowgreen"
    },
    "entity": {
        "color": "yellowgreen",
        "cursor": "help"
    },
    "url": {
        "color": "yellowgreen"
    },
    ".language-css .token.string": {
        "color": "yellowgreen"
    },
    ".toke.variable": {
        "color": "yellowgreen"
    },
    "inserted": {
        "color": "yellowgreen"
    },
    "atrule": {
        "color": "deeppink"
    },
    "attr-value": {
        "color": "deeppink"
    },
    "keyword": {
        "color": "deeppink"
    },
    "regex": {
        "color": "orange"
    },
    "important": {
        "color": "orange",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "deleted": {
        "color": "red"
    }
};

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/styles/prism/ghcolors.js":
false,

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
/* harmony import */ var react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism/funky */ "./node_modules/react-syntax-highlighter/dist/styles/prism/funky.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/with-post-props */ "./lib/with-post-props.js");
/* harmony import */ var _components_Bonus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Bonus */ "./components/Bonus.js");
/* harmony import */ var _components_External__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/External */ "./components/External.js");
/* harmony import */ var _components_Inline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Inline */ "./components/Inline.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");
var _jsxFileName = "/Users/smebberson/Developer/scott.mebberson.codes/pages/post/next-js-on-gh-pages.js";









react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('bash', react_syntax_highlighter_dist_languages_prism_bash__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "constrained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "So, you've built an amazing Next.js site. But where do you host it?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "For free, on GitHub Pages of course \uD83D\uDE00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "There's always a caveat... this only works if you can statically export your site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#static-html-export",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Read more about it on next.js"), ". If you can, then you're good to go."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#usage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Follow the steps"), " to create ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "exportPathMap"), " in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "next.config.js"), " add ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "next build"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "next export"), " scripts to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "package.json"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "All done? You should now have an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "./out"), " directory with your entire website in it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "I use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "serve"), " module to test the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "out"), " directory has everything it needs. Make sure you test loading specific URLs to ensure a direct page load works (versus client side navigation)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Now comes the tricky part... setting up GitHub Pages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Here is how it's going to work:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Next.js will produce a static version of the site in the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "out"), " directory."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "We'll alias the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "out"), " directory to a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "gh-pages"), " branch."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "We'll then push the contents of the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "gh-pages"), " to GitHub to update the site.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "The following will only work if you're intending to use a user or organisation pages site, or a project pages site with a custom domain. If you intend on using a project pages site with the standard GitHub domain (i.e. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "https://\\", '{', "username", '}', ".github.com/", '{', "reponame", '}'), ") then there are a few extra steps to complete."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Okay, let's get started by preparing the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "out"), " directory:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "# Remove files from the out directory\n$ rm -rf ./out/\n\n# Exclude the out directory from Git\n$ echo \"out/\" >> .gitignore\n$ git add .\n$ git commit -m \"Ignore the out directory.\"\n\n# Create an orphan branch named gh-pages\n$ git checkout --orphan gh-pages\n\n# Remove all staged files\n$ git rm -rf .\n\n# Create an empty commit (remember this is the gh-page branch)\n$ git add .\n$ git commit --allow-empty -m \"Initial empty branch\"\n\n# Push the branch\n$ git push origin gh-pages\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Now we can create the Git worktree:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "# Go back to master\n$ git checkout master\n\n# Create the Git Worktree\n$ git worktree add out gh-pages\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Let's take a moment here to explore this..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "If you run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "git branch"), " you should be on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "master"), ". Now change into the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "out"), " directory and run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "git branch"), ", you should be on the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "gh-pages"), " branch. So the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "out"), " directory has been directly aliased to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "gh-pages"), " branch. That's kinda neat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Let's setup the out directory ready for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "gh-pages"), ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "# Add a .nojekyll file to out\ntouch ./out/.nojekyll\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "With the hard part out of the way \uD83D\uDE05, do the following every time you want to deploy a new version of your site:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_funky__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "# Build and generate an export\n$ yarn build\n$ yarn export\n\n# Push the updated site to GitHub pages\n$ cd ./out\n$ git add .\n$ git commit -m \"Deploy to gh-pages \uD83D\uDE80\"\n$ git push origin gh-pages\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Now you'll need to setup GitHub Pages. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "GitHub have a guide for configuring a publishing source for GitHub pages"), ", you should be able to follow that. They also have ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "a guide for setting up a custom domain"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "...\u2615\uFE0F\u2615\uFE0F... \u2615\uFE0F\uFE0F\uFE0F?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "And hey presto, your Next.js site should be super zippy \uD83D\uDE80 on the GitHub Pages platform.")));
}));

/***/ })

})
//# sourceMappingURL=next-js-on-gh-pages.js.cb221c2199b6cb1df43e.hot-update.js.map