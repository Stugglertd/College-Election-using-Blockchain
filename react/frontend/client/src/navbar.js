import React from "react";
// import * as RB from "react-bootstrap";
import "./navbar.css";
// import Par from './Participants'
const Nav = () => {
  //   console.log("NAv");
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <a className="navbar-item">
            <img
              src="https://images.thequint.com/thequint%2F2018-05%2Fe26ee1ae-cf95-44af-85d9-a21ad83bef00%2FUntitled_2__6_.jpg?rect=0%2C0%2C2000%2C1125"
              className="rounded"
              width="212"
              height="58"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Cast Vote
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/add_leaders">
                 Add Leaders
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/add_voters">
                 Add Voters
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/voter_stat">
                 Voter's Status
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/election_res">
                 Election Result
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/Api">
                 Election api
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
