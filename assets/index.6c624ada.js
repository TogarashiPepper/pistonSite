import{o as e,c as t,r as n,a as o,b as a,t as s,d as i,e as l,w as r,u,P as d,F as c,p as g,l as p,f as h}from"./vendor.06e8e231.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={name:"AppDropdown",provide(){return{sharedState:this.sharedState}},data:()=>({sharedState:{active:!1}}),methods:{toggle(){this.sharedState.active=!this.sharedState.active}}},f=o("button",{class:"white-button"},"Please select a language",-1);m.render=function(o,a,s,i,l,r){return e(),t("div",{onClick:a[0]||(a[0]=(...e)=>r.toggle&&r.toggle(...e))},[n(o.$slots,"toggler",{},(()=>[f])),n(o.$slots,"default")])};const v={name:"AppDropdownContent",inject:["sharedState"],computed:{active(){return this.sharedState.active}}},w={key:0};v.render=function(o,s,i,l,r,u){return u.active?(e(),t("div",w,[n(o.$slots,"default")])):a("",!0)};const y={props:{value:String,content:String},name:"AppDropdownItem"};y.render=function(n,o,a,i,l,r){return e(),t("button",{onClick:o[0]||(o[0]=e=>n.$emit("input",a.content)),class:"white-button"},s(a.content),1)},y.__scopeId="data-v-f90e6e96";const b=o("template",{slot:"toggler"},[o("button",null,"Please select a language")],-1);h({setup(n){window.result=i(""),window.languagePiston="rust";let a=window;const s=i(""),h=e=>g.highlight(e,g.languages.js),f=e=>p.highlightAuto(e).value;return(n,i)=>(e(),t(c,null,[l(m,{id:"dropdown"},{default:r((()=>[b,l(v,null,{default:r((()=>[l(y,{onInput:i[0]||(i[0]=e=>u(a).languagePiston=e),content:"ruby"}),l(y,{onInput:i[1]||(i[1]=e=>u(a).languagePiston=e),content:"rust"}),l(y,{onInput:i[2]||(i[2]=e=>u(a).languagePiston=e),content:"typescript"}),l(y,{onInput:i[3]||(i[3]=e=>u(a).languagePiston=e),content:"javascript"})])),_:1})])),_:1}),o("div",null,[l(u(d),{class:"my-editor height-200 mb-4",modelValue:s.value,"onUpdate:modelValue":i[4]||(i[4]=e=>s.value=e),highlight:f,"line-numbers":""},null,8,["modelValue"]),l(u(d),{class:"my-editor height-200 mb-4",modelValue:u(a).result,"onUpdate:modelValue":i[5]||(i[5]=e=>u(a).result=e),highlight:h,"line-numbers":"",readonly:""},null,8,["modelValue"])]),o("div",null,[o("button",{id:"submitButton",class:"white-button",onClick:i[6]||(i[6]=e=>(async e=>{window.result.value=JSON.stringify(await(await fetch("https://emkc.org/api/v1/piston/execute",{method:"post",body:JSON.stringify({source:e,language:window.languagePiston||"rust"}),headers:{"Content-Type":"application/json"}})).json(),void 0,1)})(s.value))},"submit")])],64))}}).mount("#app");
