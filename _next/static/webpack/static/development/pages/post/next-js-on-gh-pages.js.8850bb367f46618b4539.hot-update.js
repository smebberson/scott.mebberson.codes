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
var setupOut = "# Remove files from the out directory\n$ rm -rf ./out/\n\n# Exclude the out directory from Git\n$ echo \"out/\" >> .gitignore\n$ git add .\n$ git commit -m \"Ignore the out directory.\"\n\n# Create an orphan branch named gh-pages\n$ git checkout --orphan gh-pages\n\n# Remove all staged files\n$ git rm -rf .\n\n# Create an empty commit (remember this is the gh-page branch)\n$ git add .\n$ git commit --allow-empty -m \"Initial empty branch\"\n\n# Push the branch\n$ git push origin gh-pages\n";
var setupGitWorkTree = "# Go back to master\n$ git checkout master\n\n# Create the Git Worktree\n$ git worktree add out gh-pages";
var setupGhPages = "# Add a .nojekyll file to out\ntouch ./out/.nojekyll\n";
var updateGhPages = "# Build and generate an export\n$ yarn build\n$ yarn export\n\n# Push the updated site to GitHub pages\n$ cd ./out\n$ git add .\n$ git commit -m \"Deploy to gh-pages \uD83D\uDE80\"\n$ git push origin gh-pages\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_post_props__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "constrained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "So, you've built an amazing Next.js site. But where do you host it?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "For free, on GitHub pages of course \uD83D\uDE00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "There's always a caveat... this only works if you can statically export your site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#static-html-export",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Read more about it on next.js"), ". If you can, then you're good to go."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://nextjs.org/docs/#usage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Follow the steps"), " to create ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "exportPathMap"), " in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "next.config.js"), " add ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "next build"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "next export"), " scripts to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "package.json"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "You should have an ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "./out"), " directory with your entire website in it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "I use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "serve"), " module to test the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "out"), " directory has everything it needs. Make sure you test loading specific URLs to ensure a direct page load works (versus client side navigation)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Now comes the tricky part... setting up GitHub Pages."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Actually, it's not too confusing unless you want to set up a custom domain. I found their documentation mind boggling; due to the fact there are quite a few different types of GitHub repositories including organisation, user and projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Here is how it's going to work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Next.js will produce a static version of the site in the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "out"), " directory."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "We'll alias the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "out"), " directory to a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "gh-pages"), " branch."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "We'll then push the contents of the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "gh-pages"), " to GitHub to update the site.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bonus__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "The following will only work if you're intending to use a user or organisation pages site, or a project pages site with a custom domain. If you intend on using a project pages site with the standard GitHub domain (i.e. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "https://\\", '{', "username", '}', ".github.com/", '{', "reponame", '}'), " then there is an extra a few extra steps to complete)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Okay, let's get started by preparing the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "out"), " directory:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, setupOut), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Now we can create the Git worktree:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, setupGitWorkTree), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Let's take a moment here to explore this..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "If you run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "git branch"), " you should be on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "master"), ". Now change into the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "out"), " directory and run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "git branch"), ", you should be on the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "gh-pages"), " branch. So the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "out"), " directory has been directly aliased to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "gh-pages"), " directory. That's kinda neat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Let's setup the out directory ready for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "gh-pages"), ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, setupGhPages), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Do the following every time you want to deploy a new version of the site:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: "shell",
    style: react_syntax_highlighter_dist_styles_prism_prism__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, updateGhPages), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Now we'll configure GitHub Pages. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "GitHub have a guide for configuring a publishing source for GitHub pages"), ", you should be able to follow that. They also have ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_External__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "a guide for setting up a custom domain"), ".")));
}));

/***/ })

})
//# sourceMappingURL=next-js-on-gh-pages.js.8850bb367f46618b4539.hot-update.js.map