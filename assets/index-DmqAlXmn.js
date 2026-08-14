import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{t}from"./swagger-ui-dist-DziNb7RK.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>C(e)===`[object Map]`,h=e=>C(e)===`[object Set]`,g=e=>C(e)===`[object Date]`,_=e=>typeof e==`function`,v=e=>typeof e==`string`,y=e=>typeof e==`symbol`,b=e=>typeof e==`object`&&!!e,x=e=>(b(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,C=e=>S.call(e),ee=e=>C(e).slice(8,-1),te=e=>C(e)===`[object Object]`,ne=e=>v(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,w=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),oe=/\B([A-Z])/g,se=ie(e=>e.replace(oe,`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),T=(e,t)=>!Object.is(e,t),ue=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},de=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},pe,me=()=>pe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function he(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=v(r)?ye(r):he(r);if(i)for(let e in i)t[e]=i[e]}return t}if(v(e)||b(e))return e}var ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,``).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(v(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(b(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var xe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Se=n(xe);xe+``;function Ce(e){return!!e||e===``}function we(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Te(e[r],t[r]);return n}function Te(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=y(e),r=y(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return n&&r?we(e,t):!1;if(n=b(e),r=b(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Te(e[n],t[n]))return!1}}return String(e)===String(t)}function Ee(e,t){return e.findIndex(e=>Te(e,t))}var De=e=>!!(e&&e.__v_isRef===!0),Oe=e=>v(e)?e:e==null?``:p(e)||b(e)&&(e.toString===S||!_(e.toString))?De(e)?Oe(e.value):JSON.stringify(e,ke,2):String(e),ke=(e,t)=>De(t)?ke(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ae(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ae(e))}:y(t)?Ae(t):b(t)&&!p(t)&&!te(t)?String(t):t,Ae=(e,t=``)=>y(e)?`Symbol(${e.description??t})`:e,E,je=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&E&&(E.active?(this.parent=E,this.index=(E.scopes||(E.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=E;try{return E=this,e()}finally{E=t}}}on(){++this._on===1&&(this.prevScope=E,E=this)}off(){if(this._on>0&&--this._on===0){if(E===this)E=this.prevScope;else{let e=E;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Me(){return E}var D,Ne=new WeakSet,Pe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,E&&(E.active?E.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ne.has(this)&&(Ne.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Re(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ze(this),Ve(this);let e=D,t=qe;D=this,qe=!0;try{return this.fn()}finally{He(this),D=e,qe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ge(e);this.deps=this.depsTail=void 0,Ze(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ne.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ue(this)&&this.run()}get dirty(){return Ue(this)}},Fe=0,Ie,Le;function Re(e,t=!1){if(e.flags|=8,t){e.next=Le,Le=e;return}e.next=Ie,Ie=e}function ze(){Fe++}function Be(){if(--Fe>0)return;if(Le){let e=Le;for(Le=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ie;){let t=Ie;for(Ie=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ve(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function He(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ge(r),Ke(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ue(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(We(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function We(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qe)||(e.globalVersion=Qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ue(e))))return;e.flags|=2;let t=e.dep,n=D,r=qe;D=e,qe=!0;try{Ve(e);let n=e.fn(e._value);(t.version===0||T(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{D=n,qe=r,He(e),e.flags&=-3}}function Ge(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ge(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ke(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var qe=!0,Je=[];function Ye(){Je.push(qe),qe=!1}function Xe(){let e=Je.pop();qe=e===void 0||e}function Ze(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=D;D=void 0;try{t()}finally{D=e}}}var Qe=0,$e=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},et=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!D||!qe||D===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==D)t=this.activeLink=new $e(D,this),D.deps?(t.prevDep=D.depsTail,D.depsTail.nextDep=t,D.depsTail=t):D.deps=D.depsTail=t,tt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=D.depsTail,t.nextDep=void 0,D.depsTail.nextDep=t,D.depsTail=t,D.deps===t&&(D.deps=e)}return t}trigger(e){this.version++,Qe++,this.notify(e)}notify(e){ze();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Be()}}};function tt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)tt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var nt=new WeakMap,rt=Symbol(``),it=Symbol(``),at=Symbol(``);function O(e,t,n){if(qe&&D){let t=nt.get(e);t||nt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new et),r.map=t,r.key=n),r.track()}}function ot(e,t,n,r,i,a){let o=nt.get(e);if(!o){Qe++;return}let s=e=>{e&&e.trigger()};if(ze(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===at||!y(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(at)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(rt)),m(e)&&s(o.get(it)));break;case`delete`:i||(s(o.get(rt)),m(e)&&s(o.get(it)));break;case`set`:m(e)&&s(o.get(rt))}}Be()}function st(e){let t=A(e);return t===e?t:(O(t,`iterate`,at),k(e)?t:t.map(Jt))}function ct(e){return O(e=A(e),`iterate`,at),e}function lt(e,t){return Gt(e)?Yt(Wt(e)?Jt(t):t):Jt(t)}var ut={__proto__:null,[Symbol.iterator](){return dt(this,Symbol.iterator,e=>lt(this,e))},concat(...e){return st(this).concat(...e.map(e=>p(e)?st(e):e))},entries(){return dt(this,`entries`,e=>(e[1]=lt(this,e[1]),e))},every(e,t){return pt(this,`every`,e,t,void 0,arguments)},filter(e,t){return pt(this,`filter`,e,t,e=>e.map(e=>lt(this,e)),arguments)},find(e,t){return pt(this,`find`,e,t,e=>lt(this,e),arguments)},findIndex(e,t){return pt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return pt(this,`findLast`,e,t,e=>lt(this,e),arguments)},findLastIndex(e,t){return pt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return pt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ht(this,`includes`,e)},indexOf(...e){return ht(this,`indexOf`,e)},join(e){return st(this).join(e)},lastIndexOf(...e){return ht(this,`lastIndexOf`,e)},map(e,t){return pt(this,`map`,e,t,void 0,arguments)},pop(){return gt(this,`pop`)},push(...e){return gt(this,`push`,e)},reduce(e,...t){return mt(this,`reduce`,e,t)},reduceRight(e,...t){return mt(this,`reduceRight`,e,t)},shift(){return gt(this,`shift`)},some(e,t){return pt(this,`some`,e,t,void 0,arguments)},splice(...e){return gt(this,`splice`,e)},toReversed(){return st(this).toReversed()},toSorted(e){return st(this).toSorted(e)},toSpliced(...e){return st(this).toSpliced(...e)},unshift(...e){return gt(this,`unshift`,e)},values(){return dt(this,`values`,e=>lt(this,e))}};function dt(e,t,n){let r=ct(e),i=r[t]();return r!==e&&!k(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ft=Array.prototype;function pt(e,t,n,r,i,a){let o=ct(e),s=o!==e&&!k(e),c=o[t];if(c!==ft[t]){let t=c.apply(e,a);return s?Jt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,lt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function mt(e,t,n,r){let i=ct(e),a=i!==e&&!k(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=lt(e,t)),n.call(this,t,lt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?lt(e,c):c}function ht(e,t,n){let r=A(e);O(r,`iterate`,at);let i=r[t](...n);return(i===-1||i===!1)&&Kt(n[0])?(n[0]=A(n[0]),r[t](...n)):i}function gt(e,t,n=[]){Ye(),ze();let r=A(e)[t].apply(e,n);return Be(),Xe(),r}var _t=n(`__proto__,__v_isRef,__isVue`),vt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(y));function yt(e){y(e)||(e=String(e));let t=A(this);return O(t,`has`,e),t.hasOwnProperty(e)}var bt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Rt:Lt:i?It:Ft).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=ut[t]))return e;if(t===`hasOwnProperty`)return yt}let o=Reflect.get(e,t,j(e)?e:n);if((y(t)?vt.has(t):_t(t))||(r||O(e,`get`,t),i))return o;if(j(o)){let e=a&&ne(t)?o:o.value;return r&&b(e)?Ht(e):e}return b(o)?r?Ht(o):Bt(o):o}},xt=class extends bt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&ne(t);if(!this._isShallow){let e=Gt(i);if(!k(n)&&!Gt(n)&&(i=A(i),n=A(n)),!a&&j(i)&&!j(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,j(e)?e:r);return e===A(r)&&s&&(o?T(n,i)&&ot(e,`set`,t,n,i):ot(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ot(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!y(t)||!vt.has(t))&&O(e,`has`,t),n}ownKeys(e){return O(e,`iterate`,p(e)?`length`:rt),Reflect.ownKeys(e)}},St=class extends bt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Ct=new xt,wt=new St,Tt=new xt(!0),Et=e=>e,Dt=e=>Reflect.getPrototypeOf(e);function Ot(e,t,n){return function(...r){let i=this.__v_raw,a=A(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Et:t?Yt:Jt;return!t&&O(a,`iterate`,c?it:rt),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function kt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function At(e,t){let n={get(n){let r=this.__v_raw,i=A(r),a=A(n);e||(T(n,a)&&O(i,`get`,n),O(i,`get`,a));let{has:o}=Dt(i),s=t?Et:e?Yt:Jt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&O(A(t),`iterate`,rt),t.size},has(t){let n=this.__v_raw,r=A(n),i=A(t);return e||(T(t,i)&&O(r,`has`,t),O(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=A(a),s=t?Et:e?Yt:Jt;return!e&&O(o,`iterate`,rt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:kt(`add`),set:kt(`set`),delete:kt(`delete`),clear:kt(`clear`)}:{add(e){let n=A(this),r=Dt(n),i=A(e),a=!t&&!k(e)&&!Gt(e)?i:e;return r.has.call(n,a)||T(e,a)&&r.has.call(n,e)||T(i,a)&&r.has.call(n,i)||(n.add(a),ot(n,`add`,a,a)),this},set(e,n){!t&&!k(n)&&!Gt(n)&&(n=A(n));let r=A(this),{has:i,get:a}=Dt(r),o=i.call(r,e);o||=(e=A(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?T(n,s)&&ot(r,`set`,e,n,s):ot(r,`add`,e,n),this},delete(e){let t=A(this),{has:n,get:r}=Dt(t),i=n.call(t,e);i||=(e=A(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&ot(t,`delete`,e,void 0,a),o},clear(){let e=A(this),t=e.size!==0,n=e.clear();return t&&ot(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Ot(r,e,t)}),n}function jt(e,t){let n=At(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(f(n,r)&&r in t?n:t,r,i)}var Mt={get:jt(!1,!1)},Nt={get:jt(!1,!0)},Pt={get:jt(!0,!1)},Ft=new WeakMap,It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap;function zt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Bt(e){return Gt(e)?e:Ut(e,!1,Ct,Mt,Ft)}function Vt(e){return Ut(e,!1,Tt,Nt,It)}function Ht(e){return Ut(e,!0,wt,Pt,Lt)}function Ut(e,t,n,r,i){if(!b(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=zt(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Wt(e){return Gt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function k(e){return!!(e&&e.__v_isShallow)}function Kt(e){return e?!!e.__v_raw:!1}function A(e){let t=e&&e.__v_raw;return t?A(t):e}function qt(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&de(e,`__v_skip`,!0),e}var Jt=e=>b(e)?Bt(e):e,Yt=e=>b(e)?Ht(e):e;function j(e){return e?e.__v_isRef===!0:!1}function M(e){return Xt(e,!1)}function Xt(e,t){return j(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new et,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:A(e),this._value=t?e:Jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||k(e)||Gt(e);e=n?e:A(e),T(e,t)&&(this._rawValue=e,this._value=n?e:Jt(e),this.dep.trigger())}};function Qt(e){return j(e)?e.value:e}var $t={get:(e,t,n)=>t===`__v_raw`?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return j(i)&&!j(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function en(e){return Wt(e)?e:new Proxy(e,$t)}var tn=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new et,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function nn(e){return new tn(e)}var rn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new et(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&D!==this)return Re(this,!0),!0}get value(){let e=this.dep.track();return We(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function an(e,t,n=!1){let r,i;return _(e)?r=e:(r=e.get,i=e.set),new rn(r,i,n)}var on={},sn=new WeakMap,cn=void 0;function ln(e,t=!1,n=cn){if(n){let t=sn.get(n);t||sn.set(n,t=[]),t.push(e)}}function un(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:k(e)||o===!1||o===0?dn(e,1):dn(e),m,h,g,v,y=!1,b=!1;if(j(e)?(h=()=>e.value,y=k(e)):Wt(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>Wt(e)||k(e)),h=()=>e.map(e=>{if(j(e))return e.value;if(Wt(e))return f(e);if(_(e))return d?d(e,2):e()})):h=_(e)?t?d?()=>d(e,2):e:()=>{if(g){Ye();try{g()}finally{Xe()}}let t=cn;cn=m;try{return d?d(e,3,[v]):e(v)}finally{cn=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>dn(e(),t)}let x=Me(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(on):on,ee=e=>{if(!(!(m.flags&1)||!m.dirty&&!e)){if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>T(e,C[t])):T(n,C))){g&&g();let e=cn;cn=m;try{let e=[n,C===on?void 0:b&&C[0]===on?[]:C,v];C=n,d?d(t,3,e):t(...e)}finally{cn=e}}}else m.run()}};return l&&l(ee),m=new Pe(h),m.scheduler=c?()=>c(ee,!1):ee,v=e=>ln(e,!1,m),g=m.onStop=()=>{let e=sn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();sn.delete(m)}},t?i?ee(!0):C=m.run():c?c(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function dn(e,t=1/0,n){if(t<=0||!b(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,j(e))dn(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)dn(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{dn(e,t,n)});else if(te(e)){for(let r in e)dn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dn(e[r],t,n)}return e}function fn(e,t,n,r){try{return r?e(...r):e()}catch(e){mn(e,t,n)}}function pn(e,t,n,r){if(_(e)){let i=fn(e,t,n,r);return i&&x(i)&&i.catch(e=>{mn(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push(pn(e[a],t,n,r));return i}}function mn(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){Ye(),fn(o,null,10,[e,i,a]),Xe();return}}hn(e,n,a,i,s)}function hn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var N=[],gn=-1,_n=[],vn=null,yn=0,bn=Promise.resolve(),xn=null;function Sn(e){let t=xn||bn;return e?t.then(this?e.bind(this):e):t}function Cn(e){let t=gn+1,n=N.length;for(;t<n;){let r=t+n>>>1,i=N[r],a=kn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function wn(e){if(!(e.flags&1)){let t=kn(e),n=N[N.length-1];!n||!(e.flags&2)&&t>=kn(n)?N.push(e):N.splice(Cn(t),0,e),e.flags|=1,Tn()}}function Tn(){xn||=bn.then(An)}function En(e){if(!p(e))vn&&e.id===-1?vn.splice(yn+1,0,e):e.flags&1||(_n.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)_n.push(e[t]);Tn()}function Dn(e,t,n=gn+1){for(;n<N.length;n++){let t=N[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;N.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function On(e){if(_n.length){let e=[...new Set(_n)].sort((e,t)=>kn(e)-kn(t));if(_n.length=0,vn){for(let t=0;t<e.length;t++)vn.push(e[t]);return}for(vn=e,yn=0;yn<vn.length;yn++){let e=vn[yn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vn=null,yn=0}}var kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function An(e){try{for(gn=0;gn<N.length;gn++){let e=N[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<N.length;gn++){let e=N[gn];e&&(e.flags&=-2)}gn=-1,N.length=0,On(e),xn=null,(N.length||_n.length)&&An(e)}}var jn=null,Mn=null;function Nn(e){let t=jn;return jn=e,Mn=e&&e.type.__scopeId||null,t}function Pn(e,t=jn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ea(-1);let i=Nn(t),a=Zi.length,o;try{o=e(...n)}finally{for(let e=Zi.length;e>a;e--)Qi();Nn(i),r._d&&ea(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fn(e,t){if(jn===null)return e;let n=Ia(jn),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=r]=t[e];a&&(_(a)&&(a={mounted:a,updated:a}),a.deep&&dn(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function In(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ye(),pn(c,n,8,[e.el,s,e,t]),Xe())}}function Ln(e,t){if(H){let n=H.provides,r=H.parent&&H.parent.provides;r===n&&(n=H.provides=Object.create(r)),n[e]=t}}function Rn(e,t,n=!1){let r=xa();if(r||ii){let i=ii?ii._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}var zn=Symbol.for(`v-scx`),Bn=()=>Rn(zn);function Vn(e,t){return Un(e,null,{flush:`sync`})}function Hn(e,t,n){return Un(e,t,n)}function Un(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(Da){if(s===`sync`){let e=Bn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=H;u.call=(e,t,n)=>pn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{F(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():wn(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=un(e,t,u);return Da&&(f?f.push(h):d&&h()),h}function Wn(e,t,n){let r=this.proxy,i=v(e)?e.includes(`.`)?Gn(r,e):()=>r[e]:e.bind(r,r),a;_(t)?a=t:(a=t.handler,n=t);let o=wa(this),s=Un(i,a.bind(r),n);return o(),s}function Gn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Kn=new WeakMap,qn=Symbol(`_vte`),Jn=e=>e.__isTeleport,Yn=e=>e&&(e.disabled||e.disabled===``),Xn=e=>e&&(e.defer||e.defer===``),Zn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Qn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,$n=(e,t)=>{let n=e&&e.to;return v(n)?t?t(n):null:n},er={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Yn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Yn(e.props),r=e.target=$n(e.props,m),a=ar(r,e,h,p);r&&(o!==`svg`&&Zn(r)?o=`svg`:o!==`mathml`&&Qn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),ir(e,!1)))},S=e=>{let t=()=>{if(Kn.get(e)===t){if(Kn.delete(e),Yn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),ir(e,!0)}x(e)}};Kn.set(e,t),F(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Xn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),ir(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Kn.get(e);if(u){u.flags|=8,Kn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Yn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Zn(p)?o=`svg`:(o===`mathml`||Qn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Vi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):tr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=$n(t.props,m);e&&(t.target=e,tr(t,e,null,l,0))}else g&&tr(t,p,h,l,1);ir(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Yn(f),m=a||!p,h=Kn.get(e);if(h&&(h.flags|=8,Kn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:tr,hydrate:nr};function tr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Kn.has(e)&&(!d||Yn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function nr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=$n(t.props,c),h=Yn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||ar(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||ar(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),ir(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var rr=er;function ir(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function ar(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[qn]=o,e&&(r(a,e,i),r(o,e,i)),o}var or=Symbol(`_leaveCb`);function sr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Yi){t=n;break}}return t}function cr(e){if(!gr(e))return Jn(e.type)&&e.children?sr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&_(n.default))return n.default()}}function lr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;lr(Jn(n.type)&&cr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ur(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function dr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var fr=new WeakMap;function pr(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>pr(e,t&&(p(t)?t[r]:t),n,i,a));return}if(hr(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&pr(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?Ia(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,y=A(g),b=g===r?o:e=>!dr(h,e)&&f(y,e),x=(e,t)=>!(t&&dr(h,t));if(m!=null&&m!==d){if(mr(t),v(m))h[m]=null,b(m)&&(g[m]=null);else if(j(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(_(d))fn(d,l,12,[c,h]);else{let t=v(d),r=j(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),fr.delete(e)};t.id=-1,fr.set(e,t),F(t,n)}else mr(e),i()}}}function mr(e){let t=fr.get(e);t&&(t.flags|=8,fr.delete(e))}me().requestIdleCallback,me().cancelIdleCallback;var hr=e=>!!e.type.__asyncLoader,gr=e=>e.type.__isKeepAlive;function _r(e,t){yr(e,`a`,t)}function vr(e,t){yr(e,`da`,t)}function yr(e,t,n=H){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(xr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)gr(e.parent.vnode)&&br(r,t,n,e),e=e.parent}}function br(e,t,n,r){let i=xr(t,e,r,!0);Or(()=>{u(r[t],i)},n)}function xr(e,t,n=H,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ye();let i=wa(n),a=pn(t,n,e,r);return i(),Xe(),a};return r?i.unshift(a):i.push(a),a}}var Sr=e=>(t,n=H)=>{(!Da||e===`sp`)&&xr(e,(...e)=>t(...e),n)},Cr=Sr(`bm`),wr=Sr(`m`),Tr=Sr(`bu`),Er=Sr(`u`),Dr=Sr(`bum`),Or=Sr(`um`),kr=Sr(`sp`),Ar=Sr(`rtg`),jr=Sr(`rtc`);function Mr(e,t=H){xr(`ec`,e,t)}var Nr=Symbol.for(`v-ndc`);function Pr(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||v(e)){let n=o&&Wt(e),r=!1,s=!1;n&&(r=!k(e),s=Gt(e),e=ct(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Yt(Jt(e[n])):Jt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(b(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var Fr=e=>e?Ea(e)?Ia(e):Fr(e.parent):null,Ir=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||=()=>{wn(e.update)},$nextTick:e=>e.n||=Sn.bind(e.proxy),$watch:e=>Wn.bind(e)}),Lr=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),Rr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(Lr(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else Vr&&(s[t]=0)}let u=Ir[t],d,p;if(u)return t===`$attrs`&&O(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return Lr(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||Lr(t,c)||f(o,c)||f(i,c)||f(Ir,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function zr(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function Br(e,t){return!e||!t?e||t:p(e)&&p(t)?e.concat(t):l({},zr(e),zr(t))}var Vr=!0;function Hr(e){let t=Kr(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&Wr(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:v,deactivated:y,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:ie,serverPrefetch:ae,expose:w,inheritAttrs:oe,components:se,directives:ce,filters:le}=t;if(u&&Ur(u,r,null),s)for(let e in s){let t=s[e];_(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);b(t)&&(e.data=Bt(t))}if(Vr=!0,o)for(let e in o){let t=o[e],i=Ra({get:_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):a,set:!_(t)&&_(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)Gr(c[e],r,n,e);if(l){let e=_(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Ln(t,e[t])})}d&&Wr(d,e,`c`);function T(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(T(Cr,f),T(wr,m),T(Tr,h),T(Er,g),T(_r,v),T(vr,y),T(Mr,ie),T(jr,ne),T(Ar,re),T(Dr,S),T(Or,ee),T(kr,ae),p(w)){if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}te&&e.render===a&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),ce&&(e.directives=ce),ae&&ur(e)}function Ur(e,t,n=a){p(e)&&(e=Zr(e));for(let n in e){let r=e[n],i;i=b(r)?`default`in r?Rn(r.from||n,r.default,!0):Rn(r.from||n):Rn(r),j(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Wr(e,t,n){pn(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gr(e,t,n,r){let i=r.includes(`.`)?Gn(n,r):()=>n[r];if(v(e)){let n=t[e];_(n)&&Hn(i,n)}else if(_(e))Hn(i,e.bind(n));else if(b(e)){if(p(e))e.forEach(e=>Gr(e,t,n,r));else{let r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&Hn(i,r,e)}}}function Kr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>qr(c,e,o,!0)),qr(c,t,o)),b(t)&&a.set(t,c),c}function qr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&qr(e,a,n,!0),i&&i.forEach(t=>qr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Jr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Jr={data:Yr,props:$r,emits:$r,methods:Qr,computed:Qr,beforeCreate:P,created:P,beforeMount:P,mounted:P,beforeUpdate:P,updated:P,beforeDestroy:P,beforeUnmount:P,destroyed:P,unmounted:P,activated:P,deactivated:P,errorCaptured:P,serverPrefetch:P,components:Qr,directives:Qr,watch:ei,provide:Yr,inject:Xr};function Yr(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function Xr(e,t){return Qr(Zr(e),Zr(t))}function Zr(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function P(e,t){return e?[...new Set([].concat(e,t))]:t}function Qr(e,t){return e?l(Object.create(null),e,t):t}function $r(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),zr(e),zr(t??{})):t}function ei(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=P(e[r],t[r]);return n}function ti(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ni=0;function ri(e,t){return function(n,r=null){_(n)||(n=l({},n)),r!=null&&!b(r)&&(r=null);let i=ti(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:ni++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:za,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&_(e.install)?(a.add(e),e.install(c,...t)):_(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||V(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Ia(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(pn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=ii;ii=c;try{return e()}finally{ii=t}}};return c}}var ii=null;function ai(e,t,n=r){let i=xa(),a=w(t),o=se(t),s=oi(e,a),c=nn((s,c)=>{let l,u=r,d;return Vn(()=>{let t=e[a];T(l,t)&&(l=t,c())}),{get(){return s(),n.get?n.get(l):l},set(e){let s=n.set?n.set(e):e;if(!T(s,l)&&!(u!==r&&T(e,u)))return;let f=i.vnode.props,p=!!(f&&(t in f||a in f||o in f)&&(`onUpdate:${t}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${t}`,s),T(e,u)&&(T(e,s)&&!T(s,d)||p&&u!==r&&!T(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||r:c,done:!1}:{done:!0}}}},c}var oi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${se(t)}Modifiers`];function si(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&oi(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>v(e)?e.trim():e)),s.number&&(a=n.map(fe)));let c,l=i[c=le(t)]||i[c=le(w(t))];!l&&o&&(l=i[c=le(se(t))]),l&&pn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,pn(u,e,6,a)}}var ci=new WeakMap;function li(e,t,n=!1){let r=n?ci:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!_(e)){let r=e=>{let n=li(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(b(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),b(e)&&r.set(e,o),o)}function ui(e,t){return!e||!s(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,se(t))||f(e,t))}function di(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Nn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=pa(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=pa(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:fi(s)}}catch(t){Zi.length=0,mn(t,e,1),v=V(Yi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=pi(y,a)),b=la(b,y,!1,!0))}return n.dirs&&(b=la(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&lr(Jn(b.type)&&cr(b)||b,n.transition),v=b,Nn(_),v}var fi=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},pi=(e,t)=>{let n={};for(let r in e)(!c(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(gi(o,r,n)&&!ui(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||hi(r,o,l):!!o;return!1}function hi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(gi(t,e,a)&&!ui(n,a))return!0}return!1}function gi(e,t,n){let r=e[n],i=t[n];return n===`style`&&b(r)&&b(i)?!Te(r,i):r!==i}function _i({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var vi={},yi=()=>Object.create(vi),bi=e=>Object.getPrototypeOf(e)===vi;function xi(e,t,n,r=!1){let i={},a=yi();e.propsDefaults=Object.create(null),Ci(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Vt(i):e.type.props?i:a,e.attrs=a}function Si(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=A(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ui(e.emitsOptions,o))continue;let u=t[o];if(c){if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=w(o);i[t]=wi(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Ci(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!f(t,a)&&((r=se(a))===a||!f(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=wi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!f(t,e))&&(delete a[e],l=!0)}l&&ot(e.attrs,`set`,``)}function Ci(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(re(r))continue;let l=t[r],u;a&&f(a,u=w(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:ui(e.emitsOptions,r)||(!(r in i)||l!==i[r])&&(i[r]=l,s=!0)}if(o){let t=A(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=wi(a,t,s,i[s],e,!f(i,s))}}return s}function wi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=wa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var Ti=new WeakMap;function Ei(e,t,n=!1){let a=n?Ti:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!_(e)){let r=e=>{d=!0;let[n,r]=Ei(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return b(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=w(s[e]);Di(t)&&(c[t]=r)}else if(s)for(let e in s){let t=w(e);if(Di(t)){let n=s[e],r=c[t]=p(n)||_(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=_(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=_(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return b(e)&&a.set(e,m),m}function Di(e){return e[0]!==`$`&&!re(e)}var Oi=e=>e===`_`||e===`_ctx`||e===`$stable`,ki=e=>p(e)?e.map(pa):[pa(e)],Ai=(e,t,n)=>{if(t._n)return t;let r=Pn((...e)=>ki(t(...e)),n);return r._c=!1,r},ji=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Oi(n))continue;let i=e[n];if(_(i))t[n]=Ai(n,i,r);else if(i!=null){let e=ki(i);t[n]=()=>e}}},Mi=(e,t)=>{let n=ki(t);e.slots.default=()=>n},Ni=(e,t,n)=>{for(let r in t)(n||!Oi(r))&&(e[r]=t[r])},Pi=(e,t,n)=>{let r=e.slots=yi();if(e.vnode.shapeFlag&32){let e=t._;e?(Ni(r,t,n),n&&de(r,`_`,e,!0)):ji(t,r)}else t&&Mi(e,t)},Fi=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Ni(a,t,n):(o=!t.$stable,ji(t,a)),s=t}else t&&(Mi(e,t),s={default:1});if(o)for(let e in a)!Oi(e)&&s[e]==null&&delete a[e]},F=qi;function Ii(e){return Li(e)}function Li(e,t){let n=me();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ia(e,t)&&(r=Ce(e),ve(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ji:y(e,t,n,r);break;case Yi:b(e,t,n,r);break;case Xi:e??x(t,n,r,o);break;case I:se(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?pr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&pr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ae(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ie(e.children,d,null,r,i,Ri(e,a),s,u),_&&In(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!re(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&_a(f,r,e)}_&&In(e,null,r,`beforeMount`);let v=Bi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&F(()=>{try{f&&_a(f,r,e),v&&g.enter(d),_&&In(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ki(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ie=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ma(e[l]):pa(e[l]);v(null,c,t,n,r,i,a,o,s)}},ae=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&zi(n,!1),(g=h.onVnodeBeforeUpdate)&&_a(g,n,t,e),f&&In(t,e,n,`beforeUpdate`),n&&zi(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?w(e.dynamicChildren,d,l,n,i,Ri(t,a),o):s||pe(e,t,l,null,n,i,Ri(t,a),o,!1),u>0){if(u&16)oe(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&oe(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&F(()=>{g&&_a(g,n,t,e),f&&In(t,e,n,`updated`)},i)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===I||!ia(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},oe=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!re(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(re(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ie(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Vi(e,t,!0)):pe(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):T(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=ba(e,r,i);if(gr(e)&&(s.ctx.renderer=Ee),Oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=V(Yi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},T=(e,t,n)=>{let r=t.component=e.component;if(mi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){fe(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ui(e);if(n){t&&(t.el=c.el,fe(e,t,o)),n.asyncDep.then(()=>{F(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;zi(e,!1),t?(t.el=c.el,fe(e,t,o)):t=c,n&&ue(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&_a(d,s,t,c),zi(e,!0);let f=di(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Ce(p),e,i,a),t.el=f.el,u===null&&_i(e,f.el),r&&F(r,i),(d=t.props&&t.props.onVnodeUpdated)&&F(()=>_a(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=hr(t);if(zi(e,!1),l&&ue(l),!m&&(o=c&&c.onVnodeBeforeMount)&&_a(o,d,t),zi(e,!0),s&&Oe){let t=()=>{e.subTree=di(e),Oe(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=di(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&F(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;F(()=>_a(o,d,e),i)}(t.shapeFlag&256||d&&hr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&F(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Pe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>wn(u),zi(e,!0),l()},fe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Si(e,t.props,r,n),Fi(e,t.children,n),Ye(),Dn(e),Xe()},pe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ge(l,d,n,r,i,a,o,s,c);return}if(f&256){he(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&Se(l,i,a),d!==l&&p(n,d)):u&16?m&16?ge(l,d,n,r,i,a,o,s,c):Se(l,i,a,!0):(u&8&&p(n,``),m&16&&ie(d,n,r,i,a,o,s,c))},he=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?ma(t[p]):pa(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?Se(e,a,o,!0,!1,f):ie(t,n,r,a,o,s,c,l,f)},ge=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?ma(t[u]):pa(t[u]);if(ia(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?ma(t[p]):pa(t[p]);if(ia(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?ma(t[u]):pa(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ve(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ma(t[u]):pa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){ve(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ia(r,t[_])){i=_;break}i===void 0?ve(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let ee=x?Hi(C):i;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||Gi(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?_e(i,n,p,2):_--)}}},_e=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){_e(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ee);return}if(c===I){o(a,t,n);for(let e=0;e<u.length;e++)_e(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Xi){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[or]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),F(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[or];a._isLeaving&&a[or](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},ve=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ye(),pr(s,null,n,e,!0),Xe()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!hr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&_a(_,t,e),u&6)xe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&In(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==I||d>0&&d&64)?Se(l,t,n,!1,!0):(a===I&&d&384||!i&&u&16)&&Se(c,t,n),r&&ye(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&F(()=>{_&&_a(_,t,e),h&&In(e,null,t,`unmounted`),v&&(e.el=null)},n)},ye=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===I){be(n,r);return}if(t===Xi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},be=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},xe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Wi(c),Wi(l),r&&ue(r),i.stop(),a&&(a.flags|=8,ve(o,e,t,n)),s&&F(s,t),F(()=>{e.isUnmounted=!0},t)},Se=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ve(e[o],t,n,r,i)},Ce=e=>{if(e.shapeFlag&6)return Ce(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[qn];return n?h(n):t},we=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ve(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,we||=(we=!0,Dn(r),On(),!1)},Ee={p:v,um:ve,m:_e,r:ye,mt:le,mc:ie,pc:pe,pbc:w,n:Ce,o:e},De,Oe;return t&&([De,Oe]=t(Ee)),{render:Te,hydrate:De,createApp:ri(Te,De)}}function Ri({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function zi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vi(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ma(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Vi(t,a)),a.type===Ji&&(a.patchFlag===-1&&(a=i[e]=ma(a)),a.el=t.el),a.type===Yi&&!a.el&&(a.el=t.el)}}function Hi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ui(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ui(t)}function Wi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Gi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Gi(t.subTree):null}var Ki=e=>e.__isSuspense;function qi(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):En(e)}var I=Symbol.for(`v-fgt`),Ji=Symbol.for(`v-txt`),Yi=Symbol.for(`v-cmt`),Xi=Symbol.for(`v-stc`),Zi=[],L=null;function R(e=!1){Zi.push(L=e?null:[])}function Qi(){Zi.pop(),L=Zi[Zi.length-1]||null}var $i=1;function ea(e,t=!1){$i+=e,e<0&&L&&t&&(L.hasOnce=!0)}function ta(e){return e.dynamicChildren=$i>0?L||i:null,Qi(),$i>0&&L&&L.push(e),e}function z(e,t,n,r,i,a){return ta(B(e,t,n,r,i,a,!0))}function na(e,t,n,r,i){return ta(V(e,t,n,r,i,!0))}function ra(e){return e?e.__v_isVNode===!0:!1}function ia(e,t){return e.type===t.type&&e.key===t.key}var aa=({key:e})=>e??null,oa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:v(e)||j(e)||_(e)?{i:jn,r:e,k:t,f:!!n}:e);function B(e,t=null,n=null,r=0,i=null,a=e===I?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&aa(t),ref:t&&oa(t),scopeId:Mn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jn};return s?(ha(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=v(n)?8:16),$i>0&&!o&&L&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&L.push(c),c}var V=sa;function sa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Nr)&&(e=Yi),ra(e)){let r=la(e,t,!0);return n&&ha(r,n),$i>0&&!a&&L&&(r.shapeFlag&6?L[L.indexOf(e)]=r:L.push(r)),r.patchFlag=-2,r}if(La(e)&&(e=e.__vccOpts),t){t=ca(t);let{class:e,style:n}=t;e&&!v(e)&&(t.class=be(e)),b(n)&&(Kt(n)&&!p(n)&&(n=l({},n)),t.style=he(n))}let o=v(e)?1:Ki(e)?128:Jn(e)?64:b(e)?4:_(e)?2:0;return B(e,t,n,r,i,o,a,!0)}function ca(e){return e?Kt(e)||bi(e)?l({},e):e:null}function la(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ga(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&aa(l),ref:t&&t.ref?n&&a?p(a)?a.concat(oa(t)):[a,oa(t)]:oa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==I?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&la(e.ssContent),ssFallback:e.ssFallback&&la(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&lr(u,c.clone(u)),u}function ua(e=` `,t=0){return V(Ji,null,e,t)}function da(e,t){let n=V(Xi,null,e);return n.staticCount=t,n}function fa(e=``,t=!1){return t?(R(),na(Yi,null,e)):V(Yi,null,e)}function pa(e){return e==null||typeof e==`boolean`?V(Yi):p(e)?V(I,null,e.slice()):ra(e)?ma(e):V(Ji,null,String(e))}function ma(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:la(e)}function ha(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ha(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!bi(t)?t._ctx=jn:r===3&&jn&&(jn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(_(t)){if(r&65){ha(e,{default:t});return}t={default:t,_ctx:jn},n=32}else t=String(t),r&64?(n=16,t=[ua(t)]):n=8;e.children=t,e.shapeFlag|=n}function ga(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=he([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function _a(e,t,n,r=null){pn(e,t,7,[n,r])}var va=ti(),ya=0;function ba(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||va,o={uid:ya++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new je(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(i,a),emitsOptions:li(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=si.bind(null,o),e.ce&&e.ce(o),o}var H=null,xa=()=>H||jn,Sa,Ca;{let e=me(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Sa=t(`__VUE_INSTANCE_SETTERS__`,e=>H=e),Ca=t(`__VUE_SSR_SETTERS__`,e=>Da=e)}var wa=e=>{let t=H;return Sa(e),e.scope.on(),()=>{e.scope.off(),Sa(t)}},Ta=()=>{H&&H.scope.off(),Sa(null)};function Ea(e){return e.vnode.shapeFlag&4}var Da=!1;function Oa(e,t=!1,n=!1){t&&Ca(t);let{props:r,children:i}=e.vnode,a=Ea(e);xi(e,r,a,t),Pi(e,i,n||t);let o=a?ka(e,t):void 0;return t&&Ca(!1),o}function ka(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rr);let{setup:r}=n;if(r){Ye();let n=e.setupContext=r.length>1?Fa(e):null,i=wa(e),a=fn(r,e,0,[e.props,n]),o=x(a);if(Xe(),i(),(o||e.sp)&&!hr(e)&&ur(e),o){if(a.then(Ta,Ta),t)return a.then(n=>{Ca(!0);try{Aa(e,n,t)}finally{Ca(!1)}}).catch(t=>{mn(t,e,0)});e.asyncDep=a}else Aa(e,a,t)}else Na(e,t)}function Aa(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:b(t)&&(e.setupState=en(t)),Na(e,n)}var ja,Ma;function Na(e,t,n){let r=e.type;if(!e.render){if(!t&&ja&&!r.render){let t=r.template||Kr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ja(t,l(l({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||a,Ma&&Ma(e)}{let t=wa(e);Ye();try{Hr(e)}finally{Xe(),t()}}}var Pa={get(e,t){return O(e,`get`,``),e[t]}};function Fa(e){return{attrs:new Proxy(e.attrs,Pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ia(e){return e.exposed?e.exposeProxy||=new Proxy(en(qt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ir)return Ir[n](e)},has(e,t){return t in e||t in Ir}}):e.proxy}function La(e){return _(e)&&`__vccOpts`in e}var Ra=(e,t)=>an(e,t,Da),za=`3.5.41`,Ba=void 0,Va=typeof window<`u`&&window.trustedTypes;if(Va)try{Ba=Va.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ha=Ba?e=>Ba.createHTML(e):e=>e,Ua=`http://www.w3.org/2000/svg`,Wa=`http://www.w3.org/1998/Math/MathML`,Ga=typeof document<`u`?document:null,Ka=Ga&&Ga.createElement(`template`),qa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ga.createElementNS(Ua,e):t===`mathml`?Ga.createElementNS(Wa,e):n?Ga.createElement(e,{is:n}):Ga.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ga.createTextNode(e),createComment:e=>Ga.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ga.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ka.innerHTML=Ha(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ka.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ja=Symbol(`_vtc`);function Ya(e,t,n){let r=e[Ja];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Xa=Symbol(`_vod`),Za=Symbol(`_vsh`),Qa=Symbol(``),$a=/(?:^|;)\s*display\s*:/;function eo(e,t,n){let r=e.style,i=v(n),a=!1;if(n&&!i){if(t){if(v(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??no(r,t,``)}else for(let e in t)n[e]??no(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?no(r,i,``):oo(e,i,!v(t)&&t?t[i]:void 0,o)||no(r,i,o)}}else if(i){if(t!==n){let e=r[Qa];e&&(n+=`;`+e),r.cssText=n,a=$a.test(n)}}else t&&e.removeAttribute(`style`);Xa in e&&(e[Xa]=a?r.display:``,e[Za]&&(r.display=`none`))}var to=/\s*!important$/;function no(e,t,n){if(p(n))n.forEach(n=>no(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ao(e,t);to.test(n)?e.setProperty(se(r),n.replace(to,``),`important`):e[r]=n}}var ro=[`Webkit`,`Moz`,`ms`],io={};function ao(e,t){let n=io[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return io[t]=r;r=ce(r);for(let n=0;n<ro.length;n++){let i=ro[n]+r;if(i in e)return io[t]=i}return t}function oo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&v(r)&&n===r}var so=`http://www.w3.org/1999/xlink`;function co(e,t,n,r,i,a=Se(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(so,t.slice(6,t.length)):e.setAttributeNS(so,t,n):n==null||a&&!Ce(n)?e.removeAttribute(t):e.setAttribute(t,a?``:y(n)?String(n):n)}function lo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ha(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ce(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function uo(e,t,n,r){e.addEventListener(t,n,r)}function fo(e,t,n,r){e.removeEventListener(t,n,r)}var po=Symbol(`_vei`);function mo(e,t,n,r,i=null){let a=e[po]||(e[po]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=_o(t);r?uo(e,n,a[t]=xo(r,i),s):o&&(fo(e,n,o,s),a[t]=void 0)}}var ho=/(Once|Passive|Capture)$/,go=/^on:?(?:Once|Passive|Capture)$/;function _o(e){let t,n;for(;(n=e.match(ho))&&!go.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var vo=0,yo=Promise.resolve(),bo=()=>vo||=(yo.then(()=>vo=0),Date.now());function xo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(p(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&pn(e,t,5,a)}}else pn(r,t,5,[e])};return n.value=e,n.attached=bo(),n}var So=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ya(e,r,o):t===`style`?eo(e,n,r):s(t)?c(t)||mo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):wo(e,t,r,o))?(lo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&co(e,t,r,o,a,t!==`value`)):e._isVueCE&&(To(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!v(r)))?lo(e,w(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),co(e,t,r,o))};function wo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&So(t)&&_(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return So(t)&&v(n)?!1:t in e}function To(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var Eo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return p(t)?e=>ue(t,e):t};function Do(e){e.target.composing=!0}function Oo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ko=Symbol(`_assign`),Ao=Symbol(`_initialValue`);function jo(e,t,n){return t&&(e=e.trim()),n&&(e=fe(e)),e}var Mo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[Ao]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[Ao]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ko]=Eo(i);let a=r||i.props&&i.props.type===`number`;uo(e,t?`change`:`input`,t=>{t.target.composing||e[ko](jo(e.value,n,a))}),(n||a)&&uo(e,`change`,()=>{e.value=jo(e.value,n,a)}),t||(uo(e,`compositionstart`,Do),uo(e,`compositionend`,Oo),uo(e,`change`,Oo))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[Ao];delete e[Ao],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[ko](jo(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ko]=Eo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?fe(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},No={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,uo(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?fe(Fo(e)):Fo(e));e[ko](e.multiple?h(e._modelValue)?new Set(t):t:t[0]),e._assigning=!0,Sn(()=>{e._assigning=!1})}),e[ko]=Eo(r)},mounted(e,{value:t}){Po(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[ko]=Eo(n)},updated(e,{value:t}){e._assigning||Po(e,t)}};function Po(e,t){let n=e.multiple,r=p(t);if(!(n&&!r&&!h(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Fo(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Ee(t,o)>-1}else a.selected=t.has(o)}else if(Te(Fo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Fo(e){return`_value`in e?e._value:e.value}var Io=l({patchProp:Co},qa),Lo;function Ro(){return Lo||=Ii(Io)}var zo=((...e)=>{let t=Ro().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Vo(e);if(!r)return;let i=t._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Bo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Bo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Vo(e){return v(e)?document.querySelector(e):e}var Ho=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Uo={},Wo={xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 1103.52 200`,fill:`currentColor`};function Go(e,t){return R(),z(`svg`,Wo,[...t[0]||=[da(`<title>TaxonWorks</title><path d="M14.2,63.07C24.26,63.07,28,76.31,28,76.31s5.05,15.47,15.35,15.47c7.71,0,9.42-6.32,9.8-9.09,0-.13,0-0.25,0-0.38s0-.5.07-0.76c0-.05,0-0.1,0-0.15a4.56,4.56,0,0,0-2.71-4.82h0a18.22,18.22,0,0,1-8-5.55c-6.4-7.4-3-17,4.5-23.62-3.5-4-8.05-8.66-12-10.77C26.3,32,19.32,39.25,18.79,39.82L18.69,40q-0.9,1.23-1.76,2.48l-0.07.1Q16,43.88,15.09,45.24L15,45.39c-0.5.8-1,1.59-1.47,2.4l-0.3.5q-1.57,2.68-3,5.47L10,54.27q-0.65,1.32-1.26,2.65l-0.06.13Q8,58.47,7.45,59.91l-0.22.55c-0.32.77-.63,1.55-0.92,2.33l-0.24.63q-0.54,1.44-1,2.91l-0.12.37c-0.08.26-.16,0.52-0.24,0.77A12.6,12.6,0,0,1,14.2,63.07Z"></path><path d="M36.15,33c5.35,1.76,11.4,6.83,15.72,11,0.53-.31,1.06-0.61,1.61-0.9a31.06,31.06,0,0,1,7.24-2.67c-2.39-4.94-5.58-12.81-4.88-18.31,1.43-11.17,13.65-12,13.65-12S58.27,12.47,59,22.89c0.35,5,4.67,12.45,7.49,16.79,7-.1,13,2.69,15.75,8a12.48,12.48,0,0,1,.7,1.64h0a5.1,5.1,0,0,0,2.34,2.4c3.64,1.17,7.56,2.55,11.65,4.19a148.81,148.81,0,0,1,17,8.06,0.89,0.89,0,0,0,1-1.42c-27.24-26.14-8-36.35-8-36.35-9.84,14.24,6.6,24.52,25.49,35.14,16.64,9.35,28.42,19.49,41.3,12.67,6.42-3.4,1.94-11-1-15.16a53.74,53.74,0,0,1-5.6-9.24,10.41,10.41,0,0,1-.8-6.61c0.68-3.11-.39-6.78-2.75-10.49-1.75-2.76-5.12-5.68-7.62-7.63a21.18,21.18,0,0,1-4.26-4.42c-9-12.61-32.18-17.89-32.18-17.89h0A97.63,97.63,0,0,0,54,10.16h0A97.4,97.4,0,0,0,34.61,22.89l-0.75.63q-2.16,1.82-4.17,3.81l0,0q-1.17,1.13-2.31,2.31l0,0Q25.07,32,23,34.5l-0.17.2-0.38.46C25.21,32.8,29.65,30.85,36.15,33Zm109.64,0.94A7.74,7.74,0,0,1,156.55,42a7.22,7.22,0,0,1-7.73-.9A7.22,7.22,0,0,1,145.79,33.93Z"></path><path d="M53.17,106.91c-0.2-2-.36-4-0.44-6.3a18.44,18.44,0,0,1-7.22,1.47c-19,0-19.52-18.78-26.22-29.15-7-10.84-16.79.92-17.76,7.24,0,0.3-.09.54-0.13,0.72-0.11.64-.22,1.29-0.32,1.94C1,83.1,1,83.37,1,83.64c-0.12.78-.21,1.56-0.3,2.35,0,0.27-.06.54-0.09,0.81-0.11,1-.21,2.07-0.29,3.11,0,0.11,0,.22,0,0.33Q0.16,91.65.1,93.07q0,0.43,0,.87Q0,95.32,0,96.7c0,0.12,0,.23,0,0.35s0,0.08,0,.12,0,0.08,0,.13c0,0.4,0,.81,0,1.21s0,0.76,0,1.15c0,0.58,0,1.16.06,1.73,0,0.23,0,.47,0,0.7a97.2,97.2,0,0,0,43,76c-7.95-7.83-12.7-17.75-12.7-28.55,0-13.43,7.35-26,19.06-34.44A9,9,0,0,0,53.17,106.91Z"></path><path d="M128.31,170a59.45,59.45,0,0,1-18.3,4.43c-1.07.07-2.19,0.12-3.33,0.12-12.32,0-28.36-4.8-40.71-25.28l-1.62-2.67a16.61,16.61,0,0,0-2.91,9.33c0,13.89,16.65,26.49,36.65,26.49a58.48,58.48,0,0,0,15.89-2c-4.59,2.87-13.84,5.55-21.86,5.55C69.17,186,50,170.76,50,152.72a31.42,31.42,0,0,1,5.75-17.61,8.26,8.26,0,0,0,1.08-7.19h0c-10.55,6.11-17,15.44-17,26.6,0,17.19,15.31,31.89,37,37.89,1.23,0.26,2.46.5,3.7,0.71C96.15,195.74,110,193,119.45,184A35.12,35.12,0,0,0,128.31,170Z"></path><path d="M171,33.85A87.33,87.33,0,0,1,143,160.4l-0.19.17a6.35,6.35,0,0,1,.14-1.3,26.75,26.75,0,0,1,4.37-10.79c7.46-10.69,12.43-27-.29-48.1-7-11.63-21.68-28-51.73-40.11-4.13-1.66-8.12-3.06-11.81-4.23l-1.54-.48-0.18-.06q-1.59-.49-3.1-0.92l-0.15,0-2.93-.81-0.08,0-1.34-.35-0.07,0-2.58-.64-0.14,0-2.27-.53-0.17,0-1-.21h0L67,51.67l-0.18,0-0.71-.15-0.18,0-0.75-.15-0.15,0-0.55-.11-0.18,0L63.68,51l-0.12.42,0,0.14-0.09.32-0.05.18-0.09.31-0.06.22-0.09.32-0.06.23-0.1.35-0.07.24-0.1.39-0.06.24-0.12.47-0.08.31-0.14.56L62.33,56l-0.11.45-0.08.32L62,57.2l-0.09.36-0.1.42-0.09.38-0.1.45-0.09.39-0.11.48-0.09.38-0.13.56-0.11.51L61,61.86l-0.08.4-0.11.55-0.1.46-0.1.51-0.1.49-0.1.52-0.1.5-0.1.54-0.09.5L60,66.9l-0.09.51-0.11.65-0.09.51-0.17,1-0.08.5-0.1.64-0.08.54-0.1.63-0.08.56L59,73.06l-0.08.58-0.09.64-0.08.57-0.09.68-0.07.56-0.09.76-0.06.5q-0.32,2.66-.56,5.48V83q-0.07.84-.13,1.71v0q-0.06.84-.11,1.71v0.08q-0.05.85-.09,1.73v0c-0.15,3-.21,6.22-0.15,9.54a127.22,127.22,0,0,0,.85,12.72c0,0.35.08,0.7,0.13,1.06a103,103,0,0,0,3.61,17,114.36,114.36,0,0,0,5.25,13.18c0.86,1.71,1.78,3.4,2.79,5.07,9.23,15.29,21.52,23,36.58,23,1,0,2.09,0,3.15-.11a55.64,55.64,0,0,0,20.21-5.6c4.93-24.48-8.37-59.28-36.07-88.3A163.2,163.2,0,0,0,81.71,64.4c9.22,6.92,13.87,10.66,19.22,16.27,37.83,39.64,49.7,89.72,26.51,111.86A35.67,35.67,0,0,1,115.52,200a36.48,36.48,0,0,0,15.42-8.64,34.66,34.66,0,0,0,3.76-4.24A97.3,97.3,0,0,0,171,33.85Z"></path><path d="M331.33,44.3H257v14h28.71v95.91h6.22a10.58,10.58,0,0,0,10.58-10.58V58.33h28.87v-14Z"></path><path d="M363,70.23q-15.82,0-25.45,5.55v15.5a41.61,41.61,0,0,1,24-7.34q9.46,0,13.54,4.32t4.08,12.8v4.73h-13.7q-16.15,0-25.12,6.61t-9,18.51a22.75,22.75,0,0,0,7.1,17.21q7.1,6.77,18.84,6.77,16,0,22.35-10.44v9.79h5.24a10.58,10.58,0,0,0,10.58-10.58V101.72Q395.44,70.24,363,70.23Zm16.15,56.44A15,15,0,0,1,374.64,138q-4.49,4.32-12.32,4.32-6.85,0-10.44-3.26a11.51,11.51,0,0,1-3.59-9,11.07,11.07,0,0,1,4.65-9.13q4.65-3.59,13.78-3.59h12.4v9.3Z"></path><path d="M534.45,70.4q-17.62,0-28.38,12.32T495.3,113.62q0,18.27,10.44,30.18t28.71,11.91q18.43,0,29-12.07T573.92,113q0-18.6-10.28-30.58T534.45,70.4ZM551.33,134q-5.79,8.16-16.88,8.16a19.21,19.21,0,0,1-16.47-8.4q-6-8.4-6-20.63,0-12.39,5.87-20.8t16.47-8.4q11.74,0,17.29,8.24t5.55,21.12Q557.12,125.86,551.33,134Z"></path><path d="M638,70.4q-18.43,0-25.77,15.33V82.12a10.58,10.58,0,0,0-10.58-10.58h-5.4v82.7h5.4a10.58,10.58,0,0,0,10.58-10.58V109.38q0-11.9,6-18.51a19,19,0,0,1,14.52-6.61q7.18,0,11.5,4.57T648.63,102v41.62a10.58,10.58,0,0,0,10.58,10.58h5.4V98.29q0-12.88-7.18-20.39T638,70.4Z"></path><path d="M854.92,70.4q-17.62,0-28.38,12.32t-10.77,30.91q0,18.27,10.44,30.18t28.71,11.91q18.43,0,29-12.07T894.39,113q0-18.6-10.28-30.58T854.92,70.4ZM871.8,134q-5.79,8.16-16.88,8.16a19.21,19.21,0,0,1-16.47-8.4q-6-8.4-6-20.63,0-12.39,5.87-20.8t16.47-8.4q11.74,0,17.29,8.24t5.55,21.12Q877.59,125.86,871.8,134Z"></path><path d="M930.53,86.06V82.12a10.58,10.58,0,0,0-10.58-10.58h-5.4v82.7h5.4a10.58,10.58,0,0,0,10.58-10.58V110.2a28.71,28.71,0,0,1,5.38-17.45q5.38-7.34,13.7-7.34a19.28,19.28,0,0,1,7.67,1.47V70.72h-5.06Q936.56,70.72,930.53,86.06Z"></path><path d="M1098.05,117.36q-5.47-5.3-15.09-9.54-0.82-.32-2.85-1.22t-2.85-1.31l-2.53-1.22a14.1,14.1,0,0,1-2.45-1.39q-0.73-.57-2-1.39a7.19,7.19,0,0,1-1.88-1.55,19.29,19.29,0,0,1-1.22-1.79,7.05,7.05,0,0,1-.9-2.12,9.75,9.75,0,0,1-.24-2.2,8.28,8.28,0,0,1,3.34-6.85q3.34-2.61,9.05-2.61,12.56,0,20.55,4.73V74.38q-7.5-3.59-20.88-3.59-12.23,0-20.39,6.2t-8.16,17.13q0,15.5,19.41,23.49,6.85,2.94,9.71,4.32a20.51,20.51,0,0,1,5.63,4.24,9,9,0,0,1,2.77,6.44,8.14,8.14,0,0,1-3.51,6.85q-3.51,2.61-9.87,2.61a44.58,44.58,0,0,1-23.65-7v15.17q9.79,4.89,24.47,4.89,13.37,0,21.21-6.28t7.83-17.37Q1103.52,122.66,1098.05,117.36Z"></path><path d="M475.53,71.38a14.11,14.11,0,0,0-11.65,6.16l-15,22-15-22a14.11,14.11,0,0,0-11.65-6.16H411.54l28.27,41.43-28.27,41.43h10.65a14.11,14.11,0,0,0,11.65-6.16l15-22,15,22a14.11,14.11,0,0,0,11.65,6.16h10.65l-28.27-41.43,28.27-41.43H475.53Z"></path><path d="M1025.71,71.38a14.11,14.11,0,0,0-11.65,6.16l-23.63,34.63V54.88A10.58,10.58,0,0,0,979.85,44.3h-5.51V154.24h5.51a10.58,10.58,0,0,0,10.58-10.58v-30.2l23.63,34.63a14.11,14.11,0,0,0,11.65,6.16h10.65l-28.27-41.43,28.27-41.43h-10.65Z"></path><path d="M792,52.2L773.51,123,755,52.2a10.58,10.58,0,0,0-10.24-7.9h0a10.58,10.58,0,0,0-10.24,7.9L716,123,697.48,52.2a10.58,10.58,0,0,0-10.24-7.9h-8.17l28.76,109.94H716a10.58,10.58,0,0,0,10.24-7.9l18.52-70.8,18.52,70.8a10.58,10.58,0,0,0,10.24,7.9h8.17L810.44,44.3h-8.17A10.58,10.58,0,0,0,792,52.2Z"></path>`,16)]])}var Ko=Ho(Uo,[[`render`,Go]]),qo={class:`btn-submenu`},Jo={key:0,class:`submenu`},Yo=[`href`],Xo=Ho({__name:`AppHeaderSubmenu`,props:{label:{type:String,required:!0},submenu:{type:Array,default:()=>[]}},setup(e){let t=M(!1);return(n,r)=>(R(),z(`div`,{class:`menu-wrapper`,onMouseenter:r[0]||=e=>t.value=!0,onMouseleave:r[1]||=e=>t.value=!1},[B(`button`,qo,[ua(Oe(e.label)+` `,1),r[2]||=B(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,"stroke-width":`1.5`,stroke:`currentColor`,class:``},[B(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,d:`m19.5 8.25-7.5 7.5-7.5-7.5`})],-1)]),t.value?(R(),z(`ul`,Jo,[(R(!0),z(I,null,Pr(e.submenu,({label:e,href:t})=>(R(),z(`li`,{key:t},[B(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`},Oe(e),9,Yo)]))),128))])):fa(``,!0)],32))}},[[`__scopeId`,`data-v-6d4a3c28`]]),Zo={class:`app-header`},Qo={class:`app-header__left`},$o={class:`app-header__links`},es=Ho({__name:`AppHeader`,setup(e){let t=[{label:`Code`,href:`https://github.com/SpeciesFileGroup/taxonworks`},{label:`Docs`,href:`https://github.com/SpeciesFileGroup/taxonworks_docs`},{label:`API`,href:`https://github.com/SpeciesFileGroup/taxonworks_api`}];return(e,n)=>(R(),z(`header`,Zo,[B(`div`,Qo,[V(Ko,{alt:`TaxonWorks`,class:`app-header__logo`}),n[0]||=B(`div`,{class:`app-header__title`},`API Documentation`,-1)]),B(`div`,$o,[n[1]||=B(`a`,{href:`http://www.speciesfilegroup.org/`},`Species File Group`,-1),V(Xo,{label:`GitHub`,submenu:t})])]))}},[[`__scopeId`,`data-v-dfb139de`]]),ts={class:`resource-selector`},ns={class:`resource-selector__overview`},rs={class:`resource-selector__search`},is={class:`resource-selector__list`},as=[`onClick`],os=Ho({__name:`ResourceSelector`,props:Br({resources:{type:Array,required:!0}},{modelValue:{type:String,default:null},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=ai(e,`modelValue`),r=M(``),i=Ra(()=>{let e=r.value.toLowerCase();return e?t.resources.filter(t=>t.label.toLowerCase().includes(e)):t.resources});return(e,t)=>(R(),z(`aside`,ts,[B(`div`,ns,[B(`button`,{class:be([`resource-selector__item resource-selector__overview-btn`,{"resource-selector__item--active":n.value===`overview`}]),onClick:t[0]||=()=>n.value=`overview`},` Overview `,2)]),B(`div`,rs,[Fn(B(`input`,{"onUpdate:modelValue":t[1]||=e=>r.value=e,type:`text`,placeholder:`Filter resources...`,class:`resource-selector__input`},null,512),[[Mo,r.value]])]),B(`nav`,is,[(R(!0),z(I,null,Pr(i.value,e=>(R(),z(`button`,{key:e.id,class:be([`resource-selector__item`,{"resource-selector__item--active":e.id===n.value}]),onClick:()=>n.value=e.id},Oe(e.label),11,as))),128))])]))}},[[`__scopeId`,`data-v-5b560293`]]),ss=e(t()),cs=new Map,ls=M([]),us=M(!1),ds=M(null),fs=M(``),ps=M(``);async function ms(){let e=ps.value;if(e){if(cs.has(e)){ls.value=cs.get(e);return}us.value=!0,ds.value=null;try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);let n=((await t.json()).open_projects||[]).filter(e=>e.project_token).sort((e,t)=>e.name.localeCompare(t.name));cs.set(e,n),ls.value=n}catch(e){ds.value=`Could not load projects: ${e.message}`,ls.value=[]}finally{us.value=!1}}}function hs(e){!e||e===ps.value||(ps.value=e,fs.value=``,ms())}function gs(){return{projects:ls,loading:us,fetchError:ds,selectedProjectToken:fs,setApiBase:hs}}var _s={class:`project-selector`},vs=[`disabled`],ys={value:``},bs=[`value`],xs=Ho({__name:`ProjectSelector`,setup(e){let{projects:t,loading:n,fetchError:r,selectedProjectToken:i}=gs(),a=Ra(()=>n.value?`Loading projects…`:r.value?`Failed to load projects`:`Select a project…`);return(e,o)=>(R(),z(`label`,_s,[Fn(B(`select`,{"onUpdate:modelValue":o[0]||=e=>j(i)?i.value=e:null,disabled:Qt(n)||!!Qt(r)},[B(`option`,ys,Oe(a.value),1),(R(!0),z(I,null,Pr(Qt(t),e=>(R(),z(`option`,{key:e.project_token,value:e.project_token},Oe(e.name),9,bs))),128))],8,vs),[[No,Qt(i)]]),o[1]||=B(`small`,{class:`project-selector__hint`},[ua(` Select a project to authorize automatically, or use the `),B(`strong`,null,`Authorize`),ua(` button to set a token manually. `)],-1)]))}},[[`__scopeId`,`data-v-d3d4a7a8`]]),Ss={class:`swagger-viewer`},Cs={key:0,class:`swagger-viewer__error`},ws=Ho({__name:`SwaggerViewer`,props:{spec:{type:Object,default:null},error:{type:String,default:null}},setup(e){let t=e,{selectedProjectToken:n,setApiBase:r}=gs(),i=M(null),a=M(null),o=null;function s(){return{wrapComponents:{TryItOutButton:(e,t)=>n=>{let r=t.React,i=t.authSelectors.authorized();return i&&i.size>0||n.enabled?r.createElement(e,n):r.createElement(`div`,{className:`try-out`},r.createElement(`button`,{className:`btn try-out__btn`,disabled:!0,title:`Select a project above to enable "Try it out"`},`Try it out `))}}}}function c(e=0){let t=i.value?.querySelector(`.scheme-container .schemes-server-container`);if(!t){e<30&&requestAnimationFrame(()=>c(e+1));return}let n=t.querySelector(`#tw-project-selector`);n||(n=document.createElement(`div`),n.id=`tw-project-selector`,t.appendChild(n)),a.value=n;let o=t.querySelector(`#servers`);o&&(r(o.value),o.addEventListener(`change`,e=>r(e.target.value)))}function l(){if(!o)return;let e=n.value;e?o.preauthorizeApiKey(`projectTokenAuth`,e):o.authSelectors?.authorized?.()?.size&&o.authActions.logout([`projectTokenAuth`])}Hn(n,l);function u(){o&&=(a.value=null,i.value&&(i.value.innerHTML=``),null)}Hn(()=>t.spec,e=>{!e||!i.value||d(e)});function d(e){u(),o=(0,ss.default)({domNode:i.value,spec:e,layout:`BaseLayout`,deepLinking:!0,presets:[ss.default.presets.apis],plugins:[ss.default.plugins.DownloadUrl,s],onComplete:()=>{l(),c()}})}return wr(()=>{t.spec&&d(t.spec)}),Dr(u),(t,n)=>(R(),z(`div`,Ss,[e.error?(R(),z(`div`,Cs,Oe(e.error),1)):fa(``,!0),B(`div`,{ref_key:`swaggerEl`,ref:i,class:`swagger-viewer__container`},null,512),a.value?(R(),na(rr,{key:1,to:a.value},[V(xs)],8,[`to`])):fa(``,!0)]))}},[[`__scopeId`,`data-v-f3d5acf9`]]),Ts={class:`markdown-body`},Es={__name:`overview`,setup(e,{expose:t}){return t({frontmatter:{}}),(e,t)=>(R(),z(`div`,Ts,[...t[0]||=[da(`<h1>TaxonWorks API</h1><p>A RESTful JSON-backed API for accessing and managing biodiversity data in <a href="https://taxonworks.org">TaxonWorks</a>.</p><p><em>Select a resource from the sidebar to explore its endpoints.</em></p><hr><h2>Authentication</h2><p>All API requests require authentication. Include <strong>one</strong> of the following combinations as query parameters or HTTP headers:</p><table><thead><tr><th>Method</th><th>Parameters</th><th>Use case</th></tr></thead><tbody><tr><td>Project token</td><td><code>project_token</code></td><td>Public/read-only access scoped to a project</td></tr><tr><td>User token</td><td><code>token</code> + <code>project_id</code></td><td>Full read access on behalf of a user</td></tr></tbody></table><p>Tokens are generated inside the TaxonWorks application under <em>Account &gt; API access</em> and <em>Project &gt; API access</em>.</p><h2>Pagination</h2><p>List endpoints are paginated. Control pagination with these query parameters:</p><table><thead><tr><th>Parameter</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td>1</td><td>Page number</td></tr><tr><td><code>per</code></td><td>50</td><td>Items per page (max 250)</td></tr></tbody></table><p>Pagination metadata is returned in the response headers: <code>Pagination-Total</code>, <code>Pagination-Total-Pages</code>, <code>Pagination-Page</code>, and <code>Pagination-Per-Page</code>.</p><h2>Servers</h2><ul><li><a href="https://sfg.taxonworks.org">sfg.taxonworks.org</a> — Species File Group production instance</li><li><a href="https://sandbox.taxonworks.org">sandbox.taxonworks.org</a> — Public sandbox for testing</li></ul><h2>Resources</h2><ul><li><a href="https://taxonworks.org">TaxonWorks project site</a></li><li><a href="https://docs.taxonworks.org">Documentation</a></li><li><a href="https://github.com/SpeciesFileGroup/taxonworks">Source code (GitHub)</a></li><li><a href="https://github.com/SpeciesFileGroup/taxonworks_api">API docs source (GitHub)</a></li></ul>`,16)]]))}},Ds=`openapi: 3.0.3
info:
  title: TaxonWorks API – AssertedDistribution Resource
  description: |
    OpenAPI 3.0 specification for the **AssertedDistribution** resource.

    An AssertedDistribution records that a taxonomic concept (OTU or
    BiologicalAssociation) occurs in a geographic shape (GeographicArea
    or Gazetteer), backed by citations. \`is_absent\` indicates a negative
    assertion (taxon is NOT present).

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: AssertedDistributions – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    adIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    AssertedDistribution:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        asserted_distribution_object_id:
          type: integer
        asserted_distribution_object_type:
          type: string
          description: Otu or BiologicalAssociation.
        asserted_distribution_shape_id:
          type: integer
        asserted_distribution_shape_type:
          type: string
          description: GeographicArea or Gazetteer.
        is_absent:
          type: boolean
          description: True if this is a negative assertion (taxon NOT present).
        project_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        origin_citation_source_id:
          type: integer
          nullable: true
        global_id:
          type: string
        citations:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
              global_id:
                type: string
              pages:
                type: string
                nullable: true
              source:
                type: object
                properties:
                  name:
                    type: string
                  global_id:
                    type: string
        asserted_distribution_object:
          type: object
          description: Nested object with type and attributes.
        asserted_distribution_shape:
          type: object
          description: Nested shape with type and attributes.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /asserted_distributions:
    get:
      operationId: getAssertedDistributions
      summary: List / filter AssertedDistributions
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/asserted_distributions\`
        **Controller:** \`AssertedDistributionsController#api_index\`
        **View:** \`asserted_distributions/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - AssertedDistributions – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: asserted_distribution_id[]
          in: query
          description: Return specific AssertedDistribution(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids (includes descendants).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geographic_area_id[]
          in: query
          description: Filter by GeographicArea ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: source_id[]
          in: query
          description: Filter by Source ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: presence
          in: query
          description: Filter by presence (true) or absence (false).
          schema:
            type: boolean

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

        - name: wkt
          in: query
          description: Spatial filter in WKT format.
          schema:
            type: string

        - name: geo_json
          in: query
          description: GeoJSON geometry for spatial filtering.
          schema:
            type: object

        - name: radius
          in: query
          description: Buffer radius in meters for geo_json.
          schema:
            type: number

        - name: geo_shape_id[]
          in: query
          description: Shape ids for geographic filtering.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geo_shape_type[]
          in: query
          description: Shape types (GeographicArea or Gazetteer).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: geo_mode
          in: query
          description: Geographic matching mode.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of AssertedDistribution objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/AssertedDistribution'

  /asserted_distributions/{id}:
    get:
      operationId: getAssertedDistribution
      summary: Get a single AssertedDistribution
      description: |
        **Route:** \`GET /api/v1/asserted_distributions/:id\`
        **Controller:** \`AssertedDistributionsController#api_show\`
        **View:** \`asserted_distributions/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - AssertedDistributions – REST
      parameters:
        - $ref: '#/components/parameters/adIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single AssertedDistribution.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AssertedDistribution'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All AssertedDistribution routes documented:
#   GET /asserted_distributions     | api_index | done
#   GET /asserted_distributions/:id | api_show  | done
`,Os=`openapi: 3.0.3
info:
  title: TaxonWorks API – BiologicalAssociation Resource
  description: |
    OpenAPI 3.0 specification for the **BiologicalAssociation** resource.

    A BiologicalAssociation records an interaction between two biological
    entities (OTUs, CollectionObjects, FieldOccurrences) via a
    BiologicalRelationship. The API provides seven distinct view formats
    including standard REST, denormalised basic/simple/extended views,
    and GloBI/DwC resource-relationship exports.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: BiologicalAssociations – REST
    description: Standard REST read endpoints.
  - name: BiologicalAssociations – Basic
    description: Pre-computed index-based denormalised view.
  - name: BiologicalAssociations – Simple
    description: Denormalised view with taxonomic hierarchy.
  - name: BiologicalAssociations – Extended
    description: Extended denormalised view with ids and taxonomic hierarchy.
  - name: BiologicalAssociations – GloBI
    description: GloBI and DwC ResourceRelationship export formats.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    baIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`biological_relationship\`, \`biological_relationship_types\`, \`subject\`, \`object\`, \`taxonomy\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    BiologicalAssociation:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        biological_relationship_id:
          type: integer
        biological_association_subject_id:
          type: integer
        biological_association_subject_type:
          type: string
        biological_association_object_id:
          type: integer
        biological_association_object_type:
          type: string
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        global_id:
          type: string
        biological_relationship:
          type: object
          description: Present when \`extend[]=biological_relationship\`.
        biological_relationship_types:
          type: array
          description: Present when \`extend[]=biological_relationship_types\`.
          items:
            type: object
            properties:
              id:
                type: integer
              type:
                type: string
              target:
                type: string
              biological_property:
                type: object
                properties:
                  id:
                    type: integer
                  name:
                    type: string
        subject:
          type: object
          description: Present when \`extend[]=subject\`. Includes taxonomy when \`extend[]=taxonomy\`.
          properties:
            id:
              type: integer
            object_tag:
              type: string
            global_id:
              type: string
            taxonomy:
              type: object
              description: Present when both subject and taxonomy are extended.
        object:
          type: object
          description: Present when \`extend[]=object\`. Includes taxonomy when \`extend[]=taxonomy\`.
          properties:
            id:
              type: integer
            object_tag:
              type: string
            global_id:
              type: string
            taxonomy:
              type: object
              description: Present when both object and taxonomy are extended.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    BiologicalAssociationBasic:
      type: object
      description: Pre-computed index-based view.
      properties:
        id:
          type: integer
        subject:
          type: object
          properties:
            id:
              type: integer
            type:
              type: string
            order:
              type: string
              nullable: true
            family:
              type: string
              nullable: true
            genus:
              type: string
              nullable: true
            label:
              type: string
            properties:
              type: string
              nullable: true
        relationship:
          type: string
        object:
          type: object
          properties:
            id:
              type: integer
            type:
              type: string
            order:
              type: string
              nullable: true
            family:
              type: string
              nullable: true
            genus:
              type: string
              nullable: true
            label:
              type: string
            properties:
              type: string
              nullable: true
        citations:
          type: string
          nullable: true

    BiologicalAssociationSimple:
      type: object
      description: Denormalised view with taxonomic hierarchy labels.
      properties:
        subject_order:
          type: string
          nullable: true
        subject_family:
          type: string
          nullable: true
        subject_genus:
          type: string
          nullable: true
        subject:
          type: string
        subject_properties:
          type: string
          nullable: true
          description: Pipe-separated biological properties.
        biological_relationships:
          type: string
        object_properties:
          type: string
          nullable: true
          description: Pipe-separated biological properties.
        object:
          type: string
        object_order:
          type: string
          nullable: true
        object_family:
          type: string
          nullable: true
        object_genus:
          type: string
          nullable: true

    BiologicalAssociationExtended:
      type: object
      description: Extended denormalised view with ids and taxonomic hierarchy.
      properties:
        id:
          type: integer
        subject_id:
          type: integer
        subject_taxon_name_id:
          type: integer
          nullable: true
        subject_type:
          type: string
        subject_order:
          type: string
          nullable: true
        subject_family:
          type: string
          nullable: true
        subject_genus:
          type: string
          nullable: true
        subject:
          type: string
        subject_properties:
          type: string
          nullable: true
        biological_relationship_id:
          type: integer
        biological_relationships:
          type: string
        object_properties:
          type: string
          nullable: true
        object_id:
          type: integer
        object_taxon_name_id:
          type: integer
          nullable: true
        object_type:
          type: string
        object_order:
          type: string
          nullable: true
        object_family:
          type: string
          nullable: true
        object_genus:
          type: string
          nullable: true
        object:
          type: string

    GlobiExtension:
      type: object
      description: GloBI-format interaction record (also used for DwC ResourceRelationship).
      properties:
        sourceOccurrenceId:
          type: string
          nullable: true
        sourceCatalogNumber:
          type: string
          nullable: true
        sourceCollectionCode:
          type: string
          nullable: true
        sourceInstitutionCode:
          type: string
          nullable: true
        sourceTaxonName:
          type: string
        sourceTaxonRank:
          type: string
          nullable: true
        sourceTaxonPath:
          type: string
          nullable: true
        sourceLifeStageId:
          type: string
          nullable: true
        sourceLifeStageName:
          type: string
          nullable: true
        sourceSexId:
          type: string
          nullable: true
        sourceSexName:
          type: string
          nullable: true
        interactionTypeId:
          type: string
          nullable: true
        interactionTypeName:
          type: string
        targetOccurrenceId:
          type: string
          nullable: true
        targetCatalogNumber:
          type: string
          nullable: true
        targetCollectionCode:
          type: string
          nullable: true
        targetInstitutionCode:
          type: string
          nullable: true
        targetTaxonName:
          type: string
        targetTaxonRank:
          type: string
          nullable: true
        targetTaxonPath:
          type: string
          nullable: true
        targetLifeStageId:
          type: string
          nullable: true
        targetLifeStageName:
          type: string
          nullable: true
        targetSexId:
          type: string
          nullable: true
        targetSexName:
          type: string
          nullable: true

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /biological_associations:
    get:
      operationId: getBiologicalAssociations
      summary: List / filter BiologicalAssociations
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/biological_associations\`
        **Controller:** \`BiologicalAssociationsController#api_index\`
        **View:** \`biological_associations/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - BiologicalAssociations – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: biological_association_id[]
          in: query
          description: Return specific BiologicalAssociation(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_associations_graph_id[]
          in: query
          description: Filter by BiologicalAssociationsGraph ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids (as subject or object).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id_mode
          in: query
          description: Mode for taxon_name_id matching.
          schema:
            type: string

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

        - name: exclude_taxon_name_relationship
          in: query
          description: Exclude specific taxon name relationships.
          schema:
            type: string

        - name: subject_taxon_name_id[]
          in: query
          description: Filter by subject TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: object_taxon_name_id[]
          in: query
          description: Filter by object TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: subject_object_global_id[]
          in: query
          description: Filter by subject global ids.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: object_object_global_id[]
          in: query
          description: Filter by object global ids.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: biological_association_subject_id[]
          in: query
          description: Filter by subject entity ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_association_subject_type[]
          in: query
          description: Filter by subject entity types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: biological_association_object_id[]
          in: query
          description: Filter by object entity ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_association_object_type[]
          in: query
          description: Filter by object entity types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: subject_type
          in: query
          description: Filter by subject polymorphic type.
          schema:
            type: string

        - name: object_type
          in: query
          description: Filter by object polymorphic type.
          schema:
            type: string

        - name: collection_object_id[]
          in: query
          description: Filter by CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_as_subject_or_as_object
          in: query
          description: Which role the collection object plays.
          schema:
            type: string

        - name: collecting_event_id[]
          in: query
          description: Filter by CollectingEvent ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: field_occurrence_id[]
          in: query
          description: Filter by FieldOccurrence ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: anatomical_part_id[]
          in: query
          description: Filter by anatomical part ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: subject_biological_property_id[]
          in: query
          description: Filter by subject biological property ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: object_biological_property_id[]
          in: query
          description: Filter by object biological property ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: wkt
          in: query
          description: Spatial filter in WKT format.
          schema:
            type: string

        - name: geo_json
          in: query
          description: GeoJSON geometry for spatial filtering.
          schema:
            type: object

        - name: radius
          in: query
          description: Buffer radius in meters for geo_json.
          schema:
            type: number

        - name: geo_shape_id[]
          in: query
          description: Shape ids for geographic filtering.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geo_shape_type[]
          in: query
          description: Shape types (GeographicArea or Gazetteer).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: geo_mode
          in: query
          description: Geographic matching mode.
          schema:
            type: boolean

        - name: geo_collecting_event_geographic_area
          in: query
          description: Filter by collecting event geographic area.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of BiologicalAssociation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalAssociation'

  /biological_associations/{id}:
    get:
      operationId: getBiologicalAssociation
      summary: Get a single BiologicalAssociation
      description: |
        **Route:** \`GET /api/v1/biological_associations/:id\`
        **Controller:** \`BiologicalAssociationsController#api_show\`
        **View:** \`biological_associations/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - BiologicalAssociations – REST
      parameters:
        - $ref: '#/components/parameters/baIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single BiologicalAssociation.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BiologicalAssociation'
        '404':
          $ref: '#/components/responses/NotFound'

  /biological_associations/basic:
    get:
      operationId: getBiologicalAssociationsBasic
      summary: Basic denormalised list
      description: |
        Returns a denormalised view using a pre-computed index table for
        fast retrieval of subject, relationship, object, and citation data.

        **Route:** \`GET /api/v1/biological_associations/basic\`
        **Controller:** \`BiologicalAssociationsController#api_index_basic\`
        **View:** \`biological_associations/api/v1/basic.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - BiologicalAssociations – Basic
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: biological_association_id[]
          in: query
          description: Return specific BiologicalAssociation(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of basic BiologicalAssociation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalAssociationBasic'

  /biological_associations/simple:
    get:
      operationId: getBiologicalAssociationsSimple
      summary: Simple denormalised list
      description: |
        Returns a denormalised view with taxonomic hierarchy labels
        (order, family, genus) and pipe-separated biological properties.

        **Route:** \`GET /api/v1/biological_associations/simple\`
        **Controller:** \`BiologicalAssociationsController#api_index_simple\`
        **View:** \`biological_associations/api/v1/simple.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - BiologicalAssociations – Simple
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: biological_association_id[]
          in: query
          description: Return specific BiologicalAssociation(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of simple BiologicalAssociation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalAssociationSimple'

  /biological_associations/extended:
    get:
      operationId: getBiologicalAssociationsExtended
      summary: Extended denormalised list
      description: |
        Returns an extended denormalised view including ids,
        taxon_name_ids, types, and full taxonomic hierarchy.

        **Route:** \`GET /api/v1/biological_associations/extended\`
        **Controller:** \`BiologicalAssociationsController#api_index_extended\`
        **View:** \`biological_associations/api/v1/extended.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - BiologicalAssociations – Extended
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: biological_association_id[]
          in: query
          description: Return specific BiologicalAssociation(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of extended BiologicalAssociation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalAssociationExtended'

  /biological_associations/{id}/globi:
    get:
      operationId: getBiologicalAssociationGlobi
      summary: GloBI-format export
      description: |
        Returns a single BiologicalAssociation in GloBI extension format.

        **Route:** \`GET /api/v1/biological_associations/:id/globi\`
        **Controller:** \`BiologicalAssociationsController#api_globi\`
        **Type:** Extended resource endpoint
      tags:
        - BiologicalAssociations – GloBI
      parameters:
        - $ref: '#/components/parameters/baIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: GloBI-format interaction record.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GlobiExtension'
        '404':
          $ref: '#/components/responses/NotFound'

  /biological_associations/{id}/resource_relationship:
    get:
      operationId: getBiologicalAssociationResourceRelationship
      summary: DwC ResourceRelationship export
      description: |
        Returns a single BiologicalAssociation as a DwC ResourceRelationship
        (same format as the GloBI endpoint).

        **Route:** \`GET /api/v1/biological_associations/:id/resource_relationship\`
        **Controller:** \`BiologicalAssociationsController#api_resource_relationship\`
        **Type:** Extended resource endpoint
      tags:
        - BiologicalAssociations – GloBI
      parameters:
        - $ref: '#/components/parameters/baIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: GloBI-format interaction record.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GlobiExtension'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All BiologicalAssociation routes documented:
#   GET /biological_associations                         | api_index               | done
#   GET /biological_associations/:id                     | api_show                | done
#   GET /biological_associations/basic                   | api_index_basic         | done
#   GET /biological_associations/simple                  | api_index_simple        | done
#   GET /biological_associations/extended                | api_index_extended      | done
#   GET /biological_associations/:id/globi               | api_globi               | done
#   GET /biological_associations/:id/resource_relationship | api_resource_relationship | done
`,ks=`openapi: 3.0.3
info:
  title: TaxonWorks API – BiologicalAssociationsGraph Resource
  description: |
    OpenAPI 3.0 specification for the **BiologicalAssociationsGraph** resource.

    A BiologicalAssociationsGraph groups a set of BiologicalAssociations into
    a named graph with an optional layout, used for visualising interaction
    networks.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: BiologicalAssociationsGraphs – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    bagIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`biological_associations_biological_associations_graphs\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    BiologicalAssociationsGraph:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        name:
          type: string
          nullable: true
        layout:
          type: string
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        global_id:
          type: string
        biological_associations_biological_associations_graphs:
          type: array
          description: Present when \`extend[]=biological_associations_biological_associations_graphs\`.
          items:
            type: object
            properties:
              id:
                type: integer
              biological_association_id:
                type: integer
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /biological_associations_graphs:
    get:
      operationId: getBiologicalAssociationsGraphs
      summary: List / filter BiologicalAssociationsGraphs
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/biological_associations_graphs\`
        **Controller:** \`BiologicalAssociationsGraphsController#api_index\`
        **View:** \`biological_associations_graphs/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - BiologicalAssociationsGraphs – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: biological_associations_graph_id[]
          in: query
          description: Return specific graph(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_association_id[]
          in: query
          description: Filter by BiologicalAssociation ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: wkt
          in: query
          description: Spatial filter in WKT format.
          schema:
            type: string

        - name: geo_json
          in: query
          description: GeoJSON geometry for spatial filtering.
          schema:
            type: object

        - name: radius
          in: query
          description: Buffer radius in meters for geo_json.
          schema:
            type: number

        - name: geo_shape_id[]
          in: query
          description: Shape ids for geographic filtering.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geo_shape_type[]
          in: query
          description: Shape types (GeographicArea or Gazetteer).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: geo_mode
          in: query
          description: Geographic matching mode.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of BiologicalAssociationsGraph objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalAssociationsGraph'

  /biological_associations_graphs/{id}:
    get:
      operationId: getBiologicalAssociationsGraph
      summary: Get a single BiologicalAssociationsGraph
      description: |
        **Route:** \`GET /api/v1/biological_associations_graphs/:id\`
        **Controller:** \`BiologicalAssociationsGraphsController#api_show\`
        **View:** \`biological_associations_graphs/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - BiologicalAssociationsGraphs – REST
      parameters:
        - $ref: '#/components/parameters/bagIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single BiologicalAssociationsGraph.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BiologicalAssociationsGraph'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All BiologicalAssociationsGraph routes documented:
#   GET /biological_associations_graphs     | api_index | done
#   GET /biological_associations_graphs/:id | api_show  | done
`,As=`openapi: 3.0.3
info:
  title: TaxonWorks API – BiologicalRelationship Resource
  description: |
    OpenAPI 3.0 specification for the **BiologicalRelationship** resource.

    A BiologicalRelationship defines a named interaction type (e.g. parasitoid,
    pollinator, host) used in BiologicalAssociations. Each relationship has
    subject and object BiologicalRelationshipType arrays describing the
    biological properties of each participant.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: BiologicalRelationships – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500

  schemas:
    BiologicalRelationshipType:
      type: object
      properties:
        id:
          type: integer
        biological_property_id:
          type: integer
        biological_relationship_id:
          type: integer
        type:
          type: string
          description: 'BiologicalRelationshipType::BiologicalRelationshipSubjectType or ::ObjectType.'
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time

    BiologicalRelationship:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        name:
          type: string
        definition:
          type: string
          nullable: true
        inverted_name:
          type: string
          nullable: true
        is_transitive:
          type: boolean
        is_reflexive:
          type: boolean
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        global_id:
          type: string
        subject_biological_relationship_types:
          type: array
          items:
            $ref: '#/components/schemas/BiologicalRelationshipType'
        object_biological_relationship_types:
          type: array
          items:
            $ref: '#/components/schemas/BiologicalRelationshipType'

paths:
  /biological_relationships:
    get:
      operationId: getBiologicalRelationships
      summary: List BiologicalRelationships
      description: |
        Returns a paginated list of all biological relationships, ordered by name.

        **Route:** \`GET /api/v1/biological_relationships\`
        **Controller:** \`BiologicalRelationshipsController#api_index\`
        **View:** \`biological_relationships/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - BiologicalRelationships – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
      responses:
        '200':
          description: Paginated array of BiologicalRelationship objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BiologicalRelationship'

# CONSISTENCY REPORT
# All BiologicalRelationship routes documented:
#   GET /biological_relationships | api_index | done
# Note: No api_show endpoint exists for this resource.
`,js=`openapi: 3.0.3
info:
  title: TaxonWorks API – CachedMap Resource
  description: |
    OpenAPI 3.0 specification for the **CachedMap** resource.

    A CachedMap is a pre-computed geographic distribution map for an OTU,
    with synchronisation metadata and source-scope statistics.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: CachedMaps – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    cachedMapIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    CachedMap:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        reference_count:
          type: integer
        cached_map_type:
          type: string
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        latest_cached_map_item_created_at:
          type: string
          format: date-time
          nullable: true
        synced:
          type: boolean
        cached_map_item_reference_total:
          type: integer
        time_between_data_and_sync:
          type: string
          nullable: true
          description: Present when synced is true.
        time_between_data_and_now:
          type: string
          nullable: true
          description: Present when synced is true.
        source_scope:
          type: object
          properties:
            taxon_names:
              type: integer
            otus:
              type: integer
            collection_objects:
              type: integer
            georeferences:
              type: integer
            unregistered_georeferences:
              type: integer
            asserted_distributions:
              type: integer
            unregistered_asserted_distributions:
              type: integer

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /cached_maps/{id}:
    get:
      operationId: getCachedMap
      summary: Get a single CachedMap
      description: |
        Returns a cached map with synchronisation metadata and source-scope
        statistics.

        **Route:** \`GET /api/v1/cached_maps/:id\`
        **Controller:** \`CachedMapsController#api_show\`
        **View:** \`cached_maps/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - CachedMaps – REST
      parameters:
        - $ref: '#/components/parameters/cachedMapIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single CachedMap with sync metadata.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CachedMap'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All CachedMap routes documented:
#   GET /cached_maps/:id | api_show | done
# Note: No index endpoint exists for this resource.
`,Ms=`openapi: 3.0.3
info:
  title: TaxonWorks API – Citation Resource
  description: |
    OpenAPI 3.0 specification for the **Citation** resource.

    A Citation links a Source to any data object, optionally recording
    pages and whether it is the original citation.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Citations – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    citationIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`source\`, \`citation_object\`, \`citation_topics\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Citation:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        citation_object_id:
          type: integer
        citation_object_type:
          type: string
        source_id:
          type: integer
        pages:
          type: string
          nullable: true
        is_original:
          type: boolean
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        citation_source_body:
          type: string
          nullable: true
          description: Cached source string.
        citation_object:
          type: object
          description: Present when \`extend[]=citation_object\`.
        citation_topics:
          type: array
          description: Present when \`extend[]=citation_topics\`.
          items:
            type: object
        source:
          type: object
          description: Present when \`extend[]=source\`.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /citations:
    get:
      operationId: getCitations
      summary: List / filter Citations
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/citations\`
        **Controller:** \`CitationsController#api_index\`
        **View:** \`citations/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Citations – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: citation_object_type[]
          in: query
          description: Filter by cited object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: citation_object_id[]
          in: query
          description: Filter by cited object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: source_id
          in: query
          description: Filter by Source id.
          schema:
            type: integer

        - name: is_original
          in: query
          description: Filter by original citation flag.
          schema:
            type: boolean

        - name: role_id[]
          in: query
          description: Filter by role (person) ids on the citation.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of Citation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Citation'

  /citations/{id}:
    get:
      operationId: getCitation
      summary: Get a single Citation
      description: |
        **Route:** \`GET /api/v1/citations/:id\`
        **Controller:** \`CitationsController#api_show\`
        **View:** \`citations/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Citations – REST
      parameters:
        - $ref: '#/components/parameters/citationIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Citation.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Citation'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Citation routes documented:
#   GET /citations     | api_index | done
#   GET /citations/:id | api_show  | done
`,Ns=`openapi: 3.0.3
info:
  title: TaxonWorks API – CollectingEvent Resource
  description: |
    OpenAPI 3.0 specification for the **CollectingEvent** resource.

    A CollectingEvent describes how something was acquired — the unique
    combination of who, where, when, and how. CollectingEvents link to
    CollectionObjects and carry verbatim label data, geographic areas,
    georeferences, elevations, dates, and paleontological context.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: CollectingEvents – REST
    description: Standard REST read endpoints.
  - name: CollectingEvents – Autocomplete
    description: Autocomplete search.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    collectingEventIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`roles\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    CollectingEvent:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        verbatim_label:
          type: string
          nullable: true
        print_label:
          type: string
          nullable: true
        document_label:
          type: string
          nullable: true
        verbatim_locality:
          type: string
          nullable: true
        verbatim_longitude:
          type: string
          nullable: true
        verbatim_latitude:
          type: string
          nullable: true
        verbatim_geolocation_uncertainty:
          type: string
          nullable: true
        verbatim_field_number:
          type: string
          nullable: true
        verbatim_collectors:
          type: string
          nullable: true
        verbatim_method:
          type: string
          nullable: true
        verbatim_elevation:
          type: string
          nullable: true
        verbatim_habitat:
          type: string
          nullable: true
        verbatim_datum:
          type: string
          nullable: true
        verbatim_date:
          type: string
          nullable: true
        geographic_area_id:
          type: integer
          nullable: true
        minimum_elevation:
          type: number
          nullable: true
        maximum_elevation:
          type: number
          nullable: true
        elevation_precision:
          type: number
          nullable: true
        start_date_day:
          type: integer
          nullable: true
        start_date_month:
          type: integer
          nullable: true
        start_date_year:
          type: integer
          nullable: true
        end_date_day:
          type: integer
          nullable: true
        end_date_month:
          type: integer
          nullable: true
        end_date_year:
          type: integer
          nullable: true
        time_start_hour:
          type: integer
          nullable: true
        time_start_minute:
          type: integer
          nullable: true
        time_start_second:
          type: integer
          nullable: true
        time_end_hour:
          type: integer
          nullable: true
        time_end_minute:
          type: integer
          nullable: true
        time_end_second:
          type: integer
          nullable: true
        field_notes:
          type: string
          nullable: true
        md5_of_verbatim_label:
          type: string
          nullable: true
        min_ma:
          type: number
          nullable: true
          description: Minimum geological age in Ma.
        max_ma:
          type: number
          nullable: true
          description: Maximum geological age in Ma.
        cached:
          type: string
          nullable: true
        cached_level0_geographic_name:
          type: string
          nullable: true
          description: Country-level cached name.
        cached_level1_geographic_name:
          type: string
          nullable: true
          description: State/province-level cached name.
        cached_level2_geographic_name:
          type: string
          nullable: true
          description: County-level cached name.
        group:
          type: string
          nullable: true
          description: Geological group.
        formation:
          type: string
          nullable: true
          description: Geological formation.
        member:
          type: string
          nullable: true
          description: Geological member.
        lithology:
          type: string
          nullable: true
          description: Lithology.
        identifiers:
          type: array
          nullable: true
          items:
            type: object
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        global_id:
          type: string
        # extend[]=roles
        collector_roles:
          type: array
          description: Present when \`extend[]=roles\`.
          items:
            type: object
            properties:
              id:
                type: integer
              position:
                type: integer
              type:
                type: string
        # extend[]=notes
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    CollectingEventAutocompleteItem:
      type: object
      properties:
        id:
          type: integer
        label:
          type: string
        label_html:
          type: string
        response_values:
          type: object

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /collecting_events:
    get:
      operationId: getCollectingEvents
      summary: List / filter CollectingEvents
      description: |
        Returns a paginated, filterable list ordered by \`collecting_events.id\`.

        **Route:** \`GET /api/v1/collecting_events\`
        **Controller:** \`CollectingEventsController#api_index\`
        **View:** \`collecting_events/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - CollectingEvents – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: collecting_event_id[]
          in: query
          description: Return specific CollectingEvent(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Return CollectingEvents linked to these OTU ids (via CollectionObject determinations).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_id[]
          in: query
          description: Return CollectingEvents for these CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collector_id[]
          in: query
          description: Filter by collector Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collector_id_all
          in: query
          description: |
            \`true\` – match ALL collector_id values (AND).
            \`false\`/nil – match ANY (OR).
          schema:
            type: boolean

        - name: collectors
          in: query
          description: |
            \`true\` – has collector roles.
            \`false\` – no collector roles.
          schema:
            type: boolean

        - name: collection_objects
          in: query
          description: |
            \`true\` – has associated CollectionObjects.
            \`false\` – no associated CollectionObjects.
          schema:
            type: boolean

        - name: georeferences
          in: query
          description: |
            \`true\` – has georeferences.
            \`false\` – not georeferenced.
          schema:
            type: boolean

        - name: geographic_area
          in: query
          description: |
            \`true\` – has a geographic area.
            \`false\` – no geographic area.
          schema:
            type: boolean

        - name: in_labels
          in: query
          description: Wildcard search matching any label field.
          schema:
            type: string

        - name: md5_verbatim_label
          in: query
          description: If \`true\`, \`in_labels\` checks only the MD5 hash.
          schema:
            type: boolean

        - name: wkt
          in: query
          description: Spatial area in Well-Known Text format.
          schema:
            type: string

        - name: geo_json
          in: query
          description: GeoJSON geometry for spatial filtering.
          schema:
            type: object

        - name: radius
          in: query
          description: Buffer radius in meters for geo_json. Default 100.
          schema:
            type: number
            default: 100

        - name: geo_shape_id[]
          in: query
          description: Geographic shape ids (pair with geo_shape_type[]).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geo_shape_type[]
          in: query
          description: Shape types (GeographicArea or Gazetteer).
          schema:
            type: array
            items:
              type: string
              enum: [GeographicArea, Gazetteer]
          style: form
          explode: true

        - name: geo_mode
          in: query
          description: |
            How to interpret shapes: omit = exact, \`true\` = spatial, \`false\` = descendants.
          schema:
            type: boolean

        - name: use_min
          in: query
          description: Minimum number of CollectionObjects linked.
          schema:
            type: integer

        - name: use_max
          in: query
          description: Maximum number of CollectionObjects linked.
          schema:
            type: integer

        # Inherited concern params
        - name: tags
          in: query
          schema:
            type: boolean
        - name: notes
          in: query
          schema:
            type: boolean
        - name: depictions
          in: query
          schema:
            type: boolean
        - name: citations
          in: query
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of CollectingEvent objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/CollectingEvent'

  /collecting_events/{id}:
    get:
      operationId: getCollectingEvent
      summary: Get a single CollectingEvent
      description: |
        Supports \`extend[]\`: \`roles\`, \`notes\`.

        **Route:** \`GET /api/v1/collecting_events/:id\`
        **Controller:** \`CollectingEventsController#api_show\`
        **View:** \`collecting_events/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - CollectingEvents – REST
      parameters:
        - $ref: '#/components/parameters/collectingEventIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single CollectingEvent.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CollectingEvent'
        '404':
          $ref: '#/components/responses/NotFound'

  /collecting_events/autocomplete:
    get:
      operationId: autocompleteCollectingEvents
      summary: Autocomplete CollectingEvents
      description: |
        **Route:** \`GET /api/v1/collecting_events/autocomplete\`
        **Controller:** \`CollectingEventsController#api_autocomplete\`
        **View:** \`collecting_events/api/v1/autocomplete.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - CollectingEvents – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          schema:
            type: string
            minLength: 1
        - name: method
          in: query
          description: Populates response_values key.
          schema:
            type: string
      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/CollectingEventAutocompleteItem'

# CONSISTENCY REPORT
# All CollectingEvent routes documented:
#   GET /collecting_events            | api_index        | ✅
#   GET /collecting_events/autocomplete | api_autocomplete | ✅
#   GET /collecting_events/:id        | api_show         | ✅
`,Ps=`openapi: 3.0.3
info:
  title: TaxonWorks API – CollectionObject Resource
  description: |
    OpenAPI 3.0 specification for the **CollectionObject** resource of the
    TaxonWorks external API.

    A CollectionObject is one or more physical things that have been
    collected. Subclasses: \`Specimen\` (total = 1), \`Lot\` (total > 1),
    \`RangedLot\` (total expressed as a range category).

    CollectionObjects are linked to CollectingEvents, have
    TaxonDeterminations (linking them to OTUs/TaxonNames), and may carry
    buffered label data for rapid data capture.

    ## Authentication
    All endpoints require **either** a valid \`project_token\` **or** a
    valid \`user_token\` + \`project_id\` pair.

    ## Pagination
    List endpoints return paginated results via \`page\` and \`per\`.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: CollectionObjects – REST
    description: Standard REST read endpoints for CollectionObjects.
  - name: CollectionObjects – Autocomplete
    description: Autocomplete search for CollectionObjects.
  - name: CollectionObjects – Extended
    description: Extended resource-specific endpoints (DwC).

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
      description: User API token. Requires \`project_id\`.
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token
      description: Project-level API token.

  parameters:
    projectId:
      name: project_id
      in: query
      description: Project ID (required when using user \`token\`).
      schema:
        type: integer

    pageParam:
      name: page
      in: query
      schema:
        type: integer
        minimum: 1
        default: 1

    perParam:
      name: per
      in: query
      schema:
        type: integer
        minimum: 1
        maximum: 10000
        default: 500

    collectionObjectIdPath:
      name: id
      in: path
      required: true
      description: CollectionObject id.
      schema:
        type: integer

    extendParam:
      name: extend[]
      in: query
      description: |
        Include additional nested data. Supported values:
        \`container\`, \`taxon_determinations\`, \`dwc_fields\`,
        \`type_material\`, \`notes\`.
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    CollectionObject:
      type: object
      description: |
        CollectionObject attributes. Rendered by \`_attributes.json.jbuilder\`.
      required:
        - id
      properties:
        id:
          type: integer
          example: 99001
        total:
          type: integer
          nullable: true
          description: Number of individual things. 1 = Specimen, >1 = Lot, nil when RangedLot.
          example: 1
        preparation_type_id:
          type: integer
          nullable: true
          description: How the object was prepared (e.g. slide mounted).
        collecting_event_id:
          type: integer
          nullable: true
          description: The CollectingEvent from which this object came.
        repository_id:
          type: integer
          nullable: true
          description: Home repository id (where the object is found when not in use).
        type:
          type: string
          description: Subclass (\`Specimen\`, \`Lot\`, \`RangedLot\`).
          example: 'Specimen'
        buffered_collecting_event:
          type: string
          nullable: true
          description: Verbatim collecting event label data.
        buffered_determinations:
          type: string
          nullable: true
          description: Verbatim determination label data.
        buffered_other_labels:
          type: string
          nullable: true
          description: Verbatim other label data.
        ranged_lot_category_id:
          type: integer
          nullable: true
          description: RangedLotCategory id (present only for RangedLot subclass).
        accessioned_at:
          type: string
          format: date-time
          nullable: true
        deaccessioned_at:
          type: string
          format: date-time
          nullable: true
        deaccession_reason:
          type: string
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        global_id:
          type: string
          description: Rails GlobalID URI.
          example: 'gid://taxon-works/Specimen/99001'

        # extend[]=container
        contained_in:
          type: string
          nullable: true
          description: Present when \`extend[]=container\` and object is containerized.
        container_id:
          type: integer
          nullable: true
          description: Present when \`extend[]=container\`.

        # extend[]=taxon_determinations
        taxon_determinations:
          type: array
          description: Present when \`extend[]=taxon_determinations\`.
          items:
            type: object
            description: TaxonDetermination attributes.

        # extend[]=dwc_fields
        dwc:
          type: object
          description: Present when \`extend[]=dwc_fields\`. Non-null DwC occurrence fields.
          additionalProperties:
            type: string

        # extend[]=type_material
        type_material:
          type: array
          description: Present when \`extend[]=type_material\`.
          items:
            type: object
            properties:
              type_type:
                type: string
                description: E.g. "holotype", "paratype".
              notes:
                type: array
                description: Present when also \`extend[]=notes\`.
                items:
                  type: object
                  properties:
                    text:
                      type: string

        # extend[]=notes
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    CollectionObjectAutocompleteItem:
      type: object
      properties:
        id:
          type: integer
        label:
          type: string
          description: Plain-text label.
        gid:
          type: string
          description: Rails GlobalID.
        label_html:
          type: string
          description: HTML-formatted label.
        response_values:
          type: object
          description: Dynamic key-value pair (key from \`method\` param).

    DwcOccurrenceAttributes:
      type: object
      description: Darwin Core occurrence attributes for a single CollectionObject.
      additionalProperties:
        type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /collection_objects:
    get:
      operationId: getCollectionObjects
      summary: List / filter CollectionObjects
      description: |
        Returns a paginated, filterable list of CollectionObjects ordered
        by \`collection_objects.id\`.

        The filter is very powerful and includes all CollectingEvent filter
        params as well, allowing geographic, temporal, and collector-based
        filtering.

        **Route:** \`GET /api/v1/collection_objects\`
        **Controller:** \`CollectionObjectsController#api_index\`
        **View:** \`collection_objects/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - CollectionObjects – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        # ── CollectionObject-specific filter params ──
        - name: collection_object_id[]
          in: query
          description: Return specific CollectionObject(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_type
          in: query
          description: Filter by subclass type.
          schema:
            type: string
            enum:
              - Specimen
              - Lot
              - RangedLot

        - name: otu_id[]
          in: query
          description: Filter by OTU ids (via TaxonDetermination).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids (via OTU TaxonDetermination, optionally with descendants).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: When \`true\` with \`taxon_name_id\`, include descendants.
          schema:
            type: boolean

        - name: validity
          in: query
          description: |
            With \`taxon_name_id\`:
            \`true\` – match only valid ancestors.
            \`false\` – match only invalid ancestors.
          schema:
            type: boolean

        - name: current_determinations
          in: query
          description: |
            \`true\` – only current determinations.
            \`false\` – only historical determinations.
          schema:
            type: boolean

        - name: collecting_event_id[]
          in: query
          description: Filter by CollectingEvent ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collecting_event
          in: query
          description: |
            \`true\` – only objects with a collecting event.
            \`false\` – only objects without.
          schema:
            type: boolean

        - name: geographic_area_id[]
          in: query
          description: Filter by GeographicArea ids (via CollectingEvent).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: preparation_type_id[]
          in: query
          description: Filter by PreparationType ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: preparation_type
          in: query
          description: |
            \`true\` – has preparation type.
            \`false\` – no preparation type.
          schema:
            type: boolean

        - name: repository_id
          in: query
          description: Filter by home Repository id.
          schema:
            type: integer

        - name: repository
          in: query
          description: |
            \`true\` – has a repository.
            \`false\` – no repository.
          schema:
            type: boolean

        - name: current_repository_id
          in: query
          description: Filter by current Repository id.
          schema:
            type: integer

        - name: current_repository
          in: query
          description: |
            \`true\` – has a current repository.
            \`false\` – no current repository.
          schema:
            type: boolean

        - name: biocuration_class_id[]
          in: query
          description: Filter by BiocurationClass ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: is_type[]
          in: query
          description: Filter by type designation (e.g. \`holotype\`, \`paratype\`, \`lectotype\`).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: type_specimen_taxon_name_id
          in: query
          description: Filter to type specimens of this TaxonName.
          schema:
            type: integer

        - name: type_material
          in: query
          description: |
            \`true\` – only objects that are type material.
            \`false\` – only objects that are not type material.
          schema:
            type: boolean

        - name: taxon_determinations
          in: query
          description: |
            \`true\` – has taxon determinations.
            \`false\` – no taxon determinations.
          schema:
            type: boolean

        - name: determiners
          in: query
          description: |
            \`true\` – has determiner roles.
            \`false\` – no determiner roles.
          schema:
            type: boolean

        - name: determiner_id[]
          in: query
          description: Filter by determiner Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: determiner_id_all
          in: query
          description: |
            \`true\` – match ALL determiner_id values (AND).
            \`false\`/nil – match ANY (OR).
          schema:
            type: boolean

        - name: collectors
          in: query
          description: |
            \`true\` – has collector roles.
            \`false\` – no collector roles.
          schema:
            type: boolean

        - name: containerized
          in: query
          description: |
            \`true\` – object is in a container.
            \`false\` – object is not in a container.
          schema:
            type: boolean

        - name: georeferences
          in: query
          description: |
            \`true\` – has georeferences (via CollectingEvent).
            \`false\` – no georeferences.
          schema:
            type: boolean

        - name: loaned
          in: query
          description: '\`true\` – has been loaned at least once.'
          schema:
            type: boolean

        - name: never_loaned
          in: query
          description: '\`true\` – has never been loaned.'
          schema:
            type: boolean

        - name: on_loan
          in: query
          description: '\`true\` – currently on loan.'
          schema:
            type: boolean

        - name: loan_id[]
          in: query
          description: Return all CollectionObjects in these Loans.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: deaccessioned
          in: query
          description: |
            \`true\` – has deaccession data.
            \`false\` – no deaccession data.
          schema:
            type: boolean

        - name: dwc_indexed
          in: query
          description: |
            \`true\` – DwC index is built.
            \`false\` – DwC index is not built.
          schema:
            type: boolean

        - name: dates
          in: query
          description: |
            \`true\` – has any date data (start/end/verbatim).
            \`false\` – no date data.
          schema:
            type: boolean

        - name: buffered_collecting_event
          in: query
          description: Search buffered collecting event text.
          schema:
            type: string

        - name: exact_buffered_collecting_event
          in: query
          description: If \`true\`, match buffered collecting event exactly.
          schema:
            type: boolean

        - name: with_buffered_collecting_event
          in: query
          description: |
            \`true\` – has buffered collecting event.
            \`false\` – no buffered collecting event.
          schema:
            type: boolean

        - name: buffered_determinations
          in: query
          description: Search buffered determinations text.
          schema:
            type: string

        - name: exact_buffered_determinations
          in: query
          description: If \`true\`, match buffered determinations exactly.
          schema:
            type: boolean

        - name: with_buffered_determinations
          in: query
          description: |
            \`true\` – has buffered determinations.
            \`false\` – no buffered determinations.
          schema:
            type: boolean

        - name: buffered_other_labels
          in: query
          description: Search buffered other labels text.
          schema:
            type: string

        - name: exact_buffered_other_labels
          in: query
          description: If \`true\`, match buffered other labels exactly.
          schema:
            type: boolean

        - name: with_buffered_other_labels
          in: query
          description: |
            \`true\` – has buffered other labels.
            \`false\` – no buffered other labels.
          schema:
            type: boolean

        - name: biological_association_id[]
          in: query
          description: Filter by BiologicalAssociation ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_associations
          in: query
          description: |
            \`true\` – has biological associations.
            \`false\` – no biological associations.
          schema:
            type: boolean

        - name: biological_relationship_id[]
          in: query
          description: Filter by BiologicalRelationship ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: extract_id[]
          in: query
          description: Filter to CollectionObjects that are the origin of these Extract ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: sled_image_id
          in: query
          description: Filter by SledImage id.
          schema:
            type: integer

        - name: import_dataset_id[]
          in: query
          description: Filter by ImportDataset ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        # ── Inherited concerns (Tags, Citations, Notes, Depictions, etc.) ──
        - name: keyword_id_and[]
          in: query
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: keyword_id_or[]
          in: query
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tags
          in: query
          schema:
            type: boolean

        - name: citations
          in: query
          schema:
            type: boolean

        - name: notes
          in: query
          schema:
            type: boolean

        - name: depictions
          in: query
          schema:
            type: boolean

        - name: data_attributes
          in: query
          schema:
            type: boolean

      responses:
        '200':
          description: A paginated array of CollectionObject objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
            X-Page:
              schema:
                type: integer
            X-Per-Page:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/CollectionObject'
              example:
                - id: 99001
                  total: 1
                  type: 'Specimen'
                  collecting_event_id: 5000
                  repository_id: 10
                  global_id: 'gid://taxon-works/Specimen/99001'

  /collection_objects/{id}:
    get:
      operationId: getCollectionObject
      summary: Get a single CollectionObject
      description: |
        Returns a single CollectionObject by id.

        Supports \`extend[]\` values: \`container\`, \`taxon_determinations\`,
        \`dwc_fields\`, \`type_material\`, \`notes\`.

        **Route:** \`GET /api/v1/collection_objects/:id\`
        **Controller:** \`CollectionObjectsController#api_show\`
        **View:** \`collection_objects/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - CollectionObjects – REST
      parameters:
        - $ref: '#/components/parameters/collectionObjectIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single CollectionObject.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CollectionObject'
        '404':
          $ref: '#/components/responses/NotFound'

  /collection_objects/autocomplete:
    get:
      operationId: autocompleteCollectionObjects
      summary: Autocomplete CollectionObjects
      description: |
        Searches collection objects by term string.

        **Route:** \`GET /api/v1/collection_objects/autocomplete\`
        **Controller:** \`CollectionObjectsController#api_autocomplete\`
        **View:** \`collection_objects/api/v1/autocomplete.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - CollectionObjects – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: The search string.
          schema:
            type: string
            minLength: 1

        - name: method
          in: query
          description: When provided, \`response_values\` will include a key with this name.
          schema:
            type: string

      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/CollectionObjectAutocompleteItem'

  /collection_objects/{id}/dwc:
    get:
      operationId: getCollectionObjectDwc
      summary: DwC occurrence for a CollectionObject
      description: |
        Returns the Darwin Core occurrence attributes for a single
        CollectionObject. Triggers a DwC occurrence rebuild if needed.

        **Route:** \`GET /api/v1/collection_objects/:id/dwc\`
        **Controller:** \`CollectionObjectsController#api_dwc\`
        **Type:** Extended resource endpoint
      tags:
        - CollectionObjects – Extended
      parameters:
        - $ref: '#/components/parameters/collectionObjectIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: DwC occurrence attributes (key-value pairs).
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DwcOccurrenceAttributes'
              example:
                occurrenceID: 'urn:uuid:abc123'
                basisOfRecord: 'PreservedSpecimen'
                scientificName: 'Aus bus Author, 2000'
                country: 'United States'
                stateProvince: 'Illinois'
                decimalLatitude: '40.1164'
                decimalLongitude: '-88.2434'

# ─────────────────────────────────────────────
# CONSISTENCY REPORT
#
# All CollectionObject routes from config/routes/api_v1.rb are documented:
#
#   Route                                    | Endpoint         | Status
#   -----------------------------------------|------------------|---------
#   GET /collection_objects                  | api_index        | ✅ Documented
#   GET /collection_objects/autocomplete     | api_autocomplete | ✅ Documented
#   GET /collection_objects/:id/dwc          | api_dwc          | ✅ Documented
#   GET /collection_objects/:id              | api_show         | ✅ Documented
#
# OBSERVATIONS:
#
# 1. The CollectionObject filter inherits ALL CollectingEvent::Filter
#    BASE_PARAMS, making geographic, temporal, and collector-based filtering
#    available. These inherited params are not individually listed here but
#    are available (see CollectingEvent spec for full list).
#
# 2. The filter includes DateRanges concern params for date-based filtering.
#
# 3. The \`determiner_name_regex\` param is noted as "Probably shouldn't
#    expose to external API" in the source — it is excluded from this spec.
#
# 4. The index view uses a slightly unusual partial rendering pattern:
#    \`json.partial! ... collection: @collection_objects, as: :collection_object\`
#
# 5. No POST/PATCH/DELETE endpoints exposed (read-only).
`,Fs=`openapi: 3.0.3
info:
  title: TaxonWorks API – CommonName Resource
  description: |
    OpenAPI 3.0 specification for the **CommonName** resource.

    A CommonName links a vernacular name string to an OTU, optionally
    scoped by geographic area and language, with optional temporal
    range (start/end year).

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: CommonNames – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    commonNameIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`otu\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    CommonName:
      type: object
      required:
        - id
        - name
        - otu_id
      properties:
        id:
          type: integer
          example: 300
        name:
          type: string
          description: The vernacular name.
          example: 'house fly'
        geographic_area_id:
          type: integer
          nullable: true
          description: Geographic area where this common name is used.
        otu_id:
          type: integer
          description: The OTU this common name refers to.
        language_id:
          type: integer
          nullable: true
          description: Language id.
        start_year:
          type: integer
          nullable: true
          description: Year the common name started being used.
        end_year:
          type: integer
          nullable: true
          description: Year the common name stopped being used.
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        language:
          type: string
          nullable: true
          description: Language label string.
          example: 'English'
        geographic_area:
          type: object
          nullable: true
          description: Present when the common name has a geographic area.
          properties:
            name:
              type: string
        otu:
          type: object
          description: Present when \`extend[]=otu\`. Full OTU attributes.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /common_names:
    get:
      operationId: getCommonNames
      summary: List / filter CommonNames
      description: |
        Returns a paginated, filterable list ordered by \`common_names.id\`.
        Also supports CSV output.

        **Route:** \`GET /api/v1/common_names\`
        **Controller:** \`CommonNamesController#api_index\`
        **View:** \`common_names/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - CommonNames – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: common_name_id[]
          in: query
          description: Return specific CommonName(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: Filter by common name string.
          schema:
            type: string

        - name: geographic_area_id
          in: query
          description: Filter by GeographicArea id.
          schema:
            type: integer

        - name: gazetteer_id
          in: query
          description: Filter by Gazetteer id.
          schema:
            type: integer

        - name: language_id
          in: query
          description: Filter by Language id.
          schema:
            type: integer

      responses:
        '200':
          description: Paginated array of CommonName objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/CommonName'
              example:
                - id: 300
                  name: 'house fly'
                  otu_id: 12345
                  language_id: 1
                  language: 'English'

  /common_names/{id}:
    get:
      operationId: getCommonName
      summary: Get a single CommonName
      description: |
        Supports \`extend[]\`: \`otu\`, \`notes\`.

        **Route:** \`GET /api/v1/common_names/:id\`
        **Controller:** \`CommonNamesController#api_show\`
        **View:** \`common_names/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - CommonNames – REST
      parameters:
        - $ref: '#/components/parameters/commonNameIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single CommonName.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CommonName'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All CommonName routes documented:
#   GET /common_names     | api_index | ✅
#   GET /common_names/:id | api_show  | ✅
`,Is=`openapi: 3.0.3
info:
  title: TaxonWorks API – Content Resource
  description: |
    OpenAPI 3.0 specification for the **Content** resource.

    A Content record stores narrative text for an OTU under a Topic
    (controlled vocabulary term). Used for species pages, descriptions, etc.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Contents – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    contentIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    Content:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        text:
          type: string
          nullable: true
          description: The content body (may contain HTML).
        otu_id:
          type: integer
        topic_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        revision_id:
          type: integer
          nullable: true
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        global_id:
          type: string
        otu:
          type: object
          properties:
            global_id:
              type: string
        topic:
          type: object
          properties:
            global_id:
              type: string
            uri:
              type: string
              nullable: true

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /contents:
    get:
      operationId: getContents
      summary: List / filter Contents
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/contents\`
        **Controller:** \`ContentsController#api_index\`
        **View:** \`contents/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Contents – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: content_id[]
          in: query
          description: Return specific Content(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: topic_id[]
          in: query
          description: Filter by Topic ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: text
          in: query
          description: Filter by content text (wildcard match).
          schema:
            type: string

        - name: exact
          in: query
          description: If true, text must match exactly.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of Content objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Content'

  /contents/{id}:
    get:
      operationId: getContent
      summary: Get a single Content
      description: |
        **Route:** \`GET /api/v1/contents/:id\`
        **Controller:** \`ContentsController#api_show\`
        **View:** \`contents/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Contents – REST
      parameters:
        - $ref: '#/components/parameters/contentIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single Content.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Content'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Content routes documented:
#   GET /contents     | api_index | done
#   GET /contents/:id | api_show  | done
`,Ls=`openapi: 3.0.3
info:
  title: TaxonWorks API – ControlledVocabularyTerm Resource
  description: |
    OpenAPI 3.0 specification for the **ControlledVocabularyTerm** resource.

    ControlledVocabularyTerms are project-scoped vocabulary entries used
    as Keywords (for tagging), Topics (for content), Predicates (for
    data attributes), and BiologicalProperties. STI type determines usage.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: ControlledVocabularyTerms – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    cvtIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    ControlledVocabularyTerm:
      type: object
      required:
        - id
        - name
        - definition
      properties:
        id:
          type: integer
        type:
          type: string
          description: 'STI type: Keyword, Topic, Predicate, BiologicalProperty, etc.'
        name:
          type: string
        definition:
          type: string
          description: Minimum 20 characters.
        uri:
          type: string
          nullable: true
        uri_relation:
          type: string
          nullable: true
        css_color:
          type: string
          nullable: true
        updated_at:
          type: string
          format: date-time

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /controlled_vocabulary_terms:
    get:
      operationId: getControlledVocabularyTerms
      summary: List / filter ControlledVocabularyTerms
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/controlled_vocabulary_terms\`
        **Controller:** \`ControlledVocabularyTermsController#api_index\`
        **View:** \`controlled_vocabulary_terms/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - ControlledVocabularyTerms – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: controlled_vocabulary_term_id[]
          in: query
          description: Return specific CVT(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: type
          in: query
          description: Filter by STI type (Keyword, Topic, Predicate, BiologicalProperty).
          schema:
            type: string

      responses:
        '200':
          description: Paginated array of ControlledVocabularyTerm objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ControlledVocabularyTerm'

  /controlled_vocabulary_terms/{id}:
    get:
      operationId: getControlledVocabularyTerm
      summary: Get a single ControlledVocabularyTerm
      description: |
        **Route:** \`GET /api/v1/controlled_vocabulary_terms/:id\`
        **Controller:** \`ControlledVocabularyTermsController#api_show\`
        **View:** \`controlled_vocabulary_terms/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - ControlledVocabularyTerms – REST
      parameters:
        - $ref: '#/components/parameters/cvtIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single ControlledVocabularyTerm.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ControlledVocabularyTerm'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All ControlledVocabularyTerm routes documented:
#   GET /controlled_vocabulary_terms     | api_index | done
#   GET /controlled_vocabulary_terms/:id | api_show  | done
`,Rs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Conveyance Resource
  description: |
    OpenAPI 3.0 specification for the **Conveyance** resource.

    A Conveyance links a Sound to a polymorphic object (CollectionObject,
    Otu, FieldOccurrence, etc.), optionally scoped to a time range within
    the sound recording.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Conveyances – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    conveyanceIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`sound\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Conveyance:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        sound_id:
          type: integer
        conveyance_object_id:
          type: integer
        conveyance_object_type:
          type: string
        start_time:
          type: number
          nullable: true
        end_time:
          type: number
          nullable: true
        project_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        sound:
          type: object
          description: Present when \`extend[]=sound\`.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /conveyances:
    get:
      operationId: getConveyances
      summary: List / filter Conveyances
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/conveyances\`
        **Controller:** \`ConveyancesController#api_index\`
        **View:** \`conveyances/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Conveyances – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: conveyance_id[]
          in: query
          description: Return specific Conveyance(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: sound_id[]
          in: query
          description: Filter by Sound ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: conveyance_object_type[]
          in: query
          description: Filter by conveyed object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: conveyance_object_id[]
          in: query
          description: Filter by conveyed object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: Filter by conveyance name.
          schema:
            type: string

      responses:
        '200':
          description: Paginated array of Conveyance objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Conveyance'

  /conveyances/{id}:
    get:
      operationId: getConveyance
      summary: Get a single Conveyance
      description: |
        **Route:** \`GET /api/v1/conveyances/:id\`
        **Controller:** \`ConveyancesController#api_show\`
        **View:** \`conveyances/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Conveyances – REST
      parameters:
        - $ref: '#/components/parameters/conveyanceIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Conveyance.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Conveyance'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Conveyance routes documented:
#   GET /conveyances     | api_index | done
#   GET /conveyances/:id | api_show  | done
`,zs=`openapi: 3.0.3
info:
  title: TaxonWorks API – DataAttribute Resource
  description: |
    OpenAPI 3.0 specification for the **DataAttribute** resource.

    A DataAttribute attaches a key-value pair to any data object.
    InternalAttributes use a Predicate (ControlledVocabularyTerm);
    ImportAttributes use a free-text import_predicate string.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: DataAttributes – REST
    description: Standard REST read endpoints.
  - name: DataAttributes – Brief
    description: Compact tabular format.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    dataAttributeIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`annotated_object\`, \`predicate\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    DataAttribute:
      type: object
      required:
        - id
        - value
      properties:
        id:
          type: integer
        type:
          type: string
          description: 'InternalAttribute or ImportAttribute.'
        attribute_subject_id:
          type: integer
        attribute_subject_type:
          type: string
        controlled_vocabulary_term_id:
          type: integer
          nullable: true
        import_predicate:
          type: string
          nullable: true
        value:
          type: string
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        predicate_name:
          type: string
          nullable: true
        object_tag:
          type: string
        object_label:
          type: string
        global_id:
          type: string
        annotated_object:
          type: object
          description: Present when \`extend[]=annotated_object\`.
        predicate:
          type: object
          description: Present when \`extend[]=predicate\`.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /data_attributes:
    get:
      operationId: getDataAttributes
      summary: List / filter DataAttributes
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/data_attributes\`
        **Controller:** \`DataAttributesController#api_index\`
        **View:** \`data_attributes/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - DataAttributes – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: data_attribute_id[]
          in: query
          description: Return specific DataAttribute(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: controlled_vocabulary_term_id[]
          in: query
          description: Filter by Predicate (CVT) ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: value
          in: query
          description: Filter by value string.
          schema:
            type: string

        - name: import_predicate
          in: query
          description: Filter by import predicate string.
          schema:
            type: string

        - name: type
          in: query
          description: Filter by type (InternalAttribute or ImportAttribute).
          schema:
            type: string

        - name: attribute_subject_type[]
          in: query
          description: Filter by subject class name.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: attribute_subject_id[]
          in: query
          description: Filter by subject id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of DataAttribute objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DataAttribute'

  /data_attributes/brief:
    get:
      operationId: getDataAttributesBrief
      summary: Brief tabular DataAttributes
      description: |
        Returns a compact, tabular representation with index and data columns.

        **Route:** \`GET /api/v1/data_attributes/brief\`
        **Controller:** \`DataAttributesController#api_brief\`
        **View:** \`data_attributes/api/v1/brief.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - DataAttributes – Brief
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
      responses:
        '200':
          description: Tabular representation with index and data columns.
          content:
            application/json:
              schema:
                type: object
                properties:
                  index:
                    type: array
                    items:
                      type: string
                  data:
                    type: array
                    items:
                      type: array
                      items:
                        type: string

  /data_attributes/{id}:
    get:
      operationId: getDataAttribute
      summary: Get a single DataAttribute
      description: |
        **Route:** \`GET /api/v1/data_attributes/:id\`
        **Controller:** \`DataAttributesController#api_show\`
        **View:** \`data_attributes/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - DataAttributes – REST
      parameters:
        - $ref: '#/components/parameters/dataAttributeIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single DataAttribute.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DataAttribute'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All DataAttribute routes documented:
#   GET /data_attributes       | api_index | done
#   GET /data_attributes/brief | api_brief | done
#   GET /data_attributes/:id   | api_show  | done
`,Bs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Depiction Resource
  description: |
    OpenAPI 3.0 specification for the **Depiction** resource.

    A Depiction links an Image to a data object, optionally with
    figure labels, captions, and SVG clip regions.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Depictions – REST
    description: Standard REST read endpoints.
  - name: Depictions – Gallery
    description: Gallery-oriented view with image URLs.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    depictionIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    Depiction:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        depiction_object_id:
          type: integer
        depiction_object_type:
          type: string
        image_id:
          type: integer
        caption:
          type: string
          nullable: true
        figure_label:
          type: string
          nullable: true
        is_metadata_depiction:
          type: boolean
          nullable: true
        sled_image_id:
          type: integer
          nullable: true
        sled_image_x_position:
          type: integer
          nullable: true
        sled_image_y_position:
          type: integer
          nullable: true
        svg_view_box:
          type: string
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time

    DepictionGalleryItem:
      type: object
      properties:
        id:
          type: integer
        depiction_object_id:
          type: integer
        depiction_object_type:
          type: string
        image_id:
          type: integer
        caption:
          type: string
          nullable: true
        figure_label:
          type: string
          nullable: true
        is_metadata_depiction:
          type: boolean
          nullable: true
        svg_view_box:
          type: string
          nullable: true
        svg_clip:
          type: string
          nullable: true
        label:
          type: string
        depiction_object:
          type: object
          properties:
            label:
              type: string
        attribution:
          type: object
          nullable: true
          properties:
            label:
              type: string
            id:
              type: integer
        figures:
          type: object
          properties:
            medium:
              type: string
            thumb:
              type: string
        image:
          type: object

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /depictions:
    get:
      operationId: getDepictions
      summary: List / filter Depictions
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/depictions\`
        **Controller:** \`DepictionsController#api_index\`
        **View:** \`depictions/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Depictions – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: depiction_id[]
          in: query
          description: Return specific Depiction(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: depiction_object_type[]
          in: query
          description: Filter by depicted object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: depiction_object_id[]
          in: query
          description: Filter by depicted object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: image_id[]
          in: query
          description: Filter by Image ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_scope[]
          in: query
          description: Scope OTU filtering (all, otu, collection_objects, etc.).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of Depiction objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Depiction'

  /depictions/gallery:
    get:
      operationId: getDepictionsGallery
      summary: Gallery view of Depictions
      description: |
        Returns depictions with image URLs, attribution, and figure renderings
        suitable for gallery display.

        **Route:** \`GET /api/v1/depictions/gallery\`
        **Controller:** \`DepictionsController#api_gallery\`
        **View:** \`depictions/api/v1/gallery.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Depictions – Gallery
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
      responses:
        '200':
          description: Array of gallery depiction items with image URLs.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DepictionGalleryItem'

  /depictions/{id}:
    get:
      operationId: getDepiction
      summary: Get a single Depiction
      description: |
        **Route:** \`GET /api/v1/depictions/:id\`
        **Controller:** \`DepictionsController#api_show\`
        **View:** \`depictions/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Depictions – REST
      parameters:
        - $ref: '#/components/parameters/depictionIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single Depiction.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Depiction'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Depiction routes documented:
#   GET /depictions         | api_index   | done
#   GET /depictions/gallery | api_gallery | done
#   GET /depictions/:id     | api_show    | done
`,Vs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Download Resource
  description: |
    OpenAPI 3.0 specification for the **Download** resource.

    A Download represents a generated file (export, archive, etc.) that can
    be retrieved via the API. Downloads have expiration times and track the
    number of times they have been accessed.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Downloads – REST
    description: Standard REST read endpoints.
  - name: Downloads – File
    description: Binary file delivery.
  - name: Downloads – DwC Archive
    description: Darwin Core archive generation and retrieval.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    downloadIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    Download:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        name:
          type: string
        type:
          type: string
          description: STI type of the download.
        description:
          type: string
          nullable: true
        filename:
          type: string
          nullable: true
        times_downloaded:
          type: integer
        request:
          type: string
          nullable: true
        expires:
          type: string
          format: date-time
          nullable: true
        sha2:
          type: string
          nullable: true
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        project_id:
          type: integer
        file:
          type: string
          nullable: true
          description: URL to the download file, if persisted and not expired.

    DownloadShow:
      type: object
      properties:
        status:
          type: object
          properties:
            ready:
              type: boolean
            expired:
              type: boolean
        download:
          $ref: '#/components/schemas/Download'

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /downloads:
    get:
      operationId: getDownloads
      summary: List / filter Downloads
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/downloads\`
        **Controller:** \`DownloadsController#api_index\`
        **View:** \`downloads/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Downloads – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: download_id[]
          in: query
          description: Return specific Download(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: download_type[]
          in: query
          description: Filter by download type.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of Download objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Download'

  /downloads/{id}:
    get:
      operationId: getDownload
      summary: Get a single Download with status
      description: |
        Returns a single Download wrapped in a status envelope indicating
        whether the file is ready and/or expired.

        **Route:** \`GET /api/v1/downloads/:id\`
        **Controller:** \`DownloadsController#api_show\`
        **View:** \`downloads/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Downloads – REST
      parameters:
        - $ref: '#/components/parameters/downloadIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single Download with status.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DownloadShow'
        '404':
          $ref: '#/components/responses/NotFound'

  /downloads/{id}/file:
    get:
      operationId: getDownloadFile
      summary: Download the file
      description: |
        Returns the binary file content of the Download if it is ready.

        **Route:** \`GET /api/v1/downloads/:id/file\`
        **Controller:** \`DownloadsController#api_file\`
        **Type:** Binary file delivery
      tags:
        - Downloads – File
      parameters:
        - $ref: '#/components/parameters/downloadIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Binary file content.
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        '404':
          $ref: '#/components/responses/NotFound'

  /downloads/dwc_archive_complete:
    get:
      operationId: getDwcArchiveComplete
      summary: Get or create a complete DwC archive
      description: |
        Creates or retrieves a complete Darwin Core Archive for the project.
        Only available for public projects (project_token authentication).

        **Route:** \`GET /api/v1/downloads/dwc_archive_complete\`
        **Controller:** \`DownloadsController#api_dwc_archive_complete\`
        **Type:** Extended resource endpoint
      tags:
        - Downloads – DwC Archive
      parameters:
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Download status and metadata for the DwC archive.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DownloadShow'

# CONSISTENCY REPORT
# All Download routes documented:
#   GET /downloads                    | api_index                | done
#   GET /downloads/:id               | api_show                 | done
#   GET /downloads/:id/file          | api_file                 | done
#   GET /downloads/dwc_archive_complete | api_dwc_archive_complete | done
`,Hs=`openapi: 3.0.3
info:
  title: TaxonWorks API – DwcOccurrence Resource
  description: |
    OpenAPI 3.0 specification for the **DwcOccurrence** resource.

    A DwcOccurrence is a cached/indexed Darwin Core record for the
    Occurrence core. Each record references a specific CollectionObject,
    AssertedDistribution, or FieldOccurrence. DWC attributes are
    camelCase. This is a cache — data are periodically regenerated.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: DwcOccurrences – REST
    description: Standard REST read endpoints.
  - name: DwcOccurrences – Autocomplete
    description: Area-name autocomplete for DwC geographic fields.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500

  schemas:
    DwcOccurrence:
      type: object
      description: |
        A Darwin Core Occurrence record. Contains standard DwC terms as
        camelCase fields. Only non-blank fields are returned. Internal
        fields (\`created_by_id\`, \`updated_by_id\`) are excluded.
      properties:
        id:
          type: integer
          description: TaxonWorks internal id (NOT the DwC occurrenceID).
        occurrenceID:
          type: string
        basisOfRecord:
          type: string
          example: 'PreservedSpecimen'
        scientificName:
          type: string
        scientificNameAuthorship:
          type: string
        kingdom:
          type: string
        phylum:
          type: string
        dwcClass:
          type: string
          description: DwC \`class\` field (renamed to avoid Ruby reserved word).
        order:
          type: string
        family:
          type: string
        genus:
          type: string
        specificEpithet:
          type: string
        infraspecificEpithet:
          type: string
        taxonRank:
          type: string
        country:
          type: string
        stateProvince:
          type: string
        county:
          type: string
        locality:
          type: string
        decimalLatitude:
          type: string
        decimalLongitude:
          type: string
        coordinateUncertaintyInMeters:
          type: string
        eventDate:
          type: string
        year:
          type: string
        month:
          type: string
        day:
          type: string
        recordedBy:
          type: string
        identifiedBy:
          type: string
        institutionCode:
          type: string
        collectionCode:
          type: string
        catalogNumber:
          type: string
        typeStatus:
          type: string
      additionalProperties:
        type: string
        description: Additional DwC terms not explicitly listed.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'
    UnprocessableEntity:
      description: Unprocessable entity.
      content:
        application/json:
          schema:
            type: object

paths:
  /dwc_occurrences:
    get:
      operationId: getDwcOccurrences
      summary: List / filter DwC Occurrences
      description: |
        Returns a paginated list of DwcOccurrence records. Only non-blank
        fields are included in each record. Supports JSON and CSV output.

        Filter parameters include standard DwC field names (camelCase) for
        direct attribute matching, plus TaxonWorks-specific filters.

        **Route:** \`GET /api/v1/dwc_occurrences\`
        **Controller:** \`DwcOccurrencesController#api_index\`
        **View:** \`dwc_occurrences/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - DwcOccurrences – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: dwc_occurrence_id[]
          in: query
          description: Return specific DwcOccurrence(s) by TW internal id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: person_id[]
          in: query
          description: Filter by Person ids (collectors/determiners).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: empty_rank[]
          in: query
          description: Return records where the specified DwC rank fields are empty.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        # DwC attribute filters — any DwC field can be passed as a query param
        - name: scientificName
          in: query
          description: Filter by scientificName.
          schema:
            type: string

        - name: country
          in: query
          description: Filter by country.
          schema:
            type: string

        - name: stateProvince
          in: query
          description: Filter by stateProvince.
          schema:
            type: string

        - name: county
          in: query
          description: Filter by county.
          schema:
            type: string

        - name: family
          in: query
          description: Filter by family.
          schema:
            type: string

        - name: genus
          in: query
          description: Filter by genus.
          schema:
            type: string

      responses:
        '200':
          description: Paginated array of DwC Occurrence records.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DwcOccurrence'
              example:
                - id: 50000
                  occurrenceID: 'urn:uuid:abc123'
                  basisOfRecord: 'PreservedSpecimen'
                  scientificName: 'Aus bus Author, 2000'
                  country: 'United States'
                  stateProvince: 'Illinois'
            text/csv:
              schema:
                type: string
                description: Tab-separated DwC occurrence data (limit 100,000 rows).

  /dwc_occurrences/area_autocomplete:
    get:
      operationId: areaAutocompleteDwcOccurrences
      summary: Autocomplete DwC geographic area names
      description: |
        Returns distinct geographic area names from DwC Occurrence records
        matching the search term. Useful for building geographic filters.

        **Route:** \`GET /api/v1/dwc_occurrences/area_autocomplete\`
        **Controller:** \`DwcOccurrencesController#api_area_autocomplete\`
        **Type:** Extended resource endpoint
      tags:
        - DwcOccurrences – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: Search string (case-insensitive ILIKE match).
          schema:
            type: string
            minLength: 1

        - name: target
          in: query
          description: Which DwC geographic field to search.
          schema:
            type: string
            default: country
            enum:
              - country
              - stateProvince
              - county

      responses:
        '200':
          description: Array of distinct area name strings (max 20), sorted by length.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
              example:
                - 'Illinois'
                - 'Illinois Territory'
        '422':
          $ref: '#/components/responses/UnprocessableEntity'

# CONSISTENCY REPORT
# All DwcOccurrence routes documented:
#   GET /dwc_occurrences/area_autocomplete | api_area_autocomplete | ✅
#   GET /dwc_occurrences                   | api_index             | ✅
`,Us=`openapi: 3.0.3
info:
  title: TaxonWorks API – FieldOccurrence Resource
  description: |
    OpenAPI 3.0 specification for the **FieldOccurrence** resource.

    A FieldOccurrence records a biological entity observed in the field.
    The API exposes a single endpoint returning Darwin Core occurrence
    attributes for a given FieldOccurrence.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: FieldOccurrences – DwC
    description: Darwin Core occurrence data for field occurrences.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    fieldOccurrenceIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    FieldOccurrenceDwc:
      type: object
      description: Darwin Core occurrence attributes for the field occurrence.
      properties:
        occurrenceID:
          type: string
        basisOfRecord:
          type: string
        scientificName:
          type: string
        taxonRank:
          type: string
        kingdom:
          type: string
        phylum:
          type: string
        class:
          type: string
        order:
          type: string
        family:
          type: string
        genus:
          type: string
        specificEpithet:
          type: string
        infraspecificEpithet:
          type: string
          nullable: true
        scientificNameAuthorship:
          type: string
        eventDate:
          type: string
        decimalLatitude:
          type: number
          nullable: true
        decimalLongitude:
          type: number
          nullable: true
        geodeticDatum:
          type: string
          nullable: true
        coordinateUncertaintyInMeters:
          type: number
          nullable: true
        country:
          type: string
          nullable: true
        stateProvince:
          type: string
          nullable: true
        county:
          type: string
          nullable: true
        locality:
          type: string
          nullable: true
        verbatimLocality:
          type: string
          nullable: true
        recordedBy:
          type: string
          nullable: true
        identifiedBy:
          type: string
          nullable: true
        dateIdentified:
          type: string
          nullable: true

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /field_occurrences/{id}/dwc:
    get:
      operationId: getFieldOccurrenceDwc
      summary: Get Darwin Core data for a FieldOccurrence
      description: |
        Returns Darwin Core occurrence attributes for the specified
        FieldOccurrence.

        **Route:** \`GET /api/v1/field_occurrences/:id/dwc\`
        **Controller:** \`FieldOccurrencesController#api_dwc\`
        **Type:** Extended resource endpoint
      tags:
        - FieldOccurrences – DwC
      parameters:
        - $ref: '#/components/parameters/fieldOccurrenceIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Darwin Core occurrence attributes.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FieldOccurrenceDwc'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All FieldOccurrence routes documented:
#   GET /field_occurrences/:id/dwc | api_dwc | done
`,Ws=`openapi: 3.0.3
info:
  title: TaxonWorks API – Identifier Resource
  description: |
    OpenAPI 3.0 specification for the **Identifier** resource.

    An Identifier assigns a unique identifier string (local or global)
    to any data object. Local identifiers use Namespaces; global
    identifiers (DOI, URI, LSID, etc.) do not.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Identifiers – REST
    description: Standard REST read endpoints.
  - name: Identifiers – Autocomplete
    description: Autocomplete search.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    identifierIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`namespace\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Identifier:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        identifier_object_id:
          type: integer
        identifier_object_type:
          type: string
        identifier:
          type: string
          description: The identifier string value.
        type:
          type: string
          description: STI type (e.g., Identifier::Local::CatalogNumber).
        cached:
          type: string
          description: Full cached identifier (namespace + identifier).
        namespace_id:
          type: integer
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        identifier_object_global_id:
          type: string
        namespace:
          type: object
          description: Present when \`extend[]=namespace\`.
          properties:
            id:
              type: integer
            name:
              type: string
            short_name:
              type: string
            delimiter:
              type: string
            institution:
              type: string
              nullable: true
            verbatim_short_name:
              type: string
              nullable: true

    IdentifierAutocompleteItem:
      type: object
      properties:
        id:
          type: integer
        label:
          type: string
        label_html:
          type: string
        identifier_object_global_id:
          type: string
        identifier_object_id:
          type: integer
        identifier_object_type:
          type: string
        response_values:
          type: object

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /identifiers:
    get:
      operationId: getIdentifiers
      summary: List / filter Identifiers
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/identifiers\`
        **Controller:** \`IdentifiersController#api_index\`
        **View:** \`identifiers/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Identifiers – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: identifier_id[]
          in: query
          description: Return specific Identifier(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: identifier[]
          in: query
          description: Filter by identifier string values.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: namespace_id[]
          in: query
          description: Filter by Namespace ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: type
          in: query
          description: Filter by identifier STI type.
          schema:
            type: string

        - name: identifier_object_type[]
          in: query
          description: Filter by identified object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: identifier_object_id[]
          in: query
          description: Filter by identified object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: namespace_name
          in: query
          description: Filter by namespace name.
          schema:
            type: string

        - name: namespace_short_name
          in: query
          description: Filter by namespace short name.
          schema:
            type: string

        - name: query_string
          in: query
          description: General search string.
          schema:
            type: string

      responses:
        '200':
          description: Paginated array of Identifier objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Identifier'

  /identifiers/autocomplete:
    get:
      operationId: autocompleteIdentifiers
      summary: Autocomplete Identifiers
      description: |
        **Route:** \`GET /api/v1/identifiers/autocomplete\`
        **Controller:** \`IdentifiersController#api_autocomplete\`
        **View:** \`identifiers/api/v1/autocomplete.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Identifiers – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          schema:
            type: string
            minLength: 1
        - name: method
          in: query
          description: Populates response_values key.
          schema:
            type: string
      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/IdentifierAutocompleteItem'

  /identifiers/{id}:
    get:
      operationId: getIdentifier
      summary: Get a single Identifier
      description: |
        **Route:** \`GET /api/v1/identifiers/:id\`
        **Controller:** \`IdentifiersController#api_show\`
        **View:** \`identifiers/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Identifiers – REST
      parameters:
        - $ref: '#/components/parameters/identifierIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Identifier.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Identifier'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Identifier routes documented:
#   GET /identifiers              | api_index        | done
#   GET /identifiers/autocomplete | api_autocomplete | done
#   GET /identifiers/:id          | api_show         | done
`,Gs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Image Resource
  description: |
    OpenAPI 3.0 specification for the **Image** resource.

    An Image stores a raster image file with metadata (dimensions, fingerprint,
    pixels-to-centimeter ratio). Images are linked to data objects via
    Depictions. The API provides JSON metadata endpoints, an OTU inventory
    view, SHA-based lookups, and binary endpoints for file delivery and
    region cropping.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Images – REST
    description: Standard REST read endpoints.
  - name: Images – Inventory
    description: OTU-scoped image inventory.
  - name: Images – SHA Lookup
    description: Image lookup by SHA fingerprint.
  - name: Images – Binary
    description: Binary file and image region delivery.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    imageIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    shaPath:
      name: sha
      in: path
      required: true
      description: Image file fingerprint (SHA hash).
      schema:
        type: string
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`depictions\`, \`attribution\`, \`source\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Image:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        height:
          type: integer
        width:
          type: integer
        image_file_fingerprint:
          type: string
          description: SHA256 fingerprint of the image file.
        image_file_file_name:
          type: string
        image_file_file_size:
          type: integer
        pixels_to_centimeter:
          type: number
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        original:
          type: string
          description: URL to the original-size image.
        thumb:
          type: string
          description: URL to the thumbnail image.
        medium:
          type: string
          description: URL to the medium-size image.
        content_type:
          type: string
          description: MIME type of the image.
        original_png:
          type: string
          description: URL to the original image as PNG.
        as_png:
          type: string
          description: URL to convert and serve image as PNG.
        object_tag:
          type: string
        global_id:
          type: string
        depictions:
          type: array
          description: Present when \`extend[]=depictions\`.
          items:
            type: object
            properties:
              figure_label:
                type: string
                nullable: true
              caption:
                type: string
                nullable: true
              depiction_object_type:
                type: string
              depiction_object_id:
                type: integer
              position:
                type: integer
              label:
                type: string
        attribution:
          type: object
          nullable: true
          description: Present when \`extend[]=attribution\`.
          properties:
            label:
              type: string
            id:
              type: integer
            license:
              type: string
              description: Full license text from Creative Commons licenses.
        source:
          type: object
          nullable: true
          description: Present when \`extend[]=source\`.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ImageInventoryItem:
      type: object
      description: Simplified image record for OTU inventory.
      properties:
        id:
          type: integer
        image_file_fingerprint:
          type: string
        original:
          type: string
        thumb:
          type: string
        medium:
          type: string
        depictions:
          type: array
          description: Present when \`extend[]=depictions\`.
          items:
            type: object
            properties:
              caption:
                type: string
                nullable: true
              figure_label:
                type: string
                nullable: true
              depiction_object_type:
                type: string
              depiction_object_id:
                type: integer
              label:
                type: string
        attribution:
          type: object
          nullable: true
          description: Present when \`extend[]=attribution\`.
          properties:
            label:
              type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /images:
    get:
      operationId: getImages
      summary: List / filter Images
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/images\`
        **Controller:** \`ImagesController#api_index\`
        **View:** \`images/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Images – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: image_id[]
          in: query
          description: Return specific Image(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids (via depictions).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_scope[]
          in: query
          description: Scope for OTU filtering (all, otu, collection_objects, etc.).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id_target
          in: query
          description: Target for taxon name filtering.
          schema:
            type: string

        - name: collection_object_id[]
          in: query
          description: Filter by CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_scope[]
          in: query
          description: Scope for collection object filtering.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: field_occurrence_id[]
          in: query
          description: Filter by FieldOccurrence ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: field_occurrence_scope[]
          in: query
          description: Scope for field occurrence filtering.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: depiction_object_type[]
          in: query
          description: Filter by depicted object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: depictions
          in: query
          description: Filter by whether image has depictions.
          schema:
            type: boolean

        - name: depiction_caption
          in: query
          description: Filter by depiction caption text.
          schema:
            type: string

        - name: depiction_caption_exact
          in: query
          description: Exact match on depiction caption.
          schema:
            type: boolean

        - name: license[]
          in: query
          description: Filter by license type.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: copyright_year
          in: query
          description: Filter by exact copyright year.
          schema:
            type: integer

        - name: copyright_prior_to_year
          in: query
          description: Filter by copyright before year.
          schema:
            type: integer

        - name: copyright_after_year
          in: query
          description: Filter by copyright after year.
          schema:
            type: integer

        - name: copyright_holder_id[]
          in: query
          description: Filter by copyright holder person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: copyright_holder_id_all
          in: query
          description: Require all copyright holder ids to match.
          schema:
            type: boolean

        - name: copyright_holder_organization_id[]
          in: query
          description: Filter by copyright holder organization ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: owner_id[]
          in: query
          description: Filter by owner person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: owner_id_all
          in: query
          description: Require all owner ids to match.
          schema:
            type: boolean

        - name: owner_organization_id[]
          in: query
          description: Filter by owner organization ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: creator_id[]
          in: query
          description: Filter by creator user ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: creator_id_all
          in: query
          description: Require all creator ids to match.
          schema:
            type: boolean

        - name: editor_id[]
          in: query
          description: Filter by editor user ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: editor_id_all
          in: query
          description: Require all editor ids to match.
          schema:
            type: boolean

        - name: source_id[]
          in: query
          description: Filter by Source ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biocuration_class_id[]
          in: query
          description: Filter by biocuration class ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: sled_image
          in: query
          description: Filter by whether image is a SLED image.
          schema:
            type: boolean

        - name: sled_image_id[]
          in: query
          description: Filter by SLED image ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: sqed_image
          in: query
          description: Filter by whether image has SqED data.
          schema:
            type: boolean

        - name: freeform_svg
          in: query
          description: Filter by whether image has freeform SVG annotations.
          schema:
            type: boolean

        - name: type_material_depictions
          in: query
          description: Filter images depicting type material.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of Image objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Image'

  /images/{id}:
    get:
      operationId: getImage
      summary: Get a single Image
      description: |
        Returns a single Image with full metadata. Also accepts a SHA
        fingerprint instead of a numeric id.

        **Route:** \`GET /api/v1/images/:id\`
        **Controller:** \`ImagesController#api_show\`
        **View:** \`images/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Images – REST
      parameters:
        - $ref: '#/components/parameters/imageIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Image.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Image'
        '404':
          $ref: '#/components/responses/NotFound'

  /images/{otu_id}/inventory:
    get:
      operationId: getImageInventory
      summary: Image inventory for an OTU
      description: |
        Returns a simplified list of images associated with an OTU,
        with optional depiction and attribution extensions.

        **Route:** \`GET /api/v1/images/:otu_id/inventory\`
        **Controller:** \`ImagesController#api_image_inventory\`
        **View:** \`images/api/v1/images.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Images – Inventory
      parameters:
        - name: otu_id
          in: path
          required: true
          schema:
            type: integer

        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: otu_scope[]
          in: query
          description: Scope for OTU filtering.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of image inventory items.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ImageInventoryItem'

  /images/sha/{sha}:
    get:
      operationId: getImageBySha
      summary: Get Image metadata by SHA fingerprint
      description: |
        Returns Image JSON metadata looked up by its file fingerprint.

        **Route:** \`GET /api/v1/images/sha/:sha\`
        **Controller:** \`ImagesController#api_image_show_sha\`
        **View:** \`images/api/v1/show.json.jbuilder\`
        **Type:** SHA lookup
      tags:
        - Images – SHA Lookup
      parameters:
        - $ref: '#/components/parameters/shaPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Image.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Image'
        '404':
          $ref: '#/components/responses/NotFound'

  /images/file/sha/{sha}:
    get:
      operationId: getImageFileBySha
      summary: Download original image file by SHA
      description: |
        Returns the original binary image file looked up by its fingerprint.

        **Route:** \`GET /api/v1/images/file/sha/:sha\`
        **Controller:** \`ImagesController#api_image_file_sha\`
        **Type:** Binary file delivery
      tags:
        - Images – Binary
      parameters:
        - $ref: '#/components/parameters/shaPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Binary image file.
          content:
            image/*:
              schema:
                type: string
                format: binary
        '404':
          $ref: '#/components/responses/NotFound'

  /images/{id}/scale_to_box/{x}/{y}/{width}/{height}/{box_width}/{box_height}:
    get:
      operationId: getImageScaleToBox
      summary: Get a cropped/scaled image region
      description: |
        Returns a JPEG image cropped and scaled to the specified box.

        **Route:** \`GET /api/v1/images/:id/scale_to_box/:x/:y/:width/:height/:box_width/:box_height\`
        **Controller:** \`ImagesController#api_scale_to_box\`
        **Type:** Binary image delivery
      tags:
        - Images – Binary
      parameters:
        - $ref: '#/components/parameters/imageIdPath'
        - name: x
          in: path
          required: true
          schema:
            type: integer
          description: X offset of the crop region.
        - name: 'y'
          in: path
          required: true
          schema:
            type: integer
          description: Y offset of the crop region.
        - name: width
          in: path
          required: true
          schema:
            type: integer
          description: Width of the crop region.
        - name: height
          in: path
          required: true
          schema:
            type: integer
          description: Height of the crop region.
        - name: box_width
          in: path
          required: true
          schema:
            type: integer
          description: Width of the output box.
        - name: box_height
          in: path
          required: true
          schema:
            type: integer
          description: Height of the output box.
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Cropped and scaled JPEG image.
          content:
            image/jpeg:
              schema:
                type: string
                format: binary
        '404':
          $ref: '#/components/responses/NotFound'

  /images/{id}/as_png:
    get:
      operationId: getImageAsPng
      summary: Get image converted to PNG
      description: |
        Returns the image converted to PNG format.

        **Route:** \`GET /api/v1/images/:id/as_png\`
        **Controller:** \`ImagesController#api_as_png\`
        **Type:** Binary image delivery
      tags:
        - Images – Binary
      parameters:
        - $ref: '#/components/parameters/imageIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Image in PNG format.
          content:
            image/png:
              schema:
                type: string
                format: binary
        '404':
          $ref: '#/components/responses/NotFound'

  /images/file/sha/{sha}/scale_to_box/{x}/{y}/{width}/{height}/{box_width}/{box_height}:
    get:
      operationId: getImageScaleToBoxBySha
      summary: Get a cropped/scaled image region by SHA
      description: |
        Returns a JPEG image cropped and scaled to the specified box,
        looked up by its file fingerprint.

        **Route:** \`GET /api/v1/images/file/sha/:sha/scale_to_box/:x/:y/:width/:height/:box_width/:box_height\`
        **Controller:** \`ImagesController#api_scale_to_box_sha\`
        **Type:** Binary image delivery
      tags:
        - Images – Binary
      parameters:
        - $ref: '#/components/parameters/shaPath'
        - name: x
          in: path
          required: true
          schema:
            type: integer
          description: X offset of the crop region.
        - name: 'y'
          in: path
          required: true
          schema:
            type: integer
          description: Y offset of the crop region.
        - name: width
          in: path
          required: true
          schema:
            type: integer
          description: Width of the crop region.
        - name: height
          in: path
          required: true
          schema:
            type: integer
          description: Height of the crop region.
        - name: box_width
          in: path
          required: true
          schema:
            type: integer
          description: Width of the output box.
        - name: box_height
          in: path
          required: true
          schema:
            type: integer
          description: Height of the output box.
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Cropped and scaled JPEG image.
          content:
            image/jpeg:
              schema:
                type: string
                format: binary
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Image routes documented:
#   GET /images                                               | api_index            | done
#   GET /images/:id                                           | api_show             | done
#   GET /images/:otu_id/inventory                             | api_image_inventory  | done
#   GET /images/sha/:sha                                      | api_image_show_sha   | done
#   GET /images/file/sha/:sha                                 | api_image_file_sha   | done
#   GET /images/:id/scale_to_box/:x/:y/:w/:h/:bw/:bh         | api_scale_to_box     | done
#   GET /images/:id/as_png                                    | api_as_png           | done
#   GET /images/file/sha/:sha/scale_to_box/:x/:y/:w/:h/:bw/:bh | api_scale_to_box_sha | done
`,Ks=`openapi: 3.0.3
info:
  title: TaxonWorks API – Lead Resource
  description: |
    OpenAPI 3.0 specification for the **Lead** (dichotomous key) resource.

    A Lead represents a node in a dichotomous identification key. The API
    exposes a single endpoint that returns the full key structure as JSON,
    including metadata (title, citation, attribution, taxonomic scope) and
    data (entries and leads).

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Leads – Key
    description: Dichotomous key endpoint.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    leadIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    LeadKey:
      type: object
      properties:
        metadata:
          type: object
          properties:
            server:
              type: string
              description: Root URL of the TaxonWorks instance.
            key_version:
              type: string
              description: Version string for the key format.
            title:
              type: string
              description: Title text from the root lead.
            origin_citation:
              type: string
              nullable: true
              description: Cached source citation.
            attribution:
              type: object
              nullable: true
              description: Attribution JSON.
            taxonomic_scope:
              type: string
              nullable: true
              description: Label for the associated OTU.
        data:
          type: object
          properties:
            entries:
              type: object
              description: Key metadata describing the couplet structure.
            leads:
              type: object
              description: Lead data with text, targets, and figures.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /leads/key/{id}:
    get:
      operationId: getLeadKey
      summary: Get a dichotomous key
      description: |
        Returns the full dichotomous key structure for a public Lead,
        including metadata and data sections.

        **Route:** \`GET /api/v1/leads/key/:id\`
        **Controller:** \`LeadsController#api_key\`
        **View:** \`leads/api/v1/key.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Leads – Key
      parameters:
        - $ref: '#/components/parameters/leadIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Full dichotomous key structure.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LeadKey'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Lead routes documented:
#   GET /leads/key/:id | api_key | done
`,qs=`openapi: 3.0.3
info:
  title: TaxonWorks API – News Resource
  description: |
    OpenAPI 3.0 specification for the **News** resource.

    News items are public blog posts associated with a project. Only current,
    public blog posts (\`News::Project::BlogPost\`) are returned by the API.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: News – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    newsIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    News:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        type:
          type: string
          description: 'STI type, e.g. News::Project::BlogPost.'
        title:
          type: string
        body:
          type: string
          nullable: true
        body_html:
          type: string
          description: Rendered markdown HTML of the body.
        display_start:
          type: string
          format: date-time
          nullable: true
        display_end:
          type: string
          format: date-time
          nullable: true
        is_public:
          type: boolean
        current:
          type: boolean
          description: Whether the news item is currently active.
        url:
          type: string
          description: URL to the news item.
        creator:
          type: string
          description: Name of the user who created the news item.
        updater:
          type: string
          description: Name of the user who last updated the news item.
        project_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /news:
    get:
      operationId: getNews
      summary: List / filter News
      description: |
        Returns a paginated list of current, public blog posts.

        **Route:** \`GET /api/v1/news\`
        **Controller:** \`NewsController#api_index\`
        **View:** \`news/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - News – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: news_id[]
          in: query
          description: Return specific News item(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: type[]
          in: query
          description: Filter by news type.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of News objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/News'

  /news/{id}:
    get:
      operationId: getNewsItem
      summary: Get a single News item
      description: |
        **Route:** \`GET /api/v1/news/:id\`
        **Controller:** \`NewsController#api_show\`
        **View:** \`news/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - News – REST
      parameters:
        - $ref: '#/components/parameters/newsIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single News item.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/News'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All News routes documented:
#   GET /news     | api_index | done
#   GET /news/:id | api_show  | done
`,Js=`openapi: 3.0.3
info:
  title: TaxonWorks API – Note Resource
  description: |
    OpenAPI 3.0 specification for the **Note** resource.

    A Note is a free-text annotation attached to any data object
    (polymorphic via \`note_object_type\` / \`note_object_id\`).

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Notes – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    noteIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    Note:
      type: object
      required:
        - id
        - text
      properties:
        id:
          type: integer
        text:
          type: string
          description: The note content.
        note_object_attribute:
          type: string
          nullable: true
          description: Specific attribute the note annotates (if any).
        note_object_id:
          type: integer
        note_object_type:
          type: string
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        note_object:
          type: object
          description: Metadata for the annotated object.
          properties:
            global_id:
              type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /notes:
    get:
      operationId: getNotes
      summary: List / filter Notes
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/notes\`
        **Controller:** \`NotesController#api_index\`
        **View:** \`notes/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Notes – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: note_id[]
          in: query
          description: Return specific Note(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: text
          in: query
          description: Filter by note text (wildcard match).
          schema:
            type: string

        - name: note_object_type[]
          in: query
          description: Filter by annotated object class name.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: note_object_id[]
          in: query
          description: Filter by annotated object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of Note objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Note'

  /notes/{id}:
    get:
      operationId: getNote
      summary: Get a single Note
      description: |
        **Route:** \`GET /api/v1/notes/:id\`
        **Controller:** \`NotesController#api_show\`
        **View:** \`notes/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Notes – REST
      parameters:
        - $ref: '#/components/parameters/noteIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single Note.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Note'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Note routes documented:
#   GET /notes     | api_index | done
#   GET /notes/:id | api_show  | done
`,Ys=`openapi: 3.0.3
info:
  title: TaxonWorks API – Observation Resource
  description: |
    OpenAPI 3.0 specification for the **Observation** resource.

    An Observation records a scored value for a Descriptor on an observation
    object (Otu, CollectionObject, FieldOccurrence, etc.). STI subtypes:
    Qualitative, PresenceAbsence, Continuous, Sample, Media, Working, Gene.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Observations – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    observationIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`character_state\`, \`descriptor\`, \`depictions\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Observation:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        descriptor_id:
          type: integer
        observation_object_id:
          type: integer
        observation_object_type:
          type: string
        character_state_id:
          type: integer
          nullable: true
        frequency:
          type: number
          nullable: true
        continuous_value:
          type: number
          nullable: true
        continuous_unit:
          type: string
          nullable: true
        sample_n:
          type: integer
          nullable: true
        sample_min:
          type: number
          nullable: true
        sample_max:
          type: number
          nullable: true
        sample_median:
          type: number
          nullable: true
        sample_mean:
          type: number
          nullable: true
        sample_units:
          type: string
          nullable: true
        sample_standard_error:
          type: number
          nullable: true
        sample_standard_deviation:
          type: number
          nullable: true
        presence:
          type: boolean
          nullable: true
        description:
          type: string
          nullable: true
        cached:
          type: string
          nullable: true
        cached_column_label:
          type: string
          nullable: true
        cached_row_label:
          type: string
          nullable: true
        type:
          type: string
          description: 'STI type: Observation::Qualitative, ::Continuous, etc.'
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        global_id:
          type: string
        label:
          type: string
        character_state:
          type: object
          description: Present when \`extend[]=character_state\` (Qualitative only).
          properties:
            label:
              type: string
            name:
              type: string
        descriptor:
          type: object
          description: Present when \`extend[]=descriptor\`.
          properties:
            name:
              type: string
            description:
              type: string
              nullable: true
        depictions:
          type: array
          description: Present when \`extend[]=depictions\`.
          items:
            type: object
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /observations:
    get:
      operationId: getObservations
      summary: List / filter Observations
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/observations\`
        **Controller:** \`ObservationsController#api_index\`
        **View:** \`observations/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Observations – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: observation_id[]
          in: query
          description: Return specific Observation(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descriptor_id
          in: query
          description: Filter by Descriptor id.
          schema:
            type: integer

        - name: observation_object_type[]
          in: query
          description: Filter by observation object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: observation_object_id[]
          in: query
          description: Filter by observation object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: observation_type[]
          in: query
          description: Filter by observation STI type.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: observation_matrix_id[]
          in: query
          description: Filter by ObservationMatrix ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: character_state_id[]
          in: query
          description: Filter by CharacterState ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_id[]
          in: query
          description: Filter by CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: Include descendants of taxon_name_id.
          schema:
            type: boolean

        - name: wkt
          in: query
          description: Spatial filter in WKT format.
          schema:
            type: string

        - name: geo_json
          in: query
          description: GeoJSON geometry for spatial filtering.
          schema:
            type: object

      responses:
        '200':
          description: Paginated array of Observation objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Observation'

  /observations/{id}:
    get:
      operationId: getObservation
      summary: Get a single Observation
      description: |
        **Route:** \`GET /api/v1/observations/:id\`
        **Controller:** \`ObservationsController#api_show\`
        **View:** \`observations/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Observations – REST
      parameters:
        - $ref: '#/components/parameters/observationIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Observation.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Observation'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Observation routes documented:
#   GET /observations     | api_index | done
#   GET /observations/:id | api_show  | done
`,Xs=`openapi: 3.0.3
info:
  title: TaxonWorks API – ObservationMatrix Resource
  description: |
    OpenAPI 3.0 specification for the **ObservationMatrix** resource.

    An ObservationMatrix organises Observations into rows (OTUs,
    CollectionObjects, etc.) and columns (Descriptors). The API provides
    standard REST endpoints plus two task-based endpoints for interactive
    keys and image matrices.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: ObservationMatrices – REST
    description: Standard REST read endpoints.
  - name: ObservationMatrices – Interactive Key
    description: Interactive identification key endpoint.
  - name: ObservationMatrices – Image Matrix
    description: Image-based matrix endpoint.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    matrixIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    matrixIdKeyPath:
      name: observation_matrix_id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`rows\`, \`columns\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    ObservationMatrix:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        name:
          type: string
        is_media_matrix:
          type: boolean
          description: Whether all descriptors are media-type.
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        global_id:
          type: string
        rows:
          type: array
          description: Present when \`extend[]=rows\`.
          items:
            type: object
            properties:
              object_tag:
                type: string
              global_id:
                type: string
              observation_object:
                type: object
                properties:
                  object_tag:
                    type: string
                  global_id:
                    type: string
        columns:
          type: array
          description: Present when \`extend[]=columns\`.
          items:
            type: object
            properties:
              object_tag:
                type: string
              global_id:
                type: string
              descriptor:
                type: object
                properties:
                  object_tag:
                    type: string
                  global_id:
                    type: string
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    InteractiveKey:
      type: object
      properties:
        observation_matrix_id:
          type: integer
        project_id:
          type: integer
        observation_matrix_citation:
          type: string
          nullable: true
        descriptor_available_languages:
          type: array
          items:
            type: object
        language_id:
          type: integer
          nullable: true
        language_to_use:
          type: string
          nullable: true
        keyword_ids:
          type: array
          items:
            type: integer
        descriptor_available_keywords:
          type: array
          items:
            type: object
        row_filter:
          type: string
          nullable: true
        row_id_filter_array:
          type: array
          items:
            type: integer
        otu_filter:
          type: string
          nullable: true
        otu_id_filter_array:
          type: array
          items:
            type: integer
        sorting:
          type: string
          nullable: true
        error_tolerance:
          type: integer
          nullable: true
        eliminate_unknown:
          type: boolean
        identified_to_rank:
          type: string
          nullable: true
        selected_descriptors:
          type: string
          nullable: true
        selected_descriptors_hash:
          type: object
        list_of_descriptors:
          type: array
          items:
            type: object
        observation_matrix:
          type: object
          description: Full observation matrix object with metadata and attributes.
        remaining:
          type: array
          description: OTUs remaining after elimination.
          items:
            type: object
            properties:
              errors:
                type: integer
              error_descriptors:
                type: array
                items:
                  type: object
              object:
                type: object
        eliminated:
          type: array
          description: OTUs eliminated by character scoring.
          items:
            type: object
            properties:
              errors:
                type: integer
              error_descriptors:
                type: array
                items:
                  type: object
              object:
                type: object
        eliminated_for_key:
          type: array
          description: OTUs eliminated specifically for the key.
          items:
            type: object
            properties:
              errors:
                type: integer
              error_descriptors:
                type: array
                items:
                  type: object
              object:
                type: object

    ImageMatrix:
      type: object
      properties:
        observation_matrix_id:
          type: integer
        observation_matrix_citation:
          type: string
          nullable: true
        descriptor_available_languages:
          type: array
          items:
            type: object
        language_id:
          type: integer
          nullable: true
        language_to_use:
          type: string
          nullable: true
        keyword_ids:
          type: array
          items:
            type: integer
        descriptor_available_keywords:
          type: array
          items:
            type: object
        row_filter:
          type: string
          nullable: true
        row_id_filter_array:
          type: array
          items:
            type: integer
        otu_filter:
          type: string
          nullable: true
        otu_id_filter_array:
          type: array
          items:
            type: integer
        identified_to_rank:
          type: string
          nullable: true
        pagination:
          type: object
          properties:
            pagination_page:
              type: integer
            pagination_per_page:
              type: integer
            pagination_total:
              type: integer
            pagination_total_pages:
              type: integer
            pagination_next_page:
              type: integer
              nullable: true
            pagination_previous_page:
              type: integer
              nullable: true
        list_of_descriptors:
          type: array
          items:
            type: object
        image_hash:
          type: object
          description: Map of image id to image and citation objects.
          additionalProperties:
            type: object
            properties:
              image:
                type: object
              citations:
                type: array
                items:
                  type: object
        depiction_matrix:
          type: array
          description: Matrix of depictions per observation object.
          items:
            type: object
            properties:
              object:
                type: object
                properties:
                  id:
                    type: integer
                  type:
                    type: string
                  label:
                    type: string
              depictions:
                type: array
                items:
                  type: array
                  items:
                    type: object
                    properties:
                      id:
                        type: integer
                      depiction_object_id:
                        type: integer
                      depiction_object_type:
                        type: string
                      image_id:
                        type: integer
                      caption:
                        type: string
                        nullable: true
                      figure_label:
                        type: string
                        nullable: true
        observation_matrix:
          type: object
          nullable: true

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /observation_matrices:
    get:
      operationId: getObservationMatrices
      summary: List / filter ObservationMatrices
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/observation_matrices\`
        **Controller:** \`ObservationMatricesController#api_index\`
        **View:** \`observation_matrices/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - ObservationMatrices – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: observation_matrix_id[]
          in: query
          description: Return specific ObservationMatrix(es) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of ObservationMatrix objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ObservationMatrix'

  /observation_matrices/{id}:
    get:
      operationId: getObservationMatrix
      summary: Get a single ObservationMatrix
      description: |
        **Route:** \`GET /api/v1/observation_matrices/:id\`
        **Controller:** \`ObservationMatricesController#api_show\`
        **View:** \`observation_matrices/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - ObservationMatrices – REST
      parameters:
        - $ref: '#/components/parameters/matrixIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single ObservationMatrix.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ObservationMatrix'
        '404':
          $ref: '#/components/responses/NotFound'

  /observation_matrices/{observation_matrix_id}/key:
    get:
      operationId: getObservationMatrixKey
      summary: Interactive identification key
      description: |
        Returns an interactive key for the observation matrix, with remaining,
        eliminated, and eliminated-for-key OTU lists based on the selected
        descriptors and filtering parameters.

        **Route:** \`GET /api/v1/observation_matrices/:observation_matrix_id/key\`
        **Controller:** \`Tasks::ObservationMatrices::InteractiveKeyController#api_key\`
        **View:** \`tasks/observation_matrices/interactive_key/key.json.jbuilder\`
        **Type:** Extended resource endpoint (task)
      tags:
        - ObservationMatrices – Interactive Key
      parameters:
        - $ref: '#/components/parameters/matrixIdKeyPath'
        - $ref: '#/components/parameters/projectId'

        - name: language_id
          in: query
          description: Language id for descriptor labels.
          schema:
            type: integer

        - name: row_filter
          in: query
          description: Comma-separated row ids to include.
          schema:
            type: string

        - name: otu_filter
          in: query
          description: Comma-separated OTU ids to include.
          schema:
            type: string

        - name: sorting
          in: query
          description: Sort order for descriptors.
          schema:
            type: string

        - name: eliminate_unknown
          in: query
          description: Whether to eliminate taxa with unknown scores.
          schema:
            type: boolean

        - name: error_tolerance
          in: query
          description: Number of mismatches allowed before elimination.
          schema:
            type: integer

        - name: identified_to_rank
          in: query
          description: Restrict to taxa identified to this rank.
          schema:
            type: string

        - name: selected_descriptors
          in: query
          description: Comma-separated descriptor ids with selected states.
          schema:
            type: string

        - name: keyword_ids[]
          in: query
          description: Filter descriptors by keyword tag ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Interactive key data.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InteractiveKey'

  /observation_matrices/{observation_matrix_id}/image_matrix:
    get:
      operationId: getObservationMatrixImageMatrix
      summary: Image matrix view
      description: |
        Returns an image-based matrix for the observation matrix, with
        depictions organised by observation object and descriptor, plus
        image metadata and citations.

        **Route:** \`GET /api/v1/observation_matrices/:observation_matrix_id/image_matrix\`
        **Controller:** \`Tasks::ObservationMatrices::ImageMatrixController#api_key\`
        **View:** \`observation_matrices/api/v1/image_matrix.json.jbuilder\`
        **Type:** Extended resource endpoint (task)
      tags:
        - ObservationMatrices – Image Matrix
      parameters:
        - $ref: '#/components/parameters/matrixIdKeyPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: language_id
          in: query
          description: Language id for descriptor labels.
          schema:
            type: integer

        - name: row_filter
          in: query
          description: Comma-separated row ids to include.
          schema:
            type: string

        - name: otu_filter
          in: query
          description: Comma-separated OTU ids to include.
          schema:
            type: string

        - name: sorting
          in: query
          description: Sort order for descriptors.
          schema:
            type: string

        - name: eliminate_unknown
          in: query
          description: Whether to eliminate taxa with unknown scores.
          schema:
            type: boolean

        - name: error_tolerance
          in: query
          description: Number of mismatches allowed before elimination.
          schema:
            type: integer

        - name: identified_to_rank
          in: query
          description: Restrict to taxa identified to this rank.
          schema:
            type: string

        - name: selected_descriptors
          in: query
          description: Comma-separated descriptor ids with selected states.
          schema:
            type: string

        - name: keyword_ids[]
          in: query
          description: Filter descriptors by keyword tag ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Image matrix data.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ImageMatrix'

# CONSISTENCY REPORT
# All ObservationMatrix routes documented:
#   GET /observation_matrices                                    | api_index        | done
#   GET /observation_matrices/:id                                | api_show         | done
#   GET /observation_matrices/:observation_matrix_id/key         | api_key (key)    | done
#   GET /observation_matrices/:observation_matrix_id/image_matrix | api_key (image) | done
`,Zs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Otu Resource
  description: |
    OpenAPI 3.0 specification for the **Otu** (Operational Taxonomic Unit)
    resource of the TaxonWorks external API.

    An Otu can be thought of as a unit of study. In most cases an OTU
    represents a taxon concept. OTUs are labelled either with an arbitrary
    \`name\`, a linked \`taxon_name_id\`, or both. They are a primary unit of
    work in TaxonWorks: rows in matrices, taxon pages, individuals or
    populations, or arbitrary clusters of organisms.

    ## Authentication
    All endpoints require **either** a valid \`project_token\` **or** a valid
    \`user_token\` + \`project_id\` pair, passed as query parameters.

    ## Pagination
    List endpoints return paginated results. Use \`page\` and \`per\` query
    parameters. Pagination metadata is returned in response headers
    (\`X-Page\`, \`X-Per-Page\`, \`X-Total\`, \`X-Total-Pages\`).

    ## Response extensions
    Some endpoints support \`extend[]\` and \`embed[]\` query parameters to
    include additional nested data in the response.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Otus – REST
    description: Standard REST (CRUD-style) read endpoints for Otus.
  - name: Otus – Autocomplete
    description: Autocomplete / typeahead search across OTU names, taxon names, and common names.
  - name: Otus – Inventory
    description: Extended resource-specific inventory endpoints that aggregate related data for a single OTU.

# ─────────────────────────────────────────────
# Security
# ─────────────────────────────────────────────
security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  # ── Security Schemes ──
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
      description: User API token. When used, \`project_id\` must also be provided.
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token
      description: Project-level API token. Provides read-only access scoped to the project.

  # ── Reusable Parameters ──
  parameters:
    projectId:
      name: project_id
      in: query
      description: Project ID (required when authenticating with a user \`token\`).
      schema:
        type: integer

    pageParam:
      name: page
      in: query
      description: Page number for paginated results.
      schema:
        type: integer
        minimum: 1
        default: 1

    perParam:
      name: per
      in: query
      description: Number of items per page.
      schema:
        type: integer
        minimum: 1
        maximum: 10000
        default: 500

    otuIdPath:
      name: id
      in: path
      required: true
      description: OTU id.
      schema:
        type: integer

    extendParam:
      name: extend[]
      in: query
      description: |
        Include additional nested data in the response. Supported values
        vary by endpoint. Common values: \`taxon_name\`, \`notes\`, \`common_names\`.
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

    embedParam:
      name: embed[]
      in: query
      description: |
        Embed related collections inside the response. Supported values
        vary by endpoint (e.g. \`depictions\`).
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  # ── Schemas ──
  schemas:
    Otu:
      type: object
      description: An Operational Taxonomic Unit.
      required:
        - id
      properties:
        id:
          type: integer
          description: Unique identifier.
          example: 12345
        name:
          type: string
          nullable: true
          description: An arbitrary label for the OTU. At least one of \`name\` or \`taxon_name_id\` must be present.
          example: 'Aus bus'
        taxon_name_id:
          type: integer
          nullable: true
          description: The id of the linked nomenclatural TaxonName record.
          example: 6789
        created_by_id:
          type: integer
          description: User id that created the record.
        updated_by_id:
          type: integer
          description: User id that last updated the record.
        project_id:
          type: integer
          description: The project this OTU belongs to.
        created_at:
          type: string
          format: date-time
          description: Timestamp of record creation.
        updated_at:
          type: string
          format: date-time
          description: Timestamp of last update.
        global_id:
          type: string
          description: A Rails GlobalID URI for the record.
          example: 'gid://taxon-works/Otu/12345'
        object_tag:
          type: string
          description: An HTML-formatted display tag for the OTU.
          example: '<i>Aus bus</i> Author, 2000'

    OtuWithExtensions:
      description: Otu with optional \`extend[]\` fields.
      allOf:
        - $ref: '#/components/schemas/Otu'
        - type: object
          properties:
            notes:
              type: array
              description: Present when \`extend[]=notes\`.
              items:
                type: object
                properties:
                  text:
                    type: string
            taxon_name:
              description: Present when \`extend[]=taxon_name\`. Full TaxonName attributes.
              type: object

    OtuShowResponse:
      description: Response for \`GET /otus/:id\`. Includes base attributes and optional \`parents\` when \`extend[]=parents\`.
      allOf:
        - $ref: '#/components/schemas/OtuWithExtensions'
        - type: object
          properties:
            parents:
              type: object
              description: Present when \`extend[]=parents\`. Keyed by nomenclatural rank; values are arrays of OTU objects.
              additionalProperties:
                type: array
                items:
                  $ref: '#/components/schemas/Otu'

    OtuAutocompleteItem:
      type: object
      description: A single autocomplete result.
      properties:
        id:
          type: integer
          description: OTU id.
        gid:
          type: string
          description: Rails GlobalID.
        otu_valid_id:
          type: integer
          description: The id of the OTU linked to the valid/accepted taxon name.
        label:
          type: string
          description: Plain-text label for the OTU.
        label_html:
          type: string
          description: HTML-formatted label for display, highlighting matched terms.

    ContentItem:
      type: object
      properties:
        content_id:
          type: integer
          description: ID of the Content record.
        public_content_id:
          type: integer
          description: ID of the PublicContent record.
        name:
          type: string
          description: Topic name.
        text:
          type: string
          description: Rendered content text (HTML or plain depending on \`mode\` param).
        depictions:
          type: array
          description: Present when \`embed[]=depictions\`.
          items:
            type: object
            description: Depiction attributes.

    DistributionResponse:
      type: object
      properties:
        otu_id:
          type: integer
        cached_map:
          type: object
          properties:
            id:
              type: integer
              description: CachedMap record id.
            geo_json:
              type: string
              description: GeoJSON string of the distribution.

    TaxonomyInventoryResponse:
      type: object
      description: |
        Hierarchical taxonomy data for the OTU. Structure returned by
        \`otu_descendants_and_synonyms\` helper. Optionally includes common names.
      properties:
        # Dynamic keys from the helper; documenting known top-level
        common_names:
          type: array
          description: Present when \`extend[]=common_names\`.
          items:
            type: object
            properties:
              name:
                type: string
              language:
                type: string
                nullable: true
                description: ISO 639-1 alpha-2 language code.

    TypeMaterialInventoryResponse:
      type: object
      properties:
        type_materials_catalog_labels:
          type: array
          items:
            type: object
            properties:
              type_type:
                type: string
                description: E.g. "holotype", "paratype".
              label:
                type: string
                description: Catalog label text.

    NomenclatureCitationsItem:
      type: object
      properties:
        source:
          type: object
          properties:
            id:
              type: integer
            name:
              type: string
              description: Full cached source citation.
            short_name:
              type: string
              description: Author + year short form.
        names:
          type: array
          items:
            type: string
          description: Formatted taxon name strings cited in this source.

    DwcGalleryItem:
      type: object
      properties:
        dwc_occurrence_id:
          type: integer
        images:
          type: array
          items:
            type: object
            description: Image attributes.
            properties:
              id:
                type: integer

    DeterminedToRankResponse:
      type: object
      description: Counts of specimens determined to various taxonomic ranks.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  # ── Reusable Responses ──
  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'
          example:
            error: 'no map available'
    UnprocessableEntity:
      description: Unprocessable entity (e.g. OTU has no taxon name for nomenclature citations).
      content:
        application/json:
          schema:
            type: object

# ─────────────────────────────────────────────
# Paths
# ─────────────────────────────────────────────
paths:
  # ═══════════════════════════════════════════
  #  REST endpoints
  # ═══════════════════════════════════════════

  /otus:
    get:
      operationId: getOtus
      summary: List / filter OTUs
      description: |
        Returns a paginated, filterable list of OTUs for the authenticated
        project. Results are ordered by \`otus.id\`.

        **Route:** \`GET /api/v1/otus\`
        **Controller:** \`OtusController#api_index\`
        **View:** \`otus/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Otus – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        # ── Otu-specific filter params ──
        - name: otu_id[]
          in: query
          description: One or more OTU ids to return.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: |
            Filter by OTU \`name\`. Supports partial match by default
            (case-insensitive LIKE with wildcards around spaces). Pass as
            array for multiple values.
          schema:
            oneOf:
              - type: string
              - type: array
                items:
                  type: string

        - name: name_exact
          in: query
          description: If \`true\`, match \`name\` exactly instead of partial LIKE.
          schema:
            type: boolean

        - name: with_name
          in: query
          description: |
            \`true\` – only OTUs that have a \`name\` value.
            \`false\` – only OTUs where \`name\` is NULL.
          schema:
            type: boolean

        - name: taxon_name_id[]
          in: query
          description: Filter to OTUs linked to one or more TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name
          in: query
          description: |
            \`true\` – only OTUs with a linked TaxonName.
            \`false\` – only OTUs without a linked TaxonName.
          schema:
            type: boolean

        - name: descendants
          in: query
          description: |
            When \`true\` and \`taxon_name_id\` is provided, also return OTUs
            whose TaxonName is a descendant of the given taxon_name_id(s).
          schema:
            type: boolean

        - name: ancestrify
          in: query
          description: |
            When \`true\`, additionally include all coordinate OTUs for all
            inferred ancestors of matched OTUs. Expands results upward to
            the root, then outward.
          schema:
            type: boolean

        - name: coordinatify
          in: query
          description: |
            When \`true\`, additionally include all coordinate OTUs (same
            valid taxon name) for the matched result set.
          schema:
            type: boolean

        - name: collecting_event_id[]
          in: query
          description: |
            Return OTUs that are the current determination of a
            CollectionObject collected in the given CollectingEvent(s).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: biological_association_id[]
          in: query
          description: Return OTUs involved in the given BiologicalAssociation(s).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descriptor_id[]
          in: query
          description: Return OTUs observed with the given Descriptor(s).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: asserted_distributions
          in: query
          description: |
            \`true\` – OTUs with at least one AssertedDistribution.
            \`false\` – OTUs with no AssertedDistributions.
          schema:
            type: boolean

        - name: biological_associations
          in: query
          description: |
            \`true\` – OTUs with at least one BiologicalAssociation (subject or object).
            \`false\` – OTUs without BiologicalAssociations.
          schema:
            type: boolean

        - name: collection_objects
          in: query
          description: |
            \`true\` – OTUs with at least one CollectionObject.
            \`false\` – OTUs without CollectionObjects.
          schema:
            type: boolean

        - name: common_names
          in: query
          description: |
            \`true\` – OTUs with common names.
            \`false\` – OTUs without common names.
          schema:
            type: boolean

        - name: contents
          in: query
          description: |
            \`true\` – OTUs with Content records.
            \`false\` – OTUs without Content records.
          schema:
            type: boolean

        - name: observations
          in: query
          description: |
            \`true\` – OTUs with Observation records.
            \`false\` – OTUs without Observations.
          schema:
            type: boolean

        - name: wkt
          in: query
          description: A WKT (Well-Known Text) string defining a spatial area to filter OTUs by geographic occurrence.
          schema:
            type: string

        - name: geo_json
          in: query
          description: A GeoJSON geometry (not Feature) to filter OTUs by geographic occurrence.
          schema:
            type: object

        - name: radius
          in: query
          description: Buffer radius in meters applied to \`geo_json\` searches. Defaults to \`100\`.
          schema:
            type: number
            default: 100

        # ── Geo concern params ──
        - name: geo_shape_id[]
          in: query
          description: Array of geographic shape ids (GeographicArea or Gazetteer). Must pair 1:1 with \`geo_shape_type[]\`.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: geo_shape_type[]
          in: query
          description: Array of shape types corresponding to \`geo_shape_id[]\`. Values \`GeographicArea\` or \`Gazetteer\`.
          schema:
            type: array
            items:
              type: string
              enum:
                - GeographicArea
                - Gazetteer
          style: form
          explode: true

        - name: geo_mode
          in: query
          description: |
            How to interpret geographic shapes:
            - omit/\`null\` – exact match
            - \`true\` – spatial (covered-by) match
            - \`false\` – descendants match
          schema:
            type: boolean

        # ── Tags concern ──
        - name: keyword_id_and[]
          in: query
          description: Return OTUs tagged with ALL of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: keyword_id_or[]
          in: query
          description: Return OTUs tagged with ANY of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tags
          in: query
          description: |
            \`true\` – only OTUs with tags.
            \`false\` – only OTUs without tags.
          schema:
            type: boolean

        # ── Citations concern ──
        - name: citations
          in: query
          description: |
            \`true\` – only OTUs with citations.
            \`false\` – only OTUs without citations.
          schema:
            type: boolean

        - name: citation_documents
          in: query
          description: |
            \`true\` – OTUs with citations that link to documents.
            \`false\` – OTUs with citations lacking documents.
          schema:
            type: boolean

        - name: origin_citation
          in: query
          description: |
            \`true\` – OTUs with an origin citation.
            \`false\` – OTUs without an origin citation.
          schema:
            type: boolean

        # ── Notes concern ──
        - name: notes
          in: query
          description: |
            \`true\` – only OTUs with notes.
            \`false\` – only OTUs without notes.
          schema:
            type: boolean

        - name: note_text
          in: query
          description: Filter by note text content.
          schema:
            type: string

        - name: note_exact
          in: query
          description: If \`true\`, match \`note_text\` exactly.
          schema:
            type: boolean

        # ── Confidences concern ──
        - name: confidences
          in: query
          description: |
            \`true\` – OTUs with confidence levels.
            \`false\` – OTUs without confidence levels.
          schema:
            type: boolean

        - name: confidence_level_id[]
          in: query
          description: Return OTUs with one or more of these ConfidenceLevel ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        # ── DataAttributes concern ──
        - name: data_attributes
          in: query
          description: |
            \`true\` – OTUs with data attributes.
            \`false\` – OTUs without data attributes.
          schema:
            type: boolean

        - name: data_attribute_predicate_id[]
          in: query
          description: Return OTUs having data attributes with these predicate ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: data_attribute_exact_value[]
          in: query
          description: Return OTUs having data attributes with exact values.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: data_attribute_wildcard_value[]
          in: query
          description: Return OTUs having data attributes with wildcard-matched values.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        # ── Depictions concern ──
        - name: depictions
          in: query
          description: |
            \`true\` – OTUs with depictions/images.
            \`false\` – OTUs without depictions/images.
          schema:
            type: boolean

        - name: image_id[]
          in: query
          description: Return OTUs depicted in the given Image ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        # ── Conveyances concern ──
        - name: conveyances
          in: query
          description: |
            \`true\` – OTUs with sounds/conveyances.
            \`false\` – OTUs without sounds/conveyances.
          schema:
            type: boolean

        - name: sound_id[]
          in: query
          description: Return OTUs conveyed by the given Sound ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: A paginated array of OTU objects.
          headers:
            X-Total:
              schema:
                type: integer
              description: Total number of matching records.
            X-Total-Pages:
              schema:
                type: integer
              description: Total number of pages.
            X-Page:
              schema:
                type: integer
              description: Current page number.
            X-Per-Page:
              schema:
                type: integer
              description: Number of records per page.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/OtuWithExtensions'
              example:
                - id: 12345
                  name: null
                  taxon_name_id: 6789
                  created_by_id: 1
                  updated_by_id: 1
                  project_id: 42
                  created_at: '2024-01-15T10:30:00.000Z'
                  updated_at: '2024-06-20T14:00:00.000Z'
                  global_id: 'gid://taxon-works/Otu/12345'
                  object_tag: '<i>Aus bus</i> Author, 2000'
        '401':
          description: Unauthorized – invalid or missing token.

  /otus/{id}:
    get:
      operationId: getOtu
      summary: Get a single OTU
      description: |
        Returns a single OTU by id.

        **Route:** \`GET /api/v1/otus/:id\`
        **Controller:** \`OtusController#api_show\`
        **View:** \`otus/api/v1/show.json.jbuilder\`
        **Type:** REST (show)

        Supports \`extend[]=parents\` to include ancestor OTUs keyed by nomenclatural rank,
        \`extend[]=notes\`, and \`extend[]=taxon_name\`.
      tags:
        - Otus – REST
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single OTU object.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/OtuShowResponse'
              example:
                id: 12345
                name: null
                taxon_name_id: 6789
                created_by_id: 1
                updated_by_id: 1
                project_id: 42
                created_at: '2024-01-15T10:30:00.000Z'
                updated_at: '2024-06-20T14:00:00.000Z'
                global_id: 'gid://taxon-works/Otu/12345'
                object_tag: '<i>Aus bus</i> Author, 2000'
        '404':
          $ref: '#/components/responses/NotFound'

  /otus/inventory/alphabetical:
    get:
      operationId: getOtusAlphabetical
      summary: List OTUs sorted alphabetically
      description: |
        Returns a paginated, filterable list of OTUs ordered alphabetically
        by the cached TaxonName, then by \`otus.name\`.

        Accepts all the same filter parameters as \`GET /otus\`.

        **Route:** \`GET /api/v1/otus/inventory/alphabetical\`
        **Controller:** \`OtusController#api_alphabetical_index\`
        **View:** \`otus/api/v1/index.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'
        # All filter params from GET /otus also apply (see getOtus)
      responses:
        '200':
          description: A paginated array of OTU objects in alphabetical order.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/OtuWithExtensions'

  # ═══════════════════════════════════════════
  #  Autocomplete
  # ═══════════════════════════════════════════

  /otus/autocomplete:
    get:
      operationId: autocompleteOtus
      summary: Autocomplete OTUs
      description: |
        Performs a priority-ranked autocomplete search across OTU names,
        TaxonNames (including combinations and synonyms), and CommonNames.

        Returns results with \`otu_valid_id\` pointing to the OTU linked to
        the accepted/valid taxon name, enabling redirect-to-valid behavior.

        **Route:** \`GET /api/v1/otus/autocomplete\`
        **Controller:** \`OtusController#api_autocomplete\`
        **View:** \`otus/api/v1/autocomplete.json.jbuilder\`
        **Query class:** \`Queries::Otu::Autocomplete#api_autocomplete_extended\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: The search string.
          schema:
            type: string
            minLength: 1
          example: 'Aus bus'

        - name: having_taxon_name_only
          in: query
          description: |
            \`true\` – only return OTUs where \`name\` is NULL (i.e. the OTU
            is identified solely by its linked TaxonName).
          schema:
            type: boolean

        - name: with_taxon_name
          in: query
          description: |
            \`true\` – OTU must have a linked TaxonName.
            \`false\` – OTU must NOT have a linked TaxonName.
          schema:
            type: boolean

        - name: include_common_names
          in: query
          description: When present (any value), include common names for each result.
          schema:
            type: boolean

      responses:
        '200':
          description: An array of autocomplete results ordered by match priority.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/OtuAutocompleteItem'
              example:
                - id: 12345
                  gid: 'gid://taxon-works/Otu/12345'
                  otu_valid_id: 12345
                  label: 'Aus bus Author, 2000'
                  label_html: '<i>Aus bus</i> Author, 2000'

  # ═══════════════════════════════════════════
  #  Inventory endpoints
  # ═══════════════════════════════════════════

  /otus/{id}/inventory/content:
    get:
      operationId: getOtuContent
      summary: Content inventory for an OTU
      description: |
        Returns public content (topic-based text) for the given OTU.
        Optionally filter by \`topic_id\` and embed depictions.

        **Route:** \`GET /api/v1/otus/:id/inventory/content\`
        **Controller:** \`OtusController#api_content\`
        **View:** \`otus/api/v1/inventory/content.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/embedParam'
        - $ref: '#/components/parameters/extendParam'
        - name: topic_id
          in: query
          description: One or more Topic ids to filter content by.
          schema:
            oneOf:
              - type: integer
              - type: array
                items:
                  type: integer
        - name: mode
          in: query
          description: Rendering mode for the content text.
          schema:
            type: string
      responses:
        '200':
          description: Array of content items.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ContentItem'
              example:
                - content_id: 100
                  public_content_id: 200
                  name: 'Biology'
                  text: '<p>This species is found in…</p>'

  /otus/{id}/inventory/distribution:
    get:
      operationId: getOtuDistribution
      summary: Distribution map for an OTU
      description: |
        Returns a cached distribution map (CachedMap) for the OTU.
        Responds to both \`.json\` and \`.geojson\` formats.

        **Route:** \`GET /api/v1/otus/:id/inventory/distribution\`
        **Controller:** \`OtusController#api_distribution\`
        **Views:**
        - \`otus/api/v1/inventory/distribution.json.jbuilder\`
        - \`otus/api/v1/inventory/distribution.geojson.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - name: cached_map_type
          in: query
          description: The CachedMapItem type to use. Defaults to \`CachedMapItem::WebLevel1\`.
          schema:
            type: string
            default: 'CachedMapItem::WebLevel1'
      responses:
        '200':
          description: Distribution data.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DistributionResponse'
              example:
                otu_id: 12345
                cached_map:
                  id: 999
                  geo_json: '{"type":"MultiPolygon","coordinates":[...]}'
            application/geo+json:
              schema:
                type: object
                description: Full GeoJSON distribution (via \`otu_distribution\` helper).
        '404':
          description: No map available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                error: 'no map available'

  /otus/{id}/inventory/taxonomy:
    get:
      operationId: getOtuTaxonomy
      summary: Taxonomy inventory for an OTU
      description: |
        Returns a hierarchical taxonomy structure (descendants and synonyms)
        for the OTU.

        **Route:** \`GET /api/v1/otus/:id/inventory/taxonomy\`
        **Controller:** \`OtusController#api_taxonomy_inventory\`
        **View:** \`otus/api/v1/inventory/taxonomy.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
        - name: max_descendants_depth
          in: query
          description: Maximum depth of descendant traversal. Defaults to unlimited.
          schema:
            type: integer
        - name: common_name_language
          in: query
          description: ISO 639-1 alpha-2 language code to filter common names (only applies when \`extend[]=common_names\`).
          schema:
            type: string
            example: 'en'
      responses:
        '200':
          description: Taxonomy inventory.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonomyInventoryResponse'

  /otus/{id}/inventory/keys:
    get:
      operationId: getOtuKeyInventory
      summary: Key inventory for an OTU
      description: |
        Returns identification keys associated with the OTU.

        **Route:** \`GET /api/v1/otus/:id/inventory/keys\`
        **Controller:** \`OtusController#api_key_inventory\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Key inventory data.
          content:
            application/json:
              schema:
                type: object
                description: Structure returned by \`otu_key_inventory\` helper.

  /otus/{id}/inventory/type_material:
    get:
      operationId: getOtuTypeMaterial
      summary: Type material inventory for an OTU
      description: |
        Returns type material catalog labels associated with the OTU's
        protonym.

        **Route:** \`GET /api/v1/otus/:id/inventory/type_material\`
        **Controller:** \`OtusController#api_type_material_inventory\`
        **View:** \`otus/api/v1/inventory/type_material.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Type material inventory.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TypeMaterialInventoryResponse'
              example:
                type_materials_catalog_labels:
                  - type_type: 'holotype'
                    label: 'Holotype ♂, USNM 12345, USA, California…'

  /otus/{id}/inventory/nomenclature_citations:
    get:
      operationId: getOtuNomenclatureCitations
      summary: Nomenclature citations for an OTU
      description: |
        Returns a catalog of nomenclatural citations for the OTU's taxon
        name, grouped by source.

        Returns \`422 Unprocessable Entity\` if the OTU has no linked TaxonName.

        **Route:** \`GET /api/v1/otus/:id/inventory/nomenclature_citations\`
        **Controller:** \`OtusController#api_nomenclature_citations\`
        **View:** \`otus/api/v1/inventory/nomenclature_citations.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Array of source + names citation entries.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/NomenclatureCitationsItem'
        '422':
          $ref: '#/components/responses/UnprocessableEntity'

  /otus/{id}/inventory/dwc:
    get:
      operationId: getOtuDwcInventory
      summary: DwC occurrence inventory for an OTU
      description: |
        Returns Darwin Core (DwC) occurrence records scoped to the OTU.
        Supports \`.json\` and \`.csv\` response formats. Pagination is
        only applied when \`page\`/\`per\` params are provided; otherwise
        all records are returned.

        **Route:** \`GET /api/v1/otus/:id/inventory/dwc\`
        **Controller:** \`OtusController#api_dwc_inventory\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
      responses:
        '200':
          description: DwC occurrence records.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  description: DwcOccurrence record attributes.
            text/csv:
              schema:
                type: string
                description: Tab-separated DwC occurrence data.

  /otus/{id}/inventory/dwc_gallery:
    get:
      operationId: getOtuDwcGallery
      summary: DwC gallery for an OTU
      description: |
        Returns images grouped by DwC occurrence for the OTU.

        **Route:** \`GET /api/v1/otus/:id/inventory/dwc_gallery\`
        **Controller:** \`OtusController#api_dwc_gallery\`
        **View:** \`otus/api/v1/inventory/dwc_gallery.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
        - name: dwc_occurrence_id
          in: query
          description: Optionally scope to a specific DwcOccurrence id.
          schema:
            type: integer
      responses:
        '200':
          description: Array of DwC occurrence image groups.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/DwcGalleryItem'

  /otus/{id}/inventory/images:
    get:
      operationId: getOtuImageInventory
      summary: Image inventory for an OTU
      description: |
        Returns depictions (images) associated with the OTU, including
        images from observations and other sources. Results are paginated
        and ordered by depiction object type and position.

        **Route:** \`GET /api/v1/otus/:otu_id/inventory/images\`
        **Controller:** \`OtusController#api_image_inventory\`
        **View:** \`otus/api/v1/inventory/images.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - name: otu_id
          in: path
          required: true
          description: OTU id.
          schema:
            type: integer
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - name: otu_scope
          in: query
          description: Scope for OTU depiction query. Defaults to \`all\`.
          schema:
            type: string
            default: 'all'
        - name: sort_order[]
          in: query
          description: Custom sort order for depiction object types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true
      responses:
        '200':
          description: Paginated image inventory.
          content:
            application/json:
              schema:
                type: object
                description: Image inventory structure from \`image_inventory\` helper.

  /otus/{id}/inventory/determined_to_rank:
    get:
      operationId: getOtuDeterminedToRank
      summary: Determined-to-rank summary for an OTU
      description: |
        Returns a summary of specimens determined to various taxonomic ranks
        for the given OTU.

        **Route:** \`GET /api/v1/otus/:id/inventory/determined_to_rank\`
        **Controller:** \`OtusController#api_determined_to_rank\`
        **Type:** Extended resource endpoint
      tags:
        - Otus – Inventory
      parameters:
        - $ref: '#/components/parameters/otuIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Determined-to-rank data.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeterminedToRankResponse'

# ─────────────────────────────────────────────
# Notes
# ─────────────────────────────────────────────
# CONSISTENCY REPORT
#
# All OTU routes from config/routes/api_v1.rb are documented:
#
#   Route                                              | Endpoint           | Status
#   ---------------------------------------------------|--------------------|---------
#   GET /otus                                          | api_index          | ✅ Documented
#   GET /otus/autocomplete                             | api_autocomplete   | ✅ Documented
#   GET /otus/inventory/alphabetical                   | api_alphabetical   | ✅ Documented
#   GET /otus/:id/inventory/content                    | api_content        | ✅ Documented
#   GET /otus/:id/inventory/distribution               | api_distribution   | ✅ Documented
#   GET /otus/:id/inventory/keys                       | api_key_inventory  | ✅ Documented
#   GET /otus/:id/inventory/taxonomy                   | api_taxonomy_inv   | ✅ Documented
#   GET /otus/:otu_id/inventory/images                 | api_image_inv      | ✅ Documented
#   GET /otus/:id/inventory/dwc_gallery                | api_dwc_gallery    | ✅ Documented
#   GET /otus/:id/inventory/dwc                        | api_dwc_inventory  | ✅ Documented
#   GET /otus/:id/inventory/type_material              | api_type_material  | ✅ Documented
#   GET /otus/:id/inventory/nomenclature_citations     | api_nomenclature   | ✅ Documented
#   GET /otus/:id/inventory/determined_to_rank         | api_determined     | ✅ Documented
#   GET /otus/:id                                      | api_show           | ✅ Documented
#
# OBSERVATIONS & INCONSISTENCIES:
#
# 1. The routes file has duplicate /downloads routes at lines 50-53 and 73-75.
#    This does not affect OTU documentation but is worth noting.
#
# 2. The Otu filter includes many nested sub-query parameters
#    (e.g. taxon_name_query, collection_object_query, etc.) which are
#    technically available on the API but are complex and less commonly
#    used. They are not individually documented here to keep the spec
#    manageable; they can be added on request.
#
# 3. The \`api_index\` action also supports CSV output via \`.csv\` format
#    suffix (content-type text/csv). This is noted but not separately
#    documented as a distinct path.
#
# 4. No POST/PATCH/DELETE endpoints are exposed on the external API
#    (read-only), consistent with the authentication section.
`,Qs=`openapi: 3.0.3
info:
  title: TaxonWorks API – Person Resource
  description: |
    OpenAPI 3.0 specification for the **Person** resource of the
    TaxonWorks external API.

    A Person represents a human (not a user). People are only related to
    data via Roles (e.g. Author, Editor, Collector, TaxonDeterminer).

    Person types: \`Person::Vetted\` (2+ roles or has annotations) and
    \`Person::Unvetted\` (0-1 roles, no annotations).

    ## Authentication
    **People endpoints are unauthenticated (public).** No token required.

    ## Pagination
    List endpoints return paginated results via \`page\` and \`per\` parameters.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: People – REST
    description: Standard REST read endpoints for People. **Unauthenticated.**
  - name: People – Autocomplete
    description: Autocomplete search for People. **Unauthenticated.**

security: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
      description: User API token (optional).
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token
      description: Project-level API token (optional).

  parameters:
    projectId:
      name: project_id
      in: query
      description: Project ID (optional — provides project context).
      schema:
        type: integer

    pageParam:
      name: page
      in: query
      schema:
        type: integer
        minimum: 1
        default: 1

    perParam:
      name: per
      in: query
      schema:
        type: integer
        minimum: 1
        maximum: 10000
        default: 500

    personIdPath:
      name: id
      in: path
      required: true
      description: Person id.
      schema:
        type: integer

    extendParam:
      name: extend[]
      in: query
      description: |
        Include additional nested data. Supported values:
        \`roles\`, \`identifiers\`, \`notes\`.
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    PersonBase:
      type: object
      description: Core Person attributes. Rendered by \`_base_attributes.json.jbuilder\`.
      required:
        - id
      properties:
        id:
          type: integer
          example: 500
        type:
          type: string
          description: Person subclass (\`Person::Vetted\` or \`Person::Unvetted\`).
          example: 'Person::Vetted'
        last_name:
          type: string
          nullable: true
          description: Last / family name.
          example: 'Smith'
        first_name:
          type: string
          nullable: true
          description: First name (may include initials).
          example: 'John A.'
        suffix:
          type: string
          nullable: true
          description: Suffix following the last name (e.g. "Jr.", "III").
        prefix:
          type: string
          nullable: true
          description: Prefix (e.g. "Dr.", "von").
        cached:
          type: string
          nullable: true
          description: Full cached name.
          example: 'Smith, John A.'
        year_born:
          type: integer
          nullable: true
        year_died:
          type: integer
          nullable: true
        year_active_start:
          type: integer
          nullable: true
          description: Rough start year of scientific activity.
        year_active_end:
          type: integer
          nullable: true
          description: Rough end year of scientific activity.
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        global_id:
          type: string
          description: Rails GlobalID URI.
          example: 'gid://taxon-works/Person/500'

    Person:
      description: Full Person with optional extensions.
      allOf:
        - $ref: '#/components/schemas/PersonBase'
        - type: object
          properties:
            roles:
              type: array
              description: Present when \`extend[]=roles\`.
              items:
                type: object
                description: Role attributes.
            identifiers:
              type: object
              description: Present when \`extend[]=identifiers\`.
            notes:
              type: array
              description: Present when \`extend[]=notes\`.
              items:
                type: object
                properties:
                  text:
                    type: string

    PersonBrief:
      type: object
      description: Minimal person representation used in nested contexts.
      properties:
        person:
          type: object
          properties:
            id:
              type: integer
            name:
              type: string
              description: Cached full name.
            global_id:
              type: string

    PersonAutocompleteItem:
      type: object
      properties:
        id:
          type: integer
        label:
          type: string
        label_html:
          type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /people:
    get:
      operationId: getPeople
      summary: List / filter People
      description: |
        Returns a paginated, filterable list of People ordered by \`people.id\`.

        **Route:** \`GET /api/v1/people\`
        **Controller:** \`PeopleController#api_index\`
        **View:** \`people/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
        **Authentication:** None (public)
      tags:
        - People – REST
      security: []
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: person_id[]
          in: query
          description: Return specific Person(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: Search against \`cached\` (full name). Wildcarded unless listed in \`exact[]\`.
          schema:
            type: string

        - name: last_name
          in: query
          description: Filter by last name (also matches AlternateValues).
          schema:
            type: string

        - name: first_name
          in: query
          description: Filter by first name (also matches AlternateValues).
          schema:
            type: string

        - name: last_name_starts_with
          in: query
          description: Filter by last name prefix.
          schema:
            type: string

        - name: prefix
          in: query
          description: Filter by name prefix (also matches AlternateValues).
          schema:
            type: string

        - name: suffix
          in: query
          description: Filter by name suffix (also matches AlternateValues).
          schema:
            type: string

        - name: exact[]
          in: query
          description: |
            Attributes that should be matched exactly (not wildcarded).
            Values: \`last_name\`, \`first_name\`, \`suffix\`, \`prefix\`, \`name\`.
          schema:
            type: array
            items:
              type: string
              enum:
                - last_name
                - first_name
                - suffix
                - prefix
                - name
          style: form
          explode: true

        - name: born_after_year
          in: query
          description: Only people born after this year.
          schema:
            type: integer

        - name: born_before_year
          in: query
          description: Only people born before this year.
          schema:
            type: integer

        - name: died_after_year
          in: query
          description: Only people who died after this year.
          schema:
            type: integer

        - name: died_before_year
          in: query
          description: Only people who died before this year.
          schema:
            type: integer

        - name: active_after_year
          in: query
          description: Only people active after this year.
          schema:
            type: integer

        - name: active_before_year
          in: query
          description: Only people active before this year.
          schema:
            type: integer

        - name: role[]
          in: query
          description: |
            Filter to people with these role types (e.g. \`TaxonNameAuthor\`,
            \`SourceAuthor\`, \`SourceEditor\`, \`Collector\`, \`TaxonDeterminer\`).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: except_role[]
          in: query
          description: Exclude people with these role types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: only_project_id[]
          in: query
          description: Only return people with roles in these project(s).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: except_project_id[]
          in: query
          description: Exclude people with roles in these project(s).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: use_min
          in: query
          description: Minimum number of roles the person must have.
          schema:
            type: integer

        - name: use_max
          in: query
          description: Maximum number of roles the person must have.
          schema:
            type: integer

        - name: repeated_total
          in: query
          description: Number of times this name must be an identical match (must be >= 2).
          schema:
            type: integer
            minimum: 2

        - name: levenshtein_cuttoff
          in: query
          description: Edit distance cutoff for fuzzy matching against \`cached\`. Requires \`name\`.
          schema:
            type: integer

        - name: with[]
          in: query
          description: Only return people where these fields are NOT null. Values \`first_name\`, \`prefix\`, \`suffix\`.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: without[]
          in: query
          description: Only return people where these fields ARE null. Values \`first_name\`, \`prefix\`, \`suffix\`.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        # ── Tags concern ──
        - name: keyword_id_and[]
          in: query
          description: Return people tagged with ALL of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: keyword_id_or[]
          in: query
          description: Return people tagged with ANY of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tags
          in: query
          schema:
            type: boolean

        # ── Notes concern ──
        - name: notes
          in: query
          schema:
            type: boolean

        # ── DataAttributes concern ──
        - name: data_attributes
          in: query
          schema:
            type: boolean

      responses:
        '200':
          description: A paginated array of Person objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
            X-Page:
              schema:
                type: integer
            X-Per-Page:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Person'
              example:
                - id: 500
                  type: 'Person::Vetted'
                  last_name: 'Smith'
                  first_name: 'John A.'
                  cached: 'Smith, John A.'
                  year_born: 1950
                  year_active_start: 1975
                  global_id: 'gid://taxon-works/Person/500'

  /people/{id}:
    get:
      operationId: getPerson
      summary: Get a single Person
      description: |
        Returns a single Person by id.

        Supports \`extend[]\` values: \`roles\`, \`identifiers\`, \`notes\`.

        **Route:** \`GET /api/v1/people/:id\`
        **Controller:** \`PeopleController#api_show\`
        **View:** \`people/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
        **Authentication:** None (public)
      tags:
        - People – REST
      security: []
      parameters:
        - $ref: '#/components/parameters/personIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Person object.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Person'
        '404':
          $ref: '#/components/responses/NotFound'

  /people/autocomplete:
    get:
      operationId: autocompletePeople
      summary: Autocomplete People
      description: |
        Searches people by name string.

        **Route:** \`GET /api/v1/people/autocomplete\`
        **Controller:** \`PeopleController#autocomplete\`
        **Type:** Extended resource endpoint
        **Authentication:** None (public)
      tags:
        - People – Autocomplete
      security: []
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: The search string.
          schema:
            type: string
            minLength: 1

        - name: role_type
          in: query
          description: |
            Limit to people with this role type (e.g. \`TaxonNameAuthor\`,
            \`SourceAuthor\`, \`Collector\`).
          schema:
            oneOf:
              - type: string
              - type: array
                items:
                  type: string

        - name: in_project
          in: query
          description: If \`true\`, only return people used in the current project.
          schema:
            type: boolean

      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/PersonAutocompleteItem'

# ─────────────────────────────────────────────
# CONSISTENCY REPORT
#
# All People routes from config/routes/api_v1.rb are documented:
#
#   Route                        | Endpoint      | Status
#   -----------------------------|---------------|---------
#   GET /people                  | api_index     | ✅ Documented
#   GET /people/autocomplete     | autocomplete  | ✅ Documented
#   GET /people/:id              | api_show      | ✅ Documented
#
# OBSERVATIONS:
#
# 1. People endpoints are in the unauthenticated block
#    (\`authenticate_project: false, authenticate_user: false\`), same as
#    Sources.
#
# 2. The filter has a \`regex\` param documented as "DO NOT EXPOSE TO
#    EXTERNAL API" — it is excluded from this spec.
#
# 3. No POST/PATCH/DELETE endpoints exposed (read-only).
`,$s=`openapi: 3.0.3
info:
  title: TaxonWorks API – Sound Resource
  description: |
    OpenAPI 3.0 specification for the **Sound** resource.

    A Sound stores an audio recording. Sounds are linked to OTUs,
    CollectionObjects, and other data via Conveyances.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Sounds – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    soundIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`conveyances\`, \`attribution\`, \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    Sound:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        name:
          type: string
          nullable: true
        sound_file:
          type: string
          description: URL to the sound file.
        project_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        object_label:
          type: string
        global_id:
          type: string
        conveyances:
          type: array
          description: Present when \`extend[]=conveyances\`.
          items:
            type: object
        attribution:
          type: object
          nullable: true
          description: Present when \`extend[]=attribution\`.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /sounds:
    get:
      operationId: getSounds
      summary: List / filter Sounds
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/sounds\`
        **Controller:** \`SoundsController#api_index\`
        **View:** \`sounds/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Sounds – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: sound_id[]
          in: query
          description: Return specific Sound(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: Filter by sound name.
          schema:
            type: string

        - name: otu_id[]
          in: query
          description: Filter by OTU ids (via conveyances).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_id[]
          in: query
          description: Filter by CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: field_occurrence_id[]
          in: query
          description: Filter by FieldOccurrence ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: conveyances
          in: query
          description: Filter by whether sound has conveyances.
          schema:
            type: boolean

        - name: with_name
          in: query
          description: Filter by whether sound has a name.
          schema:
            type: boolean

      responses:
        '200':
          description: Paginated array of Sound objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Sound'

  /sounds/{id}:
    get:
      operationId: getSound
      summary: Get a single Sound
      description: |
        **Route:** \`GET /api/v1/sounds/:id\`
        **Controller:** \`SoundsController#api_show\`
        **View:** \`sounds/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Sounds – REST
      parameters:
        - $ref: '#/components/parameters/soundIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Sound.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Sound'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Sound routes documented:
#   GET /sounds     | api_index | done
#   GET /sounds/:id | api_show  | done
`,ec=`openapi: 3.0.3
info:
  title: TaxonWorks API – Source Resource
  description: |
    OpenAPI 3.0 specification for the **Source** resource of the
    TaxonWorks external API.

    A Source is the metadata that identifies the origin of some
    information/data. The primary purpose is to allow the user to find the
    source. Attributes largely follow BibTeX conventions
    (see https://en.wikipedia.org/wiki/BibTeX).

    Source types: \`Source::Bibtex\`, \`Source::Human\`, \`Source::Verbatim\`.

    ## Authentication
    **Sources are unique: all endpoints are unauthenticated (public).**
    No \`token\` or \`project_token\` is required. However, some response
    fields (e.g. \`source_in_project\`, \`project_source_id\`) are
    project-context-dependent and will be populated when a project token
    is provided.

    ## Pagination
    List endpoints return paginated results. Use \`page\` and \`per\` query
    parameters. Pagination metadata is returned in response headers.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Sources – REST
    description: Standard REST read endpoints for Sources. **Unauthenticated.**
  - name: Sources – Autocomplete
    description: Autocomplete / typeahead search for Sources. **Unauthenticated.**
  - name: Sources – Extended
    description: Extended resource-specific endpoints. **Unauthenticated.**

# No global security — Sources endpoints are public
security: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
      description: User API token (optional for Sources — provides project context).
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token
      description: Project-level API token (optional for Sources — provides project context).

  parameters:
    projectId:
      name: project_id
      in: query
      description: Project ID (optional for Sources — provides project context for \`source_in_project\` etc.).
      schema:
        type: integer

    pageParam:
      name: page
      in: query
      description: Page number for paginated results.
      schema:
        type: integer
        minimum: 1
        default: 1

    perParam:
      name: per
      in: query
      description: Number of items per page.
      schema:
        type: integer
        minimum: 1
        maximum: 10000
        default: 500

    sourceIdPath:
      name: id
      in: path
      required: true
      description: Source id.
      schema:
        type: integer

    extendParam:
      name: extend[]
      in: query
      description: |
        Include additional nested data. Supported values:
        \`roles\`, \`bibtex\`, \`identifiers\`, \`notes\`, \`origin_citation\`,
        \`citations\`, \`pinboard_item\`.
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    SourceBase:
      type: object
      description: |
        Core Source attributes. Rendered by \`_base_attributes.json.jbuilder\`.
        Fields follow BibTeX conventions.
      required:
        - id
      properties:
        id:
          type: integer
          description: Unique identifier.
          example: 1001
        serial_id:
          type: integer
          nullable: true
          description: TaxonWorks Serial (journal) id.
        address:
          type: string
          nullable: true
          description: BibTeX address field.
        annote:
          type: string
          nullable: true
          description: BibTeX annote field.
        author:
          type: string
          nullable: true
          description: BibTeX author string.
          example: 'Smith, J. and Jones, K.'
        booktitle:
          type: string
          nullable: true
          description: BibTeX booktitle field.
        chapter:
          type: string
          nullable: true
        crossref:
          type: string
          nullable: true
        edition:
          type: string
          nullable: true
        editor:
          type: string
          nullable: true
          description: BibTeX editor string.
        howpublished:
          type: string
          nullable: true
        institution:
          type: string
          nullable: true
        journal:
          type: string
          nullable: true
          description: Journal name.
        key:
          type: string
          nullable: true
        month:
          type: string
          nullable: true
        note:
          type: string
          nullable: true
        number:
          type: string
          nullable: true
          description: Issue number.
        organization:
          type: string
          nullable: true
        pages:
          type: string
          nullable: true
          description: Page range.
          example: '1-100'
        publisher:
          type: string
          nullable: true
        school:
          type: string
          nullable: true
        series:
          type: string
          nullable: true
        title:
          type: string
          nullable: true
          description: Title of the work.
          example: 'A revision of the genus Aus'
        type:
          type: string
          description: Source subclass (\`Source::Bibtex\`, \`Source::Human\`, \`Source::Verbatim\`).
          example: 'Source::Bibtex'
        volume:
          type: string
          nullable: true
        doi:
          type: string
          nullable: true
          description: Digital Object Identifier.
          example: '10.1234/example.2000'
        abstract:
          type: string
          nullable: true
        copyright:
          type: string
          nullable: true
        language:
          type: string
          nullable: true
          description: Language of the source.
        stated_year:
          type: string
          nullable: true
          description: Year as stated on the publication.
        verbatim:
          type: string
          nullable: true
          description: Verbatim citation string.
        cached:
          type: string
          nullable: true
          description: Auto-generated full citation string.
          example: 'Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100.'
        cached_author_string:
          type: string
          nullable: true
          description: Auto-generated author string.
        bibtex_type:
          type: string
          nullable: true
          description: BibTeX entry type (e.g. "article", "book", "inproceedings").
          example: 'article'
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        cached_nomenclature_date:
          type: string
          format: date
          nullable: true
          description: Cached date used for nomenclatural priority.
        day:
          type: integer
          nullable: true
        year:
          type: integer
          nullable: true
          description: Publication year.
          example: 2000
        isbn:
          type: string
          nullable: true
        issn:
          type: string
          nullable: true
        verbatim_contents:
          type: string
          nullable: true
        verbatim_keywords:
          type: string
          nullable: true
        language_id:
          type: integer
          nullable: true
        translator:
          type: string
          nullable: true
        year_suffix:
          type: string
          nullable: true
        url:
          type: string
          nullable: true
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time

    Source:
      description: |
        Full Source with metadata and optional extensions.
        Rendered by \`_attributes.json.jbuilder\`.
      allOf:
        - $ref: '#/components/schemas/SourceBase'
        - type: object
          properties:
            # From shared/data/all/_metadata.json.jbuilder
            object_tag:
              type: string
              description: HTML-formatted display tag.
            object_label:
              type: string
              description: Plain-text display label.
            global_id:
              type: string
              description: Rails GlobalID URI.
              example: 'gid://taxon-works/Source/1001'
            base_class:
              type: string
              description: Base class name.
              example: 'Source'
            url_for:
              type: string
              description: JSON resource URL.
            object_url:
              type: string
              description: Canonical URL for this object.

            # Source-specific
            source_in_project:
              type: boolean
              nullable: true
              description: Whether this source is in the current project (null if no project context).
            project_source_id:
              type: integer
              nullable: true
              description: ProjectSource join record id (null if not in project or no project context).

            # extend[]=roles
            author_roles:
              type: array
              description: Present when \`extend[]=roles\` and type is \`Source::Bibtex\`.
              items:
                type: object
                properties:
                  id:
                    type: integer
                  position:
                    type: integer
                  type:
                    type: string
                  person:
                    type: object
                    description: Person brief attributes.
            editor_roles:
              type: array
              description: Present when \`extend[]=roles\` and type is \`Source::Bibtex\`.
              items:
                type: object
                properties:
                  id:
                    type: integer
                  position:
                    type: integer
                  type:
                    type: string
                  person:
                    type: object

            # extend[]=bibtex
            bibtex:
              type: string
              description: Present when \`extend[]=bibtex\`. Full BibTeX string representation.

            # extend[]=identifiers
            identifiers:
              type: object
              description: Present when \`extend[]=identifiers\`. Identifier data.

            # extend[]=notes
            notes:
              type: array
              description: Present when \`extend[]=notes\`.
              items:
                type: object
                properties:
                  text:
                    type: string

            # extend[]=origin_citation
            origin_citation:
              type: object
              description: Present when \`extend[]=origin_citation\`. The origin citation with source details.

            # extend[]=citations
            citations:
              type: array
              description: Present when \`extend[]=citations\`. All citations on this source.
              items:
                type: object

    BibliographyItem:
      type: object
      description: Minimal source for bibliography listing (id + cached only).
      properties:
        id:
          type: integer
        cached:
          type: string
          description: Full cached citation string.

    SourceAutocompleteItem:
      type: object
      description: A single source autocomplete result.
      properties:
        id:
          type: integer
        label:
          type: string
          description: Plain-text label.
        label_html:
          type: string
          description: HTML-formatted label.
        is_in_project:
          type: boolean
          description: Whether this source is in the current project.
        response_values:
          type: object
          description: Dynamic key-value pair where key is the \`method\` param value.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

# ─────────────────────────────────────────────
# Paths
# ─────────────────────────────────────────────
paths:
  # ═══════════════════════════════════════════
  #  REST endpoints (unauthenticated)
  # ═══════════════════════════════════════════

  /sources:
    get:
      operationId: getSources
      summary: List / filter Sources
      description: |
        Returns a paginated, filterable list of Sources ordered by \`cached\`.

        **This endpoint is unauthenticated (public).** No token required.

        **Route:** \`GET /api/v1/sources\`
        **Controller:** \`SourcesController#api_index\`
        **View:** \`sources/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
        **Authentication:** None (public)
      tags:
        - Sources – REST
      security: []
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        # ── Source-specific filter params ──
        - name: source_id[]
          in: query
          description: Return specific Source(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: query_term
          in: query
          description: Free-text search term matched against cached fields.
          schema:
            type: string

        - name: title
          in: query
          description: Filter by title.
          schema:
            type: string

        - name: exact_title
          in: query
          description: If \`true\`, match \`title\` exactly.
          schema:
            type: boolean

        - name: with_title
          in: query
          description: |
            \`true\` – only sources with a title.
            \`false\` – only sources without a title.
          schema:
            type: boolean

        - name: author
          in: query
          description: Filter by author string (matches against \`cached_author_string\`).
          schema:
            type: string

        - name: exact_author
          in: query
          description: If \`true\`, match \`author\` exactly.
          schema:
            type: boolean

        - name: author_id[]
          in: query
          description: Filter by author Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: author_id_or
          in: query
          description: |
            \`true\` – match ANY of the \`author_id[]\` values (OR).
            \`false\`/nil – match ALL (AND, only sources with all and only these authors).
          schema:
            type: boolean

        - name: editor
          in: query
          description: Filter by editor string.
          schema:
            type: string

        - name: exact_editor
          in: query
          description: If \`true\`, match \`editor\` exactly.
          schema:
            type: boolean

        - name: editor_id[]
          in: query
          description: Filter by editor Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: editor_id_or
          in: query
          description: |
            \`true\` – match ANY of the \`editor_id[]\` values (OR).
            \`false\`/nil – match ALL (AND).
          schema:
            type: boolean

        - name: year_start
          in: query
          description: Start year for range filter.
          schema:
            type: integer

        - name: year_end
          in: query
          description: End year for range filter.
          schema:
            type: integer

        - name: source_type
          in: query
          description: Filter by Source subclass type.
          schema:
            type: string
            enum:
              - Source::Bibtex
              - Source::Human
              - Source::Verbatim

        - name: bibtex_type[]
          in: query
          description: Filter by BibTeX entry type (e.g. "article", "book").
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: serial_id[]
          in: query
          description: Filter by Serial (journal) ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: serial
          in: query
          description: |
            \`true\` – only sources with a serial.
            \`false\` – only sources without a serial.
          schema:
            type: boolean

        - name: in_project
          in: query
          description: |
            \`true\` – only sources in the current project.
            \`false\` – only sources NOT in the current project.
            Requires \`project_id\`.
          schema:
            type: boolean

        - name: citations
          in: query
          description: |
            \`true\` – only sources with citations.
            \`false\` – only sources without citations.
          schema:
            type: boolean

        - name: citation_object_type[]
          in: query
          description: Filter to sources cited on specific object types (e.g. "TaxonName", "Otu").
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: citations_on_otus
          in: query
          description: |
            When \`taxon_name_id\` is provided and this is \`true\`, also include
            sources linked to OTUs in scope of the taxon_name_id.
          schema:
            type: boolean

        - name: taxon_name_id[]
          in: query
          description: Return sources cited on this TaxonName (or its descendants).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: descendants
          in: query
          description: When \`true\` with \`taxon_name_id\`, include descendants.
          schema:
            type: boolean

        - name: nomenclature
          in: query
          description: |
            \`true\` – only sources used in nomenclature.
            \`false\` – only sources not used in nomenclature.
          schema:
            type: boolean

        - name: roles
          in: query
          description: |
            \`true\` – only sources with roles (author/editor persons).
            \`false\` – only sources without roles.
          schema:
            type: boolean

        - name: documents
          in: query
          description: |
            \`true\` – only sources with attached documents.
            \`false\` – only sources without documents.
          schema:
            type: boolean

        - name: with_doi
          in: query
          description: |
            \`true\` – only sources with a DOI.
            \`false\` – only sources without a DOI.
          schema:
            type: boolean

        - name: with_pages
          in: query
          description: |
            \`true\` – only sources with pages.
            \`false\` – only sources without pages.
          schema:
            type: boolean

        - name: topic_id[]
          in: query
          description: Filter by Topic ids (via citations).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: empty[]
          in: query
          description: Filter to sources where these BibTeX fields are empty.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: not_empty[]
          in: query
          description: Filter to sources where these BibTeX fields are not empty.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        # ── Tags concern ──
        - name: keyword_id_and[]
          in: query
          description: Return sources tagged with ALL of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: keyword_id_or[]
          in: query
          description: Return sources tagged with ANY of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tags
          in: query
          description: |
            \`true\` – only sources with tags.
            \`false\` – only sources without tags.
          schema:
            type: boolean

        # ── Notes concern ──
        - name: notes
          in: query
          description: |
            \`true\` – only sources with notes.
            \`false\` – only sources without notes.
          schema:
            type: boolean

        # ── DataAttributes concern ──
        - name: data_attributes
          in: query
          description: |
            \`true\` – only sources with data attributes.
            \`false\` – only sources without data attributes.
          schema:
            type: boolean

      responses:
        '200':
          description: A paginated array of Source objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
            X-Page:
              schema:
                type: integer
            X-Per-Page:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Source'
              example:
                - id: 1001
                  title: 'A revision of the genus Aus'
                  author: 'Smith, J. and Jones, K.'
                  year: 2000
                  type: 'Source::Bibtex'
                  bibtex_type: 'article'
                  cached: 'Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100.'
                  object_tag: 'Smith & Jones (2000)'
                  global_id: 'gid://taxon-works/Source/1001'
                  source_in_project: true
                  project_source_id: 500

  /sources/{id}:
    get:
      operationId: getSource
      summary: Get a single Source
      description: |
        Returns a single Source by id with full attributes and metadata.

        Supports \`extend[]\` values: \`roles\`, \`bibtex\`, \`identifiers\`,
        \`notes\`, \`origin_citation\`, \`citations\`, \`pinboard_item\`.

        **Route:** \`GET /api/v1/sources/:id\`
        **Controller:** \`SourcesController#api_show\`
        **View:** \`sources/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
        **Authentication:** None (public)
      tags:
        - Sources – REST
      security: []
      parameters:
        - $ref: '#/components/parameters/sourceIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single Source object.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Source'
        '404':
          $ref: '#/components/responses/NotFound'

  # ═══════════════════════════════════════════
  #  Autocomplete (unauthenticated)
  # ═══════════════════════════════════════════

  /sources/autocomplete:
    get:
      operationId: autocompleteSources
      summary: Autocomplete Sources
      description: |
        Searches sources by a term string. Returns results with labels
        and project membership info.

        **Route:** \`GET /api/v1/sources/autocomplete\`
        **Controller:** \`SourcesController#autocomplete\`
        **View:** \`sources/api/v1/autocomplete.json.jbuilder\`
        **Type:** Extended resource endpoint
        **Authentication:** None (public)
      tags:
        - Sources – Autocomplete
      security: []
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: The search string.
          schema:
            type: string
            minLength: 1

        - name: limit_to_project
          in: query
          description: If \`true\`, only return sources that are in the current project.
          schema:
            type: boolean

        - name: method
          in: query
          description: |
            When provided, the response \`response_values\` object will include
            a key with this name mapped to the source id. Used for form
            integration.
          schema:
            type: string

      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/SourceAutocompleteItem'
              example:
                - id: 1001
                  label: 'Smith & Jones (2000) A revision of the genus Aus'
                  label_html: 'Smith & Jones (2000) A revision of the genus Aus'
                  is_in_project: true
                  response_values:
                    source_id: 1001

  # ═══════════════════════════════════════════
  #  Extended endpoints (unauthenticated)
  # ═══════════════════════════════════════════

  /sources/bibliography:
    get:
      operationId: getSourcesBibliography
      summary: Bibliography listing
      description: |
        Returns a minimal paginated list of sources (id + cached citation
        only) suitable for rendering a bibliography. Accepts all the same
        filter parameters as \`GET /sources\`.

        **Route:** \`GET /api/v1/sources/bibliography\`
        **Controller:** \`SourcesController#api_bibliography\`
        **Type:** Extended resource endpoint
        **Authentication:** None (public)
      tags:
        - Sources – Extended
      security: []
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        # All filter params from GET /sources also apply
      responses:
        '200':
          description: A paginated array of minimal source objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/BibliographyItem'
              example:
                - id: 1001
                  cached: 'Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100.'
                - id: 1002
                  cached: 'Brown, A. (2005) Notes on Aus. Proceedings, 5: 50-55.'

# ─────────────────────────────────────────────
# Notes
# ─────────────────────────────────────────────
# CONSISTENCY REPORT
#
# All Source routes from config/routes/api_v1.rb are documented:
#
#   Route                              | Endpoint          | Status
#   -----------------------------------|-------------------|---------
#   GET /sources/bibliography          | api_bibliography  | ✅ Documented
#   GET /sources                       | api_index         | ✅ Documented
#   GET /sources/autocomplete          | autocomplete      | ✅ Documented
#   GET /sources/:id                   | api_show          | ✅ Documented
#
# OBSERVATIONS & INCONSISTENCIES:
#
# 1. Sources are in the \`authenticate_project: false, authenticate_user: false\`
#    block in routes — they are fully public/unauthenticated. This is unique
#    among most API resources.
#
# 2. The \`_attributes.json.jbuilder\` includes the shared metadata partial
#    (\`shared/data/all/_metadata\`) which adds \`object_tag\`, \`object_label\`,
#    \`global_id\`, \`base_class\`, \`url_for\`, and \`object_url\` fields to every
#    Source response. These metadata fields support additional \`extend[]\`
#    values: \`origin_citation\`, \`citations\`, \`pinboard_item\`.
#
# 3. The filter has a \`query_term\` parameter (mapped from \`params[:query_term]\`
#    to \`@query_string\` internally) for free-text search, separate from the
#    \`title\` and \`author\` specific filters.
#
# 4. The filter supports BibTeX field-level empty/not_empty filtering via
#    \`empty[]\` and \`not_empty[]\` array params (e.g. \`empty[]=doi\` to find
#    sources missing a DOI).
#
# 5. The filter includes \`ATTRIBUTES\` constant (BibTeX field names) merged
#    into PARAMS for direct attribute filtering. These are standard BibTeX
#    fields that can be passed as individual query parameters.
#
# 6. No POST/PATCH/DELETE endpoints are exposed on the external API
#    (read-only).
`,tc=`openapi: 3.0.3
info:
  title: TaxonWorks API – Tag Resource
  description: |
    OpenAPI 3.0 specification for the **Tag** resource.

    A Tag links a Keyword (ControlledVocabularyTerm) to any data object.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Tags – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    tagIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer

  schemas:
    Tag:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        tag_object_type:
          type: string
        tag_object_attribute:
          type: string
          nullable: true
        tag_object_id:
          type: integer
        keyword_id:
          type: integer
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        tag_object_global_id:
          type: string
        keyword:
          type: object
          properties:
            name:
              type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /tags:
    get:
      operationId: getTags
      summary: List / filter Tags
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/tags\`
        **Controller:** \`TagsController#api_index\`
        **View:** \`tags/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - Tags – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        - name: keyword_id[]
          in: query
          description: Filter by Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tag_object_type[]
          in: query
          description: Filter by tagged object class.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: tag_object_id[]
          in: query
          description: Filter by tagged object id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of Tag objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Tag'

  /tags/{id}:
    get:
      operationId: getTag
      summary: Get a single Tag
      description: |
        **Route:** \`GET /api/v1/tags/:id\`
        **Controller:** \`TagsController#api_show\`
        **View:** \`tags/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - Tags – REST
      parameters:
        - $ref: '#/components/parameters/tagIdPath'
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: A single Tag.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Tag'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All Tag routes documented:
#   GET /tags     | api_index | done
#   GET /tags/:id | api_show  | done
`,nc=`openapi: 3.0.3
info:
  title: TaxonWorks API – TaxonDetermination Resource
  description: |
    OpenAPI 3.0 specification for the **TaxonDetermination** resource.

    A TaxonDetermination is an assertion that a collection object (or field
    occurrence) belongs to a taxonomic concept (OTU). The determination at
    position 1 is the accepted/current determination.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: TaxonDeterminations – REST
    description: Standard REST read endpoints.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    taxonDeterminationIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    TaxonDetermination:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        taxon_determination_object_id:
          type: integer
          description: Id of the object being determined (CollectionObject or FieldOccurrence).
        taxon_determination_object_type:
          type: string
          description: Type of the object being determined.
          example: 'CollectionObject'
        otu_id:
          type: integer
          description: The OTU (taxonomic concept) of this determination.
        position:
          type: integer
          description: Position in the determination stack. Position 1 is the current/accepted determination.
        year_made:
          type: integer
          nullable: true
          description: 4-digit year the determination was made.
        month_made:
          type: integer
          nullable: true
        day_made:
          type: integer
          nullable: true
        print_label:
          type: string
          nullable: true
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        # shared metadata
        object_tag:
          type: string
        object_label:
          type: string
        global_id:
          type: string
        base_class:
          type: string
        url_for:
          type: string
        object_url:
          type: string
        # nested objects
        object:
          type: object
          description: Metadata for the determined object (CollectionObject/FieldOccurrence).
          properties:
            object_tag:
              type: string
            object_label:
              type: string
            global_id:
              type: string
        otu:
          type: object
          description: Metadata for the OTU.
          properties:
            object_tag:
              type: string
            object_label:
              type: string
            global_id:
              type: string
            name:
              type: string
              nullable: true
            taxon_name_id:
              type: integer
              nullable: true
        determiner_roles:
          type: array
          description: Present when determiners exist.
          items:
            type: object
            properties:
              id:
                type: integer
              position:
                type: integer
              type:
                type: string
              person:
                type: object
                description: Present when agent is a person.
              organization:
                type: object
                description: Present when agent is an organization.
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /taxon_determinations:
    get:
      operationId: getTaxonDeterminations
      summary: List / filter TaxonDeterminations
      description: |
        Returns a paginated, filterable list ordered by \`taxon_determinations.id\`.

        **Route:** \`GET /api/v1/taxon_determinations\`
        **Controller:** \`TaxonDeterminationsController#api_index\`
        **View:** \`taxon_determinations/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - TaxonDeterminations – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: taxon_determination_id[]
          in: query
          description: Return specific TaxonDetermination(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: otu_id[]
          in: query
          description: Filter by OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_id[]
          in: query
          description: Filter by CollectionObject ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: field_occurrence_id[]
          in: query
          description: Filter by FieldOccurrence ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: determiner_id[]
          in: query
          description: Filter by determiner Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_determination_object_id[]
          in: query
          description: Filter by determined object ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_determination_object_type[]
          in: query
          description: Filter by determined object type (CollectionObject, FieldOccurrence).
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of TaxonDetermination objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonDetermination'

  /taxon_determinations/{id}:
    get:
      operationId: getTaxonDetermination
      summary: Get a single TaxonDetermination
      description: |
        **Route:** \`GET /api/v1/taxon_determinations/:id\`
        **Controller:** \`TaxonDeterminationsController#api_show\`
        **View:** \`taxon_determinations/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - TaxonDeterminations – REST
      parameters:
        - $ref: '#/components/parameters/taxonDeterminationIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single TaxonDetermination.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonDetermination'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All TaxonDetermination routes documented:
#   GET /taxon_determinations     | api_index | ✅
#   GET /taxon_determinations/:id | api_show  | ✅
`,rc=`openapi: 3.0.3
info:
  title: TaxonWorks API – TaxonName Resource
  description: |
    OpenAPI 3.0 specification for the **TaxonName** resource of the
    TaxonWorks external API.

    A TaxonName is a nomenclatural name governed by a code (ICZN, ICN, ICNP,
    etc.). It may be a Protonym (an original name), a Combination, or a
    Hybrid. TaxonNames are organized in a parent-child hierarchy that is
    strictly organizational; all nomenclatural statuses and relationships are
    explicit via TaxonNameRelationships and TaxonNameClassifications.

    ## Authentication
    All endpoints require **either** a valid \`project_token\` **or** a valid
    \`user_token\` + \`project_id\` pair, passed as query parameters.

    ## Pagination
    List endpoints return paginated results. Use \`page\` and \`per\` query
    parameters. Pagination metadata is returned in response headers
    (\`X-Page\`, \`X-Per-Page\`, \`X-Total\`, \`X-Total-Pages\`).

    ## Response extensions
    Some endpoints support \`extend[]\` query parameters to include additional
    nested data in the response.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: TaxonNames – REST
    description: Standard REST (CRUD-style) read endpoints for TaxonNames.
  - name: TaxonNames – Autocomplete
    description: Autocomplete / typeahead search across taxon names.
  - name: TaxonNames – Extended
    description: Resource-specific extended endpoints (inventory, parse, origin citation).

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
      description: User API token. When used, \`project_id\` must also be provided.
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token
      description: Project-level API token. Provides read-only access scoped to the project.

  parameters:
    projectId:
      name: project_id
      in: query
      description: Project ID (required when authenticating with a user \`token\`).
      schema:
        type: integer

    pageParam:
      name: page
      in: query
      description: Page number for paginated results.
      schema:
        type: integer
        minimum: 1
        default: 1

    perParam:
      name: per
      in: query
      description: Number of items per page.
      schema:
        type: integer
        minimum: 1
        maximum: 10000
        default: 500

    taxonNameIdPath:
      name: id
      in: path
      required: true
      description: TaxonName id.
      schema:
        type: integer

    extendParam:
      name: extend[]
      in: query
      description: |
        Include additional nested data in the response. Supported values
        vary by endpoint.
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    TaxonNameBase:
      type: object
      description: |
        Base TaxonName attributes returned in list (index) responses.
        Rendered by \`_base_attributes.json.jbuilder\`.
      required:
        - id
        - name
      properties:
        id:
          type: integer
          description: Unique identifier.
          example: 6789
        name:
          type: string
          description: The fully latinized monominal string of the name.
          example: 'bus'
        parent_id:
          type: integer
          nullable: true
          description: Id of the parent TaxonName in the hierarchy.
        cached:
          type: string
          nullable: true
          description: The full cached name string (e.g. "Aus bus").
          example: 'Aus bus'
        cached_html:
          type: string
          nullable: true
          description: HTML-formatted cached name.
          example: '<i>Aus bus</i>'
        feminine_name:
          type: string
          nullable: true
          description: Feminine form of a species-group epithet (adjective/participle).
        masculine_name:
          type: string
          nullable: true
          description: Masculine form of a species-group epithet.
        neuter_name:
          type: string
          nullable: true
          description: Neuter form of a species-group epithet.
        nomenclatural_code:
          type: string
          nullable: true
          description: The governing nomenclatural code (e.g. "iczn", "icn", "icnp").
          example: 'iczn'
        etymology:
          type: string
          nullable: true
          description: Etymology of the name.
        year_of_publication:
          type: integer
          nullable: true
          description: The 4-digit year of publication (availability).
          example: 2000
        verbatim_author:
          type: string
          nullable: true
          description: Verbatim author string as originally provided.
        rank:
          type: string
          nullable: true
          description: Short rank label (e.g. "species", "genus").
          example: 'species'
        rank_string:
          type: string
          nullable: true
          description: Full NOMEN rank class string.
          example: 'NomenclaturalRank::Iczn::SpeciesGroup::Species'
        type:
          type: string
          description: Subclass type (\`Protonym\`, \`Combination\`, \`Hybrid\`).
          example: 'Protonym'
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        cached_valid_taxon_name_id:
          type: integer
          nullable: true
          description: Id of the valid/accepted taxon name.
        cached_original_combination:
          type: string
          nullable: true
          description: Plain-text original combination string.
        cached_original_combination_html:
          type: string
          nullable: true
          description: HTML-formatted original combination.
        cached_author_year:
          type: string
          nullable: true
          description: Cached "Author, Year" string.
          example: 'Author, 2000'
        cached_secondary_homonym:
          type: string
          nullable: true
        cached_primary_homonym:
          type: string
          nullable: true
        cached_gender:
          type: string
          nullable: true
        cached_is_valid:
          type: boolean
          nullable: true
          description: Whether this name is currently treated as valid.
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        verbatim_name:
          type: string
          nullable: true
        year:
          type: integer
          nullable: true
          description: Computed year integer from cached_nomenclature_date.
        name_string:
          type: string
          description: Full name label (via \`label_for_taxon_name\` helper).
        original_combination:
          type: string
          description: Full original combination label (plain text, via \`full_original_taxon_name_label\` helper).

    TaxonName:
      description: |
        Full TaxonName with extensions. Rendered by \`_attributes.json.jbuilder\`.
        Extends TaxonNameBase with \`original_combination\` (HTML) and optional
        \`extend[]\` blocks.
      allOf:
        - $ref: '#/components/schemas/TaxonNameBase'
        - type: object
          properties:
            original_combination:
              type: string
              description: HTML-formatted original combination (overrides base plain-text version in show).
            parent:
              description: Present when \`extend[]=parent\`.
              allOf:
                - type: object
                  properties:
                    id:
                      type: integer
                - $ref: '#/components/schemas/TaxonNameBase'
            otus:
              type: array
              description: Present when \`extend[]=otus\`. Array of OTU objects linked to this name.
              items:
                type: object
                description: OTU attributes (see Otu schema).
            taxon_name_author_roles:
              type: array
              description: Present when \`extend[]=roles\`. Author roles with person details.
              items:
                type: object
                properties:
                  id:
                    type: integer
                  position:
                    type: integer
                  type:
                    type: string
                  # Plus person brief attributes
            ancestor_ids:
              type: array
              description: Present when \`extend[]=ancestor_ids\`. Array of [id, rank_class] pairs.
              items:
                type: array
                items:
                  oneOf:
                    - type: integer
                    - type: string
            children:
              type: array
              description: Present when \`extend[]=children\`. Array of child TaxonName ids.
              items:
                type: integer
            type_taxon_name_relationship:
              type: object
              nullable: true
              description: Present when \`extend[]=type_taxon_name_relationship\`. The type species/genus relationship.
            notes:
              type: array
              description: Present when \`extend[]=notes\`.
              items:
                type: object
                properties:
                  text:
                    type: string

    TaxonNameSummary:
      type: object
      description: |
        Summary view of a TaxonName with status, rank, author, parent info,
        and optional name elements and relationships.
        Rendered by \`summary.json.jbuilder\`.
      properties:
        id:
          type: integer
        parent_id:
          type: integer
          nullable: true
        name:
          type: string
        is_valid:
          type: boolean
          nullable: true
        full_name:
          type: string
          description: Full label.
        expanded_name:
          type: string
          description: The cached name.
        full_name_tag:
          type: string
          description: HTML-formatted full name.
        nomenclatural_code:
          type: string
          nullable: true
        short_status:
          type: string
          description: Short status label.
        status:
          type: string
          description: Full status label.
        rank:
          type: string
          nullable: true
        rank_string:
          type: string
          nullable: true
        author:
          type: string
          nullable: true
          description: Author string.
        year:
          type: integer
          nullable: true
        pages:
          type: string
          nullable: true
          description: Pages from origin citation.
        original_citation:
          type: string
          nullable: true
          description: Cached source string of the origin citation.
        global_id:
          type: string
        descorator_status:
          type: object
          nullable: true
          description: Decorator status metadata.
        parent:
          type: object
          properties:
            full_name:
              type: string
            author:
              type: string
              nullable: true
            global_id:
              type: string
              nullable: true
            rank:
              type: string
              nullable: true
            expanded_name:
              type: string
              nullable: true
        elements:
          type: object
          description: Present when \`extend[]=name_elements\` and type is Protonym.
          properties:
            name:
              type: object
              description: Full name hash keyed by rank.
              additionalProperties:
                type: string
            original_combination:
              type: object
              description: Original combination elements keyed by rank.
              additionalProperties:
                type: string
        valid_name:
          type: object
          description: Present when name is invalid and not ambiguously invalid.
          properties:
            id:
              type: integer
            valid_name:
              type: string
            valid_full_name:
              type: string
            author:
              type: string
              nullable: true
            year:
              type: integer
              nullable: true
            pages:
              type: string
              nullable: true
            original_citation:
              type: string
              nullable: true
        taxon_name_classifications:
          type: array
          description: Present when \`extend[]=taxon_name_classifications\`.
          items:
            type: object
            properties:
              type:
                type: string
              nomen_uri:
                type: string
              label:
                type: string
              status:
                type: string
              id:
                type: integer
              global_id:
                type: string
              pages:
                type: string
                nullable: true
              original_citation:
                type: string
                nullable: true
        subject_taxon_name_relationships:
          type: array
          description: Present when \`extend[]=taxon_name_relationships\`. Invalid-name relationships where this name is subject.
          items:
            type: object
            properties:
              type:
                type: string
              nomen_uri:
                type: string
              label:
                type: string
              related_name:
                type: string
              status:
                type: string
              id:
                type: integer
              global_id:
                type: string
              pages:
                type: string
                nullable: true
              original_citation:
                type: string
                nullable: true

    TaxonNameCatalog:
      type: object
      description: |
        Catalog view of a TaxonName with timeline, sources, stats, and
        repositories. Rendered by \`catalog.json.jbuilder\`.
      properties:
        id:
          type: integer
        parent_id:
          type: integer
          nullable: true
        name:
          type: string
        is_valid:
          type: boolean
          nullable: true
        full_name:
          type: string
        full_name_tag:
          type: string
        nomenclatural_code:
          type: string
          nullable: true
        short_status:
          type: string
        status:
          type: string
        rank:
          type: string
          nullable: true
        rank_string:
          type: string
          nullable: true
        author:
          type: string
          nullable: true
        year:
          type: integer
          nullable: true
        pages:
          type: string
          nullable: true
        original_citation:
          type: string
          nullable: true
        timeline:
          type: array
          description: Chronological catalog entries.
          items:
            type: object
        sources:
          type: array
          items:
            type: object
            properties:
              cached:
                type: string
                description: Full cached source string.
              url:
                type: string
                nullable: true
        stats:
          type: object
          description: Inventory statistics for this taxon name.
        repositories:
          type: array
          items:
            type: object

    TaxonNameParseResult:
      type: object
      description: Result of parsing a taxon name string via the biodiversity parser.
      properties:
        data:
          type: object
          properties:
            protonyms:
              type: object
              description: Matched protonyms keyed by rank.
              additionalProperties:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonName'
            parse:
              type: object
              description: Raw parse result from the biodiversity parser.
            unambiguous:
              type: boolean
              description: Whether the parse is unambiguous.
            existing_combination_id:
              type: integer
              nullable: true
              description: Id of an existing Combination that matches.
        other_matches:
          type: object
          description: Additional partial matches keyed by category.
          additionalProperties:
            type: array
            items:
              $ref: '#/components/schemas/TaxonName'
        combination:
          description: Present when \`combination_id\` param is provided.
          type: object

    OriginCitationItem:
      type: object
      description: Taxon name with its origin citation source.
      properties:
        name:
          type: string
          description: Full name label.
        original_name:
          type: string
          description: Original combination label.
        source:
          type: string
          nullable: true
          description: Cached source citation string.

    TaxonNameAutocompleteItem:
      type: object
      description: A single taxon name autocomplete result.
      properties:
        id:
          type: integer
        label:
          type: string
          description: Display label.
        label_html:
          type: string
          description: HTML-formatted label.

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

# ─────────────────────────────────────────────
# Paths
# ─────────────────────────────────────────────
paths:
  # ═══════════════════════════════════════════
  #  REST endpoints
  # ═══════════════════════════════════════════

  /taxon_names:
    get:
      operationId: getTaxonNames
      summary: List / filter TaxonNames
      description: |
        Returns a paginated, filterable list of TaxonNames for the
        authenticated project. Results are ordered by \`taxon_names.id\`.

        Also supports CSV output via \`.csv\` format suffix.

        **Route:** \`GET /api/v1/taxon_names\`
        **Controller:** \`TaxonNamesController#api_index\`
        **View:** \`taxon_names/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - TaxonNames – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'

        # ── TaxonName-specific filter params ──
        - name: taxon_name_id[]
          in: query
          description: Return specific TaxonName(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: parent_id[]
          in: query
          description: Filter to TaxonNames with these parent ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: name
          in: query
          description: |
            Filter by name. Matches against \`cached\` by default (partial).
            Pass as array for multiple values.
          schema:
            oneOf:
              - type: string
              - type: array
                items:
                  type: string

        - name: name_exact
          in: query
          description: If \`true\`, match \`name\` exactly instead of partial.
          schema:
            type: boolean

        - name: epithet_only
          in: query
          description: If \`true\`, match against the \`name\` column (monominal) rather than \`cached\`.
          schema:
            type: boolean

        - name: cached[]
          in: query
          description: Match \`cached\` field exactly. Array of strings.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: author
          in: query
          description: Match against \`cached_author_year\`. Use "&" for "and".
          schema:
            type: string

        - name: author_exact
          in: query
          description: If \`true\`, match \`author\` exactly.
          schema:
            type: boolean

        - name: authors
          in: query
          description: Boolean flag for filtering by author presence.
          schema:
            type: boolean

        - name: year
          in: query
          description: Match against \`cached_author_year\` year ("yyyy").
          schema:
            type: string

        - name: year_start
          in: query
          description: Start year for range filter against \`cached_nomenclature_date\`.
          schema:
            type: string

        - name: year_end
          in: query
          description: End year for range filter against \`cached_nomenclature_date\`.
          schema:
            type: string

        - name: nomenclature_date
          in: query
          description: |
            \`true\` – only names with a cached nomenclature date set.
            \`false\` – only names without one.
          schema:
            type: boolean

        - name: nomenclature_code
          in: query
          description: Filter by governing nomenclatural code (e.g. "iczn", "icn", "icnp").
          schema:
            type: string

        - name: nomenclature_group[]
          in: query
          description: |
            Filter by nomenclature group. Values like \`Iczn::SpeciesGroup\`,
            \`Iczn::GenusGroup\`, \`Iczn::FamilyGroup\`, \`Iczn::HigherClassification\`, etc.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: rank[]
          in: query
          description: Filter by rank (e.g. "species", "genus", "family").
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: type[]
          in: query
          description: Filter by TaxonName subclass type (\`Protonym\`, \`Combination\`, \`Hybrid\`).
          schema:
            type: array
            items:
              type: string
              enum:
                - Protonym
                - Combination
                - Hybrid
          style: form
          explode: true

        - name: taxon_name_type
          in: query
          description: Alias for filtering by type.
          schema:
            type: string

        - name: validity
          in: query
          description: |
            \`true\` – only valid names (\`id == cached_valid_taxon_name_id\`).
            \`false\` – only invalid names.
          schema:
            type: boolean

        - name: availability
          in: query
          description: |
            \`true\` – only available names.
            \`false\` – only unavailable names.
          schema:
            type: boolean

        - name: descendants
          in: query
          description: |
            Used with \`taxon_name_id[]\`:
            \`true\` – only descendants (NOT self).
            \`false\` – self AND descendants.
            Omit to ignore.
          schema:
            type: boolean

        - name: descendants_max_depth
          in: query
          description: Maximum depth of descendant traversal.
          schema:
            type: integer

        - name: ancestors
          in: query
          description: |
            Used with \`taxon_name_id[]\`:
            \`true\` – include ancestors.
          schema:
            type: boolean

        - name: leaves
          in: query
          description: |
            \`true\` – only leaf names (no children).
            \`false\` – only non-leaf names.
          schema:
            type: boolean

        - name: otus
          in: query
          description: |
            \`true\` – only names linked to at least one OTU.
            \`false\` – only names without OTUs.
          schema:
            type: boolean

        - name: otu_id[]
          in: query
          description: Return TaxonNames linked to these OTU ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: combinations
          in: query
          description: |
            \`true\` – only names that have subsequent Combinations.
            \`false\` – only names without subsequent Combinations.
          schema:
            type: boolean

        - name: etymology
          in: query
          description: |
            \`true\` – only names with etymology.
            \`false\` – only names without etymology.
          schema:
            type: boolean

        - name: original_combination
          in: query
          description: |
            \`true\` – only names with an original combination set.
            \`false\` – only names without.
          schema:
            type: boolean

        - name: verbatim_name
          in: query
          description: |
            \`true\` – only names with \`verbatim_name\` populated.
            \`false\` – only names without.
          schema:
            type: boolean

        - name: not_specified
          in: query
          description: |
            \`true\` – include "not specified" names.
            \`false\` – exclude "not specified" names.
          schema:
            type: boolean

        - name: collecting_event_id[]
          in: query
          description: Return TaxonNames of OTUs determined from CollectionObjects in these CollectingEvents.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: collection_object_id[]
          in: query
          description: Return TaxonNames of OTUs determined for these CollectionObjects.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: combination_taxon_name_id[]
          in: query
          description: Return TaxonNames that appear in Combinations using these name ids as elements.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_classification[]
          in: query
          description: Filter by TaxonNameClassification type strings.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_relationship[][subject_taxon_name_id]
          in: query
          description: Filter by TaxonNameRelationship subject TaxonName id.
          schema:
            type: integer

        - name: taxon_name_relationship[][object_taxon_name_id]
          in: query
          description: Filter by TaxonNameRelationship object TaxonName id.
          schema:
            type: integer

        - name: taxon_name_relationship[][type]
          in: query
          description: Filter by TaxonNameRelationship type.
          schema:
            type: string

        - name: taxon_name_relationship_type_subject[]
          in: query
          description: Return names that are the subject of these relationship types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_relationship_type_object[]
          in: query
          description: Return names that are the object of these relationship types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_relationship_type_either[]
          in: query
          description: Return names that are subject or object of these relationship types.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_author_id[]
          in: query
          description: Filter by TaxonName author Person ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_author_id_or
          in: query
          description: |
            \`true\` – match ANY of the \`taxon_name_author_id[]\` values (OR).
            \`false\`/nil – match ALL (AND).
          schema:
            type: boolean

        - name: type_metadata
          in: query
          description: |
            \`true\` – only names with type metadata.
            \`false\` – only names without.
          schema:
            type: boolean

        - name: latinized
          in: query
          description: |
            \`true\` – only latinized names.
            \`false\` – only non-latinized names.
          schema:
            type: boolean

        - name: sort
          in: query
          description: Sort order for results.
          schema:
            type: string

        # ── Post-processing modifiers ──
        - name: ancestrify
          in: query
          description: |
            \`true\` – extend results to include all ancestors of matched names.
          schema:
            type: boolean

        - name: validify
          in: query
          description: |
            \`true\` – for each name in the result, return its valid name instead.
          schema:
            type: boolean

        - name: synonymify
          in: query
          description: |
            \`true\` – extend results to include synonyms.
          schema:
            type: boolean

        - name: combinationify
          in: query
          description: |
            \`true\` – extend results to include all Combinations in which matched names participate.
          schema:
            type: boolean

        # ── Citations concern ──
        - name: citations
          in: query
          description: |
            \`true\` – only names with citations.
            \`false\` – only names without citations.
          schema:
            type: boolean

        - name: origin_citation
          in: query
          description: |
            \`true\` – only names with an origin citation.
            \`false\` – only names without.
          schema:
            type: boolean

        # ── Tags concern ──
        - name: keyword_id_and[]
          in: query
          description: Return names tagged with ALL of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: keyword_id_or[]
          in: query
          description: Return names tagged with ANY of the given Keyword ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: tags
          in: query
          description: |
            \`true\` – only names with tags.
            \`false\` – only names without tags.
          schema:
            type: boolean

        # ── Notes concern ──
        - name: notes
          in: query
          description: |
            \`true\` – only names with notes.
            \`false\` – only names without notes.
          schema:
            type: boolean

      responses:
        '200':
          description: A paginated array of TaxonName objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
            X-Page:
              schema:
                type: integer
            X-Per-Page:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonNameBase'
              example:
                - id: 6789
                  name: 'bus'
                  parent_id: 6000
                  cached: 'Aus bus'
                  cached_html: '<i>Aus bus</i>'
                  nomenclatural_code: 'iczn'
                  year_of_publication: 2000
                  rank: 'species'
                  rank_string: 'NomenclaturalRank::Iczn::SpeciesGroup::Species'
                  type: 'Protonym'
                  cached_valid_taxon_name_id: 6789
                  cached_author_year: 'Author, 2000'
                  cached_is_valid: true
                  year: 2000
                  name_string: 'Aus bus Author, 2000'
                  original_combination: 'Aus bus Author, 2000'

  /taxon_names/{id}:
    get:
      operationId: getTaxonName
      summary: Get a single TaxonName
      description: |
        Returns a single TaxonName by id with full attributes.

        Supports \`extend[]\` values: \`parent\`, \`otus\`, \`roles\`, \`ancestor_ids\`,
        \`children\`, \`type_taxon_name_relationship\`, \`notes\`.

        **Route:** \`GET /api/v1/taxon_names/:id\`
        **Controller:** \`TaxonNamesController#api_show\`
        **View:** \`taxon_names/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - TaxonNames – REST
      parameters:
        - $ref: '#/components/parameters/taxonNameIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single TaxonName object.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonName'
        '404':
          $ref: '#/components/responses/NotFound'

  # ═══════════════════════════════════════════
  #  Autocomplete
  # ═══════════════════════════════════════════

  /taxon_names/autocomplete:
    get:
      operationId: autocompleteTaxonNames
      summary: Autocomplete TaxonNames
      description: |
        Performs a multi-strategy autocomplete across cached names, original
        combinations, and author-year fields. Strategies include exact match,
        prefix match, GIN trigram search, and genus+species parsing.

        **Route:** \`GET /api/v1/taxon_names/autocomplete\`
        **Controller:** \`TaxonNamesController#autocomplete\`
        **Query class:** \`Queries::TaxonName::Autocomplete\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNames – Autocomplete
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: term
          in: query
          required: true
          description: The search string.
          schema:
            type: string
            minLength: 1

        - name: valid
          in: query
          description: |
            \`true\` – only valid names.
            \`false\` – only invalid names.
          schema:
            type: boolean

        - name: exact
          in: query
          description: If \`true\`, only return exact name matches (no fuzzy).
          schema:
            type: boolean

        - name: no_leaves
          in: query
          description: If \`true\`, only return names that have descendants.
          schema:
            type: boolean

        - name: type[]
          in: query
          description: Filter by TaxonName subclass type.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: parent_id[]
          in: query
          description: Limit to names with these parent ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: nomenclature_group[]
          in: query
          description: Filter by nomenclature group.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Array of autocomplete results.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonNameAutocompleteItem'

  # ═══════════════════════════════════════════
  #  Extended endpoints
  # ═══════════════════════════════════════════

  /taxon_names/parse:
    get:
      operationId: parseTaxonName
      summary: Parse a taxon name string
      description: |
        Parses a taxonomic name string using the biodiversity parser and
        attempts to match the result against existing TaxonNames in the
        project.

        **Route:** \`GET /api/v1/taxon_names/parse\`
        **Controller:** \`TaxonNamesController#parse\` (same view used for API)
        **View:** \`taxon_names/api/v1/parse.json.jbuilder\`
        **Type:** Extended resource endpoint

        Note: Currently hardcoded to ICZN nomenclatural code.
      tags:
        - TaxonNames – Extended
      parameters:
        - $ref: '#/components/parameters/projectId'
        - name: query_string
          in: query
          required: true
          description: The taxon name string to parse.
          schema:
            type: string
          example: 'Aus bus Author, 2000'

        - name: combination_id
          in: query
          description: Optionally provide an existing Combination id for context.
          schema:
            type: integer

      responses:
        '200':
          description: Parse results with matched protonyms.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonNameParseResult'

  /taxon_names/origin_citation:
    get:
      operationId: getTaxonNamesOriginCitation
      summary: List TaxonNames with origin citations
      description: |
        Returns a filterable, paginated list of TaxonNames with their origin
        citation source. Uses the same filter parameters as \`GET /taxon_names\`.

        Also supports CSV output.

        **Route:** \`GET /api/v1/taxon_names/origin_citation\`
        **Controller:** \`TaxonNamesController#api_origin_citation\`
        **View:** \`taxon_names/origin_citation.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNames – Extended
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        # All filter params from GET /taxon_names also apply
      responses:
        '200':
          description: Array of taxon name origin citation entries.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/OriginCitationItem'
              example:
                - name: 'Aus bus Author, 2000'
                  original_name: 'Aus bus Author, 2000'
                  source: 'Author, A. (2000) A monograph of Aus. Journal, 1: 1-100.'

  /taxon_names/{id}/inventory/summary:
    get:
      operationId: getTaxonNameSummary
      summary: Summary inventory for a TaxonName
      description: |
        Returns a summary view of a TaxonName including status, rank, author,
        parent info, and optionally name elements, classifications, and
        relationships.

        Supports \`extend[]\` values: \`name_elements\`,
        \`taxon_name_classifications\`, \`taxon_name_relationships\`.

        **Route:** \`GET /api/v1/taxon_names/:id/inventory/summary\`
        **Controller:** \`TaxonNamesController#api_summary\`
        **View:** \`taxon_names/api/v1/summary.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNames – Extended
      parameters:
        - $ref: '#/components/parameters/taxonNameIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: Summary of the TaxonName.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonNameSummary'

  /taxon_names/{id}/inventory/catalog:
    get:
      operationId: getTaxonNameCatalog
      summary: Catalog for a TaxonName
      description: |
        Returns a catalog view of a TaxonName including a chronological
        timeline, sources, inventory statistics, and repositories.

        **Route:** \`GET /api/v1/taxon_names/:id/inventory/catalog\`
        **Controller:** \`TaxonNamesController#api_catalog\`
        **View:** \`taxon_names/api/v1/catalog.json.jbuilder\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNames – Extended
      parameters:
        - $ref: '#/components/parameters/taxonNameIdPath'
        - $ref: '#/components/parameters/projectId'
        - name: target_depth
          in: query
          description: Depth for recursive catalog generation. Defaults to \`0\`.
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: Catalog data for the TaxonName.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonNameCatalog'

# ─────────────────────────────────────────────
# Notes
# ─────────────────────────────────────────────
# CONSISTENCY REPORT
#
# All TaxonName routes from config/routes/api_v1.rb are documented:
#
#   Route                                                | Endpoint              | Status
#   -----------------------------------------------------|---------------------- |---------
#   GET /taxon_names/origin_citation                     | api_origin_citation   | ✅ Documented
#   GET /taxon_names                                     | api_index             | ✅ Documented
#   GET /taxon_names/autocomplete                        | autocomplete          | ✅ Documented
#   GET /taxon_names/parse                               | parse                 | ✅ Documented
#   GET /taxon_names/:id/inventory/catalog               | api_catalog           | ✅ Documented
#   GET /taxon_names/:id/inventory/summary               | api_summary           | ✅ Documented
#   GET /taxon_names/:id                                 | api_show              | ✅ Documented
#
# OBSERVATIONS & INCONSISTENCIES:
#
# 1. The \`parse\` view at \`taxon_names/api/v1/parse.json.jbuilder\` references
#    partials with the path \`/api/v1//taxon_names/attributes\` (double slash)
#    and \`/api/v1/combinations/attributes\`. This may be a typo in the view
#    that works due to Rails path normalization but is worth verifying.
#
# 2. The \`api_origin_citation\` action reuses the non-API view
#    \`taxon_names/origin_citation.json.jbuilder\` (not under api/v1/),
#    which returns a simpler schema (name, original_name, source) compared
#    to the standard index view.
#
# 3. The \`parse\` endpoint is currently hardcoded to \`code: :iczn\`. The
#    TODO in the controller notes this should be generalized.
#
# 4. The filter has many nested sub-query parameters (e.g. \`otu_query\`,
#    \`collection_object_query\`, etc.) inherited from the base Filter class
#    that are technically available but not individually documented here
#    to keep the spec manageable.
#
# 5. No POST/PATCH/DELETE endpoints are exposed on the external API
#    (read-only), consistent with the authentication section.
#
# 6. The \`summary.json.jbuilder\` view has a typo: \`descorator_status\`
#    (should likely be \`decorator_status\`). Documented as-is to match
#    the actual API response.
`,ic=`openapi: 3.0.3
info:
  title: TaxonWorks API – TaxonNameClassification Resource
  description: |
    OpenAPI 3.0 specification for the **TaxonNameClassification** resource.

    A TaxonNameClassification assigns a nomenclatural status or classification
    to a TaxonName (e.g., nomen nudum, valid, unavailable). Uses Rails STI
    with many subtype classes.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: TaxonNameClassifications – REST
    description: Standard REST read endpoints.
  - name: TaxonNameClassifications – Types
    description: Classification type enumeration.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    tncIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    TaxonNameClassification:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        taxon_name_id:
          type: integer
        type:
          type: string
          description: Rails STI classification type class name.
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        object_tag:
          type: string
        url:
          type: string
        global_id:
          type: string
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /taxon_name_classifications:
    get:
      operationId: getTaxonNameClassifications
      summary: List / filter TaxonNameClassifications
      description: |
        Returns a paginated, filterable list.

        **Route:** \`GET /api/v1/taxon_name_classifications\`
        **Controller:** \`TaxonNameClassificationsController#api_index\`
        **View:** \`taxon_name_classifications/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - TaxonNameClassifications – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_classification_type[]
          in: query
          description: Filter by classification type class names.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_classification_set[]
          in: query
          description: Filter by classification set names.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

      responses:
        '200':
          description: Paginated array of TaxonNameClassification objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonNameClassification'

  /taxon_name_classifications/taxon_name_classification_types:
    get:
      operationId: getTaxonNameClassificationTypes
      summary: List available classification types
      description: |
        Returns the list of valid TaxonNameClassification type strings.

        **Route:** \`GET /api/v1/taxon_name_classifications/taxon_name_classification_types\`
        **Controller:** \`TaxonNameClassificationsController#taxon_name_classification_types\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNameClassifications – Types
      parameters:
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Array of classification type strings.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string

  /taxon_name_classifications/{id}:
    get:
      operationId: getTaxonNameClassification
      summary: Get a single TaxonNameClassification
      description: |
        **Route:** \`GET /api/v1/taxon_name_classifications/:id\`
        **Controller:** \`TaxonNameClassificationsController#api_show\`
        **View:** \`taxon_name_classifications/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - TaxonNameClassifications – REST
      parameters:
        - $ref: '#/components/parameters/tncIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single TaxonNameClassification.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonNameClassification'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All TaxonNameClassification routes documented:
#   GET /taxon_name_classifications                                | api_index                        | done
#   GET /taxon_name_classifications/taxon_name_classification_types | taxon_name_classification_types  | done
#   GET /taxon_name_classifications/:id                            | api_show                         | done
`,ac=`openapi: 3.0.3
info:
  title: TaxonWorks API – TaxonNameRelationship Resource
  description: |
    OpenAPI 3.0 specification for the **TaxonNameRelationship** resource.

    A TaxonNameRelationship records a nomenclatural relationship between
    two TaxonNames (subject and object), such as synonymy, misspelling,
    or type species designation.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: TaxonNameRelationships – REST
    description: Standard REST read endpoints.
  - name: TaxonNameRelationships – Types
    description: Relationship type enumeration.

security:
  - tokenAuth: []
  - projectTokenAuth: []

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  parameters:
    projectId:
      name: project_id
      in: query
      schema:
        type: integer
    pageParam:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    perParam:
      name: per
      in: query
      schema:
        type: integer
        default: 500
    tnrIdPath:
      name: id
      in: path
      required: true
      schema:
        type: integer
    extendParam:
      name: extend[]
      in: query
      description: 'Supported: \`notes\`.'
      schema:
        type: array
        items:
          type: string
      style: form
      explode: true

  schemas:
    TaxonNameRelationship:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
        subject_taxon_name_id:
          type: integer
        object_taxon_name_id:
          type: integer
        type:
          type: string
          description: Rails STI relationship type class name.
        subject_status_tag:
          type: string
          nullable: true
        object_status_tag:
          type: string
          nullable: true
        created_by_id:
          type: integer
        updated_by_id:
          type: integer
        project_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        inverse_assignment_method:
          type: string
          nullable: true
        assignment_method:
          type: string
          nullable: true
        subject_name:
          type: string
        object_name:
          type: string
        global_id:
          type: string
        notes:
          type: array
          description: Present when \`extend[]=notes\`.
          items:
            type: object
            properties:
              text:
                type: string

    ErrorResponse:
      type: object
      properties:
        error:
          type: string

  responses:
    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ErrorResponse'

paths:
  /taxon_name_relationships:
    get:
      operationId: getTaxonNameRelationships
      summary: List / filter TaxonNameRelationships
      description: |
        Returns a paginated, filterable list. Also supports CSV output.

        **Route:** \`GET /api/v1/taxon_name_relationships\`
        **Controller:** \`TaxonNameRelationshipsController#api_index\`
        **View:** \`taxon_name_relationships/api/v1/index.json.jbuilder\`
        **Type:** REST (index)
      tags:
        - TaxonNameRelationships – REST
      parameters:
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/pageParam'
        - $ref: '#/components/parameters/perParam'
        - $ref: '#/components/parameters/extendParam'

        - name: taxon_name_relationship_id[]
          in: query
          description: Return specific relationship(s) by id.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_id[]
          in: query
          description: Filter by TaxonName ids (matches subject or object).
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: subject_taxon_name_id[]
          in: query
          description: Filter by subject TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: object_taxon_name_id[]
          in: query
          description: Filter by object TaxonName ids.
          schema:
            type: array
            items:
              type: integer
          style: form
          explode: true

        - name: taxon_name_relationship_type[]
          in: query
          description: Filter by relationship type class names.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: taxon_name_relationship_set[]
          in: query
          description: Filter by relationship set names.
          schema:
            type: array
            items:
              type: string
          style: form
          explode: true

        - name: ancestors
          in: query
          description: Include ancestors of matching taxon_name_id.
          schema:
            type: boolean

        - name: descendants
          in: query
          description: Include descendants of matching taxon_name_id.
          schema:
            type: boolean

        - name: taxon_name_subject_object
          in: query
          description: Filter taxon_name_id as subject only, object only, or both.
          schema:
            type: string

      responses:
        '200':
          description: Paginated array of TaxonNameRelationship objects.
          headers:
            X-Total:
              schema:
                type: integer
            X-Total-Pages:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TaxonNameRelationship'

  /taxon_name_relationships/taxon_name_relationship_types:
    get:
      operationId: getTaxonNameRelationshipTypes
      summary: List available relationship types
      description: |
        Returns the list of valid TaxonNameRelationship type strings.

        **Route:** \`GET /api/v1/taxon_name_relationships/taxon_name_relationship_types\`
        **Controller:** \`TaxonNameRelationshipsController#taxon_name_relationship_types\`
        **Type:** Extended resource endpoint
      tags:
        - TaxonNameRelationships – Types
      parameters:
        - $ref: '#/components/parameters/projectId'
      responses:
        '200':
          description: Array of relationship type strings.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string

  /taxon_name_relationships/{id}:
    get:
      operationId: getTaxonNameRelationship
      summary: Get a single TaxonNameRelationship
      description: |
        **Route:** \`GET /api/v1/taxon_name_relationships/:id\`
        **Controller:** \`TaxonNameRelationshipsController#api_show\`
        **View:** \`taxon_name_relationships/api/v1/show.json.jbuilder\`
        **Type:** REST (show)
      tags:
        - TaxonNameRelationships – REST
      parameters:
        - $ref: '#/components/parameters/tnrIdPath'
        - $ref: '#/components/parameters/projectId'
        - $ref: '#/components/parameters/extendParam'
      responses:
        '200':
          description: A single TaxonNameRelationship.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TaxonNameRelationship'
        '404':
          $ref: '#/components/responses/NotFound'

# CONSISTENCY REPORT
# All TaxonNameRelationship routes documented:
#   GET /taxon_name_relationships                                | api_index                       | done
#   GET /taxon_name_relationships/taxon_name_relationship_types  | taxon_name_relationship_types   | done
#   GET /taxon_name_relationships/:id                            | api_show                        | done
`,oc=`openapi: 3.0.3
info:
  title: TaxonWorks API – Utility Endpoints
  description: |
    OpenAPI 3.0 specification for the TaxonWorks API **utility** endpoints.

    These include health checks (ping), project/global statistics, recent
    activity feeds, citation helpers, and authentication verification
    endpoints.

  version: 1.0.0-draft
  contact:
    name: Species File Group
    url: https://speciesfilegroup.org
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://sfg.taxonworks.org/api/v1
    description: SFG Production
  - url: https://sandbox.taxonworks.org/api/v1
    description: Sandbox

tags:
  - name: Ping
    description: Health-check endpoints.
  - name: Stats
    description: Project and global statistics.
  - name: Activity
    description: Recent activity feed.
  - name: Cite
    description: Citation helper endpoints (unauthenticated).
  - name: Base
    description: Authentication verification.

components:
  securitySchemes:
    tokenAuth:
      type: apiKey
      in: query
      name: token
    projectTokenAuth:
      type: apiKey
      in: query
      name: project_token

  schemas:
    PingResponse:
      type: object
      properties:
        pong:
          type: boolean

    StatsResponse:
      type: object
      properties:
        data:
          type: object
          description: Counts for all data model classes.
          additionalProperties:
            type: integer
        metadata:
          type: object
          description: Summary statistics for the past week.
          additionalProperties:
            type: integer

    ActivityResponse:
      type: object
      properties:
        id:
          type: integer
          description: Project id.
        name:
          type: string
          description: Project name.
        recent_records:
          type: object
          description: Map of model type to recent record info.
          additionalProperties:
            type: object
            properties:
              api_route:
                type: string
                nullable: true
              count:
                type: integer
              ids:
                type: array
                items:
                  type: integer

    CountValidSpeciesResponse:
      type: object
      properties:
        EXPERIMENTAL:
          type: object
          description: Project-keyed map of valid species counts.
          additionalProperties:
            type: array
            items:
              type: object
              properties:
                taxon_name_id:
                  type: integer
                name:
                  type: string
                count:
                  type: integer
                cite_as:
                  type: string

    NotFoundResponse:
      type: object
      properties:
        success:
          type: boolean
        message:
          type: string

paths:
  /ping:
    get:
      operationId: ping
      summary: Health check
      description: |
        Returns \`{"pong": true}\` if the API is running.

        **Route:** \`GET /api/v1/ping\`
        **Controller:** \`Api::V1::PingController#ping\`
        **Type:** Utility (unauthenticated)
      tags:
        - Ping
      security: []
      responses:
        '200':
          description: API is alive.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PingResponse'

  /pingz:
    get:
      operationId: pingz
      summary: Deep health check
      description: |
        Returns \`{"pong": true}\` if the API is running and assets are
        compiled. Returns 503 if assets are not available.

        **Route:** \`GET /api/v1/pingz\`
        **Controller:** \`Api::V1::PingController#pingz\`
        **Type:** Utility (unauthenticated)
      tags:
        - Ping
      security: []
      responses:
        '200':
          description: API and assets are healthy.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PingResponse'
        '503':
          description: Assets not available.

  /stats:
    get:
      operationId: getStats
      summary: Project or global statistics
      description: |
        Returns counts for all data model classes and summary statistics
        for the past week. When a project_token is provided, returns
        project-specific stats; otherwise returns global stats.

        **Route:** \`GET /api/v1/stats\`
        **Controller:** \`Api::V1::StatsController#index\`
        **View:** \`api/v1/stats/index.json.jbuilder\`
        **Type:** Utility
      tags:
        - Stats
      security: []
      parameters:
        - name: project_token
          in: query
          description: Optional project token to scope statistics to a project.
          schema:
            type: string
      responses:
        '200':
          description: Statistics response.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatsResponse'

  /activity:
    get:
      operationId: getActivity
      summary: Recent project activity
      description: |
        Returns recent record activity for a project, grouped by model type.

        **Route:** \`GET /api/v1/activity\`
        **Controller:** \`Api::V1::StatsController#activity\`
        **View:** \`projects/api/v1/activity.json.jbuilder\`
        **Type:** Utility
      tags:
        - Activity
      security:
        - projectTokenAuth: []
      parameters:
        - name: project_token
          in: query
          required: true
          description: Project token (required).
          schema:
            type: string
        - name: past_days
          in: query
          description: Number of days to look back (default varies).
          schema:
            type: integer
      responses:
        '200':
          description: Recent activity feed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ActivityResponse'

  /cite/count_valid_species:
    get:
      operationId: countValidSpecies
      summary: Count valid species for a taxon name
      description: |
        Returns counts of valid species for a given taxon name across
        all projects. This is an experimental, unauthenticated endpoint.

        **Route:** \`GET /api/v1/cite/count_valid_species\`
        **Controller:** \`Api::V1::CiteController#count_valid_species\`
        **View:** \`api/v1/cite/count_valid_species.json.jbuilder\`
        **Type:** Utility (unauthenticated, experimental)
      tags:
        - Cite
      security: []
      parameters:
        - name: taxon_name
          in: query
          required: true
          description: Exact taxon name string to search.
          schema:
            type: string
      responses:
        '200':
          description: Valid species counts by project.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CountValidSpeciesResponse'

  /:
    get:
      operationId: apiIndex
      summary: API base endpoint
      description: |
        Returns 200 if authentication is valid. Used to verify credentials.

        **Route:** \`GET /api/v1/\`
        **Controller:** \`Api::V1::BaseController#index\`
        **Type:** Utility
      tags:
        - Base
      security: []
      responses:
        '200':
          description: Authentication valid.

  /user_authenticated:
    get:
      operationId: userAuthenticated
      summary: Verify user authentication
      description: |
        Returns 200 if user token is valid.

        **Route:** \`GET /api/v1/user_authenticated\`
        **Controller:** \`Api::V1::BaseController#index\`
        **Type:** Utility
      tags:
        - Base
      security:
        - tokenAuth: []
      responses:
        '200':
          description: User authentication valid.

  /project_authenticated:
    get:
      operationId: projectAuthenticated
      summary: Verify project authentication
      description: |
        Returns 200 if project_token is valid.

        **Route:** \`GET /api/v1/project_authenticated\`
        **Controller:** \`Api::V1::BaseController#index\`
        **Type:** Utility
      tags:
        - Base
      security:
        - projectTokenAuth: []
      responses:
        '200':
          description: Project authentication valid.

  /both_authenticated:
    get:
      operationId: bothAuthenticated
      summary: Verify both user and project authentication
      description: |
        Returns 200 if both token and project_id are valid.

        **Route:** \`GET /api/v1/both_authenticated\`
        **Controller:** \`Api::V1::BaseController#index\`
        **Type:** Utility
      tags:
        - Base
      security:
        - tokenAuth: []
      parameters:
        - name: project_id
          in: query
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Both authentications valid.

# CONSISTENCY REPORT
# All utility routes documented:
#   GET /ping                      | ping                | done
#   GET /pingz                     | pingz               | done
#   GET /stats                     | stats#index         | done
#   GET /activity                  | stats#activity      | done
#   GET /cite/count_valid_species  | cite#count_valid_species | done
#   GET /                          | base#index          | done
#   GET /user_authenticated        | base#index          | done
#   GET /project_authenticated     | base#index          | done
#   GET /both_authenticated        | base#index          | done
# Note: MATCH /:path → base#not_found is a catch-all 404, not documented as an endpoint.
`,U=Symbol(`NOT_RESOLVED`);function W(e,t){return{tagName:e,nodeKind:`scalar`,implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(e=>String(e)),representTagName:t.representTagName??(()=>e)}}function sc(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify,represent:t.represent??(e=>e),representTagName:t.representTagName??(()=>e)}}function cc(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify,represent:t.represent??(e=>e),representTagName:t.representTagName??(()=>e)}}var lc=W(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`}),uc=[``,`~`,`null`,`Null`,`NULL`],dc=W(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>uc.indexOf(e)===-1?U:null,identify:e=>e===null,represent:()=>`null`}),fc=W(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,t)=>e===`null`||t&&e===``?null:U,identify:e=>e===null,represent:()=>`null`}),pc=[``,`~`,`null`,`Null`,`NULL`],mc=W(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>pc.indexOf(e)===-1?U:null,identify:e=>e===null,represent:()=>`null`}),hc=[`true`,`True`,`TRUE`],gc=[`false`,`False`,`FALSE`],_c=W(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>hc.indexOf(e)!==-1||gc.indexOf(e)===-1&&U,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),vc=[`true`],yc=[`false`],bc=W(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>vc.indexOf(e)!==-1||yc.indexOf(e)===-1&&U,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),xc=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`],Sc=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`],Cc=W(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>xc.indexOf(e)!==-1||Sc.indexOf(e)===-1&&U,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),wc=RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`),Tc=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Ec(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function Dc(e,t){if(t){if(!Tc.test(e))return U}else if(!wc.test(e))return U;let n=Ec(e);return Number.isFinite(n)?n:U}var Oc=W(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:Dc,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),kc=RegExp(`^-?(?:0|[1-9][0-9]*)$`),Ac=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function jc(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function Mc(e,t){if(t){if(!Ac.test(e))return U}else if(!kc.test(e))return U;let n=jc(e);return Number.isFinite(n)?n:U}var Nc=W(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Mc,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),Pc=RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function Fc(e){let t=e.replace(/_/g,``),n=1;if((t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`))return n*parseInt(t.slice(2),2);if(t.startsWith(`0x`))return n*parseInt(t.slice(2),16);if(t.includes(`:`)){let e=0;for(let n of t.split(`:`))e=e*60+Number(n);return n*e}return t!==`0`&&t[0]===`0`?n*parseInt(t,8):n*parseInt(t,10)}function Ic(e){if(!Pc.test(e))return U;let t=Fc(e);return Number.isFinite(t)?t:U}var Lc=W(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:Ic,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),Rc=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),zc=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Bc(e){if(!Rc.test(e))return U;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)||zc.test(e)?r:U}function Vc(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Hc=W(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Bc,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Vc}),Uc=RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`),Wc=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Gc(e,t){if(t){if(!Wc.test(e))return U;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)?r:U}if(!Uc.test(e))return U;let n=Number(e);return Number.isFinite(n)?n:U}function Kc(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var qc=W(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Gc,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Kc}),Jc=RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),Yc=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Xc(e){if(!Jc.test(e))return U;let t=e.toLowerCase().replace(/_/g,``),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=0;if(t.includes(`:`)){for(let e of t.split(`:`))r=r*60+Number(e);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||Yc.test(e)?r:U}function Zc(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Qc=W(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Xc,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Zc}),$c=W(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,t)=>e===`<<`||t&&e===``?`<<`:U,identify:()=>!1}),el=/^[A-Za-z0-9+/]*={0,2}$/;function tl(e){let t=e.replace(/\s/g,``);if(t.length%4!=0||!el.test(t))return U;let n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}function nl(e){let t=``;for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var rl=W(`tag:yaml.org,2002:binary`,{resolve:tl,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:nl}),il=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`),al=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function ol(e,t,n,r=0,i=0,a=0,o=0){let s=new Date(Date.UTC(e,t,n,r,i,a,o));return s.setUTCFullYear(e,t,n),s}function sl(e){let t=il.exec(e);if(t===null&&(t=al.exec(e)),t===null)return U;let n=+t[1],r=t[2]-1,i=+t[3];if(!t[4]){let e=ol(n,r,i);return e.getUTCFullYear()!==n||e.getUTCMonth()!==r||e.getUTCDate()!==i?U:e}let a=+t[4],o=+t[5],s=+t[6],c=0;if(a>23||o>59||s>59)return U;if(t[7]){let e=t[7].slice(0,3);for(;e.length<3;)e+=`0`;c=+e}let l=ol(n,r,i,a,o,s,c);if(l.getUTCFullYear()!==n||l.getUTCMonth()!==r||l.getUTCDate()!==i)return U;if(t[9]){let e=+t[10],n=+(t[11]||0);if(e>23||n>59)return U;let r=(e*60+n)*6e4;l.setTime(l.getTime()-(t[9]===`-`?-r:r))}return l}var cl=W(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:sl,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),ll=sc(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function ul(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function dl(e,t){let n={};for(let r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var fl=sc(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return`cannot resolve an ordered map item`;n=t.keys().next().value}else if(ul(t)){let e=Object.keys(t);if(e.length!==1)return`cannot resolve an ordered map item`;n=e[0]}else return`cannot resolve an ordered map item`;return e.seen.has(n)?`duplicate key in ordered map`:(e.seen.add(n),e.list.push(t),``)},finalize:e=>e.list,identify:()=>!1}),pl=sc(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size===1?(e.push(t.entries().next().value),``):`cannot resolve a pairs item`;if(Object.prototype.toString.call(t)!==`[object Object]`)return`cannot resolve a pairs item`;let n=t,r=Object.keys(n);return r.length===1?(e.push([r[0],n[r[0]]]),``):`cannot resolve a pairs item`},identify:()=>!1}),ml=cc(`tag:yaml.org,2002:map`,{create:()=>({}),identify:ul,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(typeof t==`object`&&t)return`object-based map does not support complex keys`;let r=String(t);return r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``},has:(e,t)=>typeof t==`object`&&t?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}}),hl=cc(`tag:yaml.org,2002:set`,{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{let t=new Map;for(let n of e)t.set(n,null);return t},addPair:(e,t,n)=>n===null?(e.add(t),``):`cannot resolve a set item`,has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function gl(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function _l(){return{scalar:[],sequence:[],mapping:[]}}function vl(e){let t=[];for(let n of e){let e=t.length;for(let r=0;r<t.length;r++){let i=t[r];if(i.nodeKind===n.nodeKind&&i.tagName===n.tagName&&i.matchByTagPrefix===n.matchByTagPrefix){e=r;break}}t[e]=n}return t}var yl=class e{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(e){let t=vl(e),n=[],r=gl(),i=_l();for(let e of t){if(e.nodeKind===`scalar`&&e.implicit){if(e.matchByTagPrefix)throw Error(`Implicit scalar tags cannot match by tag prefix`);n.push(e)}switch(e.nodeKind){case`scalar`:e.matchByTagPrefix?i.scalar.push(e):r.scalar[e.tagName]=e;break;case`sequence`:e.matchByTagPrefix?i.sequence.push(e):r.sequence[e.tagName]=e;break;case`mapping`:e.matchByTagPrefix?i.mapping.push(e):r.mapping[e.tagName]=e}}let a=n.filter(e=>e.implicitFirstChars===null),o=new Set;for(let e of n)if(e.implicitFirstChars!==null)for(let t of e.implicitFirstChars)o.add(t);let s=new Map;for(let e of o)s.set(e,n.filter(t=>t.implicitFirstChars===null||t.implicitFirstChars.indexOf(e)!==-1));let c=r.scalar[`tag:yaml.org,2002:str`];if(!c)throw Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=t,this.implicitScalarTags=n,this.implicitScalarByFirstChar=s,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=c,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=i}lookupScalarTag(e){let t=this.exact.scalar[e];if(t)return t;for(let t of this.prefix.scalar)if(e.startsWith(t.tagName))return t}lookupSequenceTag(e){let t=this.exact.sequence[e];if(t)return t;for(let t of this.prefix.sequence)if(e.startsWith(t.tagName))return t}lookupMappingTag(e){let t=this.exact.mapping[e];if(t)return t;for(let t of this.prefix.mapping)if(e.startsWith(t.tagName))return t}resolveImplicitScalarTag(e){let t=this.implicitScalarByFirstChar.get(e.charAt(0))??this.implicitScalarAnyFirstChar;for(let n of t){let t=n.resolve(e,!1,n.tagName);if(t!==U)return{value:t,tag:n}}let n=this.defaultScalarTag;return{value:n.resolve(e,!1,n.tagName),tag:n}}withTags(...t){let n=[];for(let e of t)n=n.concat(e);return new e([...this.tags,...n])}},bl=new yl([lc,ll,ml]);new yl([...bl.tags,fc,bc,Nc,qc]);var xl=new yl([...bl.tags,dc,_c,Oc,Hc]);new yl([...bl.tags,mc,Cc,Lc,Qc,cl,$c,rl,fl,pl,hl]).withTags({...Lc,resolve:(e,t,n)=>{let r=Lc.resolve(e,t,n);return r===U?Oc.resolve(e,t,n):r}},{...Qc,resolve:(e,t,n)=>{let r=Qc.resolve(e,t,n);return r===U?Hc.resolve(e,t,n):r}}),cc(`tag:yaml.org,2002:map`,{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||ul(e),represent:e=>{if(e instanceof Map)return e;let t=new Map,n=e;for(let e of Object.keys(n))t.set(e,n[e]);return t}});function Sl(e){if(Array.isArray(e)){let t=Array.prototype.slice.call(e);for(let e=0;e<t.length;e++){if(Array.isArray(t[e]))return null;typeof t[e]==`object`&&Object.prototype.toString.call(t[e])===`[object Object]`&&(t[e]=`[object Object]`)}return String(t)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}cc(`tag:yaml.org,2002:map`,{create:()=>({}),identify:ul,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{let r=Sl(t);return r===null?`nested arrays are not supported inside keys`:(r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``)},has:(e,t)=>{let n=Sl(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var Cl={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function wl(e,t,n,r,i){let a=``,o=``,s=Math.floor(i/2)-1;return r-t>s&&(a=` ... `,t=r-s+a.length),n-r>s&&(o=` ...`,n=r+s-o.length),{str:a+e.slice(t,n).replace(/\t/g,`→`)+o,pos:r-t+a.length}}function Tl(e,t){return` `.repeat(Math.max(t-e.length,0))+e}function El(e,t){if(!e.buffer)return null;let n={...Cl,...t},r=/\r?\n|\r|\0/g,i=[0],a=[],o,s=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=i.length-2);s<0&&(s=i.length-1);let c=``,l=Math.min(e.line+n.linesAfter,a.length).toString().length,u=n.maxLength-(n.indent+l+3);for(let t=1;t<=n.linesBefore&&!(s-t<0);t++){let r=wl(e.buffer,i[s-t],a[s-t],e.position-(i[s]-i[s-t]),u);c=`${` `.repeat(n.indent)}${Tl((e.line-t+1).toString(),l)} | ${r.str}\n${c}`}let d=wl(e.buffer,i[s],a[s],e.position,u);c+=`${` `.repeat(n.indent)}${Tl((e.line+1).toString(),l)} | ${d.str}\n`,c+=`${`-`.repeat(n.indent+l+3+d.pos)}^\n`;for(let t=1;t<=n.linesAfter&&!(s+t>=a.length);t++){let r=wl(e.buffer,i[s+t],a[s+t],e.position-(i[s]-i[s+t]),u);c+=`${` `.repeat(n.indent)}${Tl((e.line+t+1).toString(),l)} | ${r.str}\n`}return c.replace(/\n$/,``)}function Dl(e,t){let n=``;return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`\n\n${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var Ol=class e extends Error{reason;mark;constructor(e,t){super(),this.name=`YAMLException`,this.reason=e,this.mark=t,this.message=Dl(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(e){return`${this.name}: ${Dl(this,e)}`}static throwAt(t,n,r,i=``){let a=0,o=0;for(let e=0;e<n;e++){let n=t.charCodeAt(e);n===10?(a++,o=e+1):n===13&&(a++,t.charCodeAt(e+1)===10&&e++,o=e+1)}let s={name:i,buffer:t,position:n,line:a,column:n-o};throw s.snippet=El(s),new e(r,s)}},G={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},K={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},kl={BLOCK:1,FLOW:2},q={CLIP:1,STRIP:2,KEEP:3},Al=-1;function jl(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var Ml=Array(256),Nl=Array(256);for(let e=0;e<256;e++)Ml[e]=+!!jl(e),Nl[e]=jl(e);function Pl(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Fl(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function Il(e){return e===120?2:e===117?4:8}function Ll(e,t,n){let r=0;for(;t<n;){let n=e.charCodeAt(t);if(n===10)r++,t++;else if(n===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(n===32||n===9)t++;else break}return{position:t,breaks:r}}function Rl(e){return e===1?` `:`
`.repeat(e-1)}function zl(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===10||t===13){r+=e.slice(a,o);let t=Ll(e,i,n);r+=Rl(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,o)}function Bl(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===39)r+=e.slice(a,i)+`'`,i+=2,a=o=i;else if(t===10||t===13){r+=e.slice(a,o);let t=Ll(e,i,n);r+=Rl(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function Vl(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===92){r+=e.slice(a,i),i++;let t=e.charCodeAt(i);if(t===10||t===13)i=Ll(e,i,n).position;else if(t<256&&Ml[t])r+=Nl[t],i++;else{let n=Il(t),a=0;for(;n>0;n--){i++;let t=Fl(e.charCodeAt(i));a=(a<<4)+t}r+=Pl(a),i++}a=o=i}else if(t===10||t===13){r+=e.slice(a,o);let t=Ll(e,i,n);r+=Rl(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function Hl(e,t,n,r,i,a){let o=r<0?0:r,s=e.slice(t,n).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),l=``,u=!1,d=0,f=!1;for(let e of c){let t=0;for(;t<o&&e.charCodeAt(t)===32;)t++;if(r<0||t>=e.length){d++;continue}let n=e.slice(o),i=n.charCodeAt(0);a?i===32||i===9?(f=!0,l+=`
`.repeat(u?1+d:d)):f?(f=!1,l+=`
`.repeat(d+1)):d===0?u&&(l+=` `):l+=`
`.repeat(d):l+=`
`.repeat(u?1+d:d),l+=n,u=!0,d=0}return i===q.KEEP?l+=`
`.repeat(u?1+d:d):i!==q.STRIP&&u&&(l+=`
`),l}function Ul(e,t){if(t.valueStart===Al)return``;let{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case K.SINGLE_QUOTED:return Bl(e,n,r);case K.DOUBLE_QUOTED:return Vl(e,n,r);case K.LITERAL_BLOCK:return Hl(e,n,r,t.indent,t.chomping,!1);case K.FOLDED_BLOCK:return Hl(e,n,r,t.indent,t.chomping,!0);default:return zl(e,n,r)}}var Wl=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});function Gl(e,t){if(e.startsWith(`!<`)&&e.endsWith(`>`))return decodeURIComponent(e.slice(2,-1));let n=e.indexOf(`!`,1),r=n===-1?`!`:e.slice(0,n+1),i=t?.[r]??Wl[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}var Kl=-1,ql=`tag:yaml.org,2002:merge`,Jl={filename:``,schema:xl,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function Yl(e){return`tagStart`in e&&e.tagStart!==Kl?e.tagStart:`anchorStart`in e&&e.anchorStart!==Kl?e.anchorStart:`valueStart`in e&&e.valueStart!==Kl?e.valueStart:`start`in e?e.start:0}function J(e,t){Ol.throwAt(e.source,e.position,t,e.filename)}function Xl(e,t,n,r){try{return n.finalize(r)}catch(n){if(n instanceof Ol)throw n;Ol.throwAt(e.source,t,n instanceof Error?n.message:String(n),e.filename)}}function Zl(e,t){let n=Ul(e.source,t),r=t.tagStart===Kl?``:e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==``){if(r===`!`)return{value:n,tag:i};let t=Gl(r,e.tagHandlers),a=e.schema.lookupScalarTag(t);if(a){let r=a.resolve(n,!0,t);return r===U&&J(e,`cannot resolve a node with !<${t}> explicit tag`),{value:r,tag:a}}let o=e.schema.lookupMappingTag(t)??e.schema.lookupSequenceTag(t);if(o){n!==``&&J(e,`cannot resolve a node with !<${t}> explicit tag`);let r=o.create(t);return{value:o.carrierIsResult?r:Xl(e,e.position,o,r),tag:o}}J(e,`unknown scalar tag !<${t}>`)}return t.style===K.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:i.resolve(n,!1,i.tagName),tag:i}}function Ql(e,t,n){let r=t.tagStart===Kl?``:e.source.slice(t.tagStart,t.tagEnd);return r===``||r===`!`?n:Gl(r,e.tagHandlers)}function $l(e){return e.nodeKind===`mapping`}function eu(e,t,n,r){for(let i of r.keys(n)){if(e.maxTotalMergeKeys!==-1&&++e.totalMergeKeys>e.maxTotalMergeKeys&&J(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`),t.tag.has(t.value,i))continue;let a=t.tag.addPair(t.value,i,r.get(n,i));a&&J(e,a),(t.overridable??=new Set).add(i)}}function tu(e,t,n,r){if(e.position=t.keyPosition,$l(r))eu(e,t,n,r);else if(r.nodeKind===`sequence`&&Array.isArray(n))for(let r of n){let n=e.nodeTags.get(r);n||J(e,`cannot merge mappings; the provided source object is unacceptable`),eu(e,t,r,n)}else J(e,`cannot merge mappings; the provided source object is unacceptable`)}function nu(e,t,n,r,i){if(e.position=t.keyPosition,t.keyIsMerge){tu(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!t.overridable?.has(n)&&J(e,`duplicated mapping key`);let a=t.tag.addPair(t.value,n,r);a&&J(e,a),t.overridable?.delete(n)}function ru(e,t,n){let r=e.frames[e.frames.length-1];if(r.kind===`document`)r.value=t,r.hasValue=!0;else if(r.kind===`sequence`){$l(n)&&e.nodeTags.set(t,n);let i=r.tag.addItem(r.value,t,r.index++);i&&J(e,i)}else if(r.hasKey){let i=r.key;r.key=void 0,r.hasKey=!1,nu(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0,r.keyIsMerge=n.tagName===ql}function iu(e,t,n,r,i){if(t.anchorStart!==Kl){let a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function au(e,t){let n={...Jl,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){let e=n.events[n.eventIndex++];switch(n.position=Yl(e),e.type){case G.DOCUMENT:n.anchors=new Map,n.nodeTags=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(let t of e.directives)t.kind===`tag`&&(n.tagHandlers[t.handle]=t.prefix);n.frames.push({kind:`document`,position:n.position,value:void 0,hasValue:!1});break;case G.SCALAR:{let{value:t,tag:r}=Zl(n,e);iu(n,e,t,r,!0),ru(n,t,r);break}case G.SEQUENCE:{let t=Ql(n,e,`tag:yaml.org,2002:seq`),r=n.schema.lookupSequenceTag(t);r||J(n,`unknown sequence tag !<${t}>`);let i=r.create(t),a=iu(n,e,i,r,r.carrierIsResult);n.frames.push({kind:`sequence`,position:n.position,value:i,tag:r,anchor:a,index:0});break}case G.MAPPING:{let t=Ql(n,e,`tag:yaml.org,2002:map`),r=n.schema.lookupMappingTag(t);r||J(n,`unknown mapping tag !<${t}>`);let i=r.create(t),a=iu(n,e,i,r,r.carrierIsResult);n.frames.push({kind:`mapping`,position:n.position,value:i,tag:r,anchor:a,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case G.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&J(n,`aliases exceeded maxAliases (${n.maxAliases})`);let t=n.source.slice(e.anchorStart,e.anchorEnd),r=n.anchors.get(t);r||J(n,`unidentified alias "${t}"`),r.isValueFinal||J(n,`recursive alias "${t}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),ru(n,r.value,r.tag);break}case G.POP:{let e=n.frames.pop();if(e.kind===`mapping`&&e.hasKey&&(n.position=e.keyPosition,J(n,`incomplete mapping pair in event stream`)),e.kind===`document`)n.documents.push(e.value);else{let t=e.tag.carrierIsResult?e.value:Xl(n,e.position,e.tag,e.value);e.anchor&&(e.anchor.value=t,e.anchor.isValueFinal=!0),ru(n,t,e.tag)}break}}}return n.documents}var Y=-1,ou=Object.prototype.hasOwnProperty,su=1,cu=2,lu=3,uu=4,du=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,fu=/[,\[\]{}]/,pu=/^(?:!|!!|![0-9A-Za-z-]+!)$/,mu=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,hu=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,gu=RegExp(`^(?:${mu})*$`),_u=RegExp(`^(?:${hu})+$`),vu=RegExp(`^(?:!(?:${mu})*|${hu}(?:${mu})*)$`),yu={filename:``,maxDepth:100};function bu(e,t,n){e.events.push({type:G.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function xu(e,t,n,r,i,a,o){e.events.push({type:G.SEQUENCE,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Su(e,t,n,r,i,a,o){e.events.push({type:G.MAPPING,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Cu(e,t){e.events.splice(t.eventsLength,0,{type:G.MAPPING,start:t.position,anchorStart:Y,anchorEnd:Y,tagStart:Y,tagEnd:Y,style:kl.FLOW})}function wu(e,t,n,r,i,a,o,s,c=q.CLIP,l=-1,u=!1){e.events.push({type:G.SCALAR,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:s,chomping:c,indent:l,fast:u})}function Tu(e,t,n){e.events.push({type:G.ALIAS,anchorStart:t,anchorEnd:n})}function Eu(e){e.events.push({type:G.POP})}function X(e){wu(e,Y,Y,Y,Y,Y,Y,K.PLAIN)}function Du(){return{anchorStart:Y,anchorEnd:Y,tagStart:Y,tagEnd:Y}}function Ou(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function ku(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function Z(e,t){Ol.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Q(e){return e===10||e===13}function Au(e){return e===9||e===32}function ju(e){return Au(e)||Q(e)}function Mu(e){return e===0||ju(e)}function Nu(e){return e===44||e===91||e===93||e===123||e===125}function Pu(e){return e>=48&&e<=57?e-48:-1}function Fu(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function Iu(e){return e===120?2:e===117?4:e===85?8:0}function Lu(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Ru(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function $(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||ju(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;Au(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!Q(r)&&r!==0);if(!Q(r))break;for(Ru(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function zu(e,t=e.position){let n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){let n=e.input.charCodeAt(t+3);return n===0||ju(n)}return!1}function Bu(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Q(t);)t=e.input.charCodeAt(++e.position)}function Vu(e,t,n){du.test(e.input.slice(t,n))&&Z(e,`the stream contains non-printable characters`)}function Hu(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==Y&&Z(e,`duplication of a tag property`);let r=e.position,i=!1,a=!1,o=`!`,s=e.input.charCodeAt(++e.position);s===60?(i=!0,s=e.input.charCodeAt(++e.position)):s===33&&(a=!0,o=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,l;if(i){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&Z(e,`unexpected end of the stream within a verbatim tag`),l=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!ju(s)&&!(n&&Nu(s));)s===33&&(a?Z(e,`tag suffix cannot contain exclamation marks`):(o=e.input.slice(c-1,e.position+1),pu.test(o)||Z(e,`named tag handle cannot contain such characters`),a=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(c,e.position),fu.test(l)&&Z(e,`tag suffix cannot contain flow indicator characters`)}return l&&!(i?gu.test(l):_u.test(l))&&Z(e,`tag name cannot contain such characters: ${l}`),!i&&o!==`!`&&o!==`!!`&&!ou.call(e.tagHandlers,o)&&Z(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function Uu(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==Y&&Z(e,`duplication of an anchor property`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ju(e.input.charCodeAt(e.position))&&!Nu(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&Z(e,`name of an anchor node must contain at least one character`),t.anchorStart=n,t.anchorEnd=e.position,!0}function Wu(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==Y||t.tagStart!==Y)&&Z(e,`alias node should not have any properties`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ju(e.input.charCodeAt(e.position))&&!Nu(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&Z(e,`name of an alias node must contain at least one character`),Tu(e,n,e.position),!0}function Gu(e,t){$(e,!1),e.lineIndent<t&&Z(e,`deficient indentation`)}function Ku(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}let t=e.position;return e.position++,wu(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,K.SINGLE_QUOTED,q.CLIP,-1,i),!0}Q(a)?(i=!1,Gu(e,t)):e.position===e.lineStart&&zu(e)?Z(e,`unexpected end of the document within a single quoted scalar`):a!==9&&a<32?Z(e,`expected valid JSON character`):e.position++}Z(e,`unexpected end of the stream within a single quoted scalar`)}function qu(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===34){let t=e.position;return e.position++,wu(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,K.DOUBLE_QUOTED,q.CLIP,-1,i),!0}if(a===92){i=!1;let n=e.input.charCodeAt(++e.position);if(Q(n))Gu(e,t);else if(Lu(n))e.position++;else{let t=Iu(n);for(t===0&&Z(e,`unknown escape sequence`);t-->0;)e.position++,Fu(e.input.charCodeAt(e.position))<0&&Z(e,`expected hexadecimal character`);e.position++}}else Q(a)?(i=!1,Gu(e,t)):e.position===e.lineStart&&zu(e)?Z(e,`unexpected end of the document within a double quoted scalar`):a!==9&&a<32?Z(e,`expected valid JSON character`):e.position++}Z(e,`unexpected end of the stream within a double quoted scalar`)}function Ju(e,t,n){let r=e.input.charCodeAt(e.position),i=q.CLIP,a=-1,o=!1;if(r!==124&&r!==62)return!1;let s=r===124?K.LITERAL_BLOCK:K.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let n=e.input.charCodeAt(e.position),r=Pu(n);if(n===43||n===45)i!==q.CLIP&&Z(e,`repeat of a chomping mode identifier`),i=n===43?q.KEEP:q.STRIP,e.position++;else if(r>=0)r===0&&Z(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),o&&Z(e,`repeat of an indentation width identifier`),a=t+r-1,o=!0,e.position++;else break}let c=!1;for(;Au(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&Bu(e),Q(e.input.charCodeAt(e.position))?Ru(e):e.input.charCodeAt(e.position)!==0&&Z(e,`a line break is expected`);let l=o?a:-1,u=0,d=e.position,f=e.position;for(;e.input.charCodeAt(e.position)!==0;){let n=e.position,r=0;for(;e.input.charCodeAt(n+r)===32;)r++;let i=e.input.charCodeAt(n+r);if(i===0){l>=0?r>l&&(f=n+r):r>0&&(f=n+r);break}if(n===e.lineStart&&zu(e,n))break;if(!o&&l===-1&&Q(i)&&(u=Math.max(u,r)),!o&&l===-1&&!Q(i)&&(i===9&&r<t&&(e.position=n+r,Z(e,`tab characters must not be used in indentation`)),r<u&&(e.position=n+r,Z(e,`bad indentation of a mapping entry`))),l===-1&&i!==0&&!Q(i)&&r<t){e.lineIndent=r,e.position=n+r;break}!o&&i!==0&&!Q(i)&&l===-1&&(l=r);let a=l===-1?t+1:l;if(i!==0&&!Q(i)&&r<a){e.lineIndent=r,e.position=n+r;break}Bu(e),f=e.position,Q(e.input.charCodeAt(e.position))&&(Ru(e),f=e.position)}return Vu(e,d,f),wu(e,d,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,s,i,l),!0}function Yu(e,t){let n=e.input.charCodeAt(e.position),r=t===su;if(n===0||ju(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&Nu(n))return!1;if(n===63||n===45){let t=e.input.charCodeAt(e.position+1);if(Mu(t)||r&&Nu(t))return!1}return!0}function Xu(e,t,n,r){if(!Yu(e,n))return!1;let i=e.position,a=e.position,o=e.input.charCodeAt(e.position),s=n===su,c=!1;for(;o!==0&&!(e.position===e.lineStart&&zu(e));){if(o===58){let t=e.input.charCodeAt(e.position+1);if(Mu(t)||s&&Nu(t))break}else if(o===35){if(ju(e.input.charCodeAt(e.position-1)))break}else if(s&&Nu(o))break;else if(Q(o)){let n=e.position,r=e.line,i=e.lineStart,a=e.lineIndent;if($(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=n,e.line=r,e.lineStart=i,e.lineIndent=a;break}Au(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a!==i&&(Vu(e,i,a),wu(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,K.PLAIN,q.CLIP,-1,!c),!0)}function Zu(e,t){let n=e.line;$(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&Z(e,`deficient indentation`)}function Qu(e,t,n){let r=e.input.charCodeAt(e.position),i=r===123,a=e.position,o=!0;if(r!==91&&r!==123)return!1;let s=i?125:93;for(i?Su(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kl.FLOW):xu(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kl.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Zu(e,t);let n=e.input.charCodeAt(e.position);if(n===s)return e.position++,Eu(e),!0;o?n===44&&Z(e,`expected the node content, but found ','`):Z(e,`missed comma between flow collection entries`);let r=!1,a=!1;n===63&&ju(e.input.charCodeAt(e.position+1))&&(r=a=!0,e.position+=1,Zu(e,t));let c=e.line,l=Ou(e),u=td(e,t,su,!1,!0);Zu(e,t),n=e.input.charCodeAt(e.position),(i||a||e.line===c)&&n===58?(r=!0,e.position++,Zu(e,t),i||Cu(e,l),u||X(e),td(e,t,su,!1,!0)||X(e),Zu(e,t),i||Eu(e)):i&&r?(u||X(e),X(e)):i?X(e):r&&(Cu(e,l),u||X(e),X(e),Eu(e)),n=e.input.charCodeAt(e.position),n===44?(o=!0,e.position++):o=!1}Z(e,`unexpected end of the stream within a flow collection`)}function $u(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Mu(e.input.charCodeAt(e.position+1)))return!1;for(xu(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,kl.BLOCK);e.input.charCodeAt(e.position)===45&&Mu(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Z(e,`tab characters must not be used in indentation`));let n=e.line;e.position++;let r=$(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Mu(e.input.charCodeAt(e.position+1))&&Z(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=t?X(e):td(e,t,lu,!1,!0),$(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&Z(e,`bad indentation of a sequence entry`),e.line===n&&e.input.charCodeAt(e.position)===45&&Mu(e.input.charCodeAt(e.position+1))&&Z(e,`bad indentation of a sequence entry`)}return Eu(e),!0}function ed(e,t,n,r){let i=!1,a=!1,o=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Z(e,`tab characters must not be used in indentation`));let l=e.input.charCodeAt(e.position+1),u=e.line;if((c===63||c===58)&&Mu(l))o||=(Su(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,kl.BLOCK),!0),c===63?(i&&X(e),a=!0,i=!0):i?i=!1:(X(e),a=!0,i=!1),e.position+=1,s=!0;else{i&&=(X(e),!1);let t=Ou(e);if(!td(e,n,cu,!1,!0))break;if(e.line===u){for(c=e.input.charCodeAt(e.position);Au(c);)c=e.input.charCodeAt(++e.position);if(c===58){if(c=e.input.charCodeAt(++e.position),Mu(c)||Z(e,`a whitespace character is expected after the key-value separator within a block mapping`),!o){for(ku(e,t),Su(e,t.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,kl.BLOCK),o=!0,td(e,n,cu,!1,!0),c=e.input.charCodeAt(e.position);Au(c);)c=e.input.charCodeAt(++e.position);e.position++}a=!0,i=!1,s=!1}else if(a)Z(e,`expected ':' after a mapping key`);else return r.anchorStart!==Y||r.tagStart!==Y?(ku(e,t),!1):!0}else if(a)Z(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return r.anchorStart!==Y||r.tagStart!==Y?(ku(e,t),!1):!0}if(td(e,t,uu,!0,s)&&(s=!1),i||(s&&=(X(e),!1)),$(e,!0),c=e.input.charCodeAt(e.position),(e.line===u||e.lineIndent>t)&&c!==0)Z(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return a?(i&&X(e),o&&Eu(e),!0):!1}function td(e,t,n,r,i,a=!0){e.depth>=e.maxDepth&&Z(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,s=!1,c=!1,l=null,u=Du(),d=n===uu||n===lu,f=d,p=d;if(r&&$(e,!0)&&(s=!0,o=e.lineIndent>t?1:e.lineIndent===t?0:-1),o===1)for(;;){let r=e.input.charCodeAt(e.position),i=Ou(e);if(s&&o!==1&&(r===33||r===38))break;if(s&&p&&(u.tagStart!==Y||u.anchorStart!==Y)&&(r===33||r===38)){let n=Ou(e),r=t+1;if(ed(e,e.position-e.lineStart,r,u)&&e.events[n.eventsLength]?.type===G.MAPPING)return e.depth--,!0;ku(e,n)}if(s&&(r===33&&u.tagStart!==Y||r===38&&u.anchorStart!==Y)||!Hu(e,u,n===su)&&!Uu(e,u))break;l===null&&(l=i),$(e,!0)?(s=!0,f=p,o=e.lineIndent>t?1:e.lineIndent===t?0:-1):f=!1}if(f&&=s||i,o===1||n===uu){let r=n===su||n===cu?t:t+1,i=e.position-e.lineStart;if(o===1){if(f&&($u(e,i,u)||ed(e,i,r,u))||Qu(e,r,u))c=!0;else{let t=e.input.charCodeAt(e.position);if(l!==null&&a&&p&&!f&&t!==124&&t!==62){let t=Ou(e),n=l.position-l.lineStart;ku(e,l),ed(e,n,r,Du())&&e.events[t.eventsLength]?.type===G.MAPPING?c=!0:ku(e,t)}!c&&(d&&Ju(e,r,u)||Ku(e,r,u)||qu(e,r,u)||Wu(e,u)||Xu(e,r,n,u))&&(c=!0)}}else o===0&&(c=f&&$u(e,i,u))}return d&&=!c,!c&&(u.anchorStart!==Y||u.tagStart!==Y||d)&&(wu(e,Y,Y,u.anchorStart,u.anchorEnd,u.tagStart,u.tagEnd,K.PLAIN),c=!0),e.depth--,c||u.anchorStart!==Y||u.tagStart!==Y}function nd(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ju(e.input.charCodeAt(e.position));)e.position++;let n=e.input.slice(t,e.position),r=[];for(n.length===0&&Z(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!Q(e.input.charCodeAt(e.position));){for(;Au(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Q(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ju(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(t,e.position))}if(Q(e.input.charCodeAt(e.position))&&Ru(e),n===`YAML`){e.directives.some(e=>e.kind===`yaml`)&&Z(e,`duplication of %YAML directive`),r.length!==1&&Z(e,`YAML directive accepts exactly one argument`);let t=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);t===null&&Z(e,`ill-formed argument of the YAML directive`),parseInt(t[1],10)!==1&&Z(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:r[0]})}else if(n===`TAG`){r.length!==2&&Z(e,`TAG directive accepts exactly two arguments`);let[t,n]=r;pu.test(t)||Z(e,`ill-formed tag handle (first argument) of the TAG directive`),ou.call(e.tagHandlers,t)&&Z(e,`there is a previously declared suffix for "${t}" tag handle`),vu.test(n)||Z(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[t]=n,e.directives.push({kind:`tag`,handle:t,prefix:n})}return!0}function rd(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for($(e,!0);nd(e);)t=!0,$(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Mu(e.input.charCodeAt(e.position+3))){n=!0;let t=e.line;e.position+=3,$(e,!0),i=e.line>t}else t&&Z(e,`directives end mark is expected`);let a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&zu(e)){e.position+=3,$(e,!0);return}if(bu(e,n,!1),td(e,e.lineIndent-1,uu,!1,i,i)||X(e),$(e,!0),e.position===e.lineStart&&zu(e)&&(r=e.input.charCodeAt(e.position)===46,r)){let t=e.line;e.position+=3,$(e,!0),e.line===t&&e.position<e.length&&Z(e,`end of the stream or a document separator is expected`)}let o=e.events[a];o?.type===G.DOCUMENT&&(o.explicitEnd=r),Eu(e),!r&&e.position<e.length&&!(e.position===e.lineStart&&zu(e))&&Z(e,`end of the stream or a document separator is expected`)}function id(e,t){let n=e.length,r={...yu,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf(`\0`);for(i!==-1&&Ol.throwAt(e,i,`null byte is not allowed in input`,r.filename),r.input.charCodeAt(r.position)===65279&&r.position++;r.position<r.length&&($(r,!0),!(r.position>=r.length));){let e=r.position;rd(r),r.position===e&&Z(r,`can not read a document`)}return r.events}var ad={...yu,...Jl};function od(e,t={}){let n={...ad,...t},r=String(e),i=Object.keys(yu),a=Object.keys(Jl);return au(id(r,dl(n,i)),{...dl(n,a),source:r})}function sd(e,t){let n=od(e,t);if(n.length===0)throw new Ol(`expected a document, but the input is empty`);if(n.length===1)return n[0];throw new Ol(`expected a single document in the stream, but found more`)}G.DOCUMENT,G.SEQUENCE,G.MAPPING,G.SCALAR,G.ALIAS,G.POP,K.PLAIN,K.SINGLE_QUOTED,K.DOUBLE_QUOTED,K.LITERAL_BLOCK,K.FOLDED_BLOCK,kl.BLOCK,kl.FLOW,q.CLIP,q.STRIP,q.KEEP;var cd=Object.assign({"/docs/openapi/asserted_distribution.yaml":Ds,"/docs/openapi/biological_association.yaml":Os,"/docs/openapi/biological_associations_graph.yaml":ks,"/docs/openapi/biological_relationship.yaml":As,"/docs/openapi/cached_map.yaml":js,"/docs/openapi/citation.yaml":Ms,"/docs/openapi/collecting_event.yaml":Ns,"/docs/openapi/collection_object.yaml":Ps,"/docs/openapi/common_name.yaml":Fs,"/docs/openapi/content.yaml":Is,"/docs/openapi/controlled_vocabulary_term.yaml":Ls,"/docs/openapi/conveyance.yaml":Rs,"/docs/openapi/data_attribute.yaml":zs,"/docs/openapi/depiction.yaml":Bs,"/docs/openapi/download.yaml":Vs,"/docs/openapi/dwc_occurrence.yaml":Hs,"/docs/openapi/field_occurrence.yaml":Us,"/docs/openapi/identifier.yaml":Ws,"/docs/openapi/image.yaml":Gs,"/docs/openapi/lead.yaml":Ks,"/docs/openapi/news.yaml":qs,"/docs/openapi/note.yaml":Js,"/docs/openapi/observation.yaml":Ys,"/docs/openapi/observation_matrix.yaml":Xs,"/docs/openapi/otu.yaml":Zs,"/docs/openapi/person.yaml":Qs,"/docs/openapi/sound.yaml":$s,"/docs/openapi/source.yaml":ec,"/docs/openapi/tag.yaml":tc,"/docs/openapi/taxon_determination.yaml":nc,"/docs/openapi/taxon_name.yaml":rc,"/docs/openapi/taxon_name_classification.yaml":ic,"/docs/openapi/taxon_name_relationship.yaml":ac,"/docs/openapi/utility.yaml":oc}),ld=new Map;function ud(e){return e.replace(/_/g,` `).replace(/\bdwc\b/gi,`DWC`).replace(/\b\w/g,e=>e.toUpperCase())}var dd=Object.keys(cd).map(e=>{let t=e.split(`/`).pop(),n=t.replace(`.yaml`,``);return{id:n,filename:t,label:ud(n)}}).sort((e,t)=>e.label.localeCompare(t.label));function fd(){let e=M(null),t=M(null);function n(n){t.value=null;let r=`/docs/openapi/${n}`;if(ld.has(r)){e.value=ld.get(r);return}let i=cd[r];if(!i){t.value=`Spec file not found: ${n}`,e.value=null;return}try{let t=sd(i);t.externalDocs||={description:`Data Model Documentation`,url:`https://docs.taxonworks.org/develop/Data/models.html#${n.replace(`.yaml`,``).replaceAll(`_`,`-`)}`},ld.set(r,t),e.value=t}catch(r){t.value=`Failed to parse ${n}: ${r.message}`,e.value=null}}return{spec:e,error:t,loadSpec:n,resources:dd}}var pd={class:`app-body`},md={key:0,class:`markdown-page`};zo(Ho({__name:`App`,setup(e){let{spec:t,error:n,resources:r,loadSpec:i}=fd();function a(){let e=new URLSearchParams(window.location.search).get(`resource`);return e===`overview`?`overview`:e&&r.find(t=>t.id===e)?e:`overview`}let o=M(a());return Hn(o,e=>{let a=new URL(window.location);if(e===`overview`){t.value=null,n.value=null,a.searchParams.delete(`resource`),window.history.replaceState({},``,a);return}let o=r.find(t=>t.id===e);o&&(i(o.filename),a.searchParams.set(`resource`,e),window.history.replaceState({},``,a))}),wr(()=>{let e=r.find(e=>e.id===o.value);e&&i(e.filename)}),(e,i)=>(R(),z(I,null,[V(es),B(`div`,pd,[V(os,{modelValue:o.value,"onUpdate:modelValue":i[0]||=e=>o.value=e,resources:Qt(r)},null,8,[`modelValue`,`resources`]),o.value===`overview`?(R(),z(`div`,md,[V(Qt(Es))])):(R(),na(ws,{key:1,spec:Qt(t),error:Qt(n)},null,8,[`spec`,`error`]))])],64))}},[[`__scopeId`,`data-v-dcb031e9`]])).mount(`#app`);