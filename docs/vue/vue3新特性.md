# vue3 新特性

## emits

在 vue 3 中，新增了 emits 选项，用来定义能够向父组件 emit 的事件。

推荐在 emits 选项中定义所有符合条件的事件，未定义的事件将绑定在子组件的 \$attrs 中。

如果一个组件，需要向父组件传递 emits，比如

```vue
// ParentComponent
<ChildComponent v-model:msg="msg"></ChildComponent>

// ChildComponent export default { props: { msg: String }, emits: ["update:msg"], // 定义向父组件传递的事件名 methods: {
changeMsg(){ this.$emit('update:msg', newVal) } } }
```

同时，emits 也可以接受一个对象，用来校验这个函数向上 emit 的值是否合法，比如上面的例子

```js
emits: {
  "update:msg": val => {
    return val > 10
 }
}
```

函数接收的值为 emit 传递的值，返回一个布尔值，true 则表示通过校验。

## provide/inject

有时会遇到需要向下级组件（不止一层）传递值的情况，这时就需要用到 provide/inject 。只需要在上层组件中 provide 某个参数，在下层组件 inject 即可。

```vue
// provide 组件 export default { provide: { name: 'lex' } }
```

在它的下层组件中（子组件及其嵌套子组件）中，

```vue
<template>
  <p>{{ name }}</p>
</template>

export default{ inject: ['name'] }
```

但是此时，上层组件的改动并不会自动同步到下层组件中。

那么就需要在 provide 的时候提供一个函数，函数 return 出去一个 obj，这时才能访问到组件的 property。

用 computed 函数返回一个计算属性，这样在下层组件中就能同步更新 provide 的值

举个栗子

```vue
// 上层组件
<script>
import { computed } from "vue"
export default {
  data() {
    return {
      localName: "leo",
    }
  },
  provide() {
    return {
      name: computed(() => this.localName),
    }
  },
}
</script>
```
