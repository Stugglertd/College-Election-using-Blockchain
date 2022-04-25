import React,{useState,useEffect} from "react";
import Electionabi from "./contracts/Election.json";

function Election_res() {
  useEffect(() => {
    LoadBlockchaindata();
  }, []);
  const [data,setData] = useState([]);
  const LoadBlockchaindata = async () => {
    let Web3 = require("web3");
    let web3 = new Web3(
      new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    );

    function refreshPage() {
      window.location.reload(false);
    }
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
    let election = new web3.eth.Contract(Electionabi.abi, networkData.address);
    await window.ethereum.enable();
    let data = await election.methods.getCan().call();
    setData(data);
  };
  return (
    <>
      <div>
        <header>
          <h1 className="text-center">Election Result</h1>
        </header>
        <main>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>

                <th scope="col">Prn No.</th>

                <th scope="col">Name</th>

                <th scope="col">Vote's Count</th>
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
                  <td>{acc.votecount}</td>
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
export default Election_res;
