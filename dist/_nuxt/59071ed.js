(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("7388ab72",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Projects",to:"/projects"},{icon:"mdi-chart-bubble",title:"Publications",to:"/publications"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Dustin Bowers"}}},n=r(66),c=r(105),l=r.n(c),d=r(294),v=r(298),f=r(299),h=r(295),_=r(296),m=r(297),x=r(194),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-spacer"),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("v-spacer"),t._v(" "),r("span",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" "),r("v-spacer")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:v.a,VContainer:f.a,VFooter:h.a,VMain:_.a,VSpacer:m.a,VToolbarTitle:x.a})},208:function(t,e,r){r(209),t.exports=r(210)},234:function(t,e,r){"use strict";r(170)},235:function(t,e,r){(e=r(25)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},49:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(234),r(66)),c=r(105),l=r.n(c),d=r(294),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[208,5,2,6]]]);