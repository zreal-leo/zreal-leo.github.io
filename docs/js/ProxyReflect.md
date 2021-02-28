# Proxy 和 Reflect

> Proxy 和 Reflect 为开发者提供了拦截并向基本操作嵌入额外行为的能力。即可以为目标对象定义一个关联的代理对象，而这个代理对象是可以作为抽象的目标对象来使用。在对目标对象的操作影响目标对象之前，可以在代理对象中对这些操作加以控制。

## 创建 proxy

创建 proxy 可以通过 new Proxy 构造函数，构造函数可以接收两个参数，即 目标对象 和 处理程序对象（handler），下面是一个空代理的例子，

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

proxy 拥有的处理器列表如下

|       handler 方法       |                                               何时触发                                                |
| :----------------------: | :---------------------------------------------------------------------------------------------------: |
|           get            |                                               读取属性                                                |
|           set            |                                              设置属性值                                               |
|           has            |                                                  in                                                   |
|      deleteProperty      |                                            delete operator                                            |
|          apply           |                                             function call                                             |
|        construct         |                                             new operator                                              |
|      getPrototypeOf      |                                        `Object.getPrototypeOf`                                        |
|      setPrototypeOf      |                                        `Object.setPrototypeOf`                                        |
|       isExtensible       |                                         `Object.isExtensible`                                         |
|    preventExtensions     |                                      `Object.preventExtensions`                                       |
|      defineProperty      |                          `Object.defineProperty`, `Object.defineProperties`                           |
| getOwnPropertyDescriptor |              `Object.getOwnPropertyDescriptor`, `for..in`, `Object.keys/values/entries`               |
|         ownKeys          | `Object.getOwnPropertyNames`, `Object.getOwnPropertySymbols`, `for..in`, `Object.keys/values/entries` |

我们先来看看常用的几个 handler 捕获器，就从`get`,`set`开始吧

```js
let obj = {
  name: "lo",
}

let proxy = new Proxy(obj, {
  get(target, property) {
    return target[property]
  },
  set(target, property, value) {
    target[property] = value
    return true
  },
})

proxy[name] //执行 get
proxy.gender = "male" // 执行 set
```

在这之后，对 **proxy** 的操作，都要先执行对应的捕获器，当目标对象被代理后，就不再应该操作目标对象了，所以可以直接用代理对象来替代目标对象

```js
let obj = {}

obj = new Proxy(obj, {})
```

## Reflect

Reflect 是一个内建对象，可简化 Proxy 的创建

每个捕获器方法，在 Reflect 内部都有对应的方法，且名称与参数都有捕获器相同，上面的例子可以用 Reflect 改写为

```js
let obj = {
  name: "lo",
}

let proxy = new Proxy(obj, {
  get(target, property) {
    // return target[property]
    return Reflect.get(target, property)
  },
  set(target, property, value) {
    // target[property] = value
    Reflect.set(target, property, value)
    return true
  },
})
```

## Proxy 的局限

许多内建对象，都使用了内建插槽，比如 Map、Date 等
// TODO:

## 可撤销 Proxy

`Proxy.revocable`方法可以返回 Proxy 对象和撤销 Proxy 的方法 `revoke`

```js
let user = {
  name: "tom",
}
let { proxy, revoke } = Proxy.revocable(user, {})

revoke()

proxy.name // Error
```
