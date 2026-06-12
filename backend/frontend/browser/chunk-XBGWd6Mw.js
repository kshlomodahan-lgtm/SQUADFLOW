import {n as nt,N as N$1,W as W$1}from'./chunk-BLK7gTFM.js';import {l as lt$1,d as dt$1,F as Ft}from'./chunk-_inf9Gjx.js';import {k as qo,u as ur,N as NT,aN as bm,L as c_,a3 as Bm,Q as u_,T as Tb,d as Mw,g as bb,D as D$1,m as At,n as ce$1,p as C,a6 as zo,aO as g2,aP as GS,a1 as Zo,a8 as Pm,aB as N_,e as dy,a4 as id,a5 as sd,ax as q$1,aQ as Eo,ac as et,E as Ee$1,h as tc,z as iE,av as Se,aC as Rn$1,aR as WS,aS as Yr,ay as z,aT as tE,aU as qD}from'./main-IIU4YP6X.js';function N(n){return n.buttons===0||n.detail===0}function L(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return !!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var ct;function Pt(){if(ct==null){let n=typeof document<"u"?document.head:null;ct=!!(n&&(n.createShadowRoot||n.attachShadow));}return ct}function dt(n){if(Pt()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function b(n){return n.composedPath?n.composedPath()[0]:n.target}var S;function Bt(){if(S==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>S=!0}));}finally{S=S||false;}return S}function O(n){return Bt()?n:!!n.capture}function me(n,a=0){return Ut(n)?Number(n):arguments.length===2?a:0}function Ut(n){return !isNaN(parseFloat(n))&&!isNaN(Number(n))}function x(n){return n instanceof At?n.nativeElement:n}var zt=new C("cdk-input-modality-detector-options"),jt={ignoreKeys:[18,17,224,91,16]},Vt=650,mt={passive:true,capture:true},Ht=(()=>{class n{_platform=D$1(N$1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Yr(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=b(t));};_onMousedown=t=>{Date.now()-this._lastTouchMs<Vt||(this._modality.next(N(t)?"keyboard":"mouse"),this._mostRecentTarget=b(t));};_onTouchstart=t=>{if(L(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=b(t);};constructor(){let t=D$1(ce$1),e=D$1(q$1),o=D$1(zt,{optional:true});if(this._options=z(z({},jt),o),this.modalityDetected=this._modality.pipe(tE(1)),this.modalityChanged=this.modalityDetected.pipe(qD()),this._platform.isBrowser){let i=D$1(Rn$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,mt),i.listen(e,"mousedown",this._onMousedown,mt),i.listen(e,"touchstart",this._onTouchstart,mt)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t());}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),P=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(P||{}),Kt=new C("cdk-focus-monitor-default-options"),$=O({passive:true,capture:true}),lt=(()=>{class n{_ngZone=D$1(ce$1);_platform=D$1(N$1);_inputModalityDetector=D$1(Ht);_origin=null;_lastFocusOrigin=null;_windowFocused=false;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=false;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=true,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=false);};_document=D$1(q$1);_stopInputModalityDetector=new Ee$1;constructor(){let t=D$1(Kt,{optional:true});this._detectionMode=t?.detectionMode||P.IMMEDIATE;}_rootNodeFocusAndBlurListener=t=>{let e=b(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o);};monitor(t,e=false){let o=x(t);if(!this._platform.isBrowser||o.nodeType!==1)return tc();let i=dt(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=true),s.subject;let l={checkChildren:e,subject:new Ee$1,rootNode:i};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=x(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o));}focusVia(t,e,o){let i=x(t),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([l,k])=>this._originChanged(l,e,k)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(o));}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e));}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===P.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program");}_setOrigin(t,e=false){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===P.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Vt:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o);}});}_onFocus(t,e){let o=this._elementInfo.get(e),i=b(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o);}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null));}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e));}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,$),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,$);}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(iE(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,true);}));}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,$),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,$),this._rootNodeFocusListenerCount.delete(e));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e;}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o]);}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return  false;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return  true}return  false}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();var le=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();var Zt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=qo({type:n});static \u0275inj=ur({providers:[le]})}return n})();var E=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(E||{}),Gt="cdk-high-contrast-black-on-white",$t="cdk-high-contrast-white-on-black",ut="cdk-high-contrast-active",Wt=(()=>{class n{_platform=D$1(N$1);_hasCheckedHighContrastMode=false;_document=D$1(q$1);_breakpointSubscription;constructor(){this._breakpointSubscription=D$1(W$1).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=false,this._applyBodyHighContrastModeCssClasses());});}getHighContrastMode(){if(!this._platform.isBrowser)return E.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),i){case "rgb(0,0,0)":case "rgb(45,50,54)":case "rgb(32,32,32)":return E.WHITE_ON_BLACK;case "rgb(255,255,255)":case "rgb(255,250,239)":return E.BLACK_ON_WHITE}return E.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe();}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ut,Gt,$t),this._hasCheckedHighContrastMode=true;let e=this.getHighContrastMode();e===E.BLACK_ON_WHITE?t.add(ut,Gt):e===E.WHITE_ON_BLACK&&t.add(ut,$t);}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})(),ue=(()=>{class n{constructor(){D$1(Wt)._applyBodyHighContrastModeCssClasses();}static \u0275fac=function(e){return new(e||n)};static \u0275mod=qo({type:n});static \u0275inj=ur({imports:[Zt]})}return n})();function dn(n,...a){return a.length?a.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var bt={},pt=class n{_appId=D$1(Eo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=false){return this._appId!=="ng"&&(a+=this._appId),bt.hasOwnProperty(a)||(bt[a]=0),`${a}${t?n._infix+"-":""}${bt[a]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})};var Xt=" ";function be(n,a,t){let e=Y(n,a);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),n.setAttribute(a,e.join(Xt)));}function pe(n,a,t){let e=Y(n,a);t=t.trim();let o=e.filter(i=>i!==t);o.length?n.setAttribute(a,o.join(Xt)):n.removeAttribute(a);}function Y(n,a){return n.getAttribute(a)?.match(/\S+/g)??[]}var qt="cdk-describedby-message",W="cdk-describedby-host",ht=0,In=(()=>{class n{_platform=D$1(N$1);_document=D$1(q$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${ht++}`;constructor(){D$1(dt$1).load(Ft),this._id=D$1(Eo)+"-"+ht++;}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let i=ft(e,o);typeof e!="string"?(Yt(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i);}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let i=ft(e,o);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e=="string"){let s=this._messageRegistry.get(i);s&&s.referenceCount===0&&this._deleteMessageElement(i);}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null);}ngOnDestroy(){let t=this._document.querySelectorAll(`[${W}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(W);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear();}_createMessageElement(t,e){let o=this._document.createElement("div");Yt(o,this._id),o.textContent=t,e&&o.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(ft(t,e),{messageElement:o,referenceCount:0});}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t);}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(t),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o;}_removeCdkDescribedByReferenceIds(t){let e=Y(t,"aria-describedby").filter(o=>o.indexOf(qt)!=0);t.setAttribute("aria-describedby",e.join(" "));}_addMessageReference(t,e){let o=this._messageRegistry.get(e);be(t,"aria-describedby",o.messageElement.id),t.setAttribute(W,this._id),o.referenceCount++;}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,pe(t,"aria-describedby",o.messageElement.id),t.removeAttribute(W);}_isElementDescribedByMessage(t,e){let o=Y(t,"aria-describedby"),i=this._messageRegistry.get(e),s=i&&i.messageElement.id;return !!s&&o.indexOf(s)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return  false;if(e&&typeof e=="object")return  true;let o=e==null?"":`${e}`.trim(),i=t.getAttribute("aria-label");return o?!i||i.trim()!==o:false}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();function ft(n,a){return typeof n=="string"?`${a||""}/${n}`:n}function Yt(n,a){n.id||(n.id=`${qt}-${a}-${ht++}`);}var D;function Rn(){if(D==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return D=false,D;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)D=true;else {let n=Element.prototype.scrollTo;n?D=!/\{\s*\[native code\]\s*\}/.test(n.toString()):D=false;}}return D}function Ln(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Vn(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Kn(n){return n!=null&&`${n}`!="false"}var m=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(m||{}),vt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=m.HIDDEN;constructor(a,t,e,o=false){this._renderer=a,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o;}fadeOut(){this._renderer.fadeOutRipple(this);}},Qt=O({passive:true,capture:true}),gt=class{_events=new Map;addHandler(a,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,new Set([o]));}else this._events.set(t,new Map([[e,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Qt);});}removeHandler(a,t,e){let o=this._events.get(a);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Qt)));}_delegateEventHandler=a=>{let t=b(a);t&&this._events.get(a.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(a));});}},B={enterDuration:225,exitDuration:150},fe=800,Jt=O({passive:true,capture:true}),te=["mousedown","touchstart"],ee=["mouseup","mouseleave","touchend","touchcancel"],he=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NT({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),X=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=false;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=false;_containerRect=null;static _eventManager=new gt;constructor(a,t,e,o,i){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=x(e)),i&&i.get(dt$1).load(he);}fadeInRipple(a,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=z(z({},B),e.animation);e.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||ve(a,t,o),l=a-o.left,k=t-o.top,w=i.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-s}px`,c.style.top=`${k-s}px`,c.style.height=`${s*2}px`,c.style.width=`${s*2}px`,e.color!=null&&(c.style.backgroundColor=e.color),c.style.transitionDuration=`${w}ms`,this._containerElement.appendChild(c);let xt=window.getComputedStyle(c),de=xt.transitionProperty,Et=xt.transitionDuration,Q=de==="none"||Et==="0s"||Et==="0s, 0s"||o.width===0&&o.height===0,A=new vt(this,c,e,Q);c.style.transform="scale3d(1, 1, 1)",A.state=m.FADING_IN,e.persistent||(this._mostRecentTransientRipple=A);let U=null;return !Q&&(w||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let wt=()=>{U&&(U.fallbackTimer=null),clearTimeout(At),this._finishRippleTransition(A);},J=()=>this._destroyRipple(A),At=setTimeout(J,w+100);c.addEventListener("transitionend",wt),c.addEventListener("transitioncancel",J),U={onTransitionEnd:wt,onTransitionCancel:J,fallbackTimer:At};}),this._activeRipples.set(A,U),(Q||!w)&&this._finishRippleTransition(A),A}fadeOutRipple(a){if(a.state===m.FADING_OUT||a.state===m.HIDDEN)return;let t=a.element,e=z(z({},B),a.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",a.state=m.FADING_OUT,(a._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(a);}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut();});}setupTriggerEvents(a){let t=x(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,te.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this);}));}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ee.forEach(t=>{this._triggerElement.addEventListener(t,this,Jt);});}),this._pointerUpEventsRegistered=true);}_finishRippleTransition(a){a.state===m.FADING_IN?this._startFadeOutTransition(a):a.state===m.FADING_OUT&&this._destroyRipple(a);}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:e}=a.config;a.state=m.VISIBLE,!e&&(!t||!this._isPointerDown)&&a.fadeOut();}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=m.HIDDEN,t!==null&&(a.element.removeEventListener("transitionend",t.onTransitionEnd),a.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove();}_onMousedown(a){let t=N(a),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fe;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=true,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig));}_onTouchStart(a){if(!this._target.rippleDisabled&&!L(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=true;let t=a.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=false,this._getActiveRipples().forEach(a=>{let t=a.state===m.VISIBLE||a.config.terminateOnPointerUp&&a.state===m.FADING_IN;!a.config.persistent&&t&&a.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(te.forEach(t=>n._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(ee.forEach(t=>a.removeEventListener(t,this,Jt)),this._pointerUpEventsRegistered=false));}};function ve(n,a,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(e*e+o*o)}var ne=new C("mat-ripple-global-options");var ge={capture:true},_e=["focus","mousedown","mouseenter","touchstart"],_t="mat-ripple-loader-uninitialized",yt="mat-ripple-loader-class-name",oe="mat-ripple-loader-centered",q="mat-ripple-loader-disabled",ae=(()=>{class n{_document=D$1(q$1);_animationsDisabled=nt();_globalRippleOptions=D$1(ne,{optional:true});_platform=D$1(N$1);_ngZone=D$1(ce$1);_injector=D$1(Se);_eventCleanups;_hosts=new Map;constructor(){let t=D$1(Rn$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>_e.map(e=>t.listen(this._document,e,this._onInteraction,ge)));}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e());}configureRipple(t,e){t.setAttribute(_t,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(yt))&&t.setAttribute(yt,e.className||""),e.centered&&t.setAttribute(oe,""),e.disabled&&t.setAttribute(q,"");}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=true,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(q,""):t.removeAttribute(q);}_onInteraction=t=>{let e=b(t);if(e instanceof HTMLElement){let o=e.closest(`[${_t}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o);}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(yt)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??B.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??B.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(q),rippleConfig:{centered:t.hasAttribute(oe),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},k=new X(l,this._ngZone,e,this._platform,this._injector),w=!l.rippleDisabled;w&&k.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:k,hasSetUpEvents:w}),t.removeAttribute(_t);}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t));}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac})}return n})();var ie=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NT({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return n})();var ye=["*",[["","progressIndicator",""]]],xe=["*","[progressIndicator]"];function Ee(n,a){n&1&&(id(0,"div",1),u_(1,1),sd());}var we=new C("MAT_BUTTON_CONFIG");function re(n){return n==null?void 0:WS(n)}var se=(()=>{class n{_elementRef=D$1(At);_ngZone=D$1(ce$1);_animationsDisabled=nt();_config=D$1(we,{optional:true});_focusMonitor=D$1(lt);_cleanupClick;_renderer=D$1(zo);_rippleLoader=D$1(ae);_isAnchor;_isFab=false;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled();}_disableRipple=false;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled();}_disabled=false;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t;}showProgress=g2(false,{transform:GS});constructor(){D$1(dt$1).load(ie);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??false,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?true:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:true}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());}));}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Zo({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,o){e&2&&(Pm("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),N_(o.color?"mat-"+o.color:""),dy("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",GS],disabled:[2,"disabled","disabled",GS],ariaDisabled:[2,"aria-disabled","ariaDisabled",GS],disabledInteractive:[2,"disabledInteractive","disabledInteractive",GS],tabIndex:[2,"tabIndex","tabIndex",re],_tabindex:[2,"tabindex","_tabindex",re],showProgress:[1,"showProgress"]}})}return n})(),Ae=(()=>{class n extends se{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:true});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NT({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[bm],ngContentSelectors:xe,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(c_(ye),Bm(0,"span",0),u_(1),Tb(2,Ee,2,0,"div",1),Bm(3,"span",2)(4,"span",3)),e&2&&(Mw(2),bb(o.showProgress()?2:-1));},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=qo({type:n});static \u0275inj=ur({imports:[lt$1]})}return n})();var Do=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=qo({type:n});static \u0275inj=ur({imports:[ce,lt$1]})}return n})();export{Ae as A,Do as D,In as I,Kn as K,Ln as L,Rn as R,Vn as V,Zt as Z,b,dn as d,lt as l,me as m,pt as p,ue as u,x};