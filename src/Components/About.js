import React from "react"
import aboutImg from "../Images/about2.jpg"
const About = () => {

    return <div>
       <h1>About Us</h1> 
        <p> We at myHome restaurant wants to let<br/>
            you plain, control and enjoy all of your daily meals
             for you and your family <br/>
            At  myHome restart we believe that food <br/>
            is the thing that occupies you more<br/>
            than anything else in your life, and that you<br/>
             delicate to it a lot of your 
            time, almost every day and definitely every week.<br/>
           We believe that we can give you happy tools
          to make it fun to you and  your beloved one </p>
          <img src={aboutImg} className="App-logo" alt="logo" />

      </div>
    
}
export default About;