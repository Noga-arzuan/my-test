import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "./../Images/logo.png";

function NavBar() {
  const emergencyExit = () => {
    window.location.replace("https://www.google.com");

    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      emergencyExit();
    }, 600000);
  });

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="navBar">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul id="nav-mobile" className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
               <Link to='/feel-good'>Feel Good</Link>
             </li> */}
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li>
              <Link to='/Menu'>Menu</Link>
             </li> */}
            </ul>
            <img src={aboutImg} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="timerNote">
          <button
            className="emergencyExit false wingsBtn"
            onClick={() => emergencyExit()}
          >
            לסגירת הטופס
          </button>
          לביטחונך השאלון מאובטח ויסגר תוך 10 דקות
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
