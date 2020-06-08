import React,{Component, Fragment} from 'react';
import axios from 'axios';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group';


class Xiaojiejie extends Component{
    // js的构造函数，由于其他任何函数执行
    // 生命周期指在在某一时刻，组件会自动调用执行的函数。
    // constructor构造函数是ES6的基本语法，不属于生命周期。
    // 但可以看做初始化Initialization阶段，定义属性props和状态state
    constructor(props){
        super(props)        // 调用父类的构造函数，固定写法
        this.state={
            inputValue:'',  // input中的值
            //-------------主要 代码---------------start
            list:['基础按摩','精油推背']         // 服务列表
            //-------------主要 代码---------------end
        }
    }

    // componentWillMount(){
    //     console.log('componentWillMount------组件将要挂载到页面的时刻')
    // }

    componentDidMount(){
        // console.log('componentDidMount------组件挂载完成的时刻')
        // 请求百度失败，没加请求头
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>{
                console.log('axios 获取数据成功'+JSON.stringify(res))
            })
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }

    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdat----组件更新前执行')
    //     return true
    // }

    // componentWillUpdate(){
    //     console.log('2-componentWillUpdate---组件更新前执行，在should之后；若should返回false则不执行')
    // }

    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate---组件更新之后执行')
    // }

    render(){
        // console.log('3-render------组件挂载中')
        return (
            <Fragment>
                {/* 正确注释的写法，快捷键ctrl+/ */}
                <div>
                    {/* <label>为input元素定义标注
                        "for" 属性可把 label 绑定到另外一个元素。
                        请把 "for" 属性的值设置为相关元素的 id 属性的值
                        在这里用 "htmlFor" , 不然易于js中的for循环混淆 
                    */}
                    <label htmlFor="fq">增加服务</label>
                    <input 
                        id="fq" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                        ref = {(input)=>{this.input=input}}    //绑定
                    />
                    <button onClick={this.addList.bind(this)}> 增加服务 </button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return( 
                                    <CSSTransition
                                        timeout={1000}
                                        className="boss-text"
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <XiaojiejieItem
                                            // avname='xxxx' 
                                            key={index+item}                                
                                            content={item}  // 父组件向子组件传值，增加服务，属性传值方法
                                            index={index}                                    
                                            deleteItem={this.deleteItem.bind(this)} // 传递父组件的方法，子组件调用父组件的方法
                                        />
                                    </CSSTransition>
                                    
                                    
                                    // <li 
                                    //     key={index+item}
                                    //     onClick={this.deleteItem.bind(this,index)}
                                    //     // 正确渲染输入的html标签
                                    //     // 使用dangerouslySetInnerHTML属性的虚拟dom元素之间应没有任何内容
                                    //     dangerouslySetInnerHTML={{__html:item}}
                                    // >
                                    // </li>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        );
    }

    inputChange(e){
        // console.log(e.target.value)
        this.setState({
            // inputValue: e.target.value
            //ref绑定后
            inputValue:this.input.value
        })
    }
    // 增加服务的按钮响应方法
    addList(){
        // 虚拟dom异步，渲染需要时间.setState方法提供了一个回调函数可以解决
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    //删除单项服务
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie