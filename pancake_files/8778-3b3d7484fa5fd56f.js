!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="31ea1e1a-2dce-4e2e-91c4-463411a1aa50",e._sentryDebugIdIdentifier="sentry-dbid-31ea1e1a-2dce-4e2e-91c4-463411a1aa50")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8778],{27542:function(){},25986:function(){},4318:function(){},28311:function(){},22682:function(){},44078:function(e,t,r){"use strict";r.d(t,{z:function(){return h}});var s=r(16677),i=r(89374),n=r(15518),u=r(39051),a=r(67699),c=r(53317),h=class extends u.l{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,a.O)(),this.options.experimental_prefetchInRender||this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(t)}#e;#s=void 0;#i=void 0;#n=void 0;#u;#a;#r;#t;#c;#h;#o;#l;#d;#f;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#s.addObserver(this),o(this.#s,this.options)?this.#y():this.updateResult(),this.#R())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#s,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#s,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#v(),this.#s.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.#s;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,c.Nc)(this.options.enabled,this.#s))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#Q(),this.#s.setOptions(this.options),r._defaulted&&!(0,c.VS)(this.options,r)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#s,observer:this});let i=this.hasListeners();i&&d(this.#s,s,this.options,r)&&this.#y(),this.updateResult(t),i&&(this.#s!==s||(0,c.Nc)(this.options.enabled,this.#s)!==(0,c.Nc)(r.enabled,this.#s)||(0,c.KC)(this.options.staleTime,this.#s)!==(0,c.KC)(r.staleTime,this.#s))&&this.#m();let n=this.#g();i&&(this.#s!==s||(0,c.Nc)(this.options.enabled,this.#s)!==(0,c.Nc)(r.enabled,this.#s)||n!==this.#f)&&this.#I(n)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),r=this.createResult(t,e);return(0,c.VS)(this.getCurrentResult(),r)||(this.#n=r,this.#a=this.options,this.#u=this.#s.state),r}getCurrentResult(){return this.#n}trackResult(e,t){let r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),t?.(s),e[s])})}),r}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#s}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#y({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#y(e){this.#Q();let t=this.#s.fetch(this.options,e);return e?.throwOnError||(t=t.catch(c.ZT)),t}#m(){this.#b();let e=(0,c.KC)(this.options.staleTime,this.#s);if(c.sk||this.#n.isStale||!(0,c.PN)(e))return;let t=(0,c.Kp)(this.#n.dataUpdatedAt,e);this.#l=setTimeout(()=>{this.#n.isStale||this.updateResult()},t+1)}#g(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#s):this.options.refetchInterval)??!1}#I(e){this.#v(),this.#f=e,!c.sk&&!1!==(0,c.Nc)(this.options.enabled,this.#s)&&(0,c.PN)(this.#f)&&0!==this.#f&&(this.#d=setInterval(()=>{(this.options.refetchIntervalInBackground||s.j.isFocused())&&this.#y()},this.#f))}#R(){this.#m(),this.#I(this.#g())}#b(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#v(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(e,t){let r;let s=this.#s,i=this.options,u=this.#n,a=this.#u,h=this.#a,l=e!==s?e.state:this.#i,{state:p}=e,y={...p},R=!1;if(t._optimisticResults){let r=this.hasListeners(),u=!r&&o(e,t),a=r&&d(e,s,t,i);(u||a)&&(y={...y,...(0,n.z)(p.data,e.options)}),"isRestoring"===t._optimisticResults&&(y.fetchStatus="idle")}let{error:b,errorUpdatedAt:v,status:Q}=y;if(t.select&&void 0!==y.data){if(u&&y.data===a?.data&&t.select===this.#c)r=this.#h;else try{this.#c=t.select,r=t.select(y.data),r=(0,c.oE)(u?.data,r,t),this.#h=r,this.#t=null}catch(e){this.#t=e}}else r=y.data;if(void 0!==t.placeholderData&&void 0===r&&"pending"===Q){let e;if(u?.isPlaceholderData&&t.placeholderData===h?.placeholderData)e=u.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#o?.state.data,this.#o):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#t=null}catch(e){this.#t=e}void 0!==e&&(Q="success",r=(0,c.oE)(u?.data,e,t),R=!0)}this.#t&&(b=this.#t,r=this.#h,v=Date.now(),Q="error");let m="fetching"===y.fetchStatus,g="pending"===Q,I="error"===Q,O=g&&m,C=void 0!==r;return{status:Q,fetchStatus:y.fetchStatus,isPending:g,isSuccess:"success"===Q,isError:I,isInitialLoading:O,isLoading:O,data:r,dataUpdatedAt:y.dataUpdatedAt,error:b,errorUpdatedAt:v,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>l.dataUpdateCount||y.errorUpdateCount>l.errorUpdateCount,isFetching:m,isRefetching:m&&!g,isLoadingError:I&&!C,isPaused:"paused"===y.fetchStatus,isPlaceholderData:R,isRefetchError:I&&C,isStale:f(e,t),refetch:this.refetch,promise:this.#r}}updateResult(e){let t=this.#n,r=this.createResult(this.#s,this.options);if(this.#u=this.#s.state,this.#a=this.options,void 0!==this.#u.data&&(this.#o=this.#s),(0,c.VS)(r,t))return;if(this.options.experimental_prefetchInRender){let e=e=>{"error"===r.status?e.reject(r.error):void 0!==r.data&&e.resolve(r.data)},t=()=>{e(this.#r=r.promise=(0,a.O)())},s=this.#r;switch(s.status){case"pending":e(s);break;case"fulfilled":("error"===r.status||r.data!==s.value)&&t();break;case"rejected":("error"!==r.status||r.error!==s.reason)&&t()}}this.#n=r;let s={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.#p.size)return!0;let s=new Set(r??this.#p);return this.options.throwOnError&&s.add("error"),Object.keys(this.#n).some(e=>this.#n[e]!==t[e]&&s.has(e))})()&&(s.listeners=!0),this.#O({...s,...e})}#Q(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#s)return;let t=this.#s;this.#s=e,this.#i=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#R()}#O(e){i.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#n)}),this.#e.getQueryCache().notify({query:this.#s,type:"observerResultsUpdated"})})}};function o(e,t){return!1!==(0,c.Nc)(t.enabled,e)&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)||void 0!==e.state.data&&l(e,t,t.refetchOnMount)}function l(e,t,r){if(!1!==(0,c.Nc)(t.enabled,e)){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&f(e,t)}return!1}function d(e,t,r,s){return(e!==t||!1===(0,c.Nc)(s.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&f(e,r)}function f(e,t){return!1!==(0,c.Nc)(t.enabled,e)&&e.isStaleByTime((0,c.KC)(t.staleTime,e))}},82161:function(e,t,r){"use strict";let s;r.d(t,{r:function(){return m}});var i=r(52983),n=r(89374),u=r(53317),a=r(25288);r(97458);var c=i.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),h=()=>i.useContext(c),o=r(56139),l=(e,t)=>{(e.suspense||e.throwOnError)&&!t.isReset()&&(e.retryOnMount=!1)},d=e=>{i.useEffect(()=>{e.clearReset()},[e])},f=({result:e,errorResetBoundary:t,throwOnError:r,query:s})=>e.isError&&!t.isReset()&&!e.isFetching&&s&&(0,o.L)(r,[e.error,s]),p=i.createContext(!1),y=()=>i.useContext(p);p.Provider;var R=e=>{e.suspense&&("number"!=typeof e.staleTime&&(e.staleTime=1e3),"number"==typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3)))},b=(e,t)=>e.isLoading&&e.isFetching&&!t,v=(e,t)=>e?.suspense&&t.isPending,Q=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function m(e,t,r){let s=(0,a.NL)(r),c=y(),p=h(),m=s.defaultQueryOptions(e);s.getDefaultOptions().queries?._experimental_beforeQuery?.(m),m._optimisticResults=c?"isRestoring":"optimistic",R(m),l(m,p),d(p);let g=!s.getQueryState(e.queryKey),[I]=i.useState(()=>new t(s,m)),O=I.getOptimisticResult(m);if(i.useSyncExternalStore(i.useCallback(e=>{let t=c?()=>void 0:I.subscribe(n.V.batchCalls(e));return I.updateResult(),t},[I,c]),()=>I.getCurrentResult(),()=>I.getCurrentResult()),i.useEffect(()=>{I.setOptions(m,{listeners:!1})},[m,I]),v(m,O))throw Q(m,I,p);if(f({result:O,errorResetBoundary:p,throwOnError:m.throwOnError,query:s.getQueryCache().get(m.queryHash)}))throw O.error;if(s.getDefaultOptions().queries?._experimental_afterQuery?.(m,O),m.experimental_prefetchInRender&&!u.sk&&b(O,c)){let e=g?Q(m,I,p):s.getQueryCache().get(m.queryHash)?.promise;e?.catch(o.Z).finally(()=>{I.hasListeners()||I.updateResult()})}return m.notifyOnChangeProps?O:I.trackResult(O)}},78511:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var s=r(44078),i=r(82161);function n(e,t){return(0,i.r)(e,s.z,t)}},56139:function(e,t,r){"use strict";function s(e,t){return"function"==typeof e?e(...t):!!e}function i(){}r.d(t,{L:function(){return s},Z:function(){return i}})}}]);