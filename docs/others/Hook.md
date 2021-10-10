# React Hook

React Hook 是 React 16.8 新增的新特性，可以在不使用 class 组件的情况下，使用 state 以及其他特性，本篇主要介绍 React 常用 Hook 的使用。

## useState

useState Hook 提供一个 state 初始值，返回两个值，第一个是当前 state，第二个是更新 state 的函数

```jsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}
```

## useEffect

useEffect 可以看作 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 三个生命周期函数的结合体

我们可以在 useEffect 执行副作用，比如数据获取、事件监听、更改 DOM 等等操作

在下面的例子中，我们需要更改网页的 title，即需要在首次进入后（componentDidMount）以及每次 state 更新（componentDidUpdate）都进行更改

```jsx
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}次`;
  });

  return (
    <div className="home">
      <p className="count">{count}</p>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  );
}
```

由于在一个函数组件中，允许存在多个 Hook，每次更新 state 都会执行全部的 Effect，会造成不必要的性能损耗，像上面的 Effect 只跟 count 相关，可以使用下面的方式优化。优化后，只在更新 count 值的时候会执行 effect

```js
useEffect(() => {
  document.title = `${count}次`;
}, [count]);
```

比如我们注册一个事件监听，那么需要在组件销毁的时候移除事件监听，因为这两者有着紧密的关联，那么可以将他们放入一个 useEffect 中

```jsx
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="home">
      <p className="count">{count}</p>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  );
}
```

当 useEffect 返回一个函数时，每次重新渲染时，都会执行这个函数，这样设计的[原因](https://zh-hans.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)

## useContext

useContext 提供深层组件间传递参数的能力，上层 `context.provide`发生更改时，该 Hook 都会进行重新渲染，即使使用 `memo`或者 `shouldComponentUpdate`包裹，一个简单的例子

```jsx
import React, { createContext, memo, useContext } from "react";

const ThemeContext = createContext("light");
function About() {
  const [theme, changeTheme] = useState("light");
  ThemeContext = createContext(theme);

  function changeThemeHandler() {
    changeTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <p className="about">About</p>
      <Button onClick={changeThemeHandler}>changeTheme</Button>
      <ThemeContext.Provider value={theme}>
        <Son></Son>
      </ThemeContext.Provider>
    </>
  );
}

function Son() {
  return <Son2></Son2>;
}

function Son2() {
  const theme = useContext(ThemeContext);

  return <p>Son2: {theme}</p>;
}
```

在上面的例子中，如果 `ThemeContext.provide`提供的 value 值发生改变，那么 Son 组件及它的子组件都会重新渲染，无论是否使用了 `memo`

可以通过[这些方式](https://github.com/facebook/react/issues/15156#issuecomment-474590693)来优化

## useReducer

useReducer 是 useState 的替代方案，在一些场景下可能比 useState 更适用。例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化。

一个简单的例子

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

## useCallback

useCallBack 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization)函数，该函数仅在某个依赖项改变时才会发生更新。

在函数作为组件的 props 时，该组件又使用 `memo` 或者 `shouldComponentUpdate`时，使用 useCallback 能很好的避免非必要渲染

```jsx
function A() {
  const a = useCallback(() => {
    console.log("a");
  }, []);

  return <B back={a}></B>;
}

const B = memo(function B() {
  return <p>B</p>;
});
```

上面的例子中，无论 A 组件中如何重新渲染，传递给 B 组件的函数都保持不变，能避免组件的重新渲染

## useMemo

useMemo 返回的是一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值，用法跟 useCallBack 类似，在依赖项更新之后，才会重新计算

```jsx
const sum = useMemo((a,b)=>{
  return a+b
},[a,b]);
})
```

跟 useCallback 对比的话，它会执行提供的函数并返回出结果，所以

`useCallback(fn,deps)` 相当于 `useMemo(()=> fn, deps)`

## useRef

useRef 用来找到 DOM 元素，一个简单的例子

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus</button>
    </>
  );
}
```

## 自定义 Hook

使用 Hook 需要满足遵循两条规则

- 只在最顶层使用 Hook
- 只在 React 组件及自定义 Hook 中使用 Hook

所以自定义 Hook 的本质也就是封装公用函数，只不过需要遵循 Hook 的使用规则，并以 `use` 开头，也可以使用 Hook

比如需要抽取一个展示用户是否登录的 Hook

```jsx
function useIsOnline(userId) {
  const [isOnline, setIsOnline] = useState(false);

  // do something

  return isOnline;
}
```

在组件中使用

```jsx
function App() {
  const id = "123";
  const online = useIsOnline(id);
}
```

## 为什么需要 Hook

- 更好的实现组件复用逻辑的问题，在 class 组件中需要通过 `HOC` 或者 `render props`才能实现的使用自定义 Hook 可以轻松实现，代码也更为清晰
- 解决了在 class 组件中逻辑散落在各个生命周期中的问题，在 Hook 中能够将相关联的部分拆分更小的部分
