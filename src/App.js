import React from 'react';
import './App.css';
import { Link,Route,BrowserRouter} from 'react-router-dom';
import UserViewed from './Components/UserViewed';
import Home from './Components/HomeComponent';

function App() {

  return (
    <BrowserRouter>
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <h2><Link to="/">GitHub Search</Link></h2>
        </div>
        <div className="navigation">
          <h2><Link to="/userviewed">User Viewed</Link></h2>
        </div>  
      </div>
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route  path="/userviewed" component={UserViewed} />
      </div>  
    </>
    </BrowserRouter> 
  );
}

export default App;
