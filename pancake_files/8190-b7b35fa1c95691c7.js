!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6418f407-3e10-4d88-b57b-68f5e84530cb",e._sentryDebugIdIdentifier="sentry-dbid-6418f407-3e10-4d88-b57b-68f5e84530cb")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{7594:function(e,t,n){n.d(t,{L:function(){return _}});var r=n(97458),s=n(54371),i=n(71409),o=n(31224),a=n(16830),l=n.n(a),c=n(71163),u=n(13865),d=n(44917),f=n(45634),m=n(33620);let v=["fr"],h=e=>v.includes(e),p=l()(()=>Promise.all([n.e(2982),n.e(8305),n.e(5697),n.e(9974),n.e(3121),n.e(3472),n.e(7601),n.e(3044),n.e(3634),n.e(7640)]).then(n.bind(n,47844)).then(e=>e.CurrentBodyLayout),{loadableGenerated:{webpack:()=>[47844]}}),b=l()(()=>Promise.all([n.e(2982),n.e(8305),n.e(5697),n.e(5817),n.e(9974),n.e(8778),n.e(1187),n.e(800),n.e(6869),n.e(1953),n.e(3472),n.e(7601),n.e(3044),n.e(3634),n.e(9210)]).then(n.bind(n,94332)).then(e=>e.NewBodyLayout),{loadableGenerated:{webpack:()=>[94332]}}),g=e=>{var t;let{children:n,mode:s,origin:i,alternates:o,isHomeAuthTestEnabled:a,isNewSearchEnabled:l,menuBarType:c="sidebar"}=e,{locale:u}=(0,m.V)(),d=(0,f.A)("SIDEBAR");return"sidebar"===c&&(null!==(t=h(u))&&void 0!==t?t:d)||a||l?(0,r.jsx)(b,{mode:s,origin:i,alternates:o,isNewSearchEnabled:l,isHomeAuthTestEnabled:a,children:n}):(0,r.jsx)(p,{mode:s,origin:i,alternates:o,children:n})},y=l()(()=>Promise.all([n.e(2710),n.e(3642)]).then(n.bind(n,78088)).then(e=>e.AddonsModal),{loadableGenerated:{webpack:()=>[78088]},ssr:!1}),w=l()(()=>n.e(4408).then(n.bind(n,64408)).then(e=>e.Notifications),{loadableGenerated:{webpack:()=>[64408]},ssr:!1}),x=l()(()=>Promise.all([n.e(2982),n.e(9383)]).then(n.bind(n,39162)).then(e=>e.Toast),{loadableGenerated:{webpack:()=>[39162]},ssr:!1}),E=l()(()=>n.e(8851).then(n.bind(n,88851)).then(e=>e.ExpressCheckout),{loadableGenerated:{webpack:()=>[88851]},ssr:!1}),j=l()(()=>n.e(9766).then(n.bind(n,69766)).then(e=>e.CampaignInitializer),{loadableGenerated:{webpack:()=>[69766]},ssr:!1}),_=e=>{let{initialActiveFilters:t,localeInfo:n,topBarMode:a,menuBarMode:l="sidebar",children:f,origin:m,country:v,isHomeAuthTestEnabled:h,isNewSearchEnabled:p,gaCookie:b,userInfo:_,alternates:k}=e,{t:C}=(0,c.$G)("error");return(0,r.jsx)(d.I,{initialActiveFilters:t,country:v,gaCookie:b,userInfo:_,isNewSearchEnabled:p,children:(0,r.jsxs)(o.V,{baseItem:{type:"warning",message:C("unknown")},children:[(0,r.jsx)(j,{}),(0,r.jsx)(i.RW,{...n,children:(0,r.jsxs)(u.l,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(g,{mode:a,origin:m,alternates:k,isHomeAuthTestEnabled:h,isNewSearchEnabled:p,menuBarType:l,children:f}),(0,r.jsx)(s.x,{}),(0,r.jsx)(x,{}),(0,r.jsx)(E,{}),(0,r.jsx)(y,{})]})})]})})}},80274:function(e,t,n){n.d(t,{I:function(){return r.I},L:function(){return s.L}});var r=n(44917),s=n(7594)},64456:function(e,t,n){n.d(t,{f:function(){return a},I:function(){return l}});var r=n(97458),s=n(72118),i=n(52983);let o=(0,i.createContext)(void 0),a=e=>{let{children:t,gaCookie:n}=e,[a,l]=(0,i.useState)(null),c=!n;return(0,i.useEffect)(()=>{if(c){var e;l(null!==(e=s.Z.get("_ga"))&&void 0!==e?e:null)}},[c]),(0,r.jsx)(o.Provider,{value:null!=n?n:a,children:t})},l=()=>{let e=(0,i.useContext)(o);if(void 0===e)throw Error("useGoogleAnalyticsCookie must be used within a GoogleAnalyticsCookieProvider");return e}},85962:function(e,t,n){n.d(t,{o:function(){return r}});let r=(0,n(52983).createContext)(null)},13865:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(97458),s=n(16830),i=n.n(s),o=n(52983),a=n(31586),l=n(85962);let c=i()(()=>Promise.all([n.e(3870),n.e(7657)]).then(n.bind(n,7657)).then(e=>e.ModalPricing),{loadableGenerated:{webpack:()=>[7657]},ssr:!1}),u=e=>{let{children:t}=e,[n,s]=(0,o.useState)(!1),[i,u]=(0,o.useState)(),[d,f]=(0,o.useState)(void 0),[m,v]=(0,o.useState)(a.ZV),[h,p]=(0,o.useState)(()=>{}),[b,g]=(0,o.useState)(void 0),[y,w]=(0,o.useState)(void 0),[x,E]=(0,o.useState)(void 0),j=(0,o.useMemo)(()=>({showModal:n,setShowModal:s,origin:i,setOrigin:u,premiumPlan:d,setPremiumPlan:f,frequency:m,setFrequency:v,trackerClick:h,setTrackerClick:p,resourceData:b,setResourceData:g,checkoutQueryParams:y,setCheckoutQueryParams:w,modalType:x,setModalType:E}),[n,i,d,m,h,b,y,x]);return(0,r.jsxs)(l.o.Provider,{value:j,children:[(0,r.jsx)(c,{}),t]})}},31586:function(e,t,n){n.d(t,{A:function(){return i},CT:function(){return o},ZV:function(){return s},oN:function(){return r}});let r="FR-PREMIUMT",s="annual",i=[{product_id:"0",product_product_code:r,product_name:"",price_id:"",price_frequency:"yearly",price_currency:"",price_amount_cents:100,price_country_code:"",price_state_code:"",price_which_test:"",price_version:1,price_active:!0,price_external_id:"",price_coupon:{coupon_id:"ID_COUPON",coupon_description:"",coupon_type:"",coupon_value:15,coupon_price_calculated:100},price_seats:2,price_discount_percentage_to_monthly:0,total_tax_amount:20,is_tax_included:!0,credits_monthly:4e3,credits_yearly:5e3,totalAssets:{images:0,video:0}}],o=200},26521:function(e,t,n){n.d(t,{I8:function(){return c},LH:function(){return u},cs:function(){return a},zs:function(){return l}});var r=n(24399),s=n(7616),i=n(52983),o=n(1850);let a={expanded:{type:!0,license:!0,iconType:!0},show:!0},l=(0,r.cn)(a),c=(0,r.cn)(e=>e(l).show,(e,t,n)=>{t(l,{...e(l),show:n})}),u=()=>{let e=(0,s.b9)(l);return(0,i.useCallback)((t,n)=>{e(e=>({...e,expanded:{...e.expanded,[t]:n}}))},[e])};o.z.object({expanded:o.z.record(o.z.boolean()),group:o.z.unknown(),show:o.z.boolean()})},13367:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(97458),s=n(83598),i=n(78364),o=n(50273);let a=e=>{let{onClose:t,button:n,children:a,icon:l,permanent:c,type:u}=e;return(0,r.jsxs)("div",{className:(0,i.W)("$flex $items-start $px-15 $py-10 $text-white sm:$items-center","danger"===u&&"$bg-redBloody","info"===u&&"$bg-blueFreepik","success"===u&&"$bg-greenFlaticon"),children:[l&&(0,r.jsx)("div",{className:"$hidden sm:$inline-block",children:(0,r.jsx)(o.J,{as:l,className:"$mr-10 $block"})}),(0,r.jsxs)("div",{className:"$block $flex-1 $items-center $justify-between sm:$flex",children:[(0,r.jsx)("p",{className:"$mb-5 $mr-0 sm:$mb-0 sm:$mr-15",children:a}),n]}),!c&&(0,r.jsx)("button",{onClick:t,className:"$-mr-5 $p-5 $text-white",children:(0,r.jsx)(o.J,{as:s.Z,className:"$ml-10"})})]})}},80320:function(e,t,n){n.d(t,{Fs:function(){return i},IJ:function(){return s},ZC:function(){return o},x_:function(){return a}});var r=n(52983);let s=(0,r.createContext)(void 0),i=(0,r.createContext)(void 0),o=()=>{let e=(0,r.useContext)(s);if(void 0===e)throw Error("useToastItem must be used within a ToastProvider");return e},a=()=>{let e=(0,r.useContext)(i);if(void 0===e)throw Error("useToastActions must be used within a ToastProvider");return e}},31224:function(e,t,n){n.d(t,{V:function(){return o}});var r=n(97458),s=n(52983),i=n(80320);let o=e=>{let{children:t,baseItem:n={type:"warning",message:"unknown"}}=e,[o,a]=(0,s.useState)(null),{type:l,message:c,duration:u,testId:d,title:f}=n,m=(0,s.useMemo)(()=>({openToast:e=>{a(null!=e?e:{type:l,message:c,duration:u,testId:d,title:f})},closeToast:()=>{a(null)}}),[u,c,d,f,l]);return(0,r.jsx)(i.IJ.Provider,{value:o,children:(0,r.jsx)(i.Fs.Provider,{value:m,children:t})})}},54371:function(e,t,n){n.d(t,{x:function(){return l}});var r=n(97458),s=n(88887),i=n.n(s);let o=e=>{let{id:t="GTM-NC7VC6W"}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("script",{id:"gtm-script",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            (function() {\n              try {\n                var uid = document.cookie.split('; ').find(row => row.startsWith('".concat("UID","='));\n                if (uid) {\n                  uid = uid.split('=')[1];\n                  window.dataLayer.push({ user_id: uid });\n                }\n              } catch (error) {}\n            })();\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','").concat(t,"');\n          ")}})}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=".concat(t),height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})};var a=n(40862);let l=e=>{let{id:t}=e;return(0,a.p)(),(0,r.jsx)(o,{id:t})}},48070:function(e,t,n){n.d(t,{en:function(){return g},Il:function(){return _},qx:function(){return v}});var r=n(97458),s=n(93611),i=n(13367),o=n(58785),a=n(71163),l=n(7616),c=n(45634),u=n(24399);let d=(0,u.cn)(void 0),f=(0,u.cn)(!1),m=(0,u.cn)(e=>{let t=e(d);return!!t&&t.disabled}),v=()=>{let[e,t]=(0,l.KO)(f),n=(0,l.Dv)(m);return{isDeviceBlocked:(0,c.A)("DEVICE_LIMIT_BLOCK")&&n,isOpenDeviceBlockedModal:e,showDeviceBlockedModal:()=>t(!0),hideDeviceBlockedModal:()=>t(!1)}};var h=n(50273),p=n(98015);let b=()=>{let{t:e}=(0,a.$G)("detail"),{isOpenDeviceBlockedModal:t,hideDeviceBlockedModal:n}=v();return(0,r.jsx)(p.u,{size:"sm",open:t,onOpenChange:n,children:(0,r.jsxs)("div",{className:"$text-center",children:[(0,r.jsxs)("div",{className:"$sprinkles-text-lg $font-semibold $flex $items-center $justify-center $text-grayOxford $mb-10",children:[(0,r.jsx)(h.J,{as:o.Z,size:"xl",className:"$mr-10 $text-grayHoki"}),e("deviceBlocked.title")]}),(0,r.jsx)("p",{className:"$sprinkles-text-base $text-grayOxford $mb-20",children:e("deviceBlocked.description")}),(0,r.jsx)(s.gg,{as:"a",href:"/user/device-manager",children:e("deviceBlocked.button")})]})})},g=()=>{let{t:e}=(0,a.$G)("common"),t="danger",{isDeviceBlocked:n}=v();if(!n)return null;let l=(0,r.jsx)(s.gg,{as:"a",size:"sm",color:t,href:"/user/device-manager",children:e("downloadsDisabled.button")});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.b,{type:t,button:l,icon:o.Z,permanent:!0,children:[(0,r.jsx)("strong",{children:e("downloadsDisabled.title")})," ",e("downloadsDisabled.description")]}),(0,r.jsx)(b,{})]})};var y=n(52983),w=n(42011),x=n(69541),E=n(93113);let j=async()=>{let e=await fetch("/user/api/devices/identify",{method:"POST"});if(!e.ok)throw Error("Error checking user device data.");let t=await e.json();return E.I.parse(t)},_=e=>{let{children:t}=e,n=(0,w.d)(),s=(0,l.b9)(d),i=(0,y.useCallback)(e=>{s(e),e?x.Z.set(e):x.Z.remove()},[s]);return(0,y.useEffect)(()=>{let e=async()=>{let e=new Date().getTime(),t={disabled:!1,expiry:e+18e5},n=x.Z.get();if(n&&n.expiry>e)return n;try{let e=await j();t.disabled=e.success&&e.disabled}catch(e){console.error("Error getting device manager status",e)}finally{x.Z.set(t)}return t};n&&e().then(i)},[i,n]),(0,r.jsx)(r.Fragment,{children:t})}},65847:function(e,t,n){n.d(t,{p0:function(){return s},y7:function(){return i},yP:function(){return r}});let r="ua_log",s=10,i=3e5},76698:function(e,t,n){n.d(t,{dV:function(){return o},rl:function(){return i},zP:function(){return s}});var r=n(51561);let s=e=>{try{let t=localStorage.getItem(e),n=JSON.parse(null!=t?t:"[]"),s=r.V8.safeParse(n);return s.success?s.data:[]}catch(t){return console.error("Error reading ".concat(e," from localStorage:"),t),[]}},i=(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(t){return console.error("Error writing to ".concat(e," in localStorage:"),t),!1}},o=e=>{try{return localStorage.removeItem(e),!0}catch(t){return console.error("Error clearing ".concat(e," from localStorage:"),t),!1}}},98702:function(e,t,n){n.d(t,{J:function(){return o}});var r=n(1850);let s=r.z.object({status:r.z.coerce.number(),statusText:r.z.string()}),i=e=>{if(e instanceof Error&&e.message){let t=/^(\d+): (.*)$/.exec(e.message);if(t){let e;let n=parseInt(t[1],10);try{e=JSON.parse(t[2]).message}catch(n){e=t[2]}return{status:n,statusText:e}}if(e.message.includes("{"))try{let t=s.parse(JSON.parse(e.message));return{status:t.status,statusText:"".concat(t.statusText)}}catch(e){}return{status:500,statusText:e.message}}return"string"==typeof e?{status:500,statusText:e}:{status:500,statusText:"Unknown error"}},o=async e=>{try{let t=await fetch("/api/user/activity/interaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error(t.statusText);return{success:!0}}catch(e){return{success:!1,message:i(e).statusText}}}},51561:function(e,t,n){n.d(t,{V8:function(){return l},Wv:function(){return a}});var r=n(1850);let s=r.z.enum(["vector","illustration","photo","icon","video","psd","template","mockup"]),i=r.z.enum(["search"]),o=r.z.object({target:s,action:i}),a=o.extend({timestamp:r.z.coerce.date()});r.z.array(o.extend({timestamp:r.z.coerce.date().transform(e=>e.getTime()/1e3)}));let l=r.z.array(a)},56368:function(e,t,n){let r;n.d(t,{I0:function(){return b},XB:function(){return f},fC:function(){return p}});var s=n(13491),i=n(52983),o=n(12527),a=n(37956),l=n(81213),c=n(91109);let u="dismissableLayer.update",d=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:m,onPointerDownOutside:p,onFocusOutside:b,onInteractOutside:g,onDismiss:y,...w}=e,x=(0,i.useContext)(d),[E,j]=(0,i.useState)(null),_=null!==(n=null==E?void 0:E.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,k]=(0,i.useState)({}),C=(0,l.e)(t,e=>j(e)),T=Array.from(x.layers),[$]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),P=T.indexOf($),D=E?T.indexOf(E):-1,S=x.layersWithOutsidePointerEventsDisabled.size>0,I=D>=P,L=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,i.useRef)(!1),s=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){h("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",s.current),s.current=i,t.addEventListener("click",s.current,{once:!0})):i()}else t.removeEventListener("click",s.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!I||n||(null==p||p(e),null==g||g(e),e.defaultPrevented||null==y||y())},_),O=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&h("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==b||b(e),null==g||g(e),e.defaultPrevented||null==y||y())},_);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{D!==x.layers.size-1||(null==m||m(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},_),(0,i.useEffect)(()=>{if(E)return f&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(E)),x.layers.add(E),v(),()=>{f&&1===x.layersWithOutsidePointerEventsDisabled.size&&(_.body.style.pointerEvents=r)}},[E,_,f,x]),(0,i.useEffect)(()=>()=>{E&&(x.layers.delete(E),x.layersWithOutsidePointerEventsDisabled.delete(E),v())},[E,x]),(0,i.useEffect)(()=>{let e=()=>k({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,i.createElement)(a.WV.div,(0,s.Z)({},w,{ref:C,style:{pointerEvents:S?I?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,O.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,L.onPointerDownCapture)}))}),m=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(d),r=(0,i.useRef)(null),o=(0,l.e)(t,r);return(0,i.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,i.createElement)(a.WV.div,(0,s.Z)({},e,{ref:o}))});function v(){let e=new CustomEvent(u);document.dispatchEvent(e)}function h(e,t,n,{discrete:r}){let s=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?(0,a.jH)(s,i):s.dispatchEvent(i)}let p=f,b=m},74077:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(13491),s=n(52983),i=n(63730),o=n(37956);let a=(0,s.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...l}=e;return a?i.createPortal((0,s.createElement)(o.WV.div,(0,r.Z)({},l,{ref:t})),a):null})}}]);