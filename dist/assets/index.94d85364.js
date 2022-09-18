(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function j(){}const Ce=t=>t;function Ie(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function je(){return Object.create(null)}function $(t){t.forEach(et)}function W(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let me;function K(t,e){return me||(me=document.createElement("a")),me.href=e,t===me.href}function bt(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function de(t,e,n){t.$$.on_destroy.push(vt(e,n))}function tt(t,e,n,l){if(t){const s=nt(t,e,n,l);return t[0](s)}}function nt(t,e,n,l){return t[1]&&l?Ie(n.ctx.slice(),t[1](l(e))):n.ctx}function lt(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)i[c]=e.dirty[c]|s[c];return i}return e.dirty|s}return e.dirty}function st(t,e,n,l,s,i){if(s){const r=nt(e,n,l,i);t.p(r,s)}}function it(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function Qe(t){return t==null?"":t}const rt=typeof window<"u";let Le=rt?()=>window.performance.now():()=>Date.now(),Ue=rt?t=>requestAnimationFrame(t):j;const ne=new Set;function ot(t){ne.forEach(e=>{e.c(t)||(ne.delete(e),e.f())}),ne.size!==0&&Ue(ot)}function Oe(t){let e;return ne.size===0&&Ue(ot),{promise:new Promise(n=>{ne.add(e={c:t,f:n})}),abort(){ne.delete(e)}}}function h(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=w("style");return kt(ct(t),e),e.sheet}function kt(t,e){return h(t.head||t,e),e.sheet}function T(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function P(){return G(" ")}function at(){return G("")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}const ye=new Map;let ke=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:yt(e),rules:{}};return ye.set(t,n),n}function Ae(t,e,n,l,s,i,r,c=0){const u=16.666/l;let o=`{
`;for(let b=0;b<=1;b+=u){const v=e+(n-e)*i(b);o+=b*100+`%{${r(v,1-v)}}
`}const f=o+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${c}`,d=ct(t),{stylesheet:_,rules:g}=ye.get(d)||Et(d,t);g[a]||(g[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const A=t.style.animation||"";return t.style.animation=`${A?`${A}, `:""}${a} ${l}ms linear ${s}ms 1 both`,ke+=1,a}function we(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),ke-=s,ke||St())}function St(){Ue(()=>{ke||(ye.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),ye.clear())})}let fe;function ue(t){fe=t}function Pt(){if(!fe)throw new Error("Function called outside component initialization");return fe}function Te(t){Pt().$$.on_destroy.push(t)}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const ce=[],qe=[],be=[],Ke=[],It=Promise.resolve();let Be=!1;function Bt(){Be||(Be=!0,It.then(ft))}function Z(t){be.push(t)}const Re=new Set;let ge=0;function ft(){const t=fe;do{for(;ge<ce.length;){const e=ce[ge];ge++,ue(e),Lt(e.$$)}for(ue(null),ce.length=0,ge=0;qe.length;)qe.pop()();for(let e=0;e<be.length;e+=1){const n=be[e];Re.has(n)||(Re.add(n),n())}be.length=0}while(ce.length);for(;Ke.length;)Ke.pop()();Be=!1,Re.clear(),ue(t)}function Lt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let oe;function Fe(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function X(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const ve=new Set;let Y;function Ee(){Y={r:0,c:[],p:Y}}function Se(){Y.r||$(Y.c),Y=Y.p}function B(t,e){t&&t.i&&(ve.delete(t),t.i(e))}function U(t,e,n,l){if(t&&t.o){if(ve.has(t))return;ve.add(t),Y.c.push(()=>{ve.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Me={duration:0};function Ut(t,e,n){let l=e(t,n),s=!1,i,r,c=0;function u(){i&&we(t,i)}function o(){const{delay:a=0,duration:d=300,easing:_=Ce,tick:g=j,css:A}=l||Me;A&&(i=Ae(t,0,1,d,a,_,A,c++)),g(0,1);const b=Le()+a,v=b+d;r&&r.abort(),s=!0,Z(()=>X(t,!0,"start")),r=Oe(E=>{if(s){if(E>=v)return g(1,0),X(t,!0,"end"),u(),s=!1;if(E>=b){const p=_((E-b)/d);g(p,1-p)}}return s})}let f=!1;return{start(){f||(f=!0,we(t),W(l)?(l=l(),Fe().then(o)):o())},invalidate(){f=!1},end(){s&&(u(),s=!1)}}}function Ot(t,e,n){let l=e(t,n),s=!0,i;const r=Y;r.r+=1;function c(){const{delay:u=0,duration:o=300,easing:f=Ce,tick:a=j,css:d}=l||Me;d&&(i=Ae(t,1,0,o,u,f,d));const _=Le()+u,g=_+o;Z(()=>X(t,!1,"start")),Oe(A=>{if(s){if(A>=g)return a(0,1),X(t,!1,"end"),--r.r||$(r.c),!1;if(A>=_){const b=f((A-_)/o);a(1-b,b)}}return s})}return W(l)?Fe().then(()=>{l=l(),c()}):c(),{end(u){u&&l.tick&&l.tick(1,0),s&&(i&&we(t,i),s=!1)}}}function he(t,e,n,l){let s=e(t,n),i=l?0:1,r=null,c=null,u=null;function o(){u&&we(t,u)}function f(d,_){const g=d.b-i;return _*=Math.abs(g),{a:i,b:d.b,d:g,duration:_,start:d.start,end:d.start+_,group:d.group}}function a(d){const{delay:_=0,duration:g=300,easing:A=Ce,tick:b=j,css:v}=s||Me,E={start:Le()+_,b:d};d||(E.group=Y,Y.r+=1),r||c?c=E:(v&&(o(),u=Ae(t,i,d,g,_,A,v)),d&&b(0,1),r=f(E,g),Z(()=>X(t,d,"start")),Oe(p=>{if(c&&p>c.start&&(r=f(c,g),c=null,X(t,r.b,"start"),v&&(o(),u=Ae(t,i,r.b,r.duration,0,A,s.css))),r){if(p>=r.end)b(i=r.b,1-i),X(t,r.b,"end"),c||(r.b?o():--r.group.r||$(r.group.c)),r=null;else if(p>=r.start){const S=p-r.start;i=r.a+r.d*A(S/r.duration),b(i,1-i)}}return!!(r||c)}))}return{run(d){W(s)?Fe().then(()=>{s=s(),a(d)}):a(d)},end(){o(),r=c=null}}}function dt(t,e){U(t,1,1,()=>{e.delete(t.key)})}function mt(t,e,n,l,s,i,r,c,u,o,f,a){let d=t.length,_=i.length,g=d;const A={};for(;g--;)A[t[g].key]=g;const b=[],v=new Map,E=new Map;for(g=_;g--;){const y=a(s,i,g),O=n(y);let I=r.get(O);I?l&&I.p(y,e):(I=o(O,y),I.c()),v.set(O,b[g]=I),O in A&&E.set(O,Math.abs(g-A[O]))}const p=new Set,S=new Set;function R(y){B(y,1),y.m(c,f),r.set(y.key,y),f=y.first,_--}for(;d&&_;){const y=b[_-1],O=t[d-1],I=y.key,F=O.key;y===O?(f=y.first,d--,_--):v.has(F)?!r.has(I)||p.has(I)?R(y):S.has(F)?d--:E.get(I)>E.get(F)?(S.add(I),R(y)):(p.add(F),d--):(u(O,r),d--)}for(;d--;){const y=t[d];v.has(y.key)||u(y,r)}for(;_;)R(b[_-1]);return b}function Q(t){t&&t.c()}function H(t,e,n,l){const{fragment:s,on_mount:i,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,n),l||Z(()=>{const u=i.map(et).filter(W);r?r.push(...u):$(u),t.$$.on_mount=[]}),c.forEach(Z)}function J(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),Bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,l,s,i,r,c=[-1]){const u=fe;ue(t);const o=t.$$={fragment:null,ctx:null,props:i,update:j,not_equal:s,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:je(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,..._)=>{const g=_.length?_[0]:d;return o.ctx&&s(o.ctx[a],o.ctx[a]=g)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](g),f&&Tt(t,a)),d}):[],o.update(),f=!0,$(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const a=At(e.target);o.fragment&&o.fragment.l(a),a.forEach(L)}else o.fragment&&o.fragment.c();e.intro&&B(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),ft()}ue(u)}class N{$destroy(){J(this,1),this.$destroy=j}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const te=[];function He(t,e=j){let n;const l=new Set;function s(c){if(D(t,c)&&(t=c,n)){const u=!te.length;for(const o of l)o[1](),te.push(o,t);if(u){for(let o=0;o<te.length;o+=2)te[o][0](te[o+1]);te.length=0}}}function i(c){s(c(t))}function r(c,u=j){const o=[c,u];return l.add(o),l.size===1&&(n=e(s)||j),c(t),()=>{l.delete(o),l.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:r}}const z=He(null),De="store-task-board",Ft=()=>{const t=JSON.parse(localStorage.getItem(De)),{subscribe:e,set:n,update:l}=He(t||{tasks:[],columns:[],idCounterTask:1,idCounterColumn:0});return{subscribe:e,set:n,update:l,...{addTask:(i,r)=>l(c=>({...c,tasks:[...c.tasks,{id:c.idCounterTask,text:i,columnId:r}],idCounterTask:c.idCounterTask+1})),addColumn:(i,r)=>l(c=>({...c,columns:[...c.columns,{id:c.idCounterColumn,title:i,image:r}],idCounterColumn:c.idCounterColumn+1})),updateColumn:i=>l(r=>{const c=r.columns.findIndex(u=>u.id===i.id);return r.columns[c]=i,r}),removeColumn:i=>l(r=>({...r,columns:r.columns.filter(c=>c.id!==i)})),setStorage:i=>localStorage.setItem(De,JSON.stringify(i))}}},x=Ft();function Mt(t){const e=t-1;return e*e*e+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ht(t,e){var n={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,l=Object.getOwnPropertySymbols(t);s<l.length;s++)e.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(t,l[s])&&(n[l[s]]=t[l[s]]);return n}function _e(t,{delay:e=0,duration:n=400,easing:l=Ce}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:i=>`opacity: ${i*s}`}}function Jt(t){var{fallback:e}=t,n=Ht(t,["fallback"]);const l=new Map,s=new Map;function i(c,u,o){const{delay:f=0,duration:a=y=>Math.sqrt(y)*30,easing:d=Mt}=Ie(Ie({},n),o),_=u.getBoundingClientRect(),g=c.left-_.left,A=c.top-_.top,b=c.width/_.width,v=c.height/_.height,E=Math.sqrt(g*g+A*A),p=getComputedStyle(u),S=p.transform==="none"?"":p.transform,R=+p.opacity;return{delay:f,duration:W(a)?a(E):a,easing:d,css:(y,O)=>`
				opacity: ${y*R};
				transform-origin: top left;
				transform: ${S} translate(${O*g}px,${O*A}px) scale(${y+(1-y)*b}, ${y+(1-y)*v});
			`}}function r(c,u,o){return(f,a)=>(c.set(a.key,{rect:f.getBoundingClientRect()}),()=>{if(u.has(a.key)){const{rect:d}=u.get(a.key);return u.delete(a.key),i(d,f,a)}return c.delete(a.key),e&&e(f,a,o)})}return[r(s,l,!1),r(l,s,!0)]}function jt(t){let e,n,l,s,i,r,c;const u=t[4].default,o=tt(u,t,t[3],null);return{c(){e=w("button"),n=G(t[1]),l=P(),o&&o.c(),m(e,"type",t[0]),m(e,"class",s=Qe(t[2])+" svelte-1un9nqc")},m(f,a){T(f,e,a),h(e,n),h(e,l),o&&o.m(e,null),i=!0,r||(c=q(e,"click",t[5]),r=!0)},p(f,[a]){(!i||a&2)&&ae(n,f[1]),o&&o.p&&(!i||a&8)&&st(o,u,f,f[3],i?lt(u,f[3],a,null):it(f[3]),null),(!i||a&1)&&m(e,"type",f[0]),(!i||a&4&&s!==(s=Qe(f[2])+" svelte-1un9nqc"))&&m(e,"class",s)},i(f){i||(B(o,f),i=!0)},o(f){U(o,f),i=!1},d(f){f&&L(e),o&&o.d(f),r=!1,c()}}}function Qt(t,e,n){let{$$slots:l={},$$scope:s}=e,{type:i}=e,{text:r=""}=e,{classList:c=""}=e;function u(o){Rt.call(this,t,o)}return t.$$set=o=>{"type"in o&&n(0,i=o.type),"text"in o&&n(1,r=o.text),"classList"in o&&n(2,c=o.classList),"$$scope"in o&&n(3,s=o.$$scope)},[i,r,c,s,l,u]}class le extends N{constructor(e){super(),V(this,e,Qt,jt,D,{type:0,text:1,classList:2})}}function Ye(t){let e,n;return{c(){e=w("h3"),n=G(t[4]),m(e,"class","modal__title svelte-1lwb1vc")},m(l,s){T(l,e,s),h(e,n)},p(l,s){s&16&&ae(n,l[4])},d(l){l&&L(e)}}}function qt(t){let e,n,l,s,i,r,c,u,o,f,a,d,_,g,A,b=t[4]&&Ye(t);const v=t[10].default,E=tt(v,t,t[9],null);return u=new le({props:{type:"button",text:t[0],classList:"btn "+t[2]}}),u.$on("click",function(){W(t[6])&&t[6].apply(this,arguments)}),f=new le({props:{type:"submit",text:t[1],classList:"btn "+t[3]}}),{c(){e=w("div"),l=P(),s=w("form"),b&&b.c(),i=P(),E&&E.c(),r=P(),c=w("div"),Q(u.$$.fragment),o=P(),Q(f.$$.fragment),m(e,"class","modal-background svelte-1lwb1vc"),m(c,"class","modal__actions svelte-1lwb1vc"),m(s,"class",a="modal "+t[5]+" svelte-1lwb1vc")},m(p,S){T(p,e,S),T(p,l,S),T(p,s,S),b&&b.m(s,null),h(s,i),E&&E.m(s,null),h(s,r),h(s,c),H(u,c,null),h(c,o),H(f,c,null),_=!0,g||(A=[q(e,"click",t[8]),q(s,"submit",function(){W(t[7])&&t[7].apply(this,arguments)})],g=!0)},p(p,[S]){t=p,t[4]?b?b.p(t,S):(b=Ye(t),b.c(),b.m(s,i)):b&&(b.d(1),b=null),E&&E.p&&(!_||S&512)&&st(E,v,t,t[9],_?lt(v,t[9],S,null):it(t[9]),null);const R={};S&1&&(R.text=t[0]),S&4&&(R.classList="btn "+t[2]),u.$set(R);const y={};S&2&&(y.text=t[1]),S&8&&(y.classList="btn "+t[3]),f.$set(y),(!_||S&32&&a!==(a="modal "+t[5]+" svelte-1lwb1vc"))&&m(s,"class",a)},i(p){_||(Z(()=>{n||(n=he(e,_e,{duration:pe},!0)),n.run(1)}),B(E,p),B(u.$$.fragment,p),B(f.$$.fragment,p),Z(()=>{d||(d=he(s,_e,{duration:pe},!0)),d.run(1)}),_=!0)},o(p){n||(n=he(e,_e,{duration:pe},!1)),n.run(0),U(E,p),U(u.$$.fragment,p),U(f.$$.fragment,p),d||(d=he(s,_e,{duration:pe},!1)),d.run(0),_=!1},d(p){p&&L(e),p&&n&&n.end(),p&&L(l),p&&L(s),b&&b.d(),E&&E.d(p),J(u),J(f),p&&d&&d.end(),g=!1,$(A)}}}const pe=100;function Kt(t,e,n){let{$$slots:l={},$$scope:s}=e,{cancelText:i="\u041E\u0442\u043C\u0435\u043D\u0430"}=e,{submitText:r="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"}=e,{cancelClassList:c=""}=e,{submitClassList:u="success"}=e,{title:o=""}=e,{classList:f=""}=e;const a=()=>z.set(null);let{onCancel:d=a}=e,{onSubmit:_=()=>{}}=e;return t.$$set=g=>{"cancelText"in g&&n(0,i=g.cancelText),"submitText"in g&&n(1,r=g.submitText),"cancelClassList"in g&&n(2,c=g.cancelClassList),"submitClassList"in g&&n(3,u=g.submitClassList),"title"in g&&n(4,o=g.title),"classList"in g&&n(5,f=g.classList),"onCancel"in g&&n(6,d=g.onCancel),"onSubmit"in g&&n(7,_=g.onSubmit),"$$scope"in g&&n(9,s=g.$$scope)},[i,r,c,u,o,f,d,_,a,s,l]}class Pe extends N{constructor(e){super(),V(this,e,Kt,qt,D,{cancelText:0,submitText:1,cancelClassList:2,submitClassList:3,title:4,classList:5,onCancel:6,onSubmit:7})}}const gt="/task-board/assets/i-pin.b882583a.svg",ht="/task-board/assets/i-play.9bd0b7f4.svg",_t="/task-board/assets/i-done.00a301b0.svg",pt="/task-board/assets/i-deployed.aa18b895.svg";function $e(t,e,n){const l=t.slice();return l[7]=e[n],l}function Ve(t){let e,n,l,s,i,r,c,u;return{c(){e=w("label"),n=w("input"),l=P(),s=w("img"),r=P(),m(n,"type","radio"),m(n,"name","icon"),n.__value=t[7],n.value=n.__value,t[5][0].push(n),K(s.src,i=t[7])||m(s,"src",i),m(s,"alt",t[7]),m(e,"class","radio-icon"),ie(e,"selected",t[0]===t[7])},m(o,f){T(o,e,f),h(e,n),n.checked=n.__value===t[0],h(e,l),h(e,s),h(e,r),c||(u=q(n,"change",t[4]),c=!0)},p(o,f){f&1&&(n.checked=n.__value===o[0]),f&5&&ie(e,"selected",o[0]===o[7])},d(o){o&&L(e),t[5][0].splice(t[5][0].indexOf(n),1),c=!1,u()}}}function Dt(t){let e,n,l,s,i,r,c=t[2],u=[];for(let o=0;o<c.length;o+=1)u[o]=Ve($e(t,c,o));return{c(){e=w("div"),n=w("div");for(let o=0;o<u.length;o+=1)u[o].c();l=P(),s=w("input"),m(n,"class","icons-wrap"),m(s,"type","text"),m(s,"placeholder","\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430"),s.required=!0},m(o,f){T(o,e,f),h(e,n);for(let a=0;a<u.length;a+=1)u[a].m(n,null);h(e,l),h(e,s),se(s,t[1]),i||(r=q(s,"input",t[6]),i=!0)},p(o,f){if(f&5){c=o[2];let a;for(a=0;a<c.length;a+=1){const d=$e(o,c,a);u[a]?u[a].p(d,f):(u[a]=Ve(d),u[a].c(),u[a].m(n,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=c.length}f&2&&s.value!==o[1]&&se(s,o[1])},d(o){o&&L(e),ut(u,o),i=!1,r()}}}function Yt(t){let e,n;return e=new Pe({props:{title:"\u041D\u043E\u0432\u044B\u0439 \u0441\u0442\u043E\u043B\u0431\u0435\u0446",onSubmit:t[3],$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,[s]){const i={};s&1027&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(B(e.$$.fragment,l),n=!0)},o(l){U(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function $t(t,e,n){const l=[gt,ht,_t,pt];let s=l[0],i="";const r=f=>{f.preventDefault(),n(1,i=i.trim()),i&&(x.addColumn(i,s),z.set(null))},c=[[]];function u(){s=this.__value,n(0,s)}function o(){i=this.value,n(1,i)}return[s,i,l,r,u,c,o]}class Vt extends N{constructor(e){super(),V(this,e,$t,Yt,D,{})}}const ee=He(null);function Nt(t){let e,n,l,s;return{c(){e=w("div"),n=w("input"),m(n,"type","text"),m(n,"placeholder","\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),n.required=!0},m(i,r){T(i,e,r),h(e,n),se(n,t[0]),l||(s=q(n,"input",t[2]),l=!0)},p(i,r){r&1&&n.value!==i[0]&&se(n,i[0])},d(i){i&&L(e),l=!1,s()}}}function Gt(t){let e,n;return e=new Pe({props:{onSubmit:t[1],title:"\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,[s]){const i={};s&17&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(B(e.$$.fragment,l),n=!0)},o(l){U(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function Zt(t,e,n){let l;de(t,ee,c=>n(3,l=c));let s="";const i=c=>{c.preventDefault(),n(0,s=s.trim()),s&&(x.addTask(s,l.id),z.set(null))};Te(()=>{ee.set(null)});function r(){s=this.value,n(0,s)}return[s,i,r]}class xt extends N{constructor(e){super(),V(this,e,Zt,Gt,D,{})}}const zt="data:image/png;base64,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",Xt="data:image/png;base64,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",Wt="/task-board/assets/chevron.2c8b1230.svg";function en(t){let e,n,l,s,i,r,c,u,o,f,a,d,_,g,A=t[0].id+"",b,v,E,p=t[0].text+"",S;return{c(){e=w("div"),n=w("div"),l=w("div"),s=w("img"),r=P(),c=w("img"),o=P(),f=w("img"),d=P(),_=w("p"),g=G("#"),b=G(A),v=G(": "),E=w("span"),S=G(p),K(s.src,i=zt)||m(s,"src",i),m(s,"alt",""),m(s,"class","task__avatar svelte-16ll9v"),K(c.src,u=Xt)||m(c,"src",u),m(c,"alt",""),m(c,"class","task__avatar svelte-16ll9v"),m(l,"class","task__assignees svelte-16ll9v"),K(f.src,a=Wt)||m(f,"src",a),m(f,"alt",""),m(f,"class","task__chevron svelte-16ll9v"),m(n,"class","task__meta flex svelte-16ll9v"),m(E,"class","task__title svelte-16ll9v"),m(_,"class","task__text svelte-16ll9v"),m(e,"class","task flex svelte-16ll9v")},m(R,y){T(R,e,y),h(e,n),h(n,l),h(l,s),h(l,r),h(l,c),h(n,o),h(n,f),h(e,d),h(e,_),h(_,g),h(_,b),h(_,v),h(_,E),h(E,S)},p(R,[y]){y&1&&A!==(A=R[0].id+"")&&ae(b,A),y&1&&p!==(p=R[0].text+"")&&ae(S,p)},i:j,o:j,d(R){R&&L(e)}}}function tn(t,e,n){let{task:l}=e;return t.$$set=s=>{"task"in s&&n(0,l=s.task)},[l]}class nn extends N{constructor(e){super(),V(this,e,tn,en,D,{task:0})}}const ln="/task-board/assets/i-pen.99b0da9e.svg",sn="/task-board/assets/i-bin.546ea5e7.svg";function Ne(t,e,n){const l=t.slice();return l[8]=e[n],l}function Ge(t){let e,n,l,s,i,r,c,u;return{c(){e=w("label"),n=w("input"),l=P(),s=w("img"),r=P(),m(n,"type","radio"),m(n,"name","icon"),n.__value=t[8],n.value=n.__value,t[5][0].push(n),K(s.src,i=t[8])||m(s,"src",i),m(s,"alt",t[8]),m(e,"class","radio-icon"),ie(e,"selected",t[0]===t[8])},m(o,f){T(o,e,f),h(e,n),n.checked=n.__value===t[0],h(e,l),h(e,s),h(e,r),c||(u=q(n,"change",t[4]),c=!0)},p(o,f){f&1&&(n.checked=n.__value===o[0]),f&5&&ie(e,"selected",o[0]===o[8])},d(o){o&&L(e),t[5][0].splice(t[5][0].indexOf(n),1),c=!1,u()}}}function rn(t){let e,n,l,s,i,r,c=t[2],u=[];for(let o=0;o<c.length;o+=1)u[o]=Ge(Ne(t,c,o));return{c(){e=w("div"),n=w("div");for(let o=0;o<u.length;o+=1)u[o].c();l=P(),s=w("input"),m(n,"class","icons-wrap"),m(s,"type","text"),m(s,"placeholder","\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430"),s.required=!0},m(o,f){T(o,e,f),h(e,n);for(let a=0;a<u.length;a+=1)u[a].m(n,null);h(e,l),h(e,s),se(s,t[1]),i||(r=q(s,"input",t[6]),i=!0)},p(o,f){if(f&5){c=o[2];let a;for(a=0;a<c.length;a+=1){const d=Ne(o,c,a);u[a]?u[a].p(d,f):(u[a]=Ge(d),u[a].c(),u[a].m(n,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=c.length}f&2&&s.value!==o[1]&&se(s,o[1])},d(o){o&&L(e),ut(u,o),i=!1,r()}}}function on(t){let e,n;return e=new Pe({props:{title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",onSubmit:t[3],submitText:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",$$slots:{default:[rn]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,[s]){const i={};s&2051&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(B(e.$$.fragment,l),n=!0)},o(l){U(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function cn(t,e,n){let l;de(t,ee,a=>n(7,l=a));const s=[gt,ht,_t,pt];let i=l.image,r=l.title;const c=a=>{a.preventDefault(),n(1,r=r.trim()),r&&(x.updateColumn({id:l.id,title:r,image:i}),z.set(null))};Te(()=>{ee.set(null)});const u=[[]];function o(){i=this.__value,n(0,i)}function f(){r=this.value,n(1,r)}return[i,r,s,c,o,u,f]}class un extends N{constructor(e){super(),V(this,e,cn,on,D,{})}}function an(t){let e,n;return e=new Pe({props:{title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446?",onSubmit:t[0],cancelText:"\u041D\u0435\u0442",submitText:"\u0414\u0430",submitClassList:"danger"}}),{c(){Q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p:j,i(l){n||(B(e.$$.fragment,l),n=!0)},o(l){U(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function fn(t,e,n){let l;de(t,ee,i=>n(1,l=i));const s=i=>{i.preventDefault(),x.removeColumn(l.id),z.set(null)};return Te(()=>{ee.set(null)}),[s]}class dn extends N{constructor(e){super(),V(this,e,fn,an,D,{})}}function Ze(t,e,n){const l=t.slice();return l[14]=e[n],l}function mn(t){let e,n;return{c(){e=w("img"),K(e.src,n=ln)||m(e,"src",n),m(e,"alt","edit")},m(l,s){T(l,e,s)},p:j,d(l){l&&L(e)}}}function gn(t){let e,n;return{c(){e=w("img"),K(e.src,n=sn)||m(e,"src",n),m(e,"alt","remove column")},m(l,s){T(l,e,s)},p:j,d(l){l&&L(e)}}}function xe(t,e){let n,l,s,i,r,c,u,o;l=new nn({props:{task:e[14]}});function f(...a){return e[12](e[14],...a)}return{key:t,first:null,c(){n=w("div"),Q(l.$$.fragment),s=P(),m(n,"class","task__wrap svelte-1x82phj"),m(n,"draggable",!0),this.first=n},m(a,d){T(a,n,d),H(l,n,null),h(n,s),c=!0,u||(o=[q(n,"dragstart",f),q(n,"dragend",e[7])],u=!0)},p(a,d){e=a;const _={};d&4&&(_.task=e[14]),l.$set(_)},i(a){c||(B(l.$$.fragment,a),Z(()=>{r&&r.end(1),i=Ut(n,e[9],{key:e[14].id}),i.start()}),c=!0)},o(a){U(l.$$.fragment,a),i&&i.invalidate(),r=Ot(n,e[8],{key:e[14].id}),c=!1},d(a){a&&L(n),J(l),a&&r&&r.end(),u=!1,$(o)}}}function hn(t){let e,n,l,s,i,r,c,u,o=t[0].title+"",f,a,d,_,g,A,b,v,E,p=[],S=new Map,R,y,O,I;g=new le({props:{type:"button",classList:"icon-btn mr-10",$$slots:{default:[mn]},$$scope:{ctx:t}}}),g.$on("click",t[4]),b=new le({props:{type:"button",classList:"icon-btn",$$slots:{default:[gn]},$$scope:{ctx:t}}}),b.$on("click",t[5]);let F=t[2];const re=k=>k[14].id;for(let k=0;k<F.length;k+=1){let C=Ze(t,F,k),M=re(C);S.set(M,p[k]=xe(M,C))}return y=new le({props:{text:"\uFF0B",type:"button",classList:"add-btn"}}),y.$on("click",t[3]),{c(){e=w("div"),n=w("div"),l=w("div"),s=w("img"),c=P(),u=w("h5"),f=G(o),d=P(),_=w("div"),Q(g.$$.fragment),A=P(),Q(b.$$.fragment),v=P(),E=w("div");for(let k=0;k<p.length;k+=1)p[k].c();R=P(),Q(y.$$.fragment),K(s.src,i=t[0].image)||m(s,"src",i),m(s,"alt",r=t[0].title),m(u,"class","column__title svelte-1x82phj"),m(u,"title",a=t[0].title),m(l,"class","flex align-c"),m(n,"class","column__header flex align-c svelte-1x82phj"),m(E,"class","task-list svelte-1x82phj"),m(e,"class",O="column "+t[1]+" svelte-1x82phj")},m(k,C){T(k,e,C),h(e,n),h(n,l),h(l,s),h(l,c),h(l,u),h(u,f),h(n,d),h(n,_),H(g,_,null),h(_,A),H(b,_,null),h(e,v),h(e,E);for(let M=0;M<p.length;M+=1)p[M].m(E,null);h(e,R),H(y,e,null),I=!0},p(k,[C]){(!I||C&1&&!K(s.src,i=k[0].image))&&m(s,"src",i),(!I||C&1&&r!==(r=k[0].title))&&m(s,"alt",r),(!I||C&1)&&o!==(o=k[0].title+"")&&ae(f,o),(!I||C&1&&a!==(a=k[0].title))&&m(u,"title",a);const M={};C&131072&&(M.$$scope={dirty:C,ctx:k}),g.$set(M);const Je={};C&131072&&(Je.$$scope={dirty:C,ctx:k}),b.$set(Je),C&196&&(F=k[2],Ee(),p=mt(p,C,re,1,k,F,S,E,dt,xe,null,Ze),Se()),(!I||C&2&&O!==(O="column "+k[1]+" svelte-1x82phj"))&&m(e,"class",O)},i(k){if(!I){B(g.$$.fragment,k),B(b.$$.fragment,k);for(let C=0;C<F.length;C+=1)B(p[C]);B(y.$$.fragment,k),I=!0}},o(k){U(g.$$.fragment,k),U(b.$$.fragment,k);for(let C=0;C<p.length;C+=1)U(p[C]);U(y.$$.fragment,k),I=!1},d(k){k&&L(e),J(g),J(b);for(let C=0;C<p.length;C+=1)p[C].d();J(y)}}}function _n(t,e,n){let l,s;de(t,x,v=>n(11,s=v));let{column:i}=e,{classList:r=""}=e,{dragStart:c}=e;const u=v=>{ee.set(i),z.set(v)},o=()=>u(xt),f=()=>u(un),a=()=>u(dn),d=(v,E)=>{c(E),v.target.classList.add("dragged")},_=v=>{v.target.classList.remove("dragged")},[g,A]=Jt({fallback(v){const E=getComputedStyle(v),p=E.transform==="none"?"":E.transform;return{duration:200,css:S=>`
					transform: ${p} scale(${S});
					opacity: ${S}
				`}}}),b=(v,E)=>d(E,v.id);return t.$$set=v=>{"column"in v&&n(0,i=v.column),"classList"in v&&n(1,r=v.classList),"dragStart"in v&&n(10,c=v.dragStart)},t.$$.update=()=>{t.$$.dirty&2049&&n(2,l=s.tasks.filter(v=>v.columnId===i.id))},[i,r,l,o,f,a,d,_,g,A,c,s,b]}class pn extends N{constructor(e){super(),V(this,e,_n,hn,D,{column:0,classList:1,dragStart:10})}}const bn="/task-board/assets/i-play-red.d43d1534.svg",vn="/task-board/assets/i-wave.4c3305ba.svg";function ze(t,e,n){const l=t.slice();return l[12]=e[n],l}function Xe(t,e){let n,l,s,i,r,c;l=new pn({props:{column:e[12],dragStart:e[5]}});function u(){return e[8](e[12])}function o(){return e[9](e[12])}return{key:t,first:null,c(){n=w("section"),Q(l.$$.fragment),s=P(),m(n,"class","column__wrap svelte-16dep7w"),ie(n,"drag-over",e[0]===e[12].id),this.first=n},m(f,a){T(f,n,a),H(l,n,null),h(n,s),i=!0,r||(c=[q(n,"dragstart",u),q(n,"dragover",o),q(n,"dragend",e[6]),q(n,"dragleave",e[10])],r=!0)},p(f,a){e=f;const d={};a&8&&(d.column=e[12]),l.$set(d),(!i||a&9)&&ie(n,"drag-over",e[0]===e[12].id)},i(f){i||(B(l.$$.fragment,f),i=!0)},o(f){U(l.$$.fragment,f),i=!1},d(f){f&&L(n),J(l),r=!1,$(c)}}}function yn(t){let e,n,l,s,i,r,c,u,o,f,a,d,_,g,A,b,v,E,p,S,R,y=[],O=new Map,I;v=new le({props:{text:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",type:"button",classList:"btn"}}),v.$on("click",t[4]);let F=t[3].columns;const re=k=>k[12].id;for(let k=0;k<F.length;k+=1){let C=ze(t,F,k),M=re(C);O.set(M,y[k]=Xe(M,C))}return{c(){e=w("div"),n=w("div"),l=w("h2"),l.textContent="\u041F\u0440\u043E\u0435\u043A\u0442\u044B",s=P(),i=w("img"),c=P(),u=w("p"),u.innerHTML='<span class="text-light">CRM - \u0441\u0438\u0441\u0442\u0435\u043C\u0430 /</span> \u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B',o=P(),f=w("div"),a=w("div"),d=w("img"),g=P(),A=w("h4"),A.textContent="\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430 CRM - \u0441\u0438\u0441\u0442\u0435\u043C\u0430",b=P(),Q(v.$$.fragment),E=P(),p=w("hr"),S=P(),R=w("div");for(let k=0;k<y.length;k+=1)y[k].c();m(l,"class","entity__title svelte-16dep7w"),K(i.src,r=bn)||m(i,"src",r),m(i,"alt",""),m(u,"class","breadcrumbs svelte-16dep7w"),m(n,"class","entity__header flex align-c svelte-16dep7w"),K(d.src,_=vn)||m(d,"src",_),m(d,"alt",""),m(A,"class","board__title text-medium svelte-16dep7w"),m(a,"class","flex"),m(f,"class","board__header flex align-c svelte-16dep7w"),m(p,"class","divider svelte-16dep7w"),m(R,"class","board__columns flex svelte-16dep7w")},m(k,C){T(k,e,C),h(e,n),h(n,l),h(n,s),h(n,i),h(n,c),h(n,u),h(e,o),h(e,f),h(f,a),h(a,d),h(a,g),h(a,A),h(f,b),H(v,f,null),h(e,E),h(e,p),h(e,S),h(e,R);for(let M=0;M<y.length;M+=1)y[M].m(R,null);I=!0},p(k,[C]){C&239&&(F=k[3].columns,Ee(),y=mt(y,C,re,1,k,F,O,R,dt,Xe,null,ze),Se())},i(k){if(!I){B(v.$$.fragment,k);for(let C=0;C<F.length;C+=1)B(y[C]);I=!0}},o(k){U(v.$$.fragment,k);for(let C=0;C<y.length;C+=1)U(y[C]);I=!1},d(k){k&&L(e),J(v);for(let C=0;C<y.length;C+=1)y[C].d()}}}function kn(t,e,n){let l;de(t,x,A=>n(3,l=A));const s=()=>z.set(Vt);let i,r,c,u;const o=A=>{c=A},f=()=>{if(r!==i){const A=l.tasks.findIndex(v=>v.id===c),[b]=l.tasks.splice(A,1);b.columnId=i,l.tasks.push(b),x.update(v=>v)}clearTimeout(u),n(0,i=null)},a=A=>{A!==i&&n(0,i=A)};return[i,r,u,l,s,o,f,a,A=>n(1,r=A.id),A=>{clearTimeout(u),a(A.id)},()=>{clearTimeout(u),n(2,u=setTimeout(A=>n(0,i=r),100))}]}class An extends N{constructor(e){super(),V(this,e,kn,yn,D,{})}}function We(t){let e,n,l;var s=t[0];function i(r){return{}}return s&&(e=new s(i())),{c(){e&&Q(e.$$.fragment),n=at()},m(r,c){e&&H(e,r,c),T(r,n,c),l=!0},p(r,c){if(s!==(s=r[0])){if(e){Ee();const u=e;U(u.$$.fragment,1,0,()=>{J(u,1)}),Se()}s?(e=new s(i()),Q(e.$$.fragment),B(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}},i(r){l||(e&&B(e.$$.fragment,r),l=!0)},o(r){e&&U(e.$$.fragment,r),l=!1},d(r){r&&L(n),e&&J(e,r)}}}function wn(t){let e,n,l,s,i;n=new An({});let r=t[0]&&We(t);return{c(){e=w("main"),Q(n.$$.fragment),l=P(),r&&r.c(),s=at(),m(e,"class","svelte-rglg60")},m(c,u){T(c,e,u),H(n,e,null),T(c,l,u),r&&r.m(c,u),T(c,s,u),i=!0},p(c,[u]){c[0]?r?(r.p(c,u),u&1&&B(r,1)):(r=We(c),r.c(),B(r,1),r.m(s.parentNode,s)):r&&(Ee(),U(r,1,1,()=>{r=null}),Se())},i(c){i||(B(n.$$.fragment,c),B(r),i=!0)},o(c){U(n.$$.fragment,c),U(r),i=!1},d(c){c&&L(e),J(n),c&&L(l),r&&r.d(c),c&&L(s)}}}function Cn(t,e,n){x.subscribe(s=>{x.setStorage(s)});let l;return z.subscribe(s=>{n(0,l=s)}),[l]}class En extends N{constructor(e){super(),V(this,e,Cn,wn,D,{})}}new En({target:document.getElementById("app")});
