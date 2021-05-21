import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from './../Images/logo.png';

function NavBar() {


  useEffect(() => {

    setTimeout(() => {
      window.open("https://www.google.com/", "_self");
    }, 600000);

  });




  return (
    <nav>
      <div className='nav-wrapper'>
        <img src={aboutImg} className='App-logo' alt='logo' />
        <div></div>

        <button className='emergencyExit false'>לסגירת הטופס</button>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/feel-good'>Feel Good</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/Menu'>Menu</Link>
          </li>
        </ul>
        <div className='timerNote'>לביטחונך השאלון מאובטח ויסגר תוך:</div>
      </div>
    </nav>
  );
}

export default NavBar;
