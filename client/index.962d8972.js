import{d as e,S as t,I as r,a as s,s as n,m as a,b as o,i,c as d,e as l,p as c,f as u,T as p,g,h as m,j as f,k as v,l as h,n as E,o as y,q as w,D,r as T,t as $,u as O,v as x,w as L,x as b,y as R,z as _,A as P,B as A,C as I,E as N,F,G as C,H as S,J as M,K as G,L as j,M as k,N as V,O as Y,P as z,Q as X,R as H,U,V as q,W as Z,X as B,Y as W,Z as J,_ as K,$ as Q,a0 as ee,a1 as te,a2 as re,a3 as se,a4 as ne,a5 as ae,a6 as oe,a7 as ie,a8 as de,a9 as le,aa as ce,ab as ue,ac as pe,ad as ge,ae as me,af as fe}from"./client.f38682cb.js";import{f as ve,P as he,T as Ee,e as ye,a as we}from"./Page.58b2732f.js";import{P as De}from"./PlusIcon.7708ca57.js";const Te={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let $e,Oe,xe,Le,be,Re,_e,Pe,Ae,Ie,Ne,Fe=!1,Ce=!1,Se=!1;const Me=new Map,Ge=new Map,je=new WeakMap;function ke(t,r){Me.get(r).delete(t),e(),0===Me.get(r).size&&Me.delete(r)}function Ve(e){return e.findIndex((e=>!!e[t]&&e[r]!==s))}function Ye(e){let{items:n,dropFromOthersDisabled:a}=Ge.get(e.currentTarget);if(a&&e.currentTarget!==be)return;if(Se=!1,n=n.filter((e=>e[r]!==_e[r])),be!==e.currentTarget){const e=Ge.get(be).items.filter((e=>!e[t]));u(be,e,{trigger:p.DRAGGED_ENTERED_ANOTHER,id:xe[r],source:g.POINTER})}else{const e=function(e){return e.findIndex((e=>e[r]===s))}(n);-1!==e&&n.splice(e,1)}const{index:o,isProximityBased:i}=e.detail.indexObj,d=i&&o===e.currentTarget.children.length-1?o+1:o;Pe=e.currentTarget,n.splice(d,0,_e),u(e.currentTarget,n,{trigger:p.DRAGGED_ENTERED,id:xe[r],source:g.POINTER})}function ze(e){if(!Fe)return;const{items:t,dropFromOthersDisabled:s}=Ge.get(e.currentTarget);if(s&&e.currentTarget!==be)return;const n=Ve(t),a=t.splice(n,1)[0];Pe=void 0;const{type:o,theOtherDz:i}=e.detail;if(o===R.OUTSIDE_OF_ANY||o===R.LEFT_FOR_ANOTHER&&i!==be&&Ge.get(i).dropFromOthersDisabled){Se=!0,Pe=be;const e=Ge.get(be).items;e.splice(Re,0,a),u(be,e,{trigger:p.DRAGGED_LEFT_ALL,id:xe[r],source:g.POINTER})}u(e.currentTarget,t,{trigger:p.DRAGGED_LEFT,id:xe[r],source:g.POINTER})}function Xe(e){const{items:t,dropFromOthersDisabled:s}=Ge.get(e.currentTarget);if(s&&e.currentTarget!==be)return;Se=!1;const{index:n}=e.detail.indexObj,a=Ve(t);t.splice(a,1),t.splice(n,0,_e),u(e.currentTarget,t,{trigger:p.DRAGGED_OVER_INDEX,id:xe[r],source:g.POINTER})}function He(e){e.preventDefault();const t=e.touches?e.touches[0]:e;Ie={x:t.clientX,y:t.clientY},Oe.style.transform=`translate3d(${Ie.x-Ae.x}px, ${Ie.y-Ae.y}px, 0)`}function Ue(){Ce=!0,window.removeEventListener("mousemove",He),window.removeEventListener("touchmove",He),window.removeEventListener("mouseup",Ue),window.removeEventListener("touchend",Ue),function(){L();const e=Me.get(Le);for(const t of e)t.removeEventListener(D,Ye),t.removeEventListener(T,ze),t.removeEventListener($,Xe);window.removeEventListener(O,Ue),b()}(),h(Oe),Pe||(Pe=be);let{items:e,type:s}=Ge.get(Pe);v(Me.get(s),(e=>Ge.get(e).dropTargetStyle),(e=>Ge.get(e).dropTargetClasses));let n=Ve(e);-1===n&&(n=Re),e=e.map((e=>e[t]?xe:e)),function(e,t){const r=E(Pe.children[e]),s={x:r.left-parseFloat(Oe.style.left),y:r.top-parseFloat(Oe.style.top)},{dropAnimationDurationMs:n}=Ge.get(Pe),a=`transform ${n}ms ease`;Oe.style.transition=Oe.style.transition?Oe.style.transition+","+a:a,Oe.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,window.setTimeout(t,n)}(n,(function(){Ne(),_(Pe,e,{trigger:Se?p.DROPPED_OUTSIDE_OF_ANY:p.DROPPED_INTO_ZONE,id:xe[r],source:g.POINTER}),Pe!==be&&_(be,Ge.get(be).items,{trigger:p.DROPPED_INTO_ANOTHER,id:xe[r],source:g.POINTER}),P(Pe.children[n]),Oe.remove(),$e.remove(),Oe=void 0,$e=void 0,xe=void 0,Le=void 0,be=void 0,Re=void 0,_e=void 0,Pe=void 0,Ae=void 0,Ie=void 0,Fe=!1,Ce=!1,Ne=void 0,Se=!1}))}function qe(e,h){const E={items:void 0,type:void 0,flipDurationMs:0,dragDisabled:!1,dropFromOthersDisabled:!1,dropTargetStyle:Te,dropTargetClasses:[],transformDraggedElement:()=>{},centreDraggedOnCursor:!1};let L=new Map;function b(){window.removeEventListener("mousemove",_),window.removeEventListener("touchmove",_),window.removeEventListener("mouseup",R),window.removeEventListener("touchend",R)}function R(){b(),$e=void 0,Ae=void 0,Ie=void 0}function _(e){e.preventDefault();const n=e.touches?e.touches[0]:e;Ie={x:n.clientX,y:n.clientY},(Math.abs(Ie.x-Ae.x)>=3||Math.abs(Ie.y-Ae.y)>=3)&&(b(),function(){Fe=!0;const e=L.get($e);Re=e,be=$e.parentElement;const{items:n,type:a,centreDraggedOnCursor:o}=E;xe={...n[e]},Le=a,_e={...xe,[t]:!0};const i={..._e,[r]:s};function m(){Oe.parentElement?window.requestAnimationFrame(m):(document.body.appendChild(Oe),Oe.focus(),function(){w();const e=Me.get(Le);for(const t of e)t.addEventListener(D,Ye),t.addEventListener(T,ze),t.addEventListener($,Xe);window.addEventListener(O,Ue);const t=Math.max(100,...Array.from(e.keys()).map((e=>Ge.get(e).dropAnimationDurationMs)));x(Oe,e,1.07*t)}(),y($e),document.body.appendChild($e))}Oe=d($e,o&&Ie),window.requestAnimationFrame(m),l(Array.from(Me.get(E.type)).filter((e=>e===be||!Ge.get(e).dropFromOthersDisabled)),(e=>Ge.get(e).dropTargetStyle),(e=>Ge.get(e).dropTargetClasses)),n.splice(e,1,i),Ne=c(be),u(be,n,{trigger:p.DRAG_STARTED,id:xe[r],source:g.POINTER}),window.addEventListener("mousemove",He,{passive:!1}),window.addEventListener("touchmove",He,{passive:!1,capture:!1}),window.addEventListener("mouseup",Ue,{passive:!1}),window.addEventListener("touchend",Ue,{passive:!1})}())}function P(e){if(e.target!==e.currentTarget&&(void 0!==e.target.value||e.target.isContentEditable))return;if(e.button)return;if(Fe)return;e.stopPropagation();const t=e.touches?e.touches[0]:e;Ae={x:t.clientX,y:t.clientY},Ie={...Ae},$e=e.currentTarget,window.addEventListener("mousemove",_,{passive:!1}),window.addEventListener("touchmove",_,{passive:!1,capture:!1}),window.addEventListener("mouseup",R,{passive:!1}),window.addEventListener("touchend",R,{passive:!1})}function A({items:t,flipDurationMs:r=0,type:s="--any--",dragDisabled:d=!1,dropFromOthersDisabled:c=!1,dropTargetStyle:u=Te,dropTargetClasses:p=[],transformDraggedElement:g=(()=>{}),centreDraggedOnCursor:h=!1}){var y,w;E.dropAnimationDurationMs=r,E.type&&s!==E.type&&ke(e,E.type),E.type=s,y=e,w=s,Me.has(w)||Me.set(w,new Set),Me.get(w).has(y)||(Me.get(w).add(y),i()),E.items=[...t],E.dragDisabled=d,E.transformDraggedElement=g,E.centreDraggedOnCursor=h,!Fe||Ce||m(u,E.dropTargetStyle)&&f(p,E.dropTargetClasses)||(v([e],(()=>E.dropTargetStyle),(()=>p)),l([e],(()=>u),(()=>p))),E.dropTargetStyle=u,E.dropTargetClasses=[...p],Fe&&E.dropFromOthersDisabled!==c&&(c?v([e],(e=>Ge.get(e).dropTargetStyle),(e=>Ge.get(e).dropTargetClasses)):l([e],(e=>Ge.get(e).dropTargetStyle),(e=>Ge.get(e).dropTargetClasses))),E.dropFromOthersDisabled=c,Ge.set(e,E);const D=Ve(E.items);for(let t=0;t<e.children.length;t++){const r=e.children[t];n(r,d),t!==D?(r.removeEventListener("mousedown",je.get(r)),r.removeEventListener("touchstart",je.get(r)),d||(r.addEventListener("mousedown",P),r.addEventListener("touchstart",P),je.set(r,P)),L.set(r,t)):(a(Oe,r,Ie.x,Ie.y,(()=>E.transformDraggedElement(Oe,xe,t))),o(r))}}return A(h),{update:e=>{A(e)},destroy:()=>{ke(e,E.type),Ge.delete(e)}}}function Ze(e,t){Be(t);const r=qe(e,t),s=A(e,t);return{update:e=>{Be(e),r.update(e),s.update(e)},destroy:()=>{r.destroy(),s.destroy()}}}function Be(e){const{items:t,flipDurationMs:s,type:n,dragDisabled:a,dropFromOthersDisabled:o,dropTargetStyle:i,dropTargetClasses:d,transformDraggedElement:l,autoAriaDisabled:c,centreDraggedOnCursor:u,...p}=e;if(Object.keys(p).length>0&&console.warn("dndzone will ignore unknown options",p),!t)throw new Error("no 'items' key provided to dndzone");const g=t.find((e=>!{}.hasOwnProperty.call(e,r)));if(g)throw new Error(`missing '${r}' property for item ${I(g)}`);if(d&&!Array.isArray(d))throw new Error(`dropTargetClasses should be an array but instead it is a ${typeof d}, ${I(d)}`)}function We(e){let t,r,s,n,a,o,i,d,l,c,u,p,g=ve(e[3])+"";return{c(){t=S("div"),r=S("div"),s=M(e[1]),n=G(),a=S("div"),o=S("div"),i=M(e[2]),d=G(),l=S("div"),c=M(g),this.h()},l(u){t=j(u,"DIV",{id:!0,class:!0});var p=k(t);r=j(p,"DIV",{class:!0});var m=k(r);s=V(m,e[1]),m.forEach(Y),n=z(p),a=j(p,"DIV",{class:!0});var f=k(a);o=j(f,"DIV",{class:!0});var v=k(o);i=V(v,e[2]),v.forEach(Y),d=z(f),l=j(f,"DIV",{class:!0});var h=k(l);c=V(h,g),h.forEach(Y),f.forEach(Y),p.forEach(Y),this.h()},h(){X(r,"class","text-5xl"),X(o,"class","text-2xl"),X(l,"class","font-mono text-base"),X(a,"class","text-dark flex flex-col"),X(t,"id",e[0]),X(t,"class","bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2")},m(g,m){H(g,t,m),U(t,r),U(r,s),U(t,n),U(t,a),U(a,o),U(o,i),U(a,d),U(a,l),U(l,c),u||(p=q(t,"click",e[5]),u=!0)},p(e,[r]){2&r&&Z(s,e[1]),4&r&&Z(i,e[2]),8&r&&g!==(g=ve(e[3])+"")&&Z(c,g),1&r&&X(t,"id",e[0])},i:B,o:B,d(e){e&&Y(t),u=!1,p()}}}function Je(e,t,r){let{_id:s}=t,{emoji:n="💵"}=t,{name:a="Envelope"}=t,{value:o=0}=t,{transactions:i=[]}=t;return e.$$set=e=>{"_id"in e&&r(0,s=e._id),"emoji"in e&&r(1,n=e.emoji),"name"in e&&r(2,a=e.name),"value"in e&&r(3,o=e.value),"transactions"in e&&r(4,i=e.transactions)},[s,n,a,o,i,function(t){W(e,t)}]}class Ke extends N{constructor(e){super(),F(this,e,Je,We,C,{_id:0,emoji:1,name:2,value:3,transactions:4})}}function Qe(e,t,r){const s=e.slice();return s[6]=t[r],s}function et(e){let t,r,s,n,a,o;return s=new De({props:{size:"20"}}),{c(){t=M("LOPY\n    "),r=S("div"),J(s.$$.fragment),this.h()},l(e){t=V(e,"LOPY\n    "),r=j(e,"DIV",{class:!0});var n=k(r);K(s.$$.fragment,n),n.forEach(Y),this.h()},h(){X(r,"class","cursor-pointer")},m(i,d){H(i,t,d),H(i,r,d),Q(s,r,null),n=!0,a||(o=q(r,"click",e[3]),a=!0)},p:B,i(e){n||(ee(s.$$.fragment,e),n=!0)},o(e){te(s.$$.fragment,e),n=!1},d(e){e&&Y(t),e&&Y(r),re(s),a=!1,o()}}}function tt(e,t){let r,s,n,a;const o=[t[6]];let i={};for(let e=0;e<o.length;e+=1)i=me(i,o[e]);return s=new Ke({props:i}),s.$on("click",(function(){return t[4](t[6])})),{key:e,first:null,c(){r=S("span"),J(s.$$.fragment),n=G(),this.h()},l(e){r=j(e,"SPAN",{class:!0});var t=k(r);K(s.$$.fragment,t),n=z(t),t.forEach(Y),this.h()},h(){X(r,"class","outline-none cursor-unset"),this.first=r},m(e,t){H(e,r,t),Q(s,r,null),U(r,n),a=!0},p(e,r){t=e;const n=1&r?ne(o,[ae(t[6])]):{};s.$set(n)},i(e){a||(ee(s.$$.fragment,e),a=!0)},o(e){te(s.$$.fragment,e),a=!1},d(e){e&&Y(r),re(s)}}}function rt(e){let t,r,s,n,a,o,i,d=[],l=new Map;t=new Ee({props:{$$slots:{default:[et]},$$scope:{ctx:e}}});let c=e[0];const u=e=>e[6]._id;for(let t=0;t<c.length;t+=1){let r=Qe(e,c,t),s=u(r);l.set(s,d[t]=tt(s,r))}return{c(){J(t.$$.fragment),r=G(),s=S("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){K(t.$$.fragment,e),r=z(e),s=j(e,"DIV",{class:!0});var n=k(s);for(let e=0;e<d.length;e+=1)d[e].l(n);n.forEach(Y),this.h()},h(){X(s,"class","w-full p-4 flex flex-col space-y-3")},m(l,c){Q(t,l,c),H(l,r,c),H(l,s,c);for(let e=0;e<d.length;e+=1)d[e].m(s,null);a=!0,o||(i=[oe(n=Ze.call(null,s,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"}})),q(s,"consider",e[2]),q(s,"finalize",e[2])],o=!0)},p(e,r){const a={};512&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a),3&r&&(c=e[0],ie(),d=de(d,r,u,1,e,c,l,s,fe,tt,null,Qe),le()),n&&ce(n.update)&&1&r&&n.update.call(null,{items:e[0],flipDurationMs:200,dropTargetStyle:{opacity:"50%"}})},i(e){if(!a){ee(t.$$.fragment,e);for(let e=0;e<c.length;e+=1)ee(d[e]);a=!0}},o(e){te(t.$$.fragment,e);for(let e=0;e<d.length;e+=1)te(d[e]);a=!1},d(e){re(t,e),e&&Y(r),e&&Y(s);for(let e=0;e<d.length;e+=1)d[e].d();o=!1,ue(i)}}}function st(e){let t,r;return t=new he({props:{$$slots:{default:[rt]},$$scope:{ctx:e}}}),{c(){J(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){Q(t,e,s),r=!0},p(e,[r]){const s={};513&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(ee(t.$$.fragment,e),r=!0)},o(e){te(t.$$.fragment,e),r=!1},d(e){re(t,e)}}}function nt(e,t,r){let s,n;se(e,ye,(e=>r(0,s=e))),se(e,we,(e=>r(5,n=e)));const a=e=>{pe(`${ROUTES.ENVELOPE}/${e._id}`)};return[s,a,({detail:e})=>{ge(ye,s=e.items,s),"droppedIntoZone"===e.info.trigger&&n.reorderEnvelopes(e.items)},()=>pe("envelope/edit/new"),e=>a(e)]}export default class extends N{constructor(e){super(),F(this,e,nt,st,C,{})}}
