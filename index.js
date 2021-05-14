const { applyMiddleware } = require('redux')
const redux = require('redux')
const reduxLogger=require('redux-logger')
//import { createStore } from 'redux'
const createStore=redux.createStore
const logger =reduxLogger.createLogger()
const middleWare=redux.applyMiddleware
//var createStore = Redux.createStore
const BUY_CAKE='BUY_CAKE'
const BUY_ICE='BUY_ICE'
function buyCake(){
return {
    type:BUY_CAKE,
    action:'First reudx action'
} 
}
function buyIce(){
    return {
        type:BUY_ICE,
        action:'First reudx ffff'
    } 
    }
const initialCakeState={
    numOfCakes:10,
    numOfIce:20
}

const initialIceState={
    numOfCakes:10,
    numOfIce:20
}
const cakeReducer=(state=initialCakeState,action)=>{
    switch (action.type){    
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1
            }
           
            default : return state
    }
    
    }

    const iceReducer=(state=initialIceState,action)=>{
        switch (action.type){    
           
                case BUY_ICE:
                    return {
                        ...state,
                        numOfIce: state.numOfIce-1
                    }
                default : return state
        }
        
        }

const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    ice:iceReducer
})
const store=createStore(cakeReducer,applyMiddleware(logger))
  // console.log( store.getState())   
  const unsubscribe=store.subscribe(()=>{console.log(store.getState())})
   store.dispatch(buyCake())
   store.dispatch(buyCake())
  
//    store.dispatch(buyCake())

//    store.dispatch(buyIce())
//    store.dispatch(buyIce())
   //unsubscribe()
   store.dispatch(buyCake()) 
   store.dispatch(buyCake())