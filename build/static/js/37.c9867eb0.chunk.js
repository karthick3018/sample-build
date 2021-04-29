(this.webpackJsonprender=this.webpackJsonprender||[]).push([[37],{251:function(e,t,n){"use strict";var r=n(111),a=n(112);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),l=(0,r(n(113)).default)(o.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=l},270:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),l=n(6),i=n(43),c=n(21),u=function(e,t){var n=Object(c.b)(e,t);if(n){var r=n[0];return"component"===t.pluginType&&"mark"===t.object?r[t.type]:r.data}return t.getInitialData?t.getInitialData():{}},s=n(25),d=n(663),f=n(668),v=n(94),m=n(110),b=(n(106),n(114)),p=n(115),h=r.forwardRef((function(e,t){var n=e.disableSpacing,a=void 0!==n&&n,o=e.classes,l=e.className,i=Object(m.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(v.a)({className:Object(b.a)(o.root,l,!a&&o.spacing),ref:t},i))})),y=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(h),g=n(527),j=n(719),O=n(205),E=n.n(O),C=n(251),k=n.n(C),w=n(61),x=n(323),S=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};var T=function(e){var t=e.schema?Object(w.a)(e.schema):null,n=Boolean(e.schema),o=Object(r.useRef)(),l=S(Object(r.useState)(null),2),i=l[0],c=l[1],u=Object(r.useCallback)((function(t){e.close(),e.shouldInsertWithText?e.add({text:i,data:t}):e.add({data:t})}),[e.shouldInsertWithText,i]),s=Object(r.useCallback)((function(){o.current&&o.current.submit()}),[o.current]),v=Object(r.useCallback)((function(){t?s():u({})}),[s,u,n]);return a.a.createElement(d.a,{disableEnforceFocus:!0,PaperProps:{style:{minWidth:300}},open:e.open},a.a.createElement(f.a,null,e.shouldInsertWithText?a.a.createElement("div",null,a.a.createElement(j.a,{autoFocus:!0,placeholder:"Text",onChange:function(e){return c(e.target.value)},value:i})):null,n?a.a.createElement(x.b,{ref:o,model:e.data,schema:t,onSubmit:u},a.a.createElement(x.a,null)):null),a.a.createElement(y,null,a.a.createElement(g.a,{variant:"text",onClick:function(){e.close()},style:{marginRight:"auto"}},e.cancelLabel||"Cancel"),e.isActive?a.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){e.remove(),e.close()}},e.removeLabel||"Remove",a.a.createElement(E.a,{style:{marginLeft:10}})):null,a.a.createElement(g.a,{variant:"contained",color:"primary",onClick:v},e.submitLabel||"Ok",a.a.createElement(k.a,{style:{marginLeft:10}}))))},A=n(24),D=n(19),L=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r},P=Object(D.a)((function(){return n.e(38).then(n.bind(null,184))})),I=Object(D.a)((function(){return Promise.all([n.e(5),n.e(39)]).then(n.bind(null,706))})),F=a.a.memo((function(e){var t=e.icon,n=e.isActive,r=e.onClick,o=e.disabled,l=void 0!==o&&o,i=e.toolTip,c=void 0===i?"":i;return a.a.createElement(L,{condition:!l,wrapper:function(e){return a.a.createElement(I,{title:c},e)}},a.a.createElement(P,{onMouseDown:r,style:n?{color:"rgb(0, 188, 212)"}:l?{color:"gray"}:{color:"white"},disabled:l},t))})),R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},M=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};t.a=a.a.memo((function(e){var t,n,d,f,v,m=e.plugin,b=Boolean(m.controls),p=M(Object(r.useState)(!1),2),h=p[0],y=p[1],g=Object(r.useRef)(),j="component"===m.pluginType&&"inline"===m.object&&(!(null===(t=null===g||void 0===g?void 0:g.current)||void 0===t?void 0:t.selection)||o.e.isCollapsed(null===(n=null===g||void 0===g?void 0:g.current)||void 0===n?void 0:n.selection))&&!(null===(d=null===g||void 0===g?void 0:g.current)||void 0===d?void 0:d.isActive),O=Object(r.useCallback)((function(){return y(!1)}),[]),E=function(e){var t=Object(c.a)(e);return Boolean(t)}(m),C=Object(i.b)(m),k=Object(s.a)(m),w=Object(l.e)(),x=Object(A.c)();Object(r.useEffect)((function(){return x(h)}),[h,x]);var S=a.a.useCallback((function(e){e.preventDefault(),b||j?(h||(g.current={selection:w.selection,isActive:E,data:u(w,m)}),y(!h)):E?k():C()}),[E,b,h,j]),D=m.controls,L=D?"autoform"===D.type?function(e){return a.a.createElement(T,R({},e,{schema:null===D||void 0===D?void 0:D.schema}))}:D.Component:T,P=function(e){try{var t=Object(l.e)();return!t||!!e.isDisabled&&e.isDisabled(t)}catch(n){return!1}}(m);return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{onClick:S,disabled:P,isActive:E,icon:m.icon||"component"===m.pluginType&&m.deserialize.tagName,toolTip:m.label}),b||j?a.a.createElement(L,R({pluginConfig:m,close:O,open:h,add:function(e){var t;(null===(t=null===g||void 0===g?void 0:g.current)||void 0===t?void 0:t.selection)&&o.g.select(w,null===g||void 0===g?void 0:g.current.selection),C(e)},remove:function(){var e;(null===(e=null===g||void 0===g?void 0:g.current)||void 0===e?void 0:e.selection)&&o.g.select(w,null===g||void 0===g?void 0:g.current.selection),k()},isActive:null===(f=null===g||void 0===g?void 0:g.current)||void 0===f?void 0:f.isActive,shouldInsertWithText:j,data:null===(v=null===g||void 0===g?void 0:g.current)||void 0===v?void 0:v.data},e)):null)}))},323:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),o=n(19),l=n(61),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=Object(o.a)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,167)).then((function(e){return e.AutoForm}))})),u=Object(o.a)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,167)).then((function(e){return e.AutoFields}))}));function s(e){var t=e.onChange,n=e.data,o=e.schema,s=e.columnCount,d=void 0===s?2:s,f=Object(r.useMemo)((function(){return Object(l.a)(o)}),[o]);return Object(r.useEffect)((function(){var e=i(i({},function(e){return e.getSubfields(null).reduce((function(t,n){var r;return i(i({},t),((r={})[n]=e.getInitialValue(n),r))}),{})}(f)),null!==n&&void 0!==n?n:{});t(e)}),[f]),a.a.createElement(c,{model:n,autosave:!0,schema:f,onSubmit:t},a.a.createElement("div",{style:{columnCount:d,columnRule:"1px solid #E0E0E0",columnGap:48}},a.a.createElement(u,{element:r.Fragment})))}},61:function(e,t,n){"use strict";var r=n(220),a=n.n(r),o=n(718),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=new a.a({allErrors:!0,useDefaults:!0});i.addKeyword("uniforms"),t.a=function(e){var t=l({type:"object"},e);return new o.a(t,function(e){var t=i.compile(e);return function(e){var n;if(t(e),t.errors&&t.errors.length)return(null===(n=t.errors)||void 0===n?void 0:n.length)?{details:t.errors}:null}}(t))}},662:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(270);t.default=a.a.memo((function(e){var t=e.plugins,n=e.translations;return a.a.createElement("div",null,t&&t.map((function(e,t){return e.addToolbarButton?a.a.createElement(o.a,{key:t,translations:n,plugin:e}):null})))}))}}]);
//# sourceMappingURL=37.c9867eb0.chunk.js.map