import React, { useState } from "react";
//import 'materialize-css/dist/css/materialize.min.css';
import SendMsg from "../SendMsg";

const RedFlag = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = `היי,
   לאחרונה בן הזוג שלי מתנהג מוזר, אני שמה לב שיש לו התנהגויות שמונעות ממני לעשות דברים שהייתי רגילה לעשות בעבר.
  אולי אני סתם חשדנית אבל אשמח אם נוכל לקבוע לדבר על זה בפרטיות באנונימיות.
  `;

  const sendMsg = () => {
    setShowSummery(false);
  };

  return (
    <div className=" flex-container">
      {showSummery ? (
        <div className="sumery">
          <p>
            <h1> את רואה ומרגישה נכון, נראה שאת בזוגיות פוגענית</h1>
            חשוב מאוד שתתייחסי לנורות האדומות בקשר שלך. הצעד הראשון הוא לפנות
            לגורמי מקצוע בתחום כבר עכשיו, כדי שישמעו אותך ויעזרו לך להבין איך
            לפעול נכון. חשוב לדעת! במקרים של זוגיות פוגענית, אסור לקבל החלטות
            לבד ובטח שלא להיפרד מבן הזוג ללא ליווי מקצועי. <br></br>
            חייך עלולים להיות בסכנה. הנה מה שאת צריכה לעשות: חייגי בהקדם האפשרי
            ל- למספר
            <a href="tel:188"> 118 </a>
            או למוקד <a href="tel:100"> 100 </a>של המשטרה אפשר גם לשלוח הודעה
            24/7 למספר: 055-7000128
            <button
              type="button"
              class="btn btn-link sendBtn wingsBtn"
              onClick={() => sendMsg()}
            >
              בלחיצה כאן
            </button>
            תועברי למסך בו יחכה עבורך טקסט קצר אותו תוכלי לשלוח לאדם עליו את
            סומכת (חבר/ה , קרוב/ת משפחה או כל אדם אחר שתבחרי) .זכרי - יצירת קשר
            עם אדם נוסף יכולה להציל את חייך
          </p>
        </div>
      ) : (
        <SendMsg msg={msg} />
      )}
    </div>
  );
};
export default RedFlag;
