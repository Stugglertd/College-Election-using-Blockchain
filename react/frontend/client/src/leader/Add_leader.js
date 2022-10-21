import React, { useState ,useEffect} from "react";
import Electionabi from "../contracts/Election.json";
import "../leader/Add_leader.css"
function Add_leader() {
  useEffect(() => {
    LoadBlockchaindata();
  },[])
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [data,setData] = useState([]);

  let Web3 = require("web3");
  let web3 = new Web3(
      new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  );

  function refreshPage() {
    window.location.reload(false);
  }

  const LoadBlockchaindata = async()=>{
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
    let election = new web3.eth.Contract(Electionabi.abi, networkData.address);
    await window.ethereum.enable();
    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    // const account = accounts[0];

    let temp = await election.methods.getCan().call();
    setData(temp);
    // component();
  }
  async function handleSubmit(event) {
    event.preventDefault();
    alert(`The name you entered was: ${name}${id}`);
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
    let election = new web3.eth.Contract(Electionabi.abi, networkData.address);
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    await election.methods.addCandidate(id,name.toLowerCase())
    .send({from:account,gas:3000000});
    // count = await election.methods.candidatesCount().call();//.then(console.log);
    // await election.methods.candidates().call().then(console.log);
    let temp = await election.methods.getCan().call();
    setData(temp);
    refreshPage();
  }
  // async function component(){
  //   console.log("Componet");
  //   let url = "http://127.0.0.1:8000/stuinfo/2";
  //   let data = await fetch(url);
  //   console.log(data);
  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Prn No:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Enter Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br/>
        <input type="submit" />
      </form>
      <br />
      <br />
      <br />
      <div>
        <header>
          <h1 className="text-center">List of Leader's:</h1>
        </header>
        <main>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>

                <th scope="col">Prn No.</th>

                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr> */}
              {/* <ol>   */}
              {data.map((acc, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{acc.prn_no}</td>
                  <td>{acc.name.toUpperCase()}</td>
                </tr>
              ))}
              {/* </ol> */}
              {/* </tr>  */}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
export default Add_leader;
