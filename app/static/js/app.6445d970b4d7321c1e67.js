webpackJsonp([1],{0:function(t,e){},"2Bxi":function(t,e,n){t.exports=n.p+"static/img/2.00c29d6.jpg"},"5NsB":function(t,e){},BiDt:function(t,e){},M1a8:function(t,e,n){t.exports=n.p+"static/img/7.db4a07b.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),c=n("NYxO"),r={name:"Navbar",data:function(){return{tabs:o,currentTab:o[0]}},computed:{cartItems:function(){return this.$store.getters.cart.content}},methods:i()({},Object(c.b)(["changeValue"])),created:function(){console.log("updateVal")}},o=[{name:"Menu",component:{template:"<div>Kart</div>"}},{name:"Location",component:{template:"<div>About</div>"}},{name:"Payment",component:{template:"<div>About</div>"}},{name:"Address",component:{template:"<div>About</div>"}},{name:"Contact",component:{template:"<div>About</div>"}},{name:"Order Now",component:{template:"<div>About</div>"}},{name:"Sign In",component:{template:"<div>About</div>"}}],s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("ul",t._l(t.tabs,function(e){return n("button",{key:e.name,class:["",{active:t.currentTab.name===e.name}],on:{click:function(n){t.currentTab=e}}},[t._v(t._s(e.name)+"\n    ")])})),t._v(" "),n("ul",{staticClass:"cart"},[n("li",[t._v(t._s(t.cartItems.length))])])])},staticRenderFns:[]};var u=n("VU/8")(r,s,!1,function(t){n("vBLU")},null,null).exports,m={name:"Sidebar",data:function(){return{tabs:d,currentTab:d[0]}},computed:{cartItems:function(){return this.$store.getters.cart.content}},methods:{removeItem:function(t){this.$store.dispatch("removeFromCart",t)}},created:function(){}},d=[{name:"Specials",component:{template:"<div>Delivery</div>"}},{name:"Past Orders",component:{template:"<div>Delivery</div>"}},{name:"Popular",component:{template:"<div>About</div>"}},{name:"Order Now",component:{template:"<div>Kart</div>"}}],p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("h1",[t._v("Sidebar")]),t._v(" "),n("ul",t._l(t.tabs,function(e){return n("button",{key:e.name,class:["tab-button",{active:t.currentTab.name===e.name}],on:{click:function(n){t.currentTab=e}}},[t._v(t._s(e.name)+"\n    ")])})),t._v(" "),n("ul",{staticClass:"cart"},t._l(t.cartItems,function(e){return n("li",{key:e.name},[t._v(t._s(e.num)+"\n      "),n("button",{on:{click:function(n){t.removeItem(e)}}},[t._v("x")])])}))])},staticRenderFns:[]};var l=n("VU/8")(m,p,!1,function(t){n("5NsB")},"data-v-2e825488",null).exports,v=n("tGse"),f=n.n(v),h=n("2Bxi"),b=n.n(h),g=n("lQgp"),_=n.n(g),x=n("poA4"),C=n.n(x),k=n("vGcb"),A=n.n(k),T=n("k9Qt"),I=n.n(T),$=n("M1a8"),y=n.n($),j=n("Rc0q"),N=n.n(j),V={name:"Munchies",data:function(){return{tabs:w,currentTab:w[0]}},computed:{menuItems:function(){return this.$store.getters.menu.items}},methods:{addToCart:function(t,e){var n={num:e,added:new Date};this.$emit("thingyClicked",n)},updateVal:function(){this.$store.commit("changeValue")}},created:function(){this.$http.get("http://localhost:3000/api/menu").then(function(t){this.$store.commit("updateAllPrices",t.body)})}};function B(t,e){return{name:e,component:{template:""},image:t}}var w=[];w.push(B(f.a,"chicken")),w.push(B(b.a,"happy tots")),w.push(B(_.a,"churros")),w.push(B(C.a,"sandwich")),w.push(B(A.a,"morning")),w.push(B(I.a,"ficken")),w.push(B(y.a,"strips")),w.push(B(N.a,"grilledcheese"));var D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n("div",{attrs:{id:"center"}},[n("div",{attrs:{id:"albumcontainer"}},[n("div",{attrs:{id:"album"}},t._l(t.menuItems,function(e){return n("div",{key:e.name,class:["item",{active:t.currentTab.name===e.name}],on:{click:function(n){t.currentTab=e}}},[n("div",{staticClass:"purchase"},[n("div",{staticClass:"pButton",on:{click:function(n){t.addToCart(n,e.name)}}},[n("span",[t._v("Add "+t._s(e.name)+" To Cart "+t._s(e.price))])])]),t._v(" "),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.image}})])])}))])])])},staticRenderFns:[]};var Q={name:"App",data:function(){return{sendthis:"passtoChild",value:"0"}},components:{Navbar:u,Sidebar:l,Munchies:n("VU/8")(V,D,!1,function(t){n("QQDI")},null,null).exports},computed:{cart:function(){return this.$store.getters.cart}},methods:{toCart:function(t){this.$store.commit("addToCart",t)}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("Navbar"),this._v(" "),e("Munchies",{on:{thingyClicked:this.toCart}})],1)},staticRenderFns:[]};var P=n("VU/8")(Q,M,!1,function(t){n("BiDt")},null,null).exports,S=n("7+uW"),F=n("8+8L");n.d(e,"store",function(){return O}),S.a.config.productionTip=!1,S.a.use(c.a),S.a.use(F.a);var O=new c.a.Store({state:{cart:{content:[]},menu:{items:{}},center:{content:"",allPhotos:[],photos:[],pos:0,maxLoad:20,maxImages:20,value:"0"}},getters:{menu:function(t){return t.menu},cart:function(t){return t.cart}},mutations:{removeItem:function(t,e){t.cart.content.pop(e)},addToCart:function(t,e){t.cart.content.push(e)},changeValue:function(t){t.cart.content.forEach(function(t){t.num=t.num+15})},updateAllPrices:function(t,e){t.menu.items=e}},actions:{removeFromCart:function(t,e){t.commit("removeItem",e)},changeValue:function(t,e){return S.a.http.get("http://localhost:3000/api/").then(function(t){})}}});new S.a({el:"#app",store:O,components:{App:P},template:"<App/>"})},QQDI:function(t,e){},Rc0q:function(t,e,n){t.exports=n.p+"static/img/8.38ed1dc.jpg"},k9Qt:function(t,e,n){t.exports=n.p+"static/img/6.bdfd13b.jpg"},lQgp:function(t,e,n){t.exports=n.p+"static/img/3.9d02dcd.jpg"},poA4:function(t,e,n){t.exports=n.p+"static/img/4.2bd80a4.jpg"},tGse:function(t,e,n){t.exports=n.p+"static/img/1.998d592.jpg"},vBLU:function(t,e){},vGcb:function(t,e,n){t.exports=n.p+"static/img/5.e629105.jpg"}},["NHnr"]);
//# sourceMappingURL=app.6445d970b4d7321c1e67.js.map