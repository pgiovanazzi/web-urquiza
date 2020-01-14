(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac437"],{1992:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isAspirantView?s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-md-6"},[s("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("h3",[t._v("Información del Aspirante")]),s("small",[s("samp",[t._v("Fecha de registro: "+t._s(t._f("formatDate2")(t.$store.getters.getAspirantById(t.getId).signupDate)))])])])])]),s("tbody",t._l(t.aspirantDataFields,(function(e,r){return s("tr",{key:r},[s("td",[s("p",[s("strong",[t._v(t._s(r)+":")]),t._v(" "+t._s("birth"==e?t.formater(e):t.$store.getters.getAspirantById(t.getId)[e])+" ")])])])})),0)])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[t._m(0),s("tbody",t._l(t.aspirantDataStudies,(function(e,r){return s("tr",{key:r},[s("td",[s("p",[s("strong",[t._v(t._s(r)+":")]),t._v(" "+t._s(t.$store.getters.getAspirantById(t.getId)[e])+" ")])])])})),0)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[t._m(1),s("tbody",t._l(t.aspirantDataOtherStudies,(function(e,r){return s("tr",{key:r},[s("td",[s("p",[s("strong",[t._v(t._s(r)+":")]),t._v(" "+t._s(t.$store.getters.getAspirantById(t.getId)[e])+" ")])])])})),0)])])]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-outline-success waves-effect btn-block",attrs:{type:"button"},on:{click:function(e){return t.updateAsStudent(t.getId)}}},[s("i",{staticClass:"fas fa-user-check"}),t._v(" Registrar como Alumno ")])])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-outline-default waves-effect btn-block",attrs:{type:"button"},on:{click:function(e){return t.editAspirant(t.getId)}}},[s("i",{staticClass:"fas fa-user-cog"}),t._v(" Modificar ")])])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-outline-danger waves-effect btn-block",attrs:{type:"button"},on:{click:function(e){return t.removeAspirant(t.getId)}}},[s("i",{staticClass:"fas fa-user-times"}),t._v(" Eliminar ")])])])])])]):t._e(),s("router-view")],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("h3",[t._v("Carrera")]),s("br")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("h3",[t._v("Otros estudios superiores")]),s("br")])])])}],n=(s("96cf"),s("3b8d")),i=(s("7f7f"),s("d225")),o=s("dde5"),c=function t(e,s){Object(i["a"])(this,t),this.type=e,this.title=s},d=function t(e,s){Object(i["a"])(this,t),this.title=e,this.type=s,this.confirmButtonText="Aceptar",this.customClass={confirmButton:"btn btn-outline-elegant waves-effect rounded-0"}},u={name:"Entrant",computed:{getId:function(){return this.$route.params.id},isAspirantView:function(){return"Entrant"==this.$route.name}},data:function(){return{aspirantDataFields:{"Nombre y Apellido":"name","Tipo de documento":"doc_type","Numero de documento":"dni","Fecha de nacimiento":"birth",Genero:"gender","E-mail":"email","Numero de telefono":"phone_number","Dirección":"address",Piso:"floor",Departamento:"dpt",Ciudad:"city","Codigo postal":"zip_code"},aspirantDataStudies:{"Año de incripción":"year_ins",Titulo:"career",Establecimiento:"place_career"},aspirantDataOtherStudies:{Carrera:"estudios_sup","Ultimo año cursado":"last_year_c","Estado de la carrera":"career_comp"},toast:this.$swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:8e3})}},methods:{formater:function(t){return this.$options.filters.formatDate2(this.$store.getters.getAspirantById(this.getId)[t])},editAspirant:function(t){this.$router.push("/panel/aspirante/".concat(t,"/modificar"))},updateAsStudent:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var s,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["g"].add(this.$store.getters.getAspirantById(e));case 3:return s=t.sent,t.next=6,s.json();case 6:if(r=t.sent,!r.success){t.next=23;break}return t.prev=8,t.next=11,o["a"].delete(e);case 11:return a=t.sent,t.next=14,a.json();case 14:n=t.sent,n.success?(this.$swal.fire(new d(r.message,"success")),this.$router.push("/panel/aspirantes")):this.$swal.fire(new d(n.message,"error")),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](8),this.$swal.fire(new d("Error al cambiar de estado de aspirante a alumno.","error"));case 21:t.next=24;break;case 23:this.$swal.fire(new d(r.message,"error"));case 24:t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](0),this.$swal.fire(new d("Error en el servicio de alumnos.","error"));case 29:case"end":return t.stop()}}),t,this,[[0,26],[8,18]])})));function e(e){return t.apply(this,arguments)}return e}(),removeAspirant:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].delete(e);case 3:return s=t.sent,t.next=6,s.json();case 6:r=t.sent,r.success?(this.toast.fire(new c("success",r.message)),this.$router.push("/panel/aspirantes")):this.toast.fire(new c("error",r.message)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.toast.fire(new c("error","Error de servicio de aspirantes."));case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(e){return t.apply(this,arguments)}return e}()}},l=u,p=s("2877"),f=Object(p["a"])(l,r,a,!1,null,null,null);e["default"]=f.exports}}]);