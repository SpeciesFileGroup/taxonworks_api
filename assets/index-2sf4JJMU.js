import{r as Xs}from"./swagger-ui-dist-DtjOS617.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function _r(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const D={},_n=[],Oe=()=>{},Hi=()=>!1,Et=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xr=e=>e.startsWith("onUpdate:"),Q=Object.assign,Tr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ys=Object.prototype.hasOwnProperty,M=(e,n)=>Ys.call(e,n),R=Array.isArray,xn=e=>nt(e)==="[object Map]",Wi=e=>nt(e)==="[object Set]",Qr=e=>nt(e)==="[object Date]",N=e=>typeof e=="function",Y=e=>typeof e=="string",Ne=e=>typeof e=="symbol",U=e=>e!==null&&typeof e=="object",Xi=e=>(U(e)||N(e))&&N(e.then)&&N(e.catch),Yi=Object.prototype.toString,nt=e=>Yi.call(e),zs=e=>nt(e).slice(8,-1),zi=e=>nt(e)==="[object Object]",vr=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pt=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Js=/-\w/g,Ue=Pt(e=>e.replace(Js,n=>n.slice(1).toUpperCase())),Zs=/\B([A-Z])/g,nn=Pt(e=>e.replace(Zs,"-$1").toLowerCase()),Ji=Pt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ut=Pt(e=>e?`on${Ji(e)}`:""),me=(e,n)=>!Object.is(e,n),ut=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Zi=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},jr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ei;const Rt=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(e){if(R(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=Y(r)?ta(r):wr(r);if(i)for(const o in i)n[o]=i[o]}return n}else if(Y(e)||U(e))return e}const Qs=/;(?![^(]*\))/g,ea=/:([^]+)/,na=/\/\*[^]*?\*\//g;function ta(e){const n={};return e.replace(na,"").split(Qs).forEach(t=>{if(t){const r=t.split(ea);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Vn(e){let n="";if(Y(e))n=e;else if(R(e))for(let t=0;t<e.length;t++){const r=Vn(e[t]);r&&(n+=r+" ")}else if(U(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const ra="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ia=_r(ra);function Qi(e){return!!e||e===""}function oa(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=Ar(e[r],n[r]);return t}function Ar(e,n){if(e===n)return!0;let t=Qr(e),r=Qr(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Ne(e),r=Ne(n),t||r)return e===n;if(t=R(e),r=R(n),t||r)return t&&r?oa(e,n):!1;if(t=U(e),r=U(n),t||r){if(!t||!r)return!1;const i=Object.keys(e).length,o=Object.keys(n).length;if(i!==o)return!1;for(const s in e){const a=e.hasOwnProperty(s),p=n.hasOwnProperty(s);if(a&&!p||!a&&p||!Ar(e[s],n[s]))return!1}}return String(e)===String(n)}const eo=e=>!!(e&&e.__v_isRef===!0),Sr=e=>Y(e)?e:e==null?"":R(e)||U(e)&&(e.toString===Yi||!N(e.toString))?eo(e)?Sr(e.value):JSON.stringify(e,no,2):String(e),no=(e,n)=>eo(n)?no(e,n.value):xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],o)=>(t[Bt(r,o)+" =>"]=i,t),{})}:Wi(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Bt(t))}:Ne(n)?Bt(n):U(n)&&!R(n)&&!zi(n)?String(n):n,Bt=(e,n="")=>{var t;return Ne(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let ue;class sa{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ue,!n&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=ue;try{return ue=this,n()}finally{ue=t}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){this._on>0&&--this._on===0&&(ue=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function aa(){return ue}let K;const Vt=new WeakSet;class to{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vt.has(this)&&(Vt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ni(this),oo(this);const n=K,t=ve;K=this,ve=!0;try{return this.fn()}finally{so(this),K=n,ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Er(n);this.deps=this.depsTail=void 0,ni(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let ro=0,$n,Dn;function io(e,n=!1){if(e.flags|=8,n){e.next=Dn,Dn=e;return}e.next=$n,$n=e}function Ir(){ro++}function Cr(){if(--ro>0)return;if(Dn){let n=Dn;for(Dn=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;$n;){let n=$n;for($n=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function oo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function so(e){let n,t=e.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Er(r),pa(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=n,e.depsTail=t}function rr(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ao(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ao(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Kn)||(e.globalVersion=Kn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rr(e))))return;e.flags|=2;const n=e.dep,t=K,r=ve;K=e,ve=!0;try{oo(e);const i=e.fn(e._value);(n.version===0||me(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{K=t,ve=r,so(e),e.flags&=-3}}function Er(e,n=!1){const{dep:t,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Er(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function pa(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ve=!0;const po=[];function Be(){po.push(ve),ve=!1}function Ve(){const e=po.pop();ve=e===void 0?!0:e}function ni(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=K;K=void 0;try{n()}finally{K=t}}}let Kn=0;class ca{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!K||!ve||K===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==K)t=this.activeLink=new ca(K,this),K.deps?(t.prevDep=K.depsTail,K.depsTail.nextDep=t,K.depsTail=t):K.deps=K.depsTail=t,co(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=K.depsTail,t.nextDep=void 0,K.depsTail.nextDep=t,K.depsTail=t,K.deps===t&&(K.deps=r)}return t}trigger(n){this.version++,Kn++,this.notify(n)}notify(n){Ir();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cr()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)co(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ir=new WeakMap,cn=Symbol(""),or=Symbol(""),Hn=Symbol("");function ee(e,n,t){if(ve&&K){let r=ir.get(e);r||ir.set(e,r=new Map);let i=r.get(t);i||(r.set(t,i=new qt),i.map=r,i.key=t),i.track()}}function Me(e,n,t,r,i,o){const s=ir.get(e);if(!s){Kn++;return}const a=p=>{p&&p.trigger()};if(Ir(),n==="clear")s.forEach(a);else{const p=R(e),d=p&&vr(t);if(p&&t==="length"){const l=Number(r);s.forEach((u,h)=>{(h==="length"||h===Hn||!Ne(h)&&h>=l)&&a(u)})}else switch((t!==void 0||s.has(void 0))&&a(s.get(t)),d&&a(s.get(Hn)),n){case"add":p?d&&a(s.get("length")):(a(s.get(cn)),xn(e)&&a(s.get(or)));break;case"delete":p||(a(s.get(cn)),xn(e)&&a(s.get(or)));break;case"set":xn(e)&&a(s.get(cn));break}}Cr()}function un(e){const n=G(e);return n===e?n:(ee(n,"iterate",Hn),xe(e)?n:n.map(we))}function Ot(e){return ee(e=G(e),"iterate",Hn),e}function ze(e,n){return Ke(e)?jn(ln(e)?we(n):n):we(n)}const la={__proto__:null,[Symbol.iterator](){return Kt(this,Symbol.iterator,e=>ze(this,e))},concat(...e){return un(this).concat(...e.map(n=>R(n)?un(n):n))},entries(){return Kt(this,"entries",e=>(e[1]=ze(this,e[1]),e))},every(e,n){return $e(this,"every",e,n,void 0,arguments)},filter(e,n){return $e(this,"filter",e,n,t=>t.map(r=>ze(this,r)),arguments)},find(e,n){return $e(this,"find",e,n,t=>ze(this,t),arguments)},findIndex(e,n){return $e(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return $e(this,"findLast",e,n,t=>ze(this,t),arguments)},findLastIndex(e,n){return $e(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return $e(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ht(this,"includes",e)},indexOf(...e){return Ht(this,"indexOf",e)},join(e){return un(this).join(e)},lastIndexOf(...e){return Ht(this,"lastIndexOf",e)},map(e,n){return $e(this,"map",e,n,void 0,arguments)},pop(){return Rn(this,"pop")},push(...e){return Rn(this,"push",e)},reduce(e,...n){return ti(this,"reduce",e,n)},reduceRight(e,...n){return ti(this,"reduceRight",e,n)},shift(){return Rn(this,"shift")},some(e,n){return $e(this,"some",e,n,void 0,arguments)},splice(...e){return Rn(this,"splice",e)},toReversed(){return un(this).toReversed()},toSorted(e){return un(this).toSorted(e)},toSpliced(...e){return un(this).toSpliced(...e)},unshift(...e){return Rn(this,"unshift",e)},values(){return Kt(this,"values",e=>ze(this,e))}};function Kt(e,n,t){const r=Ot(e),i=r[n]();return r!==e&&!xe(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=t(o.value)),o}),i}const da=Array.prototype;function $e(e,n,t,r,i,o){const s=Ot(e),a=s!==e&&!xe(e),p=s[n];if(p!==da[n]){const u=p.apply(e,o);return a?we(u):u}let d=t;s!==e&&(a?d=function(u,h){return t.call(this,ze(e,u),h,e)}:t.length>2&&(d=function(u,h){return t.call(this,u,h,e)}));const l=p.call(s,d,r);return a&&i?i(l):l}function ti(e,n,t,r){const i=Ot(e);let o=t;return i!==e&&(xe(e)?t.length>3&&(o=function(s,a,p){return t.call(this,s,a,p,e)}):o=function(s,a,p){return t.call(this,s,ze(e,a),p,e)}),i[n](o,...r)}function Ht(e,n,t){const r=G(e);ee(r,"iterate",Hn);const i=r[n](...t);return(i===-1||i===!1)&&Or(t[0])?(t[0]=G(t[0]),r[n](...t)):i}function Rn(e,n,t=[]){Be(),Ir();const r=G(e)[n].apply(e,t);return Cr(),Ve(),r}const ua=_r("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ne));function ma(e){Ne(e)||(e=String(e));const n=G(this);return ee(n,"has",e),n.hasOwnProperty(e)}class uo{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?ja:fo:o?ho:yo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const s=R(n);if(!i){let p;if(s&&(p=la[t]))return p;if(t==="hasOwnProperty")return ma}const a=Reflect.get(n,t,ne(n)?n:r);if((Ne(t)?lo.has(t):ua(t))||(i||ee(n,"get",t),o))return a;if(ne(a)){const p=s&&vr(t)?a:a.value;return i&&U(p)?ar(p):p}return U(a)?i?ar(a):Rr(a):a}}class mo extends uo{constructor(n=!1){super(!1,n)}set(n,t,r,i){let o=n[t];const s=R(n)&&vr(t);if(!this._isShallow){const d=Ke(o);if(!xe(r)&&!Ke(r)&&(o=G(o),r=G(r)),!s&&ne(o)&&!ne(r))return d||(o.value=r),!0}const a=s?Number(t)<n.length:M(n,t),p=Reflect.set(n,t,r,ne(n)?n:i);return n===G(i)&&(a?me(r,o)&&Me(n,"set",t,r):Me(n,"add",t,r)),p}deleteProperty(n,t){const r=M(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&Me(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!Ne(t)||!lo.has(t))&&ee(n,"has",t),r}ownKeys(n){return ee(n,"iterate",R(n)?"length":cn),Reflect.ownKeys(n)}}class ya extends uo{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const ha=new mo,fa=new ya,ga=new mo(!0);const sr=e=>e,ct=e=>Reflect.getPrototypeOf(e);function ba(e,n,t){return function(...r){const i=this.__v_raw,o=G(i),s=xn(o),a=e==="entries"||e===Symbol.iterator&&s,p=e==="keys"&&s,d=i[e](...r),l=t?sr:n?jn:we;return!n&&ee(o,"iterate",p?or:cn),Q(Object.create(d),{next(){const{value:u,done:h}=d.next();return h?{value:u,done:h}:{value:a?[l(u[0]),l(u[1])]:l(u),done:h}}})}}function lt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function _a(e,n){const t={get(i){const o=this.__v_raw,s=G(o),a=G(i);e||(me(i,a)&&ee(s,"get",i),ee(s,"get",a));const{has:p}=ct(s),d=n?sr:e?jn:we;if(p.call(s,i))return d(o.get(i));if(p.call(s,a))return d(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&ee(G(i),"iterate",cn),i.size},has(i){const o=this.__v_raw,s=G(o),a=G(i);return e||(me(i,a)&&ee(s,"has",i),ee(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,p=G(a),d=n?sr:e?jn:we;return!e&&ee(p,"iterate",cn),a.forEach((l,u)=>i.call(o,d(l),d(u),s))}};return Q(t,e?{add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear")}:{add(i){!n&&!xe(i)&&!Ke(i)&&(i=G(i));const o=G(this);return ct(o).has.call(o,i)||(o.add(i),Me(o,"add",i,i)),this},set(i,o){!n&&!xe(o)&&!Ke(o)&&(o=G(o));const s=G(this),{has:a,get:p}=ct(s);let d=a.call(s,i);d||(i=G(i),d=a.call(s,i));const l=p.call(s,i);return s.set(i,o),d?me(o,l)&&Me(s,"set",i,o):Me(s,"add",i,o),this},delete(i){const o=G(this),{has:s,get:a}=ct(o);let p=s.call(o,i);p||(i=G(i),p=s.call(o,i)),a&&a.call(o,i);const d=o.delete(i);return p&&Me(o,"delete",i,void 0),d},clear(){const i=G(this),o=i.size!==0,s=i.clear();return o&&Me(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ba(i,e,n)}),t}function Pr(e,n){const t=_a(e,n);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(M(t,i)&&i in r?t:r,i,o)}const xa={get:Pr(!1,!1)},Ta={get:Pr(!1,!0)},va={get:Pr(!0,!1)};const yo=new WeakMap,ho=new WeakMap,fo=new WeakMap,ja=new WeakMap;function wa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Aa(e){return e.__v_skip||!Object.isExtensible(e)?0:wa(zs(e))}function Rr(e){return Ke(e)?e:qr(e,!1,ha,xa,yo)}function Sa(e){return qr(e,!1,ga,Ta,ho)}function ar(e){return qr(e,!0,fa,va,fo)}function qr(e,n,t,r,i){if(!U(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=Aa(e);if(o===0)return e;const s=i.get(e);if(s)return s;const a=new Proxy(e,o===2?r:t);return i.set(e,a),a}function ln(e){return Ke(e)?ln(e.__v_raw):!!(e&&e.__v_isReactive)}function Ke(e){return!!(e&&e.__v_isReadonly)}function xe(e){return!!(e&&e.__v_isShallow)}function Or(e){return e?!!e.__v_raw:!1}function G(e){const n=e&&e.__v_raw;return n?G(n):e}function Ia(e){return!M(e,"__v_skip")&&Object.isExtensible(e)&&Zi(e,"__v_skip",!0),e}const we=e=>U(e)?Rr(e):e,jn=e=>U(e)?ar(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function Wn(e){return Ca(e,!1)}function Ca(e,n){return ne(e)?e:new Ea(e,n)}class Ea{constructor(n,t){this.dep=new qt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:G(n),this._value=t?n:we(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||xe(n)||Ke(n);n=r?n:G(n),me(n,t)&&(this._rawValue=n,this._value=r?n:we(n),this.dep.trigger())}}function On(e){return ne(e)?e.value:e}const Pa={get:(e,n,t)=>n==="__v_raw"?e:On(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return ne(i)&&!ne(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function go(e){return ln(e)?e:new Proxy(e,Pa)}class Ra{constructor(n){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new qt,{get:r,set:i}=n(t.track.bind(t),t.trigger.bind(t));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(n){this._set(n)}}function qa(e){return new Ra(e)}class Oa{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new qt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return io(this,!0),!0}get value(){const n=this.dep.track();return ao(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function ka(e,n,t=!1){let r,i;return N(e)?r=e:(r=e.get,i=e.set),new Oa(r,i,t)}const dt={},gt=new WeakMap;let pn;function Na(e,n=!1,t=pn){if(t){let r=gt.get(t);r||gt.set(t,r=[]),r.push(e)}}function Fa(e,n,t=D){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:p}=t,d=q=>i?q:xe(q)||i===!1||i===0?Le(q,1):Le(q);let l,u,h,f,S=!1,v=!1;if(ne(e)?(u=()=>e.value,S=xe(e)):ln(e)?(u=()=>d(e),S=!0):R(e)?(v=!0,S=e.some(q=>ln(q)||xe(q)),u=()=>e.map(q=>{if(ne(q))return q.value;if(ln(q))return d(q);if(N(q))return p?p(q,2):q()})):N(e)?n?u=p?()=>p(e,2):e:u=()=>{if(h){Be();try{h()}finally{Ve()}}const q=pn;pn=l;try{return p?p(e,3,[f]):e(f)}finally{pn=q}}:u=Oe,n&&i){const q=u,z=i===!0?1/0:i;u=()=>Le(q(),z)}const k=aa(),F=()=>{l.stop(),k&&k.active&&Tr(k.effects,l)};if(o&&n){const q=n;n=(...z)=>{q(...z),F()}}let I=v?new Array(e.length).fill(dt):dt;const H=q=>{if(!(!(l.flags&1)||!l.dirty&&!q))if(n){const z=l.run();if(i||S||(v?z.some((Xe,Ae)=>me(Xe,I[Ae])):me(z,I))){h&&h();const Xe=pn;pn=l;try{const Ae=[z,I===dt?void 0:v&&I[0]===dt?[]:I,f];I=z,p?p(n,3,Ae):n(...Ae)}finally{pn=Xe}}}else l.run()};return a&&a(H),l=new to(u),l.scheduler=s?()=>s(H,!1):H,f=q=>Na(q,!1,l),h=l.onStop=()=>{const q=gt.get(l);if(q){if(p)p(q,4);else for(const z of q)z();gt.delete(l)}},n?r?H(!0):I=l.run():s?s(H.bind(null,!0),!0):l.run(),F.pause=l.pause.bind(l),F.resume=l.resume.bind(l),F.stop=F,F}function Le(e,n=1/0,t){if(n<=0||!U(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ne(e))Le(e.value,n,t);else if(R(e))for(let r=0;r<e.length;r++)Le(e[r],n,t);else if(Wi(e)||xn(e))e.forEach(r=>{Le(r,n,t)});else if(zi(e)){for(const r in e)Le(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Le(e[r],n,t)}return e}function tt(e,n,t,r){try{return r?e(...r):e()}catch(i){kt(i,n,t)}}function Fe(e,n,t,r){if(N(e)){const i=tt(e,n,t,r);return i&&Xi(i)&&i.catch(o=>{kt(o,n,t)}),i}if(R(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Fe(e[o],n,t,r));return i}}function kt(e,n,t,r=!0){const i=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||D;if(n){let a=n.parent;const p=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,p,d)===!1)return}a=a.parent}if(o){Be(),tt(o,null,10,[e,p,d]),Ve();return}}$a(e,t,i,r,s)}function $a(e,n,t,r=!0,i=!1){if(i)throw e;console.error(e)}const oe=[];let Re=-1;const Tn=[];let Je=null,yn=0;const bo=Promise.resolve();let bt=null;function Da(e){const n=bt||bo;return e?n.then(this?e.bind(this):e):n}function Ga(e){let n=Re+1,t=oe.length;for(;n<t;){const r=n+t>>>1,i=oe[r],o=Xn(i);o<e||o===e&&i.flags&2?n=r+1:t=r}return n}function kr(e){if(!(e.flags&1)){const n=Xn(e),t=oe[oe.length-1];!t||!(e.flags&2)&&n>=Xn(t)?oe.push(e):oe.splice(Ga(n),0,e),e.flags|=1,_o()}}function _o(){bt||(bt=bo.then(To))}function Ma(e){R(e)?Tn.push(...e):Je&&e.id===-1?Je.splice(yn+1,0,e):e.flags&1||(Tn.push(e),e.flags|=1),_o()}function ri(e,n,t=Re+1){for(;t<oe.length;t++){const r=oe[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;oe.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xo(e){if(Tn.length){const n=[...new Set(Tn)].sort((t,r)=>Xn(t)-Xn(r));if(Tn.length=0,Je){Je.push(...n);return}for(Je=n,yn=0;yn<Je.length;yn++){const t=Je[yn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Je=null,yn=0}}const Xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function To(e){try{for(Re=0;Re<oe.length;Re++){const n=oe[Re];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),tt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Re<oe.length;Re++){const n=oe[Re];n&&(n.flags&=-2)}Re=-1,oe.length=0,xo(),bt=null,(oe.length||Tn.length)&&To()}}let _e=null,vo=null;function _t(e){const n=_e;return _e=e,vo=e&&e.type.__scopeId||null,n}function La(e,n=_e,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&mi(-1);const o=_t(n);let s;try{s=e(...i)}finally{_t(o),r._d&&mi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Ua(e,n){if(_e===null)return e;const t=Dt(_e),r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[o,s,a,p=D]=n[i];o&&(N(o)&&(o={mounted:o,updated:o}),o.deep&&Le(s),r.push({dir:o,instance:t,value:s,oldValue:void 0,arg:a,modifiers:p}))}return e}function sn(e,n,t,r){const i=e.dirs,o=n&&n.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let p=a.dir[r];p&&(Be(),Fe(p,t,8,[e.el,a,e,n]),Ve())}}function Ba(e,n){if(se){let t=se.provides;const r=se.parent&&se.parent.provides;r===t&&(t=se.provides=Object.create(r)),t[e]=n}}function mt(e,n,t=!1){const r=Zo();if(r||vn){let i=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&N(n)?n.call(r&&r.proxy):n}}const Va=Symbol.for("v-scx"),Ka=()=>mt(Va);function Ha(e,n){return Nr(e,null,{flush:"sync"})}function Gn(e,n,t){return Nr(e,n,t)}function Nr(e,n,t=D){const{immediate:r,deep:i,flush:o,once:s}=t,a=Q({},t),p=n&&r||!n&&o!=="post";let d;if(zn){if(o==="sync"){const f=Ka();d=f.__watcherHandles||(f.__watcherHandles=[])}else if(!p){const f=()=>{};return f.stop=Oe,f.resume=Oe,f.pause=Oe,f}}const l=se;a.call=(f,S,v)=>Fe(f,l,S,v);let u=!1;o==="post"?a.scheduler=f=>{de(f,l&&l.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(f,S)=>{S?f():kr(f)}),a.augmentJob=f=>{n&&(f.flags|=4),u&&(f.flags|=2,l&&(f.id=l.uid,f.i=l))};const h=Fa(e,n,a);return zn&&(d?d.push(h):p&&h()),h}function Wa(e,n,t){const r=this.proxy,i=Y(e)?e.includes(".")?jo(r,e):()=>r[e]:e.bind(r,r);let o;N(n)?o=n:(o=n.handler,t=n);const s=rt(this),a=Nr(i,o.bind(r),t);return s(),a}function jo(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Xa=Symbol("_vte"),Ya=e=>e.__isTeleport,za=Symbol("_leaveCb");function Fr(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Fr(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function wo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ii(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const xt=new WeakMap;function Mn(e,n,t,r,i=!1){if(R(e)){e.forEach((v,k)=>Mn(v,n&&(R(n)?n[k]:n),t,r,i));return}if(Ln(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mn(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?Dt(r.component):r.el,s=i?null:o,{i:a,r:p}=e,d=n&&n.r,l=a.refs===D?a.refs={}:a.refs,u=a.setupState,h=G(u),f=u===D?Hi:v=>ii(l,v)?!1:M(h,v),S=(v,k)=>!(k&&ii(l,k));if(d!=null&&d!==p){if(oi(n),Y(d))l[d]=null,f(d)&&(u[d]=null);else if(ne(d)){const v=n;S(d,v.k)&&(d.value=null),v.k&&(l[v.k]=null)}}if(N(p))tt(p,a,12,[s,l]);else{const v=Y(p),k=ne(p);if(v||k){const F=()=>{if(e.f){const I=v?f(p)?u[p]:l[p]:S()||!e.k?p.value:l[e.k];if(i)R(I)&&Tr(I,o);else if(R(I))I.includes(o)||I.push(o);else if(v)l[p]=[o],f(p)&&(u[p]=l[p]);else{const H=[o];S(p,e.k)&&(p.value=H),e.k&&(l[e.k]=H)}}else v?(l[p]=s,f(p)&&(u[p]=s)):k&&(S(p,e.k)&&(p.value=s),e.k&&(l[e.k]=s))};if(s){const I=()=>{F(),xt.delete(e)};I.id=-1,xt.set(e,I),de(I,t)}else oi(e),F()}}}function oi(e){const n=xt.get(e);n&&(n.flags|=8,xt.delete(e))}Rt().requestIdleCallback;Rt().cancelIdleCallback;const Ln=e=>!!e.type.__asyncLoader,Ao=e=>e.type.__isKeepAlive;function Ja(e,n){So(e,"a",n)}function Za(e,n){So(e,"da",n)}function So(e,n,t=se){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Nt(n,r,t),t){let i=t.parent;for(;i&&i.parent;)Ao(i.parent.vnode)&&Qa(r,n,t,i),i=i.parent}}function Qa(e,n,t,r){const i=Nt(n,e,r,!0);Co(()=>{Tr(r[n],i)},t)}function Nt(e,n,t=se,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{Be();const a=rt(t),p=Fe(n,t,e,s);return a(),Ve(),p});return r?i.unshift(o):i.push(o),o}}const We=e=>(n,t=se)=>{(!zn||e==="sp")&&Nt(e,(...r)=>n(...r),t)},ep=We("bm"),$r=We("m"),np=We("bu"),tp=We("u"),Io=We("bum"),Co=We("um"),rp=We("sp"),ip=We("rtg"),op=We("rtc");function sp(e,n=se){Nt("ec",e,n)}const ap=Symbol.for("v-ndc");function pp(e,n,t,r){let i;const o=t,s=R(e);if(s||Y(e)){const a=s&&ln(e);let p=!1,d=!1;a&&(p=!xe(e),d=Ke(e),e=Ot(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=n(p?d?jn(we(e[l])):we(e[l]):e[l],l,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,o)}else if(U(e))if(e[Symbol.iterator])i=Array.from(e,(a,p)=>n(a,p,void 0,o));else{const a=Object.keys(e);i=new Array(a.length);for(let p=0,d=a.length;p<d;p++){const l=a[p];i[p]=n(e[l],l,p,o)}}else i=[];return i}const pr=e=>e?Qo(e)?Dt(e):pr(e.parent):null,Un=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Po(e),$forceUpdate:e=>e.f||(e.f=()=>{kr(e.update)}),$nextTick:e=>e.n||(e.n=Da.bind(e.proxy)),$watch:e=>Wa.bind(e)}),Wt=(e,n)=>e!==D&&!e.__isScriptSetup&&M(e,n),cp={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:p}=e;if(n[0]!=="$"){const h=s[n];if(h!==void 0)switch(h){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(Wt(r,n))return s[n]=1,r[n];if(i!==D&&M(i,n))return s[n]=2,i[n];if(M(o,n))return s[n]=3,o[n];if(t!==D&&M(t,n))return s[n]=4,t[n];cr&&(s[n]=0)}}const d=Un[n];let l,u;if(d)return n==="$attrs"&&ee(e.attrs,"get",""),d(e);if((l=a.__cssModules)&&(l=l[n]))return l;if(t!==D&&M(t,n))return s[n]=4,t[n];if(u=p.config.globalProperties,M(u,n))return u[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return Wt(i,n)?(i[n]=t,!0):r!==D&&M(r,n)?(r[n]=t,!0):M(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,props:o,type:s}},a){let p;return!!(t[a]||e!==D&&a[0]!=="$"&&M(e,a)||Wt(n,a)||M(o,a)||M(r,a)||M(Un,a)||M(i.config.globalProperties,a)||(p=s.__cssModules)&&p[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:M(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Tt(e){return R(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function lp(e,n){return!e||!n?e||n:R(e)&&R(n)?e.concat(n):Q({},Tt(e),Tt(n))}let cr=!0;function dp(e){const n=Po(e),t=e.proxy,r=e.ctx;cr=!1,n.beforeCreate&&si(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:p,inject:d,created:l,beforeMount:u,mounted:h,beforeUpdate:f,updated:S,activated:v,deactivated:k,beforeDestroy:F,beforeUnmount:I,destroyed:H,unmounted:q,render:z,renderTracked:Xe,renderTriggered:Ae,errorCaptured:Ye,serverPrefetch:it,expose:tn,inheritAttrs:In,components:ot,directives:st,filters:Mt}=n;if(d&&up(d,r,null),s)for(const W in s){const B=s[W];N(B)&&(r[W]=B.bind(t))}if(i){const W=i.call(t,t);U(W)&&(e.data=Rr(W))}if(cr=!0,o)for(const W in o){const B=o[W],rn=N(B)?B.bind(t,t):N(B.get)?B.get.bind(t,t):Oe,at=!N(B)&&N(B.set)?B.set.bind(t):Oe,on=ns({get:rn,set:at});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>on.value,set:Se=>on.value=Se})}if(a)for(const W in a)Eo(a[W],r,t,W);if(p){const W=N(p)?p.call(t):p;Reflect.ownKeys(W).forEach(B=>{Ba(B,W[B])})}l&&si(l,e,"c");function re(W,B){R(B)?B.forEach(rn=>W(rn.bind(t))):B&&W(B.bind(t))}if(re(ep,u),re($r,h),re(np,f),re(tp,S),re(Ja,v),re(Za,k),re(sp,Ye),re(op,Xe),re(ip,Ae),re(Io,I),re(Co,q),re(rp,it),R(tn))if(tn.length){const W=e.exposed||(e.exposed={});tn.forEach(B=>{Object.defineProperty(W,B,{get:()=>t[B],set:rn=>t[B]=rn,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===Oe&&(e.render=z),In!=null&&(e.inheritAttrs=In),ot&&(e.components=ot),st&&(e.directives=st),it&&wo(e)}function up(e,n,t=Oe){R(e)&&(e=lr(e));for(const r in e){const i=e[r];let o;U(i)?"default"in i?o=mt(i.from||r,i.default,!0):o=mt(i.from||r):o=mt(i),ne(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):n[r]=o}}function si(e,n,t){Fe(R(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Eo(e,n,t,r){let i=r.includes(".")?jo(t,r):()=>t[r];if(Y(e)){const o=n[e];N(o)&&Gn(i,o)}else if(N(e))Gn(i,e.bind(t));else if(U(e))if(R(e))e.forEach(o=>Eo(o,n,t,r));else{const o=N(e.handler)?e.handler.bind(t):n[e.handler];N(o)&&Gn(i,o,e)}}function Po(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(n);let p;return a?p=a:!i.length&&!t&&!r?p=n:(p={},i.length&&i.forEach(d=>vt(p,d,s,!0)),vt(p,n,s)),U(n)&&o.set(n,p),p}function vt(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&vt(e,o,t,!0),i&&i.forEach(s=>vt(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const a=mp[s]||t&&t[s];e[s]=a?a(e[s],n[s]):n[s]}return e}const mp={data:ai,props:pi,emits:pi,methods:kn,computed:kn,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:kn,directives:kn,watch:hp,provide:ai,inject:yp};function ai(e,n){return n?e?function(){return Q(N(e)?e.call(this,this):e,N(n)?n.call(this,this):n)}:n:e}function yp(e,n){return kn(lr(e),lr(n))}function lr(e){if(R(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function ie(e,n){return e?[...new Set([].concat(e,n))]:n}function kn(e,n){return e?Q(Object.create(null),e,n):n}function pi(e,n){return e?R(e)&&R(n)?[...new Set([...e,...n])]:Q(Object.create(null),Tt(e),Tt(n??{})):n}function hp(e,n){if(!e)return n;if(!n)return e;const t=Q(Object.create(null),e);for(const r in n)t[r]=ie(e[r],n[r]);return t}function Ro(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fp=0;function gp(e,n){return function(r,i=null){N(r)||(r=Q({},r)),i!=null&&!U(i)&&(i=null);const o=Ro(),s=new WeakSet,a=[];let p=!1;const d=o.app={_uid:fp++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:zp,get config(){return o.config},set config(l){},use(l,...u){return s.has(l)||(l&&N(l.install)?(s.add(l),l.install(d,...u)):N(l)&&(s.add(l),l(d,...u))),d},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),d},component(l,u){return u?(o.components[l]=u,d):o.components[l]},directive(l,u){return u?(o.directives[l]=u,d):o.directives[l]},mount(l,u,h){if(!p){const f=d._ceVNode||pe(r,i);return f.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),e(f,l,h),p=!0,d._container=l,l.__vue_app__=d,Dt(f.component)}},onUnmount(l){a.push(l)},unmount(){p&&(Fe(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(l,u){return o.provides[l]=u,d},runWithContext(l){const u=vn;vn=d;try{return l()}finally{vn=u}}};return d}}let vn=null;function bp(e,n,t=D){const r=Zo(),i=Ue(n),o=nn(n),s=qo(e,i),a=qa((p,d)=>{let l,u=D,h;return Ha(()=>{const f=e[i];me(l,f)&&(l=f,d())}),{get(){return p(),t.get?t.get(l):l},set(f){const S=t.set?t.set(f):f;if(!me(S,l)&&!(u!==D&&me(f,u)))return;const v=r.vnode.props;v&&(n in v||i in v||o in v)&&(`onUpdate:${n}`in v||`onUpdate:${i}`in v||`onUpdate:${o}`in v)||(l=f,d()),r.emit(`update:${n}`,S),me(f,S)&&me(f,u)&&!me(S,h)&&d(),u=f,h=S}}});return a[Symbol.iterator]=()=>{let p=0;return{next(){return p<2?{value:p++?s||D:a,done:!1}:{done:!0}}}},a}const qo=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Ue(n)}Modifiers`]||e[`${nn(n)}Modifiers`];function _p(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||D;let i=t;const o=n.startsWith("update:"),s=o&&qo(r,n.slice(7));s&&(s.trim&&(i=t.map(l=>Y(l)?l.trim():l)),s.number&&(i=t.map(jr)));let a,p=r[a=Ut(n)]||r[a=Ut(Ue(n))];!p&&o&&(p=r[a=Ut(nn(n))]),p&&Fe(p,e,6,i);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Fe(d,e,6,i)}}const xp=new WeakMap;function Oo(e,n,t=!1){const r=t?xp:n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!N(e)){const p=d=>{const l=Oo(d,n,!0);l&&(a=!0,Q(s,l))};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!o&&!a?(U(e)&&r.set(e,null),null):(R(o)?o.forEach(p=>s[p]=null):Q(s,o),U(e)&&r.set(e,s),s)}function Ft(e,n){return!e||!Et(n)?!1:(n=n.slice(2).replace(/Once$/,""),M(e,n[0].toLowerCase()+n.slice(1))||M(e,nn(n))||M(e,n))}function ci(e){const{type:n,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:p,render:d,renderCache:l,props:u,data:h,setupState:f,ctx:S,inheritAttrs:v}=e,k=_t(e);let F,I;try{if(t.shapeFlag&4){const q=i||r,z=q;F=qe(d.call(z,q,l,u,f,h,S)),I=a}else{const q=n;F=qe(q.length>1?q(u,{attrs:a,slots:s,emit:p}):q(u,null)),I=n.props?a:Tp(a)}}catch(q){Bn.length=0,kt(q,e,1),F=pe(Qe)}let H=F;if(I&&v!==!1){const q=Object.keys(I),{shapeFlag:z}=H;q.length&&z&7&&(o&&q.some(xr)&&(I=vp(I,o)),H=wn(H,I,!1,!0))}return t.dirs&&(H=wn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&Fr(H,t.transition),F=H,_t(k),F}const Tp=e=>{let n;for(const t in e)(t==="class"||t==="style"||Et(t))&&((n||(n={}))[t]=e[t]);return n},vp=(e,n)=>{const t={};for(const r in e)(!xr(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function jp(e,n,t){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:p}=n,d=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return r?li(r,s,d):!!s;if(p&8){const l=n.dynamicProps;for(let u=0;u<l.length;u++){const h=l[u];if(ko(s,r,h)&&!Ft(d,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?li(r,s,d):!0:!!s;return!1}function li(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(ko(n,e,o)&&!Ft(t,o))return!0}return!1}function ko(e,n,t){const r=e[t],i=n[t];return t==="style"&&U(r)&&U(i)?!Ar(r,i):r!==i}function wp({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const No={},Fo=()=>Object.create(No),$o=e=>Object.getPrototypeOf(e)===No;function Ap(e,n,t,r=!1){const i={},o=Fo();e.propsDefaults=Object.create(null),Do(e,n,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=r?i:Sa(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Sp(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=G(i),[p]=e.propsOptions;let d=!1;if((r||s>0)&&!(s&16)){if(s&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let h=l[u];if(Ft(e.emitsOptions,h))continue;const f=n[h];if(p)if(M(o,h))f!==o[h]&&(o[h]=f,d=!0);else{const S=Ue(h);i[S]=dr(p,a,S,f,e,!1)}else f!==o[h]&&(o[h]=f,d=!0)}}}else{Do(e,n,i,o)&&(d=!0);let l;for(const u in a)(!n||!M(n,u)&&((l=nn(u))===u||!M(n,l)))&&(p?t&&(t[u]!==void 0||t[l]!==void 0)&&(i[u]=dr(p,a,u,void 0,e,!0)):delete i[u]);if(o!==a)for(const u in o)(!n||!M(n,u))&&(delete o[u],d=!0)}d&&Me(e.attrs,"set","")}function Do(e,n,t,r){const[i,o]=e.propsOptions;let s=!1,a;if(n)for(let p in n){if(Fn(p))continue;const d=n[p];let l;i&&M(i,l=Ue(p))?!o||!o.includes(l)?t[l]=d:(a||(a={}))[l]=d:Ft(e.emitsOptions,p)||(!(p in r)||d!==r[p])&&(r[p]=d,s=!0)}if(o){const p=G(t),d=a||D;for(let l=0;l<o.length;l++){const u=o[l];t[u]=dr(i,p,u,d[u],e,!M(d,u))}}return s}function dr(e,n,t,r,i,o){const s=e[t];if(s!=null){const a=M(s,"default");if(a&&r===void 0){const p=s.default;if(s.type!==Function&&!s.skipFactory&&N(p)){const{propsDefaults:d}=i;if(t in d)r=d[t];else{const l=rt(i);r=d[t]=p.call(null,n),l()}}else r=p;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===nn(t))&&(r=!0))}return r}const Ip=new WeakMap;function Go(e,n,t=!1){const r=t?Ip:n.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let p=!1;if(!N(e)){const l=u=>{p=!0;const[h,f]=Go(u,n,!0);Q(s,h),f&&a.push(...f)};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!o&&!p)return U(e)&&r.set(e,_n),_n;if(R(o))for(let l=0;l<o.length;l++){const u=Ue(o[l]);di(u)&&(s[u]=D)}else if(o)for(const l in o){const u=Ue(l);if(di(u)){const h=o[l],f=s[u]=R(h)||N(h)?{type:h}:Q({},h),S=f.type;let v=!1,k=!0;if(R(S))for(let F=0;F<S.length;++F){const I=S[F],H=N(I)&&I.name;if(H==="Boolean"){v=!0;break}else H==="String"&&(k=!1)}else v=N(S)&&S.name==="Boolean";f[0]=v,f[1]=k,(v||M(f,"default"))&&a.push(u)}}const d=[s,a];return U(e)&&r.set(e,d),d}function di(e){return e[0]!=="$"&&!Fn(e)}const Dr=e=>e==="_"||e==="_ctx"||e==="$stable",Gr=e=>R(e)?e.map(qe):[qe(e)],Cp=(e,n,t)=>{if(n._n)return n;const r=La((...i)=>Gr(n(...i)),t);return r._c=!1,r},Mo=(e,n,t)=>{const r=e._ctx;for(const i in e){if(Dr(i))continue;const o=e[i];if(N(o))n[i]=Cp(i,o,r);else if(o!=null){const s=Gr(o);n[i]=()=>s}}},Lo=(e,n)=>{const t=Gr(n);e.slots.default=()=>t},Uo=(e,n,t)=>{for(const r in n)(t||!Dr(r))&&(e[r]=n[r])},Ep=(e,n,t)=>{const r=e.slots=Fo();if(e.vnode.shapeFlag&32){const i=n._;i?(Uo(r,n,t),t&&Zi(r,"_",i,!0)):Mo(n,r)}else n&&Lo(e,n)},Pp=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,s=D;if(r.shapeFlag&32){const a=n._;a?t&&a===1?o=!1:Uo(i,n,t):(o=!n.$stable,Mo(n,i)),s=n}else n&&(Lo(e,n),s={default:1});if(o)for(const a in i)!Dr(a)&&s[a]==null&&delete i[a]},de=Np;function Rp(e){return qp(e)}function qp(e,n){const t=Rt();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:p,setText:d,setElementText:l,parentNode:u,nextSibling:h,setScopeId:f=Oe,insertStaticContent:S}=e,v=(c,m,y,x=null,g=null,b=null,w=void 0,j=null,T=!!m.dynamicChildren)=>{if(c===m)return;c&&!qn(c,m)&&(x=pt(c),Se(c,g,b,!0),c=null),m.patchFlag===-2&&(T=!1,m.dynamicChildren=null);const{type:_,ref:P,shapeFlag:A}=m;switch(_){case $t:k(c,m,y,x);break;case Qe:F(c,m,y,x);break;case yt:c==null&&I(m,y,x,w);break;case Te:ot(c,m,y,x,g,b,w,j,T);break;default:A&1?z(c,m,y,x,g,b,w,j,T):A&6?st(c,m,y,x,g,b,w,j,T):(A&64||A&128)&&_.process(c,m,y,x,g,b,w,j,T,En)}P!=null&&g?Mn(P,c&&c.ref,b,m||c,!m):P==null&&c&&c.ref!=null&&Mn(c.ref,null,b,c,!0)},k=(c,m,y,x)=>{if(c==null)r(m.el=a(m.children),y,x);else{const g=m.el=c.el;m.children!==c.children&&d(g,m.children)}},F=(c,m,y,x)=>{c==null?r(m.el=p(m.children||""),y,x):m.el=c.el},I=(c,m,y,x)=>{[c.el,c.anchor]=S(c.children,m,y,x,c.el,c.anchor)},H=({el:c,anchor:m},y,x)=>{let g;for(;c&&c!==m;)g=h(c),r(c,y,x),c=g;r(m,y,x)},q=({el:c,anchor:m})=>{let y;for(;c&&c!==m;)y=h(c),i(c),c=y;i(m)},z=(c,m,y,x,g,b,w,j,T)=>{if(m.type==="svg"?w="svg":m.type==="math"&&(w="mathml"),c==null)Xe(m,y,x,g,b,w,j,T);else{const _=c.el&&c.el._isVueCE?c.el:null;try{_&&_._beginPatch(),it(c,m,g,b,w,j,T)}finally{_&&_._endPatch()}}},Xe=(c,m,y,x,g,b,w,j)=>{let T,_;const{props:P,shapeFlag:A,transition:E,dirs:O}=c;if(T=c.el=s(c.type,b,P&&P.is,P),A&8?l(T,c.children):A&16&&Ye(c.children,T,null,x,g,Xt(c,b),w,j),O&&sn(c,null,x,"created"),Ae(T,c,c.scopeId,w,x),P){for(const V in P)V!=="value"&&!Fn(V)&&o(T,V,null,P[V],b,x);"value"in P&&o(T,"value",null,P.value,b),(_=P.onVnodeBeforeMount)&&Pe(_,x,c)}O&&sn(c,null,x,"beforeMount");const $=Op(g,E);$&&E.beforeEnter(T),r(T,m,y),((_=P&&P.onVnodeMounted)||$||O)&&de(()=>{_&&Pe(_,x,c),$&&E.enter(T),O&&sn(c,null,x,"mounted")},g)},Ae=(c,m,y,x,g)=>{if(y&&f(c,y),x)for(let b=0;b<x.length;b++)f(c,x[b]);if(g){let b=g.subTree;if(m===b||Ho(b.type)&&(b.ssContent===m||b.ssFallback===m)){const w=g.vnode;Ae(c,w,w.scopeId,w.slotScopeIds,g.parent)}}},Ye=(c,m,y,x,g,b,w,j,T=0)=>{for(let _=T;_<c.length;_++){const P=c[_]=j?Ge(c[_]):qe(c[_]);v(null,P,m,y,x,g,b,w,j)}},it=(c,m,y,x,g,b,w)=>{const j=m.el=c.el;let{patchFlag:T,dynamicChildren:_,dirs:P}=m;T|=c.patchFlag&16;const A=c.props||D,E=m.props||D;let O;if(y&&an(y,!1),(O=E.onVnodeBeforeUpdate)&&Pe(O,y,m,c),P&&sn(m,c,y,"beforeUpdate"),y&&an(y,!0),(A.innerHTML&&E.innerHTML==null||A.textContent&&E.textContent==null)&&l(j,""),_?tn(c.dynamicChildren,_,j,y,x,Xt(m,g),b):w||B(c,m,j,null,y,x,Xt(m,g),b,!1),T>0){if(T&16)In(j,A,E,y,g);else if(T&2&&A.class!==E.class&&o(j,"class",null,E.class,g),T&4&&o(j,"style",A.style,E.style,g),T&8){const $=m.dynamicProps;for(let V=0;V<$.length;V++){const L=$[V],ce=A[L],le=E[L];(le!==ce||L==="value")&&o(j,L,ce,le,g,y)}}T&1&&c.children!==m.children&&l(j,m.children)}else!w&&_==null&&In(j,A,E,y,g);((O=E.onVnodeUpdated)||P)&&de(()=>{O&&Pe(O,y,m,c),P&&sn(m,c,y,"updated")},x)},tn=(c,m,y,x,g,b,w)=>{for(let j=0;j<m.length;j++){const T=c[j],_=m[j],P=T.el&&(T.type===Te||!qn(T,_)||T.shapeFlag&198)?u(T.el):y;v(T,_,P,null,x,g,b,w,!0)}},In=(c,m,y,x,g)=>{if(m!==y){if(m!==D)for(const b in m)!Fn(b)&&!(b in y)&&o(c,b,m[b],null,g,x);for(const b in y){if(Fn(b))continue;const w=y[b],j=m[b];w!==j&&b!=="value"&&o(c,b,j,w,g,x)}"value"in y&&o(c,"value",m.value,y.value,g)}},ot=(c,m,y,x,g,b,w,j,T)=>{const _=m.el=c?c.el:a(""),P=m.anchor=c?c.anchor:a("");let{patchFlag:A,dynamicChildren:E,slotScopeIds:O}=m;O&&(j=j?j.concat(O):O),c==null?(r(_,y,x),r(P,y,x),Ye(m.children||[],y,P,g,b,w,j,T)):A>0&&A&64&&E&&c.dynamicChildren&&c.dynamicChildren.length===E.length?(tn(c.dynamicChildren,E,y,g,b,w,j),(m.key!=null||g&&m===g.subTree)&&Bo(c,m,!0)):B(c,m,y,P,g,b,w,j,T)},st=(c,m,y,x,g,b,w,j,T)=>{m.slotScopeIds=j,c==null?m.shapeFlag&512?g.ctx.activate(m,y,x,w,T):Mt(m,y,x,g,b,w,T):Wr(c,m,T)},Mt=(c,m,y,x,g,b,w)=>{const j=c.component=Vp(c,x,g);if(Ao(c)&&(j.ctx.renderer=En),Kp(j,!1,w),j.asyncDep){if(g&&g.registerDep(j,re,w),!c.el){const T=j.subTree=pe(Qe);F(null,T,m,y),c.placeholder=T.el}}else re(j,c,m,y,g,b,w)},Wr=(c,m,y)=>{const x=m.component=c.component;if(jp(c,m,y))if(x.asyncDep&&!x.asyncResolved){W(x,m,y);return}else x.next=m,x.update();else m.el=c.el,x.vnode=m},re=(c,m,y,x,g,b,w)=>{const j=()=>{if(c.isMounted){let{next:A,bu:E,u:O,parent:$,vnode:V}=c;{const Ce=Vo(c);if(Ce){A&&(A.el=V.el,W(c,A,w)),Ce.asyncDep.then(()=>{de(()=>{c.isUnmounted||_()},g)});return}}let L=A,ce;an(c,!1),A?(A.el=V.el,W(c,A,w)):A=V,E&&ut(E),(ce=A.props&&A.props.onVnodeBeforeUpdate)&&Pe(ce,$,A,V),an(c,!0);const le=ci(c),Ie=c.subTree;c.subTree=le,v(Ie,le,u(Ie.el),pt(Ie),c,g,b),A.el=le.el,L===null&&wp(c,le.el),O&&de(O,g),(ce=A.props&&A.props.onVnodeUpdated)&&de(()=>Pe(ce,$,A,V),g)}else{let A;const{el:E,props:O}=m,{bm:$,m:V,parent:L,root:ce,type:le}=c,Ie=Ln(m);an(c,!1),$&&ut($),!Ie&&(A=O&&O.onVnodeBeforeMount)&&Pe(A,L,m),an(c,!0);{ce.ce&&ce.ce._hasShadowRoot()&&ce.ce._injectChildStyle(le);const Ce=c.subTree=ci(c);v(null,Ce,y,x,c,g,b),m.el=Ce.el}if(V&&de(V,g),!Ie&&(A=O&&O.onVnodeMounted)){const Ce=m;de(()=>Pe(A,L,Ce),g)}(m.shapeFlag&256||L&&Ln(L.vnode)&&L.vnode.shapeFlag&256)&&c.a&&de(c.a,g),c.isMounted=!0,m=y=x=null}};c.scope.on();const T=c.effect=new to(j);c.scope.off();const _=c.update=T.run.bind(T),P=c.job=T.runIfDirty.bind(T);P.i=c,P.id=c.uid,T.scheduler=()=>kr(P),an(c,!0),_()},W=(c,m,y)=>{m.component=c;const x=c.vnode.props;c.vnode=m,c.next=null,Sp(c,m.props,x,y),Pp(c,m.children,y),Be(),ri(c),Ve()},B=(c,m,y,x,g,b,w,j,T=!1)=>{const _=c&&c.children,P=c?c.shapeFlag:0,A=m.children,{patchFlag:E,shapeFlag:O}=m;if(E>0){if(E&128){at(_,A,y,x,g,b,w,j,T);return}else if(E&256){rn(_,A,y,x,g,b,w,j,T);return}}O&8?(P&16&&Cn(_,g,b),A!==_&&l(y,A)):P&16?O&16?at(_,A,y,x,g,b,w,j,T):Cn(_,g,b,!0):(P&8&&l(y,""),O&16&&Ye(A,y,x,g,b,w,j,T))},rn=(c,m,y,x,g,b,w,j,T)=>{c=c||_n,m=m||_n;const _=c.length,P=m.length,A=Math.min(_,P);let E;for(E=0;E<A;E++){const O=m[E]=T?Ge(m[E]):qe(m[E]);v(c[E],O,y,null,g,b,w,j,T)}_>P?Cn(c,g,b,!0,!1,A):Ye(m,y,x,g,b,w,j,T,A)},at=(c,m,y,x,g,b,w,j,T)=>{let _=0;const P=m.length;let A=c.length-1,E=P-1;for(;_<=A&&_<=E;){const O=c[_],$=m[_]=T?Ge(m[_]):qe(m[_]);if(qn(O,$))v(O,$,y,null,g,b,w,j,T);else break;_++}for(;_<=A&&_<=E;){const O=c[A],$=m[E]=T?Ge(m[E]):qe(m[E]);if(qn(O,$))v(O,$,y,null,g,b,w,j,T);else break;A--,E--}if(_>A){if(_<=E){const O=E+1,$=O<P?m[O].el:x;for(;_<=E;)v(null,m[_]=T?Ge(m[_]):qe(m[_]),y,$,g,b,w,j,T),_++}}else if(_>E)for(;_<=A;)Se(c[_],g,b,!0),_++;else{const O=_,$=_,V=new Map;for(_=$;_<=E;_++){const he=m[_]=T?Ge(m[_]):qe(m[_]);he.key!=null&&V.set(he.key,_)}let L,ce=0;const le=E-$+1;let Ie=!1,Ce=0;const Pn=new Array(le);for(_=0;_<le;_++)Pn[_]=0;for(_=O;_<=A;_++){const he=c[_];if(ce>=le){Se(he,g,b,!0);continue}let Ee;if(he.key!=null)Ee=V.get(he.key);else for(L=$;L<=E;L++)if(Pn[L-$]===0&&qn(he,m[L])){Ee=L;break}Ee===void 0?Se(he,g,b,!0):(Pn[Ee-$]=_+1,Ee>=Ce?Ce=Ee:Ie=!0,v(he,m[Ee],y,null,g,b,w,j,T),ce++)}const zr=Ie?kp(Pn):_n;for(L=zr.length-1,_=le-1;_>=0;_--){const he=$+_,Ee=m[he],Jr=m[he+1],Zr=he+1<P?Jr.el||Ko(Jr):x;Pn[_]===0?v(null,Ee,y,Zr,g,b,w,j,T):Ie&&(L<0||_!==zr[L]?on(Ee,y,Zr,2):L--)}}},on=(c,m,y,x,g=null)=>{const{el:b,type:w,transition:j,children:T,shapeFlag:_}=c;if(_&6){on(c.component.subTree,m,y,x);return}if(_&128){c.suspense.move(m,y,x);return}if(_&64){w.move(c,m,y,En);return}if(w===Te){r(b,m,y);for(let A=0;A<T.length;A++)on(T[A],m,y,x);r(c.anchor,m,y);return}if(w===yt){H(c,m,y);return}if(x!==2&&_&1&&j)if(x===0)j.beforeEnter(b),r(b,m,y),de(()=>j.enter(b),g);else{const{leave:A,delayLeave:E,afterLeave:O}=j,$=()=>{c.ctx.isUnmounted?i(b):r(b,m,y)},V=()=>{b._isLeaving&&b[za](!0),A(b,()=>{$(),O&&O()})};E?E(b,$,V):V()}else r(b,m,y)},Se=(c,m,y,x=!1,g=!1)=>{const{type:b,props:w,ref:j,children:T,dynamicChildren:_,shapeFlag:P,patchFlag:A,dirs:E,cacheIndex:O}=c;if(A===-2&&(g=!1),j!=null&&(Be(),Mn(j,null,y,c,!0),Ve()),O!=null&&(m.renderCache[O]=void 0),P&256){m.ctx.deactivate(c);return}const $=P&1&&E,V=!Ln(c);let L;if(V&&(L=w&&w.onVnodeBeforeUnmount)&&Pe(L,m,c),P&6)Ws(c.component,y,x);else{if(P&128){c.suspense.unmount(y,x);return}$&&sn(c,null,m,"beforeUnmount"),P&64?c.type.remove(c,m,y,En,x):_&&!_.hasOnce&&(b!==Te||A>0&&A&64)?Cn(_,m,y,!1,!0):(b===Te&&A&384||!g&&P&16)&&Cn(T,m,y),x&&Xr(c)}(V&&(L=w&&w.onVnodeUnmounted)||$)&&de(()=>{L&&Pe(L,m,c),$&&sn(c,null,m,"unmounted")},y)},Xr=c=>{const{type:m,el:y,anchor:x,transition:g}=c;if(m===Te){Hs(y,x);return}if(m===yt){q(c);return}const b=()=>{i(y),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:j}=g,T=()=>w(y,b);j?j(c.el,b,T):T()}else b()},Hs=(c,m)=>{let y;for(;c!==m;)y=h(c),i(c),c=y;i(m)},Ws=(c,m,y)=>{const{bum:x,scope:g,job:b,subTree:w,um:j,m:T,a:_}=c;ui(T),ui(_),x&&ut(x),g.stop(),b&&(b.flags|=8,Se(w,c,m,y)),j&&de(j,m),de(()=>{c.isUnmounted=!0},m)},Cn=(c,m,y,x=!1,g=!1,b=0)=>{for(let w=b;w<c.length;w++)Se(c[w],m,y,x,g)},pt=c=>{if(c.shapeFlag&6)return pt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const m=h(c.anchor||c.el),y=m&&m[Xa];return y?h(y):m};let Lt=!1;const Yr=(c,m,y)=>{let x;c==null?m._vnode&&(Se(m._vnode,null,null,!0),x=m._vnode.component):v(m._vnode||null,c,m,null,null,null,y),m._vnode=c,Lt||(Lt=!0,ri(x),xo(),Lt=!1)},En={p:v,um:Se,m:on,r:Xr,mt:Mt,mc:Ye,pc:B,pbc:tn,n:pt,o:e};return{render:Yr,hydrate:void 0,createApp:gp(Yr)}}function Xt({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function an({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Op(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Bo(e,n,t=!1){const r=e.children,i=n.children;if(R(r)&&R(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Ge(i[o]),a.el=s.el),!t&&a.patchFlag!==-2&&Bo(s,a)),a.type===$t&&(a.patchFlag===-1&&(a=i[o]=Ge(a)),a.el=s.el),a.type===Qe&&!a.el&&(a.el=s.el)}}function kp(e){const n=e.slice(),t=[0];let r,i,o,s,a;const p=e.length;for(r=0;r<p;r++){const d=e[r];if(d!==0){if(i=t[t.length-1],e[i]<d){n[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,e[t[a]]<d?o=a+1:s=a;d<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}function Vo(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Vo(n)}function ui(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ko(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ko(n.subTree):null}const Ho=e=>e.__isSuspense;function Np(e,n){n&&n.pendingBranch?R(e)?n.effects.push(...e):n.effects.push(e):Ma(e)}const Te=Symbol.for("v-fgt"),$t=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),yt=Symbol.for("v-stc"),Bn=[];let ge=null;function be(e=!1){Bn.push(ge=e?null:[])}function Fp(){Bn.pop(),ge=Bn[Bn.length-1]||null}let Yn=1;function mi(e,n=!1){Yn+=e,e<0&&ge&&n&&(ge.hasOnce=!0)}function Wo(e){return e.dynamicChildren=Yn>0?ge||_n:null,Fp(),Yn>0&&ge&&ge.push(e),e}function je(e,n,t,r,i,o){return Wo(fe(e,n,t,r,i,o,!0))}function Xo(e,n,t,r,i){return Wo(pe(e,n,t,r,i,!0))}function Yo(e){return e?e.__v_isVNode===!0:!1}function qn(e,n){return e.type===n.type&&e.key===n.key}const zo=({key:e})=>e??null,ht=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||ne(e)||N(e)?{i:_e,r:e,k:n,f:!!t}:e:null);function fe(e,n=null,t=null,r=0,i=null,o=e===Te?0:1,s=!1,a=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&zo(n),ref:n&&ht(n),scopeId:vo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:_e};return a?(Mr(p,t),o&128&&e.normalize(p)):t&&(p.shapeFlag|=Y(t)?8:16),Yn>0&&!s&&ge&&(p.patchFlag>0||o&6)&&p.patchFlag!==32&&ge.push(p),p}const pe=$p;function $p(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===ap)&&(e=Qe),Yo(e)){const a=wn(e,n,!0);return t&&Mr(a,t),Yn>0&&!o&&ge&&(a.shapeFlag&6?ge[ge.indexOf(e)]=a:ge.push(a)),a.patchFlag=-2,a}if(Yp(e)&&(e=e.__vccOpts),n){n=Dp(n);let{class:a,style:p}=n;a&&!Y(a)&&(n.class=Vn(a)),U(p)&&(Or(p)&&!R(p)&&(p=Q({},p)),n.style=wr(p))}const s=Y(e)?1:Ho(e)?128:Ya(e)?64:U(e)?4:N(e)?2:0;return fe(e,n,t,r,i,s,o,!0)}function Dp(e){return e?Or(e)||$o(e)?Q({},e):e:null}function wn(e,n,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:p}=e,d=n?Lp(i||{},n):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&zo(d),ref:n&&n.ref?t&&o?R(o)?o.concat(ht(n)):[o,ht(n)]:ht(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Te?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:p,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wn(e.ssContent),ssFallback:e.ssFallback&&wn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return p&&r&&Fr(l,p.clone(l)),l}function Gp(e=" ",n=0){return pe($t,null,e,n)}function Jo(e,n){const t=pe(yt,null,e);return t.staticCount=n,t}function Mp(e="",n=!1){return n?(be(),Xo(Qe,null,e)):pe(Qe,null,e)}function qe(e){return e==null||typeof e=="boolean"?pe(Qe):R(e)?pe(Te,null,e.slice()):Yo(e)?Ge(e):pe($t,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wn(e)}function Mr(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(R(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),Mr(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!$o(n)?n._ctx=_e:i===3&&_e&&(_e.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else N(n)?(n={default:n,_ctx:_e},t=32):(n=String(n),r&64?(t=16,n=[Gp(n)]):t=8);e.children=n,e.shapeFlag|=t}function Lp(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=Vn([n.class,r.class]));else if(i==="style")n.style=wr([n.style,r.style]);else if(Et(i)){const o=n[i],s=r[i];s&&o!==s&&!(R(o)&&o.includes(s))&&(n[i]=o?[].concat(o,s):s)}else i!==""&&(n[i]=r[i])}return n}function Pe(e,n,t,r=null){Fe(e,n,7,[t,r])}const Up=Ro();let Bp=0;function Vp(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||Up,o={uid:Bp++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(r,i),emitsOptions:Oo(r,i),emit:null,emitted:null,propsDefaults:D,inheritAttrs:r.inheritAttrs,ctx:D,data:D,props:D,attrs:D,slots:D,refs:D,setupState:D,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=_p.bind(null,o),e.ce&&e.ce(o),o}let se=null;const Zo=()=>se||_e;let jt,ur;{const e=Rt(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};jt=n("__VUE_INSTANCE_SETTERS__",t=>se=t),ur=n("__VUE_SSR_SETTERS__",t=>zn=t)}const rt=e=>{const n=se;return jt(e),e.scope.on(),()=>{e.scope.off(),jt(n)}},yi=()=>{se&&se.scope.off(),jt(null)};function Qo(e){return e.vnode.shapeFlag&4}let zn=!1;function Kp(e,n=!1,t=!1){n&&ur(n);const{props:r,children:i}=e.vnode,o=Qo(e);Ap(e,r,o,n),Ep(e,i,t||n);const s=o?Hp(e,n):void 0;return n&&ur(!1),s}function Hp(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cp);const{setup:r}=t;if(r){Be();const i=e.setupContext=r.length>1?Xp(e):null,o=rt(e),s=tt(r,e,0,[e.props,i]),a=Xi(s);if(Ve(),o(),(a||e.sp)&&!Ln(e)&&wo(e),a){if(s.then(yi,yi),n)return s.then(p=>{hi(e,p)}).catch(p=>{kt(p,e,0)});e.asyncDep=s}else hi(e,s)}else es(e)}function hi(e,n,t){N(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:U(n)&&(e.setupState=go(n)),es(e)}function es(e,n,t){const r=e.type;e.render||(e.render=r.render||Oe);{const i=rt(e);Be();try{dp(e)}finally{Ve(),i()}}}const Wp={get(e,n){return ee(e,"get",""),e[n]}};function Xp(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Wp),slots:e.slots,emit:e.emit,expose:n}}function Dt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(go(Ia(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Un)return Un[t](e)},has(n,t){return t in n||t in Un}})):e.proxy}function Yp(e){return N(e)&&"__vccOpts"in e}const ns=(e,n)=>ka(e,n,zn),zp="3.5.28";let mr;const fi=typeof window<"u"&&window.trustedTypes;if(fi)try{mr=fi.createPolicy("vue",{createHTML:e=>e})}catch{}const ts=mr?e=>mr.createHTML(e):e=>e,Jp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",De=typeof document<"u"?document:null,gi=De&&De.createElement("template"),Qp={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?De.createElementNS(Jp,e):n==="mathml"?De.createElementNS(Zp,e):t?De.createElement(e,{is:t}):De.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>De.createTextNode(e),createComment:e=>De.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>De.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const s=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{gi.innerHTML=ts(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=gi.content;if(r==="svg"||r==="mathml"){const p=a.firstChild;for(;p.firstChild;)a.appendChild(p.firstChild);a.removeChild(p)}n.insertBefore(a,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},ec=Symbol("_vtc");function nc(e,n,t){const r=e[ec];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const bi=Symbol("_vod"),tc=Symbol("_vsh"),rc=Symbol(""),ic=/(?:^|;)\s*display\s*:/;function oc(e,n,t){const r=e.style,i=Y(t);let o=!1;if(t&&!i){if(n)if(Y(n))for(const s of n.split(";")){const a=s.slice(0,s.indexOf(":")).trim();t[a]==null&&ft(r,a,"")}else for(const s in n)t[s]==null&&ft(r,s,"");for(const s in t)s==="display"&&(o=!0),ft(r,s,t[s])}else if(i){if(n!==t){const s=r[rc];s&&(t+=";"+s),r.cssText=t,o=ic.test(t)}}else n&&e.removeAttribute("style");bi in e&&(e[bi]=o?r.display:"",e[tc]&&(r.display="none"))}const _i=/\s*!important$/;function ft(e,n,t){if(R(t))t.forEach(r=>ft(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=sc(e,n);_i.test(t)?e.setProperty(nn(r),t.replace(_i,""),"important"):e[r]=t}}const xi=["Webkit","Moz","ms"],Yt={};function sc(e,n){const t=Yt[n];if(t)return t;let r=Ue(n);if(r!=="filter"&&r in e)return Yt[n]=r;r=Ji(r);for(let i=0;i<xi.length;i++){const o=xi[i]+r;if(o in e)return Yt[n]=o}return n}const Ti="http://www.w3.org/1999/xlink";function vi(e,n,t,r,i,o=ia(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ti,n.slice(6,n.length)):e.setAttributeNS(Ti,n,t):t==null||o&&!Qi(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Ne(t)?String(t):t)}function ji(e,n,t,r,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?ts(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,p=t==null?e.type==="checkbox"?"on":"":String(t);(a!==p||!("_value"in e))&&(e.value=p),t==null&&e.removeAttribute(n),e._value=t;return}let s=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Qi(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(i||n)}function hn(e,n,t,r){e.addEventListener(n,t,r)}function ac(e,n,t,r){e.removeEventListener(n,t,r)}const wi=Symbol("_vei");function pc(e,n,t,r,i=null){const o=e[wi]||(e[wi]={}),s=o[n];if(r&&s)s.value=r;else{const[a,p]=cc(n);if(r){const d=o[n]=uc(r,i);hn(e,a,d,p)}else s&&(ac(e,a,s,p),o[n]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function cc(e){let n;if(Ai.test(e)){n={};let r;for(;r=e.match(Ai);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nn(e.slice(2)),n]}let zt=0;const lc=Promise.resolve(),dc=()=>zt||(lc.then(()=>zt=0),zt=Date.now());function uc(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Fe(mc(r,t.value),n,5,[r])};return t.value=e,t.attached=dc(),t}function mc(e,n){if(R(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const Si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yc=(e,n,t,r,i,o)=>{const s=i==="svg";n==="class"?nc(e,r,s):n==="style"?oc(e,t,r):Et(n)?xr(n)||pc(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):hc(e,n,r,s))?(ji(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&vi(e,n,r,s,o,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Y(r))?ji(e,Ue(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),vi(e,n,r,s))};function hc(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Si(n)&&N(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Si(n)&&Y(t)?!1:n in e}const Ii=e=>{const n=e.props["onUpdate:modelValue"]||!1;return R(n)?t=>ut(n,t):n};function fc(e){e.target.composing=!0}function Ci(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Jt=Symbol("_assign");function Ei(e,n,t){return n&&(e=e.trim()),t&&(e=jr(e)),e}const gc={created(e,{modifiers:{lazy:n,trim:t,number:r}},i){e[Jt]=Ii(i);const o=r||i.props&&i.props.type==="number";hn(e,n?"change":"input",s=>{s.target.composing||e[Jt](Ei(e.value,t,o))}),(t||o)&&hn(e,"change",()=>{e.value=Ei(e.value,t,o)}),n||(hn(e,"compositionstart",fc),hn(e,"compositionend",Ci),hn(e,"change",Ci))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:r,trim:i,number:o}},s){if(e[Jt]=Ii(s),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?jr(e.value):e.value,p=n??"";a!==p&&(document.activeElement===e&&e.type!=="range"&&(r&&n===t||i&&e.value.trim()===p)||(e.value=p))}},bc=Q({patchProp:yc},Qp);let Pi;function _c(){return Pi||(Pi=Rp(bc))}const xc=((...e)=>{const n=_c().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=vc(r);if(!i)return;const o=n._component;!N(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,Tc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n});function Tc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vc(e){return Y(e)?document.querySelector(e):e}const Sn=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},jc={},wc={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true"};function Ac(e,n){return be(),je("svg",wc,[...n[0]||(n[0]=[fe("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"},null,-1)])])}const Sc=Sn(jc,[["render",Ac]]),Ic={},Cc={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1103.52 200",fill:"currentColor"};function Ec(e,n){return be(),je("svg",Cc,[...n[0]||(n[0]=[Jo('<title>TaxonWorks</title><path d="M14.2,63.07C24.26,63.07,28,76.31,28,76.31s5.05,15.47,15.35,15.47c7.71,0,9.42-6.32,9.8-9.09,0-.13,0-0.25,0-0.38s0-.5.07-0.76c0-.05,0-0.1,0-0.15a4.56,4.56,0,0,0-2.71-4.82h0a18.22,18.22,0,0,1-8-5.55c-6.4-7.4-3-17,4.5-23.62-3.5-4-8.05-8.66-12-10.77C26.3,32,19.32,39.25,18.79,39.82L18.69,40q-0.9,1.23-1.76,2.48l-0.07.1Q16,43.88,15.09,45.24L15,45.39c-0.5.8-1,1.59-1.47,2.4l-0.3.5q-1.57,2.68-3,5.47L10,54.27q-0.65,1.32-1.26,2.65l-0.06.13Q8,58.47,7.45,59.91l-0.22.55c-0.32.77-.63,1.55-0.92,2.33l-0.24.63q-0.54,1.44-1,2.91l-0.12.37c-0.08.26-.16,0.52-0.24,0.77A12.6,12.6,0,0,1,14.2,63.07Z"></path><path d="M36.15,33c5.35,1.76,11.4,6.83,15.72,11,0.53-.31,1.06-0.61,1.61-0.9a31.06,31.06,0,0,1,7.24-2.67c-2.39-4.94-5.58-12.81-4.88-18.31,1.43-11.17,13.65-12,13.65-12S58.27,12.47,59,22.89c0.35,5,4.67,12.45,7.49,16.79,7-.1,13,2.69,15.75,8a12.48,12.48,0,0,1,.7,1.64h0a5.1,5.1,0,0,0,2.34,2.4c3.64,1.17,7.56,2.55,11.65,4.19a148.81,148.81,0,0,1,17,8.06,0.89,0.89,0,0,0,1-1.42c-27.24-26.14-8-36.35-8-36.35-9.84,14.24,6.6,24.52,25.49,35.14,16.64,9.35,28.42,19.49,41.3,12.67,6.42-3.4,1.94-11-1-15.16a53.74,53.74,0,0,1-5.6-9.24,10.41,10.41,0,0,1-.8-6.61c0.68-3.11-.39-6.78-2.75-10.49-1.75-2.76-5.12-5.68-7.62-7.63a21.18,21.18,0,0,1-4.26-4.42c-9-12.61-32.18-17.89-32.18-17.89h0A97.63,97.63,0,0,0,54,10.16h0A97.4,97.4,0,0,0,34.61,22.89l-0.75.63q-2.16,1.82-4.17,3.81l0,0q-1.17,1.13-2.31,2.31l0,0Q25.07,32,23,34.5l-0.17.2-0.38.46C25.21,32.8,29.65,30.85,36.15,33Zm109.64,0.94A7.74,7.74,0,0,1,156.55,42a7.22,7.22,0,0,1-7.73-.9A7.22,7.22,0,0,1,145.79,33.93Z"></path><path d="M53.17,106.91c-0.2-2-.36-4-0.44-6.3a18.44,18.44,0,0,1-7.22,1.47c-19,0-19.52-18.78-26.22-29.15-7-10.84-16.79.92-17.76,7.24,0,0.3-.09.54-0.13,0.72-0.11.64-.22,1.29-0.32,1.94C1,83.1,1,83.37,1,83.64c-0.12.78-.21,1.56-0.3,2.35,0,0.27-.06.54-0.09,0.81-0.11,1-.21,2.07-0.29,3.11,0,0.11,0,.22,0,0.33Q0.16,91.65.1,93.07q0,0.43,0,.87Q0,95.32,0,96.7c0,0.12,0,.23,0,0.35s0,0.08,0,.12,0,0.08,0,.13c0,0.4,0,.81,0,1.21s0,0.76,0,1.15c0,0.58,0,1.16.06,1.73,0,0.23,0,.47,0,0.7a97.2,97.2,0,0,0,43,76c-7.95-7.83-12.7-17.75-12.7-28.55,0-13.43,7.35-26,19.06-34.44A9,9,0,0,0,53.17,106.91Z"></path><path d="M128.31,170a59.45,59.45,0,0,1-18.3,4.43c-1.07.07-2.19,0.12-3.33,0.12-12.32,0-28.36-4.8-40.71-25.28l-1.62-2.67a16.61,16.61,0,0,0-2.91,9.33c0,13.89,16.65,26.49,36.65,26.49a58.48,58.48,0,0,0,15.89-2c-4.59,2.87-13.84,5.55-21.86,5.55C69.17,186,50,170.76,50,152.72a31.42,31.42,0,0,1,5.75-17.61,8.26,8.26,0,0,0,1.08-7.19h0c-10.55,6.11-17,15.44-17,26.6,0,17.19,15.31,31.89,37,37.89,1.23,0.26,2.46.5,3.7,0.71C96.15,195.74,110,193,119.45,184A35.12,35.12,0,0,0,128.31,170Z"></path><path d="M171,33.85A87.33,87.33,0,0,1,143,160.4l-0.19.17a6.35,6.35,0,0,1,.14-1.3,26.75,26.75,0,0,1,4.37-10.79c7.46-10.69,12.43-27-.29-48.1-7-11.63-21.68-28-51.73-40.11-4.13-1.66-8.12-3.06-11.81-4.23l-1.54-.48-0.18-.06q-1.59-.49-3.1-0.92l-0.15,0-2.93-.81-0.08,0-1.34-.35-0.07,0-2.58-.64-0.14,0-2.27-.53-0.17,0-1-.21h0L67,51.67l-0.18,0-0.71-.15-0.18,0-0.75-.15-0.15,0-0.55-.11-0.18,0L63.68,51l-0.12.42,0,0.14-0.09.32-0.05.18-0.09.31-0.06.22-0.09.32-0.06.23-0.1.35-0.07.24-0.1.39-0.06.24-0.12.47-0.08.31-0.14.56L62.33,56l-0.11.45-0.08.32L62,57.2l-0.09.36-0.1.42-0.09.38-0.1.45-0.09.39-0.11.48-0.09.38-0.13.56-0.11.51L61,61.86l-0.08.4-0.11.55-0.1.46-0.1.51-0.1.49-0.1.52-0.1.5-0.1.54-0.09.5L60,66.9l-0.09.51-0.11.65-0.09.51-0.17,1-0.08.5-0.1.64-0.08.54-0.1.63-0.08.56L59,73.06l-0.08.58-0.09.64-0.08.57-0.09.68-0.07.56-0.09.76-0.06.5q-0.32,2.66-.56,5.48V83q-0.07.84-.13,1.71v0q-0.06.84-.11,1.71v0.08q-0.05.85-.09,1.73v0c-0.15,3-.21,6.22-0.15,9.54a127.22,127.22,0,0,0,.85,12.72c0,0.35.08,0.7,0.13,1.06a103,103,0,0,0,3.61,17,114.36,114.36,0,0,0,5.25,13.18c0.86,1.71,1.78,3.4,2.79,5.07,9.23,15.29,21.52,23,36.58,23,1,0,2.09,0,3.15-.11a55.64,55.64,0,0,0,20.21-5.6c4.93-24.48-8.37-59.28-36.07-88.3A163.2,163.2,0,0,0,81.71,64.4c9.22,6.92,13.87,10.66,19.22,16.27,37.83,39.64,49.7,89.72,26.51,111.86A35.67,35.67,0,0,1,115.52,200a36.48,36.48,0,0,0,15.42-8.64,34.66,34.66,0,0,0,3.76-4.24A97.3,97.3,0,0,0,171,33.85Z"></path><path d="M331.33,44.3H257v14h28.71v95.91h6.22a10.58,10.58,0,0,0,10.58-10.58V58.33h28.87v-14Z"></path><path d="M363,70.23q-15.82,0-25.45,5.55v15.5a41.61,41.61,0,0,1,24-7.34q9.46,0,13.54,4.32t4.08,12.8v4.73h-13.7q-16.15,0-25.12,6.61t-9,18.51a22.75,22.75,0,0,0,7.1,17.21q7.1,6.77,18.84,6.77,16,0,22.35-10.44v9.79h5.24a10.58,10.58,0,0,0,10.58-10.58V101.72Q395.44,70.24,363,70.23Zm16.15,56.44A15,15,0,0,1,374.64,138q-4.49,4.32-12.32,4.32-6.85,0-10.44-3.26a11.51,11.51,0,0,1-3.59-9,11.07,11.07,0,0,1,4.65-9.13q4.65-3.59,13.78-3.59h12.4v9.3Z"></path><path d="M534.45,70.4q-17.62,0-28.38,12.32T495.3,113.62q0,18.27,10.44,30.18t28.71,11.91q18.43,0,29-12.07T573.92,113q0-18.6-10.28-30.58T534.45,70.4ZM551.33,134q-5.79,8.16-16.88,8.16a19.21,19.21,0,0,1-16.47-8.4q-6-8.4-6-20.63,0-12.39,5.87-20.8t16.47-8.4q11.74,0,17.29,8.24t5.55,21.12Q557.12,125.86,551.33,134Z"></path><path d="M638,70.4q-18.43,0-25.77,15.33V82.12a10.58,10.58,0,0,0-10.58-10.58h-5.4v82.7h5.4a10.58,10.58,0,0,0,10.58-10.58V109.38q0-11.9,6-18.51a19,19,0,0,1,14.52-6.61q7.18,0,11.5,4.57T648.63,102v41.62a10.58,10.58,0,0,0,10.58,10.58h5.4V98.29q0-12.88-7.18-20.39T638,70.4Z"></path><path d="M854.92,70.4q-17.62,0-28.38,12.32t-10.77,30.91q0,18.27,10.44,30.18t28.71,11.91q18.43,0,29-12.07T894.39,113q0-18.6-10.28-30.58T854.92,70.4ZM871.8,134q-5.79,8.16-16.88,8.16a19.21,19.21,0,0,1-16.47-8.4q-6-8.4-6-20.63,0-12.39,5.87-20.8t16.47-8.4q11.74,0,17.29,8.24t5.55,21.12Q877.59,125.86,871.8,134Z"></path><path d="M930.53,86.06V82.12a10.58,10.58,0,0,0-10.58-10.58h-5.4v82.7h5.4a10.58,10.58,0,0,0,10.58-10.58V110.2a28.71,28.71,0,0,1,5.38-17.45q5.38-7.34,13.7-7.34a19.28,19.28,0,0,1,7.67,1.47V70.72h-5.06Q936.56,70.72,930.53,86.06Z"></path><path d="M1098.05,117.36q-5.47-5.3-15.09-9.54-0.82-.32-2.85-1.22t-2.85-1.31l-2.53-1.22a14.1,14.1,0,0,1-2.45-1.39q-0.73-.57-2-1.39a7.19,7.19,0,0,1-1.88-1.55,19.29,19.29,0,0,1-1.22-1.79,7.05,7.05,0,0,1-.9-2.12,9.75,9.75,0,0,1-.24-2.2,8.28,8.28,0,0,1,3.34-6.85q3.34-2.61,9.05-2.61,12.56,0,20.55,4.73V74.38q-7.5-3.59-20.88-3.59-12.23,0-20.39,6.2t-8.16,17.13q0,15.5,19.41,23.49,6.85,2.94,9.71,4.32a20.51,20.51,0,0,1,5.63,4.24,9,9,0,0,1,2.77,6.44,8.14,8.14,0,0,1-3.51,6.85q-3.51,2.61-9.87,2.61a44.58,44.58,0,0,1-23.65-7v15.17q9.79,4.89,24.47,4.89,13.37,0,21.21-6.28t7.83-17.37Q1103.52,122.66,1098.05,117.36Z"></path><path d="M475.53,71.38a14.11,14.11,0,0,0-11.65,6.16l-15,22-15-22a14.11,14.11,0,0,0-11.65-6.16H411.54l28.27,41.43-28.27,41.43h10.65a14.11,14.11,0,0,0,11.65-6.16l15-22,15,22a14.11,14.11,0,0,0,11.65,6.16h10.65l-28.27-41.43,28.27-41.43H475.53Z"></path><path d="M1025.71,71.38a14.11,14.11,0,0,0-11.65,6.16l-23.63,34.63V54.88A10.58,10.58,0,0,0,979.85,44.3h-5.51V154.24h5.51a10.58,10.58,0,0,0,10.58-10.58v-30.2l23.63,34.63a14.11,14.11,0,0,0,11.65,6.16h10.65l-28.27-41.43,28.27-41.43h-10.65Z"></path><path d="M792,52.2L773.51,123,755,52.2a10.58,10.58,0,0,0-10.24-7.9h0a10.58,10.58,0,0,0-10.24,7.9L716,123,697.48,52.2a10.58,10.58,0,0,0-10.24-7.9h-8.17l28.76,109.94H716a10.58,10.58,0,0,0,10.24-7.9l18.52-70.8,18.52,70.8a10.58,10.58,0,0,0,10.24,7.9h8.17L810.44,44.3h-8.17A10.58,10.58,0,0,0,792,52.2Z"></path>',16)])])}const Pc=Sn(Ic,[["render",Ec]]),Rc={class:"app-header"},qc={class:"app-header__left"},Oc={class:"app-header__github-link",href:"https://github.com/SpeciesFileGroup/taxonworks_api",title:"GitHub Repository"},kc={__name:"AppHeader",setup(e){return(n,t)=>(be(),je("header",Rc,[fe("div",qc,[pe(Pc,{alt:"TaxonWorks",class:"app-header__logo"}),t[0]||(t[0]=fe("div",{class:"app-header__title"},"API Documentation",-1))]),fe("a",Oc,[pe(Sc,{class:"app-header__github-logo"})])]))}},Nc=Sn(kc,[["__scopeId","data-v-f0ecc926"]]),Fc={class:"resource-selector"},$c={class:"resource-selector__overview"},Dc={class:"resource-selector__search"},Gc={class:"resource-selector__list"},Mc=["onClick"],Lc={__name:"ResourceSelector",props:lp({resources:{type:Array,required:!0}},{modelValue:{type:String,default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=e,t=bp(e,"modelValue"),r=Wn(""),i=ns(()=>{const o=r.value.toLowerCase();return o?n.resources.filter(s=>s.label.toLowerCase().includes(o)):n.resources});return(o,s)=>(be(),je("aside",Fc,[fe("div",$c,[fe("button",{class:Vn(["resource-selector__item resource-selector__overview-btn",{"resource-selector__item--active":t.value==="overview"}]),onClick:s[0]||(s[0]=()=>t.value="overview")}," Overview ",2)]),fe("div",Dc,[Ua(fe("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>r.value=a),type:"text",placeholder:"Filter resources...",class:"resource-selector__input"},null,512),[[gc,r.value]])]),fe("nav",Gc,[(be(!0),je(Te,null,pp(i.value,a=>(be(),je("button",{key:a.id,class:Vn(["resource-selector__item",{"resource-selector__item--active":a.id===t.value}]),onClick:()=>t.value=a.id},Sr(a.label),11,Mc))),128))])]))}},Uc=Sn(Lc,[["__scopeId","data-v-5b560293"]]);var Zt=Xs();const Bc={class:"swagger-viewer"},Vc={key:0,class:"swagger-viewer__error"},Kc={__name:"SwaggerViewer",props:{spec:{type:Object,default:null},error:{type:String,default:null}},setup(e){const n=e,t=Wn(null);let r=null;function i(){r&&(t.value&&(t.value.innerHTML=""),r=null)}Gn(()=>n.spec,s=>{!s||!t.value||o(s)});function o(s){i(),r=Zt.SwaggerUIBundle({domNode:t.value,spec:s,layout:"BaseLayout",deepLinking:!0,presets:[Zt.SwaggerUIBundle.presets.apis],plugins:[Zt.SwaggerUIBundle.plugins.DownloadUrl]})}return $r(()=>{n.spec&&o(n.spec)}),Io(i),(s,a)=>(be(),je("div",Bc,[e.error?(be(),je("div",Vc,Sr(e.error),1)):Mp("",!0),fe("div",{ref_key:"swaggerEl",ref:t,class:"swagger-viewer__container"},null,512)]))}},Hc=Sn(Kc,[["__scopeId","data-v-162fccca"]]),Wc={class:"markdown-body"},Xc={__name:"overview",setup(e,{expose:n}){return n({frontmatter:{}}),(r,i)=>(be(),je("div",Wc,[...i[0]||(i[0]=[Jo('<h1>TaxonWorks API</h1><p>A RESTful JSON-backed API for accessing and managing biodiversity data in <a href="https://taxonworks.org">TaxonWorks</a>.</p><p><em>Select a resource from the sidebar to explore its endpoints.</em></p><hr><h2>Authentication</h2><p>All API requests require authentication. Include <strong>one</strong> of the following combinations as query parameters or HTTP headers:</p><table><thead><tr><th>Method</th><th>Parameters</th><th>Use case</th></tr></thead><tbody><tr><td>Project token</td><td><code>project_token</code></td><td>Public/read-only access scoped to a project</td></tr><tr><td>User token</td><td><code>token</code> + <code>project_id</code></td><td>Full read access on behalf of a user</td></tr></tbody></table><p>Tokens are generated inside the TaxonWorks application under <em>Account &gt; API access</em> and <em>Project &gt; API access</em>.</p><h2>Pagination</h2><p>List endpoints are paginated. Control pagination with these query parameters:</p><table><thead><tr><th>Parameter</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td>1</td><td>Page number</td></tr><tr><td><code>per</code></td><td>50</td><td>Items per page (max 250)</td></tr></tbody></table><p>Pagination metadata is returned in the response headers: <code>Pagination-Total</code>, <code>Pagination-Total-Pages</code>, <code>Pagination-Page</code>, and <code>Pagination-Per-Page</code>.</p><h2>Servers</h2><ul><li><a href="https://sfg.taxonworks.org">sfg.taxonworks.org</a> — Species File Group production instance</li><li><a href="https://sandbox.taxonworks.org">sandbox.taxonworks.org</a> — Public sandbox for testing</li></ul><h2>Resources</h2><ul><li><a href="https://taxonworks.org">TaxonWorks project site</a></li><li><a href="https://docs.taxonworks.org">Documentation</a></li><li><a href="https://github.com/SpeciesFileGroup/taxonworks">Source code (GitHub)</a></li><li><a href="https://github.com/SpeciesFileGroup/taxonworks_api">API docs source (GitHub)</a></li></ul>',16)])]))}},Yc=`openapi: 3.0.3
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
`,zc=`openapi: 3.0.3
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
`,Jc=`openapi: 3.0.3
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
`,Zc=`openapi: 3.0.3
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
`,Qc=`openapi: 3.0.3
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
`,el=`openapi: 3.0.3
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
`,nl=`openapi: 3.0.3
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
`,tl=`openapi: 3.0.3
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
`,rl=`openapi: 3.0.3
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
`,il=`openapi: 3.0.3
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
`,ol=`openapi: 3.0.3
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
`,sl=`openapi: 3.0.3
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
`,al=`openapi: 3.0.3
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
`,pl=`openapi: 3.0.3
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
`,cl=`openapi: 3.0.3
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
`,ll=`openapi: 3.0.3
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
`,dl=`openapi: 3.0.3
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
`,ul=`openapi: 3.0.3
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
`,ml=`openapi: 3.0.3
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
`,yl=`openapi: 3.0.3
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
`,hl=`openapi: 3.0.3
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
`,fl=`openapi: 3.0.3
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
`,gl=`openapi: 3.0.3
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
`,bl=`openapi: 3.0.3
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
`,_l=`openapi: 3.0.3
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
`,xl=`openapi: 3.0.3
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
`,Tl=`openapi: 3.0.3
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
`,vl=`openapi: 3.0.3
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
`,jl=`openapi: 3.0.3
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
`,wl=`openapi: 3.0.3
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
`,Al=`openapi: 3.0.3
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
`,Sl=`openapi: 3.0.3
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
`,Il=`openapi: 3.0.3
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
`,Cl=`openapi: 3.0.3
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
`;function rs(e){return typeof e>"u"||e===null}function El(e){return typeof e=="object"&&e!==null}function Pl(e){return Array.isArray(e)?e:rs(e)?[]:[e]}function Rl(e,n){var t,r,i,o;if(n)for(o=Object.keys(n),t=0,r=o.length;t<r;t+=1)i=o[t],e[i]=n[i];return e}function ql(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function Ol(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var kl=rs,Nl=El,Fl=Pl,$l=ql,Dl=Ol,Gl=Rl,J={isNothing:kl,isObject:Nl,toArray:Fl,repeat:$l,isNegativeZero:Dl,extend:Gl};function is(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function Jn(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=is(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Jn.prototype=Object.create(Error.prototype);Jn.prototype.constructor=Jn;Jn.prototype.toString=function(n){return this.name+": "+is(this,n)};var ae=Jn;function Qt(e,n,t,r,i){var o="",s="",a=Math.floor(i/2)-1;return r-n>a&&(o=" ... ",n=r-a+o.length),t-r>a&&(s=" ...",t=r+a-s.length),{str:o+e.slice(n,t).replace(/\t/g,"→")+s,pos:r-n+o.length}}function er(e,n){return J.repeat(" ",n-e.length)+e}function Ml(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],i=[],o,s=-1;o=t.exec(e.buffer);)i.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var a="",p,d,l=Math.min(e.line+n.linesAfter,i.length).toString().length,u=n.maxLength-(n.indent+l+3);for(p=1;p<=n.linesBefore&&!(s-p<0);p++)d=Qt(e.buffer,r[s-p],i[s-p],e.position-(r[s]-r[s-p]),u),a=J.repeat(" ",n.indent)+er((e.line-p+1).toString(),l)+" | "+d.str+`
`+a;for(d=Qt(e.buffer,r[s],i[s],e.position,u),a+=J.repeat(" ",n.indent)+er((e.line+1).toString(),l)+" | "+d.str+`
`,a+=J.repeat("-",n.indent+l+3+d.pos)+`^
`,p=1;p<=n.linesAfter&&!(s+p>=i.length);p++)d=Qt(e.buffer,r[s+p],i[s+p],e.position-(r[s]-r[s+p]),u),a+=J.repeat(" ",n.indent)+er((e.line+p+1).toString(),l)+" | "+d.str+`
`;return a.replace(/\n$/,"")}var Ll=Ml,Ul=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Bl=["scalar","sequence","mapping"];function Vl(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function Kl(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Ul.indexOf(t)===-1)throw new ae('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Vl(n.styleAliases||null),Bl.indexOf(this.kind)===-1)throw new ae('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Z=Kl;function Ri(e,n){var t=[];return e[n].forEach(function(r){var i=t.length;t.forEach(function(o,s){o.tag===r.tag&&o.kind===r.kind&&o.multi===r.multi&&(i=s)}),t[i]=r}),t}function Hl(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function yr(e){return this.extend(e)}yr.prototype.extend=function(n){var t=[],r=[];if(n instanceof Z)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new ae("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(o){if(!(o instanceof Z))throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new ae("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new ae("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(o){if(!(o instanceof Z))throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(yr.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=Ri(i,"implicit"),i.compiledExplicit=Ri(i,"explicit"),i.compiledTypeMap=Hl(i.compiledImplicit,i.compiledExplicit),i};var os=yr,ss=new Z("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),as=new Z("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ps=new Z("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),cs=new os({explicit:[ss,as,ps]});function Wl(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Xl(){return null}function Yl(e){return e===null}var ls=new Z("tag:yaml.org,2002:null",{kind:"scalar",resolve:Wl,construct:Xl,predicate:Yl,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function zl(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Jl(e){return e==="true"||e==="True"||e==="TRUE"}function Zl(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ds=new Z("tag:yaml.org,2002:bool",{kind:"scalar",resolve:zl,construct:Jl,predicate:Zl,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Ql(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function ed(e){return 48<=e&&e<=55}function nd(e){return 48<=e&&e<=57}function td(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Ql(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!ed(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!nd(e.charCodeAt(t)))return!1;r=!0}return!(!r||i==="_")}function rd(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function id(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!J.isNegativeZero(e)}var us=new Z("tag:yaml.org,2002:int",{kind:"scalar",resolve:td,construct:rd,predicate:id,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),od=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function sd(e){return!(e===null||!od.test(e)||e[e.length-1]==="_")}function ad(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var pd=/^[-+]?[0-9]+e/;function cd(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(J.isNegativeZero(e))return"-0.0";return t=e.toString(10),pd.test(t)?t.replace("e",".e"):t}function ld(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||J.isNegativeZero(e))}var ms=new Z("tag:yaml.org,2002:float",{kind:"scalar",resolve:sd,construct:ad,predicate:ld,represent:cd,defaultStyle:"lowercase"}),ys=cs.extend({implicit:[ls,ds,us,ms]}),hs=ys,fs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function dd(e){return e===null?!1:fs.exec(e)!==null||gs.exec(e)!==null}function ud(e){var n,t,r,i,o,s,a,p=0,d=null,l,u,h;if(n=fs.exec(e),n===null&&(n=gs.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(o=+n[4],s=+n[5],a=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(l=+n[10],u=+(n[11]||0),d=(l*60+u)*6e4,n[9]==="-"&&(d=-d)),h=new Date(Date.UTC(t,r,i,o,s,a,p)),d&&h.setTime(h.getTime()-d),h}function md(e){return e.toISOString()}var bs=new Z("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:dd,construct:ud,instanceOf:Date,represent:md});function yd(e){return e==="<<"||e===null}var _s=new Z("tag:yaml.org,2002:merge",{kind:"scalar",resolve:yd}),Lr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function hd(e){if(e===null)return!1;var n,t,r=0,i=e.length,o=Lr;for(t=0;t<i;t++)if(n=o.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function fd(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,o=Lr,s=0,a=[];for(n=0;n<i;n++)n%4===0&&n&&(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)),s=s<<6|o.indexOf(r.charAt(n));return t=i%4*6,t===0?(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)):t===18?(a.push(s>>10&255),a.push(s>>2&255)):t===12&&a.push(s>>4&255),new Uint8Array(a)}function gd(e){var n="",t=0,r,i,o=e.length,s=Lr;for(r=0;r<o;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return i=o%3,i===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):i===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):i===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function bd(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var xs=new Z("tag:yaml.org,2002:binary",{kind:"scalar",resolve:hd,construct:fd,predicate:bd,represent:gd}),_d=Object.prototype.hasOwnProperty,xd=Object.prototype.toString;function Td(e){if(e===null)return!0;var n=[],t,r,i,o,s,a=e;for(t=0,r=a.length;t<r;t+=1){if(i=a[t],s=!1,xd.call(i)!=="[object Object]")return!1;for(o in i)if(_d.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(o)===-1)n.push(o);else return!1}return!0}function vd(e){return e!==null?e:[]}var Ts=new Z("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Td,construct:vd}),jd=Object.prototype.toString;function wd(e){if(e===null)return!0;var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],jd.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;o[n]=[i[0],r[i[0]]]}return!0}function Ad(e){if(e===null)return[];var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],i=Object.keys(r),o[n]=[i[0],r[i[0]]];return o}var vs=new Z("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:wd,construct:Ad}),Sd=Object.prototype.hasOwnProperty;function Id(e){if(e===null)return!0;var n,t=e;for(n in t)if(Sd.call(t,n)&&t[n]!==null)return!1;return!0}function Cd(e){return e!==null?e:{}}var js=new Z("tag:yaml.org,2002:set",{kind:"mapping",resolve:Id,construct:Cd}),Ur=hs.extend({implicit:[bs,_s],explicit:[xs,Ts,vs,js]}),en=Object.prototype.hasOwnProperty,wt=1,ws=2,As=3,At=4,nr=1,Ed=2,qi=3,Pd=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Rd=/[\x85\u2028\u2029]/,qd=/[,\[\]\{\}]/,Ss=/^(?:!|!!|![a-z\-]+!)$/i,Is=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Oi(e){return Object.prototype.toString.call(e)}function ke(e){return e===10||e===13}function dn(e){return e===9||e===32}function ye(e){return e===9||e===32||e===10||e===13}function gn(e){return e===44||e===91||e===93||e===123||e===125}function Od(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function kd(e){return e===120?2:e===117?4:e===85?8:0}function Nd(e){return 48<=e&&e<=57?e-48:-1}function ki(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Fd(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Cs(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var Es=new Array(256),Ps=new Array(256);for(var mn=0;mn<256;mn++)Es[mn]=ki(mn)?1:0,Ps[mn]=ki(mn);function $d(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Ur,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Rs(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Ll(t),new ae(n,t)}function C(e,n){throw Rs(e,n)}function St(e,n){e.onWarning&&e.onWarning.call(null,Rs(e,n))}var Ni={YAML:function(n,t,r){var i,o,s;n.version!==null&&C(n,"duplication of %YAML directive"),r.length!==1&&C(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&C(n,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&C(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&St(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,o;r.length!==2&&C(n,"TAG directive accepts exactly two arguments"),i=r[0],o=r[1],Ss.test(i)||C(n,"ill-formed tag handle (first argument) of the TAG directive"),en.call(n.tagMap,i)&&C(n,'there is a previously declared suffix for "'+i+'" tag handle'),Is.test(o)||C(n,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{C(n,"tag prefix is malformed: "+o)}n.tagMap[i]=o}};function Ze(e,n,t,r){var i,o,s,a;if(n<t){if(a=e.input.slice(n,t),r)for(i=0,o=a.length;i<o;i+=1)s=a.charCodeAt(i),s===9||32<=s&&s<=1114111||C(e,"expected valid JSON character");else Pd.test(a)&&C(e,"the stream contains non-printable characters");e.result+=a}}function Fi(e,n,t,r){var i,o,s,a;for(J.isObject(t)||C(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),s=0,a=i.length;s<a;s+=1)o=i[s],en.call(n,o)||(Cs(n,o,t[o]),r[o]=!0)}function bn(e,n,t,r,i,o,s,a,p){var d,l;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),d=0,l=i.length;d<l;d+=1)Array.isArray(i[d])&&C(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Oi(i[d])==="[object Object]"&&(i[d]="[object Object]");if(typeof i=="object"&&Oi(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(d=0,l=o.length;d<l;d+=1)Fi(e,n,o[d],t);else Fi(e,n,o,t);else!e.json&&!en.call(t,i)&&en.call(n,i)&&(e.line=s||e.line,e.lineStart=a||e.lineStart,e.position=p||e.position,C(e,"duplicated mapping key")),Cs(n,i,o),delete t[i];return n}function Br(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):C(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function X(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;dn(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(ke(i))for(Br(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&St(e,"deficient indentation"),r}function Gt(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||ye(t)))}function Vr(e,n){n===1?e.result+=" ":n>1&&(e.result+=J.repeat(`
`,n-1))}function Dd(e,n,t){var r,i,o,s,a,p,d,l,u=e.kind,h=e.result,f;if(f=e.input.charCodeAt(e.position),ye(f)||gn(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(i=e.input.charCodeAt(e.position+1),ye(i)||t&&gn(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,a=!1;f!==0;){if(f===58){if(i=e.input.charCodeAt(e.position+1),ye(i)||t&&gn(i))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),ye(r))break}else{if(e.position===e.lineStart&&Gt(e)||t&&gn(f))break;if(ke(f))if(p=e.line,d=e.lineStart,l=e.lineIndent,X(e,!1,-1),e.lineIndent>=n){a=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=p,e.lineStart=d,e.lineIndent=l;break}}a&&(Ze(e,o,s,!1),Vr(e,e.line-p),o=s=e.position,a=!1),dn(f)||(s=e.position+1),f=e.input.charCodeAt(++e.position)}return Ze(e,o,s,!1),e.result?!0:(e.kind=u,e.result=h,!1)}function Gd(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Ze(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else ke(t)?(Ze(e,r,i,!0),Vr(e,X(e,!1,n)),r=i=e.position):e.position===e.lineStart&&Gt(e)?C(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);C(e,"unexpected end of the stream within a single quoted scalar")}function Md(e,n){var t,r,i,o,s,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return Ze(e,t,e.position,!0),e.position++,!0;if(a===92){if(Ze(e,t,e.position,!0),a=e.input.charCodeAt(++e.position),ke(a))X(e,!1,n);else if(a<256&&Es[a])e.result+=Ps[a],e.position++;else if((s=kd(a))>0){for(i=s,o=0;i>0;i--)a=e.input.charCodeAt(++e.position),(s=Od(a))>=0?o=(o<<4)+s:C(e,"expected hexadecimal character");e.result+=Fd(o),e.position++}else C(e,"unknown escape sequence");t=r=e.position}else ke(a)?(Ze(e,t,r,!0),Vr(e,X(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Gt(e)?C(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}C(e,"unexpected end of the stream within a double quoted scalar")}function Ld(e,n){var t=!0,r,i,o,s=e.tag,a,p=e.anchor,d,l,u,h,f,S=Object.create(null),v,k,F,I;if(I=e.input.charCodeAt(e.position),I===91)l=93,f=!1,a=[];else if(I===123)l=125,f=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),I=e.input.charCodeAt(++e.position);I!==0;){if(X(e,!0,n),I=e.input.charCodeAt(e.position),I===l)return e.position++,e.tag=s,e.anchor=p,e.kind=f?"mapping":"sequence",e.result=a,!0;t?I===44&&C(e,"expected the node content, but found ','"):C(e,"missed comma between flow collection entries"),k=v=F=null,u=h=!1,I===63&&(d=e.input.charCodeAt(e.position+1),ye(d)&&(u=h=!0,e.position++,X(e,!0,n))),r=e.line,i=e.lineStart,o=e.position,An(e,n,wt,!1,!0),k=e.tag,v=e.result,X(e,!0,n),I=e.input.charCodeAt(e.position),(h||e.line===r)&&I===58&&(u=!0,I=e.input.charCodeAt(++e.position),X(e,!0,n),An(e,n,wt,!1,!0),F=e.result),f?bn(e,a,S,k,v,F,r,i,o):u?a.push(bn(e,null,S,k,v,F,r,i,o)):a.push(v),X(e,!0,n),I=e.input.charCodeAt(e.position),I===44?(t=!0,I=e.input.charCodeAt(++e.position)):t=!1}C(e,"unexpected end of the stream within a flow collection")}function Ud(e,n){var t,r,i=nr,o=!1,s=!1,a=n,p=0,d=!1,l,u;if(u=e.input.charCodeAt(e.position),u===124)r=!1;else if(u===62)r=!0;else return!1;for(e.kind="scalar",e.result="";u!==0;)if(u=e.input.charCodeAt(++e.position),u===43||u===45)nr===i?i=u===43?qi:Ed:C(e,"repeat of a chomping mode identifier");else if((l=Nd(u))>=0)l===0?C(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?C(e,"repeat of an indentation width identifier"):(a=n+l-1,s=!0);else break;if(dn(u)){do u=e.input.charCodeAt(++e.position);while(dn(u));if(u===35)do u=e.input.charCodeAt(++e.position);while(!ke(u)&&u!==0)}for(;u!==0;){for(Br(e),e.lineIndent=0,u=e.input.charCodeAt(e.position);(!s||e.lineIndent<a)&&u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>a&&(a=e.lineIndent),ke(u)){p++;continue}if(e.lineIndent<a){i===qi?e.result+=J.repeat(`
`,o?1+p:p):i===nr&&o&&(e.result+=`
`);break}for(r?dn(u)?(d=!0,e.result+=J.repeat(`
`,o?1+p:p)):d?(d=!1,e.result+=J.repeat(`
`,p+1)):p===0?o&&(e.result+=" "):e.result+=J.repeat(`
`,p):e.result+=J.repeat(`
`,o?1+p:p),o=!0,s=!0,p=0,t=e.position;!ke(u)&&u!==0;)u=e.input.charCodeAt(++e.position);Ze(e,t,e.position,!1)}return!0}function $i(e,n){var t,r=e.tag,i=e.anchor,o=[],s,a=!1,p;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),p=e.input.charCodeAt(e.position);p!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,C(e,"tab characters must not be used in indentation")),!(p!==45||(s=e.input.charCodeAt(e.position+1),!ye(s))));){if(a=!0,e.position++,X(e,!0,-1)&&e.lineIndent<=n){o.push(null),p=e.input.charCodeAt(e.position);continue}if(t=e.line,An(e,n,As,!1,!0),o.push(e.result),X(e,!0,-1),p=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&p!==0)C(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function Bd(e,n,t){var r,i,o,s,a,p,d=e.tag,l=e.anchor,u={},h=Object.create(null),f=null,S=null,v=null,k=!1,F=!1,I;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),I=e.input.charCodeAt(e.position);I!==0;){if(!k&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,C(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),o=e.line,(I===63||I===58)&&ye(r))I===63?(k&&(bn(e,u,h,f,S,null,s,a,p),f=S=v=null),F=!0,k=!0,i=!0):k?(k=!1,i=!0):C(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,I=r;else{if(s=e.line,a=e.lineStart,p=e.position,!An(e,t,ws,!1,!0))break;if(e.line===o){for(I=e.input.charCodeAt(e.position);dn(I);)I=e.input.charCodeAt(++e.position);if(I===58)I=e.input.charCodeAt(++e.position),ye(I)||C(e,"a whitespace character is expected after the key-value separator within a block mapping"),k&&(bn(e,u,h,f,S,null,s,a,p),f=S=v=null),F=!0,k=!1,i=!1,f=e.tag,S=e.result;else if(F)C(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=d,e.anchor=l,!0}else if(F)C(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=d,e.anchor=l,!0}if((e.line===o||e.lineIndent>n)&&(k&&(s=e.line,a=e.lineStart,p=e.position),An(e,n,At,!0,i)&&(k?S=e.result:v=e.result),k||(bn(e,u,h,f,S,v,s,a,p),f=S=v=null),X(e,!0,-1),I=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>n)&&I!==0)C(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return k&&bn(e,u,h,f,S,null,s,a,p),F&&(e.tag=d,e.anchor=l,e.kind="mapping",e.result=u),F}function Vd(e){var n,t=!1,r=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&C(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):C(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!ye(s);)s===33&&(r?C(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),Ss.test(i)||C(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(n,e.position),qd.test(o)&&C(e,"tag suffix cannot contain flow indicator characters")}o&&!Is.test(o)&&C(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{C(e,"tag name is malformed: "+o)}return t?e.tag=o:en.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:C(e,'undeclared tag handle "'+i+'"'),!0}function Kd(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&C(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!ye(t)&&!gn(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&C(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Hd(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!ye(r)&&!gn(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&C(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),en.call(e.anchorMap,t)||C(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],X(e,!0,-1),!0}function An(e,n,t,r,i){var o,s,a,p=1,d=!1,l=!1,u,h,f,S,v,k;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=a=At===t||As===t,r&&X(e,!0,-1)&&(d=!0,e.lineIndent>n?p=1:e.lineIndent===n?p=0:e.lineIndent<n&&(p=-1)),p===1)for(;Vd(e)||Kd(e);)X(e,!0,-1)?(d=!0,a=o,e.lineIndent>n?p=1:e.lineIndent===n?p=0:e.lineIndent<n&&(p=-1)):a=!1;if(a&&(a=d||i),(p===1||At===t)&&(wt===t||ws===t?v=n:v=n+1,k=e.position-e.lineStart,p===1?a&&($i(e,k)||Bd(e,k,v))||Ld(e,v)?l=!0:(s&&Ud(e,v)||Gd(e,v)||Md(e,v)?l=!0:Hd(e)?(l=!0,(e.tag!==null||e.anchor!==null)&&C(e,"alias node should not have any properties")):Dd(e,v,wt===t)&&(l=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):p===0&&(l=a&&$i(e,k))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&C(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,h=e.implicitTypes.length;u<h;u+=1)if(S=e.implicitTypes[u],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(en.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,f=e.typeMap.multi[e.kind||"fallback"],u=0,h=f.length;u<h;u+=1)if(e.tag.slice(0,f[u].tag.length)===f[u].tag){S=f[u];break}S||C(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&C(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):C(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||l}function Wd(e){var n=e.position,t,r,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(X(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!ye(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&C(e,"directive name must not be less than one character in length");s!==0;){for(;dn(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!ke(s));break}if(ke(s))break;for(t=e.position;s!==0&&!ye(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}s!==0&&Br(e),en.call(Ni,r)?Ni[r](e,r,i):St(e,'unknown document directive "'+r+'"')}if(X(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,X(e,!0,-1)):o&&C(e,"directives end mark is expected"),An(e,e.lineIndent-1,At,!1,!0),X(e,!0,-1),e.checkLineBreaks&&Rd.test(e.input.slice(n,e.position))&&St(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Gt(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,X(e,!0,-1));return}if(e.position<e.length-1)C(e,"end of the stream or a document separator is expected");else return}function qs(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new $d(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,C(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Wd(t);return t.documents}function Xd(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=qs(e,t);if(typeof n!="function")return r;for(var i=0,o=r.length;i<o;i+=1)n(r[i])}function Yd(e,n){var t=qs(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new ae("expected a single document in the stream, but found more")}}var zd=Xd,Jd=Yd,Os={loadAll:zd,load:Jd},ks=Object.prototype.toString,Ns=Object.prototype.hasOwnProperty,Kr=65279,Zd=9,Zn=10,Qd=13,eu=32,nu=33,tu=34,hr=35,ru=37,iu=38,ou=39,su=42,Fs=44,au=45,It=58,pu=61,cu=62,lu=63,du=64,$s=91,Ds=93,uu=96,Gs=123,mu=124,Ms=125,te={};te[0]="\\0";te[7]="\\a";te[8]="\\b";te[9]="\\t";te[10]="\\n";te[11]="\\v";te[12]="\\f";te[13]="\\r";te[27]="\\e";te[34]='\\"';te[92]="\\\\";te[133]="\\N";te[160]="\\_";te[8232]="\\L";te[8233]="\\P";var yu=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],hu=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function fu(e,n){var t,r,i,o,s,a,p;if(n===null)return{};for(t={},r=Object.keys(n),i=0,o=r.length;i<o;i+=1)s=r[i],a=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),p=e.compiledTypeMap.fallback[s],p&&Ns.call(p.styleAliases,a)&&(a=p.styleAliases[a]),t[s]=a;return t}function gu(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new ae("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+J.repeat("0",r-n.length)+n}var bu=1,Qn=2;function _u(e){this.schema=e.schema||Ur,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=J.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=fu(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Qn:bu,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Di(e,n){for(var t=J.repeat(" ",n),r=0,i=-1,o="",s,a=e.length;r<a;)i=e.indexOf(`
`,r),i===-1?(s=e.slice(r),r=a):(s=e.slice(r,i+1),r=i+1),s.length&&s!==`
`&&(o+=t),o+=s;return o}function fr(e,n){return`
`+J.repeat(" ",e.indent*n)}function xu(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function Ct(e){return e===eu||e===Zd}function et(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Kr||65536<=e&&e<=1114111}function Gi(e){return et(e)&&e!==Kr&&e!==Qd&&e!==Zn}function Mi(e,n,t){var r=Gi(e),i=r&&!Ct(e);return(t?r:r&&e!==Fs&&e!==$s&&e!==Ds&&e!==Gs&&e!==Ms)&&e!==hr&&!(n===It&&!i)||Gi(n)&&!Ct(n)&&e===hr||n===It&&i}function Tu(e){return et(e)&&e!==Kr&&!Ct(e)&&e!==au&&e!==lu&&e!==It&&e!==Fs&&e!==$s&&e!==Ds&&e!==Gs&&e!==Ms&&e!==hr&&e!==iu&&e!==su&&e!==nu&&e!==mu&&e!==pu&&e!==cu&&e!==ou&&e!==tu&&e!==ru&&e!==du&&e!==uu}function vu(e){return!Ct(e)&&e!==It}function Nn(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Ls(e){var n=/^\n* /;return n.test(e)}var Us=1,gr=2,Bs=3,Vs=4,fn=5;function ju(e,n,t,r,i,o,s,a){var p,d=0,l=null,u=!1,h=!1,f=r!==-1,S=-1,v=Tu(Nn(e,0))&&vu(Nn(e,e.length-1));if(n||s)for(p=0;p<e.length;d>=65536?p+=2:p++){if(d=Nn(e,p),!et(d))return fn;v=v&&Mi(d,l,a),l=d}else{for(p=0;p<e.length;d>=65536?p+=2:p++){if(d=Nn(e,p),d===Zn)u=!0,f&&(h=h||p-S-1>r&&e[S+1]!==" ",S=p);else if(!et(d))return fn;v=v&&Mi(d,l,a),l=d}h=h||f&&p-S-1>r&&e[S+1]!==" "}return!u&&!h?v&&!s&&!i(e)?Us:o===Qn?fn:gr:t>9&&Ls(e)?fn:s?o===Qn?fn:gr:h?Vs:Bs}function wu(e,n,t,r,i){e.dump=(function(){if(n.length===0)return e.quotingType===Qn?'""':"''";if(!e.noCompatMode&&(yu.indexOf(n)!==-1||hu.test(n)))return e.quotingType===Qn?'"'+n+'"':"'"+n+"'";var o=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),a=r||e.flowLevel>-1&&t>=e.flowLevel;function p(d){return xu(e,d)}switch(ju(n,a,e.indent,s,p,e.quotingType,e.forceQuotes&&!r,i)){case Us:return n;case gr:return"'"+n.replace(/'/g,"''")+"'";case Bs:return"|"+Li(n,e.indent)+Ui(Di(n,o));case Vs:return">"+Li(n,e.indent)+Ui(Di(Au(n,s),o));case fn:return'"'+Su(n)+'"';default:throw new ae("impossible error: invalid scalar style")}})()}function Li(e,n){var t=Ls(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),o=i?"+":r?"":"-";return t+o+`
`}function Ui(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Au(e,n){for(var t=/(\n+)([^\n]*)/g,r=(function(){var d=e.indexOf(`
`);return d=d!==-1?d:e.length,t.lastIndex=d,Bi(e.slice(0,d),n)})(),i=e[0]===`
`||e[0]===" ",o,s;s=t.exec(e);){var a=s[1],p=s[2];o=p[0]===" ",r+=a+(!i&&!o&&p!==""?`
`:"")+Bi(p,n),i=o}return r}function Bi(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,o,s=0,a=0,p="";r=t.exec(e);)a=r.index,a-i>n&&(o=s>i?s:a,p+=`
`+e.slice(i,o),i=o+1),s=a;return p+=`
`,e.length-i>n&&s>i?p+=e.slice(i,s)+`
`+e.slice(s+1):p+=e.slice(i),p.slice(1)}function Su(e){for(var n="",t=0,r,i=0;i<e.length;t>=65536?i+=2:i++)t=Nn(e,i),r=te[t],!r&&et(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=r||gu(t);return n}function Iu(e,n,t){var r="",i=e.tag,o,s,a;for(o=0,s=t.length;o<s;o+=1)a=t[o],e.replacer&&(a=e.replacer.call(t,String(o),a)),(He(e,n,a,!1,!1)||typeof a>"u"&&He(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function Vi(e,n,t,r){var i="",o=e.tag,s,a,p;for(s=0,a=t.length;s<a;s+=1)p=t[s],e.replacer&&(p=e.replacer.call(t,String(s),p)),(He(e,n+1,p,!0,!0,!1,!0)||typeof p>"u"&&He(e,n+1,null,!0,!0,!1,!0))&&((!r||i!=="")&&(i+=fr(e,n)),e.dump&&Zn===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=o,e.dump=i||"[]"}function Cu(e,n,t){var r="",i=e.tag,o=Object.keys(t),s,a,p,d,l;for(s=0,a=o.length;s<a;s+=1)l="",r!==""&&(l+=", "),e.condenseFlow&&(l+='"'),p=o[s],d=t[p],e.replacer&&(d=e.replacer.call(t,p,d)),He(e,n,p,!1,!1)&&(e.dump.length>1024&&(l+="? "),l+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),He(e,n,d,!1,!1)&&(l+=e.dump,r+=l));e.tag=i,e.dump="{"+r+"}"}function Eu(e,n,t,r){var i="",o=e.tag,s=Object.keys(t),a,p,d,l,u,h;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new ae("sortKeys must be a boolean or a function");for(a=0,p=s.length;a<p;a+=1)h="",(!r||i!=="")&&(h+=fr(e,n)),d=s[a],l=t[d],e.replacer&&(l=e.replacer.call(t,d,l)),He(e,n+1,d,!0,!0,!0)&&(u=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,u&&(e.dump&&Zn===e.dump.charCodeAt(0)?h+="?":h+="? "),h+=e.dump,u&&(h+=fr(e,n)),He(e,n+1,l,!0,u)&&(e.dump&&Zn===e.dump.charCodeAt(0)?h+=":":h+=": ",h+=e.dump,i+=h));e.tag=o,e.dump=i||"{}"}function Ki(e,n,t){var r,i,o,s,a,p;for(i=t?e.explicitTypes:e.implicitTypes,o=0,s=i.length;o<s;o+=1)if(a=i[o],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof n=="object"&&n instanceof a.instanceOf)&&(!a.predicate||a.predicate(n))){if(t?a.multi&&a.representName?e.tag=a.representName(n):e.tag=a.tag:e.tag="?",a.represent){if(p=e.styleMap[a.tag]||a.defaultStyle,ks.call(a.represent)==="[object Function]")r=a.represent(n,p);else if(Ns.call(a.represent,p))r=a.represent[p](n,p);else throw new ae("!<"+a.tag+'> tag resolver accepts not "'+p+'" style');e.dump=r}return!0}return!1}function He(e,n,t,r,i,o,s){e.tag=null,e.dump=t,Ki(e,t,!1)||Ki(e,t,!0);var a=ks.call(e.dump),p=r,d;r&&(r=e.flowLevel<0||e.flowLevel>n);var l=a==="[object Object]"||a==="[object Array]",u,h;if(l&&(u=e.duplicates.indexOf(t),h=u!==-1),(e.tag!==null&&e.tag!=="?"||h||e.indent!==2&&n>0)&&(i=!1),h&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(l&&h&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),a==="[object Object]")r&&Object.keys(e.dump).length!==0?(Eu(e,n,e.dump,i),h&&(e.dump="&ref_"+u+e.dump)):(Cu(e,n,e.dump),h&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&n>0?Vi(e,n-1,e.dump,i):Vi(e,n,e.dump,i),h&&(e.dump="&ref_"+u+e.dump)):(Iu(e,n,e.dump),h&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object String]")e.tag!=="?"&&wu(e,e.dump,n,o,p);else{if(a==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new ae("unacceptable kind of an object to dump "+a)}e.tag!==null&&e.tag!=="?"&&(d=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?d="!"+d:d.slice(0,18)==="tag:yaml.org,2002:"?d="!!"+d.slice(18):d="!<"+d+">",e.dump=d+" "+e.dump)}return!0}function Pu(e,n){var t=[],r=[],i,o;for(br(e,t,r),i=0,o=r.length;i<o;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(o)}function br(e,n,t){var r,i,o;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)br(e[i],n,t);else for(r=Object.keys(e),i=0,o=r.length;i<o;i+=1)br(e[r[i]],n,t)}function Ru(e,n){n=n||{};var t=new _u(n);t.noRefs||Pu(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),He(t,0,r,!0,!0)?t.dump+`
`:""}var qu=Ru,Ou={dump:qu};function Hr(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var ku=Z,Nu=os,Fu=cs,$u=ys,Du=hs,Gu=Ur,Mu=Os.load,Lu=Os.loadAll,Uu=Ou.dump,Bu=ae,Vu={binary:xs,float:ms,map:ps,null:ls,pairs:vs,set:js,timestamp:bs,bool:ds,int:us,merge:_s,omap:Ts,seq:as,str:ss},Ku=Hr("safeLoad","load"),Hu=Hr("safeLoadAll","loadAll"),Wu=Hr("safeDump","dump"),Xu={Type:ku,Schema:Nu,FAILSAFE_SCHEMA:Fu,JSON_SCHEMA:$u,CORE_SCHEMA:Du,DEFAULT_SCHEMA:Gu,load:Mu,loadAll:Lu,dump:Uu,YAMLException:Bu,types:Vu,safeLoad:Ku,safeLoadAll:Hu,safeDump:Wu};const Ks=Object.assign({"/docs/openapi/asserted_distribution.yaml":Yc,"/docs/openapi/biological_association.yaml":zc,"/docs/openapi/biological_associations_graph.yaml":Jc,"/docs/openapi/biological_relationship.yaml":Zc,"/docs/openapi/cached_map.yaml":Qc,"/docs/openapi/citation.yaml":el,"/docs/openapi/collecting_event.yaml":nl,"/docs/openapi/collection_object.yaml":tl,"/docs/openapi/common_name.yaml":rl,"/docs/openapi/content.yaml":il,"/docs/openapi/controlled_vocabulary_term.yaml":ol,"/docs/openapi/conveyance.yaml":sl,"/docs/openapi/data_attribute.yaml":al,"/docs/openapi/depiction.yaml":pl,"/docs/openapi/download.yaml":cl,"/docs/openapi/dwc_occurrence.yaml":ll,"/docs/openapi/field_occurrence.yaml":dl,"/docs/openapi/identifier.yaml":ul,"/docs/openapi/image.yaml":ml,"/docs/openapi/lead.yaml":yl,"/docs/openapi/news.yaml":hl,"/docs/openapi/note.yaml":fl,"/docs/openapi/observation.yaml":gl,"/docs/openapi/observation_matrix.yaml":bl,"/docs/openapi/otu.yaml":_l,"/docs/openapi/person.yaml":xl,"/docs/openapi/sound.yaml":Tl,"/docs/openapi/source.yaml":vl,"/docs/openapi/tag.yaml":jl,"/docs/openapi/taxon_determination.yaml":wl,"/docs/openapi/taxon_name.yaml":Al,"/docs/openapi/taxon_name_classification.yaml":Sl,"/docs/openapi/taxon_name_relationship.yaml":Il,"/docs/openapi/utility.yaml":Cl}),tr=new Map;function Yu(e){return e.replace(/_/g," ").replace(/\bdwc\b/gi,"DWC").replace(/\b\w/g,n=>n.toUpperCase())}const zu=Object.keys(Ks).map(e=>{const n=e.split("/").pop(),t=n.replace(".yaml","");return{id:t,filename:n,label:Yu(t)}}).sort((e,n)=>e.label.localeCompare(n.label));function Ju(){const e=Wn(null),n=Wn(null);function t(r){n.value=null;const i=`/docs/openapi/${r}`;if(tr.has(i)){e.value=tr.get(i);return}const o=Ks[i];if(!o){n.value=`Spec file not found: ${r}`,e.value=null;return}try{const s=Xu.load(o);tr.set(i,s),e.value=s}catch(s){n.value=`Failed to parse ${r}: ${s.message}`,e.value=null}}return{spec:e,error:n,loadSpec:t,resources:zu}}const Zu={class:"app-body"},Qu={key:0,class:"markdown-page"},em={__name:"App",setup(e){const{spec:n,error:t,resources:r,loadSpec:i}=Ju();function o(){const p=new URLSearchParams(window.location.search).get("resource");return p==="overview"?"overview":p&&r.find(d=>d.id===p)?p:"overview"}const s=Wn(o());return Gn(s,a=>{const p=new URL(window.location);if(a==="overview"){n.value=null,t.value=null,p.searchParams.delete("resource"),window.history.replaceState({},"",p);return}const d=r.find(l=>l.id===a);d&&(i(d.filename),p.searchParams.set("resource",a),window.history.replaceState({},"",p))}),$r(()=>{const a=r.find(p=>p.id===s.value);a&&i(a.filename)}),(a,p)=>(be(),je(Te,null,[pe(Nc),fe("div",Zu,[pe(Uc,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=d=>s.value=d),resources:On(r)},null,8,["modelValue","resources"]),s.value==="overview"?(be(),je("div",Qu,[pe(On(Xc))])):(be(),Xo(Hc,{key:1,spec:On(n),error:On(t)},null,8,["spec","error"]))])],64))}},nm=Sn(em,[["__scopeId","data-v-dcb031e9"]]);xc(nm).mount("#app");
