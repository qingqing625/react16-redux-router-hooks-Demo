import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import store from './index'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
   type:ADD_ITEM
}) 

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
 }) 

export const getListAction = (data)=>({
    type:GET_LIST,
    data
}) 

export const getTodoList  = () => {
    return ()=>{
        axios.get('http://localhost:9999/data')
            .then((res)=>{
                const data = res.data
                const action = getListAction(data)
                store.dispatch(action)
        })
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST,
})