!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,r,l,u,_,i={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var o,r=arguments,l={};for(o in t)"key"!==o&&"ref"!==o&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return d(e,l,t&&t.key,t&&t.ref)}function d(e,t,n,r){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return o.vnode&&o.vnode(l),l}function y(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&1===r.push(e)||u!==o.debounceRendering)&&((u=o.debounceRendering)||l)(g)}function g(){var e,t,n,o,l,u,_;for(r.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=r.pop();)e.__d&&(n=void 0,o=void 0,u=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],o=O(_,l,s({},l),t.__n,void 0!==_.ownerSVGElement,null,n,null==u?v(l):u),j(n,l),o!=u&&m(l)))}function k(e,t,n,o,r,l,u,_,f){var s,a,d,y,h,m,b,g=n&&n.__k||c,k=g.length;if(_==i&&(_=null!=l?l[0]:k?v(n,0):null),s=0,t.__k=w(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=g[s])||d&&n.key==d.key&&n.type===d.type)g[s]=void 0;else for(a=0;a<k;a++){if((d=g[a])&&n.key==d.key&&n.type===d.type){g[a]=void 0;break}d=null}if(y=O(e,n,d=d||i,o,r,l,u,_,f),(a=n.ref)&&d.ref!=a&&(b||(b=[]),d.ref&&b.push(d.ref,null,n),b.push(a,n.__c||y,n)),null!=y){var c;if(null==m&&(m=y),void 0!==n.__d)c=n.__d,n.__d=void 0;else if(l==d||y!=_||null==y.parentNode){e:if(null==_||_.parentNode!==e)e.appendChild(y),c=null;else{for(h=_,a=0;(h=h.nextSibling)&&a<k;a+=2)if(h==y)break e;e.insertBefore(y,_),c=_}"option"==t.type&&(e.value="")}_=void 0!==c?c:y.nextSibling,"function"==typeof t.type&&(t.__d=_)}else _&&d.__e==_&&_.parentNode!=e&&(_=v(d))}return s++,n})),t.__e=m,null!=l&&"function"!=typeof t.type)for(s=l.length;s--;)null!=l[s]&&p(l[s]);for(s=k;s--;)null!=g[s]&&N(g[s],g[s]);if(b)for(s=0;s<b.length;s++)E(b[s],b[++s],b[++s])}function w(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)w(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return n}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===f.test(t)?n+"px":null==n?"":n}function P(e,t,n,o,r){var l,u,_,i,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(u in o)n&&u in n||S(l,u,"");if(n)for(_ in n)o&&n[_]===o[_]||S(l,_,n[_])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,x,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,x,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function x(e){this.l[e.type](o.event?o.event(e):e)}function O(e,t,n,r,l,u,_,i,c){var f,p,a,d,v,m,b,g,w,S,P=t.type;if(void 0!==t.constructor)return null;(f=o.__b)&&f(t);try{e:if("function"==typeof P){if(g=t.props,w=(f=P.contextType)&&r[f.__c],S=f?w?w.props.value:f.__:r,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?t.__c=p=new P(g,S):(t.__c=p=new h(g,S),p.constructor=P,p.render=T),w&&w.sub(p),p.props=g,p.state||(p.state={}),p.context=S,p.__n=r,a=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,P.getDerivedStateFromProps(g,p.__s))),d=p.props,v=p.state,a)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,S),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,S)){for(p.props=g,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&_.push(p),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,S),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,v,m)}))}p.context=S,p.props=g,p.state=p.__s,(f=o.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),t.__k=null!=f&&f.type==y&&null==f.key?f.props.children:Array.isArray(f)?f:[f],null!=p.getChildContext&&(r=s(s({},r),p.getChildContext())),a||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,v)),k(e,t,n,r,l,u,_,i,c),p.base=t.__e,p.__h.length&&_.push(p),b&&(p.__E=p.__=null),p.__e=!1}else t.__e=C(n.__e,t,n,r,l,u,_,c);(f=o.diffed)&&f(t)}catch(e){o.__e(e,t,n)}return t.__e}function j(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function C(e,t,n,o,r,l,u,_){var f,s,p,a,d,y=n.props,h=t.props;if(r="svg"===t.type||r,null!=l)for(f=0;f<l.length;f++)if(null!=(s=l[f])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,l[f]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),l=null}if(null===t.type)y!==h&&e.data!=h&&(e.data=h);else if(t!==n){if(null!=l&&(l=c.slice.call(e.childNodes)),p=(y=n.props||i).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!_){if(y===i)for(y={},d=0;d<e.attributes.length;d++)y[e.attributes[d].name]=e.attributes[d].value;(a||p)&&(a&&p&&a.__html==p.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,o,r){var l;for(l in n)l in t||P(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||P(e,l,t[l],n[l],o)})(e,h,y,r,_),t.__k=t.props.children,a||k(e,t,n,o,"foreignObject"!==t.type&&r,l,u,i,_),_||("value"in h&&void 0!==h.value&&h.value!==e.value&&(e.value=null==h.value?"":h.value),"checked"in h&&void 0!==h.checked&&h.checked!==e.checked&&(e.checked=h.checked))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function N(e,t,n){var r,l,u;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&N(r[u],t,n);null!=l&&p(l)}function T(e,t,n){return this.constructor(e,n)}function D(e,t,n){var r,l,u;o.__&&o.__(e,t),l=(r=n===_)?null:n&&n.__k||t.__k,e=a(y,null,[e]),u=[],O(t,(r?t:n||t).__k=e,l||i,i,void 0!==t.ownerSVGElement,n&&!r?[n]:l?null:c.slice.call(t.childNodes),u,n||i,r),j(u,e)}function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return b(n.__E=n)}catch(t){e=t}throw e}},h.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},h.prototype.render=y,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=i;var H=function(e){function t(){return U(this,t),A(this,W(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return a("h1",null,"Hello, world!")}}])&&L(n.prototype,o),r&&L(n,r),t}(h);D(a(H,null),document.body)}]);