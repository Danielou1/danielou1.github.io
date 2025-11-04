import{$ as zd,$a as ef,A as Oc,Aa as qd,Ab as uf,B as Ar,Ba as Xn,Bb as Os,C as Nd,Ca as $d,Cb as Ns,D as Rr,Da as Is,Db as ca,E as wi,Ea as Yd,F as Nc,Fa as Zd,G as Fd,Ga as ta,H as Ud,Ha as Mt,I as kd,Ia as Ye,J as An,Ja as na,K as Bd,Ka as ia,L as Wt,La as U,M as Ft,Ma as q,N as Fc,Na as ge,O as Ke,P as Ki,Q as Vd,Qa as Ps,R as xt,Ra as ct,S as Uc,Sa as un,T as st,Ta as Jd,U as Ie,Ua as Hc,V as Es,Va as Gc,W as Ts,Wa as Pe,X as Tt,Xa as Ze,Y as Qi,Ya as Xt,Z as Ei,Za as Kd,_ as Ir,_a as Qd,a as xe,aa as Hd,ab as tf,b as Dt,ba as Pr,bb as Wc,c as Cd,ca as si,cb as Ct,d as Cr,da as Jo,db as nf,e as Ad,ea as Ti,eb as ra,f as Rd,fa as Ci,fb as sa,g as Id,ga as Fe,gb as oa,h as Ic,ha as Qe,hb as Ds,i as Pc,ia as Cs,ib as rf,j as Tn,ja as kc,jb as Xc,k as dn,ka as Bc,kb as Ls,l as Mi,la as Ko,lb as sf,m as cn,ma as oi,mb as of,n as Ve,na as Gd,nb as jc,o as ws,oa as Vc,ob as Dr,p as Pd,pa as Wd,pb as af,q as Dd,qa as fn,qb as lf,r as rt,ra as zc,rb as Rn,s as Dc,sa as Qo,sb as aa,t as Cn,ta as As,tb as la,u as Ld,ua as Xd,ub as cf,v as Lc,va as Rs,vb as jt,w as Od,wa as se,wb as Lr,x as bi,xa as Ue,y as Si,ya as jd,z as Ji,za as ea,zb as Ut}from"./chunk-K3QMX72M.js";var Us=class{},da=class{},Ri=class i{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),s=r.toLowerCase(),o=t.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.setHeaderEntries(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var $c=class{encodeKey(e){return hf(e)}encodeValue(e){return hf(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function e0(i,e){let t=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}var t0=/%(\d[a-f0-9])/gi,n0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function hf(i){return encodeURIComponent(i).replace(t0,(e,t)=>n0[t]??e)}function ua(i){return`${i}`}var Ai=class i{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new $c,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=e0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],r=Array.isArray(n)?n.map(ua):[ua(n)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(s=>{t.push({param:n,value:s,op:"a"})}):t.push({param:n,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new i({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(ua(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(ua(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Yc=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function i0(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function df(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function ff(i){return typeof Blob<"u"&&i instanceof Blob}function pf(i){return typeof FormData<"u"&&i instanceof FormData}function r0(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Fs=class i{constructor(e,t,n,r){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(i0(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new Ri,this.context??=new Yc,!this.params)this.params=new Ai,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||df(this.body)||ff(this.body)||pf(this.body)||r0(this.body)?this.body:this.body instanceof Ai?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||pf(this.body)?null:ff(this.body)?this.body.type||null:df(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Ai?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,s=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,u=e.params||this.params,h=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((d,m)=>d.set(m,e.setHeaders[m]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((d,m)=>d.set(m,e.setParams[m]),u)),new i(t,n,o,{params:u,headers:c,context:h,reportProgress:l,responseType:r,withCredentials:a,transferCache:s})}},Or=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(Or||{}),ks=class{constructor(e,t=pa.Ok,n="OK"){this.headers=e.headers||new Ri,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Zc=class i extends ks{constructor(e={}){super(e),this.type=Or.ResponseHeader}clone(e={}){return new i({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Nr=class i extends ks{constructor(e={}){super(e),this.type=Or.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new i({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},fa=class extends ks{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},pa=function(i){return i[i.Continue=100]="Continue",i[i.SwitchingProtocols=101]="SwitchingProtocols",i[i.Processing=102]="Processing",i[i.EarlyHints=103]="EarlyHints",i[i.Ok=200]="Ok",i[i.Created=201]="Created",i[i.Accepted=202]="Accepted",i[i.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",i[i.NoContent=204]="NoContent",i[i.ResetContent=205]="ResetContent",i[i.PartialContent=206]="PartialContent",i[i.MultiStatus=207]="MultiStatus",i[i.AlreadyReported=208]="AlreadyReported",i[i.ImUsed=226]="ImUsed",i[i.MultipleChoices=300]="MultipleChoices",i[i.MovedPermanently=301]="MovedPermanently",i[i.Found=302]="Found",i[i.SeeOther=303]="SeeOther",i[i.NotModified=304]="NotModified",i[i.UseProxy=305]="UseProxy",i[i.Unused=306]="Unused",i[i.TemporaryRedirect=307]="TemporaryRedirect",i[i.PermanentRedirect=308]="PermanentRedirect",i[i.BadRequest=400]="BadRequest",i[i.Unauthorized=401]="Unauthorized",i[i.PaymentRequired=402]="PaymentRequired",i[i.Forbidden=403]="Forbidden",i[i.NotFound=404]="NotFound",i[i.MethodNotAllowed=405]="MethodNotAllowed",i[i.NotAcceptable=406]="NotAcceptable",i[i.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",i[i.RequestTimeout=408]="RequestTimeout",i[i.Conflict=409]="Conflict",i[i.Gone=410]="Gone",i[i.LengthRequired=411]="LengthRequired",i[i.PreconditionFailed=412]="PreconditionFailed",i[i.PayloadTooLarge=413]="PayloadTooLarge",i[i.UriTooLong=414]="UriTooLong",i[i.UnsupportedMediaType=415]="UnsupportedMediaType",i[i.RangeNotSatisfiable=416]="RangeNotSatisfiable",i[i.ExpectationFailed=417]="ExpectationFailed",i[i.ImATeapot=418]="ImATeapot",i[i.MisdirectedRequest=421]="MisdirectedRequest",i[i.UnprocessableEntity=422]="UnprocessableEntity",i[i.Locked=423]="Locked",i[i.FailedDependency=424]="FailedDependency",i[i.TooEarly=425]="TooEarly",i[i.UpgradeRequired=426]="UpgradeRequired",i[i.PreconditionRequired=428]="PreconditionRequired",i[i.TooManyRequests=429]="TooManyRequests",i[i.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",i[i.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",i[i.InternalServerError=500]="InternalServerError",i[i.NotImplemented=501]="NotImplemented",i[i.BadGateway=502]="BadGateway",i[i.ServiceUnavailable=503]="ServiceUnavailable",i[i.GatewayTimeout=504]="GatewayTimeout",i[i.HttpVersionNotSupported=505]="HttpVersionNotSupported",i[i.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",i[i.InsufficientStorage=507]="InsufficientStorage",i[i.LoopDetected=508]="LoopDetected",i[i.NotExtended=510]="NotExtended",i[i.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",i}(pa||{});function qc(i,e){return{body:e,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,transferCache:i.transferCache}}var Jc=(()=>{class i{constructor(t){this.handler=t}request(t,n,r={}){let s;if(t instanceof Fs)s=t;else{let l;r.headers instanceof Ri?l=r.headers:l=new Ri(r.headers);let c;r.params&&(r.params instanceof Ai?c=r.params:c=new Ai({fromObject:r.params})),s=new Fs(t,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=Ve(s).pipe(Ji(l=>this.handler.handle(l)));if(t instanceof Fs||r.observe==="events")return o;let a=o.pipe(bi(l=>l instanceof Nr));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(rt(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(rt(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(rt(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(rt(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new Ai().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,r={}){return this.request("PATCH",t,qc(r,n))}post(t,n,r={}){return this.request("POST",t,qc(r,n))}put(t,n,r={}){return this.request("PUT",t,qc(r,n))}static{this.\u0275fac=function(n){return new(n||i)(st(Us))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})();function s0(i,e){return e(i)}function o0(i,e,t){return(n,r)=>si(t,()=>e(n,s=>i(s,r)))}var wf=new xt(""),Ef=new xt(""),a0=new xt("");var mf=(()=>{class i extends Us{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=Ie(ta);let r=Ie(a0,{optional:!0});this.backend=r??t}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(wf),...this.injector.get(Ef,[])]));this.chain=r.reduceRight((s,o)=>o0(s,o,this.injector),s0)}let n=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(Rr(()=>this.pendingTasks.remove(n)))}static{this.\u0275fac=function(n){return new(n||i)(st(da),st(Pr))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})();var l0=/^\)\]\}',?\n/;function c0(i){return"responseURL"in i&&i.responseURL?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):null}var gf=(()=>{class i{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Ft(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?cn(n.\u0275loadImpl()):Ve(null)).pipe(An(()=>new Id(s=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((y,p)=>o.setRequestHeader(y,p.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let y=t.detectContentTypeHeader();y!==null&&o.setRequestHeader("Content-Type",y)}if(t.responseType){let y=t.responseType.toLowerCase();o.responseType=y!=="json"?y:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let y=o.statusText||"OK",p=new Ri(o.getAllResponseHeaders()),f=c0(o)||t.url;return l=new Zc({headers:p,status:o.status,statusText:y,url:f}),l},u=()=>{let{headers:y,status:p,statusText:f,url:w}=c(),S=null;p!==pa.NoContent&&(S=typeof o.response>"u"?o.responseText:o.response),p===0&&(p=S?pa.Ok:0);let M=p>=200&&p<300;if(t.responseType==="json"&&typeof S=="string"){let D=S;S=S.replace(l0,"");try{S=S!==""?JSON.parse(S):null}catch(C){S=D,M&&(M=!1,S={error:C,text:S})}}M?(s.next(new Nr({body:S,headers:y,status:p,statusText:f,url:w||void 0})),s.complete()):s.error(new fa({error:S,headers:y,status:p,statusText:f,url:w||void 0}))},h=y=>{let{url:p}=c(),f=new fa({error:y,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});s.error(f)},d=!1,m=y=>{d||(s.next(c()),d=!0);let p={type:Or.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(p.total=y.total),t.responseType==="text"&&o.responseText&&(p.partialText=o.responseText),s.next(p)},g=y=>{let p={type:Or.UploadProgress,loaded:y.loaded};y.lengthComputable&&(p.total=y.total),s.next(p)};return o.addEventListener("load",u),o.addEventListener("error",h),o.addEventListener("timeout",h),o.addEventListener("abort",h),t.reportProgress&&(o.addEventListener("progress",m),a!==null&&o.upload&&o.upload.addEventListener("progress",g)),o.send(a),s.next({type:Or.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",u),o.removeEventListener("timeout",h),t.reportProgress&&(o.removeEventListener("progress",m),a!==null&&o.upload&&o.upload.removeEventListener("progress",g)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(n){return new(n||i)(st(ca))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),Tf=new xt(""),u0="XSRF-TOKEN",h0=new xt("",{providedIn:"root",factory:()=>u0}),d0="X-XSRF-TOKEN",f0=new xt("",{providedIn:"root",factory:()=>d0}),ma=class{},p0=(()=>{class i{constructor(t,n,r){this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=la(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(n){return new(n||i)(st(Rn),st(fn),st(h0))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})();function m0(i,e){let t=i.url.toLowerCase();if(!Ie(Tf)||i.method==="GET"||i.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(i);let n=Ie(ma).getToken(),r=Ie(f0);return n!=null&&!i.headers.has(r)&&(i=i.clone({headers:i.headers.set(r,n)})),e(i)}function Cf(...i){let e=[Jc,gf,mf,{provide:Us,useExisting:mf},{provide:da,useExisting:gf},{provide:wf,useValue:m0,multi:!0},{provide:Tf,useValue:!0},{provide:ma,useClass:p0}];for(let t of i)e.push(...t.\u0275providers);return Ir(e)}var vf="b",yf="h",_f="s",xf="st",Mf="u",bf="rt",ha=new xt(""),g0=["GET","HEAD"];function v0(i,e){let h=Ie(ha),{isCacheActive:t}=h,n=Cd(h,["isCacheActive"]),{transferCache:r,method:s}=i;if(!t||s==="POST"&&!n.includePostRequests&&!r||s!=="POST"&&!g0.includes(s)||r===!1||n.filter?.(i)===!1)return e(i);let o=Ie(Qo),a=_0(i),l=o.get(a,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[vf]:d,[bf]:m,[yf]:g,[_f]:y,[xf]:p,[Mf]:f}=l,w=d;switch(m){case"arraybuffer":w=new TextEncoder().encode(d).buffer;break;case"blob":w=new Blob([d]);break}let S=new Ri(g);return Ve(new Nr({body:w,headers:S,status:y,statusText:p,url:f}))}let u=Ns(Ie(fn));return e(i).pipe(Wt(d=>{d instanceof Nr&&u&&o.set(a,{[vf]:d.body,[yf]:y0(d.headers,c),[_f]:d.status,[xf]:d.statusText,[Mf]:d.url||"",[bf]:i.responseType})}))}function y0(i,e){if(!e)return{};let t={};for(let n of e){let r=i.getAll(n);r!==null&&(t[n]=r)}return t}function Sf(i){return[...i.keys()].sort().map(e=>`${e}=${i.getAll(e)}`).join("&")}function _0(i){let{params:e,method:t,responseType:n,url:r}=i,s=Sf(e),o=i.serializeBody();o instanceof URLSearchParams?o=Sf(o):typeof o!="string"&&(o="");let a=[t,n,r,o,s].join("|"),l=x0(a);return l}function x0(i){let e=0;for(let t of i)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Af(i){return[{provide:ha,useFactory:()=>(qd("NgHttpTransferCache"),xe({isCacheActive:!0},i))},{provide:Ef,useValue:v0,multi:!0,deps:[Qo,ha]},{provide:oa,multi:!0,useFactory:()=>{let e=Ie(Ds),t=Ie(ha);return()=>{rf(e).then(()=>{t.isCacheActive=!1})}}}]}var eu=class extends lf{constructor(){super(...arguments),this.supportsDOMEvents=!0}},tu=class i extends eu{static makeCurrent(){af(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=w0();return t==null?null:E0(t)}resetBaseElement(){Bs=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return la(document.cookie,e)}},Bs=null;function w0(){return Bs=Bs||document.querySelector("base"),Bs?Bs.getAttribute("href"):null}function E0(i){return new URL(i,document.baseURI).pathname}var T0=(()=>{class i{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),nu=new xt(""),Lf=(()=>{class i{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r){return this._findPluginFor(n).addEventListener(t,n,r)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new Ft(5101,!1);return this._eventNameToPlugin.set(t,n),n}static{this.\u0275fac=function(n){return new(n||i)(st(nu),st(Xn))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),ga=class{constructor(e){this._doc=e}},Kc="ng-app-id",Of=(()=>{class i{constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Ns(s),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(r=>r.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Kc}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(t,n){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=n,s.usage}return r.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let r=this.styleNodesInDOM,s=r?.get(n);if(s?.parentNode===t)return r.delete(n),s.removeAttribute(Kc),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=n,this.platformIsServer&&o.setAttribute(Kc,this.appId),t.appendChild(o),o}}addStyleToHost(t,n){let r=this.getStyleElement(t,n),s=this.styleRef,o=s.get(n)?.elements;o?o.push(r):s.set(n,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||i)(st(Rn),st(Vc),st(zc,8),st(fn))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),Qc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},su=/%COMP%/g,Nf="%COMP%",C0=`_nghost-${Nf}`,A0=`_ngcontent-${Nf}`,R0=!0,I0=new xt("",{providedIn:"root",factory:()=>R0});function P0(i){return A0.replace(su,i)}function D0(i){return C0.replace(su,i)}function Ff(i,e){return e.map(t=>t.replace(su,i))}var Rf=(()=>{class i{constructor(t,n,r,s,o,a,l,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Ns(a),this.defaultRenderer=new Vs(t,o,l,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Es.ShadowDom&&(n=Dt(xe({},n),{encapsulation:Es.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof va?r.applyToHost(t):r instanceof zs&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(n.encapsulation){case Es.Emulated:s=new va(l,c,n,this.appId,u,o,a,h);break;case Es.ShadowDom:return new iu(l,c,t,n,o,a,this.nonce,h);default:s=new zs(l,c,n,u,o,a,h);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||i)(st(Lf),st(Of),st(Vc),st(I0),st(Rn),st(fn),st(Xn),st(zc))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),Vs=class{constructor(e,t,n,r){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Qc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(If(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(If(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Ft(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Qc[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Qc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Rs.DashCase|Rs.Important)?e.style.setProperty(t,n,r&Rs.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Rs.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n){if(typeof e=="string"&&(e=Dr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(n))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function If(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var iu=class extends Vs{constructor(e,t,n,r,s,o,a,l){super(e,s,o,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Ff(r.id,r.styles);for(let u of c){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=u,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},zs=class extends Vs{constructor(e,t,n,r,s,o,a,l){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=l?Ff(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},va=class extends zs{constructor(e,t,n,r,s,o,a,l){let c=r+"-"+n.id;super(e,t,n,s,o,a,l,c),this.contentAttr=P0(c),this.hostAttr=D0(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}},L0=(()=>{class i extends ga{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r){return t.addEventListener(n,r,!1),()=>this.removeEventListener(t,n,r)}removeEventListener(t,n,r){return t.removeEventListener(n,r)}static{this.\u0275fac=function(n){return new(n||i)(st(Rn))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})(),Pf=["alt","control","meta","shift"],O0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},N0={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},F0=(()=>{class i extends ga{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r){let s=i.parseEventName(n),o=i.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Dr().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),Pf.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let r=O0[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Pf.forEach(o=>{if(o!==r){let a=N0[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(n){return new(n||i)(st(Rn))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac})}}return i})();function Uf(i,e){return sf(xe({rootComponent:i},U0(e)))}function U0(i){return{appProviders:[...H0,...i?.providers??[]],platformProviders:z0}}function k0(){tu.makeCurrent()}function B0(){return new Bc}function V0(){return Gd(document),document}var z0=[{provide:fn,useValue:uf},{provide:Wd,useValue:k0,multi:!0},{provide:Rn,useFactory:V0,deps:[]}];var H0=[{provide:Hd,useValue:"root"},{provide:Bc,useFactory:B0,deps:[]},{provide:nu,useClass:L0,multi:!0,deps:[Rn,Xn,fn]},{provide:nu,useClass:F0,multi:!0,deps:[Rn]},Rf,Of,Lf,{provide:jd,useExisting:Rf},{provide:ca,useClass:T0,deps:[]},[]];var kf=(()=>{class i{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(n){return new(n||i)(st(Rn))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ru=function(i){return i[i.NoHttpTransferCache=0]="NoHttpTransferCache",i[i.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",i}(ru||{});function Bf(...i){let e=[],t=new Set,n=t.has(ru.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of i)t.add(s),r.length&&e.push(r);return Ir([[],of(),t.has(ru.NoHttpTransferCache)||n?[]:Af({}),e])}var je="primary",no=Symbol("RouteTitle"),uu=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Vr(i){return new uu(i)}function X0(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function j0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!jn(i[t],e[t]))return!1;return!0}function jn(i,e){let t=i?hu(i):void 0,n=e?hu(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Xf(i[r],e[r]))return!1;return!0}function hu(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Xf(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function jf(i){return i.length>0?i[i.length-1]:null}function Di(i){return Pd(i)?i:sa(i)?cn(Promise.resolve(i)):Ve(i)}var q0={exact:$f,subset:Yf},qf={exact:$0,subset:Y0,ignored:()=>!0};function Vf(i,e,t){return q0[t.paths](i.root,e.root,t.matrixParams)&&qf[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function $0(i,e){return jn(i,e)}function $f(i,e,t){if(!tr(i.segments,e.segments)||!xa(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!$f(i.children[n],e.children[n],t))return!1;return!0}function Y0(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>Xf(i[t],e[t]))}function Yf(i,e,t){return Zf(i,e,e.segments,t)}function Zf(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!tr(r,t)||e.hasChildren()||!xa(r,t,n))}else if(i.segments.length===t.length){if(!tr(i.segments,t)||!xa(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!Yf(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!tr(i.segments,r)||!xa(i.segments,r,n)||!i.children[je]?!1:Zf(i.children[je],e,s,n)}}function xa(i,e,t){return e.every((n,r)=>qf[t](i[r].parameters,n.parameters))}var Ii=class{constructor(e=new pt([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Vr(this.queryParams),this._queryParamMap}toString(){return K0.serialize(this)}},pt=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ma(this)}},er=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Vr(this.parameters),this._parameterMap}toString(){return Kf(this)}};function Z0(i,e){return tr(i,e)&&i.every((t,n)=>jn(t.parameters,e[n].parameters))}function tr(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function J0(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===je&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==je&&(t=t.concat(e(r,n)))}),t}var Uu=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:()=>new Sa,providedIn:"root"})}}return i})(),Sa=class{parse(e){let t=new fu(e);return new Ii(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Hs(e.root,!0)}`,n=tv(e.queryParams),r=typeof e.fragment=="string"?`#${Q0(e.fragment)}`:"";return`${t}${n}${r}`}},K0=new Sa;function Ma(i){return i.segments.map(e=>Kf(e)).join("/")}function Hs(i,e){if(!i.hasChildren())return Ma(i);if(e){let t=i.children[je]?Hs(i.children[je],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==je&&n.push(`${r}:${Hs(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=J0(i,(n,r)=>r===je?[Hs(i.children[je],!1)]:[`${r}:${Hs(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[je]!=null?`${Ma(i)}/${t[0]}`:`${Ma(i)}/(${t.join("//")})`}}function Jf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ya(i){return Jf(i).replace(/%3B/gi,";")}function Q0(i){return encodeURI(i)}function du(i){return Jf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ba(i){return decodeURIComponent(i)}function zf(i){return ba(i.replace(/\+/g,"%20"))}function Kf(i){return`${du(i.path)}${ev(i.parameters)}`}function ev(i){return Object.entries(i).map(([e,t])=>`;${du(e)}=${du(t)}`).join("")}function tv(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${ya(t)}=${ya(r)}`).join("&"):`${ya(t)}=${ya(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var nv=/^[^\/()?;#]+/;function ou(i){let e=i.match(nv);return e?e[0]:""}var iv=/^[^\/()?;=#]+/;function rv(i){let e=i.match(iv);return e?e[0]:""}var sv=/^[^=?&#]+/;function ov(i){let e=i.match(sv);return e?e[0]:""}var av=/^[^&#]+/;function lv(i){let e=i.match(av);return e?e[0]:""}var fu=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new pt([],{}):new pt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[je]=new pt(e,t)),n}parseSegment(){let e=ou(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ft(4009,!1);return this.capture(e),new er(ba(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=rv(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=ou(this.remaining);r&&(n=r,this.capture(n))}e[ba(t)]=ba(n)}parseQueryParam(e){let t=ov(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=lv(this.remaining);o&&(n=o,this.capture(n))}let r=zf(t),s=zf(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=ou(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ft(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=je);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[je]:new pt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ft(4011,!1)}};function Qf(i){return i.segments.length>0?new pt([],{[je]:i}):i}function ep(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=ep(r);if(n===je&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new pt(i.segments,e);return cv(t)}function cv(i){if(i.numberOfChildren===1&&i.children[je]){let e=i.children[je];return new pt(i.segments.concat(e.segments),e.children)}return i}function zr(i){return i instanceof Ii}function uv(i,e,t=null,n=null){let r=tp(i);return np(r,e,t,n)}function tp(i){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new pt(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=Qf(n);return e??r}function np(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return au(r,r,r,t,n);let s=hv(e);if(s.toRoot())return au(r,r,new pt([],{}),t,n);let o=dv(s,r,i),a=o.processChildren?Xs(o.segmentGroup,o.index,s.commands):rp(o.segmentGroup,o.index,s.commands);return au(r,o.segmentGroup,a,t,n)}function wa(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function $s(i){return typeof i=="object"&&i!=null&&i.outlets}function au(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;i===e?o=t:o=ip(i,e,t);let a=Qf(ep(o));return new Ii(a,s,r)}function ip(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=ip(s,e,t)}),new pt(i.segments,n)}var Ea=class{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&wa(n[0]))throw new Ft(4003,!1);let r=n.find($s);if(r&&r!==jf(n))throw new Ft(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function hv(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Ea(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Ea(t,e,n)}var kr=class{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function dv(i,e,t){if(i.isAbsolute)return new kr(e,!0,0);if(!t)return new kr(e,!1,NaN);if(t.parent===null)return new kr(t,!0,0);let n=wa(i.commands[0])?0:1,r=t.segments.length-1+n;return fv(t,r,i.numberOfDoubleDots)}function fv(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Ft(4005,!1);r=n.segments.length}return new kr(n,!1,r-s)}function pv(i){return $s(i[0])?i[0].outlets:{[je]:i}}function rp(i,e,t){if(i??=new pt([],{}),i.segments.length===0&&i.hasChildren())return Xs(i,e,t);let n=mv(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new pt(i.segments.slice(0,n.pathIndex),{});return s.children[je]=new pt(i.segments.slice(n.pathIndex),i.children),Xs(s,0,r)}else return n.match&&r.length===0?new pt(i.segments,{}):n.match&&!i.hasChildren()?pu(i,e,t):n.match?Xs(i,0,r):pu(i,e,t)}function Xs(i,e,t){if(t.length===0)return new pt(i.segments,{});{let n=pv(t),r={};if(Object.keys(n).some(s=>s!==je)&&i.children[je]&&i.numberOfChildren===1&&i.children[je].segments.length===0){let s=Xs(i.children[je],e,t);return new pt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=rp(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new pt(i.segments,r)}}function mv(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if($s(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Gf(l,c,o))return s;n+=2}else{if(!Gf(l,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function pu(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if($s(s)){let l=gv(s.outlets);return new pt(n,l)}if(r===0&&wa(t[0])){let l=i.segments[e];n.push(new er(l.path,Hf(t[0]))),r++;continue}let o=$s(s)?s.outlets[je]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&wa(a)?(n.push(new er(o,Hf(a))),r+=2):(n.push(new er(o,{})),r++)}return new pt(n,{})}function gv(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=pu(new pt([],{}),0,n))}),e}function Hf(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function Gf(i,e,t){return i==t.path&&jn(e,t.parameters)}var js="imperative",Kt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Kt||{}),In=class{constructor(e,t){this.id=e,this.url=t}},Ys=class extends In{constructor(e,t,n="imperative",r=null){super(e,t),this.type=Kt.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},nr=class extends In{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n,this.type=Kt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},vn=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(vn||{}),mu=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(mu||{}),Pi=class extends In{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Kt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ir=class extends In{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Kt.NavigationSkipped}},Zs=class extends In{constructor(e,t,n,r){super(e,t),this.error=n,this.target=r,this.type=Kt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ta=class extends In{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Kt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gu=class extends In{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Kt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vu=class extends In{constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s,this.type=Kt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},yu=class extends In{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Kt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_u=class extends In{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Kt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xu=class{constructor(e){this.route=e,this.type=Kt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Mu=class{constructor(e){this.route=e,this.type=Kt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},bu=class{constructor(e){this.snapshot=e,this.type=Kt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Su=class{constructor(e){this.snapshot=e,this.type=Kt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wu=class{constructor(e){this.snapshot=e,this.type=Kt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Eu=class{constructor(e){this.snapshot=e,this.type=Kt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Js=class{},Ks=class{constructor(e){this.url=e}};var Tu=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Da,this.attachRef=null}},Da=(()=>{class i{constructor(){this.contexts=new Map}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Tu,this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Ca=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Cu(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=Cu(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Au(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Au(e,this._root).map(t=>t.value)}};function Cu(i,e){if(i===e.value)return e;for(let t of e.children){let n=Cu(i,t);if(n)return n}return null}function Au(i,e){if(i===e.value)return[e];for(let t of e.children){let n=Au(i,t);if(n.length)return n.unshift(e),n}return[]}var gn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ur(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var Aa=class extends Ca{constructor(e,t){super(e),this.snapshot=t,Bu(this,e)}toString(){return this.snapshot.toString()}};function sp(i){let e=vv(i),t=new dn([new er("",{})]),n=new dn({}),r=new dn({}),s=new dn({}),o=new dn(""),a=new Hr(t,n,s,o,r,je,i,e.root);return a.snapshot=e.root,new Aa(new gn(a,[]),e)}function vv(i){let e={},t={},n={},r="",s=new Qs([],e,n,r,t,je,i,null,{});return new Ra("",new gn(s,[]))}var Hr=class{constructor(e,t,n,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(rt(c=>c[no]))??Ve(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>Vr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>Vr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ku(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:xe(xe({},e.params),i.params),data:xe(xe({},e.data),i.data),resolve:xe(xe(xe(xe({},i.data),e.data),r?.data),i._resolvedData)}:n={params:xe({},i.params),data:xe({},i.data),resolve:xe(xe({},i.data),i._resolvedData??{})},r&&ap(r)&&(n.resolve[no]=r.title),n}var Qs=class{get title(){return this.data?.[no]}constructor(e,t,n,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Vr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Vr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ra=class extends Ca{constructor(e,t){super(t),this.url=e,Bu(this,t)}toString(){return op(this._root)}};function Bu(i,e){e.value._routerState=i,e.children.forEach(t=>Bu(i,t))}function op(i){let e=i.children.length>0?` { ${i.children.map(op).join(", ")} } `:"";return`${i.value}${e}`}function lu(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,jn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),jn(e.params,t.params)||i.paramsSubject.next(t.params),j0(e.url,t.url)||i.urlSubject.next(t.url),jn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Ru(i,e){let t=jn(i.params,e.params)&&Z0(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||Ru(i.parent,e.parent))}function ap(i){return typeof i.title=="string"||i.title===null}var Vu=(()=>{class i{constructor(){this.activated=null,this._activatedRoute=null,this.name=je,this.activateEvents=new oi,this.deactivateEvents=new oi,this.attachEvents=new oi,this.detachEvents=new oi,this.parentContexts=Ie(Da),this.location=Ie($d),this.changeDetector=Ie(Ls),this.environmentInjector=Ie(Pr),this.inputBinder=Ie(zu,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ft(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ft(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ft(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Ft(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Iu(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=Ei({type:i,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Jo]})}}return i})(),Iu=class i{__ngOutletInjector(e){return new i(this.route,this.childContexts,e)}constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===Hr?this.route:e===Da?this.childContexts:this.parent.get(e,t)}},zu=new xt("");function yv(i,e,t){let n=eo(i,e._root,t?t._root:void 0);return new Aa(n,e)}function eo(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=_v(i,e,t);return new gn(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>eo(i,a)),o}}let n=xv(e.value),r=e.children.map(s=>eo(i,s));return new gn(n,r)}}function _v(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return eo(i,n,r);return eo(i,n)})}function xv(i){return new Hr(new dn(i.url),new dn(i.params),new dn(i.queryParams),new dn(i.fragment),new dn(i.data),i.outlet,i.component,i)}var lp="ngNavigationCancelingError";function cp(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=zr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=up(!1,vn.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function up(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[lp]=!0,t.cancellationCode=e,t}function Mv(i){return hp(i)&&zr(i.url)}function hp(i){return!!i&&i[lp]}var bv=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=Tt({type:i,selectors:[["ng-component"]],standalone:!0,features:[Ct],decls:1,vars:0,template:function(n,r){n&1&&ge(0,"router-outlet")},dependencies:[Vu],encapsulation:2})}}return i})();function Sv(i,e){return i.providers&&!i._injector&&(i._injector=Zd(i.providers,e,`Route: ${i.path}`)),i._injector??e}function Hu(i){let e=i.children&&i.children.map(Hu),t=e?Dt(xe({},i),{children:e}):xe({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==je&&(t.component=bv),t}function qn(i){return i.outlet||je}function wv(i,e){let t=i.filter(n=>qn(n)===e);return t.push(...i.filter(n=>qn(n)!==e)),t}function io(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Ev=(i,e,t,n)=>rt(r=>(new Pu(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),Pu=class{constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),lu(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=Ur(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Ur(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Ur(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=Ur(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Eu(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Su(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(lu(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),lu(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=io(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,n)}},Ia=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Br=class{constructor(e,t){this.component=e,this.route=t}};function Tv(i,e,t){let n=i._root,r=e?e._root:null;return Gs(n,r,t,[n.value])}function Cv(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function Wr(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!Vd(i)?i:e.get(i):n}function Gs(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ur(e);return i.children.forEach(o=>{Av(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>qs(a,t.getContext(o),r)),r}function Av(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=Rv(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Ia(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Gs(i,e,a?a.children:null,n,r):Gs(i,e,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Br(a.outlet.component,o))}else o&&qs(e,a,r),r.canActivateChecks.push(new Ia(n)),s.component?Gs(i,null,a?a.children:null,n,r):Gs(i,null,t,n,r);return r}function Rv(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!tr(i.url,e.url);case"pathParamsOrQueryParamsChange":return!tr(i.url,e.url)||!jn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ru(i,e)||!jn(i.queryParams,e.queryParams);case"paramsChange":default:return!Ru(i,e)}}function qs(i,e,t){let n=Ur(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?qs(o,e.children.getContext(s),t):qs(o,null,t):qs(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Br(e.outlet.component,r)):t.canDeactivateChecks.push(new Br(null,r)):t.canDeactivateChecks.push(new Br(null,r))}function ro(i){return typeof i=="function"}function Iv(i){return typeof i=="boolean"}function Pv(i){return i&&ro(i.canLoad)}function Dv(i){return i&&ro(i.canActivate)}function Lv(i){return i&&ro(i.canActivateChild)}function Ov(i){return i&&ro(i.canDeactivate)}function Nv(i){return i&&ro(i.canMatch)}function dp(i){return i instanceof Dd||i?.name==="EmptyError"}var _a=Symbol("INITIAL_VALUE");function Gr(){return An(i=>Dc(i.map(e=>e.pipe(Ar(1),kd(_a)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===_a)return _a;if(t===!1||t instanceof Ii)return t}return!0}),bi(e=>e!==_a),Ar(1)))}function Fv(i,e){return Cn(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ve(Dt(xe({},t),{guardsResult:!0})):Uv(o,n,r,i).pipe(Cn(a=>a&&Iv(a)?kv(n,s,i,e):Ve(a)),rt(a=>Dt(xe({},t),{guardsResult:a})))})}function Uv(i,e,t,n){return cn(i).pipe(Cn(r=>Gv(r.component,r.route,t,e,n)),wi(r=>r!==!0,!0))}function kv(i,e,t,n){return cn(e).pipe(Ji(r=>Ld(Vv(r.route.parent,n),Bv(r.route,n),Hv(i,r.path,t),zv(i,r.route,t))),wi(r=>r!==!0,!0))}function Bv(i,e){return i!==null&&e&&e(new wu(i)),Ve(!0)}function Vv(i,e){return i!==null&&e&&e(new bu(i)),Ve(!0)}function zv(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Ve(!0);let r=n.map(s=>Lc(()=>{let o=io(e)??t,a=Wr(s,o),l=Dv(a)?a.canActivate(e,i):si(o,()=>a(e,i));return Di(l).pipe(wi())}));return Ve(r).pipe(Gr())}function Hv(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>Cv(o)).filter(o=>o!==null).map(o=>Lc(()=>{let a=o.guards.map(l=>{let c=io(o.node)??t,u=Wr(l,c),h=Lv(u)?u.canActivateChild(n,i):si(c,()=>u(n,i));return Di(h).pipe(wi())});return Ve(a).pipe(Gr())}));return Ve(s).pipe(Gr())}function Gv(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ve(!0);let o=s.map(a=>{let l=io(e)??r,c=Wr(a,l),u=Ov(c)?c.canDeactivate(i,e,t,n):si(l,()=>c(i,e,t,n));return Di(u).pipe(wi())});return Ve(o).pipe(Gr())}function Wv(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Ve(!0);let s=r.map(o=>{let a=Wr(o,i),l=Pv(a)?a.canLoad(e,t):si(i,()=>a(e,t));return Di(l)});return Ve(s).pipe(Gr(),fp(n))}function fp(i){return Rd(Wt(e=>{if(zr(e))throw cp(i,e)}),rt(e=>e===!0))}function Xv(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Ve(!0);let s=r.map(o=>{let a=Wr(o,i),l=Nv(a)?a.canMatch(e,t):si(i,()=>a(e,t));return Di(l)});return Ve(s).pipe(Gr(),fp(n))}var to=class{constructor(e){this.segmentGroup=e||null}},Pa=class extends Error{constructor(e){super(),this.urlTree=e}};function Fr(i){return ws(new to(i))}function jv(i){return ws(new Ft(4e3,!1))}function qv(i){return ws(up(!1,vn.GuardRejected))}var Du=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Ve(n);if(r.numberOfChildren>1||!r.children[je])return jv(e.redirectTo);r=r.children[je]}}applyRedirectCommands(e,t,n){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t.startsWith("/"))throw new Pa(r);return r}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new Ii(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,r)}),new pt(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new Ft(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},Lu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function $v(i,e,t,n,r){let s=Gu(i,e,t);return s.matched?(n=Sv(e,n),Xv(n,e,t,r).pipe(rt(o=>o===!0?s:xe({},Lu)))):Ve(s)}function Gu(i,e,t){if(e.path==="**")return Yv(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?xe({},Lu):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||X0)(t,i,e);if(!r)return xe({},Lu);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?xe(xe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Yv(i){return{matched:!0,parameters:i.length>0?jf(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Wf(i,e,t,n){return t.length>0&&Kv(i,t,n)?{segmentGroup:new pt(e,Jv(n,new pt(t,i.children))),slicedSegments:[]}:t.length===0&&Qv(i,t,n)?{segmentGroup:new pt(i.segments,Zv(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new pt(i.segments,i.children),slicedSegments:t}}function Zv(i,e,t,n){let r={};for(let s of t)if(La(i,e,s)&&!n[qn(s)]){let o=new pt([],{});r[qn(s)]=o}return xe(xe({},n),r)}function Jv(i,e){let t={};t[je]=e;for(let n of i)if(n.path===""&&qn(n)!==je){let r=new pt([],{});t[qn(n)]=r}return t}function Kv(i,e,t){return t.some(n=>La(i,e,n)&&qn(n)!==je)}function Qv(i,e,t){return t.some(n=>La(i,e,n))}function La(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function ey(i,e,t,n){return qn(i)!==n&&(n===je||!La(e,t,i))?!1:Gu(e,i,t).matched}function ty(i,e,t){return e.length===0&&!i.children[t]}var Ou=class{};function ny(i,e,t,n,r,s,o="emptyOnly"){return new Nu(i,e,t,n,r,o,s).recognize()}var iy=31,Nu=class{constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Du(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Ft(4002,`'${e.segmentGroup}'`)}recognize(){let e=Wf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(t=>{let n=new Qs([],Object.freeze({}),Object.freeze(xe({},this.urlTree.queryParams)),this.urlTree.fragment,{},je,this.rootComponentType,null,{}),r=new gn(n,t),s=new Ra("",r),o=uv(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,je).pipe(Si(n=>{if(n instanceof Pa)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof to?this.noMatchError(n):n}))}inheritParamsAndData(e,t){let n=e.value,r=ku(n,t,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,n))}processSegmentGroup(e,t,n,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n):this.processSegment(e,t,n,n.segments,r,!0).pipe(rt(s=>s instanceof gn?[s]:[]))}processChildren(e,t,n){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return cn(r).pipe(Ji(s=>{let o=n.children[s],a=wv(t,s);return this.processSegmentGroup(e,a,o,s)}),Ud((s,o)=>(s.push(...o),s)),Oc(null),Fd(),Cn(s=>{if(s===null)return Fr(n);let o=pp(s);return ry(o),Ve(o)}))}processSegment(e,t,n,r,s,o){return cn(t).pipe(Ji(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,n,r,s,o).pipe(Si(l=>{if(l instanceof to)return Ve(null);throw l}))),wi(a=>!!a),Si(a=>{if(dp(a))return ty(n,r,s)?Ve(new Ou):Fr(n);throw a}))}processSegmentAgainstRoute(e,t,n,r,s,o,a){return ey(n,r,s,o)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o):Fr(r):Fr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o){let{matched:a,consumedSegments:l,positionalParamSegments:c,remainingSegments:u}=Gu(t,r,s);if(!a)return Fr(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>iy&&(this.allowRedirects=!1));let h=this.applyRedirects.applyRedirectCommands(l,r.redirectTo,c);return this.applyRedirects.lineralizeSegments(r,h).pipe(Cn(d=>this.processSegment(e,n,t,d.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,n,r,s){let o=$v(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),o.pipe(An(a=>a.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(An(({routes:l})=>{let c=n._loadedInjector??e,{consumedSegments:u,remainingSegments:h,parameters:d}=a,m=new Qs(u,d,Object.freeze(xe({},this.urlTree.queryParams)),this.urlTree.fragment,oy(n),qn(n),n.component??n._loadedComponent??null,n,ay(n)),{segmentGroup:g,slicedSegments:y}=Wf(t,u,h,l);if(y.length===0&&g.hasChildren())return this.processChildren(c,l,g).pipe(rt(f=>f===null?null:new gn(m,f)));if(l.length===0&&y.length===0)return Ve(new gn(m,[]));let p=qn(n)===s;return this.processSegment(c,l,g,y,p?je:s,!0).pipe(rt(f=>new gn(m,f instanceof gn?[f]:[])))}))):Fr(t)))}getChildConfig(e,t,n){return t.children?Ve({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ve({routes:t._loadedRoutes,injector:t._loadedInjector}):Wv(e,t,n,this.urlSerializer).pipe(Cn(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):qv(t))):Ve({routes:[],injector:e})}};function ry(i){i.sort((e,t)=>e.value.outlet===je?-1:t.value.outlet===je?1:e.value.outlet.localeCompare(t.value.outlet))}function sy(i){let e=i.value.routeConfig;return e&&e.path===""}function pp(i){let e=[],t=new Set;for(let n of i){if(!sy(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=pp(n.children);e.push(new gn(n.value,r))}return e.filter(n=>!t.has(n))}function oy(i){return i.data||{}}function ay(i){return i.resolve||{}}function ly(i,e,t,n,r,s){return Cn(o=>ny(i,e,t,n,o.extractedUrl,r,s).pipe(rt(({state:a,tree:l})=>Dt(xe({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function cy(i,e){return Cn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Ve(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of mp(l))o.add(c);let a=0;return cn(o).pipe(Ji(l=>s.has(l)?uy(l,n,i,e):(l.data=ku(l,l.parent,i).resolve,Ve(void 0))),Wt(()=>a++),Nc(1),Cn(l=>a===o.size?Ve(t):Mi))})}function mp(i){let e=i.children.map(t=>mp(t)).flat();return[i,...e]}function uy(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!ap(r)&&(s[no]=r.title),hy(s,i,e,n).pipe(rt(o=>(i._resolvedData=o,i.data=ku(i,i.parent,t).resolve,null)))}function hy(i,e,t,n){let r=hu(i);if(r.length===0)return Ve({});let s={};return cn(r).pipe(Cn(o=>dy(i[o],e,t,n).pipe(wi(),Wt(a=>{s[o]=a}))),Nc(1),Nd(s),Si(o=>dp(o)?Mi:ws(o)))}function dy(i,e,t,n){let r=io(e)??n,s=Wr(i,r),o=s.resolve?s.resolve(e,t):si(r,()=>s(e,t));return Di(o)}function cu(i){return An(e=>{let t=i(e);return t?cn(t).pipe(rt(()=>e)):Ve(e)})}var gp=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===je);return n}getResolvedTitleForRoute(t){return t.data[no]}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:()=>Ie(fy),providedIn:"root"})}}return i})(),fy=(()=>{class i extends gp{constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static{this.\u0275fac=function(n){return new(n||i)(st(kf))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Wu=new xt("",{providedIn:"root",factory:()=>({})}),Xu=new xt(""),py=(()=>{class i{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=Ie(Xc)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Di(t.loadComponent()).pipe(rt(vp),Wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Rr(()=>{this.componentLoaders.delete(t)})),r=new Pc(n,()=>new Tn).pipe(Ic());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Ve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=my(n,this.compiler,t,this.onLoadEndListener).pipe(Rr(()=>{this.childrenLoaders.delete(n)})),o=new Pc(s,()=>new Tn).pipe(Ic());return this.childrenLoaders.set(n,o),o}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function my(i,e,t,n){return Di(i.loadChildren()).pipe(rt(vp),Cn(r=>r instanceof Yd||Array.isArray(r)?Ve(r):cn(e.compileModuleAsync(r))),rt(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Xu,[],{optional:!0,self:!0}).flat()),{routes:o.map(Hu),injector:s}}))}function gy(i){return i&&typeof i=="object"&&"default"in i}function vp(i){return gy(i)?i.default:i}var ju=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:()=>Ie(vy),providedIn:"root"})}}return i})(),vy=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),yy=new xt("");var _y=(()=>{class i{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Tn,this.transitionAbortSubject=new Tn,this.configLoader=Ie(py),this.environmentInjector=Ie(Pr),this.urlSerializer=Ie(Uu),this.rootContexts=Ie(Da),this.location=Ie(aa),this.inputBindingEnabled=Ie(zu,{optional:!0})!==null,this.titleStrategy=Ie(gp),this.options=Ie(Wu,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=Ie(ju),this.createViewTransition=Ie(yy,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ve(void 0),this.rootComponentType=null;let t=r=>this.events.next(new xu(r)),n=r=>this.events.next(new Mu(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(Dt(xe(xe({},this.transitions.value),t),{id:n}))}setupNavigations(t,n,r){return this.transitions=new dn({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:js,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(bi(s=>s.id!==0),rt(s=>Dt(xe({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),An(s=>{let o=!1,a=!1;return Ve(s).pipe(An(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),Mi;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Dt(xe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let h="";return this.events.next(new ir(l.id,this.urlSerializer.serialize(l.rawUrl),h,mu.IgnoredSameUrlNavigation)),l.resolve(null),Mi}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ve(l).pipe(An(h=>{let d=this.transitions?.getValue();return this.events.next(new Ys(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),d!==this.transitions?.getValue()?Mi:Promise.resolve(h)}),ly(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Dt(xe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let d=new Ta(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:d,source:m,restoredState:g,extras:y}=l,p=new Ys(h,this.urlSerializer.serialize(d),m,g);this.events.next(p);let f=sp(this.rootComponentType).snapshot;return this.currentTransition=s=Dt(xe({},l),{targetSnapshot:f,urlAfterRedirects:d,extras:Dt(xe({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,Ve(s)}else{let h="";return this.events.next(new ir(l.id,this.urlSerializer.serialize(l.extractedUrl),h,mu.IgnoredByUrlHandlingStrategy)),l.resolve(null),Mi}}),Wt(l=>{let c=new gu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),rt(l=>(this.currentTransition=s=Dt(xe({},l),{guards:Tv(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),Fv(this.environmentInjector,l=>this.events.next(l)),Wt(l=>{if(s.guardsResult=l.guardsResult,zr(l.guardsResult))throw cp(this.urlSerializer,l.guardsResult);let c=new vu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),bi(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",vn.GuardRejected),!1)),cu(l=>{if(l.guards.canActivateChecks.length)return Ve(l).pipe(Wt(c=>{let u=new yu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),An(c=>{let u=!1;return Ve(c).pipe(cy(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",vn.NoDataFromResolver)}}))}),Wt(c=>{let u=new _u(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),cu(l=>{let c=u=>{let h=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(u.routeConfig).pipe(Wt(d=>{u.component=d}),rt(()=>{})));for(let d of u.children)h.push(...c(d));return h};return Dc(c(l.targetSnapshot.root)).pipe(Oc(null),Ar(1))}),cu(()=>this.afterPreactivation()),An(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?cn(u).pipe(rt(()=>s)):Ve(s)}),rt(l=>{let c=yv(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=Dt(xe({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),Wt(()=>{this.events.next(new Js)}),Ev(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Ar(1),Wt({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new nr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),Bd(this.transitionAbortSubject.pipe(Wt(l=>{throw l}))),Rr(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Si(l=>{if(a=!0,hp(l))this.events.next(new Pi(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),Mv(l)?this.events.next(new Ks(l.url)):s.resolve(!1);else{this.events.next(new Zs(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0));try{s.resolve(t.errorHandler(l))}catch(c){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(c)}}return Mi}))}))}cancelNavigationTransition(t,n,r){let s=new Pi(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function xy(i){return i!==js}var My=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:()=>Ie(by),providedIn:"root"})}}return i})(),Fu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},by=(()=>{class i extends Fu{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Cs(i)))(r||i)}})()}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),yp=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:()=>Ie(Sy),providedIn:"root"})}}return i})(),Sy=(()=>{class i extends yp{constructor(){super(...arguments),this.location=Ie(aa),this.urlSerializer=Ie(Uu),this.options=Ie(Wu,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=Ie(ju),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ii,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=sp(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&t(n.url,n.state)})}handleRouterEvent(t,n){if(t instanceof Ys)this.stateMemento=this.createStateMemento();else if(t instanceof ir)this.rawUrlTree=n.initialUrl;else if(t instanceof Ta){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(r,n)}}else t instanceof Js?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,n))):t instanceof Pi&&(t.code===vn.GuardRejected||t.code===vn.NoDataFromResolver)?this.restoreHistory(n):t instanceof Zs?this.restoreHistory(n,!0):t instanceof nr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,n){let r=this.urlSerializer.serialize(t);if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let s=this.browserPageId,o=xe(xe({},n.extras.state),this.generateNgRouterState(n.id,s));this.location.replaceState(r,"",o)}else{let s=xe(xe({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Cs(i)))(r||i)}})()}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Ws=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(Ws||{});function wy(i,e){i.events.pipe(bi(t=>t instanceof nr||t instanceof Pi||t instanceof Zs||t instanceof ir),rt(t=>t instanceof nr||t instanceof ir?Ws.COMPLETE:(t instanceof Pi?t.code===vn.Redirect||t.code===vn.SupersededByNewNavigation:!1)?Ws.REDIRECTING:Ws.FAILED),bi(t=>t!==Ws.REDIRECTING),Ar(1)).subscribe(()=>{e()})}function Ey(i){throw i}var Ty={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Cy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Xr=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=Ie(ra),this.stateManager=Ie(yp),this.options=Ie(Wu,{optional:!0})||{},this.pendingTasks=Ie(ta),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=Ie(_y),this.urlSerializer=Ie(Uu),this.location=Ie(aa),this.urlHandlingStrategy=Ie(ju),this._events=new Tn,this.errorHandler=this.options.errorHandler||Ey,this.navigated=!1,this.routeReuseStrategy=Ie(My),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=Ie(Xu,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!Ie(zu,{optional:!0}),this.eventsSubscription=new Ad,this.isNgZoneEnabled=Ie(Xn)instanceof Xn&&Xn.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof Pi&&n.code!==vn.Redirect&&n.code!==vn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof nr)this.navigated=!0;else if(n instanceof Ks){let o=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a={info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||xy(r.source)};this.scheduleNavigation(o,js,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Ry(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),js,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",n)},0)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=xe({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Hu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,u=null;switch(a){case"merge":u=xe(xe({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=tp(d)}catch{(typeof t[0]!="string"||!t[0].startsWith("/"))&&(t=[]),h=this.currentUrlTree.root}return np(h,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=zr(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,js,null,n)}navigate(t,n={skipLocationChange:!1}){return Ay(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=xe({},Ty):n===!1?r=xe({},Cy):r=n,zr(t))return Vf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Vf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((h,d)=>{a=h,l=d});let u=this.pendingTasks.add();return wy(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ay(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new Ft(4008,!1)}function Ry(i){return!(i instanceof Js)&&!(i instanceof Ks)}var Iy=new xt("");function _p(i,...e){return Ir([{provide:Xu,multi:!0,useValue:i},[],{provide:Hr,useFactory:Py,deps:[Xr]},{provide:oa,multi:!0,useFactory:Dy},e.map(t=>t.\u0275providers)])}function Py(i){return i.routerState.root}function Dy(){let i=Ie(kc);return e=>{let t=i.get(Ds);if(e!==t.components[0])return;let n=i.get(Xr),r=i.get(Ly);i.get(Oy)===1&&n.initialNavigation(),i.get(Ny,null,Uc.Optional)?.setUpPreloading(),i.get(Iy,null,Uc.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ly=new xt("",{factory:()=>new Tn}),Oy=new xt("",{providedIn:"root",factory:()=>1});var Ny=new xt("");var Ap=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(ea),Ue(Ko))}}static{this.\u0275dir=Ei({type:i})}}return i})(),Fy=(()=>{class i extends Ap{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Cs(i)))(r||i)}})()}static{this.\u0275dir=Ei({type:i,features:[Is]})}}return i})(),Rp=new xt("");var Uy={provide:Rp,useExisting:Fc(()=>Ua),multi:!0};function ky(){let i=Dr()?Dr().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var By=new xt(""),Ua=(()=>{class i extends Ap{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ky())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(ea),Ue(Ko),Ue(By,8))}}static{this.\u0275dir=Ei({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ct("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[Wc([Uy]),Is]})}}return i})();var Vy=new xt(""),zy=new xt("");function Ip(i){return i!=null}function Pp(i){return sa(i)?cn(i):i}function Dp(i){let e={};return i.forEach(t=>{e=t!=null?xe(xe({},e),t):e}),Object.keys(e).length===0?null:e}function Lp(i,e){return e.map(t=>t(i))}function Hy(i){return!i.validate}function Op(i){return i.map(e=>Hy(e)?e:t=>e.validate(t))}function Gy(i){if(!i)return null;let e=i.filter(Ip);return e.length==0?null:function(t){return Dp(Lp(t,e))}}function Np(i){return i!=null?Gy(Op(i)):null}function Wy(i){if(!i)return null;let e=i.filter(Ip);return e.length==0?null:function(t){let n=Lp(t,e).map(Pp);return Od(n).pipe(rt(Dp))}}function Fp(i){return i!=null?Wy(Op(i)):null}function Mp(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Xy(i){return i._rawValidators}function jy(i){return i._rawAsyncValidators}function qu(i){return i?Array.isArray(i)?i:[i]:[]}function Na(i,e){return Array.isArray(i)?i.includes(e):i===e}function bp(i,e){let t=qu(e);return qu(i).forEach(r=>{Na(t,r)||t.push(r)}),t}function Sp(i,e){return qu(e).filter(t=>!Na(i,t))}var Fa=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Np(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fp(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},$u=class extends Fa{get formDirective(){return null}get path(){return null}},ao=class extends Fa{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Yu=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},qy={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},M1=Dt(xe({},qy),{"[class.ng-submitted]":"isSubmitted"}),Up=(()=>{class i extends Yu{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(ao,2))}}static{this.\u0275dir=Ei({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ia("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[Is]})}}return i})();var so="VALID",Oa="INVALID",jr="PENDING",oo="DISABLED";function $y(i){return(ka(i)?i.validators:i)||null}function Yy(i){return Array.isArray(i)?Np(i):i||null}function Zy(i,e){return(ka(e)?e.asyncValidators:i)||null}function Jy(i){return Array.isArray(i)?Fp(i):i||null}function ka(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var Zu=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===so}get invalid(){return this.status===Oa}get pending(){return this.status==jr}get disabled(){return this.status===oo}get enabled(){return this.status!==oo}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(bp(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(bp(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Sp(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Sp(e,this._rawAsyncValidators))}hasValidator(e){return Na(this._rawValidators,e)}hasAsyncValidator(e){return Na(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=jr,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=oo,this.errors=null,this._forEachChild(n=>{n.disable(Dt(xe({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Dt(xe({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=so,this._forEachChild(n=>{n.enable(Dt(xe({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Dt(xe({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===so||this.status===jr)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?oo:so}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=jr,this._hasOwnPendingAsyncValidator=!0;let t=Pp(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new oi,this.statusChanges=new oi}_calculateStatus(){return this._allControlsDisabled()?oo:this.errors?Oa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(jr)?jr:this._anyControlsHaveStatus(Oa)?Oa:so}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ka(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Yy(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Jy(this._rawAsyncValidators)}};var Ju=new xt("CallSetDisabledState",{providedIn:"root",factory:()=>Ba}),Ba="always";function Ky(i,e){return[...e.path,i]}function Qy(i,e,t=Ba){t_(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),n_(i,e),r_(i,e),i_(i,e),e_(i,e)}function wp(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function e_(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function t_(i,e){let t=Xy(i);e.validator!==null?i.setValidators(Mp(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=jy(i);e.asyncValidator!==null?i.setAsyncValidators(Mp(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();wp(e._rawValidators,r),wp(e._rawAsyncValidators,r)}function n_(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&kp(i,e)})}function i_(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&kp(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function kp(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function r_(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function s_(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function o_(i){return Object.getPrototypeOf(i.constructor)===Fy}function a_(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Ua?t=s:o_(s)?n=s:r=s}),r||n||t||null}function Ep(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Tp(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var l_=class extends Zu{constructor(e=null,t,n){super($y(t),Zy(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ka(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Tp(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ep(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ep(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Tp(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var c_={provide:ao,useExisting:Fc(()=>Ku)},Cp=Promise.resolve(),Ku=(()=>{class i extends ao{constructor(t,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this.control=new l_,this._registered=!1,this.name="",this.update=new oi,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=a_(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),s_(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qy(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Cp.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&jc(n);Cp.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ky(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(Ue($u,9),Ue(Vy,10),Ue(zy,10),Ue(Rp,10),Ue(Ls,8),Ue(Ju,8))}}static{this.\u0275dir=Ei({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[Ts.None,"disabled","isDisabled"],model:[Ts.None,"ngModel","model"],options:[Ts.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Wc([c_]),Is,Jo]})}}return i})();var u_=new xt("");var Bp=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Qi({type:i})}static{this.\u0275inj=Ki({})}}return i})();var Va=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ju,useValue:t.callSetDisabledState??Ba}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Qi({type:i})}static{this.\u0275inj=Ki({imports:[Bp]})}}return i})(),Vp=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:u_,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Ju,useValue:t.callSetDisabledState??Ba}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Qi({type:i})}static{this.\u0275inj=Ki({imports:[Bp]})}}return i})();var $t=(()=>{class i{constructor(){this.language=new dn("de"),this.language$=this.language.asObservable()}toggleLanguage(){let t=this.language.value==="de"?"en":"de";this.language.next(t)}setLanguage(t){this.language.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var kt=(()=>{class i{constructor(){this.zoomRequestSource=new Tn,this.cameraResetRequestSource=new Tn,this.zoomRequest$=this.zoomRequestSource.asObservable(),this.cameraResetRequest$=this.cameraResetRequestSource.asObservable()}requestZoom(t){this.zoomRequestSource.next(t)}requestCameraReset(){this.cameraResetRequestSource.next()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function d_(i,e){if(i&1&&(U(0,"div",26)(1,"span",27),Pe(2),q(),ge(3,"span",28),q()),i&2){let t=e.$implicit;se(2),Ze(t.icon),se(),Ye("innerHTML",t.text,As)}}function f_(i,e){if(i&1){let t=Ps();U(0,"div",1)(1,"div",2)(2,"button",3),ct("click",function(){Ti(t);let r=un();return Ci(r.goBack())}),Fe(),U(3,"svg",4),ge(4,"line",5)(5,"polyline",6),q()(),Qe(),U(6,"h2",7),Pe(7),q(),U(8,"div",8)(9,"button",9),ct("click",function(){Ti(t);let r=un();return Ci(r.toggleLanguage())}),Pe(10),q()()(),U(11,"div",10)(12,"h3",11),Pe(13),q(),ge(14,"p",12),q(),U(15,"div",13),Mt(16,d_,4,2,"div",14),q(),U(17,"footer",15)(18,"a",16),Fe(),U(19,"svg",17),ge(20,"path",18),q()(),Qe(),U(21,"a",19),Fe(),U(22,"svg",17),ge(23,"path",20)(24,"rect",21)(25,"circle",22),q()(),Qe(),U(26,"a",23),Fe(),U(27,"svg",17),ge(28,"path",24)(29,"polyline",25),q()()()()}if(i&2){let t=un();se(7),Ze(t.profileData[t.currentLanguage].title),se(3),Xt(" ",t.currentLanguage==="de"?"EN":"DE"," "),se(3),Ze(t.profileData[t.currentLanguage].greeting),se(),Ye("innerHTML",t.profileData[t.currentLanguage].bio,As),se(2),Ye("ngForOf",t.profileData[t.currentLanguage].highlights)}}var zp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.profileData={de:{title:"Profil",greeting:"Hallo! Ich bin Daniel.",bio:"Als engagierter Informatikstudent an der Technischen Hochschule Mittelhessen, mit einer Leidenschaft f\xFCr Embedded Systems und industrielle Softwareentwicklung, strebe ich danach, innovative L\xF6sungen f\xFCr komplexe Herausforderungen zu entwickeln. Mein Ziel ist es, meine F\xE4higkeiten in einem dynamischen und internationalen Umfeld einzusetzen und kontinuierlich zu erweitern.",highlights:[{icon:"\u{1F4BB}",text:"Fundierte Kenntnisse in <strong>C/C++</strong> und <strong>Java</strong> f\xFCr robuste Softwarel\xF6sungen."},{icon:"\u{1F527}",text:"Erfahrung mit <strong>Git</strong>, <strong>Docker</strong> und agilen Methoden f\xFCr eine effiziente Entwicklung."},{icon:"\u{1F50C}",text:"Kenntnisse in <strong>MQTT</strong>, I\xB2C, SPI und Sensorintegration f\xFCr IoT-Anwendungen."},{icon:"\u{1F30D}",text:"Teamf\xE4hig und motiviert, in einem <strong>internationalen Umfeld</strong> zu wachsen."}]},en:{title:"Profile",greeting:"Hello! I'm Daniel.",bio:"As a dedicated computer science student at the Technical University of Central Hesse (THM), with a passion for embedded systems and industrial software development, I strive to create innovative solutions for complex challenges. My goal is to apply and continuously expand my skills in a dynamic and international environment.",highlights:[{icon:"\u{1F4BB}",text:"Profound knowledge in <strong>C/C++</strong> and <strong>Java</strong> for robust software solutions."},{icon:"\u{1F527}",text:"Experience with <strong>Git</strong>, <strong>Docker</strong>, and agile methodologies for efficient development."},{icon:"\u{1F50C}",text:"Knowledge in <strong>MQTT</strong>, I\xB2C, SPI, and sensor integration for IoT applications."},{icon:"\u{1F30D}",text:"A team player, motivated to grow in an <strong>international environment</strong>."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-profil"]],standalone:!0,features:[Ct],decls:1,vars:1,consts:[["class","profile-container",4,"ngIf"],[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"bio-section"],[1,"greeting"],[1,"bio",3,"innerHTML"],[1,"highlights"],["class","highlight-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"highlight-item"],[1,"icon"],[3,"innerHTML"]],template:function(n,r){n&1&&Mt(0,f_,30,5,"div",0),n&2&&Ye("ngIf",r.profileData)},dependencies:[Ut,jt,Lr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.bio-section[_ngcontent-%COMP%]{background-color:#0003;padding:20px;border-radius:8px;border:1px solid rgba(0,191,255,.5)}.greeting[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:500;margin-bottom:8px}.bio[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#f0f0f0}.highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}.highlight-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:12px;border:1px solid rgba(0,191,255,.5);transition:background-color .2s ease}.highlight-item[_ngcontent-%COMP%]:hover{background-color:#00bfff33}.icon[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]     strong{color:#00bfff;font-weight:700}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.greeting[_ngcontent-%COMP%]{font-size:1.3rem}.bio[_ngcontent-%COMP%]{font-size:1rem}}"]})}}return i})();function p_(i,e){if(i&1&&(U(0,"a",28),Pe(1),q()),i&2){let t=un().$implicit;Ye("href",t.href,Xd),se(),Ze(t.value)}}function m_(i,e){if(i&1&&(U(0,"span",29),Pe(1),q()),i&2){let t=un().$implicit;se(),Ze(t.value)}}function g_(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Pe(2),q(),U(3,"div",24)(4,"span",25),Pe(5),q(),Mt(6,p_,2,2,"a",26)(7,m_,2,1,"span",27),q()()),i&2){let t=e.$implicit;se(2),Ze(t.icon),se(3),Ze(t.text),se(),Ye("ngIf",t.href),se(),Ye("ngIf",!t.href)}}var Hp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.contactData={de:{title:"Kontaktdaten",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Telefon",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Standort",value:"Gie\xDFen, Deutschland"},{icon:"\u{1F697}",text:"F\xFChrerschein",value:"Klasse B"}]},en:{title:"Contact Data",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Phone",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Location",value:"Gie\xDFen, Germany"},{icon:"\u{1F697}",text:"Driving License",value:"Class B"}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-daten"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"data-grid"],["class","data-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"data-item"],[1,"icon"],[1,"data-text"],[1,"data-label"],["target","_blank","class","data-value link",3,"href",4,"ngIf"],["class","data-value",4,"ngIf"],["target","_blank",1,"data-value","link",3,"href"],[1,"data-value"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,g_,8,4,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.contactData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.contactData[r.currentLanguage].items))},dependencies:[Ut,jt,Lr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.data-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px}.data-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:16px;border:1px solid rgba(0,191,255,.5)}.icon[_ngcontent-%COMP%]{font-size:1.8rem;color:#00bfff}.data-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.data-label[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:2px}.data-value[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.data-value.link[_ngcontent-%COMP%]{color:#f0f0f0;text-decoration:none;transition:color .2s ease}.data-value.link[_ngcontent-%COMP%]:hover{color:#00bfff;text-decoration:underline}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function v_(i,e){if(i&1&&(U(0,"div",25)(1,"span",26),Pe(2),q(),U(3,"div",27),ge(4,"div",28),q()()),i&2){let t=e.$implicit;Ye("title",t.description),se(2),Ze(t.name),se(2),na("width",t.level,"%")}}function y_(i,e){if(i&1&&(U(0,"div",21)(1,"h3",22),Pe(2),q(),U(3,"div",23),Mt(4,v_,5,4,"div",24),q()()),i&2){let t=e.$implicit;se(2),Ze(t.name),se(2),Ye("ngForOf",t.skills)}}var Gp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.skillsData={de:{title:"Technische F\xE4higkeiten",categories:[{name:"Programmiersprachen",skills:[{name:"C/C++",level:90,description:"Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen."},{name:"Java",level:85,description:"Entwicklung von Backend-Diensten und Desktop-Anwendungen."},{name:"Python",level:70,description:"Erfahrung in Skripting, Automatisierung und Datenanalyse."},{name:"SQL",level:65,description:"Solide Kenntnisse in Datenbankabfragen und -management."}]},{name:"Tools & Technologien",skills:[{name:"Git & GitHub",level:90,description:"Effiziente Versionskontrolle und kollaborative Entwicklung."},{name:"Docker",level:75,description:"Containerisierung von Anwendungen f\xFCr konsistente Umgebungen."},{name:"Matlab/Simulink",level:70,description:"Modellierung und Simulation von Systemen."},{name:"SPS (PLC)",level:60,description:"Grundlagen der speicherprogrammierbaren Steuerungen."}]}]},en:{title:"Technical Skills",categories:[{name:"Programming Languages",skills:[{name:"C/C++",level:90,description:"Extensive experience in system programming and embedded applications."},{name:"Java",level:85,description:"Development of backend services and desktop applications."},{name:"Python",level:70,description:"Experience in scripting, automation, and data analysis."},{name:"SQL",level:65,description:"Solid knowledge in database querying and management."}]},{name:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,description:"Efficient version control and collaborative development."},{name:"Docker",level:75,description:"Containerization of applications for consistent environments."},{name:"Matlab/Simulink",level:70,description:"System modeling and simulation."},{name:"SPS (PLC)",level:60,description:"Fundamentals of programmable logic controllers."}]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-skills"]],standalone:!0,features:[Ct],decls:25,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],["class","category-section",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"category-section"],[1,"category-title"],[1,"skills-grid"],["class","skill-item",3,"title",4,"ngFor","ngForOf"],[1,"skill-item",3,"title"],[1,"skill-name"],[1,"skill-bar-container"],[1,"skill-bar"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),Mt(11,y_,5,2,"div",9),U(12,"footer",10)(13,"a",11),Fe(),U(14,"svg",12),ge(15,"path",13),q()(),Qe(),U(16,"a",14),Fe(),U(17,"svg",12),ge(18,"path",15)(19,"rect",16)(20,"circle",17),q()(),Qe(),U(21,"a",18),Fe(),U(22,"svg",12),ge(23,"path",19)(24,"polyline",20),q()()()()),n&2&&(se(7),Ze(r.skillsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(),Ye("ngForOf",r.skillsData[r.currentLanguage].categories))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.category-section[_ngcontent-%COMP%]{padding-top:16px}.category-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:16px;color:#f0f0f0}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px}.skill-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.skill-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.skill-bar-container[_ngcontent-%COMP%]{width:100%;height:12px;background-color:#0000004d;border-radius:6px;overflow:hidden;border:1px solid #444}.skill-bar[_ngcontent-%COMP%]{height:100%;background-color:#00bfff;border-radius:6px;transition:width .5s ease-out}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.category-title[_ngcontent-%COMP%]{font-size:1.3rem}}"]})}}return i})();function __(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Pe(2),q(),U(3,"div",24),Pe(4),q()()),i&2){let t=e.$implicit;Ye("title",t.description),se(2),Ze(t.icon),se(2),Ze(t.name)}}var Wp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.softSkillsData={de:{title:"Soziale Kompetenzen",items:[{icon:"\u{1F4D6}",name:"Lernbereitschaft",description:"Schnelle Aneignung neuer Technologien und Konzepte."},{icon:"\u{1F91D}",name:"Teamarbeit",description:"Effektive Zusammenarbeit in agilen und interdisziplin\xE4ren Teams."},{icon:"\u23F0",name:"Zeitmanagement",description:"Priorisierung von Aufgaben zur Einhaltung von Fristen."},{icon:"\u{1F4A1}",name:"Kritisches Denken",description:"Analytische Probleml\xF6sung und fundierte Entscheidungsfindung."},{icon:"\u{1F5E3}\uFE0F",name:"Effektive Kommunikation",description:"Klare Vermittlung komplexer technischer Informationen."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"\xDCbernahme von Verantwortung und Motivation des Teams."}]},en:{title:"Soft Skills",items:[{icon:"\u{1F4D6}",name:"Eagerness to Learn",description:"Rapid acquisition of new technologies and concepts."},{icon:"\u{1F91D}",name:"Teamwork",description:"Effective collaboration in agile and interdisciplinary teams."},{icon:"\u23F0",name:"Time Management",description:"Prioritizing tasks to meet deadlines effectively."},{icon:"\u{1F4A1}",name:"Critical Thinking",description:"Analytical problem-solving and informed decision-making."},{icon:"\u{1F5E3}\uFE0F",name:"Effective Communication",description:"Clearly conveying complex technical information."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"Taking responsibility and motivating the team."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-softskills"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"soft-skills-grid"],["class","soft-skill-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"soft-skill-card",3,"title"],[1,"icon"],[1,"skill-name"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,__,5,3,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.softSkillsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.softSkillsData[r.currentLanguage].items))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.soft-skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;padding-top:16px}.soft-skill-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center;transition:transform .2s ease,background-color .2s ease}.soft-skill-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.soft-skill-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:12px;display:block}.soft-skill-card[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function x_(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Pe(2),q(),U(3,"div",24),Pe(4),q()()),i&2){let t=e.$implicit;Ye("title",t.description),se(2),Ze(t.name),se(2),Ze(t.level)}}var Xp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.languagesData={de:{title:"Sprachkenntnisse",items:[{name:"Franz\xF6sisch",level:"Muttersprache",description:"C2 - Vollst\xE4ndige Beherrschung in allen Kontexten."},{name:"Deutsch",level:"Verhandlungssicher",description:"C1 - Flie\xDFend in beruflichen und akademischen Umgebungen."},{name:"Englisch",level:"Gute Kenntnisse",description:"B2 - Selbstst\xE4ndige und effektive Kommunikation."}]},en:{title:"Languages",items:[{name:"French",level:"Native Speaker",description:"C2 - Complete proficiency in all contexts."},{name:"German",level:"Business Fluent",description:"C1 - Fluent in professional and academic environments."},{name:"English",level:"Proficient",description:"B2 - Independent and effective communication."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-sprachen"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"languages-grid"],["class","language-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"language-card",3,"title"],[1,"language-name"],[1,"language-level"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,x_,5,3,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.languagesData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.languagesData[r.currentLanguage].items))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.languages-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px;padding-top:16px}.language-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center}.language-name[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#f0f0f0}.language-level[_ngcontent-%COMP%]{font-size:1.1rem;color:#00bfff;margin-top:4px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function M_(i,e){if(i&1&&(U(0,"div",22),ge(1,"div",23),U(2,"div",24)(3,"div",25),Pe(4),q(),U(5,"h3",26),Pe(6),q(),U(7,"p",27),Pe(8),q(),U(9,"p",28),Pe(10),q()()()),i&2){let t=e.$implicit;se(4),Ze(t.date),se(2),Ze(t.institution),se(2),Ze(t.degree),se(2),Ze(t.description)}}var jp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.academicData={de:{title:"Akademische Laufbahn",timeline:[{degree:"Bachelor of Science: Ingenieur-Informatik",institution:"Technische Hochschule Mittelhessen (THM)",date:"Okt 2022 - Dez 2025",description:"Praxisnahes Studium mit Fokus auf Software-Engineering, Algorithmen, objektorientierte Programmierung (Java, C++), Datenbanken (SQL), Web-Technologien und Embedded Systems."},{degree:"Deutsch-Sprachkurs (A1-C1) mit TestDaF-Zertifikat",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensivkurs zur Erlangung der sprachlichen Hochschulzugangsberechtigung f\xFCr Deutschland."},{degree:"Allgemeine Hochschulreife (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Abschluss mit Leistungskursen in Mathematik, Physik und Informatik als solide Grundlage f\xFCr ein Ingenieurstudium."}]},en:{title:"Education",timeline:[{degree:"Bachelor of Engineering: Applied Computer Science",institution:"THM - University of Applied Sciences",date:"Oct 2022 - Dec 2025",description:"Hands-on studies focusing on Software Engineering, Algorithms, Object-Oriented Programming (Java, C++), Databases (SQL), Web Technologies, and Embedded Systems."},{degree:"German Language Course (A1-C1) with TestDaF Certificate",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensive course to obtain the language proficiency required for university admission in Germany."},{degree:"General University Entrance Qualification (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Graduated with advanced courses in Mathematics, Physics, and Computer Science, providing a strong foundation for engineering studies."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-akademisch"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,M_,11,4,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.academicData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.academicData[r.currentLanguage].timeline))},dependencies:[Ut,jt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();function b_(i,e){if(i&1&&(U(0,"span",27),Pe(1),q()),i&2){let t=e.$implicit;se(),Ze(t)}}function S_(i,e){if(i&1&&(U(0,"div",22)(1,"h3",23),Pe(2),q(),U(3,"p",24),Pe(4),q(),U(5,"div",25),Mt(6,b_,2,1,"span",26),q()()),i&2){let t=e.$implicit;se(2),Ze(t.name),se(2),Ze(t.description),se(2),Ye("ngForOf",t.tags)}}var qp=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.projectsData={de:{title:"Ausgew\xE4hlte Projekte",projects:[{name:"AVR Synthesizer & Musik-Player",description:"Ein mehrstufiges Embedded-Projekt, das einen AVR-Mikrocontroller in ein Musikinstrument verwandelt. Von der Erzeugung reiner Sinust\xF6ne mittels DAC und Timern \xFCber ein digitales Echtzeit-Piano bis hin zu einem kompletten Melodie-Player, der vordefinierte Lieder (z.B. Super Mario) durch pr\xE4zise Steuerung von Tonfrequenz und -dauer abspielt.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB-LED-Steuerung via USART",description:'Programmierung eines AVR-Mikrocontrollers zur Steuerung einer RGB-LED. Das System empf\xE4ngt Farbcodes (z.B. "255,100,0#") \xFCber die serielle Schnittstelle (USART) und passt die Farbe der LED dynamisch durch die Generierung von drei PWM-Signalen an.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"Infrarot-gesteuerter Timer",description:"Entwicklung eines Timers f\xFCr AVR-Mikrocontroller, der vollst\xE4ndig \xFCber eine IR-Fernbedienung nach dem NEC-Protokoll gesteuert wird. Das Projekt umfasste die C-Programmierung von Timer/Counter-Interrupts, die Behandlung externer Interrupts zur IR-Signaldekodierung und die Ansteuerung eines I2C-LCDs.",tags:["AVR","Embedded C","IR-Protokoll","I2C","Timers","Interrupts"]},{name:"I2C-Farbsensor (TCS34725)",description:"Implementierung von I2C-Master-Routinen zur Kommunikation mit Peripherieger\xE4ten. Das Projekt umfasste das Senden von Konfigurationsbefehlen an ein LCD und das Auslesen und Interpretieren von RGBC-Farbdaten (Rot, Gr\xFCn, Blau, Clear) von einem TCS34725-Farbsensor.",tags:["AVR","Embedded C","I2C","Sensoren","LCD"]},{name:"Servomotor-Steuerung mit PWM",description:"Ansteuerung eines Standard-Servomotors durch Generierung eines pr\xE4zisen PWM-Signals mit einem AVR-Timer. Das Programm bewegt den Servo schrittweise zwischen vordefinierten Positionen, um die Grundlagen der Motorsteuerung zu demonstrieren.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digitales Voltmeter mit ADC",description:"Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wert\xE4nderung) angezeigt.",tags:["AVR","Embedded C","ADC","Sensoren","LCD"]},{name:"Interaktives 3D-Portfolio",description:"Entwicklung dieses interaktiven 3D-Portfolios als virtuelle Bahnhofsszene mit Angular und Three.js. Integration von synchronisierten HTML-Panels f\xFCr dynamische Inhalte und interaktive Elemente.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelorarbeit)",description:"Desktop-Anwendung in JavaFX zur Erstellung und Verwaltung von Pr\xFCfungen. Kernst\xFCck ist die KI-gest\xFCtzte Umformulierung von Fragen \xFCber die Gemini API zur Steigerung der Pr\xFCfungsvielfalt.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Entwicklung eines intelligenten Laborsystems mit STM32 und BME280-Sensorik. Implementierung der Embedded-Software in C/C++ und einer JavaFX-GUI zur Echtzeitvisualisierung via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Echtzeit-Stoppuhr mit STM32F4",description:"Implementierung einer pr\xE4zisen digitalen Stoppuhr auf einem STM32F4 Mikrocontroller. Das Projekt umfasste die Programmierung von Timern, Interrupts und die Ansteuerung eines LCD-Displays zur Anzeige der Zeit. Fokus auf Echtzeitverarbeitung und Hardware-Interaktion.",tags:["STM32F4","Embedded C","Mikrocontroller","Timer","Interrupts","LCD"]},{name:"Autonome Wetterstation mit STM32F4",description:"Entwicklung einer autonomen Wetterstation basierend auf einem STM32F4 Mikrocontroller. Integration verschiedener Sensoren (Temperatur, Luftfeuchtigkeit, Druck) und Daten\xFCbertragung \xFCber UART/I2C. Visualisierung der Wetterdaten auf einem Display oder \xFCber serielle Schnittstelle.",tags:["STM32F4","Embedded C","Sensoren","UART","I2C","Wetterdaten"]},{name:"Terminal-Snake in C",description:"Implementierung des klassischen Snake-Spiels als Konsolenanwendung in C. Das Projekt demonstriert Kenntnisse in der Konsolenprogrammierung, Datenstrukturen und Algorithmen f\xFCr die Spielmechanik und Kollisionserkennung.",tags:["C-Programmierung","Konsolenanwendung","Algorithmen","Spieleentwicklung"]},{name:"Web-Ping-Pong mit JavaScript & Docker",description:"Entwicklung eines interaktiven Ping-Pong-Spiels f\xFCr den Webbrowser mit JavaScript. Das Projekt wurde in Docker-Containern verpackt, um eine einfache Bereitstellung und konsistente Ausf\xFChrung zu gew\xE4hrleisten. Fokus auf Frontend-Entwicklung und Containerisierung.",tags:["JavaScript","HTML5 Canvas","Webentwicklung","Docker","Containerisierung"]}]},en:{title:"Featured Projects",projects:[{name:"AVR Synthesizer & Music Player",description:"A multi-stage embedded project that turns an AVR microcontroller into a musical instrument. From generating pure sine wave tones using a DAC and timers, to a real-time digital piano, to a full melody player capable of playing predefined songs (e.g., Super Mario) by precisely controlling note frequency and duration.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB LED Control via USART",description:'Programmed an AVR microcontroller to control an RGB LED. The system receives color codes (e.g., "255,100,0#") via the serial interface (USART) and dynamically adjusts the LED color by generating three PWM signals.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"IR Remote Controlled Timer",description:"Developed a timer for AVR microcontrollers, fully controllable via an IR remote using the NEC protocol. The project involved C programming for timer/counter interrupts, handling external interrupts for IR signal decoding, and interfacing with an I2C LCD.",tags:["AVR","Embedded C","IR Protocol","I2C","Timers","Interrupts"]},{name:"I2C Color Sensor (TCS34725)",description:"Implementation of I2C master routines to communicate with peripherals. The project involved sending configuration commands to an LCD and reading/interpreting RGBC (Red, Green, Blue, Clear) color data from a TCS34725 color sensor.",tags:["AVR","Embedded C","I2C","Sensors","LCD"]},{name:"Servo Motor Control with PWM",description:"Controlled a standard servo motor by generating a precise PWM signal with an AVR timer. The program moves the servo incrementally between predefined positions, demonstrating the fundamentals of motor control.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digital Voltmeter with ADC",description:"Utilized the AVR's built-in 12-bit Analog-to-Digital Converter (ADC) to measure an input voltage. The result was converted to volts and a percentage, and displayed on an LCD with flicker-free logic (updating only on value change).",tags:["AVR","Embedded C","ADC","Sensors","LCD"]},{name:"Interactive 3D Portfolio",description:"Development of this interactive 3D portfolio as a virtual train station scene using Angular and Three.js. Integration of synchronized HTML panels for dynamic content and interactive elements.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelor Thesis)",description:"Desktop application built with JavaFX for creating and managing exams. A core feature is the AI-powered rephrasing of questions via the Gemini API to enhance exam diversity.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Developed a smart laboratory system using STM32 and BME280 sensors. Implemented the embedded software in C/C++ and a JavaFX GUI for real-time visualization via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Real-time Stopwatch with STM32F4",description:"Implementation of a precise digital stopwatch on an STM32F4 microcontroller. The project involved programming timers, interrupts, and controlling an LCD display for time visualization. Focus on real-time processing and hardware interaction.",tags:["STM32F4","Embedded C","Microcontroller","Timers","Interrupts","LCD"]},{name:"Autonomous Weather Station with STM32F4",description:"Development of an autonomous weather station based on an STM32F4 microcontroller. Integration of various sensors (temperature, humidity, pressure) and data transmission via UART/I2C. Visualization of weather data on a display or via serial interface.",tags:["STM32F4","Embedded C","Sensors","UART","I2C","Weather Data"]},{name:"Terminal Snake Game in C",description:"Implementation of the classic Snake game as a console application in C. This project demonstrates knowledge of console programming, data structures, and algorithms for game mechanics and collision detection.",tags:["C Programming","Console Application","Algorithms","Game Development"]},{name:"Web Ping-Pong Game with JavaScript & Docker",description:"Development of an interactive Ping-Pong game for the web browser using JavaScript. The project was containerized with Docker for easy deployment and consistent execution. Focus on frontend development and containerization.",tags:["JavaScript","HTML5 Canvas","Web Development","Docker","Containerization"]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-projekte"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"projects-grid"],["class","project-card",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"project-card"],[1,"project-name"],[1,"project-description"],[1,"project-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,S_,7,3,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.projectsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.projectsData[r.currentLanguage].projects))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;padding-top:16px}.project-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;transition:transform .2s ease,background-color .2s ease}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.project-name[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0;margin-bottom:8px}.project-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;line-height:1.5;margin-bottom:12px}.project-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tag[_ngcontent-%COMP%]{background-color:#00bfff33;color:#00bfff;padding:4px 8px;border-radius:4px;font-size:.8rem}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.project-name[_ngcontent-%COMP%]{font-size:1.2rem}}"]})}}return i})();function w_(i,e){if(i&1&&(U(0,"div",22),ge(1,"div",23),U(2,"div",24)(3,"div",25),Pe(4),q(),U(5,"h3",26),Pe(6),q(),U(7,"p",27),Pe(8),q(),U(9,"p",28),Pe(10),q()()()),i&2){let t=e.$implicit;se(4),Ze(t.date),se(2),Kd("",t.title," bei ",t.company,""),se(2),Ze(t.location),se(2),Ze(t.description)}}var $p=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.experienceData={de:{title:"Berufserfahrung",timeline:[{title:"Forschung & Entwicklung im Bereich Embedded Systems",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"Oktober 2023 - Laufend",description:"Mitarbeit an einem Forschungsprojekt zur Entwicklung eines Microcontroller-basierten Remote-Labors. Meine Aufgaben umfassen die Implementierung, das Testen und die Optimierung von Embedded-Systemen, um eine zuverl\xE4ssige und performante Fernsteuerung der Laborumgebung zu gew\xE4hrleisten."},{title:"Verwaltungsunterst\xFCtzung & Sprachmittlung",company:"Bundesamt f\xFCr Migration und Fl\xFCchtlinge (BAMF)",location:"Gie\xDFen, Deutschland",date:"2023 - Laufend",description:"Als Dolmetscher unterst\xFCtze ich bei Anh\xF6rungen und erstelle pr\xE4zise schriftliche \xDCbersetzungen. Zudem bin ich f\xFCr die Aktenanlage und die Unterst\xFCtzung allgemeiner Verwaltungsprozesse zust\xE4ndig, um eine reibungslose Kommunikation zwischen der Beh\xF6rde und den Antragstellern sicherzustellen."},{title:"Verbundzusteller",company:"Deutsche Post DHL",location:"Deutschland",date:"Juni 2022 - Laufend",description:"Als Zusteller bei der Deutschen Post DHL bin ich f\xFCr die zuverl\xE4ssige Lieferung von Briefen und Paketen verantwortlich. Diese Rolle erfordert ein hohes Ma\xDF an Eigenorganisation und Zeitmanagement. Ein wesentlicher Teil meiner T\xE4tigkeit ist die st\xE4ndige Interaktion mit Kunden, um eine erfolgreiche Zustellung sicherzustellen und einen exzellenten Service zu bieten."},{title:"Bachelorarbeit & Softwareentwicklung mit JavaFX",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"April 2025 - Dezember 2025",description:"Im Rahmen meiner Bachelorarbeit habe ich die Desktop-Anwendung 'ExamBuilder' mit JavaFX und nach dem MVC-Muster entworfen und entwickelt. Die Anwendung dient der Erstellung, Verwaltung und dem Export von Pr\xFCfungen. Zu den Kernfunktionen geh\xF6ren die flexible Zusammenstellung von Fragen, das Generieren von L\xF6sungsbl\xE4ttern und eine innovative Funktion zur KI-gest\xFCtzten Reformulierung von Fragen, um die Pr\xFCfungsvielfalt zu erh\xF6hen."},{title:"Praktikum im CNC-Bereich",company:"Schunk Group (STS)",location:"Heuchelheim, Deutschland",date:"Juli 2025 - August 2025",description:"Intensives Praktikum in der Fertigung, in dem ich f\xFCr die Programmierung und Bedienung von Siemens-CNC-Maschinen (Sinumerik) verantwortlich war. Zu meinen Aufgaben geh\xF6rten die selbstst\xE4ndige Fertigung von Pr\xE4zisionsbauteilen sowie die kontinuierliche \xDCberwachung und Optimierung der Fertigungsprozesse."}]},en:{title:"Work Experience",timeline:[{title:"Research & Development in Embedded Systems",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"October 2023 - Present",description:"Contributing to a research project focused on developing a microcontroller-based remote laboratory. My responsibilities include implementing, testing, and optimizing embedded systems to ensure reliable and high-performance remote control of the lab environment."},{title:"Administrative Support & Language Services",company:"Federal Office for Migration and Refugees (BAMF)",location:"Giessen, Germany",date:"2023 - Present",description:"As an interpreter, I facilitate hearings and provide precise written translations. I am also responsible for file creation and supporting general administrative processes to ensure smooth communication between the authorities and applicants."},{title:"Delivery Associate",company:"Deutsche Post DHL",location:"Germany",date:"June 2022 - Present",description:"As a delivery associate for Deutsche Post DHL, I am responsible for the reliable delivery of letters and parcels. This role demands a high level of self-organization and time management. A significant part of my work involves constant communication with customers to ensure successful deliveries and provide excellent service."},{title:"Bachelor Thesis & Software Development with JavaFX",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"April 2025 - December 2025",description:"As part of my bachelor thesis, I designed and developed the 'ExamBuilder' desktop application using JavaFX, following the MVC design pattern. The application enables the creation, management, and export of exams. Key features include flexible assembly of exam questions, automatic generation of correction sheets, and an innovative feature for AI-powered question rephrasing to enhance exam diversity."},{title:"Internship in CNC Machining",company:"Schunk Group (STS)",location:"Heuchelheim, Germany",date:"July 2025 - August 2025",description:"Intensive internship in a manufacturing environment where I was responsible for programming and operating Siemens CNC machines (Sinumerik). My tasks included the independent production of precision components and the continuous monitoring and optimization of manufacturing processes."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue($t),Ue(kt))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-erfahrung"]],standalone:!0,features:[Ct],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),ct("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),ge(4,"line",4)(5,"polyline",5),q()(),Qe(),U(6,"h2",6),Pe(7),q(),U(8,"div",7)(9,"button",8),ct("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),U(11,"div",9),Mt(12,w_,11,5,"div",10),q(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),ge(16,"path",14),q()(),Qe(),U(17,"a",15),Fe(),U(18,"svg",13),ge(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),Qe(),U(22,"a",19),Fe(),U(23,"svg",13),ge(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Ze(r.experienceData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ye("ngForOf",r.experienceData[r.currentLanguage].timeline))},dependencies:[Ut,jt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();var Yp=[{path:"",redirectTo:"profil",pathMatch:"full"},{path:"profil",component:zp},{path:"daten",component:Hp},{path:"skills",component:Gp},{path:"softskills",component:Wp},{path:"sprachen",component:Xp},{path:"akademisch",component:jp},{path:"projekte",component:qp},{path:"erfahrung",component:$p},{path:"screen",loadComponent:()=>import("./chunk-PERFIT4F.js").then(i=>i.GiantScreenComponent)},{path:"**",redirectTo:"profil"}];var Zp={providers:[_p(Yp),Bf(),zd(Va,Vp),Cf()]};var Pl="177";var xm=0,Uh=1,Mm=2;var kh=1,Dl=2,ei=3,Dn=0,en=1,On=2,yi=0,dr=1,Bh=2,Vh=3,zh=4,bm=5,zi=100,Sm=101,wm=102,Em=103,Tm=104,Cm=200,Am=201,Rm=202,Im=203,al=204,ll=205,Pm=206,Dm=207,Lm=208,Om=209,Nm=210,Fm=211,Um=212,km=213,Bm=214,Ll=0,Ol=1,Nl=2,fr=3,Fl=4,Ul=5,kl=6,Bl=7,Hh=0,Vm=1,zm=2,_i=0,Hm=1,Gm=2,Wm=3,Xm=4,jm=5,qm=6,$m=7;var Eh=300,_r=301,xr=302,Vl=303,zl=304,Bo=306,cl=1e3,Vi=1001,ul=1002,Ln=1003,Ym=1004;var Vo=1005;var zn=1006,Hl=1007;var qi=1008;var Wn=1009,Gh=1010,Wh=1011,ms=1012,Gl=1013,$i=1014,ti=1015,gs=1016,Wl=1017,Xl=1018,vs=1020,Xh=35902,jh=1021,qh=1022,Nn=1023,os=1026,ys=1027,$h=1028,jl=1029,Yh=1030,ql=1031;var $l=1033,zo=33776,Ho=33777,Go=33778,Wo=33779,Yl=35840,Zl=35841,Jl=35842,Kl=35843,Ql=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,hc=37817,dc=37818,fc=37819,pc=37820,mc=37821,Xo=36492,gc=36494,vc=36495,Zh=36283,yc=36284,_c=36285,xc=36286;var mo=2300,hl=2301,ol=2302,Th=2400,Ch=2401,Ah=2402;var Zm=3200,Jm=3201;var Jh=0,Km=1,xi="",xn="srgb",pr="srgb-linear",go="linear",yt="srgb";var hr=7680;var Rh=519,Qm=512,eg=513,tg=514,Kh=515,ng=516,ig=517,rg=518,sg=519,Ih=35044;var Qh="300 es",Zn=2e3,vo=2001;var gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qu=Math.PI/180,yo=180/Math.PI;function jo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function E_(i,e){return(i%e+e)%e}function eh(i,e,t){return(1-t)*i+t*e}function lo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var et=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==m||u!==g){let p=1-a,f=l*d+c*m+u*g+h*y,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,f*w);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}let M=a*w;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+y*M,p===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new L,Jp=new Jn,We=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],y=r[0],p=r[3],f=r[6],w=r[1],S=r[4],M=r[7],D=r[2],C=r[5],T=r[8];return s[0]=o*y+a*w+l*D,s[3]=o*p+a*S+l*C,s[6]=o*f+a*M+l*T,s[1]=c*y+u*w+h*D,s[4]=c*p+u*S+h*C,s[7]=c*f+u*M+h*T,s[2]=d*y+m*w+g*D,s[5]=d*p+m*S+g*C,s[8]=d*f+m*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*c-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nh=new We;function ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function og(){let i=as("canvas");return i.style.display="block",i}var Kp={};function mr(i){i in Kp||(Kp[i]=!0,console.warn(i))}function ag(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function lg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?go:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:go,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var ot=T_();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qr,dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=as("canvas")),qr.width=e.width,qr.height=e.height;let r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},C_=0,ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ih(r[o].image)):s.push(ih(r[o]))}else s=ih(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A_=0,rh=new L,ni=(()=>{class i extends gi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Vi,s=Vi,o=zn,a=qi,l=Nn,c=Wn,u=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=jo(),this.name="",this.source=new ls(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Eh,i.DEFAULT_ANISOTROPY=1,i})(),vt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,D=(f+1)/2,C=(u+d)/4,T=(h+y)/4,I=(g+p)/4;return S>M&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=T/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=I/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=T/s,r=I/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-y)/w,this.z=(d-u)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new ni(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends ni{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends ni{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ha.subVectors(this.max,co),$r.subVectors(e.a,co),Yr.subVectors(e.b,co),Zr.subVectors(e.c,co),Li.subVectors(Yr,$r),Oi.subVectors(Zr,Yr),rr.subVectors($r,Zr);let t=[0,-Li.z,Li.y,0,-Oi.z,Oi.y,0,-rr.z,rr.y,Li.z,0,-Li.x,Oi.z,0,-Oi.x,rr.z,0,-rr.x,-Li.y,Li.x,0,-Oi.y,Oi.x,0,-rr.y,rr.x,0];return!sh(t,$r,Yr,Zr,Ha)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,$r,Yr,Zr,Ha))?!1:(Ga.crossVectors(Li,Oi),t=[Ga.x,Ga.y,Ga.z],sh(t,$r,Yr,Zr,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,za=new Hi,$r=new L,Yr=new L,Zr=new L,Li=new L,Oi=new L,rr=new L,co=new L,Ha=new L,Ga=new L,sr=new L;function sh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){sr.fromArray(i,s);let a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var R_=new Hi,uo=new L,oh=new L,cs=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(uo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(oh)),this.expandByPoint(uo.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ui=new L,ah=new L,Wa=new L,Ni=new L,lh=new L,Xa=new L,ch=new L,xo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ah.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(ah);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Ni.dot(this.direction),l=-Ni.dot(Wa),c=Ni.lengthSq(),u=Math.abs(1-o*o),h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let y=1/u;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ah).addScaledVector(Wa,d),m}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){lh.subVectors(t,e),Xa.subVectors(n,e),ch.crossVectors(lh,Xa);let o=this.direction.dot(ch),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);let l=a*this.direction.dot(Xa.crossVectors(Ni,Xa));if(l<0)return null;let c=a*this.direction.dot(lh.cross(Ni));if(c<0||l+c>o)return null;let u=-a*Ni.dot(ch);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,d,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,m,g,y,p)}set(e,t,n,r,s,o,a,l,c,u,h,d,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,m=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,g=c*u,y=c*h;t[0]=d+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,g=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,P_)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Fi.crossVectors(n,yn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Fi.crossVectors(n,yn)),Fi.normalize(),ja.crossVectors(yn,Fi),r[0]=Fi.x,r[4]=ja.x,r[8]=yn.x,r[1]=Fi.y,r[5]=ja.y,r[9]=yn.y,r[2]=Fi.z,r[6]=ja.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],w=n[3],S=n[7],M=n[11],D=n[15],C=r[0],T=r[4],I=r[8],b=r[12],x=r[1],R=r[5],z=r[9],k=r[13],j=r[2],X=r[6],H=r[10],J=r[14],G=r[3],oe=r[7],fe=r[11],Re=r[15];return s[0]=o*C+a*x+l*j+c*G,s[4]=o*T+a*R+l*X+c*oe,s[8]=o*I+a*z+l*H+c*fe,s[12]=o*b+a*k+l*J+c*Re,s[1]=u*C+h*x+d*j+m*G,s[5]=u*T+h*R+d*X+m*oe,s[9]=u*I+h*z+d*H+m*fe,s[13]=u*b+h*k+d*J+m*Re,s[2]=g*C+y*x+p*j+f*G,s[6]=g*T+y*R+p*X+f*oe,s[10]=g*I+y*z+p*H+f*fe,s[14]=g*b+y*k+p*J+f*Re,s[3]=w*C+S*x+M*j+D*G,s[7]=w*T+S*R+M*X+D*oe,s[11]=w*I+S*z+M*H+D*fe,s[15]=w*b+S*k+M*J+D*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*m-n*l*m)+y*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],w=h*p*c-y*d*c+y*l*m-a*p*m-h*l*f+a*d*f,S=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,M=u*y*c-g*h*c+g*a*m-o*y*m-u*a*f+o*h*f,D=g*h*l-u*y*l-g*a*d+o*y*d+u*a*p-o*h*p,C=t*w+n*S+r*M+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=w*T,e[1]=(y*d*s-h*p*s-y*r*m+n*p*m+h*r*f-n*d*f)*T,e[2]=(a*p*s-y*l*s+y*r*c-n*p*c-a*r*f+n*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*m-n*l*m)*T,e[4]=S*T,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*f+t*d*f)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*f-t*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*T,e[8]=M*T,e[9]=(g*h*s-u*y*s-g*n*m+t*y*m+u*n*f-t*h*f)*T,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*f+t*a*f)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=D*T,e[13]=(u*y*r-g*h*r+g*n*d-t*y*d-u*n*p+t*h*p)*T,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*p-t*a*p)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,y=o*u,p=o*h,f=a*h,w=l*c,S=l*u,M=l*h,D=n.x,C=n.y,T=n.z;return r[0]=(1-(y+f))*D,r[1]=(m+M)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+f))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(g+S)*T,r[9]=(p-w)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Jr.set(r[0],r[1],r[2]).length(),o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zn){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),m,g;if(a===Zn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zn){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,m=(n+r)*u,g,y;if(a===Zn)g=(o+s)*h,y=-2*h;else if(a===vo)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new L,Bn=new At,I_=new L(0,0,0),P_=new L(1,1,1),Fi=new L,ja=new L,yn=new L,tm=new At,nm=new Jn,Gi=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],m=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(nt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return tm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tm,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return nm.setFromEuler(this),this.setFromQuaternion(nm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D_=0,im=new L,Kr=new Jn,hi=new At,qa=new L,ho=new L,L_=new L,O_=new Jn,rm=new L(1,0,0),sm=new L(0,1,0),om=new L(0,0,1),am={type:"added"},N_={type:"removed"},Qr={type:"childadded",child:null},uh={type:"childremoved",child:null},Qt=(()=>{class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,n=new Gi,r=new Jn,s=new L(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(rm,t)}rotateY(t){return this.rotateOnAxis(sm,t)}rotateZ(t){return this.rotateOnAxis(om,t)}translateOnAxis(t,n){return im.copy(t).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rm,t)}translateY(t){return this.translateOnAxis(sm,t)}translateZ(t){return this.translateOnAxis(om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?qa.copy(t):qa.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ho,qa,this.up):hi.lookAt(qa,ho,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(hi),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(am),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(N_),uh.child=t,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(am),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,L_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,O_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Dt(xe({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>xe({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),m=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new L(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Vn=new L,di=new L,hh=new L,fi=new L,es=new L,ts=new L,lm=new L,dh=new L,fh=new L,ph=new L,mh=new vt,gh=new vt,vh=new vt,Bi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vn.subVectors(r,t),di.subVectors(n,t),hh.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(hh),c=di.dot(di),u=di.dot(hh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return mh.setScalar(0),gh.setScalar(0),vh.setScalar(0),mh.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,n),vh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mh,s.x),o.addScaledVector(gh,s.y),o.addScaledVector(vh,s.z),o}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),di.subVectors(e,t),Vn.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;es.subVectors(r,n),ts.subVectors(s,n),dh.subVectors(e,n);let l=es.dot(dh),c=ts.dot(dh);if(l<=0&&c<=0)return t.copy(n);fh.subVectors(e,r);let u=es.dot(fh),h=ts.dot(fh);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(es,o);ph.subVectors(e,s);let m=es.dot(ph),g=ts.dot(ph);if(g>=0&&m<=g)return t.copy(s);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ts,a);let p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return lm.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(lm,a);let f=1/(p+y+d);return o=y*f,a=d*f,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},$a={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=E_(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yh(o,s,e+1/3),this.g=yh(o,s,e),this.b=yh(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=ug[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ot.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=xn){ot.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL($a);let n=eh(Ui.h,$a.h,t),r=eh(Ui.s,$a.s,t),s=eh(Ui.l,$a.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new it;it.NAMES=ug;var F_=0,Wi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=dr,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new L,Ya=new et,U_=0,Mn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}};var Mo=class extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bo=class extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var zt=class extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},k_=0,Pn=new At,_h=new Qt,ns=new L,_n=new Hi,fo=new Hi,Yt=new L,Hn=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?bo:Mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(_n.min,fo.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,fo.max),_n.expandByPoint(Yt)):(_n.expandByPoint(fo.min),_n.expandByPoint(fo.max))}_n.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Yt.add(ns)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let c=new L,u=new L,h=new L,d=new et,m=new et,g=new et,y=new L,p=new L;function f(I,b,x){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(d),g.sub(d);let R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(y),a[b].add(y),a[x].add(y),l[I].add(p),l[b].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,b=w.length;I<b;++I){let x=w[I],R=x.start,z=x.count;for(let k=R,j=R+z;k<j;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new L,M=new L,D=new L,C=new L;function T(I){D.fromBufferAttribute(r,I),C.copy(D);let b=a[I];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),M.crossVectors(C,b);let R=M.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,b=w.length;I<b;++I){let x=w[I],R=x.start,z=x.count;for(let k=R,j=R+z;k<j;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new Mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cm=new At,or=new xo,Za=new cs,um=new L,Ja=new L,Ka=new L,Qa=new L,xh=new L,el=new L,hm=new L,tl=new L,te=class extends Qt{constructor(e=new Hn,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(xh.fromBufferAttribute(h,e),o?el.addScaledVector(xh,u):el.addScaledVector(xh.sub(t),u))}t.add(el)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Za.containsPoint(or.origin)===!1&&(or.intersectSphere(Za,um)===null||or.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),or.copy(e.ray).applyMatrix4(cm),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,D=S;M<D;M+=3){let C=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);r=nl(this,f,e,n,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let w=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);r=nl(this,o,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,D=S;M<D;M+=3){let C=M,T=M+1,I=M+2;r=nl(this,f,e,n,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let w=p,S=p+1,M=p+2;r=nl(this,o,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function B_(i,e,t,n,r,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Dn,a),l===null)return null;tl.copy(a),tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ja),i.getVertexPosition(l,Ka),i.getVertexPosition(c,Qa);let u=B_(i,e,t,n,Ja,Ka,Qa,hm);if(u){let h=new L;Bi.getBarycoord(hm,Ja,Ka,Qa,h),r&&(u.uv=Bi.getInterpolatedAttribute(r,a,l,c,h,new et)),s&&(u.uv1=Bi.getInterpolatedAttribute(s,a,l,c,h,new et)),o&&(u.normal=Bi.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Bi.getNormal(Ja,Ka,Qa,d.normal),u.face=d,u.barycoord=h}return u}var Xe=class i extends Hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(y,p,f,w,S,M,D,C,T,I,b){let x=M/T,R=D/I,z=M/2,k=D/2,j=C/2,X=T+1,H=I+1,J=0,G=0,oe=new L;for(let fe=0;fe<H;fe++){let Re=fe*R-k;for(let Je=0;Je<X;Je++){let _t=Je*x-z;oe[y]=_t*w,oe[p]=Re*S,oe[f]=j,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[p]=0,oe[f]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Je/T),h.push(1-fe/I),J+=1}}for(let fe=0;fe<I;fe++)for(let Re=0;Re<T;Re++){let Je=d+Re+X*fe,_t=d+Re+X*(fe+1),Y=d+(Re+1)+X*(fe+1),re=d+(Re+1)+X*fe;l.push(Je,_t,re),l.push(_t,Y,re),G+=6}a.addGroup(m,G,b),m+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Mr(i[t]);for(let r in n)e[r]=n[r]}return e}function V_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function td(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var hg={clone:Mr,merge:on},z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},So=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new L,dm=new et,fm=new et,Zt=class extends So{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,dm,fm),t.subVectors(fm,dm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,rs=1,ml=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(is,rs,e,t);r.layers=this.layers,this.add(r);let s=new Zt(is,rs,e,t);s.layers=this.layers,this.add(s);let o=new Zt(is,rs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(is,rs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(is,rs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wo=class extends ni{constructor(e=[],t=_r,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xe(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:yi});s.uniforms.tEquirect.value=t;let o=new te(r,s),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=zn),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},St=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Eo=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Mh=new L,W_=new L,X_=new We,Yn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mh.subVectors(n,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||X_.getNormalMatrix(e),r=this.coplanarPoint(Mh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new cs,il=new L,ds=class{constructor(e=new Yn,t=new Yn,n=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],w=r[13],S=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-m,M-f).normalize(),n[1].setComponents(l+s,d+c,p+m,M+f).normalize(),n[2].setComponents(l+o,d+u,p+g,M+w).normalize(),n[3].setComponents(l-o,d-u,p-g,M-w).normalize(),n[4].setComponents(l-a,d-h,p-y,M-S).normalize(),t===Zn)n[5].setComponents(l+a,d+h,p+y,M+S).normalize();else if(t===vo)n[5].setComponents(a,h,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qn=class extends ni{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},To=class extends ni{constructor(e,t,n=$i,r,s,o,a=Ln,l=Ln,c,u=os,h=1){if(u!==os&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var fs=class i extends Hn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new L,u=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class i extends Hn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],m=[],g=0,y=[],p=n/2,f=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(m,2));function w(){let M=new L,D=new L,C=0,T=(t-e)/n;for(let I=0;I<=s;I++){let b=[],x=I/s,R=x*(t-e)+e;for(let z=0;z<=r;z++){let k=z/r,j=k*l+a,X=Math.sin(j),H=Math.cos(j);D.x=R*X,D.y=-x*n+p,D.z=R*H,h.push(D.x,D.y,D.z),M.set(X,T,H).normalize(),d.push(M.x,M.y,M.z),m.push(k,1-x),b.push(g++)}y.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){let x=y[b][I],R=y[b+1][I],z=y[b+1][I+1],k=y[b][I+1];(e>0||b!==0)&&(u.push(x,R,k),C+=3),(t>0||b!==s-1)&&(u.push(R,z,k),C+=3)}c.addGroup(f,C,0),f+=C}function S(M){let D=g,C=new et,T=new L,I=0,b=M===!0?e:t,x=M===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),g++;let R=g;for(let z=0;z<=r;z++){let j=z/r*l+a,X=Math.cos(j),H=Math.sin(j);T.x=b*H,T.y=p*x,T.z=b*X,h.push(T.x,T.y,T.z),d.push(0,x,0),C.x=X*.5+.5,C.y=H*.5*x+.5,m.push(C.x,C.y),g++}for(let z=0;z<r;z++){let k=D+z,j=R+z;M===!0?u.push(j,j+1,k):u.push(j+1,j,k),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class i extends Lt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sn=class i extends Hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){let w=f*d-o;for(let S=0;S<c;S++){let M=S*h-s;g.push(M,-w,0),y.push(0,0,1),p.push(S/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let S=w+c*f,M=w+c*(f+1),D=w+1+c*(f+1),C=w+1+c*f;m.push(S,M,C),m.push(M,D,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gn=class i extends Hn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,m=[],g=[],y=[],p=[];for(let f=0;f<=n;f++){let w=[],S=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let C=D/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(C+M,1-S),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let S=u[f][w+1],M=u[f][w],D=u[f+1][w],C=u[f+1][w+1];(f!==0||o>0)&&m.push(S,M,C),(f!==n-1||l<Math.PI)&&m.push(M,D,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Te=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vl=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function rl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function j_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends gr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ch:s=e,a=2*t-n;break;case Ah:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:o=e,l=2*n-t;break;case Ah:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,p=y*g,f=-d*p+2*d*y-d*g,w=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,S=(-1-m)*p+(1.5+m)*y+.5*g,M=m*p-m*y;for(let D=0;D!==a;++D)s[D]=f*o[u+D]+w*o[c+D]+S*o[l+D]+M*o[h+D];return s}},xl=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Ml=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&j_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ol,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[d+g]||y!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=hl;var Xi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=mo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};bl.prototype.ValueTypeName="color";var Sl=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};Sl.prototype.ValueTypeName="number";var wl=class extends gr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Jn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ao=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Sn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=mo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Sn{constructor(e,t,n,r){super(e,t,n,r)}};El.prototype.ValueTypeName="vector";var Ro={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Tl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},dg=new Tl,qo=(()=>{class i{constructor(t){this.manager=t!==void 0?t:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),pi={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},Cl=class extends qo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ro.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:r});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=pi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,y=0,p=new ReadableStream({start(f){w();function w(){h.read().then(({done:S,value:M})=>{if(S)f.close();else{y+=M.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let C=0,T=u.length;C<T;C++){let I=u[C];I.onProgress&&I.onProgress(D)}f.enqueue(M),w()}},S=>{f.error(S)})}}});return new Response(p)}else throw new Ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Ro.add(e,c);let u=pi[e];delete pi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Al=class extends qo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ro.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=as("img");function l(){u(),Ro.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Io=class extends qo{constructor(e){super(e)}load(e,t,n,r){let s=new ni,o=new Al(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},vr=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Po=class extends vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bh=new At,pm=new L,mm=new L,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends Do{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=yo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ps=class extends vr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gm=new At,po=new L,Sh=new L,Lh=class extends Do{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),Sh.copy(n.position),Sh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sh),n.updateMatrixWorld(),r.makeTranslation(-po.x,-po.y,-po.z),gm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}},vi=class extends vr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Lo=class extends So{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Do{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var sl,No=class{static getContext(){return sl===void 0&&(sl=new(window.AudioContext||window.webkitAudioContext)),sl}static setContext(e){sl=e}},Fo=class extends qo{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Cl(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);No.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}};var Rl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Il=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vm(){return performance.now()}var lr=new L,wh=new Jn,q_=new L,cr=new L,ur=new L,Uo=class extends Qt{constructor(){super(),this.type="AudioListener",this.context=No.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Il}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(lr,wh,q_),cr.set(0,0,-1).applyQuaternion(wh),ur.set(0,1,0).applyQuaternion(wh),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(lr.x,n),t.positionY.linearRampToValueAtTime(lr.y,n),t.positionZ.linearRampToValueAtTime(lr.z,n),t.forwardX.linearRampToValueAtTime(cr.x,n),t.forwardY.linearRampToValueAtTime(cr.y,n),t.forwardZ.linearRampToValueAtTime(cr.z,n),t.upX.linearRampToValueAtTime(ur.x,n),t.upY.linearRampToValueAtTime(ur.y,n),t.upZ.linearRampToValueAtTime(ur.z,n)}else t.setPosition(lr.x,lr.y,lr.z),t.setOrientation(cr.x,cr.y,cr.z,ur.x,ur.y,ur.z)}},yr=class extends Qt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var nd="\\[\\]\\.:\\/",$_=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",Y_="[^"+nd.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",id),J_=/(WCOD+)?/.source.replace("WCOD",Y_),K_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),ex=new RegExp("^"+Z_+J_+K_+Q_+"$"),tx=["material","materials","bones","map"],Nh=class{constructor(e,t,n){let r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($_,"")}static parseTrackName(t){let n=ex.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);tx.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Nh,i})();Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rT=new Float32Array(1);var ym=new At,ko=class{constructor(e,t,n=0,r=1/0){this.ray=new xo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ym),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(_m),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fh(e[r],this,n,t);return n.sort(_m),n}};function _m(i,e){return i.distance-e.distance}function Fh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Fh(s[o],e,t,!0)}}function rd(i,e,t,n){let r=nx(n);switch(t){case jh:return i*e;case $h:return i*e/r.components*r.byteLength;case jl:return i*e/r.components*r.byteLength;case Yh:return i*e*2/r.components*r.byteLength;case ql:return i*e*2/r.components*r.byteLength;case qh:return i*e*3/r.components*r.byteLength;case Nn:return i*e*4/r.components*r.byteLength;case $l:return i*e*4/r.components*r.byteLength;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Kl:return Math.max(i,16)*Math.max(e,8)/4;case Yl:case Jl:return Math.max(i,8)*Math.max(e,8)/2;case Ql:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xo:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zh:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _c:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(i){switch(i){case Wn:case Gh:return{byteLength:1,components:1};case ms:case Wh:case gs:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case $i:case Gl:case ti:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);function Fg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ix(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){let g=h[d],y=h[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){let y=h[m];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ub=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ab=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:rx,alphahash_pars_fragment:sx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:lx,alphatest_pars_fragment:cx,aomap_fragment:ux,aomap_pars_fragment:hx,batching_pars_vertex:dx,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:vx,bumpmap_pars_fragment:yx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:bx,color_fragment:Sx,color_pars_fragment:wx,color_pars_vertex:Ex,color_vertex:Tx,common:Cx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Rx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Px,emissivemap_fragment:Dx,emissivemap_pars_fragment:Lx,colorspace_fragment:Ox,colorspace_pars_fragment:Nx,envmap_fragment:Fx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:kx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Zx,envmap_vertex:Vx,fog_vertex:zx,fog_pars_vertex:Hx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:jx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:$x,lights_pars_begin:Yx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Qx,lights_phong_pars_fragment:eM,lights_physical_fragment:tM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:aM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:cM,map_fragment:uM,map_pars_fragment:hM,map_particle_fragment:dM,map_particle_pars_fragment:fM,metalnessmap_fragment:pM,metalnessmap_pars_fragment:mM,morphinstance_vertex:gM,morphcolor_vertex:vM,morphnormal_vertex:yM,morphtarget_pars_vertex:_M,morphtarget_vertex:xM,normal_fragment_begin:MM,normal_fragment_maps:bM,normal_pars_fragment:SM,normal_pars_vertex:wM,normal_vertex:EM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:IM,opaque_fragment:PM,packing:DM,premultiplied_alpha_fragment:LM,project_vertex:OM,dithering_fragment:NM,dithering_pars_fragment:FM,roughnessmap_fragment:UM,roughnessmap_pars_fragment:kM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:VM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:GM,skinning_pars_vertex:WM,skinning_vertex:XM,skinnormal_vertex:jM,specularmap_fragment:qM,specularmap_pars_fragment:$M,tonemapping_fragment:YM,tonemapping_pars_fragment:ZM,transmission_fragment:JM,transmission_pars_fragment:KM,uv_pars_fragment:QM,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:rb,backgroundCube_vert:sb,backgroundCube_frag:ob,cube_vert:ab,cube_frag:lb,depth_vert:cb,depth_frag:ub,distanceRGBA_vert:hb,distanceRGBA_frag:db,equirect_vert:fb,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:vb,meshbasic_frag:yb,meshlambert_vert:_b,meshlambert_frag:xb,meshmatcap_vert:Mb,meshmatcap_frag:bb,meshnormal_vert:Sb,meshnormal_frag:wb,meshphong_vert:Eb,meshphong_frag:Tb,meshphysical_vert:Cb,meshphysical_frag:Ab,meshtoon_vert:Rb,meshtoon_frag:Ib,points_vert:Pb,points_frag:Db,shadow_vert:Lb,shadow_frag:Ob,sprite_vert:Nb,sprite_frag:Fb},le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ii={basic:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([le.lights,le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ii.physical={uniforms:on([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Mc={r:0,b:0,g:0},br=new Gi,Ub=new At;function kb(i,e,t,n,r,s,o){let a=new it(0),l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function y(S){let M=!1,D=g(S);D===null?f(a,l):D&&D.isColor&&(f(D,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,M){let D=g(M);D&&(D.isCubeTexture||D.mapping===Bo)?(u===void 0&&(u=new te(new Xe(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Mr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(M.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(br)),u.material.toneMapped=ot.getTransfer(D.colorSpace)!==yt,(h!==D||d!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,m=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new te(new sn(2,2),new bn({name:"BackgroundMaterial",uniforms:Mr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(D.colorSpace)!==yt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Mc,td(i)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:p,dispose:w}}function Bb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(x,R,z,k,j){let X=!1,H=h(k,z,R);s!==H&&(s=H,c(s.object)),X=m(x,k,z,j),X&&g(x,k,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,R,z,k),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,z){let k=z.wireframe===!0,j=n[x.id];j===void 0&&(j={},n[x.id]=j);let X=j[R.id];X===void 0&&(X={},j[R.id]=X);let H=X[k];return H===void 0&&(H=d(l()),X[k]=H),H}function d(x){let R=[],z=[],k=[];for(let j=0;j<t;j++)R[j]=0,z[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function m(x,R,z,k){let j=s.attributes,X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let fe=j[G],Re=X[G];if(Re===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),fe===void 0||fe.attribute!==Re||Re&&fe.data!==Re.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(x,R,z,k){let j={},X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let fe=X[G];fe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));let Re={};Re.attribute=fe,fe&&fe.data&&(Re.data=fe.data),j[G]=Re,H++}s.attributes=j,s.attributesNum=H,s.index=k}function y(){let x=s.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function p(x){f(x,0)}function f(x,R){let z=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;z[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),j[x]!==R&&(i.vertexAttribDivisor(x,R),j[x]=R)}function w(){let x=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==x[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function S(x,R,z,k,j,X,H){H===!0?i.vertexAttribIPointer(x,R,z,j,X):i.vertexAttribPointer(x,R,z,k,j,X)}function M(x,R,z,k){y();let j=k.attributes,X=z.getAttributes(),H=R.defaultAttributeValues;for(let J in X){let G=X[J];if(G.location>=0){let oe=j[J];if(oe===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){let fe=oe.normalized,Re=oe.itemSize,Je=e.get(oe);if(Je===void 0)continue;let _t=Je.buffer,Y=Je.type,re=Je.bytesPerElement,Ee=Y===i.INT||Y===i.UNSIGNED_INT||oe.gpuType===Gl;if(oe.isInterleavedBufferAttribute){let de=oe.data,Ce=de.stride,ut=oe.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)f(G.location+ke,de.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ke=0;ke<G.locationSize;ke++)S(G.location+ke,Re/G.locationSize,Y,fe,Ce*re,(ut+Re/G.locationSize*ke)*re,Ee)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)f(G.location+de,oe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<G.locationSize;de++)p(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let de=0;de<G.locationSize;de++)S(G.location+de,Re/G.locationSize,Y,fe,Re*re,Re/G.locationSize*de*re,Ee)}}else if(H!==void 0){let fe=H[J];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(G.location,fe);break;case 3:i.vertexAttrib3fv(G.location,fe);break;case 4:i.vertexAttrib4fv(G.location,fe);break;default:i.vertexAttrib1fv(G.location,fe)}}}}w()}function D(){I();for(let x in n){let R=n[x];for(let z in R){let k=R[z];for(let j in k)u(k[j].object),delete k[j];delete R[z]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let z in R){let k=R[z];for(let j in k)u(k[j].object),delete k[j];delete R[z]}delete n[x.id]}function T(x){for(let R in n){let z=n[R];if(z[x.id]===void 0)continue;let k=z[x.id];for(let j in k)u(k[j].object),delete k[j];delete z[x.id]}}function I(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:p,disableUnusedAttributes:w}}function Vb(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zb(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ti&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function Hb(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Yn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{let w=s?0:n,S=w*4,M=f.clippingState||null;l.value=M,M=u(g,d,S,m);for(let D=0;D!==S;++D)M[D]=t[D];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let f=m+y*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,M=m;S!==y;++S,M+=4)o.copy(h[S]).applyMatrix4(w,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Gb(i){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=_r:a===zl&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vl||a===zl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var xs=4,fg=[.125,.215,.35,.446,.526,.582],Er=20,sd=new Lo,pg=new it,od=null,ad=0,ld=0,cd=!1,wr=(1+Math.sqrt(5))/2,_s=1/wr,mg=[new L(-wr,_s,0),new L(wr,_s,0),new L(-_s,0,wr),new L(_s,0,wr),new L(0,wr,-_s),new L(0,wr,_s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Wb=new L,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Wb}=s;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:gs,format:Nn,colorSpace:pr,depthBuffer:!1},r=gg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(s)),this._blurMaterial=jb(s,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,sd)}_sceneToCubeUV(e,t,n,r,s){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(pg),h.toneMapping=_i,h.autoClear=!1;let g=new rn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),y=new te(new Xe,g),p=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(pg),p=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let M=this._cubeSize;bc(r,S*M,w>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_r||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;bc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mg[(r-s-1)%mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new te(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Er-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):Er;p>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Er}`);let f=[],w=0;for(let T=0;T<Er;++T){let I=T/y,b=Math.exp(-I*I/2);f.push(b),T===0?w+=b:T<p&&(w+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[r],D=3*M*(r>S-xs?r-S+xs:0),C=4*(this._cubeSize-M);bc(t,D,C,3*M,2*M),l.setRenderTarget(t),l.render(h,sd)}};function Xb(i){let e=[],t=[],n=[],r=i,s=i-xs+1+fg.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-xs?l=fg[o-i+xs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,y=3,p=2,f=1,w=new Float32Array(y*g*m),S=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,I=C>2?0:-1,b=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(b,y*g*C),S.set(d,p*g*C);let x=[C,C,C,C,C,C];M.set(x,f*g*C)}let D=new Hn;D.setAttribute("position",new Mn(w,y)),D.setAttribute("uv",new Mn(S,p)),D.setAttribute("faceIndex",new Mn(M,f)),e.push(D),r>xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gg(i,e,t){let n=new Kn(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jb(i,e,t){let n=new Float32Array(Er),r=new L(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vg(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yg(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vl||l===zl,u=l===_r||l===xr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new wc(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $b(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yb(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(h){let d=[],m=h.index,g=h.attributes.position,y=0;if(m!==null){let w=m.array;y=m.version;for(let S=0,M=w.length;S<M;S+=3){let D=w[S+0],C=w[S+1],T=w[S+2];d.push(D,C,C,T,T,D)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,M=w.length/3-1;S<M;S+=3){let D=S+0,C=S+1,T=S+2;d.push(D,C,C,T,T,D)}}else return;let p=new(ed(d)?bo:Mo)(d,1);p.version=y;let f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zb(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function h(d,m,g,y){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,y,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*y[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Kb(i,e,t){let n=new WeakMap,r=new vt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let D=a.attributes.position.count*M,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let T=new Float32Array(D*C*4*h),I=new _o(T,D,C,h);I.type=ti,I.needsUpdate=!0;let b=M*4;for(let R=0;R<h;R++){let z=f[R],k=w[R],j=S[R],X=D*C*4*R;for(let H=0;H<z.count;H++){let J=H*b;g===!0&&(r.fromBufferAttribute(z,H),T[X+J+0]=r.x,T[X+J+1]=r.y,T[X+J+2]=r.z,T[X+J+3]=0),y===!0&&(r.fromBufferAttribute(k,H),T[X+J+4]=r.x,T[X+J+5]=r.y,T[X+J+6]=r.z,T[X+J+7]=0),p===!0&&(r.fromBufferAttribute(j,H),T[X+J+8]=r.x,T[X+J+9]=r.y,T[X+J+10]=r.z,T[X+J+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new et(D,C)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Qb(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Ug=new ni,_g=new To(1,1),kg=new _o,Bg=new pl,Vg=new wo,xg=[],Mg=[],bg=new Float32Array(16),Sg=new Float32Array(9),wg=new Float32Array(4);function bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=xg[r];if(s===void 0&&(s=new Float32Array(r),xg[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tc(i,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function nS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function iS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function rS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;wg.set(n),i.uniformMatrix2fv(this.addr,!1,wg),Gt(t,n)}}function sS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Sg.set(n),i.uniformMatrix3fv(this.addr,!1,Sg),Gt(t,n)}}function oS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;bg.set(n),i.uniformMatrix4fv(this.addr,!1,bg),Gt(t,n)}}function aS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function hS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function fS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function pS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function mS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_g.compareFunction=Kh,s=_g):s=Ug,t.setTexture2D(e||s,r)}function gS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bg,r)}function vS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vg,r)}function yS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kg,r)}function _S(i){switch(i){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return yS}}function xS(i,e){i.uniform1fv(this.addr,e)}function MS(i,e){let t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function bS(i,e){let t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function SS(i,e){let t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function wS(i,e){let t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ES(i,e){let t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TS(i,e){let t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function CS(i,e){i.uniform1iv(this.addr,e)}function AS(i,e){i.uniform2iv(this.addr,e)}function RS(i,e){i.uniform3iv(this.addr,e)}function IS(i,e){i.uniform4iv(this.addr,e)}function PS(i,e){i.uniform1uiv(this.addr,e)}function DS(i,e){i.uniform2uiv(this.addr,e)}function LS(i,e){i.uniform3uiv(this.addr,e)}function OS(i,e){i.uniform4uiv(this.addr,e)}function NS(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ug,s[o])}function FS(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bg,s[o])}function US(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vg,s[o])}function kS(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kg,s[o])}function BS(i){switch(i){case 5126:return xS;case 35664:return MS;case 35665:return bS;case 35666:return SS;case 35674:return wS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return CS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return IS;case 5125:return PS;case 36294:return DS;case 36295:return LS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return kS}}var hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_S(t.type)}},dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BS(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},ud=/(\w+)(\])?(\[|\.)?/g;function Eg(i,e){i.seq.push(e),i.map[e.id]=e}function VS(i,e,t){let n=i.name,r=n.length;for(ud.lastIndex=0;;){let s=ud.exec(n),o=ud.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eg(t,c===void 0?new hd(a,i,e):new dd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fd(a),Eg(t,h)),t=h}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);VS(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Tg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zS=37297,HS=0;function GS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cg=new We;function WS(i){ot._getMatrix(Cg,ot.workingColorSpace,i);let e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case go:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ag(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GS(i.getShaderSource(e),o)}else return r}function XS(i,e){let t=WS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jS(i,e){let t;switch(e){case Hm:t="Linear";break;case Gm:t="Reinhard";break;case Wm:t="Cineon";break;case Xm:t="ACESFilmic";break;case qm:t="AgX";break;case $m:t="Neutral";break;case jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sc=new L;function qS(){ot.getLuminanceCoefficients(Sc);let i=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function YS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ZS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $o(i){return i!==""}function Rg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(i){return i.replace(JS,QS)}var KS=new Map;function QS(i,e){let t=$e[e];if(t===void 0){let n=KS.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}var ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(i){return i.replace(ew,tw)}function tw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function iw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case xr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function sw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vm:e="ENVMAP_BLENDING_MIX";break;case zm:e="ENVMAP_BLENDING_ADD";break}return e}function ow(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function aw(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nw(t),c=iw(t),u=rw(t),h=sw(t),d=ow(t),m=$S(t),g=YS(s),y=r.createProgram(),p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),f.length>0&&(f+=`
`)):(p=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),f=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?jS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,XS("linearToOutputTexel",t.outputColorSpace),qS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=pd(o),o=Rg(o,t),o=Ig(o,t),a=pd(a),a=Rg(a,t),a=Ig(a,t),o=Pg(o),a=Pg(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=w+p+o,M=w+f+a,D=Tg(r,r.VERTEX_SHADER,S),C=Tg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,D),r.attachShader(y,C),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(C).trim(),X=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,D,C);else{let J=Ag(r,D,"vertex"),G=Ag(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||j==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:z,vertexShader:{log:k,prefix:p},fragmentShader:{log:j,prefix:f}})}r.deleteShader(D),r.deleteShader(C),I=new Ms(r,y),b=ZS(r,y)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,zS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}var lw=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gd(e),t.set(e,n)),n}},gd=class{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}};function cw(i,e,t,n,r,s,o){let a=new us,l=new md,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,x,R,z,k){let j=z.fog,X=k.geometry,H=b.isMeshStandardMaterial?z.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=J&&J.mapping===Bo?J.image.height:null,oe=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=fe!==void 0?fe.length:0,Je=0;X.morphAttributes.position!==void 0&&(Je=1),X.morphAttributes.normal!==void 0&&(Je=2),X.morphAttributes.color!==void 0&&(Je=3);let _t,Y,re,Ee;if(oe){let mt=ii[oe];_t=mt.vertexShader,Y=mt.fragmentShader}else _t=b.vertexShader,Y=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),Ee=l.getFragmentShaderID(b);let de=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),ut=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,Rt=!!b.map,It=!!b.matcap,ht=!!J,A=!!b.aoMap,an=!!b.lightMap,dt=!!b.bumpMap,bt=!!b.normalMap,be=!!b.displacementMap,at=!!b.emissiveMap,De=!!b.metalnessMap,qe=!!b.roughnessMap,Vt=b.anisotropy>0,E=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,$=b.sheen>0,K=b.transmission>0,W=Vt&&!!b.anisotropyMap,Se=E&&!!b.clearcoatMap,ce=E&&!!b.clearcoatNormalMap,Me=E&&!!b.clearcoatRoughnessMap,we=F&&!!b.iridescenceMap,Q=F&&!!b.iridescenceThicknessMap,pe=$&&!!b.sheenColorMap,Ne=$&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,ae=!!b.specularColorMap,He=!!b.specularIntensityMap,P=K&&!!b.transmissionMap,ue=K&&!!b.thicknessMap,ee=!!b.gradientMap,ve=!!b.alphaMap,ne=b.alphaTest>0,Z=!!b.alphaHash,ye=!!b.extensions,Ge=_i;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let wt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:Y,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:ut,instancingColor:ut&&k.instanceColor!==null,instancingMorph:ut&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:pr,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:It,envMap:ht,envMapMode:ht&&J.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:an,bumpMap:dt,normalMap:bt,displacementMap:d&&be,emissiveMap:at,normalMapObjectSpace:bt&&b.normalMapType===Km,normalMapTangentSpace:bt&&b.normalMapType===Jh,metalnessMap:De,roughnessMap:qe,anisotropy:Vt,anisotropyMap:W,clearcoat:E,clearcoatMap:Se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:v,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:pe,sheenRoughnessMap:Ne,specularMap:Oe,specularColorMap:ae,specularIntensityMap:He,transmission:K,transmissionMap:P,thicknessMap:ue,gradientMap:ee,opaque:b.transparent===!1&&b.blending===dr&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:Z,combine:b.combine,mapUv:Rt&&y(b.map.channel),aoMapUv:A&&y(b.aoMap.channel),lightMapUv:an&&y(b.lightMap.channel),bumpMapUv:dt&&y(b.bumpMap.channel),normalMapUv:bt&&y(b.normalMap.channel),displacementMapUv:be&&y(b.displacementMap.channel),emissiveMapUv:at&&y(b.emissiveMap.channel),metalnessMapUv:De&&y(b.metalnessMap.channel),roughnessMapUv:qe&&y(b.roughnessMap.channel),anisotropyMapUv:W&&y(b.anisotropyMap.channel),clearcoatMapUv:Se&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(b.sheenRoughnessMap.channel),specularMapUv:Oe&&y(b.specularMap.channel),specularColorMapUv:ae&&y(b.specularColorMap.channel),specularIntensityMapUv:He&&y(b.specularIntensityMap.channel),transmissionMapUv:P&&y(b.transmissionMap.channel),thicknessMapUv:ue&&y(b.thicknessMap.channel),alphaMapUv:ve&&y(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(bt||Vt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Rt||ve),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Je,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let x=g[b.type],R;if(x){let z=ii[x];R=hg.clone(z.uniforms)}else R=b.uniforms;return R}function D(b,x){let R;for(let z=0,k=u.length;z<k;z++){let j=u[z];if(j.cacheKey===x){R=j,++R.usedTimes;break}}return R===void 0&&(R=new aw(i,x,b,s),u.push(R)),R}function C(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:I}}function uw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Og(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,m,g,y,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:y,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=p),e++,f}function a(h,d,m,g,y,p){let f=o(h,d,m,g,y,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,g,y,p){let f=o(h,d,m,g,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||hw),n.length>1&&n.sort(d||Lg),r.length>1&&r.sort(d||Lg)}function u(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dw(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Og,i.set(n,[o])):r>=s.length?(o=new Og,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new it};break;case"SpotLight":t={position:new L,direction:new L,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function pw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mw=0;function gw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vw(i){let e=new fw,t=pw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let r=new L,s=new At,o=new At;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,y=0,p=0,f=0,w=0,S=0,M=0,D=0,C=0,T=0;c.sort(gw);for(let b=0,x=c.length;b<x;b++){let R=c[b],z=R.color,k=R.intensity,j=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*k,h+=z.g*k,d+=z.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],k);T++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=H,m++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(z).multiplyScalar(k),H.distance=j,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[y]=H;let J=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,J.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[y]=J.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=X,M++}y++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(z).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=H,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==p||I.hemiLength!==f||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=p,I.hemiLength=f,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=T,n.version=mw++)}function l(c,u){let h=0,d=0,m=0,g=0,y=0,p=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let S=c[f];if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(S.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function Ng(i){let e=new vw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yw(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ng(i),e.set(r,[a])):s>=o.length?(a=new Ng(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mw(i,e,t){let n=new ds,r=new et,s=new et,o=new vt,a=new vl({depthPacking:Jm}),l=new yl,c={},u=t.maxTextureSize,h={[Dn]:en,[en]:Dn,[On]:On},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:_w,fragmentShader:xw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Hn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new te(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let f=this.type;this.render=function(C,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(yi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==ei&&this.type===ei,j=f===ei&&this.type!==ei;for(let X=0,H=C.length;X<H;X++){let J=C[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||k===!0||j===!0){let Re=this.type!==ei?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new Kn(r.x,r.y,Re),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let fe=G.getViewportCount();for(let Re=0;Re<fe;Re++){let Je=G.getViewport(Re);o.set(s.x*Je.x,s.y*Je.y,s.x*Je.z,s.y*Je.w),z.viewport(o),G.updateMatrices(J,Re),n=G.getFrustum(),M(T,I,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&w(G,I),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(b,x,R)};function w(C,T){let I=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,I,m,y,null)}function S(C,T,I,b){let x=null,R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let z=x.uuid,k=T.uuid,j=c[z];j===void 0&&(j={},c[z]=j);let X=j[k];X===void 0&&(X=x.clone(),j[k]=X,T.addEventListener("dispose",D)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,b===ei?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=i.properties.get(x);z.light=I}return x}function M(C,T,I,b,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ei)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);let k=e.update(C),j=C.material;if(Array.isArray(j)){let X=k.groups;for(let H=0,J=X.length;H<J;H++){let G=X[H],oe=j[G.materialIndex];if(oe&&oe.visible){let fe=S(C,oe,b,x);C.onBeforeShadow(i,C,T,I,k,fe,G),i.renderBufferDirect(I,null,k,fe,C,G),C.onAfterShadow(i,C,T,I,k,fe,G)}}}else if(j.visible){let X=S(C,j,b,x);C.onBeforeShadow(i,C,T,I,k,X,null),i.renderBufferDirect(I,null,k,X,C,null),C.onAfterShadow(i,C,T,I,k,X,null)}}let z=C.children;for(let k=0,j=z.length;k<j;k++)M(z[k],T,I,b,x)}function D(C){C.target.removeEventListener("dispose",D);for(let I in c){let b=c[I],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var bw={[Ll]:Ol,[Nl]:kl,[Fl]:Bl,[fr]:Ul,[Ol]:Ll,[kl]:Nl,[Bl]:Fl,[Ul]:fr};function Sw(i,e){function t(){let P=!1,ue=new vt,ee=null,ve=new vt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Z,ye,Ge,wt){wt===!0&&(ne*=Ge,Z*=Ge,ye*=Ge),ue.set(ne,Z,ye,Ge),ve.equals(ue)===!1&&(i.clearColor(ne,Z,ye,Ge),ve.copy(ue))},reset:function(){P=!1,ee=null,ve.set(-1,0,0,0)}}}function n(){let P=!1,ue=!1,ee=null,ve=null,ne=null;return{setReversed:function(Z){if(ue!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;let Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return ue},setTest:function(Z){Z?de(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Z){ee!==Z&&!P&&(i.depthMask(Z),ee=Z)},setFunc:function(Z){if(ue&&(Z=bw[Z]),ve!==Z){switch(Z){case Ll:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Nl:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Z}},setLocked:function(Z){P=Z},setClear:function(Z){ne!==Z&&(ue&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){P=!1,ee=null,ve=null,ne=null,ue=!1}}}function r(){let P=!1,ue=null,ee=null,ve=null,ne=null,Z=null,ye=null,Ge=null,wt=null;return{setTest:function(mt){P||(mt?de(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!P&&(i.stencilMask(mt),ue=mt)},setFunc:function(mt,Fn,ri){(ee!==mt||ve!==Fn||ne!==ri)&&(i.stencilFunc(mt,Fn,ri),ee=mt,ve=Fn,ne=ri)},setOp:function(mt,Fn,ri){(Z!==mt||ye!==Fn||Ge!==ri)&&(i.stencilOp(mt,Fn,ri),Z=mt,ye=Fn,Ge=ri)},setLocked:function(mt){P=mt},setClear:function(mt){wt!==mt&&(i.clearStencil(mt),wt=mt)},reset:function(){P=!1,ue=null,ee=null,ve=null,ne=null,Z=null,ye=null,Ge=null,wt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,m=[],g=null,y=!1,p=null,f=null,w=null,S=null,M=null,D=null,C=null,T=new it(0,0,0),I=0,b=!1,x=null,R=null,z=null,k=null,j=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let oe=null,fe={},Re=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),_t=new vt().fromArray(Re),Y=new vt().fromArray(Je);function re(P,ue,ee,ve){let ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ee;ye++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ue+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}let Ee={};Ee[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(fr),dt(!1),bt(Uh),de(i.CULL_FACE),A(yi);function de(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ce(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ut(P,ue){return h[P]!==ue?(i.bindFramebuffer(P,ue),h[P]=ue,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ke(P,ue){let ee=m,ve=!1;if(P){ee=d.get(ue),ee===void 0&&(ee=[],d.set(ue,ee));let ne=P.textures;if(ee.length!==ne.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=ne.length;Z<ye;Z++)ee[Z]=i.COLOR_ATTACHMENT0+Z;ee.length=ne.length,ve=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ee)}function Rt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let It={[zi]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[wm]:i.FUNC_REVERSE_SUBTRACT};It[Em]=i.MIN,It[Tm]=i.MAX;let ht={[Cm]:i.ZERO,[Am]:i.ONE,[Rm]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[Nm]:i.SRC_ALPHA_SATURATE,[Lm]:i.DST_COLOR,[Pm]:i.DST_ALPHA,[Im]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[Om]:i.ONE_MINUS_DST_COLOR,[Dm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[km]:i.CONSTANT_ALPHA,[Bm]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ue,ee,ve,ne,Z,ye,Ge,wt,mt){if(P===yi){y===!0&&(Ce(i.BLEND),y=!1);return}if(y===!1&&(de(i.BLEND),y=!0),P!==bm){if(P!==p||mt!==b){if((f!==zi||M!==zi)&&(i.blendEquation(i.FUNC_ADD),f=zi,M=zi),mt)switch(P){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bh:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,S=null,D=null,C=null,T.set(0,0,0),I=0,p=P,b=mt}return}ne=ne||ue,Z=Z||ee,ye=ye||ve,(ue!==f||ne!==M)&&(i.blendEquationSeparate(It[ue],It[ne]),f=ue,M=ne),(ee!==w||ve!==S||Z!==D||ye!==C)&&(i.blendFuncSeparate(ht[ee],ht[ve],ht[Z],ht[ye]),w=ee,S=ve,D=Z,C=ye),(Ge.equals(T)===!1||wt!==I)&&(i.blendColor(Ge.r,Ge.g,Ge.b,wt),T.copy(Ge),I=wt),p=P,b=!1}function an(P,ue){P.side===On?Ce(i.CULL_FACE):de(i.CULL_FACE);let ee=P.side===en;ue&&(ee=!ee),dt(ee),P.blending===dr&&P.transparent===!1?A(yi):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let ve=P.stencilWrite;a.setTest(ve),ve&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function bt(P){P!==xm?(de(i.CULL_FACE),P!==R&&(P===Uh?i.cullFace(i.BACK):P===Mm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),R=P}function be(P){P!==z&&(H&&i.lineWidth(P),z=P)}function at(P,ue,ee){P?(de(i.POLYGON_OFFSET_FILL),(k!==ue||j!==ee)&&(i.polygonOffset(ue,ee),k=ue,j=ee)):Ce(i.POLYGON_OFFSET_FILL)}function De(P){P?de(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function qe(P){P===void 0&&(P=i.TEXTURE0+X-1),oe!==P&&(i.activeTexture(P),oe=P)}function Vt(P,ue,ee){ee===void 0&&(oe===null?ee=i.TEXTURE0+X-1:ee=oe);let ve=fe[ee];ve===void 0&&(ve={type:void 0,texture:void 0},fe[ee]=ve),(ve.type!==P||ve.texture!==ue)&&(oe!==ee&&(i.activeTexture(ee),oe=ee),i.bindTexture(P,ue||Ee[P]),ve.type=P,ve.texture=ue)}function E(){let P=fe[oe];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(P){_t.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),_t.copy(P))}function Ne(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Oe(P,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let ve=ee.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ue,P.name),ee.set(P,ve))}function ae(P,ue){let ve=c.get(ue).get(P);l.get(ue)!==ve&&(i.uniformBlockBinding(ue,ve,P.__bindingPointIndex),l.set(ue,ve))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,fe={},h={},d=new WeakMap,m=[],g=null,y=!1,p=null,f=null,w=null,S=null,M=null,D=null,C=null,T=new it(0,0,0),I=0,b=!1,x=null,R=null,z=null,k=null,j=null,_t.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ce,bindFramebuffer:ut,drawBuffers:ke,useProgram:Rt,setBlending:A,setMaterial:an,setFlipSided:dt,setCullFace:bt,setLineWidth:be,setPolygonOffset:at,setScissorTest:De,activeTexture:qe,bindTexture:Vt,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:we,texImage3D:Q,updateUBOMapping:Oe,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:Me,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:Se,scissor:pe,viewport:Ne,reset:He}}function ww(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):as("canvas")}function y(E,v,F){let $=1,K=Vt(E);if((K.width>F||K.height>F)&&($=F/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let W=Math.floor($*K.width),Se=Math.floor($*K.height);h===void 0&&(h=g(W,Se));let ce=v?g(W,Se):h;return ce.width=W,ce.height=Se,ce.getContext("2d").drawImage(E,0,0,W,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Se+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,F,$,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=v;if(v===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),v===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){let Se=K?go:ot.getTransfer($);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=Se===yt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(E,v){let F;return E?v===null||v===$i||v===vs?F=i.DEPTH24_STENCIL8:v===ti?F=i.DEPTH32F_STENCIL8:v===ms&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===vs?F=i.DEPTH_COMPONENT24:v===ti?F=i.DEPTH_COMPONENT32F:v===ms&&(F=i.DEPTH_COMPONENT16),F}function D(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ln&&E.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),I(v),v.isVideoTexture&&u.delete(v)}function T(E){let v=E.target;v.removeEventListener("dispose",T),x(v)}function I(E){let v=n.get(E);if(v.__webglInit===void 0)return;let F=E.source,$=d.get(F);if($){let K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(F)}n.remove(E)}function b(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let F=E.source,$=d.get(F);delete $[v.__cacheKey],o.memory.textures--}function x(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[$][K]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let $=0,K=F.length;$<K;$++){let W=n.get(F[$]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(E)}let R=0;function z(){R=0}function k(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function j(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function X(E,v){let F=n.get(E);if(E.isVideoTexture&&De(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(F,E,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function H(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){Ee(F,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function J(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){Ee(F,E,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){de(F,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let oe={[cl]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},fe={[Ln]:i.NEAREST,[Ym]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Hl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Re={[Qm]:i.NEVER,[sg]:i.ALWAYS,[eg]:i.LESS,[Kh]:i.LEQUAL,[tg]:i.EQUAL,[rg]:i.GEQUAL,[ng]:i.GREATER,[ig]:i.NOTEQUAL};function Je(E,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===Hl||v.magFilter===Vo||v.magFilter===qi||v.minFilter===zn||v.minFilter===Hl||v.minFilter===Vo||v.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,oe[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ln||v.minFilter!==Vo&&v.minFilter!==qi||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _t(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let $=v.source,K=d.get($);K===void 0&&(K={},d.set($,K));let W=j(v);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[W].usedTimes++;let Se=K[E.__cacheKey];Se!==void 0&&(K[E.__cacheKey].usedTimes--,Se.usedTimes===0&&b(v)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return F}function Y(E,v,F){return Math.floor(Math.floor(E/F)/v)}function re(E,v,F,$){let W=E.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,$,v.data);else{W.sort((Q,pe)=>Q.start-pe.start);let Se=0;for(let Q=1;Q<W.length;Q++){let pe=W[Se],Ne=W[Q],Oe=pe.start+pe.count,ae=Y(Ne.start,v.width,4),He=Y(pe.start,v.width,4);Ne.start<=Oe+1&&ae===He&&Y(Ne.start+Ne.count-1,v.width,4)===ae?pe.count=Math.max(pe.count,Ne.start+Ne.count-pe.start):(++Se,W[Se]=Ne)}W.length=Se+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Q=0,pe=W.length;Q<pe;Q++){let Ne=W[Q],Oe=Math.floor(Ne.start/4),ae=Math.ceil(Ne.count/4),He=Oe%v.width,P=Math.floor(Oe/v.width),ue=ae,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,He,P,ue,ee,F,$,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Ee(E,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let K=_t(E,v),W=v.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+F);let Se=n.get(W);if(W.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+F);let ce=ot.getPrimaries(ot.workingColorSpace),Me=v.colorSpace===xi?null:ot.getPrimaries(v.colorSpace),we=v.colorSpace===xi||ce===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Q=y(v.image,!1,r.maxTextureSize);Q=qe(v,Q);let pe=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type),Oe=S(v.internalFormat,pe,Ne,v.colorSpace,v.isVideoTexture);Je($,v);let ae,He=v.mipmaps,P=v.isVideoTexture!==!0,ue=Se.__version===void 0||K===!0,ee=W.dataReady,ve=D(v,Q);if(v.isDepthTexture)Oe=M(v.format===ys,v.type),ue&&(P?t.texStorage2D(i.TEXTURE_2D,1,Oe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Oe,Q.width,Q.height,0,pe,Ne,null));else if(v.isDataTexture)if(He.length>0){P&&ue&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,He[0].width,He[0].height);for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,Ne,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,pe,Ne,ae.data);v.generateMipmaps=!1}else P?(ue&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,Q.width,Q.height),ee&&re(v,Q,pe,Ne)):t.texImage2D(i.TEXTURE_2D,0,Oe,Q.width,Q.height,0,pe,Ne,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Oe,He[0].width,He[0].height,Q.depth);for(let ne=0,Z=He.length;ne<Z;ne++)if(ae=He[ne],v.format!==Nn)if(pe!==null)if(P){if(ee)if(v.layerUpdates.size>0){let ye=rd(ae.width,ae.height,v.format,v.type);for(let Ge of v.layerUpdates){let wt=ae.data.subarray(Ge*ye/ae.data.BYTES_PER_ELEMENT,(Ge+1)*ye/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ge,ae.width,ae.height,1,pe,wt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,pe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,pe,Ne,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,ae.width,ae.height,Q.depth,0,pe,Ne,ae.data)}else{P&&ue&&t.texStorage2D(i.TEXTURE_2D,ve,Oe,He[0].width,He[0].height);for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],v.format!==Nn?pe!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,Ne,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,pe,Ne,ae.data)}else if(v.isDataArrayTexture)if(P){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Oe,Q.width,Q.height,Q.depth),ee)if(v.layerUpdates.size>0){let ne=rd(Q.width,Q.height,v.format,v.type);for(let Z of v.layerUpdates){let ye=Q.data.subarray(Z*ne/Q.data.BYTES_PER_ELEMENT,(Z+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pe,Ne,ye)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Ne,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,Q.width,Q.height,Q.depth,0,pe,Ne,Q.data);else if(v.isData3DTexture)P?(ue&&t.texStorage3D(i.TEXTURE_3D,ve,Oe,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Ne,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,Q.width,Q.height,Q.depth,0,pe,Ne,Q.data);else if(v.isFramebufferTexture){if(ue)if(P)t.texStorage2D(i.TEXTURE_2D,ve,Oe,Q.width,Q.height);else{let ne=Q.width,Z=Q.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Oe,ne,Z,0,pe,Ne,null),ne>>=1,Z>>=1}}else if(He.length>0){if(P&&ue){let ne=Vt(He[0]);t.texStorage2D(i.TEXTURE_2D,ve,Oe,ne.width,ne.height)}for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,Ne,ae):t.texImage2D(i.TEXTURE_2D,ne,Oe,pe,Ne,ae);v.generateMipmaps=!1}else if(P){if(ue){let ne=Vt(Q);t.texStorage2D(i.TEXTURE_2D,ve,Oe,ne.width,ne.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ne,Q)}else t.texImage2D(i.TEXTURE_2D,0,Oe,pe,Ne,Q);p(v)&&f($),Se.__version=W.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function de(E,v,F){if(v.image.length!==6)return;let $=_t(E,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let W=n.get(K);if(K.version!==W.__version||$===!0){t.activeTexture(i.TEXTURE0+F);let Se=ot.getPrimaries(ot.workingColorSpace),ce=v.colorSpace===xi?null:ot.getPrimaries(v.colorSpace),Me=v.colorSpace===xi||Se===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!we&&!Q?pe[Z]=y(v.image[Z],!0,r.maxCubemapSize):pe[Z]=Q?v.image[Z].image:v.image[Z],pe[Z]=qe(v,pe[Z]);let Ne=pe[0],Oe=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),He=S(v.internalFormat,Oe,ae,v.colorSpace),P=v.isVideoTexture!==!0,ue=W.__version===void 0||$===!0,ee=K.dataReady,ve=D(v,Ne);Je(i.TEXTURE_CUBE_MAP,v);let ne;if(we){P&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){ne=pe[Z].mipmaps;for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];v.format!==Nn?Oe!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ge.width,Ge.height,Oe,ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,He,Ge.width,Ge.height,0,Oe,ae,Ge.data)}}}else{if(ne=v.mipmaps,P&&ue){ne.length>0&&ve++;let Z=Vt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Oe,ae,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,pe[Z].width,pe[Z].height,0,Oe,ae,pe[Z].data);for(let ye=0;ye<ne.length;ye++){let wt=ne[ye].image[Z].image;P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,wt.width,wt.height,Oe,ae,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,He,wt.width,wt.height,0,Oe,ae,wt.data)}}else{P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,ae,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Oe,ae,pe[Z]);for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Oe,ae,Ge.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,He,Oe,ae,Ge.image[Z])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),W.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ce(E,v,F,$,K,W){let Se=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),Me=S(F.internalFormat,Se,ce,F.colorSpace),we=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!we.__hasExternalTextures){let pe=Math.max(1,v.width>>W),Ne=Math.max(1,v.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Me,pe,Ne,v.depth,0,Se,ce,null):t.texImage2D(K,W,Me,pe,Ne,0,Se,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Q.__webglTexture,0,be(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Q.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,W=M(v.stencilBuffer,K),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=be(v);at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,W,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{let $=v.textures;for(let K=0;K<$.length;K++){let W=$[K],Se=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),Me=S(W.internalFormat,Se,ce,W.colorSpace),we=be(v);F&&at(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Me,v.width,v.height):at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let K=$.__webglTexture,W=be(v);if(v.depthTexture.format===os)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===ys)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let $=E.texture.mipmaps;$&&$.length>0?ke(v.__webglFramebuffer[0],E):ke(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[$],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else{let $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function It(E,v,F){let $=n.get(E);v!==void 0&&Ce($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Rt(E)}function ht(E){let v=E.texture,F=n.get(E),$=n.get(v);E.addEventListener("dispose",T);let K=E.textures,W=E.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Me=0;Me<v.mipmaps.length;Me++)F.__webglFramebuffer[ce][Me]=i.createFramebuffer()}else F.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)F.__webglFramebuffer[ce]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ce=0,Me=K.length;ce<Me;ce++){let we=n.get(K[ce]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&at(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let Me=K[ce];F.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);let we=s.convert(Me.format,Me.colorSpace),Q=s.convert(Me.type),pe=S(Me.internalFormat,we,Q,Me.colorSpace,E.isXRRenderTarget===!0),Ne=be(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ce(F.__webglFramebuffer[ce][Me],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else Ce(F.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,Me=K.length;ce<Me;ce++){let we=K[ce],Q=n.get(we);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Je(i.TEXTURE_2D,we),Ce(F.__webglFramebuffer,E,we,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),p(we)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),Je(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ce(F.__webglFramebuffer[Me],E,v,i.COLOR_ATTACHMENT0,ce,Me);else Ce(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ce,0);p(v)&&f(ce),t.unbindTexture()}E.depthBuffer&&Rt(E)}function A(E){let v=E.textures;for(let F=0,$=v.length;F<$;F++){let K=v[F];if(p(K)){let W=w(E),Se=n.get(K).__webglTexture;t.bindTexture(W,Se),f(W),t.unbindTexture()}}}let an=[],dt=[];function bt(E){if(E.samples>0){if(at(E)===!1){let v=E.textures,F=E.width,$=E.height,K=i.COLOR_BUFFER_BIT,W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),ce=v.length>1;if(ce)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let Me=E.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<v.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let Q=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,K,i.NEAREST),l===!0&&(an.length=0,dt.length=0,an.push(i.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&(an.push(W),dt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let Q=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function be(E){return Math.min(r.maxSamples,E.samples)}function at(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function De(E){let v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function qe(E,v){let F=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==pr&&F!==xi&&(ot.getTransfer(F)===yt?($!==Nn||K!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=at}function Ew(i,e){function t(n,r=xi){let s,o=ot.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===qh)return i.RGB;if(n===Nn)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===$h)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===Yh)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===zo||n===Ho||n===Go||n===Wo)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===Zl||n===Jl||n===Kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ql||n===ec)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===gc||n===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xo)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===yc||n===_c||n===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ni,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:Tw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends gi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null,y=new vd,p=t.getContextAttributes(),f=null,w=null,S=[],M=[],D=new et,C=null,T=new Zt;T.viewport=new vt;let I=new Zt;I.viewport=new vt;let b=[T,I],x=new Rl,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=S[Y];return re===void 0&&(re=new hs,S[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=S[Y];return re===void 0&&(re=new hs,S[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=S[Y];return re===void 0&&(re=new hs,S[Y]=re),re.getHandSpace()};function k(Y){let re=M.indexOf(Y.inputSource);if(re===-1)return;let Ee=S[re];Ee!==void 0&&(Ee.update(Y.inputSource,Y.frame,c||o),Ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<S.length;Y++){let re=M[Y];re!==null&&(M[Y]=null,S[Y].disconnect(re))}R=null,z=null,y.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,w=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return Cr(this,null,function*(){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,de=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=p.stencil?ys:os,de=p.stencil?vs:$i);let ut={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ut),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Kn(d.textureWidth,d.textureHeight,{format:Nn,type:Wn,depthTexture:new To(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Kn(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(Y){for(let re=0;re<Y.removed.length;re++){let Ee=Y.removed[re],de=M.indexOf(Ee);de>=0&&(M[de]=null,S[de].disconnect(Ee))}for(let re=0;re<Y.added.length;re++){let Ee=Y.added[re],de=M.indexOf(Ee);if(de===-1){for(let ut=0;ut<S.length;ut++)if(ut>=M.length){M.push(Ee),de=ut;break}else if(M[ut]===null){M[ut]=Ee,de=ut;break}if(de===-1)break}let Ce=S[de];Ce&&Ce.connect(Ee)}}let H=new L,J=new L;function G(Y,re,Ee){H.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);let de=H.distanceTo(J),Ce=re.projectionMatrix.elements,ut=Ee.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),Rt=Ce[14]/(Ce[10]+1),It=(Ce[9]+1)/Ce[5],ht=(Ce[9]-1)/Ce[5],A=(Ce[8]-1)/Ce[0],an=(ut[8]+1)/ut[0],dt=ke*A,bt=ke*an,be=de/(-A+an),at=be*-A;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(at),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let De=ke+be,qe=Rt+be,Vt=dt-at,E=bt+(de-at),v=It*Rt/qe*De,F=ht*Rt/qe*De;Y.projectionMatrix.makePerspective(Vt,E,v,F,De,qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let re=Y.near,Ee=Y.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),x.near=I.near=T.near=re,x.far=I.far=T.far=Ee,(R!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far),T.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,x.layers.mask=T.layers.mask|I.layers.mask;let de=Y.parent,Ce=x.cameras;oe(x,de);for(let ut=0;ut<Ce.length;ut++)oe(Ce[ut],de);Ce.length===2?G(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),fe(Y,x,de)};function fe(Y,re,Ee){Ee===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(Ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Re=null;function Je(Y,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let de=!1;Ee.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let ke=0;ke<Ee.length;ke++){let Rt=Ee[ke],It=null;if(m!==null)It=m.getViewport(Rt);else{let A=h.getViewSubImage(d,Rt);It=A.viewport,ke===0&&(e.setRenderTargetTextures(w,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(w))}let ht=b[ke];ht===void 0&&(ht=new Zt,ht.layers.enable(ke),ht.viewport=new vt,b[ke]=ht),ht.matrix.fromArray(Rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(It.x,It.y,It.width,It.height),ke===0&&(x.matrix.copy(ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(ht)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let ke=h.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,r.renderState)}}for(let Ee=0;Ee<S.length;Ee++){let de=M[Ee],Ce=S[Ee];de!==null&&Ce!==void 0&&Ce.update(de,re,c||o)}Re&&Re(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let _t=new Fg;_t.setAnimationLoop(Je),this.setAnimationLoop=function(Y){Re=Y},this.dispose=function(){}}},Sr=new Gi,Aw=new At;function Rw(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,td(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=e.get(f),S=w.envMap,M=w.envMapRotation;S&&(p.envMap.value=S,Sr.copy(M),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),p.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(Sr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Iw(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",p));let D=S.program;n.updateUBOMapping(w,D);let C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function u(w){let S=h();w.__bindingPointIndex=S;let M=i.createBuffer(),D=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=r[w.id],M=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=M.length;C<T;C++){let I=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,x=I.length;b<x;b++){let R=I[b];if(m(R,C,b,D)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],j=0;for(let X=0;X<k.length;X++){let H=k[X],J=y(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+j,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,M,D){let C=w.value,T=S+"_"+M;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{let I=D[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){let S=w.uniforms,M=0,D=16;for(let T=0,I=S.length;T<I;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,R=b.length;x<R;x++){let z=b[x],k=Array.isArray(z.value)?z.value:[z.value];for(let j=0,X=k.length;j<X;j++){let H=k[j],J=y(H),G=M%D,oe=G%J.boundary,fe=G+oe;M+=oe,fe!==0&&D-fe<J.storage&&(M+=D-fe),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}let C=M%D;return C>0&&(M+=D-C),w.__size=M,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Ec=class{constructor(e={}){let{canvas:t=og(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),y=new Int32Array(4),p=null,f=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=xn;let C=0,T=0,I=null,b=-1,x=null,R=new vt,z=new vt,k=null,j=new it(0),X=0,H=t.width,J=t.height,G=1,oe=null,fe=null,Re=new vt(0,0,H,J),Je=new vt(0,0,H,J),_t=!1,Y=new ds,re=!1,Ee=!1,de=new At,Ce=new At,ut=new L,ke=new vt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function ht(){return I===null?G:1}let A=n;function an(_,O){return t.getContext(_,O)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Z,!1),A===null){let O="webgl2";if(A=an(O,_),A===null)throw an(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let dt,bt,be,at,De,qe,Vt,E,v,F,$,K,W,Se,ce,Me,we,Q,pe,Ne,Oe,ae,He,P;function ue(){dt=new $b(A),dt.init(),ae=new Ew(A,dt),bt=new zb(A,dt,e,ae),be=new Sw(A,dt),bt.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),at=new Jb(A),De=new uw,qe=new ww(A,dt,be,De,bt,ae,at),Vt=new Gb(M),E=new qb(M),v=new ix(A),He=new Bb(A,v),F=new Yb(A,v,at,He),$=new Qb(A,F,v,at),pe=new Kb(A,bt,qe),Me=new Hb(De),K=new cw(M,Vt,E,dt,bt,He,Me),W=new Rw(M,De),Se=new dw,ce=new yw(dt),Q=new kb(M,Vt,E,be,$,m,l),we=new Mw(M,$,bt),P=new Iw(A,at,bt,be),Ne=new Vb(A,dt,at),Oe=new Zb(A,dt,at),at.programs=K.programs,M.capabilities=bt,M.extensions=dt,M.properties=De,M.renderLists=Se,M.shadowMap=we,M.state=be,M.info=at}ue();let ee=new yd(M,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=dt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=dt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(H,J,!1))},this.getSize=function(_){return _.set(H,J)},this.setSize=function(_,O,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,J=O,t.width=Math.floor(_*G),t.height=Math.floor(O*G),B===!0&&(t.style.width=_+"px",t.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(_,O,B){H=_,J=O,G=B,t.width=Math.floor(_*B),t.height=Math.floor(O*B),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(Re)},this.setViewport=function(_,O,B,V){_.isVector4?Re.set(_.x,_.y,_.z,_.w):Re.set(_,O,B,V),be.viewport(R.copy(Re).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(Je)},this.setScissor=function(_,O,B,V){_.isVector4?Je.set(_.x,_.y,_.z,_.w):Je.set(_,O,B,V),be.scissor(z.copy(Je).multiplyScalar(G).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(_){be.setScissorTest(_t=_)},this.setOpaqueSort=function(_){oe=_},this.setTransparentSort=function(_){fe=_},this.getClearColor=function(_){return _.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(_=!0,O=!0,B=!0){let V=0;if(_){let N=!1;if(I!==null){let ie=I.texture.format;N=ie===$l||ie===ql||ie===jl}if(N){let ie=I.texture.type,he=ie===Wn||ie===$i||ie===ms||ie===vs||ie===Wl||ie===Xl,_e=Q.getClearColor(),me=Q.getClearAlpha(),Be=_e.r,ze=_e.g,Ae=_e.b;he?(g[0]=Be,g[1]=ze,g[2]=Ae,g[3]=me,A.clearBufferuiv(A.COLOR,0,g)):(y[0]=Be,y[1]=ze,y[2]=Ae,y[3]=me,A.clearBufferiv(A.COLOR,0,y))}else V|=A.COLOR_BUFFER_BIT}O&&(V|=A.DEPTH_BUFFER_BIT),B&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Q.dispose(),Se.dispose(),ce.dispose(),De.dispose(),Vt.dispose(),E.dispose(),$.dispose(),He.dispose(),P.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",xd),ee.removeEventListener("sessionend",Md),Yi.stop()};function ve(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let _=at.autoReset,O=we.enabled,B=we.autoUpdate,V=we.needsUpdate,N=we.type;ue(),at.autoReset=_,we.enabled=O,we.autoUpdate=B,we.needsUpdate=V,we.type=N}function Z(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ye(_){let O=_.target;O.removeEventListener("dispose",ye),Ge(O)}function Ge(_){wt(_),De.remove(_)}function wt(_){let O=De.get(_).programs;O!==void 0&&(O.forEach(function(B){K.releaseProgram(B)}),_.isShaderMaterial&&K.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,B,V,N,ie){O===null&&(O=Rt);let he=N.isMesh&&N.matrixWorld.determinant()<0,_e=jg(_,O,B,V,N);be.setMaterial(V,he);let me=B.index,Be=1;if(V.wireframe===!0){if(me=F.getWireframeAttribute(B),me===void 0)return;Be=2}let ze=B.drawRange,Ae=B.attributes.position,tt=ze.start*Be,gt=(ze.start+ze.count)*Be;ie!==null&&(tt=Math.max(tt,ie.start*Be),gt=Math.min(gt,(ie.start+ie.count)*Be)),me!==null?(tt=Math.max(tt,0),gt=Math.min(gt,me.count)):Ae!=null&&(tt=Math.max(tt,0),gt=Math.min(gt,Ae.count));let Pt=gt-tt;if(Pt<0||Pt===1/0)return;He.setup(N,V,_e,B,me);let Ot,lt=Ne;if(me!==null&&(Ot=v.get(me),lt=Oe,lt.setIndex(Ot)),N.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*ht()),lt.setMode(A.LINES)):lt.setMode(A.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*ht()),N.isLineSegments?lt.setMode(A.LINES):N.isLineLoop?lt.setMode(A.LINE_LOOP):lt.setMode(A.LINE_STRIP)}else N.isPoints?lt.setMode(A.POINTS):N.isSprite&&lt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))lt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,Jt=N._multiDrawCounts,ft=N._multiDrawCount,Un=me?v.get(me).bytesPerElement:1,Tr=De.get(V).currentProgram.getUniforms();for(let mn=0;mn<ft;mn++)Tr.setValue(A,"_gl_DrawID",mn),lt.render(Le[mn]/Un,Jt[mn])}else if(N.isInstancedMesh)lt.renderInstances(tt,Pt,N.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jt=Math.min(B.instanceCount,Le);lt.renderInstances(tt,Pt,Jt)}else lt.render(tt,Pt)};function mt(_,O,B){_.transparent===!0&&_.side===On&&_.forceSinglePass===!1?(_.side=en,_.needsUpdate=!0,Zo(_,O,B),_.side=Dn,_.needsUpdate=!0,Zo(_,O,B),_.side=On):Zo(_,O,B)}this.compile=function(_,O,B=null){B===null&&(B=_),f=ce.get(B),f.init(O),S.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),_!==B&&_.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){let _e=ie[he];mt(_e,B,N),V.add(_e)}else mt(ie,B,N),V.add(ie)}),f=S.pop(),V},this.compileAsync=function(_,O,B=null){let V=this.compile(_,O,B);return new Promise(N=>{function ie(){if(V.forEach(function(he){De.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){N(_);return}setTimeout(ie,10)}dt.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Fn=null;function ri(_){Fn&&Fn(_)}function xd(){Yi.stop()}function Md(){Yi.start()}let Yi=new Fg;Yi.setAnimationLoop(ri),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(_){Fn=_,ee.setAnimationLoop(_),_===null?Yi.stop():Yi.start()},ee.addEventListener("sessionstart",xd),ee.addEventListener("sessionend",Md),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,O,I),f=ce.get(_,S.length),f.init(O),S.push(f),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,re=Me.init(this.clippingPlanes,Ee),p=Se.get(_,w.length),p.init(),w.push(p),ee.enabled===!0&&ee.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&Ac(ie,O,-1/0,M.sortObjects)}Ac(_,O,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(oe,fe),It=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,It&&Q.addToRenderList(p,_),this.info.render.frame++,re===!0&&Me.beginShadows();let B=f.state.shadowsArray;we.render(B,_,O),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=p.opaque,N=p.transmissive;if(f.setupLights(),O.isArrayCamera){let ie=O.cameras;if(N.length>0)for(let he=0,_e=ie.length;he<_e;he++){let me=ie[he];Sd(V,N,_,me)}It&&Q.render(_);for(let he=0,_e=ie.length;he<_e;he++){let me=ie[he];bd(p,_,me,me.viewport)}}else N.length>0&&Sd(V,N,_,O),It&&Q.render(_),bd(p,_,O);I!==null&&T===0&&(qe.updateMultisampleRenderTarget(I),qe.updateRenderTargetMipmap(I)),_.isScene===!0&&_.onAfterRender(M,_,O),He.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(f=S[S.length-1],re===!0&&Me.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Ac(_,O,B,V){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){V&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ce);let he=$.update(_),_e=_.material;_e.visible&&p.push(_,he,_e,B,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let he=$.update(_),_e=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ke.copy(he.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(Ce)),Array.isArray(_e)){let me=he.groups;for(let Be=0,ze=me.length;Be<ze;Be++){let Ae=me[Be],tt=_e[Ae.materialIndex];tt&&tt.visible&&p.push(_,he,tt,B,ke.z,Ae)}}else _e.visible&&p.push(_,he,_e,B,ke.z,null)}}let ie=_.children;for(let he=0,_e=ie.length;he<_e;he++)Ac(ie[he],O,B,V)}function bd(_,O,B,V){let N=_.opaque,ie=_.transmissive,he=_.transparent;f.setupLightsView(B),re===!0&&Me.setGlobalState(M.clippingPlanes,B),V&&be.viewport(R.copy(V)),N.length>0&&Yo(N,O,B),ie.length>0&&Yo(ie,O,B),he.length>0&&Yo(he,O,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Sd(_,O,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Kn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?gs:Wn,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ie=f.state.transmissionRenderTarget[V.id],he=V.viewport||R;ie.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);let _e=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(j),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),It&&Q.render(B);let me=M.toneMapping;M.toneMapping=_i;let Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),re===!0&&Me.setGlobalState(M.clippingPlanes,V),Yo(_,B,V),qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ae=0,tt=O.length;Ae<tt;Ae++){let gt=O[Ae],Pt=gt.object,Ot=gt.geometry,lt=gt.material,Le=gt.group;if(lt.side===On&&Pt.layers.test(V.layers)){let Jt=lt.side;lt.side=en,lt.needsUpdate=!0,wd(Pt,B,V,Ot,lt,Le),lt.side=Jt,lt.needsUpdate=!0,ze=!0}}ze===!0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie))}M.setRenderTarget(_e),M.setClearColor(j,X),Be!==void 0&&(V.viewport=Be),M.toneMapping=me}function Yo(_,O,B){let V=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ie=_.length;N<ie;N++){let he=_[N],_e=he.object,me=he.geometry,Be=he.group,ze=he.material;ze.allowOverride===!0&&V!==null&&(ze=V),_e.layers.test(B.layers)&&wd(_e,O,B,me,ze,Be)}}function wd(_,O,B,V,N,ie){_.onBeforeRender(M,O,B,V,N,ie),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(M,O,B,V,_,ie),N.transparent===!0&&N.side===On&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,M.renderBufferDirect(B,O,V,N,_,ie),N.side=Dn,N.needsUpdate=!0,M.renderBufferDirect(B,O,V,N,_,ie),N.side=On):M.renderBufferDirect(B,O,V,N,_,ie),_.onAfterRender(M,O,B,V,N,ie)}function Zo(_,O,B){O.isScene!==!0&&(O=Rt);let V=De.get(_),N=f.state.lights,ie=f.state.shadowsArray,he=N.state.version,_e=K.getParameters(_,N.state,ie,O,B),me=K.getProgramCacheKey(_e),Be=V.programs;V.environment=_.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(_.isMeshStandardMaterial?E:Vt).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Be===void 0&&(_.addEventListener("dispose",ye),Be=new Map,V.programs=Be);let ze=Be.get(me);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===he)return Td(_,_e),ze}else _e.uniforms=K.getUniforms(_),_.onBeforeCompile(_e,M),ze=K.acquireProgram(_e,me),Be.set(me,ze),V.uniforms=_e.uniforms;let Ae=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=Me.uniform),Td(_,_e),V.needsLights=$g(_),V.lightsStateVersion=he,V.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function Ed(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=Ms.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function Td(_,O){let B=De.get(_);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function jg(_,O,B,V,N){O.isScene!==!0&&(O=Rt),qe.resetTextureUnits();let ie=O.fog,he=V.isMeshStandardMaterial?O.environment:null,_e=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:pr,me=(V.isMeshStandardMaterial?E:Vt).get(V.envMap||he),Be=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,gt=!!B.morphAttributes.color,Pt=_i;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let Ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=Ot!==void 0?Ot.length:0,Le=De.get(V),Jt=f.state.lights;if(re===!0&&(Ee===!0||_!==x)){let ln=_===x&&V.id===b;Me.setState(V,_,ln)}let ft=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Jt.state.version||Le.outputColorSpace!==_e||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==me||V.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Me.numPlanes||Le.numIntersection!==Me.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==ze||Le.morphTargets!==Ae||Le.morphNormals!==tt||Le.morphColors!==gt||Le.toneMapping!==Pt||Le.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,Le.__version=V.version);let Un=Le.currentProgram;ft===!0&&(Un=Zo(V,O,N));let Tr=!1,mn=!1,Ss=!1,Et=Un.getUniforms(),wn=Le.uniforms;if(be.useProgram(Un.program)&&(Tr=!0,mn=!0,Ss=!0),V.id!==b&&(b=V.id,mn=!0),Tr||x!==_){be.buffers.depth.getReversed()?(de.copy(_.projectionMatrix),lg(de),cg(de),Et.setValue(A,"projectionMatrix",de)):Et.setValue(A,"projectionMatrix",_.projectionMatrix),Et.setValue(A,"viewMatrix",_.matrixWorldInverse);let hn=Et.map.cameraPosition;hn!==void 0&&hn.setValue(A,ut.setFromMatrixPosition(_.matrixWorld)),bt.logarithmicDepthBuffer&&Et.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,mn=!0,Ss=!0)}if(N.isSkinnedMesh){Et.setOptional(A,N,"bindMatrix"),Et.setOptional(A,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Et.setValue(A,"boneTexture",ln.boneTexture,qe))}N.isBatchedMesh&&(Et.setOptional(A,N,"batchingTexture"),Et.setValue(A,"batchingTexture",N._matricesTexture,qe),Et.setOptional(A,N,"batchingIdTexture"),Et.setValue(A,"batchingIdTexture",N._indirectTexture,qe),Et.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(A,"batchingColorTexture",N._colorsTexture,qe));let En=B.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&pe.update(N,B,Un),(mn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,Et.setValue(A,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wn.envMap.value=me,wn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(wn.envMapIntensity.value=O.environmentIntensity),mn&&(Et.setValue(A,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&qg(wn,Ss),ie&&V.fog===!0&&W.refreshFogUniforms(wn,ie),W.refreshMaterialUniforms(wn,V,G,J,f.state.transmissionRenderTarget[_.id]),Ms.upload(A,Ed(Le),wn,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ms.upload(A,Ed(Le),wn,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(A,"center",N.center),Et.setValue(A,"modelViewMatrix",N.modelViewMatrix),Et.setValue(A,"normalMatrix",N.normalMatrix),Et.setValue(A,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let ln=V.uniformsGroups;for(let hn=0,Rc=ln.length;hn<Rc;hn++){let Zi=ln[hn];P.update(Zi,Un),P.bind(Zi,Un)}}return Un}function qg(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function $g(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(_,O,B){let V=De.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),De.get(_.texture).__webglTexture=O,De.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,O){let B=De.get(_);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};let Yg=A.createFramebuffer();this.setRenderTarget=function(_,O=0,B=0){I=_,C=O,T=B;let V=!0,N=null,ie=!1,he=!1;if(_){let me=De.get(_);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)qe.setupRenderTarget(_);else if(me.__hasExternalTextures)qe.rebindTextures(_,De.get(_.texture).__webglTexture,De.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(me.__boundDepthTexture!==Ae){if(Ae!==null&&De.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(_)}}let Be=_.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);let ze=De.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?N=ze[O][B]:N=ze[O],ie=!0):_.samples>0&&qe.useMultisampledRTT(_)===!1?N=De.get(_).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[B]:N=ze,R.copy(_.viewport),z.copy(_.scissor),k=_.scissorTest}else R.copy(Re).multiplyScalar(G).floor(),z.copy(Je).multiplyScalar(G).floor(),k=_t;if(B!==0&&(N=Yg),be.bindFramebuffer(A.FRAMEBUFFER,N)&&V&&be.drawBuffers(_,N),be.viewport(R),be.scissor(z),be.setScissorTest(k),ie){let me=De.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,B)}else if(he){let me=De.get(_.texture),Be=O;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.__webglTexture,B,Be)}else if(_!==null&&B!==0){let me=De.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,me.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(_,O,B,V,N,ie,he,_e=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=De.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){be.bindFramebuffer(A.FRAMEBUFFER,me);try{let Be=_.textures[_e],ze=Be.format,Ae=Be.type;if(!bt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-V&&B>=0&&B<=_.height-N&&(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(O,B,V,N,ae.convert(ze),ae.convert(Ae),ie))}finally{let Be=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=function(_,O,B,V,N,ie,he,_e=0){return Cr(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=De.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me)if(O>=0&&O<=_.width-V&&B>=0&&B<=_.height-N){be.bindFramebuffer(A.FRAMEBUFFER,me);let Be=_.textures[_e],ze=Be.format,Ae=Be.type;if(!bt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.bufferData(A.PIXEL_PACK_BUFFER,ie.byteLength,A.STREAM_READ),_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(O,B,V,N,ae.convert(ze),ae.convert(Ae),0);let gt=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,gt);let Pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),yield ag(A,Pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ie),A.deleteBuffer(tt),A.deleteSync(Pt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,O=null,B=0){let V=Math.pow(2,-B),N=Math.floor(_.image.width*V),ie=Math.floor(_.image.height*V),he=O!==null?O.x:0,_e=O!==null?O.y:0;qe.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,he,_e,N,ie),be.unbindTexture()};let Zg=A.createFramebuffer(),Jg=A.createFramebuffer();this.copyTextureToTexture=function(_,O,B=null,V=null,N=0,ie=null){ie===null&&(N!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=N,N=0):ie=0);let he,_e,me,Be,ze,Ae,tt,gt,Pt,Ot=_.isCompressedTexture?_.mipmaps[ie]:_.image;if(B!==null)he=B.max.x-B.min.x,_e=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Be=B.min.x,ze=B.min.y,Ae=B.isBox3?B.min.z:0;else{let En=Math.pow(2,-N);he=Math.floor(Ot.width*En),_e=Math.floor(Ot.height*En),_.isDataArrayTexture?me=Ot.depth:_.isData3DTexture?me=Math.floor(Ot.depth*En):me=1,Be=0,ze=0,Ae=0}V!==null?(tt=V.x,gt=V.y,Pt=V.z):(tt=0,gt=0,Pt=0);let lt=ae.convert(O.format),Le=ae.convert(O.type),Jt;O.isData3DTexture?(qe.setTexture3D(O,0),Jt=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),Jt=A.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),Jt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);let ft=A.getParameter(A.UNPACK_ROW_LENGTH),Un=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Tr=A.getParameter(A.UNPACK_SKIP_PIXELS),mn=A.getParameter(A.UNPACK_SKIP_ROWS),Ss=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Be),A.pixelStorei(A.UNPACK_SKIP_ROWS,ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae);let Et=_.isDataArrayTexture||_.isData3DTexture,wn=O.isDataArrayTexture||O.isData3DTexture;if(_.isDepthTexture){let En=De.get(_),ln=De.get(O),hn=De.get(En.__renderTarget),Rc=De.get(ln.__renderTarget);be.bindFramebuffer(A.READ_FRAMEBUFFER,hn.__webglFramebuffer),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,Rc.__webglFramebuffer);for(let Zi=0;Zi<me;Zi++)Et&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(_).__webglTexture,N,Ae+Zi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(O).__webglTexture,ie,Pt+Zi)),A.blitFramebuffer(Be,ze,he,_e,tt,gt,he,_e,A.DEPTH_BUFFER_BIT,A.NEAREST);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||De.has(_)){let En=De.get(_),ln=De.get(O);be.bindFramebuffer(A.READ_FRAMEBUFFER,Zg),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,Jg);for(let hn=0;hn<me;hn++)Et?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,En.__webglTexture,N,Ae+hn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,En.__webglTexture,N),wn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,ie,Pt+hn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,ie),N!==0?A.blitFramebuffer(Be,ze,he,_e,tt,gt,he,_e,A.COLOR_BUFFER_BIT,A.NEAREST):wn?A.copyTexSubImage3D(Jt,ie,tt,gt,Pt+hn,Be,ze,he,_e):A.copyTexSubImage2D(Jt,ie,tt,gt,Be,ze,he,_e);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else wn?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(Jt,ie,tt,gt,Pt,he,_e,me,lt,Le,Ot.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Jt,ie,tt,gt,Pt,he,_e,me,lt,Ot.data):A.texSubImage3D(Jt,ie,tt,gt,Pt,he,_e,me,lt,Le,Ot):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ie,tt,gt,he,_e,lt,Le,Ot.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ie,tt,gt,Ot.width,Ot.height,lt,Ot.data):A.texSubImage2D(A.TEXTURE_2D,ie,tt,gt,he,_e,lt,Le,Ot);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Un),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tr),A.pixelStorei(A.UNPACK_SKIP_ROWS,mn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ss),ie===0&&O.generateMipmaps&&A.generateMipmap(Jt),be.unbindTexture()},this.copyTextureToTexture3D=function(_,O,B=null,V=null,N=0){return mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,O,B,V,N)},this.initRenderTarget=function(_){De.get(_).__webglFramebuffer===void 0&&qe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?qe.setTextureCube(_,0):_.isData3DTexture?qe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?qe.setTexture2DArray(_,0):qe.setTexture2D(_,0),be.unbindTexture()},this.resetState=function(){C=0,T=0,I=null,be.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Cc=(()=>{class i{constructor(){this.panelState=new Tn,this.panelState$=this.panelState.asObservable()}updatePanelState(t){this.panelState.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Dw=["canvas"],Hg=(()=>{class i{constructor(t,n,r,s){this.platformId=t,this.router=n,this.sceneControlService=r,this.syncService=s,this.animationId=0,this.signPanels=[],this.raycaster=new ko,this.mouse=new et,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.dragThreshold=5,this.initialPinchDistance=0,this.lastTap=0,this.touchStartPosition={x:0,y:0},this.initialCameraRadiusOnPinch=10,this.cameraTarget=new L(0,1.5,0),this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.isZooming=!1,this.zoomStartTime=0,this.zoomDuration=1e3,this.initialCameraPosition=new L,this.targetCameraPosition=new L,this.initialCameraTarget=new L,this.targetCameraTarget=new L,this.onMouseDown=o=>{this.isDragging=!0,this.canvasRef.nativeElement.style.cursor="grabbing",this.previousMousePosition={x:o.clientX,y:o.clientY}},this.onMouseUp=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseLeave=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseMove=o=>{if(!this.isDragging)return;let a=o.clientX-this.previousMousePosition.x,l=o.clientY-this.previousMousePosition.y;this.cameraAzimuth-=a*.01,this.cameraPolar-=l*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:o.clientX,y:o.clientY},this.updateCameraPosition()},this.onClick=o=>{let a=Math.abs(o.clientX-this.previousMousePosition.x),l=Math.abs(o.clientY-this.previousMousePosition.y);if(a>this.dragThreshold||l>this.dragThreshold)return;this.mouse.x=o.clientX/window.innerWidth*2-1,this.mouse.y=-(o.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let c=this.signPanels.map(h=>h.mesh),u=this.raycaster.intersectObjects(c,!0);if(u.length>0){let h=u[0].object,d=this.signPanels.find(m=>m.mesh===h);for(;h&&!d;)d=this.signPanels.find(m=>m.mesh===h),h=h.parent;d&&d.label!=="giant"&&d.label!=="main"&&(this.clickSound&&(this.clickSound.isPlaying&&this.clickSound.stop(),this.clickSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.clickSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()})),this.sceneControlService.requestZoom("screen"),this.router.navigate([`/${d.label.toLowerCase()}`]))}},this.onMouseWheel=o=>{o.preventDefault(),this.cameraRadius+=o.deltaY*.01,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()}))},this.onTouchStart=o=>{o.preventDefault(),this.isDragging=!0;let a=o.touches;a.length===1?(this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.touchStartPosition={x:a[0].clientX,y:a[0].clientY}):a.length===2&&(this.initialPinchDistance=this.getPinchDistance(a),this.initialCameraRadiusOnPinch=this.cameraRadius)},this.onTouchMove=o=>{if(o.preventDefault(),!this.isDragging)return;let a=o.touches;if(a.length===1){let l=a[0].clientX-this.previousMousePosition.x,c=a[0].clientY-this.previousMousePosition.y;this.cameraAzimuth-=l*.01,this.cameraPolar-=c*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.updateCameraPosition()}else if(a.length===2){let l=this.getPinchDistance(a);if(this.initialPinchDistance>0){let c=l/this.initialPinchDistance;this.cameraRadius=this.initialCameraRadiusOnPinch/c,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()}))}}},this.onTouchEnd=o=>{o.preventDefault(),this.isDragging=!1,this.initialPinchDistance=0;let a=new Date().getTime(),l=a-this.lastTap;if(l<300&&l>0)this.resetCamera();else if(o.changedTouches.length===1){let c=o.changedTouches[0],u=Math.abs(c.clientX-this.touchStartPosition.x),h=Math.abs(c.clientY-this.touchStartPosition.y);if(u<this.dragThreshold&&h<this.dragThreshold){let d=new MouseEvent("click",{clientX:c.clientX,clientY:c.clientY,bubbles:!0,cancelable:!0});this.onClick(d)}}this.lastTap=a},this.animate=()=>{if(this.animationId=requestAnimationFrame(this.animate),this.isZooming){let a=Date.now()-this.zoomStartTime,l=Math.min(a/this.zoomDuration,1),c=1-Math.pow(1-l,5);this.camera.position.lerpVectors(this.initialCameraPosition,this.targetCameraPosition,c),this.cameraTarget.lerpVectors(this.initialCameraTarget,this.targetCameraTarget,c),this.camera.lookAt(this.cameraTarget),l>=1&&(this.isZooming=!1)}this.animateLeaves(),this.renderer.render(this.scene,this.camera),this.syncPanel()},this.onWindowResize=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}ngOnInit(){if(Os(this.platformId)){this.initThree(),this.animate();let t=new Fo;t.load("assets/audio/classical_ambient.mp3",r=>{this.ambientSound=new yr(this.listener),this.ambientSound.setBuffer(r),this.ambientSound.setLoop(!0),this.ambientSound.setVolume(.5),this.ambientSound.play()}),t.load("assets/audio/mouse_click.mp3",r=>{this.clickSound=new yr(this.listener),this.clickSound.setBuffer(r),this.clickSound.setVolume(.7)}),t.load("assets/audio/zoom_effect.mp3",r=>{this.zoomSound=new yr(this.listener),this.zoomSound.setBuffer(r),this.zoomSound.setVolume(.7)});let n=this.canvasRef.nativeElement;n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("mousemove",this.onMouseMove),n.addEventListener("click",this.onClick),n.addEventListener("mouseleave",this.onMouseLeave),n.addEventListener("wheel",this.onMouseWheel,{passive:!1}),n.addEventListener("touchstart",this.onTouchStart,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove,{passive:!1}),n.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("resize",this.onWindowResize),this.sceneControlService.zoomRequest$.subscribe(r=>{typeof r=="string"&&r==="screen"?this.zoomToScreen():r instanceof Qt&&this.zoomOnObject(r)}),this.sceneControlService.cameraResetRequest$.subscribe(()=>{this.resetCamera(),this.syncService.updatePanelState({visible:!1,transform:""})})}}ngOnDestroy(){if(Os(this.platformId)){cancelAnimationFrame(this.animationId);let t=this.canvasRef.nativeElement;this.ambientSound&&this.ambientSound.stop(),this.clickSound&&this.clickSound.stop(),this.zoomSound&&this.zoomSound.stop(),this.listener&&this.listener.context.close(),window.removeEventListener("resize",this.onWindowResize),t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("click",this.onClick),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("wheel",this.onMouseWheel),t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),t.removeEventListener("touchend",this.onTouchEnd)}}zoomOnObject(t){if(this.isZooming)return;this.isZooming=!0,this.zoomStartTime=Date.now(),this.initialCameraPosition.copy(this.camera.position),this.initialCameraTarget.copy(this.cameraTarget);let n=new L;t.getWorldPosition(n),this.targetCameraTarget.copy(n);let r=new L(0,0,-4);r.applyQuaternion(t.quaternion),this.targetCameraPosition.copy(n).add(r)}zoomToScreen(){this.zoomOnObject(this.screenPanel)}resetCamera(){this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.cameraTarget.set(0,1.5,0),this.updateCameraPosition()}getPinchDistance(t){let n=t[0].clientX-t[1].clientX,r=t[0].clientY-t[1].clientY;return Math.sqrt(n*n+r*r)}updateCameraPosition(){let t=this.cameraTarget.x+this.cameraRadius*Math.sin(this.cameraPolar)*Math.sin(this.cameraAzimuth),n=this.cameraTarget.y+this.cameraRadius*Math.cos(this.cameraPolar),r=this.cameraTarget.z+this.cameraRadius*Math.sin(this.cameraPolar)*Math.cos(this.cameraAzimuth);this.camera.position.set(t,n,r),this.camera.lookAt(this.cameraTarget)}initThree(){this.signPanels=[];let t=this.canvasRef.nativeElement;this.scene=new Eo,this.addSky(),this.addTrees(),this.addBahnhofLampPost(),this.camera=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),this.listener=new Uo,this.camera.add(this.listener),this.updateCameraPosition(),this.addTrainTracks(),this.addTrain(),this.addPlatformDetails(),this.addPlatformRoof(),this.renderer=new Ec({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dl;let n=new Po(4210768,526368,1.3);this.scene.add(n);let r=new Oo(4214880,1.8);r.position.set(10,15,10),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,this.scene.add(r),this.addAwningLights(),this.addPlatformLights(),this.addStreetLights();let s=new te(new sn(30,30),new Te({color:3355460,emissive:34,emissiveIntensity:.5}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.createMainBuilding(),this.createScreenPanel(),this.addCharacters(),this.addMenuBoard(),this.addTableDetails(),this.addBusStop(),this.addBus()}syncPanel(){if(!this.screenPanel)return;let t=new L;this.screenPanel.getWorldPosition(t);let n=t.project(this.camera),r=(n.x*.5+.5)*this.canvasRef.nativeElement.clientWidth,s=(n.y*-.5+.5)*this.canvasRef.nativeElement.clientHeight;this.isZooming||this.camera.position.distanceTo(this.screenPanel.position)<5?n.z<1?this.syncService.updatePanelState({visible:!0,transform:`translate(-50%, -50%) translate(${r}px, ${s}px)`}):this.syncService.updatePanelState({visible:!1,transform:""}):this.syncService.updatePanelState({visible:!1,transform:""})}createScreenPanel(){let t=new sn(8,5),n=new rn({visible:!1});this.screenPanel=new te(t,n),this.screenPanel.position.set(0,1.5,-2.04),this.scene.add(this.screenPanel)}addBus(){let t=new St,n=new Te({color:21922,metalness:.7,roughness:.4}),r=new Te({color:16777215,metalness:.2,roughness:.1,transparent:!0,opacity:.3}),s=new Te({color:2236962,metalness:.1}),o=new te(new Xe(8,2.5,2.2),n);o.position.y=1.5,o.castShadow=!1,t.add(o);let a=new Lt(.5,.5,.3,32);a.rotateX(Math.PI/2),[-2.5,2.5].forEach(w=>{[-1.1,1.1].forEach(S=>{let M=new te(a,s);M.position.set(w,.5,S),t.add(M)})});let c=new te(new Xe(6,1.2,.1),r);c.position.set(0,2,1.1),t.add(c);let u=c.clone();u.position.z=-1.1,t.add(u);let h=new te(new Xe(.1,1.2,2),r);h.position.set(3.95,2,0),h.rotation.y=Math.PI/12,t.add(h),[-.8,.8].forEach(w=>{let S=new te(new Lt(.2,.15,.1),new Te({color:16777215,emissive:16777215,emissiveIntensity:1.5}));S.position.set(3.95,1,w),S.rotation.z=Math.PI/2,t.add(S);let M=new ps(16777215,4,20,Math.PI/5,.5,2);M.position.set(4,1,w),M.target.position.set(10,1,w),t.add(M),t.add(M.target)});let d=this.createBusNumberTexture(),m=new rn({map:d}),g=new te(new sn(1,.4),m);g.position.set(4.01,2.5,0),g.rotation.y=Math.PI/2,t.add(g);let y=this.createRMVLogoTexture(),p=new rn({map:y,transparent:!0}),f=new te(new sn(1.5,.5),p);f.position.set(-1,1.5,1.11),t.add(f),t.position.set(10,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusNumberTexture(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height),n.font='bold 45px "Courier New", Courier, monospace',n.fillStyle="#FFA500",n.textAlign="center",n.textBaseline="middle",n.fillText("801",t.width/2,t.height/2);let r=new Qn(t);return r.needsUpdate=!0,r}createRMVLogoTexture(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.fillStyle="#D9000D",n.fillRect(20,20,60,88),n.fillStyle="#009650",n.fillRect(90,20,60,88),n.fillStyle="#006AB3",n.fillRect(160,20,60,88),n.font="bold 80px sans-serif",n.fillStyle="black",n.textAlign="left",n.textBaseline="middle",n.fillText("RMV",250,t.height/2);let r=new Qn(t);return r.needsUpdate=!0,r}addBusStop(){let t=new St,n=new Te({color:4473924,metalness:.9,roughness:.5}),r=new Te({color:16777215,metalness:.1,roughness:.1,transparent:!0,opacity:.2}),s=new te(new Xe(4,.1,2),n);s.position.y=2.5,s.castShadow=!0,t.add(s);let o=new te(new Xe(4,2.4,.05),r);o.position.set(0,1.25,-.9),t.add(o);let a=new te(new Xe(.05,2.4,2),r);a.position.set(-1.95,1.25,0),t.add(a);let l=16767129,c=new vi(l,3,8,2);c.position.set(0,2.4,-.4),c.castShadow=!0,t.add(c);let u=new te(new Xe(1.5,.05,.2),new Te({color:3355443,emissive:l,emissiveIntensity:1}));u.position.copy(c.position),t.add(u);let h=this.createBench();h.scale.set(.8,.8,.8),h.position.set(0,.2,-.5),t.add(h);let d=new te(new Lt(.05,.05,3,16),n);d.position.set(2.5,1.5,0),d.castShadow=!0,t.add(d);let m=new fs(.4,32),g=this.createBusSignTexture(),y=new rn({map:g}),p=new te(m,y);p.position.set(2.5,3.2,0),t.add(p);let f=this.createBusSignTexture(!0),w=new rn({map:f}),S=new te(m,w);S.position.copy(p.position),S.rotation.y=Math.PI,t.add(S),t.position.set(14,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusSignTexture(t=!1){let n=document.createElement("canvas");n.width=256,n.height=256;let r=n.getContext("2d");r.fillStyle="#FFD700",r.beginPath(),r.arc(128,128,128,0,Math.PI*2),r.fill(),r.strokeStyle="black",r.lineWidth=20,r.beginPath(),r.arc(128,128,118,0,Math.PI*2),r.stroke(),t&&(r.translate(n.width,0),r.scale(-1,1)),r.font="bold 150px sans-serif",r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",r.fillText("H",128,128);let s=new Qn(n);return s.needsUpdate=!0,s}createMainBuilding(){let t=new St,n=new Te({color:9132587}),r=new te(new Xe(6,4,.1),n);r.position.set(0,2,-2),r.castShadow=!0,r.receiveShadow=!0,t.add(r);let s=new te(new Xe(.1,4,4),n);s.position.set(3,2,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new te(new Co(4.5,2,4),new Te({color:5967374}));o.rotation.y=Math.PI/4,o.position.y=5,o.castShadow=!0,t.add(o);let a=new te(new sn(5.8,3.8),new Te({color:13808780}));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,t.add(a);let l=new te(new Xe(3,1,.8),new Te({color:9127187}));l.position.set(0,.5,1.8),l.castShadow=!0,l.receiveShadow=!0,t.add(l);let c=6,u=1.5,h=.1,d=new Xe(c,h,u),m=new Te({color:16777215,transparent:!0,opacity:.5,metalness:.2,roughness:.4}),g=new te(d,m);g.position.set(0,3.2,2+u/2),g.rotation.x=Math.PI/10,g.castShadow=!0,g.receiveShadow=!0,t.add(g);let y=new Lt(.05,.05,3.2),p=new Te({color:13421772,metalness:.9}),f=new te(y,p);f.position.set(-c/2+.1,1.6,2.3),f.castShadow=!0,t.add(f);let w=new te(y,p);w.position.set(c/2-.1,1.6,2.3),w.castShadow=!0,t.add(w);let S=new te(new Lt(.7,.7,.1,16),new Te({color:7032635}));S.position.set(0,1,0),S.castShadow=!0,S.receiveShadow=!0,t.add(S);let M=new Te({color:6636321});[-.8,.8].forEach(X=>{let H=new te(new Xe(.4,.4,.4),M);H.position.set(X,.2,0),H.castShadow=!0,H.receiveShadow=!0,t.add(H)});let D=new Lt(.05,.05,.3,16);[16711680,65280].forEach((X,H)=>{let J=new te(D,new Te({color:X}));J.position.set(H===0?-.2:.2,1.15,H===0?-.1:.2),J.castShadow=!0,t.add(J)});for(let X=0;X<5;X++){let H=new te(new Xe(.05,.01,.01),new Te({color:16776960}));H.position.set(-.1+X*.05,1.16,0),H.castShadow=!0,t.add(H)}let C=new te(new Xe(.5,1.5,.3),new Te({color:3355443}));C.position.set(2.7,1,1.6),C.castShadow=!0,t.add(C);let T=new Te({color:8900331,transparent:!0,opacity:.5,roughness:.1,metalness:.9}),I=new Te({color:4473924}),b=()=>{let X=new St,H=new te(new sn(1,1.2),T);X.add(H);let J=new te(new Xe(1.1,.05,.1),I);J.position.y=.6,X.add(J);let G=J.clone();G.position.y=-.6,X.add(G);let oe=new te(new Xe(.05,1.2,.1),I);oe.position.x=-.5,X.add(oe);let fe=oe.clone();return fe.position.x=.5,X.add(fe),X},x=b();x.position.set(-1.5,2.5,-1.95),t.add(x);let R=b();R.position.set(1.5,2.5,-1.95),t.add(R);let z=new Te({color:6044193}),k=new te(new Xe(.1,2,1),z);k.position.set(2.95,1,-.5),t.add(k);let j=new te(new Gn(.05,8,8),new Te({color:16766720,metalness:1}));j.position.set(2.85,1,-.2),t.add(j),this.scene.add(t)}addCharacters(){let t=new Te({color:2003199}),n=()=>{let o=new St,a=new te(new Xe(.5,.8,.3),t);a.castShadow=!0,o.add(a);let l=new te(new Xe(.3,.3,.3),t);return l.position.y=.6,l.castShadow=!0,o.add(l),o},r=n();r.position.set(-.8,.8,0),this.scene.add(r);let s=n();s.position.set(.8,.8,0),s.rotation.y=Math.PI,this.scene.add(s)}addMenuBoard(){let t=new St,n=new Te({color:2236962,metalness:.9,roughness:.4}),r=new te(new Lt(.8,.8,.05,32),n);r.castShadow=!0,t.add(r);let s=new te(new Lt(.08,.08,1.5,16),n);s.position.y=.75,s.castShadow=!0,t.add(s);let o=new St;o.position.y=1.5+.9,o.rotation.x=-Math.PI/12,t.add(o);let a=new te(new Xe(2.5,1.8,.08),n);a.castShadow=!0,o.add(a);let l=new Te({color:0,emissive:1118481,emissiveIntensity:1.5}),c=new te(new sn(2.4,1.7),l);c.position.z=.045,o.add(c);let u=[{label:"Profil",text:"About Me"},{label:"Daten",text:"Data"},{label:"Skills",text:"Skills"},{label:"SoftSkills",text:"Soft Skills"},{label:"Projekte",text:"Projects"},{label:"Akademisch",text:"Academic"},{label:"Sprachen",text:"Languages"},{label:"Erfahrung",text:"Experience"}],h=.18,d=.02,g=(u.length*(h+d)-d)/2-h/2;u.forEach((y,p)=>{let f=C=>{let T=document.createElement("canvas");T.width=512,T.height=64;let I=T.getContext("2d");I.fillStyle="#1a1a1a",I.fillRect(0,0,T.width,T.height),I.font="bold 40px sans-serif",I.fillStyle="#00bfff",I.textAlign="center",I.textBaseline="middle",I.fillText(C,T.width/2,T.height/2);let b=new Qn(T);return b.needsUpdate=!0,b},w=new sn(2.2,h),S=new rn({map:f(y.text),transparent:!0}),M=new te(w,S),D=g-p*(h+d);M.position.set(0,D,.05),o.add(M),this.signPanels.push({mesh:M,label:y.label})}),t.position.set(4.3,0,2.2),t.scale.set(.8,.8,.8),this.scene.add(t)}addTableDetails(){let t=new Te({color:15658734,roughness:.3}),n=new Lt(.08,.1,.15,16),r=new Te({color:13421772,roughness:.3}),s=new Lt(.15,.15,.02,16),o=new te(n,t);o.position.set(-.2,1.08,.1),this.scene.add(o);let a=new te(s,r);a.position.set(.2,1.01,-.1),this.scene.add(a)}addAwningLights(){let t=new St,n=16767129,r=9,s=8,o=2,a=[-2,0,2];for(let l of a){let c=new vi(n,r,s,o);c.position.set(l,3,2.5),c.castShadow=!0,t.add(c);let u=new te(new Gn(.1,8,8),new Te({color:5592405,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addPlatformLights(){let t=new St,n=16767129,r=4,s=8,o=2,a=[-7,0,7];for(let l of a){let c=new vi(n,r,s,o);c.position.set(-12.5,3.2,l),c.castShadow=!0,t.add(c);let u=new te(new Xe(.2,.1,.2),new Te({color:3355443,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addStreetLights(){let t=[new L(12,0,12),new L(12,0,-12),new L(-10,0,12),new L(-10,0,-12)],n=new Te({color:3355443,metalness:.8}),r=new Te({color:16777215,emissive:16767129,emissiveIntensity:2}),s=o=>{let a=new St,l=new Lt(.1,.15,4,16),c=new te(l,n);c.position.y=2,c.castShadow=!0,a.add(c);let u=new Xe(1,.1,.1),h=new te(u,n);h.position.set(.5,4,0),h.castShadow=!0,a.add(h);let d=new Gn(.2,16,16),m=new te(d,r);m.position.set(1,3.8,0),a.add(m);let g=new vi(16767129,7.5,15,2);g.position.copy(m.position),g.castShadow=!0,a.add(g),a.position.copy(o),a.rotation.y=Math.atan2(o.x,o.z)+Math.PI,this.scene.add(a)};t.forEach(o=>s(o))}addTrainTracks(){let t=new St,n=new Xe(3,.2,15),r=new Te({color:8947848}),s=new te(n,r);s.position.set(-12.5,.1,0),s.receiveShadow=!0,t.add(s);let o=new Xe(.2,.05,2),a=new Te({color:7032635});for(let d=-15;d<15;d+=.8){let m=new te(o,a);m.position.set(-14.5,.05,d),m.receiveShadow=!0,t.add(m)}let l=new Xe(.08,.08,30),c=new Te({color:4473924,metalness:.8,roughness:.5}),u=new te(l,c);u.position.set(-14.2,.12,0),u.castShadow=!0,t.add(u);let h=new te(l,c);h.position.set(-14.8,.12,0),h.castShadow=!0,t.add(h),this.scene.add(t)}addTrain(){let t=new St;t.position.set(-14.5,.35,0),t.rotation.y=Math.PI/2;let n=14360358,r=new Te({color:n,metalness:.8,roughness:.4}),s=new Te({color:13421772,metalness:.6,roughness:.5}),o=new Te({color:3355443,metalness:.9,roughness:.8}),a=new Te({color:1118481,metalness:1,roughness:.2}),l=new Lt(.25,.25,1.2,16);l.rotateX(Math.PI/2);let c=new St,u=new te(new Xe(4,1.2,1),r);u.position.y=.6,u.castShadow=!0,c.add(u);let h=this.createDBLogoTexture(),d=new rn({map:h,transparent:!0}),m=new te(new sn(.8,.8),d);m.position.set(0,.7,.51),c.add(m);let g=new te(new Xe(1.5,.8,1),new Te({color:4473924}));g.position.set(-1.25,1.4,0),g.castShadow=!0,c.add(g);let y=new te(new Xe(.05,.5,.8),a);y.position.set(-1.95,1.4,0),c.add(y);let p=new te(new Lt(.15,.1,.1),new Te({color:16777215,emissive:16777215,emissiveIntensity:2}));p.position.set(-2,.8,0),p.rotation.z=Math.PI/2,c.add(p);let f=new ps(16777215,5,20,Math.PI/6,.5,2);f.position.set(-2,.8,0),f.target.position.set(-10,.8,0),c.add(f),c.add(f.target);for(let T=0;T<2;T++){let I=new te(l,o);I.position.set(-1+T*2,0,0),c.add(I)}c.position.x=-10,t.add(c);let w=5,S=1.1,M=1.4,D=.5,C=-10+4/2+D+w/2;for(let T=0;T<2;T++){let I=new St,b=new te(new Xe(w,M,S),s);b.position.y=.7,b.castShadow=!0,I.add(b);for(let x=-1;x<=1;x+=2)for(let R=-1.5;R<=1.5;R+=1){let z=new te(new Xe(.8,.5,.05),a);z.position.set(R,.9,S/2*x),I.add(z)}for(let x=0;x<2;x++){let R=new te(l,o);R.position.set(-1.5+x*3,0,0),I.add(R)}I.position.x=C,t.add(I),C+=w+D}this.scene.add(t)}createDBLogoTexture(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.font="bold 180px sans-serif",n.fillStyle="#DB1F26",n.textAlign="center",n.textBaseline="middle",n.fillText("DB",t.width/2,t.height/2);let r=new Qn(t);return r.needsUpdate=!0,r}createBench(){let t=new St,n=new Te({color:8411718}),r=new te(new Xe(2,.1,.4),n);r.position.y=.5,r.castShadow=!0,t.add(r);let s=new te(new Xe(2,.5,.1),n);s.position.set(0,.8,-.15),s.castShadow=!0,t.add(s);let o=new te(new Xe(.1,.5,.4),n);o.position.set(-.9,.25,0),o.castShadow=!0,t.add(o);let a=o.clone();return a.position.x=.9,t.add(a),t}addPlatformDetails(){let t=this.createBench();t.position.set(-12.2,.2,-4),t.rotation.y=-Math.PI/2,this.scene.add(t);let n=this.createBench();n.position.set(-12.2,.2,4),n.rotation.y=-Math.PI/2,this.scene.add(n)}addPlatformRoof(){let t=new St,n=new Te({color:6710886,metalness:.5}),r=new Te({color:5592405,metalness:.8}),s=new te(new Xe(4,.2,16),n);s.position.set(-12.5,3.5,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new Lt(.1,.1,3.3,16),a=[-6,0,6];for(let l of a){let c=new te(o,r);c.position.set(-11.5,1.85,l),c.castShadow=!0,t.add(c);let u=new te(o,r);u.position.set(-13.5,1.85,l),u.castShadow=!0,t.add(u)}this.scene.add(t)}addTrees(){let t=new St,n=new Lt(.1,.1,1),r=new Te({color:9132587}),s=new Gn(.5,8,8),o=new Te({color:2263842});[[-5,.5,-5],[5,.5,-5],[5,.5,5]].forEach(l=>{let c=new te(n,r);c.position.set(l[0],l[1]/2,l[2]);let u=new te(s,o);u.position.set(l[0],l[1]+.5,l[2]),t.add(c),t.add(u)}),this.scene.add(t)}animateLeaves(){let t=Date.now()*.001;this.scene.traverse(n=>{if(n instanceof te&&n.geometry instanceof Gn&&!Array.isArray(n.material)){let r=n.material;r.color&&r.color.getHex()===2263842&&(n.position.x+=Math.sin(t+n.position.z)*.001,n.position.z+=Math.cos(t+n.position.x)*.001)}})}addSky(){let t=new Gn(100,32,32),n=new bn({uniforms:{},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(vec3(0.0, 0.0, 0.0), vec3(0.05, 0.0, 0.1), smoothstep(0.0, 0.5, h)), 1.0);
        }
      `,side:en,depthWrite:!1}),r=new te(t,n);this.scene.add(r)}addBahnhofLampPost(){let t=new St,n=new te(new Lt(.08,.08,5,16),new Te({color:2236962,metalness:1}));n.position.y=2.5,t.add(n);let r=new Io().load("assets/clock-bahnhof.jpg"),s=new rn({map:r,side:On}),o=new te(new fs(.5,32),s);o.position.set(0,3.8,.48),t.add(o);let a=new te(new Xe(.05,.05,.5),new Te({color:4473924}));a.position.set(0,3.8,.25),t.add(a);let l=.5;[-.25,.25].forEach(d=>{let m=new te(new Lt(.015,.015,l),new Te({color:8947848}));m.rotation.z=Math.PI/2,m.position.set(d,4.6,0),t.add(m);let g=new te(new Lt(.01,.01,.2),new Te({color:3355443}));g.position.set(d+(d>0?l/2:-l/2),4.5,0),t.add(g);let y=new te(new Gn(.15,16,16),new Te({color:16777164,emissive:16764040,emissiveIntensity:.9}));y.position.set(d+(d>0?l/2:-l/2),4.3,0),t.add(y);let p=new vi(16764040,.6,6);p.position.copy(y.position),t.add(p)});let c=["Profil","Daten","Skills","SoftSkills","Projekte","Akademisch","Sprachen","Erfahrung"],u=[Math.PI/2,Math.PI/3,-Math.PI/2,-Math.PI/3,0,Math.PI/4,-Math.PI/4,Math.PI],h=(d,m=!1)=>{let g=document.createElement("canvas");g.width=512,g.height=128;let y=g.getContext("2d");y.fillStyle="#ffffff",y.fillRect(0,0,g.width,g.height),y.font="bold 48px sans-serif",y.textAlign="center",y.textBaseline="middle",y.fillStyle="#000000",m&&(y.translate(g.width,0),y.scale(-1,1)),y.fillText(d,g.width/2,g.height/2);let p=new Qn(g);return p.needsUpdate=!0,p};c.forEach((d,m)=>{let g=new sn(1.4,.3),y=new rn({map:h(d),side:Dn}),p=new rn({map:h(d,!0),side:Dn}),f=new te(g,y);f.position.set(0,3.3-m*.4,0),f.rotation.y=u[m],f.translateX(.7),t.add(f);let w=new te(g,p);w.position.copy(f.position),w.rotation.copy(f.rotation),w.rotateY(Math.PI),t.add(w),this.signPanels.push({mesh:f,label:d})}),t.position.set(-5.5,0,5),this.scene.add(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(fn),Ue(Xr),Ue(kt),Ue(Cc))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-three-scene"]],viewQuery:function(n,r){if(n&1&&Jd(Dw,7),n&2){let s;Hc(s=Gc())&&(r.canvasRef=s.first)}},standalone:!0,features:[Ct],decls:2,vars:0,consts:[["canvas",""],[2,"cursor","grab"]],template:function(n,r){n&1&&ge(0,"canvas",1,0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100vh;display:block}"]})}}return i})();var Gg=(()=>{class i{constructor(t,n,r,s){this.languageService=t,this.sceneControlService=n,this.router=r,this.http=s,this.currentLanguage="de",this.platformId=Ie(fn),this.conversationHistory=[],this.qaRules=[{keywords:{de:["hallo","guten tag","hey","bonjour"],en:["hello","hi","hey"]},answer:{de:"Hallo! Ich bin der virtuelle Avatar von Danielou. Fragen Sie mich alles \xFCber sein Profil.",en:"Hello! I am Danielou's virtual avatar. Ask me anything about his profile."}},{keywords:{de:["verf\xFCgbarkeit","anfangen","starttermin","eintrittsdatum"],en:["availability","start date","when can you start"]},answer:{de:"Ich schlie\xDFe mein Studium in K\xFCrze ab und bin daher flexibel. F\xFCr eine Vollzeitstelle stehe ich ab dem 01.01.2026 zur Verf\xFCgung.",en:"I am finishing my studies soon and am therefore flexible. I will be available for a full-time position from January 1st, 2026."}},{keywords:{de:["warum sie","einstellen","nicht andere","vorteile","sollen wir sie","unterscheidet sie"],en:["why you","hire","advantages","what sets you apart"]},answer:{de:"Ich glaube, meine St\xE4rke liegt in der Kombination aus soliden technischen F\xE4higkeiten in C++ und Java, meiner praktischen Industrieerfahrung und meiner gro\xDFen Lernbereitschaft. Ich entwickle nicht nur Code, sondern robuste und durchdachte L\xF6sungen f\xFCr komplexe Probleme.",en:"I believe my strength lies in the combination of solid technical skills in C++ and Java, my practical industry experience, and my strong willingness to learn. I don't just write code; I develop robust and well-thought-out solutions for complex problems."}},{keywords:{de:["schw\xE4chen","nachteile"],en:["weakness","weaknesses"]},answer:{de:"Meine gr\xF6\xDFte Schw\xE4che ist wahrscheinlich meine Ungeduld, wenn es darum geht, Probleme zu l\xF6sen. Ich habe jedoch gelernt, dies in eine St\xE4rke umzuwandeln, indem ich diese Energie in eine gr\xFCndliche und strukturierte Analyse lenke, um die beste L\xF6sung zu finden, nicht nur die schnellste.",en:"My biggest weakness is probably my impatience when it comes to solving problems. However, I've learned to turn this into a strength by channeling that energy into thorough and structured analysis to find the best solution, not just the fastest one."}},{keywords:{de:["mensch","person","pers\xF6nlichkeit","\xFCber ihre person","\xFCber dich erz\xE4hlen","beschreiben sie sich"],en:["person","personality","describe yourself","tell me about yourself"]},answer:{de:"Als Mensch bin ich neugierig, aufgeschlossen und zielstrebig. Ich gehe gerne auf Leute zu und glaube, dass man durch Teamarbeit und offene Kommunikation die besten Ergebnisse erzielt. In meiner Freizeit lerne ich st\xE4ndig dazu, sei es durch Lesen oder kleine Programmierprojekte.",en:"As a person, I am curious, open-minded, and determined. I enjoy approaching people and believe that teamwork and open communication yield the best results. In my free time, I am constantly learning, whether through reading or small programming projects."}},{keywords:{de:["wo arbeiten sie","arbeitgeber","jetzige position"],en:["where do you work","current employer"]},answer:{de:"Derzeit unterst\xFCtze ich die Forschung und Entwicklung an der Technischen Hochschule Mittelhessen und arbeite als Dolmetscher f\xFCr das BAMF. Im Sommer 2025 ist zudem ein Praktikum bei der Schunk Group geplant. M\xF6chten Sie mehr \xFCber meine Berufserfahrung erfahren?",en:"I currently support research and development at the THM and work as an interpreter for the BAMF. An internship at the Schunk Group is also planned for summer 2025. Would you like to know more about my work experience?"},navigationTarget:"erfahrung"},{keywords:{de:["erfahrung","berufserfahrung","arbeit","werdegang","karriere","laufbahn"],en:["experience","experiences","work","career","background"]},answer:{de:"Ich habe praktische Erfahrungen in der Softwareentwicklung bei Continental und der THM sowie als Dolmetscher gesammelt. Diese diversen Rollen haben meine technischen F\xE4higkeiten und meine Kommunikationsst\xE4rke verbessert. Soll ich Sie zu diesem Abschnitt f\xFChren?",en:"I have gained practical experience in software development at Continental and THM, as well as an interpreter. These diverse roles have improved my technical abilities and communication skills. Shall I guide you to that section?"},navigationTarget:"erfahrung"},{keywords:{de:["studium","akademisch","bildung","hochschule","schulabschluss","ausbildung","qualifikationen"],en:["education","academic","university","college","degree","qualifications"]},answer:{de:"Ich absolviere derzeit meinen Bachelor in Ingenieur-Informatik an der Technischen Hochschule Mittelhessen. Mein Abitur mit Schwerpunkt Naturwissenschaften habe ich in Kamerun gemacht. Soll ich Ihnen meinen akademischen Werdegang zeigen?",en:"I am currently completing my Bachelor's in Engineering & Computer Science at the THM - University of Applied Sciences. I completed my high school diploma in Cameroon with a focus on science. Shall I show you my academic journey?"},navigationTarget:"akademisch"},{keywords:{de:["projekte","portfolio","eigene arbeiten"],en:["projects","portfolio","personal projects"]},answer:{de:"Ich habe an mehreren spannenden Projekten gearbeitet, darunter ein SmartLab System mit STM32 und MQTT und ein ExamBuilder in Java mit Gemini API. M\xF6chten Sie die Projektdetails sehen?",en:"I have worked on several exciting projects, including a SmartLab System with STM32 and MQTT, and an ExamBuilder in Java with Gemini API integration. Would you like to see the project details?"},navigationTarget:"projekte"},{keywords:{de:["kompetenzen","skills","f\xE4higkeiten","technologien","c++","java","python","kenntnisse","wissen"],en:["skills","competencies","technologies","c++","java","python","knowledge"]},answer:{de:"Meine Kernkompetenzen liegen in C++ und Java. Ich habe auch Erfahrung mit Python, SQL, Web-Technologien und Embedded-Protokollen wie I2C und SPI. Wollen Sie eine detaillierte \xDCbersicht?",en:"My core competencies are in C++ and Java. I also have experience with Python, SQL, web technologies, and embedded protocols like I2C and SPI. Would you like a detailed overview?"},navigationTarget:"skills"},{keywords:{de:["soft skills","st\xE4rken"],en:["soft skills","strengths"]},answer:{de:"Ich sehe meine St\xE4rken in meiner ausgepr\xE4gten Lernbereitschaft, meiner Teamf\xE4higkeit und meinem kritischen Denken. Ich \xFCbernehme gerne Verantwortung und kommuniziere effektiv.",en:"I see my strengths in my strong willingness to learn, my ability to work in a team, and my critical thinking. I like to take responsibility and communicate effectively."}},{keywords:{de:["f\xFChrerschein","mobil","auto"],en:["driving license","driver's license","mobile","car"]},answer:{de:"Ja, ich besitze einen F\xFChrerschein der Klasse B. Das macht mich mobil und flexibel f\xFCr berufliche Termine und Reisen.",en:"Yes, I have a Class B driver's license. This makes me mobile and flexible for work-related appointments and travel."}},{keywords:{de:["sprachen"],en:["languages"]},answer:{de:"Meine Muttersprache ist Franz\xF6sisch. Au\xDFerdem spreche ich flie\xDFend Deutsch (C1) und Englisch (B2).",en:"My native language is French. I also speak fluent German (C1) and English (B2)."},navigationTarget:"sprachen"},{keywords:{de:["hobbys","freizeit"],en:["hobbies","free time"]},answer:{de:"In meiner Freizeit lese ich gerne, spiele Fu\xDFball und nat\xFCrlich programmiere ich auch an eigenen kleinen Projekten.",en:"In my free time, I enjoy reading, playing soccer, and of course, programming my own small projects."}},{keywords:{de:["kinder","familie"],en:["children","family"]},answer:{de:"Ja, ich habe eine wundervolle kleine Tochter, die meine Tage erhellt.",en:"Yes, I have a wonderful little girl who brightens up my days."}},{keywords:{de:["email","telefon","kontakt"],en:["email","phone","contact"]},answer:{de:"Meine Kontaktdaten finden Sie im entsprechenden Bereich des Portfolios. Aus Datenschutzgr\xFCnden gebe ich sie hier im Chat nicht direkt weiter.",en:"You can find my contact details in the dedicated section of the portfolio. For privacy reasons, I do not provide them directly here in the chat."}}],this.defaultAnswers={de:"Entschuldigung, ich kann diese Frage im Moment nicht beantworten. F\xFCr weitere Unterst\xFCtzung k\xF6nnen Sie gerne auf das E-Mail-Symbol links neben dem Chat klicken, um mir direkt eine Nachricht zu senden.",en:"That is an interesting question. It would be best to discuss that with me directly. In the meantime, can I help you with another topic?"},this.langSub=this.languageService.language$.subscribe(o=>{this.currentLanguage=o})}ngOnDestroy(){this.langSub.unsubscribe()}triggerNavigation(t){this.router.navigate([`/${t.toLowerCase()}`]),this.sceneControlService.requestZoom("screen")}resetHistory(){this.conversationHistory=[]}normalizeQuestion(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim()}matchesKeyword(t,n){let r=n.replace(/[.*+?^${}()|[\\]/g,"\\$&");return new RegExp(`${r}`,"i").test(t)}getAnswerFromRules(t){let n=this.normalizeQuestion(t);console.log(`--- New Question ---
`),console.log(`Normalized Question: "${n}"
`),console.log(`Language: ${this.currentLanguage}
`);for(let r of this.qaRules){let o=(r.keywords[this.currentLanguage]||r.keywords.de).find(a=>this.matchesKeyword(n,a));if(o)return console.log(`SUCCESS: Matched keyword "${o}" for rule with answer: "${r.answer[this.currentLanguage].substring(0,20)}"...
`),{text:r.answer[this.currentLanguage]||r.answer.de,navigationTarget:r.navigationTarget}}return console.log(`FAILURE: No rule matched. Returning default answer.
`),{text:this.defaultAnswers[this.currentLanguage]||this.defaultAnswers.de}}getAnswer(t){let n="/.netlify/functions/chat";this.conversationHistory.push({role:"user",parts:[{text:t}]});let r={message:t,lang:this.currentLanguage,history:this.conversationHistory};return this.http.post(n,r).pipe(rt(s=>{let o={text:s.reply};return this.conversationHistory.push({role:"model",parts:[{text:s.reply}]}),o}),Si(s=>{console.error("API call to Netlify function failed, falling back to rule-based answers.",s);let o=this.getAnswerFromRules(t);return this.conversationHistory.push({role:"model",parts:[{text:o.text}]}),Ve(o)}))}static{this.\u0275fac=function(n){return new(n||i)(st($t),st(kt),st(Xr),st(Jc))}}static{this.\u0275prov=Ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Ow=(i,e)=>({"user-message":i,"bot-message":e});function Nw(i,e){if(i&1&&(U(0,"div",5),Pe(1),q()),i&2){let t=un();se(),Xt(" ",t.currentPromptMessage," ")}}function Fw(i,e){i&1&&(Fe(),U(0,"svg",6),ge(1,"path",7),q())}function Uw(i,e){i&1&&(Fe(),U(0,"svg",6),ge(1,"path",8),q())}function kw(i,e){i&1&&(U(0,"div",30),ge(1,"img",31),q())}function Bw(i,e){if(i&1){let t=Ps();U(0,"button",32),ct("click",function(){Ti(t);let r=un().$implicit,s=un(2);return Ci(s.handleNavigationClick(r.navigationTarget))}),Pe(1," Zeigen Sie mir den Abschnitt "),q()}}function Vw(i,e){if(i&1&&(U(0,"div",25),Mt(1,kw,2,0,"div",26),U(2,"div",27),ge(3,"span",28),Mt(4,Bw,2,0,"button",29),q()()),i&2){let t=e.$implicit;Ye("ngClass",nf(4,Ow,t.sender==="user",t.sender==="bot")),se(),Ye("ngIf",t.sender==="bot"),se(2),Ye("innerHTML",t.text,As),se(),Ye("ngIf",t.navigationTarget)}}function zw(i,e){i&1&&(U(0,"div",33)(1,"div",30),ge(2,"img",31),q(),U(3,"div",27)(4,"span"),Pe(5,"schreibt..."),q()()())}function Hw(i,e){if(i&1){let t=Ps();U(0,"div",9)(1,"div",10)(2,"div",11),ge(3,"img",12)(4,"span",13),q(),U(5,"div",14)(6,"h3",15),Pe(7,"Danielou M."),q(),U(8,"p",16),Pe(9,"Online"),q()()(),U(10,"div",17),Mt(11,Vw,5,7,"div",18)(12,zw,6,0,"div",19),q(),U(13,"div",20)(14,"input",21),tf("ngModelChange",function(r){Ti(t);let s=un();return ef(s.userInput,r)||(s.userInput=r),Ci(r)}),ct("keyup.enter",function(){Ti(t);let r=un();return Ci(r.sendMessage())}),q(),U(15,"button",22),ct("click",function(){Ti(t);let r=un();return Ci(r.sendMessage())}),Fe(),U(16,"svg",23),ge(17,"path",24),q()()()()}if(i&2){let t=un();se(11),Ye("ngForOf",t.messages),se(),Ye("ngIf",t.showTypingIndicator),se(2),Qd("ngModel",t.userInput)}}var Wg=(()=>{class i{constructor(t,n){this.chatbotService=t,this.platformId=n,this.isOpen=!1,this.messages=[],this.userInput="",this.showTypingIndicator=!1,this.promptMessages=["Hier kannst du mit mir sprechen","Chat with me","Parlez-moi","Hier kannst du texten","Schreiben Sie mir"],this.currentPromptMessage=""}ngOnInit(){if(this.messages.push({sender:"bot",text:"Hallo! Ich bin der virtuelle Avatar von Danielou. Stellen Sie mir gerne Ihre Fragen."}),Os(this.platformId)){let t=0;this.currentPromptMessage=this.promptMessages[t],this.promptInterval=setInterval(()=>{t=(t+1)%this.promptMessages.length,this.currentPromptMessage=this.promptMessages[t]},3e3)}}ngOnDestroy(){this.promptInterval&&clearInterval(this.promptInterval)}toggleChat(){this.isOpen=!this.isOpen}sendMessage(){if(this.userInput.trim()==="")return;let t=this.userInput;this.messages.push({sender:"user",text:t}),this.userInput="",this.showTypingIndicator=!0,this.chatbotService.getAnswer(t).subscribe(n=>{this.messages.push({sender:"bot",text:n.text,navigationTarget:n.navigationTarget}),this.showTypingIndicator=!1},n=>{console.error("Error getting bot response:",n),this.messages.push({sender:"bot",text:"D\xE9sol\xE9, une erreur est survenue lors de la communication avec l'IA."}),this.showTypingIndicator=!1})}handleNavigationClick(t){t&&(this.chatbotService.triggerNavigation(t),this.isOpen=!1)}static{this.\u0275fac=function(n){return new(n||i)(Ue(Gg),Ue(fn))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-chatbot"]],standalone:!0,features:[Ct],decls:6,vars:4,consts:[[1,"chatbot-container"],["class","prompt-message",4,"ngIf"],[1,"chat-toggle-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","class","w-8 h-8",4,"ngIf"],["class","chat-window",4,"ngIf"],[1,"prompt-message"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-8","h-8"],["stroke-linecap","round","stroke-linejoin","round","d","M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"chat-window"],[1,"chat-header"],[1,"avatar-container"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar"],[1,"status-indicator"],[1,"header-info"],[1,"font-bold"],[1,"text-xs"],[1,"chat-body"],["class","message-container",3,"ngClass",4,"ngFor","ngForOf"],["class","message-container bot-message",4,"ngIf"],[1,"chat-footer"],["type","text","placeholder","Stellen Sie Ihre Frage...",1,"chat-input",3,"ngModelChange","keyup.enter","ngModel"],[1,"send-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"],[1,"message-container",3,"ngClass"],["class","avatar-container-small",4,"ngIf"],[1,"message"],[3,"innerHTML"],["class","navigation-button",3,"click",4,"ngIf"],[1,"avatar-container-small"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar-small"],[1,"navigation-button",3,"click"],[1,"message-container","bot-message"]],template:function(n,r){n&1&&(U(0,"div",0),Mt(1,Nw,2,1,"div",1),U(2,"button",2),ct("click",function(){return r.toggleChat()}),Mt(3,Fw,2,0,"svg",3)(4,Uw,2,0,"svg",3),q(),Mt(5,Hw,18,3,"div",4),q()),n&2&&(se(),Ye("ngIf",!r.isOpen),se(2),Ye("ngIf",!r.isOpen),se(),Ye("ngIf",r.isOpen),se(),Ye("ngIf",r.isOpen))},dependencies:[Ut,cf,jt,Lr,Va,Ua,Up,Ku],styles:[".chatbot-container[_ngcontent-%COMP%]{z-index:1000}.prompt-message[_ngcontent-%COMP%]{position:absolute;bottom:80px;right:0;background-color:#2d3748;color:#e2e8f0;padding:.5rem .75rem;border-radius:10px;font-size:.9rem;white-space:nowrap;opacity:0;transform:translateY(10px);animation:_ngcontent-%COMP%_fadeInOut 6s infinite}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:translateY(10px)}10%{opacity:1;transform:translateY(0)}40%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(10px)}to{opacity:0;transform:translateY(10px)}}.chat-toggle-button[_ngcontent-%COMP%]{background-color:#1a202c;color:#cbd5e0;border:1px solid #4a5568;border-radius:50%;width:60px;height:60px;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:all .3s ease;animation:_ngcontent-%COMP%_pulse 2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.chat-toggle-button[_ngcontent-%COMP%]:hover{background-color:#2d3748}.chat-window[_ngcontent-%COMP%]{width:800px;height:500px;max-width:95vw;max-height:80vh;background-color:#1a202c;border-radius:15px;box-shadow:0 10px 15px #0003;display:flex;flex-direction:column;overflow:hidden;border:1px solid #4a5568}@media (max-width: 850px){.chat-window[_ngcontent-%COMP%]{width:95vw;height:90vh;border-radius:10px}}.chat-header[_ngcontent-%COMP%]{padding:1rem;background-color:#2d3748;display:flex;align-items:center;gap:.75rem;color:#e2e8f0}.avatar-container[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;border:2px solid #718096}.status-indicator[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:10px;height:10px;background-color:#48bb78;border-radius:50%;border:2px solid #2d3748}.header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#a0aec0}.chat-body[_ngcontent-%COMP%]{flex-grow:1;padding:1rem;overflow-y:auto;display:flex;flex-direction:column;gap:.75rem;color:#e2e8f0}.message-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0;max-width:85%}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0;max-width:85%}.bot-message[_ngcontent-%COMP%]{align-self:flex-start}.user-message[_ngcontent-%COMP%]{align-self:flex-end}.message[_ngcontent-%COMP%]{padding:.75rem;border-radius:15px;line-height:1.4}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0}.navigation-button[_ngcontent-%COMP%]{display:block;margin-top:.75rem;padding:.5rem .75rem;background-color:#4a5568;color:#e2e8f0;border:none;border-radius:10px;cursor:pointer;font-size:.8rem;font-weight:700;transition:background-color .2s ease}.navigation-button[_ngcontent-%COMP%]:hover{background-color:#718096}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0}.avatar-small[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;flex-shrink:0}.chat-footer[_ngcontent-%COMP%]{display:flex;padding:.75rem;background-color:#2d3748;border-top:1px solid #4a5568}.chat-input[_ngcontent-%COMP%]{flex-grow:1;background-color:#1a202c;border:1px solid #4a5568;border-radius:20px;padding:.5rem 1rem;color:#e2e8f0;outline:none}.chat-input[_ngcontent-%COMP%]::placeholder{color:#718096}.send-button[_ngcontent-%COMP%]{background:none;border:none;color:#a0aec0;cursor:pointer;padding:.5rem;margin-left:.5rem}.send-button[_ngcontent-%COMP%]:hover{color:#e2e8f0}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#1a202c}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#4a5568;border-radius:4px}"]})}}return i})();var Xg=(()=>{class i{constructor(t){this.syncService=t,this.title="danielou-portfolio",this.panelState={visible:!1,transform:""}}ngOnInit(){this.panelSub=this.syncService.panelState$.subscribe(t=>{this.panelState=t})}ngOnDestroy(){this.panelSub&&this.panelSub.unsubscribe()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Cc))}}static{this.\u0275cmp=Tt({type:i,selectors:[["app-root"]],standalone:!0,features:[Ct],decls:18,vars:4,consts:[[1,"html-panel"],[1,"fixed","bottom-4","left-4","z-20","flex","space-x-4"],["href","https://github.com/Danielou1","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-github"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-linkedin"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],[1,"fixed","bottom-4","right-4","z-20","flex","items-center","space-x-4"],["href","mailto:danielou.mounsande@gmail.com",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-mail"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(n,r){n&1&&(ge(0,"app-three-scene"),U(1,"div",0),ge(2,"router-outlet"),q(),U(3,"div",1)(4,"a",2),Fe(),U(5,"svg",3),ge(6,"path",4),q()(),Qe(),U(7,"a",5),Fe(),U(8,"svg",6),ge(9,"path",7)(10,"rect",8)(11,"circle",9),q()()(),Qe(),U(12,"div",10)(13,"a",11),Fe(),U(14,"svg",12),ge(15,"path",13)(16,"polyline",14),q()(),Qe(),ge(17,"app-chatbot"),q()),n&2&&(se(),na("transform",r.panelState.transform),ia("visible",r.panelState.visible))},dependencies:[Ut,Vu,Hg,Wg],styles:[".html-panel[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:800px;height:500px;background-color:#1a202ce6;border-radius:12px;box-shadow:0 10px 30px #00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);pointer-events:none;opacity:0;transition:opacity .4s ease,transform .4s ease;will-change:transform,opacity;z-index:10;overflow:hidden}.html-panel.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}@media (max-width: 850px){.html-panel[_ngcontent-%COMP%]{width:95vw;height:80vh}}"]})}}return i})();Uf(Xg,Zp).catch(i=>console.error(i));
