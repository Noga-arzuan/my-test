import React, { useState } from "react";
//import 'materialize-css/dist/css/materialize.min.css';
import SendMsg from "../SendMsg";

const RedFlag = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = `היי,
   לאחרונה בן הזוג שלי מתנהג מוזר, אני שמה לב שיש לו התנהגויות שמונעות ממני לעשות דברים שהייתי רגילה לעשות בעבר.
  אולי אני סתם חשדנית אבל אשמח אם נוכל לקבוע לדבר על זה בפרטיות .
  `;

  const sendMsg = () => {
    setShowSummery(false);
  };

  return (
    <div className=" flex-container">
      {showSummery ? (
        <div className="about">
          <p>
            <h1> את רואה ומרגישה נכון, נראה שאת בזוגיות פוגענית</h1>
            חשוב מאוד שתתייחסי לנורות האדומות בקשר שלך. הצעד הראשון הוא לפנות
            לגורמי מקצוע בתחום כבר עכשיו, כדי שישמעו אותך ויעזרו לך להבין איך
            לפעול נכון. חשוב לדעת! במקרים של זוגיות פוגענית, אסור לקבל החלטות
            לבד ובטח שלא להיפרד מבן הזוג ללא ליווי מקצועי. חייך עלולים להיות
            בסכנה.<br></br> הנה מה שאת צריכה לעשות: חייגי בהקדם האפשרי למספר
            <a href="tel:188"> 118 </a>
            או למוקד <a href="tel:100"> 100 </a>של המשטרה.<br></br> אפשר גם
            לשלוח הודעה 24/7 למספר 055-7000128
            <br></br>
            <button
              type="button"
              class="btn btn-link sendBtn wingsBtn"
              onClick={() => sendMsg()}
            >
              בלחיצה כאן
            </button>
            <br></br>
            תועברי למסך בו יחכה עבורך טקסט קצר אותו תוכלי לשלוח לאדם עליו את
            <br></br> סומכת (חבר/ה, קרוב/ת משפחה או כל אדם אחר שתבחרי).<br></br>
            זכרי - יצירת קשר עם אדם נוסף יכולה להציל את חייך
          </p>
        </div>
      ) : (
        <SendMsg msg={msg} />
      )}
    </div>
  );
};
export default RedFlag;
