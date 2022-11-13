import React, { useEffect, useState } from "react";
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
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav>
      {/* <div className="nav-wrapper"> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FontAwesomeIcon icon={faBars} height={50} width={50} />
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul id="nav-mobile" className="navigation-menu">
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
        </div>
        <div style={{ height: "80px", width: "80px" }}>
          <img src={aboutImg} className="App-logo" alt="logo" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
