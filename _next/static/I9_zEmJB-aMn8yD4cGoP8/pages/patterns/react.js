(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{WhDe:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),r=a.n(t),o=a("h1bS"),s=(a("aOVY"),a("F1wk")),c=a("twr1"),i=a("xnUM"),d=r.a.createElement;e.default=function(){return d(s.a,{color:i.j,title:"React"},d(o.a,null,"Dynamic tag names"),d(c.a,{code:"\nimport { Constrained, Expanded } from './components';\n\nconst Wrapper = ({ children, useExpandedView, ...props }) => {\n    const components = {\n        true: Expanded,\n        false: Constrained,\n    };\n\n    const Tag = components[useExpandedView];\n\n    return <Tag {...props}>{children}</Tag>;\n};\n\nexport default () => {\n    const [useExpandedView, setUseExpandedView] = useState(false);\n\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    setUseExpandedView(!useExpandedView);\n                }}\n            >\n                {useExpandedView ? 'Shrink' : 'Expand'}\n            </button>\n            <Wrapper useExpandedView={useExpandedView}>\n                <p>Content to wrap.</p>\n            </Wrapper>\n        </div>\n    );\n};\n\n            ",caption:d("span",null,"Wrap children with a particular parent, based on a condition."),language:"jsx"}))}},"ZI7/":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/react",function(){return a("WhDe")}])},aOVY:function(n,e,a){"use strict";var t=a("wx14"),r=a("Ff2n"),o=a("MX0m"),s=a.n(o),c=a("q1tI"),i=a.n(c).a.createElement;e.a=function(n){var e=n.children,a=Object(r.a)(n,["children"]);return i("code",Object(t.a)({},a,{className:"jsx-3161884056 "+(a&&null!=a.className&&a.className||"")}),e,i(s.a,{id:"3161884056"},["code.jsx-3161884056{color:deepPink;font-family:Menlo,Monaco,monospace,serif;font-size:0.9em;}","code.jsx-3161884056::before{content:'\\`';}","code.jsx-3161884056::after{content:'\\`';}"]))}},h1bS:function(n,e,a){"use strict";var t=a("MX0m"),r=a.n(t),o=a("q1tI"),s=a.n(o),c=s.a.createElement;e.a=function(n){var e=n.children;return c(s.a.Fragment,null,c("h2",{className:"jsx-1083602474 heading"},e),c(r.a,{id:"1083602474"},[".heading.jsx-1083602474{text-transform:uppercase;font-weight:600;}"]))}},twr1:function(n,e,a){"use strict";var t=a("bzaZ");e.a=t.a}},[["ZI7/",0,2,5,1,3,4]]]);