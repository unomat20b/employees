import{_ as f}from"./hHQ9NjsT.js";import{J as o,_ as l,$ as u,a0 as t,a1 as e,O as b,ae as i,ab as v,am as x,an as S,ad as k,ao as V}from"./DtYR0XcN.js";const C={__name:"Sidebar",props:{drawer:Boolean},setup(_){return(s,r)=>{const n=o("v-list-item"),a=o("v-list-item-title"),p=o("v-list-group"),m=o("v-list");return l(),u(m,{density:"compact",nav:""},{default:t(()=>[e(n,{"prepend-icon":"mdi-book",title:"Журнал",value:"myfiles"}),e(p,{modelValue:s.expanded,"onUpdate:modelValue":r[0]||(r[0]=c=>s.expanded=c)},{activator:t(({props:c})=>[e(n,b(c,{link:"","prepend-icon":"mdi-account-group",title:"Сотрудники",value:"myfiles"}),null,16)]),default:t(()=>[e(n,{link:""},{default:t(()=>[e(a,null,{default:t(()=>[i("Управление")]),_:1})]),_:1}),e(n,{link:""},{default:t(()=>[e(a,null,{default:t(()=>[i("Должности")]),_:1})]),_:1}),e(n,{link:""},{default:t(()=>[e(a,null,{default:t(()=>[i("Расписание")]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(n,{"prepend-icon":"mdi-shield-account",title:"Админ",value:"starred"})]),_:1})}}},z=f(C,[["__scopeId","data-v-617da28c"]]),B={data:()=>({items:[{title:"Зубенко М. П."},{title:"Настройки",to:"/Settings"},{title:"Тема"},{title:"Выход"}]})},D={class:"text-center"};function N(_,s,r,n,a,p){const m=o("v-icon"),c=o("v-btn"),g=o("v-list-item-title"),y=o("v-list-item"),h=o("v-list"),w=o("v-menu");return l(),v("div",D,[e(w,{"open-on-hover":""},{activator:t(({props:d})=>[e(c,b({color:"white"},d),{default:t(()=>[e(m,{size:"30"},{default:t(()=>[i("mdi-account-circle")]),_:1})]),_:2},1040)]),default:t(()=>[e(h,null,{default:t(()=>[(l(!0),v(x,null,S(_.items,(d,$)=>(l(),u(y,{key:$,to:d.to,link:""},{default:t(()=>[e(g,null,{default:t(()=>[i(k(d.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})])}const F=f(B,[["render",N]]),A={__name:"Header",props:{toggleDrawer:Function,title:String},setup(_){return(s,r)=>{const n=o("v-app-bar-nav-icon"),a=o("v-toolbar-title"),p=o("v-app-bar");return l(),u(p,{elevation:1,app:"",style:{top:"0",width:"100%",left:"0px","background-color":"#42D392"}},{prepend:t(()=>[e(n,{onClick:_.toggleDrawer,style:{color:"white"}},null,8,["onClick"])]),default:t(()=>[e(a,{style:{color:"white"}},{default:t(()=>[i(k(_.title),1)]),_:1}),s.$vuetify.display.mdAndUp?(l(),u(F,{key:0})):V("",!0)]),_:1})}}};export{z as S,A as _};