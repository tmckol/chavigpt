import{s as x,x as E,y as w,H as j,z as y,l as d,A as F,g as f,B as A,i as V,C as b,D,m as o,F as g,j as k,a as L,p as G,k as N,c as R,q as J,n as I,r as K,E as O,G as M,I as U,J as Y,K as P,f as B,b as T,L as Q,V as W,R as X}from"./boolean_attributes.9921dbdc.js";import{g as $}from"./settings.b07edce2.js";import{S as C,i as H,c as S,a as q,m as z,d as Z}from"./index.369f2cd8.js";function ee(l){let e,a,s='<path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"/>',r=[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},l[0]],n={};for(let t=0;t<r.length;t+=1)n=E(n,r[t]);return{c(){e=w("svg"),a=new j(!0),this.h()},l(t){e=y(t,"svg",{viewBox:!0,width:!0,height:!0});var i=d(e);a=F(i,!0),i.forEach(f),this.h()},h(){a.a=null,A(e,n)},m(t,i){V(t,e,i),a.m(s,e)},p(t,[i]){A(e,n=$(r,[{viewBox:"0 0 32 32"},{width:"1.2em"},{height:"1.2em"},i&1&&t[0]]))},i:b,o:b,d(t){t&&f(e)}}}function te(l,e,a){return l.$$set=s=>{a(0,e=E(E({},e),D(s)))},e=D(e),[e]}class me extends C{constructor(e){super(),H(this,e,te,ee,x,{})}}function ae(l){let e,a,s,r;return{c(){e=w("svg"),a=w("path"),s=w("path"),r=w("rect"),this.h()},l(n){e=y(n,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var t=d(e);a=y(t,"path",{d:!0,transform:!0}),d(a).forEach(f),s=y(t,"path",{d:!0,transform:!0}),d(s).forEach(f),r=y(t,"rect",{fill:!0,width:!0,height:!0}),d(r).forEach(f),t.forEach(f),this.h()},h(){o(a,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),o(a,"transform","translate(0)"),o(s,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),o(s,"transform","translate(0)"),o(r,"fill","none"),o(r,"width","32"),o(r,"height","32"),o(e,"class",l[0]),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"aria-hidden","true"),o(e,"fill","currentColor"),o(e,"focusable","false"),o(e,"role","img"),o(e,"width","1em"),o(e,"height","1em"),o(e,"preserveAspectRatio","xMidYMid meet"),o(e,"viewBox","0 0 32 32")},m(n,t){V(n,e,t),g(e,a),g(e,s),g(e,r)},p(n,[t]){t&1&&o(e,"class",n[0])},i:b,o:b,d(n){n&&f(e)}}}function se(l,e,a){let{classNames:s=""}=e;return l.$$set=r=>{"classNames"in r&&a(0,s=r.classNames)},[s]}class re extends C{constructor(e){super(),H(this,e,se,ae,x,{classNames:0})}}function le(l){let e,a,s,r,n;return{c(){e=k("div"),a=k("div"),s=L(),r=G(l[1]),this.h()},l(t){e=N(t,"DIV",{class:!0});var i=d(e);a=N(i,"DIV",{class:!0,style:!0}),d(a).forEach(f),s=R(i),r=J(i,l[1]),i.forEach(f),this.h()},h(){o(a,"class","absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-4 border-t-0 border-black"),I(a,"border-left-color","transparent"),I(a,"border-right-color","transparent"),o(e,"class",n="pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity "+l[2]+" "+l[0])},m(t,i){V(t,e,i),g(e,a),g(e,s),g(e,r)},p(t,[i]){i&2&&K(r,t[1]),i&5&&n!==(n="pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity "+t[2]+" "+t[0])&&o(e,"class",n)},i:b,o:b,d(t){t&&f(e)}}}function ne(l,e,a){let{classNames:s=""}=e,{label:r="Copied"}=e,{position:n="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=e;return l.$$set=t=>{"classNames"in t&&a(0,s=t.classNames),"label"in t&&a(1,r=t.label),"position"in t&&a(2,n=t.position)},[s,r,n]}class oe extends C{constructor(e){super(),H(this,e,ne,le,x,{classNames:0,label:1,position:2})}}function ie(l){let e,a;return e=new re({}),{c(){S(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,r){z(e,s,r),a=!0},i(s){a||(B(e.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),a=!1},d(s){Z(e,s)}}}function ce(l){let e,a,s,r,n,t,i,m;const p=l[5].default,v=O(p,l,l[4],null),c=v||ie();return r=new oe({props:{classNames:l[1]?"opacity-100":"opacity-0"}}),{c(){e=k("button"),a=k("div"),c&&c.c(),s=L(),S(r.$$.fragment),this.h()},l(u){e=N(u,"BUTTON",{class:!0,title:!0,type:!0});var h=d(e);a=N(h,"DIV",{class:!0});var _=d(a);c&&c.l(_),s=R(_),q(r.$$.fragment,_),_.forEach(f),h.forEach(f),this.h()},h(){o(a,"class","relative"),o(e,"class",n="btn rounded-lg border border-gray-200 px-2 py-2 text-sm shadow-sm transition-all hover:border-gray-300 active:shadow-inner dark:border-gray-700 dark:hover:border-gray-500 "+l[0]),o(e,"title","Copy to clipboard"),o(e,"type","button")},m(u,h){V(u,e,h),g(e,a),c&&c.m(a,null),g(a,s),z(r,a,null),t=!0,i||(m=[M(e,"click",l[6]),M(e,"click",l[2])],i=!0)},p(u,[h]){v&&v.p&&(!t||h&16)&&U(v,p,u,u[4],t?P(p,u[4],h,null):Y(u[4]),null);const _={};h&2&&(_.classNames=u[1]?"opacity-100":"opacity-0"),r.$set(_),(!t||h&1&&n!==(n="btn rounded-lg border border-gray-200 px-2 py-2 text-sm shadow-sm transition-all hover:border-gray-300 active:shadow-inner dark:border-gray-700 dark:hover:border-gray-500 "+u[0]))&&o(e,"class",n)},i(u){t||(B(c,u),B(r.$$.fragment,u),t=!0)},o(u){T(c,u),T(r.$$.fragment,u),t=!1},d(u){u&&f(e),c&&c.d(u),Z(r),i=!1,Q(m)}}}function ue(l,e,a){let{$$slots:s={},$$scope:r}=e,{classNames:n=""}=e,{value:t}=e,i=!1,m;const p=async()=>{try{await navigator.clipboard.writeText(t),a(1,i=!0),m&&clearTimeout(m),m=setTimeout(()=>{a(1,i=!1)},1e3)}catch(c){console.error(c)}};W(()=>{m&&clearTimeout(m)});function v(c){X.call(this,l,c)}return l.$$set=c=>{"classNames"in c&&a(0,n=c.classNames),"value"in c&&a(3,t=c.value),"$$scope"in c&&a(4,r=c.$$scope)},[n,i,p,t,r,s,v]}class ge extends C{constructor(e){super(),H(this,e,ue,ce,x,{classNames:0,value:3})}}export{me as A,ge as C};