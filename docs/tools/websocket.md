# WebSocket 入门

## 为什么需要 WebSocket

HTTP 协议只能由客户端发起通信，然后由服务器做出响应。 如果我们需要做一个实时聊天，或者是需要实时展示数据的功能的话，只能通过轮询，即定时器查询，这个机制的实时性不够，同时也会给服务器带来极大的压力。

为了解决这些问题，HTML5 中新增了 WebSocket 协议，能够在浏览器和服务器之间建立一个不受限的双向通信通道，一旦建立了 WebSocket 连接，任何一方都可以主动发起通信。

## 客户端 API

API 详见[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)，以下仅介绍常用 API

### 建立连接

```js
const ws = new Websocket("ws://localhost:3000")
```

### WebSocket.readyState

webSocket.readyState 有标示当前 WebSocket 实例的状态，有以下几种状态

- CONNECTING 值为 0，表示正在连接
- OPEN 值为 1，表示连接成功
- CLOSING 值为 2，表示连接正在关闭
- CLOSED 值为 3，表示连接已经关闭

### 方法

- WebSocket.onopen 连接成功的回调
- WebSocket.onerror 连接失败的回调
- WebSocket.onmessage 收到消息的回调
- WebSocket.onclose 连接关闭的回调
- WebSocket.send() 向服务器发送消息
- WebSocket.close() 关闭连接

### 例子

```js
const ws = new WebSocket("ws:localhost:8080")

ws.onopen = () => {
  // 建立连接成功
  console.log("connect success")
}

ws.onmessage = msg => {
  // 收到消息
  console.log(msg)
}

ws.send("something") // 向服务端发送数据

ws.close() // 关闭连接
```

## 服务端 API

我们选用 [ws](https://www.npmjs.com/package/ws) 来提供服务端的 WebSocket 支持，一个简单的 WebSocket 服务如下所示

```js
const WebSocket = require("ws")
const wss = new WebSocket.Server({ port: 8080 })

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: ", message)
  })

  ws.on("close", function close() {
    console.log("disconnected")
  })

  ws.send("something")
})
```

此时在服务端我们启动了端口号为 8080 的 WebSocket 服务，在客户端通过 `ws://localhost:8080` 即可建立连接
