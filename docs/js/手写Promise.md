# 手写 Promise

本篇假设你已经了解了 Promise 如何使用，如果你对 Promise 还不是很了解，建议先阅读一下 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)或者是 [ES6 入门教程](https://es6.ruanyifeng.com/#docs/promise)

## Promise 规范

要想实现一个 Promise，那首先得清楚 Promise 的定义才行。让我们来看一下 [Promise/A+规范](https://promisesaplus.com/)，如果你不想看也没关系，可以直接看下面俺的总结（翻译 🤫）。

### 术语

- Promise 是一个符合 Promise 规范且定义了 then 方法的对象或函数
- thenable 是定义了 then 方法的对象或函数
- value 是任意合法的值，包括 undefined、thenable 或者是 promise
- exception 是用 throw 关键字抛出去的值，也称作异常
- reason 是标示 Promise 被 rejected 的理由

### Promise 状态

一个 Promise 必须为三种状态的其中之一：pending、fulfilled、rejected

- pending 状态的 Promise 可以转换为 fulfilled 或是 rejected 状态

- fulfilled 状态的 Promise 无法再更改状态，且必须包含一个 value

- rejected 状态的 Promise 无法再更改状态，且必须包含一个 reason

### then 方法

Promise 必须提供一个 then 方法来访问当前或者是最终的 value 或者是 reason

then 方法接收两个可选的函数作为参数，如果任一参数不为函数，那么此参数将被忽略

```js
promise.then(onFulfilled, onRejected)
```

- onFulfilled 只能且必须在 Promise 更改为 fulfilled 状态时被调用，value 值将作为第一个参数，且只能调用一次
- onRejected 只能且必须在 Promise 更改为 rejected 状态时被调用，reason 将作为第一个参数，且只能调用一次
- onFulfilled 和 onRejected 只能在异步队列中被调用

then 方法允许在同个 Promise 中被多次调用，如下面代码

```js
let p = new Promise((resove, rejected) => {
  resolve()
})

p.then((res) => {})
p.then((res) => {})
p.then((res) => {})
```

then 方法必须返回一个 Promise

```js
let promise2 = promise1.then(onFulfilled, onRejected)
```

- 无论 onFulfilled 或者是 onRejected return 出来一个值 x，都得先执行一遍 Promise Resolution Procedure <code>[[Resolve]](promise2, x)</code>
- 无论 onFulfilled 或者是 onRejected 抛出一个异常 e，Promise2 都将以用这个 e 作为 reason 被 rejected
- 如果 onFulfilled 不是一个函数，但是 promise1 更改为了 fulfilled 状态，那么 promise2 也将以同样的 value 更改为 fulfilled 状态
- 如果 onRejected 不是一个函数，但是 promise1 更改为了 rejected 状态，那么 promise2 也将以同样的 reason 更改为 rejected 状态
- 后面这两条翻译成大白话就是，如果 Promise 更改了状态，没有被相应的处理的话，就会将这个状态以及 value 或者是 reason 传递下去

### Promise Resolution Procedure (不知咋翻)

算了，直接先写吧，看不下去了，有兴趣可以自行查阅[文档](https://promisesaplus.com/#the-promise-resolution-procedure)

## 上手

让我们一点点来实现自己的 Promise，就叫它 MyPromise 吧。根据规范 MyPromise 有 state、value、reason、以及可能抛出去的异常 exception，exception 就用 try catch 来捕获，上代码

```js
class MyPromise {
  constructor(executor) {
    this.state = "pending"
    this.value = undefined
    this.reason = undefined

    let resolve = (value) => {
      this.state = "fulfilled"
      this.value = value
    }

    let reject = (e) => {
      this.state = "rejected"
      this.reason = e
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled" && onFulfilled instanceof Function) {
      onFulfilled(this.value)
    } else if (this.state === "rejected" && onRejected instanceof Function) {
      onRejected(this.reason)
    }
  }
}
```

MyPromise 的构造函数接收一个函数，我们称为 executor。

executor 提供了两个方法 resolve 和 reject，分别可以是 Promise 更改为 fulfilled 和 rejected 状态，执行过程中出现任何错误也可以 reject。

在 23 到 29 行，我们在原型上挂载了 then 方法，then 方法接收两个函数作为参数，分别在 fulfilled 和 rejected 的时候被调用，那让我们试试这个 MyPromise 效果咋样

```js
let p = new MyPromise((resolve, reject) => {
  resolve(1)
})

p.then(
  (res) => {
    console.log(res)
  },
  (e) => {
    console.error(e)
  }
)
```

第 7 行确实能将 resolve 的 value 打印出来呢，🐂🍺，当然在 executor 中 reject 话，肯定也是能在第 10 行打印的啦。

当然这只是实现了部分规范而已，还得继续完善

让我们看看规范中还说了啥，onFulfilled 和 onRejected 必须异步调用，那我们用 setTimeout 给裹起来

```js
then(onFulfilled, onRejected){
  setTimeout(()=> {
     if (this.state === "fulfilled" && onFulfilled instanceof Function) {
      onFulfilled(this.value)
    } else if (this.state === "rejected" && onRejected instanceof Function) {
      onRejected(this.reason)
    }
  })
}
```

更改完之后就很对劲，符合事件循环机制了，注意还是**有点不对劲**，稍后再提

```js
new MyPromise((rosolve, reject) => {
  resolve(1)
}).then((res) => {
  console.log(res)
})
console.log("end")
// 打印顺序，end => 1
```

### 解决异步 resolve

上面的例子中，在 executor 中执行 resolve 的时候，我们是直接 resolve。然而在实际使用场景中，我们可能在异步中 resolve

```js
new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
}).then((res) => {
  console.log(res)
})
```

实际上并没有打印出来，因为执行 then 的时候 MyPromise 实例的 state 还是 pending。等 1s 后，MyPromise 实例 fulfilled 的时候，then 方法也没有再执行

那，我们**把 onFulfilled 和 onRejected 都存起来**，等 resolve 或者是 reject 的时候再依次执行，说干就干，下面只展示了更改的代码

```js
class MyPromise {
  constructor(executor) {
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      this.state = "fulfilled"
      this.value = value
      this.onFulfilledCallbacks.forEach((fn) => {
        fn(this.value)
      })
    }

    const reject = (e) => {
      this.state = "rejected"
      this.reason = e
      this.onFulfilledCallbacks.forEach((fn) => {
        fn(this.reason)
      })
    }
  }

  then(onFulfilled, onRejected) {
    switch (this.state) {
      case "pending":
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
        break
    }
  }
}
```

靠谱，收工，再看下一条需求

### then 方法 return Promise

到了我认为最难的部分了
