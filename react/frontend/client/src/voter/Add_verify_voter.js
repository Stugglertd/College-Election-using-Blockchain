import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Add_verify_voter() {
  const [prn, setPrn] = useState("");
  const [name, setName] = useState("");
  const Navigate = useNavigate();
  const getData = () => {
    let str = "http://127.0.0.1:8000/stuinfo/";
    str += prn;
    fetch(str)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    // console.log(prn);
  };
  const changeHandler = (e) => {
    // console.log(e.target.value)
    setPrn(e.target.value);
  };
  async function handleClick() {
    // console.log(prn);
    Navigate("/Final_add_voter",{ state: { prn:prn ,name:name} });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Enter Prn.</h4>
        <input type="text" value={prn} onChange={changeHandler} />
        <button type="submit">Fetch Detail's</button>
      </form>
      <br />
      <h5>Detail's of Student</h5>
      <h3>Prn No. : {prn}</h3>
      <h3>Name : {name}</h3>
      <br />
      <br />
      <button type="button" onClick={handleClick}>
        Add Voter
      </button>
    </>
  );
}

export default Add_verify_voter;
