var $M=Object.defineProperty,qM=Object.defineProperties;var XM=Object.getOwnPropertyDescriptors;var ng=Object.getOwnPropertySymbols;var YM=Object.prototype.hasOwnProperty,ZM=Object.prototype.propertyIsEnumerable;var ig=(n,e,t)=>e in n?$M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ge=(n,e)=>{for(var t in e||={})YM.call(e,t)&&ig(n,t,e[t]);if(ng)for(var t of ng(e))ZM.call(e,t)&&ig(n,t,e[t]);return n},yt=(n,e)=>qM(n,XM(e));var Vi=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function rg(n,e){return Object.is(n,e)}var Ot=null,Xa=!1,Vd=1,Kr=Symbol("SIGNAL");function ot(n){let e=Ot;return Ot=n,e}function zd(){return Ot}var Ya={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Hd(n){if(Xa)throw new Error("");if(Ot===null)return;Ot.consumerOnSignalRead(n);let e=Ot.nextProducerIndex++;if(Ja(Ot),e<Ot.producerNode.length&&Ot.producerNode[e]!==n&&mo(Ot)){let t=Ot.producerNode[e];Za(t,Ot.producerIndexOfThis[e])}Ot.producerNode[e]!==n&&(Ot.producerNode[e]=n,Ot.producerIndexOfThis[e]=mo(Ot)?lg(n,Ot,e):0),Ot.producerLastReadVersion[e]=n.version}function sg(){Vd++}function og(n){if(!(mo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Vd)){if(!n.producerMustRecompute(n)&&!jd(n)){Bd(n);return}n.producerRecomputeValue(n),Bd(n)}}function Gd(n){if(n.liveConsumerNode===void 0)return;let e=Xa;Xa=!0;try{for(let t of n.liveConsumerNode)t.dirty||JM(t)}finally{Xa=e}}function ag(){return Ot?.consumerAllowSignalWrites!==!1}function JM(n){n.dirty=!0,Gd(n),n.consumerMarkedDirty?.(n)}function Bd(n){n.dirty=!1,n.lastCleanEpoch=Vd}function Wd(n){return n&&(n.nextProducerIndex=0),ot(n)}function cg(n,e){if(ot(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(mo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Za(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function jd(n){Ja(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(og(t),i!==t.version))return!0}return!1}function $d(n){if(Ja(n),mo(n))for(let e=0;e<n.producerNode.length;e++)Za(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function lg(n,e,t){if(ug(n),n.liveConsumerNode.length===0&&dg(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=lg(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Za(n,e){if(ug(n),n.liveConsumerNode.length===1&&dg(n))for(let i=0;i<n.producerNode.length;i++)Za(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ja(r),r.producerIndexOfThis[i]=e}}function mo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ja(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function ug(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function dg(n){return n.producerNode!==void 0}function KM(){throw new Error}var fg=KM;function QM(n){fg(n)}function qd(n){fg=n}var eS=null;function Xd(n,e){ag()||QM(n),n.equal(n.value,e)||(n.value=e,tS(n))}var Yd=yt(ge({},Ya),{equal:rg,value:void 0,kind:"signal"});function tS(n){n.version++,sg(),Gd(n),eS?.()}var Zd;function go(){return Zd}function pi(n){let e=Zd;return Zd=n,e}var Ka=Symbol("NotFound");function Pe(n){return typeof n=="function"}function Qr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Qa=Qr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function vo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Rt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Pe(i))try{i()}catch(s){e=s instanceof Qa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{hg(s)}catch(o){e=e??[],o instanceof Qa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Qa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)hg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&vo(t,e)}remove(e){let{_finalizers:t}=this;t&&vo(t,e),e instanceof n&&e._removeParent(this)}};Rt.EMPTY=(()=>{let n=new Rt;return n.closed=!0,n})();var Jd=Rt.EMPTY;function ec(n){return n instanceof Rt||n&&"closed"in n&&Pe(n.remove)&&Pe(n.add)&&Pe(n.unsubscribe)}function hg(n){Pe(n)?n():n.unsubscribe()}var kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var es={setTimeout(n,e,...t){let{delegate:i}=es;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=es;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function tc(n){es.setTimeout(()=>{let{onUnhandledError:e}=kn;if(e)e(n);else throw n})}function yo(){}var pg=Kd("C",void 0,void 0);function mg(n){return Kd("E",void 0,n)}function gg(n){return Kd("N",n,void 0)}function Kd(n,e,t){return{kind:n,value:e,error:t}}var yr=null;function ts(n){if(kn.useDeprecatedSynchronousErrorHandling){let e=!yr;if(e&&(yr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=yr;if(yr=null,t)throw i}}else n()}function vg(n){kn.useDeprecatedSynchronousErrorHandling&&yr&&(yr.errorThrown=!0,yr.error=n)}var _r=class extends Rt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ec(e)&&e.add(this)):this.destination=dS}static create(e,t,i){return new ns(e,t,i)}next(e){this.isStopped?ef(gg(e),this):this._next(e)}error(e){this.isStopped?ef(mg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ef(pg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},lS=Function.prototype.bind;function Qd(n,e){return lS.call(n,e)}var tf=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){nc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){nc(i)}else nc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){nc(t)}}},ns=class extends _r{constructor(e,t,i){super();let r;if(Pe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&kn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Qd(e.next,s),error:e.error&&Qd(e.error,s),complete:e.complete&&Qd(e.complete,s)}):r=e}this.destination=new tf(r)}};function nc(n){kn.useDeprecatedSynchronousErrorHandling?vg(n):tc(n)}function uS(n){throw n}function ef(n,e){let{onStoppedNotification:t}=kn;t&&es.setTimeout(()=>t(n,e))}var dS={closed:!0,next:yo,error:uS,complete:yo};var is=typeof Symbol=="function"&&Symbol.observable||"@@observable";function un(n){return n}function nf(...n){return rf(n)}function rf(n){return n.length===0?un:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ft=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=hS(t)?t:new ns(t,i,r);return ts(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=yg(i),new i((r,s)=>{let o=new ns({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[is](){return this}pipe(...t){return rf(t)(this)}toPromise(t){return t=yg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function yg(n){var e;return(e=n??kn.Promise)!==null&&e!==void 0?e:Promise}function fS(n){return n&&Pe(n.next)&&Pe(n.error)&&Pe(n.complete)}function hS(n){return n&&n instanceof _r||fS(n)&&ec(n)}function sf(n){return Pe(n?.lift)}function Xe(n){return e=>{if(sf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ye(n,e,t,i,r){return new of(n,e,t,i,r)}var of=class extends _r{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function rs(){return Xe((n,e)=>{let t=null;n._refCount++;let i=Ye(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var ss=class extends ft{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,sf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Rt;let t=this.getSubject();e.add(this.source.subscribe(Ye(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Rt.EMPTY)}return e}refCount(){return rs()(this)}};var _g=Qr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Ht=(()=>{class n extends ft{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ic(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new _g}next(t){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Jd:(this.currentObservers=null,s.push(t),new Rt(()=>{this.currentObservers=null,vo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ft;return t.source=this,t}}return n.create=(e,t)=>new ic(e,t),n})(),ic=class extends Ht{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Jd}};var Gt=class extends Ht{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new ft(n=>n.complete());function xg(n){return n&&Pe(n.schedule)}function Mg(n){return n[n.length-1]}function Sg(n){return Pe(Mg(n))?n.pop():void 0}function zi(n){return xg(Mg(n))?n.pop():void 0}function bg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Eg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function xr(n){return this instanceof xr?(this.v=n,this):new xr(n)}function wg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){i[f]&&(r[f]=function(y){return new Promise(function(m,p){s.push([f,y,m,p])>1||c(f,y)})},g&&(r[f]=g(r[f])))}function c(f,g){try{l(i[f](g))}catch(y){h(s[0][3],y)}}function l(f){f.value instanceof xr?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function h(f,g){f(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Tg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Eg=="function"?Eg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var rc=n=>n&&typeof n.length=="number"&&typeof n!="function";function sc(n){return Pe(n?.then)}function oc(n){return Pe(n[is])}function ac(n){return Symbol.asyncIterator&&Pe(n?.[Symbol.asyncIterator])}function cc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function pS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var lc=pS();function uc(n){return Pe(n?.[lc])}function dc(n){return wg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield xr(t.read());if(r)return yield xr(void 0);yield yield xr(i)}}finally{t.releaseLock()}})}function fc(n){return Pe(n?.getReader)}function Ut(n){if(n instanceof ft)return n;if(n!=null){if(oc(n))return mS(n);if(rc(n))return gS(n);if(sc(n))return vS(n);if(ac(n))return Cg(n);if(uc(n))return yS(n);if(fc(n))return _S(n)}throw cc(n)}function mS(n){return new ft(e=>{let t=n[is]();if(Pe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gS(n){return new ft(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function vS(n){return new ft(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,tc)})}function yS(n){return new ft(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Cg(n){return new ft(e=>{xS(n,e).catch(t=>e.error(t))})}function _S(n){return Cg(dc(n))}function xS(n,e){var t,i,r,s;return bg(this,void 0,void 0,function*(){try{for(t=Tg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function an(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function hc(n,e=0){return Xe((t,i)=>{t.subscribe(Ye(i,r=>an(i,n,()=>i.next(r),e),()=>an(i,n,()=>i.complete(),e),r=>an(i,n,()=>i.error(r),e)))})}function pc(n,e=0){return Xe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Dg(n,e){return Ut(n).pipe(pc(e),hc(e))}function Ig(n,e){return Ut(n).pipe(pc(e),hc(e))}function Ag(n,e){return new ft(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Rg(n,e){return new ft(t=>{let i;return an(t,e,()=>{i=n[lc](),an(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Pe(i?.return)&&i.return()})}function mc(n,e){if(!n)throw new Error("Iterable cannot be null");return new ft(t=>{an(t,e,()=>{let i=n[Symbol.asyncIterator]();an(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Ng(n,e){return mc(dc(n),e)}function Pg(n,e){if(n!=null){if(oc(n))return Dg(n,e);if(rc(n))return Ag(n,e);if(sc(n))return Ig(n,e);if(ac(n))return mc(n,e);if(uc(n))return Rg(n,e);if(fc(n))return Ng(n,e)}throw cc(n)}function Nt(n,e){return e?Pg(n,e):Ut(n)}function Oe(...n){let e=zi(n);return Nt(n,e)}function os(n,e){let t=Pe(n)?n:()=>n,i=r=>r.error(t());return new ft(e?r=>e.schedule(i,0,r):i)}function af(n){return!!n&&(n instanceof ft||Pe(n.lift)&&Pe(n.subscribe))}var mi=Qr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Qe(n,e){return Xe((t,i)=>{let r=0;t.subscribe(Ye(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:MS}=Array;function SS(n,e){return MS(e)?n(...e):n(e)}function Og(n){return Qe(e=>SS(n,e))}var{isArray:ES}=Array,{getPrototypeOf:bS,prototype:wS,keys:TS}=Object;function Lg(n){if(n.length===1){let e=n[0];if(ES(e))return{args:e,keys:null};if(CS(e)){let t=TS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function CS(n){return n&&typeof n=="object"&&bS(n)===wS}function Fg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function gc(...n){let e=zi(n),t=Sg(n),{args:i,keys:r}=Lg(n);if(i.length===0)return Nt([],e);let s=new ft(DS(i,e,r?o=>Fg(r,o):un));return t?s.pipe(Og(t)):s}function DS(n,e,t=un){return i=>{kg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)kg(e,()=>{let l=Nt(n[c],e),u=!1;l.subscribe(Ye(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function kg(n,e,t){n?an(t,n,e):e()}function Ug(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},f=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Ut(t(y,u++)).subscribe(Ye(e,p=>{r?.(p),s?f(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?an(e,o,()=>g(p)):g(p)}h()}catch(p){e.error(p)}}))};return n.subscribe(Ye(e,f,()=>{d=!0,h()})),()=>{a?.()}}function Lt(n,e,t=1/0){return Pe(e)?Lt((i,r)=>Qe((s,o)=>e(i,s,r,o))(Ut(n(i,r))),t):(typeof e=="number"&&(t=e),Xe((i,r)=>Ug(i,r,n,t)))}function Bg(n=1/0){return Lt(un,n)}function Vg(){return Bg(1)}function as(...n){return Vg()(Nt(n,zi(n)))}function vc(n){return new ft(e=>{Ut(n()).subscribe(e)})}function Un(n,e){return Xe((t,i)=>{let r=0;t.subscribe(Ye(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Hi(n){return Xe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ye(t,void 0,void 0,o=>{s=Ut(n(o,Hi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function zg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ye(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function cs(n,e){return Pe(e)?Lt(n,e,1):Lt(n,1)}function Gi(n){return Xe((e,t)=>{let i=!1;e.subscribe(Ye(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function gi(n){return n<=0?()=>on:Xe((e,t)=>{let i=0;e.subscribe(Ye(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function yc(n=IS){return Xe((e,t)=>{let i=!1;e.subscribe(Ye(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function IS(){return new mi}function _o(n){return Xe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function vi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Un((r,s)=>n(r,s,i)):un,gi(1),t?Gi(e):yc(()=>new mi))}function ls(n){return n<=0?()=>on:Xe((e,t)=>{let i=[];e.subscribe(Ye(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function cf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Un((r,s)=>n(r,s,i)):un,ls(1),t?Gi(e):yc(()=>new mi))}function lf(n,e){return Xe(zg(n,e,arguments.length>=2,!0))}function uf(...n){let e=zi(n);return Xe((t,i)=>{(e?as(n,t,e):as(n,t)).subscribe(i)})}function Bn(n,e){return Xe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ye(i,c=>{r?.unsubscribe();let l=0,u=s++;Ut(n(c,u)).subscribe(r=Ye(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function df(n){return Xe((e,t)=>{Ut(n).subscribe(Ye(t,()=>t.complete(),yo)),!t.closed&&e.subscribe(t)})}function Wt(n,e,t){let i=Pe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Xe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ye(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):un}var Tv="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",be=class extends Error{code;constructor(e,t){super(RS(e,t)),this.code=e}};function AS(n){return`NG0${Math.abs(n)}`}function RS(n,e){return`${AS(n)}${e?": "+e:""}`}var Cv=Symbol("InputSignalNode#UNSET"),NS=yt(ge({},Yd),{transformFn:void 0,applyValueToInputSignal(n,e){Xd(n,e)}});function Dv(n,e){let t=Object.create(NS);t.value=n,t.transformFn=e?.transform;function i(){if(Hd(t),t.value===Cv){let r=null;throw new be(-950,r)}return t.value}return i[Kr]=t,i}function Oo(n){return{toString:n}.toString()}var _c="__parameters__";function PS(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function Iv(n,e,t){return Oo(()=>{let i=PS(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(_c)?c[_c]:Object.defineProperty(c,_c,{value:[]})[_c];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("Could not find renamed property on target object.")}function dn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(dn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Hg(n,e){return n?e?`${n} ${e}`:n:e||""}var OS=mt({__forward_ref__:mt});function Av(n){return n.__forward_ref__=Av,n.toString=function(){return dn(this())},n}function bn(n){return Rv(n)?n():n}function Rv(n){return typeof n=="function"&&n.hasOwnProperty(OS)&&n.__forward_ref__===Av}function Ae(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Xc(n){return{providers:n.providers||[],imports:n.imports||[]}}function Yc(n){return Gg(n,Pv)||Gg(n,Ov)}function Nv(n){return Yc(n)!==null}function Gg(n,e){return n.hasOwnProperty(e)?n[e]:null}function LS(n){let e=n&&(n[Pv]||n[Ov]);return e||null}function Wg(n){return n&&(n.hasOwnProperty(jg)||n.hasOwnProperty(FS))?n[jg]:null}var Pv=mt({\u0275prov:mt}),jg=mt({\u0275inj:mt}),Ov=mt({ngInjectableDef:mt}),FS=mt({ngInjectorDef:mt}),Ie=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ae({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Lv(n){return n&&!!n.\u0275providers}var kS=mt({\u0275cmp:mt}),US=mt({\u0275dir:mt}),BS=mt({\u0275pipe:mt}),VS=mt({\u0275mod:mt}),wc=mt({\u0275fac:mt}),Eo=mt({__NG_ELEMENT_ID__:mt}),$g=mt({__NG_ENV_ID__:mt});function bo(n){return typeof n=="string"?n:n==null?"":String(n)}function zS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():bo(n)}function Fv(n,e){throw new be(-200,n)}function ih(n,e){throw new be(-201,!1)}var ze=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(ze||{}),xf;function kv(){return xf}function En(n){let e=xf;return xf=n,e}function Uv(n,e,t){let i=Yc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&ze.Optional)return null;if(e!==void 0)return e;ih(n,"Injector")}var HS={},Mr=HS,Mf="__NG_DI_FLAG__",Tc=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?Ka:Mr,i)}},Cc="ngTempTokenPath",GS="ngTokenPath",WS=/\n/gm,jS="\u0275",qg="__source";function $S(n,e=ze.Default){if(go()===void 0)throw new be(-203,!1);if(go()===null)return Uv(n,void 0,e);{let t=go(),i;return t instanceof Tc?i=t.injector:i=t,i.get(n,e&ze.Optional?null:void 0,e)}}function He(n,e=ze.Default){return(kv()||$S)(bn(n),e)}function ie(n,e=ze.Default){return He(n,Zc(e))}function Zc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Sf(n){let e=[];for(let t=0;t<n.length;t++){let i=bn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new be(900,!1);let r,s=ze.Default;for(let o=0;o<i.length;o++){let a=i[o],c=qS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(He(r,s))}else e.push(He(i))}return e}function Bv(n,e){return n[Mf]=e,n.prototype[Mf]=e,n}function qS(n){return n[Mf]}function XS(n,e,t,i){let r=n[Cc];throw e[qg]&&r.unshift(e[qg]),n.message=YS(`
`+n.message,r,t,i),n[GS]=r,n[Cc]=null,n}function YS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==jS?n.slice(2):n;let r=dn(e);if(Array.isArray(e))r=e.map(dn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):dn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(WS,`
  `)}`}var ZS=Bv(Iv("Optional"),8);var JS=Bv(Iv("SkipSelf"),4);function ps(n,e){let t=n.hasOwnProperty(wc);return t?n[wc]:null}function rh(n,e){n.forEach(t=>Array.isArray(t)?rh(t,e):e(t))}function Vv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ms={},ei=[],wo=new Ie(""),zv=new Ie("",-1),Hv=new Ie(""),Ic=class{get(e,t=Mr){if(t===Mr){let i=new Error(`NullInjectorError: No provider for ${dn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Gv(n,e){let t=n[VS]||null;if(!t&&e===!0)throw new Error(`Type ${dn(n)} does not have '\u0275mod' property.`);return t}function gs(n){return n[kS]||null}function KS(n){return n[US]||null}function QS(n){return n[BS]||null}function sh(n){return{\u0275providers:n}}function eE(...n){return{\u0275providers:Wv(!0,n),\u0275fromNgModule:!0}}function Wv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return rh(e,o=>{let a=o;Ef(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&jv(r,s),t}function jv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];oh(r,s=>{e(s,i)})}}function Ef(n,e,t,i){if(n=bn(n),!n)return!1;let r=null,s=Wg(n),o=!s&&gs(n);if(!s&&!o){let c=n.ngModule;if(s=Wg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Ef(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{rh(s.imports,u=>{Ef(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&jv(l,e)}if(!a){let l=ps(r)||(()=>new r);e({provide:r,useFactory:l,deps:ei},r),e({provide:Hv,useValue:r,multi:!0},r),e({provide:wo,useValue:()=>He(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;oh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function oh(n,e){for(let t of n)Lv(t)&&(t=t.\u0275providers),Array.isArray(t)?oh(t,e):e(t)}var tE=mt({provide:String,useValue:mt});function $v(n){return n!==null&&typeof n=="object"&&tE in n}function nE(n){return!!(n&&n.useExisting)}function iE(n){return!!(n&&n.useFactory)}function bf(n){return typeof n=="function"}var Jc=new Ie(""),xc={},Xg={},ff;function ah(){return ff===void 0&&(ff=new Ic),ff}var Cn=class{},To=class extends Cn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Tf(e,o=>this.processProvider(o)),this.records.set(zv,us(void 0,this)),r.has("environment")&&this.records.set(Cn,us(void 0,this));let s=this.records.get(Jc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Hv,ei,ze.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?Ka:Mr,i)}destroy(){Mo(this),this._destroyed=!0;let e=ot(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ot(e)}}onDestroy(e){return Mo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Mo(this);let t=pi(this),i=En(void 0),r;try{return e()}finally{pi(t),En(i)}}get(e,t=Mr,i=ze.Default){if(Mo(this),e.hasOwnProperty($g))return e[$g](this);i=Zc(i);let r,s=pi(this),o=En(void 0);try{if(!(i&ze.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=lE(e)&&Yc(e);l&&this.injectableDefInScope(l)?c=us(wf(e),xc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&ze.Self?ah():this.parent;return t=i&ze.Optional&&t===Mr?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Cc]=a[Cc]||[]).unshift(dn(e)),s)throw a;return XS(a,e,"R3InjectorError",this.source)}else throw a}finally{En(o),pi(s)}}resolveInjectorInitializers(){let e=ot(null),t=pi(this),i=En(void 0),r;try{let s=this.get(wo,ei,ze.Self);for(let o of s)o()}finally{pi(t),En(i),ot(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(dn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=bn(e);let t=bf(e)?e:bn(e&&e.provide),i=sE(e);if(!bf(e)&&e.multi===!0){let r=this.records.get(t);r||(r=us(void 0,xc,!0),r.factory=()=>Sf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ot(null);try{return t.value===Xg?Fv(dn(e)):t.value===xc&&(t.value=Xg,t.value=t.factory()),typeof t.value=="object"&&t.value&&cE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ot(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=bn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function wf(n){let e=Yc(n),t=e!==null?e.factory:ps(n);if(t!==null)return t;if(n instanceof Ie)throw new be(204,!1);if(n instanceof Function)return rE(n);throw new be(204,!1)}function rE(n){if(n.length>0)throw new be(204,!1);let t=LS(n);return t!==null?()=>t.factory(n):()=>new n}function sE(n){if($v(n))return us(void 0,n.useValue);{let e=oE(n);return us(e,xc)}}function oE(n,e,t){let i;if(bf(n)){let r=bn(n);return ps(r)||wf(r)}else if($v(n))i=()=>bn(n.useValue);else if(iE(n))i=()=>n.useFactory(...Sf(n.deps||[]));else if(nE(n))i=()=>He(bn(n.useExisting));else{let r=bn(n&&(n.useClass||n.provide));if(aE(n))i=()=>new r(...Sf(n.deps));else return ps(r)||wf(r)}return i}function Mo(n){if(n.destroyed)throw new be(205,!1)}function us(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function aE(n){return!!n.deps}function cE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function lE(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ie}function Tf(n,e){for(let t of n)Array.isArray(t)?Tf(t,e):t&&Lv(t)?Tf(t.\u0275providers,e):e(t)}function Gn(n,e){let t;n instanceof To?(Mo(n),t=n):t=new Tc(n);let i,r=pi(t),s=En(void 0);try{return e()}finally{pi(r),En(s)}}function uE(){return kv()!==void 0||go()!=null}function dE(n){return typeof n=="function"}var Mi=0,it=1,Le=2,en=3,zn=4,Wn=5,Ac=6,Yg=7,Hn=8,Co=9,yi=10,fn=11,Do=12,Zg=13,Lo=14,ni=15,vs=16,ds=17,ys=18,Kc=19,qv=20,Wi=21,hf=22,Rc=23,wn=24,pf=25,_i=26,Xv=1;var br=7,Nc=8,Pc=9,Tn=10;function Sr(n){return Array.isArray(n)&&typeof n[Xv]=="object"}function Si(n){return Array.isArray(n)&&n[Xv]===!0}function Yv(n){return(n.flags&4)!==0}function Fo(n){return n.componentOffset>-1}function Zv(n){return(n.flags&1)===1}function Dr(n){return!!n.template}function Oc(n){return(n[Le]&512)!==0}function ko(n){return(n[Le]&256)===256}var Cf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Jv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var ch=(()=>{let n=()=>Kv;return n.ngInherit=!0,n})();function Kv(n){return n.type.prototype.ngOnChanges&&(n.setInput=hE),fE}function fE(){let n=ey(this),e=n?.current;if(e){let t=n.previous;if(t===ms)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function hE(n,e,t,i,r){let s=this.declaredInputs[i],o=ey(n)||pE(n,{previous:ms,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Cf(l&&l.currentValue,t,c===ms),Jv(n,e,r,t)}var Qv="__ngSimpleChanges__";function ey(n){return n[Qv]||null}function pE(n,e){return n[Qv]=e}var Jg=null;var xt=function(n,e=null,t){Jg?.(n,e,t)},mE="svg",gE="math";function xi(n){for(;Array.isArray(n);)n=n[Mi];return n}function vE(n,e){return xi(e[n])}function Xi(n,e){return xi(e[n.index])}function ty(n,e){return n.data[e]}function ji(n,e){let t=e[n];return Sr(t)?t:t[Mi]}function lh(n){return(n[Le]&128)===128}function yE(n){return Si(n[en])}function Lc(n,e){return e==null?null:n[e]}function ny(n){n[ds]=0}function iy(n){n[Le]&1024||(n[Le]|=1024,lh(n)&&el(n))}function Qc(n){return!!(n[Le]&9216||n[wn]?.dirty)}function Df(n){n[yi].changeDetectionScheduler?.notify(8),n[Le]&64&&(n[Le]|=1024),Qc(n)&&el(n)}function el(n){n[yi].changeDetectionScheduler?.notify(0);let e=wr(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!lh(e)));)e=wr(e)}function ry(n,e){if(ko(n))throw new be(911,!1);n[Wi]===null&&(n[Wi]=[]),n[Wi].push(e)}function _E(n,e){if(n[Wi]===null)return;let t=n[Wi].indexOf(e);t!==-1&&n[Wi].splice(t,1)}function wr(n){let e=n[en];return Si(e)?e[en]:e}var rt={lFrame:hy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var If=!1;function xE(){return rt.lFrame.elementDepthCount}function ME(){rt.lFrame.elementDepthCount++}function SE(){rt.lFrame.elementDepthCount--}function sy(){return rt.bindingsEnabled}function EE(){return rt.skipHydrationRootTNode!==null}function bE(n){return rt.skipHydrationRootTNode===n}function wE(){rt.skipHydrationRootTNode=null}function jt(){return rt.lFrame.lView}function xs(){return rt.lFrame.tView}function Yi(){let n=oy();for(;n!==null&&n.type===64;)n=n.parent;return n}function oy(){return rt.lFrame.currentTNode}function TE(){let n=rt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Uo(n,e){let t=rt.lFrame;t.currentTNode=n,t.isParent=e}function ay(){return rt.lFrame.isParent}function CE(){rt.lFrame.isParent=!1}function cy(){return If}function Kg(n){let e=If;return If=n,e}function DE(){return rt.lFrame.bindingIndex}function IE(n){return rt.lFrame.bindingIndex=n}function ly(){return rt.lFrame.bindingIndex++}function AE(n){let e=rt.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function RE(){return rt.lFrame.inI18n}function NE(n,e){let t=rt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Af(e)}function PE(){return rt.lFrame.currentDirectiveIndex}function Af(n){rt.lFrame.currentDirectiveIndex=n}function uy(n){rt.lFrame.currentQueryIndex=n}function OE(n){let e=n[it];return e.type===2?e.declTNode:e.type===1?n[Wn]:null}function dy(n,e,t){if(t&ze.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&ze.Host);)if(r=OE(s),r===null||(s=s[Lo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=rt.lFrame=fy();return i.currentTNode=e,i.lView=n,!0}function uh(n){let e=fy(),t=n[it];rt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function fy(){let n=rt.lFrame,e=n===null?null:n.child;return e===null?hy(n):e}function hy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function py(){let n=rt.lFrame;return rt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var my=py;function dh(){let n=py();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function tl(){return rt.lFrame.selectedIndex}function Tr(n){rt.lFrame.selectedIndex=n}function LE(){let n=rt.lFrame;return ty(n.tView,n.selectedIndex)}function FE(){return rt.lFrame.currentNamespace}var gy=!0;function fh(){return gy}function hh(n){gy=n}function kE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Kv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function vy(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Mc(n,e,t){yy(n,e,3,t)}function Sc(n,e,t,i){(n[Le]&3)===t&&yy(n,e,t,i)}function mf(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function yy(n,e,t,i){let r=i!==void 0?n[ds]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ds]+=65536),(a<s||s==-1)&&(UE(n,t,e,c),n[ds]=(n[ds]&4294901760)+c+2),c++}function Qg(n,e){xt(4,n,e);let t=ot(null);try{e.call(n)}finally{ot(t),xt(5,n,e)}}function UE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[ds]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,Qg(a,s)):Qg(a,s)}var hs=-1,Io=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function BE(n){return(n.flags&8)!==0}function VE(n){return(n.flags&16)!==0}function zE(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];GE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function HE(n){return n===3||n===4||n===6}function GE(n){return n.charCodeAt(0)===64}function ph(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?ev(n,t,r,null,e[++i]):ev(n,t,r,null,null))}}return n}function ev(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function _y(n){return n!==hs}function Fc(n){return n&32767}function WE(n){return n>>16}function kc(n,e){let t=WE(n),i=e;for(;t>0;)i=i[Lo],t--;return i}var Rf=!0;function tv(n){let e=Rf;return Rf=n,e}var jE=256,xy=jE-1,My=5,$E=0,ti={};function qE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Eo)&&(i=t[Eo]),i==null&&(i=t[Eo]=$E++);let r=i&xy,s=1<<r;e.data[n+(r>>My)]|=s}function Sy(n,e){let t=Ey(n,e);if(t!==-1)return t;let i=e[it];i.firstCreatePass&&(n.injectorIndex=e.length,gf(i.data,n),gf(e,null),gf(i.blueprint,null));let r=mh(n,e),s=n.injectorIndex;if(_y(r)){let o=Fc(r),a=kc(r,e),c=a[it].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function gf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Ey(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function mh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Dy(r),i===null)return hs;if(t++,r=r[Lo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return hs}function XE(n,e,t){qE(n,e,t)}function by(n,e,t){if(t&ze.Optional||n!==void 0)return n;ih(e,"NodeInjector")}function wy(n,e,t,i){if(t&ze.Optional&&i===void 0&&(i=null),(t&(ze.Self|ze.Host))===0){let r=n[Co],s=En(void 0);try{return r?r.get(e,i,t&ze.Optional):Uv(e,i,t&ze.Optional)}finally{En(s)}}return by(i,e,t)}function Ty(n,e,t,i=ze.Default,r){if(n!==null){if(e[Le]&2048&&!(i&ze.Self)){let o=QE(n,e,t,i,ti);if(o!==ti)return o}let s=Cy(n,e,t,i,ti);if(s!==ti)return s}return wy(e,t,i,r)}function Cy(n,e,t,i,r){let s=JE(t);if(typeof s=="function"){if(!dy(e,n,i))return i&ze.Host?by(r,t,i):wy(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&ze.Optional))ih(t);else return o}finally{my()}}else if(typeof s=="number"){let o=null,a=Ey(n,e),c=hs,l=i&ze.Host?e[ni][Wn]:null;for((a===-1||i&ze.SkipSelf)&&(c=a===-1?mh(n,e):e[a+8],c===hs||!iv(i,!1)?a=-1:(o=e[it],a=Fc(c),e=kc(c,e)));a!==-1;){let u=e[it];if(nv(s,a,u.data)){let d=YE(a,e,t,o,i,l);if(d!==ti)return d}c=e[a+8],c!==hs&&iv(i,e[it].data[a+8]===l)&&nv(s,a,e)?(o=u,a=Fc(c),e=kc(c,e)):a=-1}}return r}function YE(n,e,t,i,r,s){let o=e[it],a=o.data[n+8],c=i==null?Fo(a)&&Rf:i!=o&&(a.type&3)!==0,l=r&ze.Host&&s===a,u=ZE(a,o,t,c,l);return u!==null?Nf(e,o,u,a):ti}function ZE(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&Dr(f)&&f.type===t)return c}return null}function Nf(n,e,t,i){let r=n[t],s=e.data;if(r instanceof Io){let o=r;o.resolving&&Fv(zS(s[t]));let a=tv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?En(o.injectImpl):null,u=dy(n,i,ze.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&kE(t,s[t],e)}finally{l!==null&&En(l),tv(a),o.resolving=!1,my()}}return r}function JE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Eo)?n[Eo]:void 0;return typeof e=="number"?e>=0?e&xy:KE:e}function nv(n,e,t){let i=1<<n;return!!(t[e+(n>>My)]&i)}function iv(n,e){return!(n&ze.Self)&&!(n&ze.Host&&e)}var Er=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Ty(this._tNode,this._lView,e,Zc(i),t)}};function KE(){return new Er(Yi(),jt())}function gh(n){return Oo(()=>{let e=n.prototype.constructor,t=e[wc]||Pf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[wc]||Pf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Pf(n){return Rv(n)?()=>{let e=Pf(bn(n));return e&&e()}:ps(n)}function QE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!Oc(o);){let a=Cy(s,o,t,i|ze.Self,ti);if(a!==ti)return a;let c=s.parent;if(!c){let l=o[qv];if(l){let u=l.get(t,ti,i);if(u!==ti)return u}c=Dy(o),o=o[Lo]}s=c}return r}function Dy(n){let e=n[it],t=e.type;return t===2?e.declTNode:t===1?n[Wn]:null}function rv(n,e=null,t=null,i){let r=Iy(n,e,t,i);return r.resolveInjectorInitializers(),r}function Iy(n,e=null,t=null,i,r=new Set){let s=[t||ei,eE(n)];return i=i||(typeof n=="object"?void 0:dn(n)),new To(s,e||ah(),i||null,r)}var $i=class n{static THROW_IF_NOT_FOUND=Mr;static NULL=new Ic;static create(e,t){if(Array.isArray(e))return rv({name:""},t,e,"");{let i=e.name??"";return rv({name:i},e.parent,e.providers,i)}}static \u0275prov=Ae({token:n,providedIn:"any",factory:()=>He(zv)});static __NG_ELEMENT_ID__=-1};var eb=new Ie("");eb.__NG_ELEMENT_ID__=n=>{let e=Yi();if(e===null)throw new be(204,!1);if(e.type&2)return e.value;if(n&ze.Optional)return null;throw new be(204,!1)};var Ay=!1,nl=(()=>{class n{static __NG_ELEMENT_ID__=tb;static __NG_ENV_ID__=t=>t}return n})(),Of=class extends nl{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return ry(this._lView,e),()=>_E(this._lView,e)}};function tb(){return new Of(jt())}var Ao=class{},vh=new Ie("",{providedIn:"root",factory:()=>!1});var Ry=new Ie(""),Ny=new Ie(""),Ms=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Gt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})();var Lf=class extends Ht{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,uE()&&(this.destroyRef=ie(nl,{optional:!0})??void 0,this.pendingTasks=ie(Ms,{optional:!0})??void 0)}emit(e){let t=ot(null);try{super.next(e)}finally{ot(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Rt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},cn=Lf;function Uc(...n){}function Py(n){let e,t;function i(){n=Uc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function sv(n){return queueMicrotask(()=>n()),()=>{n=Uc}}var yh="isAngularZone",Bc=yh+"_ID",nb=0,Bt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new cn(!1);onMicrotaskEmpty=new cn(!1);onStable=new cn(!1);onError=new cn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Ay}=e;if(typeof Zone>"u")throw new be(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,sb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(yh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new be(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new be(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,ib,Uc,Uc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},ib={};function _h(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function rb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Py(()=>{n.callbackScheduled=!1,Ff(n),n.isCheckStableRunning=!0,_h(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Ff(n)}function sb(n){let e=()=>{rb(n)},t=nb++;n._inner=n._inner.fork({name:"angular",properties:{[yh]:!0,[Bc]:t,[Bc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(ob(c))return i.invokeTask(s,o,a,c);try{return ov(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),av(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return ov(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!ab(c)&&e(),av(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Ff(n),_h(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Ff(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function ov(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function av(n){n._nesting--,_h(n)}var kf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new cn;onMicrotaskEmpty=new cn;onStable=new cn;onError=new cn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function ob(n){return Oy(n,"__ignore_ng_zone__")}function ab(n){return Oy(n,"__scheduler_tick__")}function Oy(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var qi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},cb=new Ie("",{providedIn:"root",factory:()=>{let n=ie(Bt),e=ie(qi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function cv(n,e){return Dv(n,e)}function lb(n){return Dv(Cv,n)}var Ly=(cv.required=lb,cv);function ub(){return il(Yi(),jt())}function il(n,e){return new Fy(Xi(n,e))}var Fy=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=ub}return n})();function ky(n){return(n.flags&128)===128}var Uy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Uy||{}),By=new Map,db=0;function fb(){return db++}function hb(n){By.set(n[Kc],n)}function Uf(n){By.delete(n[Kc])}var lv="__ngContext__";function Bo(n,e){Sr(e)?(n[lv]=e[Kc],hb(e)):n[lv]=e}function Vy(n){return Hy(n[Do])}function zy(n){return Hy(n[zn])}function Hy(n){for(;n!==null&&!Si(n);)n=n[zn];return n}var Bf;function Gy(n){Bf=n}function pb(){if(Bf!==void 0)return Bf;if(typeof document<"u")return document;throw new be(210,!1)}var xh=new Ie("",{providedIn:"root",factory:()=>mb}),mb="ng",Mh=new Ie(""),Vo=new Ie("",{providedIn:"platform",factory:()=>"unknown"});var Sh=new Ie("",{providedIn:"root",factory:()=>pb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var gb="h",vb="b";var Wy=!1,yb=new Ie("",{providedIn:"root",factory:()=>Wy});var jy=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(jy||{}),rl=new Ie(""),uv=new Set;function Eh(n){uv.has(n)||(uv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var _b=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})();var xb=()=>null;function $y(n,e,t=!1){return xb(n,e,t)}function qy(n,e){let t=n.contentQueries;if(t!==null){let i=ot(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];uy(s),a.contentQueries(2,e[o],o)}}}finally{ot(i)}}}function Vf(n,e,t){uy(0);let i=ot(null);try{e(n,t)}finally{ot(i)}}function Xy(n,e,t){if(Yv(e)){let i=ot(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ot(i)}}}var ii=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ii||{});var Vc=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Tv})`}};function Mb(n){return n instanceof Vc?n.changingThisBreaksApplicationSecurity:n}function Sb(n,e){let t=Eb(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Tv})`)}return t===e}function Eb(n){return n instanceof Vc&&n.getTypeName()||null}var bb=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function wb(n){return n=String(n),n.match(bb)?n:"unsafe:"+n}var Yy=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(Yy||{});function Zy(n){let e=Tb();return e?e.sanitize(Yy.URL,n)||"":Sb(n,"URL")?Mb(n):wb(bo(n))}function Tb(){let n=jt();return n&&n[yi].sanitizer}function Jy(n){return n instanceof Function?n():n}function Cb(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Ky="ng-template";function Db(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Cb(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(bh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function bh(n){return n.type===4&&n.value!==Ky}function Ib(n,e,t){let i=n.type===4&&!t?Ky:n.value;return e===i}function Ab(n,e,t){let i=4,r=n.attrs,s=r!==null?Pb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Vn(i)&&!Vn(c))return!1;if(o&&Vn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Ib(n,c,t)||c===""&&e.length===1){if(Vn(i))return!1;o=!0}}else if(i&8){if(r===null||!Db(n,r,c,t)){if(Vn(i))return!1;o=!0}}else{let l=e[++a],u=Rb(c,r,bh(n),t);if(u===-1){if(Vn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Vn(i))return!1;o=!0}}}}return Vn(i)||o}function Vn(n){return(n&1)===0}function Rb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Ob(e,n)}function Nb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Ab(n,e[i],t))return!0;return!1}function Pb(n){for(let e=0;e<n.length;e++){let t=n[e];if(HE(t))return e}return n.length}function Ob(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function dv(n,e){return n?":not("+e.trim()+")":e}function Lb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Vn(o)&&(e+=dv(s,r),r=""),i=o,s=s||!Vn(i);t++}return r!==""&&(e+=dv(s,r)),e}function Fb(n){return n.map(Lb).join(",")}function kb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Vn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ss={};function Ub(n,e){return n.createText(e)}function Bb(n,e,t){n.setValue(e,t)}function Qy(n,e,t){return n.createElement(e,t)}function zc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function e_(n,e,t){n.appendChild(e,t)}function fv(n,e,t,i,r){i!==null?zc(n,e,t,i,r):e_(n,e,t)}function Vb(n,e,t){n.removeChild(null,e,t)}function zb(n,e,t){n.setAttribute(e,"style",t)}function Hb(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function t_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&zE(n,e,i),r!==null&&Hb(n,e,r),s!==null&&zb(n,e,s)}function wh(n,e,t,i,r,s,o,a,c,l,u){let d=_i+i,h=d+r,f=Gb(d,h),g=typeof l=="function"?l():l;return f[it]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Gb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ss);return t}function Wb(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=wh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Th(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Mi]=r,d[Le]=i|4|128|8|64|1024,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),ny(d),d[en]=d[Lo]=n,d[Hn]=t,d[yi]=o||n&&n[yi],d[fn]=a||n&&n[fn],d[Co]=c||n&&n[Co]||null,d[Wn]=s,d[Kc]=fb(),d[Ac]=u,d[qv]=l,d[ni]=e.type==2?n[ni]:d,d}function jb(n,e,t){let i=Xi(e,n),r=Wb(t),s=n[yi].rendererFactory,o=Ch(n,Th(n,r,null,n_(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function n_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function i_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Ch(n,e){return n[Do]?n[Zg][zn]=e:n[Do]=e,n[Zg]=e,e}function Zi(n=1){r_(xs(),jt(),tl()+n,!1)}function r_(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Mc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Sc(e,s,0,t)}Tr(t)}var sl=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(sl||{});function zf(n,e,t,i){let r=ot(null);try{let[s,o,a]=n.inputs[t],c=null;(o&sl.SignalBased)!==0&&(c=e[s][Kr]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):Jv(e,c,s,i)}finally{ot(r)}}function s_(n,e,t,i,r){let s=tl(),o=i&2;try{Tr(-1),o&&e.length>_i&&r_(n,e,_i,!1),xt(o?2:0,r),t(i,r)}finally{Tr(s),xt(o?3:1,r)}}function Dh(n,e,t){Kb(n,e,t),(t.flags&64)===64&&Qb(n,e,t)}function o_(n,e,t=Xi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function $b(n,e,t,i){let s=i.get(yb,Wy)||t===ii.ShadowDom,o=n.selectRootElement(e,s);return qb(o),o}function qb(n){Xb(n)}var Xb=()=>null;function Yb(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Zb(n,e,t,i,r,s,o,a){if(!a&&Ih(e,n,t,i,r)){Fo(e)&&Jb(t,e.index);return}if(e.type&3){let c=Xi(e,t);i=Yb(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function Jb(n,e){let t=ji(e,n);t[Le]&16||(t[Le]|=64)}function Kb(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Fo(t)&&jb(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Sy(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Nf(e,n,o,t);if(Bo(c,e),s!==null&&tw(e,o-i,c,a,t,s),Dr(a)){let l=ji(t.index,e);l[Hn]=Nf(e,n,o,t)}}}function Qb(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=PE();try{Tr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Af(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ew(c,l)}}finally{Tr(-1),Af(o)}}function ew(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function a_(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];Nb(e,s.selectors,!1)&&(i??=[],Dr(s)?i.unshift(s):i.push(s))}return i}function tw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];zf(i,t,c,l)}}function nw(n,e){let t=n[Co],i=t?t.get(qi,null):null;i&&i.handleError(e)}function Ih(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];zf(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];zf(u,l,i,r),a=!0}return a}function iw(n,e){let t=ji(e,n),i=t[it];rw(i,t);let r=t[Mi];r!==null&&t[Ac]===null&&(t[Ac]=$y(r,t[Co])),xt(18),Ah(i,t,t[Hn]),xt(19,t[Hn])}function rw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Ah(n,e,t){uh(e);try{let i=n.viewQuery;i!==null&&Vf(1,i,t);let r=n.template;r!==null&&s_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ys]?.finishViewCreation(n),n.staticContentQueries&&qy(n,e),n.staticViewQueries&&Vf(2,n.viewQuery,t);let s=n.components;s!==null&&sw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,dh()}}function sw(n,e){for(let t=0;t<e.length;t++)iw(n,e[t])}function ow(n,e,t,i){let r=ot(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=Th(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[vs]=l;let u=n[ys];return u!==null&&(c[ys]=u.createEmbeddedView(s)),Ah(s,c,t),c}finally{ot(r)}}function hv(n,e){return!e||e.firstChild===null||ky(n)}var aw;function Rh(n,e){return aw(n,e)}var Es=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Es||{});function c_(n){return(n.flags&32)===32}function fs(n,e,t,i,r){if(i!=null){let s,o=!1;Si(i)?s=i:Sr(i)&&(o=!0,i=i[Mi]);let a=xi(i);n===0&&t!==null?r==null?e_(e,t,a):zc(e,t,a,r||null,!0):n===1&&t!==null?zc(e,t,a,r||null,!0):n===2?Vb(e,a,o):n===3&&e.destroyNode(a),s!=null&&_w(e,n,s,t,r)}}function cw(n,e){l_(n,e),e[Mi]=null,e[Wn]=null}function lw(n,e,t,i,r,s){i[Mi]=r,i[Wn]=e,ol(n,i,t,1,r,s)}function l_(n,e){e[yi].changeDetectionScheduler?.notify(9),ol(n,e,e[fn],2,null,null)}function uw(n){let e=n[Do];if(!e)return vf(n[it],n);for(;e;){let t=null;if(Sr(e))t=e[Do];else{let i=e[Tn];i&&(t=i)}if(!t){for(;e&&!e[zn]&&e!==n;)Sr(e)&&vf(e[it],e),e=e[en];e===null&&(e=n),Sr(e)&&vf(e[it],e),t=e&&e[zn]}e=t}}function Nh(n,e){let t=n[Pc],i=t.indexOf(e);t.splice(i,1)}function u_(n,e){if(ko(e))return;let t=e[fn];t.destroyNode&&ol(n,e,t,3,null,null),uw(e)}function vf(n,e){if(ko(e))return;let t=ot(null);try{e[Le]&=-129,e[Le]|=256,e[wn]&&$d(e[wn]),fw(n,e),dw(n,e),e[it].type===1&&e[fn].destroy();let i=e[vs];if(i!==null&&Si(e[en])){i!==e[en]&&Nh(i,e);let r=e[ys];r!==null&&r.detachView(n)}Uf(e)}finally{ot(t)}}function dw(n,e){let t=n.cleanup,i=e[Yg];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Yg]=null);let r=e[Wi];if(r!==null){e[Wi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Rc];if(s!==null){e[Rc]=null;for(let o of s)o.destroy()}}function fw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Io)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];xt(4,a,c);try{c.call(a)}finally{xt(5,a,c)}}else{xt(4,r,s);try{s.call(r)}finally{xt(5,r,s)}}}}}function hw(n,e,t){return pw(n,e.parent,t)}function pw(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Mi];if(Fo(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ii.None||r===ii.Emulated)return null}return Xi(i,t)}function mw(n,e,t){return vw(n,e,t)}function gw(n,e,t){return n.type&40?Xi(n,t):null}var vw=gw,pv;function Ph(n,e,t,i){let r=hw(n,i,e),s=e[fn],o=i.parent||e[Wn],a=mw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)fv(s,r,t[c],a,!1);else fv(s,r,t,a,!1);pv!==void 0&&pv(s,i,e,t,r)}function So(n,e){if(e!==null){let t=e.type;if(t&3)return Xi(e,n);if(t&4)return Hf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return So(n,i);{let r=n[e.index];return Si(r)?Hf(-1,r):xi(r)}}else{if(t&128)return So(n,e.next);if(t&32)return Rh(e,n)()||xi(n[e.index]);{let i=d_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=wr(n[ni]);return So(r,i)}else return So(n,e.next)}}}return null}function d_(n,e){if(e!==null){let i=n[ni][Wn],r=e.projection;return i.projection[r]}return null}function Hf(n,e){let t=Tn+n+1;if(t<e.length){let i=e[t],r=i[it].firstChild;if(r!==null)return So(i,r)}return e[br]}function Oh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Bo(xi(a),i),t.flags|=2),!c_(t))if(c&8)Oh(n,e,t.child,i,r,s,!1),fs(e,n,r,a,s);else if(c&32){let l=Rh(t,i),u;for(;u=l();)fs(e,n,r,u,s);fs(e,n,r,a,s)}else c&16?yw(n,e,i,t,r,s):fs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function ol(n,e,t,i,r,s){Oh(t,i,n.firstChild,e,r,s,!1)}function yw(n,e,t,i,r,s){let o=t[ni],c=o[Wn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];fs(e,n,r,u,s)}else{let l=c,u=o[en];ky(i)&&(l.flags|=128),Oh(n,e,l,u,r,s,!0)}}function _w(n,e,t,i,r){let s=t[br],o=xi(t);s!==o&&fs(e,n,i,s,r);for(let a=Tn;a<t.length;a++){let c=t[a];ol(c[it],c,n,e,i,s)}}function Hc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(xi(s)),Si(s)&&xw(s,i);let o=t.type;if(o&8)Hc(n,e,t.child,i);else if(o&32){let a=Rh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=d_(e,t);if(Array.isArray(a))i.push(...a);else{let c=wr(e[ni]);Hc(c[it],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function xw(n,e){for(let t=Tn;t<n.length;t++){let i=n[t],r=i[it].firstChild;r!==null&&Hc(i[it],i,r,e)}n[br]!==n[Mi]&&e.push(n[br])}function f_(n){if(n[pf]!==null){for(let e of n[pf])e.impl.addSequence(e);n[pf].length=0}}var h_=[];function Mw(n){return n[wn]??Sw(n)}function Sw(n){let e=h_.pop()??Object.create(bw);return e.lView=n,e}function Ew(n){n.lView[wn]!==n&&(n.lView=null,h_.push(n))}var bw=yt(ge({},Ya),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{el(n.lView)},consumerOnSignalRead(){this.lView[wn]=this}});function ww(n){let e=n[wn]??Object.create(Tw);return e.lView=n,e}var Tw=yt(ge({},Ya),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=wr(n.lView);for(;e&&!p_(e[it]);)e=wr(e);e&&iy(e)},consumerOnSignalRead(){this.lView[wn]=this}});function p_(n){return n.type!==2}function m_(n){if(n[Rc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Rc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Le]&8192)}}var Cw=100;function g_(n,e=!0,t=0){let r=n[yi].rendererFactory,s=!1;s||r.begin?.();try{Dw(n,t)}catch(o){throw e&&nw(n,o),o}finally{s||r.end?.()}}function Dw(n,e){let t=cy();try{Kg(!0),Gf(n,e);let i=0;for(;Qc(n);){if(i===Cw)throw new be(103,!1);i++,Gf(n,1)}}finally{Kg(t)}}function Iw(n,e,t,i){if(ko(e))return;let r=e[Le],s=!1,o=!1;uh(e);let a=!0,c=null,l=null;s||(p_(n)?(l=Mw(e),c=Wd(l)):zd()===null?(a=!1,l=ww(e),c=Wd(l)):e[wn]&&($d(e[wn]),e[wn]=null));try{ny(e),IE(n.bindingStartIndex),t!==null&&s_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let f=n.preOrderCheckHooks;f!==null&&Mc(e,f,null)}else{let f=n.preOrderHooks;f!==null&&Sc(e,f,0,null),mf(e,0)}if(o||Aw(e),m_(e),v_(e,0),n.contentQueries!==null&&qy(n,e),!s)if(u){let f=n.contentCheckHooks;f!==null&&Mc(e,f)}else{let f=n.contentHooks;f!==null&&Sc(e,f,1),mf(e,1)}Nw(n,e);let d=n.components;d!==null&&__(e,d,0);let h=n.viewQuery;if(h!==null&&Vf(2,h,i),!s)if(u){let f=n.viewCheckHooks;f!==null&&Mc(e,f)}else{let f=n.viewHooks;f!==null&&Sc(e,f,2),mf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[hf]){for(let f of e[hf])f();e[hf]=null}s||(f_(e),e[Le]&=-73)}catch(u){throw s||el(e),u}finally{l!==null&&(cg(l,c),a&&Ew(l)),dh()}}function v_(n,e){for(let t=Vy(n);t!==null;t=zy(t))for(let i=Tn;i<t.length;i++){let r=t[i];y_(r,e)}}function Aw(n){for(let e=Vy(n);e!==null;e=zy(e)){if(!(e[Le]&2))continue;let t=e[Pc];for(let i=0;i<t.length;i++){let r=t[i];iy(r)}}}function Rw(n,e,t){xt(18);let i=ji(e,n);y_(i,t),xt(19,i[Hn])}function y_(n,e){lh(n)&&Gf(n,e)}function Gf(n,e){let i=n[it],r=n[Le],s=n[wn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&jd(s)),o||=!1,s&&(s.dirty=!1),n[Le]&=-9217,o)Iw(i,n,i.template,n[Hn]);else if(r&8192){m_(n),v_(n,1);let a=i.components;a!==null&&__(n,a,1),f_(n)}}function __(n,e,t){for(let i=0;i<e.length;i++)Rw(n,e[i],t)}function Nw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Tr(~r);else{let s=r,o=t[++i],a=t[++i];NE(o,s);let c=e[s];xt(24,c),a(2,c),xt(25,c)}}}finally{Tr(-1)}}function x_(n,e){let t=cy()?64:1088;for(n[yi].changeDetectionScheduler?.notify(e);n;){n[Le]|=t;let i=wr(n);if(Oc(n)&&!i)return n;n=i}return null}function M_(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Pw(n,e,t,i=!0){let r=e[it];if(Ow(r,e,n,t),i){let o=Hf(t,n),a=e[fn],c=a.parentNode(n[br]);c!==null&&lw(r,n[Wn],a,e,c,o)}let s=e[Ac];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Wf(n,e){if(n.length<=Tn)return;let t=Tn+e,i=n[t];if(i){let r=i[vs];r!==null&&r!==n&&Nh(r,i),e>0&&(n[t-1][zn]=i[zn]);let s=Dc(n,Tn+e);cw(i[it],i);let o=s[ys];o!==null&&o.detachView(s[it]),i[en]=null,i[zn]=null,i[Le]&=-129}return i}function Ow(n,e,t,i){let r=Tn+i,s=t.length;i>0&&(t[r-1][zn]=e),i<s-Tn?(e[zn]=t[r],Vv(t,Tn+i,e)):(t.push(e),e[zn]=null),e[en]=t;let o=e[vs];o!==null&&t!==o&&S_(o,e);let a=e[ys];a!==null&&a.insertView(n),Df(e),e[Le]|=128}function S_(n,e){let t=n[Pc],i=e[en];if(Sr(i))n[Le]|=2;else{let r=i[en][ni];e[ni]!==r&&(n[Le]|=2)}t===null?n[Pc]=[e]:t.push(e)}var Ro=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[it];return Hc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Hn]}set context(e){this._lView[Hn]=e}get destroyed(){return ko(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[en];if(Si(e)){let t=e[Nc],i=t?t.indexOf(this):-1;i>-1&&(Wf(e,i),Dc(t,i))}this._attachedToViewContainer=!1}u_(this._lView[it],this._lView)}onDestroy(e){ry(this._lView,e)}markForCheck(){x_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Le]&=-129}reattach(){Df(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,g_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new be(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Oc(this._lView),t=this._lView[vs];t!==null&&!e&&Nh(t,this._lView),l_(this._lView[it],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new be(902,!1);this._appRef=e;let t=Oc(this._lView),i=this._lView[vs];i!==null&&!t&&S_(i,this._lView),Df(this._lView)}};var Lh=(()=>{class n{static __NG_ELEMENT_ID__=kw}return n})(),Lw=Lh,Fw=class extends Lw{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=ow(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Ro(r)}};function kw(){return Uw(Yi(),jt())}function Uw(n,e){return n.type&4?new Fw(e,n,il(n,e)):null}function Fh(n,e,t,i,r){let s=n.data[e];if(s===null)s=Bw(n,e,t,i,r),RE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=TE();s.injectorIndex=o===null?-1:o.injectorIndex}return Uo(s,!0),s}function Bw(n,e,t,i,r){let s=oy(),o=ay(),a=o?s:s&&s.parent,c=n.data[e]=zw(n,a,t,e,i,r);return Vw(n,c,s,o),c}function Vw(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function zw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return EE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var SU=new RegExp(`^(\\d+)*(${vb}|${gb})*(.*)`);var Hw=()=>null;function mv(n,e){return Hw(n,e)}var Gw=class{},E_=class{},jf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${dn(e)}.`)}},al=class{static NULL=new jf},_s=class{};var Ww=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>null})}return n})();var yf={},$f=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Zc(i);let r=this.injector.get(e,yf,i);return r!==yf||t===yf?r:this.parentInjector.get(e,t,i)}};function gv(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Hg(r,a);else if(s==2){let c=a,l=e[++o];i=Hg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function zo(n,e=ze.Default){let t=jt();if(t===null)return He(n,e);let i=Yi();return Ty(i,t,bn(n),e)}function b_(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=$w(o);u===null?a=o:[a,c,l]=u,Yw(n,e,t,a,s,c,l)}s!==null&&i!==null&&jw(t,i,s)}function jw(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new be(-301,!1);i.push(e[r],s)}}function $w(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&Dr(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,qw(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function qw(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function Xw(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Yw(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let h=0;h<a;h++){let f=i[h];!c&&Dr(f)&&(c=!0,Xw(n,t,h)),XE(Sy(t,e),n,f.type)}tT(t,n.data.length,a);for(let h=0;h<a;h++){let f=i[h];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=i_(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let h=0;h<a;h++){let f=i[h];if(t.mergedAttrs=ph(t.mergedAttrs,f.hostAttrs),Jw(n,t,e,d,f),eT(d,f,r),o!==null&&o.has(f)){let[y,m]=o.get(f);t.directiveToIndex.set(f.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(f))&&t.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(t.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(t.flags|=64);let g=f.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}Zw(n,t,s)}function Zw(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))vv(0,e,r,i),vv(1,e,r,i),_v(e,i,!1);else{let s=t.get(r);yv(0,e,s,i),yv(1,e,s,i),_v(e,i,!0)}}}function vv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),w_(e,s)}}function yv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),w_(e,o)}}function w_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function _v(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||bh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function Jw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ps(r.type,!0)),o=new Io(s,Dr(r),zo);n.blueprint[i]=o,t[i]=o,Kw(n,e,i,i_(n,t,r.hostVars,Ss),r)}function Kw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Qw(o)!=a&&o.push(a),o.push(t,i,s)}}function Qw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function eT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Dr(e)&&(t[""]=n)}}function tT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function T_(n,e,t,i,r,s,o,a){let c=e.consts,l=Lc(c,o),u=Fh(e,n,2,i,l);return s&&b_(e,t,u,Lc(c,a),r),u.mergedAttrs=ph(u.mergedAttrs,u.attrs),u.attrs!==null&&gv(u,u.attrs,!1),u.mergedAttrs!==null&&gv(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function C_(n,e){vy(n,e),Yv(e)&&n.queries.elementEnd(e)}var Gc=class extends al{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=gs(e);return new No(t,this.ngModule)}};function nT(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&sl.SignalBased)!==0};return r&&(s.transform=r),s})}function iT(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function rT(n,e,t){let i=e instanceof Cn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new $f(t,i):t}function sT(n){let e=n.get(_s,null);if(e===null)throw new be(407,!1);let t=n.get(Ww,null),i=n.get(Ao,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function oT(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Qy(e,t,t==="svg"?mE:t==="math"?gE:null)}var No=class extends E_{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=nT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=iT(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Fb(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){xt(22);let s=ot(null);try{let o=this.componentDef,a=i?["ng-version","19.2.7"]:kb(this.componentDef.selectors[0]),c=wh(0,null,null,1,0,null,null,null,null,[a],null),l=rT(o,r||this.ngModule,e),u=sT(l),d=u.rendererFactory.createRenderer(null,o),h=i?$b(d,i,o.encapsulation,l):oT(o,d),f=Th(null,c,null,512|n_(o),null,null,u,d,l,null,$y(h,l,!0));f[_i]=h,uh(f);let g=null;try{let y=T_(_i,c,f,"#host",()=>[this.componentDef],!0,0);h&&(t_(d,h,y),Bo(h,f)),Dh(c,f,y),Xy(c,y,f),C_(c,y),t!==void 0&&aT(y,this.ngContentSelectors,t),g=ji(y.index,f),f[Hn]=g[Hn],Ah(c,f,null)}catch(y){throw g!==null&&Uf(g),Uf(f),y}finally{xt(23),dh()}return new qf(this.componentType,f)}finally{ot(s)}}},qf=class extends Gw{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=ty(t[it],_i),this.location=il(this._tNode,t),this.instance=ji(this._tNode.index,t)[Hn],this.hostView=this.changeDetectorRef=new Ro(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=Ih(i,r[it],r,e,t);this.previousInputValues.set(e,t);let o=ji(i.index,r);x_(o,1)}get injector(){return new Er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function aT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ho=(()=>{class n{static __NG_ELEMENT_ID__=cT}return n})();function cT(){let n=Yi();return uT(n,jt())}var lT=Ho,D_=class extends lT{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return il(this._hostTNode,this._hostLView)}get injector(){return new Er(this._hostTNode,this._hostLView)}get parentInjector(){let e=mh(this._hostTNode,this._hostLView);if(_y(e)){let t=kc(e,this._hostLView),i=Fc(e),r=t[it].data[i+8];return new Er(r,t)}else return new Er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=xv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Tn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=mv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,hv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!dE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new No(gs(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Cn,null);y&&(s=y)}let u=gs(c.componentType??{}),d=mv(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,hv(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(yE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[en],l=new D_(c,c[Wn],c[en]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Pw(o,r,s,i),e.attachToViewContainerRef(),Vv(_f(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=xv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Wf(this._lContainer,t);i&&(Dc(_f(this._lContainer),t),u_(i[it],i))}detach(e){let t=this._adjustIndex(e,-1),i=Wf(this._lContainer,t);return i&&Dc(_f(this._lContainer),t)!=null?new Ro(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function xv(n){return n[Nc]}function _f(n){return n[Nc]||(n[Nc]=[])}function uT(n,e){let t,i=e[n.index];return Si(i)?t=i:(t=M_(i,e,null,n),e[n.index]=t,Ch(e,t)),fT(t,e,n,i),new D_(t,n,e)}function dT(n,e){let t=n[fn],i=t.createComment(""),r=Xi(e,n),s=t.parentNode(r);return zc(t,s,i,t.nextSibling(r),!1),i}var fT=mT,hT=()=>!1;function pT(n,e,t){return hT(n,e,t)}function mT(n,e,t,i){if(n[br])return;let r;t.type&8?r=xi(i):r=dT(e,t),n[br]=r}var Po=class{},kh=class{};var Xf=class extends Po{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Gc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Gv(e);this._bootstrapComponents=Jy(s.bootstrap),this._r3Injector=Iy(e,t,[{provide:Po,useValue:this},{provide:al,useValue:this.componentFactoryResolver},...i],dn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Yf=class extends kh{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Xf(this.moduleType,e,[])}};var Wc=class extends Po{injector;componentFactoryResolver=new Gc(this);instance=null;constructor(e){super();let t=new To([...e.providers,{provide:Po,useValue:this},{provide:al,useValue:this.componentFactoryResolver}],e.parent||ah(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function cl(n,e,t=null){return new Wc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var gT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Wv(!1,t.type),r=i.length>0?cl([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ae({token:n,providedIn:"environment",factory:()=>new n(He(Cn))})}return n})();function Dn(n){return Oo(()=>{let e=I_(n),t=yt(ge({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Uy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(gT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ii.Emulated,styles:n.styles||ei,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Eh("NgStandalone"),A_(t);let i=n.dependencies;return t.directiveDefs=Mv(i,!1),t.pipeDefs=Mv(i,!0),t.id=MT(t),t})}function vT(n){return gs(n)||KS(n)}function yT(n){return n!==null}function ll(n){return Oo(()=>({type:n.type,bootstrap:n.bootstrap||ei,declarations:n.declarations||ei,imports:n.imports||ei,exports:n.exports||ei,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function _T(n,e){if(n==null)return ms;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=sl.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function xT(n){if(n==null)return ms;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function ul(n){return Oo(()=>{let e=I_(n);return A_(e),e})}function I_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ms,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||ei,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:_T(n.inputs,e),outputs:xT(n.outputs),debugInfo:null}}function A_(n){n.features?.forEach(e=>e(n))}function Mv(n,e){if(!n)return null;let t=e?QS:vT;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(yT)}function MT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function R_(n){return ET(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function ST(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function ET(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function jc(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function bT(n,e,t,i){let r=jc(n,e,t);return jc(n,e+1,i)||r}function wT(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Fh(e,n,4,o||null,a||null);sy()&&b_(e,t,u,Lc(l,c),a_),u.mergedAttrs=ph(u.mergedAttrs,u.attrs),vy(e,u);let d=u.tView=wh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function TT(n,e,t,i,r,s,o,a,c,l){let u=t+_i,d=e.firstCreatePass?wT(u,e,n,i,r,s,o,a,c):e.data[u];Uo(d,!1);let h=CT(e,n,d,t);fh()&&Ph(e,n,h,d),Bo(h,n);let f=M_(h,n,h,d);return n[u]=f,Ch(n,f),pT(f,d,n),Zv(d)&&Dh(e,n,d),c!=null&&o_(n,d,l),d}function dl(n,e,t,i,r,s,o,a){let c=jt(),l=xs(),u=Lc(l.consts,s);return TT(c,l,n,e,t,i,r,u,o,a),dl}var CT=DT;function DT(n,e,t,i){return hh(!0),e[fn].createComment("")}var N_=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var P_=new Ie("");var IT=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new Zf})}return n})(),Zf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function fl(n){return!!n&&typeof n.then=="function"}function AT(n){return!!n&&typeof n.subscribe=="function"}var RT=new Ie("");var O_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(RT,{optional:!0})??[];injector=ie($i);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Gn(this.injector,r);if(fl(s))t.push(s);else if(AT(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Uh=new Ie("");function NT(){qd(()=>{throw new be(600,!1)})}function PT(n){return n.isBoundToModule}var OT=10;var Cr=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(cb);afterRenderManager=ie(_b);zonelessEnabled=ie(vh);rootEffectScheduler=ie(IT);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Ht;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ie(Ms).hasPendingTasks.pipe(Qe(t=>!t));constructor(){ie(rl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Cn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=$i.NULL){xt(10);let s=t instanceof E_;if(!this._injector.get(O_).done){let f="";throw new be(405,f)}let a;s?a=t:a=this._injector.get(al).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let c=PT(a)?void 0:this._injector.get(Po),l=i||a.selector,u=a.create(r,[],l,c),d=u.location.nativeElement,h=u.injector.get(P_,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Ec(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),xt(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){xt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(jy.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new be(101,!1);let t=ot(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ot(t),this.afterTick.next(),xt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(_s,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<OT;)xt(14),this.synchronizeOnce(),xt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)LT(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Qc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ec(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Uh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ec(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new be(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ec(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function LT(n,e,t,i){if(!t&&!Qc(n))return;g_(n,e,t&&!i?0:1)}function FT(n,e,t,i){return jc(n,ly(),t)?e+bo(t)+i:Ss}function kT(n,e,t,i,r,s){let o=DE(),a=bT(n,o,t,r);return AE(2),a?e+bo(t)+i+bo(r)+s:Ss}function Go(n,e,t){let i=jt(),r=ly();if(jc(i,r,e)){let s=xs(),o=LE();Zb(s,o,i,n,e,i[fn],t,!1)}return Go}function Sv(n,e,t,i,r){Ih(e,n,t,r?"class":"style",i)}function Ct(n,e,t,i){let r=jt(),s=xs(),o=_i+n,a=r[fn],c=s.firstCreatePass?T_(o,s,r,e,a_,sy(),t,i):s.data[o],l=UT(s,r,c,a,e,n);r[o]=l;let u=Zv(c);return Uo(c,!0),t_(a,l,c),!c_(c)&&fh()&&Ph(s,r,l,c),(xE()===0||u)&&Bo(l,r),ME(),u&&(Dh(s,r,c),Xy(s,c,r)),i!==null&&o_(r,c),Ct}function Dt(){let n=Yi();ay()?CE():(n=n.parent,Uo(n,!1));let e=n;bE(e)&&wE(),SE();let t=xs();return t.firstCreatePass&&C_(t,e),e.classesWithoutHost!=null&&BE(e)&&Sv(t,e,jt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&VE(e)&&Sv(t,e,jt(),e.stylesWithoutHost,!1),Dt}function jn(n,e,t,i){return Ct(n,e,t,i),Dt(),jn}var UT=(n,e,t,i,r,s)=>(hh(!0),Qy(i,r,FE()));var $c="en-US";var BT=$c;function VT(n){typeof n=="string"&&(BT=n.toLowerCase().replace(/_/g,"-"))}function tn(n,e=""){let t=jt(),i=xs(),r=n+_i,s=i.firstCreatePass?Fh(i,r,1,e,null):i.data[r],o=zT(i,t,s,e,n);t[r]=o,fh()&&Ph(i,t,o,s),Uo(s,!1)}var zT=(n,e,t,i,r)=>(hh(!0),Ub(e[fn],i));function hl(n){return L_("",n,""),hl}function L_(n,e,t){let i=jt(),r=FT(i,n,e,t);return r!==Ss&&F_(i,tl(),r),L_}function pl(n,e,t,i,r){let s=jt(),o=kT(s,n,e,t,i,r);return o!==Ss&&F_(s,tl(),o),pl}function F_(n,e,t){let i=vE(e,n);Bb(n[fn],i,t)}var Jf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},k_=(()=>{class n{compileModuleSync(t){return new Yf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Gv(t),s=Jy(r.declarations).reduce((o,a)=>{let c=gs(a);return c&&o.push(new No(c)),o},[]);return new Jf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var HT=(()=>{class n{zone=ie(Bt);changeDetectionScheduler=ie(Ao);applicationRef=ie(Cr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),GT=new Ie("",{factory:()=>!1});function U_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Bt(yt(ge({},V_()),{scheduleInRootZone:t})),[{provide:Bt,useFactory:n},{provide:wo,multi:!0,useFactory:()=>{let i=ie(HT,{optional:!0});return()=>i.initialize()}},{provide:wo,multi:!0,useFactory:()=>{let i=ie(WT);return()=>{i.initialize()}}},e===!0?{provide:Ry,useValue:!0}:[],{provide:Ny,useValue:t??Ay}]}function B_(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=U_({ngZoneFactory:()=>{let r=V_(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&Eh("NgZone_CoalesceEvent"),new Bt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return sh([{provide:GT,useValue:!0},{provide:vh,useValue:!1},i])}function V_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var WT=(()=>{class n{subscription=new Rt;initialized=!1;zone=ie(Bt);pendingTasks=ie(Ms);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Bt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Bt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jT=(()=>{class n{appRef=ie(Cr);taskService=ie(Ms);ngZone=ie(Bt);zonelessEnabled=ie(vh);tracing=ie(rl,{optional:!0});disableScheduling=ie(Ry,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Rt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Bc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(Ny,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof kf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?sv:Py;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Bc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,sv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $T(){return typeof $localize<"u"&&$localize.locale||$c}var z_=new Ie("",{providedIn:"root",factory:()=>ie(z_,ze.Optional|ze.SkipSelf)||$T()});var Kf=new Ie(""),qT=new Ie("");function xo(n){return!n.moduleRef}function XT(n){let e=xo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Bt);return t.run(()=>{xo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(qi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),xo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Kf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Kf);o.add(s),n.moduleRef.onDestroy(()=>{Ec(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return ZT(i,t,()=>{let s=e.get(O_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(z_,$c);if(VT(o||$c),!e.get(qT,!0))return xo(n)?e.get(Cr):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(xo(n)){let c=e.get(Cr);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return YT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function YT(n,e){let t=n.injector.get(Cr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new be(-403,!1);e.push(n)}function ZT(n,e,t){try{let i=t();return fl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var bc=null;function JT(n=[],e){return $i.create({name:e,providers:[{provide:Jc,useValue:"platform"},{provide:Kf,useValue:new Set([()=>bc=null])},...n]})}function KT(n=[]){if(bc)return bc;let e=JT(n);return bc=e,NT(),QT(e),e}function QT(n){let e=n.get(Mh,null);Gn(n,()=>{e?.forEach(t=>t())})}var Bh=(()=>{class n{static __NG_ELEMENT_ID__=eC}return n})();function eC(n){return tC(Yi(),jt(),(n&16)===16)}function tC(n,e,t){if(Fo(n)&&!t){let i=ji(n.index,e);return new Ro(i,i)}else if(n.type&175){let i=e[ni];return new Ro(i,e)}return null}var Qf=class{constructor(){}supports(e){return R_(e)}create(e){return new eh(e)}},nC=(n,e)=>e,eh=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||nC}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Ev(i,r,s)?t:i,a=Ev(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let f=h<s.length?s[h]:s[h]=0,g=f+h;u<=g&&g<l&&(s[h]=f+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!R_(e))throw new be(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,ST(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new th(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new qc),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new qc),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},th=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},nh=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},qc=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new nh,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Ev(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function bv(){return new Vh([new Qf])}var Vh=(()=>{class n{factories;static \u0275prov=Ae({token:n,providedIn:"root",factory:bv});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||bv()),deps:[[n,new JS,new ZS]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new be(901,!1)}}return n})();function H_(n){xt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=KT(i),s=[U_({}),{provide:Ao,useExisting:jT},...t||[]],o=new Wc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return XT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{xt(9)}}var wv=class{[Kr];constructor(e){this[Kr]=e}destroy(){this[Kr].destroy()}};var Xt=new Ie("");var j_=null;function Ei(){return j_}function zh(n){j_??=n}var Wo=class{},Hh=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie($_),providedIn:"platform"})}return n})();var $_=(()=>{class n extends Hh{_location;_history;_doc=ie(Xt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ei().getBaseHref(this._doc)}onPopState(t){let i=Ei().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Ei().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function q_(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function G_(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Ji(n){return n&&n[0]!=="?"?`?${n}`:n}var ml=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie(Y_),providedIn:"root"})}return n})(),X_=new Ie(""),Y_=(()=>{class n extends ml{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(Xt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return q_(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Ji(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Ji(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Ji(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(He(Hh),He(X_,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bs=(()=>{class n{_subject=new Ht;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=sC(G_(W_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Ji(i))}normalize(t){return n.stripTrailingSlash(rC(this._basePath,W_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ji(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ji(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Ji;static joinWithSlash=q_;static stripTrailingSlash=G_;static \u0275fac=function(i){return new(i||n)(He(ml))};static \u0275prov=Ae({token:n,factory:()=>iC(),providedIn:"root"})}return n})();function iC(){return new bs(He(ml))}function rC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function W_(n){return n.replace(/\/index.html$/,"")}function sC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var gl=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},vl=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new gl(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Z_(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Z_(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(zo(Ho),zo(Lh),zo(Vh))};static \u0275dir=ul({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Z_(n,e){n.context.$implicit=e.item}var yl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ll({type:n});static \u0275inj=Xc({})}return n})();function Gh(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Wh="browser",J_="server";function _l(n){return n===J_}var jo=class{};var Sl=new Ie(""),Xh=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new be(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(He(Sl),He(Bt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),$o=class{_doc;constructor(e){this._doc=e}manager},xl="ng-app-id";function K_(n){for(let e of n)e.remove()}function Q_(n,e){let t=e.createElement("style");return t.textContent=n,t}function aC(n,e,t,i){let r=n.head?.querySelectorAll(`style[${xl}="${e}"],link[${xl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(xl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function $h(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Yh=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=_l(s),aC(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Q_);i?.forEach(r=>this.addUsage(r,this.external,$h))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(K_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])K_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Q_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,$h(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(xl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(He(Xt),He(xh),He(Sh,8),He(Vo))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),jh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zh=/%COMP%/g;var t0="%COMP%",cC=`_nghost-${t0}`,lC=`_ngcontent-${t0}`,uC=!0,dC=new Ie("",{providedIn:"root",factory:()=>uC});function fC(n){return lC.replace(Zh,n)}function hC(n){return cC.replace(Zh,n)}function n0(n,e){return e.map(t=>t.replace(Zh,n))}var Jh=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=_l(a),this.defaultRenderer=new qo(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ii.ShadowDom&&(i=yt(ge({},i),{encapsulation:ii.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Ml?r.applyToHost(t):r instanceof Xo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,h=this.tracingService;switch(i.encapsulation){case ii.Emulated:s=new Ml(c,l,i,this.appId,u,o,a,d,h);break;case ii.ShadowDom:return new qh(c,l,t,i,o,a,this.nonce,d,h);default:s=new Xo(c,l,i,u,o,a,d,h);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(He(Xh),He(Yh),He(xh),He(dC),He(Xt),He(Vo),He(Bt),He(Sh),He(rl,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),qo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(jh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(e0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(e0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new be(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=jh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=jh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Es.DashCase|Es.Important)?e.style.setProperty(t,i,r&Es.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Es.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Ei().getGlobalEventTarget(this.doc,e),!e))throw new be(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function e0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var qh=class extends qo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=n0(r.id,u);for(let h of u){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=h,this.shadowRoot.appendChild(f)}let d=r.getExternalStyles?.();if(d)for(let h of d){let f=$h(h,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Xo=class extends qo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?n0(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ml=class extends Xo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=fC(u),this.hostAttr=hC(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var El=class n extends Wo{supportsDOMEvents=!0;static makeCurrent(){zh(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=pC();return t==null?null:mC(t)}resetBaseElement(){Yo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Gh(document.cookie,e)}},Yo=null;function pC(){return Yo=Yo||document.querySelector("base"),Yo?Yo.getAttribute("href"):null}function mC(n){return new URL(n,document.baseURI).pathname}var gC=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),r0=(()=>{class n extends $o{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(He(Xt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),i0=["alt","control","meta","shift"],vC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},s0=(()=>{class n extends $o{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ei().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),i0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=vC[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),i0.forEach(o=>{if(o!==r){let a=yC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(He(Xt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})();function Kh(n,e){return H_(ge({rootComponent:n},_C(e)))}function _C(n){return{appProviders:[...bC,...n?.providers??[]],platformProviders:EC}}function xC(){El.makeCurrent()}function MC(){return new qi}function SC(){return Gy(document),document}var EC=[{provide:Vo,useValue:Wh},{provide:Mh,useValue:xC,multi:!0},{provide:Xt,useFactory:SC}];var bC=[{provide:Jc,useValue:"root"},{provide:qi,useFactory:MC},{provide:Sl,useClass:r0,multi:!0,deps:[Xt]},{provide:Sl,useClass:s0,multi:!0,deps:[Xt]},Jh,Yh,Xh,{provide:_s,useExisting:Jh},{provide:jo,useClass:gC},[]];var o0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(He(Xt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue="primary",aa=Symbol("RouteTitle"),ip=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function As(n){return new ip(n)}function TC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function CC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ri(n[t],e[t]))return!1;return!0}function ri(n,e){let t=n?rp(n):void 0,i=e?rp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!p0(n[r],e[r]))return!1;return!0}function rp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function p0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function m0(n){return n.length>0?n[n.length-1]:null}function er(n){return af(n)?n:fl(n)?Nt(Promise.resolve(n)):Oe(n)}var DC={exact:v0,subset:y0},g0={exact:IC,subset:AC,ignored:()=>!0};function a0(n,e,t){return DC[t.paths](n.root,e.root,t.matrixParams)&&g0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function IC(n,e){return ri(n,e)}function v0(n,e,t){if(!Ar(n.segments,e.segments)||!Tl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!v0(n.children[i],e.children[i],t))return!1;return!0}function AC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>p0(n[t],e[t]))}function y0(n,e,t){return _0(n,e,e.segments,t)}function _0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ar(r,t)||e.hasChildren()||!Tl(r,t,i))}else if(n.segments.length===t.length){if(!Ar(n.segments,t)||!Tl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!y0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ar(n.segments,r)||!Tl(n.segments,r,i)||!n.children[Ue]?!1:_0(n.children[Ue],e,s,i)}}function Tl(n,e,t){return e.every((i,r)=>g0[t](n[r].parameters,i.parameters))}var wi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new lt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=As(this.queryParams),this._queryParamMap}toString(){return PC.serialize(this)}},lt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Cl(this)}},Ir=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=As(this.parameters),this._parameterMap}toString(){return M0(this)}};function RC(n,e){return Ar(n,e)&&n.every((t,i)=>ri(t.parameters,e[i].parameters))}function Ar(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function NC(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ue&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ue&&(t=t.concat(e(r,i)))}),t}var Vl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new Rs,providedIn:"root"})}return n})(),Rs=class{parse(e){let t=new op(e);return new wi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Zo(e.root,!0)}`,i=FC(e.queryParams),r=typeof e.fragment=="string"?`#${OC(e.fragment)}`:"";return`${t}${i}${r}`}},PC=new Rs;function Cl(n){return n.segments.map(e=>M0(e)).join("/")}function Zo(n,e){if(!n.hasChildren())return Cl(n);if(e){let t=n.children[Ue]?Zo(n.children[Ue],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ue&&i.push(`${r}:${Zo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=NC(n,(i,r)=>r===Ue?[Zo(n.children[Ue],!1)]:[`${r}:${Zo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ue]!=null?`${Cl(n)}/${t[0]}`:`${Cl(n)}/(${t.join("//")})`}}function x0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function bl(n){return x0(n).replace(/%3B/gi,";")}function OC(n){return encodeURI(n)}function sp(n){return x0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Dl(n){return decodeURIComponent(n)}function c0(n){return Dl(n.replace(/\+/g,"%20"))}function M0(n){return`${sp(n.path)}${LC(n.parameters)}`}function LC(n){return Object.entries(n).map(([e,t])=>`;${sp(e)}=${sp(t)}`).join("")}function FC(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${bl(t)}=${bl(r)}`).join("&"):`${bl(t)}=${bl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var kC=/^[^\/()?;#]+/;function Qh(n){let e=n.match(kC);return e?e[0]:""}var UC=/^[^\/()?;=#]+/;function BC(n){let e=n.match(UC);return e?e[0]:""}var VC=/^[^=?&#]+/;function zC(n){let e=n.match(VC);return e?e[0]:""}var HC=/^[^&#]+/;function GC(n){let e=n.match(HC);return e?e[0]:""}var op=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new lt([],{}):new lt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ue]=new lt(e,t)),i}parseSegment(){let e=Qh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new be(4009,!1);return this.capture(e),new Ir(Dl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=BC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qh(this.remaining);r&&(i=r,this.capture(i))}e[Dl(t)]=Dl(i)}parseQueryParam(e){let t=zC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=GC(this.remaining);o&&(i=o,this.capture(i))}let r=c0(t),s=c0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new be(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new lt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new be(4011,!1)}};function S0(n){return n.segments.length>0?new lt([],{[Ue]:n}):n}function E0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=E0(r);if(i===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new lt(n.segments,e);return WC(t)}function WC(n){if(n.numberOfChildren===1&&n.children[Ue]){let e=n.children[Ue];return new lt(n.segments.concat(e.segments),e.children)}return n}function Ns(n){return n instanceof wi}function jC(n,e,t=null,i=null){let r=b0(n);return w0(r,e,t,i)}function b0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new lt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=S0(i);return e??r}function w0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ep(r,r,r,t,i);let s=$C(e);if(s.toRoot())return ep(r,r,new lt([],{}),t,i);let o=qC(s,r,n),a=o.processChildren?Ko(o.segmentGroup,o.index,s.commands):C0(o.segmentGroup,o.index,s.commands);return ep(r,o.segmentGroup,a,t,i)}function Al(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ea(n){return typeof n=="object"&&n!=null&&n.outlets}function ep(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=T0(n,e,t);let a=S0(E0(o));return new wi(a,s,r)}function T0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=T0(s,e,t)}),new lt(n.segments,i)}var Rl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Al(i[0]))throw new be(4003,!1);let r=i.find(ea);if(r&&r!==m0(i))throw new be(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function $C(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Rl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Rl(t,e,i)}var Cs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function qC(n,e,t){if(n.isAbsolute)return new Cs(e,!0,0);if(!t)return new Cs(e,!1,NaN);if(t.parent===null)return new Cs(t,!0,0);let i=Al(n.commands[0])?0:1,r=t.segments.length-1+i;return XC(t,r,n.numberOfDoubleDots)}function XC(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new be(4005,!1);r=i.segments.length}return new Cs(i,!1,r-s)}function YC(n){return ea(n[0])?n[0].outlets:{[Ue]:n}}function C0(n,e,t){if(n??=new lt([],{}),n.segments.length===0&&n.hasChildren())return Ko(n,e,t);let i=ZC(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new lt(n.segments.slice(0,i.pathIndex),{});return s.children[Ue]=new lt(n.segments.slice(i.pathIndex),n.children),Ko(s,0,r)}else return i.match&&r.length===0?new lt(n.segments,{}):i.match&&!n.hasChildren()?ap(n,e,t):i.match?Ko(n,0,r):ap(n,e,t)}function Ko(n,e,t){if(t.length===0)return new lt(n.segments,{});{let i=YC(t),r={};if(Object.keys(i).some(s=>s!==Ue)&&n.children[Ue]&&n.numberOfChildren===1&&n.children[Ue].segments.length===0){let s=Ko(n.children[Ue],e,t);return new lt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=C0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new lt(n.segments,r)}}function ZC(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ea(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!u0(c,l,o))return s;i+=2}else{if(!u0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ap(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ea(s)){let c=JC(s.outlets);return new lt(i,c)}if(r===0&&Al(t[0])){let c=n.segments[e];i.push(new Ir(c.path,l0(t[0]))),r++;continue}let o=ea(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Al(a)?(i.push(new Ir(o,l0(a))),r+=2):(i.push(new Ir(o,{})),r++)}return new lt(i,{})}function JC(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ap(new lt([],{}),0,i))}),e}function l0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function u0(n,e,t){return n==t.path&&ri(e,t.parameters)}var Il="imperative",$t=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}($t||{}),In=class{id;url;constructor(e,t){this.id=e,this.url=t}},Ps=class extends In{type=$t.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ki=class extends In{urlAfterRedirects;type=$t.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},pn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(pn||{}),Nl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Nl||{}),bi=class extends In{reason;code;type=$t.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Qi=class extends In{reason;code;type=$t.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},ta=class extends In{error;target;type=$t.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Pl=class extends In{urlAfterRedirects;state;type=$t.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cp=class extends In{urlAfterRedirects;state;type=$t.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lp=class extends In{urlAfterRedirects;state;shouldActivate;type=$t.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},up=class extends In{urlAfterRedirects;state;type=$t.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dp=class extends In{urlAfterRedirects;state;type=$t.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fp=class{route;type=$t.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hp=class{route;type=$t.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pp=class{snapshot;type=$t.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mp=class{snapshot;type=$t.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gp=class{snapshot;type=$t.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vp=class{snapshot;type=$t.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var na=class{},Os=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function KC(n,e){return n.providers&&!n._injector&&(n._injector=cl(n.providers,e,`Route: ${n.path}`)),n._injector??e}function qn(n){return n.outlet||Ue}function QC(n,e){let t=n.filter(i=>qn(i)===e);return t.push(...n.filter(i=>qn(i)!==e)),t}function ca(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var yp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ca(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new la(this.rootInjector)}},la=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new yp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(He(Cn))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ol=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=_p(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=_p(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=xp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return xp(e,this._root).map(t=>t.value)}};function _p(n,e){if(n===e.value)return e;for(let t of e.children){let i=_p(n,t);if(i)return i}return null}function xp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=xp(n,t);if(i.length)return i.unshift(e),i}return[]}var hn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ts(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Ll=class extends Ol{snapshot;constructor(e,t){super(e),this.snapshot=t,Ip(this,e)}toString(){return this.snapshot.toString()}};function D0(n){let e=eD(n),t=new Gt([new Ir("",{})]),i=new Gt({}),r=new Gt({}),s=new Gt({}),o=new Gt(""),a=new Rr(t,i,s,o,r,Ue,n,e.root);return a.snapshot=e.root,new Ll(new hn(a,[]),e)}function eD(n){let e={},t={},i={},r="",s=new Ds([],e,i,r,t,Ue,n,null,{});return new kl("",new hn(s,[]))}var Rr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Qe(l=>l[aa]))??Oe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Qe(e=>As(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Qe(e=>As(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Fl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ge(ge({},e.params),n.params),data:ge(ge({},e.data),n.data),resolve:ge(ge(ge(ge({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ge({},n.params),data:ge({},n.data),resolve:ge(ge({},n.data),n._resolvedData??{})},r&&A0(r)&&(i.resolve[aa]=r.title),i}var Ds=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[aa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=As(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=As(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},kl=class extends Ol{url;constructor(e,t){super(t),this.url=e,Ip(this,t)}toString(){return I0(this._root)}};function Ip(n,e){e.value._routerState=n,e.children.forEach(t=>Ip(n,t))}function I0(n){let e=n.children.length>0?` { ${n.children.map(I0).join(", ")} } `:"";return`${n.value}${e}`}function tp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ri(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ri(e.params,t.params)||n.paramsSubject.next(t.params),CC(e.url,t.url)||n.urlSubject.next(t.url),ri(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Mp(n,e){let t=ri(n.params,e.params)&&RC(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Mp(n.parent,e.parent))}function A0(n){return typeof n.title=="string"||n.title===null}var tD=new Ie(""),R0=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ue;activateEvents=new cn;deactivateEvents=new cn;attachEvents=new cn;detachEvents=new cn;routerOutletData=Ly(void 0);parentContexts=ie(la);location=ie(Ho);changeDetector=ie(Bh);inputBinder=ie(zl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new be(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new be(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new be(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new be(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Sp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ul({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ch]})}return n})(),Sp=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Rr?this.route:e===la?this.childContexts:e===tD?this.outletData:this.parent.get(e,t)}},zl=new Ie("");function nD(n,e,t){let i=ia(n,e._root,t?t._root:void 0);return new Ll(i,e)}function ia(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=iD(n,e,t);return new hn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ia(n,a)),o}}let i=rD(e.value),r=e.children.map(s=>ia(n,s));return new hn(i,r)}}function iD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ia(n,i,r);return ia(n,i)})}function rD(n){return new Rr(new Gt(n.url),new Gt(n.params),new Gt(n.queryParams),new Gt(n.fragment),new Gt(n.data),n.outlet,n.component,n)}var ra=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},N0="ngNavigationCancelingError";function Ul(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ns(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=P0(!1,pn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function P0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[N0]=!0,t.cancellationCode=e,t}function sD(n){return O0(n)&&Ns(n.url)}function O0(n){return!!n&&n[N0]}var oD=(n,e,t,i)=>Qe(r=>(new Ep(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Ep=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),tp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ts(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ts(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ts(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ts(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new vp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new mp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(tp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),tp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Bl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Is=class{component;route;constructor(e,t){this.component=e,this.route=t}};function aD(n,e,t){let i=n._root,r=e?e._root:null;return Jo(i,r,t,[i.value])}function cD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Fs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Nv(n)?n:e.get(n):i}function Jo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ts(e);return n.children.forEach(o=>{lD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Qo(a,t.getContext(o),r)),r}function lD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=uD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Bl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Jo(n,e,a?a.children:null,i,r):Jo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Is(a.outlet.component,o))}else o&&Qo(e,a,r),r.canActivateChecks.push(new Bl(i)),s.component?Jo(n,null,a?a.children:null,i,r):Jo(n,null,t,i,r);return r}function uD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ar(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ar(n.url,e.url)||!ri(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Mp(n,e)||!ri(n.queryParams,e.queryParams);case"paramsChange":default:return!Mp(n,e)}}function Qo(n,e,t){let i=Ts(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Qo(o,e.children.getContext(s),t):Qo(o,null,t):Qo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Is(e.outlet.component,r)):t.canDeactivateChecks.push(new Is(null,r)):t.canDeactivateChecks.push(new Is(null,r))}function ua(n){return typeof n=="function"}function dD(n){return typeof n=="boolean"}function fD(n){return n&&ua(n.canLoad)}function hD(n){return n&&ua(n.canActivate)}function pD(n){return n&&ua(n.canActivateChild)}function mD(n){return n&&ua(n.canDeactivate)}function gD(n){return n&&ua(n.canMatch)}function L0(n){return n instanceof mi||n?.name==="EmptyError"}var wl=Symbol("INITIAL_VALUE");function Ls(){return Bn(n=>gc(n.map(e=>e.pipe(gi(1),uf(wl)))).pipe(Qe(e=>{for(let t of e)if(t!==!0){if(t===wl)return wl;if(t===!1||vD(t))return t}return!0}),Un(e=>e!==wl),gi(1)))}function vD(n){return Ns(n)||n instanceof ra}function yD(n,e){return Lt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Oe(yt(ge({},t),{guardsResult:!0})):_D(o,i,r,n).pipe(Lt(a=>a&&dD(a)?xD(i,s,n,e):Oe(a)),Qe(a=>yt(ge({},t),{guardsResult:a})))})}function _D(n,e,t,i){return Nt(n).pipe(Lt(r=>wD(r.component,r.route,t,e,i)),vi(r=>r!==!0,!0))}function xD(n,e,t,i){return Nt(e).pipe(cs(r=>as(SD(r.route.parent,i),MD(r.route,i),bD(n,r.path,t),ED(n,r.route,t))),vi(r=>r!==!0,!0))}function MD(n,e){return n!==null&&e&&e(new gp(n)),Oe(!0)}function SD(n,e){return n!==null&&e&&e(new pp(n)),Oe(!0)}function ED(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Oe(!0);let r=i.map(s=>vc(()=>{let o=ca(e)??t,a=Fs(s,o),c=hD(a)?a.canActivate(e,n):Gn(o,()=>a(e,n));return er(c).pipe(vi())}));return Oe(r).pipe(Ls())}function bD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>cD(o)).filter(o=>o!==null).map(o=>vc(()=>{let a=o.guards.map(c=>{let l=ca(o.node)??t,u=Fs(c,l),d=pD(u)?u.canActivateChild(i,n):Gn(l,()=>u(i,n));return er(d).pipe(vi())});return Oe(a).pipe(Ls())}));return Oe(s).pipe(Ls())}function wD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Oe(!0);let o=s.map(a=>{let c=ca(e)??r,l=Fs(a,c),u=mD(l)?l.canDeactivate(n,e,t,i):Gn(c,()=>l(n,e,t,i));return er(u).pipe(vi())});return Oe(o).pipe(Ls())}function TD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Fs(o,n),c=fD(a)?a.canLoad(e,t):Gn(n,()=>a(e,t));return er(c)});return Oe(s).pipe(Ls(),F0(i))}function F0(n){return nf(Wt(e=>{if(typeof e!="boolean")throw Ul(n,e)}),Qe(e=>e===!0))}function CD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Fs(o,n),c=gD(a)?a.canMatch(e,t):Gn(n,()=>a(e,t));return er(c)});return Oe(s).pipe(Ls(),F0(i))}var sa=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},oa=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function ws(n){return os(new sa(n))}function DD(n){return os(new be(4e3,!1))}function ID(n){return os(P0(!1,pn.GuardRejected))}var bp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Oe(i);if(r.numberOfChildren>1||!r.children[Ue])return DD(`${e.redirectTo}`);r=r.children[Ue]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:h,params:f,data:g,title:y}=r,m=Gn(s,()=>a({params:f,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:h,title:y}));if(m instanceof wi)throw new oa(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new oa(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new wi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new lt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new be(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},wp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function AD(n,e,t,i,r){let s=k0(n,e,t);return s.matched?(i=KC(e,i),CD(i,e,t,r).pipe(Qe(o=>o===!0?s:ge({},wp)))):Oe(s)}function k0(n,e,t){if(e.path==="**")return RD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ge({},wp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||TC)(t,n,e);if(!r)return ge({},wp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ge(ge({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function RD(n){return{matched:!0,parameters:n.length>0?m0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function d0(n,e,t,i){return t.length>0&&OD(n,t,i)?{segmentGroup:new lt(e,PD(i,new lt(t,n.children))),slicedSegments:[]}:t.length===0&&LD(n,t,i)?{segmentGroup:new lt(n.segments,ND(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new lt(n.segments,n.children),slicedSegments:t}}function ND(n,e,t,i){let r={};for(let s of t)if(Hl(n,e,s)&&!i[qn(s)]){let o=new lt([],{});r[qn(s)]=o}return ge(ge({},i),r)}function PD(n,e){let t={};t[Ue]=e;for(let i of n)if(i.path===""&&qn(i)!==Ue){let r=new lt([],{});t[qn(i)]=r}return t}function OD(n,e,t){return t.some(i=>Hl(n,e,i)&&qn(i)!==Ue)}function LD(n,e,t){return t.some(i=>Hl(n,e,i))}function Hl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function FD(n,e,t){return e.length===0&&!n.children[t]}var Tp=class{};function kD(n,e,t,i,r,s,o="emptyOnly"){return new Cp(n,e,t,i,r,o,s).recognize()}var UD=31,Cp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new bp(this.urlSerializer,this.urlTree)}noMatchError(e){return new be(4002,`'${e.segmentGroup}'`)}recognize(){let e=d0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Qe(({children:t,rootSnapshot:i})=>{let r=new hn(i,t),s=new kl("",r),o=jC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Ds([],Object.freeze({}),Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ue,t).pipe(Qe(i=>({children:i,rootSnapshot:t})),Hi(i=>{if(i instanceof oa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof sa?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Qe(o=>o instanceof hn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Nt(s).pipe(cs(o=>{let a=i.children[o],c=QC(t,o);return this.processSegmentGroup(e,c,a,o,r)}),lf((o,a)=>(o.push(...a),o)),Gi(null),cf(),Lt(o=>{if(o===null)return ws(i);let a=U0(o);return BD(a),Oe(a)}))}processSegment(e,t,i,r,s,o,a){return Nt(t).pipe(cs(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Hi(l=>{if(l instanceof sa)return Oe(null);throw l}))),vi(c=>!!c),Hi(c=>{if(L0(c))return FD(i,r,s)?Oe(new Tp):ws(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return qn(i)!==o&&(o===Ue||!Hl(r,s,i))?ws(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):ws(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:h}=k0(t,r,s);if(!c)return ws(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>UD&&(this.allowRedirects=!1));let f=new Ds(s,l,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,f0(r),qn(r),r.component??r._loadedComponent??null,r,h0(r)),g=Fl(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,f,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(Lt(m=>this.processSegment(e,i,t,m.concat(h),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=AD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Bn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Bn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:h,remainingSegments:f}=c,g=new Ds(h,d,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,f0(i),qn(i),i.component??i._loadedComponent??null,i,h0(i)),y=Fl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=d0(t,h,f,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Qe(b=>new hn(g,b)));if(l.length===0&&p.length===0)return Oe(new hn(g,[]));let T=qn(i)===s;return this.processSegment(u,l,m,p,T?Ue:s,!0,g).pipe(Qe(b=>new hn(g,b instanceof hn?[b]:[])))}))):ws(t)))}getChildConfig(e,t,i){return t.children?Oe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Oe({routes:t._loadedRoutes,injector:t._loadedInjector}):TD(e,t,i,this.urlSerializer).pipe(Lt(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):ID(t))):Oe({routes:[],injector:e})}};function BD(n){n.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function VD(n){let e=n.value.routeConfig;return e&&e.path===""}function U0(n){let e=[],t=new Set;for(let i of n){if(!VD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=U0(i.children);e.push(new hn(i.value,r))}return e.filter(i=>!t.has(i))}function f0(n){return n.data||{}}function h0(n){return n.resolve||{}}function zD(n,e,t,i,r,s){return Lt(o=>kD(n,e,t,i,o.extractedUrl,r,s).pipe(Qe(({state:a,tree:c})=>yt(ge({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function HD(n,e){return Lt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Oe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of B0(c))o.add(l);let a=0;return Nt(o).pipe(cs(c=>s.has(c)?GD(c,i,n,e):(c.data=Fl(c,c.parent,n).resolve,Oe(void 0))),Wt(()=>a++),ls(1),Lt(c=>a===o.size?Oe(t):on))})}function B0(n){let e=n.children.map(t=>B0(t)).flat();return[n,...e]}function GD(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!A0(r)&&(s[aa]=r.title),WD(s,n,e,i).pipe(Qe(o=>(n._resolvedData=o,n.data=Fl(n,n.parent,t).resolve,null)))}function WD(n,e,t,i){let r=rp(n);if(r.length===0)return Oe({});let s={};return Nt(r).pipe(Lt(o=>jD(n[o],e,t,i).pipe(vi(),Wt(a=>{if(a instanceof ra)throw Ul(new Rs,a);s[o]=a}))),ls(1),Qe(()=>s),Hi(o=>L0(o)?on:os(o)))}function jD(n,e,t,i){let r=ca(e)??i,s=Fs(n,r),o=s.resolve?s.resolve(e,t):Gn(r,()=>s(e,t));return er(o)}function np(n){return Bn(e=>{let t=n(e);return t?Nt(t).pipe(Qe(()=>e)):Oe(e)})}var V0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ue);return i}getResolvedTitleForRoute(t){return t.data[aa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie($D),providedIn:"root"})}return n})(),$D=(()=>{class n extends V0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(He(o0))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gl=new Ie("",{providedIn:"root",factory:()=>({})}),z0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Dn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&jn(0,"router-outlet")},dependencies:[R0],encapsulation:2})}return n})();function Ap(n){let e=n.children&&n.children.map(Ap),t=e?yt(ge({},n),{children:e}):ge({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=z0),t}var Wl=new Ie(""),H0=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(k_);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Oe(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=er(t.loadComponent()).pipe(Qe(G0),Wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),_o(()=>{this.componentLoaders.delete(t)})),r=new ss(i,()=>new Ht).pipe(rs());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Oe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=qD(i,this.compiler,t,this.onLoadEndListener).pipe(_o(()=>{this.childrenLoaders.delete(i)})),o=new ss(s,()=>new Ht).pipe(rs());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qD(n,e,t,i){return er(n.loadChildren()).pipe(Qe(G0),Lt(r=>r instanceof kh||Array.isArray(r)?Oe(r):Nt(e.compileModuleAsync(r))),Qe(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Wl,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ap),injector:s}}))}function XD(n){return n&&typeof n=="object"&&"default"in n}function G0(n){return XD(n)?n.default:n}var Rp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie(YD),providedIn:"root"})}return n})(),YD=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),W0=new Ie("");var j0=new Ie(""),$0=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Ht;transitionAbortSubject=new Ht;configLoader=ie(H0);environmentInjector=ie(Cn);destroyRef=ie(nl);urlSerializer=ie(Vl);rootContexts=ie(la);location=ie(bs);inputBindingEnabled=ie(zl,{optional:!0})!==null;titleStrategy=ie(V0);options=ie(Gl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(Rp);createViewTransition=ie(W0,{optional:!0});navigationErrorHandler=ie(j0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Oe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new fp(r)),i=r=>this.events.next(new hp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(yt(ge({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new Gt(null),this.transitions.pipe(Un(i=>i!==null),Bn(i=>{let r=!1,s=!1;return Oe(i).pipe(Bn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",pn.SupersededByNewNavigation),on;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?yt(ge({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Qi(o.id,this.urlSerializer.serialize(o.rawUrl),l,Nl.IgnoredSameUrlNavigation)),o.resolve(!1),on}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Oe(o).pipe(Bn(l=>(this.events.next(new Ps(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?on:Promise.resolve(l))),zD(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=yt(ge({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Pl(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:h,extras:f}=o,g=new Ps(l,this.urlSerializer.serialize(u),d,h);this.events.next(g);let y=D0(this.rootComponentType).snapshot;return this.currentTransition=i=yt(ge({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:yt(ge({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Oe(i)}else{let l="";return this.events.next(new Qi(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Nl.IgnoredByUrlHandlingStrategy)),o.resolve(!1),on}}),Wt(o=>{let a=new cp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Qe(o=>(this.currentTransition=i=yt(ge({},o),{guards:aD(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),yD(this.environmentInjector,o=>this.events.next(o)),Wt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Ul(this.urlSerializer,o.guardsResult);let a=new lp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Un(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",pn.GuardRejected),!1)),np(o=>{if(o.guards.canActivateChecks.length!==0)return Oe(o).pipe(Wt(a=>{let c=new up(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),Bn(a=>{let c=!1;return Oe(a).pipe(HD(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",pn.NoDataFromResolver)}}))}),Wt(a=>{let c=new dp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),np(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(Wt(u=>{c.component=u}),Qe(()=>{})));for(let u of c.children)l.push(...a(u));return l};return gc(a(o.targetSnapshot.root)).pipe(Gi(null),gi(1))}),np(()=>this.afterPreactivation()),Bn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Nt(c).pipe(Qe(()=>i)):Oe(i)}),Qe(o=>{let a=nD(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=yt(ge({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),Wt(()=>{this.events.next(new na)}),oD(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),gi(1),Wt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ki(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),df(this.transitionAbortSubject.pipe(Wt(o=>{throw o}))),_o(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",pn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Hi(o=>{if(this.destroyed)return i.resolve(!1),on;if(s=!0,O0(o))this.events.next(new bi(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),sD(o)?this.events.next(new Os(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new ta(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=Gn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof ra){let{message:l,cancellationCode:u}=Ul(this.urlSerializer,c);this.events.next(new bi(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new Os(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return on}))}))}cancelNavigationTransition(t,i,r){let s=new bi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ZD(n){return n!==Il}var JD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie(KD),providedIn:"root"})}return n})(),Dp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},KD=(()=>{class n extends Dp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=gh(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),q0=(()=>{class n{urlSerializer=ie(Vl);options=ie(Gl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(bs);urlHandlingStrategy=ie(Rp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new wi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof wi?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=D0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>ie(QD),providedIn:"root"})}return n})(),QD=(()=>{class n extends q0{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Ps?this.updateStateMemento():t instanceof Qi?this.commitTransition(i):t instanceof Pl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof na?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof bi&&(t.code===pn.GuardRejected||t.code===pn.NoDataFromResolver)?this.restoreHistory(i):t instanceof ta?this.restoreHistory(i,!0):t instanceof Ki&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=ge(ge({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=ge(ge({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=gh(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function X0(n,e){n.events.pipe(Un(t=>t instanceof Ki||t instanceof bi||t instanceof ta||t instanceof Qi),Qe(t=>t instanceof Ki||t instanceof Qi?0:(t instanceof bi?t.code===pn.Redirect||t.code===pn.SupersededByNewNavigation:!1)?2:1),Un(t=>t!==2),gi(1)).subscribe(()=>{e()})}var eI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},tI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Np=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(N_);stateManager=ie(q0);options=ie(Gl,{optional:!0})||{};pendingTasks=ie(Ms);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie($0);urlSerializer=ie(Vl);location=ie(bs);urlHandlingStrategy=ie(Rp);_events=new Ht;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(JD);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(Wl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(zl,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Rt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof bi&&i.code!==pn.Redirect&&i.code!==pn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ki)this.navigated=!0;else if(i instanceof Os){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ge({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ZD(r.source)},o);this.scheduleNavigation(a,Il,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}iI(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Il,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ge({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ap),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ge(ge({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let h=r?r.snapshot:this.routerState.snapshot.root;d=b0(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return w0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Ns(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Il,null,i)}navigate(t,i={skipLocationChange:!1}){return nI(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ge({},eI):i===!1?r=ge({},tI):r=i,Ns(t))return a0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return a0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,h)=>{a=d,c=h});let u=this.pendingTasks.add();return X0(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new be(4008,!1)}function iI(n){return!(n instanceof na)&&!(n instanceof Os)}var rI=new Ie("");function Pp(n,...e){return sh([{provide:Wl,multi:!0,useValue:n},[],{provide:Rr,useFactory:sI,deps:[Np]},{provide:Uh,multi:!0,useFactory:oI},e.map(t=>t.\u0275providers)])}function sI(n){return n.routerState.root}function oI(){let n=ie($i);return e=>{let t=n.get(Cr);if(e!==t.components[0])return;let i=n.get(Np),r=n.get(aI);n.get(cI)===1&&i.initialNavigation(),n.get(lI,null,ze.Optional)?.setUpPreloading(),n.get(rI,null,ze.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var aI=new Ie("",{factory:()=>new Ht}),cI=new Ie("",{providedIn:"root",factory:()=>1});var lI=new Ie("");var Y0=[];var Z0={providers:[B_({eventCoalescing:!0}),Pp(Y0)]};var Fu="175";var vx=0,lm=1,yx=2;var um=1,_x=2,ci=3,Ni=0,rn=1,li=2,Li=0,Ur=1,Fa=2,dm=3,fm=4,xx=5,lr=100,Mx=101,Sx=102,Ex=103,bx=104,wx=200,Tx=201,Cx=202,Dx=203,fu=204,hu=205,Ix=206,Ax=207,Rx=208,Nx=209,Px=210,Ox=211,Lx=212,Fx=213,kx=214,ku=0,Uu=1,Bu=2,Br=3,Vu=4,zu=5,Hu=6,Gu=7,hm=0,Ux=1,Bx=2,Fi=0,Vx=1,zx=2,Hx=3,Gx=4,Wx=5,jx=6,$x=7;var em=300,Wr=301,jr=302,Wu=303,ju=304,ka=306,pu=1e3,cr=1001,mu=1002,Nn=1003,qx=1004;var Ua=1005;var Jn=1006,$u=1007;var pr=1008;var ui=1009,pm=1010,mm=1011,ro=1012,qu=1013,mr=1014,di=1015,so=1016,Xu=1017,Yu=1018,oo=1020,gm=35902,vm=1021,ym=1022,On=1023,_m=1024,xm=1025,Js=1026,ao=1027,Mm=1028,Zu=1029,Sm=1030,Ju=1031;var Ku=1033,Ba=33776,Va=33777,za=33778,Ha=33779,Qu=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,od=37808,ad=37809,cd=37810,ld=37811,ud=37812,dd=37813,fd=37814,hd=37815,pd=37816,md=37817,gd=37818,vd=37819,yd=37820,_d=37821,Ga=36492,xd=36494,Md=36495,Em=36283,Sd=36284,Ed=36285,bd=36286;var va=2300,gu=2301,du=2302,tm=2400,nm=2401,im=2402;var Xx=3200,Yx=3201;var Zx=0,Jx=1,ki="",vn="srgb",Vr="srgb-linear",ya="linear",dt="srgb";var Fr=7680;var rm=519,Kx=512,Qx=513,eM=514,bm=515,tM=516,nM=517,iM=518,rM=519,sm=35044;var wm="300 es",oi=2e3,_a=2001;var Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],J0=1234567,ma=Math.PI/180,Ks=180/Math.PI;function co(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Tm(n,e){return(n%e+e)%e}function dI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function fI(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function hI(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function pI(n,e=1){return e-Math.abs(Tm(n,e*2)-e)}function mI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yI(n,e){return n+Math.random()*(e-n)}function _I(n){return n*(.5-Math.random())}function xI(n){n!==void 0&&(J0=n);let e=J0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MI(n){return n*ma}function SI(n){return n*Ks}function EI(n){return(n&n-1)===0&&n!==0}function bI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wI(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TI(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cm={DEG2RAD:ma,RAD2DEG:Ks,generateUUID:co,clamp:We,euclideanModulo:Tm,mapLinear:dI,inverseLerp:fI,lerp:ga,damp:hI,pingpong:pI,smoothstep:mI,smootherstep:gI,randInt:vI,randFloat:yI,randFloatSpread:_I,seededRandom:xI,degToRad:MI,radToDeg:SI,isPowerOfTwo:EI,ceilPowerOfTwo:bI,floorPowerOfTwo:wI,setQuaternionFromProperEuler:TI,normalize:nn,denormalize:Ys},ht=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=r[0],m=r[3],p=r[6],T=r[1],b=r[4],E=r[7],P=r[2],A=r[5],C=r[8];return s[0]=o*y+a*T+c*P,s[3]=o*m+a*b+c*A,s[6]=o*p+a*E+c*C,s[1]=l*y+u*T+d*P,s[4]=l*m+u*b+d*A,s[7]=l*p+u*E+d*C,s[2]=h*y+f*T+g*P,s[5]=h*m+f*b+g*A,s[8]=h*p+f*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Op.makeScale(e,t)),this}rotate(e){return this.premultiply(Op.makeRotation(-e)),this}translate(e,t){return this.premultiply(Op.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Op=new Fe;function Dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sM(){let n=Qs("canvas");return n.style.display="block",n}var K0={};function Wa(n){n in K0||(K0[n]=!0,console.warn(n))}function oM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function aM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Q0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ex=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CI(){let n={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?ya:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vr]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:Q0,fromXYZ:ex,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Q0,fromXYZ:ex,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}var et=CI();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ks,vu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Qs("canvas")),ks.width=e.width,ks.height=e.height;let r=ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},DI=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DI++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lp(r[o].image)):s.push(Lp(r[o]))}else s=Lp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Lp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var II=0,Ui=(()=>{class n extends Pi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=cr,s=cr,o=Jn,a=pr,c=On,l=ui,u=n.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:II++}),this.uuid=co(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==em)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pu:t.x=t.x-Math.floor(t.x);break;case cr:t.x=t.x<0?0:1;break;case mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pu:t.y=t.y-Math.floor(t.y);break;case cr:t.y=t.y<0?0:1;break;case mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=em,n.DEFAULT_ANISOTROPY=1,n})(),wt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(f+1)/2,P=(p+1)/2,A=(u+h)/4,C=(d+y)/4,O=(g+m)/4;return b>E&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=C/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=O/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-y)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yu=class extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ui(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends yu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends Ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _u=class extends Ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*y,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let P=Math.sqrt(b),A=Math.atan2(P,p*T);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let E=a*T;if(c=c*m+h*E,l=l*m+f*E,u=u*m+g*E,d=d*m+y*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fp.copy(this).projectOnVector(e),this.sub(Fp)}reflect(e){return this.sub(Fp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fp=new k,tx=new Oi,ur=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jl.copy(i.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),$l.subVectors(this.max,da),Us.subVectors(e.a,da),Bs.subVectors(e.b,da),Vs.subVectors(e.c,da),tr.subVectors(Bs,Us),nr.subVectors(Vs,Bs),Nr.subVectors(Us,Vs);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Nr.z,Nr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Nr.z,0,-Nr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Nr.y,Nr.x,0];return!kp(t,Us,Bs,Vs,$l)||(t=[1,0,0,0,1,0,0,0,1],!kp(t,Us,Bs,Vs,$l))?!1:(ql.crossVectors(tr,nr),t=[ql.x,ql.y,ql.z],kp(t,Us,Bs,Vs,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new k,new k,new k,new k,new k,new k,new k,new k],Xn=new k,jl=new ur,Us=new k,Bs=new k,Vs=new k,tr=new k,nr=new k,Nr=new k,da=new k,$l=new k,ql=new k,Pr=new k;function kp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pr.fromArray(n,s);let a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),c=e.dot(Pr),l=t.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var AI=new ur,fa=new k,Up=new k,zr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):AI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Up.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Up)),this.expandByPoint(fa.copy(e.center).sub(Up))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new k,Bp=new k,Xl=new k,ir=new k,Vp=new k,Yl=new k,zp=new k,Ma=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bp.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Bp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xl),a=ir.dot(this.direction),c=-ir.dot(Xl),l=ir.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bp).addScaledVector(Xl,h),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){Vp.subVectors(t,e),Yl.subVectors(i,e),zp.crossVectors(Vp,Yl);let o=this.direction.dot(zp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);let c=a*this.direction.dot(Yl.crossVectors(ir,Yl));if(c<0)return null;let l=a*this.direction.dot(Vp.cross(ir));if(l<0||c+l>o)return null;let u=-a*ir.dot(zp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RI,e,NI)}lookAt(e,t,i){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),rr.crossVectors(i,mn),rr.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),rr.crossVectors(i,mn)),rr.normalize(),Zl.crossVectors(mn,rr),r[0]=rr.x,r[4]=Zl.x,r[8]=mn.x,r[1]=rr.y,r[5]=Zl.y,r[9]=mn.y,r[2]=rr.z,r[6]=Zl.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],T=i[3],b=i[7],E=i[11],P=i[15],A=r[0],C=r[4],O=r[8],M=r[12],x=r[1],D=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],J=r[14],z=r[3],re=r[7],de=r[11],xe=r[15];return s[0]=o*A+a*x+c*X+l*z,s[4]=o*C+a*D+c*Y+l*re,s[8]=o*O+a*G+c*j+l*de,s[12]=o*M+a*B+c*J+l*xe,s[1]=u*A+d*x+h*X+f*z,s[5]=u*C+d*D+h*Y+f*re,s[9]=u*O+d*G+h*j+f*de,s[13]=u*M+d*B+h*J+f*xe,s[2]=g*A+y*x+m*X+p*z,s[6]=g*C+y*D+m*Y+p*re,s[10]=g*O+y*G+m*j+p*de,s[14]=g*M+y*B+m*J+p*xe,s[3]=T*A+b*x+E*X+P*z,s[7]=T*C+b*D+E*Y+P*re,s[11]=T*O+b*G+E*j+P*de,s[15]=T*M+b*B+E*J+P*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+y*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],T=d*m*l-y*h*l+y*c*f-a*m*f-d*c*p+a*h*p,b=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,E=u*y*l-g*d*l+g*a*f-o*y*f-u*a*p+o*d*p,P=g*d*c-u*y*c-g*a*h+o*y*h+u*a*m-o*d*m,A=t*T+i*b+r*E+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=T*C,e[1]=(y*h*s-d*m*s-y*r*f+i*m*f+d*r*p-i*h*p)*C,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*C,e[4]=b*C,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*C,e[8]=E*C,e[9]=(g*d*s-u*y*s-g*i*f+t*y*f+u*i*p-t*d*p)*C,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*C,e[12]=P*C,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,y=o*u,m=o*d,p=a*d,T=c*l,b=c*u,E=c*d,P=i.x,A=i.y,C=i.z;return r[0]=(1-(y+p))*P,r[1]=(f+E)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(f-E)*A,r[5]=(1-(h+p))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+b)*C,r[9]=(m-T)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=zs.set(r[0],r[1],r[2]).length(),o=zs.set(r[4],r[5],r[6]).length(),a=zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);let l=1/s,u=1/o,d=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===oi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_a)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,y;if(a===oi)g=(o+s)*d,y=-2*d;else if(a===_a)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zs=new k,Yn=new It,RI=new k(0,0,0),NI=new k(1,1,1),rr=new k,Zl=new k,mn=new k,nx=new It,ix=new Oi,Hr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return nx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ix.setFromEuler(this),this.setFromQuaternion(ix,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},PI=0,rx=new k,Hs=new Oi,Di=new It,Jl=new k,ha=new k,OI=new k,LI=new Oi,sx=new k(1,0,0),ox=new k(0,1,0),ax=new k(0,0,1),cx={type:"added"},FI={type:"removed"},Gs={type:"childadded",child:null},Hp={type:"childremoved",child:null},Bi=(()=>{class n extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PI++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new Hr,r=new Oi,s=new k(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Fe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(sx,t)}rotateY(t){return this.rotateOnAxis(ox,t)}rotateZ(t){return this.rotateOnAxis(ax,t)}translateOnAxis(t,i){return rx.copy(t).applyQuaternion(this.quaternion),this.position.add(rx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(sx,t)}translateY(t){return this.translateOnAxis(ox,t)}translateZ(t){return this.translateOnAxis(ax,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jl.copy(t):Jl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ha,Jl,this.up):Di.lookAt(Jl,ha,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Di),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cx),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FI),Hp.child=t,this.dispatchEvent(Hp),Hp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cx),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,OI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,LI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Zn=new k,Ii=new k,Gp=new k,Ai=new k,Ws=new k,js=new k,lx=new k,Wp=new k,jp=new k,$p=new k,qp=new wt,Xp=new wt,Yp=new wt,ar=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zn.subVectors(e,t),r.cross(Zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zn.subVectors(r,t),Ii.subVectors(i,t),Gp.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(Ii),c=Zn.dot(Gp),l=Ii.dot(Ii),u=Ii.dot(Gp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return qp.setScalar(0),Xp.setScalar(0),Yp.setScalar(0),qp.fromBufferAttribute(e,t),Xp.fromBufferAttribute(e,i),Yp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qp,s.x),o.addScaledVector(Xp,s.y),o.addScaledVector(Yp,s.z),o}static isFrontFacing(e,t,i,r){return Zn.subVectors(i,t),Ii.subVectors(e,t),Zn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Zn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ws.subVectors(r,i),js.subVectors(s,i),Wp.subVectors(e,i);let c=Ws.dot(Wp),l=js.dot(Wp);if(c<=0&&l<=0)return t.copy(i);jp.subVectors(e,r);let u=Ws.dot(jp),d=js.dot(jp);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ws,o);$p.subVectors(e,s);let f=Ws.dot($p),g=js.dot($p);if(g>=0&&f<=g)return t.copy(s);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(js,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return lx.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(lx,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(i).addScaledVector(Ws,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Zp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Tm(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zp(o,s,e+1/3),this.g=Zp(o,s,e),this.b=Zp(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let i=lM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return et.fromWorkingColorSpace(Zt.copy(this),e),Math.round(We(Zt.r*255,0,255))*65536+Math.round(We(Zt.g*255,0,255))*256+Math.round(We(Zt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Zt.copy(this),t);let i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=vn){et.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,r=Zt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Kl);let i=ga(sr.h,Kl.h,t),r=ga(sr.s,Kl.s,t),s=ga(sr.l,Kl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new tt;tt.NAMES=lM;var kI=0,dr=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kI++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Ur,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=hu,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fu&&(i.blendSrc=this.blendSrc),this.blendDst!==hu&&(i.blendDst=this.blendDst),this.blendEquation!==lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ea=class extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new k,Ql=new ht,UI=0,yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UI++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sm,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}};var ba=class extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wa=class extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Rn=class extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}},BI=0,An=new It,Jp=new Bi,$s=new k,gn=new ur,pa=new ur,Vt=new k,Kn=class n extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BI++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?wa:ba)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Jp.lookAt(e),Jp.updateMatrix(),this.applyMatrix4(Jp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(gn.min,pa.min),gn.expandByPoint(Vt),Vt.addVectors(gn.max,pa.max),gn.expandByPoint(Vt)):(gn.expandByPoint(pa.min),gn.expandByPoint(pa.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(e,l),Vt.add($s)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new k,c[O]=new k;let l=new k,u=new k,d=new k,h=new ht,f=new ht,g=new ht,y=new k,m=new k;function p(O,M,x){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,O),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(y),a[M].add(y),a[x].add(y),c[O].add(m),c[M].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,M=T.length;O<M;++O){let x=T[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new k,E=new k,P=new k,A=new k;function C(O){P.fromBufferAttribute(r,O),A.copy(P);let M=a[O];b.copy(M),b.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(A,M);let D=E.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,M=T.length;O<M;++O){let x=T[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new yn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ux=new It,Or=new Ma,eu=new zr,dx=new k,tu=new k,nu=new k,iu=new k,Kp=new k,ru=new k,fx=new k,su=new k,Pn=class extends Bi{constructor(e=new Kn,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ru.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Kp.fromBufferAttribute(d,e),o?ru.addScaledVector(Kp,u):ru.addScaledVector(Kp.sub(t),u))}t.add(ru)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(eu.containsPoint(Or.origin)===!1&&(Or.intersectSphere(eu,dx)===null||Or.origin.distanceToSquared(dx)>(e.far-e.near)**2))&&(ux.copy(s).invert(),Or.copy(e.ray).applyMatrix4(ux),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,P=b;E<P;E+=3){let A=a.getX(E),C=a.getX(E+1),O=a.getX(E+2);r=ou(this,p,e,i,l,u,d,A,C,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);r=ou(this,o,e,i,l,u,d,T,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,P=b;E<P;E+=3){let A=E,C=E+1,O=E+2;r=ou(this,p,e,i,l,u,d,A,C,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=m,b=m+1,E=m+2;r=ou(this,o,e,i,l,u,d,T,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function VI(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ni,a),c===null)return null;su.copy(a),su.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(su);return l<t.near||l>t.far?null:{distance:l,point:su.clone(),object:n}}function ou(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,tu),n.getVertexPosition(c,nu),n.getVertexPosition(l,iu);let u=VI(n,e,t,i,tu,nu,iu,fx);if(u){let d=new k;ar.getBarycoord(fx,tu,nu,iu,d),r&&(u.uv=ar.getInterpolatedAttribute(r,a,c,l,d,new ht)),s&&(u.uv1=ar.getInterpolatedAttribute(s,a,c,l,d,new ht)),o&&(u.normal=ar.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new k,materialIndex:0};ar.getNormal(tu,nu,iu,h.normal),u.face=h,u.barycoord=d}return u}var to=class n extends Kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rn(l,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function g(y,m,p,T,b,E,P,A,C,O,M){let x=E/C,D=P/O,G=E/2,B=P/2,X=A/2,Y=C+1,j=O+1,J=0,z=0,re=new k;for(let de=0;de<j;de++){let xe=de*D-B;for(let Ge=0;Ge<Y;Ge++){let pt=Ge*x-G;re[y]=pt*T,re[m]=xe*b,re[p]=X,l.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[p]=A>0?1:-1,u.push(re.x,re.y,re.z),d.push(Ge/C),d.push(1-de/O),J+=1}}for(let de=0;de<O;de++)for(let xe=0;xe<C;xe++){let Ge=h+xe+Y*de,pt=h+xe+Y*(de+1),W=h+(xe+1)+Y*(de+1),ee=h+(xe+1)+Y*de;c.push(Ge,pt,ee),c.push(pt,W,ee),z+=6}a.addGroup(f,z,M),f+=z,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $r(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=$r(n[t]);for(let r in i)e[r]=i[r]}return e}function zI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Im(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var uM={clone:$r,merge:Kt},HI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HI,this.fragmentShader=GI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=zI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ta=class extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new k,hx=new ht,px=new ht,Jt=class extends Ta{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,hx,px),t.subVectors(px,hx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Xs=1,xu=class extends Bi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(qs,Xs,e,t);r.layers=this.layers,this.add(r);let s=new Jt(qs,Xs,e,t);s.layers=this.layers,this.add(s);let o=new Jt(qs,Xs,e,t);o.layers=this.layers,this.add(o);let a=new Jt(qs,Xs,e,t);a.layers=this.layers,this.add(a);let c=new Jt(qs,Xs,e,t);c.layers=this.layers,this.add(c);let l=new Jt(qs,Xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ca=class extends Ui{constructor(e=[],t=Wr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mu=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Li});s.uniforms.tEquirect.value=t;let o=new Pn(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=Jn),new xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},kr=class extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},WI={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WI)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Da=class extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qp=new k,jI=new k,$I=new Fe,si=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Qp.subVectors(i,t).cross(jI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Qp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$I.getNormalMatrix(e),r=this.coplanarPoint(Qp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Lr=new zr,au=new k,Ia=class{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],y=r[10],m=r[11],p=r[12],T=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,m-f,E-p).normalize(),i[1].setComponents(c+s,h+l,m+f,E+p).normalize(),i[2].setComponents(c+o,h+u,m+g,E+T).normalize(),i[3].setComponents(c-o,h-u,m-g,E-T).normalize(),i[4].setComponents(c-a,h-d,m-y,E-b).normalize(),t===oi)i[5].setComponents(c+a,h+d,m+y,E+b).normalize();else if(t===_a)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(au.x=r.normal.x>0?e.max.x:e.min.x,au.y=r.normal.y>0?e.max.y:e.min.y,au.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var io=class extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mx=new It,om=new Ma,cu=new zr,lu=new k,Aa=class extends Bi{constructor(e=new Kn,t=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cu.copy(i.boundingSphere),cu.applyMatrix4(r),cu.radius+=s,e.ray.intersectsSphere(cu)===!1)return;mx.copy(r).invert(),om.copy(e.ray).applyMatrix4(mx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,y=f;g<y;g++){let m=l.getX(g);lu.fromBufferAttribute(d,m),gx(lu,m,c,r,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,y=f;g<y;g++)lu.fromBufferAttribute(d,g),gx(lu,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gx(n,e,t,i,r,s,o){let a=om.distanceSqToPoint(n);if(a<t){let c=new k;om.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Ui{constructor(e,t,i=mr,r,s,o,a=Nn,c=Nn,l,u=Js){if(u!==Js&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Na=class n extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let T=p*h-o;for(let b=0;b<l;b++){let E=b*d-s;g.push(E,-T,0),y.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let b=T+l*p,E=T+l*(p+1),P=T+1+l*(p+1),A=T+1+l*p;f.push(b,E,A),f.push(E,P,A)}this.setIndex(f),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(y,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Su=class extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eu=class extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function uu(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tm,endingEnd:tm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case nm:s=e,a=2*t-i;break;case im:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case nm:o=e,c=2*i-t;break;case im:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,T=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,E=f*m-f*y;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+T*o[l+P]+b*o[c+P]+E*o[d+P];return s}},wu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Tu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uu(t,this.TimeBufferType),this.values=uu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:uu(e.times,Array),values:uu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case gu:t=this.InterpolantFactoryMethodLinear;break;case du:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return gu;case this.InterpolantFactoryMethodSmooth:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&qI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===du,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=gu;var fr=class extends _n{constructor(e,t,i){super(e,t,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=va;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cu=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}};Cu.prototype.ValueTypeName="color";var Du=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}};Du.prototype.ValueTypeName="number";var Iu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Oi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Pa=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends _n{constructor(e,t,i){super(e,t,i)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=va;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Au=class extends _n{constructor(e,t,i,r){super(e,t,i,r)}};Au.prototype.ValueTypeName="vector";var am={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ru=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},dM=new Ru,Am=(()=>{class n{constructor(t){this.manager=t!==void 0?t:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var Nu=class extends Am{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=am.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Qs("img");function c(){u(),am.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Oa=class extends Am{constructor(e){super(e)}load(e,t,i,r){let s=new Ui,o=new Nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Pu=class extends Bi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Ou=class extends Ta{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var La=class extends Pu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lu=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Rm="\\[\\]\\.:\\/",XI=new RegExp("["+Rm+"]","g"),Nm="[^"+Rm+"]",YI="[^"+Rm.replace("\\.","")+"]",ZI=/((?:WC+[\/:])*)/.source.replace("WC",Nm),JI=/(WCOD+)?/.source.replace("WCOD",YI),KI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nm),QI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nm),eA=new RegExp("^"+ZI+JI+KI+QI+"$"),tA=["material","materials","bones","map"],cm=class{constructor(e,t,i){let r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XI,"")}static parseTrackName(t){let i=eA.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);tA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=cm,n})();bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $V=new Float32Array(1);function Pm(n,e,t,i){let r=nA(i);switch(t){case vm:return n*e;case _m:return n*e;case xm:return n*e*2;case Mm:return n*e/r.components*r.byteLength;case Zu:return n*e/r.components*r.byteLength;case Sm:return n*e*2/r.components*r.byteLength;case Ju:return n*e*2/r.components*r.byteLength;case ym:return n*e*3/r.components*r.byteLength;case On:return n*e*4/r.components*r.byteLength;case Ku:return n*e*4/r.components*r.byteLength;case Ba:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(n,16)*Math.max(e,8)/4;case Qu:case td:return Math.max(n,8)*Math.max(e,8)/2;case id:case rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ga:case xd:case Md:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Em:case Sd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ed:case bd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nA(n){switch(n){case ui:case pm:return{byteLength:1,components:1};case ro:case mm:case so:return{byteLength:2,components:1};case Xu:case Yu:return{byteLength:2,components:4};case mr:case qu:case di:return{byteLength:4,components:1};case gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);function LM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iA(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var rA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sA=`#ifdef USE_ALPHAHASH
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
#endif`,oA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
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
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fA=`#ifdef USE_BATCHING
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
#endif`,hA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vA=`#ifdef USE_IRIDESCENCE
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
#endif`,yA=`#ifdef USE_BUMPMAP
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
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CA=`#define PI 3.141592653589793
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
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IA=`vec3 transformedNormal = objectNormal;
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
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OA="gl_FragColor = linearToOutputTexel( gl_FragColor );",LA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FA=`#ifdef USE_ENVMAP
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
#endif`,kA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,BA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
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
}`,$A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YA=`uniform bool receiveShadow;
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
#endif`,ZA=`#ifdef USE_ENVMAP
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
#endif`,JA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tR=`PhysicalMaterial material;
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
#endif`,nR=`struct PhysicalMaterial {
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
}`,iR=`
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
#endif`,rR=`#if defined( RE_IndirectDiffuse )
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
#endif`,sR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hR=`#if defined( USE_POINTS_UV )
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
#endif`,pR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_R=`#ifdef USE_MORPHTARGETS
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
#endif`,xR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ER=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TR=`#ifdef USE_NORMALMAP
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
#endif`,CR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HR=`float getShadowMask() {
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
}`,GR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WR=`#ifdef USE_SKINNING
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
#endif`,jR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$R=`#ifdef USE_SKINNING
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
#endif`,qR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JR=`#ifdef USE_TRANSMISSION
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
#endif`,KR=`#ifdef USE_TRANSMISSION
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
#endif`,QR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,u1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,S1=`#define MATCAP
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
}`,E1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,D1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,A1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,O1=`uniform vec3 color;
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
}`,L1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:rA,alphahash_pars_fragment:sA,alphamap_fragment:oA,alphamap_pars_fragment:aA,alphatest_fragment:cA,alphatest_pars_fragment:lA,aomap_fragment:uA,aomap_pars_fragment:dA,batching_pars_vertex:fA,batching_vertex:hA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:vA,bumpmap_pars_fragment:yA,clipping_planes_fragment:_A,clipping_planes_pars_fragment:xA,clipping_planes_pars_vertex:MA,clipping_planes_vertex:SA,color_fragment:EA,color_pars_fragment:bA,color_pars_vertex:wA,color_vertex:TA,common:CA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:IA,displacementmap_pars_vertex:AA,displacementmap_vertex:RA,emissivemap_fragment:NA,emissivemap_pars_fragment:PA,colorspace_fragment:OA,colorspace_pars_fragment:LA,envmap_fragment:FA,envmap_common_pars_fragment:kA,envmap_pars_fragment:UA,envmap_pars_vertex:BA,envmap_physical_pars_fragment:ZA,envmap_vertex:VA,fog_vertex:zA,fog_pars_vertex:HA,fog_fragment:GA,fog_pars_fragment:WA,gradientmap_pars_fragment:jA,lightmap_pars_fragment:$A,lights_lambert_fragment:qA,lights_lambert_pars_fragment:XA,lights_pars_begin:YA,lights_toon_fragment:JA,lights_toon_pars_fragment:KA,lights_phong_fragment:QA,lights_phong_pars_fragment:eR,lights_physical_fragment:tR,lights_physical_pars_fragment:nR,lights_fragment_begin:iR,lights_fragment_maps:rR,lights_fragment_end:sR,logdepthbuf_fragment:oR,logdepthbuf_pars_fragment:aR,logdepthbuf_pars_vertex:cR,logdepthbuf_vertex:lR,map_fragment:uR,map_pars_fragment:dR,map_particle_fragment:fR,map_particle_pars_fragment:hR,metalnessmap_fragment:pR,metalnessmap_pars_fragment:mR,morphinstance_vertex:gR,morphcolor_vertex:vR,morphnormal_vertex:yR,morphtarget_pars_vertex:_R,morphtarget_vertex:xR,normal_fragment_begin:MR,normal_fragment_maps:SR,normal_pars_fragment:ER,normal_pars_vertex:bR,normal_vertex:wR,normalmap_pars_fragment:TR,clearcoat_normal_fragment_begin:CR,clearcoat_normal_fragment_maps:DR,clearcoat_pars_fragment:IR,iridescence_pars_fragment:AR,opaque_fragment:RR,packing:NR,premultiplied_alpha_fragment:PR,project_vertex:OR,dithering_fragment:LR,dithering_pars_fragment:FR,roughnessmap_fragment:kR,roughnessmap_pars_fragment:UR,shadowmap_pars_fragment:BR,shadowmap_pars_vertex:VR,shadowmap_vertex:zR,shadowmask_pars_fragment:HR,skinbase_vertex:GR,skinning_pars_vertex:WR,skinning_vertex:jR,skinnormal_vertex:$R,specularmap_fragment:qR,specularmap_pars_fragment:XR,tonemapping_fragment:YR,tonemapping_pars_fragment:ZR,transmission_fragment:JR,transmission_pars_fragment:KR,uv_pars_fragment:QR,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:r1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:c1,depth_vert:l1,depth_frag:u1,distanceRGBA_vert:d1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:v1,meshbasic_frag:y1,meshlambert_vert:_1,meshlambert_frag:x1,meshmatcap_vert:M1,meshmatcap_frag:S1,meshnormal_vert:E1,meshnormal_frag:b1,meshphong_vert:w1,meshphong_frag:T1,meshphysical_vert:C1,meshphysical_frag:D1,meshtoon_vert:I1,meshtoon_frag:A1,points_vert:R1,points_frag:N1,shadow_vert:P1,shadow_frag:O1,sprite_vert:L1,sprite_frag:F1},te={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fi={basic:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Kt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Kt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Kt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Kt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Kt([te.points,te.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Kt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Kt([te.common,te.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Kt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Kt([te.sprite,te.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Kt([te.common,te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Kt([te.lights,te.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fi.physical={uniforms:Kt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var wd={r:0,b:0,g:0},qr=new Hr,k1=new It;function U1(n,e,t,i,r,s,o){let a=new tt(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function y(b){let E=!1,P=g(b);P===null?p(a,c):P&&P.isColor&&(p(P,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){let P=g(E);P&&(P.isCubeTexture||P.mapping===ka)?(u===void 0&&(u=new Pn(new to(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:$r(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qr.copy(E.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(qr)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==dt,(d!==P||h!==P.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Pn(new Na(2,2),new Qn({name:"BackgroundMaterial",uniforms:$r(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(P.colorSpace)!==dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(wd,Im(n)),i.buffers.color.setClear(wd.r,wd.g,wd.b,E,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m,dispose:T}}function B1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(x,D,G,B,X){let Y=!1,j=d(B,G,D);s!==j&&(s=j,l(s.object)),Y=f(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,D,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let j=Y[B];return j===void 0&&(j=h(c()),Y[B]=j),j}function h(x){let D=[],G=[],B=[];for(let X=0;X<t;X++)D[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,D,G,B){let X=s.attributes,Y=D.attributes,j=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let de=X[z],xe=Y[z];if(xe===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,D,G,B){let X={},Y=D.attributes,j=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let de=Y[z];de===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),X[z]=xe,j++}s.attributes=X,s.attributesNum=j,s.index=B}function y(){let x=s.newAttributes;for(let D=0,G=x.length;D<G;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function T(){let x=s.newAttributes,D=s.enabledAttributes;for(let G=0,B=D.length;G<B;G++)D[G]!==x[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function b(x,D,G,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,D,G,X,Y):n.vertexAttribPointer(x,D,G,B,X,Y)}function E(x,D,G,B){y();let X=B.attributes,Y=G.getAttributes(),j=D.defaultAttributeValues;for(let J in Y){let z=Y[J];if(z.location>=0){let re=X[J];if(re===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){let de=re.normalized,xe=re.itemSize,Ge=e.get(re);if(Ge===void 0)continue;let pt=Ge.buffer,W=Ge.type,ee=Ge.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||re.gpuType===qu;if(re.isInterleavedBufferAttribute){let se=re.data,we=se.stride,st=re.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<z.locationSize;Ce++)p(z.location+Ce,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)m(z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ce=0;Ce<z.locationSize;Ce++)b(z.location+Ce,xe/z.locationSize,W,de,we*ee,(st+xe/z.locationSize*Ce)*ee,ve)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)p(z.location+se,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let se=0;se<z.locationSize;se++)b(z.location+se,xe/z.locationSize,W,de,xe*ee,xe/z.locationSize*se*ee,ve)}}else if(j!==void 0){let de=j[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}T()}function P(){O();for(let x in i){let D=i[x];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x.id]}function C(x){for(let D in i){let G=i[D];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function V1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*h[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let O=C===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ui&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!O)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:P,maxSamples:A}}function H1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new si,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let T=s?0:i,b=T*4,E=p.clippingState||null;c.value=E,E=u(g,h,b,f);for(let P=0;P!==b;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=f;b!==y;++b,E+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function G1(n){let e=new WeakMap;function t(o,a){return a===Wu?o.mapping=Wr:a===ju&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wu||a===ju)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Mu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var uo=4,fM=[.125,.215,.35,.446,.526,.582],Zr=20,Om=new Ou,hM=new tt,Lm=null,Fm=0,km=0,Um=!1,Yr=(1+Math.sqrt(5))/2,lo=1/Yr,pM=[new k(-Yr,lo,0),new k(Yr,lo,0),new k(-lo,0,Yr),new k(lo,0,Yr),new k(0,Yr,-lo),new k(0,Yr,lo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],W1=new k,Dd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=W1}=s;Lm=this._renderer.getRenderTarget(),Fm=this._renderer.getActiveCubeFace(),km=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lm,Fm,km),this._renderer.xr.enabled=Um,e.scissorTest=!1,Td(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lm=this._renderer.getRenderTarget(),Fm=this._renderer.getActiveCubeFace(),km=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:so,format:On,colorSpace:Vr,depthBuffer:!1},r=mM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(s)),this._blurMaterial=$1(s,e,t)}return r}_compileMaterial(e){let t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Om)}_sceneToCubeUV(e,t,i,r,s){let c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hM),d.toneMapping=Fi,d.autoClear=!1;let g=new Ea({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new Pn(new to,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(hM),m=!0);for(let T=0;T<6;T++){let b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));let E=this._cubeSize;Td(r,b*E,T>2?E:0,E,E),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Td(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Om)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pM[(r-s-1)%pM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Pn(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Zr;m>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zr}`);let p=[],T=0;for(let C=0;C<Zr;++C){let O=C/y,M=Math.exp(-O*O/2);p.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let E=this._sizeLods[r],P=3*E*(r>b-uo?r-b+uo:0),A=4*(this._cubeSize-E);Td(t,P,A,3*E,2*E),c.setRenderTarget(t),c.render(d,Om)}};function j1(n){let e=[],t=[],i=[],r=n,s=n-uo+1+fM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-uo?c=fM[o-n+uo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,m=2,p=1,T=new Float32Array(y*g*f),b=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,O=A>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];T.set(M,y*g*A),b.set(h,m*g*A);let x=[A,A,A,A,A,A];E.set(x,p*g*A)}let P=new Kn;P.setAttribute("position",new yn(T,y)),P.setAttribute("uv",new yn(b,m)),P.setAttribute("faceIndex",new yn(E,p)),e.push(P),r>uo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mM(n,e,t){let i=new ai(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Td(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $1(n,e,t){let i=new Float32Array(Zr),r=new k(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gM(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vM(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Xm(){return`

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
	`}function q1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wu||c===ju,u=c===Wr||c===jr;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Dd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Dd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function X1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Wa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Y1(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let T=f.array;y=f.version;for(let b=0,E=T.length;b<E;b+=3){let P=T[b+0],A=T[b+1],C=T[b+2];h.push(P,A,A,C,C,P)}}else if(g!==void 0){let T=g.array;y=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){let P=b+0,A=b+1,C=b+2;h.push(P,A,A,C,C,P)}}else return;let m=new(Dm(h)?wa:ba)(h,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Z1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,y,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*y[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function J1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function K1(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let C=new Float32Array(P*A*4*d),O=new xa(C,P,A,d);O.type=di,O.needsUpdate=!0;let M=E*4;for(let D=0;D<d;D++){let G=p[D],B=T[D],X=b[D],Y=P*A*4*D;for(let j=0;j<G.count;j++){let J=j*M;g===!0&&(r.fromBufferAttribute(G,j),C[Y+J+0]=r.x,C[Y+J+1]=r.y,C[Y+J+2]=r.z,C[Y+J+3]=0),y===!0&&(r.fromBufferAttribute(B,j),C[Y+J+4]=r.x,C[Y+J+5]=r.y,C[Y+J+6]=r.z,C[Y+J+7]=0),m===!0&&(r.fromBufferAttribute(X,j),C[Y+J+8]=r.x,C[Y+J+9]=r.y,C[Y+J+10]=r.z,C[Y+J+11]=X.itemSize===4?r.w:1)}}h={count:d,texture:O,size:new ht(P,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Q1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var FM=new Ui,yM=new Ra(1,1),kM=new xa,UM=new _u,BM=new Ca,_M=[],xM=[],MM=new Float32Array(16),SM=new Float32Array(9),EM=new Float32Array(4);function ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=_M[r];if(s===void 0&&(s=new Float32Array(r),_M[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ad(n,e){let t=xM[e];t===void 0&&(t=new Int32Array(e),xM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function nN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function iN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function rN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;EM.set(i),n.uniformMatrix2fv(this.addr,!1,EM),kt(t,i)}}function sN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;SM.set(i),n.uniformMatrix3fv(this.addr,!1,SM),kt(t,i)}}function oN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;MM.set(i),n.uniformMatrix4fv(this.addr,!1,MM),kt(t,i)}}function aN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function lN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function uN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function dN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function hN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function pN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function mN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yM.compareFunction=bm,s=yM):s=FM,t.setTexture2D(e||s,r)}function gN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||UM,r)}function vN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||BM,r)}function yN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kM,r)}function _N(n){switch(n){case 5126:return eN;case 35664:return tN;case 35665:return nN;case 35666:return iN;case 35674:return rN;case 35675:return sN;case 35676:return oN;case 5124:case 35670:return aN;case 35667:case 35671:return cN;case 35668:case 35672:return lN;case 35669:case 35673:return uN;case 5125:return dN;case 36294:return fN;case 36295:return hN;case 36296:return pN;case 35678:case 36198:case 36298:case 36306:case 35682:return mN;case 35679:case 36299:case 36307:return gN;case 35680:case 36300:case 36308:case 36293:return vN;case 36289:case 36303:case 36311:case 36292:return yN}}function xN(n,e){n.uniform1fv(this.addr,e)}function MN(n,e){let t=ho(e,this.size,2);n.uniform2fv(this.addr,t)}function SN(n,e){let t=ho(e,this.size,3);n.uniform3fv(this.addr,t)}function EN(n,e){let t=ho(e,this.size,4);n.uniform4fv(this.addr,t)}function bN(n,e){let t=ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wN(n,e){let t=ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TN(n,e){let t=ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CN(n,e){n.uniform1iv(this.addr,e)}function DN(n,e){n.uniform2iv(this.addr,e)}function IN(n,e){n.uniform3iv(this.addr,e)}function AN(n,e){n.uniform4iv(this.addr,e)}function RN(n,e){n.uniform1uiv(this.addr,e)}function NN(n,e){n.uniform2uiv(this.addr,e)}function PN(n,e){n.uniform3uiv(this.addr,e)}function ON(n,e){n.uniform4uiv(this.addr,e)}function LN(n,e,t){let i=this.cache,r=e.length,s=Ad(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||FM,s[o])}function FN(n,e,t){let i=this.cache,r=e.length,s=Ad(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||UM,s[o])}function kN(n,e,t){let i=this.cache,r=e.length,s=Ad(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||BM,s[o])}function UN(n,e,t){let i=this.cache,r=e.length,s=Ad(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kM,s[o])}function BN(n){switch(n){case 5126:return xN;case 35664:return MN;case 35665:return SN;case 35666:return EN;case 35674:return bN;case 35675:return wN;case 35676:return TN;case 5124:case 35670:return CN;case 35667:case 35671:return DN;case 35668:case 35672:return IN;case 35669:case 35673:return AN;case 5125:return RN;case 36294:return NN;case 36295:return PN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return FN;case 35680:case 36300:case 36308:case 36293:return kN;case 36289:case 36303:case 36311:case 36292:return UN}}var Vm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_N(t.type)}},zm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BN(t.type)}},Hm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Bm=/(\w+)(\])?(\[|\.)?/g;function bM(n,e){n.seq.push(e),n.map[e.id]=e}function VN(n,e,t){let i=n.name,r=i.length;for(Bm.lastIndex=0;;){let s=Bm.exec(i),o=Bm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){bM(t,l===void 0?new Vm(a,n,e):new zm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Hm(a),bM(t,d)),t=d}}}var fo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);VN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function wM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zN=37297,HN=0;function GN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var TM=new Fe;function WN(n){et._getMatrix(TM,et.workingColorSpace,n);let e=`mat3( ${TM.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function CM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GN(n.getShaderSource(e),o)}else return r}function jN(n,e){let t=WN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $N(n,e){let t;switch(e){case Vx:t="Linear";break;case zx:t="Reinhard";break;case Hx:t="Cineon";break;case Gx:t="ACESFilmic";break;case jx:t="AgX";break;case $x:t="Neutral";break;case Wx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cd=new k;function qN(){et.getLuminanceCoefficients(Cd);let n=Cd.x.toFixed(4),e=Cd.y.toFixed(4),t=Cd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function YN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ja(n){return n!==""}function DM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function IM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gm(n){return n.replace(JN,QN)}var KN=new Map;function QN(n,e){let t=Ve[e];if(t===void 0){let i=KN.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gm(t)}var eP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function AM(n){return n.replace(eP,tP)}function tP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function RM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===um?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function iP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function sP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ux:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function oP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function aP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=nP(t),l=iP(t),u=rP(t),d=sP(t),h=oP(t),f=XN(t),g=YN(s),y=r.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[RM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[RM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fi?$N("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,jN("linearToOutputTexel",t.outputColorSpace),qN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),o=Gm(o),o=DM(o,t),o=IM(o,t),a=Gm(a),a=DM(a,t),a=IM(a,t),o=AM(o),a=AM(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+m+o,E=T+p+a,P=wM(r,r.VERTEX_SHADER,b),A=wM(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(D){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(A).trim(),Y=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,P,A);else{let J=CM(r,P,"vertex"),z=CM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+J+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(j=!1);j&&(D.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(A),O=new fo(r,y),M=ZN(r,y)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,zN)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}var cP=0,Wm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jm(e),t.set(e,i)),i}},jm=class{constructor(e){this.id=cP++,this.code=e,this.usedTimes=0}};function lP(n,e,t,i,r,s,o){let a=new Sa,c=new Wm,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,G,B){let X=G.fog,Y=B.geometry,j=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),z=J&&J.mapping===ka?J.image.height:null,re=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=de!==void 0?de.length:0,Ge=0;Y.morphAttributes.position!==void 0&&(Ge=1),Y.morphAttributes.normal!==void 0&&(Ge=2),Y.morphAttributes.color!==void 0&&(Ge=3);let pt,W,ee,ve;if(re){let ut=fi[re];pt=ut.vertexShader,W=ut.fragmentShader}else pt=M.vertexShader,W=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);let se=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),st=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,Tt=!!M.map,Mt=!!M.matcap,je=!!J,w=!!M.aoMap,xn=!!M.lightMap,Ze=!!M.bumpMap,$e=!!M.normalMap,Me=!!M.displacementMap,vt=!!M.emissiveMap,_e=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,L=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,H=M.sheen>0,ye=M.transmission>0,oe=v&&!!M.anisotropyMap,fe=L&&!!M.clearcoatMap,Je=L&&!!M.clearcoatNormalMap,Q=L&&!!M.clearcoatRoughnessMap,he=Z&&!!M.iridescenceMap,Te=Z&&!!M.iridescenceThicknessMap,Re=H&&!!M.sheenColorMap,pe=H&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Be=!!M.specularColorMap,gt=!!M.specularIntensityMap,I=ye&&!!M.transmissionMap,ae=ye&&!!M.thicknessMap,V=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,ke=!!M.extensions,St=Fi;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(St=n.toneMapping);let qt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:W,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:st,instancingColor:st&&B.instanceColor!==null,instancingMorph:st&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Vr,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:Mt,envMap:je,envMapMode:je&&J.mapping,envMapCubeUVHeight:z,aoMap:w,lightMap:xn,bumpMap:Ze,normalMap:$e,displacementMap:h&&Me,emissiveMap:vt,normalMapObjectSpace:$e&&M.normalMapType===Jx,normalMapTangentSpace:$e&&M.normalMapType===Zx,metalnessMap:_e,roughnessMap:S,anisotropy:v,anisotropyMap:oe,clearcoat:L,clearcoatMap:fe,clearcoatNormalMap:Je,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Te,sheen:H,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:qe,specularColorMap:Be,specularIntensityMap:gt,transmission:ye,transmissionMap:I,thicknessMap:ae,gradientMap:V,opaque:M.transparent===!1&&M.blending===Ur&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:Tt&&y(M.map.channel),aoMapUv:w&&y(M.aoMap.channel),lightMapUv:xn&&y(M.lightMap.channel),bumpMapUv:Ze&&y(M.bumpMap.channel),normalMapUv:$e&&y(M.normalMap.channel),displacementMapUv:Me&&y(M.displacementMap.channel),emissiveMapUv:vt&&y(M.emissiveMap.channel),metalnessMapUv:_e&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:oe&&y(M.anisotropyMap.channel),clearcoatMapUv:fe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(M.sheenRoughnessMap.channel),specularMapUv:qe&&y(M.specularMap.channel),specularColorMapUv:Be&&y(M.specularColorMap.channel),specularIntensityMapUv:gt&&y(M.specularIntensityMap.channel),transmissionMapUv:I&&y(M.transmissionMap.channel),thicknessMapUv:ae&&y(M.thicknessMap.channel),alphaMapUv:q&&y(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($e||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Tt||q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(x,M),b(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){let x=g[M.type],D;if(x){let G=fi[x];D=uM.clone(G.uniforms)}else D=M.uniforms;return D}function P(M,x){let D;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new aP(n,x,M,s),u.push(D)),D}function A(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function C(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:O}}function uP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function NM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function PM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,h,f,g,y,m){let p=o(d,h,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,y,m){let p=o(d,h,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||dP),i.length>1&&i.sort(h||NM),r.length>1&&r.sort(h||NM)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function fP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new PM,n.set(i,[o])):r>=s.length?(o=new PM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function pP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mP=0;function gP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vP(n){let e=new hP,t=pP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new It,o=new It;function a(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,T=0,b=0,E=0,P=0,A=0,C=0;l.sort(gP);for(let M=0,x=l.length;M<x;M++){let D=l[M],G=D.color,B=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*B,d+=G.g*B,h+=G.b*B;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],B);C++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=D.shadow.matrix,T++}i.directional[f]=j,f++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;let J=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[y]=J.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=Y,E++}y++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let J=D.shadow,z=t.get(D);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(B),j.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==b||O.numSpotShadows!==E||O.numSpotMaps!==P||O.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,O.directionalLength=f,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=b,O.numSpotShadows=E,O.numSpotMaps=P,O.numLightProbes=C,i.version=mP++)}function c(l,u){let d=0,h=0,f=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let b=l[p];if(b.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(b.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function OM(n){let e=new vP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function yP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new OM(n),e.set(r,[a])):s>=o.length?(a=new OM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var _P=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xP=`uniform sampler2D shadow_pass;
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
}`;function MP(n,e,t){let i=new Ia,r=new ht,s=new ht,o=new wt,a=new Su({depthPacking:Yx}),c=new Eu,l={},u=t.maxTextureSize,d={[Ni]:rn,[rn]:Ni,[li]:li},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:_P,fragmentShader:xP}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=um;let p=this.type;this.render=function(A,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Li),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==ci&&this.type===ci,X=p===ci&&this.type!==ci;for(let Y=0,j=A.length;Y<j;Y++){let J=A[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let re=z.getFrameExtents();if(r.multiply(re),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,z.mapSize.y=s.y)),z.map===null||B===!0||X===!0){let xe=this.type!==ci?{minFilter:Nn,magFilter:Nn}:{};z.map!==null&&z.map.dispose(),z.map=new ai(r.x,r.y,xe),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let de=z.getViewportCount();for(let xe=0;xe<de;xe++){let Ge=z.getViewport(xe);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),G.viewport(o),z.updateMatrices(J,xe),i=z.getFrustum(),E(C,O,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===ci&&T(z,O),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,D)};function T(A,C){let O=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,O,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,O,f,y,null)}function b(A,C,O,M){let x=null,D=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=O.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=x.uuid,B=C.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,C.addEventListener("dispose",P)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,M===ci?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=O}return x}function E(A,C,O,M,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let B=e.update(A),X=A.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,J=Y.length;j<J;j++){let z=Y[j],re=X[z.materialIndex];if(re&&re.visible){let de=b(A,re,M,x);A.onBeforeShadow(n,A,C,O,B,de,z),n.renderBufferDirect(O,null,B,de,A,z),A.onAfterShadow(n,A,C,O,B,de,z)}}}else if(X.visible){let Y=b(A,X,M,x);A.onBeforeShadow(n,A,C,O,B,Y,null),n.renderBufferDirect(O,null,B,Y,A,null),A.onAfterShadow(n,A,C,O,B,Y,null)}}let G=A.children;for(let B=0,X=G.length;B<X;B++)E(G[B],C,O,M,x)}function P(A){A.target.removeEventListener("dispose",P);for(let O in l){let M=l[O],x=A.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var SP={[ku]:Uu,[Bu]:Hu,[Vu]:Gu,[Br]:zu,[Uu]:ku,[Hu]:Bu,[Gu]:Vu,[zu]:Br};function EP(n,e){function t(){let I=!1,ae=new wt,V=null,q=new wt(0,0,0,0);return{setMask:function(le){V!==le&&!I&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){I=le},setClear:function(le,ce,ke,St,qt){qt===!0&&(le*=St,ce*=St,ke*=St),ae.set(le,ce,ke,St),q.equals(ae)===!1&&(n.clearColor(le,ce,ke,St),q.copy(ae))},reset:function(){I=!1,V=null,q.set(-1,0,0,0)}}}function i(){let I=!1,ae=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ae!==ce){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ae=ce;let St=le;le=null,this.setClear(St)}},getReversed:function(){return ae},setTest:function(ce){ce?se(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ae&&(ce=SP[ce]),q!==ce){switch(ce){case ku:n.depthFunc(n.NEVER);break;case Uu:n.depthFunc(n.ALWAYS);break;case Bu:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case Vu:n.depthFunc(n.EQUAL);break;case zu:n.depthFunc(n.GEQUAL);break;case Hu:n.depthFunc(n.GREATER);break;case Gu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){I=!1,V=null,q=null,le=null,ae=!1}}}function r(){let I=!1,ae=null,V=null,q=null,le=null,ce=null,ke=null,St=null,qt=null;return{setTest:function(ut){I||(ut?se(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ut){ae!==ut&&!I&&(n.stencilMask(ut),ae=ut)},setFunc:function(ut,Ln,hi){(V!==ut||q!==Ln||le!==hi)&&(n.stencilFunc(ut,Ln,hi),V=ut,q=Ln,le=hi)},setOp:function(ut,Ln,hi){(ce!==ut||ke!==Ln||St!==hi)&&(n.stencilOp(ut,Ln,hi),ce=ut,ke=Ln,St=hi)},setLocked:function(ut){I=ut},setClear:function(ut){qt!==ut&&(n.clearStencil(ut),qt=ut)},reset:function(){I=!1,ae=null,V=null,q=null,le=null,ce=null,ke=null,St=null,qt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,b=null,E=null,P=null,A=null,C=new tt(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=J>=2);let re=null,de={},xe=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),pt=new wt().fromArray(xe),W=new wt().fromArray(Ge);function ee(I,ae,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<V;ke++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ae+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Br),Ze(!1),$e(lm),se(n.CULL_FACE),w(Li);function se(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function we(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function st(I,ae){return d[I]!==ae?(n.bindFramebuffer(I,ae),d[I]=ae,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(I,ae){let V=f,q=!1;if(I){V=h.get(ae),V===void 0&&(V=[],h.set(ae,V));let le=I.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=le.length;ce<ke;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function Tt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Mt={[lr]:n.FUNC_ADD,[Mx]:n.FUNC_SUBTRACT,[Sx]:n.FUNC_REVERSE_SUBTRACT};Mt[Ex]=n.MIN,Mt[bx]=n.MAX;let je={[wx]:n.ZERO,[Tx]:n.ONE,[Cx]:n.SRC_COLOR,[fu]:n.SRC_ALPHA,[Px]:n.SRC_ALPHA_SATURATE,[Rx]:n.DST_COLOR,[Ix]:n.DST_ALPHA,[Dx]:n.ONE_MINUS_SRC_COLOR,[hu]:n.ONE_MINUS_SRC_ALPHA,[Nx]:n.ONE_MINUS_DST_COLOR,[Ax]:n.ONE_MINUS_DST_ALPHA,[Ox]:n.CONSTANT_COLOR,[Lx]:n.ONE_MINUS_CONSTANT_COLOR,[Fx]:n.CONSTANT_ALPHA,[kx]:n.ONE_MINUS_CONSTANT_ALPHA};function w(I,ae,V,q,le,ce,ke,St,qt,ut){if(I===Li){y===!0&&(we(n.BLEND),y=!1);return}if(y===!1&&(se(n.BLEND),y=!0),I!==xx){if(I!==m||ut!==M){if((p!==lr||E!==lr)&&(n.blendEquation(n.FUNC_ADD),p=lr,E=lr),ut)switch(I){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,b=null,P=null,A=null,C.set(0,0,0),O=0,m=I,M=ut}return}le=le||ae,ce=ce||V,ke=ke||q,(ae!==p||le!==E)&&(n.blendEquationSeparate(Mt[ae],Mt[le]),p=ae,E=le),(V!==T||q!==b||ce!==P||ke!==A)&&(n.blendFuncSeparate(je[V],je[q],je[ce],je[ke]),T=V,b=q,P=ce,A=ke),(St.equals(C)===!1||qt!==O)&&(n.blendColor(St.r,St.g,St.b,qt),C.copy(St),O=qt),m=I,M=!1}function xn(I,ae){I.side===li?we(n.CULL_FACE):se(n.CULL_FACE);let V=I.side===rn;ae&&(V=!V),Ze(V),I.blending===Ur&&I.transparent===!1?w(Li):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let q=I.stencilWrite;a.setTest(q),q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function $e(I){I!==vx?(se(n.CULL_FACE),I!==D&&(I===lm?n.cullFace(n.BACK):I===yx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=I}function Me(I){I!==G&&(j&&n.lineWidth(I),G=I)}function vt(I,ae,V){I?(se(n.POLYGON_OFFSET_FILL),(B!==ae||X!==V)&&(n.polygonOffset(ae,V),B=ae,X=V)):we(n.POLYGON_OFFSET_FILL)}function _e(I){I?se(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+Y-1),re!==I&&(n.activeTexture(I),re=I)}function v(I,ae,V){V===void 0&&(re===null?V=n.TEXTURE0+Y-1:V=re);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==I||q.texture!==ae)&&(re!==V&&(n.activeTexture(V),re=V),n.bindTexture(I,ae||ve[I]),q.type=I,q.texture=ae)}function L(){let I=de[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){pt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function pe(I){W.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function qe(I,ae){let V=l.get(ae);V===void 0&&(V=new WeakMap,l.set(ae,V));let q=V.get(I);q===void 0&&(q=n.getUniformBlockIndex(ae,I.name),V.set(I,q))}function Be(I,ae){let q=l.get(ae).get(I);c.get(ae)!==q&&(n.uniformBlockBinding(ae,q,I.__bindingPointIndex),c.set(ae,q))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,de={},d={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,b=null,E=null,P=null,A=null,C=new tt(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,pt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:we,bindFramebuffer:st,drawBuffers:Ce,useProgram:Tt,setBlending:w,setMaterial:xn,setFlipSided:Ze,setCullFace:$e,setLineWidth:Me,setPolygonOffset:vt,setScissorTest:_e,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:he,texImage3D:Te,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:Je,texStorage3D:Q,texSubImage2D:H,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Re,viewport:pe,reset:gt}}function bP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):Qs("canvas")}function y(S,v,L){let $=1,Z=_e(S);if((Z.width>L||Z.height>L)&&($=L/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(H,ye));let oe=v?g(H,ye):d;return oe.width=H,oe.height=ye,oe.getContext("2d").drawImage(S,0,0,H,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+ye+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,v,L,$,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=v;if(v===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),v===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){let ye=Z?ya:et.getTransfer($);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=ye===dt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(S,v){let L;return S?v===null||v===mr||v===oo?L=n.DEPTH24_STENCIL8:v===di?L=n.DEPTH32F_STENCIL8:v===ro&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===oo?L=n.DEPTH_COMPONENT24:v===di?L=n.DEPTH_COMPONENT32F:v===ro&&(L=n.DEPTH_COMPONENT16),L}function P(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Nn&&S.minFilter!==Jn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function A(S){let v=S.target;v.removeEventListener("dispose",A),O(v),v.isVideoTexture&&u.delete(v)}function C(S){let v=S.target;v.removeEventListener("dispose",C),x(v)}function O(S){let v=i.get(S);if(v.__webglInit===void 0)return;let L=S.source,$=h.get(L);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys($).length===0&&h.delete(L)}i.remove(S)}function M(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let L=S.source,$=h.get(L);delete $[v.__cacheKey],o.memory.textures--}function x(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=S.textures;for(let $=0,Z=L.length;$<Z;$++){let H=i.get(L[$]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(S)}let D=0;function G(){D=0}function B(){let S=D;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function X(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){let L=i.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(L,S,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function j(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function J(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function z(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){ee(L,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let re={[pu]:n.REPEAT,[cr]:n.CLAMP_TO_EDGE,[mu]:n.MIRRORED_REPEAT},de={[Nn]:n.NEAREST,[qx]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[$u]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},xe={[Kx]:n.NEVER,[rM]:n.ALWAYS,[Qx]:n.LESS,[bm]:n.LEQUAL,[eM]:n.EQUAL,[iM]:n.GEQUAL,[tM]:n.GREATER,[nM]:n.NOTEQUAL};function Ge(S,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Jn||v.magFilter===$u||v.magFilter===Ua||v.magFilter===pr||v.minFilter===Jn||v.minFilter===$u||v.minFilter===Ua||v.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,re[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==Ua&&v.minFilter!==pr||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function pt(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let $=v.source,Z=h.get($);Z===void 0&&(Z={},h.set($,Z));let H=X(v);if(H!==S.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[H].usedTimes++;let ye=Z[S.__cacheKey];ye!==void 0&&(Z[S.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),S.__cacheKey=H,S.__webglTexture=Z[H].texture}return L}function W(S,v,L){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=pt(S,v),H=v.source;t.bindTexture($,S.__webglTexture,n.TEXTURE0+L);let ye=i.get(H);if(H.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let oe=et.getPrimaries(et.workingColorSpace),fe=v.colorSpace===ki?null:et.getPrimaries(v.colorSpace),Je=v.colorSpace===ki||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Q=y(v.image,!1,r.maxTextureSize);Q=vt(v,Q);let he=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),Re=b(v.internalFormat,he,Te,v.colorSpace,v.isVideoTexture);Ge($,v);let pe,qe=v.mipmaps,Be=v.isVideoTexture!==!0,gt=ye.__version===void 0||Z===!0,I=H.dataReady,ae=P(v,Q);if(v.isDepthTexture)Re=E(v.format===ao,v.type),gt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,he,Te,null));else if(v.isDataTexture)if(qe.length>0){Be&&gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,qe[0].width,qe[0].height);for(let V=0,q=qe.length;V<q;V++)pe=qe[V],Be?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,he,Te,pe.data);v.generateMipmaps=!1}else Be?(gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Q.width,Q.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Te,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,he,Te,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,qe[0].width,qe[0].height,Q.depth);for(let V=0,q=qe.length;V<q;V++)if(pe=qe[V],v.format!==On)if(he!==null)if(Be){if(I)if(v.layerUpdates.size>0){let le=Pm(pe.width,pe.height,v.format,v.type);for(let ce of v.layerUpdates){let ke=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,pe.width,pe.height,1,he,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,Te,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,Q.depth,0,he,Te,pe.data)}else{Be&&gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,qe[0].width,qe[0].height);for(let V=0,q=qe.length;V<q;V++)pe=qe[V],v.format!==On?he!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,he,Te,pe.data)}else if(v.isDataArrayTexture)if(Be){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){let V=Pm(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,he,Te,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(v.isData3DTexture)Be?(gt&&t.texStorage3D(n.TEXTURE_3D,ae,Re,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(v.isFramebufferTexture){if(gt)if(Be)t.texStorage2D(n.TEXTURE_2D,ae,Re,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ae;le++)t.texImage2D(n.TEXTURE_2D,le,Re,V,q,0,he,Te,null),V>>=1,q>>=1}}else if(qe.length>0){if(Be&&gt){let V=_e(qe[0]);t.texStorage2D(n.TEXTURE_2D,ae,Re,V.width,V.height)}for(let V=0,q=qe.length;V<q;V++)pe=qe[V],Be?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,he,Te,pe):t.texImage2D(n.TEXTURE_2D,V,Re,he,Te,pe);v.generateMipmaps=!1}else if(Be){if(gt){let V=_e(Q);t.texStorage2D(n.TEXTURE_2D,ae,Re,V.width,V.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Te,Q)}else t.texImage2D(n.TEXTURE_2D,0,Re,he,Te,Q);m(v)&&p($),ye.__version=H.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ee(S,v,L){if(v.image.length!==6)return;let $=pt(S,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);let H=i.get(Z);if(Z.version!==H.__version||$===!0){t.activeTexture(n.TEXTURE0+L);let ye=et.getPrimaries(et.workingColorSpace),oe=v.colorSpace===ki?null:et.getPrimaries(v.colorSpace),fe=v.colorSpace===ki||ye===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Je=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!Je&&!Q?he[q]=y(v.image[q],!0,r.maxCubemapSize):he[q]=Q?v.image[q].image:v.image[q],he[q]=vt(v,he[q]);let Te=he[0],Re=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),qe=b(v.internalFormat,Re,pe,v.colorSpace),Be=v.isVideoTexture!==!0,gt=H.__version===void 0||$===!0,I=Z.dataReady,ae=P(v,Te);Ge(n.TEXTURE_CUBE_MAP,v);let V;if(Je){Be&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,qe,Te.width,Te.height);for(let q=0;q<6;q++){V=he[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==On?Re!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,qe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Re,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,qe,ce.width,ce.height,0,Re,pe,ce.data)}}}else{if(V=v.mipmaps,Be&&gt){V.length>0&&ae++;let q=_e(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,qe,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,Re,pe,he[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,qe,he[q].width,he[q].height,0,Re,pe,he[q].data);for(let le=0;le<V.length;le++){let ke=V[le].image[q].image;Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,ke.width,ke.height,Re,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,qe,ke.width,ke.height,0,Re,pe,ke.data)}}else{Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,pe,he[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,qe,Re,pe,he[q]);for(let le=0;le<V.length;le++){let ce=V[le];Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Re,pe,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,qe,Re,pe,ce.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),H.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,L,$,Z,H){let ye=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),fe=b(L.internalFormat,ye,oe,L.colorSpace),Je=i.get(v),Q=i.get(L);if(Q.__renderTarget=v,!Je.__hasExternalTextures){let he=Math.max(1,v.width>>H),Te=Math.max(1,v.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,fe,he,Te,v.depth,0,ye,oe,null):t.texImage2D(Z,H,fe,he,Te,0,ye,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),$e(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,Ze(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(S,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,H=E(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ze(v);$e(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,S)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let H=$[Z],ye=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),fe=b(H.internalFormat,ye,oe,H.colorSpace),Je=Ze(v);L&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,fe,v.width,v.height):$e(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,H=Ze(v);if(v.depthTexture.format===Js)$e(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ao)$e(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function st(S){let v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),se(v.__webglDepthbuffer[$],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),se(v.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(S,v,L){let $=i.get(S);v!==void 0&&ve($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&st(S)}function Tt(S){let v=S.texture,L=i.get(S),$=i.get(v);S.addEventListener("dispose",C);let Z=S.textures,H=S.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let fe=0;fe<v.mipmaps.length;fe++)L.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let oe=0,fe=Z.length;oe<fe;oe++){let Je=i.get(Z[oe]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&$e(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){let fe=Z[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);let Je=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),he=b(fe.internalFormat,Je,Q,fe.colorSpace,S.isXRRenderTarget===!0),Te=Ze(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,he,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),se(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(L.__webglFramebuffer[oe][fe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ve(L.__webglFramebuffer[oe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,fe=Z.length;oe<fe;oe++){let Je=Z[oe],Q=i.get(Je);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ge(n.TEXTURE_2D,Je),ve(L.__webglFramebuffer,S,Je,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Ge(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(L.__webglFramebuffer[fe],S,v,n.COLOR_ATTACHMENT0,oe,fe);else ve(L.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&p(oe),t.unbindTexture()}S.depthBuffer&&st(S)}function Mt(S){let v=S.textures;for(let L=0,$=v.length;L<$;L++){let Z=v[L];if(m(Z)){let H=T(S),ye=i.get(Z).__webglTexture;t.bindTexture(H,ye),p(H),t.unbindTexture()}}}let je=[],w=[];function xn(S){if(S.samples>0){if($e(S)===!1){let v=S.textures,L=S.width,$=S.height,Z=n.COLOR_BUFFER_BIT,H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(S),oe=v.length>1;if(oe)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let Je=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,Z,n.NEAREST),c===!0&&(je.length=0,w.length=0,je.push(n.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(je.push(H),w.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let Je=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ze(S){return Math.min(r.maxSamples,S.samples)}function $e(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function vt(S,v){let L=S.colorSpace,$=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Vr&&L!==ki&&(et.getTransfer(L)===dt?($!==On||Z!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function _e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ce,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=$e}function wP(n,e){function t(i,r=ki){let s,o=et.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pm)return n.BYTE;if(i===mm)return n.SHORT;if(i===ro)return n.UNSIGNED_SHORT;if(i===qu)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===vm)return n.ALPHA;if(i===ym)return n.RGB;if(i===On)return n.RGBA;if(i===_m)return n.LUMINANCE;if(i===xm)return n.LUMINANCE_ALPHA;if(i===Js)return n.DEPTH_COMPONENT;if(i===ao)return n.DEPTH_STENCIL;if(i===Mm)return n.RED;if(i===Zu)return n.RED_INTEGER;if(i===Sm)return n.RG;if(i===Ju)return n.RG_INTEGER;if(i===Ku)return n.RGBA_INTEGER;if(i===Ba||i===Va||i===za||i===Ha)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qu||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===id||i===rd)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===od||i===ad||i===cd||i===ld||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===vd||i===yd||i===_d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===od)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ad)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ld)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ud)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===md)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_d)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===xd||i===Md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ga)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Em||i===Sd||i===Ed||i===bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ga)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var TP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CP=`
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

}`,$m=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ui,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qn({vertexShader:TP,fragmentShader:CP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qm=class extends Pi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,y=new $m,m=t.getContextAttributes(),p=null,T=null,b=[],E=[],P=new ht,A=null,C=new Jt;C.viewport=new wt;let O=new Jt;O.viewport=new wt;let M=[C,O],x=new Lu,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=b[W];return ee===void 0&&(ee=new no,b[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=b[W];return ee===void 0&&(ee=new no,b[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=b[W];return ee===void 0&&(ee=new no,b[W]=ee),ee.getHandSpace()};function B(W){let ee=E.indexOf(W.inputSource);if(ee===-1)return;let ve=b[ee];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<b.length;W++){let ee=E[W];ee!==null&&(E[W]=null,b[W].disconnect(ee))}D=null,G=null,y.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,T=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return Vi(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,se=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?ao:Js,se=m.stencil?oo:mr);let st={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(st),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ai(h.textureWidth,h.textureHeight,{format:On,type:ui,depthTexture:new Ra(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ai(f.framebufferWidth,f.framebufferHeight,{format:On,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let ee=0;ee<W.removed.length;ee++){let ve=W.removed[ee],se=E.indexOf(ve);se>=0&&(E[se]=null,b[se].disconnect(ve))}for(let ee=0;ee<W.added.length;ee++){let ve=W.added[ee],se=E.indexOf(ve);if(se===-1){for(let st=0;st<b.length;st++)if(st>=E.length){E.push(ve),se=st;break}else if(E[st]===null){E[st]=ve,se=st;break}if(se===-1)break}let we=b[se];we&&we.connect(ve)}}let j=new k,J=new k;function z(W,ee,ve){j.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let se=j.distanceTo(J),we=ee.projectionMatrix.elements,st=ve.projectionMatrix.elements,Ce=we[14]/(we[10]-1),Tt=we[14]/(we[10]+1),Mt=(we[9]+1)/we[5],je=(we[9]-1)/we[5],w=(we[8]-1)/we[0],xn=(st[8]+1)/st[0],Ze=Ce*w,$e=Ce*xn,Me=se/(-w+xn),vt=Me*-w;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),we[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let _e=Ce+Me,S=Tt+Me,v=Ze-vt,L=$e+(se-vt),$=Mt*Tt/S*_e,Z=je*Tt/S*_e;W.projectionMatrix.makePerspective(v,L,$,Z,_e,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,ve=W.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=O.near=C.near=ee,x.far=O.far=C.far=ve,(D!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,G=x.far),C.layers.mask=W.layers.mask|2,O.layers.mask=W.layers.mask|4,x.layers.mask=C.layers.mask|O.layers.mask;let se=W.parent,we=x.cameras;re(x,se);for(let st=0;st<we.length;st++)re(we[st],se);we.length===2?z(x,C,O):x.projectionMatrix.copy(C.projectionMatrix),de(W,x,se)};function de(W,ee,ve){ve===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ks*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function Ge(W,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let se=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ce=0;Ce<ve.length;Ce++){let Tt=ve[Ce],Mt=null;if(f!==null)Mt=f.getViewport(Tt);else{let w=d.getViewSubImage(h,Tt);Mt=w.viewport,Ce===0&&(e.setRenderTargetTextures(T,w.colorTexture,w.depthStencilTexture),e.setRenderTarget(T))}let je=M[Ce];je===void 0&&(je=new Jt,je.layers.enable(Ce),je.viewport=new wt,M[Ce]=je),je.matrix.fromArray(Tt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Tt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Ce===0&&(x.matrix.copy(je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(je)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ce=d.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,r.renderState)}}for(let ve=0;ve<b.length;ve++){let se=E[ve],we=b[ve];se!==null&&we!==void 0&&we.update(se,ee,l||o)}xe&&xe(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let pt=new LM;pt.setAnimationLoop(Ge),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}},Xr=new Hr,DP=new It;function IP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Im(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),b=T.envMap,E=T.envMapRotation;b&&(m.envMap.value=b,Xr.copy(E),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(DP.makeRotationFromEuler(Xr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let E=b.program;i.uniformBlockBinding(T,E)}function l(T,b){let E=r[T.id];E===void 0&&(g(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(T,P);let A=e.render.frame;s[T.id]!==A&&(h(T),s[T.id]=A)}function u(T){let b=d();T.__bindingPointIndex=b;let E=n.createBuffer(),P=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){let b=r[T.id],E=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,C=E.length;A<C;A++){let O=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,x=O.length;M<x;M++){let D=O[M];if(f(D,A,M,P)===!0){let G=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],J=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+X,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,b,E,P){let A=T.value,C=b+"_"+E;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{let O=P[C];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return P[C]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(T){let b=T.uniforms,E=0,P=16;for(let C=0,O=b.length;C<O;C++){let M=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,D=M.length;x<D;x++){let G=M[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],J=y(j),z=E%P,re=z%J.boundary,de=z+re;E+=re,de!==0&&P-de<J.storage&&(E+=P-de),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=J.storage}}}let A=E%P;return A>0&&(E+=P-A),T.__size=E,T.__cache={},this}function y(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Id=class{constructor(e={}){let{canvas:t=sM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1;this._outputColorSpace=vn;let A=0,C=0,O=null,M=-1,x=null,D=new wt,G=new wt,B=null,X=new tt(0),Y=0,j=t.width,J=t.height,z=1,re=null,de=null,xe=new wt(0,0,j,J),Ge=new wt(0,0,j,J),pt=!1,W=new Ia,ee=!1,ve=!1,se=new It,we=new It,st=new k,Ce=new wt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function je(){return O===null?z:1}let w=i;function xn(_,R){return t.getContext(_,R)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),w===null){let R="webgl2";if(w=xn(R,_),w===null)throw xn(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ze,$e,Me,vt,_e,S,v,L,$,Z,H,ye,oe,fe,Je,Q,he,Te,Re,pe,qe,Be,gt,I;function ae(){Ze=new X1(w),Ze.init(),Be=new wP(w,Ze),$e=new z1(w,Ze,e,Be),Me=new EP(w,Ze),$e.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),vt=new J1(w),_e=new uP,S=new bP(w,Ze,Me,_e,$e,Be,vt),v=new G1(E),L=new q1(E),$=new iA(w),gt=new B1(w,$),Z=new Y1(w,$,vt,gt),H=new Q1(w,Z,$,vt),Re=new K1(w,$e,S),Q=new H1(_e),ye=new lP(E,v,L,Ze,$e,gt,Q),oe=new IP(E,_e),fe=new fP,Je=new yP(Ze),Te=new U1(E,v,L,Me,H,f,c),he=new MP(E,H,$e),I=new AP(w,vt,$e,Me),pe=new V1(w,Ze,vt),qe=new Z1(w,Ze,vt),vt.programs=ye.programs,E.capabilities=$e,E.extensions=Ze,E.properties=_e,E.renderLists=fe,E.shadowMap=he,E.state=Me,E.info=vt}ae();let V=new qm(E,w);this.xr=V,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let _=Ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(j,J,!1))},this.getSize=function(_){return _.set(j,J)},this.setSize=function(_,R,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,J=R,t.width=Math.floor(_*z),t.height=Math.floor(R*z),F===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set(j*z,J*z).floor()},this.setDrawingBufferSize=function(_,R,F){j=_,J=R,z=F,t.width=Math.floor(_*F),t.height=Math.floor(R*F),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,R,F,U){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,R,F,U),Me.viewport(D.copy(xe).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ge)},this.setScissor=function(_,R,F,U){_.isVector4?Ge.set(_.x,_.y,_.z,_.w):Ge.set(_,R,F,U),Me.scissor(G.copy(Ge).multiplyScalar(z).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(_){Me.setScissorTest(pt=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(_=!0,R=!0,F=!0){let U=0;if(_){let N=!1;if(O!==null){let K=O.texture.format;N=K===Ku||K===Ju||K===Zu}if(N){let K=O.texture.type,ne=K===ui||K===mr||K===ro||K===oo||K===Xu||K===Yu,ue=Te.getClearColor(),me=Te.getClearAlpha(),Ne=ue.r,De=ue.g,Se=ue.b;ne?(g[0]=Ne,g[1]=De,g[2]=Se,g[3]=me,w.clearBufferuiv(w.COLOR,0,g)):(y[0]=Ne,y[1]=De,y[2]=Se,y[3]=me,w.clearBufferiv(w.COLOR,0,y))}else U|=w.COLOR_BUFFER_BIT}R&&(U|=w.DEPTH_BUFFER_BIT),F&&(U|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Te.dispose(),fe.dispose(),Je.dispose(),_e.dispose(),v.dispose(),L.dispose(),H.dispose(),gt.dispose(),I.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ym),V.removeEventListener("sessionend",Zm),gr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=vt.autoReset,R=he.enabled,F=he.autoUpdate,U=he.needsUpdate,N=he.type;ae(),vt.autoReset=_,he.enabled=R,he.autoUpdate=F,he.needsUpdate=U,he.type=N}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ke(_){let R=_.target;R.removeEventListener("dispose",ke),St(R)}function St(_){qt(_),_e.remove(_)}function qt(_){let R=_e.get(_).programs;R!==void 0&&(R.forEach(function(F){ye.releaseProgram(F)}),_.isShaderMaterial&&ye.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,F,U,N,K){R===null&&(R=Tt);let ne=N.isMesh&&N.matrixWorld.determinant()<0,ue=VM(_,R,F,U,N);Me.setMaterial(U,ne);let me=F.index,Ne=1;if(U.wireframe===!0){if(me=Z.getWireframeAttribute(F),me===void 0)return;Ne=2}let De=F.drawRange,Se=F.attributes.position,Ke=De.start*Ne,at=(De.start+De.count)*Ne;K!==null&&(Ke=Math.max(Ke,K.start*Ne),at=Math.min(at,(K.start+K.count)*Ne)),me!==null?(Ke=Math.max(Ke,0),at=Math.min(at,me.count)):Se!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Se.count));let At=at-Ke;if(At<0||At===1/0)return;gt.setup(N,U,ue,F,me);let Et,nt=pe;if(me!==null&&(Et=$.get(me),nt=qe,nt.setIndex(Et)),N.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*je()),nt.setMode(w.LINES)):nt.setMode(w.TRIANGLES);else if(N.isLine){let Ee=U.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*je()),N.isLineSegments?nt.setMode(w.LINES):N.isLineLoop?nt.setMode(w.LINE_LOOP):nt.setMode(w.LINE_STRIP)}else N.isPoints?nt.setMode(w.POINTS):N.isSprite&&nt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ee=N._multiDrawStarts,zt=N._multiDrawCounts,ct=N._multiDrawCount,Fn=me?$.get(me).bytesPerElement:1,Jr=_e.get(U).currentProgram.getUniforms();for(let ln=0;ln<ct;ln++)Jr.setValue(w,"_gl_DrawID",ln),nt.render(Ee[ln]/Fn,zt[ln])}else if(N.isInstancedMesh)nt.renderInstances(Ke,At,N.count);else if(F.isInstancedBufferGeometry){let Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,zt=Math.min(F.instanceCount,Ee);nt.renderInstances(Ke,At,zt)}else nt.render(Ke,At)};function ut(_,R,F){_.transparent===!0&&_.side===li&&_.forceSinglePass===!1?(_.side=rn,_.needsUpdate=!0,qa(_,R,F),_.side=Ni,_.needsUpdate=!0,qa(_,R,F),_.side=li):qa(_,R,F)}this.compile=function(_,R,F=null){F===null&&(F=_),p=Je.get(F),p.init(R),b.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),_!==F&&_.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let U=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let K=N.material;if(K)if(Array.isArray(K))for(let ne=0;ne<K.length;ne++){let ue=K[ne];ut(ue,F,N),U.add(ue)}else ut(K,F,N),U.add(K)}),p=b.pop(),U},this.compileAsync=function(_,R,F=null){let U=this.compile(_,R,F);return new Promise(N=>{function K(){if(U.forEach(function(ne){_e.get(ne).currentProgram.isReady()&&U.delete(ne)}),U.size===0){N(_);return}setTimeout(K,10)}Ze.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let Ln=null;function hi(_){Ln&&Ln(_)}function Ym(){gr.stop()}function Zm(){gr.start()}let gr=new LM;gr.setAnimationLoop(hi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(_){Ln=_,V.setAnimationLoop(_),_===null?gr.stop():gr.start()},V.addEventListener("sessionstart",Ym),V.addEventListener("sessionend",Zm),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(R),R=V.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,R,O),p=Je.get(_,b.length),p.init(R),b.push(p),we.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(we),ve=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ve),m=fe.get(_,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){let K=E.xr.getDepthSensingMesh();K!==null&&kd(K,R,-1/0,E.sortObjects)}kd(_,R,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(re,de),Mt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Mt&&Te.addToRenderList(m,_),this.info.render.frame++,ee===!0&&Q.beginShadows();let F=p.state.shadowsArray;he.render(F,_,R),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,N=m.transmissive;if(p.setupLights(),R.isArrayCamera){let K=R.cameras;if(N.length>0)for(let ne=0,ue=K.length;ne<ue;ne++){let me=K[ne];Km(U,N,_,me)}Mt&&Te.render(_);for(let ne=0,ue=K.length;ne<ue;ne++){let me=K[ne];Jm(m,_,me,me.viewport)}}else N.length>0&&Km(U,N,_,R),Mt&&Te.render(_),Jm(m,_,R);O!==null&&C===0&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(E,_,R),gt.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],ee===!0&&Q.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function kd(_,R,F,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){U&&Ce.setFromMatrixPosition(_.matrixWorld).applyMatrix4(we);let ne=H.update(_),ue=_.material;ue.visible&&m.push(_,ne,ue,F,Ce.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){let ne=H.update(_),ue=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ce.copy(_.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ce.copy(ne.boundingSphere.center)),Ce.applyMatrix4(_.matrixWorld).applyMatrix4(we)),Array.isArray(ue)){let me=ne.groups;for(let Ne=0,De=me.length;Ne<De;Ne++){let Se=me[Ne],Ke=ue[Se.materialIndex];Ke&&Ke.visible&&m.push(_,ne,Ke,F,Ce.z,Se)}}else ue.visible&&m.push(_,ne,ue,F,Ce.z,null)}}let K=_.children;for(let ne=0,ue=K.length;ne<ue;ne++)kd(K[ne],R,F,U)}function Jm(_,R,F,U){let N=_.opaque,K=_.transmissive,ne=_.transparent;p.setupLightsView(F),ee===!0&&Q.setGlobalState(E.clippingPlanes,F),U&&Me.viewport(D.copy(U)),N.length>0&&$a(N,R,F),K.length>0&&$a(K,R,F),ne.length>0&&$a(ne,R,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Km(_,R,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new ai(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?so:ui,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let K=p.state.transmissionRenderTarget[U.id],ne=U.viewport||D;K.setSize(ne.z*E.transmissionResolutionScale,ne.w*E.transmissionResolutionScale);let ue=E.getRenderTarget();E.setRenderTarget(K),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Mt&&Te.render(F);let me=E.toneMapping;E.toneMapping=Fi;let Ne=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),ee===!0&&Q.setGlobalState(E.clippingPlanes,U),$a(_,F,U),S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Se=0,Ke=R.length;Se<Ke;Se++){let at=R[Se],At=at.object,Et=at.geometry,nt=at.material,Ee=at.group;if(nt.side===li&&At.layers.test(U.layers)){let zt=nt.side;nt.side=rn,nt.needsUpdate=!0,Qm(At,F,U,Et,nt,Ee),nt.side=zt,nt.needsUpdate=!0,De=!0}}De===!0&&(S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K))}E.setRenderTarget(ue),E.setClearColor(X,Y),Ne!==void 0&&(U.viewport=Ne),E.toneMapping=me}function $a(_,R,F){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,K=_.length;N<K;N++){let ne=_[N],ue=ne.object,me=ne.geometry,Ne=ne.group,De=ne.material;De.allowOverride===!0&&U!==null&&(De=U),ue.layers.test(F.layers)&&Qm(ue,R,F,me,De,Ne)}}function Qm(_,R,F,U,N,K){_.onBeforeRender(E,R,F,U,N,K),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(E,R,F,U,_,K),N.transparent===!0&&N.side===li&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,E.renderBufferDirect(F,R,U,N,_,K),N.side=Ni,N.needsUpdate=!0,E.renderBufferDirect(F,R,U,N,_,K),N.side=li):E.renderBufferDirect(F,R,U,N,_,K),_.onAfterRender(E,R,F,U,N,K)}function qa(_,R,F){R.isScene!==!0&&(R=Tt);let U=_e.get(_),N=p.state.lights,K=p.state.shadowsArray,ne=N.state.version,ue=ye.getParameters(_,N.state,K,R,F),me=ye.getProgramCacheKey(ue),Ne=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?L:v).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?R.environmentRotation:_.envMapRotation,Ne===void 0&&(_.addEventListener("dispose",ke),Ne=new Map,U.programs=Ne);let De=Ne.get(me);if(De!==void 0){if(U.currentProgram===De&&U.lightsStateVersion===ne)return tg(_,ue),De}else ue.uniforms=ye.getUniforms(_),_.onBeforeCompile(ue,E),De=ye.acquireProgram(ue,me),Ne.set(me,De),U.uniforms=ue.uniforms;let Se=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Q.uniform),tg(_,ue),U.needsLights=HM(_),U.lightsStateVersion=ne,U.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=De,U.uniformsList=null,De}function eg(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=fo.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function tg(_,R){let F=_e.get(_);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function VM(_,R,F,U,N){R.isScene!==!0&&(R=Tt),S.resetTextureUnits();let K=R.fog,ne=U.isMeshStandardMaterial?R.environment:null,ue=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Vr,me=(U.isMeshStandardMaterial?L:v).get(U.envMap||ne),Ne=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Se=!!F.morphAttributes.position,Ke=!!F.morphAttributes.normal,at=!!F.morphAttributes.color,At=Fi;U.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(At=E.toneMapping);let Et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=Et!==void 0?Et.length:0,Ee=_e.get(U),zt=p.state.lights;if(ee===!0&&(ve===!0||_!==x)){let Qt=_===x&&U.id===M;Q.setState(U,_,Qt)}let ct=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==zt.state.version||Ee.outputColorSpace!==ue||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==me||U.fog===!0&&Ee.fog!==K||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==De||Ee.morphTargets!==Se||Ee.morphNormals!==Ke||Ee.morphColors!==at||Ee.toneMapping!==At||Ee.morphTargetsCount!==nt)&&(ct=!0):(ct=!0,Ee.__version=U.version);let Fn=Ee.currentProgram;ct===!0&&(Fn=qa(U,R,N));let Jr=!1,ln=!1,po=!1,_t=Fn.getUniforms(),Mn=Ee.uniforms;if(Me.useProgram(Fn.program)&&(Jr=!0,ln=!0,po=!0),U.id!==M&&(M=U.id,ln=!0),Jr||x!==_){Me.buffers.depth.getReversed()?(se.copy(_.projectionMatrix),aM(se),cM(se),_t.setValue(w,"projectionMatrix",se)):_t.setValue(w,"projectionMatrix",_.projectionMatrix),_t.setValue(w,"viewMatrix",_.matrixWorldInverse);let sn=_t.map.cameraPosition;sn!==void 0&&sn.setValue(w,st.setFromMatrixPosition(_.matrixWorld)),$e.logarithmicDepthBuffer&&_t.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&_t.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,ln=!0,po=!0)}if(N.isSkinnedMesh){_t.setOptional(w,N,"bindMatrix"),_t.setOptional(w,N,"bindMatrixInverse");let Qt=N.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),_t.setValue(w,"boneTexture",Qt.boneTexture,S))}N.isBatchedMesh&&(_t.setOptional(w,N,"batchingTexture"),_t.setValue(w,"batchingTexture",N._matricesTexture,S),_t.setOptional(w,N,"batchingIdTexture"),_t.setValue(w,"batchingIdTexture",N._indirectTexture,S),_t.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(w,"batchingColorTexture",N._colorsTexture,S));let Sn=F.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Re.update(N,F,Fn),(ln||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,_t.setValue(w,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Mn.envMap.value=me,Mn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(Mn.envMapIntensity.value=R.environmentIntensity),ln&&(_t.setValue(w,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&zM(Mn,po),K&&U.fog===!0&&oe.refreshFogUniforms(Mn,K),oe.refreshMaterialUniforms(Mn,U,z,J,p.state.transmissionRenderTarget[_.id]),fo.upload(w,eg(Ee),Mn,S)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fo.upload(w,eg(Ee),Mn,S),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&_t.setValue(w,"center",N.center),_t.setValue(w,"modelViewMatrix",N.modelViewMatrix),_t.setValue(w,"normalMatrix",N.normalMatrix),_t.setValue(w,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Qt=U.uniformsGroups;for(let sn=0,Ud=Qt.length;sn<Ud;sn++){let vr=Qt[sn];I.update(vr,Fn),I.bind(vr,Fn)}}return Fn}function zM(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function HM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,R,F){let U=_e.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),_e.get(_.texture).__webglTexture=R,_e.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:F,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,R){let F=_e.get(_);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0};let GM=w.createFramebuffer();this.setRenderTarget=function(_,R=0,F=0){O=_,A=R,C=F;let U=!0,N=null,K=!1,ne=!1;if(_){let me=_e.get(_);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(w.FRAMEBUFFER,null),U=!1;else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(me.__hasExternalTextures)S.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Se=_.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&_e.has(Se)&&(_.width!==Se.image.width||_.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Ne=_.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ne=!0);let De=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(De[R])?N=De[R][F]:N=De[R],K=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?N=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[F]:N=De,D.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else D.copy(xe).multiplyScalar(z).floor(),G.copy(Ge).multiplyScalar(z).floor(),B=pt;if(F!==0&&(N=GM),Me.bindFramebuffer(w.FRAMEBUFFER,N)&&U&&Me.drawBuffers(_,N),Me.viewport(D),Me.scissor(G),Me.setScissorTest(B),K){let me=_e.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+R,me.__webglTexture,F)}else if(ne){let me=_e.get(_.texture),Ne=R;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,me.__webglTexture,F,Ne)}else if(_!==null&&F!==0){let me=_e.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,me.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(_,R,F,U,N,K,ne){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue){Me.bindFramebuffer(w.FRAMEBUFFER,ue);try{let me=_.texture,Ne=me.format,De=me.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&F>=0&&F<=_.height-N&&w.readPixels(R,F,U,N,Be.convert(Ne),Be.convert(De),K)}finally{let me=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,R,F,U,N,K,ne){return Vi(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue)if(R>=0&&R<=_.width-U&&F>=0&&F<=_.height-N){Me.bindFramebuffer(w.FRAMEBUFFER,ue);let me=_.texture,Ne=me.format,De=me.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.bufferData(w.PIXEL_PACK_BUFFER,K.byteLength,w.STREAM_READ),w.readPixels(R,F,U,N,Be.convert(Ne),Be.convert(De),0);let Ke=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,Ke);let at=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),yield oM(w,at,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,K),w.deleteBuffer(Se),w.deleteSync(at),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,R=null,F=0){let U=Math.pow(2,-F),N=Math.floor(_.image.width*U),K=Math.floor(_.image.height*U),ne=R!==null?R.x:0,ue=R!==null?R.y:0;S.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,ne,ue,N,K),Me.unbindTexture()};let WM=w.createFramebuffer(),jM=w.createFramebuffer();this.copyTextureToTexture=function(_,R,F=null,U=null,N=0,K=null){K===null&&(N!==0?(Wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=N,N=0):K=0);let ne,ue,me,Ne,De,Se,Ke,at,At,Et=_.isCompressedTexture?_.mipmaps[K]:_.image;if(F!==null)ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Ne=F.min.x,De=F.min.y,Se=F.isBox3?F.min.z:0;else{let Sn=Math.pow(2,-N);ne=Math.floor(Et.width*Sn),ue=Math.floor(Et.height*Sn),_.isDataArrayTexture?me=Et.depth:_.isData3DTexture?me=Math.floor(Et.depth*Sn):me=1,Ne=0,De=0,Se=0}U!==null?(Ke=U.x,at=U.y,At=U.z):(Ke=0,at=0,At=0);let nt=Be.convert(R.format),Ee=Be.convert(R.type),zt;R.isData3DTexture?(S.setTexture3D(R,0),zt=w.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(S.setTexture2DArray(R,0),zt=w.TEXTURE_2D_ARRAY):(S.setTexture2D(R,0),zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,R.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,R.unpackAlignment);let ct=w.getParameter(w.UNPACK_ROW_LENGTH),Fn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Jr=w.getParameter(w.UNPACK_SKIP_PIXELS),ln=w.getParameter(w.UNPACK_SKIP_ROWS),po=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ne),w.pixelStorei(w.UNPACK_SKIP_ROWS,De),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Se);let _t=_.isDataArrayTexture||_.isData3DTexture,Mn=R.isDataArrayTexture||R.isData3DTexture;if(_.isDepthTexture){let Sn=_e.get(_),Qt=_e.get(R),sn=_e.get(Sn.__renderTarget),Ud=_e.get(Qt.__renderTarget);Me.bindFramebuffer(w.READ_FRAMEBUFFER,sn.__webglFramebuffer),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ud.__webglFramebuffer);for(let vr=0;vr<me;vr++)_t&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,N,Se+vr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_e.get(R).__webglTexture,K,At+vr)),w.blitFramebuffer(Ne,De,ne,ue,Ke,at,ne,ue,w.DEPTH_BUFFER_BIT,w.NEAREST);Me.bindFramebuffer(w.READ_FRAMEBUFFER,null),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||_e.has(_)){let Sn=_e.get(_),Qt=_e.get(R);Me.bindFramebuffer(w.READ_FRAMEBUFFER,WM),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,jM);for(let sn=0;sn<me;sn++)_t?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Sn.__webglTexture,N,Se+sn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Sn.__webglTexture,N),Mn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qt.__webglTexture,K,At+sn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Qt.__webglTexture,K),N!==0?w.blitFramebuffer(Ne,De,ne,ue,Ke,at,ne,ue,w.COLOR_BUFFER_BIT,w.NEAREST):Mn?w.copyTexSubImage3D(zt,K,Ke,at,At+sn,Ne,De,ne,ue):w.copyTexSubImage2D(zt,K,Ke,at,Ne,De,ne,ue);Me.bindFramebuffer(w.READ_FRAMEBUFFER,null),Me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Mn?_.isDataTexture||_.isData3DTexture?w.texSubImage3D(zt,K,Ke,at,At,ne,ue,me,nt,Ee,Et.data):R.isCompressedArrayTexture?w.compressedTexSubImage3D(zt,K,Ke,at,At,ne,ue,me,nt,Et.data):w.texSubImage3D(zt,K,Ke,at,At,ne,ue,me,nt,Ee,Et):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,K,Ke,at,ne,ue,nt,Ee,Et.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,K,Ke,at,Et.width,Et.height,nt,Et.data):w.texSubImage2D(w.TEXTURE_2D,K,Ke,at,ne,ue,nt,Ee,Et);w.pixelStorei(w.UNPACK_ROW_LENGTH,ct),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Fn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jr),w.pixelStorei(w.UNPACK_SKIP_ROWS,ln),w.pixelStorei(w.UNPACK_SKIP_IMAGES,po),K===0&&R.generateMipmaps&&w.generateMipmap(zt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,R,F=null,U=null,N=0){return Wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,R,F,U,N)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){A=0,C=0,O=null,Me.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Rd=class n{renderer=new Id;scene=new Da;camera;stars;asteroidTexture;ngOnInit(){this.loadTexture().then(()=>{this.setupScene()})}loadTexture(){return Vi(this,null,function*(){let e=new Oa;this.asteroidTexture=yield new Promise(t=>e.load("asteroid.jpg",t))})}setupScene(){this.camera=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,50),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);let e=new La(16777215,1);e.position.set(5,10,7.5),this.scene.add(e),window.addEventListener("resize",this.onWindowResize.bind(this)),this.addStarField(1e3),this.animate()}addStarField(e=1e3){let t=new Kn,i=[];for(let s=0;s<e;s++){let o=(Math.random()-.5)*1e3,a=(Math.random()-.5)*1e3,c=(Math.random()-.5)*1e3;i.push(o,a,c)}t.setAttribute("position",new Rn(i,3));let r=new io({color:16777215,size:.8,transparent:!0,opacity:.8,blending:Fa,depthWrite:!1,sizeAttenuation:!1});this.stars=new Aa(t,r),this.scene.add(this.stars)}animate(){requestAnimationFrame(()=>this.animate()),this.animateStars(),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animateStars(){let e=this.stars.geometry.attributes.position.array,t=1.5;for(let i=0;i<e.length;i+=3)e[i+2]+=t,e[i+2]>0&&(e[i+2]=Cm.randFloat(-1e3,-200));this.stars.geometry.attributes.position.needsUpdate=!0}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Dn({type:n,selectors:[["app-background"]],decls:2,vars:0,consts:[["canvasContainer",""],[1,"canvas-container"]],template:function(t,i){t&1&&jn(0,"div",1,0)},styles:[".canvas-container[_ngcontent-%COMP%]{width:100%;height:100%}"]})};var Pd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Dn({type:n,selectors:[["app-about"]],decls:7,vars:0,consts:[[1,"about-container"],[1,"info"],[1,"text"]],template:function(t,i){t&1&&(Ct(0,"section")(1,"div",0)(2,"h1"),tn(3,"Hey, I'm Anandteertha Rao"),Dt(),Ct(4,"div",1)(5,"p",2),tn(6,"I build things with code and love turning ideas into something real. Always reaching for the stars \u2728"),Dt()()()())},styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:block}section[_ngcontent-%COMP%]{background-position:center;height:100vh;min-height:70rem;max-height:120rem;position:relative}.about-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:90rem;width:90%}.info[_ngcontent-%COMP%]{margin:3rem auto 0;max-width:80rem}.text[_ngcontent-%COMP%]{color:#cfcfcf;opacity:.9;font-size:2rem;text-align:center;width:100%;line-height:2}"]})};var Od=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Dn({type:n,selectors:[["app-nav-bar"]],decls:21,vars:0,consts:[[1,"header-content"],[1,"logo-container"],[1,"image-container"],["src","assets/anand-pic.JPG","alt","Anandteertha Rao"],[1,"main"],[1,"links"],[1,"link-wrapper"],["href","#",1,"header-link"]],template:function(t,i){t&1&&(Ct(0,"header")(1,"div",0)(2,"div",1)(3,"div",2),jn(4,"img",3),Dt(),Ct(5,"span"),tn(6,"Anandteertha Rao"),Dt()(),Ct(7,"div",4)(8,"ul",5)(9,"li",6)(10,"a",7),tn(11,"About"),Dt()(),Ct(12,"li",6)(13,"a",7),tn(14,"Work Experience"),Dt()(),Ct(15,"li",6)(16,"a",7),tn(17,"Projects"),Dt()(),Ct(18,"li",6)(19,"a",7),tn(20,"Contact"),Dt()()()()()())},styles:["header[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:1000;box-shadow:0 10px 100px #6564641a;background-color:#000}.header-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem 5rem}.link-wrapper[_ngcontent-%COMP%]{list-style:none}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;color:#e4e4e4;transition:color .3s}.logo-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:5rem;height:5rem;border-radius:50px;overflow:hidden;margin-right:1.5rem;background:#7843e9}.logo-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;display:block}.logo-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.8rem;text-transform:uppercase;font-weight:700;letter-spacing:1px}.main[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:inherit;font-family:inherit}.links[_ngcontent-%COMP%]{display:flex}.header-link[_ngcontent-%COMP%]{padding:2.2rem 3rem;display:inline-block;font-size:1.6rem;color:#e4e4e4;text-transform:uppercase;letter-spacing:1px;font-weight:600;transition:color .3s;text-decoration:none}@media only screen and (max-width: 37.5em){.links[_ngcontent-%COMP%]{display:none}}"]})};function RP(n,e){if(n&1&&(Ct(0,"span",16),tn(1),Dt()),n&2){let t=e.$implicit;Zi(),hl(t)}}function NP(n,e){if(n&1&&(Ct(0,"div",5)(1,"div",6),jn(2,"img",7),Dt(),Ct(3,"div",8)(4,"div",9)(5,"div",10)(6,"h1"),tn(7),Dt()(),Ct(8,"div",11)(9,"small")(10,"i"),tn(11),Dt()()()(),Ct(12,"div",12)(13,"p",13),tn(14),Dt()(),Ct(15,"div",14),dl(16,RP,2,1,"span",15),Dt()()()),n&2){let t=e.$implicit;Zi(2),Go("src",t.logoPath,Zy)("alt",t.logoPath),Zi(5),pl("",t.name," | ",t.role,""),Zi(4),pl("",t.from," - ",t.to,""),Zi(3),hl(t.description),Zi(2),Go("ngForOf",t.skills)}}var Ld=class n{workExperience=[{name:"Raychem (Chemelex)",description:"Built and maintained full-stack applications using Angular, .NET, and Python. Led the development of a smart Python code editor and deployed it on AWS Lambda, allowing users to run custom scripts safely. Worked on a 3D piping system renderer using Three.js and .NET-based file parsers.",from:"5th July 2022",to:"1st April 2025",skills:["TypeScript","JavaScript","Angular","Three.Js","Python",".NET","HTML","CSS","AWS","GIT","Gitlab","JIRA"],logoPath:"assets/chemelex.png",role:"Full Stack Developer"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Dn({type:n,selectors:[["app-work-experience"]],decls:7,vars:1,consts:[[1,"main-container"],[1,"title"],[1,"heading-main"],[1,"content"],["class","content-container",4,"ngFor","ngForOf"],[1,"content-container"],[1,"logo"],[3,"src","alt"],[1,"main"],[1,"header"],[1,"header-details"],[1,"header-duration"],[1,"description"],[1,"text-description"],[1,"skills"],["class","skill",4,"ngFor","ngForOf"],[1,"skill"]],template:function(t,i){t&1&&(Ct(0,"section")(1,"div",0)(2,"div",1)(3,"h1",2),tn(4,"Work Experience"),Dt()(),Ct(5,"div",3),dl(6,NP,17,8,"div",4),Dt()()()),t&2&&(Zi(6),Go("ngForOf",i.workExperience))},dependencies:[yl,vl],encapsulation:2})};var Fd=class n{title="client";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Dn({type:n,selectors:[["app-root"]],decls:4,vars:0,template:function(t,i){t&1&&jn(0,"app-nav-bar")(1,"app-background")(2,"app-about")(3,"app-work-experience")},dependencies:[Rd,Pd,Od,Ld],styles:["[_nghost-%COMP%]{display:block;position:relative;z-index:0}"]})};Kh(Fd,Z0).catch(n=>console.error(n));
