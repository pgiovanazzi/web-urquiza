(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EntrantsInDashboard"],{6528:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[e.$store.getters.getAspirants?n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"m-3"},[e._v("Aspirantes registrados")]),n("vue-good-table",{attrs:{columns:e.columns,rows:e.rows,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Buscar aspirante"},"pagination-options":{enabled:!0,nextLabel:"Siguiente",prevLabel:"Anterior",rowsPerPageLabel:"Filas por página",ofLabel:"de",pageLabel:"página",allLabel:"Todas"}},on:{"on-row-click":e.onRowClick}})],1)]):e._e()])])},r=[],s=(n("96cf"),n("3b8d")),i=(n("dac4"),n("f617")),o={name:"EntrantsInDashboard",components:{VueGoodTable:i["a"]},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getAspirants");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{columns:[{label:"Nombre",field:"name"},{label:"Tipo de Documento",field:"doc_type"},{label:"Numero de documento",field:"dni",type:"number"},{label:"Carrera",field:"career"},{label:"Fecha de Preinscripción",field:this.fealdFn}],rows:this.$store.getters.getAspirants}},updated:function(){this.rows=this.$store.getters.getAspirants},methods:{onRowClick:function(e){this.$router.push("/panel/aspirante/".concat(e.row._id))},fealdFn:function(e){if(e)return this.$options.filters.formatDate2(e.signupDate)}}},l=o,c=n("2877"),u=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports}}]);