import{b as e,m as a,a as l,r as s,h as r,i as o,z as d,w as i,a3 as t,a4 as n,f as u,H as p,I as m,o as c,l as f,a5 as g,a6 as _,a7 as v,a8 as x,a9 as h,q as b,A as w,D as y,_ as V}from"./index-df4fa0b6.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-b4d844f9.js";const k={class:"login-container"},q={class:"login-card"},C=(e=>(p("data-v-5826127b"),e=e(),m(),e))((()=>d("div",{class:"title"},[d("img",{src:"/v3-admin-vite/static/logo-text-2-eef467fb.png"})],-1))),M={class:"content"},U=V(e({__name:"index",setup(e){const p=a(),m=l(null),V=l(!1),U=l(""),j=s({username:"admin",password:"12345678",code:""}),I={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},K=()=>{var e;null==(e=m.value)||e.validate((e=>{if(!e)return!1;V.value=!0,y().login({username:j.username,password:j.password,code:j.code}).then((()=>{p.push({path:"/"})})).catch((()=>{A(),j.password=""})).finally((()=>{V.value=!1}))}))},A=()=>{j.code="",U.value="",n().then((e=>{U.value=e.data}))};return A(),(e,a)=>{const l=u("el-input"),s=u("el-form-item"),n=u("el-icon"),p=u("el-image"),y=u("el-button"),D=u("el-form");return c(),r("div",k,[o(z,{class:"theme-switch"}),d("div",q,[C,d("div",M,[o(D,{ref_key:"loginFormRef",ref:m,model:j,rules:I,onKeyup:t(K,["enter"])},{default:i((()=>[o(s,{prop:"username"},{default:i((()=>[o(l,{modelValue:j.username,"onUpdate:modelValue":a[0]||(a[0]=e=>j.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":f(g),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),o(s,{prop:"password"},{default:i((()=>[o(l,{modelValue:j.password,"onUpdate:modelValue":a[1]||(a[1]=e=>j.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":f(_),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),o(s,{prop:"code"},{default:i((()=>[o(l,{modelValue:j.code,"onUpdate:modelValue":a[2]||(a[2]=e=>j.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":f(v),maxlength:"7",size:"large"},{append:i((()=>[o(p,{src:U.value,onClick:A,draggable:"false"},{placeholder:i((()=>[o(n,null,{default:i((()=>[o(f(x))])),_:1})])),error:i((()=>[o(n,null,{default:i((()=>[o(f(h))])),_:1})])),_:1},8,["src"])])),_:1},8,["modelValue","prefix-icon"])])),_:1}),o(y,{loading:V.value,type:"primary",size:"large",onClick:b(K,["prevent"])},{default:i((()=>[w(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-5826127b"]]);export{U as default};
