import React,{useEffect} from 'react'
import {useSelector,useDispatch } from 'react-redux';
import {addUser} from '../redux/actionCreators'

const SearchResult = () =>{ 
    const searchResult = useSelector(state => state.searchResult)
    const {user}=searchResult
    const {name,login,followers,following,public_repos,avatar_url}=user
    const dispatch=useDispatch();
    useEffect(() => {
        setTimeout(() => {
            if(user){
                dispatch(addUser(user));
            }
        }, 2000);
        return () => {
           // cleanup
        }
    }, [user])
    return(
        <div className="search-result">
            <div className="user-image">
                <img width={400}  src={avatar_url}  alt="user"/>
            </div>
            <div className="user-info">
                <div className="name">
                    <h2>Name : {name}</h2> 
                </div>
                <div className="username">
                    <h3>User Name : {login}</h3>
                </div>
                <div className="followers">
                    Followers : {followers} followers
                </div>
                <div className="following">
                    Following : {following} following
                </div>
                <div className="repos">
                   Repository : {public_repos}  repos
                </div>
            </div>
        </div>
    )
}

export default SearchResult;