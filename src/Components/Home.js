import React from 'react';
import {Link} from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';
import {EmailIcon ,FacebookIcon,LinkedinIcon,WhatsappIcon,TwitterIcon}from"react-share";
import {EmailShareButton, LinkedinShareButton, FacebookShareButton, TwitterShareButton ,WhatsappShareButton}from "react-share";
// import {FacebookButton,FacebookCount} from "react-social";





function Home(){
  let url = "https://github.com";


    return <div >
      <section id="share">
      <div className="share" >

      
      <h1>שמחות
        <span></span>
        </h1>
      <h1>שבאת
        <span></span>
        </h1>

          <button className="share"> <Link to="Menu">התחילי את השאלון</Link> </button>
</div>
</section>
<div className="share">
  <h1>מכירה חברה שהנושא יכול להיות </h1>
   <h1>קרוב לליבה? </h1>
  <h1>שתפי איתה את השאלון</h1>
  <FacebookShareButton  
 url={url} appId={209396587441120}>
  <FacebookIcon size={32} round={true}/> 
 </FacebookShareButton>
{/* <EmailIcon size={32} round={true} /> */}
{/* </EmailShareButton> */}
<WhatsappShareButton
 url={url} appId={209396587441120}>
<WhatsappIcon size={32} round={true} />
</WhatsappShareButton>
<TwitterShareButton>
<TwitterIcon size={32} round={true} />
</TwitterShareButton>
  <LinkedinShareButton>
<LinkedinIcon size={32} round={true} />
</LinkedinShareButton>


</div>
</div>

}

export  default  Home;