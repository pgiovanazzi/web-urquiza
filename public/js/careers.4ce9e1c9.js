(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["careers"],{"27db":function(e,t,r){},"71c1e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[r("div",{staticClass:"pb-5 p-sm-1 p-md-4",domProps:{innerHTML:e._s(e.findTitleByParams(e.id))}})]),r("img",{staticClass:"mx-auto d-block img-thumbnail m-4",attrs:{src:e.findImageByParams(e.id),alt:e.findTitleByParams(e.id)}}),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"pb-5 p-sm-1 p-md-4",domProps:{innerHTML:e._s(e.findContentByParams(e.id))}})]),r("div",{staticClass:"col-md-4"},[r("CareerSidebar",{attrs:{career:e.$store.getters.getCareerByAlias(e.id)}})],1)])])])},s=[],i=r("cebc"),n=r("2f62"),c=function(){return r.e("chunk-2d0bd201").then(r.bind(null,"2b50"))},d={name:"Careers",components:{CareerSidebar:c},computed:Object(i["a"])({},Object(n["d"])(["careers"])),watch:{$route:function(e,t){this.id=this.getID()}},data:function(){return{id:this.getID()}},methods:{getID:function(){return this.$route.params.careersPage},findContentByParams:function(e){for(var t="",r=0;r<this.careers.length;r++)if(this.careers[r].url==e){t=this.careers[r].content;break}return t},findTitleByParams:function(e){for(var t="",r=0;r<this.careers.length;r++)if(this.careers[r].url==e){t=this.careers[r].description;break}return t},findImageByParams:function(e){for(var t="",a=0;a<this.careers.length;a++)if(this.careers[a].url==e){t=this.careers[a].logotype;break}return r("5242")("./".concat(t))}}},o=d,u=(r("71fe"),r("2877")),l=Object(u["a"])(o,a,s,!1,null,null,null);t["default"]=l.exports},"71fe":function(e,t,r){"use strict";var a=r("27db"),s=r.n(a);s.a}}]);