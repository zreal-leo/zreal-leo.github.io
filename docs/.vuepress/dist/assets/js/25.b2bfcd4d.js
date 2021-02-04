(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{380:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("直接先放上 vue 官网上拿来的生命周期图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://v3.cn.vuejs.org/images/lifecycle.png",alt:"生命周期"}})]),t._v(" "),s("h3",{attrs:{id:"创建实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实例"}},[t._v("#")]),t._v(" 创建实例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("以 APP 作为根组件，并挂载在 #app 这个 DOM 上。自此，组件的生命周期正式开始。")]),t._v(" "),s("h3",{attrs:{id:"init-events-lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-events-lifecycle"}},[t._v("#")]),t._v(" init Events & lifeCycle")]),t._v(" "),s("p",[t._v("初始化组件的 Events ，Events 包括（on，emit，off）以及生命周期")]),t._v(" "),s("h3",{attrs:{id:"执行-beforecreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-beforecreate"}},[t._v("#")]),t._v(" 执行 beforeCreate")]),t._v(" "),s("h3",{attrs:{id:"init-injections-reactivity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-injections-reactivity"}},[t._v("#")]),t._v(" init Injections & reactivity")]),t._v(" "),s("p",[t._v("初始化父组件对当前组件的 props，此时，已经能访问到父组件的props了。")]),t._v(" "),s("p",[t._v("初始化计算属性、methods 方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个组件，此时它正作为子组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时能拿到值")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      immerdiate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"执行-created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-created"}},[t._v("#")]),t._v(" 执行 created")]),t._v(" "),s("h3",{attrs:{id:"compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[t._v("#")]),t._v(" compile")]),t._v(" "),s("p",[t._v("执行编译过程，会检测有没有 "),s("b",[t._v("template")]),t._v(" 字段。如果有，则编译 template 的内容，否则编译 el 中的 innerHTML")]),t._v(" "),s("h3",{attrs:{id:"执行beforemount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行beforemount"}},[t._v("#")]),t._v(" 执行beforeMount")]),t._v(" "),s("p",[t._v("如果组件中存在着子组件，那么接着执行子组件的生命周期，直至所有子组件都 mounted 完为止")]),t._v(" "),s("h3",{attrs:{id:"执行mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行mounted"}},[t._v("#")]),t._v(" 执行mounted")]),t._v(" "),s("p",[t._v("此时才能访问到 DOM 节点")]),t._v(" "),s("p",[t._v("此时，如果 data 发生改变，就会先执行  "),s("strong",[t._v("beforeUpdate")]),t._v(" 生命周期，执行时视图并未发生改变。继而重新渲染虚拟 DOM，执行 "),s("strong",[t._v("updated")]),t._v(" ，直至此时，视图层才会更新")]),t._v(" "),s("h3",{attrs:{id:"执行beforeunmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行beforeunmount"}},[t._v("#")]),t._v(" 执行beforeUnmount")]),t._v(" "),s("p",[t._v("当 beforeUnmount 钩子函数执行完毕之后，就开始移除事件监听，子组件等等")]),t._v(" "),s("h3",{attrs:{id:"执行-unmounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-unmounted"}},[t._v("#")]),t._v(" 执行 unmounted")]),t._v(" "),s("p",[t._v("自此，组件的生命周期已经结束。")])])}),[],!1,null,null,null);a.default=n.exports}}]);