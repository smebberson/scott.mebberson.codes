(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/LRv":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cheat-sheet/docker",function(){var e=n("c0Yq");return{page:e.default||e}}])},DZ1R:function(e,a,n){"use strict";var t=n("dfwq"),i=n("MX0m"),r=n.n(i),c=n("q1tI"),o=n.n(c);a.a=function(e){var a,n=e.backgroundColor,i=void 0===n?"aquamarine":n,c=e.children,s=void 0===c?"":c,l=e.date,m=e.emojis;if("string"!=typeof s)throw Error("PageTitle only accepts string as children.");var d=(a=[]).concat.apply(a,Object(t.default)(s.split(" ").map(function(e,a){return[e,o.a.createElement("br",{key:a})]})));return o.a.createElement("header",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])},o.a.createElement("div",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])+" constrained"},o.a.createElement("time",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])},l),o.a.createElement("p",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])},d),o.a.createElement("h1",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])},d),m&&o.a.createElement("span",{className:"jsx-1936623753 "+r.a.dynamic([["3606806338",[i]]])},m)),o.a.createElement(r.a,{id:"3606806338",dynamic:[i]},["header.__jsx-style-dynamic-selector{background-color:".concat(i,";}")]),o.a.createElement(r.a,{id:"1936623753"},["header.jsx-1936623753{margin-bottom:3em;padding:6em 0px 3em 0px;position:relative;}","time.jsx-1936623753{font-size:.8em;font-weight:600;position:absolute;top:4.2em;}","h1.jsx-1936623753{font-family:'Bungee Shade',sans-serif;font-size:5em;margin:0px;text-align:left;}","p.jsx-1936623753{font-family:'Libre Barcode 128',sans-serif;font-size:2em;line-height:0px;margin:0px;}","span.jsx-1936623753{display:block;margin-top:.5em;}"]))}},c0Yq:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),i=n.n(t),r=n("5Yp1"),c=n("DZ1R"),o=function(e){var a=e.children,n=e.color,t=void 0===n?"#9400D3":n,o=e.title;return i.a.createElement(r.a,null,i.a.createElement(c.a,{backgroundColor:t},o),i.a.createElement("div",{className:"constrained"},a))},s=n("MX0m"),l=n.n(s),m=function(e){var a=e.caption,n=e.code;return i.a.createElement("div",{className:"jsx-3319462436"},i.a.createElement("code",{className:"jsx-3319462436"},n),i.a.createElement("p",{className:"jsx-3319462436"},a),i.a.createElement(l.a,{id:"3319462436"},["code.jsx-3319462436{background:#F8F8FC;display:block;padding:10px;width:100%;}"]))};a.default=function(){return i.a.createElement(o,{title:"Docker"},i.a.createElement(m,{caption:"Remove all dangling images from Docker. Dangling images are left over when you build a new version of an image.",code:"$ docker rmi $(docker images -q --filter dangling=true)"}))}}},[["/LRv",1,0]]]);