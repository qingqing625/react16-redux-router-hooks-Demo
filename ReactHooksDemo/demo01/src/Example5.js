import React, { useState,createContext, useContext } from 'react';

// P05:useContent让父子组件传值

const CountContext = createContext()

function Counter(){
    const count = useContext(CountContext)  // 一句话就可以得到count
    return (<h2>{count}</h2>)
}

function Example5(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
            {/* 把count变量允许跨层级实现传递和使用 */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )

}
 
export default Example5;