(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e1f6"],{d3e6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Editar publicación")]),t.contentData?a("form",{on:{submit:function(e){return e.preventDefault(),t.sendEditContent(e)}}},[a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-file-alt prefix"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contentData.description,expression:"contentData.description",modifiers:{trim:!0}}],ref:"description",staticClass:"form-control validate",attrs:{type:"text",required:""},domProps:{value:t.contentData.description},on:{input:function(e){e.target.composing||t.$set(t.contentData,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("label",{attrs:{"data-error":"error","data-success":"correcto"}},[t._v("Descripción o nombre")])]),t.contentData.certificName?a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-file-alt prefix"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contentData.certificName,expression:"contentData.certificName",modifiers:{trim:!0}}],staticClass:"form-control validate",attrs:{type:"text",required:""},domProps:{value:t.contentData.certificName},on:{input:function(e){e.target.composing||t.$set(t.contentData,"certificName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("label",{attrs:{"data-error":"error","data-success":"correcto"}},[t._v("Título de la carrera")])]):t._e(),t.contentData.years?a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-file-alt prefix"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contentData.years,expression:"contentData.years",modifiers:{trim:!0}}],staticClass:"form-control validate",attrs:{type:"text",required:""},domProps:{value:t.contentData.years},on:{input:function(e){e.target.composing||t.$set(t.contentData,"years",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("label",{attrs:{"data-error":"error","data-success":"correcto"}},[t._v("Años de cursado")])]):t._e(),a("input",{ref:"fileStudyPlan",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileSelectedPlan}}),t.contentData.studyPlanFile?a("div",{staticClass:"md-form"},[a("div",{staticClass:"custom-file text-center"},[a("a",{staticClass:"btn btn-link",attrs:{href:t.planPdf,target:"_blank"}},[t._v(t._s(t.contentData.studyPlanFile.slice(25)))]),a("button",{staticClass:"btn btn-outline-primary waves-effect btn-large",attrs:{type:"button"},on:{click:function(e){return t.$refs.fileStudyPlan.click()}}},[a("i",{staticClass:"fas fa-upload"}),t._v("\n          "+t._s(t.planFileName)+"\n        ")])])]):t._e(),a("input",{ref:"fileIconCareer",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileSelectedIcon}}),t.contentData.logotype?a("div",{staticClass:"md-form mb-5"},[a("div",{staticClass:"custom-file text-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row flex-center"},[a("img",{staticStyle:{height:"8rem"},attrs:{src:t.iconImg,alt:t.contentData.description}}),a("button",{staticClass:"btn btn-outline-primary waves-effect btn-large",attrs:{type:"button"},on:{click:function(e){return t.$refs.fileIconCareer.click()}}},[a("i",{staticClass:"fas fa-upload"}),t._v("\n              "+t._s(t.iconFileName)+"\n            ")])])])])]):t._e(),a("CKEditor",{attrs:{contentData:t.contentData.content}}),a("div",{staticClass:"md-from mt-3"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contentData.published,expression:"contentData.published"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"defaultIndeterminate2"},domProps:{checked:Array.isArray(t.contentData.published)?t._i(t.contentData.published,null)>-1:t.contentData.published},on:{change:function(e){var a=t.contentData.published,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&t.$set(t.contentData,"published",a.concat([i])):r>-1&&t.$set(t.contentData,"published",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.contentData,"published",s)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"defaultIndeterminate2"},on:{click:function(e){return t.publishedState()}}},[t._v("Publicado")])])]),a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-pencil-alt prefix"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contentData.metaDescription,expression:"contentData.metaDescription",modifiers:{trim:!0}}],staticClass:"form-control validate",attrs:{type:"text"},domProps:{value:t.contentData.metaDescription},on:{input:function(e){e.target.composing||t.$set(t.contentData,"metaDescription",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("label",{ref:"metaDescription",attrs:{"data-error":"error","data-success":"correcto"}},[t._v("Meta descripción")])]),a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-tags prefix"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contentData.metaLabel,expression:"contentData.metaLabel",modifiers:{trim:!0}}],ref:"metaLabel",staticClass:"form-control validate",attrs:{type:"text"},domProps:{value:t.contentData.metaLabel},on:{input:function(e){e.target.composing||t.$set(t.contentData,"metaLabel",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("label",{attrs:{"data-error":"error","data-success":"correcto"}},[t._v("Meta etiqueta")])]),t._m(0)],1):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("button",{staticClass:"btn btn-outline-elegant waves-effect"},[t._v("Modificar contenido")])])}],i=(a("7f7f"),a("96cf"),a("3b8d")),r=a("d225"),o=a("46fe"),c=a("fb04"),l=a("3394"),d=a("c035"),u=function t(e,a){Object(r["a"])(this,t),this.title=e,this.type=a,this.confirmButtonText="Aceptar",this.customClass={confirmButton:"btn btn-outline-elegant waves-effect rounded-0"}},m={name:"EditPageAndNews",components:{CKEditor:d["a"]},created:function(){this.$store.dispatch("getPosts"),this.$store.dispatch("getPages"),this.$store.dispatch("getCareers"),this.$store.getters.getPostByAlias(this.$route.params.id)&&(this.contentData=this.$store.getters.getPostByAlias(this.$route.params.id)),this.$store.getters.getPageByAlias(this.$route.params.id)&&(this.contentData=this.$store.getters.getPageByAlias(this.$route.params.id)),this.$store.getters.getCareerByAlias(this.$route.params.id)&&(this.contentData=this.$store.getters.getCareerByAlias(this.$route.params.id)),this.iconImg=this.contentData.logotype?a("5242")("./".concat(this.contentData.logotype)):null,this.planPdf=this.contentData.studyPlanFile?"/uploaded-files/"+this.contentData.studyPlanFile:null},mounted:function(){this.focusInput()},data:function(){return{contentData:{},planFileName:"Cambiar archivo del plan de estudio",iconFileName:"Cambiar icono de la carrera",planPdf:null,iconImg:null}},methods:{publishedState:function(){this.contentData.published=!this.contentData.published},focusInput:function(){this.$refs.description.focus()},sendEditContent:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.contentData.content=this.$store.getters.getEditorContent,"CARRERAS"!==this.contentData.section){t.next=8;break}return t.next=5,l["a"].edit(this.contentData,this.contentData._id);case 5:t.t0=t.sent,t.next=18;break;case 8:if(!this.contentData.section){t.next=14;break}return t.next=11,c["a"].edit(this.contentData,this.contentData._id);case 11:t.t1=t.sent,t.next=17;break;case 14:return t.next=16,o["a"].edit(this.contentData,this.contentData._id);case 16:t.t1=t.sent;case 17:t.t0=t.t1;case 18:return e=t.t0,t.next=21,e.json();case 21:a=t.sent,a.success?(this.$store.dispatch("getPosts"),this.$store.dispatch("getPages"),this.$store.dispatch("getCareers"),this.$swal.fire(new u(a.message,"success")),this.contentData.section?this.$router.push("/panel/paginas"):this.$router.push("/panel/novedades")):this.$swal.fire(new u(a.message,"error")),t.next=28;break;case 25:t.prev=25,t.t2=t["catch"](0),this.$swal.fire(new u(this.$route.path==="/panel/novedades/"+this.$route.params.id+"/modificar"?"Error de servicio de novedades.":"Error de servicio de paginas","error"));case 28:case"end":return t.stop()}},t,this,[[0,25]])}));function e(){return t.apply(this,arguments)}return e}(),onFileSelectedPlan:function(t){this.planFileName=t.target.files[0].name,this.contentData.studyPlanFile=t.target.files[0]},onFileSelectedIcon:function(t){this.iconFileName=t.target.files[0].name,this.contentData.logotype=t.target.files[0]}}},f=m,p=a("2877"),h=Object(p["a"])(f,n,s,!1,null,null,null);e["default"]=h.exports}}]);