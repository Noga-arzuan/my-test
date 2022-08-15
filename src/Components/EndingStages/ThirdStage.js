import React, { useState } from "react";
import SendMsg from "../SendMsg";

const ThirdStage = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = `היי,
  שולחת לך את ההודעה הזאת מכיוון שעלו לי לאחרונה כל מיני סימני שאלה לגבי מערכת היחסים הזוגית שלי,  אני מבולבלת ולא בטוחה מה אני רוצה לעשות עם זה. 
  בנתיים אשמח שנקבע לדבר על זה בפרטיות ומבלי שתשתפ/י עוד מישהו בזה.
  `;

  const sendMsg = () => {
    setShowSummery(false);
  };

  return (
    <div className="about">
      <h1 className="header">לפרוש כנפיים ולעוף</h1>

      {showSummery ? (
        <p className="sumery">
          <br></br> טוב שאת פה. אל תתעלמי מהנורות האדומות. אף מערכת יחסים אינה
          מושלמת, אבל במערכת יחסים בריאה לא תמצאי התנהגויות פוגעות. חשוב שתשוחחי
          עם אדם מחוץ למערכת היחסים ושתפי במה שעובר עלייך. הנה כמה אפשרויות
          שיכולות לעזור לך: :<br />
          <button
            type="button"
            class="btn btn-link sendBtn wingsBtn"
            onClick={() => sendMsg()}
          >
            שליחת הודעה לחבר/ה קרוב/ה
          </button>
          <br />
          <br />
          להעמקת הידע שלך בנושא זוגיות בריאה היכנסי{" "}
          <a href="https://govextra.gov.il/molsa/domesticviolence/home/home/#CallCenter">
            לאתר משרד הרווחה
          </a>
        </p>
      ) : (
        <SendMsg msg={msg} />
      )}
    </div>
  );
};
export default ThirdStage;
