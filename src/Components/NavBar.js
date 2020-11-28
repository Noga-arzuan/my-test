import React from 'react';
import {Link} from 'react-router-dom';
import aboutImg from "./../Images/logo.png";

function NavBar(){
    return(
        <nav>
                        <img src={aboutImg} className="App-logo" alt="logo" />
        <ul>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feel-good">Feel Good</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
        </ul>
      </nav>
    )
}

export default NavBar;