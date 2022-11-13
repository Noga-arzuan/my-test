import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "./../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      {/* <div className="nav-wrapper"> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ul id="nav-mobile" className="menu">
            <li>
              <FontAwesomeIcon icon={faBars} height={50} width={50} />
            </li>
            <li>
              <Link to="/about">מי אנחנו</Link>
            </li>
            <li>
              <Link to="/">לתחילת השאלון</Link>
            </li>
            {/* <li>
              <Link to='/Menu'>Menu</Link>
             </li> */}
          </ul>
        </div>
        <div>
          <img src={aboutImg} className="App-logo" alt="logo" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
