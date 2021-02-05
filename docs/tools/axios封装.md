# axios 在项目中的正确打开方式

在前端项目中，我们一般使用 **axios** 来与后端进行数据交互，axios 是一个基于 promise 的 http 库。如果你还没使用过 axios，可以先看一下[文档](https://www.npmjs.com/package/axios)。

## 项目结构

我们先来设计一下项目结构，为了方便管理和复用，我们将所有请求函数都放在一个文件夹下，并按功能划分成不同的 js 文件。

再封装一下 axios，使它更适用于我们的项目。

```shell
├── src
│    ├── api
│    │   ├──  user.js  分功能划分请求函数文件
│    │   ├──  search.js
│    │   └──  work.js
│    │
│    └── units
         └── http.js 封装 axios

```

如果你有需要引入多个功能文件的需求，那也可以在 api 文件夹下，新增一个 index.js，用来转发请求函数。举个例子，我们需要从 user 拿 getUser，从 work 拿 getWork 方法

```js
import { getUser } from "@/api/user"
import { getWork } from "@/api/work"
```

我们可以新增一个 index.js

```js
// index.js
export * from "./user.js"
export * from "./work.js"
```

这样，在使用时，就可以直接

```js
import { getUser, getWork } from "@/api"
```

## 请求方法

请求方法我们写在 api 文件夹下对应功能的文件中，比如我们需要一个搜索的方法，那我们在 search.js 中

```js
import http from "../units/http"

export function search({ wd }) {
  return http.get("http://baidu.com/s", {
    params: {
      wd,
    },
  })
}
```

## 封装 axios

接下来，就开始封装 axios 了，让所有的请求都能共享这部分配置。直接先看 http.js 的代码吧

```js
import axios from "axios"
import qs from "qs"
const http = axios.create({
  timeout: 5000, // 超时时间
  paramsSerializer: function(params) {
    return qs.stringify(params, { arrayFormat: "repeat" })
  },
})

export default http
```

这样的话，每个 http 请求都会在 5s 之后退出，且发送请求之前都会使用 qs 对参数做序列化。

### baseURL

如果你的项目中，所有的请求都只在一个接口域名下，只有测试和生产环境的区别的话，那么可以配置一下 baseURL，这种情况可以通过 node 的环境变量来匹配 BaseURL

```js
// http.js

http.defaults.baseURL = process.env.NODE_ENV === "development" ? "测试URL" : "生产URL"
```

实际请求的 URL 就为 baseURL + request url，比如这边配置的 baseURL 为 <code> <http://baidu.com/s> </code>，那么 search 方法就可以将 url 写成 **/s**

```js
export function search({ wd }) {
  return http.get("/s", {
    params: {
      wd,
    },
  })
}
```

如果项目中需要去多个接口下请求，那不需要配置 baseURL，可以额外提供一个文件将 URL 暴露出来，比如

```js
let USER_URL = "aaa"
let WALLET_URL = "bbb"

if (process.env.NODE_ENV === "development") {
  USER_URL = "testa"
  WALLET_URL = "testb"
}

export { USER_URL, WALLET_URL }
```

在请求的模块中，比如 user.js 中

```js
import http from "../units/http"
import { USER_URL } from "xxx"

export function userInfo({ userId }) {
  return http.get("${USER_URL}/s", {
    params: {
      userId,
    },
  })
}
```

### 拦截器

我们可以在请求发起，响应的时候进行额外的处理，在请求发起之前，我们如果需要做登录权限的控制，那就需要在请求头添加 token

```js
http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token")
    config.headers["Authorization"] = token
  },
  (error) => {
    return Promise.reject(error)
  }
)
```

在服务器对请求进行了响应之后，我们也可以用拦截器对结果进行处理，同时对一些错误码进行处理

```js
http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    switch (error.response.status) {
      case 401:
        // 未登录的逻辑，如跳转到登录页
        break
      // 其他通用错误码的处理逻辑
    }
    return Promise.reject(error)
  }
)
```

配合组件库，我们还可以在请求发起前，设置 loading，在请求响应后，结束 loading，贴上完整的 http.js

```js
import axios from "axios"
import qs from "qs"
import { Loading, Message } from "element-ui"

const http = axios.create({
  timeout: 5000,
})
http.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" })
}

let loading
http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token")
    config.headers["Authorization"] = token
    if (!config?.noLoading) {
      if (loading) {
        loading?.close()
      }
      loading = Loading.service({
        lock: true,
        target: config?.el || document.body,
        text: "数据正在加载中",
        spinner: "el-icon-loading",
        background: "transparent",
        customClass: "loading",
      })
    }
    return config
  },
  (error) => {
    loading?.close()
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    loading?.close()
    return response.data
  },
  (error) => {
    loading?.close()
    switch (error?.response?.status) {
      case 401:
        Message.error("请先登录")
        localStorage.removeItem("token")
        location.href = "/"
        break
      case 412:
        Message.error("密码输入错误")
        break
      case 403:
        Message.error("权限不足,请调整后重试")
    }
    return Promise.reject(error)
  }
)

export default http
```

## 使用

让我们重新看下请求函数

```js
// user.js
import { USER_URL } from "@/api"
import http from "../units/http"

export function getUserList({ el }) {
  return http.get(`${USER_URL}/userlist`, {
    el, // 额外配置的 el，标示loading挂载的节点
  })
}

export function getUserInfo({ userId }) {
  return http.get(`${USER_URL}/userinfo`, {
    params: {
      userId,
    },
    noLoading: true, // 额外拓展的 config，标示不需要 loading
  })
}
```

在组件中调用时，就可以

```js
getUserlist({ el: "#list" }) // loading 会挂载在 #list下
  .then((res) => {})
  .catch((e) => {})

getUserInfo({ userId }) // 没有 loading
  .then((res) => {})
  .catch((e) => {})
```

### config 优先级

新建 axios 实例的 config 优先级最低，如

```js
const http = axios.craete({})

// 此时 timeout 默认为 0

http.defaults.timeout = 2000
// timeout 被改写成了 2s
```

在实际发起请求时，又可以重新将这个配置覆盖

```js
export function getUserInfo({ userId }) {
  return http.get(`${USER_URL}/userinfo`, {
    params: {
      userId,
    },
    timeout: 5000,
    noLoading: true,
  })
}
```

那么，此时 getUserInfo 这个函数就需要 5s，才会超时
