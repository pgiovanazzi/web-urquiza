(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a45aa"],{"05a0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataEntity?a("div",[a("div",{staticClass:"container"},[a("form",{staticClass:"text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[a("h3",[t._v("Modificar datos del Aspirante")]),a("small",[a("samp",[t._v("Fecha de registro:\n                      "+t._s(t._f("formatDate2")(t.dataEntity.signupDate)))])])])])]),a("tbody",[a("tr",[a("td",[a("strong",[t._v("Nombre y Apellido:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.name,expression:"dataEntity.name"}],staticClass:"form-control",domProps:{value:t.dataEntity.name},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"name",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Tipo de documento:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.doc_type,expression:"dataEntity.doc_type"}],staticClass:"browser-default custom-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"doc_type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"DNI"}},[t._v("DNI: Documento Nacional de Identidad")]),a("option",{attrs:{value:"CI"}},[t._v("CI: Cédula de Identidad")]),a("option",{attrs:{value:"LE"}},[t._v("LE: Libreta de Enrolamiento")]),a("option",{attrs:{value:"LC"}},[t._v("LC: Libreta Civica")])])])]),a("tr",[a("td",[a("strong",[t._v("Nro. de documento:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.dni,expression:"dataEntity.dni"}],staticClass:"form-control",domProps:{value:t.dataEntity.dni},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"dni",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Fecha de nacimiento:")]),a("datepicker",{attrs:{"bootstrap-styling":!0,format:t.customFormatter,language:t.es,placeholder:"Fecha de Nacimiento"},model:{value:t.dataEntity.birth,callback:function(e){t.$set(t.dataEntity,"birth",e)},expression:"dataEntity.birth"}})],1)]),a("tr",[a("td",[a("strong",[t._v("Genero:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.gender,expression:"dataEntity.gender"}],staticClass:"browser-default custom-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"M"}},[t._v("Masculino")]),a("option",{attrs:{value:"F"}},[t._v("Femenino")]),a("option",{attrs:{value:"O"}},[t._v("Otro")])])])]),a("tr",[a("td",[a("strong",[t._v("E-mail:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.email,expression:"dataEntity.email"}],staticClass:"form-control",domProps:{value:t.dataEntity.email},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"email",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Numero de telefono:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.phone_number,expression:"dataEntity.phone_number"}],staticClass:"form-control",domProps:{value:t.dataEntity.phone_number},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"phone_number",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Dirección:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.address,expression:"dataEntity.address"}],staticClass:"form-control",domProps:{value:t.dataEntity.address},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"address",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Piso:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.floor,expression:"dataEntity.floor"}],staticClass:"form-control",domProps:{value:t.dataEntity.floor},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"floor",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Departamento:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.dpt,expression:"dataEntity.dpt"}],staticClass:"form-control",domProps:{value:t.dataEntity.dpt},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"dpt",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Ciudad:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.city,expression:"dataEntity.city"}],staticClass:"form-control",domProps:{value:t.dataEntity.city},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"city",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Codigo postal:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.zip_code,expression:"dataEntity.zip_code"}],staticClass:"form-control",domProps:{value:t.dataEntity.zip_code},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"zip_code",e.target.value)}}})])])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[t._m(0),a("tbody",[a("tr",[a("td",[a("strong",[t._v("Año de incripción:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.year_ins,expression:"dataEntity.year_ins"}],staticClass:"browser-default custom-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"year_ins",e.target.multiple?a:a[0])}}},t._l(t.careerYearValue,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0)])]),a("tr",[a("td",[a("strong",[t._v("Título:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.career,expression:"dataEntity.career"}],staticClass:"browser-default custom-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"career",e.target.multiple?a:a[0])}}},t._l(t.$store.getters.getCareersInState,function(e,r){var n=e.description,o=e.certificName;return a("option",{key:r,domProps:{value:n}},[t._v(t._s(o))])}),0)])]),a("tr",[a("td",[a("strong",[t._v("Establecimiento:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.place_career,expression:"dataEntity.place_career"}],staticClass:"browser-default custom-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"place_career",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Oroño 690"}},[t._v("Oroño 690")]),a("option",{attrs:{value:"Extención aulica"}},[t._v("Extención aulica (Sur)")])])])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover table-bordered shadow",attrs:{id:"tablePreview"}},[t._m(1),a("tbody",[a("tr",[a("td",[a("strong",[t._v("Carrera:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.estudios_sup,expression:"dataEntity.estudios_sup"}],staticClass:"form-control",domProps:{value:t.dataEntity.estudios_sup},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"estudios_sup",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Ultimo año cursado:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.last_year_c,expression:"dataEntity.last_year_c"}],staticClass:"form-control",domProps:{value:t.dataEntity.last_year_c},on:{input:function(e){e.target.composing||t.$set(t.dataEntity,"last_year_c",e.target.value)}}})])]),a("tr",[a("td",[a("strong",[t._v("Estado de la carrera:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dataEntity.career_comp,expression:"dataEntity.career_comp"}],staticClass:"browser-default custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.dataEntity,"career_comp",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Completa"}},[t._v("Completa")]),a("option",{attrs:{value:"Incompleta"}},[t._v("Incompleta")]),a("option",{attrs:{value:"Cursando"}},[t._v("Cursando")])])])])])])])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-outline-success waves-effect btn-block",attrs:{type:"button"},on:{click:function(e){return t.uploadData()}}},[a("i",{staticClass:"fas fa-user-edit"}),t._v(" Actualizar datos\n                ")])])])])])])])])]):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[a("h3",[t._v("Modificar carrera")]),a("br")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[a("h3",[t._v("Modificar otros estudios superiores")]),a("br")])])])}],o=(a("96cf"),a("3b8d")),i=(a("7f7f"),a("d225")),s=a("fa33"),d=a("dde5"),l=function t(e,a){Object(i["a"])(this,t),this.type=e,this.title=a},c={name:"EditEntrantsAndStudents",components:{Datepicker:s["a"]},computed:{getId:function(){return this.$route.params.id},setEntity:function(){return"EntrantEdit"==this.$route.name?this.$store.getters.getAspirantById(this.getId):this.$store.getters.getStudentsById(this.getId)}},data:function(){return{dataEntity:null,careerYearValue:[this.getCareerYearValue(),this.getCareerYearValue()+1],es:a("4330"),toast:this.$swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:8e3})}},mounted:function(){this.dataEntity=this.setEntity},methods:{customFormatter:function(t){return moment(t).format("DD/MM/YYYY")},getCareerYearValue:function(){var t=new Date;return t.getFullYear()},choseService:function(t){return"EntrantEdit"==this.$route.name?d["a"].update(t,this.dataEntity):d["g"].update(t,this.dataEntity)},uploadData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.choseService(this.dataEntity._id);case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,a.success?(this.$store.dispatch("getAspirants"),this.toast.fire(new l("success",a.message)),"EntrantEdit"==this.$route.name?this.$router.push("/panel/aspirante/".concat(this.dataEntity._id)):this.$router.push("/panel/alumno/".concat(this.dataEntity._id))):this.toast.fire(new l("error",a.message)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.toast.fire(new l("error","Error de servicio de ".concat("EntrantEdit"==this.$route.name?"aspirantes":"alumnos",".")));case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}()}},u=c,m=a("2877"),v=Object(m["a"])(u,r,n,!1,null,null,null);e["default"]=v.exports}}]);