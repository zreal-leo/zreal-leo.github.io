# ProxyReflect

> Proxy 和 Reflect 为开发者提供了拦截并向基本操作嵌入额外行为的能力。即可以为目标对象定义一个关联的代理对象，而这个代理对象是可以作为抽象的目标对象来使用。在对目标对象的操作影响目标对象之前，可以在代理对象中对这些操作加以控制。

## 创建 proxy

创建 proxy 可以通过 new Proxy 构造函数，构造函数可以接收两个参数，即 目标对象 和 处理程序对象，下面是一个空代理的例子，

```js
let target = {
  id: "target",
}

let handler = {}
// target 目标对象
// handler 处理程序对象
const proxy = new Proxy(target, handler)
```

此时，因为只是一个空代理，所以 target 和 proxy 实例的属性值始终会保持一致，

```js
target.id === proxy.id // true

// 给目标对象添加属性时，proxy 也能访问到这个值
target.type = "all"
console.log(proxy.type) // all

// 同样，proxy 上的操作也会转移到目标对象上来
proxy.skill = "English"
console.log(target.skill) // English

target === proxy // false
```

## 处理程序对象

创建 proxy 的时候可以在处理对象中传入捕获器，每个处理对象可以包含零个或多个捕获器，**每次对代理对象调用基本操作时，代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改相应的行为。**
