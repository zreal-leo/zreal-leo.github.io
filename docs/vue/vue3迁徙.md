## Teleport



## 异步组件



## 过滤器

在 vue3 中，过滤器已经被移出，官方推荐使用 计算属性或者方法来替代过滤器



## 事件 API

在 vue2 中，我们会使用一个新的 Vue 实例来作为组件通信的方式，比如

```js
export const eventBus = new Vue()
```

在组件中，就可以引用 eventBus 

```vue
import { eventBus } from 'xx/xx'

mounted(){
	// 监听事件
	eventBus.$on('event', ()=> {})
}

beforeDestory(){
	// 移出监听
	eventBus.$off('event')
}
```

在 vue3 中，vue 实例中已经移除了  $off，$on，$once 方法，只保留了一个 $emit 方法用于子组件触发父组件的事件。



## 片段

在 vue2 中，每个组件都被要求只允许一个根节点，而在 vue3 中，则没有了这一限制，允许同时存在多个根节点

```vue
<template>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</template>
```





