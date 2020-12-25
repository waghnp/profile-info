import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { addToViewedReducer, searchResultReducer, setUserViewReducer} from './searchResultReducer';
import thunk from 'redux-thunk';

const initialState={};
const reducer=combineReducers({
   searchResult:searchResultReducer ,
   addToViewed : addToViewedReducer,
   setUserViewed:setUserViewReducer
})
const store=createStore(reducer,initialState,compose(applyMiddleware(thunk)))

export default store;