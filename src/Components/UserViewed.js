import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { deleteUser } from '../redux/actionCreators';
import { Button } from 'semantic-ui-react';


const UserViewed=()=>{
    // const [userView,setUserView]=useState([]);
    const addToViewed = useSelector(state => state.addToViewed)
    const {viewed}=addToViewed
    // console.log("viewed ",viewed)
    // // console.log('user view ',userView)
    const setUserViewed=useSelector(state => state.setUserViewed)
    const {userView}=setUserViewed
    const dispatch = useDispatch();
    useEffect(() => {   
        return () => {
            //cleanup
        }
    }, [viewed,userView])
    console.log("user Viewed ",userView)
  
    return(
        <>
            {userView?(
                    userView.map((user)=>{
                        return(
                            <div className="viewed-users">
                                <div className="user-img">
                                    <img src={user.avatar_url} alt="user"/>
                                </div>
                                <div className="user-deatails">
                                    <div className="Name">
                                        <h3>Name : {user.name}</h3>
                                    </div>
                                    <div className="userName">
                                        <h3>User Name : {user.login}</h3>
                                    </div>
                                    <div className="Followers">
                                        Followers : {user.followers} followers
                                    </div>
                                    <div className="Following">
                                        Following : {user.following} following
                                    </div>
                                    <div className="Repos">
                                    Repository : {user.public_repos}  repos
                                    </div>
                                    <div className="delete-btn">
                                        <Button onClick={dispatch(deleteUser(user))} negative>Delete</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            ):
            (<div>"Not Searched"</div>)
            }
        </>
    )
}

export default UserViewed;