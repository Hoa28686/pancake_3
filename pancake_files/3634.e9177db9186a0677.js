!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dc4a04a2-f82b-4340-b283-9f7665fa7ea9",e._sentryDebugIdIdentifier="sentry-dbid-dc4a04a2-f82b-4340-b283-9f7665fa7ea9")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3634],{93432:function(e,t,r){"use strict";r.d(t,{O:function(){return s}});var n=r(97458),a=r(92521),i=r(78364);r(78703);let o=e=>{let{style:t,className:r,...i}=e;return(0,n.jsx)("div",{...i,style:{...t,animationName:"_d9qd7y0"},className:(0,a.m)("$m-0 $h-100 $w-full $rounded-md [animation-direction:linear] [animation-duration:1.5s] [animation-iteration-count:infinite] [animation-timing-function:ease-in-out] [background-image:linear-gradient(110deg,#ececec_8%,#f5f5f5_18%,#ececec_33%)] [background-size:200%_100%] dark:[background:linear-gradient(110deg,#2a2a2a_8%,#333_18%,#2a2a2a_33%)]",r)})},s={Rect:o,Circle:e=>{let{style:t,className:r}=e;return(0,n.jsx)(o,{className:(0,i.W)("$rounded-full",r),style:t})}}},53205:function(e,t,r){"use strict";r.d(t,{$:function(){return Y}});var n=r(97458),a=r(45306),i=r(7601),o=r(71409),s=r(71163),l=r(52983);r(98373),r(37093);var c=r(22319),m=(0,c.c)({defaultClassName:"_i9t5f4 $no-underline",variantClassNames:{isMonocromo:{true:"$text-grayBayoux $font-normal $text-base hover:$text-grayHoki",false:"$text-grayHoki $sprinkles-text-sm $text-grayBali hover:$text-white $font-semibold"}},defaultVariants:{isMonocromo:!1},compoundVariants:[]}),f="_i9t5f4 $no-underline $text-grayHoki $sprinkles-text-sm $text-grayBali hover:$text-white $font-semibold $inline-block $px-10 $py-10 sm:$py-5",d=(0,c.c)({defaultClassName:"_i9t5fb _1wc8gem0 $w-full $mx-auto $px-[20px] $max-w-[1400px] $flex $justify-center md:$justify-between $flex-col md:$flex-row",variantClassNames:{align:{center:"$py-15 md:$py-10 $items-center $text-center md:$text-left",left:"$items-start $text-left $py-25"}},defaultVariants:{align:"center"},compoundVariants:[]}),u=(0,c.c)({defaultClassName:"_i9t5fi $flex $flex-wrap",variantClassNames:{align:{center:"$justify-center",left:"$justify-start"}},defaultVariants:{align:"center"},compoundVariants:[]}),p=(0,c.c)({defaultClassName:"_i9t5fl $py-5",variantClassNames:{align:{center:"$pr-15 md:$pr-0 $pl-15 md:$pl-30",left:"$pr-15 md:$pr-0 $pl-0 md:$pl-30"}},defaultVariants:{align:"center"},compoundVariants:[]}),$=(0,c.c)({defaultClassName:"_i9t5ff $py-5",variantClassNames:{isMonocromo:{true:"$text-grayBayoux $font-normal $text-base",false:"$text-grayHoki $sprinkles-text-sm $font-bold"}},defaultVariants:{isMonocromo:!1},compoundVariants:[]}),h=(0,c.c)({defaultClassName:"_i9t5fo $grid $grid-cols-4 $w-fit $mx-auto md:$mx-0 $gap-x-1 $mb-25 $mt-10",variantClassNames:{align:{left:"$justify-start md:$justify-center $gap-25",center:"$justify-center md:$justify-start"}},defaultVariants:{align:"center"},compoundVariants:[]}),g=(0,c.c)({defaultClassName:"_i9t5fr",variantClassNames:{align:{left:"_i9t5fs",center:"$mr-5 md:$mr-10 $m-5 md:$m-0 $mb-5 md:$mb-10"}},defaultVariants:{align:"center"},compoundVariants:[]}),x=r(89530),b=r(16157),w=r(42011),y=r(93611),k=r(66287),v=r(52389),j=r(50273),_=r(26989),N=r(58553),C=r(78364),V=r(83648);let A=(e,t,r)=>{let{pathname:n}=(0,V.useRouter)(),a="".concat((0,o.$T)(e)).concat(null!=r?r:"").concat(t?"#".concat(t):"");return n.includes("/brand-book")&&a.startsWith("/")?"https://www.freepik.com".concat(a):a},R={location:"footer_menu",action:"prices"},E=()=>{let{t:e}=(0,s.$G)("footer");return(0,n.jsx)("button",{className:(0,C.W)("ot-sdk-show-settings",f),children:e("legal.cookieSetings")})},M=e=>{var t;let{item:r}=e,{t:i}=(0,s.$G)("footer"),[,o]=(0,a.n9)(R),l=A(r.href,r.anchor,null==r?void 0:r.urlParam),c=null!==(t=r.relAttribute)&&void 0!==t?t:"_blank"===r.target?"noreferrer noopener nofollow":void 0;return(0,n.jsx)("a",{className:f,href:l,target:r.target,rel:c,onClick:()=>{r.href.includes("/pricing")&&o()},children:i(r.name)})},I=e=>{let{item:t}=e,{i18n:r}=(0,s.$G)();return t.locale&&t.locale!==r.language?null:(0,n.jsx)("li",{children:"legal.cookieSetings"===t.name?(0,n.jsx)(E,{}):(0,n.jsx)(M,{item:t})})},S=e=>{let{menu:t,items:r}=e,a=(0,k.a)("smMax"),i=(0,l.useRef)(null),[o,s]=(0,l.useState)(i.current),c=e=>{i.current=e,s(e)};return(0,n.jsx)(v.fC,{asChild:!0,open:o===t||!a,onOpenChange:e=>{a&&c(e?t:null)},children:(0,n.jsxs)("div",{className:"$mb-10 sm:$mb-15",children:[(0,n.jsxs)(v.xz,{className:"$text-white/90 $uppercase $sprinkles-text-sm $font-semibold $mb-10 $w-full $flex $items-center $justify-between sm:$justify-center md:$justify-start $px-10 $py-10 sm:$py-5",style:{cursor:a?"pointer":"auto"},children:[t,(0,n.jsx)(j.J,{as:o===t?N.Z:_.Z,size:"2xl",style:{display:a?"block":"none"}})]}),(0,n.jsx)(v.VY,{asChild:!0,forceMount:!0,children:(0,n.jsx)("ul",{className:o!==t&&a?"$hidden":"$block",children:r.map(e=>(0,n.jsx)(I,{item:e},e.name))})})]})},t)},D=[{name:"tools.aiImageGenerator",href:"/ai/image-generator"},{name:"tools.aiVideoGenerator",href:"/ai/video-generator"},{name:"tools.imageUpscaler",href:"/ai/image-upscaler"},{name:"tools.backgroundRemover",href:"/ai/background-remover"},{name:"tools.photoEditor",href:"/ai/photo-editor"},{name:"tools.aiVoiceGenerator",href:"/ai/voice-generator"},{name:"tools.subhome",href:"/ai"}],O=[{name:"information.pricing",href:"/pricing",urlParam:"?origin=freepik_web"},{name:"information.aboutUs",href:"/company/about-us"},{name:"information.api",href:"https://www.freepik.com/api"},{name:"information.jobs",href:"https://freepik-company.factorialhr.com/",target:"_blank",relAttribute:"noreferrer noopener"},{name:"information.sellYourContent",href:"https://contributor.freepik.com"},{name:"information.freepikDesign",href:"https://freepik.design/",target:"_blank",relAttribute:"noreferrer noopener"},{name:"information.freepikEvents",href:"/events",target:"_blank",relAttribute:"noreferrer noopener"},{name:"content.searchTrends",href:"/tags"},{name:"content.blog",href:"https://www.freepik.com/blog/"}],P=[{name:"legal.termsConditions",href:"/legal/terms-of-use",target:"_blank",anchor:"nav-freepik",disneyAnchor:"nav-disney-eula",relAttribute:"noreferrer noopener"},{name:"legal.licenseAgreement",href:"/legal/terms-of-use",target:"_blank",anchor:"nav-freepik-agreement",disneyAnchor:"nav-disney-eula",relAttribute:"noreferrer noopener"},{name:"legal.privacyPolicy",href:"/legal/privacy",target:"_blank",relAttribute:"noreferrer noopener"},{name:"legal.copyrightInformation",href:"/legal/copyright",target:"_blank",relAttribute:"noreferrer noopener"},{name:"legal.cookiesPolicy",href:"/legal/cookies",target:"_blank",relAttribute:"noreferrer noopener"},{name:"legal.cookieSetings",href:"#"}],Z=[{name:"support.faq",href:"https://support.freepik.com/s/?language=en_US"},{name:"support.contact",href:"/profile/support"}],T=[{icon:"Facebook",href:"https://www.facebook.com/Freepik"},{icon:"Twitter",href:"https://twitter.com/freepik",reverseColor:!0},{icon:"Pinterest",href:"https://www.pinterest.es/freepik/"},{icon:"Instagram",href:"https://www.instagram.com/freepik"},{icon:"Youtube",href:"https://www.youtube.com/channel/UC9wPXN2TIWoUamqONb7v8Pw"},{icon:"Linkedin",href:"https://www.linkedin.com/company/freepik-corp/"},{icon:"Discord",href:"https://discord.gg/kgJ8MtZx3z"},{icon:"Reddit",href:"https://www.reddit.com/r/Freepik_AI/"}],U=[{name:"Slidesgo",href:"https://slidesgo.com/",target:"_blank"},{name:"Magnific",href:"https://magnific.ai/",target:"_blank"}];var F=r(92521);let G=e=>{let{isMonocromo:t,iconSize:r,itemClassName:a,align:i="center",className:s,...l}=e,c=(0,o.L3)();return(0,n.jsx)("ul",{className:(0,F.m)(h({align:i}),s),...l,children:T.map(e=>(0,n.jsx)("li",{className:(0,C.W)(g({align:i}),a),children:(0,n.jsx)(y.Z0,{as:"a",align:i,icon:e.icon,iconSize:r,isMonocromo:t,href:c(e.href),target:"_blank",rel:"nofollow noopener noreferrer"})},e.href))})},z=()=>{let e=(0,o.ZK)();return(0,l.useMemo)(()=>"en"!==e?O.filter(e=>"information.freepikEvents"!==e.name):O,[e])},W=()=>{let{pathname:e}=(0,V.useRouter)(),t=["/disney",(0,o.$T)("/free-disney-template"),(0,o.$T)("/premium-disney-template")].includes(e);return(0,l.useMemo)(()=>t?P.map(e=>{var t;return{...e,anchor:null!==(t=e.disneyAnchor)&&void 0!==t?t:e.anchor}}):P,[t])},B=()=>{let{t:e}=(0,s.$G)(["topNav","footer"]),{signUpUrl:t,setLoginCookies:r}=(0,b.e)(),a=(0,w.d)(),i=z(),o=W();return(0,n.jsxs)("div",{className:"$grid $-mx-10 $grid-cols-1 sm:$grid-cols-2 md:$grid-cols-4 $gap-0 sm:$gap-10 $flex-col xs:$flex-row $justify-center xs:$justify-between $text-left sm:$text-center md:$text-left",children:[(0,n.jsx)(S,{menu:e("footer:tools.title"),items:D}),(0,n.jsx)(S,{menu:e("footer:information.title"),items:i}),(0,n.jsxs)("div",{className:"$mb-15",children:[(0,n.jsx)(S,{menu:e("footer:legal.title"),items:o}),(0,n.jsx)(S,{menu:e("footer:support.title"),items:Z})]}),(0,n.jsxs)("div",{className:"$text-center md:$text-left",children:[(0,n.jsx)("p",{className:"$text-white/90 $uppercase $sprinkles-text-sm $font-semibold $mb-10",children:e("footer:socialMedia")}),(0,n.jsx)(G,{}),(0,n.jsx)("p",{className:"$sprinkles-text-sm $font-semibold $mb-15 $text-white/60",children:e("footer:getExclusiveAssets")}),!a&&(0,n.jsx)(y.gg,{as:"a",href:t,onClick:()=>r(),children:e("more.signUp")})]})]})},H=e=>{let{isMonocromo:t=!1,align:r="center"}=e,{t:a}=(0,s.$G)("footer"),{domain:i}=(0,o.Vx)(),l=(0,o.L3)();return(0,n.jsxs)("div",{className:d({align:r}),children:[(0,n.jsx)("p",{className:$({isMonocromo:t}),children:a("freepikCompanyProjects")}),(0,n.jsxs)("ul",{className:u({align:r}),children:[(0,n.jsx)("li",{className:p({align:r}),children:(0,n.jsx)("a",{className:m({isMonocromo:t}),href:i,children:"Freepik"})}),U.map(e=>{var a,i;return(0,n.jsx)("li",{className:p({align:r}),children:(0,n.jsx)("a",{className:m({isMonocromo:t}),href:l(e.href),target:null!==(a=e.target)&&void 0!==a?a:void 0,rel:null!==(i=e.relAttribute)&&void 0!==i?i:"_blank"===e.target?"noreferrer noopener nofollow":void 0,children:e.name})},e.name)})]})]})},L={location:"footer_menu",action:"prices"},Y=(0,l.memo)(e=>{let{alternates:t}=e,{t:r}=(0,s.$G)("footer"),{domain:c}=(0,o.Vx)(),[m]=(0,a.n9)(L),f=new Date().getFullYear();return(0,l.useEffect)(()=>{m()},[m]),(0,n.jsxs)("footer",{className:"$bg-grayEbony $text-grayHeather",children:[(0,n.jsx)("div",{className:"_1wc8gem0 $w-full $mx-auto $px-[20px] $max-w-[1400px] $py-40 $border-b-sm $border-grayOxford",children:(0,n.jsx)(B,{})}),(0,n.jsxs)("div",{className:"_1wc8gem0 $w-full $mx-auto $px-[20px] $max-w-[1400px] $py-40 $flex $items-center md:$items-end $flex-col md:$flex-row-reverse $justify-center md:$justify-between $text-center md:$text-left",children:[(0,n.jsx)(x.$,{alternates:t}),(0,n.jsxs)("div",{className:"$block md:$flex $items-end $flex-wrap",children:[(0,n.jsx)("a",{href:c,"aria-label":"Freepik Company",className:"$inline-flex $text-grayHeather",children:(0,n.jsx)(i.X4,{className:"_i9t5f9 $relative $top-5 md:$-top-5"})}),(0,n.jsxs)("p",{className:"$sprinkles-text-sm $mt-15 $ml-0 md:$ml-5",children:["Copyright \xa9 2010-",f," Freepik Company S.L."," ",r("allRightsReserved"),"."]})]})]}),(0,n.jsx)("div",{className:"$bg-grayOxford/50",children:(0,n.jsx)(H,{})})]})})},58553:function(e,t,r){"use strict";var n=r(97458);t.Z=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,n.jsx)("path",{d:"m256 236.4 92.3 92.3c9.8 9.8 25.6 9.8 35.4 0s9.8-25.6 0-35.4l-110-110c-4.9-4.9-11.3-7.3-17.7-7.3s-12.8 2.4-17.7 7.3l-110 110c-9.8 9.8-9.8 25.6 0 35.4s25.6 9.8 35.4 0z"})})},16157:function(e,t,r){"use strict";r.d(t,{e:function(){return i}});var n=r(71409),a=r(69195);let i=()=>{let e=(0,a.A)(),t=(0,n.aw)(),r=(0,n.ZK)();return{signUpUrl:"".concat("es"===r?"https://www.freepik.es/sign-up":"https://www.freepik.com/sign-up","?").concat(t),setLoginCookies:e}}},2804:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});let n=(e,t,r)=>{let n=new URL(e,"http://dummy");if(t&&Object.entries(t).forEach(e=>{let[t,r]=e;null!=r&&n.searchParams.set(t,String(r))}),r){let e=new URLSearchParams(n.hash.replace("#",""));Object.entries(r).forEach(t=>{let[r,n]=t;null!=n&&e.set(r,String(n))}),n.hash=e.toString()}let a=n.pathname.replace(/\/$/,"");return(n.protocol+"//"+n.hostname+a+n.search+n.hash).replace("http://dummy","")}},13191:function(){},78703:function(){},37093:function(){},51327:function(){},98373:function(){},726:function(){},27939:function(){},33339:function(){},90881:function(){},53171:function(){},61374:function(){},54066:function(){},50002:function(){},52389:function(e,t,r){"use strict";r.d(t,{VY:function(){return N},fC:function(){return j},xz:function(){return _}});var n=r(13491),a=r(52983),i=r(12527),o=r(62331),s=r(23196),l=r(24577),c=r(81213),m=r(37956),f=r(88702),d=r(74009);let u="Collapsible",[p,$]=(0,o.b)(u),[h,g]=p(u),x=(0,a.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:i,defaultOpen:o,disabled:l,onOpenChange:c,...f}=e,[u=!1,p]=(0,s.T)({prop:i,defaultProp:o,onChange:c});return(0,a.createElement)(h,{scope:r,disabled:l,contentId:(0,d.M)(),open:u,onOpenToggle:(0,a.useCallback)(()=>p(e=>!e),[p])},(0,a.createElement)(m.WV.div,(0,n.Z)({"data-state":v(u),"data-disabled":l?"":void 0},f,{ref:t})))}),b=(0,a.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...o}=e,s=g("CollapsibleTrigger",r);return(0,a.createElement)(m.WV.button,(0,n.Z)({type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":v(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled},o,{ref:t,onClick:(0,i.M)(e.onClick,s.onOpenToggle)}))}),w="CollapsibleContent",y=(0,a.forwardRef)((e,t)=>{let{forceMount:r,...i}=e,o=g(w,e.__scopeCollapsible);return(0,a.createElement)(f.z,{present:r||o.open},({present:e})=>(0,a.createElement)(k,(0,n.Z)({},i,{ref:t,present:e})))}),k=(0,a.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:i,children:o,...s}=e,f=g(w,r),[d,u]=(0,a.useState)(i),p=(0,a.useRef)(null),$=(0,c.e)(t,p),h=(0,a.useRef)(0),x=h.current,b=(0,a.useRef)(0),y=b.current,k=f.open||d,j=(0,a.useRef)(k),_=(0,a.useRef)();return(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.b)(()=>{let e=p.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,b.current=t.width,j.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),u(i)}},[f.open,i]),(0,a.createElement)(m.WV.div,(0,n.Z)({"data-state":v(f.open),"data-disabled":f.disabled?"":void 0,id:f.contentId,hidden:!k},s,{ref:$,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style}}),k&&o)});function v(e){return e?"open":"closed"}let j=x,_=b,N=y}}]);