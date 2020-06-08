import React, { Component } from 'react';
import store from './store'
import {getMyListAction,changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
        // console.log(this.state)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)           //订阅Redux的状态
    }

    render() {
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteItem = {this.deleteItem}
            />
        );
    }

    componentDidMount(){
        const action = getMyListAction()
        store.dispatch(action)
    }
    
    storeChange(){
        // console.log('store changed')
        this.setState(store.getState())
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
}


export default TodoList;