import React, { useEffect } from "react";
import { ShareBar } from "./ShareBar";

function Footer() {
  const emergencyExit = () => {
    window.location.replace("https://www.google.com");

    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      emergencyExit();
    }, 600000);
  });

  return (
    <div classNme="footer-copyright">
      <div className="nav-wrapper">
        <div className="timerNote">
          <h1>לביטחונך השאלון מאובטח ויסגר תוך 10 דקות*</h1>
          <button
            style={{ marginTop: "0" }}
            className="emergencyExit false wingsBtn"
            onClick={() => emergencyExit()}
          >
            לחצי לסגירת הטופס
          </button>
        </div>
        <div className="contact">
          <a href="https://govextra.gov.il/molsa/domesticviolence/home/home/#CallCenter">
            ניתן ליצור מיידי קשר גם בקו החם24/7 *1202
          </a>
        </div>
      </div>
      <ShareBar />
      <h6 className="footer">Copyright © 2021 Wings. All rights reserved</h6>
    </div>
  );
}
export default Footer;
