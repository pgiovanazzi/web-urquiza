(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EntrantsInDashboard"],{6528:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("h3",{staticClass:"m-3"},[t._v("Ultimos 30 Aspirantes")]),s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.$store.getters.getAspirants,function(e,a){var r=e.name,o=e.doc_type,c=e.dni,n=e.birth,l=e.gender,_=e.phone_number,i=e.email,d=e.career;return s("tr",{key:a},[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),s("td",[t._v(t._s(r))]),s("td",[t._v(t._s(o))]),s("td",[t._v(t._s(c))]),s("td",[t._v(t._s(t._f("formatDate2")(n)))]),s("td",[t._v(t._s(l))]),s("td",[t._v(t._s(_))]),s("td",[t._v(t._s(i))]),s("td",[t._v(t._s(d))])])}),0)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"black white-text"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),s("th",{attrs:{scope:"col"}},[t._v("Nombre")]),s("th",{attrs:{scope:"col"}},[t._v("Tipo de Documento")]),s("th",{attrs:{scope:"col"}},[t._v("Numero de Documento")]),s("th",{attrs:{scope:"col"}},[t._v("Fecha de nacimiento")]),s("th",{attrs:{scope:"col"}},[t._v("Genero")]),s("th",{attrs:{scope:"col"}},[t._v("Telefono")]),s("th",{attrs:{scope:"col"}},[t._v("Email")]),s("th",{attrs:{scope:"col"}},[t._v("Carrera")])])])}],o=function(){return s.e("Breadcrumb").then(s.bind(null,"a462"))},c={name:"EntrantsInDashboard",components:{Breadcrumb:o}},n=c,l=s("2877"),_=Object(l["a"])(n,a,r,!1,null,null,null);e["default"]=_.exports}}]);