!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,t){if(t)for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}function r(e){return n({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function o(e,t){return[].slice.call(e,t)}function s(e){return"function"==typeof e}function l(e){return"string"==typeof e}function a(e){return void 0===e||null===e}function u(e){return e===!1||a(e)}function p(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,n,r){var i,o,a,h=arguments.length;if(h>2){var f=typeof r;if(3===h&&"object"!==f&&"function"!==f)u(r)||(i=[String(r)]);else{i=[];for(var d=2;d<h;d++){var g=arguments[d];if(!u(g)){g.join?o=g:(o=Y)[0]=g;for(var m=0;m<o.length;m++){var b=o[m],v=!(u(b)||s(b)||b instanceof t);v&&!l(b)&&(b=String(b)),v&&a?i[i.length-1]+=b:u(b)||(i.push(b),a=v)}}}}}else if(n&&n.children)return c(e,n,n.children);n&&(n.children&&delete n.children,s(e)||("className"in n&&(n["class"]=n.className,delete n.className),a=n["class"],a&&!l(a)&&(n["class"]=p(a))));var k=new t(e,n||void 0,i);return X.vnode&&X.vnode(k),k}function h(e,t){return c(e.nodeName,n(r(e.attributes),t),arguments.length>2?o(arguments,2):e.children)}function f(e,t,n){var r=t.split("."),o=r[0];return function(t){var u,p,c,h=t&&t.currentTarget||this,f=e.state,d=f;if(l(n)?(p=i(t,n),a(p)&&(h=h._component)&&(p=i(h,n))):p=h.nodeName?(h.nodeName+h.type).match(/^input(check|rad)/i)?h.checked:h.value:t,s(p)&&(p=p.call(h)),r.length>1){for(c=0;c<r.length-1;c++)d=d[r[c]]||(d[r[c]]={});d[r[c]]=p,p=f[o]}e.setState((u={},u[o]=p,u))}}function d(e){1===ne.push(e)&&(X.debounceRendering||Q)(g)}function g(){if(ne.length){var e,t=ne;for(ne=re,re=t;e=t.pop();)e._dirty&&H(e)}}function m(e){var t=e&&e.nodeName;return t&&s(t)&&!(t.prototype&&t.prototype.render)}function b(e,t){return e.nodeName(P(e),t||Z)}function v(e,t){return e[ee]||(e[ee]=t||{})}function k(e){return e instanceof Text?3:e instanceof Element?1:0}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,i){if(v(e)[t]=n,"key"!==t&&"children"!==t&&"innerHTML"!==t)if("class"!==t||i)if("style"===t){if((!n||l(n)||l(r))&&(e.style.cssText=n||""),n&&"object"==typeof n){if(!l(r))for(var o in r)o in n||(e.style[o]="");for(var o in n)e.style[o]="number"!=typeof n[o]||te[o]?n[o]:n[o]+"px"}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html);else if(t.match(/^on/i)){var p=e._listeners||(e._listeners={});t=K(t.substring(2)),n?p[t]||e.addEventListener(t,w):p[t]&&e.removeEventListener(t,w),p[t]=n}else if("type"!==t&&!i&&t in e)_(e,t,a(n)?"":n),u(n)&&e.removeAttribute(t);else{var c=i&&t.match(/^xlink\:?(.+)/);u(n)?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",K(c[1])):e.removeAttribute(t):"object"==typeof n||s(n)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",K(c[1]),n):e.setAttribute(t,n))}else e.className=n||""}function _(e,t,n){try{e[t]=n}catch(r){}}function w(e){return this._listeners[e.type](X.event&&X.event(e)||e)}function C(e){for(var t={},n=e.attributes.length;n--;)t[e.attributes[n].name]=e.attributes[n].value;return t}function S(e,t){return l(t)?3===k(e):l(t.nodeName)?N(e,t.nodeName):s(t.nodeName)?e._componentConstructor===t.nodeName||m(t):void 0}function N(e,t){return e.normalizedNodeName===t||K(e.nodeName)===K(t)}function P(e){var t=e.nodeName.defaultProps,i=r(t||e.attributes);return t&&n(i,e.attributes),e.children&&(i.children=e.children),i}function O(e){q(e);var t=K(e.nodeName),n=ie[t];n?n.push(e):ie[t]=[e]}function $(e,t){var n=K(e),r=ie[n]&&ie[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return v(r),r.normalizedNodeName=n,r}function q(e){x(e),1===k(e)&&(v(e,C(e)),e._component=e._componentConstructor=null)}function L(){for(var e;e=oe.pop();)e.componentDidMount&&e.componentDidMount()}function j(e,t,n,r,i,o,s){se++;var l=T(e,t,n,r,o);return i&&l.parentNode!==i&&i.insertBefore(l,s||null),--se||L(),l}function T(e,t,n,r,i){for(var o=t&&t.attributes;m(t);)t=b(t,n);if(a(t)&&(t="",i)){if(e){if(8===e.nodeType)return e;O(e)}return document.createComment(t)}if(l(t)){if(e){if(3===k(e)&&e.parentNode)return e.nodeValue=t,e;O(e)}return document.createTextNode(t)}var u,p=e,c=t.nodeName;if(s(c))return W(e,t,n,r);if(l(c)||(c=String(c)),u="svg"===K(c),u&&(le=!0),e){if(!N(e,c)){for(p=$(c,le);e.firstChild;)p.appendChild(e.firstChild);E(e)}}else p=$(c,le);return t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===p.childNodes.length&&p.firstChild instanceof Text?p.firstChild.nodeValue=t.children[0]:(t.children||p.firstChild)&&M(p,t.children,n,r),R(p,t.attributes),o&&o.ref&&(p[ee].ref=o.ref)(p),u&&(le=!1),p}function M(e,t,n,r){var i,o,s,l,u=e.childNodes,p=[],c={},h=0,f=0,d=u.length,g=0,m=t&&t.length;if(d)for(var b=0;b<d;b++){var v=u[b],k=m?(o=v._component)?o.__key:(o=v[ee])?o.key:null:null;k||0===k?(h++,c[k]=v):p[g++]=v}if(m)for(var b=0;b<m;b++){if(s=t[b],l=null,h&&s.attributes){var k=s.key;!a(k)&&k in c&&(l=c[k],c[k]=void 0,h--)}if(!l&&f<g)for(i=f;i<g;i++)if(o=p[i],o&&S(o,s)){l=o,p[i]=void 0,i===g-1&&g--,i===f&&f++;break}l=T(l,s,n,r),l!==u[b]&&e.insertBefore(l,u[b]||null)}if(h)for(var b in c)c[b]&&(p[f=g++]=c[b]);f<g&&A(p)}function A(e,t){for(var n=e.length;n--;){var r=e[n];r&&E(r,t)}}function E(e,t){var n=e._component;n?D(n,!t):(e[ee]&&e[ee].ref&&e[ee].ref(null),t||O(e),e.childNodes&&e.childNodes.length&&A(e.childNodes,t))}function R(e,t){var n=e[ee]||C(e);for(var r in n)t&&r in t||y(e,r,null,n[r],le);if(t)for(var i in t)i in n&&t[i]==n[i]&&("value"!==i&&"checked"!==i||t[i]==e[i])||y(e,i,t[i],n[i],le)}function z(e){var t=e.constructor.name,n=ae[t];n?n.push(e):ae[t]=[e]}function U(e,t,n){var r=new e(t,n),i=ae[e.name];if(r.props=t,r.context=n,i)for(var o=i.length;o--;)if(i[o].constructor===e){r.nextBase=i[o].nextBase,i.splice(o,1);break}return r}function I(e){e._dirty||(e._dirty=!0,d(e))}function B(e,t,n,r,i){var o=e.base;e._disableRendering||(e._disableRendering=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,a(o)||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disableRendering=!1,0!==n&&(1!==n&&X.syncComponentUpdates===!1&&o?I(e):H(e,1,i)),e.__ref&&e.__ref(e))}function H(e,t,i){if(!e._disableRendering){var o,l,a=e.props,u=e.state,p=e.context,c=e.prevProps||a,h=e.prevState||u,f=e.prevContext||p,d=e.base,g=d||e.nextBase,v=g&&g.parentNode,k=g&&g._component,x=e._component;if(d&&(e.props=c,e.state=h,e.context=f,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(a,u,p)===!1?o=!0:e.componentWillUpdate&&e.componentWillUpdate(a,u,p),e.props=a,e.state=u,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!o){for(e.render&&(l=e.render(a,u,p)),e.getChildContext&&(p=n(r(p),e.getChildContext()));m(l);)l=b(l,p);var y,_,w=l&&l.nodeName;if(s(w)&&w.prototype.render){var C=x,S=P(l);C&&C.constructor===w?B(C,S,1,p):(y=C,C=U(w,S,p),C._parentComponent=e,e._component=C,B(C,S,0,p),H(C,1)),_=C.base}else{var N=g;y=x,y&&(N=e._component=null),(g||1===t)&&(N&&(N._component=null),_=j(N,l,p,i||!d,v,!0,g&&g.nextSibling))}if(g&&_!==g&&(y||k!==e||x||!g.parentNode||(g._component=null,E(g))),y&&D(y,!0),e.base=_,_){for(var O=e,$=e;$=$._parentComponent;)O=$;_._component=O,_._componentConstructor=O.constructor}}!d||i?(oe.unshift(e),se||L()):!o&&e.componentDidUpdate&&e.componentDidUpdate(c,h,f);var q,T=e._renderCallbacks;if(T)for(;q=T.pop();)q.call(e);return l}}function W(e,t,n,r){for(var i=e&&e._component,o=e,s=i&&e._componentConstructor===t.nodeName,l=s,a=P(t);i&&!l&&(i=i._parentComponent);)l=i.constructor===t.nodeName;return!l||r&&!i._component?(i&&!s&&(D(i,!0),e=o=null),i=U(t.nodeName,a,n),e&&!i.nextBase&&(i.nextBase=e),B(i,a,1,n,r),e=i.base,o&&e!==o&&(o._component=null,E(o))):(B(i,a,3,n,r),e=i.base),e}function D(e,t){var n=e.base;e._disableRendering=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?D(r,t):n&&(n[ee]&&n[ee].ref&&n[ee].ref(null),e.nextBase=n,t&&(x(n),z(e)),A(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function V(e,t){this._dirty=!0,this._disableRendering=!1,this.prevState=this.prevProps=this.prevContext=this.base=this.nextBase=this._parentComponent=this._component=this.__ref=this.__key=this._linkedStates=this._renderCallbacks=null,this.context=t,this.props=e,this.state=this.getInitialState&&this.getInitialState()||{}}function F(e,t,n){return j(n,e,{},!1,t)}var G={},K=function(e){return G[e]||(G[e]=e.toLowerCase())},J="undefined"!=typeof Promise&&Promise.resolve(),Q=J?function(e){J.then(e)}:setTimeout,X={vnode:a},Y=[],Z={},ee="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",te={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},ne=[],re=[],ie={},oe=[],se=0,le=!1,ae={};n(V.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={}),r=e+"|"+t;return n[r]||(n[r]=f(this,e,t))},setState:function(e,t){var i=this.state;this.prevState||(this.prevState=r(i)),n(i,s(e)?e(i,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),I(this)},forceUpdate:function(){H(this,2)},render:function(){return null}}),e.h=c,e.cloneElement=h,e.Component=V,e.render=F,e.rerender=g,e.options=X})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(5),o=r(i),s=n(4),l=r(s),a=n(3),u=r(a),p=n(6),c=r(p),h=window,f=window.requirejs.defined,d=h.define||d;d("resource-not-defined",function(){return null});var g=["module","qlik","translator"].map(function(e){return f(e)||"module"===e?e:"qlik"===e&&f("js/qlik")?"js/qlik":"resource-not-defined"});d(g,function(e,t,n){var r=e.uri.split("/").slice(0,-1).join("/")||"/extensions/qsSimplePopup";(0,o["default"])(r+"/styles.css");var i=(0,c["default"])({translator:n}),s=i.paint;return{initialProperties:l["default"],definition:u["default"],paint:s}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={type:"items",component:"accordion",items:{general:{translation:"properties.general",type:"items",items:{label:{ref:"options.label",label:"Label",type:"string",expression:"optional",defaultValue:""},icon:{ref:"options.icon",label:"Icon",type:"string",expression:"optional",defaultValue:""},text:{ref:"options.text",label:"Text",type:"string",expression:"optional",defaultValue:""}}},addons:{uses:"addons"},settings:{uses:"settings"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={version:1}},function(e,t){"use strict";function n(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.translator;return d=(0,f.createPopupService)({translator:t}),h["default"].setOptions({breaks:!0,sanitize:!1}),{paint:function(e,t){var n=e[0];t.options&&(0,p.render)((0,p.h)(g,u({},t.options,{textToRender:(0,h["default"])(t.options.text)})),n,n.lastChild)}}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=l;var p=n(1),c=n(8),h=r(c),f=n(7),d=void 0,g=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClickHandler=n.onClickHandler.bind(n),n.onMouseOver=n.onMouseOver.bind(n),n}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props.icon||"",t=this.props.label||"";return(0,p.h)("div",{className:"qv-simplepopup"},(0,p.h)("button",{className:"lui-button qui-button qv-sp-tbutton",onClick:this.onClickHandler,onTouchStart:this.onClickHandler,onMouseOver:this.onMouseOver},(0,p.h)("span",{className:"lui-icon lui-icon--"+e}),t))}},{key:"onMouseOver",value:function(e){var t=this;d.isPopupShow()||this._tid||(this._tid=setTimeout(function(){t._tid=null,t.showPopup()},3e3))}},{key:"onClickHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.showPopup(),this._tid&&(clearTimeout(this._tid),this._tid=null)}},{key:"showPopup",value:function(){d.showAsPopup((0,p.h)("p",{dangerouslySetInnerHTML:{__html:this.props.textToRender}}),{width:"75%",height:"75%"})}}]),t}(p.Component)},function(e,t,n){"use strict";function r(e){return(0,s.h)("footer",{className:"qv-spopup-footer"},(0,s.h)("button",{className:"lui-button lui-button--inverse qui-button",autofocus:"true",onClick:e.onClose,onTouchStart:e.onClose},e.closeLabel))}function i(e){function t(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.width,u=t.height;a||(a=document.createElement("div"),a.className="qv-spopup-container",a.onclick=function(e){e.preventDefault(),e.stopPropagation(),n()},a.ontouchstart=a.onclick,document.body.appendChild(a));var p=l.get("Common.OK")||"OK";(0,s.render)((0,s.h)("div",{className:"qv-spopup qv-spopup-modal",style:{width:i,height:u}},(0,s.h)("div",{className:"qv-spopup-content"},e),(0,s.h)(r,o({closeLabel:p},{onClose:n}))),a,a.lastChild)}function n(){return!!a&&(a.removeChild(a.lastChild),document.body.removeChild(a),a=void 0,!0)}function i(){return void 0!=a}var l=e.translator,a=void 0;return{showAsPopup:t,removePopupIfExists:n,isPopupShow:i}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.createPopupService=i;var s=n(1)},function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=c.normal,this.options.gfm&&(this.options.tables?this.rules=c.tables:this.rules=c.gfm)}function n(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=h.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=h.breaks:this.rules=h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function r(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function a(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},p.defaults,n||{});var s,l,a=n.highlight,c=0;try{s=t.lex(e,n)}catch(h){return r(h)}l=s.length;var f=function(e){if(e)return n.highlight=a,r(e);var t;try{t=i.parse(s,n)}catch(o){e=o}return n.highlight=a,e?r(e):r(null,t)};if(!a||a.length<3)return f();if(delete n.highlight,!l)return f();for(;c<s.length;c++)!function(e){return"code"!==e.type?--l||f():a(e.text,e.lang,function(t,n){return t?f(t):null==n||n===e.text?--l||f():(e.text=n,e.escaped=!0,void(--l||f()))})}(s[c])}else try{return n&&(n=u({},p.defaults,n)),i.parse(t.lex(e,n),n)}catch(h){if(h.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occured:</p><pre>"+o(h.message+"",!0)+"</pre>";throw h}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:a,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=l(c.item,"gm")(/bull/g,c.bullet)(),c.list=l(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c.blockquote=l(c.blockquote)("def",c.def)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=l(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=l(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=u({},c),c.gfm=u({},c.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),c.gfm.paragraph=l(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=u({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=c,t.lex=function(e,n){var r=new t(n);return r.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,i,o,s,l,a,u,p,h,e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].split(/ *\| */);this.tokens.push(a)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),s=o[2],this.tokens.push({type:"list_start",ordered:s.length>1}),o=o[0].match(this.rules.item),r=!1,h=o.length,p=0;p<h;p++)a=o[p],u=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&p!==h-1&&(l=c.bullet.exec(o[p+1])[0],s===l||s.length>1&&l.length>1||(e=o.slice(p+1).join("\n")+e,p=h-1)),i=r||/\n\n(?!\s*$)/.test(a),p!==h-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),a={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=a.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=l(h.link)("inside",h._inside)("href",h._href)(),h.reflink=l(h.reflink)("inside",h._inside)(),h.normal=u({},h),h.pedantic=u({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=u({},h.normal,{escape:l(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=u({},h.gfm,{br:l(h.br)("{2,}","*")(),text:l(h.gfm.text)("{2,}","*")()}),n.rules=h,n.output=function(e,t,r){var i=new n(t,r);return i.output(e)},n.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):(n=o(i[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):o(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(o(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(o(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=o(i[1]),r=n,s+=this.renderer.link(r,null,n);return s},n.prototype.outputLink=function(e,t){var n=o(t.href),r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(s(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.parse=function(e,t,n){var r=new i(t,n);return r.parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i,o="",s="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(o+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",i=0;i<t.length;i++)n+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});s+=this.renderer.tablerow(n)}return this.renderer.table(o,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",l=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,l);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},a.exec=a,p.options=p.setOptions=function(e){return u(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},p.Parser=i,p.parser=i.parse,p.Renderer=r,p.Lexer=t,p.lexer=t.lex,p.InlineLexer=n,p.inlineLexer=n.output,p.parse=p,e.exports=p}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,function(){return this}())}]);