(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["entrants"],{4270:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"pb-5 p-sm-1 p-md-4",domProps:{innerHTML:t._s(t.findPageByParams(t.id))}})])},s=[],r=n("cebc"),i=n("2f62"),c={name:"Entrants",computed:Object(r["a"])({},Object(i["c"])(["pages"])),watch:{$route:function(t,e){this.id=this.getID()}},data:function(){return{id:this.getID()}},methods:{getID:function(){return this.$route.params.entrantsPage},findPageByParams:function(t){for(var e="",n=0;n<this.pages.length;n++)if(this.pages[n].url==t){e=this.pages[n].content;break}return e}}},u=c,o=n("2877"),p=Object(o["a"])(u,a,s,!1,null,null,null);e["default"]=p.exports}}]);