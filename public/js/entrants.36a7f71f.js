(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["entrants"],{4270:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"pb-5 p-sm-1 p-md-4",domProps:{innerHTML:t._s(t.findPageByParams(t.id))}})])},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"Entrants",computed:o({},Object(c["d"])(["pages"])),watch:{$route:function(t,e){this.id=this.getID()}},data:function(){return{id:this.getID()}},methods:{getID:function(){return this.$route.params.entrantsPage},findPageByParams:function(t){for(var e="",r=0;r<this.pages.length;r++)if(this.pages[r].url==t){e=this.pages[r].content;break}return e}}},u=p,f=r("2877"),b=Object(f["a"])(u,n,a,!1,null,null,null);e["default"]=b.exports}}]);