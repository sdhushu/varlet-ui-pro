import{L as O,d as R,a as V,s as v,o as i,b as _,e as o,f as e,w as t,h as a,F as h,g as C,c as x,v as y,t as p,x as I,y as G,z as W,_ as $,A as j,B as q,C as H,D as Y,E as K}from"./vendor.849d3539.js";import{_ as Q,u as X,e as Z,r as ee}from"./index.26b22305.js";const te={i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},logo:"https://qytayh.github.io/varlet-ui-pro/varlet_pro_logo.png",github:"https://github.com/qytayh/varlet-ui-pro"},ae="VARLET-UI-PRO",ne={"zh-CN":"\u4E00\u4E2A\u514D\u8D39\u7684\u57FA\u4E8Evarlet-ui\u7684\u79FB\u52A8\u7AEF\u96C6\u6210\u65B9\u6848\u3002","en-US":"A free varlet-ui integrated development scheme."};var oe={header:te,title:ae,description:ne},re={proNotificationCard:"\u6D88\u606F\u901A\u77E5"},se={proNotificationCard:"Notification Card"},ie={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",datePickerMonthDict:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},"10":{name:"October",abbr:"OCT"},"11":{name:"November",abbr:"NOV"},"12":{name:"December",abbr:"DEC"}},datePickerWeekDict:{"0":{name:"Sunday",abbr:"S"},"1":{name:"Monday",abbr:"M"},"2":{name:"Tuesday",abbr:"T"},"3":{name:"Wednesday",abbr:"W"},"4":{name:"Thursday",abbr:"T"},"5":{name:"Friday",abbr:"F"},"6":{name:"Saturday",abbr:"S"}},datePickerSelected:" selected",paginationItem:"",paginationPage:"page",paginationJump:"Go to"};const{add:le,use:ce,pack:de,packs:ye,merge:k}=O,ue=b=>{ce(b)};le("en-US",ie);k("en-US",se);k("zh-CN",re);const pe={class:"cell-list"},me={class:"mainContent"},_e={class:"logo"},he={class:"pro-home__title"},be=["src"],ge={class:"pro-home__desc"},fe=R({setup(b){const l=X(),{header:T,title:S,description:N}=oe,{github:w,logo:A,i18n:B}=T;let c=V(!1);const g=v(()=>l.lang),U=B,z=v(()=>l.getTheme==="dark"),M=()=>{window.location.href=w},E=r=>{l.changeLang(r),ue(r),c.value=!1},L=()=>{l.changeDarkTheme()},D=r=>{ee.push(r)};return(r,d)=>{const s=$,m=j,f=q,F=H,P=Y,J=K;return i(),_(h,null,[o("header",null,[e(P,{class:"app-bar","title-position":"left"},{left:t(()=>[e(m,{style:{"margin-left":"2px"},text:"",round:"",color:"transparent","text-color":"#fff",onClick:M},{default:t(()=>[e(s,{name:"github",size:28,style:{"margin-top":"1px"}})]),_:1})]),right:t(()=>[e(m,{text:"",round:"",color:"transparent","text-color":"#fff",onClick:L},{default:t(()=>[e(s,{size:"24px",color:"#fff",name:a(z)?"weather-night":"white-balance-sunny"},null,8,["name"])]),_:1}),e(F,{"offset-y":36,show:c.value,"onUpdate:show":d[1]||(d[1]=n=>c.value=n)},{menu:t(()=>[o("div",pe,[(i(!0),_(h,null,C(a(U),(n,u)=>(i(),x(f,{class:I([[a(g)===u&&"pro-language-cell--active"],"pro-language-cell"]),onClick:ve=>E(u),key:u},{default:t(()=>[y(p(n),1)]),_:2},1032,["class","onClick"]))),128))])]),default:t(()=>[e(m,{style:{"padding-right":"6px"},text:"","text-color":"#fff",onClick:d[0]||(d[0]=G(n=>c.value=!0,["stop"]))},{default:t(()=>[e(s,{name:"translate",size:24}),e(s,{name:"chevron-down",size:22})]),_:1})]),_:1},8,["show"])]),_:1})]),o("div",me,[o("div",_e,[o("h1",he,[o("img",{class:"pro-home__image",src:a(A)},null,8,be),o("span",null,p(a(S)),1)]),o("h2",ge,p(a(N)[a(g)]),1)]),(i(!0),_(h,null,C(a(Z),n=>W((i(),x(f,{key:n.name,onClick:u=>D(n.path)},{extra:t(()=>[e(s,{name:"chevron-right",size:"14"})]),default:t(()=>[y(p(a(de)[n.name]),1)]),_:2},1032,["onClick"])),[[J]])),128))])],64)}}});var ke=Q(fe,[["__scopeId","data-v-225cd935"]]);export{ke as default};
