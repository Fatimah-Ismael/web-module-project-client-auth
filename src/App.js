import React from 'react';
import './App.css';
import { Routes, Route, Redirect, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {
  return (
   
      
      <div className='App'> 
        <h2>
            FRIENDS DATABASE
          </h2>
          
          <div className='links'>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add Friends</Link>
          <Link to='/logout'>Log Out</Link>
          
          </div>
      <Routes>
      <Route exact path='/' element={<Login />}>
         
        </Route>
        <Route exact path='/login' element={<Login />}>
         
        </Route>
        <Route exact path='/friends' element={<FriendList/>}>
         
        </Route>
        <Route exact path='/friends/add' element={<AddFriend/>}>
          
        </Route>
        <Route exact path='/logout' element={<Logout />}></Route>
        </Routes>
        </div>
       
        
  );
}

export default App;
