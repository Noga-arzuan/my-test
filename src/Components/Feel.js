
import React from "react";
import axios from "axios";
//import NavBar from "./NavBar"
import Quote from "./Quote";
import { queryByTestId } from "@testing-library/react";
/*import 'bootstrap/dist/css/bootstrap.css';
//import Jumbotron from 'react-bootstrap/Jumbotron';*/

class Feel extends React.Component {
  constructor(props){
    super(props)
   this.state = { data: null };
  

  }
   handleOnClick = async() => {
    
    const fetchQuote = await axios.get("https://type.fit/api/quotes");
    console.log(fetchQuote.data)
    
    this.setState({ data: fetchQuote.data});
    console.log(this.state);
    

   
    };
  render(){
    const renderInputQuote  = () => {
      return  this.state.data.slice(0,1).map((quote) => {
        console.log(quote);
      return <div className="quote"> <h1>"{quote.text}" </h1>
    <h1> {quote.author}</h1>
     </div>
      })};
    return  <div>
  
     <button onClick={this.handleOnClick}> Inspiration Quote For Today</button>
       {this.state.data && renderInputQuote()}  
       <h1 className="feel">Lets Feel Good</h1>
    </div>
  }
}
  
  
        
   
    
   
  export default Feel;