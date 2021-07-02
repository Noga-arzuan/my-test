import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function Menu() {
  return (


    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>


      <div className='share1'>

        <h1 className='menu'>שמחות שבאת</h1>



        <button className='start'>
          {' '}
          <Link to='Menu'>בואי נתחיל!</Link>{' '}
        </button>
      </div >


    </div >


  );
}

export default Menu;
