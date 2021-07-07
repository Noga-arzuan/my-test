import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from './../Images/logo.png';

<script type="text/javascript">
        function disableBack() {
          
           window.history.forward()
           
        }
        setTimeout("disableBack()", 0);
        
        window.onunload = function () { null };
  </script>


function NavBar() {
  const emergencyExit = () =>{
    //window.open('https://www.google.com/', '_blank', '');
    document.getElementsByTagName ('html')[0].remove();
    window.open('https://www.google.com', '_self');
  }

  useEffect(() => {
    setTimeout(() => {
      emergencyExit();

    }, 600000);
  });
  
  return (

    <nav>
      <div className='nav-wrapper' style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <button className='emergencyExit false wingsBtn' onClick={() => emergencyExit()}>לסגירת הטופס</button>


          <img src={aboutImg} className='App-logo' alt='logo' />
        </div>
        <div className='timerNote'>      לביטחונך השאלון מאובטח ויסגר תוך 10 דקות </div>


        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul id='nav-mobile' className='left hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/feel-good'>Feel Good</Link>
            </li> */}
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/Menu'>Menu</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

  );

}


export default NavBar;
