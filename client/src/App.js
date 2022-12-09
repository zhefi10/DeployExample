import './App.css';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Navbar1 from './components/navbar';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import User from './components/user';

import React, {Children, createContext, useState} from "react";
import { UserContext } from './components/context';

const contextValue = {users: [
    {name: 'a', email: 'a@a.com', password: 'a1234567', balance: 4000},
    {name: 'b', email: 'b@b.com', password: 'b1234567', balance: 2000}], 
    userLogged: null};
function App() {

  const [data, setData] = React.useState(contextValue);

  return (
    <div>      
      <HashRouter>
      <Navbar1/>
      <User></User>
        <UserContext.Provider value={{data, setData}}>
              <Route path="/" exact component={Home} />
              <Route path="/createAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/alldata/" component={AllData} />
        </UserContext.Provider>
      </HashRouter>
  </div>
  );
}

export default App;