(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c51f6"],{"3e6d":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[t.data?a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item text-center unique-color white-text"},[t._v("Información de la publicación")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Título:")]),t._v("\n      "+t._s(t.data.description)+"\n    ")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Fecha de creación:")]),t._v("\n      "+t._s(t._f("formatDate2")(t.data.date))+"\n    ")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Publicado:")]),t._v("\n      "+t._s(t.data.published?"Si":"No")+"\n    ")]),t.data.section?a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Sección:")]),t._v("\n      "+t._s(t.data.section)+"\n    ")]):t._e(),t.$store.getters.getCareerByAlias(t.$route.params.id)?a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Nombre del Título de la carrera:")]),t._v("\n      "+t._s(t.data.certificName)+"\n    ")]):t._e(),t.$store.getters.getCareerByAlias(t.$route.params.id)?a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Logotipo:")]),t._v("\n      "+t._s(t.data.logotype)+"\n    ")]):t._e(),t.$store.getters.getCareerByAlias(t.$route.params.id)?a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Plan de la carrera:")]),t._v("\n      "+t._s(t.data.studyPlanFile)+"\n    ")]):t._e(),t.$store.getters.getCareerByAlias(t.$route.params.id)?a("li",{staticClass:"list-group-item"},[a("strong",[t._v("Cantidad de años:")]),t._v("\n      "+t._s(t.data.years)+"\n    ")]):t._e()]):t._e()])},i=[],r={name:"DBSidebar",props:{data:Object}},l=r,o=a("2877"),n=Object(o["a"])(l,e,i,!1,null,null,null);s["default"]=n.exports}}]);