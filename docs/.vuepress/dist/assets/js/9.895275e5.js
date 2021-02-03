(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("JavaScript 有6种简单的数据类型：Null、Undefined、Array、String、Boolean、Symbol。还有一种复杂数据类型 Object。")]),t._v(" "),a("h3",{attrs:{id:"typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" typeof")]),t._v(" "),a("p",[t._v("为了检测数据类型，可以使用 "),a("code",[t._v("typeof")]),t._v("，typeof 有以下几个返回值")]),t._v(" "),a("ul",[a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("boolean")]),t._v(" "),a("li",[t._v("Object 表示值为对象或者 Null")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("string")]),t._v(" "),a("li",[t._v("symbol")]),t._v(" "),a("li",[t._v("Function")])]),t._v(" "),a("p",[t._v("当试图读取一个未定义的变量如 age 时，会报"),a("code",[t._v("age is not defined")]),t._v("的错误，但此时，如果用"),a("code",[t._v("typeof")]),t._v(" 去检测 age 的数据类型时，会发现，"),a("code",[t._v("typof age")]),t._v("的值为"),a("code",[t._v("undefined")])]),t._v(" "),a("h3",{attrs:{id:"undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[t._v("#")]),t._v(" Undefined")]),t._v(" "),a("p",[t._v("Undefined 类型只有一个值，那就是 undefined，当定义一个变量但没有赋初始值时，相当于给变量赋了undefined的值。所以永远不必将undefined 的值手动赋值给某个变量")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a ==== undefined \ttrue")]),t._v("\n")])])]),a("h3",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" Null")]),t._v(" "),a("p",[t._v("Null 类型同样也只有一个值，那就是 null。代表一个空对象指针，当想给一个变量赋于对象的值，而当下又没有值可以赋予，则可直接赋值为 null。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\ttrue")]),t._v("\n")])])]),a("p",[t._v("由于历史原因，导致 "),a("code",[t._v("typeof null === 'object'")]),t._v("，实际上 null 有专属的数据类型 Null")]),t._v(" "),a("h3",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),a("p",[t._v("Boolean类型有两个字面值，ture 和 false。虽然 Boolean 类型只有两个值，但是其他所有的数据类型都可以通过"),a("code",[t._v("Boolean()")]),t._v("函数来转换成为 Boolean 值，转换规则如下表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("转换为true")]),t._v(" "),a("th",[t._v("转换为false")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("任意非空字符串")]),t._v(" "),a("td",[t._v("空字符串")])]),t._v(" "),a("tr",[a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("非零数值，包括无穷值")]),t._v(" "),a("td",[t._v("0、NaN")])]),t._v(" "),a("tr",[a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("任意对象")]),t._v(" "),a("td",[t._v("Null")])]),t._v(" "),a("tr",[a("td",[t._v("Undefined")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("undefined")])])])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("Boolean()")]),t._v("函数转换成为 true 的值，也叫做 "),a("b",[t._v("truthy")]),t._v("，而与之对立的则被统称为 "),a("b",[t._v("falsy")]),t._v("。")]),t._v(" "),a("p",[t._v("在 if 等控制语句中，会自动执行其他数据类型到 Boolean 类型的转换，规则同 "),a("code",[t._v("Boolean()")]),t._v(" 函数的转换规则一致。")]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),a("p",[t._v("JS 可以表示的数值存在一个范围，最大值存在 "),a("code",[t._v("Number.MAX_VALUE")]),t._v(" 中，最小值存在于 "),a("code",[t._v("Number.MIN_VALUE")]),t._v("。 超出最大值的数值用"),a("b",[t._v(" Infinity ")]),t._v("表示，小于最小值的数组则用 "),a("b",[t._v("-Infinity")]),t._v(" 表示。")]),t._v(" "),a("p",[t._v("可以使用 isFinite 函数来判断是否是介于最大值和最小值之间")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFinite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return true")]),t._v("\n")])])]),a("h4",{attrs:{id:"nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" NaN")]),t._v(" "),a("p",[t._v("在 Number 中有一个特殊的值 NaN(not a number)，用于表示本来要返回数值的操作失败了。")]),t._v(" "),a("p",[t._v("NaN 不等于包括 NaN 在内的任何值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tfalse")]),t._v("\n")])])]),a("p",[t._v("JS 提供了一个方法来判断数值是否是 NaN，"),a("code",[t._v("isNaN()")]),t._v("  函数，当函数的参数为 NaN 或无法转换为数字时，返回 true")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\ttrue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tfalse")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'22'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tfalse，可以转换成数字 22")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\ttrue，无法转换为数字")]),t._v("\n")])])]),a("h4",{attrs:{id:"数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 数值转换")]),t._v(" "),a("p",[t._v("将其他类型转换为数字类型有三种方法：Number()、parseInt() 和 parseFloat()")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Number()：Number()方法可用于所有其他数据类型，转换规则如下")]),t._v(" "),a("ul",[a("li",[t._v("Boolean 类型，true 转换为 1，false 转换为 0")]),t._v(" "),a("li",[t._v("数值，直接返回")]),t._v(" "),a("li",[t._v("null，返回 0")]),t._v(" "),a("li",[t._v("undefined，返回 0")]),t._v(" "),a("li",[t._v("字符串，如果字符串完全由数字组成，那么返回对应的数字，否则返回 NaN。（还有16进制，用的太少不展开了）")]),t._v(" "),a("li",[t._v("对象，"),a("b",[t._v("以后再写吧")])])])]),t._v(" "),a("li",[a("p",[t._v("parseInt()：parseInt()方法主要用来转换字符串，从前往后转换，直到遇到字符串为止，返回对应的数字。如果第一个字符串是字符串，则直接返回 NaN")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0234x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 234")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-124'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 124")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),a("p",[t._v("实际上，parseInt() 方法还支持第二个参数，用于指定需要转换的字符串原本是什么进制，默认是 十进制，可以不传")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 2进制下的11转换成十进制，为3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AF'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 175")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("parseFloat()：parseFloat()方法也用来转换字符串，原理同 "),a("code",[t._v("parseInt()")]),t._v(" 类似，不同之处有，paseFloat 只能转换十进制的字符串，且能转换浮点数，即小数。如果字符串有多个小数点，则只有第一个小数点是有效的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.12'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12.12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a12.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("p",[t._v("JS 中的字符串是不可变的，即字符串一旦创建，值就不能改变了。如果要修改某个变量中的字符串值，那么必须先销毁原始的字符串，再把新的字符串赋值给变量。")]),t._v(" "),a("h5",{attrs:{id:"转换为字符串值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为字符串值"}},[t._v("#")]),t._v(" 转换为字符串值")]),t._v(" "),a("ul",[a("li",[t._v("toString()\t适用于 Boolean、String、Number 和 对象，Null 和 Undefined 没有 toString 方法")]),t._v(" "),a("li",[t._v("String()       适用于所有，规则同 toString() 一致。null 和 undefined 传入时会返回 'null' 和 'undefined'")])]),t._v(" "),a("h5",{attrs:{id:"模板字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[t._v("#")]),t._v(" 模板字符串")]),t._v(" "),a("p",[t._v("在 ES6 之后，新增了模板字符串，如"),a("code",[a("code",[t._v("hello")])]),t._v("。在模板字符串内，可以用 ${} 读取外部的变量。模板字符串配合函数能作为一种标签函数的用法（ tag function）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t接收到的参数依次是，原始的字符串数组，以及每个表达式求值的结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tagFn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t['', '+', '=', '']")]),t._v("\n \tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t[1,1,2]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntagFn"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" + ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),a("p",[t._v("Symbol 是 ES6 新增的数据类型，Symbol 实例是唯一的，不可变的。Symbol 的用途是对象属性使用的是唯一标识符，不会发生属性冲突的危险。")]),t._v(" "),a("p",[t._v("创建 symbol 需要使用 "),a("code",[t._v(" Symbol() ")]),t._v(" 函数，函数内可以对这个 symbol 的描述，但是拥有相同描述的两个 symbol 也并不相等")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h4",{attrs:{id:"注册全局-symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册全局-symbol"}},[t._v("#")]),t._v(" 注册全局 Symbol")]),t._v(" "),a("p",[t._v("如果需要注册复用 Symbol 实例，可以在创建时使用 "),a("code",[t._v("Symbol.for()")]),t._v(" 函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t会先检查全局是否存在以这个字符串创建的 symbol，如果没有，则创建 symbol 实例")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t先检查全局，发现有以 a 字符串创建的 symbol，返回该 symbol 实例")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h4",{attrs:{id:"使用-symbol-作为对象属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-symbol-作为对象属性"}},[t._v("#")]),t._v(" 使用 symbol 作为对象属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is string'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"还有一些高深的东西以后再学一遍再写吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#还有一些高深的东西以后再学一遍再写吧"}},[t._v("#")]),t._v(" 还有一些高深的东西以后再学一遍再写吧")]),t._v(" "),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("h4",{attrs:{id:"另分章节展开"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另分章节展开"}},[t._v("#")]),t._v(" 另分章节展开")])])}),[],!1,null,null,null);s.default=e.exports}}]);