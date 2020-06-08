import React, { Component } from 'react';  //imrc
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {    //cc

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    // // 组件第一次存在于dom中，函数是不会被执行
    // // 如果已经存在于dom中，才会被执行
    // componentWillReceiveProps(){
    //     console.log('child----componentWillReceiveProps')
    // }

    // // 组件去除时执行
    // componentWillUnmount(){
    //     console.log('child----componentWillUnmount')
    // }

    // 组件优化！！！
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
                {/* 子组件用this.props接受父组件传来的值 */}
                {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }

    handleClick(){
        // console.log(this.props.index)
        // 用父组件的方法向父组件传值
        this.props.deleteItem(this.props.index)
    }
}
 
// 校验。注：XiaojiejieItem.propTypes中的p是小写
XiaojiejieItem.propTypes={
    // isRequired必须传
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
// 默认值
XiaojiejieItem.defaultProps={
    avname:'某某某'
}

export default XiaojiejieItem;