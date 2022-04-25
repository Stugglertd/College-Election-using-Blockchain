import React,{useEffect,useState} from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar"
import Voting from './Voting';
import Add_leader from './Add_leader';
import Add_voters from './Add_voters';
import Voter_stat from './Voter_stat';
import Election_res from './Election_res';
import Api from './Api';

function App(){
  return(
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="/" element={<Voting />}/>
            <Route path="/add_leaders" element={<Add_leader/>}/> 
            <Route path="/add_voters" element={<Add_voters/>}/>
            <Route path="/voter_stat" element={<Voter_stat/>}/>  
            <Route path="/election_res" element={<Election_res/>}/> 
            <Route path="/api" element={<Api/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;