import{$ as Ri,$a as gf,A as cu,Aa as yu,Ab as Ut,B as Ur,Ba as Ve,Bb as Sa,C as Fr,Ca as df,Cb as Af,D as Ci,Da as ff,Db as qs,E as uu,Ea as xu,Eb as wu,F as Jd,Fa as At,Fb as wa,G as Kd,Ga as rr,H as Qd,Ha as Pi,I as An,Ia as Gs,J as ef,Ja as bt,K as Wt,Ka as Mu,L as ut,La as va,M as hu,Ma as _a,N as Ye,Na as Ws,O as ir,Oa as Ze,P as tf,Pa as ya,Q as rt,Qa as xa,R as du,Ra as F,S as Qe,Sa as q,T as Se,Ta as ve,U as kr,V as nf,W as rf,Wa as Xs,X as Br,Xa as pt,Y as Un,Ya as un,Z as ma,Za as pf,_ as Ai,_a as mf,a as fe,aa as Fe,ab as Pe,b as wt,ba as et,bb as Je,c as Gd,ca as ks,cb as Xt,d as Us,da as Vr,db as vf,e as Wd,ea as fu,eb as _f,f as Xd,fa as ga,fb as yf,g as jd,ga as jn,gb as xf,h as su,ha as Ii,hb as bu,i as ou,ia as pu,ib as Mf,j as cn,ja as sf,jb as bf,k as dn,ka as mu,kb as Ma,l as ai,la as Bs,lb as Sf,m as en,ma as of,mb as wf,n as Ne,na as gu,nb as Su,o as Fs,oa as af,ob as sr,p as qd,pa as Fn,pb as js,q as $d,qa as vu,qb as fn,r as it,ra as lf,rb as Di,s as au,sa as cf,sb as Ef,t as Cn,ta as _u,tb as Tf,u as Yd,ua as Vs,ub as ba,v as lu,va as zs,vb as Cf,w as Zd,wa as uf,wb as jt,x as Ei,xa as se,xb as zr,y as Ti,ya as Hs,z as nr,za as hf}from"./chunk-5YUKBOAR.js";var Ca=new rt(""),Au=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r,s){return this._findPluginFor(n).addEventListener(t,n,r,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new ut(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||i)(Qe(Ca),Qe(Ii))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),$s=class{_doc;constructor(e){this._doc=e}manager},Ea="ng-app-id";function Rf(i){for(let e of i)e.remove()}function If(i,e){let t=e.createElement("style");return t.textContent=i,t}function M0(i,e,t,n){let r=i.head?.querySelectorAll(`style[${Ea}="${e}"],link[${Ea}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Ea),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Tu(i,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",i),t}var Ru=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,this.isServer=wu(s),M0(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,If);n?.forEach(r=>this.addUsage(r,this.external,Tu))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(Rf(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Rf(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,If(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,Tu(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Ea,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||i)(Qe(fn),Qe(gu),Qe(vu,8),Qe(Fn))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),Eu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Iu=/%COMP%/g;var Df="%COMP%",b0=`_nghost-${Df}`,S0=`_ngcontent-${Df}`,w0=!0,E0=new rt("",{providedIn:"root",factory:()=>w0});function T0(i){return S0.replace(Iu,i)}function C0(i){return b0.replace(Iu,i)}function Lf(i,e){return e.map(t=>t.replace(Iu,i))}var Pu=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,r,s,o,a,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=wu(a),this.defaultRenderer=new Ys(t,o,l,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Vs.ShadowDom&&(n=wt(fe({},n),{encapsulation:Vs.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof Ta?r.applyToHost(t):r instanceof Zs&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer,d=this.tracingService;switch(n.encapsulation){case Vs.Emulated:s=new Ta(l,c,n,this.appId,u,o,a,h,d);break;case Vs.ShadowDom:return new Cu(l,c,t,n,o,a,this.nonce,h,d);default:s=new Zs(l,c,n,u,o,a,h,d);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||i)(Qe(Au),Qe(Ru),Qe(gu),Qe(E0),Qe(fn),Qe(Fn),Qe(Ii),Qe(vu),Qe(cf,8))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),Ys=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,r,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Eu[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Pf(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Pf(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new ut(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Eu[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Eu[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Hs.DashCase|Hs.Important)?e.style.setProperty(t,n,r&Hs.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Hs.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,r){if(typeof e=="string"&&(e=Di().getGlobalEventTarget(this.doc,e),!e))throw new ut(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Pf(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Cu=class extends Ys{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Lf(r.id,u);for(let d of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=d,this.shadowRoot.appendChild(p)}let h=r.getExternalStyles?.();if(h)for(let d of h){let p=Tu(d,s);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Zs=class extends Ys{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?Lf(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ta=class extends Zs{contentAttr;hostAttr;constructor(e,t,n,r,s,o,a,l,c){let u=r+"-"+n.id;super(e,t,n,s,o,a,l,c,u),this.contentAttr=T0(u),this.hostAttr=C0(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var Aa=class i extends Tf{supportsDOMEvents=!0;static makeCurrent(){Ef(new i)}onAndCancel(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=R0();return t==null?null:I0(t)}resetBaseElement(){Js=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Sa(document.cookie,e)}},Js=null;function R0(){return Js=Js||document.head.querySelector("base"),Js?Js.getAttribute("href"):null}function I0(i){return new URL(i,document.baseURI).pathname}var P0=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),Nf=(()=>{class i extends $s{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,s){return t.addEventListener(n,r,s),()=>this.removeEventListener(t,n,r,s)}removeEventListener(t,n,r,s){return t.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(Qe(fn))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),Of=["alt","control","meta","shift"],D0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},L0={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Uf=(()=>{class i extends $s{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Di().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),Of.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let r=D0[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Of.forEach(o=>{if(o!==r){let a=L0[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||i)(Qe(fn))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})();function Du(i,e,t){return Sf(fe({rootComponent:i,platformRef:t?.platformRef},O0(e)))}function O0(i){return{appProviders:[...B0,...i?.providers??[]],platformProviders:k0}}function N0(){Aa.makeCurrent()}function U0(){return new pu}function F0(){return of(document),document}var k0=[{provide:Fn,useValue:Af},{provide:af,useValue:N0,multi:!0},{provide:fn,useFactory:F0}];var B0=[{provide:rf,useValue:"root"},{provide:pu,useFactory:U0},{provide:Ca,useClass:Nf,multi:!0,deps:[fn]},{provide:Ca,useClass:Uf,multi:!0,deps:[fn]},Pu,Ru,Au,{provide:hf,useExisting:Pu},{provide:wa,useClass:P0},[]];var Gr=class{},Ks=class{},ci=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),s=t.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(e,t){let n=e.toLowerCase();this.maybeSetNormalizedName(e,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Ia=class{encodeKey(e){return Ff(e)}encodeValue(e){return Ff(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function V0(i,e){let t=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}var z0=/%(\d[a-f0-9])/gi,H0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ff(i){return encodeURIComponent(i).replace(z0,(e,t)=>H0[t]??e)}function Ra(i){return`${i}`}var li=class i{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Ia,e.fromString){if(e.fromObject)throw new ut(2805,!1);this.map=V0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],r=Array.isArray(n)?n.map(Ra):[Ra(n)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(s=>{t.push({param:n,value:s,op:"a"})}):t.push({param:n,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new i({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(Ra(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(Ra(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Pa=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function G0(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function kf(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Bf(i){return typeof Blob<"u"&&i instanceof Blob}function Vf(i){return typeof FormData<"u"&&i instanceof FormData}function W0(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var zf="Content-Type",Hf="Accept",Gf="X-Request-URL",Wf="text/plain",Xf="application/json",X0=`${Xf}, ${Wf}, */*`,Hr=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,n,r){this.url=t,this.method=e.toUpperCase();let s;if(G0(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new ci,this.context??=new Pa,!this.params)this.params=new li,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||kf(this.body)||Bf(this.body)||Vf(this.body)||W0(this.body)?this.body:this.body instanceof li?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Vf(this.body)?null:Bf(this.body)?this.body.type||null:kf(this.body)?null:typeof this.body=="string"?Wf:this.body instanceof li?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Xf:null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,s=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,u=e.params||this.params,h=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((d,p)=>d.set(p,e.setHeaders[p]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((d,p)=>d.set(p,e.setParams[p]),u)),new i(t,n,o,{params:u,headers:c,context:h,reportProgress:l,responseType:r,withCredentials:a,transferCache:s})}},or=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(or||{}),Wr=class{headers;status;statusText;url;ok;type;constructor(e,t=200,n="OK"){this.headers=e.headers||new ci,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Da=class i extends Wr{constructor(e={}){super(e)}type=or.ResponseHeader;clone(e={}){return new i({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ar=class i extends Wr{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=or.Response;clone(e={}){return new i({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Qs=class extends Wr{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},j0=200,q0=204;function Lu(i,e){return{body:e,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,transferCache:i.transferCache}}var Oa=(()=>{class i{handler;constructor(t){this.handler=t}request(t,n,r={}){let s;if(t instanceof Hr)s=t;else{let l;r.headers instanceof ci?l=r.headers:l=new ci(r.headers);let c;r.params&&(r.params instanceof li?c=r.params:c=new li({fromObject:r.params})),s=new Hr(t,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=Ne(s).pipe(nr(l=>this.handler.handle(l)));if(t instanceof Hr||r.observe==="events")return o;let a=o.pipe(Ei(l=>l instanceof ar));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(it(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new ut(2806,!1);return l.body}));case"blob":return a.pipe(it(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new ut(2807,!1);return l.body}));case"text":return a.pipe(it(l=>{if(l.body!==null&&typeof l.body!="string")throw new ut(2808,!1);return l.body}));case"json":default:return a.pipe(it(l=>l.body))}case"response":return a;default:throw new ut(2809,!1)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new li().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,r={}){return this.request("PATCH",t,Lu(r,n))}post(t,n,r={}){return this.request("POST",t,Lu(r,n))}put(t,n,r={}){return this.request("PUT",t,Lu(r,n))}static \u0275fac=function(n){return new(n||i)(Qe(Gr))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})();var $0=new rt("");function Y0(i,e){return e(i)}function Z0(i,e,t){return(n,r)=>Un(t,()=>e(n,s=>i(s,r)))}var jf=new rt(""),Nu=new rt(""),qf=new rt("",{providedIn:"root",factory:()=>!0});var La=(()=>{class i extends Gr{backend;injector;chain=null;pendingTasks=Se(ga);contributeToStability=Se(qf);constructor(t,n){super(),this.backend=t,this.injector=n}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(jf),...this.injector.get(Nu,[])]));this.chain=n.reduceRight((r,s)=>Z0(r,s,this.injector),Y0)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(Fr(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||i)(Qe(Ks),Qe(Br))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})();var J0=/^\)\]\}',?\n/,K0=RegExp(`^${Gf}:`,"m");function Q0(i){return"responseURL"in i&&i.responseURL?i.responseURL:K0.test(i.getAllResponseHeaders())?i.getResponseHeader(Gf):null}var Ou=(()=>{class i{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new ut(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?en(n.\u0275loadImpl()):Ne(null)).pipe(An(()=>new jd(s=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((v,m)=>o.setRequestHeader(v,m.join(","))),t.headers.has(Hf)||o.setRequestHeader(Hf,X0),!t.headers.has(zf)){let v=t.detectContentTypeHeader();v!==null&&o.setRequestHeader(zf,v)}if(t.responseType){let v=t.responseType.toLowerCase();o.responseType=v!=="json"?v:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let v=o.statusText||"OK",m=new ci(o.getAllResponseHeaders()),f=Q0(o)||t.url;return l=new Da({headers:m,status:o.status,statusText:v,url:f}),l},u=()=>{let{headers:v,status:m,statusText:f,url:w}=c(),S=null;m!==q0&&(S=typeof o.response>"u"?o.responseText:o.response),m===0&&(m=S?j0:0);let M=m>=200&&m<300;if(t.responseType==="json"&&typeof S=="string"){let D=S;S=S.replace(J0,"");try{S=S!==""?JSON.parse(S):null}catch(C){S=D,M&&(M=!1,S={error:C,text:S})}}M?(s.next(new ar({body:S,headers:v,status:m,statusText:f,url:w||void 0})),s.complete()):s.error(new Qs({error:S,headers:v,status:m,statusText:f,url:w||void 0}))},h=v=>{let{url:m}=c(),f=new Qs({error:v,status:o.status||0,statusText:o.statusText||"Unknown Error",url:m||void 0});s.error(f)},d=!1,p=v=>{d||(s.next(c()),d=!0);let m={type:or.DownloadProgress,loaded:v.loaded};v.lengthComputable&&(m.total=v.total),t.responseType==="text"&&o.responseText&&(m.partialText=o.responseText),s.next(m)},g=v=>{let m={type:or.UploadProgress,loaded:v.loaded};v.lengthComputable&&(m.total=v.total),s.next(m)};return o.addEventListener("load",u),o.addEventListener("error",h),o.addEventListener("timeout",h),o.addEventListener("abort",h),t.reportProgress&&(o.addEventListener("progress",p),a!==null&&o.upload&&o.upload.addEventListener("progress",g)),o.send(a),s.next({type:or.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",u),o.removeEventListener("timeout",h),t.reportProgress&&(o.removeEventListener("progress",p),a!==null&&o.upload&&o.upload.removeEventListener("progress",g)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||i)(Qe(wa))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})(),$f=new rt(""),ev="XSRF-TOKEN",tv=new rt("",{providedIn:"root",factory:()=>ev}),nv="X-XSRF-TOKEN",iv=new rt("",{providedIn:"root",factory:()=>nv}),eo=class{},rv=(()=>{class i{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,n){this.doc=t,this.cookieName=n}getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Sa(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(n){return new(n||i)(Qe(fn),Qe(tv))};static \u0275prov=Ye({token:i,factory:i.\u0275fac})}return i})();function sv(i,e){let t=i.url.toLowerCase();if(!Se($f)||i.method==="GET"||i.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(i);let n=Se(eo).getToken(),r=Se(iv);return n!=null&&!i.headers.has(r)&&(i=i.clone({headers:i.headers.set(r,n)})),e(i)}function Uu(...i){let e=[Oa,Ou,La,{provide:Gr,useExisting:La},{provide:Ks,useFactory:()=>Se($0,{optional:!0})??Se(Ou)},{provide:jf,useValue:sv,multi:!0},{provide:$f,useValue:!0},{provide:eo,useClass:rv}];for(let t of i)e.push(...t.\u0275providers);return kr(e)}var av=new rt(""),lv="b",cv="h",uv="s",hv="st",dv="u",fv="rt",Fu=new rt(""),pv=["GET","HEAD"];function mv(i,e){let d=Se(Fu),{isCacheActive:t}=d,n=Gd(d,["isCacheActive"]),{transferCache:r,method:s}=i;if(!t||r===!1||s==="POST"&&!n.includePostRequests&&!r||s!=="POST"&&!pv.includes(s)||!n.includeRequestsWithAuthHeaders&&gv(i)||n.filter?.(i)===!1)return e(i);let o=Se(lf);if(Se(av,{optional:!0}))throw new ut(2803,!1);let l=i.url,c=vv(i,l),u=o.get(c,null),h=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(h=r.includeHeaders),u){let{[lv]:p,[fv]:g,[cv]:v,[uv]:m,[hv]:f,[dv]:w}=u,S=p;switch(g){case"arraybuffer":S=new TextEncoder().encode(p).buffer;break;case"blob":S=new Blob([p]);break}let M=new ci(v);return Ne(new ar({body:S,headers:M,status:m,statusText:f,url:w}))}return e(i).pipe(Wt(p=>{p instanceof ar}))}function gv(i){return i.headers.has("authorization")||i.headers.has("proxy-authorization")}function Yf(i){return[...i.keys()].sort().map(e=>`${e}=${i.getAll(e)}`).join("&")}function vv(i,e){let{params:t,method:n,responseType:r}=i,s=Yf(t),o=i.serializeBody();o instanceof URLSearchParams?o=Yf(o):typeof o!="string"&&(o="");let a=[n,r,e,o,s].join("|"),l=_v(a);return l}function _v(i){let e=0;for(let t of i)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Zf(i){return[{provide:Fu,useFactory:()=>(_u("NgHttpTransferCache"),fe({isCacheActive:!0},i))},{provide:Nu,useValue:mv,multi:!0},{provide:_a,multi:!0,useFactory:()=>{let e=Se(Ws),t=Se(Fu);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var Jf=(()=>{class i{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||i)(Qe(fn))};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ku=function(i){return i[i.NoHttpTransferCache=0]="NoHttpTransferCache",i[i.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",i[i.I18nSupport=2]="I18nSupport",i[i.EventReplay=3]="EventReplay",i[i.IncrementalHydration=4]="IncrementalHydration",i}(ku||{});function Kf(...i){let e=[],t=new Set;for(let{\u0275providers:r,\u0275kind:s}of i)t.add(s),r.length&&e.push(r);let n=t.has(ku.HttpTransferCacheOptions);return kr([[],wf(),t.has(ku.NoHttpTransferCache)||n?[]:Zf({}),e])}var We="primary",mo=Symbol("RouteTitle"),Gu=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ur(i){return new Gu(i)}function op(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function Sv(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!qn(i[t],e[t]))return!1;return!0}function qn(i,e){let t=i?Wu(i):void 0,n=e?Wu(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!ap(i[r],e[r]))return!1;return!0}function Wu(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function ap(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function lp(i){return i.length>0?i[i.length-1]:null}function Ni(i){return qd(i)?i:va(i)?en(Promise.resolve(i)):Ne(i)}var wv={exact:up,subset:hp},cp={exact:Ev,subset:Tv,ignored:()=>!0};function Qf(i,e,t){return wv[t.paths](i.root,e.root,t.matrixParams)&&cp[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function Ev(i,e){return qn(i,e)}function up(i,e,t){if(!lr(i.segments,e.segments)||!Fa(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!up(i.children[n],e.children[n],t))return!1;return!0}function Tv(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>ap(i[t],e[t]))}function hp(i,e,t){return dp(i,e,e.segments,t)}function dp(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!lr(r,t)||e.hasChildren()||!Fa(r,t,n))}else if(i.segments.length===t.length){if(!lr(i.segments,t)||!Fa(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!hp(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!lr(i.segments,r)||!Fa(i.segments,r,n)||!i.children[We]?!1:dp(i.children[We],e,s,n)}}function Fa(i,e,t){return e.every((n,r)=>cp[t](i[r].parameters,n.parameters))}var Yn=class{root;queryParams;fragment;_queryParamMap;constructor(e=new mt([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ur(this.queryParams),this._queryParamMap}toString(){return Rv.serialize(this)}},mt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ka(this)}},Li=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ur(this.parameters),this._parameterMap}toString(){return pp(this)}};function Cv(i,e){return lr(i,e)&&i.every((t,n)=>qn(t.parameters,e[n].parameters))}function lr(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function Av(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===We&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==We&&(t=t.concat(e(r,n)))}),t}var go=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:()=>new hr,providedIn:"root"})}return i})(),hr=class{parse(e){let t=new ju(e);return new Yn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${to(e.root,!0)}`,n=Dv(e.queryParams),r=typeof e.fragment=="string"?`#${Iv(e.fragment)}`:"";return`${t}${n}${r}`}},Rv=new hr;function ka(i){return i.segments.map(e=>pp(e)).join("/")}function to(i,e){if(!i.hasChildren())return ka(i);if(e){let t=i.children[We]?to(i.children[We],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==We&&n.push(`${r}:${to(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Av(i,(n,r)=>r===We?[to(i.children[We],!1)]:[`${r}:${to(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[We]!=null?`${ka(i)}/${t[0]}`:`${ka(i)}/(${t.join("//")})`}}function fp(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Na(i){return fp(i).replace(/%3B/gi,";")}function Iv(i){return encodeURI(i)}function Xu(i){return fp(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ba(i){return decodeURIComponent(i)}function ep(i){return Ba(i.replace(/\+/g,"%20"))}function pp(i){return`${Xu(i.path)}${Pv(i.parameters)}`}function Pv(i){return Object.entries(i).map(([e,t])=>`;${Xu(e)}=${Xu(t)}`).join("")}function Dv(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${Na(t)}=${Na(r)}`).join("&"):`${Na(t)}=${Na(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var Lv=/^[^\/()?;#]+/;function Bu(i){let e=i.match(Lv);return e?e[0]:""}var Ov=/^[^\/()?;=#]+/;function Nv(i){let e=i.match(Ov);return e?e[0]:""}var Uv=/^[^=?&#]+/;function Fv(i){let e=i.match(Uv);return e?e[0]:""}var kv=/^[^&#]+/;function Bv(i){let e=i.match(kv);return e?e[0]:""}var ju=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new mt([],{}):new mt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[We]=new mt(e,t)),n}parseSegment(){let e=Bu(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ut(4009,!1);return this.capture(e),new Li(Ba(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=Nv(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=Bu(this.remaining);r&&(n=r,this.capture(n))}e[Ba(t)]=Ba(n)}parseQueryParam(e){let t=Fv(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=Bv(this.remaining);o&&(n=o,this.capture(n))}let r=ep(t),s=ep(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bu(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new ut(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=We);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[We]:new mt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ut(4011,!1)}};function mp(i){return i.segments.length>0?new mt([],{[We]:i}):i}function gp(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=gp(r);if(n===We&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new mt(i.segments,e);return Vv(t)}function Vv(i){if(i.numberOfChildren===1&&i.children[We]){let e=i.children[We];return new mt(i.segments.concat(e.segments),e.children)}return i}function Yr(i){return i instanceof Yn}function vp(i,e,t=null,n=null){let r=_p(i);return yp(r,e,t,n)}function _p(i){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new mt(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=mp(n);return e??r}function yp(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return Vu(r,r,r,t,n);let s=zv(e);if(s.toRoot())return Vu(r,r,new mt([],{}),t,n);let o=Hv(s,r,i),a=o.processChildren?io(o.segmentGroup,o.index,s.commands):Mp(o.segmentGroup,o.index,s.commands);return Vu(r,o.segmentGroup,a,t,n)}function za(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function so(i){return typeof i=="object"&&i!=null&&i.outlets}function Vu(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;i===e?o=t:o=xp(i,e,t);let a=mp(gp(o));return new Yn(a,s,r)}function xp(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=xp(s,e,t)}),new mt(i.segments,n)}var Ha=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&za(n[0]))throw new ut(4003,!1);let r=n.find(so);if(r&&r!==lp(n))throw new ut(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zv(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Ha(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Ha(t,e,n)}var qr=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function Hv(i,e,t){if(i.isAbsolute)return new qr(e,!0,0);if(!t)return new qr(e,!1,NaN);if(t.parent===null)return new qr(t,!0,0);let n=za(i.commands[0])?0:1,r=t.segments.length-1+n;return Gv(t,r,i.numberOfDoubleDots)}function Gv(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new ut(4005,!1);r=n.segments.length}return new qr(n,!1,r-s)}function Wv(i){return so(i[0])?i[0].outlets:{[We]:i}}function Mp(i,e,t){if(i??=new mt([],{}),i.segments.length===0&&i.hasChildren())return io(i,e,t);let n=Xv(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new mt(i.segments.slice(0,n.pathIndex),{});return s.children[We]=new mt(i.segments.slice(n.pathIndex),i.children),io(s,0,r)}else return n.match&&r.length===0?new mt(i.segments,{}):n.match&&!i.hasChildren()?qu(i,e,t):n.match?io(i,0,r):qu(i,e,t)}function io(i,e,t){if(t.length===0)return new mt(i.segments,{});{let n=Wv(t),r={};if(Object.keys(n).some(s=>s!==We)&&i.children[We]&&i.numberOfChildren===1&&i.children[We].segments.length===0){let s=io(i.children[We],e,t);return new mt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Mp(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new mt(i.segments,r)}}function Xv(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(so(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!np(l,c,o))return s;n+=2}else{if(!np(l,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function qu(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(so(s)){let l=jv(s.outlets);return new mt(n,l)}if(r===0&&za(t[0])){let l=i.segments[e];n.push(new Li(l.path,tp(t[0]))),r++;continue}let o=so(s)?s.outlets[We]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&za(a)?(n.push(new Li(o,tp(a))),r+=2):(n.push(new Li(o,{})),r++)}return new mt(n,{})}function jv(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=qu(new mt([],{}),0,n))}),e}function tp(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function np(i,e,t){return i==t.path&&qn(e,t.parameters)}var Va="imperative",qt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(qt||{}),_n=class{id;url;constructor(e,t){this.id=e,this.url=t}},dr=class extends _n{type=qt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ui=class extends _n{urlAfterRedirects;type=qt.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},pn=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(pn||{}),oo=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(oo||{}),$n=class extends _n{reason;code;type=qt.NavigationCancel;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},hi=class extends _n{reason;code;type=qt.NavigationSkipped;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}},Zr=class extends _n{error;target;type=qt.NavigationError;constructor(e,t,n,r){super(e,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ao=class extends _n{urlAfterRedirects;state;type=qt.RoutesRecognized;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ga=class extends _n{urlAfterRedirects;state;type=qt.GuardsCheckStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wa=class extends _n{urlAfterRedirects;state;shouldActivate;type=qt.GuardsCheckEnd;constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Xa=class extends _n{urlAfterRedirects;state;type=qt.ResolveStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ja=class extends _n{urlAfterRedirects;state;type=qt.ResolveEnd;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qa=class{route;type=qt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$a=class{route;type=qt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ya=class{snapshot;type=qt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Za=class{snapshot;type=qt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ja=class{snapshot;type=qt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ka=class{snapshot;type=qt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var lo=class{},Jr=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function qv(i,e){return i.providers&&!i._injector&&(i._injector=xu(i.providers,e,`Route: ${i.path}`)),i._injector??e}function kn(i){return i.outlet||We}function $v(i,e){let t=i.filter(n=>kn(n)===e);return t.push(...i.filter(n=>kn(n)!==e)),t}function vo(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Qa=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return vo(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new es(this.rootInjector)}},es=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Qa(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||i)(Qe(Br))};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),el=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=$u(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=$u(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Yu(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Yu(e,this._root).map(t=>t.value)}};function $u(i,e){if(i===e.value)return e;for(let t of e.children){let n=$u(i,t);if(n)return n}return null}function Yu(i,e){if(i===e.value)return[e];for(let t of e.children){let n=Yu(i,t);if(n.length)return n.unshift(e),n}return[]}var vn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function jr(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var co=class extends el{snapshot;constructor(e,t){super(e),this.snapshot=t,ih(this,e)}toString(){return this.snapshot.toString()}};function bp(i){let e=Yv(i),t=new dn([new Li("",{})]),n=new dn({}),r=new dn({}),s=new dn({}),o=new dn(""),a=new Oi(t,n,s,o,r,We,i,e.root);return a.snapshot=e.root,new co(new vn(a,[]),e)}function Yv(i){let e={},t={},n={},r="",s=new cr([],e,n,r,t,We,i,null,{});return new uo("",new vn(s,[]))}var Oi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(it(c=>c[mo]))??Ne(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(it(e=>ur(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(it(e=>ur(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function tl(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:fe(fe({},e.params),i.params),data:fe(fe({},e.data),i.data),resolve:fe(fe(fe(fe({},i.data),e.data),r?.data),i._resolvedData)}:n={params:fe({},i.params),data:fe({},i.data),resolve:fe(fe({},i.data),i._resolvedData??{})},r&&wp(r)&&(n.resolve[mo]=r.title),n}var cr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[mo]}constructor(e,t,n,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ur(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ur(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},uo=class extends el{url;constructor(e,t){super(t),this.url=e,ih(this,t)}toString(){return Sp(this._root)}};function ih(i,e){e.value._routerState=i,e.children.forEach(t=>ih(i,t))}function Sp(i){let e=i.children.length>0?` { ${i.children.map(Sp).join(", ")} } `:"";return`${i.value}${e}`}function zu(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,qn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),qn(e.params,t.params)||i.paramsSubject.next(t.params),Sv(e.url,t.url)||i.urlSubject.next(t.url),qn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Zu(i,e){let t=qn(i.params,e.params)&&Cv(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||Zu(i.parent,e.parent))}function wp(i){return typeof i.title=="string"||i.title===null}var Ep=new rt(""),_o=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=We;activateEvents=new jn;deactivateEvents=new jn;attachEvents=new jn;detachEvents=new jn;routerOutletData=sf(void 0);parentContexts=Se(es);location=Se(df);changeDetector=Se(Ma);inputBinder=Se(sl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ut(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ut(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ut(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new ut(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Ju(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Pi({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ma]})}return i})(),Ju=class{route;childContexts;parent;outletData;constructor(e,t,n,r){this.route=e,this.childContexts=t,this.parent=n,this.outletData=r}get(e,t){return e===Oi?this.route:e===es?this.childContexts:e===Ep?this.outletData:this.parent.get(e,t)}},sl=new rt("");var rh=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=At({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&ve(0,"router-outlet")},dependencies:[_o],encapsulation:2})}return i})();function sh(i){let e=i.children&&i.children.map(sh),t=e?wt(fe({},i),{children:e}):fe({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==We&&(t.component=rh),t}function Zv(i,e,t){let n=ho(i,e._root,t?t._root:void 0);return new co(n,e)}function ho(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=Jv(i,e,t);return new vn(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ho(i,a)),o}}let n=Kv(e.value),r=e.children.map(s=>ho(i,s));return new vn(n,r)}}function Jv(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return ho(i,n,r);return ho(i,n)})}function Kv(i){return new Oi(new dn(i.url),new dn(i.params),new dn(i.queryParams),new dn(i.fragment),new dn(i.data),i.outlet,i.component,i)}var Kr=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Tp="ngNavigationCancelingError";function nl(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=Yr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Cp(!1,pn.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function Cp(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[Tp]=!0,t.cancellationCode=e,t}function Qv(i){return Ap(i)&&Yr(i.url)}function Ap(i){return!!i&&i[Tp]}var e_=(i,e,t,n)=>it(r=>(new Ku(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),Ku=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),zu(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=jr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=jr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=jr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=jr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Ka(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Za(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(zu(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),zu(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},il=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},$r=class{component;route;constructor(e,t){this.component=e,this.route=t}};function t_(i,e,t){let n=i._root,r=e?e._root:null;return no(n,r,t,[n.value])}function n_(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function ts(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!tf(i)?i:e.get(i):n}function no(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=jr(e);return i.children.forEach(o=>{i_(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ro(a,t.getContext(o),r)),r}function i_(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=r_(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new il(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?no(i,e,a?a.children:null,n,r):no(i,e,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new $r(a.outlet.component,o))}else o&&ro(e,a,r),r.canActivateChecks.push(new il(n)),s.component?no(i,null,a?a.children:null,n,r):no(i,null,t,n,r);return r}function r_(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!lr(i.url,e.url);case"pathParamsOrQueryParamsChange":return!lr(i.url,e.url)||!qn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Zu(i,e)||!qn(i.queryParams,e.queryParams);case"paramsChange":default:return!Zu(i,e)}}function ro(i,e,t){let n=jr(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?ro(o,e.children.getContext(s),t):ro(o,null,t):ro(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new $r(e.outlet.component,r)):t.canDeactivateChecks.push(new $r(null,r)):t.canDeactivateChecks.push(new $r(null,r))}function yo(i){return typeof i=="function"}function s_(i){return typeof i=="boolean"}function o_(i){return i&&yo(i.canLoad)}function a_(i){return i&&yo(i.canActivate)}function l_(i){return i&&yo(i.canActivateChild)}function c_(i){return i&&yo(i.canDeactivate)}function u_(i){return i&&yo(i.canMatch)}function Rp(i){return i instanceof $d||i?.name==="EmptyError"}var Ua=Symbol("INITIAL_VALUE");function Qr(){return An(i=>au(i.map(e=>e.pipe(Ur(1),Qd(Ua)))).pipe(it(e=>{for(let t of e)if(t!==!0){if(t===Ua)return Ua;if(t===!1||h_(t))return t}return!0}),Ei(e=>e!==Ua),Ur(1)))}function h_(i){return Yr(i)||i instanceof Kr}function d_(i,e){return Cn(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ne(wt(fe({},t),{guardsResult:!0})):f_(o,n,r,i).pipe(Cn(a=>a&&s_(a)?p_(n,s,i,e):Ne(a)),it(a=>wt(fe({},t),{guardsResult:a})))})}function f_(i,e,t,n){return en(i).pipe(Cn(r=>y_(r.component,r.route,t,e,n)),Ci(r=>r!==!0,!0))}function p_(i,e,t,n){return en(e).pipe(nr(r=>Yd(g_(r.route.parent,n),m_(r.route,n),__(i,r.path,t),v_(i,r.route,t))),Ci(r=>r!==!0,!0))}function m_(i,e){return i!==null&&e&&e(new Ja(i)),Ne(!0)}function g_(i,e){return i!==null&&e&&e(new Ya(i)),Ne(!0)}function v_(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Ne(!0);let r=n.map(s=>lu(()=>{let o=vo(e)??t,a=ts(s,o),l=a_(a)?a.canActivate(e,i):Un(o,()=>a(e,i));return Ni(l).pipe(Ci())}));return Ne(r).pipe(Qr())}function __(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>n_(o)).filter(o=>o!==null).map(o=>lu(()=>{let a=o.guards.map(l=>{let c=vo(o.node)??t,u=ts(l,c),h=l_(u)?u.canActivateChild(n,i):Un(c,()=>u(n,i));return Ni(h).pipe(Ci())});return Ne(a).pipe(Qr())}));return Ne(s).pipe(Qr())}function y_(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ne(!0);let o=s.map(a=>{let l=vo(e)??r,c=ts(a,l),u=c_(c)?c.canDeactivate(i,e,t,n):Un(l,()=>c(i,e,t,n));return Ni(u).pipe(Ci())});return Ne(o).pipe(Qr())}function x_(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Ne(!0);let s=r.map(o=>{let a=ts(o,i),l=o_(a)?a.canLoad(e,t):Un(i,()=>a(e,t));return Ni(l)});return Ne(s).pipe(Qr(),Ip(n))}function Ip(i){return Xd(Wt(e=>{if(typeof e!="boolean")throw nl(i,e)}),it(e=>e===!0))}function M_(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Ne(!0);let s=r.map(o=>{let a=ts(o,i),l=u_(a)?a.canMatch(e,t):Un(i,()=>a(e,t));return Ni(l)});return Ne(s).pipe(Qr(),Ip(n))}var fo=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},po=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Xr(i){return Fs(new fo(i))}function b_(i){return Fs(new ut(4e3,!1))}function S_(i){return Fs(Cp(!1,pn.GuardRejected))}var Qu=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Ne(n);if(r.numberOfChildren>1||!r.children[We])return b_(`${e.redirectTo}`);r=r.children[We]}}applyRedirectCommands(e,t,n,r,s){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:u,url:h,outlet:d,params:p,data:g,title:v}=r,m=Un(s,()=>a({params:p,data:g,queryParams:l,fragment:c,routeConfig:u,url:h,outlet:d,title:v}));if(m instanceof Yn)throw new po(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new po(o);return o}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new Yn(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,r)}),new mt(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new ut(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},eh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function w_(i,e,t,n,r){let s=Pp(i,e,t);return s.matched?(n=qv(e,n),M_(n,e,t,r).pipe(it(o=>o===!0?s:fe({},eh)))):Ne(s)}function Pp(i,e,t){if(e.path==="**")return E_(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?fe({},eh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||op)(t,i,e);if(!r)return fe({},eh);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?fe(fe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function E_(i){return{matched:!0,parameters:i.length>0?lp(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function ip(i,e,t,n){return t.length>0&&A_(i,t,n)?{segmentGroup:new mt(e,C_(n,new mt(t,i.children))),slicedSegments:[]}:t.length===0&&R_(i,t,n)?{segmentGroup:new mt(i.segments,T_(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new mt(i.segments,i.children),slicedSegments:t}}function T_(i,e,t,n){let r={};for(let s of t)if(ol(i,e,s)&&!n[kn(s)]){let o=new mt([],{});r[kn(s)]=o}return fe(fe({},n),r)}function C_(i,e){let t={};t[We]=e;for(let n of i)if(n.path===""&&kn(n)!==We){let r=new mt([],{});t[kn(n)]=r}return t}function A_(i,e,t){return t.some(n=>ol(i,e,n)&&kn(n)!==We)}function R_(i,e,t){return t.some(n=>ol(i,e,n))}function ol(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function I_(i,e,t){return e.length===0&&!i.children[t]}var th=class{};function P_(i,e,t,n,r,s,o="emptyOnly"){return new nh(i,e,t,n,r,o,s).recognize()}var D_=31,nh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Qu(this.urlSerializer,this.urlTree)}noMatchError(e){return new ut(4002,`'${e.segmentGroup}'`)}recognize(){let e=ip(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(it(({children:t,rootSnapshot:n})=>{let r=new vn(n,t),s=new uo("",r),o=vp(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new cr([],Object.freeze({}),Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),We,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,We,t).pipe(it(n=>({children:n,rootSnapshot:t})),Ti(n=>{if(n instanceof po)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof fo?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,r,!0,s).pipe(it(o=>o instanceof vn?[o]:[]))}processChildren(e,t,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return en(s).pipe(nr(o=>{let a=n.children[o],l=$v(t,o);return this.processSegmentGroup(e,l,a,o,r)}),Kd((o,a)=>(o.push(...a),o)),cu(null),Jd(),Cn(o=>{if(o===null)return Xr(n);let a=Dp(o);return L_(a),Ne(a)}))}processSegment(e,t,n,r,s,o,a){return en(t).pipe(nr(l=>this.processSegmentAgainstRoute(l._injector??e,t,l,n,r,s,o,a).pipe(Ti(c=>{if(c instanceof fo)return Ne(null);throw c}))),Ci(l=>!!l),Ti(l=>{if(Rp(l))return I_(n,r,s)?Ne(new th):Xr(n);throw l}))}processSegmentAgainstRoute(e,t,n,r,s,o,a,l){return kn(n)!==o&&(o===We||!ol(r,s,n))?Xr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o,l):Xr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:h,remainingSegments:d}=Pp(t,r,s);if(!l)return Xr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>D_&&(this.allowRedirects=!1));let p=new cr(s,c,Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,rp(r),kn(r),r.component??r._loadedComponent??null,r,sp(r)),g=tl(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,p,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(Cn(m=>this.processSegment(e,n,t,m.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,r,s,o){let a=w_(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(An(l=>l.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(An(({routes:c})=>{let u=n._loadedInjector??e,{parameters:h,consumedSegments:d,remainingSegments:p}=l,g=new cr(d,h,Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,rp(n),kn(n),n.component??n._loadedComponent??null,n,sp(n)),v=tl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:f}=ip(t,d,p,c);if(f.length===0&&m.hasChildren())return this.processChildren(u,c,m,g).pipe(it(S=>new vn(g,S)));if(c.length===0&&f.length===0)return Ne(new vn(g,[]));let w=kn(n)===s;return this.processSegment(u,c,m,f,w?We:s,!0,g).pipe(it(S=>new vn(g,S instanceof vn?[S]:[])))}))):Xr(t)))}getChildConfig(e,t,n){return t.children?Ne({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ne({routes:t._loadedRoutes,injector:t._loadedInjector}):x_(e,t,n,this.urlSerializer).pipe(Cn(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):S_(t))):Ne({routes:[],injector:e})}};function L_(i){i.sort((e,t)=>e.value.outlet===We?-1:t.value.outlet===We?1:e.value.outlet.localeCompare(t.value.outlet))}function O_(i){let e=i.value.routeConfig;return e&&e.path===""}function Dp(i){let e=[],t=new Set;for(let n of i){if(!O_(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=Dp(n.children);e.push(new vn(n.value,r))}return e.filter(n=>!t.has(n))}function rp(i){return i.data||{}}function sp(i){return i.resolve||{}}function N_(i,e,t,n,r,s){return Cn(o=>P_(i,e,t,n,o.extractedUrl,r,s).pipe(it(({state:a,tree:l})=>wt(fe({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function U_(i,e){return Cn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Ne(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of Lp(l))o.add(c);let a=0;return en(o).pipe(nr(l=>s.has(l)?F_(l,n,i,e):(l.data=tl(l,l.parent,i).resolve,Ne(void 0))),Wt(()=>a++),uu(1),Cn(l=>a===o.size?Ne(t):ai))})}function Lp(i){let e=i.children.map(t=>Lp(t)).flat();return[i,...e]}function F_(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!wp(r)&&(s[mo]=r.title),k_(s,i,e,n).pipe(it(o=>(i._resolvedData=o,i.data=tl(i,i.parent,t).resolve,null)))}function k_(i,e,t,n){let r=Wu(i);if(r.length===0)return Ne({});let s={};return en(r).pipe(Cn(o=>B_(i[o],e,t,n).pipe(Ci(),Wt(a=>{if(a instanceof Kr)throw nl(new hr,a);s[o]=a}))),uu(1),it(()=>s),Ti(o=>Rp(o)?ai:Fs(o)))}function B_(i,e,t,n){let r=vo(e)??n,s=ts(i,r),o=s.resolve?s.resolve(e,t):Un(r,()=>s(e,t));return Ni(o)}function Hu(i){return An(e=>{let t=i(e);return t?en(t).pipe(it(()=>e)):Ne(e)})}var oh=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===We);return n}getResolvedTitleForRoute(t){return t.data[mo]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:()=>Se(Op),providedIn:"root"})}return i})(),Op=(()=>{class i extends oh{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(Qe(Jf))};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),xo=new rt("",{providedIn:"root",factory:()=>({})}),Mo=new rt(""),Np=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Se(bf);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ne(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Ni(t.loadComponent()).pipe(it(Fp),Wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Fr(()=>{this.componentLoaders.delete(t)})),r=new ou(n,()=>new cn).pipe(su());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Ne({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=Up(n,this.compiler,t,this.onLoadEndListener).pipe(Fr(()=>{this.childrenLoaders.delete(n)})),o=new ou(s,()=>new cn).pipe(su());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Up(i,e,t,n){return Ni(i.loadChildren()).pipe(it(Fp),Cn(r=>r instanceof ff||Array.isArray(r)?Ne(r):en(e.compileModuleAsync(r))),it(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Mo,[],{optional:!0,self:!0}).flat()),{routes:o.map(sh),injector:s}}))}function V_(i){return i&&typeof i=="object"&&"default"in i}function Fp(i){return V_(i)?i.default:i}var al=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:()=>Se(z_),providedIn:"root"})}return i})(),z_=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),kp=new rt("");var Bp=new rt(""),Vp=(()=>{class i{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new cn;transitionAbortSubject=new cn;configLoader=Se(Np);environmentInjector=Se(Br);destroyRef=Se(fu);urlSerializer=Se(go);rootContexts=Se(es);location=Se(ba);inputBindingEnabled=Se(sl,{optional:!0})!==null;titleStrategy=Se(oh);options=Se(xo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Se(al);createViewTransition=Se(kp,{optional:!0});navigationErrorHandler=Se(Bp,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ne(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new qa(r)),n=r=>this.events.next(new $a(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(wt(fe({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new dn(null),this.transitions.pipe(Ei(n=>n!==null),An(n=>{let r=!1,s=!1;return Ne(n).pipe(An(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",pn.SupersededByNewNavigation),ai;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?wt(fe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&l!=="reload"){let c="";return this.events.next(new hi(o.id,this.urlSerializer.serialize(o.rawUrl),c,oo.IgnoredSameUrlNavigation)),o.resolve(!1),ai}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Ne(o).pipe(An(c=>(this.events.next(new dr(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?ai:Promise.resolve(c))),N_(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(c=>{n.targetSnapshot=c.targetSnapshot,n.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=wt(fe({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let u=new ao(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:c,extractedUrl:u,source:h,restoredState:d,extras:p}=o,g=new dr(c,this.urlSerializer.serialize(u),h,d);this.events.next(g);let v=bp(this.rootComponentType).snapshot;return this.currentTransition=n=wt(fe({},o),{targetSnapshot:v,urlAfterRedirects:u,extras:wt(fe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Ne(n)}else{let c="";return this.events.next(new hi(o.id,this.urlSerializer.serialize(o.extractedUrl),c,oo.IgnoredByUrlHandlingStrategy)),o.resolve(!1),ai}}),Wt(o=>{let a=new Ga(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),it(o=>(this.currentTransition=n=wt(fe({},o),{guards:t_(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),d_(this.environmentInjector,o=>this.events.next(o)),Wt(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw nl(this.urlSerializer,o.guardsResult);let a=new Wa(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Ei(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",pn.GuardRejected),!1)),Hu(o=>{if(o.guards.canActivateChecks.length!==0)return Ne(o).pipe(Wt(a=>{let l=new Xa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),An(a=>{let l=!1;return Ne(a).pipe(U_(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(a,"",pn.NoDataFromResolver)}}))}),Wt(a=>{let l=new ja(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}))}),Hu(o=>{let a=l=>{let c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Wt(u=>{l.component=u}),it(()=>{})));for(let u of l.children)c.push(...a(u));return c};return au(a(o.targetSnapshot.root)).pipe(cu(null),Ur(1))}),Hu(()=>this.afterPreactivation()),An(()=>{let{currentSnapshot:o,targetSnapshot:a}=n,l=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return l?en(l).pipe(it(()=>n)):Ne(n)}),it(o=>{let a=Zv(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=wt(fe({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),Wt(()=>{this.events.next(new lo)}),e_(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Ur(1),Wt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ui(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),ef(this.transitionAbortSubject.pipe(Wt(o=>{throw o}))),Fr(()=>{!r&&!s&&this.cancelNavigationTransition(n,"",pn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ti(o=>{if(this.destroyed)return n.resolve(!1),ai;if(s=!0,Ap(o))this.events.next(new $n(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),Qv(o)?this.events.next(new Jr(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let a=new Zr(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let l=Un(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(l instanceof Kr){let{message:c,cancellationCode:u}=nl(this.urlSerializer,l);this.events.next(new $n(n.id,this.urlSerializer.serialize(n.extractedUrl),c,u)),this.events.next(new Jr(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return ai}))}))}cancelNavigationTransition(t,n,r){let s=new $n(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function H_(i){return i!==Va}var zp=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:()=>Se(G_),providedIn:"root"})}return i})(),rl=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},G_=(()=>{class i extends rl{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ks(i)))(r||i)}})();static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hp=(()=>{class i{urlSerializer=Se(go);options=Se(xo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Se(ba);urlHandlingStrategy=Se(al);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Yn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=r??s;return o instanceof Yn?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:r}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=t):this.rawUrlTree=r}routerState=bp(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:()=>Se(W_),providedIn:"root"})}return i})(),W_=(()=>{class i extends Hp{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof dr?this.updateStateMemento():t instanceof hi?this.commitTransition(n):t instanceof ao?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof lo?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof $n&&(t.code===pn.GuardRejected||t.code===pn.NoDataFromResolver)?this.restoreHistory(n):t instanceof Zr?this.restoreHistory(n,!0):t instanceof ui&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:r}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,l=fe(fe({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",l)}else{let a=fe(fe({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=ks(i)))(r||i)}})();static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ah(i,e){i.events.pipe(Ei(t=>t instanceof ui||t instanceof $n||t instanceof Zr||t instanceof hi),it(t=>t instanceof ui||t instanceof hi?0:(t instanceof $n?t.code===pn.Redirect||t.code===pn.SupersededByNewNavigation:!1)?2:1),Ei(t=>t!==2),Ur(1)).subscribe(()=>{e()})}var X_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},j_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ui=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Se(Mu);stateManager=Se(Hp);options=Se(xo,{optional:!0})||{};pendingTasks=Se(ga);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Se(Vp);urlSerializer=Se(go);location=Se(ba);urlHandlingStrategy=Se(al);_events=new cn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Se(zp);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Se(Mo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Se(sl,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Wd;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof $n&&n.code!==pn.Redirect&&n.code!==pn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ui)this.navigated=!0;else if(n instanceof Jr){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=fe({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||H_(r.source)},o);this.scheduleNavigation(a,Va,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}$_(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Va,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,r)=>{this.navigateToSyncWithBrowser(t,r,n)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=fe({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(sh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=fe(fe({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=_p(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),h=this.currentUrlTree.root}return yp(h,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=Yr(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Va,null,n)}navigate(t,n={skipLocationChange:!1}){return q_(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=fe({},X_):n===!1?r=fe({},j_):r=n,Yr(t))return Qf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Qf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((h,d)=>{a=h,l=d});let u=this.pendingTasks.add();return ah(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function q_(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new ut(4008,!1)}function $_(i){return!(i instanceof lo)&&!(i instanceof Jr)}var Z_=new rt("");function lh(i,...e){return kr([{provide:Mo,multi:!0,useValue:i},[],{provide:Oi,useFactory:J_,deps:[Ui]},{provide:_a,multi:!0,useFactory:K_},e.map(t=>t.\u0275providers)])}function J_(i){return i.routerState.root}function K_(){let i=Se(Vr);return e=>{let t=i.get(Ws);if(e!==t.components[0])return;let n=i.get(Ui),r=i.get(Q_);i.get(ey)===1&&n.initialNavigation(),i.get(ty,null,du.Optional)?.setUpPreloading(),i.get(Z_,null,du.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Q_=new rt("",{factory:()=>new cn}),ey=new rt("",{providedIn:"root",factory:()=>1});var ty=new rt("");var Jp=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||i)(Ve(yu),Ve(mu))};static \u0275dir=Pi({type:i})}return i})(),iy=(()=>{class i extends Jp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=ks(i)))(r||i)}})();static \u0275dir=Pi({type:i,features:[Gs]})}return i})(),Kp=new rt("");var ry={provide:Kp,useExisting:hu(()=>dl),multi:!0};function sy(){let i=Di()?Di().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var oy=new rt(""),dl=(()=>{class i extends Jp{_compositionMode;_composing=!1;constructor(t,n,r){super(t,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!sy())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||i)(Ve(yu),Ve(mu),Ve(oy,8))};static \u0275dir=Pi({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&pt("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[bu([ry]),Gs]})}return i})();var ay=new rt(""),ly=new rt("");function Qp(i){return i!=null}function em(i){return va(i)?en(i):i}function tm(i){let e={};return i.forEach(t=>{e=t!=null?fe(fe({},e),t):e}),Object.keys(e).length===0?null:e}function nm(i,e){return e.map(t=>t(i))}function cy(i){return!i.validate}function im(i){return i.map(e=>cy(e)?e:t=>e.validate(t))}function uy(i){if(!i)return null;let e=i.filter(Qp);return e.length==0?null:function(t){return tm(nm(t,e))}}function rm(i){return i!=null?uy(im(i)):null}function hy(i){if(!i)return null;let e=i.filter(Qp);return e.length==0?null:function(t){let n=nm(t,e).map(em);return Zd(n).pipe(it(tm))}}function sm(i){return i!=null?hy(im(i)):null}function Wp(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function dy(i){return i._rawValidators}function fy(i){return i._rawAsyncValidators}function ch(i){return i?Array.isArray(i)?i:[i]:[]}function cl(i,e){return Array.isArray(i)?i.includes(e):i===e}function Xp(i,e){let t=ch(e);return ch(i).forEach(r=>{cl(t,r)||t.push(r)}),t}function jp(i,e){return ch(e).filter(t=>!cl(i,t))}var ul=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=rm(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=sm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},uh=class extends ul{name;get formDirective(){return null}get path(){return null}},To=class extends ul{_parent=null;name=null;valueAccessor=null},hh=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},py={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vC=wt(fe({},py),{"[class.ng-submitted]":"isSubmitted"}),om=(()=>{class i extends hh{constructor(t){super(t)}static \u0275fac=function(n){return new(n||i)(Ve(To,2))};static \u0275dir=Pi({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&xa("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Gs]})}return i})();var bo="VALID",ll="INVALID",ns="PENDING",So="DISABLED",rs=class{},hl=class extends rs{value;source;constructor(e,t){super(),this.value=e,this.source=t}},wo=class extends rs{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Eo=class extends rs{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},is=class extends rs{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function my(i){return(fl(i)?i.validators:i)||null}function gy(i){return Array.isArray(i)?rm(i):i||null}function vy(i,e){return(fl(e)?e.asyncValidators:i)||null}function _y(i){return Array.isArray(i)?sm(i):i||null}function fl(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var dh=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return sr(this.statusReactive)}set status(e){sr(()=>this.statusReactive.set(e))}_status=js(()=>this.statusReactive());statusReactive=Bs(void 0);get valid(){return this.status===bo}get invalid(){return this.status===ll}get pending(){return this.status==ns}get disabled(){return this.status===So}get enabled(){return this.status!==So}errors;get pristine(){return sr(this.pristineReactive)}set pristine(e){sr(()=>this.pristineReactive.set(e))}_pristine=js(()=>this.pristineReactive());pristineReactive=Bs(!0);get dirty(){return!this.pristine}get touched(){return sr(this.touchedReactive)}set touched(e){sr(()=>this.touchedReactive.set(e))}_touched=js(()=>this.touchedReactive());touchedReactive=Bs(!1);get untouched(){return!this.touched}_events=new cn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Xp(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Xp(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(jp(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(jp(e,this._rawAsyncValidators))}hasValidator(e){return cl(this._rawValidators,e)}hasAsyncValidator(e){return cl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(wt(fe({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Eo(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Eo(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(wt(fe({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new wo(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new wo(!0,n))}markAsPending(e={}){this.status=ns;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new is(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(wt(fe({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=So,this.errors=null,this._forEachChild(r=>{r.disable(wt(fe({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new hl(this.value,n)),this._events.next(new is(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(wt(fe({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=bo,this._forEachChild(n=>{n.enable(wt(fe({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(wt(fe({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bo||this.status===ns)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new hl(this.value,t)),this._events.next(new is(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(wt(fe({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?So:bo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=ns,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=em(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new is(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new jn,this.statusChanges=new jn}_calculateStatus(){return this._allControlsDisabled()?So:this.errors?ll:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ns)?ns:this._anyControlsHaveStatus(ll)?ll:bo}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new wo(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Eo(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){fl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=gy(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_y(this._rawAsyncValidators)}};var fh=new rt("",{providedIn:"root",factory:()=>pl}),pl="always";function yy(i,e){return[...e.path,i]}function xy(i,e,t=pl){by(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Sy(i,e),Ey(i,e),wy(i,e),My(i,e)}function qp(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function My(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function by(i,e){let t=dy(i);e.validator!==null?i.setValidators(Wp(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=fy(i);e.asyncValidator!==null?i.setAsyncValidators(Wp(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();qp(e._rawValidators,r),qp(e._rawAsyncValidators,r)}function Sy(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&am(i,e)})}function wy(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&am(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function am(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ey(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ty(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Cy(i){return Object.getPrototypeOf(i.constructor)===iy}function Ay(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===dl?t=s:Cy(s)?n=s:r=s}),r||n||t||null}function $p(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Yp(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ry=class extends dh{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(my(t),vy(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),fl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Yp(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$p(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$p(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Yp(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Iy={provide:To,useExisting:hu(()=>ph)},Zp=Promise.resolve(),ph=(()=>{class i extends To{_changeDetectorRef;callSetDisabledState;control=new Ry;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new jn;constructor(t,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ay(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ty(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xy(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Zp.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Su(n);Zp.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?yy(t,this._parent):[t]}static \u0275fac=function(n){return new(n||i)(Ve(uh,9),Ve(ay,10),Ve(ly,10),Ve(Kp,10),Ve(Ma,8),Ve(fh,8))};static \u0275dir=Pi({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[bu([Iy]),Gs,ma]})}return i})();var Py=new rt("");var lm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=rr({type:i});static \u0275inj=ir({})}return i})();var ml=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:fh,useValue:t.callSetDisabledState??pl}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=rr({type:i});static \u0275inj=ir({imports:[lm]})}return i})(),cm=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Py,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:fh,useValue:t.callSetDisabledState??pl}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=rr({type:i});static \u0275inj=ir({imports:[lm]})}return i})();var $t=(()=>{class i{constructor(){this.language=new dn("de"),this.language$=this.language.asObservable()}toggleLanguage(){let t=this.language.value==="de"?"en":"de";this.language.next(t)}setLanguage(t){this.language.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var kt=(()=>{class i{constructor(){this.zoomRequestSource=new cn,this.cameraResetRequestSource=new cn,this.zoomRequest$=this.zoomRequestSource.asObservable(),this.cameraResetRequest$=this.cameraResetRequestSource.asObservable()}requestZoom(t){this.zoomRequestSource.next(t)}requestCameraReset(){this.cameraResetRequestSource.next()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ly(i,e){if(i&1&&(F(0,"div",26)(1,"span",27),Pe(2),q(),ve(3,"span",28),q()),i&2){let t=e.$implicit;se(2),Je(t.icon),se(),Ze("innerHTML",t.text,zs)}}function Oy(i,e){if(i&1){let t=Xs();F(0,"div",1)(1,"div",2)(2,"button",3),pt("click",function(){Ai(t);let r=un();return Ri(r.goBack())}),Fe(),F(3,"svg",4),ve(4,"line",5)(5,"polyline",6),q()(),et(),F(6,"h2",7),Pe(7),q(),F(8,"div",8)(9,"button",9),pt("click",function(){Ai(t);let r=un();return Ri(r.toggleLanguage())}),Pe(10),q()()(),F(11,"div",10)(12,"h3",11),Pe(13),q(),ve(14,"p",12),q(),F(15,"div",13),bt(16,Ly,4,2,"div",14),q(),F(17,"footer",15)(18,"a",16),Fe(),F(19,"svg",17),ve(20,"path",18),q()(),et(),F(21,"a",19),Fe(),F(22,"svg",17),ve(23,"path",20)(24,"rect",21)(25,"circle",22),q()(),et(),F(26,"a",23),Fe(),F(27,"svg",17),ve(28,"path",24)(29,"polyline",25),q()()()()}if(i&2){let t=un();se(7),Je(t.profileData[t.currentLanguage].title),se(3),Xt(" ",t.currentLanguage==="de"?"EN":"DE"," "),se(3),Je(t.profileData[t.currentLanguage].greeting),se(),Ze("innerHTML",t.profileData[t.currentLanguage].bio,zs),se(2),Ze("ngForOf",t.profileData[t.currentLanguage].highlights)}}var um=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.profileData={de:{title:"Profil",greeting:"Hallo! Ich bin Daniel.",bio:"Als engagierter Informatikstudent an der Technischen Hochschule Mittelhessen, mit einer Leidenschaft f\xFCr Embedded Systems und industrielle Softwareentwicklung, strebe ich danach, innovative L\xF6sungen f\xFCr komplexe Herausforderungen zu entwickeln. Mein Ziel ist es, meine F\xE4higkeiten in einem dynamischen und internationalen Umfeld einzusetzen und kontinuierlich zu erweitern.",highlights:[{icon:"\u{1F4BB}",text:"Fundierte Kenntnisse in <strong>C/C++</strong> und <strong>Java</strong> f\xFCr robuste Softwarel\xF6sungen."},{icon:"\u{1F527}",text:"Erfahrung mit <strong>Git</strong>, <strong>Docker</strong> und agilen Methoden f\xFCr eine effiziente Entwicklung."},{icon:"\u{1F50C}",text:"Kenntnisse in <strong>MQTT</strong>, I\xB2C, SPI und Sensorintegration f\xFCr IoT-Anwendungen."},{icon:"\u{1F30D}",text:"Teamf\xE4hig und motiviert, in einem <strong>internationalen Umfeld</strong> zu wachsen."}]},en:{title:"Profile",greeting:"Hello! I'm Daniel.",bio:"As a dedicated computer science student at the Technical University of Central Hesse (THM), with a passion for embedded systems and industrial software development, I strive to create innovative solutions for complex challenges. My goal is to apply and continuously expand my skills in a dynamic and international environment.",highlights:[{icon:"\u{1F4BB}",text:"Profound knowledge in <strong>C/C++</strong> and <strong>Java</strong> for robust software solutions."},{icon:"\u{1F527}",text:"Experience with <strong>Git</strong>, <strong>Docker</strong>, and agile methodologies for efficient development."},{icon:"\u{1F50C}",text:"Knowledge in <strong>MQTT</strong>, I\xB2C, SPI, and sensor integration for IoT applications."},{icon:"\u{1F30D}",text:"A team player, motivated to grow in an <strong>international environment</strong>."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-profil"]],decls:1,vars:1,consts:[["class","profile-container",4,"ngIf"],[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"bio-section"],[1,"greeting"],[1,"bio",3,"innerHTML"],[1,"highlights"],["class","highlight-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"highlight-item"],[1,"icon"],[3,"innerHTML"]],template:function(n,r){n&1&&bt(0,Oy,30,5,"div",0),n&2&&Ze("ngIf",r.profileData)},dependencies:[Ut,jt,zr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.bio-section[_ngcontent-%COMP%]{background-color:#0003;padding:20px;border-radius:8px;border:1px solid rgba(0,191,255,.5)}.greeting[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:500;margin-bottom:8px}.bio[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#f0f0f0}.highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}.highlight-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:12px;border:1px solid rgba(0,191,255,.5);transition:background-color .2s ease}.highlight-item[_ngcontent-%COMP%]:hover{background-color:#00bfff33}.icon[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]     strong{color:#00bfff;font-weight:700}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.greeting[_ngcontent-%COMP%]{font-size:1.3rem}.bio[_ngcontent-%COMP%]{font-size:1rem}}"]})}}return i})();function Ny(i,e){if(i&1&&(F(0,"a",28),Pe(1),q()),i&2){let t=un().$implicit;Ze("href",t.href,uf),se(),Je(t.value)}}function Uy(i,e){if(i&1&&(F(0,"span",29),Pe(1),q()),i&2){let t=un().$implicit;se(),Je(t.value)}}function Fy(i,e){if(i&1&&(F(0,"div",22)(1,"div",23),Pe(2),q(),F(3,"div",24)(4,"span",25),Pe(5),q(),bt(6,Ny,2,2,"a",26)(7,Uy,2,1,"span",27),q()()),i&2){let t=e.$implicit;se(2),Je(t.icon),se(3),Je(t.text),se(),Ze("ngIf",t.href),se(),Ze("ngIf",!t.href)}}var hm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.contactData={de:{title:"Kontaktdaten",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Telefon",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Standort",value:"Gie\xDFen, Deutschland"},{icon:"\u{1F697}",text:"F\xFChrerschein",value:"Klasse B"}]},en:{title:"Contact Data",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Phone",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Location",value:"Gie\xDFen, Germany"},{icon:"\u{1F697}",text:"Driving License",value:"Class B"}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-daten"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"data-grid"],["class","data-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"data-item"],[1,"icon"],[1,"data-text"],[1,"data-label"],["target","_blank","class","data-value link",3,"href",4,"ngIf"],["class","data-value",4,"ngIf"],["target","_blank",1,"data-value","link",3,"href"],[1,"data-value"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,Fy,8,4,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.contactData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.contactData[r.currentLanguage].items))},dependencies:[Ut,jt,zr],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.data-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px}.data-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:16px;border:1px solid rgba(0,191,255,.5)}.icon[_ngcontent-%COMP%]{font-size:1.8rem;color:#00bfff}.data-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.data-label[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:2px}.data-value[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.data-value.link[_ngcontent-%COMP%]{color:#f0f0f0;text-decoration:none;transition:color .2s ease}.data-value.link[_ngcontent-%COMP%]:hover{color:#00bfff;text-decoration:underline}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function ky(i,e){if(i&1&&(F(0,"div",25)(1,"span",26),Pe(2),q(),F(3,"div",27),ve(4,"div",28),q()()),i&2){let t=e.$implicit;Ze("title",t.description),se(2),Je(t.name),se(2),ya("width",t.level,"%")}}function By(i,e){if(i&1&&(F(0,"div",21)(1,"h3",22),Pe(2),q(),F(3,"div",23),bt(4,ky,5,4,"div",24),q()()),i&2){let t=e.$implicit;se(2),Je(t.name),se(2),Ze("ngForOf",t.skills)}}var dm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.skillsData={de:{title:"Technische F\xE4higkeiten",categories:[{name:"Programmiersprachen",skills:[{name:"C/C++",level:90,description:"Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen."},{name:"Java",level:85,description:"Entwicklung von Backend-Diensten und Desktop-Anwendungen."},{name:"Python",level:70,description:"Erfahrung in Skripting, Automatisierung und Datenanalyse."},{name:"SQL",level:65,description:"Solide Kenntnisse in Datenbankabfragen und -management."}]},{name:"Tools & Technologien",skills:[{name:"Git & GitHub",level:90,description:"Effiziente Versionskontrolle und kollaborative Entwicklung."},{name:"Docker",level:75,description:"Containerisierung von Anwendungen f\xFCr konsistente Umgebungen."},{name:"Matlab/Simulink",level:70,description:"Modellierung und Simulation von Systemen."},{name:"SPS (PLC)",level:60,description:"Grundlagen der speicherprogrammierbaren Steuerungen."}]}]},en:{title:"Technical Skills",categories:[{name:"Programming Languages",skills:[{name:"C/C++",level:90,description:"Extensive experience in system programming and embedded applications."},{name:"Java",level:85,description:"Development of backend services and desktop applications."},{name:"Python",level:70,description:"Experience in scripting, automation, and data analysis."},{name:"SQL",level:65,description:"Solid knowledge in database querying and management."}]},{name:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,description:"Efficient version control and collaborative development."},{name:"Docker",level:75,description:"Containerization of applications for consistent environments."},{name:"Matlab/Simulink",level:70,description:"System modeling and simulation."},{name:"SPS (PLC)",level:60,description:"Fundamentals of programmable logic controllers."}]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-skills"]],decls:25,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],["class","category-section",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"category-section"],[1,"category-title"],[1,"skills-grid"],["class","skill-item",3,"title",4,"ngFor","ngForOf"],[1,"skill-item",3,"title"],[1,"skill-name"],[1,"skill-bar-container"],[1,"skill-bar"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),bt(11,By,5,2,"div",9),F(12,"footer",10)(13,"a",11),Fe(),F(14,"svg",12),ve(15,"path",13),q()(),et(),F(16,"a",14),Fe(),F(17,"svg",12),ve(18,"path",15)(19,"rect",16)(20,"circle",17),q()(),et(),F(21,"a",18),Fe(),F(22,"svg",12),ve(23,"path",19)(24,"polyline",20),q()()()()),n&2&&(se(7),Je(r.skillsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(),Ze("ngForOf",r.skillsData[r.currentLanguage].categories))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.category-section[_ngcontent-%COMP%]{padding-top:16px}.category-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:16px;color:#f0f0f0}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px}.skill-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.skill-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.skill-bar-container[_ngcontent-%COMP%]{width:100%;height:12px;background-color:#0000004d;border-radius:6px;overflow:hidden;border:1px solid #444}.skill-bar[_ngcontent-%COMP%]{height:100%;background-color:#00bfff;border-radius:6px;transition:width .5s ease-out}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.category-title[_ngcontent-%COMP%]{font-size:1.3rem}}"]})}}return i})();function Vy(i,e){if(i&1&&(F(0,"div",22)(1,"div",23),Pe(2),q(),F(3,"div",24),Pe(4),q()()),i&2){let t=e.$implicit;Ze("title",t.description),se(2),Je(t.icon),se(2),Je(t.name)}}var fm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.softSkillsData={de:{title:"Soziale Kompetenzen",items:[{icon:"\u{1F4D6}",name:"Lernbereitschaft",description:"Schnelle Aneignung neuer Technologien und Konzepte."},{icon:"\u{1F91D}",name:"Teamarbeit",description:"Effektive Zusammenarbeit in agilen und interdisziplin\xE4ren Teams."},{icon:"\u23F0",name:"Zeitmanagement",description:"Priorisierung von Aufgaben zur Einhaltung von Fristen."},{icon:"\u{1F4A1}",name:"Kritisches Denken",description:"Analytische Probleml\xF6sung und fundierte Entscheidungsfindung."},{icon:"\u{1F5E3}\uFE0F",name:"Effektive Kommunikation",description:"Klare Vermittlung komplexer technischer Informationen."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"\xDCbernahme von Verantwortung und Motivation des Teams."}]},en:{title:"Soft Skills",items:[{icon:"\u{1F4D6}",name:"Eagerness to Learn",description:"Rapid acquisition of new technologies and concepts."},{icon:"\u{1F91D}",name:"Teamwork",description:"Effective collaboration in agile and interdisciplinary teams."},{icon:"\u23F0",name:"Time Management",description:"Prioritizing tasks to meet deadlines effectively."},{icon:"\u{1F4A1}",name:"Critical Thinking",description:"Analytical problem-solving and informed decision-making."},{icon:"\u{1F5E3}\uFE0F",name:"Effective Communication",description:"Clearly conveying complex technical information."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"Taking responsibility and motivating the team."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-softskills"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"soft-skills-grid"],["class","soft-skill-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"soft-skill-card",3,"title"],[1,"icon"],[1,"skill-name"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,Vy,5,3,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.softSkillsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.softSkillsData[r.currentLanguage].items))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.soft-skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;padding-top:16px}.soft-skill-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center;transition:transform .2s ease,background-color .2s ease}.soft-skill-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.soft-skill-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:12px;display:block}.soft-skill-card[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function zy(i,e){if(i&1&&(F(0,"div",22)(1,"div",23),Pe(2),q(),F(3,"div",24),Pe(4),q()()),i&2){let t=e.$implicit;Ze("title",t.description),se(2),Je(t.name),se(2),Je(t.level)}}var pm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.languagesData={de:{title:"Sprachkenntnisse",items:[{name:"Franz\xF6sisch",level:"Muttersprache",description:"C2 - Vollst\xE4ndige Beherrschung in allen Kontexten."},{name:"Deutsch",level:"Verhandlungssicher",description:"C1 - Flie\xDFend in beruflichen und akademischen Umgebungen."},{name:"Englisch",level:"Gute Kenntnisse",description:"B2 - Selbstst\xE4ndige und effektive Kommunikation."}]},en:{title:"Languages",items:[{name:"French",level:"Native Speaker",description:"C2 - Complete proficiency in all contexts."},{name:"German",level:"Business Fluent",description:"C1 - Fluent in professional and academic environments."},{name:"English",level:"Proficient",description:"B2 - Independent and effective communication."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-sprachen"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"languages-grid"],["class","language-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"language-card",3,"title"],[1,"language-name"],[1,"language-level"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,zy,5,3,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.languagesData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.languagesData[r.currentLanguage].items))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.languages-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px;padding-top:16px}.language-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center}.language-name[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#f0f0f0}.language-level[_ngcontent-%COMP%]{font-size:1.1rem;color:#00bfff;margin-top:4px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function Hy(i,e){if(i&1&&(F(0,"div",22),ve(1,"div",23),F(2,"div",24)(3,"div",25),Pe(4),q(),F(5,"h3",26),Pe(6),q(),F(7,"p",27),Pe(8),q(),F(9,"p",28),Pe(10),q()()()),i&2){let t=e.$implicit;se(4),Je(t.date),se(2),Je(t.institution),se(2),Je(t.degree),se(2),Je(t.description)}}var mm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.academicData={de:{title:"Akademische Laufbahn",timeline:[{degree:"Bachelor of Science: Ingenieur-Informatik",institution:"Technische Hochschule Mittelhessen (THM)",date:"Okt 2022 - Dez 2025",description:"Praxisnahes Studium mit Fokus auf Software-Engineering, Algorithmen, objektorientierte Programmierung (Java, C++), Datenbanken (SQL), Web-Technologien und Embedded Systems."},{degree:"Deutsch-Sprachkurs (A1-C1) mit TestDaF-Zertifikat",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensivkurs zur Erlangung der sprachlichen Hochschulzugangsberechtigung f\xFCr Deutschland."},{degree:"Allgemeine Hochschulreife (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Abschluss mit Leistungskursen in Mathematik, Physik und Informatik als solide Grundlage f\xFCr ein Ingenieurstudium."}]},en:{title:"Education",timeline:[{degree:"Bachelor of Engineering: Applied Computer Science",institution:"THM - University of Applied Sciences",date:"Oct 2022 - Dec 2025",description:"Hands-on studies focusing on Software Engineering, Algorithms, Object-Oriented Programming (Java, C++), Databases (SQL), Web Technologies, and Embedded Systems."},{degree:"German Language Course (A1-C1) with TestDaF Certificate",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensive course to obtain the language proficiency required for university admission in Germany."},{degree:"General University Entrance Qualification (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Graduated with advanced courses in Mathematics, Physics, and Computer Science, providing a strong foundation for engineering studies."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-akademisch"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,Hy,11,4,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.academicData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.academicData[r.currentLanguage].timeline))},dependencies:[Ut,jt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();function Gy(i,e){if(i&1&&(F(0,"span",27),Pe(1),q()),i&2){let t=e.$implicit;se(),Je(t)}}function Wy(i,e){if(i&1&&(F(0,"div",22)(1,"h3",23),Pe(2),q(),F(3,"p",24),Pe(4),q(),F(5,"div",25),bt(6,Gy,2,1,"span",26),q()()),i&2){let t=e.$implicit;se(2),Je(t.name),se(2),Je(t.description),se(2),Ze("ngForOf",t.tags)}}var gm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.projectsData={de:{title:"Ausgew\xE4hlte Projekte",projects:[{name:"AVR Synthesizer & Musik-Player",description:"Ein mehrstufiges Embedded-Projekt, das einen AVR-Mikrocontroller in ein Musikinstrument verwandelt. Von der Erzeugung reiner Sinust\xF6ne mittels DAC und Timern \xFCber ein digitales Echtzeit-Piano bis hin zu einem kompletten Melodie-Player, der vordefinierte Lieder (z.B. Super Mario) durch pr\xE4zise Steuerung von Tonfrequenz und -dauer abspielt.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB-LED-Steuerung via USART",description:'Programmierung eines AVR-Mikrocontrollers zur Steuerung einer RGB-LED. Das System empf\xE4ngt Farbcodes (z.B. "255,100,0#") \xFCber die serielle Schnittstelle (USART) und passt die Farbe der LED dynamisch durch die Generierung von drei PWM-Signalen an.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"Infrarot-gesteuerter Timer",description:"Entwicklung eines Timers f\xFCr AVR-Mikrocontroller, der vollst\xE4ndig \xFCber eine IR-Fernbedienung nach dem NEC-Protokoll gesteuert wird. Das Projekt umfasste die C-Programmierung von Timer/Counter-Interrupts, die Behandlung externer Interrupts zur IR-Signaldekodierung und die Ansteuerung eines I2C-LCDs.",tags:["AVR","Embedded C","IR-Protokoll","I2C","Timers","Interrupts"]},{name:"I2C-Farbsensor (TCS34725)",description:"Implementierung von I2C-Master-Routinen zur Kommunikation mit Peripherieger\xE4ten. Das Projekt umfasste das Senden von Konfigurationsbefehlen an ein LCD und das Auslesen und Interpretieren von RGBC-Farbdaten (Rot, Gr\xFCn, Blau, Clear) von einem TCS34725-Farbsensor.",tags:["AVR","Embedded C","I2C","Sensoren","LCD"]},{name:"Servomotor-Steuerung mit PWM",description:"Ansteuerung eines Standard-Servomotors durch Generierung eines pr\xE4zisen PWM-Signals mit einem AVR-Timer. Das Programm bewegt den Servo schrittweise zwischen vordefinierten Positionen, um die Grundlagen der Motorsteuerung zu demonstrieren.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digitales Voltmeter mit ADC",description:"Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wert\xE4nderung) angezeigt.",tags:["AVR","Embedded C","ADC","Sensoren","LCD"]},{name:"Interaktives 3D-Portfolio",description:"Entwicklung dieses interaktiven 3D-Portfolios als virtuelle Bahnhofsszene mit Angular und Three.js. Integration von synchronisierten HTML-Panels f\xFCr dynamische Inhalte und interaktive Elemente.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelorarbeit)",description:"Desktop-Anwendung in JavaFX zur Erstellung und Verwaltung von Pr\xFCfungen. Kernst\xFCck ist die KI-gest\xFCtzte Umformulierung von Fragen \xFCber die Gemini API zur Steigerung der Pr\xFCfungsvielfalt.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Entwicklung eines intelligenten Laborsystems mit STM32 und BME280-Sensorik. Implementierung der Embedded-Software in C/C++ und einer JavaFX-GUI zur Echtzeitvisualisierung via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Echtzeit-Stoppuhr mit STM32F4",description:"Implementierung einer pr\xE4zisen digitalen Stoppuhr auf einem STM32F4 Mikrocontroller. Das Projekt umfasste die Programmierung von Timern, Interrupts und die Ansteuerung eines LCD-Displays zur Anzeige der Zeit. Fokus auf Echtzeitverarbeitung und Hardware-Interaktion.",tags:["STM32F4","Embedded C","Mikrocontroller","Timer","Interrupts","LCD"]},{name:"Autonome Wetterstation mit STM32F4",description:"Entwicklung einer autonomen Wetterstation basierend auf einem STM32F4 Mikrocontroller. Integration verschiedener Sensoren (Temperatur, Luftfeuchtigkeit, Druck) und Daten\xFCbertragung \xFCber UART/I2C. Visualisierung der Wetterdaten auf einem Display oder \xFCber serielle Schnittstelle.",tags:["STM32F4","Embedded C","Sensoren","UART","I2C","Wetterdaten"]},{name:"Terminal-Snake in C",description:"Implementierung des klassischen Snake-Spiels als Konsolenanwendung in C. Das Projekt demonstriert Kenntnisse in der Konsolenprogrammierung, Datenstrukturen und Algorithmen f\xFCr die Spielmechanik und Kollisionserkennung.",tags:["C-Programmierung","Konsolenanwendung","Algorithmen","Spieleentwicklung"]},{name:"Web-Ping-Pong mit JavaScript & Docker",description:"Entwicklung eines interaktiven Ping-Pong-Spiels f\xFCr den Webbrowser mit JavaScript. Das Projekt wurde in Docker-Containern verpackt, um eine einfache Bereitstellung und konsistente Ausf\xFChrung zu gew\xE4hrleisten. Fokus auf Frontend-Entwicklung und Containerisierung.",tags:["JavaScript","HTML5 Canvas","Webentwicklung","Docker","Containerisierung"]}]},en:{title:"Featured Projects",projects:[{name:"AVR Synthesizer & Music Player",description:"A multi-stage embedded project that turns an AVR microcontroller into a musical instrument. From generating pure sine wave tones using a DAC and timers, to a real-time digital piano, to a full melody player capable of playing predefined songs (e.g., Super Mario) by precisely controlling note frequency and duration.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB LED Control via USART",description:'Programmed an AVR microcontroller to control an RGB LED. The system receives color codes (e.g., "255,100,0#") via the serial interface (USART) and dynamically adjusts the LED color by generating three PWM signals.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"IR Remote Controlled Timer",description:"Developed a timer for AVR microcontrollers, fully controllable via an IR remote using the NEC protocol. The project involved C programming for timer/counter interrupts, handling external interrupts for IR signal decoding, and interfacing with an I2C LCD.",tags:["AVR","Embedded C","IR Protocol","I2C","Timers","Interrupts"]},{name:"I2C Color Sensor (TCS34725)",description:"Implementation of I2C master routines to communicate with peripherals. The project involved sending configuration commands to an LCD and reading/interpreting RGBC (Red, Green, Blue, Clear) color data from a TCS34725 color sensor.",tags:["AVR","Embedded C","I2C","Sensors","LCD"]},{name:"Servo Motor Control with PWM",description:"Controlled a standard servo motor by generating a precise PWM signal with an AVR timer. The program moves the servo incrementally between predefined positions, demonstrating the fundamentals of motor control.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digital Voltmeter with ADC",description:"Utilized the AVR's built-in 12-bit Analog-to-Digital Converter (ADC) to measure an input voltage. The result was converted to volts and a percentage, and displayed on an LCD with flicker-free logic (updating only on value change).",tags:["AVR","Embedded C","ADC","Sensors","LCD"]},{name:"Interactive 3D Portfolio",description:"Development of this interactive 3D portfolio as a virtual train station scene using Angular and Three.js. Integration of synchronized HTML panels for dynamic content and interactive elements.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelor Thesis)",description:"Desktop application built with JavaFX for creating and managing exams. A core feature is the AI-powered rephrasing of questions via the Gemini API to enhance exam diversity.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Developed a smart laboratory system using STM32 and BME280 sensors. Implemented the embedded software in C/C++ and a JavaFX GUI for real-time visualization via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Real-time Stopwatch with STM32F4",description:"Implementation of a precise digital stopwatch on an STM32F4 microcontroller. The project involved programming timers, interrupts, and controlling an LCD display for time visualization. Focus on real-time processing and hardware interaction.",tags:["STM32F4","Embedded C","Microcontroller","Timers","Interrupts","LCD"]},{name:"Autonomous Weather Station with STM32F4",description:"Development of an autonomous weather station based on an STM32F4 microcontroller. Integration of various sensors (temperature, humidity, pressure) and data transmission via UART/I2C. Visualization of weather data on a display or via serial interface.",tags:["STM32F4","Embedded C","Sensors","UART","I2C","Weather Data"]},{name:"Terminal Snake Game in C",description:"Implementation of the classic Snake game as a console application in C. This project demonstrates knowledge of console programming, data structures, and algorithms for game mechanics and collision detection.",tags:["C Programming","Console Application","Algorithms","Game Development"]},{name:"Web Ping-Pong Game with JavaScript & Docker",description:"Development of an interactive Ping-Pong game for the web browser using JavaScript. The project was containerized with Docker for easy deployment and consistent execution. Focus on frontend development and containerization.",tags:["JavaScript","HTML5 Canvas","Web Development","Docker","Containerization"]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-projekte"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"projects-grid"],["class","project-card",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"project-card"],[1,"project-name"],[1,"project-description"],[1,"project-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,Wy,7,3,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.projectsData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.projectsData[r.currentLanguage].projects))},dependencies:[Ut,jt],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;padding-top:16px}.project-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;transition:transform .2s ease,background-color .2s ease}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.project-name[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0;margin-bottom:8px}.project-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;line-height:1.5;margin-bottom:12px}.project-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tag[_ngcontent-%COMP%]{background-color:#00bfff33;color:#00bfff;padding:4px 8px;border-radius:4px;font-size:.8rem}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.project-name[_ngcontent-%COMP%]{font-size:1.2rem}}"]})}}return i})();function Xy(i,e){if(i&1&&(F(0,"div",22),ve(1,"div",23),F(2,"div",24)(3,"div",25),Pe(4),q(),F(5,"h3",26),Pe(6),q(),F(7,"p",27),Pe(8),q(),F(9,"p",28),Pe(10),q()()()),i&2){let t=e.$implicit;se(4),Je(t.date),se(2),vf("",t.title," bei ",t.company,""),se(2),Je(t.location),se(2),Je(t.description)}}var vm=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.experienceData={de:{title:"Berufserfahrung",timeline:[{title:"Forschung & Entwicklung im Bereich Embedded Systems",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"Oktober 2023 - Laufend",description:"Mitarbeit an einem Forschungsprojekt zur Entwicklung eines Microcontroller-basierten Remote-Labors. Meine Aufgaben umfassen die Implementierung, das Testen und die Optimierung von Embedded-Systemen, um eine zuverl\xE4ssige und performante Fernsteuerung der Laborumgebung zu gew\xE4hrleisten."},{title:"Verwaltungsunterst\xFCtzung & Sprachmittlung",company:"Bundesamt f\xFCr Migration und Fl\xFCchtlinge (BAMF)",location:"Gie\xDFen, Deutschland",date:"2023 - Laufend",description:"Als Dolmetscher unterst\xFCtze ich bei Anh\xF6rungen und erstelle pr\xE4zise schriftliche \xDCbersetzungen. Zudem bin ich f\xFCr die Aktenanlage und die Unterst\xFCtzung allgemeiner Verwaltungsprozesse zust\xE4ndig, um eine reibungslose Kommunikation zwischen der Beh\xF6rde und den Antragstellern sicherzustellen."},{title:"Verbundzusteller",company:"Deutsche Post DHL",location:"Deutschland",date:"Juni 2022 - Laufend",description:"Als Zusteller bei der Deutschen Post DHL bin ich f\xFCr die zuverl\xE4ssige Lieferung von Briefen und Paketen verantwortlich. Diese Rolle erfordert ein hohes Ma\xDF an Eigenorganisation und Zeitmanagement. Ein wesentlicher Teil meiner T\xE4tigkeit ist die st\xE4ndige Interaktion mit Kunden, um eine erfolgreiche Zustellung sicherzustellen und einen exzellenten Service zu bieten."},{title:"Bachelorarbeit & Softwareentwicklung mit JavaFX",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"April 2025 - Dezember 2025",description:"Im Rahmen meiner Bachelorarbeit habe ich die Desktop-Anwendung 'ExamBuilder' mit JavaFX und nach dem MVC-Muster entworfen und entwickelt. Die Anwendung dient der Erstellung, Verwaltung und dem Export von Pr\xFCfungen. Zu den Kernfunktionen geh\xF6ren die flexible Zusammenstellung von Fragen, das Generieren von L\xF6sungsbl\xE4ttern und eine innovative Funktion zur KI-gest\xFCtzten Reformulierung von Fragen, um die Pr\xFCfungsvielfalt zu erh\xF6hen."},{title:"Praktikum im CNC-Bereich",company:"Schunk Group (STS)",location:"Heuchelheim, Deutschland",date:"Juli 2025 - August 2025",description:"Intensives Praktikum in der Fertigung, in dem ich f\xFCr die Programmierung und Bedienung von Siemens-CNC-Maschinen (Sinumerik) verantwortlich war. Zu meinen Aufgaben geh\xF6rten die selbstst\xE4ndige Fertigung von Pr\xE4zisionsbauteilen sowie die kontinuierliche \xDCberwachung und Optimierung der Fertigungsprozesse."}]},en:{title:"Work Experience",timeline:[{title:"Research & Development in Embedded Systems",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"October 2023 - Present",description:"Contributing to a research project focused on developing a microcontroller-based remote laboratory. My responsibilities include implementing, testing, and optimizing embedded systems to ensure reliable and high-performance remote control of the lab environment."},{title:"Administrative Support & Language Services",company:"Federal Office for Migration and Refugees (BAMF)",location:"Giessen, Germany",date:"2023 - Present",description:"As an interpreter, I facilitate hearings and provide precise written translations. I am also responsible for file creation and supporting general administrative processes to ensure smooth communication between the authorities and applicants."},{title:"Delivery Associate",company:"Deutsche Post DHL",location:"Germany",date:"June 2022 - Present",description:"As a delivery associate for Deutsche Post DHL, I am responsible for the reliable delivery of letters and parcels. This role demands a high level of self-organization and time management. A significant part of my work involves constant communication with customers to ensure successful deliveries and provide excellent service."},{title:"Bachelor Thesis & Software Development with JavaFX",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"April 2025 - December 2025",description:"As part of my bachelor thesis, I designed and developed the 'ExamBuilder' desktop application using JavaFX, following the MVC design pattern. The application enables the creation, management, and export of exams. Key features include flexible assembly of exam questions, automatic generation of correction sheets, and an innovative feature for AI-powered question rephrasing to enhance exam diversity."},{title:"Internship in CNC Machining",company:"Schunk Group (STS)",location:"Heuchelheim, Germany",date:"July 2025 - August 2025",description:"Intensive internship in a manufacturing environment where I was responsible for programming and operating Siemens CNC machines (Sinumerik). My tasks included the independent production of precision components and the continuous monitoring and optimization of manufacturing processes."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ve($t),Ve(kt))}}static{this.\u0275cmp=At({type:i,selectors:[["app-erfahrung"]],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(F(0,"div",0)(1,"div",1)(2,"button",2),pt("click",function(){return r.goBack()}),Fe(),F(3,"svg",3),ve(4,"line",4)(5,"polyline",5),q()(),et(),F(6,"h2",6),Pe(7),q(),F(8,"div",7)(9,"button",8),pt("click",function(){return r.toggleLanguage()}),Pe(10),q()()(),F(11,"div",9),bt(12,Xy,11,5,"div",10),q(),F(13,"footer",11)(14,"a",12),Fe(),F(15,"svg",13),ve(16,"path",14),q()(),et(),F(17,"a",15),Fe(),F(18,"svg",13),ve(19,"path",16)(20,"rect",17)(21,"circle",18),q()(),et(),F(22,"a",19),Fe(),F(23,"svg",13),ve(24,"path",20)(25,"polyline",21),q()()()()),n&2&&(se(7),Je(r.experienceData[r.currentLanguage].title),se(3),Xt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Ze("ngForOf",r.experienceData[r.currentLanguage].timeline))},dependencies:[Ut,jt],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();var _m=[{path:"",redirectTo:"profil",pathMatch:"full"},{path:"profil",component:um},{path:"daten",component:hm},{path:"skills",component:dm},{path:"softskills",component:fm},{path:"sprachen",component:pm},{path:"akademisch",component:mm},{path:"projekte",component:gm},{path:"erfahrung",component:vm},{path:"screen",loadComponent:()=>import("./chunk-FMK2ZP5W.js").then(i=>i.GiantScreenComponent)},{path:"**",redirectTo:"profil"}];var ym={providers:[lh(_m),Kf(),nf(ml,cm),Uu()]};var oc="177";var Gm=0,Qh=1,Wm=2;var ed=1,ac=2,ni=3,In=0,Qt=1,Dn=2,bi=0,Mr=1,td=2,nd=3,id=4,Xm=5,ji=100,jm=101,qm=102,$m=103,Ym=104,Zm=200,Jm=201,Km=202,Qm=203,Ul=204,Fl=205,eg=206,tg=207,ng=208,ig=209,rg=210,sg=211,og=212,ag=213,lg=214,lc=0,cc=1,uc=2,br=3,hc=4,dc=5,fc=6,pc=7,rd=0,cg=1,ug=2,Si=0,hg=1,dg=2,fg=3,pg=4,mg=5,gg=6,vg=7;var zh=300,Ar=301,Rr=302,mc=303,gc=304,ia=306,kl=1e3,Xi=1001,Bl=1002,Pn=1003,_g=1004;var ra=1005;var Hn=1006,vc=1007;var Ki=1008;var Xn=1009,sd=1010,od=1011,Cs=1012,_c=1013,Qi=1014,ii=1015,As=1016,yc=1017,xc=1018,Rs=1020,ad=35902,ld=1021,cd=1022,Ln=1023,_s=1026,Is=1027,ud=1028,Mc=1029,hd=1030,bc=1031;var Sc=1033,sa=33776,oa=33777,aa=33778,la=33779,wc=35840,Ec=35841,Tc=35842,Cc=35843,Ac=36196,Rc=37492,Ic=37496,Pc=37808,Dc=37809,Lc=37810,Oc=37811,Nc=37812,Uc=37813,Fc=37814,kc=37815,Bc=37816,Vc=37817,zc=37818,Hc=37819,Gc=37820,Wc=37821,ca=36492,Xc=36494,jc=36495,dd=36283,qc=36284,$c=36285,Yc=36286;var Lo=2300,Vl=2301,Nl=2302,Hh=2400,Gh=2401,Wh=2402;var yg=3200,xg=3201;var fd=0,Mg=1,wi="",Mn="srgb",Sr="srgb-linear",Oo="linear",xt="srgb";var xr=7680;var Xh=519,bg=512,Sg=513,wg=514,pd=515,Eg=516,Tg=517,Cg=518,Ag=519,jh=35044;var md="300 es",Kn=2e3,No=2001;var xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mh=Math.PI/180,Uo=180/Math.PI;function ua(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function jy(i,e){return(i%e+e)%e}function gh(i,e,t){return(1-t)*i+t*e}function Co(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*v,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,f*w);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let M=a*w;if(l=l*m+d*M,c=c*m+p*M,u=u*m+g*M,h=h*m+v*M,m===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vh=new L,xm=new Qn,Xe=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],w=r[1],S=r[4],M=r[7],D=r[2],C=r[5],T=r[8];return s[0]=o*v+a*w+l*D,s[3]=o*m+a*S+l*C,s[6]=o*f+a*M+l*T,s[1]=c*v+u*w+h*D,s[4]=c*m+u*S+h*C,s[7]=c*f+u*M+h*T,s[2]=d*v+p*w+g*D,s[5]=d*m+p*S+g*C,s[8]=d*f+p*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_h.makeScale(e,t)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_h=new Xe;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){let i=ys("canvas");return i.style.display="block",i}var Mm={};function wr(i){i in Mm||(Mm[i]=!0,console.warn(i))}function Ig(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Pg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var bm=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Oo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:e,whitePoint:n,transfer:Oo,toXYZ:bm,fromXYZ:Sm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:bm,fromXYZ:Sm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}var at=qy();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=ys("canvas")),ss.width=e.width,ss.height=e.height;let r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$y=0,xs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yh(r[o].image)):s.push(yh(r[o]))}else s=yh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function yh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yy=0,xh=new L,ri=(()=>{class i extends xi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Xi,s=Xi,o=Hn,a=Ki,l=Ln,c=Xn,u=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=ua(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=zh,i.DEFAULT_ANISOTROPY=1,i})(),yt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(p+1)/2,D=(f+1)/2,C=(u+d)/4,T=(h+v)/4,I=(g+m)/4;return S>M&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=T/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=I/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=T/s,r=I/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new ri(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new xs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends ri{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends ri{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gl.copy(n.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),vl.subVectors(this.max,Ao),os.subVectors(e.a,Ao),as.subVectors(e.b,Ao),ls.subVectors(e.c,Ao),ki.subVectors(as,os),Bi.subVectors(ls,as),fr.subVectors(os,ls);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-fr.z,fr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,fr.z,0,-fr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-fr.y,fr.x,0];return!Mh(t,os,as,ls,vl)||(t=[1,0,0,0,1,0,0,0,1],!Mh(t,os,as,ls,vl))?!1:(_l.crossVectors(ki,Bi),t=[_l.x,_l.y,_l.z],Mh(t,os,as,ls,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,gl=new qi,os=new L,as=new L,ls=new L,ki=new L,Bi=new L,fr=new L,Ao=new L,vl=new L,_l=new L,pr=new L;function Mh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){pr.fromArray(i,s);let a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zy=new qi,Ro=new L,bh=new L,Ms=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ro,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(bh)),this.expandByPoint(Ro.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pi=new L,Sh=new L,yl=new L,Vi=new L,wh=new L,xl=new L,Eh=new L,ko=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sh.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Sh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(yl),a=Vi.dot(this.direction),l=-Vi.dot(yl),c=Vi.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sh).addScaledVector(yl,d),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),r=pi.dot(pi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,r,s){wh.subVectors(t,e),xl.subVectors(n,e),Eh.crossVectors(wh,xl);let o=this.direction.dot(Eh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);let l=a*this.direction.dot(xl.crossVectors(Vi,xl));if(l<0)return null;let c=a*this.direction.dot(wh.cross(Vi));if(c<0||l+c>o)return null;let u=-a*Vi.dot(Eh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,d,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,v,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,Ky)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),zi.crossVectors(n,yn),zi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),zi.crossVectors(n,yn)),zi.normalize(),Ml.crossVectors(yn,zi),r[0]=zi.x,r[4]=Ml.x,r[8]=yn.x,r[1]=zi.y,r[5]=Ml.y,r[9]=yn.y,r[2]=zi.z,r[6]=Ml.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],S=n[7],M=n[11],D=n[15],C=r[0],T=r[4],I=r[8],b=r[12],x=r[1],R=r[5],z=r[9],k=r[13],j=r[2],X=r[6],H=r[10],J=r[14],G=r[3],oe=r[7],pe=r[11],Ie=r[15];return s[0]=o*C+a*x+l*j+c*G,s[4]=o*T+a*R+l*X+c*oe,s[8]=o*I+a*z+l*H+c*pe,s[12]=o*b+a*k+l*J+c*Ie,s[1]=u*C+h*x+d*j+p*G,s[5]=u*T+h*R+d*X+p*oe,s[9]=u*I+h*z+d*H+p*pe,s[13]=u*b+h*k+d*J+p*Ie,s[2]=g*C+v*x+m*j+f*G,s[6]=g*T+v*R+m*X+f*oe,s[10]=g*I+v*z+m*H+f*pe,s[14]=g*b+v*k+m*J+f*Ie,s[3]=w*C+S*x+M*j+D*G,s[7]=w*T+S*R+M*X+D*oe,s[11]=w*I+S*z+M*H+D*pe,s[15]=w*b+S*k+M*J+D*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+v*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,S=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,M=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,D=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,C=t*w+n*S+r*M+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=w*T,e[1]=(v*d*s-h*m*s-v*r*p+n*m*p+h*r*f-n*d*f)*T,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*f+n*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*T,e[4]=S*T,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*T,e[8]=M*T,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*f-t*h*f)*T,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*f+t*a*f)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*T,e[12]=D*T,e[13]=(u*v*r-g*h*r+g*n*d-t*v*d-u*n*m+t*h*m)*T,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,v=o*u,m=o*h,f=a*h,w=l*c,S=l*u,M=l*h,D=n.x,C=n.y,T=n.z;return r[0]=(1-(v+f))*D,r[1]=(p+M)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(d+f))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+S)*T,r[9]=(m-w)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=cs.set(r[0],r[1],r[2]).length(),o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);let c=1/s,u=1/o,h=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Kn){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),p,g;if(a===Kn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===No)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Kn){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,p=(n+r)*u,g,v;if(a===Kn)g=(o+s)*h,v=-2*h;else if(a===No)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new L,Vn=new Rt,Jy=new L(0,0,0),Ky=new L(1,1,1),zi=new L,Ml=new L,yn=new L,wm=new Rt,Em=new Qn,$i=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(st(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return wm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wm,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Em.setFromEuler(this),this.setFromQuaternion(Em,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qy=0,Tm=new L,us=new Qn,mi=new Rt,bl=new L,Io=new L,ex=new L,tx=new Qn,Cm=new L(1,0,0),Am=new L(0,1,0),Rm=new L(0,0,1),Im={type:"added"},nx={type:"removed"},hs={type:"childadded",child:null},Th={type:"childremoved",child:null},Kt=(()=>{class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,n=new $i,r=new Qn,s=new L(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Xe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return us.setFromAxisAngle(t,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,n){return us.setFromAxisAngle(t,n),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Cm,t)}rotateY(t){return this.rotateOnAxis(Am,t)}rotateZ(t){return this.rotateOnAxis(Rm,t)}translateOnAxis(t,n){return Tm.copy(t).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Cm,t)}translateY(t){return this.translateOnAxis(Am,t)}translateZ(t){return this.translateOnAxis(Rm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?bl.copy(t):bl.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Io,bl,this.up):mi.lookAt(bl,Io,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),us.setFromRotationMatrix(mi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Im),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(nx),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Im),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,ex),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,tx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>wt(fe({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>fe({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new L(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),zn=new L,gi=new L,Ch=new L,vi=new L,ds=new L,fs=new L,Pm=new L,Ah=new L,Rh=new L,Ih=new L,Ph=new yt,Dh=new yt,Lh=new yt,Wi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),gi.subVectors(n,t),Ch.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(gi),l=zn.dot(Ch),c=gi.dot(gi),u=gi.dot(Ch),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ph.setScalar(0),Dh.setScalar(0),Lh.setScalar(0),Ph.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ph,s.x),o.addScaledVector(Dh,s.y),o.addScaledVector(Lh,s.z),o}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),gi.subVectors(e,t),zn.cross(gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ds.subVectors(r,n),fs.subVectors(s,n),Ah.subVectors(e,n);let l=ds.dot(Ah),c=fs.dot(Ah);if(l<=0&&c<=0)return t.copy(n);Rh.subVectors(e,r);let u=ds.dot(Rh),h=fs.dot(Rh);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ds,o);Ih.subVectors(e,s);let p=ds.dot(Ih),g=fs.dot(Ih);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fs,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Pm,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Oh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=jy(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Oh(o,s,e+1/3),this.g=Oh(o,s,e),this.b=Oh(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=Lg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return at.workingToColorSpace(nn.copy(this),e),Math.round(st(nn.r*255,0,255))*65536+Math.round(st(nn.g*255,0,255))*256+Math.round(st(nn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Mn){at.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Sl);let n=gh(Hi.h,Sl.h,t),r=gh(Hi.s,Sl.s,t),s=gh(Hi.l,Sl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ot;ot.NAMES=Lg;var ix=0,Yi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Mr,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new L,wl=new tt,rx=0,bn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Co(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Co(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Co(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Co(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}};var Bo=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vo=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var zt=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},sx=0,Rn=new Rt,Nh=new Kt,ps=new L,xn=new qi,Po=new qi,Yt=new L,Gn=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Vo:Bo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(xn.min,Po.min),xn.expandByPoint(Yt),Yt.addVectors(xn.max,Po.max),xn.expandByPoint(Yt)):(xn.expandByPoint(Po.min),xn.expandByPoint(Po.max))}xn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Yt.add(ps)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let c=new L,u=new L,h=new L,d=new tt,p=new tt,g=new tt,v=new L,m=new L;function f(I,b,x){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(v),a[b].add(v),a[x].add(v),l[I].add(m),l[b].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,b=w.length;I<b;++I){let x=w[I],R=x.start,z=x.count;for(let k=R,j=R+z;k<j;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new L,M=new L,D=new L,C=new L;function T(I){D.fromBufferAttribute(r,I),C.copy(D);let b=a[I];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),M.crossVectors(C,b);let R=M.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,b=w.length;I<b;++I){let x=w[I],R=x.start,z=x.count;for(let k=R,j=R+z;k<j;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new bn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dm=new Rt,mr=new ko,El=new Ms,Lm=new L,Tl=new L,Cl=new L,Al=new L,Uh=new L,Rl=new L,Om=new L,Il=new L,te=class extends Kt{constructor(e=new Gn,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Uh.fromBufferAttribute(h,e),o?Rl.addScaledVector(Uh,u):Rl.addScaledVector(Uh.sub(t),u))}t.add(Rl)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(El.containsPoint(mr.origin)===!1&&(mr.intersectSphere(El,Lm)===null||mr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Dm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Dm),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,D=S;M<D;M+=3){let C=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);r=Pl(this,f,e,n,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=Pl(this,o,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,D=S;M<D;M+=3){let C=M,T=M+1,I=M+2;r=Pl(this,f,e,n,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let w=m,S=m+1,M=m+2;r=Pl(this,o,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ox(i,e,t,n,r,s,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===In,a),l===null)return null;Il.copy(a),Il.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:i}}function Pl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Tl),i.getVertexPosition(l,Cl),i.getVertexPosition(c,Al);let u=ox(i,e,t,n,Tl,Cl,Al,Om);if(u){let h=new L;Wi.getBarycoord(Om,Tl,Cl,Al,h),r&&(u.uv=Wi.getInterpolatedAttribute(r,a,l,c,h,new tt)),s&&(u.uv1=Wi.getInterpolatedAttribute(s,a,l,c,h,new tt)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Wi.getNormal(Tl,Cl,Al,d.normal),u.face=d,u.barycoord=h}return u}var je=class i extends Gn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(v,m,f,w,S,M,D,C,T,I,b){let x=M/T,R=D/I,z=M/2,k=D/2,j=C/2,X=T+1,H=I+1,J=0,G=0,oe=new L;for(let pe=0;pe<H;pe++){let Ie=pe*R-k;for(let Ke=0;Ke<X;Ke++){let Mt=Ke*x-z;oe[v]=Mt*w,oe[m]=Ie*S,oe[f]=j,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[f]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ke/T),h.push(1-pe/I),J+=1}}for(let pe=0;pe<I;pe++)for(let Ie=0;Ie<T;Ie++){let Ke=d+Ie+X*pe,Mt=d+Ie+X*(pe+1),Y=d+(Ie+1)+X*(pe+1),re=d+(Ie+1)+X*pe;l.push(Ke,Mt,re),l.push(Mt,Y,re),G+=6}a.addGroup(p,G,b),p+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let r in n)e[r]=n[r]}return e}function ax(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Og={clone:Ir,merge:on},lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zo=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new L,Nm=new tt,Um=new tt,Zt=class extends zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Um),t.subVectors(Um,Nm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mh*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,Wl=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(ms,gs,e,t);r.layers=this.layers,this.add(r);let s=new Zt(ms,gs,e,t);s.layers=this.layers,this.add(s);let o=new Zt(ms,gs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(ms,gs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ho=class extends ri{constructor(e=[],t=Ar,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xl=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ho(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new je(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:bi});s.uniforms.tEquirect.value=t;let o=new te(r,s),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Hn),new Wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Et=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ux={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Go=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Fh=new L,hx=new L,dx=new Xe,Jn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fh.subVectors(n,t).cross(hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dx.getNormalMatrix(e),r=this.coplanarPoint(Fh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gr=new Ms,Dl=new L,ws=class{constructor(e=new Jn,t=new Jn,n=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],w=r[13],S=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,m-p,M-f).normalize(),n[1].setComponents(l+s,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+u,m+g,M+w).normalize(),n[3].setComponents(l-o,d-u,m-g,M-w).normalize(),n[4].setComponents(l-a,d-h,m-v,M-S).normalize(),t===Kn)n[5].setComponents(l+a,d+h,m+v,M+S).normalize();else if(t===No)n[5].setComponents(a,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ti=class extends ri{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wo=class extends ri{constructor(e,t,n=Qi,r,s,o,a=Pn,l=Pn,c,u=_s,h=1){if(u!==_s&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Es=class i extends Gn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new L,u=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let p=n+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class i extends Gn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],p=[],g=0,v=[],m=n/2,f=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function w(){let M=new L,D=new L,C=0,T=(t-e)/n;for(let I=0;I<=s;I++){let b=[],x=I/s,R=x*(t-e)+e;for(let z=0;z<=r;z++){let k=z/r,j=k*l+a,X=Math.sin(j),H=Math.cos(j);D.x=R*X,D.y=-x*n+m,D.z=R*H,h.push(D.x,D.y,D.z),M.set(X,T,H).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-x),b.push(g++)}v.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){let x=v[b][I],R=v[b+1][I],z=v[b+1][I+1],k=v[b][I+1];(e>0||b!==0)&&(u.push(x,R,k),C+=3),(t>0||b!==s-1)&&(u.push(R,z,k),C+=3)}c.addGroup(f,C,0),f+=C}function S(M){let D=g,C=new tt,T=new L,I=0,b=M===!0?e:t,x=M===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;let R=g;for(let z=0;z<=r;z++){let j=z/r*l+a,X=Math.cos(j),H=Math.sin(j);T.x=b*H,T.y=m*x,T.z=b*X,h.push(T.x,T.y,T.z),d.push(0,x,0),C.x=X*.5+.5,C.y=H*.5*x+.5,p.push(C.x,C.y),g++}for(let z=0;z<r;z++){let k=D+z,j=R+z;M===!0?u.push(j,j+1,k):u.push(j+1,j,k),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xo=class i extends Lt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sn=class i extends Gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let w=f*d-o;for(let S=0;S<c;S++){let M=S*h-s;g.push(M,-w,0),v.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let S=w+c*f,M=w+c*(f+1),D=w+1+c*(f+1),C=w+1+c*f;p.push(S,M,C),p.push(M,D,C)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wn=class i extends Gn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){let w=[],S=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let C=D/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+M,1-S),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let S=u[f][w+1],M=u[f][w],D=u[f+1][w],C=u[f+1][w+1];(f!==0||o>0)&&p.push(S,M,C),(f!==n-1||l<Math.PI)&&p.push(M,D,C)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ce=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var jl=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ll(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Er=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends Er{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gh:s=e,a=2*t-n;break;case Wh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:o=e,l=2*n-t;break;case Wh:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let D=0;D!==a;++D)s[D]=f*o[u+D]+w*o[c+D]+S*o[l+D]+M*o[h+D];return s}},Yl=class extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Zl=class extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ll(t,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ll(e.times,Array),values:Ll(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&fx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Nl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Vl;var Zi=class extends wn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Lo;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Jl.prototype.ValueTypeName="color";var Kl=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Kl.prototype.ValueTypeName="number";var Ql=class extends Er{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Qn.slerpFlat(s,0,o,c-a,o,c,l);return s}},jo=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends wn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Lo;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};ec.prototype.ValueTypeName="vector";var qo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},tc=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Ng=new tc,ha=(()=>{class i{constructor(t){this.manager=t!==void 0?t:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),_i={},qh=class extends Error{constructor(e,t){super(e),this.response=t}},nc=class extends ha{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=qo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:r});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=_i[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){w();function w(){h.read().then(({done:S,value:M})=>{if(S)f.close();else{v+=M.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,T=u.length;C<T;C++){let I=u[C];I.onProgress&&I.onProgress(D)}f.enqueue(M),w()}},S=>{f.error(S)})}}});return new Response(m)}else throw new qh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{qo.add(e,c);let u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ic=class extends ha{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ys("img");function l(){u(),qo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var $o=class extends ha{constructor(e){super(e)}load(e,t,n,r){let s=new ri,o=new ic(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Tr=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yo=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kh=new Rt,Fm=new L,km=new L,Zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fm),km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(km),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$h=class extends Zo{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ts=class extends Tr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bm=new Rt,Do=new L,Bh=new L,Yh=class extends Zo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),n.position.copy(Do),Bh.copy(n.position),Bh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bh),n.updateMatrixWorld(),r.makeTranslation(-Do.x,-Do.y,-Do.z),Bm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bm)}},Mi=class extends Tr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jo=class extends zo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zh=class extends Zo{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ol,Qo=class{static getContext(){return Ol===void 0&&(Ol=new(window.AudioContext||window.webkitAudioContext)),Ol}static setContext(e){Ol=e}},ea=class extends ha{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new nc(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);Qo.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}};var rc=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},sc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Vm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vm(){return performance.now()}var vr=new L,Vh=new Qn,px=new L,_r=new L,yr=new L,ta=class extends Kt{constructor(){super(),this.type="AudioListener",this.context=Qo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new sc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vr,Vh,px),_r.set(0,0,-1).applyQuaternion(Vh),yr.set(0,1,0).applyQuaternion(Vh),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vr.x,n),t.positionY.linearRampToValueAtTime(vr.y,n),t.positionZ.linearRampToValueAtTime(vr.z,n),t.forwardX.linearRampToValueAtTime(_r.x,n),t.forwardY.linearRampToValueAtTime(_r.y,n),t.forwardZ.linearRampToValueAtTime(_r.z,n),t.upX.linearRampToValueAtTime(yr.x,n),t.upY.linearRampToValueAtTime(yr.y,n),t.upZ.linearRampToValueAtTime(yr.z,n)}else t.setPosition(vr.x,vr.y,vr.z),t.setOrientation(_r.x,_r.y,_r.z,yr.x,yr.y,yr.z)}},Cr=class extends Kt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var _d="\\[\\]\\.:\\/",mx=new RegExp("["+_d+"]","g"),yd="[^"+_d+"]",gx="[^"+_d.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",yd),_x=/(WCOD+)?/.source.replace("WCOD",gx),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),Mx=new RegExp("^"+vx+_x+yx+xx+"$"),bx=["material","materials","bones","map"],Jh=class{constructor(e,t,n){let r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){let n=Mx.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);bx.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Jh,i})();Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eA=new Float32Array(1);var zm=new Rt,na=class{constructor(e,t,n=0,r=1/0){this.ray=new ko(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(e,t=!0,n=[]){return Kh(e,this,n,t),n.sort(Hm),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Kh(e[r],this,n,t);return n.sort(Hm),n}};function Hm(i,e){return i.distance-e.distance}function Kh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Kh(s[o],e,t,!0)}}function xd(i,e,t,n){let r=Sx(n);switch(t){case ld:return i*e;case ud:return i*e/r.components*r.byteLength;case Mc:return i*e/r.components*r.byteLength;case hd:return i*e*2/r.components*r.byteLength;case bc:return i*e*2/r.components*r.byteLength;case cd:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case Sc:return i*e*4/r.components*r.byteLength;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case wc:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case Xc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dd:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $c:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(i){switch(i){case Xn:case sd:return{byteLength:1,components:1};case Cs:case od:case As:return{byteLength:2,components:1};case yc:case xc:return{byteLength:2,components:4};case Qi:case _c:case ii:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function s0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wx(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
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
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$x=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
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
#endif`,SM=`struct PhysicalMaterial {
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
}`,wM=`
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,NM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
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
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cb=`float getShadowMask() {
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
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Pb=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Gb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,Xb=`#define NORMAL
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
}`,jb=`#define PHONG
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
}`,qb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 color;
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
}`,nS=`uniform float rotation;
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
}`,iS=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Ex,alphahash_pars_fragment:Tx,alphamap_fragment:Cx,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Ix,aomap_fragment:Px,aomap_pars_fragment:Dx,batching_pars_vertex:Lx,batching_vertex:Ox,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Fx,iridescence_fragment:kx,bumpmap_pars_fragment:Bx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:Xx,color_pars_vertex:jx,color_vertex:qx,common:$x,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Kx,emissivemap_fragment:Qx,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:vM,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:hM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:fM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:yM,lights_phong_fragment:xM,lights_phong_pars_fragment:MM,lights_physical_fragment:bM,lights_physical_pars_fragment:SM,lights_fragment_begin:wM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:IM,map_fragment:PM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:OM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:UM,morphinstance_vertex:FM,morphcolor_vertex:kM,morphnormal_vertex:BM,morphtarget_pars_vertex:VM,morphtarget_vertex:zM,normal_fragment_begin:HM,normal_fragment_maps:GM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:jM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:JM,opaque_fragment:KM,packing:QM,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:rb,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:ub,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:fb,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:vb,transmission_fragment:_b,transmission_pars_fragment:yb,uv_pars_fragment:xb,uv_pars_vertex:Mb,uv_vertex:bb,worldpos_vertex:Sb,background_vert:wb,background_frag:Eb,backgroundCube_vert:Tb,backgroundCube_frag:Cb,cube_vert:Ab,cube_frag:Rb,depth_vert:Ib,depth_frag:Pb,distanceRGBA_vert:Db,distanceRGBA_frag:Lb,equirect_vert:Ob,equirect_frag:Nb,linedashed_vert:Ub,linedashed_frag:Fb,meshbasic_vert:kb,meshbasic_frag:Bb,meshlambert_vert:Vb,meshlambert_frag:zb,meshmatcap_vert:Hb,meshmatcap_frag:Gb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:jb,meshphong_frag:qb,meshphysical_vert:$b,meshphysical_frag:Yb,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:Kb,points_frag:Qb,shadow_vert:eS,shadow_frag:tS,sprite_vert:nS,sprite_frag:iS},le={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([le.lights,le.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Zc={r:0,b:0,g:0},Pr=new $i,rS=new Rt;function sS(i,e,t,n,r,s,o){let a=new ot(0),l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1,D=g(S);D===null?f(a,l):D&&D.isColor&&(f(D,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){let D=g(M);D&&(D.isCubeTexture||D.mapping===ia)?(u===void 0&&(u=new te(new je(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ir(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(M.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Pr)),u.material.toneMapped=at.getTransfer(D.colorSpace)!==xt,(h!==D||d!==D.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new te(new sn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ir(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=at.getTransfer(D.colorSpace)!==xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Zc,vd(i)),n.buffers.color.setClear(Zc.r,Zc.g,Zc.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:v,addToRenderList:m,dispose:w}}function oS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(x,R,z,k,j){let X=!1,H=h(k,z,R);s!==H&&(s=H,c(s.object)),X=p(x,k,z,j),X&&g(x,k,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,R,z,k),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,z){let k=z.wireframe===!0,j=n[x.id];j===void 0&&(j={},n[x.id]=j);let X=j[R.id];X===void 0&&(X={},j[R.id]=X);let H=X[k];return H===void 0&&(H=d(l()),X[k]=H),H}function d(x){let R=[],z=[],k=[];for(let j=0;j<t;j++)R[j]=0,z[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,R,z,k){let j=s.attributes,X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let pe=j[G],Ie=X[G];if(Ie===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Ie=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Ie=x.instanceColor)),pe===void 0||pe.attribute!==Ie||Ie&&pe.data!==Ie.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(x,R,z,k){let j={},X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let pe=X[G];pe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let Ie={};Ie.attribute=pe,pe&&pe.data&&(Ie.data=pe.data),j[G]=Ie,H++}s.attributes=j,s.attributesNum=H,s.index=k}function v(){let x=s.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function m(x){f(x,0)}function f(x,R){let z=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;z[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),j[x]!==R&&(i.vertexAttribDivisor(x,R),j[x]=R)}function w(){let x=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==x[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function S(x,R,z,k,j,X,H){H===!0?i.vertexAttribIPointer(x,R,z,j,X):i.vertexAttribPointer(x,R,z,k,j,X)}function M(x,R,z,k){v();let j=k.attributes,X=z.getAttributes(),H=R.defaultAttributeValues;for(let J in X){let G=X[J];if(G.location>=0){let oe=j[J];if(oe===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){let pe=oe.normalized,Ie=oe.itemSize,Ke=e.get(oe);if(Ke===void 0)continue;let Mt=Ke.buffer,Y=Ke.type,re=Ke.bytesPerElement,Te=Y===i.INT||Y===i.UNSIGNED_INT||oe.gpuType===_c;if(oe.isInterleavedBufferAttribute){let de=oe.data,Ae=de.stride,ht=oe.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)f(G.location+ke,de.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let ke=0;ke<G.locationSize;ke++)S(G.location+ke,Ie/G.locationSize,Y,pe,Ae*re,(ht+Ie/G.locationSize*ke)*re,Te)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)f(G.location+de,oe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let de=0;de<G.locationSize;de++)S(G.location+de,Ie/G.locationSize,Y,pe,Ie*re,Ie/G.locationSize*de*re,Te)}}else if(H!==void 0){let pe=H[J];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(G.location,pe);break;case 3:i.vertexAttrib3fv(G.location,pe);break;case 4:i.vertexAttrib4fv(G.location,pe);break;default:i.vertexAttrib1fv(G.location,pe)}}}}w()}function D(){I();for(let x in n){let R=n[x];for(let z in R){let k=R[z];for(let j in k)u(k[j].object),delete k[j];delete R[z]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let z in R){let k=R[z];for(let j in k)u(k[j].object),delete k[j];delete R[z]}delete n[x.id]}function T(x){for(let R in n){let z=n[R];if(z[x.id]===void 0)continue;let k=z[x.id];for(let j in k)u(k[j].object),delete k[j];delete z[x.id]}}function I(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function aS(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function cS(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Jn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let w=s?0:n,S=w*4,M=f.clippingState||null;l.value=M,M=u(g,d,S,p);for(let D=0;D!==S;++D)M[D]=t[D];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,M=p;S!==v;++S,M+=4)o.copy(h[S]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function uS(i){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=Ar:a===gc&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mc||a===gc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ds=4,Ug=[.125,.215,.35,.446,.526,.582],Or=20,Md=new Jo,Fg=new ot,bd=null,Sd=0,wd=0,Ed=!1,Lr=(1+Math.sqrt(5))/2,Ps=1/Lr,kg=[new L(-Lr,Ps,0),new L(Lr,Ps,0),new L(-Ps,0,Lr),new L(Ps,0,Lr),new L(0,Lr,-Ps),new L(0,Lr,Ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],hS=new L,Qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=hS}=s;bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Sd,wd),this._renderer.xr.enabled=Ed,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:As,format:Ln,colorSpace:Sr,depthBuffer:!1},r=Bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(s)),this._blurMaterial=fS(s,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,n,r,s){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Fg),h.toneMapping=Si,h.autoClear=!1;let g=new rn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new te(new je,g),m=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Fg),m=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let M=this._cubeSize;Jc(r,S*M,w>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ar||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Jc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Md)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kg[(r-s-1)%kg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new te(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);let f=[],w=0;for(let T=0;T<Or;++T){let I=T/v,b=Math.exp(-I*I/2);f.push(b),T===0?w+=b:T<m&&(w+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[r],D=3*M*(r>S-Ds?r-S+Ds:0),C=4*(this._cubeSize-M);Jc(t,D,C,3*M,2*M),l.setRenderTarget(t),l.render(h,Md)}};function dS(i){let e=[],t=[],n=[],r=i,s=i-Ds+1+Ug.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ds?l=Ug[o-i+Ds-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),S=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let C=0;C<p;C++){let T=C%3*2/3-1,I=C>2?0:-1,b=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(b,v*g*C),S.set(d,m*g*C);let x=[C,C,C,C,C,C];M.set(x,f*g*C)}let D=new Gn;D.setAttribute("position",new bn(w,v)),D.setAttribute("uv",new bn(S,m)),D.setAttribute("faceIndex",new bn(M,f)),e.push(D),r>Ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bg(i,e,t){let n=new ei(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fS(i,e,t){let n=new Float32Array(Or),r=new L(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Vg(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zg(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function pS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===mc||l===gc,u=l===Ar||l===Rr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gS(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let S=0,M=w.length;S<M;S+=3){let D=w[S+0],C=w[S+1],T=w[S+2];d.push(D,C,C,T,T,D)}}else if(g!==void 0){let w=g.array;v=g.version;for(let S=0,M=w.length/3-1;S<M;S+=3){let D=S+0,C=S+1,T=S+2;d.push(D,C,C,T,T,D)}}else return;let m=new(gd(d)?Vo:Bo)(d,1);m.version=v;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vS(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*v[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _S(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yS(i,e,t){let n=new WeakMap,r=new yt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let T=new Float32Array(D*C*4*h),I=new Fo(T,D,C,h);I.type=ii,I.needsUpdate=!0;let b=M*4;for(let R=0;R<h;R++){let z=f[R],k=w[R],j=S[R],X=D*C*4*R;for(let H=0;H<z.count;H++){let J=H*b;g===!0&&(r.fromBufferAttribute(z,H),T[X+J+0]=r.x,T[X+J+1]=r.y,T[X+J+2]=r.z,T[X+J+3]=0),v===!0&&(r.fromBufferAttribute(k,H),T[X+J+4]=r.x,T[X+J+5]=r.y,T[X+J+6]=r.z,T[X+J+7]=0),m===!0&&(r.fromBufferAttribute(j,H),T[X+J+8]=r.x,T[X+J+9]=r.y,T[X+J+10]=r.z,T[X+J+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new tt(D,C)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function xS(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var o0=new ri,Hg=new Wo(1,1),a0=new Fo,l0=new Gl,c0=new Ho,Gg=[],Wg=[],Xg=new Float32Array(16),jg=new Float32Array(9),qg=new Float32Array(4);function Os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Gg[r];if(s===void 0&&(s=new Float32Array(r),Gg[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tu(i,e){let t=Wg[e];t===void 0&&(t=new Int32Array(e),Wg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function MS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function SS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function wS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function ES(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;qg.set(n),i.uniformMatrix2fv(this.addr,!1,qg),Gt(t,n)}}function TS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;jg.set(n),i.uniformMatrix3fv(this.addr,!1,jg),Gt(t,n)}}function CS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Xg.set(n),i.uniformMatrix4fv(this.addr,!1,Xg),Gt(t,n)}}function AS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function RS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function IS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function PS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function DS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function LS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function OS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function NS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function US(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hg.compareFunction=pd,s=Hg):s=o0,t.setTexture2D(e||s,r)}function FS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||l0,r)}function kS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||c0,r)}function BS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||a0,r)}function VS(i){switch(i){case 5126:return MS;case 35664:return bS;case 35665:return SS;case 35666:return wS;case 35674:return ES;case 35675:return TS;case 35676:return CS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return IS;case 35669:case 35673:return PS;case 5125:return DS;case 36294:return LS;case 36295:return OS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return BS}}function zS(i,e){i.uniform1fv(this.addr,e)}function HS(i,e){let t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function GS(i,e){let t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function WS(i,e){let t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function XS(i,e){let t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jS(i,e){let t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qS(i,e){let t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $S(i,e){i.uniform1iv(this.addr,e)}function YS(i,e){i.uniform2iv(this.addr,e)}function ZS(i,e){i.uniform3iv(this.addr,e)}function JS(i,e){i.uniform4iv(this.addr,e)}function KS(i,e){i.uniform1uiv(this.addr,e)}function QS(i,e){i.uniform2uiv(this.addr,e)}function ew(i,e){i.uniform3uiv(this.addr,e)}function tw(i,e){i.uniform4uiv(this.addr,e)}function nw(i,e,t){let n=this.cache,r=e.length,s=tu(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||o0,s[o])}function iw(i,e,t){let n=this.cache,r=e.length,s=tu(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||l0,s[o])}function rw(i,e,t){let n=this.cache,r=e.length,s=tu(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||c0,s[o])}function sw(i,e,t){let n=this.cache,r=e.length,s=tu(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||a0,s[o])}function ow(i){switch(i){case 5126:return zS;case 35664:return HS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return jS;case 35676:return qS;case 5124:case 35670:return $S;case 35667:case 35671:return YS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return KS;case 36294:return QS;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}var Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VS(t.type)}},Ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ow(t.type)}},Rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Td=/(\w+)(\])?(\[|\.)?/g;function $g(i,e){i.seq.push(e),i.map[e.id]=e}function aw(i,e,t){let n=i.name,r=n.length;for(Td.lastIndex=0;;){let s=Td.exec(n),o=Td.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$g(t,c===void 0?new Cd(a,i,e):new Ad(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Rd(a),$g(t,h)),t=h}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);aw(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Yg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lw=37297,cw=0;function uw(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zg=new Xe;function hw(i){at._getMatrix(Zg,at.workingColorSpace,i);let e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uw(i.getShaderSource(e),o)}else return r}function dw(i,e){let t=hw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fw(i,e){let t;switch(e){case hg:t="Linear";break;case dg:t="Reinhard";break;case fg:t="Cineon";break;case pg:t="ACESFilmic";break;case gg:t="AgX";break;case vg:t="Neutral";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new L;function pw(){at.getLuminanceCoefficients(Kc);let i=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function gw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function da(i){return i!==""}function Kg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(i){return i.replace(_w,xw)}var yw=new Map;function xw(i,e){let t=$e[e];if(t===void 0){let n=yw.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Id(t)}var Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(i){return i.replace(Mw,bw)}function bw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Sw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ew(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case cg:e="ENVMAP_BLENDING_MIX";break;case ug:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Aw(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sw(t),c=ww(t),u=Ew(t),h=Tw(t),d=Cw(t),p=mw(t),g=gw(s),v=r.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),f.length>0&&(f+=`
`)):(m=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),f=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?$e.tonemapping_pars_fragment:"",t.toneMapping!==Si?fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,dw("linearToOutputTexel",t.outputColorSpace),pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),o=Id(o),o=Kg(o,t),o=Qg(o,t),a=Id(a),a=Kg(a,t),a=Qg(a,t),o=e0(o),a=e0(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=w+m+o,M=w+f+a,D=Yg(r,r.VERTEX_SHADER,S),C=Yg(r,r.FRAGMENT_SHADER,M);r.attachShader(v,D),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(C).trim(),X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,D,C);else{let J=Jg(r,D,"vertex"),G=Jg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||j==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:f}})}r.deleteShader(D),r.deleteShader(C),I=new Ls(r,v),b=vw(r,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,lw)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}var Rw=0,Pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dd(e),t.set(e,n)),n}},Dd=class{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}};function Iw(i,e,t,n,r,s,o){let a=new bs,l=new Pd,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,R,z,k){let j=z.fog,X=k.geometry,H=b.isMeshStandardMaterial?z.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=J&&J.mapping===ia?J.image.height:null,oe=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ie=pe!==void 0?pe.length:0,Ke=0;X.morphAttributes.position!==void 0&&(Ke=1),X.morphAttributes.normal!==void 0&&(Ke=2),X.morphAttributes.color!==void 0&&(Ke=3);let Mt,Y,re,Te;if(oe){let vt=si[oe];Mt=vt.vertexShader,Y=vt.fragmentShader}else Mt=b.vertexShader,Y=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);let de=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),ht=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,It=!!b.map,Pt=!!b.matcap,dt=!!J,A=!!b.aoMap,an=!!b.lightMap,ft=!!b.bumpMap,St=!!b.normalMap,be=!!b.displacementMap,lt=!!b.emissiveMap,De=!!b.metalnessMap,qe=!!b.roughnessMap,Vt=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,U=b.iridescence>0,$=b.sheen>0,K=b.transmission>0,W=Vt&&!!b.anisotropyMap,we=E&&!!b.clearcoatMap,ce=E&&!!b.clearcoatNormalMap,Me=E&&!!b.clearcoatRoughnessMap,Ee=U&&!!b.iridescenceMap,Q=U&&!!b.iridescenceThicknessMap,me=$&&!!b.sheenColorMap,Ue=$&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,ae=!!b.specularColorMap,He=!!b.specularIntensityMap,P=K&&!!b.transmissionMap,ue=K&&!!b.thicknessMap,ee=!!b.gradientMap,_e=!!b.alphaMap,ne=b.alphaTest>0,Z=!!b.alphaHash,ye=!!b.extensions,Ge=Si;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let Tt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Mt,fragmentShader:Y,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:ht,instancingColor:ht&&k.instanceColor!==null,instancingMorph:ht&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Sr,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Pt,envMap:dt,envMapMode:dt&&J.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:an,bumpMap:ft,normalMap:St,displacementMap:d&&be,emissiveMap:lt,normalMapObjectSpace:St&&b.normalMapType===Mg,normalMapTangentSpace:St&&b.normalMapType===fd,metalnessMap:De,roughnessMap:qe,anisotropy:Vt,anisotropyMap:W,clearcoat:E,clearcoatMap:we,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:_,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:Oe,specularColorMap:ae,specularIntensityMap:He,transmission:K,transmissionMap:P,thicknessMap:ue,gradientMap:ee,opaque:b.transparent===!1&&b.blending===Mr&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:b.combine,mapUv:It&&v(b.map.channel),aoMapUv:A&&v(b.aoMap.channel),lightMapUv:an&&v(b.lightMap.channel),bumpMapUv:ft&&v(b.bumpMap.channel),normalMapUv:St&&v(b.normalMap.channel),displacementMapUv:be&&v(b.displacementMap.channel),emissiveMapUv:lt&&v(b.emissiveMap.channel),metalnessMapUv:De&&v(b.metalnessMap.channel),roughnessMapUv:qe&&v(b.roughnessMap.channel),anisotropyMapUv:W&&v(b.anisotropyMap.channel),clearcoatMapUv:we&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(b.sheenRoughnessMap.channel),specularMapUv:Oe&&v(b.specularMap.channel),specularColorMapUv:ae&&v(b.specularColorMap.channel),specularIntensityMapUv:He&&v(b.specularIntensityMap.channel),transmissionMapUv:P&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:_e&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||Vt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(It||_e),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:lt&&b.emissiveMap.isVideoTexture===!0&&at.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function f(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let x=g[b.type],R;if(x){let z=si[x];R=Og.clone(z.uniforms)}else R=b.uniforms;return R}function D(b,x){let R;for(let z=0,k=u.length;z<k;z++){let j=u[z];if(j.cacheKey===x){R=j,++R.usedTimes;break}}return R===void 0&&(R=new Aw(i,x,b,s),u.push(R)),R}function C(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:I}}function Pw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Dw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function n0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function i0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Dw),n.length>1&&n.sort(d||n0),r.length>1&&r.sort(d||n0)}function u(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Lw(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new i0,i.set(n,[o])):r>=s.length?(o=new i0,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ow(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Nw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uw=0;function Fw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kw(i){let e=new Ow,t=Nw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let r=new L,s=new Rt,o=new Rt;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,w=0,S=0,M=0,D=0,C=0,T=0;c.sort(Fw);for(let b=0,x=c.length;b<x;b++){let R=c[b],z=R.color,k=R.intensity,j=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*k,h+=z.g*k,d+=z.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],k);T++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(z).multiplyScalar(k),H.distance=j,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;let J=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,J.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=J.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,M++}v++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(z).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=T,n.version=Uw++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let S=c[f];if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(S.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function r0(i){let e=new kw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Bw(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new r0(i),e.set(r,[a])):s>=o.length?(a=new r0(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
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
}`;function Hw(i,e,t){let n=new ws,r=new tt,s=new tt,o=new yt,a=new jl({depthPacking:xg}),l=new ql,c={},u=t.maxTextureSize,h={[In]:Qt,[Qt]:In,[Dn]:Dn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Vw,fragmentShader:zw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Gn;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let f=this.type;this.render=function(C,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==ni&&this.type===ni,j=f===ni&&this.type!==ni;for(let X=0,H=C.length;X<H;X++){let J=C[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||k===!0||j===!0){let Ie=this.type!==ni?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new ei(r.x,r.y,Ie),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pe=G.getViewportCount();for(let Ie=0;Ie<pe;Ie++){let Ke=G.getViewport(Ie);o.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),z.viewport(o),G.updateMatrices(J,Ie),n=G.getFrustum(),M(T,I,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&w(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,R)};function w(C,T){let I=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ei(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,I,p,v,null)}function S(C,T,I,b){let x=null,R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let z=x.uuid,k=T.uuid,j=c[z];j===void 0&&(j={},c[z]=j);let X=j[k];X===void 0&&(X=x.clone(),j[k]=X,T.addEventListener("dispose",D)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,b===ni?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=i.properties.get(x);z.light=I}return x}function M(C,T,I,b,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ni)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);let k=e.update(C),j=C.material;if(Array.isArray(j)){let X=k.groups;for(let H=0,J=X.length;H<J;H++){let G=X[H],oe=j[G.materialIndex];if(oe&&oe.visible){let pe=S(C,oe,b,x);C.onBeforeShadow(i,C,T,I,k,pe,G),i.renderBufferDirect(I,null,k,pe,C,G),C.onAfterShadow(i,C,T,I,k,pe,G)}}}else if(j.visible){let X=S(C,j,b,x);C.onBeforeShadow(i,C,T,I,k,X,null),i.renderBufferDirect(I,null,k,X,C,null),C.onAfterShadow(i,C,T,I,k,X,null)}}let z=C.children;for(let k=0,j=z.length;k<j;k++)M(z[k],T,I,b,x)}function D(C){C.target.removeEventListener("dispose",D);for(let I in c){let b=c[I],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var Gw={[lc]:cc,[uc]:fc,[hc]:pc,[br]:dc,[cc]:lc,[fc]:uc,[pc]:hc,[dc]:br};function Ww(i,e){function t(){let P=!1,ue=new yt,ee=null,_e=new yt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Z,ye,Ge,Tt){Tt===!0&&(ne*=Ge,Z*=Ge,ye*=Ge),ue.set(ne,Z,ye,Ge),_e.equals(ue)===!1&&(i.clearColor(ne,Z,ye,Ge),_e.copy(ue))},reset:function(){P=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let P=!1,ue=!1,ee=null,_e=null,ne=null;return{setReversed:function(Z){if(ue!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;let Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return ue},setTest:function(Z){Z?de(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Z){ee!==Z&&!P&&(i.depthMask(Z),ee=Z)},setFunc:function(Z){if(ue&&(Z=Gw[Z]),_e!==Z){switch(Z){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){P=Z},setClear:function(Z){ne!==Z&&(ue&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){P=!1,ee=null,_e=null,ne=null,ue=!1}}}function r(){let P=!1,ue=null,ee=null,_e=null,ne=null,Z=null,ye=null,Ge=null,Tt=null;return{setTest:function(vt){P||(vt?de(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(vt){ue!==vt&&!P&&(i.stencilMask(vt),ue=vt)},setFunc:function(vt,On,oi){(ee!==vt||_e!==On||ne!==oi)&&(i.stencilFunc(vt,On,oi),ee=vt,_e=On,ne=oi)},setOp:function(vt,On,oi){(Z!==vt||ye!==On||Ge!==oi)&&(i.stencilOp(vt,On,oi),Z=vt,ye=On,Ge=oi)},setLocked:function(vt){P=vt},setClear:function(vt){Tt!==vt&&(i.clearStencil(vt),Tt=vt)},reset:function(){P=!1,ue=null,ee=null,_e=null,ne=null,Z=null,ye=null,Ge=null,Tt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,S=null,M=null,D=null,C=null,T=new ot(0,0,0),I=0,b=!1,x=null,R=null,z=null,k=null,j=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let oe=null,pe={},Ie=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),Mt=new yt().fromArray(Ie),Y=new yt().fromArray(Ke);function re(P,ue,ee,_e){let ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ee;ye++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ue+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}let Te={};Te[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(br),ft(!1),St(Qh),de(i.CULL_FACE),A(bi);function de(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ae(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ht(P,ue){return h[P]!==ue?(i.bindFramebuffer(P,ue),h[P]=ue,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ke(P,ue){let ee=p,_e=!1;if(P){ee=d.get(ue),ee===void 0&&(ee=[],d.set(ue,ee));let ne=P.textures;if(ee.length!==ne.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=ne.length;Z<ye;Z++)ee[Z]=i.COLOR_ATTACHMENT0+Z;ee.length=ne.length,_e=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ee)}function It(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let Pt={[ji]:i.FUNC_ADD,[jm]:i.FUNC_SUBTRACT,[qm]:i.FUNC_REVERSE_SUBTRACT};Pt[$m]=i.MIN,Pt[Ym]=i.MAX;let dt={[Zm]:i.ZERO,[Jm]:i.ONE,[Km]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[rg]:i.SRC_ALPHA_SATURATE,[ng]:i.DST_COLOR,[eg]:i.DST_ALPHA,[Qm]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[ig]:i.ONE_MINUS_DST_COLOR,[tg]:i.ONE_MINUS_DST_ALPHA,[sg]:i.CONSTANT_COLOR,[og]:i.ONE_MINUS_CONSTANT_COLOR,[ag]:i.CONSTANT_ALPHA,[lg]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ue,ee,_e,ne,Z,ye,Ge,Tt,vt){if(P===bi){v===!0&&(Ae(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),P!==Xm){if(P!==m||vt!==b){if((f!==ji||M!==ji)&&(i.blendEquation(i.FUNC_ADD),f=ji,M=ji),vt)switch(P){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFunc(i.ONE,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,S=null,D=null,C=null,T.set(0,0,0),I=0,m=P,b=vt}return}ne=ne||ue,Z=Z||ee,ye=ye||_e,(ue!==f||ne!==M)&&(i.blendEquationSeparate(Pt[ue],Pt[ne]),f=ue,M=ne),(ee!==w||_e!==S||Z!==D||ye!==C)&&(i.blendFuncSeparate(dt[ee],dt[_e],dt[Z],dt[ye]),w=ee,S=_e,D=Z,C=ye),(Ge.equals(T)===!1||Tt!==I)&&(i.blendColor(Ge.r,Ge.g,Ge.b,Tt),T.copy(Ge),I=Tt),m=P,b=!1}function an(P,ue){P.side===Dn?Ae(i.CULL_FACE):de(i.CULL_FACE);let ee=P.side===Qt;ue&&(ee=!ee),ft(ee),P.blending===Mr&&P.transparent===!1?A(bi):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let _e=P.stencilWrite;a.setTest(_e),_e&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),lt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function St(P){P!==Gm?(de(i.CULL_FACE),P!==R&&(P===Qh?i.cullFace(i.BACK):P===Wm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),R=P}function be(P){P!==z&&(H&&i.lineWidth(P),z=P)}function lt(P,ue,ee){P?(de(i.POLYGON_OFFSET_FILL),(k!==ue||j!==ee)&&(i.polygonOffset(ue,ee),k=ue,j=ee)):Ae(i.POLYGON_OFFSET_FILL)}function De(P){P?de(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function qe(P){P===void 0&&(P=i.TEXTURE0+X-1),oe!==P&&(i.activeTexture(P),oe=P)}function Vt(P,ue,ee){ee===void 0&&(oe===null?ee=i.TEXTURE0+X-1:ee=oe);let _e=pe[ee];_e===void 0&&(_e={type:void 0,texture:void 0},pe[ee]=_e),(_e.type!==P||_e.texture!==ue)&&(oe!==ee&&(i.activeTexture(ee),oe=ee),i.bindTexture(P,ue||Te[P]),_e.type=P,_e.texture=ue)}function E(){let P=pe[oe];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){Mt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Mt.copy(P))}function Ue(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Oe(P,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let _e=ee.get(P);_e===void 0&&(_e=i.getUniformBlockIndex(ue,P.name),ee.set(P,_e))}function ae(P,ue){let _e=c.get(ue).get(P);l.get(ue)!==_e&&(i.uniformBlockBinding(ue,_e,P.__bindingPointIndex),l.set(ue,_e))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,pe={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,S=null,M=null,D=null,C=null,T=new ot(0,0,0),I=0,b=!1,x=null,R=null,z=null,k=null,j=null,Mt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ae,bindFramebuffer:ht,drawBuffers:ke,useProgram:It,setBlending:A,setMaterial:an,setFlipSided:ft,setCullFace:St,setLineWidth:be,setPolygonOffset:lt,setScissorTest:De,activeTexture:qe,bindTexture:Vt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Ee,texImage3D:Q,updateUBOMapping:Oe,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:Me,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:we,scissor:me,viewport:Ue,reset:He}}function Xw(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):ys("canvas")}function v(E,_,U){let $=1,K=Vt(E);if((K.width>U||K.height>U)&&($=U/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let W=Math.floor($*K.width),we=Math.floor($*K.height);h===void 0&&(h=g(W,we));let ce=_?g(W,we):h;return ce.width=W,ce.height=we,ce.getContext("2d").drawImage(E,0,0,W,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+we+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,U,$,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=_;if(_===i.RED&&(U===i.FLOAT&&(W=i.R32F),U===i.HALF_FLOAT&&(W=i.R16F),U===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.R8UI),U===i.UNSIGNED_SHORT&&(W=i.R16UI),U===i.UNSIGNED_INT&&(W=i.R32UI),U===i.BYTE&&(W=i.R8I),U===i.SHORT&&(W=i.R16I),U===i.INT&&(W=i.R32I)),_===i.RG&&(U===i.FLOAT&&(W=i.RG32F),U===i.HALF_FLOAT&&(W=i.RG16F),U===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RG8UI),U===i.UNSIGNED_SHORT&&(W=i.RG16UI),U===i.UNSIGNED_INT&&(W=i.RG32UI),U===i.BYTE&&(W=i.RG8I),U===i.SHORT&&(W=i.RG16I),U===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGB8UI),U===i.UNSIGNED_SHORT&&(W=i.RGB16UI),U===i.UNSIGNED_INT&&(W=i.RGB32UI),U===i.BYTE&&(W=i.RGB8I),U===i.SHORT&&(W=i.RGB16I),U===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),U===i.UNSIGNED_INT&&(W=i.RGBA32UI),U===i.BYTE&&(W=i.RGBA8I),U===i.SHORT&&(W=i.RGBA16I),U===i.INT&&(W=i.RGBA32I)),_===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){let we=K?Oo:at.getTransfer($);U===i.FLOAT&&(W=i.RGBA32F),U===i.HALF_FLOAT&&(W=i.RGBA16F),U===i.UNSIGNED_BYTE&&(W=we===xt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(E,_){let U;return E?_===null||_===Qi||_===Rs?U=i.DEPTH24_STENCIL8:_===ii?U=i.DEPTH32F_STENCIL8:_===Cs&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qi||_===Rs?U=i.DEPTH_COMPONENT24:_===ii?U=i.DEPTH_COMPONENT32F:_===Cs&&(U=i.DEPTH_COMPONENT16),U}function D(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pn&&E.minFilter!==Hn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){let _=E.target;_.removeEventListener("dispose",C),I(_),_.isVideoTexture&&u.delete(_)}function T(E){let _=E.target;_.removeEventListener("dispose",T),x(_)}function I(E){let _=n.get(E);if(_.__webglInit===void 0)return;let U=E.source,$=d.get(U);if($){let K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(U)}n.remove(E)}function b(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let U=E.source,$=d.get(U);delete $[_.__cacheKey],o.memory.textures--}function x(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[$][K]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=E.textures;for(let $=0,K=U.length;$<K;$++){let W=n.get(U[$]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(U[$])}n.remove(E)}let R=0;function z(){R=0}function k(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function j(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let U=n.get(E);if(E.isVideoTexture&&De(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(U,E,_);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function H(E,_){let U=n.get(E);if(E.version>0&&U.__version!==E.version){Te(U,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function J(E,_){let U=n.get(E);if(E.version>0&&U.__version!==E.version){Te(U,E,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function G(E,_){let U=n.get(E);if(E.version>0&&U.__version!==E.version){de(U,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let oe={[kl]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},pe={[Pn]:i.NEAREST,[_g]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[vc]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},Ie={[bg]:i.NEVER,[Ag]:i.ALWAYS,[Sg]:i.LESS,[pd]:i.LEQUAL,[wg]:i.EQUAL,[Cg]:i.GEQUAL,[Eg]:i.GREATER,[Tg]:i.NOTEQUAL};function Ke(E,_){if(_.type===ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Hn||_.magFilter===vc||_.magFilter===ra||_.magFilter===Ki||_.minFilter===Hn||_.minFilter===vc||_.minFilter===ra||_.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,oe[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pn||_.minFilter!==ra&&_.minFilter!==Ki||_.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Mt(E,_){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let $=_.source,K=d.get($);K===void 0&&(K={},d.set($,K));let W=j(_);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[W].usedTimes++;let we=K[E.__cacheKey];we!==void 0&&(K[E.__cacheKey].usedTimes--,we.usedTimes===0&&b(_)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return U}function Y(E,_,U){return Math.floor(Math.floor(E/U)/_)}function re(E,_,U,$){let W=E.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,$,_.data);else{W.sort((Q,me)=>Q.start-me.start);let we=0;for(let Q=1;Q<W.length;Q++){let me=W[we],Ue=W[Q],Oe=me.start+me.count,ae=Y(Ue.start,_.width,4),He=Y(me.start,_.width,4);Ue.start<=Oe+1&&ae===He&&Y(Ue.start+Ue.count-1,_.width,4)===ae?me.count=Math.max(me.count,Ue.start+Ue.count-me.start):(++we,W[we]=Ue)}W.length=we+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,me=W.length;Q<me;Q++){let Ue=W[Q],Oe=Math.floor(Ue.start/4),ae=Math.ceil(Ue.count/4),He=Oe%_.width,P=Math.floor(Oe/_.width),ue=ae,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,He,P,ue,ee,U,$,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Te(E,_,U){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);let K=Mt(E,_),W=_.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+U);let we=n.get(W);if(W.version!==we.__version||K===!0){t.activeTexture(i.TEXTURE0+U);let ce=at.getPrimaries(at.workingColorSpace),Me=_.colorSpace===wi?null:at.getPrimaries(_.colorSpace),Ee=_.colorSpace===wi||ce===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=v(_.image,!1,r.maxTextureSize);Q=qe(_,Q);let me=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type),Oe=S(_.internalFormat,me,Ue,_.colorSpace,_.isVideoTexture);Ke($,_);let ae,He=_.mipmaps,P=_.isVideoTexture!==!0,ue=we.__version===void 0||K===!0,ee=W.dataReady,_e=D(_,Q);if(_.isDepthTexture)Oe=M(_.format===Is,_.type),ue&&(P?t.texStorage2D(i.TEXTURE_2D,1,Oe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Oe,Q.width,Q.height,0,me,Ue,null));else if(_.isDataTexture)if(He.length>0){P&&ue&&t.texStorage2D(i.TEXTURE_2D,_e,Oe,He[0].width,He[0].height);for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,Ue,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,me,Ue,ae.data);_.generateMipmaps=!1}else P?(ue&&t.texStorage2D(i.TEXTURE_2D,_e,Oe,Q.width,Q.height),ee&&re(_,Q,me,Ue)):t.texImage2D(i.TEXTURE_2D,0,Oe,Q.width,Q.height,0,me,Ue,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Oe,He[0].width,He[0].height,Q.depth);for(let ne=0,Z=He.length;ne<Z;ne++)if(ae=He[ne],_.format!==Ln)if(me!==null)if(P){if(ee)if(_.layerUpdates.size>0){let ye=xd(ae.width,ae.height,_.format,_.type);for(let Ge of _.layerUpdates){let Tt=ae.data.subarray(Ge*ye/ae.data.BYTES_PER_ELEMENT,(Ge+1)*ye/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ge,ae.width,ae.height,1,me,Tt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,me,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,me,Ue,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,ae.width,ae.height,Q.depth,0,me,Ue,ae.data)}else{P&&ue&&t.texStorage2D(i.TEXTURE_2D,_e,Oe,He[0].width,He[0].height);for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],_.format!==Ln?me!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,me,Ue,ae.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,ae.width,ae.height,0,me,Ue,ae.data)}else if(_.isDataArrayTexture)if(P){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Oe,Q.width,Q.height,Q.depth),ee)if(_.layerUpdates.size>0){let ne=xd(Q.width,Q.height,_.format,_.type);for(let Z of _.layerUpdates){let ye=Q.data.subarray(Z*ne/Q.data.BYTES_PER_ELEMENT,(Z+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,me,Ue,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Ue,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,Q.width,Q.height,Q.depth,0,me,Ue,Q.data);else if(_.isData3DTexture)P?(ue&&t.texStorage3D(i.TEXTURE_3D,_e,Oe,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Ue,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,Q.width,Q.height,Q.depth,0,me,Ue,Q.data);else if(_.isFramebufferTexture){if(ue)if(P)t.texStorage2D(i.TEXTURE_2D,_e,Oe,Q.width,Q.height);else{let ne=Q.width,Z=Q.height;for(let ye=0;ye<_e;ye++)t.texImage2D(i.TEXTURE_2D,ye,Oe,ne,Z,0,me,Ue,null),ne>>=1,Z>>=1}}else if(He.length>0){if(P&&ue){let ne=Vt(He[0]);t.texStorage2D(i.TEXTURE_2D,_e,Oe,ne.width,ne.height)}for(let ne=0,Z=He.length;ne<Z;ne++)ae=He[ne],P?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,Ue,ae):t.texImage2D(i.TEXTURE_2D,ne,Oe,me,Ue,ae);_.generateMipmaps=!1}else if(P){if(ue){let ne=Vt(Q);t.texStorage2D(i.TEXTURE_2D,_e,Oe,ne.width,ne.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ue,Q)}else t.texImage2D(i.TEXTURE_2D,0,Oe,me,Ue,Q);m(_)&&f($),we.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function de(E,_,U){if(_.image.length!==6)return;let $=Mt(E,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);let W=n.get(K);if(K.version!==W.__version||$===!0){t.activeTexture(i.TEXTURE0+U);let we=at.getPrimaries(at.workingColorSpace),ce=_.colorSpace===wi?null:at.getPrimaries(_.colorSpace),Me=_.colorSpace===wi||we===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ee&&!Q?me[Z]=v(_.image[Z],!0,r.maxCubemapSize):me[Z]=Q?_.image[Z].image:_.image[Z],me[Z]=qe(_,me[Z]);let Ue=me[0],Oe=s.convert(_.format,_.colorSpace),ae=s.convert(_.type),He=S(_.internalFormat,Oe,ae,_.colorSpace),P=_.isVideoTexture!==!0,ue=W.__version===void 0||$===!0,ee=K.dataReady,_e=D(_,Ue);Ke(i.TEXTURE_CUBE_MAP,_);let ne;if(Ee){P&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){ne=me[Z].mipmaps;for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];_.format!==Ln?Oe!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ge.width,Ge.height,Oe,ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,He,Ge.width,Ge.height,0,Oe,ae,Ge.data)}}}else{if(ne=_.mipmaps,P&&ue){ne.length>0&&_e++;let Z=Vt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Oe,ae,me[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,me[Z].width,me[Z].height,0,Oe,ae,me[Z].data);for(let ye=0;ye<ne.length;ye++){let Tt=ne[ye].image[Z].image;P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Tt.width,Tt.height,Oe,ae,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,He,Tt.width,Tt.height,0,Oe,ae,Tt.data)}}else{P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,ae,me[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Oe,ae,me[Z]);for(let ye=0;ye<ne.length;ye++){let Ge=ne[ye];P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Oe,ae,Ge.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,He,Oe,ae,Ge.image[Z])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),W.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ae(E,_,U,$,K,W){let we=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),Me=S(U.internalFormat,we,ce,U.colorSpace),Ee=n.get(_),Q=n.get(U);if(Q.__renderTarget=_,!Ee.__hasExternalTextures){let me=Math.max(1,_.width>>W),Ue=Math.max(1,_.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Me,me,Ue,_.depth,0,we,ce,null):t.texImage2D(K,W,Me,me,Ue,0,we,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Q.__webglTexture,0,be(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Q.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(E,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,W=M(_.stencilBuffer,K),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=be(_);lt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,W,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,E)}else{let $=_.textures;for(let K=0;K<$.length;K++){let W=$[K],we=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),Me=S(W.internalFormat,we,ce,W.colorSpace),Ee=be(_);U&&lt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Me,_.width,_.height):lt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let K=$.__webglTexture,W=be(_);if(_.depthTexture.format===_s)lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Is)lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(E){let _=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let $=E.texture.mipmaps;$&&$.length>0?ke(_.__webglFramebuffer[0],E):ke(_.__webglFramebuffer,E)}else if(U){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),ht(_.__webglDepthbuffer[$],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else{let $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ht(_.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(E,_,U){let $=n.get(E);_!==void 0&&Ae($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&It(E)}function dt(E){let _=E.texture,U=n.get(E),$=n.get(_);E.addEventListener("dispose",T);let K=E.textures,W=E.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let Me=0;Me<_.mipmaps.length;Me++)U.__webglFramebuffer[ce][Me]=i.createFramebuffer()}else U.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)U.__webglFramebuffer[ce]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(we)for(let ce=0,Me=K.length;ce<Me;ce++){let Ee=n.get(K[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&lt(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let Me=K[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);let Ee=s.convert(Me.format,Me.colorSpace),Q=s.convert(Me.type),me=S(Me.internalFormat,Ee,Q,Me.colorSpace,E.isXRRenderTarget===!0),Ue=be(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)Ae(U.__webglFramebuffer[ce][Me],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else Ae(U.__webglFramebuffer[ce],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,Me=K.length;ce<Me;ce++){let Ee=K[ce],Q=n.get(Ee);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ke(i.TEXTURE_2D,Ee),Ae(U.__webglFramebuffer,E,Ee,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Ee)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),Ke(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)Ae(U.__webglFramebuffer[Me],E,_,i.COLOR_ATTACHMENT0,ce,Me);else Ae(U.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ce,0);m(_)&&f(ce),t.unbindTexture()}E.depthBuffer&&It(E)}function A(E){let _=E.textures;for(let U=0,$=_.length;U<$;U++){let K=_[U];if(m(K)){let W=w(E),we=n.get(K).__webglTexture;t.bindTexture(W,we),f(W),t.unbindTexture()}}}let an=[],ft=[];function St(E){if(E.samples>0){if(lt(E)===!1){let _=E.textures,U=E.width,$=E.height,K=i.COLOR_BUFFER_BIT,W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(E),ce=_.length>1;if(ce)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Me=E.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Q=n.get(_[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,K,i.NEAREST),l===!0&&(an.length=0,ft.length=0,an.push(i.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(an.push(W),ft.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Q=n.get(_[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function be(E){return Math.min(r.maxSamples,E.samples)}function lt(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(E){let _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function qe(E,_){let U=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Sr&&U!==wi&&(at.getTransfer(U)===xt?($!==Ln||K!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Pt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=lt}function jw(i,e){function t(n,r=wi){let s,o=at.getTransfer(r);if(n===Xn)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.BYTE;if(n===od)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===ld)return i.ALPHA;if(n===cd)return i.RGB;if(n===Ln)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===ud)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===hd)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===sa||n===oa||n===aa||n===la)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ec||n===Tc||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ac||n===Rc)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Dc||n===Lc||n===Oc||n===Nc||n===Uc||n===Fc||n===kc||n===Bc||n===Vc||n===zc||n===Hc||n===Gc||n===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Xc||n===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dd||n===qc||n===$c||n===Yc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
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

}`,Ld=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ri,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:qw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Od=class extends xi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,v=new Ld,m=t.getContextAttributes(),f=null,w=null,S=[],M=[],D=new tt,C=null,T=new Zt;T.viewport=new yt;let I=new Zt;I.viewport=new yt;let b=[T,I],x=new rc,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=S[Y];return re===void 0&&(re=new Ss,S[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=S[Y];return re===void 0&&(re=new Ss,S[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=S[Y];return re===void 0&&(re=new Ss,S[Y]=re),re.getHandSpace()};function k(Y){let re=M.indexOf(Y.inputSource);if(re===-1)return;let Te=S[re];Te!==void 0&&(Te.update(Y.inputSource,Y.frame,c||o),Te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<S.length;Y++){let re=M[Y];re!==null&&(M[Y]=null,S[Y].disconnect(re))}R=null,z=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,w=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return Us(this,null,function*(){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,de=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?Is:_s,de=m.stencil?Rs:Qi);let ht={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ht),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ei(d.textureWidth,d.textureHeight,{format:Ln,type:Xn,depthTexture:new Wo(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ei(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Y){for(let re=0;re<Y.removed.length;re++){let Te=Y.removed[re],de=M.indexOf(Te);de>=0&&(M[de]=null,S[de].disconnect(Te))}for(let re=0;re<Y.added.length;re++){let Te=Y.added[re],de=M.indexOf(Te);if(de===-1){for(let ht=0;ht<S.length;ht++)if(ht>=M.length){M.push(Te),de=ht;break}else if(M[ht]===null){M[ht]=Te,de=ht;break}if(de===-1)break}let Ae=S[de];Ae&&Ae.connect(Te)}}let H=new L,J=new L;function G(Y,re,Te){H.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(Te.matrixWorld);let de=H.distanceTo(J),Ae=re.projectionMatrix.elements,ht=Te.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),It=Ae[14]/(Ae[10]+1),Pt=(Ae[9]+1)/Ae[5],dt=(Ae[9]-1)/Ae[5],A=(Ae[8]-1)/Ae[0],an=(ht[8]+1)/ht[0],ft=ke*A,St=ke*an,be=de/(-A+an),lt=be*-A;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let De=ke+be,qe=It+be,Vt=ft-lt,E=St+(de-lt),_=Pt*It/qe*De,U=dt*It/qe*De;Y.projectionMatrix.makePerspective(Vt,E,_,U,De,qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let re=Y.near,Te=Y.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),x.near=I.near=T.near=re,x.far=I.far=T.far=Te,(R!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far),T.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,x.layers.mask=T.layers.mask|I.layers.mask;let de=Y.parent,Ae=x.cameras;oe(x,de);for(let ht=0;ht<Ae.length;ht++)oe(Ae[ht],de);Ae.length===2?G(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),pe(Y,x,de)};function pe(Y,re,Te){Te===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(Te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Uo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Ie=null;function Ke(Y,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let de=!1;Te.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let ke=0;ke<Te.length;ke++){let It=Te[ke],Pt=null;if(p!==null)Pt=p.getViewport(It);else{let A=h.getViewSubImage(d,It);Pt=A.viewport,ke===0&&(e.setRenderTargetTextures(w,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(w))}let dt=b[ke];dt===void 0&&(dt=new Zt,dt.layers.enable(ke),dt.viewport=new yt,b[ke]=dt),dt.matrix.fromArray(It.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(It.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ke===0&&(x.matrix.copy(dt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(dt)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let ke=h.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let Te=0;Te<S.length;Te++){let de=M[Te],Ae=S[Te];de!==null&&Ae!==void 0&&Ae.update(de,re,c||o)}Ie&&Ie(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let Mt=new s0;Mt.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){Ie=Y},this.dispose=function(){}}},Dr=new $i,Yw=new Rt;function Zw(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),S=w.envMap,M=w.envMapRotation;S&&(m.envMap.value=S,Dr.copy(M),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(Dr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jw(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",m));let D=S.program;n.updateUBOMapping(w,D);let C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function u(w){let S=h();w.__bindingPointIndex=S;let M=i.createBuffer(),D=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=r[w.id],M=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=M.length;C<T;C++){let I=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,x=I.length;b<x;b++){let R=I[b];if(p(R,C,b,D)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],j=0;for(let X=0;X<k.length;X++){let H=k[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+j,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,S,M,D){let C=w.value,T=S+"_"+M;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{let I=D[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return D[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){let S=w.uniforms,M=0,D=16;for(let T=0,I=S.length;T<I;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,R=b.length;x<R;x++){let z=b[x],k=Array.isArray(z.value)?z.value:[z.value];for(let j=0,X=k.length;j<X;j++){let H=k[j],J=v(H),G=M%D,oe=G%J.boundary,pe=G+oe;M+=oe,pe!==0&&D-pe<J.storage&&(M+=D-pe),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}let C=M%D;return C>0&&(M+=D-C),w.__size=M,w.__cache={},this}function v(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var eu=class{constructor(e={}){let{canvas:t=Rg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=Mn;let C=0,T=0,I=null,b=-1,x=null,R=new yt,z=new yt,k=null,j=new ot(0),X=0,H=t.width,J=t.height,G=1,oe=null,pe=null,Ie=new yt(0,0,H,J),Ke=new yt(0,0,H,J),Mt=!1,Y=new ws,re=!1,Te=!1,de=new Rt,Ae=new Rt,ht=new L,ke=new yt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function dt(){return I===null?G:1}let A=n;function an(y,O){return t.getContext(y,O)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Z,!1),A===null){let O="webgl2";if(A=an(O,y),A===null)throw an(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ft,St,be,lt,De,qe,Vt,E,_,U,$,K,W,we,ce,Me,Ee,Q,me,Ue,Oe,ae,He,P;function ue(){ft=new mS(A),ft.init(),ae=new jw(A,ft),St=new lS(A,ft,e,ae),be=new Ww(A,ft),St.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),lt=new _S(A),De=new Pw,qe=new Xw(A,ft,be,De,St,ae,lt),Vt=new uS(M),E=new pS(M),_=new wx(A),He=new oS(A,_),U=new gS(A,_,lt,He),$=new xS(A,U,_,lt),me=new yS(A,St,qe),Me=new cS(De),K=new Iw(M,Vt,E,ft,St,He,Me),W=new Zw(M,De),we=new Lw,ce=new Bw(ft),Q=new sS(M,Vt,E,be,$,p,l),Ee=new Hw(M,$,St),P=new Jw(A,lt,St,be),Ue=new aS(A,ft,lt),Oe=new vS(A,ft,lt),lt.programs=K.programs,M.capabilities=St,M.extensions=ft,M.properties=De,M.renderLists=we,M.shadowMap=Ee,M.state=be,M.info=lt}ue();let ee=new Od(M,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(H,J,!1))},this.getSize=function(y){return y.set(H,J)},this.setSize=function(y,O,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,J=O,t.width=Math.floor(y*G),t.height=Math.floor(O*G),B===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(y,O,B){H=y,J=O,G=B,t.width=Math.floor(y*B),t.height=Math.floor(O*B),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,O,B,V){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,O,B,V),be.viewport(R.copy(Ie).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ke)},this.setScissor=function(y,O,B,V){y.isVector4?Ke.set(y.x,y.y,y.z,y.w):Ke.set(y,O,B,V),be.scissor(z.copy(Ke).multiplyScalar(G).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(y){be.setScissorTest(Mt=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,B=!0){let V=0;if(y){let N=!1;if(I!==null){let ie=I.texture.format;N=ie===Sc||ie===bc||ie===Mc}if(N){let ie=I.texture.type,he=ie===Xn||ie===Qi||ie===Cs||ie===Rs||ie===yc||ie===xc,xe=Q.getClearColor(),ge=Q.getClearAlpha(),Be=xe.r,ze=xe.g,Re=xe.b;he?(g[0]=Be,g[1]=ze,g[2]=Re,g[3]=ge,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Be,v[1]=ze,v[2]=Re,v[3]=ge,A.clearBufferiv(A.COLOR,0,v))}else V|=A.COLOR_BUFFER_BIT}O&&(V|=A.DEPTH_BUFFER_BIT),B&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Q.dispose(),we.dispose(),ce.dispose(),De.dispose(),Vt.dispose(),E.dispose(),$.dispose(),He.dispose(),P.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ud),ee.removeEventListener("sessionend",Fd),er.stop()};function _e(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let y=lt.autoReset,O=Ee.enabled,B=Ee.autoUpdate,V=Ee.needsUpdate,N=Ee.type;ue(),lt.autoReset=y,Ee.enabled=O,Ee.autoUpdate=B,Ee.needsUpdate=V,Ee.type=N}function Z(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ye(y){let O=y.target;O.removeEventListener("dispose",ye),Ge(O)}function Ge(y){Tt(y),De.remove(y)}function Tt(y){let O=De.get(y).programs;O!==void 0&&(O.forEach(function(B){K.releaseProgram(B)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,B,V,N,ie){O===null&&(O=It);let he=N.isMesh&&N.matrixWorld.determinant()<0,xe=m0(y,O,B,V,N);be.setMaterial(V,he);let ge=B.index,Be=1;if(V.wireframe===!0){if(ge=U.getWireframeAttribute(B),ge===void 0)return;Be=2}let ze=B.drawRange,Re=B.attributes.position,nt=ze.start*Be,_t=(ze.start+ze.count)*Be;ie!==null&&(nt=Math.max(nt,ie.start*Be),_t=Math.min(_t,(ie.start+ie.count)*Be)),ge!==null?(nt=Math.max(nt,0),_t=Math.min(_t,ge.count)):Re!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,Re.count));let Dt=_t-nt;if(Dt<0||Dt===1/0)return;He.setup(N,V,xe,B,ge);let Ot,ct=Ue;if(ge!==null&&(Ot=_.get(ge),ct=Oe,ct.setIndex(Ot)),N.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*dt()),ct.setMode(A.LINES)):ct.setMode(A.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*dt()),N.isLineSegments?ct.setMode(A.LINES):N.isLineLoop?ct.setMode(A.LINE_LOOP):ct.setMode(A.LINE_STRIP)}else N.isPoints?ct.setMode(A.POINTS):N.isSprite&&ct.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,Jt=N._multiDrawCounts,gt=N._multiDrawCount,Nn=ge?_.get(ge).bytesPerElement:1,Nr=De.get(V).currentProgram.getUniforms();for(let gn=0;gn<gt;gn++)Nr.setValue(A,"_gl_DrawID",gn),ct.render(Le[gn]/Nn,Jt[gn])}else if(N.isInstancedMesh)ct.renderInstances(nt,Dt,N.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jt=Math.min(B.instanceCount,Le);ct.renderInstances(nt,Dt,Jt)}else ct.render(nt,Dt)};function vt(y,O,B){y.transparent===!0&&y.side===Dn&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,pa(y,O,B),y.side=In,y.needsUpdate=!0,pa(y,O,B),y.side=Dn):pa(y,O,B)}this.compile=function(y,O,B=null){B===null&&(B=y),f=ce.get(B),f.init(O),S.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==B&&y.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){let xe=ie[he];vt(xe,B,N),V.add(xe)}else vt(ie,B,N),V.add(ie)}),f=S.pop(),V},this.compileAsync=function(y,O,B=null){let V=this.compile(y,O,B);return new Promise(N=>{function ie(){if(V.forEach(function(he){De.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){N(y);return}setTimeout(ie,10)}ft.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let On=null;function oi(y){On&&On(y)}function Ud(){er.stop()}function Fd(){er.start()}let er=new s0;er.setAnimationLoop(oi),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(y){On=y,ee.setAnimationLoop(y),y===null?er.stop():er.start()},ee.addEventListener("sessionstart",Ud),ee.addEventListener("sessionend",Fd),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,O,I),f=ce.get(y,S.length),f.init(O),S.push(f),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,re=Me.init(this.clippingPlanes,Te),m=we.get(y,w.length),m.init(),w.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&iu(ie,O,-1/0,M.sortObjects)}iu(y,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(oe,pe),Pt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Pt&&Q.addToRenderList(m,y),this.info.render.frame++,re===!0&&Me.beginShadows();let B=f.state.shadowsArray;Ee.render(B,y,O),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(f.setupLights(),O.isArrayCamera){let ie=O.cameras;if(N.length>0)for(let he=0,xe=ie.length;he<xe;he++){let ge=ie[he];Bd(V,N,y,ge)}Pt&&Q.render(y);for(let he=0,xe=ie.length;he<xe;he++){let ge=ie[he];kd(m,y,ge,ge.viewport)}}else N.length>0&&Bd(V,N,y,O),Pt&&Q.render(y),kd(m,y,O);I!==null&&T===0&&(qe.updateMultisampleRenderTarget(I),qe.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(M,y,O),He.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(f=S[S.length-1],re===!0&&Me.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function iu(y,O,B,V){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){V&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);let he=$.update(y),xe=y.material;xe.visible&&m.push(y,he,xe,B,ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){let he=$.update(y),xe=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ke.copy(he.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(xe)){let ge=he.groups;for(let Be=0,ze=ge.length;Be<ze;Be++){let Re=ge[Be],nt=xe[Re.materialIndex];nt&&nt.visible&&m.push(y,he,nt,B,ke.z,Re)}}else xe.visible&&m.push(y,he,xe,B,ke.z,null)}}let ie=y.children;for(let he=0,xe=ie.length;he<xe;he++)iu(ie[he],O,B,V)}function kd(y,O,B,V){let N=y.opaque,ie=y.transmissive,he=y.transparent;f.setupLightsView(B),re===!0&&Me.setGlobalState(M.clippingPlanes,B),V&&be.viewport(R.copy(V)),N.length>0&&fa(N,O,B),ie.length>0&&fa(ie,O,B),he.length>0&&fa(he,O,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Bd(y,O,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ei(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?As:Xn,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ie=f.state.transmissionRenderTarget[V.id],he=V.viewport||R;ie.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);let xe=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(j),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Pt&&Q.render(B);let ge=M.toneMapping;M.toneMapping=Si;let Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),re===!0&&Me.setGlobalState(M.clippingPlanes,V),fa(y,B,V),qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Re=0,nt=O.length;Re<nt;Re++){let _t=O[Re],Dt=_t.object,Ot=_t.geometry,ct=_t.material,Le=_t.group;if(ct.side===Dn&&Dt.layers.test(V.layers)){let Jt=ct.side;ct.side=Qt,ct.needsUpdate=!0,Vd(Dt,B,V,Ot,ct,Le),ct.side=Jt,ct.needsUpdate=!0,ze=!0}}ze===!0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie))}M.setRenderTarget(xe),M.setClearColor(j,X),Be!==void 0&&(V.viewport=Be),M.toneMapping=ge}function fa(y,O,B){let V=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ie=y.length;N<ie;N++){let he=y[N],xe=he.object,ge=he.geometry,Be=he.group,ze=he.material;ze.allowOverride===!0&&V!==null&&(ze=V),xe.layers.test(B.layers)&&Vd(xe,O,B,ge,ze,Be)}}function Vd(y,O,B,V,N,ie){y.onBeforeRender(M,O,B,V,N,ie),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,O,B,V,y,ie),N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,M.renderBufferDirect(B,O,V,N,y,ie),N.side=In,N.needsUpdate=!0,M.renderBufferDirect(B,O,V,N,y,ie),N.side=Dn):M.renderBufferDirect(B,O,V,N,y,ie),y.onAfterRender(M,O,B,V,N,ie)}function pa(y,O,B){O.isScene!==!0&&(O=It);let V=De.get(y),N=f.state.lights,ie=f.state.shadowsArray,he=N.state.version,xe=K.getParameters(y,N.state,ie,O,B),ge=K.getProgramCacheKey(xe),Be=V.programs;V.environment=y.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(y.isMeshStandardMaterial?E:Vt).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",ye),Be=new Map,V.programs=Be);let ze=Be.get(ge);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===he)return Hd(y,xe),ze}else xe.uniforms=K.getUniforms(y),y.onBeforeCompile(xe,M),ze=K.acquireProgram(xe,ge),Be.set(ge,ze),V.uniforms=xe.uniforms;let Re=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=Me.uniform),Hd(y,xe),V.needsLights=v0(y),V.lightsStateVersion=he,V.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function zd(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=Ls.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Hd(y,O){let B=De.get(y);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function m0(y,O,B,V,N){O.isScene!==!0&&(O=It),qe.resetTextureUnits();let ie=O.fog,he=V.isMeshStandardMaterial?O.environment:null,xe=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sr,ge=(V.isMeshStandardMaterial?E:Vt).get(V.envMap||he),Be=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,_t=!!B.morphAttributes.color,Dt=Si;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=M.toneMapping);let Ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=Ot!==void 0?Ot.length:0,Le=De.get(V),Jt=f.state.lights;if(re===!0&&(Te===!0||y!==x)){let ln=y===x&&V.id===b;Me.setState(V,y,ln)}let gt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Jt.state.version||Le.outputColorSpace!==xe||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==ge||V.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Me.numPlanes||Le.numIntersection!==Me.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==ze||Le.morphTargets!==Re||Le.morphNormals!==nt||Le.morphColors!==_t||Le.toneMapping!==Dt||Le.morphTargetsCount!==ct)&&(gt=!0):(gt=!0,Le.__version=V.version);let Nn=Le.currentProgram;gt===!0&&(Nn=pa(V,O,N));let Nr=!1,gn=!1,Ns=!1,Ct=Nn.getUniforms(),En=Le.uniforms;if(be.useProgram(Nn.program)&&(Nr=!0,gn=!0,Ns=!0),V.id!==b&&(b=V.id,gn=!0),Nr||x!==y){be.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),Pg(de),Dg(de),Ct.setValue(A,"projectionMatrix",de)):Ct.setValue(A,"projectionMatrix",y.projectionMatrix),Ct.setValue(A,"viewMatrix",y.matrixWorldInverse);let hn=Ct.map.cameraPosition;hn!==void 0&&hn.setValue(A,ht.setFromMatrixPosition(y.matrixWorld)),St.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,gn=!0,Ns=!0)}if(N.isSkinnedMesh){Ct.setOptional(A,N,"bindMatrix"),Ct.setOptional(A,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ct.setValue(A,"boneTexture",ln.boneTexture,qe))}N.isBatchedMesh&&(Ct.setOptional(A,N,"batchingTexture"),Ct.setValue(A,"batchingTexture",N._matricesTexture,qe),Ct.setOptional(A,N,"batchingIdTexture"),Ct.setValue(A,"batchingIdTexture",N._indirectTexture,qe),Ct.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(A,"batchingColorTexture",N._colorsTexture,qe));let Tn=B.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&me.update(N,B,Nn),(gn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,Ct.setValue(A,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(En.envMap.value=ge,En.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),gn&&(Ct.setValue(A,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&g0(En,Ns),ie&&V.fog===!0&&W.refreshFogUniforms(En,ie),W.refreshMaterialUniforms(En,V,G,J,f.state.transmissionRenderTarget[y.id]),Ls.upload(A,zd(Le),En,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ls.upload(A,zd(Le),En,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ct.setValue(A,"center",N.center),Ct.setValue(A,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(A,"normalMatrix",N.normalMatrix),Ct.setValue(A,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let ln=V.uniformsGroups;for(let hn=0,ru=ln.length;hn<ru;hn++){let tr=ln[hn];P.update(tr,Nn),P.bind(tr,Nn)}}return Nn}function g0(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function v0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,O,B){let V=De.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),De.get(y.texture).__webglTexture=O,De.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let B=De.get(y);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};let _0=A.createFramebuffer();this.setRenderTarget=function(y,O=0,B=0){I=y,C=O,T=B;let V=!0,N=null,ie=!1,he=!1;if(y){let ge=De.get(y);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(ge.__webglFramebuffer===void 0)qe.setupRenderTarget(y);else if(ge.__hasExternalTextures)qe.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Re=y.depthTexture;if(ge.__boundDepthTexture!==Re){if(Re!==null&&De.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(y)}}let Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);let ze=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?N=ze[O][B]:N=ze[O],ie=!0):y.samples>0&&qe.useMultisampledRTT(y)===!1?N=De.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[B]:N=ze,R.copy(y.viewport),z.copy(y.scissor),k=y.scissorTest}else R.copy(Ie).multiplyScalar(G).floor(),z.copy(Ke).multiplyScalar(G).floor(),k=Mt;if(B!==0&&(N=_0),be.bindFramebuffer(A.FRAMEBUFFER,N)&&V&&be.drawBuffers(y,N),be.viewport(R),be.scissor(z),be.setScissorTest(k),ie){let ge=De.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,B)}else if(he){let ge=De.get(y.texture),Be=O;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.__webglTexture,B,Be)}else if(y!==null&&B!==0){let ge=De.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(y,O,B,V,N,ie,he,xe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){be.bindFramebuffer(A.FRAMEBUFFER,ge);try{let Be=y.textures[xe],ze=Be.format,Re=Be.type;if(!St.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-V&&B>=0&&B<=y.height-N&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(O,B,V,N,ae.convert(ze),ae.convert(Re),ie))}finally{let Be=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=function(y,O,B,V,N,ie,he,xe=0){return Us(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(O>=0&&O<=y.width-V&&B>=0&&B<=y.height-N){be.bindFramebuffer(A.FRAMEBUFFER,ge);let Be=y.textures[xe],ze=Be.format,Re=Be.type;if(!St.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.bufferData(A.PIXEL_PACK_BUFFER,ie.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(O,B,V,N,ae.convert(ze),ae.convert(Re),0);let _t=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,_t);let Dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),yield Ig(A,Dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ie),A.deleteBuffer(nt),A.deleteSync(Dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(y,O=null,B=0){let V=Math.pow(2,-B),N=Math.floor(y.image.width*V),ie=Math.floor(y.image.height*V),he=O!==null?O.x:0,xe=O!==null?O.y:0;qe.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,he,xe,N,ie),be.unbindTexture()};let y0=A.createFramebuffer(),x0=A.createFramebuffer();this.copyTextureToTexture=function(y,O,B=null,V=null,N=0,ie=null){ie===null&&(N!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=N,N=0):ie=0);let he,xe,ge,Be,ze,Re,nt,_t,Dt,Ot=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(B!==null)he=B.max.x-B.min.x,xe=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Be=B.min.x,ze=B.min.y,Re=B.isBox3?B.min.z:0;else{let Tn=Math.pow(2,-N);he=Math.floor(Ot.width*Tn),xe=Math.floor(Ot.height*Tn),y.isDataArrayTexture?ge=Ot.depth:y.isData3DTexture?ge=Math.floor(Ot.depth*Tn):ge=1,Be=0,ze=0,Re=0}V!==null?(nt=V.x,_t=V.y,Dt=V.z):(nt=0,_t=0,Dt=0);let ct=ae.convert(O.format),Le=ae.convert(O.type),Jt;O.isData3DTexture?(qe.setTexture3D(O,0),Jt=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),Jt=A.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),Jt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);let gt=A.getParameter(A.UNPACK_ROW_LENGTH),Nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Nr=A.getParameter(A.UNPACK_SKIP_PIXELS),gn=A.getParameter(A.UNPACK_SKIP_ROWS),Ns=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Be),A.pixelStorei(A.UNPACK_SKIP_ROWS,ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);let Ct=y.isDataArrayTexture||y.isData3DTexture,En=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let Tn=De.get(y),ln=De.get(O),hn=De.get(Tn.__renderTarget),ru=De.get(ln.__renderTarget);be.bindFramebuffer(A.READ_FRAMEBUFFER,hn.__webglFramebuffer),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,ru.__webglFramebuffer);for(let tr=0;tr<ge;tr++)Ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(y).__webglTexture,N,Re+tr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(O).__webglTexture,ie,Dt+tr)),A.blitFramebuffer(Be,ze,he,xe,nt,_t,he,xe,A.DEPTH_BUFFER_BIT,A.NEAREST);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||De.has(y)){let Tn=De.get(y),ln=De.get(O);be.bindFramebuffer(A.READ_FRAMEBUFFER,y0),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,x0);for(let hn=0;hn<ge;hn++)Ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Tn.__webglTexture,N,Re+hn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Tn.__webglTexture,N),En?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,ie,Dt+hn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,ie),N!==0?A.blitFramebuffer(Be,ze,he,xe,nt,_t,he,xe,A.COLOR_BUFFER_BIT,A.NEAREST):En?A.copyTexSubImage3D(Jt,ie,nt,_t,Dt+hn,Be,ze,he,xe):A.copyTexSubImage2D(Jt,ie,nt,_t,Be,ze,he,xe);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else En?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(Jt,ie,nt,_t,Dt,he,xe,ge,ct,Le,Ot.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Jt,ie,nt,_t,Dt,he,xe,ge,ct,Ot.data):A.texSubImage3D(Jt,ie,nt,_t,Dt,he,xe,ge,ct,Le,Ot):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ie,nt,_t,he,xe,ct,Le,Ot.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ie,nt,_t,Ot.width,Ot.height,ct,Ot.data):A.texSubImage2D(A.TEXTURE_2D,ie,nt,_t,he,xe,ct,Le,Ot);A.pixelStorei(A.UNPACK_ROW_LENGTH,gt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nr),A.pixelStorei(A.UNPACK_SKIP_ROWS,gn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ns),ie===0&&O.generateMipmaps&&A.generateMipmap(Jt),be.unbindTexture()},this.copyTextureToTexture3D=function(y,O,B=null,V=null,N=0){return wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,B,V,N)},this.initRenderTarget=function(y){De.get(y).__webglFramebuffer===void 0&&qe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?qe.setTextureCube(y,0):y.isData3DTexture?qe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?qe.setTexture2DArray(y,0):qe.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){C=0,T=0,I=null,be.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var nu=(()=>{class i{constructor(){this.panelState=new cn,this.panelState$=this.panelState.asObservable()}updatePanelState(t){this.panelState.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Qw=["canvas"],h0=(()=>{class i{constructor(t,n,r,s){this.platformId=t,this.router=n,this.sceneControlService=r,this.syncService=s,this.animationId=0,this.signPanels=[],this.raycaster=new na,this.mouse=new tt,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.dragThreshold=5,this.initialPinchDistance=0,this.lastTap=0,this.touchStartPosition={x:0,y:0},this.initialCameraRadiusOnPinch=10,this.cameraTarget=new L(0,1.5,0),this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.isZooming=!1,this.zoomStartTime=0,this.zoomDuration=1e3,this.initialCameraPosition=new L,this.targetCameraPosition=new L,this.initialCameraTarget=new L,this.targetCameraTarget=new L,this.onMouseDown=o=>{this.isDragging=!0,this.canvasRef.nativeElement.style.cursor="grabbing",this.previousMousePosition={x:o.clientX,y:o.clientY}},this.onMouseUp=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseLeave=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseMove=o=>{if(!this.isDragging)return;let a=o.clientX-this.previousMousePosition.x,l=o.clientY-this.previousMousePosition.y;this.cameraAzimuth-=a*.01,this.cameraPolar-=l*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:o.clientX,y:o.clientY},this.updateCameraPosition()},this.onClick=o=>{let a=Math.abs(o.clientX-this.previousMousePosition.x),l=Math.abs(o.clientY-this.previousMousePosition.y);if(a>this.dragThreshold||l>this.dragThreshold)return;this.mouse.x=o.clientX/window.innerWidth*2-1,this.mouse.y=-(o.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let c=this.signPanels.map(h=>h.mesh),u=this.raycaster.intersectObjects(c,!0);if(u.length>0){let h=u[0].object,d=this.signPanels.find(p=>p.mesh===h);for(;h&&!d;)d=this.signPanels.find(p=>p.mesh===h),h=h.parent;d&&d.label!=="giant"&&d.label!=="main"&&(this.clickSound&&(this.clickSound.isPlaying&&this.clickSound.stop(),this.clickSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.clickSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()})),this.sceneControlService.requestZoom("screen"),this.router.navigate([`/${d.label.toLowerCase()}`]))}},this.onMouseWheel=o=>{o.preventDefault(),this.cameraRadius+=o.deltaY*.01,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()}))},this.onTouchStart=o=>{o.preventDefault(),this.isDragging=!0;let a=o.touches;a.length===1?(this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.touchStartPosition={x:a[0].clientX,y:a[0].clientY}):a.length===2&&(this.initialPinchDistance=this.getPinchDistance(a),this.initialCameraRadiusOnPinch=this.cameraRadius)},this.onTouchMove=o=>{if(o.preventDefault(),!this.isDragging)return;let a=o.touches;if(a.length===1){let l=a[0].clientX-this.previousMousePosition.x,c=a[0].clientY-this.previousMousePosition.y;this.cameraAzimuth-=l*.01,this.cameraPolar-=c*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.updateCameraPosition()}else if(a.length===2){let l=this.getPinchDistance(a);if(this.initialPinchDistance>0){let c=l/this.initialPinchDistance;this.cameraRadius=this.initialCameraRadiusOnPinch/c,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.pause(),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.play()}))}}},this.onTouchEnd=o=>{o.preventDefault(),this.isDragging=!1,this.initialPinchDistance=0;let a=new Date().getTime(),l=a-this.lastTap;if(l<300&&l>0)this.resetCamera();else if(o.changedTouches.length===1){let c=o.changedTouches[0],u=Math.abs(c.clientX-this.touchStartPosition.x),h=Math.abs(c.clientY-this.touchStartPosition.y);if(u<this.dragThreshold&&h<this.dragThreshold){let d=new MouseEvent("click",{clientX:c.clientX,clientY:c.clientY,bubbles:!0,cancelable:!0});this.onClick(d)}}this.lastTap=a},this.animate=()=>{if(this.animationId=requestAnimationFrame(this.animate),this.isZooming){let a=Date.now()-this.zoomStartTime,l=Math.min(a/this.zoomDuration,1),c=1-Math.pow(1-l,5);this.camera.position.lerpVectors(this.initialCameraPosition,this.targetCameraPosition,c),this.cameraTarget.lerpVectors(this.initialCameraTarget,this.targetCameraTarget,c),this.camera.lookAt(this.cameraTarget),l>=1&&(this.isZooming=!1)}this.animateLeaves(),this.renderer.render(this.scene,this.camera),this.syncPanel()},this.onWindowResize=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}ngOnInit(){if(qs(this.platformId)){this.initThree(),this.animate();let t=new ea;t.load("assets/audio/classical_ambient.mp3",r=>{this.ambientSound=new Cr(this.listener),this.ambientSound.setBuffer(r),this.ambientSound.setLoop(!0),this.ambientSound.setVolume(.5),this.ambientSound.play()}),t.load("assets/audio/mouse_click.mp3",r=>{this.clickSound=new Cr(this.listener),this.clickSound.setBuffer(r),this.clickSound.setVolume(.7)}),t.load("assets/audio/zoom_effect.mp3",r=>{this.zoomSound=new Cr(this.listener),this.zoomSound.setBuffer(r),this.zoomSound.setVolume(.7)});let n=this.canvasRef.nativeElement;n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("mousemove",this.onMouseMove),n.addEventListener("click",this.onClick),n.addEventListener("mouseleave",this.onMouseLeave),n.addEventListener("wheel",this.onMouseWheel,{passive:!1}),n.addEventListener("touchstart",this.onTouchStart,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove,{passive:!1}),n.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("resize",this.onWindowResize),this.sceneControlService.zoomRequest$.subscribe(r=>{typeof r=="string"&&r==="screen"?this.zoomToScreen():r instanceof Kt&&this.zoomOnObject(r)}),this.sceneControlService.cameraResetRequest$.subscribe(()=>{this.resetCamera(),this.syncService.updatePanelState({visible:!1,transform:""})})}}ngOnDestroy(){if(qs(this.platformId)){cancelAnimationFrame(this.animationId);let t=this.canvasRef.nativeElement;this.ambientSound&&this.ambientSound.stop(),this.clickSound&&this.clickSound.stop(),this.zoomSound&&this.zoomSound.stop(),this.listener&&this.listener.context.close(),window.removeEventListener("resize",this.onWindowResize),t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("click",this.onClick),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("wheel",this.onMouseWheel),t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),t.removeEventListener("touchend",this.onTouchEnd)}}zoomOnObject(t){if(this.isZooming)return;this.isZooming=!0,this.zoomStartTime=Date.now(),this.initialCameraPosition.copy(this.camera.position),this.initialCameraTarget.copy(this.cameraTarget);let n=new L;t.getWorldPosition(n),this.targetCameraTarget.copy(n);let r=new L(0,0,-4);r.applyQuaternion(t.quaternion),this.targetCameraPosition.copy(n).add(r)}zoomToScreen(){this.zoomOnObject(this.screenPanel)}resetCamera(){this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.cameraTarget.set(0,1.5,0),this.updateCameraPosition()}getPinchDistance(t){let n=t[0].clientX-t[1].clientX,r=t[0].clientY-t[1].clientY;return Math.sqrt(n*n+r*r)}updateCameraPosition(){let t=this.cameraTarget.x+this.cameraRadius*Math.sin(this.cameraPolar)*Math.sin(this.cameraAzimuth),n=this.cameraTarget.y+this.cameraRadius*Math.cos(this.cameraPolar),r=this.cameraTarget.z+this.cameraRadius*Math.sin(this.cameraPolar)*Math.cos(this.cameraAzimuth);this.camera.position.set(t,n,r),this.camera.lookAt(this.cameraTarget)}initThree(){this.signPanels=[];let t=this.canvasRef.nativeElement;this.scene=new Go,this.addSky(),this.addTrees(),this.addBahnhofLampPost(),this.camera=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),this.listener=new ta,this.camera.add(this.listener),this.updateCameraPosition(),this.addTrainTracks(),this.addTrain(),this.addPlatformDetails(),this.addPlatformRoof(),this.renderer=new eu({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ac;let n=new Yo(4210768,526368,1.3);this.scene.add(n);let r=new Ko(4214880,1.8);r.position.set(10,15,10),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,this.scene.add(r),this.addAwningLights(),this.addPlatformLights(),this.addStreetLights();let s=new te(new sn(30,30),new Ce({color:3355460,emissive:34,emissiveIntensity:.5}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.createMainBuilding(),this.createScreenPanel(),this.addCharacters(),this.addMenuBoard(),this.addTableDetails(),this.addBusStop(),this.addBus()}syncPanel(){if(!this.screenPanel)return;let t=new L;this.screenPanel.getWorldPosition(t);let n=t.project(this.camera),r=(n.x*.5+.5)*this.canvasRef.nativeElement.clientWidth,s=(n.y*-.5+.5)*this.canvasRef.nativeElement.clientHeight;this.isZooming||this.camera.position.distanceTo(this.screenPanel.position)<5?n.z<1?this.syncService.updatePanelState({visible:!0,transform:`translate(-50%, -50%) translate(${r}px, ${s}px)`}):this.syncService.updatePanelState({visible:!1,transform:""}):this.syncService.updatePanelState({visible:!1,transform:""})}createScreenPanel(){let t=new sn(8,5),n=new rn({visible:!1});this.screenPanel=new te(t,n),this.screenPanel.position.set(0,1.5,-2.04),this.scene.add(this.screenPanel)}addBus(){let t=new Et,n=new Ce({color:21922,metalness:.7,roughness:.4}),r=new Ce({color:16777215,metalness:.2,roughness:.1,transparent:!0,opacity:.3}),s=new Ce({color:2236962,metalness:.1}),o=new te(new je(8,2.5,2.2),n);o.position.y=1.5,o.castShadow=!1,t.add(o);let a=new Lt(.5,.5,.3,32);a.rotateX(Math.PI/2),[-2.5,2.5].forEach(w=>{[-1.1,1.1].forEach(S=>{let M=new te(a,s);M.position.set(w,.5,S),t.add(M)})});let c=new te(new je(6,1.2,.1),r);c.position.set(0,2,1.1),t.add(c);let u=c.clone();u.position.z=-1.1,t.add(u);let h=new te(new je(.1,1.2,2),r);h.position.set(3.95,2,0),h.rotation.y=Math.PI/12,t.add(h),[-.8,.8].forEach(w=>{let S=new te(new Lt(.2,.15,.1),new Ce({color:16777215,emissive:16777215,emissiveIntensity:1.5}));S.position.set(3.95,1,w),S.rotation.z=Math.PI/2,t.add(S);let M=new Ts(16777215,4,20,Math.PI/5,.5,2);M.position.set(4,1,w),M.target.position.set(10,1,w),t.add(M),t.add(M.target)});let d=this.createBusNumberTexture(),p=new rn({map:d}),g=new te(new sn(1,.4),p);g.position.set(4.01,2.5,0),g.rotation.y=Math.PI/2,t.add(g);let v=this.createRMVLogoTexture(),m=new rn({map:v,transparent:!0}),f=new te(new sn(1.5,.5),m);f.position.set(-1,1.5,1.11),t.add(f),t.position.set(10,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusNumberTexture(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height),n.font='bold 45px "Courier New", Courier, monospace',n.fillStyle="#FFA500",n.textAlign="center",n.textBaseline="middle",n.fillText("801",t.width/2,t.height/2);let r=new ti(t);return r.needsUpdate=!0,r}createRMVLogoTexture(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.fillStyle="#D9000D",n.fillRect(20,20,60,88),n.fillStyle="#009650",n.fillRect(90,20,60,88),n.fillStyle="#006AB3",n.fillRect(160,20,60,88),n.font="bold 80px sans-serif",n.fillStyle="black",n.textAlign="left",n.textBaseline="middle",n.fillText("RMV",250,t.height/2);let r=new ti(t);return r.needsUpdate=!0,r}addBusStop(){let t=new Et,n=new Ce({color:4473924,metalness:.9,roughness:.5}),r=new Ce({color:16777215,metalness:.1,roughness:.1,transparent:!0,opacity:.2}),s=new te(new je(4,.1,2),n);s.position.y=2.5,s.castShadow=!0,t.add(s);let o=new te(new je(4,2.4,.05),r);o.position.set(0,1.25,-.9),t.add(o);let a=new te(new je(.05,2.4,2),r);a.position.set(-1.95,1.25,0),t.add(a);let l=16767129,c=new Mi(l,3,8,2);c.position.set(0,2.4,-.4),c.castShadow=!0,t.add(c);let u=new te(new je(1.5,.05,.2),new Ce({color:3355443,emissive:l,emissiveIntensity:1}));u.position.copy(c.position),t.add(u);let h=this.createBench();h.scale.set(.8,.8,.8),h.position.set(0,.2,-.5),t.add(h);let d=new te(new Lt(.05,.05,3,16),n);d.position.set(2.5,1.5,0),d.castShadow=!0,t.add(d);let p=new Es(.4,32),g=this.createBusSignTexture(),v=new rn({map:g}),m=new te(p,v);m.position.set(2.5,3.2,0),t.add(m);let f=this.createBusSignTexture(!0),w=new rn({map:f}),S=new te(p,w);S.position.copy(m.position),S.rotation.y=Math.PI,t.add(S),t.position.set(14,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusSignTexture(t=!1){let n=document.createElement("canvas");n.width=256,n.height=256;let r=n.getContext("2d");r.fillStyle="#FFD700",r.beginPath(),r.arc(128,128,128,0,Math.PI*2),r.fill(),r.strokeStyle="black",r.lineWidth=20,r.beginPath(),r.arc(128,128,118,0,Math.PI*2),r.stroke(),t&&(r.translate(n.width,0),r.scale(-1,1)),r.font="bold 150px sans-serif",r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",r.fillText("H",128,128);let s=new ti(n);return s.needsUpdate=!0,s}createMainBuilding(){let t=new Et,n=new Ce({color:9132587}),r=new te(new je(6,4,.1),n);r.position.set(0,2,-2),r.castShadow=!0,r.receiveShadow=!0,t.add(r);let s=new te(new je(.1,4,4),n);s.position.set(3,2,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new te(new Xo(4.5,2,4),new Ce({color:5967374}));o.rotation.y=Math.PI/4,o.position.y=5,o.castShadow=!0,t.add(o);let a=new te(new sn(5.8,3.8),new Ce({color:13808780}));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,t.add(a);let l=new te(new je(3,1,.8),new Ce({color:9127187}));l.position.set(0,.5,1.8),l.castShadow=!0,l.receiveShadow=!0,t.add(l);let c=6,u=1.5,h=.1,d=new je(c,h,u),p=new Ce({color:16777215,transparent:!0,opacity:.5,metalness:.2,roughness:.4}),g=new te(d,p);g.position.set(0,3.2,2+u/2),g.rotation.x=Math.PI/10,g.castShadow=!0,g.receiveShadow=!0,t.add(g);let v=new Lt(.05,.05,3.2),m=new Ce({color:13421772,metalness:.9}),f=new te(v,m);f.position.set(-c/2+.1,1.6,2.3),f.castShadow=!0,t.add(f);let w=new te(v,m);w.position.set(c/2-.1,1.6,2.3),w.castShadow=!0,t.add(w);let S=new te(new Lt(.7,.7,.1,16),new Ce({color:7032635}));S.position.set(0,1,0),S.castShadow=!0,S.receiveShadow=!0,t.add(S);let M=new Ce({color:6636321});[-.8,.8].forEach(X=>{let H=new te(new je(.4,.4,.4),M);H.position.set(X,.2,0),H.castShadow=!0,H.receiveShadow=!0,t.add(H)});let D=new Lt(.05,.05,.3,16);[16711680,65280].forEach((X,H)=>{let J=new te(D,new Ce({color:X}));J.position.set(H===0?-.2:.2,1.15,H===0?-.1:.2),J.castShadow=!0,t.add(J)});for(let X=0;X<5;X++){let H=new te(new je(.05,.01,.01),new Ce({color:16776960}));H.position.set(-.1+X*.05,1.16,0),H.castShadow=!0,t.add(H)}let C=new te(new je(.5,1.5,.3),new Ce({color:3355443}));C.position.set(2.7,1,1.6),C.castShadow=!0,t.add(C);let T=new Ce({color:8900331,transparent:!0,opacity:.5,roughness:.1,metalness:.9}),I=new Ce({color:4473924}),b=()=>{let X=new Et,H=new te(new sn(1,1.2),T);X.add(H);let J=new te(new je(1.1,.05,.1),I);J.position.y=.6,X.add(J);let G=J.clone();G.position.y=-.6,X.add(G);let oe=new te(new je(.05,1.2,.1),I);oe.position.x=-.5,X.add(oe);let pe=oe.clone();return pe.position.x=.5,X.add(pe),X},x=b();x.position.set(-1.5,2.5,-1.95),t.add(x);let R=b();R.position.set(1.5,2.5,-1.95),t.add(R);let z=new Ce({color:6044193}),k=new te(new je(.1,2,1),z);k.position.set(2.95,1,-.5),t.add(k);let j=new te(new Wn(.05,8,8),new Ce({color:16766720,metalness:1}));j.position.set(2.85,1,-.2),t.add(j),this.scene.add(t)}addCharacters(){let t=new Ce({color:2003199}),n=()=>{let o=new Et,a=new te(new je(.5,.8,.3),t);a.castShadow=!0,o.add(a);let l=new te(new je(.3,.3,.3),t);return l.position.y=.6,l.castShadow=!0,o.add(l),o},r=n();r.position.set(-.8,.8,0),this.scene.add(r);let s=n();s.position.set(.8,.8,0),s.rotation.y=Math.PI,this.scene.add(s)}addMenuBoard(){let t=new Et,n=new Ce({color:2236962,metalness:.9,roughness:.4}),r=new te(new Lt(.8,.8,.05,32),n);r.castShadow=!0,t.add(r);let s=new te(new Lt(.08,.08,1.5,16),n);s.position.y=.75,s.castShadow=!0,t.add(s);let o=new Et;o.position.y=1.5+.9,o.rotation.x=-Math.PI/12,t.add(o);let a=new te(new je(2.5,1.8,.08),n);a.castShadow=!0,o.add(a);let l=new Ce({color:0,emissive:1118481,emissiveIntensity:1.5}),c=new te(new sn(2.4,1.7),l);c.position.z=.045,o.add(c);let u=[{label:"Profil",text:"About Me"},{label:"Daten",text:"Data"},{label:"Skills",text:"Skills"},{label:"SoftSkills",text:"Soft Skills"},{label:"Projekte",text:"Projects"},{label:"Akademisch",text:"Academic"},{label:"Sprachen",text:"Languages"},{label:"Erfahrung",text:"Experience"}],h=.18,d=.02,g=(u.length*(h+d)-d)/2-h/2;u.forEach((v,m)=>{let f=C=>{let T=document.createElement("canvas");T.width=512,T.height=64;let I=T.getContext("2d");I.fillStyle="#1a1a1a",I.fillRect(0,0,T.width,T.height),I.font="bold 40px sans-serif",I.fillStyle="#00bfff",I.textAlign="center",I.textBaseline="middle",I.fillText(C,T.width/2,T.height/2);let b=new ti(T);return b.needsUpdate=!0,b},w=new sn(2.2,h),S=new rn({map:f(v.text),transparent:!0}),M=new te(w,S),D=g-m*(h+d);M.position.set(0,D,.05),o.add(M),this.signPanels.push({mesh:M,label:v.label})}),t.position.set(4.3,0,2.2),t.scale.set(.8,.8,.8),this.scene.add(t)}addTableDetails(){let t=new Ce({color:15658734,roughness:.3}),n=new Lt(.08,.1,.15,16),r=new Ce({color:13421772,roughness:.3}),s=new Lt(.15,.15,.02,16),o=new te(n,t);o.position.set(-.2,1.08,.1),this.scene.add(o);let a=new te(s,r);a.position.set(.2,1.01,-.1),this.scene.add(a)}addAwningLights(){let t=new Et,n=16767129,r=9,s=8,o=2,a=[-2,0,2];for(let l of a){let c=new Mi(n,r,s,o);c.position.set(l,3,2.5),c.castShadow=!0,t.add(c);let u=new te(new Wn(.1,8,8),new Ce({color:5592405,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addPlatformLights(){let t=new Et,n=16767129,r=4,s=8,o=2,a=[-7,0,7];for(let l of a){let c=new Mi(n,r,s,o);c.position.set(-12.5,3.2,l),c.castShadow=!0,t.add(c);let u=new te(new je(.2,.1,.2),new Ce({color:3355443,emissive:n,emissiveIntensity:1}));u.position.copy(c.position),t.add(u)}this.scene.add(t)}addStreetLights(){let t=[new L(12,0,12),new L(12,0,-12),new L(-10,0,12),new L(-10,0,-12)],n=new Ce({color:3355443,metalness:.8}),r=new Ce({color:16777215,emissive:16767129,emissiveIntensity:2}),s=o=>{let a=new Et,l=new Lt(.1,.15,4,16),c=new te(l,n);c.position.y=2,c.castShadow=!0,a.add(c);let u=new je(1,.1,.1),h=new te(u,n);h.position.set(.5,4,0),h.castShadow=!0,a.add(h);let d=new Wn(.2,16,16),p=new te(d,r);p.position.set(1,3.8,0),a.add(p);let g=new Mi(16767129,7.5,15,2);g.position.copy(p.position),g.castShadow=!0,a.add(g),a.position.copy(o),a.rotation.y=Math.atan2(o.x,o.z)+Math.PI,this.scene.add(a)};t.forEach(o=>s(o))}addTrainTracks(){let t=new Et,n=new je(3,.2,15),r=new Ce({color:8947848}),s=new te(n,r);s.position.set(-12.5,.1,0),s.receiveShadow=!0,t.add(s);let o=new je(.2,.05,2),a=new Ce({color:7032635});for(let d=-15;d<15;d+=.8){let p=new te(o,a);p.position.set(-14.5,.05,d),p.receiveShadow=!0,t.add(p)}let l=new je(.08,.08,30),c=new Ce({color:4473924,metalness:.8,roughness:.5}),u=new te(l,c);u.position.set(-14.2,.12,0),u.castShadow=!0,t.add(u);let h=new te(l,c);h.position.set(-14.8,.12,0),h.castShadow=!0,t.add(h),this.scene.add(t)}addTrain(){let t=new Et;t.position.set(-14.5,.35,0),t.rotation.y=Math.PI/2;let n=14360358,r=new Ce({color:n,metalness:.8,roughness:.4}),s=new Ce({color:13421772,metalness:.6,roughness:.5}),o=new Ce({color:3355443,metalness:.9,roughness:.8}),a=new Ce({color:1118481,metalness:1,roughness:.2}),l=new Lt(.25,.25,1.2,16);l.rotateX(Math.PI/2);let c=new Et,u=new te(new je(4,1.2,1),r);u.position.y=.6,u.castShadow=!0,c.add(u);let h=this.createDBLogoTexture(),d=new rn({map:h,transparent:!0}),p=new te(new sn(.8,.8),d);p.position.set(0,.7,.51),c.add(p);let g=new te(new je(1.5,.8,1),new Ce({color:4473924}));g.position.set(-1.25,1.4,0),g.castShadow=!0,c.add(g);let v=new te(new je(.05,.5,.8),a);v.position.set(-1.95,1.4,0),c.add(v);let m=new te(new Lt(.15,.1,.1),new Ce({color:16777215,emissive:16777215,emissiveIntensity:2}));m.position.set(-2,.8,0),m.rotation.z=Math.PI/2,c.add(m);let f=new Ts(16777215,5,20,Math.PI/6,.5,2);f.position.set(-2,.8,0),f.target.position.set(-10,.8,0),c.add(f),c.add(f.target);for(let T=0;T<2;T++){let I=new te(l,o);I.position.set(-1+T*2,0,0),c.add(I)}c.position.x=-10,t.add(c);let w=5,S=1.1,M=1.4,D=.5,C=-10+4/2+D+w/2;for(let T=0;T<2;T++){let I=new Et,b=new te(new je(w,M,S),s);b.position.y=.7,b.castShadow=!0,I.add(b);for(let x=-1;x<=1;x+=2)for(let R=-1.5;R<=1.5;R+=1){let z=new te(new je(.8,.5,.05),a);z.position.set(R,.9,S/2*x),I.add(z)}for(let x=0;x<2;x++){let R=new te(l,o);R.position.set(-1.5+x*3,0,0),I.add(R)}I.position.x=C,t.add(I),C+=w+D}this.scene.add(t)}createDBLogoTexture(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.font="bold 180px sans-serif",n.fillStyle="#DB1F26",n.textAlign="center",n.textBaseline="middle",n.fillText("DB",t.width/2,t.height/2);let r=new ti(t);return r.needsUpdate=!0,r}createBench(){let t=new Et,n=new Ce({color:8411718}),r=new te(new je(2,.1,.4),n);r.position.y=.5,r.castShadow=!0,t.add(r);let s=new te(new je(2,.5,.1),n);s.position.set(0,.8,-.15),s.castShadow=!0,t.add(s);let o=new te(new je(.1,.5,.4),n);o.position.set(-.9,.25,0),o.castShadow=!0,t.add(o);let a=o.clone();return a.position.x=.9,t.add(a),t}addPlatformDetails(){let t=this.createBench();t.position.set(-12.2,.2,-4),t.rotation.y=-Math.PI/2,this.scene.add(t);let n=this.createBench();n.position.set(-12.2,.2,4),n.rotation.y=-Math.PI/2,this.scene.add(n)}addPlatformRoof(){let t=new Et,n=new Ce({color:6710886,metalness:.5}),r=new Ce({color:5592405,metalness:.8}),s=new te(new je(4,.2,16),n);s.position.set(-12.5,3.5,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new Lt(.1,.1,3.3,16),a=[-6,0,6];for(let l of a){let c=new te(o,r);c.position.set(-11.5,1.85,l),c.castShadow=!0,t.add(c);let u=new te(o,r);u.position.set(-13.5,1.85,l),u.castShadow=!0,t.add(u)}this.scene.add(t)}addTrees(){let t=new Et,n=new Lt(.1,.1,1),r=new Ce({color:9132587}),s=new Wn(.5,8,8),o=new Ce({color:2263842});[[-5,.5,-5],[5,.5,-5],[5,.5,5]].forEach(l=>{let c=new te(n,r);c.position.set(l[0],l[1]/2,l[2]);let u=new te(s,o);u.position.set(l[0],l[1]+.5,l[2]),t.add(c),t.add(u)}),this.scene.add(t)}animateLeaves(){let t=Date.now()*.001;this.scene.traverse(n=>{if(n instanceof te&&n.geometry instanceof Wn&&!Array.isArray(n.material)){let r=n.material;r.color&&r.color.getHex()===2263842&&(n.position.x+=Math.sin(t+n.position.z)*.001,n.position.z+=Math.cos(t+n.position.x)*.001)}})}addSky(){let t=new Wn(100,32,32),n=new Sn({uniforms:{},vertexShader:`
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
      `,side:Qt,depthWrite:!1}),r=new te(t,n);this.scene.add(r)}addBahnhofLampPost(){let t=new Et,n=new te(new Lt(.08,.08,5,16),new Ce({color:2236962,metalness:1}));n.position.y=2.5,t.add(n);let r=new $o().load("assets/clock-bahnhof.jpg"),s=new rn({map:r,side:Dn}),o=new te(new Es(.5,32),s);o.position.set(0,3.8,.48),t.add(o);let a=new te(new je(.05,.05,.5),new Ce({color:4473924}));a.position.set(0,3.8,.25),t.add(a);let l=.5;[-.25,.25].forEach(d=>{let p=new te(new Lt(.015,.015,l),new Ce({color:8947848}));p.rotation.z=Math.PI/2,p.position.set(d,4.6,0),t.add(p);let g=new te(new Lt(.01,.01,.2),new Ce({color:3355443}));g.position.set(d+(d>0?l/2:-l/2),4.5,0),t.add(g);let v=new te(new Wn(.15,16,16),new Ce({color:16777164,emissive:16764040,emissiveIntensity:.9}));v.position.set(d+(d>0?l/2:-l/2),4.3,0),t.add(v);let m=new Mi(16764040,.6,6);m.position.copy(v.position),t.add(m)});let c=["Profil","Daten","Skills","SoftSkills","Projekte","Akademisch","Sprachen","Erfahrung"],u=[Math.PI/2,Math.PI/3,-Math.PI/2,-Math.PI/3,0,Math.PI/4,-Math.PI/4,Math.PI],h=(d,p=!1)=>{let g=document.createElement("canvas");g.width=512,g.height=128;let v=g.getContext("2d");v.fillStyle="#ffffff",v.fillRect(0,0,g.width,g.height),v.font="bold 48px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle="#000000",p&&(v.translate(g.width,0),v.scale(-1,1)),v.fillText(d,g.width/2,g.height/2);let m=new ti(g);return m.needsUpdate=!0,m};c.forEach((d,p)=>{let g=new sn(1.4,.3),v=new rn({map:h(d),side:In}),m=new rn({map:h(d,!0),side:In}),f=new te(g,v);f.position.set(0,3.3-p*.4,0),f.rotation.y=u[p],f.translateX(.7),t.add(f);let w=new te(g,m);w.position.copy(f.position),w.rotation.copy(f.rotation),w.rotateY(Math.PI),t.add(w),this.signPanels.push({mesh:f,label:d})}),t.position.set(-5.5,0,5),this.scene.add(t)}static{this.\u0275fac=function(n){return new(n||i)(Ve(Fn),Ve(Ui),Ve(kt),Ve(nu))}}static{this.\u0275cmp=At({type:i,selectors:[["app-three-scene"]],viewQuery:function(n,r){if(n&1&&pf(Qw,7),n&2){let s;mf(s=gf())&&(r.canvasRef=s.first)}},decls:2,vars:0,consts:[["canvas",""],[2,"cursor","grab"]],template:function(n,r){n&1&&ve(0,"canvas",1,0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100vh;display:block}"]})}}return i})();var d0=(()=>{class i{constructor(t,n,r,s){this.languageService=t,this.sceneControlService=n,this.router=r,this.http=s,this.currentLanguage="de",this.platformId=Se(Fn),this.conversationHistory=[],this.qaRules=[{keywords:{de:["hallo","guten tag","hey","bonjour"],en:["hello","hi","hey"]},answer:{de:"Hallo! Ich bin der virtuelle Avatar von Danielou. Fragen Sie mich alles \xFCber sein Profil.",en:"Hello! I am Danielou's virtual avatar. Ask me anything about his profile."}},{keywords:{de:["verf\xFCgbarkeit","anfangen","starttermin","eintrittsdatum"],en:["availability","start date","when can you start"]},answer:{de:"Ich schlie\xDFe mein Studium in K\xFCrze ab und bin daher flexibel. F\xFCr eine Vollzeitstelle stehe ich ab dem 01.01.2026 zur Verf\xFCgung.",en:"I am finishing my studies soon and am therefore flexible. I will be available for a full-time position from January 1st, 2026."}},{keywords:{de:["warum sie","einstellen","nicht andere","vorteile","sollen wir sie","unterscheidet sie"],en:["why you","hire","advantages","what sets you apart"]},answer:{de:"Ich glaube, meine St\xE4rke liegt in der Kombination aus soliden technischen F\xE4higkeiten in C++ und Java, meiner praktischen Industrieerfahrung und meiner gro\xDFen Lernbereitschaft. Ich entwickle nicht nur Code, sondern robuste und durchdachte L\xF6sungen f\xFCr komplexe Probleme.",en:"I believe my strength lies in the combination of solid technical skills in C++ and Java, my practical industry experience, and my strong willingness to learn. I don't just write code; I develop robust and well-thought-out solutions for complex problems."}},{keywords:{de:["schw\xE4chen","nachteile"],en:["weakness","weaknesses"]},answer:{de:"Meine gr\xF6\xDFte Schw\xE4che ist wahrscheinlich meine Ungeduld, wenn es darum geht, Probleme zu l\xF6sen. Ich habe jedoch gelernt, dies in eine St\xE4rke umzuwandeln, indem ich diese Energie in eine gr\xFCndliche und strukturierte Analyse lenke, um die beste L\xF6sung zu finden, nicht nur die schnellste.",en:"My biggest weakness is probably my impatience when it comes to solving problems. However, I've learned to turn this into a strength by channeling that energy into thorough and structured analysis to find the best solution, not just the fastest one."}},{keywords:{de:["mensch","person","pers\xF6nlichkeit","\xFCber ihre person","\xFCber dich erz\xE4hlen","beschreiben sie sich"],en:["person","personality","describe yourself","tell me about yourself"]},answer:{de:"Als Mensch bin ich neugierig, aufgeschlossen und zielstrebig. Ich gehe gerne auf Leute zu und glaube, dass man durch Teamarbeit und offene Kommunikation die besten Ergebnisse erzielt. In meiner Freizeit lerne ich st\xE4ndig dazu, sei es durch Lesen oder kleine Programmierprojekte.",en:"As a person, I am curious, open-minded, and determined. I enjoy approaching people and believe that teamwork and open communication yield the best results. In my free time, I am constantly learning, whether through reading or small programming projects."}},{keywords:{de:["wo arbeiten sie","arbeitgeber","jetzige position"],en:["where do you work","current employer"]},answer:{de:"Derzeit unterst\xFCtze ich die Forschung und Entwicklung an der Technischen Hochschule Mittelhessen und arbeite als Dolmetscher f\xFCr das BAMF. Im Sommer 2025 ist zudem ein Praktikum bei der Schunk Group geplant. M\xF6chten Sie mehr \xFCber meine Berufserfahrung erfahren?",en:"I currently support research and development at the THM and work as an interpreter for the BAMF. An internship at the Schunk Group is also planned for summer 2025. Would you like to know more about my work experience?"},navigationTarget:"erfahrung"},{keywords:{de:["erfahrung","berufserfahrung","arbeit","werdegang","karriere","laufbahn"],en:["experience","experiences","work","career","background"]},answer:{de:"Ich habe praktische Erfahrungen in der Softwareentwicklung bei Continental und der THM sowie als Dolmetscher gesammelt. Diese diversen Rollen haben meine technischen F\xE4higkeiten und meine Kommunikationsst\xE4rke verbessert. Soll ich Sie zu diesem Abschnitt f\xFChren?",en:"I have gained practical experience in software development at Continental and THM, as well as an interpreter. These diverse roles have improved my technical abilities and communication skills. Shall I guide you to that section?"},navigationTarget:"erfahrung"},{keywords:{de:["studium","akademisch","bildung","hochschule","schulabschluss","ausbildung","qualifikationen"],en:["education","academic","university","college","degree","qualifications"]},answer:{de:"Ich absolviere derzeit meinen Bachelor in Ingenieur-Informatik an der Technischen Hochschule Mittelhessen. Mein Abitur mit Schwerpunkt Naturwissenschaften habe ich in Kamerun gemacht. Soll ich Ihnen meinen akademischen Werdegang zeigen?",en:"I am currently completing my Bachelor's in Engineering & Computer Science at the THM - University of Applied Sciences. I completed my high school diploma in Cameroon with a focus on science. Shall I show you my academic journey?"},navigationTarget:"akademisch"},{keywords:{de:["projekte","portfolio","eigene arbeiten"],en:["projects","portfolio","personal projects"]},answer:{de:"Ich habe an mehreren spannenden Projekten gearbeitet, darunter ein SmartLab System mit STM32 und MQTT und ein ExamBuilder in Java mit Gemini API. M\xF6chten Sie die Projektdetails sehen?",en:"I have worked on several exciting projects, including a SmartLab System with STM32 and MQTT, and an ExamBuilder in Java with Gemini API integration. Would you like to see the project details?"},navigationTarget:"projekte"},{keywords:{de:["kompetenzen","skills","f\xE4higkeiten","technologien","c++","java","python","kenntnisse","wissen"],en:["skills","competencies","technologies","c++","java","python","knowledge"]},answer:{de:"Meine Kernkompetenzen liegen in C++ und Java. Ich habe auch Erfahrung mit Python, SQL, Web-Technologien und Embedded-Protokollen wie I2C und SPI. Wollen Sie eine detaillierte \xDCbersicht?",en:"My core competencies are in C++ and Java. I also have experience with Python, SQL, web technologies, and embedded protocols like I2C and SPI. Would you like a detailed overview?"},navigationTarget:"skills"},{keywords:{de:["soft skills","st\xE4rken"],en:["soft skills","strengths"]},answer:{de:"Ich sehe meine St\xE4rken in meiner ausgepr\xE4gten Lernbereitschaft, meiner Teamf\xE4higkeit und meinem kritischen Denken. Ich \xFCbernehme gerne Verantwortung und kommuniziere effektiv.",en:"I see my strengths in my strong willingness to learn, my ability to work in a team, and my critical thinking. I like to take responsibility and communicate effectively."}},{keywords:{de:["f\xFChrerschein","mobil","auto"],en:["driving license","driver's license","mobile","car"]},answer:{de:"Ja, ich besitze einen F\xFChrerschein der Klasse B. Das macht mich mobil und flexibel f\xFCr berufliche Termine und Reisen.",en:"Yes, I have a Class B driver's license. This makes me mobile and flexible for work-related appointments and travel."}},{keywords:{de:["sprachen"],en:["languages"]},answer:{de:"Meine Muttersprache ist Franz\xF6sisch. Au\xDFerdem spreche ich flie\xDFend Deutsch (C1) und Englisch (B2).",en:"My native language is French. I also speak fluent German (C1) and English (B2)."},navigationTarget:"sprachen"},{keywords:{de:["hobbys","freizeit"],en:["hobbies","free time"]},answer:{de:"In meiner Freizeit lese ich gerne, spiele Fu\xDFball und nat\xFCrlich programmiere ich auch an eigenen kleinen Projekten.",en:"In my free time, I enjoy reading, playing soccer, and of course, programming my own small projects."}},{keywords:{de:["kinder","familie"],en:["children","family"]},answer:{de:"Ja, ich habe eine wundervolle kleine Tochter, die meine Tage erhellt.",en:"Yes, I have a wonderful little girl who brightens up my days."}},{keywords:{de:["email","telefon","kontakt"],en:["email","phone","contact"]},answer:{de:"Meine Kontaktdaten finden Sie im entsprechenden Bereich des Portfolios. Aus Datenschutzgr\xFCnden gebe ich sie hier im Chat nicht direkt weiter.",en:"You can find my contact details in the dedicated section of the portfolio. For privacy reasons, I do not provide them directly here in the chat."}}],this.defaultAnswers={de:"Entschuldigung, ich kann diese Frage im Moment nicht beantworten. F\xFCr weitere Unterst\xFCtzung k\xF6nnen Sie gerne auf das E-Mail-Symbol links neben dem Chat klicken, um mir direkt eine Nachricht zu senden.",en:"That is an interesting question. It would be best to discuss that with me directly. In the meantime, can I help you with another topic?"},this.langSub=this.languageService.language$.subscribe(o=>{this.currentLanguage=o})}ngOnDestroy(){this.langSub.unsubscribe()}triggerNavigation(t){this.router.navigate([`/${t.toLowerCase()}`]),this.sceneControlService.requestZoom("screen")}resetHistory(){this.conversationHistory=[]}normalizeQuestion(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim()}matchesKeyword(t,n){let r=n.replace(/[.*+?^${}()|[\\]/g,"\\$&");return new RegExp(`${r}`,"i").test(t)}getAnswerFromRules(t){let n=this.normalizeQuestion(t);console.log(`--- New Question ---
`),console.log(`Normalized Question: "${n}"
`),console.log(`Language: ${this.currentLanguage}
`);for(let r of this.qaRules){let o=(r.keywords[this.currentLanguage]||r.keywords.de).find(a=>this.matchesKeyword(n,a));if(o)return console.log(`SUCCESS: Matched keyword "${o}" for rule with answer: "${r.answer[this.currentLanguage].substring(0,20)}"...
`),{text:r.answer[this.currentLanguage]||r.answer.de,navigationTarget:r.navigationTarget}}return console.log(`FAILURE: No rule matched. Returning default answer.
`),{text:this.defaultAnswers[this.currentLanguage]||this.defaultAnswers.de}}getAnswer(t){let n="/.netlify/functions/chat";this.conversationHistory.push({role:"user",parts:[{text:t}]});let r={message:t,lang:this.currentLanguage,history:this.conversationHistory};return this.http.post(n,r).pipe(it(s=>{let o={text:s.reply};return this.conversationHistory.push({role:"model",parts:[{text:s.reply}]}),o}),Ti(s=>{console.error("API call to Netlify function failed, falling back to rule-based answers.",s);let o=this.getAnswerFromRules(t);return this.conversationHistory.push({role:"model",parts:[{text:o.text}]}),Ne(o)}))}static{this.\u0275fac=function(n){return new(n||i)(Qe($t),Qe(kt),Qe(Ui),Qe(Oa))}}static{this.\u0275prov=Ye({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var tE=(i,e)=>({"user-message":i,"bot-message":e});function nE(i,e){if(i&1&&(F(0,"div",5),Pe(1),q()),i&2){let t=un();se(),Xt(" ",t.currentPromptMessage," ")}}function iE(i,e){i&1&&(Fe(),F(0,"svg",6),ve(1,"path",7),q())}function rE(i,e){i&1&&(Fe(),F(0,"svg",6),ve(1,"path",8),q())}function sE(i,e){i&1&&(F(0,"div",30),ve(1,"img",31),q())}function oE(i,e){if(i&1){let t=Xs();F(0,"button",32),pt("click",function(){Ai(t);let r=un().$implicit,s=un(2);return Ri(s.handleNavigationClick(r.navigationTarget))}),Pe(1," Zeigen Sie mir den Abschnitt "),q()}}function aE(i,e){if(i&1&&(F(0,"div",25),bt(1,sE,2,0,"div",26),F(2,"div",27),ve(3,"span",28),bt(4,oE,2,0,"button",29),q()()),i&2){let t=e.$implicit;Ze("ngClass",Mf(4,tE,t.sender==="user",t.sender==="bot")),se(),Ze("ngIf",t.sender==="bot"),se(2),Ze("innerHTML",t.text,zs),se(),Ze("ngIf",t.navigationTarget)}}function lE(i,e){i&1&&(F(0,"div",33)(1,"div",30),ve(2,"img",31),q(),F(3,"div",27)(4,"span"),Pe(5,"schreibt..."),q()()())}function cE(i,e){if(i&1){let t=Xs();F(0,"div",9)(1,"div",10)(2,"div",11),ve(3,"img",12)(4,"span",13),q(),F(5,"div",14)(6,"h3",15),Pe(7,"Danielou M."),q(),F(8,"p",16),Pe(9,"Online"),q()()(),F(10,"div",17),bt(11,aE,5,7,"div",18)(12,lE,6,0,"div",19),q(),F(13,"div",20)(14,"input",21),xf("ngModelChange",function(r){Ai(t);let s=un();return yf(s.userInput,r)||(s.userInput=r),Ri(r)}),pt("keyup.enter",function(){Ai(t);let r=un();return Ri(r.sendMessage())}),q(),F(15,"button",22),pt("click",function(){Ai(t);let r=un();return Ri(r.sendMessage())}),Fe(),F(16,"svg",23),ve(17,"path",24),q()()()()}if(i&2){let t=un();se(11),Ze("ngForOf",t.messages),se(),Ze("ngIf",t.showTypingIndicator),se(2),_f("ngModel",t.userInput)}}var f0=(()=>{class i{constructor(t,n){this.chatbotService=t,this.platformId=n,this.isOpen=!1,this.messages=[],this.userInput="",this.showTypingIndicator=!1,this.promptMessages=["Hier kannst du mit mir sprechen","Chat with me","Parlez-moi","Hier kannst du texten","Schreiben Sie mir"],this.currentPromptMessage=""}ngOnInit(){if(this.messages.push({sender:"bot",text:"Hallo! Ich bin der virtuelle Avatar von Danielou. Stellen Sie mir gerne Ihre Fragen."}),qs(this.platformId)){let t=0;this.currentPromptMessage=this.promptMessages[t],this.promptInterval=setInterval(()=>{t=(t+1)%this.promptMessages.length,this.currentPromptMessage=this.promptMessages[t]},3e3)}}ngOnDestroy(){this.promptInterval&&clearInterval(this.promptInterval)}toggleChat(){this.isOpen=!this.isOpen}sendMessage(){if(this.userInput.trim()==="")return;let t=this.userInput;this.messages.push({sender:"user",text:t}),this.userInput="",this.showTypingIndicator=!0,this.chatbotService.getAnswer(t).subscribe(n=>{this.messages.push({sender:"bot",text:n.text,navigationTarget:n.navigationTarget}),this.showTypingIndicator=!1},n=>{console.error("Error getting bot response:",n),this.messages.push({sender:"bot",text:"D\xE9sol\xE9, une erreur est survenue lors de la communication avec l'IA."}),this.showTypingIndicator=!1})}handleNavigationClick(t){t&&(this.chatbotService.triggerNavigation(t),this.isOpen=!1)}static{this.\u0275fac=function(n){return new(n||i)(Ve(d0),Ve(Fn))}}static{this.\u0275cmp=At({type:i,selectors:[["app-chatbot"]],decls:6,vars:4,consts:[[1,"chatbot-container"],["class","prompt-message",4,"ngIf"],[1,"chat-toggle-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","class","w-8 h-8",4,"ngIf"],["class","chat-window",4,"ngIf"],[1,"prompt-message"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-8","h-8"],["stroke-linecap","round","stroke-linejoin","round","d","M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"chat-window"],[1,"chat-header"],[1,"avatar-container"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar"],[1,"status-indicator"],[1,"header-info"],[1,"font-bold"],[1,"text-xs"],[1,"chat-body"],["class","message-container",3,"ngClass",4,"ngFor","ngForOf"],["class","message-container bot-message",4,"ngIf"],[1,"chat-footer"],["type","text","placeholder","Stellen Sie Ihre Frage...",1,"chat-input",3,"ngModelChange","keyup.enter","ngModel"],[1,"send-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"],[1,"message-container",3,"ngClass"],["class","avatar-container-small",4,"ngIf"],[1,"message"],[3,"innerHTML"],["class","navigation-button",3,"click",4,"ngIf"],[1,"avatar-container-small"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar-small"],[1,"navigation-button",3,"click"],[1,"message-container","bot-message"]],template:function(n,r){n&1&&(F(0,"div",0),bt(1,nE,2,1,"div",1),F(2,"button",2),pt("click",function(){return r.toggleChat()}),bt(3,iE,2,0,"svg",3)(4,rE,2,0,"svg",3),q(),bt(5,cE,18,3,"div",4),q()),n&2&&(se(),Ze("ngIf",!r.isOpen),se(2),Ze("ngIf",!r.isOpen),se(),Ze("ngIf",r.isOpen),se(),Ze("ngIf",r.isOpen))},dependencies:[Ut,Cf,jt,zr,ml,dl,om,ph],styles:[".chatbot-container[_ngcontent-%COMP%]{z-index:1000}.prompt-message[_ngcontent-%COMP%]{position:absolute;bottom:80px;right:0;background-color:#2d3748;color:#e2e8f0;padding:.5rem .75rem;border-radius:10px;font-size:.9rem;white-space:nowrap;opacity:0;transform:translateY(10px);animation:_ngcontent-%COMP%_fadeInOut 6s infinite}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:translateY(10px)}10%{opacity:1;transform:translateY(0)}40%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(10px)}to{opacity:0;transform:translateY(10px)}}.chat-toggle-button[_ngcontent-%COMP%]{background-color:#1a202c;color:#cbd5e0;border:1px solid #4a5568;border-radius:50%;width:60px;height:60px;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:all .3s ease;animation:_ngcontent-%COMP%_pulse 2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.chat-toggle-button[_ngcontent-%COMP%]:hover{background-color:#2d3748}.chat-window[_ngcontent-%COMP%]{width:800px;height:500px;max-width:95vw;max-height:80vh;background-color:#1a202c;border-radius:15px;box-shadow:0 10px 15px #0003;display:flex;flex-direction:column;overflow:hidden;border:1px solid #4a5568}@media (max-width: 850px){.chat-window[_ngcontent-%COMP%]{width:95vw;height:90vh;border-radius:10px}}.chat-header[_ngcontent-%COMP%]{padding:1rem;background-color:#2d3748;display:flex;align-items:center;gap:.75rem;color:#e2e8f0}.avatar-container[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;border:2px solid #718096}.status-indicator[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:10px;height:10px;background-color:#48bb78;border-radius:50%;border:2px solid #2d3748}.header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#a0aec0}.chat-body[_ngcontent-%COMP%]{flex-grow:1;padding:1rem;overflow-y:auto;display:flex;flex-direction:column;gap:.75rem;color:#e2e8f0}.message-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0;max-width:85%}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0;max-width:85%}.bot-message[_ngcontent-%COMP%]{align-self:flex-start}.user-message[_ngcontent-%COMP%]{align-self:flex-end}.message[_ngcontent-%COMP%]{padding:.75rem;border-radius:15px;line-height:1.4}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0}.navigation-button[_ngcontent-%COMP%]{display:block;margin-top:.75rem;padding:.5rem .75rem;background-color:#4a5568;color:#e2e8f0;border:none;border-radius:10px;cursor:pointer;font-size:.8rem;font-weight:700;transition:background-color .2s ease}.navigation-button[_ngcontent-%COMP%]:hover{background-color:#718096}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0}.avatar-small[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;flex-shrink:0}.chat-footer[_ngcontent-%COMP%]{display:flex;padding:.75rem;background-color:#2d3748;border-top:1px solid #4a5568}.chat-input[_ngcontent-%COMP%]{flex-grow:1;background-color:#1a202c;border:1px solid #4a5568;border-radius:20px;padding:.5rem 1rem;color:#e2e8f0;outline:none}.chat-input[_ngcontent-%COMP%]::placeholder{color:#718096}.send-button[_ngcontent-%COMP%]{background:none;border:none;color:#a0aec0;cursor:pointer;padding:.5rem;margin-left:.5rem}.send-button[_ngcontent-%COMP%]:hover{color:#e2e8f0}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#1a202c}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#4a5568;border-radius:4px}"]})}}return i})();var p0=(()=>{class i{constructor(t){this.syncService=t,this.title="danielou-portfolio",this.panelState={visible:!1,transform:""}}ngOnInit(){this.panelSub=this.syncService.panelState$.subscribe(t=>{this.panelState=t})}ngOnDestroy(){this.panelSub&&this.panelSub.unsubscribe()}static{this.\u0275fac=function(n){return new(n||i)(Ve(nu))}}static{this.\u0275cmp=At({type:i,selectors:[["app-root"]],decls:18,vars:4,consts:[[1,"html-panel"],[1,"fixed","bottom-4","left-4","z-20","flex","space-x-4"],["href","https://github.com/Danielou1","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-github"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-linkedin"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],[1,"fixed","bottom-4","right-4","z-20","flex","items-center","space-x-4"],["href","mailto:danielou.mounsande@gmail.com",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-mail"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(n,r){n&1&&(ve(0,"app-three-scene"),F(1,"div",0),ve(2,"router-outlet"),q(),F(3,"div",1)(4,"a",2),Fe(),F(5,"svg",3),ve(6,"path",4),q()(),et(),F(7,"a",5),Fe(),F(8,"svg",6),ve(9,"path",7)(10,"rect",8)(11,"circle",9),q()()(),et(),F(12,"div",10)(13,"a",11),Fe(),F(14,"svg",12),ve(15,"path",13)(16,"polyline",14),q()(),et(),ve(17,"app-chatbot"),q()),n&2&&(se(),ya("transform",r.panelState.transform),xa("visible",r.panelState.visible))},dependencies:[Ut,_o,h0,f0],styles:[".html-panel[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:800px;height:500px;background-color:#1a202ce6;border-radius:12px;box-shadow:0 10px 30px #00000080;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);pointer-events:none;opacity:0;transition:opacity .4s ease,transform .4s ease;will-change:transform,opacity;z-index:10;overflow:hidden}.html-panel.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}@media (max-width: 850px){.html-panel[_ngcontent-%COMP%]{width:95vw;height:80vh}}"]})}}return i})();Du(p0,ym).catch(i=>console.error(i));
