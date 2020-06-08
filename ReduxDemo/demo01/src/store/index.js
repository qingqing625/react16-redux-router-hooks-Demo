import {createStore, applyMiddleware} from 'redux'     //引入createStore方法
import reducer from './reducer'
import thunk from 'redux-thunk'
import mySagas from './sagas'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();



// 1 增强函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
// const store = createStore(reducer,enhancer)

// 2 thunk
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// )      


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
) 
sagaMiddleware.run(mySagas)


export default store                  //暴露出去