import{_ as v}from"./BMkBig6h.js";import{_ as g}from"./a3muW8Ys.js";import{J as o,_ as i,$ as p,a0 as t,a1 as e,ab as B,ak as D,al as S,ae as l,ad as r}from"./HjdZufeo.js";const N={data:()=>({dialog:!1,selectedItem:{},items:[{id:1,title:"Карточка 1",description:"Описание карточки 1",details:"Детали карточки 1"}]}),methods:{showDialog(n){this.selectedItem=n,this.dialog=!0}}};function E(n,_,k,x,C,u){const s=o("v-card-title"),c=o("v-card-text"),d=o("v-btn"),m=o("v-card-actions"),f=o("v-card"),w=o("v-col"),b=o("v-row"),h=o("v-dialog"),V=o("v-container"),I=o("v-main"),y=o("v-app");return i(),p(y,null,{default:t(()=>[e(I,null,{default:t(()=>[e(V,null,{default:t(()=>[e(b,null,{default:t(()=>[(i(!0),B(S,null,D(n.items,a=>(i(),p(w,{cols:"12",sm:"6",md:"4",key:a.id},{default:t(()=>[e(f,null,{default:t(()=>[e(s,null,{default:t(()=>[l(r(a.title),1)]),_:2},1024),e(c,null,{default:t(()=>[l(r(a.description),1)]),_:2},1024),e(m,null,{default:t(()=>[e(d,{color:"primary",onClick:L=>u.showDialog(a)},{default:t(()=>[l("Подробнее")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(h,{modelValue:n.dialog,"onUpdate:modelValue":_[1]||(_[1]=a=>n.dialog=a),persistent:"","max-width":"600px"},{default:t(()=>[e(f,null,{default:t(()=>[e(s,null,{default:t(()=>[l(r(n.selectedItem.title),1)]),_:1}),e(c,null,{default:t(()=>[l(r(n.selectedItem.details),1)]),_:1}),e(m,null,{default:t(()=>[e(d,{color:"green",text:"",onClick:_[0]||(_[0]=a=>n.dialog=!1)},{default:t(()=>[l("Закрыть")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const $=g(N,[["render",E]]),F={components:{Sidebar:v,Cards:$}};function J(n,_,k,x,C,u){const s=v,c=$,d=o("v-app");return i(),p(d,null,{default:t(()=>[e(s),e(c)]),_:1})}const q=g(F,[["render",J]]);export{q as default};
