import React, { useState, useEffect } from 'react';

// 原写法
// class Example3 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }

//     componentDidMount(){
//         console.log(`ComponentDidMount=>You click ${this.state.count} times`)  
//         //填坑：使用键盘 tab键上面的引号 ，非 enter 键旁边的引号
//     }
//     componentDidUpdate(){
//         console.log(`ComponentDidUpdate=>You click ${this.state.count} times`)
//     }

//     render() { 
//         return ( 
//             <div>
//                 <p>You click {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>click me</button>
//             </div> 
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

// Hooks写法
function Example3(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    )

}
 
export default Example3;