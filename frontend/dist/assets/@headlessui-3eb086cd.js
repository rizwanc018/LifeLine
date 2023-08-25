import{r as s,a as F}from"./react-4df190a1.js";import"./react-dom-241e1921.js";var Ue=Object.defineProperty,Be=(e,t,r)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ie=(e,t,r)=>(Be(e,typeof t!="symbol"?t+"":t,r),r);let Ke=class{constructor(){ie(this,"current",this.detect()),ie(this,"handoffState","pending"),ie(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},A=new Ke,$=(e,t)=>{A.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function L(e){let t=s.useRef(e);return $(()=>{t.current=e},[e]),t}function qe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function D(){let e=[],t={addEventListener(r,n,u,l){return r.addEventListener(n,u,l),t.add(()=>r.removeEventListener(n,u,l))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return qe(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,u){let l=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:u}),this.add(()=>{Object.assign(r.style,{[n]:l})})},group(r){let n=D();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let u of e.splice(n,1))u()}},dispose(){for(let r of e.splice(0))r()}};return t}function W(){let[e]=s.useState(D);return s.useEffect(()=>()=>e.dispose(),[e]),e}let E=function(e){let t=L(e);return F.useCallback((...r)=>t.current(...r),[t])};function pe(){let[e,t]=s.useState(A.isHandoffComplete);return e&&A.isHandoffComplete===!1&&t(!1),s.useEffect(()=>{e!==!0&&t(!0)},[e]),s.useEffect(()=>A.handoff(),[]),e}var Ie;let ve=(Ie=F.useId)!=null?Ie:function(){let e=pe(),[t,r]=F.useState(e?()=>A.nextId():null);return $(()=>{t===null&&r(A.nextId())},[t]),t!=null?""+t:void 0};function R(e,t,...r){if(e in t){let u=t[e];return typeof u=="function"?u(...r):u}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}function X(e){return A.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ce=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var de=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(de||{}),Ve=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ve||{}),Qe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Qe||{});function $e(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ce)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var he=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(he||{});function ge(e,t=0){var r;return e===((r=X(e))==null?void 0:r.body)?!1:R(t,{0(){return e.matches(ce)},1(){let n=e;for(;n!==null;){if(n.matches(ce))return!0;n=n.parentElement}return!1}})}function Ne(e){let t=X(e);D().nextFrame(()=>{t&&!ge(t.activeElement,0)&&We(e)})}var Ge=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ge||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function We(e){e==null||e.focus({preventScroll:!0})}let Xe=["textarea","input"].join(",");function Je(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Xe))!=null?r:!1}function De(e,t=r=>r){return e.slice().sort((r,n)=>{let u=t(r),l=t(n);if(u===null||l===null)return 0;let i=u.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ye(e,t){return ze($e(),t,{relativeTo:e})}function ze(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:u=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?r?De(e):e:$e(e);u.length>0&&i.length>1&&(i=i.filter(v=>!u.includes(v))),n=n??l.activeElement;let o=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(n))-1;if(t&4)return Math.max(0,i.indexOf(n))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,m=i.length,h;do{if(d>=m||d+m<=0)return 0;let v=a+d;if(t&16)v=(v+m)%m;else{if(v<0)return 3;if(v>=m)return 1}h=i[v],h==null||h.focus(c),d+=o}while(h!==l.activeElement);return t&6&&Je(h)&&h.select(),2}function V(e,t,r){let n=L(t);s.useEffect(()=>{function u(l){n.current(l)}return document.addEventListener(e,u,r),()=>document.removeEventListener(e,u,r)},[e,r])}function Ze(e,t,r){let n=L(t);s.useEffect(()=>{function u(l){n.current(l)}return window.addEventListener(e,u,r),()=>window.removeEventListener(e,u,r)},[e,r])}function et(e,t,r=!0){let n=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function u(i,o){if(!n.current||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a)||!a.isConnected)return;let c=function d(m){return typeof m=="function"?d(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let d of c){if(d===null)continue;let m=d instanceof HTMLElement?d:d.current;if(m!=null&&m.contains(a)||i.composed&&i.composedPath().includes(m))return}return!ge(a,he.Loose)&&a.tabIndex!==-1&&i.preventDefault(),t(i,a)}let l=s.useRef(null);V("pointerdown",i=>{var o,a;n.current&&(l.current=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),V("mousedown",i=>{var o,a;n.current&&(l.current=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),V("click",i=>{l.current&&(u(i,()=>l.current),l.current=null)},!0),V("touchend",i=>u(i,()=>i.target instanceof HTMLElement?i.target:null),!0),Ze("blur",i=>u(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function xe(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function tt(e,t){let[r,n]=s.useState(()=>xe(e));return $(()=>{n(xe(e))},[e.type,e.as]),$(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}let rt=Symbol();function H(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let r=E(n=>{for(let u of t.current)u!=null&&(typeof u=="function"?u(n):u.current=n)});return e.every(n=>n==null||(n==null?void 0:n[rt]))?void 0:r}function nt({container:e,accept:t,walk:r,enabled:n=!0}){let u=s.useRef(t),l=s.useRef(r);s.useEffect(()=>{u.current=t,l.current=r},[t,r]),$(()=>{if(!e||!n)return;let i=X(e);if(!i)return;let o=u.current,a=l.current,c=Object.assign(m=>o(m),{acceptNode:o}),d=i.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,c,!1);for(;d.nextNode();)a(d.currentNode)},[e,n,u,l])}function ut(e){throw new Error("Unexpected object: "+e)}var P=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(P||{});function it(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),u=n??-1,l=(()=>{switch(e.focus){case 0:return r.findIndex(i=>!t.resolveDisabled(i));case 1:{let i=r.slice().reverse().findIndex((o,a,c)=>u!==-1&&c.length-a-1>=u?!1:!t.resolveDisabled(o));return i===-1?i:r.length-1-i}case 2:return r.findIndex((i,o)=>o<=u?!1:!t.resolveDisabled(i));case 3:{let i=r.slice().reverse().findIndex(o=>!t.resolveDisabled(o));return i===-1?i:r.length-1-i}case 4:return r.findIndex(i=>t.resolveId(i)===e.id);case 5:return null;default:ut(e)}})();return l===-1?n:l}function fe(...e){return e.filter(Boolean).join(" ")}var G=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(G||{}),N=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(N||{});function _({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:u,visible:l=!0,name:i}){let o=Me(t,e);if(l)return Q(o,r,n,i);let a=u??0;if(a&2){let{static:c=!1,...d}=o;if(c)return Q(d,r,n,i)}if(a&1){let{unmount:c=!0,...d}=o;return R(c?0:1,{0(){return null},1(){return Q({...d,hidden:!0,style:{display:"none"}},r,n,i)}})}return Q(o,r,n,i)}function Q(e,t={},r,n){let{as:u=r,children:l,refName:i="ref",...o}=oe(e,["unmount","static"]),a=e.ref!==void 0?{[i]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let d={};if(t){let m=!1,h=[];for(let[v,f]of Object.entries(t))typeof f=="boolean"&&(m=!0),f===!0&&h.push(v);m&&(d["data-headlessui-state"]=h.join(" "))}if(u===s.Fragment&&Object.keys(Se(o)).length>0){if(!s.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let m=c.props,h=typeof(m==null?void 0:m.className)=="function"?(...f)=>fe(m==null?void 0:m.className(...f),o.className):fe(m==null?void 0:m.className,o.className),v=h?{className:h}:{};return s.cloneElement(c,Object.assign({},Me(c.props,Se(oe(o,["ref"]))),d,a,ot(c.ref,a.ref),v))}return s.createElement(u,Object.assign({},oe(o,["ref"]),u!==s.Fragment&&a,u!==s.Fragment&&d),c)}function ot(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function Me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let u in n)u.startsWith("on")&&typeof n[u]=="function"?(r[u]!=null||(r[u]=[]),r[u].push(n[u])):t[u]=n[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](u,...l){let i=r[n];for(let o of i){if((u instanceof Event||(u==null?void 0:u.nativeEvent)instanceof Event)&&u.defaultPrevented)return;o(u,...l)}}});return t}function k(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Se(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function oe(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function lt(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&at(r)?!1:n}function at(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let be=s.createContext(null);be.displayName="OpenClosedContext";var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function Ee(){return s.useContext(be)}function Le({value:e,children:t}){return F.createElement(be.Provider,{value:e},t)}var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{});function Fe(e){return[e.screenX,e.screenY]}function st(){let e=s.useRef([-1,-1]);return{wasMoved(t){let r=Fe(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=Fe(t)}}}function ye(){let e=s.useRef(!1);return $(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ct(...e){return s.useMemo(()=>X(...e),[...e])}let Te=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Re(e){var t,r;let n=(t=e.innerText)!=null?t:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return n;let l=!1;for(let o of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))o.remove(),l=!0;let i=l?(r=u.innerText)!=null?r:"":n;return Te.test(i)&&(i=i.replace(Te,"")),i}function dt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let n=r.split(" ").map(u=>{let l=document.getElementById(u);if(l){let i=l.getAttribute("aria-label");return typeof i=="string"?i.trim():Re(l).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return Re(e).trim()}function ft(e){let t=s.useRef(""),r=s.useRef("");return E(()=>{let n=e.current;if(!n)return"";let u=n.innerText;if(t.current===u)return r.current;let l=dt(n).trim().toLowerCase();return t.current=u,r.current=l,l})}var mt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(mt||{}),pt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(pt||{}),vt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(vt||{});function le(e,t=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=De(t(e.items.slice()),l=>l.dataRef.current.domRef.current),u=r?n.indexOf(r):null;return u===-1&&(u=null),{items:n,activeItemIndex:u}}let ht={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var r;let n=le(e),u=it(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:u,activationTrigger:(r=t.trigger)!=null?r:1}},3:(e,t)=>{let r=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),u=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(i=>{var o;return((o=i.dataRef.current.textValue)==null?void 0:o.startsWith(n))&&!i.dataRef.current.disabled}),l=u?e.items.indexOf(u):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let r=le(e,n=>[...n,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=le(e,n=>{let u=n.findIndex(l=>l.id===t.id);return u!==-1&&n.splice(u,1),n});return{...e,...r,activationTrigger:1}}},we=s.createContext(null);we.displayName="MenuContext";function J(e){let t=s.useContext(we);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,J),r}return t}function gt(e,t){return R(t.type,ht,e,t)}let bt=s.Fragment;function Et(e,t){let{__demoMode:r=!1,...n}=e,u=s.useReducer(gt,{__demoMode:r,menuState:r?0:1,buttonRef:s.createRef(),itemsRef:s.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsRef:i,buttonRef:o},a]=u,c=H(t);et([o,i],(v,f)=>{var g;a({type:1}),ge(f,he.Loose)||(v.preventDefault(),(g=o.current)==null||g.focus())},l===0);let d=E(()=>{a({type:1})}),m=s.useMemo(()=>({open:l===0,close:d}),[l,d]),h={ref:c};return F.createElement(we.Provider,{value:u},F.createElement(Le,{value:R(l,{0:T.Open,1:T.Closed})},_({ourProps:h,theirProps:n,slot:m,defaultTag:bt,name:"Menu"})))}let yt="button";function wt(e,t){var r;let n=ve(),{id:u=`headlessui-menu-button-${n}`,...l}=e,[i,o]=J("Menu.Button"),a=H(i.buttonRef,t),c=W(),d=E(g=>{switch(g.key){case S.Space:case S.Enter:case S.ArrowDown:g.preventDefault(),g.stopPropagation(),o({type:0}),c.nextFrame(()=>o({type:2,focus:P.First}));break;case S.ArrowUp:g.preventDefault(),g.stopPropagation(),o({type:0}),c.nextFrame(()=>o({type:2,focus:P.Last}));break}}),m=E(g=>{switch(g.key){case S.Space:g.preventDefault();break}}),h=E(g=>{if(lt(g.currentTarget))return g.preventDefault();e.disabled||(i.menuState===0?(o({type:1}),c.nextFrame(()=>{var b;return(b=i.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})})):(g.preventDefault(),o({type:0})))}),v=s.useMemo(()=>({open:i.menuState===0}),[i]),f={ref:a,id:u,type:tt(e,i.buttonRef),"aria-haspopup":"menu","aria-controls":(r=i.itemsRef.current)==null?void 0:r.id,"aria-expanded":i.menuState===0,onKeyDown:d,onKeyUp:m,onClick:h};return _({ourProps:f,theirProps:l,slot:v,defaultTag:yt,name:"Menu.Button"})}let It="div",xt=G.RenderStrategy|G.Static;function St(e,t){var r,n;let u=ve(),{id:l=`headlessui-menu-items-${u}`,...i}=e,[o,a]=J("Menu.Items"),c=H(o.itemsRef,t),d=ct(o.itemsRef),m=W(),h=Ee(),v=(()=>h!==null?(h&T.Open)===T.Open:o.menuState===0)();s.useEffect(()=>{let p=o.itemsRef.current;p&&o.menuState===0&&p!==(d==null?void 0:d.activeElement)&&p.focus({preventScroll:!0})},[o.menuState,o.itemsRef,d]),nt({container:o.itemsRef.current,enabled:o.menuState===0,accept(p){return p.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let f=E(p=>{var x,I;switch(m.dispose(),p.key){case S.Space:if(o.searchQuery!=="")return p.preventDefault(),p.stopPropagation(),a({type:3,value:p.key});case S.Enter:if(p.preventDefault(),p.stopPropagation(),a({type:1}),o.activeItemIndex!==null){let{dataRef:y}=o.items[o.activeItemIndex];(I=(x=y.current)==null?void 0:x.domRef.current)==null||I.click()}Ne(o.buttonRef.current);break;case S.ArrowDown:return p.preventDefault(),p.stopPropagation(),a({type:2,focus:P.Next});case S.ArrowUp:return p.preventDefault(),p.stopPropagation(),a({type:2,focus:P.Previous});case S.Home:case S.PageUp:return p.preventDefault(),p.stopPropagation(),a({type:2,focus:P.First});case S.End:case S.PageDown:return p.preventDefault(),p.stopPropagation(),a({type:2,focus:P.Last});case S.Escape:p.preventDefault(),p.stopPropagation(),a({type:1}),D().nextFrame(()=>{var y;return(y=o.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})});break;case S.Tab:p.preventDefault(),p.stopPropagation(),a({type:1}),D().nextFrame(()=>{Ye(o.buttonRef.current,p.shiftKey?de.Previous:de.Next)});break;default:p.key.length===1&&(a({type:3,value:p.key}),m.setTimeout(()=>a({type:4}),350));break}}),g=E(p=>{switch(p.key){case S.Space:p.preventDefault();break}}),b=s.useMemo(()=>({open:o.menuState===0}),[o]),w={"aria-activedescendant":o.activeItemIndex===null||(r=o.items[o.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(n=o.buttonRef.current)==null?void 0:n.id,id:l,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:c};return _({ourProps:w,theirProps:i,slot:b,defaultTag:It,features:xt,visible:v,name:"Menu.Items"})}let Ft=s.Fragment;function Tt(e,t){let r=ve(),{id:n=`headlessui-menu-item-${r}`,disabled:u=!1,...l}=e,[i,o]=J("Menu.Item"),a=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===n:!1,c=s.useRef(null),d=H(t,c);$(()=>{if(i.__demoMode||i.menuState!==0||!a||i.activationTrigger===0)return;let y=D();return y.requestAnimationFrame(()=>{var j,O;(O=(j=c.current)==null?void 0:j.scrollIntoView)==null||O.call(j,{block:"nearest"})}),y.dispose},[i.__demoMode,c,a,i.menuState,i.activationTrigger,i.activeItemIndex]);let m=ft(c),h=s.useRef({disabled:u,domRef:c,get textValue(){return m()}});$(()=>{h.current.disabled=u},[h,u]),$(()=>(o({type:5,id:n,dataRef:h}),()=>o({type:6,id:n})),[h,n]);let v=E(()=>{o({type:1})}),f=E(y=>{if(u)return y.preventDefault();o({type:1}),Ne(i.buttonRef.current)}),g=E(()=>{if(u)return o({type:2,focus:P.Nothing});o({type:2,focus:P.Specific,id:n})}),b=st(),w=E(y=>b.update(y)),p=E(y=>{b.wasMoved(y)&&(u||a||o({type:2,focus:P.Specific,id:n,trigger:0}))}),x=E(y=>{b.wasMoved(y)&&(u||a&&o({type:2,focus:P.Nothing}))}),I=s.useMemo(()=>({active:a,disabled:u,close:v}),[a,u,v]);return _({ourProps:{id:n,ref:d,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:f,onFocus:g,onPointerEnter:w,onMouseEnter:w,onPointerMove:p,onMouseMove:p,onPointerLeave:x,onMouseLeave:x},theirProps:l,slot:I,defaultTag:Ft,name:"Menu.Item"})}let Rt=k(Et),Pt=k(wt),$t=k(St),Nt=k(Tt),Jt=Object.assign(Rt,{Button:Pt,Items:$t,Item:Nt});function Dt(e=0){let[t,r]=s.useState(e),n=ye(),u=s.useCallback(a=>{n.current&&r(c=>c|a)},[t,n]),l=s.useCallback(a=>!!(t&a),[t]),i=s.useCallback(a=>{n.current&&r(c=>c&~a)},[r,n]),o=s.useCallback(a=>{n.current&&r(c=>c^a)},[r]);return{flags:t,addFlag:u,hasFlag:l,removeFlag:i,toggleFlag:o}}function Mt(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function ae(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Lt(e,t){let r=D();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:u}=getComputedStyle(e),[l,i]=[n,u].map(a=>{let[c=0]=a.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,m)=>m-d);return c}),o=l+i;if(o!==0){r.group(c=>{c.setTimeout(()=>{t(),c.dispose()},o),c.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&c.dispose()})});let a=r.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),a())})}else t();return r.add(()=>t()),r.dispose}function Ot(e,t,r,n){let u=r?"enter":"leave",l=D(),i=n!==void 0?Mt(n):()=>{};u==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let o=R(u,{enter:()=>t.enter,leave:()=>t.leave}),a=R(u,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=R(u,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return se(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),ae(e,...o,...c),l.nextFrame(()=>{se(e,...c),ae(e,...a),Lt(e,()=>(se(e,...o),ae(e,...t.entered),i()))}),l.dispose}function Ct({container:e,direction:t,classes:r,onStart:n,onStop:u}){let l=ye(),i=W(),o=L(t);$(()=>{let a=D();i.add(a.dispose);let c=e.current;if(c&&o.current!=="idle"&&l.current)return a.dispose(),n.current(o.current),a.add(Ot(c,r.current,o.current==="enter",()=>{a.dispose(),u.current(o.current)})),a.dispose},[t])}function C(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Y=s.createContext(null);Y.displayName="TransitionContext";var At=(e=>(e.Visible="visible",e.Hidden="hidden",e))(At||{});function kt(){let e=s.useContext(Y);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function jt(){let e=s.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let z=s.createContext(null);z.displayName="NestingContext";function Z(e){return"children"in e?Z(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Oe(e,t){let r=L(e),n=s.useRef([]),u=ye(),l=W(),i=E((v,f=N.Hidden)=>{let g=n.current.findIndex(({el:b})=>b===v);g!==-1&&(R(f,{[N.Unmount](){n.current.splice(g,1)},[N.Hidden](){n.current[g].state="hidden"}}),l.microTask(()=>{var b;!Z(n)&&u.current&&((b=r.current)==null||b.call(r))}))}),o=E(v=>{let f=n.current.find(({el:g})=>g===v);return f?f.state!=="visible"&&(f.state="visible"):n.current.push({el:v,state:"visible"}),()=>i(v,N.Unmount)}),a=s.useRef([]),c=s.useRef(Promise.resolve()),d=s.useRef({enter:[],leave:[],idle:[]}),m=E((v,f,g)=>{a.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([b])=>b!==v)),t==null||t.chains.current[f].push([v,new Promise(b=>{a.current.push(b)})]),t==null||t.chains.current[f].push([v,new Promise(b=>{Promise.all(d.current[f].map(([w,p])=>p)).then(()=>b())})]),f==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(f)):g(f)}),h=E((v,f,g)=>{Promise.all(d.current[f].splice(0).map(([b,w])=>w)).then(()=>{var b;(b=a.current.shift())==null||b()}).then(()=>g(f))});return s.useMemo(()=>({children:n,register:o,unregister:i,onStart:m,onStop:h,wait:c,chains:d}),[o,i,n,m,h,d,c])}function Ht(){}let _t=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Pe(e){var t;let r={};for(let n of _t)r[n]=(t=e[n])!=null?t:Ht;return r}function Ut(e){let t=s.useRef(Pe(e));return s.useEffect(()=>{t.current=Pe(e)},[e]),t}let Bt="div",Ce=G.RenderStrategy;function Kt(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:u,afterLeave:l,enter:i,enterFrom:o,enterTo:a,entered:c,leave:d,leaveFrom:m,leaveTo:h,...v}=e,f=s.useRef(null),g=H(f,t),b=v.unmount?N.Unmount:N.Hidden,{show:w,appear:p,initial:x}=kt(),[I,y]=s.useState(w?"visible":"hidden"),j=jt(),{register:O,unregister:B}=j,ee=s.useRef(null);s.useEffect(()=>O(f),[O,f]),s.useEffect(()=>{if(b===N.Hidden&&f.current){if(w&&I!=="visible"){y("visible");return}return R(I,{hidden:()=>B(f),visible:()=>O(f)})}},[I,f,O,B,w,b]);let te=L({enter:C(i),enterFrom:C(o),enterTo:C(a),entered:C(c),leave:C(d),leaveFrom:C(m),leaveTo:C(h)}),K=Ut({beforeEnter:r,afterEnter:n,beforeLeave:u,afterLeave:l}),re=pe();s.useEffect(()=>{if(re&&I==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,I,re]);let ne=x&&!p,ke=(()=>!re||ne||ee.current===w?"idle":w?"enter":"leave")(),U=Dt(0),je=E(M=>R(M,{enter:()=>{U.addFlag(T.Opening),K.current.beforeEnter()},leave:()=>{U.addFlag(T.Closing),K.current.beforeLeave()},idle:()=>{}})),He=E(M=>R(M,{enter:()=>{U.removeFlag(T.Opening),K.current.afterEnter()},leave:()=>{U.removeFlag(T.Closing),K.current.afterLeave()},idle:()=>{}})),q=Oe(()=>{y("hidden"),B(f)},j);Ct({container:f,classes:te,direction:ke,onStart:L(M=>{q.onStart(f,M,je)}),onStop:L(M=>{q.onStop(f,M,He),M==="leave"&&!Z(q)&&(y("hidden"),B(f))})}),s.useEffect(()=>{ne&&(b===N.Hidden?ee.current=null:ee.current=w)},[w,ne,I]);let ue=v,_e={ref:g};return p&&w&&x&&(ue={...ue,className:fe(v.className,...te.current.enter,...te.current.enterFrom)}),F.createElement(z.Provider,{value:q},F.createElement(Le,{value:R(I,{visible:T.Open,hidden:T.Closed})|U.flags},_({ourProps:_e,theirProps:ue,defaultTag:Bt,features:Ce,visible:I==="visible",name:"Transition.Child"})))}function qt(e,t){let{show:r,appear:n=!1,unmount:u,...l}=e,i=s.useRef(null),o=H(i,t);pe();let a=Ee();if(r===void 0&&a!==null&&(r=(a&T.Open)===T.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=s.useState(r?"visible":"hidden"),m=Oe(()=>{d("hidden")}),[h,v]=s.useState(!0),f=s.useRef([r]);$(()=>{h!==!1&&f.current[f.current.length-1]!==r&&(f.current.push(r),v(!1))},[f,r]);let g=s.useMemo(()=>({show:r,appear:n,initial:h}),[r,n,h]);s.useEffect(()=>{if(r)d("visible");else if(!Z(m))d("hidden");else{let x=i.current;if(!x)return;let I=x.getBoundingClientRect();I.x===0&&I.y===0&&I.width===0&&I.height===0&&d("hidden")}},[r,m]);let b={unmount:u},w=E(()=>{var x;h&&v(!1),(x=e.beforeEnter)==null||x.call(e)}),p=E(()=>{var x;h&&v(!1),(x=e.beforeLeave)==null||x.call(e)});return F.createElement(z.Provider,{value:m},F.createElement(Y.Provider,{value:g},_({ourProps:{...b,as:s.Fragment,children:F.createElement(Ae,{ref:o,...b,...l,beforeEnter:w,beforeLeave:p})},theirProps:{},defaultTag:s.Fragment,features:Ce,visible:c==="visible",name:"Transition"})))}function Vt(e,t){let r=s.useContext(Y)!==null,n=Ee()!==null;return F.createElement(F.Fragment,null,!r&&n?F.createElement(me,{ref:t,...e}):F.createElement(Ae,{ref:t,...e}))}let me=k(qt),Ae=k(Kt),Qt=k(Vt),Yt=Object.assign(me,{Child:Qt,Root:me});export{Yt as $,Jt as i};