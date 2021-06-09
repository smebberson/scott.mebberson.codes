(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{WhDe:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),o=a.n(t),s=a("h1bS"),i=a("aOVY"),p=a("F1wk"),r=a("twr1"),c=a("xnUM"),d=o.a.createElement;e.default=function(){return d(p.a,{color:c.g,title:"React"},d(s.a,null,"Conditional rendering"),d(r.a,{caption:"Conditional rendering when truthy.",code:"\n{ caption &&\n    <p>{caption}</p>\n}\n            ",language:"jsx"}),d(r.a,{caption:"Conditional rendering when falsy.",code:"\n{ caption ||\n    <p>Default caption.</p>\n}\n            ",language:"jsx"}),d(r.a,{caption:"Conditional rendering.",code:"\n{ caption && <p>{caption}</p> ||\n    <p>Default caption.</p>\n}\n            ",language:"jsx"}),d(s.a,null,"JSX"),d(r.a,{caption:d("span",null,"Because you can't use JSX within a string, wrap the strings in ",d(i.a,null,"span")," components."),code:"\n{<><span>Surround any strings using the</span><Inline>span</Inline><span> component.</span></>}\n            ",language:"jsx"}),d(r.a,{caption:d("span",null,"Optionally pass props to components."),code:"\nexport default () => {\n    const [fixToTop, setFixToTop] = useState(false);\n    return <Nav { ...(fixToTop && { style: { top: '0px' } }) } />\n}\n            ",language:"jsx"}),d(s.a,null,"Dynamic tag names"),d(r.a,{code:"\nimport { Constrained, Expanded } from './components';\n\nconst Wrapper = ({ children, useExpandedView, ...props }) => {\n    const components = {\n        true: Expanded,\n        false: Constrained,\n    };\n\n    const Tag = components[useExpandedView];\n\n    return <Tag {...props}>{children}</Tag>;\n};\n\nexport default () => {\n    const [useExpandedView, setUseExpandedView] = useState(false);\n\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    setUseExpandedView(!useExpandedView);\n                }}\n            >\n                {useExpandedView ? 'Shrink' : 'Expand'}\n            </button>\n            <Wrapper useExpandedView={useExpandedView}>\n                <p>Content to wrap.</p>\n            </Wrapper>\n        </div>\n    );\n};\n\n            ",caption:d("span",null,"Wrap children with a particular parent, based on a condition."),language:"jsx"}))}},"ZI7/":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/react",function(){return a("WhDe")}])},aOVY:function(n,e,a){"use strict";var t=a("wx14"),o=a("Ff2n"),s=a("MX0m"),i=a.n(s),p=a("q1tI"),r=a.n(p).a.createElement;e.a=function(n){var e=n.children,a=Object(o.a)(n,["children"]);return r("code",Object(t.a)({},a,{className:"jsx-3161884056 "+(a&&null!=a.className&&a.className||"")}),e,r(i.a,{id:"3161884056"},["code.jsx-3161884056{color:deepPink;font-family:Menlo,Monaco,monospace,serif;font-size:0.9em;}","code.jsx-3161884056::before{content:'\\`';}","code.jsx-3161884056::after{content:'\\`';}"]))}},h1bS:function(n,e,a){"use strict";var t=a("MX0m"),o=a.n(t),s=a("q1tI"),i=a.n(s),p=i.a.createElement;e.a=function(n){var e=n.children;return p(i.a.Fragment,null,p("h2",{className:"jsx-1083602474 heading"},e),p(o.a,{id:"1083602474"},[".heading.jsx-1083602474{text-transform:uppercase;font-weight:600;}"]))}},twr1:function(n,e,a){"use strict";var t=a("bzaZ");e.a=t.a}},[["ZI7/",0,2,4,1,3,5]]]);