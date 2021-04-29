(this.webpackJsonprender=this.webpackJsonprender||[]).push([[35],{251:function(e,t,n){"use strict";var r=n(111),o=n(112);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=(0,r(n(113)).default)(a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=i},270:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(6),l=n(43),c=n(21),u=function(e,t){var n=Object(c.b)(e,t);if(n){var r=n[0];return"component"===t.pluginType&&"mark"===t.object?r[t.type]:r.data}return t.getInitialData?t.getInitialData():{}},s=n(25),d=n(663),f=n(668),p=n(94),v=n(110),h=(n(106),n(114)),m=n(115),b=r.forwardRef((function(e,t){var n=e.disableSpacing,o=void 0!==n&&n,a=e.classes,i=e.className,l=Object(v.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(p.a)({className:Object(h.a)(a.root,i,!o&&a.spacing),ref:t},l))})),y=Object(m.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(b),O=n(527),g=n(719),j=n(205),E=n.n(j),w=n(251),C=n.n(w),k=n(61),P=n(323),_=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};var T=function(e){var t=e.schema?Object(k.a)(e.schema):null,n=Boolean(e.schema),a=Object(r.useRef)(),i=_(Object(r.useState)(null),2),l=i[0],c=i[1],u=Object(r.useCallback)((function(t){e.close(),e.shouldInsertWithText?e.add({text:l,data:t}):e.add({data:t})}),[e.shouldInsertWithText,l]),s=Object(r.useCallback)((function(){a.current&&a.current.submit()}),[a.current]),p=Object(r.useCallback)((function(){t?s():u({})}),[s,u,n]);return o.a.createElement(d.a,{disableEnforceFocus:!0,PaperProps:{style:{minWidth:300}},open:e.open},o.a.createElement(f.a,null,e.shouldInsertWithText?o.a.createElement("div",null,o.a.createElement(g.a,{autoFocus:!0,placeholder:"Text",onChange:function(e){return c(e.target.value)},value:l})):null,n?o.a.createElement(P.b,{ref:a,model:e.data,schema:t,onSubmit:u},o.a.createElement(P.a,null)):null),o.a.createElement(y,null,o.a.createElement(O.a,{variant:"text",onClick:function(){e.close()},style:{marginRight:"auto"}},e.cancelLabel||"Cancel"),e.isActive?o.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:function(){e.remove(),e.close()}},e.removeLabel||"Remove",o.a.createElement(E.a,{style:{marginLeft:10}})):null,o.a.createElement(O.a,{variant:"contained",color:"primary",onClick:p},e.submitLabel||"Ok",o.a.createElement(C.a,{style:{marginLeft:10}}))))},N=n(24),x=n(19),S=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r},R=Object(x.a)((function(){return n.e(38).then(n.bind(null,184))})),A=Object(x.a)((function(){return Promise.all([n.e(5),n.e(39)]).then(n.bind(null,706))})),D=o.a.memo((function(e){var t=e.icon,n=e.isActive,r=e.onClick,a=e.disabled,i=void 0!==a&&a,l=e.toolTip,c=void 0===l?"":l;return o.a.createElement(S,{condition:!i,wrapper:function(e){return o.a.createElement(A,{title:c},e)}},o.a.createElement(R,{onMouseDown:r,style:n?{color:"rgb(0, 188, 212)"}:i?{color:"gray"}:{color:"white"},disabled:i},t))})),I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},L=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};t.a=o.a.memo((function(e){var t,n,d,f,p,v=e.plugin,h=Boolean(v.controls),m=L(Object(r.useState)(!1),2),b=m[0],y=m[1],O=Object(r.useRef)(),g="component"===v.pluginType&&"inline"===v.object&&(!(null===(t=null===O||void 0===O?void 0:O.current)||void 0===t?void 0:t.selection)||a.e.isCollapsed(null===(n=null===O||void 0===O?void 0:O.current)||void 0===n?void 0:n.selection))&&!(null===(d=null===O||void 0===O?void 0:O.current)||void 0===d?void 0:d.isActive),j=Object(r.useCallback)((function(){return y(!1)}),[]),E=function(e){var t=Object(c.a)(e);return Boolean(t)}(v),w=Object(l.b)(v),C=Object(s.a)(v),k=Object(i.e)(),P=Object(N.c)();Object(r.useEffect)((function(){return P(b)}),[b,P]);var _=o.a.useCallback((function(e){e.preventDefault(),h||g?(b||(O.current={selection:k.selection,isActive:E,data:u(k,v)}),y(!b)):E?C():w()}),[E,h,b,g]),x=v.controls,S=x?"autoform"===x.type?function(e){return o.a.createElement(T,I({},e,{schema:null===x||void 0===x?void 0:x.schema}))}:x.Component:T,R=function(e){try{var t=Object(i.e)();return!t||!!e.isDisabled&&e.isDisabled(t)}catch(n){return!1}}(v);return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{onClick:_,disabled:R,isActive:E,icon:v.icon||"component"===v.pluginType&&v.deserialize.tagName,toolTip:v.label}),h||g?o.a.createElement(S,I({pluginConfig:v,close:j,open:b,add:function(e){var t;(null===(t=null===O||void 0===O?void 0:O.current)||void 0===t?void 0:t.selection)&&a.g.select(k,null===O||void 0===O?void 0:O.current.selection),w(e)},remove:function(){var e;(null===(e=null===O||void 0===O?void 0:O.current)||void 0===e?void 0:e.selection)&&a.g.select(k,null===O||void 0===O?void 0:O.current.selection),C()},isActive:null===(f=null===O||void 0===O?void 0:O.current)||void 0===f?void 0:f.isActive,shouldInsertWithText:g,data:null===(p=null===O||void 0===O?void 0:O.current)||void 0===p?void 0:p.data},e)):null)}))},323:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n(0),o=n.n(r),a=n(19),i=n(61),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=Object(a.a)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,167)).then((function(e){return e.AutoForm}))})),u=Object(a.a)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,167)).then((function(e){return e.AutoFields}))}));function s(e){var t=e.onChange,n=e.data,a=e.schema,s=e.columnCount,d=void 0===s?2:s,f=Object(r.useMemo)((function(){return Object(i.a)(a)}),[a]);return Object(r.useEffect)((function(){var e=l(l({},function(e){return e.getSubfields(null).reduce((function(t,n){var r;return l(l({},t),((r={})[n]=e.getInitialValue(n),r))}),{})}(f)),null!==n&&void 0!==n?n:{});t(e)}),[f]),o.a.createElement(c,{model:n,autosave:!0,schema:f,onSubmit:t},o.a.createElement("div",{style:{columnCount:d,columnRule:"1px solid #E0E0E0",columnGap:48}},o.a.createElement(u,{element:r.Fragment})))}},334:function(e,t,n){e.exports=n(545)()},545:function(e,t,n){"use strict";var r=n(546);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},546:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61:function(e,t,n){"use strict";var r=n(220),o=n.n(r),a=n(718),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=new o.a({allErrors:!0,useDefaults:!0});l.addKeyword("uniforms"),t.a=function(e){var t=i({type:"object"},e);return new a.a(t,function(e){var t=l.compile(e);return function(e){var n;if(t(e),t.errors&&t.errors.length)return(null===(n=t.errors)||void 0===n?void 0:n.length)?{details:t.errors}:null}}(t))}},710:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(17),i=n.n(a),l=n(334),c=n.n(l),u=!("undefined"===typeof window||!window.document||!window.document.createElement),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){function t(){return d(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return u?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),i.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(o.a.Component);p.propTypes={children:c.a.node.isRequired,node:c.a.any};var v=p,h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var y=function(e){function t(){return m(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){i.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"===typeof this.props.children.type&&(t=o.a.cloneElement(this.props.children)),this.portal=i.a.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(o.a.Component),O=y;y.propTypes={children:c.a.node.isRequired,node:c.a.any};var g=i.a.createPortal?v:O,j=n(6),E=n(1),w=function(){var e=Object(j.e)();try{return Boolean(e.selection)&&""!==E.a.string(e,e.selection)}catch(t){return!1}},C=n(270);t.default=function(e){var t=e.plugins,n=e.translations,a=w(),i=Object(r.useRef)(),l=Object(j.e)();return Object(r.useEffect)((function(){var e=i.current;if(a){var t=window.getSelection();try{var n=t.getRangeAt(0).getBoundingClientRect();if(n){var r=n.left,o=n.top,l=n.width;e.style.opacity="1",e.style.top=o+window.scrollY-e.offsetHeight+"px",e.style.left=r+window.scrollX-e.offsetWidth/2+l/2+"px"}}catch(c){}}}),[l,a]),o.a.createElement(g,null,o.a.createElement("div",{className:"react-page-plugins-content-slate-inline-toolbar "+(a?"":"react-page-plugins-content-slate-inline-toolbar--hidden"),style:{padding:0},ref:i},t&&t.map((function(e,t){return e.addHoverButton?o.a.createElement(C.a,{translations:n,key:t,plugin:e}):null}))))}}}]);
//# sourceMappingURL=35.f35d4d13.chunk.js.map