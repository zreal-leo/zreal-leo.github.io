# 组合式API

在 vue2 的开发过程中，当一个组件变得很大、需要关注的逻辑点很多时，关注的逻辑点常常会分布在不同的 vue options 中，后期维护时，需要同时关注各个 options 中关于这个逻辑点的代码。也就是说，组合式 API 将一个组件中，同一个逻辑点的代码，都集合在了一起。

直接开始

### setup

在组件中，额外提供了一个 **setup** 的option，setup 的执行还在 beforeCreate 之前，所以这时候是无法访问到 this 的。

- 在 setup 中，只能访问到 props 
- setup 函数可以返回一个对象，在组件的任意位置都可以访问到这个对象

```vue
export default {
	setup(props, context){
		
		// 使用 ref 创建一个响应式引用，这样在改变值的同时，其他地方也能同步更新
    const repositories = ref([])
    const getUserRepositories = async () => {
    	repositories.value = await fetchUserRepositories(props.user)
    }

    return {
      repositories,
      getUserRepositories
    }
	},
	mounted(){
		// 在其他地方，比如这里 mounted，能直接访问到 setup return 出来的方法
		this.getUserRepositories()
	}
}
```



### 在 setup 函数中使用 lifeCycle 以及 watch computed 

在 setup 中，除了不需要的 beforeCreate 以及 created 外（这部分直接写在 setup 函数中），其他的生命周期函数都在前面加上**on**，如下表。

这些生命周期函数都接收一个函数，当钩子函数被调用时执行。

|  lifeCycle   |     Setup     |
| :----------: | :-----------: |
| beforeCreate |   not need    |
|   created    |   not need    |
| beforeMount  | onBeforeMount |
|   mounted    |   onMounted   |
|     ...      |      ...      |

在 setup 函数中，如果需要使用 lifeCycle、 watch 以及 computed 的话，需要先在组件中引用 

```vue
<script>
import { onMounted, watch, computed, ref } from 'vue'
export default{
  setup(props, context){
		
		// 使用 ref 创建一个响应式引用，这样在改变值的同时，其他地方也能同步更新
    const repositories = ref([])
    const getUserRepositories = async () => {
    	repositories.value = await fetchUserRepositories(props.user)
    }
    
    const counter = ref(0)
    watch(counter, (newValue, oldValue) => {
      console.log('The new counter value is: ' + counter.value)
    })
    
    const twiceTheCounter = computed(() => counter.value * 2)
		
		onMounted(() => {
			getUserRepositories()
		})

    return {
      repositories,
      getUserRepositories
    }
	},
}
</script>

```

