(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["NewsInDashboard"],{"1d3e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[t._m(0),s("CreateContent"),t._m(1)],1),s("table",{staticClass:"table table-hover"},[t._m(2),s("tbody",t._l(t.getReversePosts,function(e,a){return s("tr",{key:a},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[s("strong",[t._v(t._s(e.description))])]),s("td",{domProps:{innerHTML:t._s(t.setIconPublished("true"==e.published))}}),s("td",[t._v(t._s(t._f("formatDate2")(e.date)))]),s("td",[s("router-link",{attrs:{to:"/panel/novedades/"+e.alias}},[s("strong",[s("i",{staticClass:"far fa-eye"})])])],1),s("td",[s("router-link",{attrs:{to:"/panel/novedades/"+e.alias+"/modificar"}},[s("strong",[s("i",{staticClass:"far fa-edit"})])])],1),s("td",[s("a",{on:{click:function(s){return t.removePost(e._id)}}},[t._m(3,!0)])])])}),0)])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-8 pl-3 pt-2"},[s("h3",[t._v("Novedades")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("button",{staticClass:"btn btn-outline-success btn-rounded waves-effect",attrs:{type:"button","data-toggle":"modal","data-target":"#createContent"}},[s("i",{staticClass:"fas fa-plus"}),t._v(" Crear nueva novedad\n          ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),s("th",[t._v("Titulo")]),s("th",[t._v("Publicado")]),s("th",[t._v("Fecha de publicación")]),s("th",[t._v("Ver")]),s("th",[t._v("Editar")]),s("th",[t._v("Eliminar")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("strong",[s("i",{staticClass:"fas fa-trash-alt"})])}],r=(s("96cf"),s("3b8d")),o=s("cebc"),i=s("2f62"),c=s("ae12"),u=function(){return s.e("Breadcrumb").then(s.bind(null,"a462"))},l=function(){return Promise.resolve().then(s.bind(null,"84c2"))},d={name:"NewsInDashboard",components:{Breadcrumb:u,CreateContent:l},created:function(){this.getPosts()},computed:Object(o["a"])({},Object(i["c"])(["getReversePosts"])),methods:Object(o["a"])({},Object(i["b"])(["getPosts"]),{setIconPublished:function(t){return t?"<i class='fas fa-check'></i>":"<i class='fas fa-minus'></i>"},removePost:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].remove(e);case 3:return s=t.sent,t.next=6,s.json();case 6:a=t.sent,a.success?(this.getPosts(),toastr.success(a.message,{preventDuplicates:!0,positionClass:"toast-bottom-full-width",timeOut:"10000"})):toastr.error(a.message,{preventDuplicates:!0,positionClass:"toast-bottom-full-width",timeOut:"10000"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),toastr.error("Error de servicio de novedades.",{preventDuplicates:!0,positionClass:"toast-bottom-full-width",timeOut:"10000"});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e){return t.apply(this,arguments)}return e}()})},v=d,f=(s("65cd"),s("2877")),m=Object(f["a"])(v,a,n,!1,null,"1f8e5acb",null);e["default"]=m.exports},"65cd":function(t,e,s){"use strict";var a=s("a07b"),n=s.n(a);n.a},a07b:function(t,e,s){}}]);