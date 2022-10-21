import React from 'react'
import {useLocation} from "react-router-dom";
function Final_add_voter(props) {
  const {state} = useLocation();
  const { prn , name} = state;
  const handleClick = () =>{
    console.log(prn,name)
  }
  return (
    <>
      <div>Final_add_voter</div>
      <button onClick={handleClick}>
        Btn
      </button>
    </>
  )
}

export default Final_add_voter;