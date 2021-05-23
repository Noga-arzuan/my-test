import React from 'react';
import { Link } from 'react-router-dom';
import { ShareBar } from './ShareBar';
import 'materialize-css/dist/css/materialize.min.css';

function Menu() {
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <div className='share'>
        <h1 className='menu'>שמחות שבאת</h1>
        <button className='start'>
          {' '}
          <Link to='Menu'>התחילי השאלון</Link>{' '}
        </button>
      </div>

      <ShareBar />
    </div>
  );
}

export default Menu;
