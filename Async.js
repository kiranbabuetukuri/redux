const redux=require('redux')
const createStore=redux.createStore
const axios =require('axios')
const applyMiddleware=redux.applyMiddleware
const thunk =require('redux-thunk').default
const initialStatus={
loading:false,
users:[],
error:''

}
const FETCH_USER_REQUEST='FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
const FETCH_USER_ERROR='FETCH_USER_ERROR'
const fetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSucccess=(users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
const fetchUserError=(error)=>{
    return {
        type:FETCH_USER_ERROR,
        payload:error
    }
}
const reducer=(state=initialStatus,action)=>{
switch(action.type){
case FETCH_USER_REQUEST:
    return {
        ...state,
        loading:true
    }
    case   FETCH_USER_SUCCESS:
    return {
        loading:false,
        users:action.payload,
        error:''
    }
    case   FETCH_USER_ERROR:
        return {
            loading:false,
            users:[],
            error:action.payload
        }

}

}
const store=createStore(reducer,applyMiddleware(thunk))
const fetchUsers=()=>{
return function (dispatch){
    console.log(445)
    dispatch(fetchUserRequest)
axios.get('https://jsonplaceholder.typicode.com/posts').
then((responce)=>{
    const users=responce.data.map(e=>e.id)
    dispatch(fetchUserSucccess(users))
}).
catch((error)=>{
     
    dispatch(fetchUserError(error.message))
})

}

}

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
console.log(5)