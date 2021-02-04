# vue3 非兼容更改

## createApp

```js
import { createApp } from "vue"

const app = createApp({})
```

调用 createApp 会生成一个应用实例，应用实例会暴露出全局 API

### config.globalProperties

在 vue2 中，我们会将 一些属性挂载到原型链上，例如

```js
Vue.prototype.$http = () => {}
```

在 vue3 中，则需要改成

```js
app.config.globalProperties.$http = () => {}
```

### nextTick

### v-model

在 vue3 中，将组件 props 双向绑定的 sync 移除了，同时推荐用 v-model 来替代，其实用法也是跟 sync 绑定相差无几啦

```vue
// parentComponent
<ChildComponent v-model:msg="msg"> </ChildComponent>
export default { data(){ return { msg: 'how are you' } } }
```

```js
// ChildComponent
export default {
  props: { msg: String },
  methods: {
    changeProp() {
      this.$emit("update:msg", "fine")
    },
  },
}
```

在父组件绑定值的时候，允许在 v-model 后面接上传递 prop 的属性名以及属性值。在子组件中，就直接用 props 接收传递进来的值，再用 **this.\$emit('update:propName', newVal)** 将新的值传递到父组件就行。

但是，在父组件绑定的时候，也可以不传递属性名，即直接

```vue
<ChildComponent v-model="msg"></ChildComponent>
```

那么此时，就默认 prop 的属性名为 modelValue，就无法传递多个 prop 了。

在子组件中，则需要

```vue
export default { props: { modelValue: String }, methods: { changeProp(){ this.$emit('update:modelValue', 'fine') } } }
```

### 自定义指令

在 vue3 中，创建一个自定义指令时，可以拥有类似于组件生命周期的方法

```js
const app = Vue.create({})

app.directive("highLight", {
  beforeMount(el, binding, vnode) {},
  mounted(el, binding, vnode) {
    el.style.background = binding.value
  },
  beforeUpdate(el, binding, vnode) {},
  updated(el, binding, vnode) {},
  beforeUnmount(el, binding, vnode) {},
  unmounted(el, binding, vnode) {},
})
```

第一个参数 el 表示为绑定的 dom 节点，binding.value 为绑定的值

此时，只需要

```html
<p v-highLight="'red'"></p>
```
