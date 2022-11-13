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
  <span></span>;

  return (
    <div classNme={["footer-copyright"]}>
      <div className={["nav-wrapper", "timerNote", "middle"]}>
        <h1 className="close">
          {" "}
          לביטחונך האישי השאלון מאובטח וייסגר תוך <span>10</span> דקות*
        </h1>
        <button
          style={{ marginTop: "0" }}
          className="emergencyExit false wingsBtn"
          onClick={() => emergencyExit()}
        >
          לחצי לסגירת הטופס
        </button>
      </div>
      <a
        className="contact"
        href="https://govextra.gov.il/molsa/domesticviolence/home/home/#CallCenter"
      >
        ניתן ליצור קשר מיידי גם בקו החם24/7 1202*
      </a>

      <div className={["center", "middle"]}>
        <ShareBar />
      </div>
      <h6 className="footer">Copyright © 2021 Wings. All rights reserved</h6>
      <a href="https://www.freepik.com">designed by Freepik - Freepik.com</a>
    </div>
  );
}
export default Footer;
