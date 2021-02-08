# JS 数据类型

JavaScript 有 6 种简单的数据类型：Null、Undefined、Array、String、Boolean、Symbol。还有一种复杂数据类型 Object。

## typeof

为了检测数据类型，可以使用 <code>typeof</code>，typeof 有以下几个返回值

- undefined
- boolean
- Object 表示值为对象或者 Null
- Number
- string
- symbol
- Function

当试图读取一个未定义的变量如 age 时，会报<code>age is not defined</code>的错误，但此时，如果用<code>typeof</code> 去检测 age 的数据类型时，会发现，<code>typeof age</code>的值为<code>undefined</code>

## Undefined

Undefined 类型只有一个值，那就是 undefined，当定义一个变量但没有赋初始值时，相当于给变量赋了 undefined 的值。所以永远不必将 undefined 的值手动赋值给某个变量

```js
let a
// a ==== undefined  true
```

### Null

Null 类型同样也只有一个值，那就是 null。代表一个空对象指针，当想给一个变量赋于对象的值，而当下又没有值可以赋予，则可直接赋值为 null。

```js
null == undefined // true
```

由于历史原因，导致 <code>typeof null === 'object'</code>，实际上 null 有专属的数据类型 Null

## Boolean

Boolean 类型有两个字面值，true 和 false。虽然 Boolean 类型只有两个值，但是其他所有的数据类型都可以通过<code>Boolean()</code>函数来转换成为 Boolean 值，转换规则如下表

| 数据类型  | 转换为 true          | 转换为 false |
| --------- | -------------------- | ------------ |
| Boolean   | true                 | false        |
| String    | 任意非空字符串       | 空字符串     |
| Number    | 非零数值，包括无穷值 | 0、NaN       |
| Object    | 任意对象             | Null         |
| Undefined | 无                   | undefined    |

通过<code>Boolean()</code>函数转换成为 true 的值，也叫做 <b>truthy</b>，而与之对立的则被统称为 <b>falsy</b>。

在 if 等控制语句中，会自动执行其他数据类型到 Boolean 类型的转换，规则同 <code>Boolean()</code> 函数的转换规则一致。

## Number

JS 可以表示的数值存在一个范围，最大值存在 <code>Number.MAX_VALUE</code> 中，最小值存在于 <code>Number.MIN_VALUE</code>。 超出最大值的数值用<b> Infinity </b>表示，小于最小值的数组则用 <b>-Infinity</b> 表示。

可以使用 isFinite 函数来判断是否是介于最大值和最小值之间

```js
isFinite(2) // return true
```

### NaN

在 Number 中有一个特殊的值 NaN(not a number)，用于表示本来要返回数值的操作失败了。

NaN 不等于包括 NaN 在内的任何值

```js
NaN == NaN // false
```

JS 提供了一个方法来判断数值是否是 NaN，<code>isNaN()</code> 函数，当函数的参数为 NaN 或无法转换为数字时，返回 true

```js
isNaN(NaN) // true
isNaN(2) // false
isNaN("22") // false，可以转换成数字 22
isNaN("red") // true，无法转换为数字
```

### 数值转换

将其他类型转换为数字类型有三种方法：Number()、parseInt() 和 parseFloat()

- Number()：Number()方法可用于所有其他数据类型，转换规则如下

  - Boolean 类型，true 转换为 1，false 转换为 0
  - 数值，直接返回
  - null，返回 0
  - undefined，返回 0
  - 字符串，如果字符串完全由数字组成，那么返回对应的数字，否则返回 NaN。（还有 16 进制，用的太少不展开了）
  - 对象，<b>以后再写吧</b>

- parseInt()：parseInt()方法主要用来转换字符串，从前往后转换，直到遇到字符串为止，返回对应的数字。如果第一个字符串是字符串，则直接返回 NaN

  ```js
  parseInt("0234x") // 234
  parseInt("-124") // 124
  parseInt("x123") // NaN
  ```

  实际上，parseInt() 方法还支持第二个参数，用于指定需要转换的字符串原本是什么进制，默认是 十进制，可以不传

  ```js
  parseInt("11", 2) // 3 2进制下的11转换成十进制，为3
  parseInt("AF", 16) // 175
  ```

- parseFloat()：parseFloat()方法也用来转换字符串，原理同 <code>parseInt()</code> 类似，不同之处有，parseFloat 只能转换十进制的字符串，且能转换浮点数，即小数。如果字符串有多个小数点，则只有第一个小数点是有效的

  ```js
  parseFloat("12.12") // 12.12
  parseFloat("1.2.3") // 1.2
  parseFloat("a12.1") // NaN
  ```

## String

JS 中的字符串是不可变的，即字符串一旦创建，值就不能改变了。如果要修改某个变量中的字符串值，那么必须先销毁原始的字符串，再把新的字符串赋值给变量。

### 转换为字符串值

- toString() 适用于 Boolean、String、Number 和 对象，Null 和 Undefined 没有 toString 方法
- String() 适用于所有，规则同 toString() 一致。null 和 undefined 传入时会返回 'null' 和 'undefined'

### 模板字符串

在 ES6 之后，新增了模板字符串，如<code>`hello`</code>。在模板字符串内，可以用 \${} 读取外部的变量。模板字符串配合函数能作为一种标签函数的用法（ tag function）

```js
let a = 1,
  b = 2

// 接收到的参数依次是，原始的字符串数组，以及每个表达式求值的结果
function tagFn(str, ...arr) {
  console.log(str) // ['', '+', '=', '']
  console.log(arr) // [1,1,2]
}

tagFn`${a} + ${b} = ${a + b}`
```

## Symbol

Symbol 是 ES6 新增的数据类型，Symbol 实例是唯一的，不可变的。Symbol 的用途是对象属性使用的是唯一标识符，不会发生属性冲突的危险。

创建 symbol 需要使用 <code> Symbol() </code> 函数，函数内可以对这个 symbol 的描述，但是拥有相同描述的两个 symbol 也并不相等

```js
let a = Symbol()
let b = Symbol()

let c = Symbol("c")
let d = Symbol("d")

console.log(a == b) // false
console.log(c == d) // false
```

### 注册全局 Symbol

如果需要注册复用 Symbol 实例，可以在创建时使用 <code>Symbol.for()</code> 函数

```js
let a = Symbol.for("a") // 会先检查全局是否存在以这个字符串创建的 symbol，如果没有，则创建 symbol 实例

let b = Symbol.for("a") // 先检查全局，发现有以 a 字符串创建的 symbol，返回该 symbol 实例

console.log(a === b) // true
```

### 使用 symbol 作为对象属性

```js
let symbol = Symbol("symbol")

let obj = {
  [symbol]: "this is string",
}
```

#### 还有一些高深的东西以后再学一遍再写吧

## Object
