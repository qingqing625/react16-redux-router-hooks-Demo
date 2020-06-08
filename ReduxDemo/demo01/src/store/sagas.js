import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

// generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    // axios.get('http://localhost:9999/data')
    //         .then((res)=>{
    //             const data = res.data
    //             const action = getListAction(data)
    //             put(action)
    //     })
    const res = yield axios.get('http://localhost:9999/data')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;