import React, { useState } from 'react';

// 原写法
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>count数：{this.state.count}</p>
//                 <button onClick={this.setCount.bind(this)}>click me</button>
//             </div> 
//         );
//     }
//     setCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

// Hooks写法
function Example(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
 
export default Example;