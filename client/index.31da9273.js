import{d as e,S as t,I as r,a as s,s as n,m as o,b as a,i,c as d,e as l,p as c,f as u,T as p,g,h as m,j as f,k as v,l as E,n as h,o as D,q as w,D as y,r as T,t as $,u as O,v as x,w as L,x as b,y as P,z as R,A as S,B as _,C as A,E as I,F as N,G as F,H as C,J as M,K as G,L as k,M as V,N as j,O as Y,P as z,Q as X,R as H,U as q,V as U,W as Z,X as B,Y as W,Z as J,_ as K,$ as Q,a0 as ee,a1 as te,a2 as re,a3 as se,a4 as ne,a5 as oe,a6 as ae,a7 as ie,a8 as de,a9 as le,aa as ce,ab as ue}from"./client.ecee7131.js";import{f as pe,P as ge,T as me,R as fe,e as ve,a as Ee}from"./constants.23d62a88.js";import{l as he,P as De}from"./longpress.ae1ba7b6.js";const we={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let ye,Te,$e,Oe,xe,Le,be,Pe,Re,Se,_e,Ae=!1,Ie=!1,Ne=!1;const Fe=new Map,Ce=new Map,Me=new WeakMap;function Ge(t,r){Fe.get(r).delete(t),e(),0===Fe.get(r).size&&Fe.delete(r)}function ke(e){return e.findIndex((e=>!!e[t]&&e[r]!==s))}function Ve(e){let{items:n,dropFromOthersDisabled:o}=Ce.get(e.currentTarget);if(o&&e.currentTarget!==xe)return;if(Ne=!1,n=n.filter((e=>e[r]!==be[r])),xe!==e.currentTarget){const e=Ce.get(xe).items.filter((e=>!e[t]));u(xe,e,{trigger:p.DRAGGED_ENTERED_ANOTHER,id:$e[r],source:g.POINTER})}else{const e=function(e){return e.findIndex((e=>e[r]===s))}(n);-1!==e&&n.splice(e,1)}const{index:a,isProximityBased:i}=e.detail.indexObj,d=i&&a===e.currentTarget.children.length-1?a+1:a;Pe=e.currentTarget,n.splice(d,0,be),u(e.currentTarget,n,{trigger:p.DRAGGED_ENTERED,id:$e[r],source:g.POINTER})}function je(e){if(!Ae)return;const{items:t,dropFromOthersDisabled:s}=Ce.get(e.currentTarget);if(s&&e.currentTarget!==xe)return;const n=ke(t),o=t.splice(n,1)[0];Pe=void 0;const{type:a,theOtherDz:i}=e.detail;if(a===P.OUTSIDE_OF_ANY||a===P.LEFT_FOR_ANOTHER&&i!==xe&&Ce.get(i).dropFromOthersDisabled){Ne=!0,Pe=xe;const e=Ce.get(xe).items;e.splice(Le,0,o),u(xe,e,{trigger:p.DRAGGED_LEFT_ALL,id:$e[r],source:g.POINTER})}u(e.currentTarget,t,{trigger:p.DRAGGED_LEFT,id:$e[r],source:g.POINTER})}function Ye(e){const{items:t,dropFromOthersDisabled:s}=Ce.get(e.currentTarget);if(s&&e.currentTarget!==xe)return;Ne=!1;const{index:n}=e.detail.indexObj,o=ke(t);t.splice(o,1),t.splice(n,0,be),u(e.currentTarget,t,{trigger:p.DRAGGED_OVER_INDEX,id:$e[r],source:g.POINTER})}function ze(e){e.preventDefault();const t=e.touches?e.touches[0]:e;Se={x:t.clientX,y:t.clientY},console.log("currentMousePosition",Se),Te.style.transform=`translate3d(${Se.x-Re.x}px, ${Se.y-Re.y}px, 0)`}function Xe(){Ie=!0,window.removeEventListener("mousemove",ze),window.removeEventListener("touchmove",ze),window.removeEventListener("mouseup",Xe),window.removeEventListener("touchend",Xe),function(){L();const e=Fe.get(Oe);for(const t of e)t.removeEventListener(y,Ve),t.removeEventListener(T,je),t.removeEventListener($,Ye);window.removeEventListener(O,Xe),b()}(),E(Te),Pe||(Pe=xe);let{items:e,type:s}=Ce.get(Pe);v(Fe.get(s),(e=>Ce.get(e).dropTargetStyle),(e=>Ce.get(e).dropTargetClasses));let n=ke(e);-1===n&&(n=Le),e=e.map((e=>e[t]?$e:e)),function(e,t){const r=h(Pe.children[e]),s={x:r.left-parseFloat(Te.style.left),y:r.top-parseFloat(Te.style.top)},{dropAnimationDurationMs:n}=Ce.get(Pe),o=`transform ${n}ms ease`;Te.style.transition=Te.style.transition?Te.style.transition+","+o:o,Te.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,window.setTimeout(t,n)}(n,(function(){_e(),R(Pe,e,{trigger:Ne?p.DROPPED_OUTSIDE_OF_ANY:p.DROPPED_INTO_ZONE,id:$e[r],source:g.POINTER}),Pe!==xe&&R(xe,Ce.get(xe).items,{trigger:p.DROPPED_INTO_ANOTHER,id:$e[r],source:g.POINTER}),S(Pe.children[n]),Te.remove(),ye.remove(),Te=void 0,ye=void 0,$e=void 0,Oe=void 0,xe=void 0,Le=void 0,be=void 0,Pe=void 0,Re=void 0,Se=void 0,Ae=!1,Ie=!1,_e=void 0,Ne=!1}))}function He(e,E){const h={items:void 0,type:void 0,flipDurationMs:0,dragDisabled:!1,dropFromOthersDisabled:!1,dropTargetStyle:we,dropTargetClasses:[],transformDraggedElement:()=>{},centreDraggedOnCursor:!1,customStartEvent:""};let L=new Map;function b(){window.removeEventListener("mousemove",R),window.removeEventListener("touchmove",R),window.removeEventListener("mouseup",P),window.removeEventListener("touchend",P)}function P(){b(),ye=void 0,Re=void 0,Se=void 0}function R(e){e.preventDefault();const t=e.touches?e.touches[0]:e;Se={x:t.clientX,y:t.clientY},(Math.abs(Se.x-Re.x)>=3||Math.abs(Se.y-Re.y)>=3)&&(b(),A())}function S(e){if(e.target!==e.currentTarget&&(void 0!==e.target.value||e.target.isContentEditable))return;if(e.button)return;if(Ae)return;e.stopPropagation();const t=e.touches?e.touches[0]:e;Re={x:t.clientX,y:t.clientY},Se={...Re},ye=e.currentTarget,window.addEventListener("mousemove",R,{passive:!1}),window.addEventListener("touchmove",R,{passive:!1,capture:!1}),window.addEventListener("mouseup",P,{passive:!1}),window.addEventListener("touchend",P,{passive:!1})}function _(e){ye=e.currentTarget,e.detail&&e.detail.startDragPosition&&(Re=e.detail.startDragPosition,Se={...Re},A())}function A(){Ae=!0;const e=L.get(ye);Le=e,xe=ye.parentElement;const{items:n,type:o,centreDraggedOnCursor:a}=h;$e={...n[e]},Oe=o,be={...$e,[t]:!0};const i={...be,[r]:s};Te=d(ye,a&&Se),window.requestAnimationFrame((function e(){Te.parentElement?window.requestAnimationFrame(e):(document.body.appendChild(Te),Te.focus(),function(){w();const e=Fe.get(Oe);for(const t of e)t.addEventListener(y,Ve),t.addEventListener(T,je),t.addEventListener($,Ye);window.addEventListener(O,Xe);const t=Math.max(100,...Array.from(e.keys()).map((e=>Ce.get(e).dropAnimationDurationMs)));x(Te,e,1.07*t)}(),D(ye),document.body.appendChild(ye))})),l(Array.from(Fe.get(h.type)).filter((e=>e===xe||!Ce.get(e).dropFromOthersDisabled)),(e=>Ce.get(e).dropTargetStyle),(e=>Ce.get(e).dropTargetClasses)),n.splice(e,1,i),_e=c(xe),u(xe,n,{trigger:p.DRAG_STARTED,id:$e[r],source:g.POINTER}),window.addEventListener("mousemove",ze,{passive:!1}),window.addEventListener("touchmove",ze,{passive:!1,capture:!1}),window.addEventListener("mouseup",Xe,{passive:!1}),window.addEventListener("touchend",Xe,{passive:!1})}function I({items:t,flipDurationMs:r=0,type:s="--any--",dragDisabled:d=!1,dropFromOthersDisabled:c=!1,dropTargetStyle:u=we,dropTargetClasses:p=[],transformDraggedElement:g=(()=>{}),centreDraggedOnCursor:E=!1,customStartEvent:D=""}){var w,y;h.dropAnimationDurationMs=r,h.type&&s!==h.type&&Ge(e,h.type),h.type=s,w=e,y=s,Fe.has(y)||Fe.set(y,new Set),Fe.get(y).has(w)||(Fe.get(y).add(w),i()),h.items=[...t],h.dragDisabled=d,h.transformDraggedElement=g,h.centreDraggedOnCursor=E,h.customStartEvent=D,!Ae||Ie||m(u,h.dropTargetStyle)&&f(p,h.dropTargetClasses)||(v([e],(()=>h.dropTargetStyle),(()=>p)),l([e],(()=>u),(()=>p))),h.dropTargetStyle=u,h.dropTargetClasses=[...p],Ae&&h.dropFromOthersDisabled!==c&&(c?v([e],(e=>Ce.get(e).dropTargetStyle),(e=>Ce.get(e).dropTargetClasses)):l([e],(e=>Ce.get(e).dropTargetStyle),(e=>Ce.get(e).dropTargetClasses))),h.dropFromOthersDisabled=c,Ce.set(e,h);const T=ke(h.items);for(let t=0;t<e.children.length;t++){const r=e.children[t];n(r,d),t!==T?(h.customStartEvent?r.removeEventListener(h.customStartEvent,Me.get(r)):(r.removeEventListener("mousedown",Me.get(r)),r.removeEventListener("touchstart",Me.get(r))),d||(h.customStartEvent?r.addEventListener(h.customStartEvent,_):(r.addEventListener("mousedown",S),r.addEventListener("touchstart",S)),Me.set(r,S)),L.set(r,t)):(o(Te,r,Se.x,Se.y,(()=>h.transformDraggedElement(Te,$e,t))),a(r))}}return I(E),{update:e=>{I(e)},destroy:()=>{Ge(e,h.type),Ce.delete(e)}}}function qe(e,t){Ue(t);const r=He(e,t),s=_(e,t);return{update:e=>{Ue(e),r.update(e),s.update(e)},destroy:()=>{r.destroy(),s.destroy()}}}function Ue(e){const{items:t,flipDurationMs:s,type:n,dragDisabled:o,dropFromOthersDisabled:a,dropTargetStyle:i,dropTargetClasses:d,transformDraggedElement:l,autoAriaDisabled:c,centreDraggedOnCursor:u,customStartEvent:p,...g}=e;if(Object.keys(g).length>0&&console.warn("dndzone will ignore unknown options",g),!t)throw new Error("no 'items' key provided to dndzone");const m=t.find((e=>!{}.hasOwnProperty.call(e,r)));if(m)throw new Error(`missing '${r}' property for item ${A(m)}`);if(d&&!Array.isArray(d))throw new Error(`dropTargetClasses should be an array but instead it is a ${typeof d}, ${A(d)}`)}function Ze(e){let t,r,s,n,o,a,i,d,l,c,u,p,g=pe(e[3])+"";return{c(){t=C("div"),r=C("div"),s=M(e[1]),n=G(),o=C("div"),a=C("div"),i=M(e[2]),d=G(),l=C("div"),c=M(g),this.h()},l(u){t=k(u,"DIV",{id:!0,class:!0});var p=V(t);r=k(p,"DIV",{class:!0});var m=V(r);s=j(m,e[1]),m.forEach(Y),n=z(p),o=k(p,"DIV",{class:!0});var f=V(o);a=k(f,"DIV",{class:!0});var v=V(a);i=j(v,e[2]),v.forEach(Y),d=z(f),l=k(f,"DIV",{class:!0});var E=V(l);c=j(E,g),E.forEach(Y),f.forEach(Y),p.forEach(Y),this.h()},h(){X(r,"class","text-5xl"),X(a,"class","text-2xl truncate"),X(l,"class","font-mono text-base"),X(o,"class","text-dark flex flex-col overflow-hidden"),X(t,"id",e[0]),X(t,"class","bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2")},m(g,m){H(g,t,m),q(t,r),q(r,s),q(t,n),q(t,o),q(o,a),q(a,i),q(o,d),q(o,l),q(l,c),u||(p=U(t,"click",e[5]),u=!0)},p:Z,i:Z,o:Z,d(e){e&&Y(t),u=!1,p()}}}function Be(e,t,r){let{envelope:s}=t,{_id:n,emoji:o,name:a,value:i}=s;return e.$$set=e=>{"envelope"in e&&r(4,s=e.envelope)},[n,o,a,i,s,function(t){B(e,t)}]}class We extends I{constructor(e){super(),N(this,e,Be,Ze,F,{envelope:4})}}function Je(e,t,r){const s=e.slice();return s[6]=t[r],s}function Ke(e){let t,r,s,n,o,a;return s=new De({props:{size:"20"}}),{c(){t=M("LOPY\n    "),r=C("div"),W(s.$$.fragment),this.h()},l(e){t=j(e,"LOPY\n    "),r=k(e,"DIV",{class:!0});var n=V(r);J(s.$$.fragment,n),n.forEach(Y),this.h()},h(){X(r,"class","cursor-pointer")},m(i,d){H(i,t,d),H(i,r,d),K(s,r,null),n=!0,o||(a=U(r,"click",e[3]),o=!0)},p:Z,i(e){n||(Q(s.$$.fragment,e),n=!0)},o(e){ee(s.$$.fragment,e),n=!1},d(e){e&&Y(t),e&&Y(r),te(s),o=!1,a()}}}function Qe(e,t){let r,s,n,o,a,i;return s=new We({props:{envelope:t[6]}}),s.$on("click",(function(){return t[4](t[6])})),{key:e,first:null,c(){r=C("span"),W(s.$$.fragment),n=G(),this.h()},l(e){r=k(e,"SPAN",{class:!0});var t=V(r);J(s.$$.fragment,t),n=z(t),t.forEach(Y),this.h()},h(){X(r,"class","outline-none cursor-unset"),this.first=r},m(e,t){H(e,r,t),K(s,r,null),q(r,n),o=!0,a||(i=se(he.call(null,r)),a=!0)},p(e,r){t=e;const n={};1&r&&(n.envelope=t[6]),s.$set(n)},i(e){o||(Q(s.$$.fragment,e),o=!0)},o(e){ee(s.$$.fragment,e),o=!1},d(e){e&&Y(r),te(s),a=!1,i()}}}function et(e){let t,r,s,n,o,a,i,d=[],l=new Map;t=new me({props:{$$slots:{default:[Ke]},$$scope:{ctx:e}}});let c=e[0];const u=e=>e[6]._id;for(let t=0;t<c.length;t+=1){let r=Je(e,c,t),s=u(r);l.set(s,d[t]=Qe(s,r))}return{c(){W(t.$$.fragment),r=G(),s=C("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){J(t.$$.fragment,e),r=z(e),s=k(e,"DIV",{class:!0});var n=V(s);for(let e=0;e<d.length;e+=1)d[e].l(n);n.forEach(Y),this.h()},h(){X(s,"class","w-full p-4 flex flex-col space-y-3")},m(l,c){K(t,l,c),H(l,r,c),H(l,s,c);for(let e=0;e<d.length;e+=1)d[e].m(s,null);o=!0,a||(i=[se(n=qe.call(null,s,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"},customStartEvent:"longpress"})),U(s,"consider",e[2]),U(s,"finalize",e[2])],a=!0)},p(e,r){const o={};512&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o),3&r&&(c=e[0],ne(),d=oe(d,r,u,1,e,c,l,s,ue,Qe,null,Je),ae()),n&&ie(n.update)&&1&r&&n.update.call(null,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"},customStartEvent:"longpress"})},i(e){if(!o){Q(t.$$.fragment,e);for(let e=0;e<c.length;e+=1)Q(d[e]);o=!0}},o(e){ee(t.$$.fragment,e);for(let e=0;e<d.length;e+=1)ee(d[e]);o=!1},d(e){te(t,e),e&&Y(r),e&&Y(s);for(let e=0;e<d.length;e+=1)d[e].d();a=!1,de(i)}}}function tt(e){let t,r;return t=new ge({props:{$$slots:{default:[et]},$$scope:{ctx:e}}}),{c(){W(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,s){K(t,e,s),r=!0},p(e,[r]){const s={};513&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(Q(t.$$.fragment,e),r=!0)},o(e){ee(t.$$.fragment,e),r=!1},d(e){te(t,e)}}}function rt(e,t,r){let s,n;re(e,ve,(e=>r(0,s=e))),re(e,Ee,(e=>r(5,n=e)));const o=e=>{le(`${fe.ENVELOPE}/${e._id}`)};return[s,o,({detail:e})=>{ce(ve,s=e.items,s),e.info.trigger===p.DROPPED_INTO_ZONE&&n.reorderEnvelopes(e.items)},()=>le(`${fe.EDIT}/new`),e=>o(e)]}export default class extends I{constructor(e){super(),N(this,e,rt,tt,F,{})}}
