import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from './../Images/logo.png';

function NavBar() {
  const emergencyExit = () =>{
    window.location.replace('https://www.google.com');
    
    return false;
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
