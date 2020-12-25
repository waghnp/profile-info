import { ADD_SEARCH_USER, ADD_USER, CLEAR_VIEWED, DELETE_USER, SEARCH_FAILED, SEARCH_USER,SET_USER_VIEW,STARTING } from "./actionTypes"

export const searchUser=(user)=>(dispatch)=>{
    dispatch({type:STARTING})
    fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data=>dispatch({type:SEARCH_USER,payload:data}))
    .catch((error)=>{
        dispatch({type:SEARCH_FAILED,payload:error.message});
    })
}

export const waiting=()=>(dispatch)=>{
    dispatch({type:STARTING})
}

export const addUser=(user)=>(dispatch)=>{
    dispatch({type:ADD_USER,payload:user})
}

export const setUserView=(user)=>(dispatch)=>{
    dispatch({type:SET_USER_VIEW,payload:user})
}

export const deleteUser=(user)=>(dispatch)=>{
    dispatch({type:DELETE_USER,payload:user})
}