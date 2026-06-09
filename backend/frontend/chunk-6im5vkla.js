import {D as Do,Z as Zt$2,p as pt$1,K as Kn}from'./chunk-CH3FaziO.js';import {d as ds,t as te,f,c as ce,G,S as ST,M as Mv,z as zs,w as wb,o as od,j as jm,L as L_,R as Rp,O as Op,l as ly,_ as _w,a as dy,C as Cb,r as rc,b as tc,e as M,q as qv,A,g as qo,u as ur,B as Bm,h as ry,i as u_,k as l_,D,m as At$1,n as Cd,p as ce$1,s as C,v as h2,x as gS,y as g2,E as Ee,V as Vp,F as rE,H as _e$1,J as JD,I as at,K as iE,N as VD,P as y2,Q as DM,T as s_,U as Sm,W as Jm,X as a_,Z as Z_,Y as iy,$ as d_,a0 as oy,a1 as ny,a2 as Zo,a3 as re,a4 as id,a5 as sd,a6 as zo,a7 as Gm,a8 as Pm,a9 as o_,aa as Lm,ab as f_,ac as et,ad as Ey,ae as x,af as qf,ag as fS,ah as Rb,ai as Ep,aj as Ip,ak as VC,al as UC,am as Mg,an as dd}from'./main-V5XFSXHY.js';import {J as J$1}from'./chunk-BZEck4_F.js';import {N,n as nt}from'./chunk-DYGd92fI.js';import {Z as Zt$1,s as st,g as gt$1}from'./chunk-B3qeO9_a.js';import {g as ge$1,F as Fn,N as Nn,E as En,z as ze,b as bn,A as An,n as nn,e as en}from'./chunk-DrdQ9v1f.js';var he=class{_box;_destroyed=new Ee;_resizeSubject=new Ee;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)));}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new x(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),i.unsubscribe(),this._elementObservables.delete(o);}}).pipe(at(e=>e.some(i=>i.target===o)),qf({bufferSize:1,refCount:true}),iE(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},ft=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=D(ce$1);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(e,i){let n=i?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new he(n)),this._observers.get(n).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=et({token:t,factory:t.\u0275fac})}return t})();var Ot=["notch"],Pt=["*"],ut=["iconPrefixContainer"],pt=["textPrefixContainer"],ht=["iconSuffixContainer"],gt=["textSuffixContainer"],Tt=["textField"],At=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],kt=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Rt(t,o){t&1&&jm(0,"span",21);}function zt(t,o){if(t&1&&(zs(0,"label",20),a_(1,1),wb(2,Rt,1,0,"span",21),od()),t&2){let e=o_(2);Lm("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Pm("for",e._control.disableAutomaticLabeling?null:e._control.id),_w(2),Cb(!e.hideRequiredMarker&&e._control.required?2:-1);}}function Lt(t,o){if(t&1&&wb(0,zt,3,5,"label",20),t&2){let e=o_();Cb(e._hasFloatingLabel()?0:-1);}}function It(t,o){t&1&&jm(0,"div",7);}function Nt(t,o){}function Bt(t,o){if(t&1&&Sm(0,Nt,0,0,"ng-template",13),t&2){o_(2);let e=f_(1);Lm("ngTemplateOutlet",e);}}function Ht(t,o){if(t&1&&(zs(0,"div",9),wb(1,Bt,1,1,null,13),od()),t&2){let e=o_();Lm("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),_w(),Cb(e._forceDisplayInfixLabel()?-1:1);}}function Vt(t,o){t&1&&(zs(0,"div",10,2),a_(2,2),od());}function qt(t,o){t&1&&(zs(0,"div",11,3),a_(2,3),od());}function jt(t,o){}function Gt(t,o){if(t&1&&Sm(0,jt,0,0,"ng-template",13),t&2){o_();let e=f_(1);Lm("ngTemplateOutlet",e);}}function Qt(t,o){t&1&&(zs(0,"div",14,4),a_(2,4),od());}function Wt(t,o){t&1&&(zs(0,"div",15,5),a_(2,5),od());}function Ut(t,o){t&1&&jm(0,"div",16);}function Zt(t,o){t&1&&(zs(0,"div",18),a_(1,6),od());}function $t(t,o){if(t&1&&(zs(0,"mat-hint",22),L_(1),od()),t&2){let e=o_(2);Lm("id",e._hintLabelId),_w(),Ey(e.hintLabel);}}function Yt(t,o){if(t&1&&(zs(0,"div",19),wb(1,$t,2,2,"mat-hint",22),a_(2,7),jm(3,"div",23),a_(4,8),od()),t&2){let e=o_();_w(),Cb(e.hintLabel?1:-1);}}var ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=Zo({type:t,selectors:[["mat-label"]]})}return t})(),Kt=new C("MatError");var _e=(()=>{class t{align="start";id=D(pt$1).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=Zo({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,n){i&2&&(Gm("id",n.id),Pm("align",null),dy("mat-mdc-form-field-hint-end",n.align==="end"));},inputs:{align:"align",id:"id"}})}return t})(),Xt=new C("MatPrefix");var Jt=new C("MatSuffix");var Ct=new C("FloatingLabelParent"),_t=(()=>{class t{_elementRef=D(At$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize();}_floating=false;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=false;_resizeObserver=D(ft);_ngZone=D(ce$1);_parent=D(Ct);_resizeSubscription=new re;ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return ei(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Zo({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,n){i&2&&dy("mdc-floating-label--float-above",n.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function ei(t){let o=t;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(true);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var bt="mdc-line-ripple--active",X="mdc-line-ripple--deactivating",xt=(()=>{class t{_elementRef=D(At$1);_cleanupTransitionEnd;constructor(){let e=D(ce$1),i=D(zo);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let e=this._elementRef.nativeElement.classList;e.remove(X),e.add(bt);}deactivate(){this._elementRef.nativeElement.classList.add(X);}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,n=i.contains(X);e.propertyName==="opacity"&&n&&i.remove(bt,X);};ngOnDestroy(){this._cleanupTransitionEnd();}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Zo({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),vt=(()=>{class t{_elementRef=D(At$1);_ngZone=D(ce$1);open=false;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="");}))):e.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`);}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=ST({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,n){if(i&1&&ry(Ot,5),i&2){let l;u_(l=l_())&&(n._notch=l.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,n){i&2&&dy("mdc-notched-outline--notched",n.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Pt,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,n){i&1&&(s_(),Bm(0,"div",1),id(1,"div",2,0),a_(3),sd(),Bm(4,"div",3));},encapsulation:2})}return t})(),ti=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=false;empty=false;shouldLabelFloat=false;required=false;disabled=false;errorState=false;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=Zo({type:t})}return t})();var ii=new C("MatFormField"),ni=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),yt="fill",oi="auto",Dt="fixed",ri="translateY(-50%)",Et=(()=>{class t{_elementRef=D(At$1);_changeDetectorRef=D(Cd);_platform=D(N);_idGenerator=D(pt$1);_ngZone=D(ce$1);_defaults=D(ni,{optional:true});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=h2("iconPrefixContainer");_textPrefixContainerSignal=h2("textPrefixContainer");_iconSuffixContainerSignal=h2("iconSuffixContainer");_textSuffixContainerSignal=h2("textSuffixContainer");_prefixSuffixContainers=gS(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=g2(ge);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Kn(e);}_hideRequiredMarker=false;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||oi}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||yt;this._appearanceSignal.set(i);}_appearanceSignal=ds(yt);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Dt}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Dt;}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints();}_hintLabel="";_hasIconPrefix=false;_hasTextPrefix=false;_hasIconSuffix=false;_hasTextSuffix=false;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e;}_destroyed=new Ee;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,i=D(gt$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Vp(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=gS(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(e){let i=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(n+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(rE([void 0,void 0]),_e$1(()=>[i.errorState,i.userAriaDescribedBy]),JD(),at(([[l,m],[d,v]])=>l!==d||m!==v)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(iE(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),VD(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=true,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=false,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e);}_syncOutlineLabelOffset(){y2({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"});}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())});}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return !this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=gS(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():false}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let l=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,m=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;l?e.push(l.id):this._hintLabel&&e.push(this._hintLabelId),m&&e.push(m.id);}else this._errorChildren&&e.push(...this._errorChildren.map(l=>l.id));let i=this._control.describedByIds,n;if(i){let l=this._describedByIds||e;n=e.concat(i.filter(m=>m&&!l.includes(m)));}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return ["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,l=this._textSuffixContainer?.nativeElement,m=e?.getBoundingClientRect().width??0,d=i?.getBoundingClientRect().width??0,v=n?.getBoundingClientRect().width??0,E=l?.getBoundingClientRect().width??0,k=this._currentDirection==="rtl"?"-1":"1",G=`${m+d}px`,Q=`calc(${k} * (${G} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ie=`var(--mat-mdc-form-field-label-transform, ${ri} translateX(${Q}))`,St=m+d+v+E;return [ie,St]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),n!==null&&this._notchedOutline?._setMaxWidth(n);}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=ST({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,n,l){if(i&1&&(oy(l,n._labelChild,ge,5),ny(l,ti,5)(l,Xt,5)(l,Jt,5)(l,Kt,5)(l,_e,5)),i&2){d_();let m;u_(m=l_())&&(n._formFieldControl=m.first),u_(m=l_())&&(n._prefixChildren=m),u_(m=l_())&&(n._suffixChildren=m),u_(m=l_())&&(n._errorChildren=m),u_(m=l_())&&(n._hintChildren=m);}},viewQuery:function(i,n){if(i&1&&(iy(n._iconPrefixContainerSignal,ut,5)(n._textPrefixContainerSignal,pt,5)(n._iconSuffixContainerSignal,ht,5)(n._textSuffixContainerSignal,gt,5),ry(Tt,5)(ut,5)(pt,5)(ht,5)(gt,5)(_t,5)(vt,5)(xt,5)),i&2){d_(4);let l;u_(l=l_())&&(n._textField=l.first),u_(l=l_())&&(n._iconPrefixContainer=l.first),u_(l=l_())&&(n._textPrefixContainer=l.first),u_(l=l_())&&(n._iconSuffixContainer=l.first),u_(l=l_())&&(n._textSuffixContainer=l.first),u_(l=l_())&&(n._floatingLabel=l.first),u_(l=l_())&&(n._notchedOutline=l.first),u_(l=l_())&&(n._lineRipple=l.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,n){i&2&&dy("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Z_([{provide:ii,useExisting:t},{provide:Ct,useExisting:t}])],ngContentSelectors:kt,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,n){if(i&1&&(s_(At),Sm(0,Lt,1,1,"ng-template",null,0,fS),zs(2,"div",6,1),Jm("click",function(m){return n._control.onContainerClick(m)}),wb(4,It,1,0,"div",7),zs(5,"div",8),wb(6,Ht,2,2,"div",9),wb(7,Vt,3,0,"div",10),wb(8,qt,3,0,"div",11),zs(9,"div",12),wb(10,Gt,1,1,null,13),a_(11),od(),wb(12,Qt,3,0,"div",14),wb(13,Wt,3,0,"div",15),od(),wb(14,Ut,1,0,"div",16),od(),zs(15,"div",17),wb(16,Zt,2,0,"div",18)(17,Yt,5,1,"div",19),od()),i&2){let l;_w(2),dy("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),_w(2),Cb(!n._hasOutline()&&!n._control.disabled?4:-1),_w(2),Cb(n._hasOutline()?6:-1),_w(),Cb(n._hasIconPrefix?7:-1),_w(),Cb(n._hasTextPrefix?8:-1),_w(2),Cb(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),_w(2),Cb(n._hasTextSuffix?12:-1),_w(),Cb(n._hasIconSuffix?13:-1),_w(),Cb(n._hasOutline()?-1:14),_w(),dy("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let m=n._getSubscriptMessageType();_w(),Cb((l=m)==="error"?16:l==="hint"?17:-1);}},dependencies:[_t,vt,DM,xt,_e],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var j=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=qo({type:t});static \u0275inj=ur({imports:[Zt$2,Et,st]})}return t})();var Mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=qo({type:t});static \u0275inj=ur({})}return t})();var wt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=qo({type:t});static \u0275inj=ur({imports:[j,j,Mt,st]})}return t})();var li=["canvas"],J=class t{canvasRef;raf=0;nodes=[];resizeObs;ngAfterViewInit(){let o=this.canvasRef.nativeElement,e=o.getContext("2d"),i=()=>{o.width=o.offsetWidth,o.height=o.offsetHeight,this.initNodes(o.width,o.height);};this.resizeObs=new ResizeObserver(i),this.resizeObs.observe(o),i(),this.animate(e,o);}initNodes(o,e){let i=Math.floor(o*e/14e3);this.nodes=[];for(let n=0;n<i;n++){let l=n<i*.2;this.nodes.push({x:Math.random()*o,y:Math.random()*e,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:l?3.5:1.8,pulse:Math.random()*Math.PI*2,pulseSpeed:.02+Math.random()*.02});}}animate(o,e){let n=()=>{let l=e.width,m=e.height;o.clearRect(0,0,l,m);for(let d of this.nodes)d.x+=d.vx,d.y+=d.vy,d.pulse+=d.pulseSpeed,(d.x<0||d.x>l)&&(d.vx*=-1),(d.y<0||d.y>m)&&(d.vy*=-1);for(let d=0;d<this.nodes.length;d++)for(let v=d+1;v<this.nodes.length;v++){let E=this.nodes[d],k=this.nodes[v],G=E.x-k.x,te=E.y-k.y,Q=Math.sqrt(G*G+te*te);if(Q<130){let ie=(1-Q/130)*.3;o.beginPath(),o.strokeStyle=`rgba(0,229,255,${ie})`,o.lineWidth=.8,o.moveTo(E.x,E.y),o.lineTo(k.x,k.y),o.stroke();}}for(let d of this.nodes){let v=Math.sin(d.pulse)*.3+.7;if(d.r>2){let E=o.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*5);E.addColorStop(0,`rgba(0,229,255,${.18*v})`),E.addColorStop(1,"rgba(0,229,255,0)"),o.beginPath(),o.arc(d.x,d.y,d.r*5,0,Math.PI*2),o.fillStyle=E,o.fill();}o.beginPath(),o.arc(d.x,d.y,d.r,0,Math.PI*2),o.fillStyle=d.r>2?`rgba(0,229,255,${.7*v+.3})`:`rgba(255,255,255,${.45*v+.25})`,o.fill();}this.raf=requestAnimationFrame(n);};n();}ngOnDestroy(){cancelAnimationFrame(this.raf),this.resizeObs?.disconnect();}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=ST({type:t,selectors:[["app-neural-net"]],viewQuery:function(e,i){if(e&1&&ry(li,5),e&2){let n;u_(n=l_())&&(i.canvasRef=n.first);}},decls:2,vars:0,consts:[["canvas",""]],template:function(e,i){e&1&&Bm(0,"canvas",null,0);},styles:["[_nghost-%COMP%]{display:block;position:absolute;inset:0;pointer-events:none}canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};var ee=class t{constructor(o){this.http=o;}http;getPublicInfo(o){return this.http.get(`/api/public/tenant/${o}`).pipe(rc(()=>tc({success:false,companyName:o,logoUrl:null,systemName:"",promptText:"",copyright:"",brandColor:"#C8472A"})))}static \u0275fac=function(e){return new(e||t)(M(qv))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})};function si(t,o){t&1&&(zs(0,"div",2),jm(1,"div",34),od());}function ci(t,o){t&1&&(zs(0,"div",3)(1,"div",35),L_(2,"\u26A0"),od(),zs(3,"h3"),L_(4,"\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF"),od(),zs(5,"p"),L_(6,"\u05E4\u05E0\u05D4 \u05DC\u05DE\u05E0\u05D4\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DC\u05E7\u05D1\u05DC\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF \u05E9\u05DC\u05DA."),od()());}function mi(t,o){if(t&1&&jm(0,"img",36),t&2){let e=o_(2);Lm("src",e.tenant().logoUrl,Mg)("alt",e.tenant().companyName);}}function fi(t,o){if(t&1&&(zs(0,"div",37),L_(1),od()),t&2){let e=o_(2);_w(),Ey(e.tenant().companyName.charAt(0));}}function ui(t,o){if(t&1&&(zs(0,"div",41),Rp(),zs(1,"svg",21),jm(2,"circle",58)(3,"line",59)(4,"line",60),od(),L_(5),od()),t&2){let e=o_(2);_w(5),dd(" ",e.error()," ");}}function pi(t,o){t&1&&(zs(0,"div",48),L_(1,"\u05E0\u05D0 \u05DC\u05D4\u05D6\u05D9\u05DF \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9"),od());}function hi(t,o){t&1&&(Rp(),zs(0,"svg",21),jm(1,"path",61)(2,"line",62),od());}function gi(t,o){t&1&&(Rp(),zs(0,"svg",21),jm(1,"path",63)(2,"circle",22),od());}function _i(t,o){t&1&&(zs(0,"div",48),L_(1,"\u05E0\u05D0 \u05DC\u05D4\u05D6\u05D9\u05DF \u05E1\u05D9\u05E1\u05DE\u05D4"),od());}function bi(t,o){if(t&1){let e=Rb();wb(0,mi,1,2,"img",36)(1,fi,2,1,"div",37),zs(2,"div",38),L_(3),od(),zs(4,"h2",39),L_(5,"\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA"),od(),zs(6,"p",40),L_(7),od(),wb(8,ui,6,1,"div",41),zs(9,"form",42),Jm("ngSubmit",function(){Ep(e);let n=o_();return Ip(n.submit())}),zs(10,"div",43)(11,"label"),L_(12,"\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9"),od(),zs(13,"div",44),jm(14,"input",45),VC(),Rp(),zs(15,"svg",46),jm(16,"path",47),od()(),wb(17,pi,2,0,"div",48),od(),Op(),zs(18,"div",49)(19,"label"),L_(20,"\u05E1\u05D9\u05E1\u05DE\u05D4"),od(),zs(21,"div",44),jm(22,"input",50),VC(),Rp(),zs(23,"svg",46),jm(24,"rect",51)(25,"path",52),od(),Op(),zs(26,"button",53),Jm("click",function(){Ep(e);let n=o_();return Ip(n.showPass.set(!n.showPass()))}),wb(27,hi,3,0,":svg:svg",21)(28,gi,3,0,":svg:svg",21),od()(),wb(29,_i,2,0,"div",48),od(),zs(30,"button",54)(31,"span",55),L_(32,"\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA"),od(),jm(33,"div",56),od()(),zs(34,"div",57),L_(35),od();}if(t&2){let e=o_();Cb(e.tenant().logoUrl?0:1),_w(3),Ey(e.tenant().systemName),_w(4),Ey(e.tenant().promptText),_w(),Cb(e.error()?8:-1),_w(),dy("shake",e.shake()),Lm("formGroup",e.form),_w(5),dy("input-error",e.form.get("username")?.invalid&&e.form.get("username")?.touched),UC(),_w(3),Cb(e.form.get("username")?.invalid&&e.form.get("username")?.touched?17:-1),_w(5),dy("input-error",e.form.get("password")?.invalid&&e.form.get("password")?.touched),Lm("type",e.showPass()?"text":"password"),UC(),_w(5),Cb(e.showPass()?27:28),_w(2),Cb(e.form.get("password")?.invalid&&e.form.get("password")?.touched?29:-1),_w(),dy("loading",e.loading()),Lm("disabled",e.loading()),_w(5),Ey(e.tenant().copyright);}}var Ft=class t{constructor(o,e,i,n,l){this.fb=o;this.auth=e;this.router=i;this.route=n;this.tenantSvc=l;}fb;auth;router;route;tenantSvc;form;loading=ds(false);loadingTenant=ds(true);shake=ds(false);error=ds("");showPass=ds(false);tenantCode=ds("");noTenant=ds(false);tenant=ds(null);ngOnInit(){if(this.auth.isLoggedIn()){this.router.navigate(["/app/dashboard"]);return}let o=this.route.snapshot.queryParamMap.get("tenant")??"",e=localStorage.getItem("lastTenantCode")??"",i=(o||e).toUpperCase();if(!i){this.noTenant.set(true),this.loadingTenant.set(false);return}this.tenantCode.set(i),localStorage.setItem("lastTenantCode",i),this.tenantSvc.getPublicInfo(i).subscribe(n=>{n.success?(this.tenant.set(n),this.form=this.fb.group({username:["",ge$1.required],password:["",ge$1.required]})):this.noTenant.set(true),this.loadingTenant.set(false);});}triggerShake(){this.shake.set(true),setTimeout(()=>this.shake.set(false),450);}submit(){if(this.form.invalid){this.form.markAllAsTouched(),this.triggerShake();return}this.loading.set(true),this.error.set("");let{username:o,password:e}=this.form.value;this.auth.login({tenantCode:this.tenantCode(),username:o,password:e}).subscribe({next:i=>{i.success?this.router.navigate(["/app/dashboard"]):(this.error.set(i.message??"\u05E9\u05D2\u05D9\u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4"),this.loading.set(false),this.triggerShake());},error:i=>{this.error.set(i.error?.message??"\u05E9\u05D2\u05D9\u05D0\u05EA \u05E9\u05E8\u05EA. \u05E0\u05E1\u05D4 \u05E9\u05E0\u05D9\u05EA."),this.loading.set(false),this.triggerShake();}});}static \u0275fac=function(e){return new(e||t)(te(Fn),te(f),te(ce),te(G),te(ee))};static \u0275cmp=ST({type:t,selectors:[["app-login"]],decls:73,vars:7,consts:[[1,"login-page"],[1,"form-side"],[1,"splash"],[1,"no-tenant"],[1,"hero"],[1,"orb","orb-brand"],[1,"orb","orb-blue"],[1,"sf-logo-wrap"],[1,"sf-wordmark"],[1,"sf-squad"],[1,"sf-flow"],[1,"sf-tagline"],[1,"hero-body"],[1,"live-badge"],[1,"live-dot"],[1,"hero-title"],[1,"hero-sub"],[1,"hero-sub","hero-sub-2"],[1,"hero-features"],[1,"feat"],[1,"feat-icon"],["viewBox","0 0 24 24"],["cx","12","cy","12","r","3"],["d","M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"],["x","2","y","3","width","20","height","14","rx","2"],["d","M8 21h8M12 17v4"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"],[1,"hero-cta-text"],[1,"hero-stats"],[1,"stat-item"],[1,"stat-num"],[1,"stat-lbl"],[1,"spinner-ring"],[1,"no-tenant-icon"],[1,"company-logo",3,"src","alt"],[1,"company-initials"],[1,"form-eyebrow"],[1,"form-title"],[1,"form-subtitle"],[1,"alert-error"],["novalidate","",3,"ngSubmit","formGroup"],[1,"form-group"],[1,"input-wrap"],["type","text","formControlName","username","placeholder","\u05D4\u05D6\u05DF \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9","autocomplete","username"],["viewBox","0 0 24 24",1,"fi"],["d","M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"],[1,"field-error"],[1,"form-group",2,"margin-bottom","28px"],["formControlName","password","placeholder","\u05D4\u05D6\u05DF \u05E1\u05D9\u05E1\u05DE\u05D4","autocomplete","current-password",3,"type"],["x","3","y","11","width","18","height","11","rx","2","ry","2"],["d","M7 11V7a5 5 0 0 1 10 0v4"],["type","button",1,"toggle-pass",3,"click"],["type","submit",1,"btn-submit",3,"disabled"],[1,"btn-text"],[1,"spinner"],[1,"form-footer"],["cx","12","cy","12","r","10"],["x1","12","y1","8","x2","12","y2","12"],["x1","12","y1","16","x2","12.01","y2","16"],["d","M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"],["x1","1","y1","1","x2","23","y2","23"],["d","M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"]],template:function(e,i){e&1&&(zs(0,"div",0)(1,"div",1),wb(2,si,2,0,"div",2),wb(3,ci,7,0,"div",3),wb(4,bi,36,19),od(),zs(5,"div",4),jm(6,"app-neural-net")(7,"div",5)(8,"div",6),zs(9,"div",7)(10,"div",8)(11,"span",9),L_(12,"SQUAD"),od(),zs(13,"span",10),L_(14,"FLOW"),od()(),zs(15,"div",11),L_(16,"AI Development Platform"),od()(),zs(17,"div",12)(18,"div",13),jm(19,"span",14),L_(20," \u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05E4\u05E2\u05D9\u05DC\u05D9\u05DD "),od(),zs(21,"h1",15),L_(22," \u05E4\u05D9\u05EA\u05D5\u05D7 \u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8."),jm(23,"br"),L_(24," \u05E2\u05DD "),zs(25,"em"),L_(26,"\u05E6\u05D5\u05D5\u05EA AI"),od(),L_(27," \u05E9\u05E2\u05D5\u05D1\u05D3 \u05D1\u05E9\u05D1\u05D9\u05DC\u05DA. "),od(),zs(28,"p",16),L_(29," SQUADFLOW \u05DE\u05E1\u05E4\u05E7\u05EA \u05DC\u05D1\u05EA\u05D9 \u05EA\u05D5\u05DB\u05E0\u05D4 \u05D0\u05EA \u05D4\u05DB\u05DC\u05D9\u05DD \u05DC\u05D1\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D7\u05DB\u05DE\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D5\u05D5\u05EA \u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05E9\u05DE\u05E4\u05EA\u05D7\u05D9\u05DD, \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05D5\u05DE\u05E1\u05E4\u05E7\u05D9\u05DD \u05E7\u05D5\u05D3, \u05D1\u05D6\u05DE\u05DF \u05E9\u05D0\u05EA\u05D4 \u05DE\u05EA\u05DE\u05E7\u05D3 \u05D1\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA. "),od(),zs(30,"p",17),L_(31," \u05D1\u05E0\u05D5\u05D9 \u05E2\u05DC \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC 20 \u05E9\u05E0\u05D4 \u05D1\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9, SQUADFLOW \u05D4\u05D5\u05E4\u05DB\u05EA \u05DB\u05DC \u05E8\u05E2\u05D9\u05D5\u05DF \u05DC\u05DE\u05D5\u05E6\u05E8 \u05E2\u05D5\u05D1\u05D3 \u2014 \u05D1\u05E9\u05D9\u05D8\u05D4 \u05D7\u05D5\u05D6\u05E8\u05EA, \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05EA\u05DC\u05D5\u05EA \u05D1\u05D0\u05E0\u05E9\u05D9\u05DD \u05D1\u05D5\u05D3\u05D3\u05D9\u05DD. "),od(),zs(32,"div",18)(33,"div",19)(34,"div",20),Rp(),zs(35,"svg",21),jm(36,"circle",22)(37,"path",23),od()(),Op(),zs(38,"span"),L_(39,"\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05E9\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD 24/7 \u2014 \u05DB\u05DC \u05D0\u05D7\u05D3 \u05D9\u05D5\u05D3\u05E2 \u05D0\u05EA \u05EA\u05E4\u05E7\u05D9\u05D3\u05D5, \u05D0\u05D9\u05DF \u05DB\u05E4\u05D9\u05DC\u05D5\u05D9\u05D5\u05EA \u05D5\u05D0\u05D9\u05DF \u05E2\u05E6\u05D9\u05E8\u05D5\u05EA"),od()(),zs(40,"div",19)(41,"div",20),Rp(),zs(42,"svg",21),jm(43,"rect",24)(44,"path",25),od()(),Op(),zs(45,"span"),L_(46,"\u05DE\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05DC\u05E7\u05D5\u05D3 \u2014 \u05D4\u05E6\u05D5\u05D5\u05EA \u05DE\u05E4\u05EA\u05D7, \u05D1\u05D5\u05D3\u05E7 \u05D5\u05DE\u05E1\u05E4\u05E7 \u05D1\u05E1\u05E4\u05E8\u05D9\u05E0\u05D8 \u05D0\u05D7\u05D3"),od()(),zs(47,"div",19)(48,"div",20),Rp(),zs(49,"svg",21),jm(50,"path",26)(51,"circle",27)(52,"path",28),od()(),Op(),zs(53,"span"),L_(54,"\u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u2014 \u05DB\u05DC \u05D1\u05D9\u05EA \u05EA\u05D5\u05DB\u05E0\u05D4 \u05E2\u05DD \u05E6\u05D5\u05D5\u05EA \u05D5\u05E1\u05D1\u05D9\u05D1\u05D4 \u05E0\u05E4\u05E8\u05D3\u05D9\u05DD"),od()()(),zs(55,"p",29),L_(56,"\u05D4\u05EA\u05D7\u05DC \u05D0\u05EA \u05D4\u05E1\u05E4\u05E8\u05D9\u05E0\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC\u05DA \u05D4\u05D9\u05D5\u05DD."),od()(),zs(57,"div",30)(58,"div",31)(59,"span",32),L_(60,"\u221E"),od(),zs(61,"span",33),L_(62,"\u05D9\u05DB\u05D5\u05DC\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7"),od()(),zs(63,"div",31)(64,"span",32),L_(65,"24/7"),od(),zs(66,"span",33),L_(67,"\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD"),od()(),zs(68,"div",31)(69,"span",32),L_(70,"10\xD7"),od(),zs(71,"span",33),L_(72,"\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7"),od()()()()()),e&2&&(ly("--brand",i.tenant()?.brandColor||"#C8472A"),_w(),dy("visible",!i.loadingTenant()),_w(),Cb(i.loadingTenant()?2:-1),_w(),Cb(!i.loadingTenant()&&i.noTenant()?3:-1),_w(),Cb(!i.loadingTenant()&&!i.noTenant()&&i.tenant()?4:-1));},dependencies:[Mv,Nn,En,ze,bn,An,nn,en,j,wt,Do,Zt$1,J$1,J],styles:['[_nghost-%COMP%]{display:block;height:100vh}.login-page[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100vh;direction:rtl;overflow:hidden;--brand: #C8472A;--brand-dark: #9e3420;--brand-mid: #e05a38;--brand-light: #fff2ee;--text: #1e1b18;--muted: #7a7060;--border: #e8e0da;--bg: #faf8f6}.form-side[_ngcontent-%COMP%]{width:22%;min-width:320px;max-width:420px;flex-shrink:0;background:#fff;display:flex;flex-direction:column;justify-content:center;padding:40px 32px;box-shadow:4px 0 32px #00000012;position:relative;z-index:1;opacity:0;transform:translate(20px);transition:opacity .45s ease,transform .45s ease}.form-side.visible[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.company-logo[_ngcontent-%COMP%]{height:80px;max-width:200px;object-fit:contain;margin-bottom:28px;display:block}.company-initials[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:14px;background:linear-gradient(135deg,var(--brand),var(--brand-mid));color:#fff;font-size:2rem;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:28px}.form-eyebrow[_ngcontent-%COMP%]{font-size:.73rem;font-weight:800;color:var(--brand);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}.form-title[_ngcontent-%COMP%]{font-size:1.7rem;font-weight:800;color:var(--text);margin:0 0 8px;line-height:1.2}.form-subtitle[_ngcontent-%COMP%]{font-size:.88rem;color:var(--muted);margin-bottom:28px;line-height:1.5}.alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;background:var(--brand-light);border:1.5px solid #f9c0b0;border-radius:10px;padding:11px 14px;font-size:.86rem;font-weight:600;color:var(--brand-dark);margin-bottom:18px}.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:17px;height:17px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.form-group[_ngcontent-%COMP%]{margin-bottom:18px}label[_ngcontent-%COMP%]{display:block;font-size:.74rem;font-weight:800;color:#5a5248;margin-bottom:7px;text-transform:uppercase;letter-spacing:.07em}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   svg.fi[_ngcontent-%COMP%]{position:absolute;right:13px;top:50%;transform:translateY(-50%);width:16px;height:16px;stroke:#c4b8b0;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;pointer-events:none;transition:stroke .2s}.input-wrap[_ngcontent-%COMP%]:focus-within   svg.fi[_ngcontent-%COMP%]{stroke:var(--brand)}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:12px 42px;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;font-size:.93rem;color:var(--text);font-family:Noto Sans Hebrew,Arial,sans-serif;outline:none;transition:border-color .2s,background .2s,box-shadow .2s;direction:rtl}input[type=text][_ngcontent-%COMP%]::placeholder, input[type=password][_ngcontent-%COMP%]::placeholder{color:#c0b8b2}input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus{border-color:var(--brand);background:#fff;box-shadow:0 0 0 3px #c8472a1a}input[type=text].input-error[_ngcontent-%COMP%], input[type=password].input-error[_ngcontent-%COMP%]{border-color:var(--brand);box-shadow:0 0 0 3px #c8472a1a}.toggle-pass[_ngcontent-%COMP%]{position:absolute;left:11px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:4px;color:#c4b8b0;display:flex;align-items:center;transition:color .2s}.toggle-pass[_ngcontent-%COMP%]:hover{color:var(--brand)}.toggle-pass[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.field-error[_ngcontent-%COMP%]{font-size:.76rem;color:var(--brand);font-weight:600;margin-top:5px;display:flex;align-items:center;gap:4px}.btn-submit[_ngcontent-%COMP%]{width:100%;padding:14px;background:linear-gradient(135deg,var(--brand) 0%,var(--brand-mid) 100%);color:#fff;font-family:Noto Sans Hebrew,Arial,sans-serif;font-size:1rem;font-weight:800;border:none;border-radius:12px;cursor:pointer;transition:opacity .2s,transform .15s,box-shadow .2s;box-shadow:0 4px 18px #c8472a4d;position:relative;overflow:hidden}.btn-submit[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.18) 0%,transparent 55%);pointer-events:none}.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled){opacity:.92;transform:translateY(-1px);box-shadow:0 6px 24px #c8472a66}.btn-submit[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed;transform:none}.btn-submit[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:block}.btn-submit[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:none;width:20px;height:20px;margin:0 auto;border:2.5px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:_ngcontent-%COMP%_spin .65s linear infinite}.btn-submit.loading[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:none}.btn-submit.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:block}.form-footer[_ngcontent-%COMP%]{text-align:center;margin-top:28px;padding-top:20px;border-top:1px solid var(--border);font-size:.73rem;color:#b0a898}.splash[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.spinner-ring[_ngcontent-%COMP%]{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--brand);border-radius:50%;animation:_ngcontent-%COMP%_spin .7s linear infinite}.no-tenant[_ngcontent-%COMP%]{text-align:center}.no-tenant[_ngcontent-%COMP%]   .no-tenant-icon[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:12px}.no-tenant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--text);margin:0 0 8px}.no-tenant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:var(--muted);line-height:1.6}.hero[_ngcontent-%COMP%]{flex:1;background:linear-gradient(160deg,#0a0f1e,#0f1c35,#0d1628);display:flex;flex-direction:column;justify-content:space-between;padding:56px 64px 48px;position:relative;overflow:hidden}.orb[_ngcontent-%COMP%]{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none}.orb-brand[_ngcontent-%COMP%]{width:400px;height:400px;background:#c8472a33;bottom:-100px;right:-100px}.orb-blue[_ngcontent-%COMP%]{width:300px;height:300px;background:#3864c82e;top:-60px;left:40px}.sf-logo-wrap[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:48px}.sf-wordmark[_ngcontent-%COMP%]{display:flex;align-items:baseline;line-height:1;direction:ltr}.sf-squad[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;font-weight:800;font-size:2.6rem;letter-spacing:-1px;color:#fff}.sf-flow[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;font-weight:300;font-size:2.6rem;letter-spacing:2px;color:#00e5ff}.sf-tagline[_ngcontent-%COMP%]{font-family:Share Tech Mono,monospace;font-size:.68rem;letter-spacing:4px;color:#4a6fa5;text-transform:uppercase;margin-top:6px}.hero-body[_ngcontent-%COMP%]{position:relative;z-index:2}.live-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;background:#ffffff12;border:1px solid rgba(255,255,255,.13);color:#ffffffd9;font-size:.72rem;font-weight:700;padding:5px 14px;border-radius:20px;margin-bottom:28px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.live-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 6px #4ade80;animation:_ngcontent-%COMP%_liveBlink 1.5s ease-in-out infinite}.hero-title[_ngcontent-%COMP%]{font-size:2.6rem;font-weight:800;color:#fff;line-height:1.2;margin-bottom:18px;text-shadow:0 2px 20px rgba(0,0,0,.3)}.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;color:var(--brand)}.hero-sub[_ngcontent-%COMP%]{font-size:.95rem;color:#ffffff8c;line-height:1.75;margin-bottom:16px;max-width:400px}.hero-sub-2[_ngcontent-%COMP%]{font-size:.85rem;color:#fff6;line-height:1.7;margin-bottom:32px;max-width:400px}.hero-cta-text[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:800;color:var(--brand);margin-top:28px;margin-bottom:0;line-height:1.2}.hero-features[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}.feat[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;color:#fffc;font-size:.88rem;font-weight:500}.feat-icon[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:10px;background:#c8472a26;border:1px solid rgba(200,71,42,.3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.feat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:17px;height:17px;stroke:#f87a5a;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.hero-stats[_ngcontent-%COMP%]{display:flex;position:relative;z-index:2;padding-top:28px;border-top:1px solid rgba(255,255,255,.08)}.stat-item[_ngcontent-%COMP%]{flex:1;text-align:center;padding:0 8px;border-left:1px solid rgba(255,255,255,.08)}.stat-item[_ngcontent-%COMP%]:last-child{border-left:none}.stat-num[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:800;color:#fff;display:block;line-height:1;margin-bottom:5px}.stat-lbl[_ngcontent-%COMP%]{font-size:.72rem;font-weight:500;color:#ffffff73}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_liveBlink{0%,to{opacity:1}50%{opacity:.3}}@keyframes _ngcontent-%COMP%_shake{0%,to{transform:translate(0)}20%{transform:translate(-6px)}40%{transform:translate(6px)}60%{transform:translate(-4px)}80%{transform:translate(4px)}}.shake[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_shake .4s ease}@media(max-width:860px){.hero[_ngcontent-%COMP%]{display:none}.form-side[_ngcontent-%COMP%]{width:100%;max-width:none;padding:48px 28px;box-shadow:none}}']})};export{Ft as LoginComponent};