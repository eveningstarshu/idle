"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[389],{2389:function(e,a,l){l.r(a),l.d(a,{default:function(){return U}});var u=l(3396),s=l(4870),t=l(9242),r=l(65),o=l(2483),n=l(6329),m=l(5743),d=l(9733);const i={class:"body"},c={class:"page"},p={class:"header"},v=["src"],h={class:"editBody"},g={class:"yuan"},y={style:{margin:"16px"}},_=(0,u.Uk)(" 保存 ");var f={__name:"EditorUser",setup(e){const a=(0,r.oR)(),l=(0,o.tv)();let f=(0,s.iH)(a.state.user.userName),w=(0,s.iH)(a.state.user.userPhone),b=(0,s.iH)(a.state.user.password),U=(0,s.iH)(a.state.user.header_img),k=(0,s.iH)("true"),W=((0,s.iH)(null),(0,s.iH)("password"));const V=()=>{k.value=!k.value,W.value=k.value?"password":"text"},S=e=>{(0,n.Am)(),(0,m.F5)("/update",{file:e.file}).then((e=>{console.log(e),U.value=e.data.result.path}))},H=e=>{let u={name:f.value,password:b.value,phone:w.value,header_img:U.value};(0,m.gz)(`/user/${a.state.user.userID}`,u).then((e=>{console.log(e),(0,d.F)("保存成功"),a.commit("user/changeName",e.result.name),a.commit("user/changePhone",e.result.phone),a.commit("user/changePassword",e.result.password),a.commit("user/changeimg",e.result.header_img),a.commit("changeRouterType","back"),l.push("/my")}))},q=()=>{a.commit("changeRouterType","back"),l.push("/my")};return(e,a)=>{const l=(0,u.up)("van-nav-bar"),r=(0,u.up)("van-uploader"),o=(0,u.up)("van-field"),n=(0,u.up)("van-icon"),m=(0,u.up)("van-cell-group"),d=(0,u.up)("van-button"),C=(0,u.up)("van-form");return(0,u.wg)(),(0,u.iD)("div",i,[(0,u._)("div",c,[(0,u.Wm)(l,{title:"编辑资料","left-arrow":"",onClickLeft:q}),(0,u._)("div",p,[(0,u.Wm)(r,{"after-read":S},{default:(0,u.w5)((()=>[(0,u._)("img",{src:(0,s.SU)(U),alt:""},null,8,v)])),_:1})]),(0,u._)("div",h,[(0,u.Wm)(C,{onSubmit:H},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{inset:""},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{modelValue:(0,s.SU)(f),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,s.dq)(f)?f.value=e:f=e),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),(0,u.Wm)(o,{modelValue:(0,s.SU)(w),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.dq)(w)?w.value=e:w=e),type:"phone",name:"手机",label:"手机",placeholder:"手机",rules:[{required:!0,message:"请填写手机"}]},null,8,["modelValue"]),(0,u.Wm)(o,{modelValue:(0,s.SU)(b),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,s.dq)(b)?b.value=e:b=e),type:(0,s.SU)(W),name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue","type"]),(0,u._)("div",g,[(0,u.wy)((0,u.Wm)(n,{onClick:V,name:"closed-eye"},null,512),[[t.F8,(0,s.SU)(k)]]),(0,u.wy)((0,u.Wm)(n,{onClick:V,name:"eye-o"},null,512),[[t.F8,!(0,s.SU)(k)]])])])),_:1}),(0,u._)("div",y,[(0,u.Wm)(d,{round:"",block:"",type:"primary","native-type":"submit"},{default:(0,u.w5)((()=>[_])),_:1})])])),_:1})])])])}}},w=l(89);const b=(0,w.Z)(f,[["__scopeId","data-v-cc8215a2"]]);var U=b}}]);
//# sourceMappingURL=389.9f937c8d.js.map