import{E as t,F as e,G as n,am as s,L as a,M as r,O as l,Q as o,R as i,U as c,X as u,aa as f,H as d,J as h,K as m,N as $,P as p,ao as g,a6 as v,V as w,W as x,a0 as k,ak as y,ay as b,a7 as E,a1 as I,a9 as T,az as S,aA as N,aB as P,al as B,aC as D,ab as z,a8 as M,aD as j,ar as A,as as R,Z as L,_,$ as W,at as V,a2 as C,aE as O,a3 as q,aF as F,ac as H,an as Y}from"./client.0153485f.js";import{c as G,f as J,l as K,s as Q,b as U,P as X,T as Z,i as tt,a as et}from"./Page.6e2ded3d.js";import{P as nt}from"./PlusIcon.a9846d4f.js";import{T as st,B as at,a as rt}from"./Button.9e74a4dc.js";function lt(t){let e,n,f;return{c(){e=s("svg"),n=s("path"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=r(e);n=a(s,"path",{d:!0},1),r(n).forEach(l),s.forEach(l),this.h()},h(){o(n,"d","M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width",t[0]),o(e,"height",t[0]),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(e,"stroke","currentColor"),o(e,"stroke-width",t[1]),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class",f="feather feather-edit-2 "+t[2])},m(t,s){i(t,e,s),c(e,n)},p(t,[n]){1&n&&o(e,"width",t[0]),1&n&&o(e,"height",t[0]),2&n&&o(e,"stroke-width",t[1]),4&n&&f!==(f="feather feather-edit-2 "+t[2])&&o(e,"class",f)},i:u,o:u,d(t){t&&l(e)}}}function ot(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,r=t.class)},[s,a,r]}class it extends t{constructor(t){super(),e(this,t,ot,lt,n,{size:0,strokeWidth:1,class:2})}}function ct(t){let e,n,f;return{c(){e=s("svg"),n=s("line"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=r(e);n=a(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),r(n).forEach(l),s.forEach(l),this.h()},h(){o(n,"x1","5"),o(n,"y1","12"),o(n,"x2","19"),o(n,"y2","12"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width",t[0]),o(e,"height",t[0]),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(e,"stroke","currentColor"),o(e,"stroke-width",t[1]),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class",f="feather feather-minus "+t[2])},m(t,s){i(t,e,s),c(e,n)},p(t,[n]){1&n&&o(e,"width",t[0]),1&n&&o(e,"height",t[0]),2&n&&o(e,"stroke-width",t[1]),4&n&&f!==(f="feather feather-minus "+t[2])&&o(e,"class",f)},i:u,o:u,d(t){t&&l(e)}}}function ut(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,r=t.class)},[s,a,r]}class ft extends t{constructor(t){super(),e(this,t,ut,ct,n,{size:0,strokeWidth:1,class:2})}}function dt(t,e){let n;const s=()=>{n=setTimeout((()=>{t.dispatchEvent(new CustomEvent("longpress"))}),e)},a=()=>{clearTimeout(n)};return t.addEventListener("mousedown",s),t.addEventListener("mouseup",a),{update(t){e=t},destroy(){t.removeEventListener("mousedown",s),t.removeEventListener("mouseup",a)}}}function ht(t,e,n){const s=getComputedStyle(t),a="none"===s.transform?"":s.transform,r=e.from.width/t.clientWidth,l=e.from.height/t.clientHeight,o=(e.from.left-e.to.left)/r,i=(e.from.top-e.to.top)/l,c=Math.sqrt(o*o+i*i),{delay:u=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=G}=n;return{delay:u,duration:f(d)?d(c):d,easing:h,css:(t,e)=>`transform: ${a} translate(${e*o}px, ${e*i}px);`}}function mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function $t(t){let e,n,s;return{c(){e=d("span"),this.h()},l(t){e=a(t,"SPAN",{class:!0}),r(e).forEach(l),this.h()},h(){o(e,"class","bg-background absolute right-2 top-2 w-4 h-4 rounded-full")},m(t,n){i(t,e,n),s=!0},i(t){s||(y((()=>{n||(n=b(e,Q,{},!0)),n.run(1)})),s=!0)},o(t){n||(n=b(e,Q,{},!1)),n.run(0),s=!1},d(t){t&&l(e),t&&n&&n.end()}}}function pt(t,e){let n,s,f,b,M,j,A,R,L,_,W,V,C,O,q,F,H,Y,U=e[3].comment+"",X=J(e[3].value,{showSign:!1})+"",Z=K.DateTime.fromSeconds(e[3].date).toLocaleString(K.DateTime.DATETIME_MED)+"",tt=u,et=e[0][e[3]._id]&&$t();function nt(){return e[2](e[3])}return{key:t,first:null,c(){n=d("div"),s=d("div"),f=h(U),b=m(),M=d("div"),j=d("span"),A=h(X),R=m(),L=d("span"),_=h(Z),W=m(),et&&et.c(),V=m(),this.h()},l(t){n=a(t,"DIV",{class:!0});var e=r(n);s=a(e,"DIV",{class:!0});var o=r(s);f=$(o,U),o.forEach(l),b=p(e),M=a(e,"DIV",{class:!0});var i=r(M);j=a(i,"SPAN",{class:!0});var c=r(j);A=$(c,X),c.forEach(l),R=p(i),L=a(i,"SPAN",{});var u=r(L);_=$(u,Z),u.forEach(l),i.forEach(l),W=p(e),et&&et.l(e),V=p(e),e.forEach(l),this.h()},h(){o(s,"class","whitespace-pre-wrap"),g(s,"hidden",!e[3].comment),o(j,"class","font-mono"),o(M,"class","flex justify-between"),o(n,"class","transaction relative svelte-v8r6i"),g(n,"in",e[3].value>=0),g(n,"out",e[3].value<0),g(n,"selected",e[0][e[3]._id]),this.first=n},m(t,e){i(t,n,e),c(n,s),c(s,f),c(n,b),c(n,M),c(M,j),c(j,A),c(M,R),c(M,L),c(L,_),c(n,W),et&&et.m(n,null),c(n,V),F=!0,H||(Y=[v(dt.call(null,n,300)),w(n,"longpress",nt)],H=!0)},p(t,a){e=t,(!F||2&a)&&U!==(U=e[3].comment+"")&&x(f,U),2&a&&g(s,"hidden",!e[3].comment),(!F||2&a)&&X!==(X=J(e[3].value,{showSign:!1})+"")&&x(A,X),(!F||2&a)&&Z!==(Z=K.DateTime.fromSeconds(e[3].date).toLocaleString(K.DateTime.DATETIME_MED)+"")&&x(_,Z),e[0][e[3]._id]?et?3&a&&k(et,1):(et=$t(),et.c(),k(et,1),et.m(n,V)):et&&(E(),I(et,1,1,(()=>{et=null})),T()),2&a&&g(n,"in",e[3].value>=0),2&a&&g(n,"out",e[3].value<0),3&a&&g(n,"selected",e[0][e[3]._id])},r(){q=n.getBoundingClientRect()},f(){S(n),tt(),N(n,q)},a(){tt(),tt=P(n,q,ht,{})},i(t){F||(k(et),t&&y((()=>{O&&O.end(1),C||(C=B(n,Q,{easing:G})),C.start()})),F=!0)},o(t){I(et),C&&C.invalidate(),t&&(O=D(n,Q,{easing:G})),F=!1},d(t){t&&l(n),et&&et.d(),t&&O&&O.end(),H=!1,z(Y)}}}function gt(t){let e,n,s=[],c=new Map,u=t[1];const f=t=>t[3]._id;for(let e=0;e<u.length;e+=1){let n=mt(t,u,e),a=f(n);c.set(a,s[e]=pt(a,n))}return{c(){e=d("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(l),this.h()},h(){o(e,"class","flex flex-col space-y-2 text-dark w-full p-4")},m(t,a){i(t,e,a);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,[n]){if(3&n){u=t[1],E();for(let t=0;t<s.length;t+=1)s[t].r();s=M(s,n,f,1,t,u,c,e,j,pt,null,mt);for(let t=0;t<s.length;t+=1)s[t].a();T()}},i(t){if(!n){for(let t=0;t<u.length;t+=1)k(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)I(s[t]);n=!1},d(t){t&&l(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function vt(t,e,n){let{transactions:s=[]}=e,{selectedTransactionsById:a={}}=e;return t.$$set=t=>{"transactions"in t&&n(1,s=t.transactions),"selectedTransactionsById"in t&&n(0,a=t.selectedTransactionsById)},[a,s,t=>{if(!a[t._id])return void n(0,a[t._id]=t,a);const{[t._id]:e,...s}=a;n(0,a=s)}]}class wt extends t{constructor(t){super(),e(this,t,vt,gt,n,{transactions:1,selectedTransactionsById:0})}}function xt(t){let e,n,s,c;return n=new nt({props:{size:"24"}}),{c(){e=d("span"),L(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);_(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","absolute")},m(t,s){i(t,e,s),W(n,e,null),c=!0},i(t){c||(k(n.$$.fragment,t),t&&y((()=>{s||(s=b(e,Q,{},!0)),s.run(1)})),c=!0)},o(t){I(n.$$.fragment,t),t&&(s||(s=b(e,Q,{},!1)),s.run(0)),c=!1},d(t){t&&l(e),C(n),t&&s&&s.end()}}}function kt(t){let e,n,s,c;return n=new ft({props:{size:"24"}}),{c(){e=d("span"),L(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);_(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","absolute")},m(t,s){i(t,e,s),W(n,e,null),c=!0},i(t){c||(k(n.$$.fragment,t),t&&y((()=>{s||(s=b(e,Q,{},!0)),s.run(1)})),c=!0)},o(t){I(n.$$.fragment,t),t&&(s||(s=b(e,Q,{},!1)),s.run(0)),c=!1},d(t){t&&l(e),C(n),t&&s&&s.end()}}}function yt(t){let e,n,s,u,f,h,$,g,v,x;const y=[kt,xt],b=[];function S(t,e){return t[2]?0:1}function N(e){t[6].call(null,e)}s=S(t),u=b[s]=y[s](t);let P={class:"w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono",value:J(Math.abs(t[1])),inputmode:"numeric",autofocus:!0};return void 0!==t[0]&&(P.inputRef=t[0]),h=new st({props:P}),A.push((()=>R(h,"inputRef",N))),h.$on("input",t[4]),h.$on("keyup",t[3]),{c(){e=d("div"),n=d("div"),u.c(),f=m(),L(h.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);n=a(s,"DIV",{class:!0});var o=r(n);u.l(o),o.forEach(l),f=p(s),_(h.$$.fragment,s),s.forEach(l),this.h()},h(){o(n,"class","relative cursor-pointer w-6 flex items-center"),o(e,"class","flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl")},m(a,r){i(a,e,r),c(e,n),b[s].m(n,null),c(e,f),W(h,e,null),g=!0,v||(x=w(n,"click",t[5]),v=!0)},p(t,[e]){let a=s;s=S(t),s!==a&&(E(),I(b[a],1,1,(()=>{b[a]=null})),T(),u=b[s],u||(u=b[s]=y[s](t),u.c()),k(u,1),u.m(n,null));const r={};2&e&&(r.value=J(Math.abs(t[1]))),!$&&1&e&&($=!0,r.inputRef=t[0],V((()=>$=!1))),h.$set(r)},i(t){g||(k(u),k(h.$$.fragment,t),g=!0)},o(t){I(u),I(h.$$.fragment,t),g=!1},d(t){t&&l(e),b[s].d(),C(h),v=!1,x()}}}function bt(t,e,n){let{inputRef:s}=e,{value:a=0}=e,{isNegative:r=!1}=e;const l=O();return t.$$set=t=>{"inputRef"in t&&n(0,s=t.inputRef),"value"in t&&n(1,a=t.value),"isNegative"in t&&n(2,r=t.isNegative)},[s,a,r,({key:t})=>{"Enter"===t&&l("enterPressed")},t=>{t.preventDefault();const e=+`${U(t.target.value)}`;n(1,a=r?-e:e),t.target.value=J(Math.abs(a),{showSign:!1})},()=>{n(2,r=!r),n(1,a=r?-Math.abs(a):Math.abs(a)),s.focus()},function(t){s=t,n(0,s)}]}class Et extends t{constructor(t){super(),e(this,t,bt,yt,n,{inputRef:0,value:1,isNegative:2})}}function It(t){let e,n,s,c,f;return n=new it({props:{size:"20"}}),{c(){e=d("span"),L(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);_(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","cursor-pointer flex space-x-2 items-end")},m(a,r){i(a,e,r),W(n,e,null),s=!0,c||(f=w(e,"click",t[9]),c=!0)},p:u,i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){t&&l(e),C(n),c=!1,f()}}}function Tt(t){let e,n,s,o,c;return n=new rt({props:{size:"20"}}),{c(){e=d("span"),L(n.$$.fragment)},l(t){e=a(t,"SPAN",{});var s=r(e);_(n.$$.fragment,s),s.forEach(l)},m(a,r){i(a,e,r),W(n,e,null),s=!0,o||(c=w(e,"click",t[7]),o=!0)},p:u,i(t){s||(k(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){t&&l(e),C(n),o=!1,c()}}}function St(t){let e,n,s,a,r,o;const c=[Tt,It],u=[];function f(t,e){return 16&e&&(n=!!(Object.keys(t[4]).length>=1)),n?0:1}return s=f(t,-1),a=u[s]=c[s](t),{c(){e=h("LOPY\n    "),a.c(),r=Y()},l(t){e=$(t,"LOPY\n    "),a.l(t),r=Y()},m(t,n){i(t,e,n),u[s].m(t,n),i(t,r,n),o=!0},p(t,e){let n=s;s=f(t,e),s===n?u[s].p(t,e):(E(),I(u[n],1,1,(()=>{u[n]=null})),T(),a=u[s],a?a.p(t,e):(a=u[s]=c[s](t),a.c()),k(a,1),a.m(r.parentNode,r))},i(t){o||(k(a),o=!0)},o(t){I(a),o=!1},d(t){t&&l(e),u[s].d(t),t&&l(r)}}}function Nt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Pt(t){let e,n,s;function a(e){t[10].call(null,e)}let r={transactions:t[17]};return void 0!==t[4]&&(r.selectedTransactionsById=t[4]),e=new wt({props:r}),A.push((()=>R(e,"selectedTransactionsById",a))),{c(){L(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,n){W(e,t,n),s=!0},p(t,s){const a={};8&s&&(a.transactions=t[17]),!n&&16&s&&(n=!0,a.selectedTransactionsById=t[4],V((()=>n=!1))),e.$set(a)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Bt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Dt(t){let e;return{c(){e=h("Back")},l(t){e=$(t,"Back")},m(t,n){i(t,e,n)},d(t){t&&l(e)}}}function zt(t){let e,n,s,u;return{c(){e=d("span"),n=h("Save"),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);n=$(s,"Save"),s.forEach(l),this.h()},h(){o(e,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(t,s){i(t,e,s),c(e,n),u=!0},i(t){u||(t&&y((()=>{s||(s=b(e,Q,{},!0)),s.run(1)})),u=!0)},o(t){t&&(s||(s=b(e,Q,{},!1)),s.run(0)),u=!1},d(t){t&&l(e),t&&s&&s.end()}}}function Mt(t){let e,n,s,u;return{c(){e=d("span"),n=h("Spend"),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);n=$(s,"Spend"),s.forEach(l),this.h()},h(){o(e,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(t,s){i(t,e,s),c(e,n),u=!0},i(t){u||(t&&y((()=>{s||(s=b(e,Q,{},!0)),s.run(1)})),u=!0)},o(t){t&&(s||(s=b(e,Q,{},!1)),s.run(0)),u=!1},d(t){t&&l(e),t&&s&&s.end()}}}function jt(t){let e,n,s;const a=[Mt,zt],r=[];function o(t,e){return t[5]?0:1}return e=o(t),n=r[e]=a[e](t),{c(){n.c(),s=Y()},l(t){n.l(t),s=Y()},m(t,n){r[e].m(t,n),i(t,s,n)},p(t,l){let i=e;e=o(t),e!==i&&(E(),I(r[i],1,1,(()=>{r[i]=null})),T(),n=r[e],n||(n=r[e]=a[e](t),n.c()),k(n,1),n.m(s.parentNode,s))},d(t){r[e].d(t),t&&l(s)}}}function At(t){let e,n,s,u,f,h,$,g,v,w,x,y,b,E,T,S,N,P;e=new Z({props:{$$slots:{default:[St]},$$scope:{ctx:t}}});let B={ctx:t,current:null,token:null,hasCatch:!1,pending:Bt,then:Pt,catch:Nt,value:17,blocks:[,,,]};function D(e){t[11].call(null,e)}function z(e){t[12].call(null,e)}function M(e){t[13].call(null,e)}F(s=t[3].transactions,B);let j={};function O(e){t[14].call(null,e)}void 0!==t[5]&&(j.isNegative=t[5]),void 0!==t[1].value&&(j.value=t[1].value),void 0!==t[2]&&(j.inputRef=t[2]),h=new Et({props:j}),A.push((()=>R(h,"isNegative",D))),A.push((()=>R(h,"value",z))),A.push((()=>R(h,"inputRef",M))),h.$on("enterPressed",t[6]);let q={textarea:!0,id:"comment-input",class:"bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==t[1].comment&&(q.value=t[1].comment),x=new st({props:q}),A.push((()=>R(x,"value",O))),T=new at({props:{class:"w-20",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),T.$on("click",t[15]),N=new at({props:{class:"w-20 relative",$$slots:{default:[jt]},$$scope:{ctx:t}}}),N.$on("click",t[8]),{c(){L(e.$$.fragment),n=m(),B.block.c(),u=m(),f=d("div"),L(h.$$.fragment),w=m(),L(x.$$.fragment),b=m(),E=d("div"),L(T.$$.fragment),S=m(),L(N.$$.fragment),this.h()},l(t){_(e.$$.fragment,t),n=p(t),B.block.l(t),u=p(t),f=a(t,"DIV",{class:!0});var s=r(f);_(h.$$.fragment,s),w=p(s),_(x.$$.fragment,s),b=p(s),E=a(s,"DIV",{class:!0});var o=r(E);_(T.$$.fragment,o),S=p(o),_(N.$$.fragment,o),o.forEach(l),s.forEach(l),this.h()},h(){o(E,"class","flex justify-around text-dark"),o(f,"class","sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4")},m(t,s){W(e,t,s),i(t,n,s),B.block.m(t,B.anchor=s),B.mount=()=>u.parentNode,B.anchor=u,i(t,u,s),i(t,f,s),W(h,f,null),c(f,w),W(x,f,null),c(f,b),c(f,E),W(T,E,null),c(E,S),W(N,E,null),P=!0},p(n,a){t=n;const r={};if(262161&a&&(r.$$scope={dirty:a,ctx:t}),e.$set(r),B.ctx=t,8&a&&s!==(s=t[3].transactions)&&F(s,B));else{const e=t.slice();e[17]=B.resolved,B.block.p(e,a)}const l={};!$&&32&a&&($=!0,l.isNegative=t[5],V((()=>$=!1))),!g&&2&a&&(g=!0,l.value=t[1].value,V((()=>g=!1))),!v&&4&a&&(v=!0,l.inputRef=t[2],V((()=>v=!1))),h.$set(l);const o={};!y&&2&a&&(y=!0,o.value=t[1].comment,V((()=>y=!1))),x.$set(o);const i={};262144&a&&(i.$$scope={dirty:a,ctx:t}),T.$set(i);const c={};262176&a&&(c.$$scope={dirty:a,ctx:t}),N.$set(c)},i(t){P||(k(e.$$.fragment,t),k(B.block),k(h.$$.fragment,t),k(x.$$.fragment,t),k(T.$$.fragment,t),k(N.$$.fragment,t),P=!0)},o(t){I(e.$$.fragment,t);for(let t=0;t<3;t+=1){const e=B.blocks[t];I(e)}I(h.$$.fragment,t),I(x.$$.fragment,t),I(T.$$.fragment,t),I(N.$$.fragment,t),P=!1},d(t){C(e,t),t&&l(n),B.block.d(t),B.token=null,B=null,t&&l(u),t&&l(f),C(h),C(x),C(T),C(N)}}}function Rt(t){let e,n;return e=new X({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){W(e,t,s),n=!0},p(t,[n]){const s={};262207&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}const Lt=async({params:t})=>t;function _t(t,e,n){let s;q(t,et,(t=>n(16,s=t)));let{id:a}=e;let r,l=s?s.getTransactionsPaginated({actions:s,envelopeId:a}):{},o={},i={value:0,comment:""},c=!0;return t.$$set=t=>{"id"in t&&n(0,a=t.id)},t.$$.update=()=>{2&t.$$.dirty&&console.log(i)},[a,i,r,l,o,c,()=>{document?.getElementById("comment-input").focus()},async()=>{await s.deleteTransactions(Object.keys(o),a),n(4,o={}),n(3,l=await l.refresh())},()=>{tt()&&i.value&&s.saveTransaction(i,a).then((async()=>{n(1,i.value=0,i),n(1,i.comment="",i),n(3,l=await l.refresh()),console.log("moneyInput",r),r.focus()}))},()=>H(`envelope/edit/${a}`),function(t){o=t,n(4,o)},function(t){c=t,n(5,c)},function(t){i.value=t,n(1,i)},function(t){r=t,n(2,r)},function(t){i.comment=t,n(1,i)},()=>{H("/")}]}export default class extends t{constructor(t){super(),e(this,t,_t,Rt,n,{id:0})}}export{Lt as preload};
