(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{290:function(t,n,e){"use strict";e.r(n);e(34),e(47);var r={layout:function(t){return"custom"},data:function(){return{paramId:this.$route.params.id,tasks:[{id:1,title:"Task 1",description:"ini deskripsi 1",isDone:!1},{id:2,title:"Tugas 2",description:"ini deskripsi 2",isDone:!1},{id:3,title:"Kerja 3",description:"ini deskripsi 3",isDone:!1}]}}},o=e(22),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"py-4"},[n("div",{staticClass:"container"},[t._l(t.tasks,(function(e){return n("div",{key:e.id},[e.id==t.paramId?n("div",{staticClass:"item-task d-flex align-items-start border-bottom pt-3 pb-4"},[n("input",{staticClass:"me-2 mt-2",attrs:{type:"checkbox",name:"status",id:"tasks"}}),t._v(" "),n("div",[n("div",{staticClass:"title-task mb-1"},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"description-task small text-muted mb-3"},[t._v("\n                "+t._s(e.description)+"\n            ")]),t._v(" "),n("input",{staticClass:"form-control form-control-sm",attrs:{type:"date"}})])]):t._e()])})),t._v(" "),n("div",{staticClass:"action mt-4"},[n("div",{staticClass:"btn btn-outline-secondary btn-sm mb-3",on:{click:function(n){return t.$router.go(-1)}}},[t._v("\n            Kembali\n        ")])])],2)])}),[],!1,null,null,null);n.default=component.exports}}]);