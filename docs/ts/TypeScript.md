# TypeScript

> TypeScript 是 JavaScript 的超集，它可以编译成纯 JavaScript。用来限制变量、常量的类型。  
> 注意：通常情况下 Ts 文件无法被直接运行，需要被编译成 js 文件。

## 安装 TypeScript

```shell
npm install -g typescript
```

## 编写.ts 文件

## 编译 ts 文件

```shell
tsc 1.ts // 将 ts 文件编译成 js
```

注意：如果报了“重复函数实现”的错误，需要执行**tsc --init**来初始化，会生成 tsconfig.json

## TypeScript 类型控制

- 定义常见数据类型：boolean、number、string

```ts
let a: boolean = true
let b: number = 123
let c: string = "abc"
let d: string = `name is ${name}` // 使用模板字符串
```

- 纯数字数组 number[]或者 Array<number>、 其他数组（元组）[number, string] 分别对应每个元素的类型，当给元组未定义类型的元素赋值时，它的类型可以为已定义类型中的任意一种。

```ts
let e: number[] = [1, 2, 3] // 纯数字数组
let f: Array<number> = [1, 2, 3] // 纯数字数组
let g: [string, number] = ["aaa", 21] // 元组，要按照类型的顺序传入,当给元组添加元素时，只能添加这两种类型之一
```

- 枚举：enum

```ts
enum Color {
  red = 100,
  green = 200,
  blue = 300,
}
let c: number = Color[red] // c 为 100

let d: string = Color[200] // return 'green'
```

- 未知: unknown
  当变量类型允许变化时，可以定义为 unknown

```ts
let a: unknown = "124"

a = 124 // 此时a 的类型允许从字符串转变为 数字
```

- 任意类型：any
  如果暂时还不确定某个变量的类型，就可以定为 any，这时候这个变量的类型是可以动态变化的

```ts
let f: any = 4
f = "hello"
```

- 没有任意类型：void  
  当一个函数没有返回值时，返回值的类型为 void

```ts
function warnUser(): void {
  console.log("This is my warning message")
}
```

定义为 void 没有什么意义，只能为它赋值为 null 或 undefined
还有 null 和 undefined 类型，只能对应赋值为 null 和 undefined

- never 永不存在的值的类型
- object 对象类型，即为除基本类型之外的类型
- 断言 当你清楚的知道一个值得类型时，可以使用断言来使 ts 跳过检查

```ts
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length //  <>写法
let strLength: number = (someValue as string).length //  as写法
```

## 未完待续
