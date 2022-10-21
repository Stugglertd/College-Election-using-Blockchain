import React,{useEffect,useState} from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar"
import Voting from './Voting';
import Add_leader from './leader/Add_leader';
import Add_voters from './voter/Add_voters';
import Voter_stat from './Voter_stat';
import Election_res from './Election_res';
import Api from './Api';
import Add_verify_voter from './voter/Add_verify_voter';
import Final_add_voter from './voter/Final_add_voter';

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
            <Route path="/Add_verify_voter" element={<Add_verify_voter/>}/>
            <Route path="/Final_add_voter" element={<Final_add_voter/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;