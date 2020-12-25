import React,{useEffect} from 'react';
import SearchResult  from './SearchResult';
import SearchBox from './SearchBox';
import { useDispatch,useSelector } from 'react-redux';
import {waiting} from '../redux/actionCreators'

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(waiting())
    return () => {
      //
    }
  }, [])
  const searchResult = useSelector(state => state.searchResult)
  const {loading,error}=searchResult
  return (
    <>
      {error?{error}:(
      <div>
          <SearchBox/>
        {loading?<h2 className="info">Please Enter User Name</h2>:(<SearchResult/>)}
      </div>
      )}
      
    </>
  );
}

export default Home;
