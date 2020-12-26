import { ADD_USER,DELETE_USER, SEARCH_FAILED, SEARCH_USER,SET_USER_VIEW,STARTING } from "./actionTypes";

export const searchResultReducer=(state={user:{}},action)=>{
    switch(action.type){
        case STARTING:
            return {loading:true};
        case SEARCH_USER:
            return {loading:false,user:action.payload};
        case SEARCH_FAILED:
            return {loading:false,error:action.payload};
        default:
            return state;
    }
}

export const addToViewedReducer=(state={viewed:[]},action)=>{
    switch(action.type){
        case ADD_USER:
            return {viewed:[...state.viewed,action.payload]};
        default :
            return state;
    }

}   

export const setUserViewReducer=(state={userView:[]},action)=>{
    switch(action.type){
        case SET_USER_VIEW:
            if(action.payload.login){
                if(action.payload.login===""){
                    return state;  
                }else if(state.userView.includes(action.payload.login)){
                    return state;
                }else{
                    return {userView:[...state.userView,action.payload]}
                }
            }else
                return state;
  
        case DELETE_USER:
            return {userView:[state.userView.filter(user=> user.login !== action.payload.login)]}
        default:
            return state;
    }
}