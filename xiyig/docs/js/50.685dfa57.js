"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[50],{7050:function(e,a,s){s.r(a),s.d(a,{default:function(){return w}});var t=s(3396),d=s(4870),o=s(65),n=s(9733),i=s(6431),l=s(6329),r=s(5743),c=s(6811),u=s(2483);const p={class:"body"},m={class:"page"},v={class:"top"},f={class:"main"},h={class:"box"};var _={__name:"Edit",setup(e){let a=(0,o.oR)(),s=(0,u.yj)(),_=(0,u.tv)(),y=((0,d.iH)(0),(0,d.iH)(s.query.key)),g=(0,d.iH)({});async function w(){(0,l.Am)();let e=await(0,r.U2)("/address"),a=e.result.find((e=>e.id==y.value));g.value={name:a.name,tel:a.phone,province:a.area_name,addressDetail:a.desc,areaCode:a.area,postalCode:a.post_code,isDefault:"1"===a.default_set}}w();const k=()=>{a.commit("changeRouterType","back"),_.push("/address")},b=async e=>{if(e.isDefault){await(0,r.v_)(`/setDefault/${y.value}`)}let a={name:e.name,phone:e.tel,area_name:e.city,desc:e.addressDetail,area:e.areaCode,post_code:e.postalCode,status:"1"};await(0,r.gz)(`/address/${y.value}`,a);(0,n.F)({message:"保存成功",position:"top"}),_.push("/address")},C=e=>{i.V.confirm({title:"小xu提示",message:"您是否确认删除地址?"}).then((()=>{(0,r.IV)(`/address/${e}`).then((e=>{(0,n.F)({message:"删除成功",position:"top"}),a.commit("changeRouterType","back"),_.push("/address")}))})).catch((()=>{}))};return(e,a)=>{const o=(0,t.up)("van-nav-bar"),n=(0,t.up)("van-address-edit");return(0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("div",m,[(0,t._)("div",v,[(0,t.Wm)(o,{title:"编辑收货地址","left-arrow":"",onClickLeft:k})]),(0,t._)("div",f,[(0,t._)("div",h,[(0,t.Wm)(n,{"area-list":(0,d.SU)(c.H),"area-placeholder":"选择省 / 市 / 区","show-postal":"","show-set-default":"","show-delete":"","address-info":(0,d.SU)(g),"is-saving":!1,"is-deleting":!1,"area-columns-placeholder":["请选择","请选择","请选择"],onSave:b,onDelete:a[0]||(a[0]=e=>C((0,d.SU)(s).query.key))},null,8,["area-list","address-info"])])])])])}}},y=s(89);const g=(0,y.Z)(_,[["__scopeId","data-v-0a3c5c40"]]);var w=g}}]);
//# sourceMappingURL=50.685dfa57.js.map