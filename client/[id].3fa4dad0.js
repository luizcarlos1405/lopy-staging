import{E as t,F as e,G as n,ai as s,L as a,M as r,O as l,Q as o,R as i,U as c,W as u,a7 as f,H as h,J as d,K as m,N as $,P as p,ak as g,a3 as v,V as x,am as k,$ as w,ag as b,ax as y,a4 as E,a0 as I,a6 as S,ay as T,az as N,aA as D,ah as B,aB as P,a8 as z,a5 as M,aC as j,ao as R,ap as A,Y as _,Z as W,_ as V,aq as L,a1 as C,aD as O,a2 as q,aE as H,a9 as Y,aj as F}from"./client.4b246533.js";import{c as G,f as J,l as K,s as Q,b as U,P as Z,T as X,i as tt,R as et,a as nt}from"./constants.e5b8bee4.js";import{l as st,P as at}from"./longpress.f7b7b02f.js";import{T as rt,B as lt,a as ot}from"./Button.51b68bac.js";function it(t){let e,n,f;return{c(){e=s("svg"),n=s("path"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=r(e);n=a(s,"path",{d:!0},1),r(n).forEach(l),s.forEach(l),this.h()},h(){o(n,"d","M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width",t[0]),o(e,"height",t[0]),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(e,"stroke","currentColor"),o(e,"stroke-width",t[1]),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class",f="feather feather-edit-2 "+t[2])},m(t,s){i(t,e,s),c(e,n)},p(t,[n]){1&n&&o(e,"width",t[0]),1&n&&o(e,"height",t[0]),2&n&&o(e,"stroke-width",t[1]),4&n&&f!==(f="feather feather-edit-2 "+t[2])&&o(e,"class",f)},i:u,o:u,d(t){t&&l(e)}}}function ct(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,r=t.class)},[s,a,r]}class ut extends t{constructor(t){super(),e(this,t,ct,it,n,{size:0,strokeWidth:1,class:2})}}function ft(t){let e,n,f;return{c(){e=s("svg"),n=s("line"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=r(e);n=a(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),r(n).forEach(l),s.forEach(l),this.h()},h(){o(n,"x1","5"),o(n,"y1","12"),o(n,"x2","19"),o(n,"y2","12"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width",t[0]),o(e,"height",t[0]),o(e,"fill","none"),o(e,"viewBox","0 0 24 24"),o(e,"stroke","currentColor"),o(e,"stroke-width",t[1]),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class",f="feather feather-minus "+t[2])},m(t,s){i(t,e,s),c(e,n)},p(t,[n]){1&n&&o(e,"width",t[0]),1&n&&o(e,"height",t[0]),2&n&&o(e,"stroke-width",t[1]),4&n&&f!==(f="feather feather-minus "+t[2])&&o(e,"class",f)},i:u,o:u,d(t){t&&l(e)}}}function ht(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:r=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,r=t.class)},[s,a,r]}class dt extends t{constructor(t){super(),e(this,t,ht,ft,n,{size:0,strokeWidth:1,class:2})}}function mt(t,e,n){const s=getComputedStyle(t),a="none"===s.transform?"":s.transform,r=e.from.width/t.clientWidth,l=e.from.height/t.clientHeight,o=(e.from.left-e.to.left)/r,i=(e.from.top-e.to.top)/l,c=Math.sqrt(o*o+i*i),{delay:u=0,duration:h=(t=>120*Math.sqrt(t)),easing:d=G}=n;return{delay:u,duration:f(h)?h(c):h,easing:d,css:(t,e)=>`transform: ${a} translate(${e*o}px, ${e*i}px);`}}function $t(t,e,n){const s=t.slice();return s[3]=e[n],s}function pt(t){let e,n,s;return{c(){e=h("span"),this.h()},l(t){e=a(t,"SPAN",{class:!0}),r(e).forEach(l),this.h()},h(){o(e,"class","bg-background absolute right-2 top-2 w-4 h-4 rounded-full")},m(t,n){i(t,e,n),s=!0},i(t){s||(b((()=>{n||(n=y(e,Q,{},!0)),n.run(1)})),s=!0)},o(t){n||(n=y(e,Q,{},!1)),n.run(0),s=!1},d(t){t&&l(e),t&&n&&n.end()}}}function gt(t,e){let n,s,f,y,M,j,R,A,_,W,V,L,C,O,q,H,Y,F,U=e[3].comment+"",Z=J(e[3].value,{showSign:!1})+"",X=K.DateTime.fromSeconds(e[3].date).toLocaleString(K.DateTime.DATETIME_MED)+"",tt=u,et=e[0][e[3]._id]&&pt();function nt(){return e[2](e[3])}return{key:t,first:null,c(){n=h("div"),s=h("div"),f=d(U),y=m(),M=h("div"),j=h("span"),R=d(Z),A=m(),_=h("span"),W=d(X),V=m(),et&&et.c(),L=m(),this.h()},l(t){n=a(t,"DIV",{class:!0});var e=r(n);s=a(e,"DIV",{class:!0});var o=r(s);f=$(o,U),o.forEach(l),y=p(e),M=a(e,"DIV",{class:!0});var i=r(M);j=a(i,"SPAN",{class:!0});var c=r(j);R=$(c,Z),c.forEach(l),A=p(i),_=a(i,"SPAN",{});var u=r(_);W=$(u,X),u.forEach(l),i.forEach(l),V=p(e),et&&et.l(e),L=p(e),e.forEach(l),this.h()},h(){o(s,"class","whitespace-pre-wrap"),g(s,"hidden",!e[3].comment),o(j,"class","font-mono"),o(M,"class","flex justify-between"),o(n,"class","transaction relative svelte-v8r6i"),g(n,"in",e[3].value>=0),g(n,"out",e[3].value<0),g(n,"selected",e[0][e[3]._id]),this.first=n},m(t,e){i(t,n,e),c(n,s),c(s,f),c(n,y),c(n,M),c(M,j),c(j,R),c(M,A),c(M,_),c(_,W),c(n,V),et&&et.m(n,null),c(n,L),H=!0,Y||(F=[v(st.call(null,n,300)),x(n,"longpress",nt)],Y=!0)},p(t,a){e=t,(!H||2&a)&&U!==(U=e[3].comment+"")&&k(f,U),2&a&&g(s,"hidden",!e[3].comment),(!H||2&a)&&Z!==(Z=J(e[3].value,{showSign:!1})+"")&&k(R,Z),(!H||2&a)&&X!==(X=K.DateTime.fromSeconds(e[3].date).toLocaleString(K.DateTime.DATETIME_MED)+"")&&k(W,X),e[0][e[3]._id]?et?3&a&&w(et,1):(et=pt(),et.c(),w(et,1),et.m(n,L)):et&&(E(),I(et,1,1,(()=>{et=null})),S()),2&a&&g(n,"in",e[3].value>=0),2&a&&g(n,"out",e[3].value<0),3&a&&g(n,"selected",e[0][e[3]._id])},r(){q=n.getBoundingClientRect()},f(){T(n),tt(),N(n,q)},a(){tt(),tt=D(n,q,mt,{})},i(t){H||(w(et),t&&b((()=>{O&&O.end(1),C||(C=B(n,Q,{easing:G})),C.start()})),H=!0)},o(t){I(et),C&&C.invalidate(),t&&(O=P(n,Q,{easing:G})),H=!1},d(t){t&&l(n),et&&et.d(),t&&O&&O.end(),Y=!1,z(F)}}}function vt(t){let e,n,s=[],c=new Map,u=t[1];const f=t=>t[3]._id;for(let e=0;e<u.length;e+=1){let n=$t(t,u,e),a=f(n);c.set(a,s[e]=gt(a,n))}return{c(){e=h("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(l),this.h()},h(){o(e,"class","flex flex-col space-y-2 text-dark w-full p-4")},m(t,a){i(t,e,a);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,[n]){if(3&n){u=t[1],E();for(let t=0;t<s.length;t+=1)s[t].r();s=M(s,n,f,1,t,u,c,e,j,gt,null,$t);for(let t=0;t<s.length;t+=1)s[t].a();S()}},i(t){if(!n){for(let t=0;t<u.length;t+=1)w(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)I(s[t]);n=!1},d(t){t&&l(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function xt(t,e,n){let{transactions:s=[]}=e,{selectedTransactionsById:a={}}=e;return t.$$set=t=>{"transactions"in t&&n(1,s=t.transactions),"selectedTransactionsById"in t&&n(0,a=t.selectedTransactionsById)},[a,s,t=>{if(!a[t._id])return void n(0,a[t._id]=t,a);const{[t._id]:e,...s}=a;n(0,a=s)}]}class kt extends t{constructor(t){super(),e(this,t,xt,vt,n,{transactions:1,selectedTransactionsById:0})}}function wt(t){let e,n,s,c;return n=new at({props:{size:"24"}}),{c(){e=h("span"),_(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);W(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","absolute")},m(t,s){i(t,e,s),V(n,e,null),c=!0},i(t){c||(w(n.$$.fragment,t),t&&b((()=>{s||(s=y(e,Q,{},!0)),s.run(1)})),c=!0)},o(t){I(n.$$.fragment,t),t&&(s||(s=y(e,Q,{},!1)),s.run(0)),c=!1},d(t){t&&l(e),C(n),t&&s&&s.end()}}}function bt(t){let e,n,s,c;return n=new dt({props:{size:"24"}}),{c(){e=h("span"),_(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);W(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","absolute")},m(t,s){i(t,e,s),V(n,e,null),c=!0},i(t){c||(w(n.$$.fragment,t),t&&b((()=>{s||(s=y(e,Q,{},!0)),s.run(1)})),c=!0)},o(t){I(n.$$.fragment,t),t&&(s||(s=y(e,Q,{},!1)),s.run(0)),c=!1},d(t){t&&l(e),C(n),t&&s&&s.end()}}}function yt(t){let e,n,s,u,f,d,$,g,v,k;const b=[bt,wt],y=[];function T(t,e){return t[2]?0:1}function N(e){t[6].call(null,e)}s=T(t),u=y[s]=b[s](t);let D={class:"w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono",value:J(Math.abs(t[1])),inputmode:"numeric",autofocus:!0};return void 0!==t[0]&&(D.inputRef=t[0]),d=new rt({props:D}),R.push((()=>A(d,"inputRef",N))),d.$on("input",t[4]),d.$on("keyup",t[3]),{c(){e=h("div"),n=h("div"),u.c(),f=m(),_(d.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);n=a(s,"DIV",{class:!0});var o=r(n);u.l(o),o.forEach(l),f=p(s),W(d.$$.fragment,s),s.forEach(l),this.h()},h(){o(n,"class","relative cursor-pointer w-6 flex items-center"),o(e,"class","flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl")},m(a,r){i(a,e,r),c(e,n),y[s].m(n,null),c(e,f),V(d,e,null),g=!0,v||(k=x(n,"click",t[5]),v=!0)},p(t,[e]){let a=s;s=T(t),s!==a&&(E(),I(y[a],1,1,(()=>{y[a]=null})),S(),u=y[s],u||(u=y[s]=b[s](t),u.c()),w(u,1),u.m(n,null));const r={};2&e&&(r.value=J(Math.abs(t[1]))),!$&&1&e&&($=!0,r.inputRef=t[0],L((()=>$=!1))),d.$set(r)},i(t){g||(w(u),w(d.$$.fragment,t),g=!0)},o(t){I(u),I(d.$$.fragment,t),g=!1},d(t){t&&l(e),y[s].d(),C(d),v=!1,k()}}}function Et(t,e,n){let{inputRef:s}=e,{value:a=0}=e,{isNegative:r=!1}=e;const l=O();return t.$$set=t=>{"inputRef"in t&&n(0,s=t.inputRef),"value"in t&&n(1,a=t.value),"isNegative"in t&&n(2,r=t.isNegative)},[s,a,r,({key:t})=>{"Enter"===t&&l("enterPressed")},t=>{t.preventDefault();const e=+`${U(t.target.value)}`;n(1,a=r?-e:e),t.target.value=J(Math.abs(a),{showSign:!1})},()=>{n(2,r=!r),n(1,a=r?-Math.abs(a):Math.abs(a)),s.focus()},function(t){s=t,n(0,s)}]}class It extends t{constructor(t){super(),e(this,t,Et,yt,n,{inputRef:0,value:1,isNegative:2})}}function St(t){let e,n,s,c,f;return n=new ut({props:{size:"20"}}),{c(){e=h("span"),_(n.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);W(n.$$.fragment,s),s.forEach(l),this.h()},h(){o(e,"class","cursor-pointer flex space-x-2 items-end")},m(a,r){i(a,e,r),V(n,e,null),s=!0,c||(f=x(e,"click",t[9]),c=!0)},p:u,i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){t&&l(e),C(n),c=!1,f()}}}function Tt(t){let e,n,s,o,c;return n=new ot({props:{size:"20"}}),{c(){e=h("span"),_(n.$$.fragment)},l(t){e=a(t,"SPAN",{});var s=r(e);W(n.$$.fragment,s),s.forEach(l)},m(a,r){i(a,e,r),V(n,e,null),s=!0,o||(c=x(e,"click",t[7]),o=!0)},p:u,i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){t&&l(e),C(n),o=!1,c()}}}function Nt(t){let e,n,s,a,r,o;const c=[Tt,St],u=[];function f(t,e){return 8&e&&(n=!!(Object.keys(t[3]).length>=1)),n?0:1}return s=f(t,-1),a=u[s]=c[s](t),{c(){e=d("LOPY\n    "),a.c(),r=F()},l(t){e=$(t,"LOPY\n    "),a.l(t),r=F()},m(t,n){i(t,e,n),u[s].m(t,n),i(t,r,n),o=!0},p(t,e){let n=s;s=f(t,e),s===n?u[s].p(t,e):(E(),I(u[n],1,1,(()=>{u[n]=null})),S(),a=u[s],a?a.p(t,e):(a=u[s]=c[s](t),a.c()),w(a,1),a.m(r.parentNode,r))},i(t){o||(w(a),o=!0)},o(t){I(a),o=!1},d(t){t&&l(e),u[s].d(t),t&&l(r)}}}function Dt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function Bt(t){let e,n,s;function a(e){t[10].call(null,e)}let r={transactions:t[17]};return void 0!==t[3]&&(r.selectedTransactionsById=t[3]),e=new kt({props:r}),R.push((()=>A(e,"selectedTransactionsById",a))),{c(){_(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,n){V(e,t,n),s=!0},p(t,s){const a={};4&s&&(a.transactions=t[17]),!n&&8&s&&(n=!0,a.selectedTransactionsById=t[3],L((()=>n=!1))),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Pt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function zt(t){let e;return{c(){e=d("Back")},l(t){e=$(t,"Back")},m(t,n){i(t,e,n)},d(t){t&&l(e)}}}function Mt(t){let e,n,s,u;return{c(){e=h("span"),n=d("Save"),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);n=$(s,"Save"),s.forEach(l),this.h()},h(){o(e,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(t,s){i(t,e,s),c(e,n),u=!0},i(t){u||(t&&b((()=>{s||(s=y(e,Q,{},!0)),s.run(1)})),u=!0)},o(t){t&&(s||(s=y(e,Q,{},!1)),s.run(0)),u=!1},d(t){t&&l(e),t&&s&&s.end()}}}function jt(t){let e,n,s,u;return{c(){e=h("span"),n=d("Spend"),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);n=$(s,"Spend"),s.forEach(l),this.h()},h(){o(e,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(t,s){i(t,e,s),c(e,n),u=!0},i(t){u||(t&&b((()=>{s||(s=y(e,Q,{},!0)),s.run(1)})),u=!0)},o(t){t&&(s||(s=y(e,Q,{},!1)),s.run(0)),u=!1},d(t){t&&l(e),t&&s&&s.end()}}}function Rt(t){let e,n,s;const a=[jt,Mt],r=[];function o(t,e){return t[5]?0:1}return e=o(t),n=r[e]=a[e](t),{c(){n.c(),s=F()},l(t){n.l(t),s=F()},m(t,n){r[e].m(t,n),i(t,s,n)},p(t,l){let i=e;e=o(t),e!==i&&(E(),I(r[i],1,1,(()=>{r[i]=null})),S(),n=r[e],n||(n=r[e]=a[e](t),n.c()),w(n,1),n.m(s.parentNode,s))},d(t){r[e].d(t),t&&l(s)}}}function At(t){let e,n,s,u,f,d,$,g,v,x,k,b,y,E,S,T,N,D;e=new X({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}});let B={ctx:t,current:null,token:null,hasCatch:!1,pending:Pt,then:Bt,catch:Dt,value:17,blocks:[,,,]};function P(e){t[11].call(null,e)}function z(e){t[12].call(null,e)}function M(e){t[13].call(null,e)}H(s=t[2].transactions,B);let j={};function O(e){t[14].call(null,e)}void 0!==t[5]&&(j.isNegative=t[5]),void 0!==t[4].value&&(j.value=t[4].value),void 0!==t[1]&&(j.inputRef=t[1]),d=new It({props:j}),R.push((()=>A(d,"isNegative",P))),R.push((()=>A(d,"value",z))),R.push((()=>A(d,"inputRef",M))),d.$on("enterPressed",t[6]);let q={textarea:!0,id:"comment-input",class:"bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==t[4].comment&&(q.value=t[4].comment),k=new rt({props:q}),R.push((()=>A(k,"value",O))),S=new lt({props:{class:"w-20",$$slots:{default:[zt]},$$scope:{ctx:t}}}),S.$on("click",t[15]),N=new lt({props:{class:"w-20 relative",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),N.$on("click",t[8]),{c(){_(e.$$.fragment),n=m(),B.block.c(),u=m(),f=h("div"),_(d.$$.fragment),x=m(),_(k.$$.fragment),y=m(),E=h("div"),_(S.$$.fragment),T=m(),_(N.$$.fragment),this.h()},l(t){W(e.$$.fragment,t),n=p(t),B.block.l(t),u=p(t),f=a(t,"DIV",{class:!0});var s=r(f);W(d.$$.fragment,s),x=p(s),W(k.$$.fragment,s),y=p(s),E=a(s,"DIV",{class:!0});var o=r(E);W(S.$$.fragment,o),T=p(o),W(N.$$.fragment,o),o.forEach(l),s.forEach(l),this.h()},h(){o(E,"class","flex justify-around text-dark"),o(f,"class","sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4")},m(t,s){V(e,t,s),i(t,n,s),B.block.m(t,B.anchor=s),B.mount=()=>u.parentNode,B.anchor=u,i(t,u,s),i(t,f,s),V(d,f,null),c(f,x),V(k,f,null),c(f,y),c(f,E),V(S,E,null),c(E,T),V(N,E,null),D=!0},p(n,a){t=n;const r={};if(262153&a&&(r.$$scope={dirty:a,ctx:t}),e.$set(r),B.ctx=t,4&a&&s!==(s=t[2].transactions)&&H(s,B));else{const e=t.slice();e[17]=B.resolved,B.block.p(e,a)}const l={};!$&&32&a&&($=!0,l.isNegative=t[5],L((()=>$=!1))),!g&&16&a&&(g=!0,l.value=t[4].value,L((()=>g=!1))),!v&&2&a&&(v=!0,l.inputRef=t[1],L((()=>v=!1))),d.$set(l);const o={};!b&&16&a&&(b=!0,o.value=t[4].comment,L((()=>b=!1))),k.$set(o);const i={};262144&a&&(i.$$scope={dirty:a,ctx:t}),S.$set(i);const c={};262176&a&&(c.$$scope={dirty:a,ctx:t}),N.$set(c)},i(t){D||(w(e.$$.fragment,t),w(B.block),w(d.$$.fragment,t),w(k.$$.fragment,t),w(S.$$.fragment,t),w(N.$$.fragment,t),D=!0)},o(t){I(e.$$.fragment,t);for(let t=0;t<3;t+=1){const e=B.blocks[t];I(e)}I(d.$$.fragment,t),I(k.$$.fragment,t),I(S.$$.fragment,t),I(N.$$.fragment,t),D=!1},d(t){C(e,t),t&&l(n),B.block.d(t),B.token=null,B=null,t&&l(u),t&&l(f),C(d),C(k),C(S),C(N)}}}function _t(t){let e,n;return e=new Z({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){_(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,[n]){const s={};262207&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}const Wt=async({params:t})=>t;function Vt(t,e,n){let s;q(t,nt,(t=>n(16,s=t)));let{id:a}=e;let r,l=s?s.getTransactionsPaginated({actions:s,envelopeId:a}):{},o={},i={value:0,comment:""},c=!0;return t.$$set=t=>{"id"in t&&n(0,a=t.id)},[a,r,l,o,i,c,()=>{document?.getElementById("comment-input").focus()},async()=>{await s.deleteTransactions(Object.keys(o),a),n(3,o={}),n(2,l=await l.refresh())},()=>{tt()&&i.value&&s.saveTransaction(i,a).then((async()=>{n(4,i.value=0,i),n(4,i.comment="",i),n(2,l=await l.refresh()),r.focus()}))},()=>Y(`${et.EDIT}/${a}`),function(t){o=t,n(3,o)},function(t){c=t,n(5,c)},function(t){i.value=t,n(4,i)},function(t){r=t,n(1,r)},function(t){i.comment=t,n(4,i)},()=>{Y(et.HOME)}]}export default class extends t{constructor(t){super(),e(this,t,Vt,_t,n,{id:0})}}export{Wt as preload};