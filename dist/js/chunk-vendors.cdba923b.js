"use strict";(self["webpackChunkfirechat"]=self["webpackChunkfirechat"]||[]).push([[998],{2262:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return Me},IU:function(){return Ee},Jd:function(){return S},PG:function(){return ve},Um:function(){return ge},WL:function(){return Le},X$:function(){return x},X3:function(){return Ce},Xl:function(){return Se},dq:function(){return Ne},iH:function(){return Pe},j:function(){return k},lk:function(){return I},nZ:function(){return a},qj:function(){return _e},qq:function(){return b},yT:function(){return we}});var r=n(3577);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&_)>0,u=e=>(e.n&_)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~_,i.n&=~_}t.length=n}},f=new WeakMap;let p=0,_=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=m,t=C;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,C=!0,_=1<<++p,p<=g?h(this):w(this),this.fn()}finally{p<=g&&d(this),_=1<<--p,m=this.parent,C=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let C=!0;const E=[];function S(){E.push(C),C=!1}function I(){const e=E.pop();C=void 0===e||e}function k(e,t,n){if(C&&m){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const i=void 0;T(r,i)}}function T(e,t){let n=!1;p<=g?u(e)||(e.n|=_,n=!c(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function x(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.yk)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(y)),(0,r._N)(e)&&c.push(a.get(v)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(y)),(0,r._N)(e)&&c.push(a.get(v)));break;case"set":(0,r._N)(e)&&c.push(a.get(y));break}if(1===c.length)c[0]&&N(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);N(l(e))}}function N(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&P(r,t);for(const r of n)r.computed||P(r,t)}function P(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),A=O();function O(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ee(this)[t].apply(this,e);return I(),n}})),e}function L(e){const t=Ee(this);return k(t,"has",e),t.hasOwnProperty(e)}class F{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const i=this._isReadonly,s=this._shallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?de:he:s?ue:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.kJ)(e);if(!i){if(o&&(0,r.RI)(A,t))return Reflect.get(A,t,n);if("hasOwnProperty"===t)return L}const a=Reflect.get(e,t,n);return((0,r.yk)(t)?D.has(t):R(t))?a:(i||k(e,"get",t),s?a:Ne(a)?o&&(0,r.S0)(t)?a:a.value:(0,r.Kn)(a)?i?me(a):_e(a):a)}}class M extends F{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._shallow){const t=be(s);if(we(n)||be(n)||(s=Ee(s),n=Ee(n)),!(0,r.kJ)(e)&&Ne(s)&&!Ne(n))return!t&&(s.value=n,!0)}const o=(0,r.kJ)(e)&&(0,r.S0)(t)?Number(t)<e.length:(0,r.RI)(e,t),a=Reflect.set(e,t,n,i);return e===Ee(i)&&(o?(0,r.aU)(n,s)&&x(e,"set",t,n,s):x(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}}class j extends F{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const q=new M,W=new j,B=new M(!0),U=e=>e,V=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ee(e),o=Ee(t);n||((0,r.aU)(t,o)&&k(s,"get",t),k(s,"get",o));const{has:a}=V(s),l=i?U:n?ke:Ie;return a.call(s,t)?l(e.get(t)):a.call(s,o)?l(e.get(o)):void(e!==s&&e.get(t))}function $(e,t=!1){const n=this["__v_raw"],i=Ee(n),s=Ee(e);return t||((0,r.aU)(e,s)&&k(i,"has",e),k(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function z(e,t=!1){return e=e["__v_raw"],!t&&k(Ee(e),"iterate",y),Reflect.get(e,"size",e)}function K(e){e=Ee(e);const t=Ee(this),n=V(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function Y(e,t){t=Ee(t);const n=Ee(this),{has:i,get:s}=V(n);let o=i.call(n,e);o||(e=Ee(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function J(e){const t=Ee(this),{has:n,get:r}=V(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function Q(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function G(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ee(s),a=t?U:e?ke:Ie;return!e&&k(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Z(e,t,n){return function(...i){const s=this["__v_raw"],o=Ee(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...i),h=n?U:t?ke:Ie;return!t&&k(o,"iterate",c?v:y),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function X(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ee(){const e={get(e){return H(this,e)},get size(){return z(this)},has:$,add:K,set:Y,delete:J,clear:Q,forEach:G(!1,!1)},t={get(e){return H(this,e,!1,!0)},get size(){return z(this)},has:$,add:K,set:Y,delete:J,clear:Q,forEach:G(!1,!0)},n={get(e){return H(this,e,!0)},get size(){return z(this,!0)},has(e){return $.call(this,e,!0)},add:X("add"),set:X("set"),delete:X("delete"),clear:X("clear"),forEach:G(!0,!1)},r={get(e){return H(this,e,!0,!0)},get size(){return z(this,!0)},has(e){return $.call(this,e,!0)},add:X("add"),set:X("set"),delete:X("delete"),clear:X("clear"),forEach:G(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=Z(i,!1,!1),n[i]=Z(i,!0,!1),t[i]=Z(i,!1,!0),r[i]=Z(i,!0,!0)})),[e,n,t,r]}const[te,ne,re,ie]=ee();function se(e,t){const n=t?e?ie:re:e?ne:te;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const oe={get:se(!1,!1)},ae={get:se(!1,!0)},le={get:se(!0,!1)};const ce=new WeakMap,ue=new WeakMap,he=new WeakMap,de=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,r.W7)(e))}function _e(e){return be(e)?e:ye(e,!1,q,oe,ce)}function ge(e){return ye(e,!1,B,ae,ue)}function me(e){return ye(e,!0,W,le,he)}function ye(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=pe(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function ve(e){return be(e)?ve(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return ve(e)||be(e)}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Se(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ie=e=>(0,r.Kn)(e)?_e(e):e,ke=e=>(0,r.Kn)(e)?me(e):e;function Te(e){C&&m&&(e=Ee(e),T(e.dep||(e.dep=l())))}function xe(e,t){e=Ee(e);const n=e.dep;n&&N(n)}function Ne(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Re(e,!1)}function Re(e,t){return Ne(e)?e:new De(e,t)}class De{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Ie(e)}get value(){return Te(this),this._value}set value(e){const t=this.__v_isShallow||we(e)||be(e);e=t?e:Ee(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ie(e),xe(this,e))}}function Ae(e){return Ne(e)?e.value:e}const Oe={get:(e,t,n)=>Ae(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return ve(e)?e:new Proxy(e,Oe)}class Fe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,xe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return Te(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Me(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Fe(i,s,o||!s,n);return a}},6252:function(e,t,n){n.d(t,{$d:function(){return o},FN:function(){return hn},HY:function(){return Dt},Ko:function(){return Ae},P$:function(){return se},Q6:function(){return he},U2:function(){return ae},Us:function(){return It},Wm:function(){return Qt},Y8:function(){return te},_:function(){return Jt},bv:function(){return Se},h:function(){return Rn},iD:function(){return Vt},ic:function(){return ke},nJ:function(){return re},nK:function(){return ue},wg:function(){return jt},wy:function(){return G}});var r=n(2262),i=n(3577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let i=0;i<e.length;i++)l.push(o(e[i],t,n,r));return l}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const f=[];let p=null,_=0;const g=Promise.resolve();let m=null;function y(e){const t=m||g;return e?t.then(this?e.bind(this):e):t}function v(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=k(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(v(e.id),0,e),w())}function w(){c||u||(u=!0,m=g.then(x))}function C(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?_+1:_)||f.push(e),w()}function S(e,t,n=(c?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),_=0;_<p.length;_++)p[_]();p=null,_=0}}const k=e=>null==e.id?1/0:e.id,T=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){u=!1,c=!0,h.sort(T);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,I(e),c=!1,m=null,(h.length||f.length)&&x(e)}}function N(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let c;let u=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[c=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function P(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,A=null;function O(e){const t=D;return D=e,A=e&&e.type.__scopeId||null,t}function L(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Bt(-1);const i=O(t);let s;try{s=e(...n)}finally{O(i),r._d&&Bt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:m}=e;let y,v;const b=O(e);try{if(4&n.shapeFlag){const e=s||r,t=e;y=tn(d.call(t,e,f,o,_,p,g)),v=u}else{const e=t;0,y=tn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),v=t.props?u:M(u)}}catch(C){Ft.length=0,a(C,e,1),y=Qt(Ot)}let w=y;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=w;e.length&&7&t&&(l&&e.some(i.tR)&&(v=j(v,l)),w=Xt(w,v))}return n.dirs&&(w=Xt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,O(b),y}const M=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function q(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||W(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?W(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!R(c,n))return!0}}return!1}function W(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!R(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const U=Symbol.for("v-ndc");const V=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const $={};function z(e,t,n){return K(e,t,n)}function K(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=un)?void 0:h.scope)?un:null;let f,p,_=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,_=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,_=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[y])}:i.dG,t&&a){const e=f;f=()=>Q(e())}let m,y=e=>{p=E.onStop=()=>{s(e,d,4),p=E.onStop=void 0}};if(bn){if(y=i.dG,t?n&&o(t,d,3,[f(),g?[]:void 0,y]):f(),"sync"!==l)return i.dG;{const e=An();m=e.__watcherHandles||(e.__watcherHandles=[])}}let v=g?new Array(e.length).fill($):$;const w=()=>{if(E.active)if(t){const e=E.run();(a||_||(g?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(p&&p(),o(t,d,3,[e,v===$?void 0:g&&v[0]===$?[]:v,y]),v=e)}else E.run()};let C;w.allowRecurse=!!t,"sync"===l?C=w:"post"===l?C=()=>St(w,d&&d.suspense):(w.pre=!0,d&&(w.id=d.uid),C=()=>b(w));const E=new r.qq(f,C);t?n?w():v=E.run():"post"===l?St(E.run.bind(E),d&&d.suspense):E.run();const S=()=>{E.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,E)};return m&&m.push(S),S}function Y(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?J(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=un;_n(this);const l=K(s,o.bind(r),n);return a?_n(a):gn(),l}function J(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function G(e,t){const n=D;if(null===n)return e;const r=Tn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Z(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const X=Symbol("_leaveCb"),ee=Symbol("_enterCb");function te(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),Te((()=>{e.isUnmounting=!0})),e}const ne=[Function,Array],re={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ne,onEnter:ne,onAfterEnter:ne,onEnterCancelled:ne,onBeforeLeave:ne,onLeave:ne,onAfterLeave:ne,onLeaveCancelled:ne,onBeforeAppear:ne,onAppear:ne,onAfterAppear:ne,onAppearCancelled:ne},ie={name:"BaseTransition",props:re,setup(e,{slots:t}){const n=hn(),i=te();let s;return()=>{const o=t.default&&he(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Ot){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:c}=l;if(i.isLeaving)return le(a);const u=ce(a);if(!u)return le(a);const h=ae(u,l,i,n);ue(u,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:_}=u.type;if(_){const e=_();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ot&&(!$t(u,f)||p)){const e=ae(f,l,i,n);if(ue(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},le(a);"in-out"===c&&u.type!==Ot&&(e.delayLeave=(e,t,n)=>{const r=oe(i,f);r[String(f.key)]=f,e[X]=()=>{t(),e[X]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},se=ie;function oe(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ae(e,t,n,r){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:b}=t,w=String(e.key),C=oe(n,e),E=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:l,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=m||c}t[X]&&t[X](!0);const i=C[w];i&&$t(e,i)&&i.el[X]&&i.el[X](),E(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||u,r=v||h,i=b||d}let o=!1;const a=e[ee]=t=>{o||(o=!0,E(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e[ee]=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[ee]&&t[ee](!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t[X]=n=>{s||(s=!0,r(),E(n?g:_,[t]),t[X]=void 0,C[i]===e&&delete C[i])};C[i]=e,p?S(p,[t,o]):o()},clone(e){return ae(e,t,n,r)}};return I}function le(e){if(fe(e))return e=Xt(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function he(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Dt?(128&o.patchFlag&&i++,r=r.concat(he(o.children,t,a))):(t||o.type!==Ot)&&r.push(null!=a?Xt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */const de=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,i.kJ)(e)?e.some((e=>pe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function _e(e,t){me(e,"a",t)}function ge(e,t){me(e,"da",t)}function me(e,t,n=un){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ye(r,t,n,e),e=e.parent}}function ye(e,t,n,r){const s=we(t,e,r,!0);xe((()=>{(0,i.Od)(r[t],s)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function be(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=un,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),_n(n);const s=o(t,n,e,i);return gn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ce=e=>(t,n=un)=>(!bn||"sp"===e)&&we(e,((...e)=>t(...e)),n),Ee=Ce("bm"),Se=Ce("m"),Ie=Ce("bu"),ke=Ce("u"),Te=Ce("bum"),xe=Ce("um"),Ne=Ce("sp"),Pe=Ce("rtg"),Re=Ce("rtc");function De(e,t=un){we("ec",e,t)}function Ae(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Oe=e=>e?mn(e)?Tn(e)||e.proxy:Oe(e.parent):null,Le=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oe(e.parent),$root:e=>Oe(e.root),$emit:e=>e.emit,$options:e=>He(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Y.bind(e)}),Fe=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Me={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Fe(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];qe&&(l[t]=0)}}const d=Le[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Fe(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Fe(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(Le,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function je(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let qe=!0;function We(e){const t=He(e),n=e.proxy,s=e.ctx;qe=!1,t.beforeCreate&&Ue(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:C,render:E,renderTracked:S,renderTriggered:I,errorCaptured:k,serverPrefetch:T,expose:x,inheritAttrs:N,components:P,directives:R,filters:D}=t,A=null;if(h&&Be(h,s,A),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(qe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Pn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)Ve(c[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{it(t,e[t])}))}function O(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ue(d,e,"c"),O(Ee,f),O(Se,p),O(Ie,_),O(ke,g),O(_e,m),O(ge,y),O(De,k),O(Re,S),O(Pe,I),O(Te,b),O(xe,C),O(Ne,T),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),P&&(e.components=P),R&&(e.directives=R)}function Be(e,t,n=i.dG){(0,i.kJ)(e)&&(e=Je(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?st(n.from||s,n.default,!0):st(n.from||s):st(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ue(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ve(e,t,n,r){const s=r.includes(".")?J(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&z(s,n)}else if((0,i.mf)(e))z(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ve(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&z(s,r,e)}else 0}function He(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||r?(c={},s.length&&s.forEach((e=>$e(c,e,a,!0))),$e(c,t,a)):c=t,(0,i.Kn)(t)&&o.set(t,c),c}function $e(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$e(e,s,n,!0),i&&i.forEach((t=>$e(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ze[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ze={data:Ke,props:Ze,emits:Ze,methods:Ge,computed:Ge,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Ge,directives:Ge,watch:Xe,provide:Ke,inject:Ye};function Ke(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ye(e,t){return Ge(Je(e),Je(t))}function Je(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ge(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function Ze(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),je(e),je(null!=t?t:{})):t}function Xe(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Qe(e[r],t[r]);return n}function et(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tt=0;function nt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=et();const o=new WeakSet;let a=!1;const l=s.app={_uid:tt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:On,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){0;const u=Qt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,Tn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l},runWithContext(e){rt=l;try{return e()}finally{rt=null}}};return l}}let rt=null;function it(e,t){if(un){let n=un.provides;const r=un.parent&&un.parent.provides;r===n&&(n=un.provides=Object.create(r)),n[e]=t}else 0}function st(e,t,n=!1){const r=un||D;if(r||rt){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:rt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ot(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,zt,1),e.propsDefaults=Object.create(null),lt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function at(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;lt(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ct(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=ct(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:R(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,c=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=ct(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return c}function ct(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(_n(s),r=i[n]=e.call(null,t),gn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ut(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=ut(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ht(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ht(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=pt(Boolean,r.type),n=pt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return(0,i.Kn)(e)&&r.set(e,u),u}function ht(e){return"$"!==e[0]}function dt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ft(e,t){return dt(e)===dt(t)}function pt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ft(t,e))):(0,i.mf)(t)&&ft(t,e)?0:-1}const _t=e=>"_"===e[0]||"$stable"===e,gt=e=>(0,i.kJ)(e)?e.map(tn):[tn(e)],mt=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>gt(t(...e))),n);return r._c=!1,r},yt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_t(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=mt(s,n,r);else if(null!=n){0;const e=gt(n);t[s]=()=>e}}},vt=(e,t)=>{const n=gt(t);e.slots.default=()=>n},bt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):yt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,zt,1)},wt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,yt(t,s)),a=t}else t&&(vt(e,t),a={default:1});if(o)for(const i in s)_t(i)||null!=a[i]||delete s[i]};function Ct(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Ct(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const l=4&o.shapeFlag?Tn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[c,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,(0,i.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,e.k&&(f[e.k]=c))};c?(r.id=-1,St(r,n)):r()}else 0}}function Et(){}const St=H;function It(e){return kt(e)}function kt(e,t){Et();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:_=i.dG,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!$t(e,t)&&(r=X(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case At:y(e,t,n,r);break;case Ot:v(e,t,n,r);break;case Lt:null==e&&w(t,n,r,o);break;case Dt:O(e,t,n,r,i,s,o,a,l);break;default:1&h?T(e,t,n,r,i,s,o,a,l):6&h?L(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,te)}null!=u&&i&&Ct(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},v=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?x(t,n,r,i,s,o,a,l):R(e,t,i,s,o,a,l)},x=(e,t,n,r,o,c,u,h)=>{let f,p;const{type:_,props:g,shapeFlag:m,transition:y,dirs:v}=e;if(f=e.el=l(e.type,c,g&&g.is,g),8&m?d(f,e.children):16&m&&P(e.children,f,null,r,o,c&&"foreignObject"!==_,u,h),v&&Z(e,null,r,"created"),N(f,e,e.scopeId,u,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],c,e.children,r,o,G);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&on(p,r,e)}v&&Z(e,null,r,"beforeMount");const b=xt(o,y);b&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||v)&&St((()=>{p&&on(p,r,e),b&&y.enter(f),v&&Z(e,null,r,"mounted")}),o)},N=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let s=0;s<r.length;s++)_(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;N(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?nn(e[c]):tn(e[c]);m(null,l,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,_=t.props||i.kT;let g;n&&Tt(n,!1),(g=_.onVnodeBeforeUpdate)&&on(g,n,t,e),f&&Z(t,e,n,"beforeUpdate"),n&&Tt(n,!0);const m=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,c,n,r,m,o):l||V(e,t,c,null,n,r,m,o,!1),u>0){if(16&u)A(c,t,p,_,n,r,s);else if(2&u&&p.class!==_.class&&a(c,"class",null,_.class,s),4&u&&a(c,"style",p.style,_.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],u=_[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,r,G)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||A(c,t,p,_,n,r,s);((g=_.onVnodeUpdated)||f)&&St((()=>{g&&on(g,n,t,e),f&&Z(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Dt||!$t(l,c)||70&l.shapeFlag)?f(l.el):n;m(l,c,u,null,r,i,s,o,!0)}},A=(e,t,n,r,s,o,l)=>{if(n!==r){if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,s,o,G);for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,G)}"value"in r&&a(e,"value",n.value,r.value)}},O=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(s(h,n,r),s(d,n,r),P(t.children,n,d,i,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&Nt(e,t,!0)):V(e,t,n,d,i,o,a,l,u)},L=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):M(t,n,r,i,s,o,l):j(e,t,l)},M=(e,t,n,r,i,s,o)=>{const a=e.component=cn(e,r,i);if(fe(e)&&(a.ctx.renderer=te),wn(a),a.asyncDep){if(i&&i.registerDep(a,W),!e.el){const e=a.subTree=Qt(Ot);v(null,e,t,n)}}else W(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,C(r.update),r.update()}else t.el=e.el,r.vnode=t},W=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:c,vnode:u}=e,h=n;0,Tt(e,!1),n?(n.el=u.el,U(e,n,l)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&on(t,c,n,u),Tt(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,m(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&St(s,o),(t=n.props&&n.props.onVnodeUpdated)&&St((()=>on(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=de(t);if(Tt(e,!1),u&&(0,i.ir)(u),!f&&(r=c&&c.onVnodeBeforeMount)&&on(r,d,t),Tt(e,!0),l&&re){const n=()=>{e.subTree=F(e),re(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,m(null,r,n,s,e,o,a),t.el=r.el}if(h&&St(h,o),!f&&(r=c&&c.onVnodeMounted)){const e=t;St((()=>on(r,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&St(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(c,(()=>b(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,Tt(e,!0),h()},U=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,at(e,t.props,i,n),wt(e,t.children,n),(0,r.Jd)(),S(e),(0,r.lk)()},V=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(c,h,n,r,i,s,o,a,l);if(256&f)return void H(c,h,n,r,i,s,o,a,l)}8&p?(16&u&&G(c,i,s),h!==c&&d(n,h)):16&u?16&p?$(c,h,n,r,i,s,o,a,l):G(c,i,s,!0):(8&u&&d(n,""),16&p&&P(h,n,r,i,s,o,a,l))},H=(e,t,n,r,s,o,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=c?nn(t[f]):tn(t[f]);m(e[f],r,n,null,s,o,a,l,c)}u>h?G(e,s,o,!0,!1,d):P(t,n,r,s,o,a,l,c,d)},$=(e,t,n,r,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=c?nn(t[u]):tn(t[u]);if(!$t(r,i))break;m(r,i,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=c?nn(t[f]):tn(t[f]);if(!$t(r,i))break;m(r,i,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)m(null,t[u]=c?nn(t[u]):tn(t[u]),n,i,s,o,a,l,c),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,_=u,g=new Map;for(u=_;u<=f;u++){const e=t[u]=c?nn(t[u]):tn(t[u]);null!=e.key&&g.set(e.key,u)}let y,v=0;const b=f-_+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(v>=b){K(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=_;y<=f;y++)if(0===E[y-_]&&$t(r,t[y])){i=y;break}void 0===i?K(r,s,o,!0):(E[i-_]=u+1,i>=C?C=i:w=!0,m(r,t[i],n,null,s,o,a,l,c),v++)}const S=w?Pt(E):i.Z6;for(y=S.length-1,u=b-1;u>=0;u--){const e=_+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?m(null,i,n,d,s,o,a,l,c):w&&(y<0||u!==S[y]?z(i,n,d,2):y--)}}},z=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Dt){s(o,t,n);for(let e=0;e<c.length;e++)z(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===Lt)return void E(e,t,n);const h=2!==r&&1&u&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),St((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Ct(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!de(e);let _;if(p&&(_=o&&o.onVnodeBeforeUnmount)&&on(_,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Z(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):c&&(s!==Dt||h>0&&64&h)?G(c,t,n,!1,!0):(s===Dt&&384&h||!i&&16&u)&&G(l,t,n),r&&Y(e)}(p&&(_=o&&o.onVnodeUnmounted)||f)&&St((()=>{_&&on(_,t,e),f&&Z(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Dt)return void J(n,r);if(t===Lt)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),l&&St(l,t),St((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),S(),I(),t._vnode=e},te={p:m,um:K,m:z,r:Y,mt:M,mc:P,pc:V,pbc:D,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:nt(ee,ne)}}function Tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=nn(s[i]),t.el=e.el),n||Nt(e,t)),t.type===At&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Rt=e=>e.__isTeleport;const Dt=Symbol.for("v-fgt"),At=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),Ft=[];let Mt=null;function jt(e=!1){Ft.push(Mt=e?null:[])}function qt(){Ft.pop(),Mt=Ft[Ft.length-1]||null}let Wt=1;function Bt(e){Wt+=e}function Ut(e){return e.dynamicChildren=Wt>0?Mt||i.Z6:null,qt(),Wt>0&&Mt&&Mt.push(e),e}function Vt(e,t,n,r,i,s){return Ut(Jt(e,t,n,r,i,s,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function $t(e,t){return e.type===t.type&&e.key===t.key}const zt="__vInternal",Kt=({key:e})=>null!=e?e:null,Yt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function Jt(e,t=null,n=null,r=0,s=null,o=(e===Dt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kt(t),ref:t&&Yt(t),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return l?(rn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),Wt>0&&!a&&Mt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Mt.push(c),c}const Qt=Gt;function Gt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==U||(e=Ot),Ht(e)){const r=Xt(e,t,!0);return n&&rn(r,n),Wt>0&&!a&&Mt&&(6&r.shapeFlag?Mt[Mt.indexOf(e)]=r:Mt.push(r)),r.patchFlag|=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=Zt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:V(e)?128:Rt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Jt(e,t,n,s,o,l,a,!0)}function Zt(e){return e?(0,r.X3)(e)||zt in e?(0,i.l7)({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?sn(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kt(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c}function en(e=" ",t=0){return Qt(At,null,e,t)}function tn(e){return null==e||"boolean"===typeof e?Qt(Ot):(0,i.kJ)(e)?Qt(Dt,null,e.slice()):"object"===typeof e?nn(e):Qt(At,null,String(e))}function nn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Xt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||zt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[en(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function on(e,t,n,r=null){o(e,t,7,[n,r])}const an=et();let ln=0;function cn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||an,a={uid:ln++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ut(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=N.bind(null,a),e.ce&&e.ce(a),a}let un=null;const hn=()=>un||D;let dn,fn,pn="__VUE_INSTANCE_SETTERS__";(fn=(0,i.E9)()[pn])||(fn=(0,i.E9)()[pn]=[]),fn.push((e=>un=e)),dn=e=>{fn.length>1?fn.forEach((t=>t(e))):fn[0](e)};const _n=e=>{dn(e),e.scope.on()},gn=()=>{un&&un.scope.off(),dn(null)};function mn(e){return 4&e.vnode.shapeFlag}let yn,vn,bn=!1;function wn(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,i=mn(e);ot(e,n,i,t),bt(e,r);const s=i?Cn(e,t):void 0;return bn=!1,s}function Cn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Me));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?kn(e):null;_n(e),(0,r.Jd)();const l=s(o,e,0,[e.props,n]);if((0,r.lk)(),gn(),(0,i.tI)(l)){if(l.then(gn,gn),t)return l.then((n=>{En(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else En(e,l,t)}else Sn(e,t)}function En(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const s=e.type;if(!e.render){if(!t&&yn&&!s.render){const t=s.template||He(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=yn(t,l)}}e.render=s.render||i.dG,vn&&vn(e)}_n(e),(0,r.Jd)();try{We(e)}finally{(0,r.lk)(),gn()}}function In(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function kn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return In(e)},slots:e.slots,emit:e.emit,expose:t}}function Tn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Le?Le[n](e):void 0},has(e,t){return t in e||t in Le}}))}function xn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Pn=(e,t)=>(0,r.Fl)(e,t,bn);function Rn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Ht(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ht(n)&&(n=[n]),Qt(e,t,n))}const Dn=Symbol.for("v-scx"),An=()=>{{const e=st(Dn);return e}};const On="3.3.13"},9963:function(e,t,n){n.d(t,{iM:function(){return ye},nr:function(){return _e},ri:function(){return Ce}});var r=n(6252),i=n(3577),s=n(2262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},u="transition",h="animation",d=Symbol("_vtc"),f=(e,{slots:t})=>(0,r.h)(r.P$,y(e),t);f.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_=f.props=(0,i.l7)({},r.nJ,p),g=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},m=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function y(e){const t={};for(const i in e)i in p||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,y=v(s),b=y&&y[0],S=y&&y[1],{onBeforeEnter:k,onEnter:T,onEnterCancelled:x,onLeave:P,onLeaveCancelled:R,onBeforeAppear:D=k,onAppear:A=T,onAppearCancelled:O=x}=t,L=(e,t,n)=>{C(e,t?h:l),C(e,t?u:a),n&&n()},F=(e,t)=>{e._isLeaving=!1,C(e,d),C(e,_),C(e,f),t&&t()},M=e=>(t,n)=>{const i=e?A:T,s=()=>L(t,e,n);g(i,[t,s]),E((()=>{C(t,e?c:o),w(t,e?h:l),m(i)||I(t,r,b,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){g(k,[e]),w(e,o),w(e,a)},onBeforeAppear(e){g(D,[e]),w(e,c),w(e,u)},onEnter:M(!1),onAppear:M(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>F(e,t);w(e,d),N(),w(e,f),E((()=>{e._isLeaving&&(C(e,d),w(e,_),m(P)||I(e,r,S,n))})),g(P,[e,n])},onEnterCancelled(e){L(e,!1),g(x,[e])},onAppearCancelled(e){L(e,!0),g(O,[e])},onLeaveCancelled(e){F(e),g(R,[e])}})}function v(e){if(null==e)return null;if((0,i.Kn)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.He)(e);return t}function w(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[d]||(e[d]=new Set)).add(t)}function C(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[d];n&&(n.delete(t),n.size||(e[d]=void 0))}function E(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function I(e,t,n,r){const i=e._endId=++S,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=k(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${u}Delay`),s=r(`${u}Duration`),o=T(i,s),a=r(`${h}Delay`),l=r(`${h}Duration`),c=T(a,l);let d=null,f=0,p=0;t===u?o>0&&(d=u,f=o,p=s.length):t===h?c>0&&(d=h,f=c,p=l.length):(f=Math.max(o,c),d=f>0?o>c?u:h:null,p=d?d===u?s.length:l.length:0);const _=d===u&&/\b(transform|all)(,|$)/.test(r(`${u}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:_}}function T(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>x(t)+x(e[n]))))}function x(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function N(){return document.body.offsetHeight}function P(e,t,n){const r=e[d];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const R=Symbol("_vod");const D=Symbol("");function A(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&L(r,e,"");for(const e in n)L(r,e,n[e])}else{const i=r.display;if(s){if(t!==n){const e=r[D];e&&(n+=";"+e),r.cssText=n}}else t&&e.removeAttribute("style");R in e&&(r.display=i)}}const O=/\s*!important$/;function L(e,t,n){if((0,i.kJ)(n))n.forEach((n=>L(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=j(e,t);O.test(n)?e.setProperty((0,i.rs)(r),n.replace(O,""),"important"):e[r]=n}}const F=["Webkit","Moz","ms"],M={};function j(e,t){const n=M[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return M[t]=r;r=(0,i.kC)(r);for(let i=0;i<F.length;i++){const n=F[i]+r;if(n in e)return M[t]=n}return t}const q="http://www.w3.org/1999/xlink";function W(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(q,t.slice(6,t.length)):e.setAttributeNS(q,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function B(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const l=e.tagName;if("value"===t&&"PROGRESS"!==l&&!l.includes("-")){e._value=n;const r="OPTION"===l?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function U(e,t,n,r){e.addEventListener(t,n,r)}function V(e,t,n,r){e.removeEventListener(t,n,r)}const H=Symbol("_vei");function $(e,t,n,r,i=null){const s=e[H]||(e[H]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=K(t);if(r){const o=s[t]=G(r,i);U(e,n,o,a)}else o&&(V(e,n,o,a),s[t]=void 0)}}const z=/(?:Once|Passive|Capture)$/;function K(e){let t;if(z.test(e)){let n;t={};while(n=e.match(z))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let Y=0;const J=Promise.resolve(),Q=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function G(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(Z(e,n.value),t,5,[e])};return n.value=e,n.attached=Q(),n}function Z(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const X=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ee=(e,t,n,r,s=!1,o,a,l,c)=>{"class"===t?P(e,r,s):"style"===t?A(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||$(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):te(e,t,r,s))?B(e,t,r,o,a,l,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),W(e,t,r,s))};function te(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&X(t)&&(0,i.mf)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!X(t)||!(0,i.HD)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ne=new WeakMap,re=new WeakMap,ie=Symbol("_moveCb"),se=Symbol("_enterCb"),oe={name:"TransitionGroup",props:(0,i.l7)({},_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ue(o[0].el,n.vnode.el,t))return;o.forEach(ae),o.forEach(le);const r=o.filter(ce);N(),r.forEach((e=>{const n=e.el,r=n.style;w(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ie]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ie]=null,C(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),c=y(l);let u=l.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,c,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,c,i,n)),ne.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}};oe.props;function ae(e){const t=e.el;t[ie]&&t[ie](),t[se]&&t[se]()}function le(e){re.set(e,e.el.getBoundingClientRect())}function ce(e){const t=ne.get(e),n=re.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ue(e,t,n){const r=e.cloneNode(),i=e[d];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=k(r);return s.removeChild(r),o}const he=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function de(e){e.target.composing=!0}function fe(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pe=Symbol("_assign"),_e={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[pe]=he(s);const o=r||s.props&&"number"===s.props.type;U(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),e[pe](r)})),n&&U(e,"change",(()=>{e.value=e.value.trim()})),t||(U(e,"compositionstart",de),U(e,"compositionend",fe),U(e,"change",fe))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[pe]=he(o),e.composing)return;const a=s||"number"===e.type?(0,i.h5)(e.value):e.value,l=null==t?"":t;if(a!==l){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===l)return}e.value=l}}};const ge=["ctrl","shift","alt","meta"],me={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ge.some((n=>e[`${n}Key`]&&!t.includes(n)))},ye=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=me[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ve=(0,i.l7)({patchProp:ee},c);let be;function we(){return be||(be=(0,r.Us)(ve))}const Ce=(...e)=>{const t=we().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ee(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ee(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return G},DM:function(){return g},E9:function(){return V},F7:function(){return l},Gg:function(){return N},HD:function(){return b},He:function(){return B},Kj:function(){return y},Kn:function(){return C},NO:function(){return a},Nj:function(){return q},Od:function(){return h},PO:function(){return T},Pq:function(){return X},RI:function(){return f},S0:function(){return x},W7:function(){return k},WV:function(){return ne},Z6:function(){return s},_A:function(){return D},_N:function(){return _},aU:function(){return M},dG:function(){return o},fY:function(){return r},h5:function(){return W},hR:function(){return F},hq:function(){return re},ir:function(){return j},j5:function(){return z},kC:function(){return L},kJ:function(){return p},kT:function(){return i},l7:function(){return u},mf:function(){return v},rs:function(){return O},tI:function(){return E},tR:function(){return c},yA:function(){return ee},yk:function(){return w},yl:function(){return $},zw:function(){return ie}});const i={},s=[],o=()=>{},a=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,_=e=>"[object Map]"===I(e),g=e=>"[object Set]"===I(e),m=e=>"[object Date]"===I(e),y=e=>"[object RegExp]"===I(e),v=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"symbol"===typeof e,C=e=>null!==e&&"object"===typeof e,E=e=>(C(e)||v(e))&&v(e.then)&&v(e.catch),S=Object.prototype.toString,I=e=>S.call(e),k=e=>I(e).slice(8,-1),T=e=>"[object Object]"===I(e),x=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},R=/-(\w)/g,D=P((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),A=/\B([A-Z])/g,O=P((e=>e.replace(A,"-$1").toLowerCase())),L=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=P((e=>{const t=e?`on${L(e)}`:"";return t})),M=(e,t)=>!Object.is(e,t),j=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},q=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let U;const V=()=>U||(U="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",$=r(H);function z(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?Q(r):z(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||C(e))return e}const K=/;(?![^(]*\))/g,Y=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(J,"").split(K).forEach((e=>{if(e){const n=e.split(Y);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function G(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=G(e[n]);r&&(t+=r+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X=r(Z);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=C(e),r=C(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>b(e)?e:null==e?"":p(e)||C(e)&&(e.toString===S||!v(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):_(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[oe(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>oe(e)))}:w(t)?oe(t):!C(t)||p(t)||T(t)?t:String(t),oe=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},3744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9901:function(e,t,n){n.d(t,{BH:function(){return C},DV:function(){return U},Dv:function(){return X},GJ:function(){return W},L:function(){return h},LL:function(){return A},Sg:function(){return E},UI:function(){return H},US:function(){return l},Wj:function(){return te},Wl:function(){return M},Yr:function(){return x},ZB:function(){return p},ZR:function(){return D},aH:function(){return w},b$:function(){return T},cI:function(){return F},dS:function(){return re},eu:function(){return P},g5:function(){return s},gK:function(){return ee},gQ:function(){return Y},h$:function(){return u},hl:function(){return N},hu:function(){return i},jU:function(){return k},lb:function(){return ne},m9:function(){return se},ne:function(){return J},p$:function(){return f},r3:function(){return B},uI:function(){return I},ug:function(){return ie},vZ:function(){return $},w9:function(){return q},xO:function(){return K},xb:function(){return V}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==h)throw new c;const d=t<<2|o>>4;if(r.push(d),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=p(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/Chat-Vue/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},b=()=>{try{return m()||y()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function k(){return"object"===typeof self&&self.self===self}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function P(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function O(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return JSON.parse(e)}function M(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=F(d(s[0])||""),n=F(d(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},q=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},W=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(z(n)&&z(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function z(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):u<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const e=(s<<5|s>>>27)+r+c+i+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function J(e,t){const n=new Q(e,t);return n.subscribe.bind(n)}class Q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Z),void 0===r.error&&(r.error=Z),void 0===r.complete&&(r.complete=Z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function ee(e,t){return`${e} failed: ${t} argument `}function te(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(ee(e,t)+"must be a valid function.")}function ne(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(ee(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ie=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){return e&&e._delegate?e._delegate:e}},509:function(e,t,n){var r=n(9985),i=n(3691),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},5027:function(e,t,n){var r=n(8999),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},4328:function(e,t,n){var r=n(5290),i=n(7578),s=n(6310),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!==n){while(c>u)if(a=l[u++],a!==a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,n){var r=n(7697),i=n(2297),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6648:function(e,t,n){var r=n(8844),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},8758:function(e,t,n){var r=n(6812),i=n(9152),s=n(2474),o=n(2560);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||l(e,h,c(t,h))}}},5773:function(e,t,n){var r=n(7697),i=n(2560),s=n(5684);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5684:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1880:function(e,t,n){var r=n(9985),i=n(2560),s=n(8702),o=n(5014);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5014:function(e,t,n){var r=n(9037),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},7697:function(e,t,n){var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},6420:function(e,t,n){var r=n(9037),i=n(8999),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},5565:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,n){var r,i,s=n(9037),o=n(71),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(e,t,n){var r=n(9037),i=n(2474).f,s=n(5773),o=n(1880),a=n(5014),l=n(8758),c=n(5266);e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,g=e.global,m=e.stat;if(u=g?r:m?r[_]||a(_,{}):(r[_]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=c(g?h:_+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,n){var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,n){var r=n(7215),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:function(e,t,n){var r=n(7697),i=n(6812),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},8844:function(e,t,n){var r=n(7215),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},6058:function(e,t,n){var r=n(9037),i=n(9985),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},4849:function(e,t,n){var r=n(509),i=n(981);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(e,t,n){var r=n(8844),i=n(690),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},7248:function(e){e.exports={}},8506:function(e,t,n){var r=n(7697),i=n(3689),s=n(6420);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,n){var r=n(8844),i=n(3689),s=n(6648),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},6738:function(e,t,n){var r=n(8844),i=n(9985),s=n(4091),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},618:function(e,t,n){var r,i,s,o=n(9834),a=n(9037),l=n(8999),c=n(5773),u=n(6812),h=n(4091),d=n(2713),f=n(7248),p="Object already initialized",_=a.TypeError,g=a.WeakMap,m=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw new _("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var v=h.state||(h.state=new g);v.get=v.get,v.has=v.has,v.set=v.set,r=function(e,t){if(v.has(e))throw new _(p);return t.facade=e,v.set(e,t),t},i=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw new _(p);return t.facade=e,c(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:r,get:i,has:s,enforce:m,getterFor:y}},2297:function(e,t,n){var r=n(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9985:function(e,t,n){var r=n(2659),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},5266:function(e,t,n){var r=n(3689),i=n(9985),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n===u||n!==c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,t,n){var r=n(9985),i=n(2659),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},3931:function(e){e.exports=!1},734:function(e,t,n){var r=n(6058),i=n(9985),s=n(3622),o=n(9525),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6310:function(e,t,n){var r=n(3126);e.exports=function(e){return r(e.length)}},8702:function(e,t,n){var r=n(8844),i=n(3689),s=n(9985),o=n(6812),a=n(7697),l=n(1236).CONFIGURABLE,c=n(6738),u=n(618),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,_=r("".slice),g=r("".replace),m=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),v=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===_(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=m(v,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||c(this)}),"toString")},8828:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2560:function(e,t,n){var r=n(7697),i=n(8506),s=n(5648),o=n(5027),a=n(8360),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2474:function(e,t,n){var r=n(7697),i=n(2615),s=n(9556),o=n(5684),a=n(5290),l=n(8360),c=n(6812),u=n(8506),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},2741:function(e,t,n){var r=n(4948),i=n(2739),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},3622:function(e,t,n){var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,n){var r=n(8844),i=n(6812),s=n(5290),o=n(4328).indexOf,a=n(7248),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);while(t.length>c)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},9556:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},5899:function(e,t,n){var r=n(2615),i=n(9985),s=n(8999),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},9152:function(e,t,n){var r=n(6058),i=n(8844),s=n(2741),o=n(7518),a=n(5027),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4684:function(e,t,n){var r=n(981),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},2713:function(e,t,n){var r=n(3430),i=n(4630),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4091:function(e,t,n){var r=n(9037),i=n(5014),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},3430:function(e,t,n){var r=n(3931),i=n(4091);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.34.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,n){var r=n(3615),i=n(3689),s=n(9037),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,n){var r=n(8700),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5290:function(e,t,n){var r=n(4413),i=n(4684);e.exports=function(e){return r(i(e))}},8700:function(e,t,n){var r=n(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:function(e,t,n){var r=n(8700),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},690:function(e,t,n){var r=n(4684),i=Object;e.exports=function(e){return i(r(e))}},8732:function(e,t,n){var r=n(2615),i=n(8999),s=n(734),o=n(4849),a=n(5899),l=n(4201),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw new c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8360:function(e,t,n){var r=n(8732),i=n(734);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3691:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:function(e,t,n){var r=n(8844),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9525:function(e,t,n){var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,n){var r=n(7697),i=n(3689);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(e,t,n){var r=n(9037),i=n(9985),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4201:function(e,t,n){var r=n(9037),i=n(3430),s=n(6812),o=n(4630),a=n(146),l=n(9525),c=r.Symbol,u=i("wks"),h=l?c["for"]||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:h("Symbol."+e)),u[e]}},560:function(e,t,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(5565),l=n(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=c||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return o(t,n),n}})},4301:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(9901),i=n(7087),s=n(3042),o=n(4959);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new r.LL("app-compat","Firebase",l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw c.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const l=new e(a,n);return t[a.name]=l,l}function l(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw c.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",_="0.2.25";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,_,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const m=d;g()},3042:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ce},_addOrOverwriteComponent:function(){return ue},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return le},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ce},getApp:function(){return be},getApps:function(){return we},initializeApp:function(){return ve},onLog:function(){return Se},registerVersion:function(){return Ee},setLogLevel:function(){return Ie}});var r=n(7087),i=n(4959),s=n(9901);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(C(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),C(h.get(this))}:function(...t){return C(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&m(e),o(e,c())?new Proxy(e,y):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),_.set(t,e)),t}const E=e=>_.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=C(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(C(o.result),e.oldVersion,e.newVersion,C(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],T=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return T.set(t,s),s}v((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.9.25",A=new i.Yd("@firebase/app"),O="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",j="@firebase/app-check",q="@firebase/auth",W="@firebase/auth-compat",B="@firebase/database",U="@firebase/database-compat",V="@firebase/functions",H="@firebase/functions-compat",$="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",Y="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",G="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.7.1",se="[DEFAULT]",oe={[R]:"fire-core",[O]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[M]:"fire-app-check-compat",[q]:"fire-auth",[W]:"fire-auth-compat",[B]:"fire-rtdb",[U]:"fire-rtdb-compat",[V]:"fire-fn",[H]:"fire-fn-compat",[$]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[Y]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[G]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(le.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){le.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",_e);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const c=new me(n,i,l);return ae.set(o,c),c}function be(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return ve();if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function Ce(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Se(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Ie(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Te=1,xe="firebase-heartbeat-store";let Ne=null;function Pe(){return Ne||(Ne=S(ke,Te,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ne}async function Re(e){try{const t=await Pe(),n=await t.transaction(xe).objectStore(xe).get(Ae(e));return n}catch(t){if(t instanceof s.ZR)A.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});A.warn(e.message)}}}async function De(e,t){try{const n=await Pe(),r=n.transaction(xe,"readwrite"),i=r.objectStore(xe);await i.put(t,Ae(e)),await r.done}catch(n){if(n instanceof s.ZR)A.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});A.warn(e.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1024,Le=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Me();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Me(),{heartbeatsToSend:n,unsentEntries:r}=je(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function je(e,t=Oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),We(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),We(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function We(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r.wA("platform-logger",(e=>new N(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Fe(e)),"PRIVATE")),Ee(R,D,e),Ee(R,D,"esm2017"),Ee("fire-js","")}Be("")},7087:function(e,t,n){n.d(t,{H0:function(){return c},wA:function(){return i},zt:function(){return o}});var r=n(9901);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},4959:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return u},Yd:function(){return c},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},8818:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(4301),i="firebase",s="10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},3186:function(e,t,n){var r=n(4301),i=n(7087),s=n(3042),o=n(9901),a=n(4959);const l="@firebase/database",c="1.0.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function h(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(t){}return new f},_=p("localStorage"),g=p("sessionStorage"),m=new a.Yd("@firebase/database"),y=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const r=n.digest();return o.US.encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?(0,o.Wl)(r):r,t+=" "}return t};let w=null,C=!0;const E=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a["in"].VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,g.remove("logging_enabled"))},S=function(...e){if(!0===C&&(C=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=b.apply(null,e);w(t)}},I=function(e){return function(...t){S(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);m.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw m.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+b(...e);m.warn(t)},N=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},D="[MIN_NAME]",A="[MAX_NAME]",O=function(e,t){if(e===t)return 0;if(e===D||t===A)return-1;if(t===D||e===A)return 1;{const n=K(e),r=K(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},F=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Wl)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,o.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.Wl)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function q(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const W=function(e){(0,o.hu)(!P(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,l,c;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,z=2147483647,K=function(e){if(H.test(e)){const t=Number(e);if(t>=$&&t<=z)return t}return null},Y=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw x("Exception was thrown by user callback.",e),t}),Math.floor(0))}},J=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(S("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee="5",te="v",ne="s",re="r",ie="f",se=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",ae="p",le="ac",ce="websocket",ue="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function de(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function fe(e,t,n){let r;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}de(e)&&(n["ns"]=e.namespace);const i=[];return q(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={},ge={};function me(e){const t=e.toString();return _e[t]||(_e[t]=new pe),_e[t]}function ye(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Y((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",we="close",Ce="pLPCommand",Ee="pRTLPCB",Se="id",Ie="pw",ke="ser",Te="cb",xe="seg",Ne="ts",Pe="d",Re="dframe",De=1870,Ae=30,Oe=De-Ae,Le=25e3,Fe=3e4;class Me{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[le]=this.appCheckToken),fe(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Fe)),R((()=>{if(this.isClosed_)return;this.scriptTagHolder=new je(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[be]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[te]=ee,this.transportSessionId&&(e[ne]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[ae]=this.applicationId),this.appCheckToken&&(e[le]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(e[re]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),r=j(n,Oe);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Re]="t",n[Se]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class je{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=y(),window[Ce+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=je.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){S("frame writing exception"),i.stack&&S(i.stack),S(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||S("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Se]=this.myID,e[Ie]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ae+n.length<=De))break;{const e=this.pendingSegs.shift();n=n+"&"+xe+r+"="+e.seg+"&"+Ne+r+"="+e.ts+"&"+Pe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{S("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=16384,We=45e3;let Be=null;"undefined"!==typeof MozWebSocket?Be=MozWebSocket:"undefined"!==typeof WebSocket&&(Be=WebSocket);class Ue{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=me(t),this.connURL=Ue.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[te]=ee,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(s[re]=ie),t&&(s[ne]=t),n&&(s[oe]=n),r&&(s[le]=r),i&&(s[ae]=i),fe(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${ee}/${u}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/Chat-Vue/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Be(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Be&&!Ue.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,qe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(We))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He=6e4,$e=5e3,ze=10240,Ke=102400,Ye="t",Je="d",Qe="s",Ge="r",Ze="e",Xe="o",et="a",tt="n",nt="p",rt="h";class it{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Q((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ke?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ye in e){const t=e[Ye];t===et?this.upgradeIfSecondaryHealthy_():t===Ge?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=F("t",e),n=F("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=F("t",e),n=F("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=F(Ye,e);if(Je in e){const n=e[Je];if(t===rt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===tt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===Ge?this.onReset_(n):t===Ze?k("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ee!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Q((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor($e))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ut("")}function dt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ft(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function _t(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=dt(e),r=dt(t);if(null===n)return t;if(n===r)return wt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ct(e,t){const n=mt(e,0),r=mt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=O(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Et(e,t){if(ft(e)!==ft(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function St(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ft(e)>ft(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);xt(this)}}function kt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),xt(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function xt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>lt)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lt+") or object contains a cycle "+Nt(e))}function Nt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Pt}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Dt=3e5,At=3e4,Ot=1.3,Lt=3e4,Ft="server_kill",Mt=3;class jt extends st{constructor(e,t,n,r,i,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Dt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.Wl)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,(i=>{const s=i["d"],o=i["s"];jt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+(0,o.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ot)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,n())},c=function(e){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?S("getToken() completed but was canceled"):(S("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new it(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ft)}),i))}catch(k){this.log_("Failed to get token: "+k),s||(this.repoInfo_.nodeAdmin&&x(k),l())}}}interrupt(e){S("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){S("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){S("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){S("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0,jt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qt(D,e),r=new qt(D,t);return 0!==this.compare(n,r)}minPost(){return qt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class Ut extends Wt{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return O(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qt.MIN}maxPost(){return new qt(A,Bt)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new qt(e,Bt)}toString(){return".key"}}const Vt=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:$t.RED,this.left=null!=r?r:Kt.EMPTY_NODE,this.right=null!=i?i:Kt.EMPTY_NODE}copy(e,t,n,r,i){return new $t(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0,$t.BLACK=!1;class zt{copy(e,t,n,r,i){return this}insert(e,t,n){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return O(e.name,t.name)}function Jt(e,t){return O(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function Gt(e){Qt=e}Kt.EMPTY_NODE=new zt;const Zt=function(e){return"number"===typeof e?"number:"+W(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Qt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===dt(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=dt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===ft(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?W(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+t),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Wt{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?O(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qt.MIN}maxPost(){return new qt(A,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new qt(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const ln=new an,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new $t(a,o.node,$t.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new $t(a,o.node,$t.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new $t(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,$t.BLACK):(a(r,$t.BLACK),a(r,$t.RED))}return s},o=new un(e.length),a=s(o);return new Kt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.hu)(fn&&ln,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":ln}),dn}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(qt.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?hn(n,e.getCompare()):fn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=s,new pn(u,c)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(qt.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),hn(n,i.getCompare())}return fn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new qt(e.name,r))),i.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===fn)return n;{const r=t.get(e.name);return r?n.remove(new qt(e.name,r)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _n||(_n=new gn(new Kt(Jt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_n}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_n:t}}getChild(e){const t=dt(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?_n:this.priorityNode_;return new gn(r,s,i)}}updateChild(e,t){const n=dt(e);if(null===n)return t;{(0,o.hu)(".priority"!==dt(e)||1===ft(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(ln,((s,o)=>{t[s]=o.val(e),n++,i&&gn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(ln,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new qt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,qt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,qt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yn?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ln),n=t.getIterator(ln);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends gn{constructor(){super(new Kt(Jt),gn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const yn=new mn;Object.defineProperties(qt,{MIN:{value:new qt(D,gn.EMPTY_NODE)},MAX:{value:new qt(A,yn)}}),Ut.__EMPTY_NODE=gn.EMPTY_NODE,rn.__childrenNodeConstructor=gn,Gt(yn),on(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function bn(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!vn){let n=gn.EMPTY_NODE;return q(e,((t,r)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(q(i,((e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new qt(e,i)))}})),0===n.length)return gn.EMPTY_NODE;const s=hn(n,Yt,(e=>e.name),Jt);if(r){const e=hn(n,ln.getCompare());return new gn(s,bn(t),new pn({".priority":e},{".priority":ln}))}return new gn(s,bn(t),pn.Default)}}sn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Wt{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!bt(e)&&".priority"!==dt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?O(e.name,t.name):i}makePost(e,t){const n=bn(e),r=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new qt(t,r)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new qt(A,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Wt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?O(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qt.MIN}maxPost(){return qt.MAX}makePost(e,t){const n=bn(e);return new qt(t,n)}toString(){return".value"}}const En=new Cn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function kn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function xn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(kn(t,a)):(0,o.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(t,n)):s.trackChildChange(Tn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ln,((e,r)=>{t.hasChild(e)||n.trackChildChange(kn(e,r))})),t.isLeafNode()||t.forEachChild(ln,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tn(t,r,i))}else n.trackChildChange(In(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.indexedFilter_=new Nn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new qt(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(gn.EMPTY_NODE);const i=this;return t.forEachChild(ln,((e,t)=>{i.matches(new qt(e,t))||(r=r.updateImmediateChild(e,gn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new qt(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(gn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),i=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?n++:r=r.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.hu)(a.numChildren()===this.limit_,"");const l=new qt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,c,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Tn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(kn(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(c,l)>=0?(null!=i&&(i.trackChildChange(kn(c.name,c.node)),i.trackChildChange(In(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:D}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const e=new Dn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){return e.loadsAllData()?new Nn(e.getIndex()):e.hasLimit()?new Rn(e):new Pn(e)}function On(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Ln(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Fn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Mn(e,t,n){let r;return r=e.index_===Vt||n?Fn(e,t,n):Fn(e,t,A),r.startAfterSet_=!0,r}function jn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function qn(e,t,n){let r;return r=e.index_===Vt||n?jn(e,t,n):jn(e,t,D),r.endBeforeSet_=!0,r}function Wn(e,t){const n=e.copy();return n.index_=t,n}function Bn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ln?n="$priority":e.index_===En?n="$value":e.index_===Vt?n="$key":((0,o.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Un(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==ln&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends st{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Vn.getListenId_(e,n),a={};this.listens_[s]=a;const l=Bn(e._queryParams);this.restRequest_(i+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),(0,o.DV)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Vn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Bn(e._queryParams),n=e._path.toString(),r=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.cI)(a.responseText)}catch(e){x("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return{value:null,children:new Map}}function zn(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=dt(t);e.children.has(r)||e.children.set(r,$n());const i=e.children.get(r);t=pt(t),zn(i,t,n)}}function Kn(e,t){if(bt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(ln,((t,n)=>{zn(e,new ut(t),n)})),Kn(e,t)}}if(e.children.size>0){const n=dt(t);if(t=pt(t),e.children.has(n)){const r=Kn(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function Yn(e,t,n){null!==e.value?n(t,e.value):Jn(e,((e,r)=>{const i=new ut(t.toString()+"/"+e);Yn(r,i,n)}))}function Jn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=1e4,Zn=3e4,Xn=3e5;class er{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Qn(e);const n=Gn+(Zn-Gn)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;q(e,((e,r)=>{r>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*Xn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr;function nr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ir(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(tr||(tr={}));class sr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=tr.ACK_USER_WRITE,this.source=nr()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new sr(ht(),t,this.revert)}}return(0,o.hu)(dt(this.path)===e,"operationForChild called for unrelated child."),new sr(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.source=e,this.path=t,this.type=tr.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new or(this.source,ht()):new or(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=tr.OVERWRITE}operationForChild(e){return bt(this.path)?new ar(this.source,ht(),this.snap.getImmediateChild(e)):new ar(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=tr.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new ar(this.source,ht(),t.value):new lr(this.source,ht(),t)}return(0,o.hu)(dt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lr(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=dt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hr(e,t,n,r){const i=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(xn(t.childName,t.snapshotNode))})),dr(e,i,"child_removed",t,r,n),dr(e,i,"child_added",t,r,n),dr(e,i,"child_moved",s,r,n),dr(e,i,"child_changed",t,r,n),dr(e,i,"value",t,r,n),i}function dr(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>pr(e,t,n))),o.forEach((n=>{const r=fr(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function fr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function pr(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new qt(t.childName,t.snapshotNode),i=new qt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){return{eventCache:e,serverCache:t}}function gr(e,t,n,r){return _r(new cr(t,n,r),e.serverCache)}function mr(e,t,n,r){return _r(e.eventCache,new cr(t,n,r))}function yr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function vr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;const wr=()=>(br||(br=new Kt(L)),br);class Cr{constructor(e,t=wr()){this.value=e,this.children=t}static fromObject(e){let t=new Cr(null);return q(e,((e,n)=>{t=t.set(new ut(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(bt(e))return null;{const n=dt(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(pt(e),t);if(null!=i){const e=vt(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(bt(e))return this;{const t=dt(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new Cr(null)}}set(e,t){if(bt(e))return new Cr(t,this.children);{const n=dt(e),r=this.children.get(n)||new Cr(null),i=r.set(pt(e),t),s=this.children.insert(n,i);return new Cr(this.value,s)}}remove(e){if(bt(e))return this.children.isEmpty()?new Cr(null):new Cr(null,this.children);{const t=dt(e),n=this.children.get(t);if(n){const r=n.remove(pt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Cr(null):new Cr(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=dt(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(bt(e))return t;{const n=dt(e),r=this.children.get(n)||new Cr(null),i=r.setTree(pt(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Cr(this.value,s)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(vt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=dt(e),i=this.children.get(r);return i?i.findOnPath_(pt(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=dt(e),i=this.children.get(r);return i?i.foreachOnPath_(pt(e),vt(t,r),n):new Cr(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.writeTree_=e}static empty(){return new Er(new Cr(null))}}function Sr(e,t,n){if(bt(t))return new Er(new Cr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=wt(i,t);return s=s.updateChild(o,n),new Er(e.writeTree_.set(i,s))}{const r=new Cr(n),i=e.writeTree_.setTree(t,r);return new Er(i)}}}function Ir(e,t,n){let r=e;return q(n,((e,n)=>{r=Sr(r,vt(t,e),n)})),r}function kr(e,t){if(bt(t))return Er.empty();{const n=e.writeTree_.setTree(t,new Cr(null));return new Er(n)}}function Tr(e,t){return null!=xr(e,t)}function xr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function Nr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ln,((e,n)=>{t.push(new qt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new qt(e,n.value))})),t}function Pr(e,t){if(bt(t))return e;{const n=xr(e,t);return new Er(null!=n?new Cr(n):e.writeTree_.subtree(t))}}function Rr(e){return e.writeTree_.isEmpty()}function Dr(e,t){return Ar(ht(),e.writeTree_,t)}function Ar(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ar(vt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){return ri(t,e)}function Lr(e,t,n,r,i){(0,o.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Sr(e.visibleWrites,t,n)),e.lastWriteId=r}function Fr(e,t,n,r){(0,o.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Ir(e.visibleWrites,t,n),e.lastWriteId=r}function Mr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function jr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&qr(t,r.path)?i=!1:St(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Wr(e),!0;if(r.snap)e.visibleWrites=kr(e.visibleWrites,r.path);else{const t=r.children;q(t,(t=>{e.visibleWrites=kr(e.visibleWrites,vt(r.path,t))}))}return!0}return!1}function qr(e,t){if(e.snap)return St(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&St(vt(e.path,n),t))return!0;return!1}function Wr(e){e.visibleWrites=Ur(e.allWrites,Br,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Br(e){return e.visible}function Ur(e,t,n){let r=Er.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)St(n,e)?(t=wt(n,e),r=Sr(r,t,s.snap)):St(e,n)&&(t=wt(e,n),r=Sr(r,ht(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(St(n,e))t=wt(n,e),r=Ir(r,t,s.children);else if(St(e,n))if(t=wt(e,n),bt(t))r=Ir(r,ht(),s.children);else{const e=(0,o.DV)(s.children,dt(t));if(e){const n=e.getChild(pt(t));r=Sr(r,ht(),n)}}}}}return r}function Vr(e,t,n,r,i){if(r||i){const s=Pr(e.visibleWrites,t);if(!i&&Rr(s))return n;if(i||null!=n||Tr(s,ht())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(St(e.path,t)||St(t,e.path))},o=Ur(e.allWrites,s,t),a=n||gn.EMPTY_NODE;return Dr(o,a)}return null}{const r=xr(e.visibleWrites,t);if(null!=r)return r;{const r=Pr(e.visibleWrites,t);if(Rr(r))return n;if(null!=n||Tr(r,ht())){const e=n||gn.EMPTY_NODE;return Dr(r,e)}return null}}}function Hr(e,t,n){let r=gn.EMPTY_NODE;const i=xr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ln,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Pr(e.visibleWrites,t);return n.forEachChild(ln,((e,t)=>{const n=Dr(Pr(i,new ut(e)),t);r=r.updateImmediateChild(e,n)})),Nr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Pr(e.visibleWrites,t);return Nr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function $r(e,t,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=vt(t,n);if(Tr(e.visibleWrites,s))return null;{const t=Pr(e.visibleWrites,s);return Rr(t)?i.getChild(n):Dr(t,i.getChild(n))}}function zr(e,t,n,r){const i=vt(t,n),s=xr(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=Pr(e.visibleWrites,i);return Dr(t,r.getNode().getImmediateChild(n))}return null}function Kr(e,t){return xr(e.visibleWrites,t)}function Yr(e,t,n,r,i,s,o){let a;const l=Pr(e.visibleWrites,t),c=xr(l,ht());if(null!=c)a=c;else{if(null==n)return[];a=Dr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();while(l&&e.length<i)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}function Jr(){return{visibleWrites:Er.empty(),allWrites:[],lastWriteId:-1}}function Qr(e,t,n,r){return Vr(e.writeTree,e.treePath,t,n,r)}function Gr(e,t){return Hr(e.writeTree,e.treePath,t)}function Zr(e,t,n,r){return $r(e.writeTree,e.treePath,t,n,r)}function Xr(e,t){return Kr(e.writeTree,vt(e.treePath,t))}function ei(e,t,n,r,i,s){return Yr(e.writeTree,e.treePath,t,n,r,i,s)}function ti(e,t,n){return zr(e.writeTree,e.treePath,t,n)}function ni(e,t){return ri(vt(e.treePath,t),e.writeTree)}function ri(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,kn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const oi=new si;class ai{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ti(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:vr(this.viewCache_),i=ei(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){return{filter:e}}function ci(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ui(e,t,n,r,i){const s=new ii;let a,l;if(n.type===tr.OVERWRITE){const c=n;c.source.fromUser?a=pi(e,t,c.path,c.snap,r,i,s):((0,o.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!bt(c.path),a=fi(e,t,c.path,c.snap,r,i,l,s))}else if(n.type===tr.MERGE){const c=n;c.source.fromUser?a=gi(e,t,c.path,c.children,r,i,s):((0,o.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=yi(e,t,c.path,c.children,r,i,l,s))}else if(n.type===tr.ACK_USER_WRITE){const o=n;a=o.revert?wi(e,t,o.path,r,i,s):vi(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==tr.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=bi(e,t,n.path,r,s)}const c=s.getChanges();return hi(t,a,c),{viewCache:a,changes:c}}function hi(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Sn(yr(t)))}}function di(e,t,n,r,i,s){const a=t.eventCache;if(null!=Xr(r,n))return t;{let l,c;if(bt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=vr(t),i=n instanceof gn?n:gn.EMPTY_NODE,o=Gr(r,i);l=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Qr(r,vr(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=dt(n);if(".priority"===u){(0,o.hu)(1===ft(n),"Can't have a priority with additional path components");const i=a.getNode();c=t.serverCache.getNode();const s=Zr(r,n,i,c);l=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=pt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=Zr(r,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=ti(r,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return gr(t,l,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function fi(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(bt(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=dt(n);if(!l.isCompleteForPath(n)&&ft(n)>1)return t;const i=pt(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,i,oi,null)}const h=mr(t,c,l.isFullyInitialized()||bt(n),u.filtersNodes()),d=new ai(i,h,s);return di(e,h,n,i,d,a)}function pi(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new ai(i,t,s);if(bt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=gr(t,c,!0,e.filter.filtersNodes());else{const i=dt(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=gr(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),c=a.getNode().getImmediateChild(i);let h;if(bt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===_t(s)&&e.getChild(yt(s)).isEmpty()?e:e.updateChild(s,r):gn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,u,o);l=gr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function _i(e,t){return e.eventCache.isCompleteForChild(t)}function gi(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=vt(n,r);_i(t,dt(c))&&(a=pi(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=vt(n,r);_i(t,dt(c))||(a=pi(e,a,c,l,i,s,o))})),a}function mi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function yi(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=bt(n)?r:new Cr(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=mi(e,l,r);c=fi(e,c,new ut(n),u,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=mi(e,l,r);c=fi(e,c,new ut(n),u,i,s,o,a)}})),c}function vi(e,t,n,r,i,s,o){if(null!=Xr(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(bt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fi(e,t,n,l.getNode().getChild(n),i,s,a,o);if(bt(n)){let r=new Cr(null);return l.getNode().forEachChild(Vt,((e,t)=>{r=r.set(new ut(e),t)})),yi(e,t,n,r,i,s,a,o)}return t}{let c=new Cr(null);return r.foreach(((e,t)=>{const r=vt(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),yi(e,t,n,c,i,s,a,o)}}function bi(e,t,n,r,i){const s=t.serverCache,o=mr(t,s.getNode(),s.isFullyInitialized()||bt(n),s.isFiltered());return di(e,o,n,r,oi,i)}function wi(e,t,n,r,i,s){let a;if(null!=Xr(r,n))return t;{const l=new ai(r,t,i),c=t.eventCache.getNode();let u;if(bt(n)||".priority"===dt(n)){let n;if(t.serverCache.isFullyInitialized())n=Qr(r,vr(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof gn,"serverChildren would be complete if leaf node"),n=Gr(r,e)}u=e.filter.updateFullNode(c,n,s)}else{const i=dt(n);let o=ti(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=c.getImmediateChild(i)),u=null!=o?e.filter.updateChild(c,i,o,pt(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,gn.EMPTY_NODE,pt(n),l,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Qr(r,vr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Xr(r,ht()),gr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Nn(n.getIndex()),i=An(n);this.processor_=li(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=new cr(a,s.isFullyInitialized(),r.filtersNodes()),u=new cr(l,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=_r(u,c),this.eventGenerator_=new ur(this.query_)}get query(){return this.query_}}function Ei(e){return e.viewCache_.serverCache.getNode()}function Si(e){return yr(e.viewCache_)}function Ii(e,t){const n=vr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(dt(t)).isEmpty())?n.getChild(t):null}function ki(e){return 0===e.eventRegistrations_.length}function Ti(e,t){e.eventRegistrations_.push(t)}function xi(e,t,n){const r=[];if(n){(0,o.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ni(e,t,n,r){t.type===tr.MERGE&&null!==t.source.queryId&&((0,o.hu)(vr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(yr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ui(e.processor_,i,t,n,r);return ci(e.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ri(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Pi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(ln,((e,t)=>{r.push(In(e,t))}))}return n.isFullyInitialized()&&r.push(Sn(n.getNode())),Ri(e,r,n.getNode(),t)}function Ri(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return hr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di,Ai;class Oi{constructor(){this.views=new Map}}function Li(e){(0,o.hu)(!Di,"__referenceConstructor has already been defined"),Di=e}function Fi(){return(0,o.hu)(Di,"Reference.ts has not been loaded"),Di}function Mi(e){return 0===e.views.size}function ji(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),Ni(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ni(s,t,n,r));return i}}function qi(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Qr(n,i?r:null),s=!1;e?s=!0:r instanceof gn?(e=Gr(n,r),s=!1):(e=gn.EMPTY_NODE,s=!1);const o=_r(new cr(e,s,!1),new cr(r,i,!1));return new Ci(t,o)}return o}function Wi(e,t,n,r,i,s){const o=qi(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Ti(o,n),Pi(o,n)}function Bi(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=zi(e);if("default"===i)for(const[l,c]of e.views.entries())o=o.concat(xi(c,n,r)),ki(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(xi(t,n,r)),ki(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!zi(e)&&s.push(new(Fi())(t._repo,t._path)),{removed:s,events:o}}function Ui(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Vi(e,t){let n=null;for(const r of e.views.values())n=n||Ii(r,t);return n}function Hi(e,t){const n=t._queryParams;if(n.loadsAllData())return Ki(e);{const n=t._queryIdentifier;return e.views.get(n)}}function $i(e,t){return null!=Hi(e,t)}function zi(e){return null!=Ki(e)}function Ki(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){(0,o.hu)(!Ai,"__referenceConstructor has already been defined"),Ai=e}function Ji(){return(0,o.hu)(Ai,"Reference.ts has not been loaded"),Ai}let Qi=1;class Gi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Cr(null),this.pendingWriteTree_=Jr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zi(e,t,n,r,i){return Lr(e.pendingWriteTree_,t,n,r,i),i?hs(e,new ar(nr(),t,n)):[]}function Xi(e,t,n,r){Fr(e.pendingWriteTree_,t,n,r);const i=Cr.fromObject(n);return hs(e,new lr(nr(),t,i))}function es(e,t,n=!1){const r=Mr(e.pendingWriteTree_,t),i=jr(e.pendingWriteTree_,t);if(i){let t=new Cr(null);return null!=r.snap?t=t.set(ht(),!0):q(r.children,(e=>{t=t.set(new ut(e),!0)})),hs(e,new sr(r.path,t,n))}return[]}function ts(e,t,n){return hs(e,new ar(rr(),t,n))}function ns(e,t,n){const r=Cr.fromObject(n);return hs(e,new lr(rr(),t,r))}function rs(e,t){return hs(e,new or(rr(),t))}function is(e,t,n){const r=ms(e,n);if(r){const n=ys(r),i=n.path,s=n.queryId,o=wt(i,t),a=new or(ir(s),o);return vs(e,i,a)}return[]}function ss(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||$i(o,t))){const l=Bi(o,t,n,r);Mi(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>zi(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=bs(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=ps(e,r);e.listenProvider_.startListening(ws(i),_s(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(ws(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(gs(t));e.listenProvider_.stopListening(ws(t),n)}))}Cs(e,c)}return a}function os(e,t,n,r){const i=ms(e,r);if(null!=i){const r=ys(i),s=r.path,o=r.queryId,a=wt(s,t),l=new ar(ir(o),a,n);return vs(e,s,l)}return[]}function as(e,t,n,r){const i=ms(e,r);if(i){const r=ys(i),s=r.path,o=r.queryId,a=wt(s,t),l=Cr.fromObject(n),c=new lr(ir(o),a,l);return vs(e,s,c)}return[]}function ls(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=wt(e,i);s=s||Vi(t,n),a=a||zi(t)}));let l,c=e.syncPointTree_.get(i);if(c?(a=a||zi(c),s=s||Vi(c,ht())):(c=new Oi,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=s)l=!0;else{l=!1,s=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Vi(t,ht());n&&(s=s.updateImmediateChild(e,n))}))}const u=$i(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=gs(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Es();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Or(e.pendingWriteTree_,i);let d=Wi(c,t,n,h,s,l);if(!u&&!a&&!r){const n=Hi(c,t);d=d.concat(Ss(e,t,n))}return d}function cs(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=wt(e,t),i=Vi(n,r);if(i)return i}));return Vr(i,t,s,n,r)}function us(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=wt(e,n);r=r||Vi(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Vi(i,ht()):(i=new Oi,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new cr(r,!0,!1):null,a=Or(e.pendingWriteTree_,t._path),l=qi(i,t,a,s?o.getNode():gn.EMPTY_NODE,s);return Si(l)}function hs(e,t){return ds(t,e.syncPointTree_,null,Or(e.pendingWriteTree_,ht()))}function ds(e,t,n,r){if(bt(e.path))return fs(e,t,n,r);{const i=t.get(ht());null==n&&null!=i&&(n=Vi(i,ht()));let s=[];const o=dt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ni(r,o);s=s.concat(ds(a,l,e,t))}return i&&(s=s.concat(ji(i,e,r,n))),s}}function fs(e,t,n,r){const i=t.get(ht());null==n&&null!=i&&(n=Vi(i,ht()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=ni(r,t),l=e.operationForChild(t);l&&(s=s.concat(fs(l,i,o,a)))})),i&&(s=s.concat(ji(i,e,r,n))),s}function ps(e,t){const n=t.query,r=_s(e,n);return{hashFn:()=>{const e=Ei(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?is(e,n._path,r):rs(e,n._path);{const r=V(t,n);return ss(e,n,null,r)}}}}function _s(e,t){const n=gs(t);return e.queryToTagMap.get(n)}function gs(e){return e._path.toString()+"$"+e._queryIdentifier}function ms(e,t){return e.tagToQueryMap.get(t)}function ys(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function vs(e,t,n){const r=e.syncPointTree_.get(t);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=Or(e.pendingWriteTree_,t);return ji(r,n,i,null)}function bs(e){return e.fold(((e,t,n)=>{if(t&&zi(t)){const e=Ki(t);return[e]}{let e=[];return t&&(e=Ui(t)),q(n,((t,n)=>{e=e.concat(n)})),e}}))}function ws(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ji())(e._repo,e._path):e}function Cs(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=gs(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Es(){return Qi++}function Ss(e,t,n){const r=t._path,i=_s(e,t),s=ps(e,n),a=e.listenProvider_.startListening(ws(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)(0,o.hu)(!zi(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!bt(e)&&t&&zi(t))return[Ki(t).query];{let e=[];return t&&(e=e.concat(Ui(t).map((e=>e.query)))),q(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(ws(r),_s(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Is(t)}node(){return this.node_}}class ks{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new ks(this.syncTree_,t)}node(){return cs(this.syncTree_,this.path_)}}const Ts=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},xs=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ns(e[".sv"],t,n):"object"===typeof e[".sv"]?Ps(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ns=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},Ps=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Rs=function(e,t,n,r){return As(t,new ks(n,e),r)},Ds=function(e,t,n){return As(e,new Is(t),n)};function As(e,t,n){const r=e.getPriority().val(),i=xs(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=xs(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new rn(s,bn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new rn(i))),r.forEachChild(ln,((e,r)=>{const i=As(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ls(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=dt(n);while(null!==i){const e=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new Os(i,r,e),n=pt(n),i=dt(n)}return r}function Fs(e){return e.node.value}function Ms(e,t){e.node.value=t,Hs(e)}function js(e){return e.node.childCount>0}function qs(e){return void 0===Fs(e)&&!js(e)}function Ws(e,t){q(e.node.children,((n,r)=>{t(new Os(n,e,r))}))}function Bs(e,t,n,r){n&&!r&&t(e),Ws(e,(e=>{Bs(e,t,!0,r)})),n&&r&&t(e)}function Us(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Vs(e){return new ut(null===e.parent?e.name:Vs(e.parent)+"/"+e.name)}function Hs(e){null!==e.parent&&$s(e.parent,e.name,e)}function $s(e,t,n){const r=qs(n),i=(0,o.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Hs(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Hs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=/[\[\].#$\/\u0000-\u001F\u007F]/,Ks=/[\[\].#$\u0000-\u001F\u007F]/,Ys=10485760,Js=function(e){return"string"===typeof e&&0!==e.length&&!zs.test(e)},Qs=function(e){return"string"===typeof e&&0!==e.length&&!Ks.test(e)},Gs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Qs(e)},Zs=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!P(e)||e&&"object"===typeof e&&(0,o.r3)(e,".sv")},Xs=function(e,t,n,r){r&&void 0===t||eo((0,o.gK)(e,"value"),t,n)},eo=function(e,t,n){const r=n instanceof ut?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Nt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Nt(r)+" with contents = "+t.toString());if(P(t))throw new Error(e+"contains "+t.toString()+" "+Nt(r));if("string"===typeof t&&t.length>Ys/3&&(0,o.ug)(t)>Ys)throw new Error(e+"contains a string greater than "+Ys+" utf8 bytes "+Nt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(q(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Js(t)))throw new Error(e+" contains an invalid key ("+t+") "+Nt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');kt(r,t),eo(e,s,r),Tt(r)})),n&&i)throw new Error(e+' contains ".value" child '+Nt(r)+" in addition to actual children.")}},to=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=mt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Js(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ct);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&St(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},no=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,o.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];q(t,((e,t)=>{const r=new ut(e);if(eo(i,t,vt(n,r)),".priority"===_t(r)&&!Zs(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),to(i,s)},ro=function(e,t,n){if(!n||void 0!==t){if(P(t))throw new Error((0,o.gK)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Zs(t))throw new Error((0,o.gK)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},io=function(e,t,n,r){if((!r||void 0!==n)&&!Js(n))throw new Error((0,o.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},so=function(e,t,n,r){if((!r||void 0!==n)&&!Qs(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},oo=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),so(e,t,n,r)},ao=function(e,t){if(".info"===dt(t))throw new Error(e+" failed = Can't modify data under /.info/")},lo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Js(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Gs(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Et(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function ho(e,t,n){uo(e,n),po(e,(e=>Et(e,t)))}function fo(e,t,n){uo(e,n),po(e,(e=>St(e,t)||St(t,e)))}function po(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(_o(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function _o(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&S("event: "+n.toString()),Y(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="repo_interrupt",mo=25;class yo{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new co,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$n(),this.transactionQueueTree_=new Os,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vo(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||J())e.server_=new Vn(e.repoInfo_,((t,n,r,i)=>{Co(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Eo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jt(e.repoInfo_,t,((t,n,r,i)=>{Co(e,t,n,r,i)}),(t=>{Eo(e,t)}),(t=>{So(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ye(e.repoInfo_,(()=>new er(e.stats_,e.server_))),e.infoData_=new Hn,e.infoSyncTree_=new Gi({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ts(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Io(e,"connected",!1),e.serverSyncTree_=new Gi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);fo(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function bo(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function wo(e){return Ts({timestamp:bo(e)})}function Co(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.UI)(n,(e=>bn(e)));a=as(e.serverSyncTree_,s,t,i)}else{const t=bn(n);a=os(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.UI)(n,(e=>bn(e)));a=ns(e.serverSyncTree_,s,t)}else{const t=bn(n);a=ts(e.serverSyncTree_,s,t)}let l=s;a.length>0&&(l=$o(e,s)),fo(e.eventQueue_,l,a)}function Eo(e,t){Io(e,"connected",t),!1===t&&Po(e)}function So(e,t){q(t,((t,n)=>{Io(e,t,n)}))}function Io(e,t,n){const r=new ut("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const s=ts(e.infoSyncTree_,r,i);fo(e.eventQueue_,r,s)}function ko(e){return e.nextWriteId_++}function To(e,t,n){const r=us(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=bn(r).withIndex(t._queryParams.getIndex());let s;if(ls(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ts(e.serverSyncTree_,t._path,i);else{const n=_s(e.serverSyncTree_,t);s=os(e.serverSyncTree_,t._path,i,n)}return fo(e.eventQueue_,t._path,s),ss(e.serverSyncTree_,t,n,null,!0),i}),(n=>(qo(e,"get for query "+(0,o.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function xo(e,t,n,r,i){qo(e,"set",{path:t.toString(),value:n,priority:r});const s=wo(e),o=bn(n,r),a=cs(e.serverSyncTree_,t),l=Ds(o,a,s),c=ko(e),u=Zi(e.serverSyncTree_,t,l,c,!0);uo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||x("set at "+t+" failed: "+n);const o=es(e.serverSyncTree_,c,!s);fo(e.eventQueue_,t,o),Wo(e,i,n,r)}));const h=Go(e,t);$o(e,h),fo(e.eventQueue_,h,[])}function No(e,t,n,r){qo(e,"update",{path:t.toString(),value:n});let i=!0;const s=wo(e),o={};if(q(n,((n,r)=>{i=!1,o[n]=Rs(vt(t,n),bn(r),e.serverSyncTree_,s)})),i)S("update() called with empty data.  Don't do anything."),Wo(e,r,"ok",void 0);else{const i=ko(e),s=Xi(e.serverSyncTree_,t,o,i);uo(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||x("update at "+t+" failed: "+n);const a=es(e.serverSyncTree_,i,!o),l=a.length>0?$o(e,t):t;fo(e.eventQueue_,l,a),Wo(e,r,n,s)})),q(n,(n=>{const r=Go(e,vt(t,n));$o(e,r)})),fo(e.eventQueue_,t,[])}}function Po(e){qo(e,"onDisconnectEvents");const t=wo(e),n=$n();Yn(e.onDisconnect_,ht(),((r,i)=>{const s=Rs(r,i,e.serverSyncTree_,t);zn(n,r,s)}));let r=[];Yn(n,ht(),((t,n)=>{r=r.concat(ts(e.serverSyncTree_,t,n));const i=Go(e,t);$o(e,i)})),e.onDisconnect_=$n(),fo(e.eventQueue_,ht(),r)}function Ro(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&Kn(e.onDisconnect_,t),Wo(e,n,r,i)}))}function Do(e,t,n,r){const i=bn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,s)=>{"ok"===n&&zn(e.onDisconnect_,t,i),Wo(e,r,n,s)}))}function Ao(e,t,n,r,i){const s=bn(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),((n,r)=>{"ok"===n&&zn(e.onDisconnect_,t,s),Wo(e,i,n,r)}))}function Oo(e,t,n,r){if((0,o.xb)(n))return S("onDisconnect().update() called with empty data.  Don't do anything."),void Wo(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,((i,s)=>{"ok"===i&&q(n,((n,r)=>{const i=bn(r);zn(e.onDisconnect_,vt(t,n),i)})),Wo(e,r,i,s)}))}function Lo(e,t,n){let r;r=".info"===dt(t._path)?ls(e.infoSyncTree_,t,n):ls(e.serverSyncTree_,t,n),ho(e.eventQueue_,t._path,r)}function Fo(e,t,n){let r;r=".info"===dt(t._path)?ss(e.infoSyncTree_,t,n):ss(e.serverSyncTree_,t,n),ho(e.eventQueue_,t._path,r)}function Mo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(go)}function jo(e){e.persistentConnection_&&e.persistentConnection_.resume(go)}function qo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),S(n,...t)}function Wo(e,t,n,r){t&&Y((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Bo(e,t,n,r,i,s){qo(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:y(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Uo(e,t,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(void 0===c)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{eo("transaction failed: Data returned ",c,a.path),a.status=0;const n=Ls(e.transactionQueueTree_,t),r=Fs(n)||[];let i;if(r.push(a),Ms(n,r),"object"===typeof c&&null!==c&&(0,o.r3)(c,".priority"))i=(0,o.DV)(c,".priority"),(0,o.hu)(Zs(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=cs(e.serverSyncTree_,t)||gn.EMPTY_NODE;i=n.getPriority().val()}const s=wo(e),u=bn(c,i),h=Ds(u,l,s);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=ko(e);const d=Zi(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);fo(e.eventQueue_,t,d),Vo(e,e.transactionQueueTree_)}}function Uo(e,t,n){return cs(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function Vo(e,t=e.transactionQueueTree_){if(t||Qo(e,t),Fs(t)){const n=Yo(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Ho(e,Vs(t),n)}else js(t)&&Ws(t,(t=>{Vo(e,t)}))}function Ho(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Uo(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const l=s.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{qo(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(es(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Qo(e,Ls(e.transactionQueueTree_,t)),Vo(e,e.transactionQueueTree_),fo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Y(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}$o(e,t)}}),a)}function $o(e,t){const n=Ko(e,t),r=Vs(n),i=Yo(e,n);return zo(e,i,r),r}function zo(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const s=t[l],c=wt(n,s.path);let u,h=!1;if((0,o.hu)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(es(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=mo)h=!0,u="maxretry",i=i.concat(es(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Uo(e,s.path,a);s.currentInputSnapshot=n;const r=t[l].update(n.val());if(void 0!==r){eo("transaction failed: Data returned ",r,s.path);let t=bn(r);const l="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");l||(t=t.updatePriority(n.getPriority()));const c=s.currentWriteId,u=wo(e),h=Ds(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ko(e),a.splice(a.indexOf(c),1),i=i.concat(Zi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(es(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",i=i.concat(es(e.serverSyncTree_,s.currentWriteId,!0))}fo(e.eventQueue_,n,i),i=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(u),!1,null)))))}Qo(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)Y(r[o]);Vo(e,e.transactionQueueTree_)}function Ko(e,t){let n,r=e.transactionQueueTree_;n=dt(t);while(null!==n&&void 0===Fs(r))r=Ls(r,n),t=pt(t),n=dt(t);return r}function Yo(e,t){const n=[];return Jo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Jo(e,t,n){const r=Fs(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ws(t,(t=>{Jo(e,t,n)}))}function Qo(e,t){const n=Fs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ms(t,n.length>0?n:void 0)}Ws(t,(t=>{Qo(e,t)}))}function Go(e,t){const n=Vs(Ko(e,t)),r=Ls(e.transactionQueueTree_,t);return Us(r,(t=>{Zo(e,t)})),Zo(e,r),Bs(r,(t=>{Zo(e,t)})),n}function Zo(e,t){const n=Fs(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(es(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ms(t,void 0):n.length=s+1,fo(e.eventQueue_,Vs(t),i);for(let e=0;e<r.length;e++)Y(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function ea(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}const ta=function(e,t){const n=na(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ut(n.pathString)}},na=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Xo(e.substring(u,h)));const d=ea(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},ra="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ia=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ra.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=ra.charAt(t[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Wl)(this.snapshot.exportVal())}}class oa{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new o.BH;return Ro(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){ao("OnDisconnect.remove",this._path);const e=new o.BH;return Do(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){ao("OnDisconnect.set",this._path),Xs("OnDisconnect.set",e,this._path,!1);const t=new o.BH;return Do(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){ao("OnDisconnect.setWithPriority",this._path),Xs("OnDisconnect.setWithPriority",e,this._path,!1),ro("OnDisconnect.setWithPriority",t,!1);const n=new o.BH;return Ao(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){ao("OnDisconnect.update",this._path),no("OnDisconnect.update",e,this._path,!1);const t=new o.BH;return Oo(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:_t(this._path)}get ref(){return new fa(this._repo,this._path)}get _queryIdentifier(){const e=Un(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Un(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof ca))return!1;const t=this._repo===e._repo,n=Et(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}function ua(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ha(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Vt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==D)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==A)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===ln){if(null!=t&&!Zs(t)||null!=n&&!Zs(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,o.hu)(e.getIndex()instanceof wn||e.getIndex()===En,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function da(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class fa extends ca{constructor(e,t){super(e,t,new Dn,!1)}get parent(){const e=yt(this._path);return null===e?null:new fa(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class pa{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=ma(this.ref,e);return new pa(this._node.getChild(t),n,ln)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new pa(n,ma(this.ref,t),ln))))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _a(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?ma(e._root,t):e._root}function ga(e,t){e=(0,o.m9)(e),e._checkNotDeleted("refFromURL");const n=ta(t,e._repo.repoInfo_.nodeAdmin);lo("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||T("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),_a(e,n.path.toString())}function ma(e,t){return e=(0,o.m9)(e),null===dt(e._path)?oo("child","path",t,!1):so("child","path",t,!1),new fa(e._repo,vt(e._path,t))}function ya(e,t){e=(0,o.m9)(e),ao("push",e._path),Xs("push",t,e._path,!0);const n=bo(e._repo),r=ia(n),i=ma(e,r),s=ma(e,r);let a;return a=null!=t?ba(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function va(e){return ao("remove",e._path),ba(e,null)}function ba(e,t){e=(0,o.m9)(e),ao("set",e._path),Xs("set",t,e._path,!1);const n=new o.BH;return xo(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function wa(e,t){e=(0,o.m9)(e),ao("setPriority",e._path),ro("setPriority",t,!1);const n=new o.BH;return xo(e._repo,vt(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise}function Ca(e,t,n){if(ao("setWithPriority",e._path),Xs("setWithPriority",t,e._path,!1),ro("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new o.BH;return xo(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise}function Ea(e,t){no("update",t,e._path,!1);const n=new o.BH;return No(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Sa(e){e=(0,o.m9)(e);const t=new aa((()=>{})),n=new Ia(t);return To(e._repo,e,n).then((t=>new pa(t,new fa(e._repo,e._path),e._queryParams.getIndex())))}class Ia{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new sa("value",this,new pa(e.snapshotNode,new fa(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oa(this,e,t):null}matches(e){return e instanceof Ia&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ka{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oa(this,e,t):null}createEvent(e,t){(0,o.hu)(null!=e.childName,"Child events should have a childName.");const n=ma(new fa(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new sa(e.type,this,new pa(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ka&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ta(e,t,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Fo(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new aa(n,s||void 0),a="value"===t?new Ia(o):new ka(t,o);return Lo(e._repo,e,a),()=>Fo(e._repo,e,a)}function xa(e,t,n,r){return Ta(e,"value",t,n,r)}function Na(e,t,n,r){return Ta(e,"child_added",t,n,r)}function Pa(e,t,n,r){return Ta(e,"child_changed",t,n,r)}function Ra(e,t,n,r){return Ta(e,"child_moved",t,n,r)}function Da(e,t,n,r){return Ta(e,"child_removed",t,n,r)}function Aa(e,t,n){let r=null;const i=n?new aa(n):null;"value"===t?r=new Ia(i):t&&(r=new ka(t,i)),Fo(e._repo,e,r)}class Oa{}class La extends Oa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Xs("endAt",this._value,e._path,!0);const t=jn(e._queryParams,this._value,this._key);if(da(t),ha(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ca(e._repo,e._path,t,e._orderByCalled)}}function Fa(e,t){return io("endAt","key",t,!0),new La(e,t)}class Ma extends Oa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Xs("endBefore",this._value,e._path,!1);const t=qn(e._queryParams,this._value,this._key);if(da(t),ha(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ca(e._repo,e._path,t,e._orderByCalled)}}function ja(e,t){return io("endBefore","key",t,!0),new Ma(e,t)}class qa extends Oa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Xs("startAt",this._value,e._path,!0);const t=Fn(e._queryParams,this._value,this._key);if(da(t),ha(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ca(e._repo,e._path,t,e._orderByCalled)}}function Wa(e=null,t){return io("startAt","key",t,!0),new qa(e,t)}class Ba extends Oa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Xs("startAfter",this._value,e._path,!1);const t=Mn(e._queryParams,this._value,this._key);if(da(t),ha(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ca(e._repo,e._path,t,e._orderByCalled)}}function Ua(e,t){return io("startAfter","key",t,!0),new Ba(e,t)}class Va extends Oa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ca(e._repo,e._path,On(e._queryParams,this._limit),e._orderByCalled)}}function Ha(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Va(e)}class $a extends Oa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ca(e._repo,e._path,Ln(e._queryParams,this._limit),e._orderByCalled)}}function za(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new $a(e)}class Ka extends Oa{constructor(e){super(),this._path=e}_apply(e){ua(e,"orderByChild");const t=new ut(this._path);if(bt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),r=Wn(e._queryParams,n);return ha(r),new ca(e._repo,e._path,r,!0)}}function Ya(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return so("orderByChild","path",e,!1),new Ka(e)}class Ja extends Oa{_apply(e){ua(e,"orderByKey");const t=Wn(e._queryParams,Vt);return ha(t),new ca(e._repo,e._path,t,!0)}}function Qa(){return new Ja}class Ga extends Oa{_apply(e){ua(e,"orderByPriority");const t=Wn(e._queryParams,ln);return ha(t),new ca(e._repo,e._path,t,!0)}}function Za(){return new Ga}class Xa extends Oa{_apply(e){ua(e,"orderByValue");const t=Wn(e._queryParams,En);return ha(t),new ca(e._repo,e._path,t,!0)}}function el(){return new Xa}class tl extends Oa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Xs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new La(this._value,this._key)._apply(new qa(this._value,this._key)._apply(e))}}function nl(e,t){return io("equalTo","key",t,!0),new tl(e,t)}function rl(e,...t){let n=(0,o.m9)(e);for(const r of t)n=r._apply(n);return n}Li(fa),Yi(fa);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const il="FIREBASE_DATABASE_EMULATOR_HOST",sl={};let ol=!1;function al(e,t,n,r){e.repoInfo_=new he(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function ll(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),S("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ta(s,i),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/Chat-Vue/"}[il]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=ta(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new X(X.OWNER):new Z(e.name,e.options,t);lo("Invalid Firebase Database URL",l),bt(l.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ul(c,e,u,new G(e.name,n));return new hl(h,e)}function cl(e,t){const n=sl[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Mo(e),delete n[e.key]}function ul(e,t,n,r){let i=sl[t.name];i||(i={},sl[t.name]=i);let s=i[e.toURLString()];return s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new yo(e,ol,n,r),i[e.toURLString()]=s,s}class hl{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fa(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(cl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function dl(){Ve.IS_TRANSPORT_INITIALIZED&&x("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function fl(){dl(),Me.forceDisallow()}function pl(){dl(),Ue.forceDisallow(),Me.forceAllow()}function _l(e,t,n,r={}){e=(0,o.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Sg)(r.mockUserToken,e.app.options.projectId);s=new X(t)}al(i,t,n,s)}function gl(e){e=(0,o.m9)(e),e._checkNotDeleted("goOffline"),Mo(e._repo)}function ml(e){e=(0,o.m9)(e),e._checkNotDeleted("goOnline"),jo(e._repo)}function yl(e,t){E(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e){h(s.SDK_VERSION),(0,s._registerComponent)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ll(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(l,c,e),(0,s.registerVersion)(l,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={".sv":"timestamp"};function wl(){return bl}function Cl(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Sl(e,t,n){var r;if(e=(0,o.m9)(e),ao("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,s=new o.BH,a=(t,n,r)=>{let i=null;t?s.reject(t):(i=new pa(r,new fa(e._repo,e._path),ln),s.resolve(new El(n,i)))},l=xa(e,(()=>{}));return Bo(e._repo,e._path,t,a,l,i),s.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};vl();const Il="@firebase/database-compat",kl="1.0.2",Tl=new a.Yd("@firebase/database-compat"),xl=function(e){const t="FIREBASE WARNING: "+e;Tl.warn(t)},Nl=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error((0,o.gK)(e,t)+"must be a boolean.")},Pl=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error((0,o.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(e){this._delegate=e}cancel(e){(0,o.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,o.Wj)("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then((()=>e(null)),(t=>e(t))),t}remove(e){(0,o.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,o.Wj)("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then((()=>e(null)),(t=>e(t))),t}set(e,t){(0,o.Dv)("OnDisconnect.set",1,2,arguments.length),(0,o.Wj)("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,o.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,o.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}update(e,t){if((0,o.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,xl("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,o.Wj)("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return(0,o.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this._database=e,this._delegate=t}val(){return(0,o.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,o.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,o.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,o.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return(0,o.Dv)("DataSnapshot.child",0,1,arguments.length),e=String(e),so("DataSnapshot.child","path",e,!1),new Al(this._database,this._delegate.child(e))}hasChild(e){return(0,o.Dv)("DataSnapshot.hasChild",1,1,arguments.length),so("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return(0,o.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return(0,o.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,o.Wj)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach((t=>e(new Al(this._database,t))))}hasChildren(){return(0,o.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,o.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,o.Dv)("DataSnapshot.ref",0,0,arguments.length),new Ll(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ol{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;(0,o.Dv)("Query.on",2,4,arguments.length),(0,o.Wj)("Query.on","callback",t,!1);const s=Ol.getCancelAndContextArgs_("Query.on",n,r),a=(e,n)=>{t.call(s.context,new Al(this.database,e),n)};a.userCallback=t,a.context=s.context;const l=null===(i=s.cancel)||void 0===i?void 0:i.bind(s.context);switch(e){case"value":return xa(this._delegate,a,l),t;case"child_added":return Na(this._delegate,a,l),t;case"child_removed":return Da(this._delegate,a,l),t;case"child_changed":return Pa(this._delegate,a,l),t;case"child_moved":return Ra(this._delegate,a,l),t;default:throw new Error((0,o.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if((0,o.Dv)("Query.off",0,3,arguments.length),Pl("Query.off",e,!0),(0,o.Wj)("Query.off","callback",t,!0),(0,o.lb)("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,Aa(this._delegate,e,r)}else Aa(this._delegate,e)}get(){return Sa(this._delegate).then((e=>new Al(this.database,e)))}once(e,t,n,r){(0,o.Dv)("Query.once",1,4,arguments.length),(0,o.Wj)("Query.once","callback",t,!0);const i=Ol.getCancelAndContextArgs_("Query.once",n,r),s=new o.BH,a=(e,n)=>{const r=new Al(this.database,e);t&&t.call(i.context,r,n),s.resolve(r)};a.userCallback=t,a.context=i.context;const l=e=>{i.cancel&&i.cancel.call(i.context,e),s.reject(e)};switch(e){case"value":xa(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":Na(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Da(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":Pa(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Ra(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error((0,o.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return(0,o.Dv)("Query.limitToFirst",1,1,arguments.length),new Ol(this.database,rl(this._delegate,Ha(e)))}limitToLast(e){return(0,o.Dv)("Query.limitToLast",1,1,arguments.length),new Ol(this.database,rl(this._delegate,za(e)))}orderByChild(e){return(0,o.Dv)("Query.orderByChild",1,1,arguments.length),new Ol(this.database,rl(this._delegate,Ya(e)))}orderByKey(){return(0,o.Dv)("Query.orderByKey",0,0,arguments.length),new Ol(this.database,rl(this._delegate,Qa()))}orderByPriority(){return(0,o.Dv)("Query.orderByPriority",0,0,arguments.length),new Ol(this.database,rl(this._delegate,Za()))}orderByValue(){return(0,o.Dv)("Query.orderByValue",0,0,arguments.length),new Ol(this.database,rl(this._delegate,el()))}startAt(e=null,t){return(0,o.Dv)("Query.startAt",0,2,arguments.length),new Ol(this.database,rl(this._delegate,Wa(e,t)))}startAfter(e=null,t){return(0,o.Dv)("Query.startAfter",0,2,arguments.length),new Ol(this.database,rl(this._delegate,Ua(e,t)))}endAt(e=null,t){return(0,o.Dv)("Query.endAt",0,2,arguments.length),new Ol(this.database,rl(this._delegate,Fa(e,t)))}endBefore(e=null,t){return(0,o.Dv)("Query.endBefore",0,2,arguments.length),new Ol(this.database,rl(this._delegate,ja(e,t)))}equalTo(e,t){return(0,o.Dv)("Query.equalTo",1,2,arguments.length),new Ol(this.database,rl(this._delegate,nl(e,t)))}toString(){return(0,o.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,o.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if((0,o.Dv)("Query.isEqual",1,1,arguments.length),!(e instanceof Ol)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,(0,o.Wj)(e,"cancel",r.cancel,!0),r.context=n,(0,o.lb)(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error((0,o.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new Ll(this.database,new fa(this._delegate._repo,this._delegate._path))}}class Ll extends Ol{constructor(e,t){super(e,new ca(t._repo,t._path,new Dn,!1)),this.database=e,this._delegate=t}getKey(){return(0,o.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return(0,o.Dv)("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new Ll(this.database,ma(this._delegate,e))}getParent(){(0,o.Dv)("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Ll(this.database,e):null}getRoot(){return(0,o.Dv)("Reference.root",0,0,arguments.length),new Ll(this.database,this._delegate.root)}set(e,t){(0,o.Dv)("Reference.set",1,2,arguments.length),(0,o.Wj)("Reference.set","onComplete",t,!0);const n=ba(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}update(e,t){if((0,o.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,xl("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ao("Reference.update",this._delegate._path),(0,o.Wj)("Reference.update","onComplete",t,!0);const n=Ea(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){(0,o.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,o.Wj)("Reference.setWithPriority","onComplete",n,!0);const r=Ca(this._delegate,e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}remove(e){(0,o.Dv)("Reference.remove",0,1,arguments.length),(0,o.Wj)("Reference.remove","onComplete",e,!0);const t=va(this._delegate);return e&&t.then((()=>e(null)),(t=>e(t))),t}transaction(e,t,n){(0,o.Dv)("Reference.transaction",1,3,arguments.length),(0,o.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,o.Wj)("Reference.transaction","onComplete",t,!0),Nl("Reference.transaction","applyLocally",n,!0);const r=Sl(this._delegate,e,{applyLocally:n}).then((e=>new Dl(e.committed,new Al(this.database,e.snapshot))));return t&&r.then((e=>t(null,e.committed,e.snapshot)),(e=>t(e,!1,null))),r}setPriority(e,t){(0,o.Dv)("Reference.setPriority",1,2,arguments.length),(0,o.Wj)("Reference.setPriority","onComplete",t,!0);const n=wa(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}push(e,t){(0,o.Dv)("Reference.push",0,2,arguments.length),(0,o.Wj)("Reference.push","onComplete",t,!0);const n=ya(this._delegate,e),r=n.then((e=>new Ll(this.database,e)));t&&r.then((()=>t(null)),(e=>t(e)));const i=new Ll(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return ao("Reference.onDisconnect",this._delegate._path),new Rl(new la(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:fl,forceLongPolling:pl}}useEmulator(e,t,n={}){_l(this._delegate,e,t,n)}ref(e){if((0,o.Dv)("database.ref",0,1,arguments.length),e instanceof Ll){const t=ga(this._delegate,e.toString());return new Ll(this,t)}{const t=_a(this._delegate,e);return new Ll(this,t)}}refFromURL(e){const t="database.refFromURL";(0,o.Dv)(t,1,1,arguments.length);const n=ga(this._delegate,e);return new Ll(this,n)}goOffline(){return(0,o.Dv)("database.goOffline",0,0,arguments.length),gl(this._delegate)}goOnline(){return(0,o.Dv)("database.goOnline",0,0,arguments.length),ml(this._delegate)}}function Ml({app:e,url:t,version:n,customAuthImpl:r,customAppCheckImpl:s,namespace:o,nodeAdmin:a=!1}){h(n);const l=new i.H0("database-standalone"),c=new i.zt("auth-internal",l);let u;return c.setComponent(new i.wA("auth-internal",(()=>r),"PRIVATE")),s&&(u=new i.zt("app-check-internal",l),u.setComponent(new i.wA("app-check-internal",(()=>s),"PRIVATE"))),{instance:new Fl(ll(e,c,u,t,a),e),namespace:o}}Fl.ServerValue={TIMESTAMP:wl(),increment:e=>Cl(e)};var jl=Object.freeze({__proto__:null,initStandalone:Ml});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=Fl.ServerValue;function Wl(e){e.INTERNAL.registerComponent(new i.wA("database-compat",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new Fl(r,n)}),"PUBLIC").setServiceProps({Reference:Ll,Query:Ol,Database:Fl,DataSnapshot:Al,enableLogging:yl,INTERNAL:jl,ServerValue:ql}).setMultipleInstances(!0)),e.registerVersion(Il,kl)}Wl(r.Z)}}]);
//# sourceMappingURL=chunk-vendors.cdba923b.js.map