import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "./../Images/logo.png";

function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <img src={aboutImg} className="App-logo" alt="logo" />
        <div></div>

        <button class="emergencyExit false" tanindex="0">
          לסגירת הטופס
        </button>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feel-good">Feel Good</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
        </ul>
        <div class="timerNote">לביטחונך השאלון מאובטח ויסגר תוך:</div>
      </div>
    </nav>
  );
}

export default NavBar;
