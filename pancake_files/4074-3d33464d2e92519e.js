!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9b199440-322d-42b5-a0d3-060cf3c23b2f",e._sentryDebugIdIdentifier="sentry-dbid-9b199440-322d-42b5-a0d3-060cf3c23b2f")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4074,8058],{34456:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(71163);let a=e=>{let{page:t}=e,{t:r}=(0,n.$G)("common");return 1===t?null:" - ".concat(r("common:pageNumber",{page:t}))}},61482:function(e,t,r){"use strict";r.d(t,{x:function(){return y},u:function(){return w}});var n=r(97458),a=r(7616),s=r(71163),l=r(15881),i=r(64282),o=r(88789),c=r(43096);let u=e=>{let{nextSearch:t}=e;if(!t)return null;let{originalTermResults:r}=t;return r?(0,n.jsx)(m,{}):(0,n.jsx)(d,{})},d=()=>{let{t:e}=(0,s.$G)("regularSearch"),t=(0,c.Jn)("term");return(0,n.jsx)("span",{className:"$sprinkles-text-lg $text-grayOxford",children:e("originalTermNotFound",{keyword:t})})},m=()=>{let e=(0,c.Jn)("term"),t=f(),r=(0,o.Y)("fromQuery",{withPush:!0});return(0,n.jsx)("a",{href:t,className:"$sprinkles-text-lg $text-blueFreepik",onClick:t=>{t.preventDefault(),r(e||"")},children:(0,n.jsx)(s.cC,{i18nKey:"regularSearch:searchForOriginalInstead",values:{keyword:e},components:{1:(0,n.jsx)("strong",{})}})})},f=()=>{let e=(0,a.Dv)(c.lh),t=(0,c.Jn)("term"),r=[...e,[l.FILTERS_NAMES.fromQuery,t]],n=(0,i.E$)(r);return"/search?".concat(n)};var x=r(83410),h=r(99753),p=r(85585),g=r(34456);let $=e=>{let{title:t,total:r}=e,{t:a}=(0,s.$G)(["common","regularSearch","iconsSearch","videosSearch","searchBar"]),l=(0,h.W)(),i=(0,c.Jn)("sort"),o=(0,x.u)(null!=r?r:0);return(0,n.jsxs)("h1",{className:"$text-xl $font-semibold $text-grayEbony lg:$text-2xl",children:[t||a("searchBar:".concat("recent"===i?"recent":"popular")),(0,n.jsx)(g.g,{page:l}),r&&(0,n.jsxs)("span",{className:"$sprinkles-text-sm md:$sprinkles-text-lg $pl-5 $font-normal $text-grayHoki",children:["(",(0,n.jsx)(s.cC,{i18nKey:"searchBar:totalResults",values:{number:o}}),")"]})]})},v=e=>{let{title:t}=e,{t:r}=(0,s.$G)(["common","regularSearch","iconsSearch","videosSearch","searchBar"]),a=(0,h.W)(),l=(0,c.Jn)("sort");return(0,n.jsx)("div",{className:"$flex $items-baseline $gap-5",children:(0,n.jsxs)("h1",{className:"$text-xl $font-normal $text-grayBayoux lg:$text-2xl",children:[t||r("searchBar:".concat("recent"===l?"recent":"popular")),(0,n.jsx)(g.g,{page:a})]})})},b=e=>{let{title:t,total:r}=e;return(0,a.Dv)(p.sb)?(0,n.jsx)($,{title:t,total:r}):(0,n.jsx)(v,{title:t})},y=e=>{let{title:t,description:r,nextSearch:a,total:s}=e;return(0,n.jsxs)("div",{className:"$flex $flex-col $items-start $gap-15",children:[(0,n.jsx)(b,{title:t,total:s}),r&&(0,n.jsx)("div",{className:"$leading-normal $text-grayOxford",children:r}),a&&(0,n.jsx)(u,{nextSearch:a})]})};var j=r(93432);let w=()=>(0,n.jsxs)("div",{className:"$mb-30",children:[(0,n.jsx)(j.O.Rect,{className:"$mb-20 $h-30 $w-300"}),(0,n.jsx)(j.O.Rect,{className:"$hidden $h-200 $w-200 lg:$block"})]})},21956:function(e,t,r){"use strict";r.d(t,{t:function(){return $}});var n=r(97458),a=r(92521),s=r(71163),l=r(52983),i=r(88676),o=r(50273),c=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 512 512","aria-hidden":!0,...e,children:(0,n.jsx)("path",{d:"M99.703 512C85.505 512 74 500.495 74 486.297V25.703C74 11.505 85.505 0 99.703 0s25.703 11.505 25.703 25.703v460.594c0 14.198-11.505 25.703-25.703 25.703M412.434 478.576c-6.58 0-13.16-2.509-18.177-7.526L197.384 274.177c-10.035-10.034-10.035-26.309 0-36.354L394.257 40.95c10.034-10.035 26.309-10.035 36.354 0 10.034 10.034 10.034 26.309 0 36.354L251.915 256l178.696 178.696c10.034 10.035 10.034 26.31 0 36.354-5.017 5.017-11.597 7.526-18.177 7.526"})}),u=r(8305),d=r.n(u),m=r(84875),f=r(86499);let x=e=>{let{page1Href:t}=e,{href:r,as:a}=(0,m.H)(t),{t:l}=(0,s.$G)("common");return(0,n.jsx)(d(),{href:r,as:a,passHref:!0,legacyBehavior:!0,prefetch:!1,children:(0,n.jsxs)("a",{className:f.LV,children:[(0,n.jsx)(o.J,{as:c,size:"sm"}),l("goToPage1")]})})};var h=r(83648);let p=e=>{let{currentPage:t=1,pages:r=0,inputPageUrlGenerator:a}=e,{t:i}=(0,s.$G)("common"),[o,c]=(0,l.useState)(1),{push:u}=(0,h.useRouter)();return(0,l.useEffect)(()=>{c(t)},[t]),(0,n.jsxs)("div",{className:f.Jk,children:[i("common:page"),(0,n.jsx)("input",{className:f.qH,type:"number",min:"1",max:r,value:0===o?"":o,onChange:e=>{let t=e.target.value;if(""===t){c(0);return}/^\d+$/.test(t)&&c(Number(t))},onKeyDown:e=>{if("Enter"!==e.key||r&&o>r)return;let t=a(o),{href:n,as:s}=(0,m.H)(t);u(n,s)}}),"".concat(i("common:of")," ").concat(r)]})};var g=r(98665);let $=(0,l.memo)(e=>{let{prevHref:t="",nextHref:r="",page1Href:l,currentPage:o=1,pages:c=0,inputPageUrlGenerator:u,className:d}=e,{t:m}=(0,s.$G)("common"),h=o<c;return(0,n.jsxs)("div",{className:(0,a.m)(f.I7,d),children:[l&&o>=3&&(0,n.jsx)(x,{page1Href:l}),(0,n.jsxs)("div",{className:f.gE,children:[o>1&&(0,n.jsx)(g.C,{prevHref:t}),h&&(0,n.jsx)(i.k,{nextHref:r})]}),u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:(0,a.m)("$hidden md:$block xl:$hidden",f.Jk),children:m("pageOf",{from:o,to:c})}),(0,n.jsx)("div",{className:"$hidden xl:$block",children:(0,n.jsx)(p,{currentPage:o,pages:c,inputPageUrlGenerator:u})})]})]})})},34058:function(e,t,r){"use strict";r.d(t,{_:function(){return j}});var n=r(97458),a=r(71409),s=r(7616),l=r(71163),i=r(52983),o=r(15881),c=r(91687),u=r(85585),d=r(92111),m=r(88146),f=r(64655),x=r(56354),h=r(65738),p=r(68278);let g=[{icon:h.Z,name:"image",title:"topNav:creating.aiGeneratedImage.title",url:"https://www.freepik.com/pikaso/ai-image-generator",urlTagLandingUnlogged:"/ai/image-generator",urlParams:{term:"prompt",isUserPremium:{param:"mode",value:"flux-dev"}}},{icon:p.Z,name:"video",title:"topNav:creating.aiGeneratedVideo.title",url:"https://www.freepik.com/pikaso/ai-video-generator",urlTagLandingUnlogged:"/ai/video-generator",urlParams:{term:"prompt"}},{icon:f.Z,name:"icon",title:"topNav:creating.aiGeneratedIcon.title",url:"/ai/icon-generator/tool",urlParams:{term:"prompt"},enabledByType:["icon","vector","illustration"]},{icon:m.Z,name:"edit",url:"https://www.freepik.com/designer/edit",title:"topNav:creating.design.title",enabledByType:["template","psd"]},{icon:x.Z,name:"mockups",title:"topNav:creating.mockups.title",url:"https://www.freepik.com/mockup-editor/search",urlParams:{term:"search"},enabledByType:["mockup"]}];var $=r(65885),v=r(42011);let b=()=>{let e=(0,s.Dv)(u.D9),t=(0,v.d)();return e&&!t},y=e=>{let{link:t}=e,{t:r}=(0,l.$G)("topNav"),s=(0,a.L3)(),{domain:i}=(0,a.Vx)(),c=(0,o.Jn)("term"),u=b();return(0,n.jsx)(d.ExtraTag,{name:r(t.title),href:u&&t.urlTagLandingUnlogged?"".concat(i).concat(s(t.urlTagLandingUnlogged)):(0,$.j)({pathGetter:s,url:t.url,urlParams:t.urlParams,term:c,fromElementParam:{key:"from_element",value:"freepik_search"}}),onClick:()=>{},icon:t.icon,theme:"new"},t.name)},j=()=>{let e=(0,s.Dv)(u.sb),t=(0,c.s)(),r=(0,i.useMemo)(()=>t?g.filter(e=>!e.enabledByType||0===e.enabledByType.length||e.enabledByType.includes(t)):g.filter(e=>!e.enabledByType),[t]);return e?(0,n.jsx)(n.Fragment,{children:r.map(e=>(0,n.jsx)(y,{link:e},e.name))}):null}},66327:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(97458),a=r(4824),s=r(71409),l=r(93611),i=r(50273),o=r(7616),c=r(83648),u=r(71163),d=r(52983),m=r(15881),f=r(64282),x=r(91687),h=r(43096),p=r(85585),g=r(13946);let $=()=>{let{pathname:e,query:t}=(0,c.useRouter)(),r=(0,s.L3)(),n=(0,o.Dv)(h.lh);return(0,d.useCallback)(a=>{let s=e.includes("/search"),l="animated"===a.typeValue;if(s||l){var i;let e=(0,f.xs)([m.FILTERS_NAMES.iconType])(n);return"/search?".concat((0,h.ln)({name:"iconType",value:null!==(i=a.typeValue)&&void 0!==i?i:"standard"},e))}let o=Array.isArray(t.param)?t.param[0]:t.param;return"".concat(r(a.tagUrl),"/").concat(o)},[e,n,t.param,r])},v=e=>{let{defaultTags:t,children:r}=e,{t:a}=(0,u.$G)("common"),s=(0,g.$)(),c=$(),d=(0,x.s)();return(0,o.Dv)(p.sb)?(0,n.jsx)("ul",{className:"$flex $gap-10",children:r}):(0,n.jsxs)("ul",{className:"$flex $gap-20",children:[t.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)(l.f5,{as:"a",color:"gray",size:"sm",href:"icon"===d?c(e):s(e),className:"$font-bold",children:[e.icon&&(0,n.jsx)(i.J,{as:e.icon,size:"sm",className:"$mr-10"}),a(e.name)]})},"".concat(e.name,"-").concat(e.tagUrl,"-").concat(e.noTermUrl))),r]})};var b=r(66287),y=r(75459),j=r(57291);let w=e=>{let{children:t}=e,r=(0,b.a)("lg")?y.DraggableNavigation:y.Draggable,a=(0,o.Dv)(p.sb);return(0,n.jsx)("div",{className:(0,j.cx)(a&&"lg:$px-40","$flex-1 $overflow-hidden $px-20 $py-10 lg:$pr-60"),"data-cy":"related-tags",children:(0,n.jsx)(r,{fit:!0,children:t})})},N=e=>{let{children:t,excludeTag:r,isPopular:s=!1,resourceType:l}=e,i=(0,a.R)(s,r,l);return(0,n.jsx)(w,{children:(0,n.jsx)(v,{defaultTags:i,children:t})})}},92111:function(e,t,r){"use strict";r.r(t),r.d(t,{ExtraTag:function(){return n.t},ExtraTags:function(){return a.j},RelatedTagsBar:function(){return s.Z},useParseItems:function(){return l.S}});var n=r(33038),a=r(66063),s=r(66327),l=r(40041)},4824:function(e,t,r){"use strict";r.d(t,{R:function(){return l}});var n=r(52983),a=r(15881),s=r(46401);let l=(e,t,r)=>{let l=(0,a.Jn)("iconType");return(0,n.useMemo)(()=>e?[...s.V6.filter(e=>"psd"!==e.name),s.yl]:"icon"===r?s.E$.filter(e=>e.typeValue!==l):t?s.V6.filter(e=>e.typeValue!==t):s.V6,[e,r,t,l])}},2107:function(e,t,r){"use strict";r.d(t,{A:function(){return c},f:function(){return d}});var n=r(97458),a=r(83410),s=r(50273),l=r(83648),i=r(52983);r(23112),r(67656);var o=(0,r(22319).c)({defaultClassName:"_1bd345n1 _1bd345n0 $flex $gap-10 $items-center $sprinkles-text-sm $border-b-sm $pb-10",variantClassNames:{selected:{true:"$font-semibold $text-grayEbony",false:"$text-grayHoki $border-transparent hover:$border-grayGaysir"},asLink:{true:"_1bd345n4"}},defaultVariants:{},compoundVariants:[]});let c=(0,i.forwardRef)((e,t)=>{let{label:r,icon:a,selected:i=!1,quantity:c,url:d,showQuantity:m=!0,onClick:f,...x}=e,{push:h}=(0,l.useRouter)(),p=u(c);return(0,n.jsxs)("button",{ref:t,className:o({selected:i,asLink:!!d}),...x,onClick:e=>{f&&f(e),d&&h(d)},children:[(0,n.jsx)(s.J,{as:a,size:"sm"})," ",r,m&&(0,n.jsx)("div",{className:"$font-normal $text-grayBayoux $hidden sm:$inline-block",children:p})]})}),u=e=>void 0===e?"-":e<=0?"":(0,a.u)(e),d=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"$flex $gap-40 $w-full lg:$w-auto $justify-center lg:$justify-start",children:t})}},15372:function(e,t,r){"use strict";r.d(t,{E:function(){return v}});var n=r(97458),a=r(16830),s=r.n(a),l=r(62548),i=r(66287),o=r(88825),c=r(42011),u=r(71409),d=r(90657),m=r(57291),f=r(67297);r(10843);var x=r(22319),h=(0,x.c)({defaultClassName:"_qgnyh83 _qgnyh80 $absolute",variantClassNames:{isAboveThreshold:{true:"_qgnyh81 $opacity-100",false:"_qgnyh82 $pointer-events-none $opacity-0"}},defaultVariants:{},compoundVariants:[]}),p=(0,x.c)({defaultClassName:"_qgnyh89 _qgnyh86 $relative $flex $items-stretch $w-full $flex-auto $gap-5",variantClassNames:{isAboveThreshold:{true:"_qgnyh87",false:"_qgnyh88"}},defaultVariants:{},compoundVariants:[]});let g=e=>{let{children:t,isNewSearchEnabled:r,isHomeAuthTestEnabled:a}=e,s=(0,i.a)("smMax"),l=(0,c.d)(),{isAboveThreshold:x}=(0,o.Vm)(),{domain:g}=(0,u.Vx)(),$=a&&l,v=!r&&!a&&x,b=r||a?"$px-20 $py-10":"$border-b-xs $border-grayMystic $px-20 $py-10",y=s?(0,n.jsx)(d.W,{href:g,mode:"default"}):(0,n.jsx)(d.T,{href:g,mode:"default"});return(0,n.jsxs)("div",{className:(0,m.cx)(b,(r||a)&&"lg:$px-40","$bg-white $flex $items-center $justify-between $sticky $top-0 $z-1 $gap-10 lg:$gap-20 $px-20 $py-10"),children:[r||a?(0,n.jsx)("div",{className:"$hidden lg:$flex",children:y}):(0,n.jsx)("div",{className:h({isAboveThreshold:v}),children:y}),(0,n.jsx)("div",{className:p({isAboveThreshold:v}),children:t}),(r||a)&&(0,n.jsx)("div",{className:(0,m.cx)("$hidden $min-w-[180px] $justify-end lg:$flex",$&&"$min-w-[285px]"),children:(0,n.jsx)(f.V,{withoutLogo:!0,showCreatingButton:$})})]})},$=s()(()=>r.e(5487).then(r.bind(r,5487)).then(e=>e.MobileFiltersToggler),{loadableGenerated:{webpack:()=>[5487]}}),v=e=>{let{hasFilters:t=!0,hasSearchByImage:r=!0,enableShortcut:a=!0,isHomeAuthTestEnabled:s=!1,isNewSearchEnabled:i=!1}=e;return(0,n.jsxs)(g,{isHomeAuthTestEnabled:s,isNewSearchEnabled:i,children:[(0,n.jsx)(l.SearchForm,{enableShortcut:a,hasSearchByImage:r}),!i&&!s&&t&&(0,n.jsx)($,{})]})}},47312:function(e,t,r){"use strict";r.r(t),r.d(t,{SearchBar:function(){return n.E}});var n=r(15372)},62548:function(e,t,r){"use strict";r.r(t),r.d(t,{SearchForm:function(){return n.U}});var n=r(21953)},91856:function(e,t,r){"use strict";r.d(t,{f:function(){return n.f}});var n=r(59312)},81163:function(e,t,r){"use strict";r.d(t,{T:function(){return s}});var n=r(7616),a=r(78026);let s=()=>(0,n.b9)(a.j)},78026:function(e,t,r){"use strict";r.d(t,{j:function(){return s},k:function(){return l}});var n=r(24399);function a(e){let t=(0,n.cn)(e,(e,r,n)=>{let a=null!=n?n:!e(t);r(t,a)});return t}let s=a(!1),l=a(!1)},67297:function(e,t,r){"use strict";r.d(t,{V:function(){return z}});var n=r(97458),a=r(20301),s=r(93671),l=r(20527),i=r(52983),o=r(31159),c=r(4204),u=r(55062),d=r(88825),m=r(87539),f=r(42011),x=r(21603),h=r(85764),p=r(66497),g=r(57291),$=r(7616),v=r(8305),b=r.n(v),y=r(81163),j=r(78026);let w=(0,g.j)("flex w-full items-center justify-between pl-3 pr-4 pt-3 lg:pl-5",{variants:{isTransparent:{true:"absolute z-[1] h-16 py-4 text-white",false:"pr-4 sm:h-[52px]"},hasTopBanner:{true:"$mt-50"}}}),N=(0,g.j)(null,{variants:{isTransparent:{true:"text-white",false:"text-neutral-900"}}}),k=(0,g.j)("block h-4 w-[108px] duration-150 ease-in-out lg:h-5 lg:w-[136px]",{variants:{isTransparent:{true:"text-white",false:"text-piki-blue-500"},activeScrollAnimated:{true:"translate-y-[50px] opacity-0",false:"translate-y-0 opacity-100"}}}),_=(0,g.j)("flex items-center gap-2",{variants:{isUserReady:{true:null,false:"pointer-events-none invisible"}}}),T=e=>{let{children:t,withoutLogo:r=!1,alternates:a,isNewSearchEnabled:s=!1}=e,l=(0,y.T)(),i=(0,c.U)(),g=(0,o.Wd)(),v=(0,m.A)(),{isAboveThreshold:T}=(0,d.Vm)(),C=(0,$.b9)(j.k),E=(0,f.d)(),V=!!g||i,S=(0,n.jsxs)("ul",{className:_({isUserReady:v}),children:[t,(0,n.jsx)(u.Y,{alternates:a})]});return r?S:(0,n.jsxs)("nav",{className:w({isTransparent:V,hasTopBanner:g}),"aria-label":"Topbar",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("button",{className:"relative top-0.5 p-2 lg:hidden",onClick:()=>{l(),C(!0)},children:[(0,n.jsx)(h.D,{className:N({isTransparent:V}),name:"system.menuburger",size:"md"}),(0,n.jsx)(p.T,{children:"Close menu"})]}),(0,n.jsx)(b(),{href:E?"/home-auth":"/",as:"/",children:(0,n.jsx)(x.X,{className:k({isTransparent:V,activeScrollAnimated:T&&!i&&!s})})})]}),S]})};var C=r(55265),E=r(50380),V=r(66287);let S=e=>{let{showCreatingButton:t=!0}=e,r=(0,o.Uu)(),a=(0,o.Rz)();return(0,V.a)("lgMax")||a?null:(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(C.$,{isTransparent:r}),(0,n.jsx)(E.U,{isTransparent:r})]})},B={location:"header_menu",action:"prices"},z=e=>{let{mode:t="default",origin:r,withoutLogo:o,showCreatingButton:c=!0,alternates:u,isNewSearchEnabled:d}=e,[m]=(0,l.n)(B);return(0,i.useEffect)(()=>{m()},[m]),(0,n.jsx)(s.e,{brazeKey:"8086d9ee-1f81-4508-ba9f-3a661635ac90",children:(0,n.jsx)(a.s,{mode:t,origin:r,children:(0,n.jsx)(T,{withoutLogo:o,alternates:u,isNewSearchEnabled:d,children:(0,n.jsx)(S,{showCreatingButton:c})})})})}},91687:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(43096);let a=()=>(0,n.Jn)("type")},66861:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});var n=r(52983);let a=e=>{let{containerRef:t,threshold:r=0,disconnect:a=!0,rootMargin:s="0px"}=e,[l,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=t.current;if(!e)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting),a&&e.isIntersecting&&n.disconnect()})},{threshold:r,rootMargin:s});return n.observe(e),()=>{e&&n.unobserve(e),a&&n.disconnect()}},[t,a,s,r]),l}},98015:function(e,t,r){"use strict";r.d(t,{u:function(){return x}});var n=r(97458),a=r(66827),s=r(3636),l=r(83598),i=r(50273),o=r(66497);let c=e=>{let{children:t,modal:r=!0,className:s}=e;return r?(0,n.jsx)(a.aV,{className:s,children:t}):t};r(46609);var u=r(22319),d=(0,u.c)({defaultClassName:"_a5lvtwy $cursor-pointer $absolute $top-15 $right-15 $flex",variantClassNames:{mode:{light:"$text-black hover:$text-black/80",dark:"$text-white hover:$text-white/80",gray:"$text-white hover:$text-white/80",blue:"$text-white hover:$text-white/80"}},defaultVariants:{mode:"light"},compoundVariants:[]}),m=(0,u.c)({defaultClassName:"_a5lvtwh $shadow-[0_0_60px_rgba(34,_34,_34,_0.25)] $overflow-hidden $w-full $m-auto",variantClassNames:{size:{xs:"$max-w-screen-xs",sm:"$max-w-screen-sm",md:"$max-w-screen-md",lg:"$max-w-screen-lg",full:"$max-w-full"},mode:{light:"$bg-white",dark:"$bg-black",gray:"_a5lvtwf",blue:"_a5lvtwg"},thumbnail:{true:"_a5lvtwr",false:"$px-20 sm:$px-40 $pt-60 $pb-30 sm:$pb-40"},fullHeight:{true:"$h-full",false:"_a5lvtwu"},fixed:{bottom:"_a5lvtwv $fixed $bottom-0 $left-0 $rounded-bl-none $rounded-br-none $rounded-tl-md $rounded-tr-md",false:"$relative $rounded-md"},scaleAnimation:{true:"_a5lvtwx"}},defaultVariants:{size:"md",thumbnail:!1,fullHeight:!1,mode:"light",fixed:!1},compoundVariants:[]}),f=(0,u.c)({defaultClassName:"_a5lvtw0 $z-[5] $inset-0 $grid $items-center $overflow-auto",variantClassNames:{noOverlay:{true:"$bg-transparent $absolute",false:"$fixed"},paddingY:{none:"$py-0",sm:"$py-20",md:"$py-40",lg:"$py-100"},paddingX:{none:"$p-0",sm:"$p-20",md:"$p-40",lg:"$p-100"},mode:{light:"$bg-darkBlueBlackale/90",dark:"$bg-black/50"}},defaultVariants:{noOverlay:!1,paddingY:"sm",mode:"light",paddingX:"sm"},compoundVariants:[]});let x=e=>{let{children:t,onOpenChange:r,open:u=!1,size:x="md",thumbnail:h=!1,trigger:p,triggerAsChild:g=!1,fullHeight:$=!1,modal:v,noOverlay:b=!1,trappedFocus:y=!0,persistent:j,paddingY:w="sm",paddingX:N="sm",portalContainer:k,mode:_="light",fixed:T=!1,scaleAnimation:C=!1}=e,E=null!=r||v?{open:u,onOpenChange:r}:{defaultOpen:u};return(0,n.jsxs)(a.fC,{...E,modal:v,children:[p&&(0,n.jsx)(a.xz,{asChild:g,children:p}),(0,n.jsx)(a.h_,{container:k,children:(0,n.jsx)(s.M,{trapped:y,children:(0,n.jsx)(c,{modal:v,className:f({noOverlay:b,paddingY:w,paddingX:N,mode:"gray"===_||"blue"===_?"light":_}),children:(0,n.jsxs)(a.VY,{className:m({size:x,thumbnail:h,fullHeight:$,mode:_,fixed:T,scaleAnimation:C}),onInteractOutside:e=>{j&&e.preventDefault()},children:[!v&&(0,n.jsx)(a.x8,{asChild:!0,children:(0,n.jsxs)("button",{className:d({mode:_}),children:[(0,n.jsx)(i.J,{as:l.Z,size:"xl",className:"gray"===_||"dark"===_?"$text-white":"$text-black"}),(0,n.jsx)(o.T,{children:"Close"})]})}),t]})})})})]})}},99523:function(e,t,r){"use strict";r.d(t,{NE:function(){return o},Vs:function(){return i},_y:function(){return a}});var n=r(1850);let a="horizontal",s="vertical",l="square",i=[a,s,l],o=a;n.z.enum([a,s,l])},40862:function(e,t,r){"use strict";r.d(t,{p:function(){return o}});var n=r(49658),a=r(52983),s=r(44840),l=r(87539),i=r(77887);let o=()=>{let e=(0,l.A)(),t=(0,s.D)(),r=(0,i.N)();(0,a.useEffect)(()=>{if(r&&e){var a,s;(0,n.sendGTMEvent)({country:r,user_id:null!==(a=null==t?void 0:t.id)&&void 0!==a?a:void 0,user_type:null!==(s=null==t?void 0:t.user_type_fr)&&void 0!==s?s:"anonymous"})}},[r,e,null==t?void 0:t.id,null==t?void 0:t.user_type_fr])}},9141:function(e,t,r){"use strict";r.d(t,{q:function(){return n}});let n=(0,r(52983).createContext)({})},77423:function(e,t,r){"use strict";r.d(t,{n:function(){return s}});var n=r(52983),a=r(9141);let s=()=>(0,n.useContext)(a.q)},88825:function(e,t,r){"use strict";r.d(t,{sH:function(){return l},nD:function(){return i.n},E3:function(){return c},$6:function(){return u.$},Vm:function(){return d}});var n=r(97458),a=r(52983),s=r(9141);let l=e=>{let{children:t}=e,r=(0,a.useRef)(null);return(0,n.jsx)(s.q.Provider,{value:r,children:(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsx)("div",{style:{position:"absolute",zIndex:5},ref:r})]})})};var i=r(77423),o=r(83648);let c=()=>{let{pathname:e,push:t}=(0,o.useRouter)();return(0,a.useCallback)(r=>{t({pathname:e},r)},[e,t])};var u=r(65054);let d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40,[t,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let t=()=>{r(window.scrollY>=e)};return t(),window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[t,e]),{isAboveThreshold:t}}},65054:function(e,t,r){"use strict";r.d(t,{$:function(){return a}});var n=r(52983);let a=e=>{(0,n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e])}},69541:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(93113);let a="session/xhr/device-manager/identify",s=(()=>{let e=()=>{try{let e=localStorage.getItem(a);if(!e)return null;return n.h.parse(JSON.parse(e))}catch(e){return null}};return{get:e,set:e=>localStorage.setItem(a,JSON.stringify(e)),remove:()=>localStorage.removeItem(a),isDeviceBlocked:()=>{var t;return null===(t=e())||void 0===t?void 0:t.disabled}}})()},93113:function(e,t,r){"use strict";r.d(t,{I:function(){return a},h:function(){return s}});var n=r(1850);let a=n.z.object({csrfToken:n.z.string().optional(),success:n.z.boolean(),disabled:n.z.boolean()}),s=n.z.object({disabled:n.z.boolean(),expiry:n.z.number()})},67656:function(){}}]);