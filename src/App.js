

import React from 'react';
import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import Feel from "./Components/Feel";
import About from "./Components/About";
import Home from "./Components/Home";
import "./App.css";
//import { LinkContainer } from 'react-router-bootstrap';



  class App extends React.Component {
    render(){
      return(
        <div className="app">
     
        <Router>
          <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
         <Route  path="/feel-good/" component={Feel}/>
          <Route path="/about" component={About}/>
          <Route  path="/Menu" component={Menu}/>
        </Switch>
        </Router>
        </div>
      )
    }
  }

export default App;
