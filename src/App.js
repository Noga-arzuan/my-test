import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';

import './App.css';
//import 'materialize-css/dist/css/materialize.min.css';



class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router>
      
      <div>
      c
      ברוכות הבאות 
  האתר סגור לצורכי פיתוח 
      לפרטים נוספים nogaarzuan@gmail.com
      </div>

        </Switch>
        
        </Router>
        
        <Footer />



      </div >


    );
  }
}

export default App;
