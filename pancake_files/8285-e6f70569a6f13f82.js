!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="21e21925-6bb6-46bd-bc36-be14dfd44d2b",e._sentryDebugIdIdentifier="sentry-dbid-21e21925-6bb6-46bd-bc36-be14dfd44d2b")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8285],{28285:function(e,t,r){r.d(t,{M:function(){return d}});var n=r(97458),o=r(16830),a=r.n(o),c=r(52983),i=r(66861),s=r(80521);r(23112),r(87213);var l=(0,r(22319).c)({defaultClassName:"_dvhmmm2 $h-200",variantClassNames:{search:{true:"_dvhmmm1 $mt-10 $mx-20 $rounded-lg"}},defaultVariants:{search:!0},compoundVariants:[]});let u=e=>{let{isSearch:t,children:r}=e;return(0,n.jsx)("div",{className:"A_dvhmmm0","data-testid":"unicorn-banner",children:(0,n.jsx)("section",{className:l({search:t}),children:r})})},p=a()(()=>Promise.all([r.e(7171),r.e(574)]).then(r.bind(r,50574)).then(e=>e.SponsorBannerInner),{loadableGenerated:{webpack:()=>[50574]},ssr:!1}),d=(0,c.memo)(e=>{let{isReady:t=!0,onlyInViewport:r=!1,testResolver:o,...a}=e,{mustLoad:l,latestProps:d,isNotMobile:m}=(0,s.fH)(a),h=(0,c.useRef)(null),f=(0,i.R)({containerRef:h}),{component:k="banner",placement:v,position:g,test:w,testVariant:y,sponsorName:C,page:b,type:I}=d;return(0,n.jsx)("div",{ref:h,children:(0,n.jsx)(u,{isSearch:"srp"===v,children:t&&l&&(!r||r&&f)&&(0,n.jsx)(p,{component:k,placement:v,position:g,test:w,testVariant:y,testResolver:o,sponsorName:C,page:b,type:I,isEnabled:m,isInView:f})})})})},80521:function(e,t,r){r.d(t,{BR:function(){return eT},qF:function(){return l},fH:function(){return eV},w8:function(){return eW},QF:function(){return eq},Z3:function(){return u}});var n=r(97458),o=r(77887),a=r(66743),c=r(52983);let i=(0,c.createContext)(void 0),s=e=>{var t;let{type:r,test:n,testVariant:c,testResolver:i,sponsorName:s,placement:l="srp",page:u=1,...p}=e,d=(0,o.N)(),m=(0,a.fe)(r||null);if(!d||!m)return null;let h=i&&null!==(t=i({sponsorName:m,type:r}))&&void 0!==t?t:{test:n,testVariant:c};return{placement:l,...p,country:d,sponsorName:m,page:u,type:r,...h}},l=e=>{let{children:t,...r}=e,o=s(r);return(0,n.jsx)(i.Provider,{value:o,children:"function"==typeof t?t(o):t})},u=e=>{let t=(0,c.useContext)(i);if(void 0===t)throw Error("useSponsorDependencies must be used within a SponsorDependenciesProvider");if(e&&!t)throw Error("sponsorDependencies are not loaded, please disable safeMode");return t},p=(0,c.createContext)(void 0);var d=r(71409),m=r(59734),h=e=>Object.entries(e).map(e=>{let[t,r]=e;return"".concat(t,"=").concat(Array.isArray(r)?encodeURIComponent(r.join(",")):encodeURIComponent(r))}).join("&"),f="https://cdn-front.freepik.com/sponsor/istock/",k={name:"iStock",page:0,perPage:0,total:0,logo:{imageUrl:"",trackerClickCustom:"",url:""},trackerImpCustom:"",results:[]},v={srp:917949,idp:917949,404:917949,"idp-video":917949,"srp-video":917949,popup:917947,stockbanner:917949},g={default:"photo",video:"video",icon:"icon",ai:"ai"},w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0;t=t||"default";let r=Object.keys(g);return e.includes("ai image")?"ai":r.includes(t)?t:"default"},y=async e=>{let{type:t,phrase:r}=e,n=g[w(r,t)],o=await m.Z.get("".concat(f,"mock/data-").concat(n,"-").concat("09-24",".json"));return o.data={...o.data,isDataMocked:!0},o.data},C=(e,t,r)=>{let{params:n}=t,o={params:{phrase:n.phrase,page_size:100},baseUrl:"www.freepik.com"===r?"https://istock-cdn.cdnpk.net/freepik/images/creative":"https://istock-cdn.cdnpk.net/flaticon/images/creative"};return"video"===e?{...o,baseUrl:"https://spg.cdnpk.net/freepik/videos/creative"}:"icon"===e||"vector"===e?{...o,params:{...o.params,graphical_styles:"vector"}}:{...o,params:{...o.params,graphical_styles:"photography"}}},b={en:"en-US",es:"es",fr:"fr",it:"it",de:"de",nl:"nl",pl:"pl","pt-br":"pt-BR",pt:"pt-PT",ko:"ko",ja:"ja","zh-HK":"zh-HK",ru:"ru"},I=async e=>{let{baseUrl:t,params:r}=C(e.type,e,e.projectId);try{let n=h({fields:["detail_set","referral_destinations"],safe_search:!0,sort_order:"most_popular",...r,phrase:r.phrase||""}),o="".concat(t,"?").concat(n),a=await fetch(o,{method:"GET",headers:{"Accept-Language":b[e.locale]||"en-US"}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e}).then(e=>e.json());if("images"in a&&a.images.length<4||"videos"in a&&a.videos.length<4)throw Error("No images or videos found");let c=_(e.params.page||1),i=Math.max(0,c-1)%10;if("images"in a)return{...a,images:a.images.slice(10*i,10*i+10)};return{...a,videos:a.videos.slice(10*i,10*i+10)}}catch(t){return console.error("iStock API return an error",t),y({type:e.type,phrase:""})}},_=e=>e>5?e%5||5:e,S=e=>"clip_length"in e,E=e=>{let{type:t,placement:r}=e;return"video"===t&&("idp"===r||"srp"===r)?"".concat(r,"-video"):r},j=(e,t)=>{let r=E(e),n={sharedId:e.isMockedData?"".concat(r,"-default"):r};e.userId&&(n.subId1=e.userId);let o=e.impression?"i":"c";e.params&&e.params.phrase&&(n.subId2=e.params.phrase),n.subId3=e.projectId,t&&(n.u=t);let a=v[r];return"https://istockphoto.6q33.net/".concat(o,"/39422/").concat(a,"/4205?").concat(h(n))},x=e=>{let{options:t,action:r,link:n,itemId:o,isMockedData:a}=e,c={action:r,sponsor_pixel:t.placement,sponsor:"istock",country:t.country};return t.test&&(c.test=t.test),t.params&&t.params.phrase&&(c.term=t.params.phrase),t.popupOrigin&&(c.origin=t.popupOrigin),n&&(c.link=n),o&&(c.item_id=o),"imp"===r&&(c.type=a?"default":"api"),h(c)},R=e=>btoa(e),U=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&e.userId?"&client_id=".concat(e.userId):""},M=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return"".concat(e.redirectAndBase64).concat(R(t)).concat(U(e,r))},O=e=>{let{url:t,options:r,concatUserId:n}=e;return r.redirectAndBase64?M(r,t,n):t},A=e=>O({url:j(e),options:e,concatUserId:!1}),P=(e,t)=>O({url:j(e,t.referral_destinations.filter(e=>"istockphoto"===e.site_name&&e)[0].uri),options:e,concatUserId:!1}),N=e=>{let t=e.params&&e.params.language||"en",r=e.type,n=e.params&&e.params.query?encodeURIComponent(e.params.query):"";return O({url:j(e,"video"===r?"https://www.istockphoto.com/".concat(t,"/search/2/film?family=creative&phrase=").concat(n):"icon"===r||"vector"===r?"https://www.istockphoto.com/".concat(t,"/search/2/image?family=creative&mediatype=illustration&phrase=").concat(n):"https://www.istockphoto.com/".concat(t,"/search/2/image?family=creative&phrase=").concat(n)),options:e,concatUserId:!1})},D=e=>{let t=e.locale.toLowerCase()||"en";return O({url:j(e,"https://www.istockphoto.com/".concat(t,"/")),options:e,concatUserId:!0})},T=e=>{let[t,r,n,o]=e.split(":");return 36e5*parseInt(t)+6e4*parseInt(r)+1e3*parseInt(n)+parseInt(o)},q=(e,t)=>{let r=S(e);return{id:e.id,url:P(t,e),urlImage:e.display_sizes[1].uri,width:170,height:90,trackerClickCustom:x({options:t,action:"clk",itemId:e.id}),...r&&{urlVideoPreview:e.display_sizes[0].uri,videoPreviewHeight:120,videoPreviewWidth:249,duration:T(e.clip_length)}}},L=(e,t)=>{let r="videos"in e?e.videos:e.images,n=e.isDataMocked||!1;try{let e=404===t.placement?{coupon:{trackerClickCustom:x({options:t,action:"clk",link:"promo"}),url:A(t)}}:{};return{name:"iStock",results:r.map(e=>q(e,t)),coupon:{trackerClickCustom:x({options:t,action:"clk",link:"promo"}),url:N(t)},logo:{imageUrl:"https://cdn-front.freepik.com/fpsp/istock/logo.svg",trackerClickCustom:x({options:t,action:"clk",link:"logo"}),url:A(t)},trackerImpCustom:x({options:t,action:"imp",isMockedData:n}),trackerImpSponsor:j({...t,impression:!0,isMockedData:n}),showMore:{trackerClickCustom:x({options:t,action:"clk",link:"more"}),url:N(t)},...e}}catch(e){return k}},V=e=>I(e).then(t=>L(t,e)),B=e=>({trackerClickCustom:x({options:e,action:"clk"}),url:N(e)}),H=e=>({imageUrl:"".concat(f,"stockbanner/v2/").concat(e.locale.toLocaleUpperCase(),".jpg"),trackerClickCustom:x({options:e,action:"clk"}),trackerImpCustom:x({options:e,action:"imp"}),trackerImpSponsor:j({...e,impression:!0}),url:D(e)}),Z=async e=>"stockbanner"===e.components?await H(e):"popup"===e.components?await B(e):await V(e),W="shutterstock",z="https://cdn-front.freepik.com/fpsp/".concat(W,"/"),$="https://cdn-front.freepik.com/sponsor/".concat(W,"/mock/"),K=["default","video","flaticon"],F={name:"Shutterstock",page:0,perPage:0,total:0,logo:{imageUrl:"",trackerClickCustom:"",url:""},trackerImpCustom:"",results:[]},G={srp:1906897,idp:1906897,404:1906897,"idp-video":1906902,"srp-video":1906902,popup:1906904,stockbanner:1906896},X=async e=>{let{projectId:t,type:r}=e,n=(t.match(/flaticon/)||"icon"===r?"flaticon":null)||(r&&K.includes(r)?r:"freepik")||"freepik",o=await m.Z.get("".concat($,"data-").concat(n,"-").concat("05-02-25",".json"));return o.data={...o.data,isDataMocked:!0},o.data},Q=e=>{let{params:t,type:r}=e,n={...t},o=t&&t.query;return o&&/\s-[^ ]/g.test(o)&&(n={...n,query:o.replace(/\s-/g," NOT ")}),"video"===r&&(n={...n,view:"full"}),n},J=async e=>{let{projectId:t,type:r}=e;try{let n=await m.Z.get("video"===r?"https://shutterstock-cdn.cdnpk.net/v2/videos/search":"https://shutterstock-cdn.cdnpk.net/v2/images/search",{params:Q(e)});if(0===n.data.data.length)return X({projectId:t,type:r});if(n.data.data.length<8){let e=await X({projectId:t,type:r}),o=n.data.total_count+e.total_count;return{...n.data,total_count:o,data:[...n.data.data,...e.data]}}return n.data}catch(e){return console.error("Shutterstock API return an error",e),X({projectId:t,type:r})}},Y=e=>"video"===e.media_type,ee=e=>{let{type:t,placement:r}=e;return"video"===t&&("idp"===r||"srp"===r)?"".concat(r,"-video"):r},et=(e,t)=>{let r=ee(e),n={sharedId:e.projectId,subId1:r},o=e.impression?"i":"c";e.params&&e.params.query&&(n.subId2=e.params.query),e.userId&&(n.subId3=e.userId),t&&(n.u=t);let a=G[r];return"https://shutterstock.7eer.net/".concat(o,"/5159507/").concat(a,"/1305?").concat(h(n))},er=e=>{let{options:t,action:r,link:n,itemId:o,isMockedData:a}=e,c={action:r,sponsor_pixel:t.placement,sponsor:W,country:t.country};return t.test&&(c.test=t.test),t.params&&t.params.query&&(c.term=t.params.query),t.popupOrigin&&(c.origin=t.popupOrigin),n&&(c.link=n),o&&(c.item_id=o),"imp"===r&&(c.type=a?"default":"api"),h(c)},en=e=>{let t=new URL(e),r=new URLSearchParams(t.search).get("u");return null!=r?r:""},eo=e=>O({url:et(e),options:e,concatUserId:!1}),ea=(e,t)=>O({url:et(e,en(t.affiliate_url)),options:e,concatUserId:!1}),ec=e=>{let t=e.params&&e.params.language||"en",r=e.searchType?"/".concat(e.searchType):"",n=e.params&&e.params.query?encodeURIComponent(e.params.query.replace(" ","-")):"",o=e.params&&e.params.image_type?"?image_type=".concat(e.params.image_type):"";return O({url:et(e,"https://www.shutterstock.com/".concat(t).concat(r,"/search/").concat(n).concat(o)),options:e,concatUserId:!1})},ei=e=>{let t=e.locale.toLowerCase()||"en";return O({url:et(e,"https://www.shutterstock.com/".concat(t,"/")),options:e,concatUserId:!0})},es=(e,t)=>{let r=Y(e);return{id:e.id,url:ea(t,e),trackerClickCustom:er({options:t,action:"clk",itemId:e.id}),...!r&&{type:e.image_type,urlImage:e.assets.huge_thumb.url,width:e.assets.huge_thumb.width,height:e.assets.huge_thumb.height},...r&&{type:e.media_type,urlImage:e.assets.thumb_jpg.url,urlVideoPreview:e.assets.preview_mp4.url,videoPreviewHeight:e.assets.web.height,videoPreviewWidth:e.assets.web.width,duration:1e3*e.duration}}},el=(e,t)=>{let r=e.isDataMocked||!1;try{let n=404===t.placement?{coupon:{trackerClickCustom:er({options:t,action:"clk",link:"promo"}),url:eo(t)}}:{};return{name:"Shutterstock",results:e.data.map(e=>es(e,t)),page:e.page,perPage:e.per_page,total:e.total_count,coupon:{trackerClickCustom:er({options:t,action:"clk",link:"promo"}),url:ec(t)},logo:{imageUrl:"https://cdn-front.freepik.com/fpsp/shutterstock/logo.svg",trackerClickCustom:er({options:t,action:"clk",link:"logo"}),url:eo(t)},trackerImpCustom:er({options:t,action:"imp",isMockedData:r}),trackerImpSponsor:et({...t,impression:!0}),showMore:{trackerClickCustom:er({options:t,action:"clk",link:"more"}),url:ec(t)},...n}}catch(e){return console.error(e),F}},eu=e=>J(e).then(t=>el(t,e)),ep=e=>({trackerClickCustom:er({options:e,action:"clk"}),url:ec(e)}),ed=e=>({imageUrl:"".concat(z,"stockbanner/").concat(e.locale.toLocaleUpperCase(),".jpg"),trackerClickCustom:er({options:e,action:"clk"}),trackerImpCustom:er({options:e,action:"imp"}),trackerImpSponsor:et({...e,impression:!0}),url:ei(e)}),em=async e=>"stockbanner"===e.components?await ed(e):"popup"===e.components?await ep(e):await eu(e),eh=e=>em(e),ef=e=>Z(e),ek=r(72118);let ev=async e=>{let{component:t,placement:r,params:n,sponsorName:o,popupOrigin:c,country:i,locale:s,test:l,testVariant:u,type:p}=e,d={placement:r||"srp",country:i||"US",projectId:"www.freepik.com",userId:ek.Z.get("_ga")||"",locale:s||"en",components:t||"banner",params:n||{},popupOrigin:c,test:l,testVariant:u,type:p};return("video"===p&&(d.searchType="video"),"popup"!==t&&(d.redirectAndBase64="/redirect?url="),o===a.hL.shutterstock)?eh(d):ef(d)};var eg=r(87463),ew=r(65059),ey=r(43096),eC=r(26778),eb=r(33794),eI=r(88299);let e_=e=>{var t,r,n,o,a,c,i;let{placement:s,type:l,sponsorName:p}=u(!0),d=null!=l?l:null,m=(0,ey.Jn)("term"),h=(0,eC.tm)(),f=(0,eb.H)(),k=null!==(r=null===(t=(0,eg.KX)())||void 0===t?void 0:t.tags)&&void 0!==r?r:[],v=null!==(n=(0,eI.x3)().tags)&&void 0!==n?n:[],g=null!==(o=(0,ew.ph)().relatedTags)&&void 0!==o?o:[],{term:w}=(0,eC.nn)(),y=null!==(a=h?w:null!==(i=null!==(c=e.term)&&void 0!==c?c:m)&&void 0!==i?i:f.term)&&void 0!==a?a:"";return"iStock"===p?eS({type:d,term:y,iconTags:k,videoTags:v,regularTags:g,placement:s}):eE({type:d,term:y,iconTags:k,videoTags:v,regularTags:g})},eS=e=>{let{type:t,iconTags:r,term:n,videoTags:o,regularTags:a,placement:c}=e;return"idp"!==c?eE({type:t,term:n,iconTags:r,videoTags:o,regularTags:a}):n||eE({type:t,term:n,iconTags:r[0]?[r[0]]:void 0,videoTags:o[0]?[o[0]]:void 0,regularTags:a[0]?[a[0]]:void 0})},eE=e=>{let{type:t,iconTags:r,term:n,videoTags:o,regularTags:a}=e;return"icon"===t?ej({term:"".concat(n," icon"),tags:r}).trim():"video"===t?ej({term:n,tags:o}).trim():ej({term:n,tags:a}).trim()},ej=e=>{var t,r;let{term:n,tags:o}=e;if(!o||0===o.length)return n;if(!n)return o.slice(0,2).map(e=>e.name).join(" ");let a=null!==(r=null===(t=o[0])||void 0===t?void 0:t.name)&&void 0!==r?r:"";return Array.from(new Set([...n.split(" "),...a.split(" ")])).join(" ")},ex={[a.hL.shutterstock]:"",[a.hL.istock]:""},eR={photo:["photo"],vector:["icon","vector"],video:["video"]},eU=(e,t)=>(0,c.useMemo)(()=>{let r=ex[e];if(!t||"video"===t)return r;let n=Object.entries(eR).find(e=>{let[,r]=e;return r.includes(t)});return n?[n[0]]:r},[e,t]),eM={br:"pt",kr:"ko"},eO=e=>{let{type:t=null,page:r,sponsorName:n}=u(!0),o=eU(n,t),i=e_({term:null==e?void 0:e.term}),s=(0,d.ZK)();return(0,c.useMemo)(()=>{if(n===a.hL.shutterstock){let e={query:eA(n,i,t),language:eM[s]||s,page:r};return o&&(e.image_type=o),e}return{query:i,phrase:eA(n,i,t),page:r}},[s,r,n,o,t,i])},eA=(e,t,r)=>"icon"!==r?t:"".concat(t," ").concat({iStock:"-set -collection -series -pack -bundle -group",Shutterstock:"NOT set"}[e]),eP=(e,t)=>{let{sponsorName:r,country:n,component:o,placement:a,popupOrigin:i,test:s,testVariant:l,type:u}=e,p=(0,c.useRef)(),m=eO(),h=(0,d.ZK)(),[f,k]=(0,c.useState)(null),v=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(clearTimeout(p.current),t)return k(null),p.current=setTimeout(async()=>{let e={params:m,sponsorName:r,component:o,placement:a,popupOrigin:i,country:n,locale:h,...s&&{test:s},...l&&{testVariant:l},type:u};try{let t=await ev(e);v.current=t,k(t)}catch(e){k(e instanceof Error?e:Error("Error fetching data banner"))}},200),()=>{clearTimeout(p.current)}},[r,n,o,a,i,s,l,m,h,t,u]),t?f:v.current},eN=(e,t)=>"function"==typeof e?e(t):e,eD=e=>{let{children:t,isEnabled:r,...o}=e,a=eP(o,r);return(0,n.jsx)(p.Provider,{value:a,children:eN(t,a)})},eT=e=>{let{blockRendering:t,children:r,isEnabled:o=!0}=e,a=u();return a?(0,n.jsx)(eD,{...a,isEnabled:o,children:r}):(0,n.jsx)(p.Provider,{value:null,children:t?null:eN(r,null)})},eq=e=>{let t=(0,c.useContext)(p);if(void 0===t)throw Error("useSponsorData must be used within a SponsorDataProvider");if(e&&null==t)throw Error("sponsorData is not loaded, please disable safeMode");return t};r(68883);var eL=r(66287);let eV=e=>{let t=(0,eL.a)("sm"),[r,n]=(0,c.useState)(t),o=(0,c.useRef)(e);return(0,c.useEffect)(()=>{t&&(n(!0),o.current=e)},[t,e]),{isNotMobile:t,mustLoad:r,latestProps:t?e:o.current}};var eB=r(48493),eH=r(70800);let eZ=(e,t,r)=>{let n=t?"&id_list=".concat(encodeURIComponent(t.join(","))):"",o="".concat(e).concat(r?"&content_type=".concat(r):"&content_type=all").concat(n);(0,eH.OA)(o)},eW=e=>{var t,r;let{sponsorName:n,component:o,placement:a,position:i,action:s,sponsorResponse:l,type:u}=e,p={sponsorName:n,component:o,placement:a,position:i,action:s},d=(0,eB.eS)(p),m=(0,eB.eS)({...p,action:"click",element:"logo"}),h=(0,eB.eS)({...p,action:"click",element:"promo"}),f=(0,eB.eS)({...p,action:"click",element:"more"}),k=(0,c.useCallback)(e=>{eZ(l.trackerImpCustom,e,u),d()},[d,l.trackerImpCustom,u]),v=(0,c.useCallback)(()=>{l.trackerImpSponsor&&(0,eH.OA)(l.trackerImpSponsor,"")},[l]);return{impressionCustom:k,impressionSponsor:v,logoClick:(0,c.useCallback)(()=>{(0,eH.OA)(l.logo.trackerClickCustom),m()},[m,l.logo.trackerClickCustom]),couponClick:(0,c.useCallback)(()=>{var e;(0,eH.OA)((null===(e=l.coupon)||void 0===e?void 0:e.trackerClickCustom)||""),h()},[h,null===(t=l.coupon)||void 0===t?void 0:t.trackerClickCustom]),showMoreClick:(0,c.useCallback)(()=>{var e;(0,eH.OA)((null===(e=l.showMore)||void 0===e?void 0:e.trackerClickCustom)||""),f()},[f,null===(r=l.showMore)||void 0===r?void 0:r.trackerClickCustom])}}},36328:function(e,t,r){r.d(t,{B:function(){return l},a:function(){return s}});var n=r(97458),o=r(57899),a=r(83648),c=r(52983),i=r(15881);let s=(0,c.createContext)({orientation:o.NE,setOrientation:()=>{},aspectRatio:i.vr,setAspectRatio:()=>{},ready:!1}),l=e=>{let{children:t,initialOrientation:r,initialAspectRatio:l}=e,{...u}=(0,a.useRouter)(),[p,d]=(0,c.useState)(null!=r?r:o.NE),[m,h]=(0,c.useState)(null!=l?l:i.vr),[f,k]=(0,c.useState)(!1);(0,c.useEffect)(()=>(u.isReady&&k(!0),()=>{k(!1)}),[u.isReady]);let v=(0,c.useMemo)(()=>({orientation:p,setOrientation:d,ready:f,aspectRatio:m,setAspectRatio:h}),[p,d,f,m,h]);return(0,n.jsx)(s.Provider,{value:v,children:t})}},66743:function(e,t,r){r.d(t,{nh:function(){return n},hL:function(){return o},FO:function(){return u},sQ:function(){return k},qv:function(){return w},fe:function(){return S}});let n=["ru","ua","by"],o={shutterstock:"Shutterstock",istock:"iStock"};[...n];var a=r(7616),c=r(99753),i=r(68883);let s={test:"video",testVariant:"a"},l=e=>{if("video"===e){let{test:t,testVariant:r}=s;return{type:e,test:t,testVariant:r}}return{type:e}},u=e=>{let t=(0,a.Dv)(i.tj);return{...l(e||t),page:(0,c.W)()}};var p=r(66287),d=r(35074),m=r(87539),h=r(16103),f=r(77887);let k=()=>{var e;let t=(0,h.H)(),r=(0,m.A)(),{isBasic:o}=(0,d.h)(),a=(0,p.a)("sm"),c=(0,f.N)(),i=null!==(e=null==c?void 0:c.toLowerCase())&&void 0!==e?e:c;return r&&!t&&a&&i&&!o?{isEnabled:!n.includes(i),country:i}:{isEnabled:!1,country:""}};var v=r(70978),g=r(53525);let w=()=>{let e=(0,a.Dv)(v.A9);return!(0,g.t)()||void 0!==e};var y=r(52983);let C={[o.shutterstock]:45,[o.istock]:55},b=e=>{let t=0;if(Object.keys(e).forEach(r=>{t+=e[r]}),100!==t)throw Error("The sum of all the percentages is greater than 100");return t},I=()=>Math.floor(Math.random()*b(C))+1,_=()=>{let e=I();for(let[t,r]of Object.entries(C))if((e-=r)<=0)return t;return o.istock},S=e=>{let[t,r]=(0,y.useState)(null);return(0,y.useEffect)(()=>{r(_())},[e]),t}},88299:function(e,t,r){r.d(t,{c6:function(){return y},xZ:function(){return g},UF:function(){return w},x3:function(){return l.x}}),r(69447),r(55049);var n=r(83648),o=r(52983),a=r(84540);let c=(0,o.createContext)({aspectRatio:a.vr,setAspectRatio:()=>{},ready:!1}),i=/\d+(?::|%3A)\d+$/,s=(e,t)=>{let{aspectRatio:r,setAspectRatio:a,ready:s}=(0,o.useContext)(c),{query:l}=(0,n.useRouter)(),u=(0,o.useCallback)(()=>{if(null==e?void 0:e.length)return location.pathname.match(i)&&e.includes(location.pathname.match(i)[0])?a(location.pathname.match(i)[0]):a(t)},[e,a,t]);return(0,o.useEffect)(()=>{let r=l.aspect_ratio,n=l.aspectRatio;return r?"/search"===location.pathname?a(e.includes(r)?r:t):u():n?void a(n):u()},[e,t,l,a,u]),[r,e=>{if(a(e),!location.pathname.match(i)){let t=location.pathname.endsWith("/");window.history.replaceState({},"","".concat(location.pathname).concat(t?"":"/").concat(e));return}if(e===t){window.history.replaceState({},"",window.location.pathname.replace(i,""));return}window.history.replaceState({},"",window.location.pathname.replace(i,e))},s]};var l=r(33314);let u=()=>{let{availableAspectRatios:e,nativeAspectRatio:t}=(0,l.x)();return s(e,t)};var p=r(11681),d=r(28792),m=r(1850),h=r(50795);let f=m.z.enum(d.s),k=(e,t)=>{let r=t.find(t=>f.safeParse(t).success&&(0,h.X)(t)===e);return null!=r?r:"16:9"};var v=r(99508);let g=()=>{let{previews:e}=(0,p.E)(),t=Object.keys(e),[r]=(0,v.e)(),n=k(r,t);return e[n]?e[n][0]:e[t[0]][0]},w=()=>{let{thumbnails:e}=(0,p.E)(),[t]=u();return(0,o.useMemo)(()=>{if(!e[t]){let t=Object.keys(e)[0];return e[t][0]}return e[t][0]},[t,e])},y=()=>{let{thumbnails:e}=(0,p.E)();return(0,o.useMemo)(()=>{if(!e["16:9"]){let t=Object.keys(e)[0];return e[t][0]}return e["16:9"][0]},[e])}},69447:function(e,t,r){r.d(t,{P:function(){return p}});let n=e=>Array.isArray(e),o=["locale","sort","page","term","img"],a=["videoType"],c=["fps","topic"],i={sort:"order",videoType:"category"},s=[""],l=e=>i[e]||e,u=(e,t)=>{if("term"===e)return"".concat(e,"=").concat(encodeURIComponent(t.toString()));if("duration"===e){let e=t.split(",");return"duration[from]=".concat(e[0],"&duration[to]=").concat(e[1])}return c.includes(e)?"filters[".concat(e,"][]=").concat(t):"aspectRatio"===e?"filters[aspect_ratio][]=".concat(t,"&view_aspect=").concat(t):"videoOrientation"===e?"filters[orientations][]=".concat(t):"author"===e?"filters[author]=".concat(t):o.includes(e)||a.includes(e)?"".concat(l(e),"=").concat(t):"".concat(l(e),"[").concat(t,"]=1")},p=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=[];t.forEach(e=>{n(e)?e.forEach(e=>{let[t,r]=e;r&&r.length>0&&o.push(u(t,r))}):"string"==typeof e?o.concat(e.split("&")):Object.entries(e).forEach(e=>{let[t,r]=e;("number"==typeof r||r.length>0)&&o.push(u(t,r))})});let a=Array.from(new Set([...s,...o])).sort((e,t)=>e.localeCompare(t)).join("&");return a.startsWith("&")?a.slice(1):a}},99508:function(e,t,r){r.d(t,{e:function(){return u}});var n=r(57899),o=r(83648),a=r(52983),c=r(36328);let i=new RegExp("/".concat(n.Vs.join("|"),"$")),s=(e,t)=>{let{orientation:r,setOrientation:n,ready:s}=(0,a.useContext)(c.a),{query:l}=(0,o.useRouter)(),u=(0,a.useCallback)(()=>{if(null==e?void 0:e.length)return location.pathname.match(i)?n(location.pathname.match(i)[0]):n(t)},[e,n,t]);return(0,a.useEffect)(()=>{var e;let t=l.orientation,r="string"==typeof l.videoOrientation?null===(e=l.videoOrientation)||void 0===e?void 0:e.split(","):[];if(t)return"/search"===location.pathname?n(t):u();let o=1===r.length?r[0]:null;if(!o)return u();n(o)},[e,l,n,u]),[r,e=>{if(n(e),e===t){let e=location.pathname.replace(i,""),t=e.endsWith("/")?e.slice(0,-1):e;window.history.replaceState({},"",t);return}if(!location.pathname.match(i)){let t=location.pathname.endsWith("/");window.history.replaceState({},"","".concat(location.pathname).concat(t?"":"/").concat(e));return}window.history.replaceState({},"",window.location.pathname.replace(i,e))},s]};var l=r(33314);let u=()=>{let{availableOrientations:e,nativeOrientation:t}=(0,l.x)();return s(e,t)}},40125:function(e,t,r){r.d(t,{E:function(){return n}});let n=(0,r(52983).createContext)({})},33314:function(e,t,r){r.d(t,{G:function(){return c},x:function(){return n.x}});var n=r(55352),o=r(97458),a=r(40125);let c=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.E.Provider,{value:r,children:t})}},55352:function(e,t,r){r.d(t,{x:function(){return a}});var n=r(52983),o=r(40125);let a=()=>(0,n.useContext)(o.E)},11681:function(e,t,r){r.d(t,{E:function(){return c}});var n=r(50795),o=r(52983),a=r(55352);let c=()=>{let{thumbnails:e,previews:t,availableAspectRatios:r}=(0,a.x)(),c=(0,o.useMemo)(()=>{let e={};return null==r||r.forEach(r=>{e[r]=t.filter(e=>e.aspectRatio===r)}),e},[r,t]),i=(0,o.useMemo)(()=>{let e={};return null==r||r.forEach(r=>{e[(0,n.X)(r)]=t.filter(e=>e.aspectRatio===r)}),e},[r,t]),s=(0,o.useMemo)(()=>{let t={};return null==r||r.forEach(r=>{t[r]=e.filter(e=>e.aspectRatio===r)}),t},[r,e]);return(0,o.useMemo)(()=>({previews:c,thumbnails:s,previewsGroupedByOrientation:i}),[c,s,i])}},57899:function(e,t,r){r.d(t,{NE:function(){return n.NE},Vs:function(){return n.Vs}});var n=r(99523)}}]);