import{r as Hs}from"./swagger-ui-dist-DtjOS617.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function _r(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const D={},_n=[],Ie=()=>{},Ki=()=>!1,St=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xr=e=>e.startsWith("onUpdate:"),Z=Object.assign,vr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ws=Object.prototype.hasOwnProperty,L=(e,n)=>Ws.call(e,n),P=Array.isArray,xn=e=>Zn(e)==="[object Map]",Hi=e=>Zn(e)==="[object Set]",Qr=e=>Zn(e)==="[object Date]",k=e=>typeof e=="function",Y=e=>typeof e=="string",Oe=e=>typeof e=="symbol",B=e=>e!==null&&typeof e=="object",Wi=e=>(B(e)||k(e))&&k(e.then)&&k(e.catch),Xi=Object.prototype.toString,Zn=e=>Xi.call(e),Xs=e=>Zn(e).slice(8,-1),Yi=e=>Zn(e)==="[object Object]",Tr=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ct=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Ys=/-\w/g,Le=Ct(e=>e.replace(Ys,n=>n.slice(1).toUpperCase())),zs=/\B([A-Z])/g,en=Ct(e=>e.replace(zs,"-$1").toLowerCase()),zi=Ct(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ut=Ct(e=>e?`on${zi(e)}`:""),ue=(e,n)=>!Object.is(e,n),lt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Ji=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},jr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Zr;const Et=()=>Zr||(Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(e){if(P(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=Y(r)?ea(r):wr(r);if(i)for(const o in i)n[o]=i[o]}return n}else if(Y(e)||B(e))return e}const Js=/;(?![^(]*\))/g,Qs=/:([^]+)/,Zs=/\/\*[^]*?\*\//g;function ea(e){const n={};return e.replace(Zs,"").split(Js).forEach(t=>{if(t){const r=t.split(Qs);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Rt(e){let n="";if(Y(e))n=e;else if(P(e))for(let t=0;t<e.length;t++){const r=Rt(e[t]);r&&(n+=r+" ")}else if(B(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const na="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ta=_r(na);function Qi(e){return!!e||e===""}function ra(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=Ar(e[r],n[r]);return t}function Ar(e,n){if(e===n)return!0;let t=Qr(e),r=Qr(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Oe(e),r=Oe(n),t||r)return e===n;if(t=P(e),r=P(n),t||r)return t&&r?ra(e,n):!1;if(t=B(e),r=B(n),t||r){if(!t||!r)return!1;const i=Object.keys(e).length,o=Object.keys(n).length;if(i!==o)return!1;for(const s in e){const a=e.hasOwnProperty(s),p=n.hasOwnProperty(s);if(a&&!p||!a&&p||!Ar(e[s],n[s]))return!1}}return String(e)===String(n)}const Zi=e=>!!(e&&e.__v_isRef===!0),Sr=e=>Y(e)?e:e==null?"":P(e)||B(e)&&(e.toString===Xi||!k(e.toString))?Zi(e)?Sr(e.value):JSON.stringify(e,eo,2):String(e),eo=(e,n)=>Zi(n)?eo(e,n.value):xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],o)=>(t[Bt(r,o)+" =>"]=i,t),{})}:Hi(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Bt(t))}:Oe(n)?Bt(n):B(n)&&!P(n)&&!Yi(n)?String(n):n,Bt=(e,n="")=>{var t;return Oe(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let de;class ia{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=de,!n&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=de;try{return de=this,n()}finally{de=t}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){this._on>0&&--this._on===0&&(de=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function oa(){return de}let K;const Mt=new WeakSet;class no{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mt.has(this)&&(Mt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ro(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ei(this),io(this);const n=K,t=xe;K=this,xe=!0;try{return this.fn()}finally{oo(this),K=n,xe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Rr(n);this.deps=this.depsTail=void 0,ei(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let to=0,kn,Fn;function ro(e,n=!1){if(e.flags|=8,n){e.next=Fn,Fn=e;return}e.next=kn,kn=e}function Cr(){to++}function Er(){if(--to>0)return;if(Fn){let n=Fn;for(Fn=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;kn;){let n=kn;for(kn=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function io(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function oo(e){let n,t=e.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Rr(r),sa(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=n,e.depsTail=t}function rr(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(so(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function so(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mn)||(e.globalVersion=Mn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rr(e))))return;e.flags|=2;const n=e.dep,t=K,r=xe;K=e,xe=!0;try{io(e);const i=e.fn(e._value);(n.version===0||ue(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{K=t,xe=r,oo(e),e.flags&=-3}}function Rr(e,n=!1){const{dep:t,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Rr(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function sa(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let xe=!0;const ao=[];function Ue(){ao.push(xe),xe=!1}function Be(){const e=ao.pop();xe=e===void 0?!0:e}function ei(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=K;K=void 0;try{n()}finally{K=t}}}let Mn=0;class aa{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class It{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!K||!xe||K===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==K)t=this.activeLink=new aa(K,this),K.deps?(t.prevDep=K.depsTail,K.depsTail.nextDep=t,K.depsTail=t):K.deps=K.depsTail=t,po(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=K.depsTail,t.nextDep=void 0,K.depsTail.nextDep=t,K.depsTail=t,K.deps===t&&(K.deps=r)}return t}trigger(n){this.version++,Mn++,this.notify(n)}notify(n){Cr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Er()}}}function po(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)po(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ir=new WeakMap,pn=Symbol(""),or=Symbol(""),Vn=Symbol("");function ee(e,n,t){if(xe&&K){let r=ir.get(e);r||ir.set(e,r=new Map);let i=r.get(t);i||(r.set(t,i=new It),i.map=r,i.key=t),i.track()}}function $e(e,n,t,r,i,o){const s=ir.get(e);if(!s){Mn++;return}const a=p=>{p&&p.trigger()};if(Cr(),n==="clear")s.forEach(a);else{const p=P(e),d=p&&Tr(t);if(p&&t==="length"){const l=Number(r);s.forEach((u,f)=>{(f==="length"||f===Vn||!Oe(f)&&f>=l)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),d&&a(s.get(Vn)),n){case"add":p?d&&a(s.get("length")):(a(s.get(pn)),xn(e)&&a(s.get(or)));break;case"delete":p||(a(s.get(pn)),xn(e)&&a(s.get(or)));break;case"set":xn(e)&&a(s.get(pn));break}}Er()}function un(e){const n=G(e);return n===e?n:(ee(n,"iterate",Vn),he(e)?n:n.map(ve))}function Pt(e){return ee(e=G(e),"iterate",Vn),e}function Xe(e,n){return Me(e)?jn(cn(e)?ve(n):n):ve(n)}const pa={__proto__:null,[Symbol.iterator](){return Vt(this,Symbol.iterator,e=>Xe(this,e))},concat(...e){return un(this).concat(...e.map(n=>P(n)?un(n):n))},entries(){return Vt(this,"entries",e=>(e[1]=Xe(this,e[1]),e))},every(e,n){return Ne(this,"every",e,n,void 0,arguments)},filter(e,n){return Ne(this,"filter",e,n,t=>t.map(r=>Xe(this,r)),arguments)},find(e,n){return Ne(this,"find",e,n,t=>Xe(this,t),arguments)},findIndex(e,n){return Ne(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Ne(this,"findLast",e,n,t=>Xe(this,t),arguments)},findLastIndex(e,n){return Ne(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Ne(this,"forEach",e,n,void 0,arguments)},includes(...e){return Kt(this,"includes",e)},indexOf(...e){return Kt(this,"indexOf",e)},join(e){return un(this).join(e)},lastIndexOf(...e){return Kt(this,"lastIndexOf",e)},map(e,n){return Ne(this,"map",e,n,void 0,arguments)},pop(){return In(this,"pop")},push(...e){return In(this,"push",e)},reduce(e,...n){return ni(this,"reduce",e,n)},reduceRight(e,...n){return ni(this,"reduceRight",e,n)},shift(){return In(this,"shift")},some(e,n){return Ne(this,"some",e,n,void 0,arguments)},splice(...e){return In(this,"splice",e)},toReversed(){return un(this).toReversed()},toSorted(e){return un(this).toSorted(e)},toSpliced(...e){return un(this).toSpliced(...e)},unshift(...e){return In(this,"unshift",e)},values(){return Vt(this,"values",e=>Xe(this,e))}};function Vt(e,n,t){const r=Pt(e),i=r[n]();return r!==e&&!he(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=t(o.value)),o}),i}const ca=Array.prototype;function Ne(e,n,t,r,i,o){const s=Pt(e),a=s!==e&&!he(e),p=s[n];if(p!==ca[n]){const u=p.apply(e,o);return a?ve(u):u}let d=t;s!==e&&(a?d=function(u,f){return t.call(this,Xe(e,u),f,e)}:t.length>2&&(d=function(u,f){return t.call(this,u,f,e)}));const l=p.call(s,d,r);return a&&i?i(l):l}function ni(e,n,t,r){const i=Pt(e);let o=t;return i!==e&&(he(e)?t.length>3&&(o=function(s,a,p){return t.call(this,s,a,p,e)}):o=function(s,a,p){return t.call(this,s,Xe(e,a),p,e)}),i[n](o,...r)}function Kt(e,n,t){const r=G(e);ee(r,"iterate",Vn);const i=r[n](...t);return(i===-1||i===!1)&&qr(t[0])?(t[0]=G(t[0]),r[n](...t)):i}function In(e,n,t=[]){Ue(),Cr();const r=G(e)[n].apply(e,t);return Er(),Be(),r}const la=_r("__proto__,__v_isRef,__isVue"),co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Oe));function da(e){Oe(e)||(e=String(e));const n=G(this);return ee(n,"has",e),n.hasOwnProperty(e)}class lo{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?va:fo:o?yo:mo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const s=P(n);if(!i){let p;if(s&&(p=pa[t]))return p;if(t==="hasOwnProperty")return da}const a=Reflect.get(n,t,ne(n)?n:r);if((Oe(t)?co.has(t):la(t))||(i||ee(n,"get",t),o))return a;if(ne(a)){const p=s&&Tr(t)?a:a.value;return i&&B(p)?ar(p):p}return B(a)?i?ar(a):Pr(a):a}}class uo extends lo{constructor(n=!1){super(!1,n)}set(n,t,r,i){let o=n[t];const s=P(n)&&Tr(t);if(!this._isShallow){const d=Me(o);if(!he(r)&&!Me(r)&&(o=G(o),r=G(r)),!s&&ne(o)&&!ne(r))return d||(o.value=r),!0}const a=s?Number(t)<n.length:L(n,t),p=Reflect.set(n,t,r,ne(n)?n:i);return n===G(i)&&(a?ue(r,o)&&$e(n,"set",t,r):$e(n,"add",t,r)),p}deleteProperty(n,t){const r=L(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&$e(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!Oe(t)||!co.has(t))&&ee(n,"has",t),r}ownKeys(n){return ee(n,"iterate",P(n)?"length":pn),Reflect.ownKeys(n)}}class ua extends lo{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const ma=new uo,ya=new ua,fa=new uo(!0);const sr=e=>e,at=e=>Reflect.getPrototypeOf(e);function ga(e,n,t){return function(...r){const i=this.__v_raw,o=G(i),s=xn(o),a=e==="entries"||e===Symbol.iterator&&s,p=e==="keys"&&s,d=i[e](...r),l=t?sr:n?jn:ve;return!n&&ee(o,"iterate",p?or:pn),Z(Object.create(d),{next(){const{value:u,done:f}=d.next();return f?{value:u,done:f}:{value:a?[l(u[0]),l(u[1])]:l(u),done:f}}})}}function pt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function ha(e,n){const t={get(i){const o=this.__v_raw,s=G(o),a=G(i);e||(ue(i,a)&&ee(s,"get",i),ee(s,"get",a));const{has:p}=at(s),d=n?sr:e?jn:ve;if(p.call(s,i))return d(o.get(i));if(p.call(s,a))return d(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&ee(G(i),"iterate",pn),i.size},has(i){const o=this.__v_raw,s=G(o),a=G(i);return e||(ue(i,a)&&ee(s,"has",i),ee(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,p=G(a),d=n?sr:e?jn:ve;return!e&&ee(p,"iterate",pn),a.forEach((l,u)=>i.call(o,d(l),d(u),s))}};return Z(t,e?{add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear")}:{add(i){!n&&!he(i)&&!Me(i)&&(i=G(i));const o=G(this);return at(o).has.call(o,i)||(o.add(i),$e(o,"add",i,i)),this},set(i,o){!n&&!he(o)&&!Me(o)&&(o=G(o));const s=G(this),{has:a,get:p}=at(s);let d=a.call(s,i);d||(i=G(i),d=a.call(s,i));const l=p.call(s,i);return s.set(i,o),d?ue(o,l)&&$e(s,"set",i,o):$e(s,"add",i,o),this},delete(i){const o=G(this),{has:s,get:a}=at(o);let p=s.call(o,i);p||(i=G(i),p=s.call(o,i)),a&&a.call(o,i);const d=o.delete(i);return p&&$e(o,"delete",i,void 0),d},clear(){const i=G(this),o=i.size!==0,s=i.clear();return o&&$e(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ga(i,e,n)}),t}function Ir(e,n){const t=ha(e,n);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(L(t,i)&&i in r?t:r,i,o)}const ba={get:Ir(!1,!1)},_a={get:Ir(!1,!0)},xa={get:Ir(!0,!1)};const mo=new WeakMap,yo=new WeakMap,fo=new WeakMap,va=new WeakMap;function Ta(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ja(e){return e.__v_skip||!Object.isExtensible(e)?0:Ta(Xs(e))}function Pr(e){return Me(e)?e:Or(e,!1,ma,ba,mo)}function wa(e){return Or(e,!1,fa,_a,yo)}function ar(e){return Or(e,!0,ya,xa,fo)}function Or(e,n,t,r,i){if(!B(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=ja(e);if(o===0)return e;const s=i.get(e);if(s)return s;const a=new Proxy(e,o===2?r:t);return i.set(e,a),a}function cn(e){return Me(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Me(e){return!!(e&&e.__v_isReadonly)}function he(e){return!!(e&&e.__v_isShallow)}function qr(e){return e?!!e.__v_raw:!1}function G(e){const n=e&&e.__v_raw;return n?G(n):e}function Aa(e){return!L(e,"__v_skip")&&Object.isExtensible(e)&&Ji(e,"__v_skip",!0),e}const ve=e=>B(e)?Pr(e):e,jn=e=>B(e)?ar(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function Kn(e){return Sa(e,!1)}function Sa(e,n){return ne(e)?e:new Ca(e,n)}class Ca{constructor(n,t){this.dep=new It,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:G(n),this._value=t?n:ve(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||he(n)||Me(n);n=r?n:G(n),ue(n,t)&&(this._rawValue=n,this._value=r?n:ve(n),this.dep.trigger())}}function $n(e){return ne(e)?e.value:e}const Ea={get:(e,n,t)=>n==="__v_raw"?e:$n(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return ne(i)&&!ne(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function go(e){return cn(e)?e:new Proxy(e,Ea)}class Ra{constructor(n){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new It,{get:r,set:i}=n(t.track.bind(t),t.trigger.bind(t));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(n){this._set(n)}}function Ia(e){return new Ra(e)}class Pa{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new It(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return ro(this,!0),!0}get value(){const n=this.dep.track();return so(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Oa(e,n,t=!1){let r,i;return k(e)?r=e:(r=e.get,i=e.set),new Pa(r,i,t)}const ct={},yt=new WeakMap;let an;function qa(e,n=!1,t=an){if(t){let r=yt.get(t);r||yt.set(t,r=[]),r.push(e)}}function Na(e,n,t=D){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:p}=t,d=O=>i?O:he(O)||i===!1||i===0?De(O,1):De(O);let l,u,f,g,S=!1,T=!1;if(ne(e)?(u=()=>e.value,S=he(e)):cn(e)?(u=()=>d(e),S=!0):P(e)?(T=!0,S=e.some(O=>cn(O)||he(O)),u=()=>e.map(O=>{if(ne(O))return O.value;if(cn(O))return d(O);if(k(O))return p?p(O,2):O()})):k(e)?n?u=p?()=>p(e,2):e:u=()=>{if(f){Ue();try{f()}finally{Be()}}const O=an;an=l;try{return p?p(e,3,[g]):e(g)}finally{an=O}}:u=Ie,n&&i){const O=u,z=i===!0?1/0:i;u=()=>De(O(),z)}const N=oa(),F=()=>{l.stop(),N&&N.active&&vr(N.effects,l)};if(o&&n){const O=n;n=(...z)=>{O(...z),F()}}let C=T?new Array(e.length).fill(ct):ct;const H=O=>{if(!(!(l.flags&1)||!l.dirty&&!O))if(n){const z=l.run();if(i||S||(T?z.some((He,Te)=>ue(He,C[Te])):ue(z,C))){f&&f();const He=an;an=l;try{const Te=[z,C===ct?void 0:T&&C[0]===ct?[]:C,g];C=z,p?p(n,3,Te):n(...Te)}finally{an=He}}}else l.run()};return a&&a(H),l=new no(u),l.scheduler=s?()=>s(H,!1):H,g=O=>qa(O,!1,l),f=l.onStop=()=>{const O=yt.get(l);if(O){if(p)p(O,4);else for(const z of O)z();yt.delete(l)}},n?r?H(!0):C=l.run():s?s(H.bind(null,!0),!0):l.run(),F.pause=l.pause.bind(l),F.resume=l.resume.bind(l),F.stop=F,F}function De(e,n=1/0,t){if(n<=0||!B(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ne(e))De(e.value,n,t);else if(P(e))for(let r=0;r<e.length;r++)De(e[r],n,t);else if(Hi(e)||xn(e))e.forEach(r=>{De(r,n,t)});else if(Yi(e)){for(const r in e)De(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&De(e[r],n,t)}return e}function et(e,n,t,r){try{return r?e(...r):e()}catch(i){Ot(i,n,t)}}function qe(e,n,t,r){if(k(e)){const i=et(e,n,t,r);return i&&Wi(i)&&i.catch(o=>{Ot(o,n,t)}),i}if(P(e)){const i=[];for(let o=0;o<e.length;o++)i.push(qe(e[o],n,t,r));return i}}function Ot(e,n,t,r=!0){const i=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||D;if(n){let a=n.parent;const p=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,p,d)===!1)return}a=a.parent}if(o){Ue(),et(o,null,10,[e,p,d]),Be();return}}ka(e,t,i,r,s)}function ka(e,n,t,r=!0,i=!1){if(i)throw e;console.error(e)}const oe=[];let Ee=-1;const vn=[];let Ye=null,yn=0;const ho=Promise.resolve();let ft=null;function Fa(e){const n=ft||ho;return e?n.then(this?e.bind(this):e):n}function $a(e){let n=Ee+1,t=oe.length;for(;n<t;){const r=n+t>>>1,i=oe[r],o=Hn(i);o<e||o===e&&i.flags&2?n=r+1:t=r}return n}function Nr(e){if(!(e.flags&1)){const n=Hn(e),t=oe[oe.length-1];!t||!(e.flags&2)&&n>=Hn(t)?oe.push(e):oe.splice($a(n),0,e),e.flags|=1,bo()}}function bo(){ft||(ft=ho.then(xo))}function Da(e){P(e)?vn.push(...e):Ye&&e.id===-1?Ye.splice(yn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),bo()}function ti(e,n,t=Ee+1){for(;t<oe.length;t++){const r=oe[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;oe.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _o(e){if(vn.length){const n=[...new Set(vn)].sort((t,r)=>Hn(t)-Hn(r));if(vn.length=0,Ye){Ye.push(...n);return}for(Ye=n,yn=0;yn<Ye.length;yn++){const t=Ye[yn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ye=null,yn=0}}const Hn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xo(e){try{for(Ee=0;Ee<oe.length;Ee++){const n=oe[Ee];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),et(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ee<oe.length;Ee++){const n=oe[Ee];n&&(n.flags&=-2)}Ee=-1,oe.length=0,_o(),ft=null,(oe.length||vn.length)&&xo()}}let ge=null,vo=null;function gt(e){const n=ge;return ge=e,vo=e&&e.type.__scopeId||null,n}function Ga(e,n=ge,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&ui(-1);const o=gt(n);let s;try{s=e(...i)}finally{gt(o),r._d&&ui(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function La(e,n){if(ge===null)return e;const t=Ft(ge),r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[o,s,a,p=D]=n[i];o&&(k(o)&&(o={mounted:o,updated:o}),o.deep&&De(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:p}))}return e}function on(e,n,t,r){const i=e.dirs,o=n&&n.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let p=a.dir[r];p&&(Ue(),qe(p,t,8,[e.el,a,e,n]),Be())}}function Ua(e,n){if(se){let t=se.provides;const r=se.parent&&se.parent.provides;r===t&&(t=se.provides=Object.create(r)),t[e]=n}}function dt(e,n,t=!1){const r=zo();if(r||Tn){let i=Tn?Tn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&k(n)?n.call(r&&r.proxy):n}}const Ba=Symbol.for("v-scx"),Ma=()=>dt(Ba);function Va(e,n){return kr(e,null,{flush:"sync"})}function Dn(e,n,t){return kr(e,n,t)}function kr(e,n,t=D){const{immediate:r,deep:i,flush:o,once:s}=t,a=Z({},t),p=n&&r||!n&&o!=="post";let d;if(Xn){if(o==="sync"){const g=Ma();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!p){const g=()=>{};return g.stop=Ie,g.resume=Ie,g.pause=Ie,g}}const l=se;a.call=(g,S,T)=>qe(g,l,S,T);let u=!1;o==="post"?a.scheduler=g=>{le(g,l&&l.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(g,S)=>{S?g():Nr(g)}),a.augmentJob=g=>{n&&(g.flags|=4),u&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const f=Na(e,n,a);return Xn&&(d?d.push(f):p&&f()),f}function Ka(e,n,t){const r=this.proxy,i=Y(e)?e.includes(".")?To(r,e):()=>r[e]:e.bind(r,r);let o;k(n)?o=n:(o=n.handler,t=n);const s=nt(this),a=kr(i,o.bind(r),t);return s(),a}function To(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Ha=Symbol("_vte"),Wa=e=>e.__isTeleport,Xa=Symbol("_leaveCb");function Fr(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Fr(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function jo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ri(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ht=new WeakMap;function Gn(e,n,t,r,i=!1){if(P(e)){e.forEach((T,N)=>Gn(T,n&&(P(n)?n[N]:n),t,r,i));return}if(Ln(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gn(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?Ft(r.component):r.el,s=i?null:o,{i:a,r:p}=e,d=n&&n.r,l=a.refs===D?a.refs={}:a.refs,u=a.setupState,f=G(u),g=u===D?Ki:T=>ri(l,T)?!1:L(f,T),S=(T,N)=>!(N&&ri(l,N));if(d!=null&&d!==p){if(ii(n),Y(d))l[d]=null,g(d)&&(u[d]=null);else if(ne(d)){const T=n;S(d,T.k)&&(d.value=null),T.k&&(l[T.k]=null)}}if(k(p))et(p,a,12,[s,l]);else{const T=Y(p),N=ne(p);if(T||N){const F=()=>{if(e.f){const C=T?g(p)?u[p]:l[p]:S()||!e.k?p.value:l[e.k];if(i)P(C)&&vr(C,o);else if(P(C))C.includes(o)||C.push(o);else if(T)l[p]=[o],g(p)&&(u[p]=l[p]);else{const H=[o];S(p,e.k)&&(p.value=H),e.k&&(l[e.k]=H)}}else T?(l[p]=s,g(p)&&(u[p]=s)):N&&(S(p,e.k)&&(p.value=s),e.k&&(l[e.k]=s))};if(s){const C=()=>{F(),ht.delete(e)};C.id=-1,ht.set(e,C),le(C,t)}else ii(e),F()}}}function ii(e){const n=ht.get(e);n&&(n.flags|=8,ht.delete(e))}Et().requestIdleCallback;Et().cancelIdleCallback;const Ln=e=>!!e.type.__asyncLoader,wo=e=>e.type.__isKeepAlive;function Ya(e,n){Ao(e,"a",n)}function za(e,n){Ao(e,"da",n)}function Ao(e,n,t=se){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(qt(n,r,t),t){let i=t.parent;for(;i&&i.parent;)wo(i.parent.vnode)&&Ja(r,n,t,i),i=i.parent}}function Ja(e,n,t,r){const i=qt(n,e,r,!0);Eo(()=>{vr(r[n],i)},t)}function qt(e,n,t=se,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{Ue();const a=nt(t),p=qe(n,t,e,s);return a(),Be(),p});return r?i.unshift(o):i.push(o),o}}const Ke=e=>(n,t=se)=>{(!Xn||e==="sp")&&qt(e,(...r)=>n(...r),t)},Qa=Ke("bm"),So=Ke("m"),Za=Ke("bu"),ep=Ke("u"),Co=Ke("bum"),Eo=Ke("um"),np=Ke("sp"),tp=Ke("rtg"),rp=Ke("rtc");function ip(e,n=se){qt("ec",e,n)}const op=Symbol.for("v-ndc");function sp(e,n,t,r){let i;const o=t,s=P(e);if(s||Y(e)){const a=s&&cn(e);let p=!1,d=!1;a&&(p=!he(e),d=Me(e),e=Pt(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=n(p?d?jn(ve(e[l])):ve(e[l]):e[l],l,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,o)}else if(B(e))if(e[Symbol.iterator])i=Array.from(e,(a,p)=>n(a,p,void 0,o));else{const a=Object.keys(e);i=new Array(a.length);for(let p=0,d=a.length;p<d;p++){const l=a[p];i[p]=n(e[l],l,p,o)}}else i=[];return i}const pr=e=>e?Jo(e)?Ft(e):pr(e.parent):null,Un=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Io(e),$forceUpdate:e=>e.f||(e.f=()=>{Nr(e.update)}),$nextTick:e=>e.n||(e.n=Fa.bind(e.proxy)),$watch:e=>Ka.bind(e)}),Ht=(e,n)=>e!==D&&!e.__isScriptSetup&&L(e,n),ap={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:p}=e;if(n[0]!=="$"){const f=s[n];if(f!==void 0)switch(f){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(Ht(r,n))return s[n]=1,r[n];if(i!==D&&L(i,n))return s[n]=2,i[n];if(L(o,n))return s[n]=3,o[n];if(t!==D&&L(t,n))return s[n]=4,t[n];cr&&(s[n]=0)}}const d=Un[n];let l,u;if(d)return n==="$attrs"&&ee(e.attrs,"get",""),d(e);if((l=a.__cssModules)&&(l=l[n]))return l;if(t!==D&&L(t,n))return s[n]=4,t[n];if(u=p.config.globalProperties,L(u,n))return u[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return Ht(i,n)?(i[n]=t,!0):r!==D&&L(r,n)?(r[n]=t,!0):L(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,props:o,type:s}},a){let p;return!!(t[a]||e!==D&&a[0]!=="$"&&L(e,a)||Ht(n,a)||L(o,a)||L(r,a)||L(Un,a)||L(i.config.globalProperties,a)||(p=s.__cssModules)&&p[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:L(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function bt(e){return P(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function pp(e,n){return!e||!n?e||n:P(e)&&P(n)?e.concat(n):Z({},bt(e),bt(n))}let cr=!0;function cp(e){const n=Io(e),t=e.proxy,r=e.ctx;cr=!1,n.beforeCreate&&oi(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:p,inject:d,created:l,beforeMount:u,mounted:f,beforeUpdate:g,updated:S,activated:T,deactivated:N,beforeDestroy:F,beforeUnmount:C,destroyed:H,unmounted:O,render:z,renderTracked:He,renderTriggered:Te,errorCaptured:We,serverPrefetch:tt,expose:nn,inheritAttrs:Sn,components:rt,directives:it,filters:Gt}=n;if(d&&lp(d,r,null),s)for(const W in s){const M=s[W];k(M)&&(r[W]=M.bind(t))}if(i){const W=i.call(t,t);B(W)&&(e.data=Pr(W))}if(cr=!0,o)for(const W in o){const M=o[W],tn=k(M)?M.bind(t,t):k(M.get)?M.get.bind(t,t):Ie,ot=!k(M)&&k(M.set)?M.set.bind(t):Ie,rn=Zo({get:tn,set:ot});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>rn.value,set:je=>rn.value=je})}if(a)for(const W in a)Ro(a[W],r,t,W);if(p){const W=k(p)?p.call(t):p;Reflect.ownKeys(W).forEach(M=>{Ua(M,W[M])})}l&&oi(l,e,"c");function re(W,M){P(M)?M.forEach(tn=>W(tn.bind(t))):M&&W(M.bind(t))}if(re(Qa,u),re(So,f),re(Za,g),re(ep,S),re(Ya,T),re(za,N),re(ip,We),re(rp,He),re(tp,Te),re(Co,C),re(Eo,O),re(np,tt),P(nn))if(nn.length){const W=e.exposed||(e.exposed={});nn.forEach(M=>{Object.defineProperty(W,M,{get:()=>t[M],set:tn=>t[M]=tn,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===Ie&&(e.render=z),Sn!=null&&(e.inheritAttrs=Sn),rt&&(e.components=rt),it&&(e.directives=it),tt&&jo(e)}function lp(e,n,t=Ie){P(e)&&(e=lr(e));for(const r in e){const i=e[r];let o;B(i)?"default"in i?o=dt(i.from||r,i.default,!0):o=dt(i.from||r):o=dt(i),ne(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):n[r]=o}}function oi(e,n,t){qe(P(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ro(e,n,t,r){let i=r.includes(".")?To(t,r):()=>t[r];if(Y(e)){const o=n[e];k(o)&&Dn(i,o)}else if(k(e))Dn(i,e.bind(t));else if(B(e))if(P(e))e.forEach(o=>Ro(o,n,t,r));else{const o=k(e.handler)?e.handler.bind(t):n[e.handler];k(o)&&Dn(i,o,e)}}function Io(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(n);let p;return a?p=a:!i.length&&!t&&!r?p=n:(p={},i.length&&i.forEach(d=>_t(p,d,s,!0)),_t(p,n,s)),B(n)&&o.set(n,p),p}function _t(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&_t(e,o,t,!0),i&&i.forEach(s=>_t(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const a=dp[s]||t&&t[s];e[s]=a?a(e[s],n[s]):n[s]}return e}const dp={data:si,props:ai,emits:ai,methods:On,computed:On,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:On,directives:On,watch:mp,provide:si,inject:up};function si(e,n){return n?e?function(){return Z(k(e)?e.call(this,this):e,k(n)?n.call(this,this):n)}:n:e}function up(e,n){return On(lr(e),lr(n))}function lr(e){if(P(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function ie(e,n){return e?[...new Set([].concat(e,n))]:n}function On(e,n){return e?Z(Object.create(null),e,n):n}function ai(e,n){return e?P(e)&&P(n)?[...new Set([...e,...n])]:Z(Object.create(null),bt(e),bt(n??{})):n}function mp(e,n){if(!e)return n;if(!n)return e;const t=Z(Object.create(null),e);for(const r in n)t[r]=ie(e[r],n[r]);return t}function Po(){return{app:null,config:{isNativeTag:Ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function fp(e,n){return function(r,i=null){k(r)||(r=Z({},r)),i!=null&&!B(i)&&(i=null);const o=Po(),s=new WeakSet,a=[];let p=!1;const d=o.app={_uid:yp++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Yp,get config(){return o.config},set config(l){},use(l,...u){return s.has(l)||(l&&k(l.install)?(s.add(l),l.install(d,...u)):k(l)&&(s.add(l),l(d,...u))),d},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),d},component(l,u){return u?(o.components[l]=u,d):o.components[l]},directive(l,u){return u?(o.directives[l]=u,d):o.directives[l]},mount(l,u,f){if(!p){const g=d._ceVNode||be(r,i);return g.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),e(g,l,f),p=!0,d._container=l,l.__vue_app__=d,Ft(g.component)}},onUnmount(l){a.push(l)},unmount(){p&&(qe(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(l,u){return o.provides[l]=u,d},runWithContext(l){const u=Tn;Tn=d;try{return l()}finally{Tn=u}}};return d}}let Tn=null;function gp(e,n,t=D){const r=zo(),i=Le(n),o=en(n),s=Oo(e,i),a=Ia((p,d)=>{let l,u=D,f;return Va(()=>{const g=e[i];ue(l,g)&&(l=g,d())}),{get(){return p(),t.get?t.get(l):l},set(g){const S=t.set?t.set(g):g;if(!ue(S,l)&&!(u!==D&&ue(g,u)))return;const T=r.vnode.props;T&&(n in T||i in T||o in T)&&(`onUpdate:${n}`in T||`onUpdate:${i}`in T||`onUpdate:${o}`in T)||(l=g,d()),r.emit(`update:${n}`,S),ue(g,S)&&ue(g,u)&&!ue(S,f)&&d(),u=g,f=S}}});return a[Symbol.iterator]=()=>{let p=0;return{next(){return p<2?{value:p++?s||D:a,done:!1}:{done:!0}}}},a}const Oo=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Le(n)}Modifiers`]||e[`${en(n)}Modifiers`];function hp(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||D;let i=t;const o=n.startsWith("update:"),s=o&&Oo(r,n.slice(7));s&&(s.trim&&(i=t.map(l=>Y(l)?l.trim():l)),s.number&&(i=t.map(jr)));let a,p=r[a=Ut(n)]||r[a=Ut(Le(n))];!p&&o&&(p=r[a=Ut(en(n))]),p&&qe(p,e,6,i);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,qe(d,e,6,i)}}const bp=new WeakMap;function qo(e,n,t=!1){const r=t?bp:n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!k(e)){const p=d=>{const l=qo(d,n,!0);l&&(a=!0,Z(s,l))};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!o&&!a?(B(e)&&r.set(e,null),null):(P(o)?o.forEach(p=>s[p]=null):Z(s,o),B(e)&&r.set(e,s),s)}function Nt(e,n){return!e||!St(n)?!1:(n=n.slice(2).replace(/Once$/,""),L(e,n[0].toLowerCase()+n.slice(1))||L(e,en(n))||L(e,n))}function pi(e){const{type:n,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:p,render:d,renderCache:l,props:u,data:f,setupState:g,ctx:S,inheritAttrs:T}=e,N=gt(e);let F,C;try{if(t.shapeFlag&4){const O=i||r,z=O;F=Re(d.call(z,O,l,u,g,f,S)),C=a}else{const O=n;F=Re(O.length>1?O(u,{attrs:a,slots:s,emit:p}):O(u,null)),C=n.props?a:_p(a)}}catch(O){Bn.length=0,Ot(O,e,1),F=be(Qe)}let H=F;if(C&&T!==!1){const O=Object.keys(C),{shapeFlag:z}=H;O.length&&z&7&&(o&&O.some(xr)&&(C=xp(C,o)),H=wn(H,C,!1,!0))}return t.dirs&&(H=wn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&Fr(H,t.transition),F=H,gt(N),F}const _p=e=>{let n;for(const t in e)(t==="class"||t==="style"||St(t))&&((n||(n={}))[t]=e[t]);return n},xp=(e,n)=>{const t={};for(const r in e)(!xr(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function vp(e,n,t){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:p}=n,d=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return r?ci(r,s,d):!!s;if(p&8){const l=n.dynamicProps;for(let u=0;u<l.length;u++){const f=l[u];if(No(s,r,f)&&!Nt(d,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?ci(r,s,d):!0:!!s;return!1}function ci(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(No(n,e,o)&&!Nt(t,o))return!0}return!1}function No(e,n,t){const r=e[t],i=n[t];return t==="style"&&B(r)&&B(i)?!Ar(r,i):r!==i}function Tp({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const ko={},Fo=()=>Object.create(ko),$o=e=>Object.getPrototypeOf(e)===ko;function jp(e,n,t,r=!1){const i={},o=Fo();e.propsDefaults=Object.create(null),Do(e,n,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=r?i:wa(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function wp(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=G(i),[p]=e.propsOptions;let d=!1;if((r||s>0)&&!(s&16)){if(s&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let f=l[u];if(Nt(e.emitsOptions,f))continue;const g=n[f];if(p)if(L(o,f))g!==o[f]&&(o[f]=g,d=!0);else{const S=Le(f);i[S]=dr(p,a,S,g,e,!1)}else g!==o[f]&&(o[f]=g,d=!0)}}}else{Do(e,n,i,o)&&(d=!0);let l;for(const u in a)(!n||!L(n,u)&&((l=en(u))===u||!L(n,l)))&&(p?t&&(t[u]!==void 0||t[l]!==void 0)&&(i[u]=dr(p,a,u,void 0,e,!0)):delete i[u]);if(o!==a)for(const u in o)(!n||!L(n,u))&&(delete o[u],d=!0)}d&&$e(e.attrs,"set","")}function Do(e,n,t,r){const[i,o]=e.propsOptions;let s=!1,a;if(n)for(let p in n){if(Nn(p))continue;const d=n[p];let l;i&&L(i,l=Le(p))?!o||!o.includes(l)?t[l]=d:(a||(a={}))[l]=d:Nt(e.emitsOptions,p)||(!(p in r)||d!==r[p])&&(r[p]=d,s=!0)}if(o){const p=G(t),d=a||D;for(let l=0;l<o.length;l++){const u=o[l];t[u]=dr(i,p,u,d[u],e,!L(d,u))}}return s}function dr(e,n,t,r,i,o){const s=e[t];if(s!=null){const a=L(s,"default");if(a&&r===void 0){const p=s.default;if(s.type!==Function&&!s.skipFactory&&k(p)){const{propsDefaults:d}=i;if(t in d)r=d[t];else{const l=nt(i);r=d[t]=p.call(null,n),l()}}else r=p;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===en(t))&&(r=!0))}return r}const Ap=new WeakMap;function Go(e,n,t=!1){const r=t?Ap:n.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let p=!1;if(!k(e)){const l=u=>{p=!0;const[f,g]=Go(u,n,!0);Z(s,f),g&&a.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!o&&!p)return B(e)&&r.set(e,_n),_n;if(P(o))for(let l=0;l<o.length;l++){const u=Le(o[l]);li(u)&&(s[u]=D)}else if(o)for(const l in o){const u=Le(l);if(li(u)){const f=o[l],g=s[u]=P(f)||k(f)?{type:f}:Z({},f),S=g.type;let T=!1,N=!0;if(P(S))for(let F=0;F<S.length;++F){const C=S[F],H=k(C)&&C.name;if(H==="Boolean"){T=!0;break}else H==="String"&&(N=!1)}else T=k(S)&&S.name==="Boolean";g[0]=T,g[1]=N,(T||L(g,"default"))&&a.push(u)}}const d=[s,a];return B(e)&&r.set(e,d),d}function li(e){return e[0]!=="$"&&!Nn(e)}const $r=e=>e==="_"||e==="_ctx"||e==="$stable",Dr=e=>P(e)?e.map(Re):[Re(e)],Sp=(e,n,t)=>{if(n._n)return n;const r=Ga((...i)=>Dr(n(...i)),t);return r._c=!1,r},Lo=(e,n,t)=>{const r=e._ctx;for(const i in e){if($r(i))continue;const o=e[i];if(k(o))n[i]=Sp(i,o,r);else if(o!=null){const s=Dr(o);n[i]=()=>s}}},Uo=(e,n)=>{const t=Dr(n);e.slots.default=()=>t},Bo=(e,n,t)=>{for(const r in n)(t||!$r(r))&&(e[r]=n[r])},Cp=(e,n,t)=>{const r=e.slots=Fo();if(e.vnode.shapeFlag&32){const i=n._;i?(Bo(r,n,t),t&&Ji(r,"_",i,!0)):Lo(n,r)}else n&&Uo(e,n)},Ep=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,s=D;if(r.shapeFlag&32){const a=n._;a?t&&a===1?o=!1:Bo(i,n,t):(o=!n.$stable,Lo(n,i)),s=n}else n&&(Uo(e,n),s={default:1});if(o)for(const a in i)!$r(a)&&s[a]==null&&delete i[a]},le=qp;function Rp(e){return Ip(e)}function Ip(e,n){const t=Et();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:p,setText:d,setElementText:l,parentNode:u,nextSibling:f,setScopeId:g=Ie,insertStaticContent:S}=e,T=(c,m,y,x=null,h=null,b=null,w=void 0,j=null,v=!!m.dynamicChildren)=>{if(c===m)return;c&&!Pn(c,m)&&(x=st(c),je(c,h,b,!0),c=null),m.patchFlag===-2&&(v=!1,m.dynamicChildren=null);const{type:_,ref:I,shapeFlag:A}=m;switch(_){case kt:N(c,m,y,x);break;case Qe:F(c,m,y,x);break;case Xt:c==null&&C(m,y,x,w);break;case _e:rt(c,m,y,x,h,b,w,j,v);break;default:A&1?z(c,m,y,x,h,b,w,j,v):A&6?it(c,m,y,x,h,b,w,j,v):(A&64||A&128)&&_.process(c,m,y,x,h,b,w,j,v,En)}I!=null&&h?Gn(I,c&&c.ref,b,m||c,!m):I==null&&c&&c.ref!=null&&Gn(c.ref,null,b,c,!0)},N=(c,m,y,x)=>{if(c==null)r(m.el=a(m.children),y,x);else{const h=m.el=c.el;m.children!==c.children&&d(h,m.children)}},F=(c,m,y,x)=>{c==null?r(m.el=p(m.children||""),y,x):m.el=c.el},C=(c,m,y,x)=>{[c.el,c.anchor]=S(c.children,m,y,x,c.el,c.anchor)},H=({el:c,anchor:m},y,x)=>{let h;for(;c&&c!==m;)h=f(c),r(c,y,x),c=h;r(m,y,x)},O=({el:c,anchor:m})=>{let y;for(;c&&c!==m;)y=f(c),i(c),c=y;i(m)},z=(c,m,y,x,h,b,w,j,v)=>{if(m.type==="svg"?w="svg":m.type==="math"&&(w="mathml"),c==null)He(m,y,x,h,b,w,j,v);else{const _=c.el&&c.el._isVueCE?c.el:null;try{_&&_._beginPatch(),tt(c,m,h,b,w,j,v)}finally{_&&_._endPatch()}}},He=(c,m,y,x,h,b,w,j)=>{let v,_;const{props:I,shapeFlag:A,transition:R,dirs:q}=c;if(v=c.el=s(c.type,b,I&&I.is,I),A&8?l(v,c.children):A&16&&We(c.children,v,null,x,h,Wt(c,b),w,j),q&&on(c,null,x,"created"),Te(v,c,c.scopeId,w,x),I){for(const V in I)V!=="value"&&!Nn(V)&&o(v,V,null,I[V],b,x);"value"in I&&o(v,"value",null,I.value,b),(_=I.onVnodeBeforeMount)&&Ce(_,x,c)}q&&on(c,null,x,"beforeMount");const $=Pp(h,R);$&&R.beforeEnter(v),r(v,m,y),((_=I&&I.onVnodeMounted)||$||q)&&le(()=>{_&&Ce(_,x,c),$&&R.enter(v),q&&on(c,null,x,"mounted")},h)},Te=(c,m,y,x,h)=>{if(y&&g(c,y),x)for(let b=0;b<x.length;b++)g(c,x[b]);if(h){let b=h.subTree;if(m===b||Ho(b.type)&&(b.ssContent===m||b.ssFallback===m)){const w=h.vnode;Te(c,w,w.scopeId,w.slotScopeIds,h.parent)}}},We=(c,m,y,x,h,b,w,j,v=0)=>{for(let _=v;_<c.length;_++){const I=c[_]=j?Fe(c[_]):Re(c[_]);T(null,I,m,y,x,h,b,w,j)}},tt=(c,m,y,x,h,b,w)=>{const j=m.el=c.el;let{patchFlag:v,dynamicChildren:_,dirs:I}=m;v|=c.patchFlag&16;const A=c.props||D,R=m.props||D;let q;if(y&&sn(y,!1),(q=R.onVnodeBeforeUpdate)&&Ce(q,y,m,c),I&&on(m,c,y,"beforeUpdate"),y&&sn(y,!0),(A.innerHTML&&R.innerHTML==null||A.textContent&&R.textContent==null)&&l(j,""),_?nn(c.dynamicChildren,_,j,y,x,Wt(m,h),b):w||M(c,m,j,null,y,x,Wt(m,h),b,!1),v>0){if(v&16)Sn(j,A,R,y,h);else if(v&2&&A.class!==R.class&&o(j,"class",null,R.class,h),v&4&&o(j,"style",A.style,R.style,h),v&8){const $=m.dynamicProps;for(let V=0;V<$.length;V++){const U=$[V],pe=A[U],ce=R[U];(ce!==pe||U==="value")&&o(j,U,pe,ce,h,y)}}v&1&&c.children!==m.children&&l(j,m.children)}else!w&&_==null&&Sn(j,A,R,y,h);((q=R.onVnodeUpdated)||I)&&le(()=>{q&&Ce(q,y,m,c),I&&on(m,c,y,"updated")},x)},nn=(c,m,y,x,h,b,w)=>{for(let j=0;j<m.length;j++){const v=c[j],_=m[j],I=v.el&&(v.type===_e||!Pn(v,_)||v.shapeFlag&198)?u(v.el):y;T(v,_,I,null,x,h,b,w,!0)}},Sn=(c,m,y,x,h)=>{if(m!==y){if(m!==D)for(const b in m)!Nn(b)&&!(b in y)&&o(c,b,m[b],null,h,x);for(const b in y){if(Nn(b))continue;const w=y[b],j=m[b];w!==j&&b!=="value"&&o(c,b,j,w,h,x)}"value"in y&&o(c,"value",m.value,y.value,h)}},rt=(c,m,y,x,h,b,w,j,v)=>{const _=m.el=c?c.el:a(""),I=m.anchor=c?c.anchor:a("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:q}=m;q&&(j=j?j.concat(q):q),c==null?(r(_,y,x),r(I,y,x),We(m.children||[],y,I,h,b,w,j,v)):A>0&&A&64&&R&&c.dynamicChildren&&c.dynamicChildren.length===R.length?(nn(c.dynamicChildren,R,y,h,b,w,j),(m.key!=null||h&&m===h.subTree)&&Mo(c,m,!0)):M(c,m,y,I,h,b,w,j,v)},it=(c,m,y,x,h,b,w,j,v)=>{m.slotScopeIds=j,c==null?m.shapeFlag&512?h.ctx.activate(m,y,x,w,v):Gt(m,y,x,h,b,w,v):Hr(c,m,v)},Gt=(c,m,y,x,h,b,w)=>{const j=c.component=Mp(c,x,h);if(wo(c)&&(j.ctx.renderer=En),Vp(j,!1,w),j.asyncDep){if(h&&h.registerDep(j,re,w),!c.el){const v=j.subTree=be(Qe);F(null,v,m,y),c.placeholder=v.el}}else re(j,c,m,y,h,b,w)},Hr=(c,m,y)=>{const x=m.component=c.component;if(vp(c,m,y))if(x.asyncDep&&!x.asyncResolved){W(x,m,y);return}else x.next=m,x.update();else m.el=c.el,x.vnode=m},re=(c,m,y,x,h,b,w)=>{const j=()=>{if(c.isMounted){let{next:A,bu:R,u:q,parent:$,vnode:V}=c;{const Ae=Vo(c);if(Ae){A&&(A.el=V.el,W(c,A,w)),Ae.asyncDep.then(()=>{le(()=>{c.isUnmounted||_()},h)});return}}let U=A,pe;sn(c,!1),A?(A.el=V.el,W(c,A,w)):A=V,R&&lt(R),(pe=A.props&&A.props.onVnodeBeforeUpdate)&&Ce(pe,$,A,V),sn(c,!0);const ce=pi(c),we=c.subTree;c.subTree=ce,T(we,ce,u(we.el),st(we),c,h,b),A.el=ce.el,U===null&&Tp(c,ce.el),q&&le(q,h),(pe=A.props&&A.props.onVnodeUpdated)&&le(()=>Ce(pe,$,A,V),h)}else{let A;const{el:R,props:q}=m,{bm:$,m:V,parent:U,root:pe,type:ce}=c,we=Ln(m);sn(c,!1),$&&lt($),!we&&(A=q&&q.onVnodeBeforeMount)&&Ce(A,U,m),sn(c,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(ce);const Ae=c.subTree=pi(c);T(null,Ae,y,x,c,h,b),m.el=Ae.el}if(V&&le(V,h),!we&&(A=q&&q.onVnodeMounted)){const Ae=m;le(()=>Ce(A,U,Ae),h)}(m.shapeFlag&256||U&&Ln(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&le(c.a,h),c.isMounted=!0,m=y=x=null}};c.scope.on();const v=c.effect=new no(j);c.scope.off();const _=c.update=v.run.bind(v),I=c.job=v.runIfDirty.bind(v);I.i=c,I.id=c.uid,v.scheduler=()=>Nr(I),sn(c,!0),_()},W=(c,m,y)=>{m.component=c;const x=c.vnode.props;c.vnode=m,c.next=null,wp(c,m.props,x,y),Ep(c,m.children,y),Ue(),ti(c),Be()},M=(c,m,y,x,h,b,w,j,v=!1)=>{const _=c&&c.children,I=c?c.shapeFlag:0,A=m.children,{patchFlag:R,shapeFlag:q}=m;if(R>0){if(R&128){ot(_,A,y,x,h,b,w,j,v);return}else if(R&256){tn(_,A,y,x,h,b,w,j,v);return}}q&8?(I&16&&Cn(_,h,b),A!==_&&l(y,A)):I&16?q&16?ot(_,A,y,x,h,b,w,j,v):Cn(_,h,b,!0):(I&8&&l(y,""),q&16&&We(A,y,x,h,b,w,j,v))},tn=(c,m,y,x,h,b,w,j,v)=>{c=c||_n,m=m||_n;const _=c.length,I=m.length,A=Math.min(_,I);let R;for(R=0;R<A;R++){const q=m[R]=v?Fe(m[R]):Re(m[R]);T(c[R],q,y,null,h,b,w,j,v)}_>I?Cn(c,h,b,!0,!1,A):We(m,y,x,h,b,w,j,v,A)},ot=(c,m,y,x,h,b,w,j,v)=>{let _=0;const I=m.length;let A=c.length-1,R=I-1;for(;_<=A&&_<=R;){const q=c[_],$=m[_]=v?Fe(m[_]):Re(m[_]);if(Pn(q,$))T(q,$,y,null,h,b,w,j,v);else break;_++}for(;_<=A&&_<=R;){const q=c[A],$=m[R]=v?Fe(m[R]):Re(m[R]);if(Pn(q,$))T(q,$,y,null,h,b,w,j,v);else break;A--,R--}if(_>A){if(_<=R){const q=R+1,$=q<I?m[q].el:x;for(;_<=R;)T(null,m[_]=v?Fe(m[_]):Re(m[_]),y,$,h,b,w,j,v),_++}}else if(_>R)for(;_<=A;)je(c[_],h,b,!0),_++;else{const q=_,$=_,V=new Map;for(_=$;_<=R;_++){const ye=m[_]=v?Fe(m[_]):Re(m[_]);ye.key!=null&&V.set(ye.key,_)}let U,pe=0;const ce=R-$+1;let we=!1,Ae=0;const Rn=new Array(ce);for(_=0;_<ce;_++)Rn[_]=0;for(_=q;_<=A;_++){const ye=c[_];if(pe>=ce){je(ye,h,b,!0);continue}let Se;if(ye.key!=null)Se=V.get(ye.key);else for(U=$;U<=R;U++)if(Rn[U-$]===0&&Pn(ye,m[U])){Se=U;break}Se===void 0?je(ye,h,b,!0):(Rn[Se-$]=_+1,Se>=Ae?Ae=Se:we=!0,T(ye,m[Se],y,null,h,b,w,j,v),pe++)}const Yr=we?Op(Rn):_n;for(U=Yr.length-1,_=ce-1;_>=0;_--){const ye=$+_,Se=m[ye],zr=m[ye+1],Jr=ye+1<I?zr.el||Ko(zr):x;Rn[_]===0?T(null,Se,y,Jr,h,b,w,j,v):we&&(U<0||_!==Yr[U]?rn(Se,y,Jr,2):U--)}}},rn=(c,m,y,x,h=null)=>{const{el:b,type:w,transition:j,children:v,shapeFlag:_}=c;if(_&6){rn(c.component.subTree,m,y,x);return}if(_&128){c.suspense.move(m,y,x);return}if(_&64){w.move(c,m,y,En);return}if(w===_e){r(b,m,y);for(let A=0;A<v.length;A++)rn(v[A],m,y,x);r(c.anchor,m,y);return}if(w===Xt){H(c,m,y);return}if(x!==2&&_&1&&j)if(x===0)j.beforeEnter(b),r(b,m,y),le(()=>j.enter(b),h);else{const{leave:A,delayLeave:R,afterLeave:q}=j,$=()=>{c.ctx.isUnmounted?i(b):r(b,m,y)},V=()=>{b._isLeaving&&b[Xa](!0),A(b,()=>{$(),q&&q()})};R?R(b,$,V):V()}else r(b,m,y)},je=(c,m,y,x=!1,h=!1)=>{const{type:b,props:w,ref:j,children:v,dynamicChildren:_,shapeFlag:I,patchFlag:A,dirs:R,cacheIndex:q}=c;if(A===-2&&(h=!1),j!=null&&(Ue(),Gn(j,null,y,c,!0),Be()),q!=null&&(m.renderCache[q]=void 0),I&256){m.ctx.deactivate(c);return}const $=I&1&&R,V=!Ln(c);let U;if(V&&(U=w&&w.onVnodeBeforeUnmount)&&Ce(U,m,c),I&6)Ks(c.component,y,x);else{if(I&128){c.suspense.unmount(y,x);return}$&&on(c,null,m,"beforeUnmount"),I&64?c.type.remove(c,m,y,En,x):_&&!_.hasOnce&&(b!==_e||A>0&&A&64)?Cn(_,m,y,!1,!0):(b===_e&&A&384||!h&&I&16)&&Cn(v,m,y),x&&Wr(c)}(V&&(U=w&&w.onVnodeUnmounted)||$)&&le(()=>{U&&Ce(U,m,c),$&&on(c,null,m,"unmounted")},y)},Wr=c=>{const{type:m,el:y,anchor:x,transition:h}=c;if(m===_e){Vs(y,x);return}if(m===Xt){O(c);return}const b=()=>{i(y),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:w,delayLeave:j}=h,v=()=>w(y,b);j?j(c.el,b,v):v()}else b()},Vs=(c,m)=>{let y;for(;c!==m;)y=f(c),i(c),c=y;i(m)},Ks=(c,m,y)=>{const{bum:x,scope:h,job:b,subTree:w,um:j,m:v,a:_}=c;di(v),di(_),x&&lt(x),h.stop(),b&&(b.flags|=8,je(w,c,m,y)),j&&le(j,m),le(()=>{c.isUnmounted=!0},m)},Cn=(c,m,y,x=!1,h=!1,b=0)=>{for(let w=b;w<c.length;w++)je(c[w],m,y,x,h)},st=c=>{if(c.shapeFlag&6)return st(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const m=f(c.anchor||c.el),y=m&&m[Ha];return y?f(y):m};let Lt=!1;const Xr=(c,m,y)=>{let x;c==null?m._vnode&&(je(m._vnode,null,null,!0),x=m._vnode.component):T(m._vnode||null,c,m,null,null,null,y),m._vnode=c,Lt||(Lt=!0,ti(x),_o(),Lt=!1)},En={p:T,um:je,m:rn,r:Wr,mt:Gt,mc:We,pc:M,pbc:nn,n:st,o:e};return{render:Xr,hydrate:void 0,createApp:fp(Xr)}}function Wt({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function sn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Pp(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Mo(e,n,t=!1){const r=e.children,i=n.children;if(P(r)&&P(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Fe(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&Mo(s,a)),a.type===kt&&(a.patchFlag===-1&&(a=i[o]=Fe(a)),a.el=s.el),a.type===Qe&&!a.el&&(a.el=s.el)}}function Op(e){const n=e.slice(),t=[0];let r,i,o,s,a;const p=e.length;for(r=0;r<p;r++){const d=e[r];if(d!==0){if(i=t[t.length-1],e[i]<d){n[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,e[t[a]]<d?o=a+1:s=a;d<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}function Vo(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Vo(n)}function di(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ko(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ko(n.subTree):null}const Ho=e=>e.__isSuspense;function qp(e,n){n&&n.pendingBranch?P(e)?n.effects.push(...e):n.effects.push(e):Da(e)}const _e=Symbol.for("v-fgt"),kt=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Xt=Symbol.for("v-stc"),Bn=[];let fe=null;function ze(e=!1){Bn.push(fe=e?null:[])}function Np(){Bn.pop(),fe=Bn[Bn.length-1]||null}let Wn=1;function ui(e,n=!1){Wn+=e,e<0&&fe&&n&&(fe.hasOnce=!0)}function Wo(e){return e.dynamicChildren=Wn>0?fe||_n:null,Np(),Wn>0&&fe&&fe.push(e),e}function ln(e,n,t,r,i,o){return Wo(Ge(e,n,t,r,i,o,!0))}function kp(e,n,t,r,i){return Wo(be(e,n,t,r,i,!0))}function Xo(e){return e?e.__v_isVNode===!0:!1}function Pn(e,n){return e.type===n.type&&e.key===n.key}const Yo=({key:e})=>e??null,ut=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||ne(e)||k(e)?{i:ge,r:e,k:n,f:!!t}:e:null);function Ge(e,n=null,t=null,r=0,i=null,o=e===_e?0:1,s=!1,a=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Yo(n),ref:n&&ut(n),scopeId:vo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ge};return a?(Gr(p,t),o&128&&e.normalize(p)):t&&(p.shapeFlag|=Y(t)?8:16),Wn>0&&!s&&fe&&(p.patchFlag>0||o&6)&&p.patchFlag!==32&&fe.push(p),p}const be=Fp;function Fp(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===op)&&(e=Qe),Xo(e)){const a=wn(e,n,!0);return t&&Gr(a,t),Wn>0&&!o&&fe&&(a.shapeFlag&6?fe[fe.indexOf(e)]=a:fe.push(a)),a.patchFlag=-2,a}if(Xp(e)&&(e=e.__vccOpts),n){n=$p(n);let{class:a,style:p}=n;a&&!Y(a)&&(n.class=Rt(a)),B(p)&&(qr(p)&&!P(p)&&(p=Z({},p)),n.style=wr(p))}const s=Y(e)?1:Ho(e)?128:Wa(e)?64:B(e)?4:k(e)?2:0;return Ge(e,n,t,r,i,s,o,!0)}function $p(e){return e?qr(e)||$o(e)?Z({},e):e:null}function wn(e,n,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:p}=e,d=n?Lp(i||{},n):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Yo(d),ref:n&&n.ref?t&&o?P(o)?o.concat(ut(n)):[o,ut(n)]:ut(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==_e?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:p,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wn(e.ssContent),ssFallback:e.ssFallback&&wn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return p&&r&&Fr(l,p.clone(l)),l}function Dp(e=" ",n=0){return be(kt,null,e,n)}function Gp(e="",n=!1){return n?(ze(),kp(Qe,null,e)):be(Qe,null,e)}function Re(e){return e==null||typeof e=="boolean"?be(Qe):P(e)?be(_e,null,e.slice()):Xo(e)?Fe(e):be(kt,null,String(e))}function Fe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wn(e)}function Gr(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(P(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),Gr(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!$o(n)?n._ctx=ge:i===3&&ge&&(ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else k(n)?(n={default:n,_ctx:ge},t=32):(n=String(n),r&64?(t=16,n=[Dp(n)]):t=8);e.children=n,e.shapeFlag|=t}function Lp(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=Rt([n.class,r.class]));else if(i==="style")n.style=wr([n.style,r.style]);else if(St(i)){const o=n[i],s=r[i];s&&o!==s&&!(P(o)&&o.includes(s))&&(n[i]=o?[].concat(o,s):s)}else i!==""&&(n[i]=r[i])}return n}function Ce(e,n,t,r=null){qe(e,n,7,[t,r])}const Up=Po();let Bp=0;function Mp(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||Up,o={uid:Bp++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ia(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(r,i),emitsOptions:qo(r,i),emit:null,emitted:null,propsDefaults:D,inheritAttrs:r.inheritAttrs,ctx:D,data:D,props:D,attrs:D,slots:D,refs:D,setupState:D,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=hp.bind(null,o),e.ce&&e.ce(o),o}let se=null;const zo=()=>se||ge;let xt,ur;{const e=Et(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};xt=n("__VUE_INSTANCE_SETTERS__",t=>se=t),ur=n("__VUE_SSR_SETTERS__",t=>Xn=t)}const nt=e=>{const n=se;return xt(e),e.scope.on(),()=>{e.scope.off(),xt(n)}},mi=()=>{se&&se.scope.off(),xt(null)};function Jo(e){return e.vnode.shapeFlag&4}let Xn=!1;function Vp(e,n=!1,t=!1){n&&ur(n);const{props:r,children:i}=e.vnode,o=Jo(e);jp(e,r,o,n),Cp(e,i,t||n);const s=o?Kp(e,n):void 0;return n&&ur(!1),s}function Kp(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ap);const{setup:r}=t;if(r){Ue();const i=e.setupContext=r.length>1?Wp(e):null,o=nt(e),s=et(r,e,0,[e.props,i]),a=Wi(s);if(Be(),o(),(a||e.sp)&&!Ln(e)&&jo(e),a){if(s.then(mi,mi),n)return s.then(p=>{yi(e,p)}).catch(p=>{Ot(p,e,0)});e.asyncDep=s}else yi(e,s)}else Qo(e)}function yi(e,n,t){k(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:B(n)&&(e.setupState=go(n)),Qo(e)}function Qo(e,n,t){const r=e.type;e.render||(e.render=r.render||Ie);{const i=nt(e);Ue();try{cp(e)}finally{Be(),i()}}}const Hp={get(e,n){return ee(e,"get",""),e[n]}};function Wp(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Hp),slots:e.slots,emit:e.emit,expose:n}}function Ft(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(go(Aa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Un)return Un[t](e)},has(n,t){return t in n||t in Un}})):e.proxy}function Xp(e){return k(e)&&"__vccOpts"in e}const Zo=(e,n)=>Oa(e,n,Xn),Yp="3.5.28";let mr;const fi=typeof window<"u"&&window.trustedTypes;if(fi)try{mr=fi.createPolicy("vue",{createHTML:e=>e})}catch{}const es=mr?e=>mr.createHTML(e):e=>e,zp="http://www.w3.org/2000/svg",Jp="http://www.w3.org/1998/Math/MathML",ke=typeof document<"u"?document:null,gi=ke&&ke.createElement("template"),Qp={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?ke.createElementNS(zp,e):n==="mathml"?ke.createElementNS(Jp,e):t?ke.createElement(e,{is:t}):ke.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ke.createTextNode(e),createComment:e=>ke.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ke.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const s=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{gi.innerHTML=es(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=gi.content;if(r==="svg"||r==="mathml"){const p=a.firstChild;for(;p.firstChild;)a.appendChild(p.firstChild);a.removeChild(p)}n.insertBefore(a,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Zp=Symbol("_vtc");function ec(e,n,t){const r=e[Zp];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const hi=Symbol("_vod"),nc=Symbol("_vsh"),tc=Symbol(""),rc=/(?:^|;)\s*display\s*:/;function ic(e,n,t){const r=e.style,i=Y(t);let o=!1;if(t&&!i){if(n)if(Y(n))for(const s of n.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&mt(r,a,"")}else for(const s in n)t[s]==null&&mt(r,s,"");for(const s in t)s==="display"&&(o=!0),mt(r,s,t[s])}else if(i){if(n!==t){const s=r[tc];s&&(t+=";"+s),r.cssText=t,o=rc.test(t)}}else n&&e.removeAttribute("style");hi in e&&(e[hi]=o?r.display:"",e[nc]&&(r.display="none"))}const bi=/\s*!important$/;function mt(e,n,t){if(P(t))t.forEach(r=>mt(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=oc(e,n);bi.test(t)?e.setProperty(en(r),t.replace(bi,""),"important"):e[r]=t}}const _i=["Webkit","Moz","ms"],Yt={};function oc(e,n){const t=Yt[n];if(t)return t;let r=Le(n);if(r!=="filter"&&r in e)return Yt[n]=r;r=zi(r);for(let i=0;i<_i.length;i++){const o=_i[i]+r;if(o in e)return Yt[n]=o}return n}const xi="http://www.w3.org/1999/xlink";function vi(e,n,t,r,i,o=ta(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(xi,n.slice(6,n.length)):e.setAttributeNS(xi,n,t):t==null||o&&!Qi(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Oe(t)?String(t):t)}function Ti(e,n,t,r,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?es(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,p=t==null?e.type==="checkbox"?"on":"":String(t);(a!==p||!("_value"in e))&&(e.value=p),t==null&&e.removeAttribute(n),e._value=t;return}let s=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Qi(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(i||n)}function fn(e,n,t,r){e.addEventListener(n,t,r)}function sc(e,n,t,r){e.removeEventListener(n,t,r)}const ji=Symbol("_vei");function ac(e,n,t,r,i=null){const o=e[ji]||(e[ji]={}),s=o[n];if(r&&s)s.value=r;else{const[a,p]=pc(n);if(r){const d=o[n]=dc(r,i);fn(e,a,d,p)}else s&&(sc(e,a,s,p),o[n]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;function pc(e){let n;if(wi.test(e)){n={};let r;for(;r=e.match(wi);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),n]}let zt=0;const cc=Promise.resolve(),lc=()=>zt||(cc.then(()=>zt=0),zt=Date.now());function dc(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;qe(uc(r,t.value),n,5,[r])};return t.value=e,t.attached=lc(),t}function uc(e,n){if(P(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const Ai=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mc=(e,n,t,r,i,o)=>{const s=i==="svg";n==="class"?ec(e,r,s):n==="style"?ic(e,t,r):St(n)?xr(n)||ac(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):yc(e,n,r,s))?(Ti(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&vi(e,n,r,s,o,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Y(r))?Ti(e,Le(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),vi(e,n,r,s))};function yc(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Ai(n)&&k(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ai(n)&&Y(t)?!1:n in e}const Si=e=>{const n=e.props["onUpdate:modelValue"]||!1;return P(n)?t=>lt(n,t):n};function fc(e){e.target.composing=!0}function Ci(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Jt=Symbol("_assign");function Ei(e,n,t){return n&&(e=e.trim()),t&&(e=jr(e)),e}const gc={created(e,{modifiers:{lazy:n,trim:t,number:r}},i){e[Jt]=Si(i);const o=r||i.props&&i.props.type==="number";fn(e,n?"change":"input",s=>{s.target.composing||e[Jt](Ei(e.value,t,o))}),(t||o)&&fn(e,"change",()=>{e.value=Ei(e.value,t,o)}),n||(fn(e,"compositionstart",fc),fn(e,"compositionend",Ci),fn(e,"change",Ci))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:r,trim:i,number:o}},s){if(e[Jt]=Si(s),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?jr(e.value):e.value,p=n??"";a!==p&&(document.activeElement===e&&e.type!=="range"&&(r&&n===t||i&&e.value.trim()===p)||(e.value=p))}},hc=Z({patchProp:mc},Qp);let Ri;function bc(){return Ri||(Ri=Rp(hc))}const _c=((...e)=>{const n=bc().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=vc(r);if(!i)return;const o=n._component;!k(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,xc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n});function xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vc(e){return Y(e)?document.querySelector(e):e}const Tc="/assets/taxonworks_logo-A8LM_fft.svg",$t=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},jc={class:"app-header"},wc=["src"],Ac={__name:"AppHeader",setup(e){return(n,t)=>(ze(),ln("header",jc,[Ge("img",{src:$n(Tc),alt:"TaxonWorks",class:"app-header__logo"},null,8,wc),t[0]||(t[0]=Ge("h1",{class:"app-header__title"},"API Documentation",-1))]))}},Sc=$t(Ac,[["__scopeId","data-v-1f214506"]]),Cc={class:"resource-selector"},Ec={class:"resource-selector__search"},Rc={class:"resource-selector__list"},Ic=["onClick"],Pc={__name:"ResourceSelector",props:pp({resources:{type:Array,required:!0}},{modelValue:{type:String,default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=e,t=gp(e,"modelValue"),r=Kn(""),i=Zo(()=>{const o=r.value.toLowerCase();return o?n.resources.filter(s=>s.label.toLowerCase().includes(o)):n.resources});return(o,s)=>(ze(),ln("aside",Cc,[Ge("div",Ec,[La(Ge("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>r.value=a),type:"text",placeholder:"Filter resources...",class:"resource-selector__input"},null,512),[[gc,r.value]])]),Ge("nav",Rc,[(ze(!0),ln(_e,null,sp(i.value,a=>(ze(),ln("button",{key:a.id,class:Rt(["resource-selector__item",{"resource-selector__item--active":a.id===t.value}]),onClick:()=>t.value=a.id},Sr(a.label),11,Ic))),128))])]))}},Oc=$t(Pc,[["__scopeId","data-v-f72a25f9"]]);var Qt=Hs();const qc={class:"swagger-viewer"},Nc={key:0,class:"swagger-viewer__error"},kc={__name:"SwaggerViewer",props:{spec:{type:Object,default:null},error:{type:String,default:null}},setup(e){const n=e,t=Kn(null);let r=null;function i(){r&&(t.value&&(t.value.innerHTML=""),r=null)}return Dn(()=>n.spec,o=>{!o||!t.value||(i(),r=Qt.SwaggerUIBundle({domNode:t.value,spec:o,layout:"BaseLayout",deepLinking:!0,presets:[Qt.SwaggerUIBundle.presets.apis],plugins:[Qt.SwaggerUIBundle.plugins.DownloadUrl]}))},{immediate:!0}),Co(i),(o,s)=>(ze(),ln("div",qc,[e.error?(ze(),ln("div",Nc,Sr(e.error),1)):Gp("",!0),Ge("div",{ref_key:"swaggerEl",ref:t,class:"swagger-viewer__container"},null,512)]))}},Fc=$t(kc,[["__scopeId","data-v-4ddf232e"]]),$c=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`notes\`."
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
`,Dc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`biological_relationship\`, \`biological_relationship_types\`, \`subject\`, \`object\`, \`taxonomy\`, \`notes\`."
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
`,Gc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`biological_associations_biological_associations_graphs\`, \`notes\`."
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
`,Lc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          description: "BiologicalRelationshipType::BiologicalRelationshipSubjectType or ::ObjectType."
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
`,Uc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,Bc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`source\`, \`citation_object\`, \`citation_topics\`, \`notes\`."
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
`,Mc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`roles\`, \`notes\`."
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
`,Vc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          example: "Specimen"
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
          example: "gid://taxon-works/Specimen/99001"

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
          description: "\`true\` – has been loaned at least once."
          schema:
            type: boolean

        - name: never_loaned
          in: query
          description: "\`true\` – has never been loaned."
          schema:
            type: boolean

        - name: on_loan
          in: query
          description: "\`true\` – currently on loan."
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
                  type: "Specimen"
                  collecting_event_id: 5000
                  repository_id: 10
                  global_id: "gid://taxon-works/Specimen/99001"

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
                occurrenceID: "urn:uuid:abc123"
                basisOfRecord: "PreservedSpecimen"
                scientificName: "Aus bus Author, 2000"
                country: "United States"
                stateProvince: "Illinois"
                decimalLatitude: "40.1164"
                decimalLongitude: "-88.2434"

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
`,Kc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`otu\`, \`notes\`."
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
          example: "house fly"
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
          example: "English"
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
                  name: "house fly"
                  otu_id: 12345
                  language_id: 1
                  language: "English"

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
`,Hc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,Wc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          description: "STI type: Keyword, Topic, Predicate, BiologicalProperty, etc."
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
`,Xc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`sound\`, \`notes\`."
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
`,Yc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`annotated_object\`, \`predicate\`."
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
          description: "InternalAttribute or ImportAttribute."
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
`,zc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,Jc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,Qc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          example: "PreservedSpecimen"
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
                  occurrenceID: "urn:uuid:abc123"
                  basisOfRecord: "PreservedSpecimen"
                  scientificName: "Aus bus Author, 2000"
                  country: "United States"
                  stateProvince: "Illinois"
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
                - "Illinois"
                - "Illinois Territory"
        '422':
          $ref: '#/components/responses/UnprocessableEntity'

# CONSISTENCY REPORT
# All DwcOccurrence routes documented:
#   GET /dwc_occurrences/area_autocomplete | api_area_autocomplete | ✅
#   GET /dwc_occurrences                   | api_index             | ✅
`,Zc=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,el=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`namespace\`."
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
`,nl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`depictions\`, \`attribution\`, \`source\`, \`notes\`."
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
`,tl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,rl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          description: "STI type, e.g. News::Project::BlogPost."
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
`,il=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,ol=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`character_state\`, \`descriptor\`, \`depictions\`, \`notes\`."
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
          description: "STI type: Observation::Qualitative, ::Continuous, etc."
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
`,sl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`rows\`, \`columns\`, \`notes\`."
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
`,al=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,pl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          example: "Person::Vetted"
        last_name:
          type: string
          nullable: true
          description: Last / family name.
          example: "Smith"
        first_name:
          type: string
          nullable: true
          description: First name (may include initials).
          example: "John A."
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
          example: "Smith, John A."
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
          example: "gid://taxon-works/Person/500"

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
                  type: "Person::Vetted"
                  last_name: "Smith"
                  first_name: "John A."
                  cached: "Smith, John A."
                  year_born: 1950
                  year_active_start: 1975
                  global_id: "gid://taxon-works/Person/500"

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
`,cl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`conveyances\`, \`attribution\`, \`notes\`."
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
`,ll=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          example: "Smith, J. and Jones, K."
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
          example: "1-100"
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
          example: "A revision of the genus Aus"
        type:
          type: string
          description: Source subclass (\`Source::Bibtex\`, \`Source::Human\`, \`Source::Verbatim\`).
          example: "Source::Bibtex"
        volume:
          type: string
          nullable: true
        doi:
          type: string
          nullable: true
          description: Digital Object Identifier.
          example: "10.1234/example.2000"
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
          example: "Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100."
        cached_author_string:
          type: string
          nullable: true
          description: Auto-generated author string.
        bibtex_type:
          type: string
          nullable: true
          description: BibTeX entry type (e.g. "article", "book", "inproceedings").
          example: "article"
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
              example: "gid://taxon-works/Source/1001"
            base_class:
              type: string
              description: Base class name.
              example: "Source"
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
                  title: "A revision of the genus Aus"
                  author: "Smith, J. and Jones, K."
                  year: 2000
                  type: "Source::Bibtex"
                  bibtex_type: "article"
                  cached: "Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100."
                  object_tag: "Smith & Jones (2000)"
                  global_id: "gid://taxon-works/Source/1001"
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
                  label: "Smith & Jones (2000) A revision of the genus Aus"
                  label_html: "Smith & Jones (2000) A revision of the genus Aus"
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
                  cached: "Smith, J. & Jones, K. (2000) A revision of the genus Aus. Journal, 1: 1-100."
                - id: 1002
                  cached: "Brown, A. (2005) Notes on Aus. Proceedings, 5: 50-55."

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
`,dl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`,ul=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`notes\`."
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
          example: "CollectionObject"
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
`,ml=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
          example: "bus"
        parent_id:
          type: integer
          nullable: true
          description: Id of the parent TaxonName in the hierarchy.
        cached:
          type: string
          nullable: true
          description: The full cached name string (e.g. "Aus bus").
          example: "Aus bus"
        cached_html:
          type: string
          nullable: true
          description: HTML-formatted cached name.
          example: "<i>Aus bus</i>"
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
          example: "iczn"
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
          example: "species"
        rank_string:
          type: string
          nullable: true
          description: Full NOMEN rank class string.
          example: "NomenclaturalRank::Iczn::SpeciesGroup::Species"
        type:
          type: string
          description: Subclass type (\`Protonym\`, \`Combination\`, \`Hybrid\`).
          example: "Protonym"
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
          example: "Author, 2000"
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

        - name: taxon_name_relationship
          in: query
          description: |
            Filter by TaxonNameRelationship. Object with keys
            \`subject_taxon_name_id\`, \`object_taxon_name_id\`, \`type\`.
          schema:
            type: object
            properties:
              subject_taxon_name_id:
                type: integer
              object_taxon_name_id:
                type: integer
              type:
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
                  name: "bus"
                  parent_id: 6000
                  cached: "Aus bus"
                  cached_html: "<i>Aus bus</i>"
                  nomenclatural_code: "iczn"
                  year_of_publication: 2000
                  rank: "species"
                  rank_string: "NomenclaturalRank::Iczn::SpeciesGroup::Species"
                  type: "Protonym"
                  cached_valid_taxon_name_id: 6789
                  cached_author_year: "Author, 2000"
                  cached_is_valid: true
                  year: 2000
                  name_string: "Aus bus Author, 2000"
                  original_combination: "Aus bus Author, 2000"

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
          example: "Aus bus Author, 2000"

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
                - name: "Aus bus Author, 2000"
                  original_name: "Aus bus Author, 2000"
                  source: "Author, A. (2000) A monograph of Aus. Journal, 1: 1-100."

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
`,yl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`notes\`."
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
`,fl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
      description: "Supported: \`notes\`."
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
`,gl=`openapi: 3.0.3
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
    name: NCSA
    url: https://opensource.org/licenses/NCSA

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
`;function ns(e){return typeof e>"u"||e===null}function hl(e){return typeof e=="object"&&e!==null}function bl(e){return Array.isArray(e)?e:ns(e)?[]:[e]}function _l(e,n){var t,r,i,o;if(n)for(o=Object.keys(n),t=0,r=o.length;t<r;t+=1)i=o[t],e[i]=n[i];return e}function xl(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function vl(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Tl=ns,jl=hl,wl=bl,Al=xl,Sl=vl,Cl=_l,J={isNothing:Tl,isObject:jl,toArray:wl,repeat:Al,isNegativeZero:Sl,extend:Cl};function ts(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function Yn(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=ts(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Yn.prototype=Object.create(Error.prototype);Yn.prototype.constructor=Yn;Yn.prototype.toString=function(n){return this.name+": "+ts(this,n)};var ae=Yn;function Zt(e,n,t,r,i){var o="",s="",a=Math.floor(i/2)-1;return r-n>a&&(o=" ... ",n=r-a+o.length),t-r>a&&(s=" ...",t=r+a-s.length),{str:o+e.slice(n,t).replace(/\t/g,"→")+s,pos:r-n+o.length}}function er(e,n){return J.repeat(" ",n-e.length)+e}function El(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],i=[],o,s=-1;o=t.exec(e.buffer);)i.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var a="",p,d,l=Math.min(e.line+n.linesAfter,i.length).toString().length,u=n.maxLength-(n.indent+l+3);for(p=1;p<=n.linesBefore&&!(s-p<0);p++)d=Zt(e.buffer,r[s-p],i[s-p],e.position-(r[s]-r[s-p]),u),a=J.repeat(" ",n.indent)+er((e.line-p+1).toString(),l)+" | "+d.str+`
`+a;for(d=Zt(e.buffer,r[s],i[s],e.position,u),a+=J.repeat(" ",n.indent)+er((e.line+1).toString(),l)+" | "+d.str+`
`,a+=J.repeat("-",n.indent+l+3+d.pos)+`^
`,p=1;p<=n.linesAfter&&!(s+p>=i.length);p++)d=Zt(e.buffer,r[s+p],i[s+p],e.position-(r[s]-r[s+p]),u),a+=J.repeat(" ",n.indent)+er((e.line+p+1).toString(),l)+" | "+d.str+`
`;return a.replace(/\n$/,"")}var Rl=El,Il=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Pl=["scalar","sequence","mapping"];function Ol(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function ql(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Il.indexOf(t)===-1)throw new ae('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Ol(n.styleAliases||null),Pl.indexOf(this.kind)===-1)throw new ae('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Q=ql;function Ii(e,n){var t=[];return e[n].forEach(function(r){var i=t.length;t.forEach(function(o,s){o.tag===r.tag&&o.kind===r.kind&&o.multi===r.multi&&(i=s)}),t[i]=r}),t}function Nl(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function yr(e){return this.extend(e)}yr.prototype.extend=function(n){var t=[],r=[];if(n instanceof Q)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new ae("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(o){if(!(o instanceof Q))throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new ae("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new ae("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(o){if(!(o instanceof Q))throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(yr.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=Ii(i,"implicit"),i.compiledExplicit=Ii(i,"explicit"),i.compiledTypeMap=Nl(i.compiledImplicit,i.compiledExplicit),i};var rs=yr,is=new Q("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),os=new Q("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ss=new Q("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),as=new rs({explicit:[is,os,ss]});function kl(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Fl(){return null}function $l(e){return e===null}var ps=new Q("tag:yaml.org,2002:null",{kind:"scalar",resolve:kl,construct:Fl,predicate:$l,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Dl(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Gl(e){return e==="true"||e==="True"||e==="TRUE"}function Ll(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cs=new Q("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Dl,construct:Gl,predicate:Ll,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Ul(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Bl(e){return 48<=e&&e<=55}function Ml(e){return 48<=e&&e<=57}function Vl(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Ul(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Bl(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!Ml(e.charCodeAt(t)))return!1;r=!0}return!(!r||i==="_")}function Kl(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Hl(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!J.isNegativeZero(e)}var ls=new Q("tag:yaml.org,2002:int",{kind:"scalar",resolve:Vl,construct:Kl,predicate:Hl,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Wl=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Xl(e){return!(e===null||!Wl.test(e)||e[e.length-1]==="_")}function Yl(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var zl=/^[-+]?[0-9]+e/;function Jl(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(J.isNegativeZero(e))return"-0.0";return t=e.toString(10),zl.test(t)?t.replace("e",".e"):t}function Ql(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||J.isNegativeZero(e))}var ds=new Q("tag:yaml.org,2002:float",{kind:"scalar",resolve:Xl,construct:Yl,predicate:Ql,represent:Jl,defaultStyle:"lowercase"}),us=as.extend({implicit:[ps,cs,ls,ds]}),ms=us,ys=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Zl(e){return e===null?!1:ys.exec(e)!==null||fs.exec(e)!==null}function ed(e){var n,t,r,i,o,s,a,p=0,d=null,l,u,f;if(n=ys.exec(e),n===null&&(n=fs.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(o=+n[4],s=+n[5],a=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(l=+n[10],u=+(n[11]||0),d=(l*60+u)*6e4,n[9]==="-"&&(d=-d)),f=new Date(Date.UTC(t,r,i,o,s,a,p)),d&&f.setTime(f.getTime()-d),f}function nd(e){return e.toISOString()}var gs=new Q("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Zl,construct:ed,instanceOf:Date,represent:nd});function td(e){return e==="<<"||e===null}var hs=new Q("tag:yaml.org,2002:merge",{kind:"scalar",resolve:td}),Lr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function rd(e){if(e===null)return!1;var n,t,r=0,i=e.length,o=Lr;for(t=0;t<i;t++)if(n=o.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function id(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,o=Lr,s=0,a=[];for(n=0;n<i;n++)n%4===0&&n&&(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)),s=s<<6|o.indexOf(r.charAt(n));return t=i%4*6,t===0?(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)):t===18?(a.push(s>>10&255),a.push(s>>2&255)):t===12&&a.push(s>>4&255),new Uint8Array(a)}function od(e){var n="",t=0,r,i,o=e.length,s=Lr;for(r=0;r<o;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return i=o%3,i===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):i===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):i===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function sd(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var bs=new Q("tag:yaml.org,2002:binary",{kind:"scalar",resolve:rd,construct:id,predicate:sd,represent:od}),ad=Object.prototype.hasOwnProperty,pd=Object.prototype.toString;function cd(e){if(e===null)return!0;var n=[],t,r,i,o,s,a=e;for(t=0,r=a.length;t<r;t+=1){if(i=a[t],s=!1,pd.call(i)!=="[object Object]")return!1;for(o in i)if(ad.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(o)===-1)n.push(o);else return!1}return!0}function ld(e){return e!==null?e:[]}var _s=new Q("tag:yaml.org,2002:omap",{kind:"sequence",resolve:cd,construct:ld}),dd=Object.prototype.toString;function ud(e){if(e===null)return!0;var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],dd.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;o[n]=[i[0],r[i[0]]]}return!0}function md(e){if(e===null)return[];var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],i=Object.keys(r),o[n]=[i[0],r[i[0]]];return o}var xs=new Q("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ud,construct:md}),yd=Object.prototype.hasOwnProperty;function fd(e){if(e===null)return!0;var n,t=e;for(n in t)if(yd.call(t,n)&&t[n]!==null)return!1;return!0}function gd(e){return e!==null?e:{}}var vs=new Q("tag:yaml.org,2002:set",{kind:"mapping",resolve:fd,construct:gd}),Ur=ms.extend({implicit:[gs,hs],explicit:[bs,_s,xs,vs]}),Ze=Object.prototype.hasOwnProperty,vt=1,Ts=2,js=3,Tt=4,nr=1,hd=2,Pi=3,bd=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,_d=/[\x85\u2028\u2029]/,xd=/[,\[\]\{\}]/,ws=/^(?:!|!!|![a-z\-]+!)$/i,As=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Oi(e){return Object.prototype.toString.call(e)}function Pe(e){return e===10||e===13}function dn(e){return e===9||e===32}function me(e){return e===9||e===32||e===10||e===13}function hn(e){return e===44||e===91||e===93||e===123||e===125}function vd(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Td(e){return e===120?2:e===117?4:e===85?8:0}function jd(e){return 48<=e&&e<=57?e-48:-1}function qi(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function wd(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Ss(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var Cs=new Array(256),Es=new Array(256);for(var mn=0;mn<256;mn++)Cs[mn]=qi(mn)?1:0,Es[mn]=qi(mn);function Ad(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Ur,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Rs(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Rl(t),new ae(n,t)}function E(e,n){throw Rs(e,n)}function jt(e,n){e.onWarning&&e.onWarning.call(null,Rs(e,n))}var Ni={YAML:function(n,t,r){var i,o,s;n.version!==null&&E(n,"duplication of %YAML directive"),r.length!==1&&E(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&E(n,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&E(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&jt(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,o;r.length!==2&&E(n,"TAG directive accepts exactly two arguments"),i=r[0],o=r[1],ws.test(i)||E(n,"ill-formed tag handle (first argument) of the TAG directive"),Ze.call(n.tagMap,i)&&E(n,'there is a previously declared suffix for "'+i+'" tag handle'),As.test(o)||E(n,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{E(n,"tag prefix is malformed: "+o)}n.tagMap[i]=o}};function Je(e,n,t,r){var i,o,s,a;if(n<t){if(a=e.input.slice(n,t),r)for(i=0,o=a.length;i<o;i+=1)s=a.charCodeAt(i),s===9||32<=s&&s<=1114111||E(e,"expected valid JSON character");else bd.test(a)&&E(e,"the stream contains non-printable characters");e.result+=a}}function ki(e,n,t,r){var i,o,s,a;for(J.isObject(t)||E(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),s=0,a=i.length;s<a;s+=1)o=i[s],Ze.call(n,o)||(Ss(n,o,t[o]),r[o]=!0)}function bn(e,n,t,r,i,o,s,a,p){var d,l;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),d=0,l=i.length;d<l;d+=1)Array.isArray(i[d])&&E(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Oi(i[d])==="[object Object]"&&(i[d]="[object Object]");if(typeof i=="object"&&Oi(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(d=0,l=o.length;d<l;d+=1)ki(e,n,o[d],t);else ki(e,n,o,t);else!e.json&&!Ze.call(t,i)&&Ze.call(n,i)&&(e.line=s||e.line,e.lineStart=a||e.lineStart,e.position=p||e.position,E(e,"duplicated mapping key")),Ss(n,i,o),delete t[i];return n}function Br(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):E(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function X(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;dn(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(Pe(i))for(Br(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&jt(e,"deficient indentation"),r}function Dt(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||me(t)))}function Mr(e,n){n===1?e.result+=" ":n>1&&(e.result+=J.repeat(`
`,n-1))}function Sd(e,n,t){var r,i,o,s,a,p,d,l,u=e.kind,f=e.result,g;if(g=e.input.charCodeAt(e.position),me(g)||hn(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(i=e.input.charCodeAt(e.position+1),me(i)||t&&hn(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,a=!1;g!==0;){if(g===58){if(i=e.input.charCodeAt(e.position+1),me(i)||t&&hn(i))break}else if(g===35){if(r=e.input.charCodeAt(e.position-1),me(r))break}else{if(e.position===e.lineStart&&Dt(e)||t&&hn(g))break;if(Pe(g))if(p=e.line,d=e.lineStart,l=e.lineIndent,X(e,!1,-1),e.lineIndent>=n){a=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=p,e.lineStart=d,e.lineIndent=l;break}}a&&(Je(e,o,s,!1),Mr(e,e.line-p),o=s=e.position,a=!1),dn(g)||(s=e.position+1),g=e.input.charCodeAt(++e.position)}return Je(e,o,s,!1),e.result?!0:(e.kind=u,e.result=f,!1)}function Cd(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Je(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else Pe(t)?(Je(e,r,i,!0),Mr(e,X(e,!1,n)),r=i=e.position):e.position===e.lineStart&&Dt(e)?E(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);E(e,"unexpected end of the stream within a single quoted scalar")}function Ed(e,n){var t,r,i,o,s,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return Je(e,t,e.position,!0),e.position++,!0;if(a===92){if(Je(e,t,e.position,!0),a=e.input.charCodeAt(++e.position),Pe(a))X(e,!1,n);else if(a<256&&Cs[a])e.result+=Es[a],e.position++;else if((s=Td(a))>0){for(i=s,o=0;i>0;i--)a=e.input.charCodeAt(++e.position),(s=vd(a))>=0?o=(o<<4)+s:E(e,"expected hexadecimal character");e.result+=wd(o),e.position++}else E(e,"unknown escape sequence");t=r=e.position}else Pe(a)?(Je(e,t,r,!0),Mr(e,X(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Dt(e)?E(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}E(e,"unexpected end of the stream within a double quoted scalar")}function Rd(e,n){var t=!0,r,i,o,s=e.tag,a,p=e.anchor,d,l,u,f,g,S=Object.create(null),T,N,F,C;if(C=e.input.charCodeAt(e.position),C===91)l=93,g=!1,a=[];else if(C===123)l=125,g=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),C=e.input.charCodeAt(++e.position);C!==0;){if(X(e,!0,n),C=e.input.charCodeAt(e.position),C===l)return e.position++,e.tag=s,e.anchor=p,e.kind=g?"mapping":"sequence",e.result=a,!0;t?C===44&&E(e,"expected the node content, but found ','"):E(e,"missed comma between flow collection entries"),N=T=F=null,u=f=!1,C===63&&(d=e.input.charCodeAt(e.position+1),me(d)&&(u=f=!0,e.position++,X(e,!0,n))),r=e.line,i=e.lineStart,o=e.position,An(e,n,vt,!1,!0),N=e.tag,T=e.result,X(e,!0,n),C=e.input.charCodeAt(e.position),(f||e.line===r)&&C===58&&(u=!0,C=e.input.charCodeAt(++e.position),X(e,!0,n),An(e,n,vt,!1,!0),F=e.result),g?bn(e,a,S,N,T,F,r,i,o):u?a.push(bn(e,null,S,N,T,F,r,i,o)):a.push(T),X(e,!0,n),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}E(e,"unexpected end of the stream within a flow collection")}function Id(e,n){var t,r,i=nr,o=!1,s=!1,a=n,p=0,d=!1,l,u;if(u=e.input.charCodeAt(e.position),u===124)r=!1;else if(u===62)r=!0;else return!1;for(e.kind="scalar",e.result="";u!==0;)if(u=e.input.charCodeAt(++e.position),u===43||u===45)nr===i?i=u===43?Pi:hd:E(e,"repeat of a chomping mode identifier");else if((l=jd(u))>=0)l===0?E(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?E(e,"repeat of an indentation width identifier"):(a=n+l-1,s=!0);else break;if(dn(u)){do u=e.input.charCodeAt(++e.position);while(dn(u));if(u===35)do u=e.input.charCodeAt(++e.position);while(!Pe(u)&&u!==0)}for(;u!==0;){for(Br(e),e.lineIndent=0,u=e.input.charCodeAt(e.position);(!s||e.lineIndent<a)&&u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>a&&(a=e.lineIndent),Pe(u)){p++;continue}if(e.lineIndent<a){i===Pi?e.result+=J.repeat(`
`,o?1+p:p):i===nr&&o&&(e.result+=`
`);break}for(r?dn(u)?(d=!0,e.result+=J.repeat(`
`,o?1+p:p)):d?(d=!1,e.result+=J.repeat(`
`,p+1)):p===0?o&&(e.result+=" "):e.result+=J.repeat(`
`,p):e.result+=J.repeat(`
`,o?1+p:p),o=!0,s=!0,p=0,t=e.position;!Pe(u)&&u!==0;)u=e.input.charCodeAt(++e.position);Je(e,t,e.position,!1)}return!0}function Fi(e,n){var t,r=e.tag,i=e.anchor,o=[],s,a=!1,p;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),p=e.input.charCodeAt(e.position);p!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation")),!(p!==45||(s=e.input.charCodeAt(e.position+1),!me(s))));){if(a=!0,e.position++,X(e,!0,-1)&&e.lineIndent<=n){o.push(null),p=e.input.charCodeAt(e.position);continue}if(t=e.line,An(e,n,js,!1,!0),o.push(e.result),X(e,!0,-1),p=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&p!==0)E(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function Pd(e,n,t){var r,i,o,s,a,p,d=e.tag,l=e.anchor,u={},f=Object.create(null),g=null,S=null,T=null,N=!1,F=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),C=e.input.charCodeAt(e.position);C!==0;){if(!N&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),o=e.line,(C===63||C===58)&&me(r))C===63?(N&&(bn(e,u,f,g,S,null,s,a,p),g=S=T=null),F=!0,N=!0,i=!0):N?(N=!1,i=!0):E(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=r;else{if(s=e.line,a=e.lineStart,p=e.position,!An(e,t,Ts,!1,!0))break;if(e.line===o){for(C=e.input.charCodeAt(e.position);dn(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),me(C)||E(e,"a whitespace character is expected after the key-value separator within a block mapping"),N&&(bn(e,u,f,g,S,null,s,a,p),g=S=T=null),F=!0,N=!1,i=!1,g=e.tag,S=e.result;else if(F)E(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=d,e.anchor=l,!0}else if(F)E(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=d,e.anchor=l,!0}if((e.line===o||e.lineIndent>n)&&(N&&(s=e.line,a=e.lineStart,p=e.position),An(e,n,Tt,!0,i)&&(N?S=e.result:T=e.result),N||(bn(e,u,f,g,S,T,s,a,p),g=S=T=null),X(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>n)&&C!==0)E(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return N&&bn(e,u,f,g,S,null,s,a,p),F&&(e.tag=d,e.anchor=l,e.kind="mapping",e.result=u),F}function Od(e){var n,t=!1,r=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&E(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):E(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!me(s);)s===33&&(r?E(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),ws.test(i)||E(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(n,e.position),xd.test(o)&&E(e,"tag suffix cannot contain flow indicator characters")}o&&!As.test(o)&&E(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{E(e,"tag name is malformed: "+o)}return t?e.tag=o:Ze.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:E(e,'undeclared tag handle "'+i+'"'),!0}function qd(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&E(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!me(t)&&!hn(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&E(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Nd(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!me(r)&&!hn(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&E(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),Ze.call(e.anchorMap,t)||E(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],X(e,!0,-1),!0}function An(e,n,t,r,i){var o,s,a,p=1,d=!1,l=!1,u,f,g,S,T,N;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=a=Tt===t||js===t,r&&X(e,!0,-1)&&(d=!0,e.lineIndent>n?p=1:e.lineIndent===n?p=0:e.lineIndent<n&&(p=-1)),p===1)for(;Od(e)||qd(e);)X(e,!0,-1)?(d=!0,a=o,e.lineIndent>n?p=1:e.lineIndent===n?p=0:e.lineIndent<n&&(p=-1)):a=!1;if(a&&(a=d||i),(p===1||Tt===t)&&(vt===t||Ts===t?T=n:T=n+1,N=e.position-e.lineStart,p===1?a&&(Fi(e,N)||Pd(e,N,T))||Rd(e,T)?l=!0:(s&&Id(e,T)||Cd(e,T)||Ed(e,T)?l=!0:Nd(e)?(l=!0,(e.tag!==null||e.anchor!==null)&&E(e,"alias node should not have any properties")):Sd(e,T,vt===t)&&(l=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):p===0&&(l=a&&Fi(e,N))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&E(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,f=e.implicitTypes.length;u<f;u+=1)if(S=e.implicitTypes[u],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Ze.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,g=e.typeMap.multi[e.kind||"fallback"],u=0,f=g.length;u<f;u+=1)if(e.tag.slice(0,g[u].tag.length)===g[u].tag){S=g[u];break}S||E(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&E(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):E(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||l}function kd(e){var n=e.position,t,r,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(X(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!me(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&E(e,"directive name must not be less than one character in length");s!==0;){for(;dn(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Pe(s));break}if(Pe(s))break;for(t=e.position;s!==0&&!me(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}s!==0&&Br(e),Ze.call(Ni,r)?Ni[r](e,r,i):jt(e,'unknown document directive "'+r+'"')}if(X(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,X(e,!0,-1)):o&&E(e,"directives end mark is expected"),An(e,e.lineIndent-1,Tt,!1,!0),X(e,!0,-1),e.checkLineBreaks&&_d.test(e.input.slice(n,e.position))&&jt(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Dt(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,X(e,!0,-1));return}if(e.position<e.length-1)E(e,"end of the stream or a document separator is expected");else return}function Is(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Ad(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,E(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)kd(t);return t.documents}function Fd(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=Is(e,t);if(typeof n!="function")return r;for(var i=0,o=r.length;i<o;i+=1)n(r[i])}function $d(e,n){var t=Is(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new ae("expected a single document in the stream, but found more")}}var Dd=Fd,Gd=$d,Ps={loadAll:Dd,load:Gd},Os=Object.prototype.toString,qs=Object.prototype.hasOwnProperty,Vr=65279,Ld=9,zn=10,Ud=13,Bd=32,Md=33,Vd=34,fr=35,Kd=37,Hd=38,Wd=39,Xd=42,Ns=44,Yd=45,wt=58,zd=61,Jd=62,Qd=63,Zd=64,ks=91,Fs=93,eu=96,$s=123,nu=124,Ds=125,te={};te[0]="\\0";te[7]="\\a";te[8]="\\b";te[9]="\\t";te[10]="\\n";te[11]="\\v";te[12]="\\f";te[13]="\\r";te[27]="\\e";te[34]='\\"';te[92]="\\\\";te[133]="\\N";te[160]="\\_";te[8232]="\\L";te[8233]="\\P";var tu=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],ru=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function iu(e,n){var t,r,i,o,s,a,p;if(n===null)return{};for(t={},r=Object.keys(n),i=0,o=r.length;i<o;i+=1)s=r[i],a=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),p=e.compiledTypeMap.fallback[s],p&&qs.call(p.styleAliases,a)&&(a=p.styleAliases[a]),t[s]=a;return t}function ou(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new ae("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+J.repeat("0",r-n.length)+n}var su=1,Jn=2;function au(e){this.schema=e.schema||Ur,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=J.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=iu(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Jn:su,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function $i(e,n){for(var t=J.repeat(" ",n),r=0,i=-1,o="",s,a=e.length;r<a;)i=e.indexOf(`
`,r),i===-1?(s=e.slice(r),r=a):(s=e.slice(r,i+1),r=i+1),s.length&&s!==`
`&&(o+=t),o+=s;return o}function gr(e,n){return`
`+J.repeat(" ",e.indent*n)}function pu(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function At(e){return e===Bd||e===Ld}function Qn(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Vr||65536<=e&&e<=1114111}function Di(e){return Qn(e)&&e!==Vr&&e!==Ud&&e!==zn}function Gi(e,n,t){var r=Di(e),i=r&&!At(e);return(t?r:r&&e!==Ns&&e!==ks&&e!==Fs&&e!==$s&&e!==Ds)&&e!==fr&&!(n===wt&&!i)||Di(n)&&!At(n)&&e===fr||n===wt&&i}function cu(e){return Qn(e)&&e!==Vr&&!At(e)&&e!==Yd&&e!==Qd&&e!==wt&&e!==Ns&&e!==ks&&e!==Fs&&e!==$s&&e!==Ds&&e!==fr&&e!==Hd&&e!==Xd&&e!==Md&&e!==nu&&e!==zd&&e!==Jd&&e!==Wd&&e!==Vd&&e!==Kd&&e!==Zd&&e!==eu}function lu(e){return!At(e)&&e!==wt}function qn(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Gs(e){var n=/^\n* /;return n.test(e)}var Ls=1,hr=2,Us=3,Bs=4,gn=5;function du(e,n,t,r,i,o,s,a){var p,d=0,l=null,u=!1,f=!1,g=r!==-1,S=-1,T=cu(qn(e,0))&&lu(qn(e,e.length-1));if(n||s)for(p=0;p<e.length;d>=65536?p+=2:p++){if(d=qn(e,p),!Qn(d))return gn;T=T&&Gi(d,l,a),l=d}else{for(p=0;p<e.length;d>=65536?p+=2:p++){if(d=qn(e,p),d===zn)u=!0,g&&(f=f||p-S-1>r&&e[S+1]!==" ",S=p);else if(!Qn(d))return gn;T=T&&Gi(d,l,a),l=d}f=f||g&&p-S-1>r&&e[S+1]!==" "}return!u&&!f?T&&!s&&!i(e)?Ls:o===Jn?gn:hr:t>9&&Gs(e)?gn:s?o===Jn?gn:hr:f?Bs:Us}function uu(e,n,t,r,i){e.dump=(function(){if(n.length===0)return e.quotingType===Jn?'""':"''";if(!e.noCompatMode&&(tu.indexOf(n)!==-1||ru.test(n)))return e.quotingType===Jn?'"'+n+'"':"'"+n+"'";var o=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),a=r||e.flowLevel>-1&&t>=e.flowLevel;function p(d){return pu(e,d)}switch(du(n,a,e.indent,s,p,e.quotingType,e.forceQuotes&&!r,i)){case Ls:return n;case hr:return"'"+n.replace(/'/g,"''")+"'";case Us:return"|"+Li(n,e.indent)+Ui($i(n,o));case Bs:return">"+Li(n,e.indent)+Ui($i(mu(n,s),o));case gn:return'"'+yu(n)+'"';default:throw new ae("impossible error: invalid scalar style")}})()}function Li(e,n){var t=Gs(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),o=i?"+":r?"":"-";return t+o+`
`}function Ui(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function mu(e,n){for(var t=/(\n+)([^\n]*)/g,r=(function(){var d=e.indexOf(`
`);return d=d!==-1?d:e.length,t.lastIndex=d,Bi(e.slice(0,d),n)})(),i=e[0]===`
`||e[0]===" ",o,s;s=t.exec(e);){var a=s[1],p=s[2];o=p[0]===" ",r+=a+(!i&&!o&&p!==""?`
`:"")+Bi(p,n),i=o}return r}function Bi(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,o,s=0,a=0,p="";r=t.exec(e);)a=r.index,a-i>n&&(o=s>i?s:a,p+=`
`+e.slice(i,o),i=o+1),s=a;return p+=`
`,e.length-i>n&&s>i?p+=e.slice(i,s)+`
`+e.slice(s+1):p+=e.slice(i),p.slice(1)}function yu(e){for(var n="",t=0,r,i=0;i<e.length;t>=65536?i+=2:i++)t=qn(e,i),r=te[t],!r&&Qn(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=r||ou(t);return n}function fu(e,n,t){var r="",i=e.tag,o,s,a;for(o=0,s=t.length;o<s;o+=1)a=t[o],e.replacer&&(a=e.replacer.call(t,String(o),a)),(Ve(e,n,a,!1,!1)||typeof a>"u"&&Ve(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function Mi(e,n,t,r){var i="",o=e.tag,s,a,p;for(s=0,a=t.length;s<a;s+=1)p=t[s],e.replacer&&(p=e.replacer.call(t,String(s),p)),(Ve(e,n+1,p,!0,!0,!1,!0)||typeof p>"u"&&Ve(e,n+1,null,!0,!0,!1,!0))&&((!r||i!=="")&&(i+=gr(e,n)),e.dump&&zn===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=o,e.dump=i||"[]"}function gu(e,n,t){var r="",i=e.tag,o=Object.keys(t),s,a,p,d,l;for(s=0,a=o.length;s<a;s+=1)l="",r!==""&&(l+=", "),e.condenseFlow&&(l+='"'),p=o[s],d=t[p],e.replacer&&(d=e.replacer.call(t,p,d)),Ve(e,n,p,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ve(e,n,d,!1,!1)&&(l+=e.dump,r+=l));e.tag=i,e.dump="{"+r+"}"}function hu(e,n,t,r){var i="",o=e.tag,s=Object.keys(t),a,p,d,l,u,f;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new ae("sortKeys must be a boolean or a function");for(a=0,p=s.length;a<p;a+=1)f="",(!r||i!=="")&&(f+=gr(e,n)),d=s[a],l=t[d],e.replacer&&(l=e.replacer.call(t,d,l)),Ve(e,n+1,d,!0,!0,!0)&&(u=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,u&&(e.dump&&zn===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,u&&(f+=gr(e,n)),Ve(e,n+1,l,!0,u)&&(e.dump&&zn===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,i+=f));e.tag=o,e.dump=i||"{}"}function Vi(e,n,t){var r,i,o,s,a,p;for(i=t?e.explicitTypes:e.implicitTypes,o=0,s=i.length;o<s;o+=1)if(a=i[o],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof n=="object"&&n instanceof a.instanceOf)&&(!a.predicate||a.predicate(n))){if(t?a.multi&&a.representName?e.tag=a.representName(n):e.tag=a.tag:e.tag="?",a.represent){if(p=e.styleMap[a.tag]||a.defaultStyle,Os.call(a.represent)==="[object Function]")r=a.represent(n,p);else if(qs.call(a.represent,p))r=a.represent[p](n,p);else throw new ae("!<"+a.tag+'> tag resolver accepts not "'+p+'" style');e.dump=r}return!0}return!1}function Ve(e,n,t,r,i,o,s){e.tag=null,e.dump=t,Vi(e,t,!1)||Vi(e,t,!0);var a=Os.call(e.dump),p=r,d;r&&(r=e.flowLevel<0||e.flowLevel>n);var l=a==="[object Object]"||a==="[object Array]",u,f;if(l&&(u=e.duplicates.indexOf(t),f=u!==-1),(e.tag!==null&&e.tag!=="?"||f||e.indent!==2&&n>0)&&(i=!1),f&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(l&&f&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),a==="[object Object]")r&&Object.keys(e.dump).length!==0?(hu(e,n,e.dump,i),f&&(e.dump="&ref_"+u+e.dump)):(gu(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&n>0?Mi(e,n-1,e.dump,i):Mi(e,n,e.dump,i),f&&(e.dump="&ref_"+u+e.dump)):(fu(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object String]")e.tag!=="?"&&uu(e,e.dump,n,o,p);else{if(a==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new ae("unacceptable kind of an object to dump "+a)}e.tag!==null&&e.tag!=="?"&&(d=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?d="!"+d:d.slice(0,18)==="tag:yaml.org,2002:"?d="!!"+d.slice(18):d="!<"+d+">",e.dump=d+" "+e.dump)}return!0}function bu(e,n){var t=[],r=[],i,o;for(br(e,t,r),i=0,o=r.length;i<o;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(o)}function br(e,n,t){var r,i,o;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)br(e[i],n,t);else for(r=Object.keys(e),i=0,o=r.length;i<o;i+=1)br(e[r[i]],n,t)}function _u(e,n){n=n||{};var t=new au(n);t.noRefs||bu(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),Ve(t,0,r,!0,!0)?t.dump+`
`:""}var xu=_u,vu={dump:xu};function Kr(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var Tu=Q,ju=rs,wu=as,Au=us,Su=ms,Cu=Ur,Eu=Ps.load,Ru=Ps.loadAll,Iu=vu.dump,Pu=ae,Ou={binary:bs,float:ds,map:ss,null:ps,pairs:xs,set:vs,timestamp:gs,bool:cs,int:ls,merge:hs,omap:_s,seq:os,str:is},qu=Kr("safeLoad","load"),Nu=Kr("safeLoadAll","loadAll"),ku=Kr("safeDump","dump"),Fu={Type:Tu,Schema:ju,FAILSAFE_SCHEMA:wu,JSON_SCHEMA:Au,CORE_SCHEMA:Su,DEFAULT_SCHEMA:Cu,load:Eu,loadAll:Ru,dump:Iu,YAMLException:Pu,types:Ou,safeLoad:qu,safeLoadAll:Nu,safeDump:ku};const Ms=Object.assign({"/docs/openapi/asserted_distribution.yaml":$c,"/docs/openapi/biological_association.yaml":Dc,"/docs/openapi/biological_associations_graph.yaml":Gc,"/docs/openapi/biological_relationship.yaml":Lc,"/docs/openapi/cached_map.yaml":Uc,"/docs/openapi/citation.yaml":Bc,"/docs/openapi/collecting_event.yaml":Mc,"/docs/openapi/collection_object.yaml":Vc,"/docs/openapi/common_name.yaml":Kc,"/docs/openapi/content.yaml":Hc,"/docs/openapi/controlled_vocabulary_term.yaml":Wc,"/docs/openapi/conveyance.yaml":Xc,"/docs/openapi/data_attribute.yaml":Yc,"/docs/openapi/depiction.yaml":zc,"/docs/openapi/download.yaml":Jc,"/docs/openapi/dwc_occurrence.yaml":Qc,"/docs/openapi/field_occurrence.yaml":Zc,"/docs/openapi/identifier.yaml":el,"/docs/openapi/image.yaml":nl,"/docs/openapi/lead.yaml":tl,"/docs/openapi/news.yaml":rl,"/docs/openapi/note.yaml":il,"/docs/openapi/observation.yaml":ol,"/docs/openapi/observation_matrix.yaml":sl,"/docs/openapi/otu.yaml":al,"/docs/openapi/person.yaml":pl,"/docs/openapi/sound.yaml":cl,"/docs/openapi/source.yaml":ll,"/docs/openapi/tag.yaml":dl,"/docs/openapi/taxon_determination.yaml":ul,"/docs/openapi/taxon_name.yaml":ml,"/docs/openapi/taxon_name_classification.yaml":yl,"/docs/openapi/taxon_name_relationship.yaml":fl,"/docs/openapi/utility.yaml":gl}),tr=new Map;function $u(e){return e.replace(/_/g," ").replace(/\bdwc\b/gi,"DWC").replace(/\b\w/g,n=>n.toUpperCase())}const Du=Object.keys(Ms).map(e=>{const n=e.split("/").pop(),t=n.replace(".yaml","");return{id:t,filename:n,label:$u(t)}}).sort((e,n)=>e.label.localeCompare(n.label));function Gu(){const e=Kn(null),n=Kn(null);function t(r){n.value=null;const i=`/docs/openapi/${r}`;if(tr.has(i)){e.value=tr.get(i);return}const o=Ms[i];if(!o){n.value=`Spec file not found: ${r}`,e.value=null;return}try{const s=Fu.load(o);tr.set(i,s),e.value=s}catch(s){n.value=`Failed to parse ${r}: ${s.message}`,e.value=null}}return{spec:e,error:n,loadSpec:t,resources:Du}}const Lu={class:"app-body"},Uu={__name:"App",setup(e){const{spec:n,error:t,resources:r,loadSpec:i}=Gu();function o(){const p=new URLSearchParams(window.location.search).get("resource");return p&&r.find(d=>d.id===p)?p:r[0].id}const s=Kn(o());return Dn(s,a=>{const p=r.find(d=>d.id===a);if(p){i(p.filename);const d=new URL(window.location);d.searchParams.set("resource",a),window.history.replaceState({},"",d)}}),So(()=>{const a=r.find(p=>p.id===s.value);a&&i(a.filename)}),(a,p)=>(ze(),ln(_e,null,[be(Sc),Ge("div",Lu,[be(Oc,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=d=>s.value=d),resources:$n(r)},null,8,["modelValue","resources"]),be(Fc,{spec:$n(n),error:$n(t)},null,8,["spec","error"])])],64))}},Bu=$t(Uu,[["__scopeId","data-v-98c994c8"]]);_c(Bu).mount("#app");
