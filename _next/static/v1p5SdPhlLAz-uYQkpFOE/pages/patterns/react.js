(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{WhDe:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),o=a.n(t),i=a("h1bS"),s=a("aOVY"),r=a("F1wk"),c=a("twr1"),p=a("xnUM"),d=o.a.createElement;e.default=function(){return d(r.a,{color:p.g,title:"React"},d(i.a,null,"Conditional rendering"),d(c.a,{caption:"Conditional rendering when truthy.",code:"\n{ caption &&\n    <p>{caption}</p>\n}\n            ",language:"jsx"}),d(c.a,{caption:"Conditional rendering when falsy.",code:"\n{ caption ||\n    <p>Default caption.</p>\n}\n            ",language:"jsx"}),d(c.a,{caption:"Conditional rendering.",code:"\n{ caption && <p>{caption}</p> ||\n    <p>Default caption.</p>\n}\n            ",language:"jsx"}),d(i.a,null,"JSX"),d(c.a,{caption:d("span",null,"Because you can't use JSX within a string, wrap the strings in ",d(s.a,null,"span")," components."),code:"\n{<><span>Surround any strings using the</span><Inline>span</Inline><span> component.</span></>}\n            ",language:"jsx"}),d(i.a,null,"Dynamic tag names"),d(c.a,{code:"\nimport { Constrained, Expanded } from './components';\n\nconst Wrapper = ({ children, useExpandedView, ...props }) => {\n    const components = {\n        true: Expanded,\n        false: Constrained,\n    };\n\n    const Tag = components[useExpandedView];\n\n    return <Tag {...props}>{children}</Tag>;\n};\n\nexport default () => {\n    const [useExpandedView, setUseExpandedView] = useState(false);\n\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    setUseExpandedView(!useExpandedView);\n                }}\n            >\n                {useExpandedView ? 'Shrink' : 'Expand'}\n            </button>\n            <Wrapper useExpandedView={useExpandedView}>\n                <p>Content to wrap.</p>\n            </Wrapper>\n        </div>\n    );\n};\n\n            ",caption:d("span",null,"Wrap children with a particular parent, based on a condition."),language:"jsx"}))}},"ZI7/":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/react",function(){return a("WhDe")}])},aOVY:function(n,e,a){"use strict";var t=a("wx14"),o=a("Ff2n"),i=a("MX0m"),s=a.n(i),r=a("q1tI"),c=a.n(r).a.createElement;e.a=function(n){var e=n.children,a=Object(o.a)(n,["children"]);return c("code",Object(t.a)({},a,{className:"jsx-3161884056 "+(a&&null!=a.className&&a.className||"")}),e,c(s.a,{id:"3161884056"},["code.jsx-3161884056{color:deepPink;font-family:Menlo,Monaco,monospace,serif;font-size:0.9em;}","code.jsx-3161884056::before{content:'\\`';}","code.jsx-3161884056::after{content:'\\`';}"]))}},h1bS:function(n,e,a){"use strict";var t=a("MX0m"),o=a.n(t),i=a("q1tI"),s=a.n(i),r=s.a.createElement;e.a=function(n){var e=n.children;return r(s.a.Fragment,null,r("h2",{className:"jsx-1083602474 heading"},e),r(o.a,{id:"1083602474"},[".heading.jsx-1083602474{text-transform:uppercase;font-weight:600;}"]))}},twr1:function(n,e,a){"use strict";var t=a("bzaZ");e.a=t.a}},[["ZI7/",0,2,5,1,3,4]]]);