import{d as e,S as t,I as r,a as s,s as n,m as a,b as o,i,c as d,e as l,p as c,f as u,T as p,g,h as m,j as f,k as v,l as h,n as E,o as y,q as w,D,r as $,t as T,u as O,v as x,w as L,x as b,y as R,z as _,A as I,B as A,C as P,E as N,F,G as C,H as S,J as M,K as G,L as j,M as k,N as V,O as Y,P as z,Q as X,R as H,U as q,V as U,W as Z,X as B,Y as W,Z as J,_ as K,$ as Q,a0 as ee,a1 as te,a2 as re,a3 as se,a4 as ne,a5 as ae,a6 as oe,a7 as ie,a8 as de,a9 as le,aa as ce,ab as ue,ac as pe,ad as ge,ae as me,af as fe}from"./client.ed30a912.js";import{f as ve,P as he,T as Ee,R as ye,e as we,a as De}from"./constants.a7e7fa1a.js";import{P as $e}from"./PlusIcon.aca02d75.js";const Te={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let Oe,xe,Le,be,Re,_e,Ie,Ae,Pe,Ne,Fe,Ce=!1,Se=!1,Me=!1;const Ge=new Map,je=new Map,ke=new WeakMap;function Ve(t,r){Ge.get(r).delete(t),e(),0===Ge.get(r).size&&Ge.delete(r)}function Ye(e){return e.findIndex((e=>!!e[t]&&e[r]!==s))}function ze(e){let{items:n,dropFromOthersDisabled:a}=je.get(e.currentTarget);if(a&&e.currentTarget!==Re)return;if(Me=!1,n=n.filter((e=>e[r]!==Ie[r])),Re!==e.currentTarget){const e=je.get(Re).items.filter((e=>!e[t]));u(Re,e,{trigger:p.DRAGGED_ENTERED_ANOTHER,id:Le[r],source:g.POINTER})}else{const e=function(e){return e.findIndex((e=>e[r]===s))}(n);-1!==e&&n.splice(e,1)}const{index:o,isProximityBased:i}=e.detail.indexObj,d=i&&o===e.currentTarget.children.length-1?o+1:o;Ae=e.currentTarget,n.splice(d,0,Ie),u(e.currentTarget,n,{trigger:p.DRAGGED_ENTERED,id:Le[r],source:g.POINTER})}function Xe(e){if(!Ce)return;const{items:t,dropFromOthersDisabled:s}=je.get(e.currentTarget);if(s&&e.currentTarget!==Re)return;const n=Ye(t),a=t.splice(n,1)[0];Ae=void 0;const{type:o,theOtherDz:i}=e.detail;if(o===R.OUTSIDE_OF_ANY||o===R.LEFT_FOR_ANOTHER&&i!==Re&&je.get(i).dropFromOthersDisabled){Me=!0,Ae=Re;const e=je.get(Re).items;e.splice(_e,0,a),u(Re,e,{trigger:p.DRAGGED_LEFT_ALL,id:Le[r],source:g.POINTER})}u(e.currentTarget,t,{trigger:p.DRAGGED_LEFT,id:Le[r],source:g.POINTER})}function He(e){const{items:t,dropFromOthersDisabled:s}=je.get(e.currentTarget);if(s&&e.currentTarget!==Re)return;Me=!1;const{index:n}=e.detail.indexObj,a=Ye(t);t.splice(a,1),t.splice(n,0,Ie),u(e.currentTarget,t,{trigger:p.DRAGGED_OVER_INDEX,id:Le[r],source:g.POINTER})}function qe(e){e.preventDefault();const t=e.touches?e.touches[0]:e;Ne={x:t.clientX,y:t.clientY},xe.style.transform=`translate3d(${Ne.x-Pe.x}px, ${Ne.y-Pe.y}px, 0)`}function Ue(){Se=!0,window.removeEventListener("mousemove",qe),window.removeEventListener("touchmove",qe),window.removeEventListener("mouseup",Ue),window.removeEventListener("touchend",Ue),function(){L();const e=Ge.get(be);for(const t of e)t.removeEventListener(D,ze),t.removeEventListener($,Xe),t.removeEventListener(T,He);window.removeEventListener(O,Ue),b()}(),h(xe),Ae||(Ae=Re);let{items:e,type:s}=je.get(Ae);v(Ge.get(s),(e=>je.get(e).dropTargetStyle),(e=>je.get(e).dropTargetClasses));let n=Ye(e);-1===n&&(n=_e),e=e.map((e=>e[t]?Le:e)),function(e,t){const r=E(Ae.children[e]),s={x:r.left-parseFloat(xe.style.left),y:r.top-parseFloat(xe.style.top)},{dropAnimationDurationMs:n}=je.get(Ae),a=`transform ${n}ms ease`;xe.style.transition=xe.style.transition?xe.style.transition+","+a:a,xe.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,window.setTimeout(t,n)}(n,(function(){Fe(),_(Ae,e,{trigger:Me?p.DROPPED_OUTSIDE_OF_ANY:p.DROPPED_INTO_ZONE,id:Le[r],source:g.POINTER}),Ae!==Re&&_(Re,je.get(Re).items,{trigger:p.DROPPED_INTO_ANOTHER,id:Le[r],source:g.POINTER}),I(Ae.children[n]),xe.remove(),Oe.remove(),xe=void 0,Oe=void 0,Le=void 0,be=void 0,Re=void 0,_e=void 0,Ie=void 0,Ae=void 0,Pe=void 0,Ne=void 0,Ce=!1,Se=!1,Fe=void 0,Me=!1}))}function Ze(e,h){const E={items:void 0,type:void 0,flipDurationMs:0,dragDisabled:!1,dropFromOthersDisabled:!1,dropTargetStyle:Te,dropTargetClasses:[],transformDraggedElement:()=>{},centreDraggedOnCursor:!1};let L=new Map;function b(){window.removeEventListener("mousemove",_),window.removeEventListener("touchmove",_),window.removeEventListener("mouseup",R),window.removeEventListener("touchend",R)}function R(){b(),Oe=void 0,Pe=void 0,Ne=void 0}function _(e){e.preventDefault();const n=e.touches?e.touches[0]:e;Ne={x:n.clientX,y:n.clientY},(Math.abs(Ne.x-Pe.x)>=3||Math.abs(Ne.y-Pe.y)>=3)&&(b(),function(){Ce=!0;const e=L.get(Oe);_e=e,Re=Oe.parentElement;const{items:n,type:a,centreDraggedOnCursor:o}=E;Le={...n[e]},be=a,Ie={...Le,[t]:!0};const i={...Ie,[r]:s};function m(){xe.parentElement?window.requestAnimationFrame(m):(document.body.appendChild(xe),xe.focus(),function(){w();const e=Ge.get(be);for(const t of e)t.addEventListener(D,ze),t.addEventListener($,Xe),t.addEventListener(T,He);window.addEventListener(O,Ue);const t=Math.max(100,...Array.from(e.keys()).map((e=>je.get(e).dropAnimationDurationMs)));x(xe,e,1.07*t)}(),y(Oe),document.body.appendChild(Oe))}xe=d(Oe,o&&Ne),window.requestAnimationFrame(m),l(Array.from(Ge.get(E.type)).filter((e=>e===Re||!je.get(e).dropFromOthersDisabled)),(e=>je.get(e).dropTargetStyle),(e=>je.get(e).dropTargetClasses)),n.splice(e,1,i),Fe=c(Re),u(Re,n,{trigger:p.DRAG_STARTED,id:Le[r],source:g.POINTER}),window.addEventListener("mousemove",qe,{passive:!1}),window.addEventListener("touchmove",qe,{passive:!1,capture:!1}),window.addEventListener("mouseup",Ue,{passive:!1}),window.addEventListener("touchend",Ue,{passive:!1})}())}function I(e){if(e.target!==e.currentTarget&&(void 0!==e.target.value||e.target.isContentEditable))return;if(e.button)return;if(Ce)return;e.stopPropagation();const t=e.touches?e.touches[0]:e;Pe={x:t.clientX,y:t.clientY},Ne={...Pe},Oe=e.currentTarget,window.addEventListener("mousemove",_,{passive:!1}),window.addEventListener("touchmove",_,{passive:!1,capture:!1}),window.addEventListener("mouseup",R,{passive:!1}),window.addEventListener("touchend",R,{passive:!1})}function A({items:t,flipDurationMs:r=0,type:s="--any--",dragDisabled:d=!1,dropFromOthersDisabled:c=!1,dropTargetStyle:u=Te,dropTargetClasses:p=[],transformDraggedElement:g=(()=>{}),centreDraggedOnCursor:h=!1}){var y,w;E.dropAnimationDurationMs=r,E.type&&s!==E.type&&Ve(e,E.type),E.type=s,y=e,w=s,Ge.has(w)||Ge.set(w,new Set),Ge.get(w).has(y)||(Ge.get(w).add(y),i()),E.items=[...t],E.dragDisabled=d,E.transformDraggedElement=g,E.centreDraggedOnCursor=h,!Ce||Se||m(u,E.dropTargetStyle)&&f(p,E.dropTargetClasses)||(v([e],(()=>E.dropTargetStyle),(()=>p)),l([e],(()=>u),(()=>p))),E.dropTargetStyle=u,E.dropTargetClasses=[...p],Ce&&E.dropFromOthersDisabled!==c&&(c?v([e],(e=>je.get(e).dropTargetStyle),(e=>je.get(e).dropTargetClasses)):l([e],(e=>je.get(e).dropTargetStyle),(e=>je.get(e).dropTargetClasses))),E.dropFromOthersDisabled=c,je.set(e,E);const D=Ye(E.items);for(let t=0;t<e.children.length;t++){const r=e.children[t];n(r,d),t!==D?(r.removeEventListener("mousedown",ke.get(r)),r.removeEventListener("touchstart",ke.get(r)),d||(r.addEventListener("mousedown",I),r.addEventListener("touchstart",I),ke.set(r,I)),L.set(r,t)):(a(xe,r,Ne.x,Ne.y,(()=>E.transformDraggedElement(xe,Le,t))),o(r))}}return A(h),{update:e=>{A(e)},destroy:()=>{Ve(e,E.type),je.delete(e)}}}function Be(e,t){We(t);const r=Ze(e,t),s=A(e,t);return{update:e=>{We(e),r.update(e),s.update(e)},destroy:()=>{r.destroy(),s.destroy()}}}function We(e){const{items:t,flipDurationMs:s,type:n,dragDisabled:a,dropFromOthersDisabled:o,dropTargetStyle:i,dropTargetClasses:d,transformDraggedElement:l,autoAriaDisabled:c,centreDraggedOnCursor:u,...p}=e;if(Object.keys(p).length>0&&console.warn("dndzone will ignore unknown options",p),!t)throw new Error("no 'items' key provided to dndzone");const g=t.find((e=>!{}.hasOwnProperty.call(e,r)));if(g)throw new Error(`missing '${r}' property for item ${P(g)}`);if(d&&!Array.isArray(d))throw new Error(`dropTargetClasses should be an array but instead it is a ${typeof d}, ${P(d)}`)}function Je(e){let t,r,s,n,a,o,i,d,l,c,u,p,g=ve(e[3])+"";return{c(){t=S("div"),r=S("div"),s=M(e[1]),n=G(),a=S("div"),o=S("div"),i=M(e[2]),d=G(),l=S("div"),c=M(g),this.h()},l(u){t=j(u,"DIV",{id:!0,class:!0});var p=k(t);r=j(p,"DIV",{class:!0});var m=k(r);s=V(m,e[1]),m.forEach(Y),n=z(p),a=j(p,"DIV",{class:!0});var f=k(a);o=j(f,"DIV",{class:!0});var v=k(o);i=V(v,e[2]),v.forEach(Y),d=z(f),l=j(f,"DIV",{class:!0});var h=k(l);c=V(h,g),h.forEach(Y),f.forEach(Y),p.forEach(Y),this.h()},h(){X(r,"class","text-5xl"),X(o,"class","text-2xl"),X(l,"class","font-mono text-base"),X(a,"class","text-dark flex flex-col"),X(t,"id",e[0]),X(t,"class","bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2")},m(g,m){H(g,t,m),q(t,r),q(r,s),q(t,n),q(t,a),q(a,o),q(o,i),q(a,d),q(a,l),q(l,c),u||(p=U(t,"click",e[5]),u=!0)},p(e,[r]){2&r&&Z(s,e[1]),4&r&&Z(i,e[2]),8&r&&g!==(g=ve(e[3])+"")&&Z(c,g),1&r&&X(t,"id",e[0])},i:B,o:B,d(e){e&&Y(t),u=!1,p()}}}function Ke(e,t,r){let{_id:s}=t,{emoji:n="💵"}=t,{name:a="Envelope"}=t,{value:o=0}=t,{transactions:i=[]}=t;return e.$$set=e=>{"_id"in e&&r(0,s=e._id),"emoji"in e&&r(1,n=e.emoji),"name"in e&&r(2,a=e.name),"value"in e&&r(3,o=e.value),"transactions"in e&&r(4,i=e.transactions)},[s,n,a,o,i,function(t){W(e,t)}]}class Qe extends N{constructor(e){super(),F(this,e,Ke,Je,C,{_id:0,emoji:1,name:2,value:3,transactions:4})}}function et(e,t,r){const s=e.slice();return s[6]=t[r],s}function tt(e){let t,r,s,n,a,o;return s=new $e({props:{size:"20"}}),{c(){t=M("LOPY\n    "),r=S("div"),J(s.$$.fragment),this.h()},l(e){t=V(e,"LOPY\n    "),r=j(e,"DIV",{class:!0});var n=k(r);K(s.$$.fragment,n),n.forEach(Y),this.h()},h(){X(r,"class","cursor-pointer")},m(i,d){H(i,t,d),H(i,r,d),Q(s,r,null),n=!0,a||(o=U(r,"click",e[3]),a=!0)},p:B,i(e){n||(ee(s.$$.fragment,e),n=!0)},o(e){te(s.$$.fragment,e),n=!1},d(e){e&&Y(t),e&&Y(r),re(s),a=!1,o()}}}function rt(e,t){let r,s,n,a;const o=[t[6]];let i={};for(let e=0;e<o.length;e+=1)i=me(i,o[e]);return s=new Qe({props:i}),s.$on("click",(function(){return t[4](t[6])})),{key:e,first:null,c(){r=S("span"),J(s.$$.fragment),n=G(),this.h()},l(e){r=j(e,"SPAN",{class:!0});var t=k(r);K(s.$$.fragment,t),n=z(t),t.forEach(Y),this.h()},h(){X(r,"class","outline-none cursor-unset"),this.first=r},m(e,t){H(e,r,t),Q(s,r,null),q(r,n),a=!0},p(e,r){t=e;const n=1&r?ne(o,[ae(t[6])]):{};s.$set(n)},i(e){a||(ee(s.$$.fragment,e),a=!0)},o(e){te(s.$$.fragment,e),a=!1},d(e){e&&Y(r),re(s)}}}function st(e){let t,r,s,n,a,o,i,d=[],l=new Map;t=new Ee({props:{$$slots:{default:[tt]},$$scope:{ctx:e}}});let c=e[0];const u=e=>e[6]._id;for(let t=0;t<c.length;t+=1){let r=et(e,c,t),s=u(r);l.set(s,d[t]=rt(s,r))}return{c(){J(t.$$.fragment),r=G(),s=S("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){K(t.$$.fragment,e),r=z(e),s=j(e,"DIV",{class:!0});var n=k(s);for(let e=0;e<d.length;e+=1)d[e].l(n);n.forEach(Y),this.h()},h(){X(s,"class","w-full p-4 flex flex-col space-y-3")},m(l,c){Q(t,l,c),H(l,r,c),H(l,s,c);for(let e=0;e<d.length;e+=1)d[e].m(s,null);a=!0,o||(i=[oe(n=Be.call(null,s,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"}})),U(s,"consider",e[2]),U(s,"finalize",e[2])],o=!0)},p(e,r){const a={};512&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a),3&r&&(c=e[0],ie(),d=de(d,r,u,1,e,c,l,s,fe,rt,null,et),le()),n&&ce(n.update)&&1&r&&n.update.call(null,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"}})},i(e){if(!a){ee(t.$$.fragment,e);for(let e=0;e<c.length;e+=1)ee(d[e]);a=!0}},o(e){te(t.$$.fragment,e);for(let e=0;e<d.length;e+=1)te(d[e]);a=!1},d(e){re(t,e),e&&Y(r),e&&Y(s);for(let e=0;e<d.length;e+=1)d[e].d();o=!1,ue(i)}}}function nt(e){let t,r;return t=new he({props:{$$slots:{default:[st]},$$scope:{ctx:e}}}),{c(){J(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){Q(t,e,s),r=!0},p(e,[r]){const s={};513&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(ee(t.$$.fragment,e),r=!0)},o(e){te(t.$$.fragment,e),r=!1},d(e){re(t,e)}}}function at(e,t,r){let s,n;se(e,we,(e=>r(0,s=e))),se(e,De,(e=>r(5,n=e)));const a=e=>{pe(`${ye.ENVELOPE}/${e._id}`)};return[s,a,({detail:e})=>{ge(we,s=e.items,s),"droppedIntoZone"===e.info.trigger&&n.reorderEnvelopes(e.items)},()=>pe(`${ye.EDIT}/new`),e=>a(e)]}export default class extends N{constructor(e){super(),F(this,e,at,nt,C,{})}}
