import React ,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import { Input } from 'semantic-ui-react';
import {searchUser} from '../redux/actionCreators';
import {waiting} from '../redux/actionCreators';

const SearchBox=()=>{
    const [userInput,setUserInput]=useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            if(userInput!==''){
                dispatch(searchUser(userInput));
            }else{
                dispatch(waiting());
            }
        }, 2000);
      
        return () => {
            //cleanup
        }
    }, [userInput])

    const handleInputChange=(e)=>{
        setUserInput(e.target.value)
        console.log('UserInput '+userInput)
    }
    return(
        <div className="search-box">
             <Input onChange={handleInputChange} icon='search' placeholder='GitHub User...' />
        </div>
    )
}

export default SearchBox;