import{r as _e,u as pe}from"./index-1c5e6985.js";import{u as be,N as xe}from"./index-8eae4f05.js";import{S as Se}from"./index-c7c7423e.js";import{u as Ce}from"./allQuestion-c46a0ff7.js";import{f as N,g as O,e as L,h as ee,t as k,a as o,i as M,j as Pe,n as X,k as ye,l as te,m as $e,B as Ae,I as Be,p as ae,q as ke,s as p,v as ne,x as B,y as Te,z as oe,A as Ie,C as Ee,D as ze,E as Ne,F as Oe,G as Y,H as U,J as ie,K as Me,L as De,M as I,N as Ve,O as Q,_ as Re,u as Ye,r as Qe,o as He,c as Le,w as S,P as Xe,Q as qe,b as Ke,d as E}from"./index-8c98e848.js";const[se,Z]=N("action-bar"),ce=Symbol(se),We={placeholder:Boolean,safeAreaInsetBottom:k};var je=O({name:se,props:We,setup(t,{slots:d}){const h=L(),c=be(h,Z),{linkChildren:u}=ee(ce);u();const e=()=>{var f;return o("div",{ref:h,class:[Z(),{"van-safe-area-bottom":t.safeAreaInsetBottom}]},[(f=d.default)==null?void 0:f.call(d)])};return()=>t.placeholder?c(e):e()}});const Fe=M(je),[Ge,H]=N("action-bar-icon"),Je=Pe({},_e,{dot:Boolean,text:String,icon:String,color:String,badge:X,iconClass:ye,badgeProps:Object,iconPrefix:String});var Ue=O({name:Ge,props:Je,setup(t,{slots:d}){const h=pe();te(ce);const c=()=>{const{dot:u,badge:e,icon:f,color:v,iconClass:w,badgeProps:l,iconPrefix:n}=t;return d.icon?o(Ae,$e({dot:u,class:H("icon"),content:e},l),{default:d.icon}):o(Be,{tag:"div",dot:u,name:f,badge:e,color:v,class:[H("icon"),w],badgeProps:l,classPrefix:n},null)};return()=>o("div",{role:"button",class:H(),tabindex:0,onClick:h},[c(),d.default?d.default():t.text])}});const Ze=M(Ue),[le,z]=N("swipe"),et={loop:k,width:X,height:X,vertical:Boolean,autoplay:Y(0),duration:Y(500),touchable:k,lazyRender:Boolean,initialSwipe:Y(0),indicatorColor:String,showIndicators:k,stopPropagation:k},re=Symbol(le);var tt=O({name:le,props:et,emits:["change","dragStart","dragEnd"],setup(t,{emit:d,slots:h}){const c=L(),u=L(),e=ae({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let f=!1;const v=ke(),{children:w,linkChildren:l}=ee(re),n=p(()=>w.length),r=p(()=>e[t.vertical?"height":"width"]),m=p(()=>t.vertical?v.deltaY.value:v.deltaX.value),x=p(()=>e.rect?(t.vertical?e.rect.height:e.rect.width)-r.value*n.value:0),D=p(()=>r.value?Math.ceil(Math.abs(x.value)/r.value):n.value),V=p(()=>n.value*r.value),C=p(()=>(e.active+n.value)%n.value),q=p(()=>{const a=t.vertical?"vertical":"horizontal";return v.direction.value===a}),ue=p(()=>{const a={transitionDuration:`${e.swiping?0:t.duration}ms`,transform:`translate${t.vertical?"Y":"X"}(${e.offset}px)`};if(r.value){const s=t.vertical?"height":"width",i=t.vertical?"width":"height";a[s]=`${V.value}px`,a[i]=t[i]?`${t[i]}px`:""}return a}),ve=a=>{const{active:s}=e;return a?t.loop?Q(s+a,-1,n.value):Q(s+a,0,D.value):s},K=(a,s=0)=>{let i=a*r.value;t.loop||(i=Math.min(i,-x.value));let _=s-i;return t.loop||(_=Q(_,x.value,0)),_},b=({pace:a=0,offset:s=0,emitChange:i})=>{if(n.value<=1)return;const{active:_}=e,g=ve(a),A=K(g,s);if(t.loop){if(w[0]&&A!==x.value){const R=A<x.value;w[0].setOffset(R?V.value:0)}if(w[n.value-1]&&A!==0){const R=A>0;w[n.value-1].setOffset(R?-V.value:0)}}e.active=g,e.offset=A,i&&g!==_&&d("change",C.value)},T=()=>{e.swiping=!0,e.active<=-1?b({pace:n.value}):e.active>=n.value&&b({pace:-n.value})},de=()=>{T(),v.reset(),I(()=>{e.swiping=!1,b({pace:-1,emitChange:!0})})},W=()=>{T(),v.reset(),I(()=>{e.swiping=!1,b({pace:1,emitChange:!0})})};let j;const y=()=>clearTimeout(j),$=()=>{y(),+t.autoplay>0&&n.value>1&&(j=setTimeout(()=>{W(),$()},+t.autoplay))},P=(a=+t.initialSwipe)=>{if(!c.value)return;const s=()=>{var i,_;if(!U(c)){const g={width:c.value.offsetWidth,height:c.value.offsetHeight};e.rect=g,e.width=+((i=t.width)!=null?i:g.width),e.height=+((_=t.height)!=null?_:g.height)}n.value&&(a=Math.min(n.value-1,a),a===-1&&(a=n.value-1)),e.active=a,e.swiping=!0,e.offset=K(a),w.forEach(g=>{g.setOffset(0)}),$()};U(c)?ie().then(s):s()},F=()=>P(e.active);let G;const fe=a=>{!t.touchable||a.touches.length>1||(v.start(a),f=!1,G=Date.now(),y(),T())},he=a=>{t.touchable&&e.swiping&&(v.move(a),q.value&&(!t.loop&&(e.active===0&&m.value>0||e.active===n.value-1&&m.value<0)||(Ve(a,t.stopPropagation),b({offset:m.value}),f||(d("dragStart",{index:C.value}),f=!0))))},J=()=>{if(!t.touchable||!e.swiping)return;const a=Date.now()-G,s=m.value/a;if((Math.abs(s)>.25||Math.abs(m.value)>r.value/2)&&q.value){const _=t.vertical?v.offsetY.value:v.offsetX.value;let g=0;t.loop?g=_>0?m.value>0?-1:1:0:g=-Math[m.value>0?"ceil":"floor"](m.value/r.value),b({pace:g,emitChange:!0})}else m.value&&b({pace:0});f=!1,e.swiping=!1,d("dragEnd",{index:C.value}),$()},me=(a,s={})=>{T(),v.reset(),I(()=>{let i;t.loop&&a===n.value?i=e.active===0?0:a:i=a%n.value,s.immediate?I(()=>{e.swiping=!1}):e.swiping=!1,b({pace:i-e.active,emitChange:!0})})},ge=(a,s)=>{const i=s===C.value,_=i?{backgroundColor:t.indicatorColor}:void 0;return o("i",{style:_,class:z("indicator",{active:i})},null)},we=()=>{if(h.indicator)return h.indicator({active:C.value,total:n.value});if(t.showIndicators&&n.value>1)return o("div",{class:z("indicators",{vertical:t.vertical})},[Array(n.value).fill("").map(ge)])};return ne({prev:de,next:W,state:e,resize:F,swipeTo:me}),l({size:r,props:t,count:n,activeIndicator:C}),B(()=>t.initialSwipe,a=>P(+a)),B(n,()=>P(e.active)),B(()=>t.autoplay,$),B([Me,De,()=>t.width,()=>t.height],F),B(Te(),a=>{a==="visible"?$():y()}),oe(P),Ie(()=>P(e.active)),Ee(()=>P(e.active)),ze(y),Ne(y),Oe("touchmove",he,{target:u}),()=>{var a;return o("div",{ref:c,class:z()},[o("div",{ref:u,style:ue.value,class:z("track",{vertical:t.vertical}),onTouchstartPassive:fe,onTouchend:J,onTouchcancel:J},[(a=h.default)==null?void 0:a.call(h)]),we()])}}});const at=M(tt),[nt,ot]=N("swipe-item");var it=O({name:nt,setup(t,{slots:d}){let h;const c=ae({offset:0,inited:!1,mounted:!1}),{parent:u,index:e}=te(re);if(!u)return;const f=p(()=>{const l={},{vertical:n}=u.props;return u.size.value&&(l[n?"height":"width"]=`${u.size.value}px`),c.offset&&(l.transform=`translate${n?"Y":"X"}(${c.offset}px)`),l}),v=p(()=>{const{loop:l,lazyRender:n}=u.props;if(!n||h)return!0;if(!c.mounted)return!1;const r=u.activeIndicator.value,m=u.count.value-1,x=r===0&&l?m:r-1,D=r===m&&l?0:r+1;return h=e.value===r||e.value===x||e.value===D,h}),w=l=>{c.offset=l};return oe(()=>{ie(()=>{c.mounted=!0})}),ne({setOffset:w}),()=>{var l;return o("div",{class:ot(),style:f.value},[v.value?(l=d.default)==null?void 0:l.call(d):null])}}});const st=M(it);const ct={name:"homeView",setup(){return Ce().getAllQues(),{isShow:!0,description:"",title:""}},methods:{seeAll(){this.isShow=!1,this.$router.push("/homeView/AllQuestion")},createNew(){this.isShow=!1,this.$router.push("/homeView/CreateQues")},logout(){this.$router.replace({name:"login"}),Ye().logout()}}};function lt(t,d,h,c,u,e){const f=Ze,v=Se,w=Fe,l=xe,n=st,r=at,m=Qe("router-view");return He(),Le("main",null,[o(w,{"safe-area-inset-bottom":""},{default:S(()=>[o(v,{size:"2rem"},{default:S(()=>[o(f,{icon:"bars",text:"问卷总览",onClick:e.seeAll},null,8,["onClick"]),o(f,{icon:"add-o",text:"新建问卷",onClick:e.createNew},null,8,["onClick"]),o(f,{icon:"fire-o",text:"退出登录",onClick:e.logout},null,8,["onClick"])]),_:1})]),_:1}),Xe(Ke("div",null,[o(l,{title:"简易问卷调查系统"}),o(r,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:S(()=>[o(n,null,{default:S(()=>[E("界面较为简单，请见谅")]),_:1}),o(n,null,{default:S(()=>[E("点击底部动作栏执行操作")]),_:1}),o(n,null,{default:S(()=>[E("退出后将回到登录页")]),_:1}),o(n,null,{default:S(()=>[E("新建问卷必须填写名称")]),_:1})]),_:1})],512),[[qe,c.isShow]]),o(m)])}const ht=Re(ct,[["render",lt],["__scopeId","data-v-68ccd768"]]);export{ht as default};
