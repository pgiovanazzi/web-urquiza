(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pages"],{a06a:function(t,e,a){"use strict";var s=a("af78"),r=a.n(s);r.a},af78:function(t,e,a){},fee4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row"},[t._m(0),a("CreateContent"),t._m(1)],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 p-4"},[a("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[a("div",{staticClass:"card z-depth-0 bordered"},[t._m(2),a("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover",attrs:{id:"tablePreview"}},[t._m(3),a("tbody",t._l(t.$store.getters.getPagesInstitutional("INSTITUCIONAL"),function(e,s){var r=e.description,i=e.published,n=e.date,c=e.alias,o=e._id;return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[a("strong",[t._v(t._s(r))])]),a("td",{domProps:{innerHTML:t._s(t.setIconPublished(i))}}),a("td",[t._v(t._s(t._f("formatDate2")(n)))]),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c}},[a("strong",[a("i",{staticClass:"far fa-eye"})])])],1),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c+"/modificar"}},[a("strong",[a("i",{staticClass:"far fa-edit"})])])],1),a("td",[a("a",{on:{click:function(e){return t.removePage(o)}}},[t._m(4,!0)])])])}),0)])])])]),a("div",{staticClass:"card z-depth-0 bordered"},[t._m(5),a("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover",attrs:{id:"tablePreview"}},[t._m(6),a("tbody",t._l(t.$store.getters.getPagesInstitutional("INGRESANTES"),function(e,s){var r=e.description,i=e.published,n=e.date,c=e.alias,o=e._id;return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[a("strong",[t._v(t._s(r))])]),a("td",{domProps:{innerHTML:t._s(t.setIconPublished(i))}}),a("td",[t._v(t._s(t._f("formatDate2")(n)))]),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c}},[a("strong",[a("i",{staticClass:"far fa-eye"})])])],1),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c+"/modificar"}},[a("strong",[a("i",{staticClass:"far fa-edit"})])])],1),a("td",[a("a",{on:{click:function(e){return t.removePage(o)}}},[t._m(7,!0)])])])}),0)])])])]),a("div",{staticClass:"card z-depth-0 bordered"},[t._m(8),a("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover",attrs:{id:"tablePreview"}},[t._m(9),a("tbody",t._l(t.$store.getters.getCareersInState,function(e,s){var r=e.description,i=e.published,n=e.date,c=e.alias,o=e._id;return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[a("strong",[t._v(t._s(r))])]),a("td",{domProps:{innerHTML:t._s(t.setIconPublished(i))}}),a("td",[t._v(t._s(t._f("formatDate2")(n)))]),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c}},[a("strong",[a("i",{staticClass:"far fa-eye"})])])],1),a("td",[a("router-link",{attrs:{to:"/panel/paginas/"+c+"/modificar"}},[a("strong",[a("i",{staticClass:"far fa-edit"})])])],1),a("td",[a("a",{on:{click:function(e){return t.removeCareer(o)}}},[t._m(10,!0)])])])}),0)])])])])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-8 pl-3 pt-2"},[a("h3",[t._v("Paginas")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("button",{staticClass:"btn btn-outline-success btn-rounded waves-effect",attrs:{type:"button","data-toggle":"modal","data-target":"#createContent"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Crear nueva pagina\n          ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[a("h4",{staticClass:"h4-responsive m-0"},[t._v("Institucional")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Descripción (título)")]),a("th",[t._v("Publicado")]),a("th",[t._v("Fecha de publicación")]),a("th",[t._v("Ver")]),a("th",[t._v("Editar")]),a("th",[t._v("Eliminar")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("strong",[a("i",{staticClass:"fas fa-trash-alt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[a("h4",{staticClass:"h4-responsive m-0"},[t._v("Ingresantes")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Descripción (título)")]),a("th",[t._v("Publicado")]),a("th",[t._v("Fecha de publicación")]),a("th",[t._v("Ver")]),a("th",[t._v("Editar")]),a("th",[t._v("Eliminar")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("strong",[a("i",{staticClass:"fas fa-trash-alt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[a("h4",{staticClass:"h4-responsive m-0"},[t._v("Carreras")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Descripción (título)")]),a("th",[t._v("Publicado")]),a("th",[t._v("Fecha de publicación")]),a("th",[t._v("Ver")]),a("th",[t._v("Editar")]),a("th",[t._v("Eliminar")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("strong",[a("i",{staticClass:"fas fa-trash-alt"})])}],i=(a("96cf"),a("3b8d")),n=a("fb04"),c=a("3394"),o=function(){return Promise.resolve().then(a.bind(null,"84c2"))},l={name:"Pages",components:{CreateContent:o},computed:{getLogitype:function(){return this.$store.getters.getCareersInState[0].logotype}},created:function(){this.$store.dispatch("getPages")},data:function(){return{entrants:[]}},mounted:function(){this.entrants=this.$store.getters.getPagesEntrant("INGRESANTES")},methods:{setIconPublished:function(t){return t?"<i class='fas fa-check'></i>":"<i class='fas fa-minus'></i>"},removePage:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["a"].remove(e);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,s.success?(this.$store.dispatch("getPages"),this.$toasted.success(s.message,{icon:"check"})):this.$toasted.error(s.message,{icon:"times"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.$toasted.error("Error de servicio de paginas.",{icon:"times"});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e){return t.apply(this,arguments)}return e}(),removeCareer:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].remove(e);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,s.success?(this.$store.dispatch("getCareers"),this.$toasted.success(s.message,{icon:"check"})):this.$toasted.error(s.message,{icon:"times"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.$toasted.error("Error de servicio de paginas.",{icon:"times"});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e){return t.apply(this,arguments)}return e}()}},d=l,u=(a("a06a"),a("2877")),h=Object(u["a"])(d,s,r,!1,null,"e1364cd4",null);e["default"]=h.exports}}]);