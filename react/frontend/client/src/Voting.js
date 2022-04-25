import React, { useState, useEffect } from "react";
import Electionabi from "./contracts/Election.json";

const Voting = () => {
  const [Candidate, setCandidate] = useState();
  const [prn, setPrn] = useState("");
  const [account,setAccount] = useState("");
  let Web3 = require("web3");
  let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    LoadBlockchaindata();
  }, []);
  const LoadBlockchaindata = async () => {
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
    let election = new web3.eth.Contract(Electionabi.abi, networkData.address);
    await window.ethereum.enable();
    
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAccount(account);

    let temp = await election.methods.getCan().call();
    setCandidate(temp);

    var select = document.getElementById("selectNumber");
    for (var i = 0; i < temp.length; i++) {
      var opt = temp[i];
      var el = document.createElement("option");
      el.textContent = opt.name + " " + opt.prn_no;
      el.value = opt.prn_no;
      select.appendChild(el);
    }
  };
  async function handleSubmit(event) {
    event.preventDefault();
    //use prn for voter's id
    //use Candidate for leader's id
    alert(`Your Vote added successfully${prn}${Candidate}`);

    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
    let election = new web3.eth.Contract(Electionabi.abi, networkData.address);
    // let temp = await election.methods.getCan().call();
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAccount(account);
    await election.methods
      .Vote(Candidate,prn)
      .send({ from: account, gas: 3000000 });
    refreshPage();
  }
  return (
    <>
      <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
        <h5>Cast Your Vote:</h5>
        <form onSubmit={handleSubmit}>
          <select
            id="selectNumber"
            onChange={(e) => setCandidate(e.target.value)}
          >
            <option>Select to Vote</option>
          </select>
          <br />
          <br />
          <label>
           Enter Your prn number
            <input
              type="text"
              // value={name}
              onChange={(e) => setPrn(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button className="btn btn-primary mt-2 btn-md w-100">
            Vote Candidate
          </button>
        </form>
      </div>
      <p className="my-5">
        Current Active account address:<span className="font-weight-bold">{account}</span>
      </p>
    </>
  );
};

export default Voting;
