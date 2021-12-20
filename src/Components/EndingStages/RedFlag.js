import React, { useState } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import SendMsg from '../SendMsg';

const RedFlag = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = `היי,
   לאחרונה בן הזוג שלי מתנהג מוזר, אני שמה לב שיש לו התנהגויות שמונעות ממני לעשות דברים שהייתי רגילה לעשות בעבר.
  אולי אני סתם חשדנית אבל אשמח אם נוכל לקבוע לדבר על זה בפרטיות באנונימיות.
  `

  const sendMsg = () => {
    setShowSummery(false);
  }

  return (
    <div className=' flex-container'>
      <h1 className='center-align'>לפרוש כנפיים ולעוף</h1>

      {
        showSummery ?
          <div className='sumery'>
            <p className='about'>
  <h2> את רואה ומרגישה נכון, נראה שאת בזוגיות פוגענית.</h2> 
חשוב מאוד שתתייחסי לנורות האדומות בקשר שלך. 
הצעד הראשון הוא לפנות לגורמי מקצוע בתחום כבר עכשיו, כדי שישמעו אותך ויעזרו לך להבין איך נכון לפעול . 
חשוב לדעת! במקרים של זוגיות פוגענית, אסור לקבל החלטות לבד ובטח שלא להיפרד מבן הזוג ללא ליווי מקצועי. 
חייך עלולים להיות בסכנה. הנה מה שאת צריכה לעשות:
חייגי בהקדם האפשרי ל- <a href="tel:188">למספר 118</a>
או למוקד<a href="tel:100"> 100</a> של המשטרה
אפשר גם לשלוח הודעה 24/7 למספר: 055-7000128

           

           
          
            <button type="button" class="btn btn-link sendBtn wingsBtn" onClick={() => sendMsg()}>בלחיצה כאן</button>
              תועברי למסך בו יחכה עבורך טקסט קצר אותו תוכלי לשלוח לאדם קרוב שאת סומכת
               (חבר/ה .קרוב/ת משפחה או כל אדם אחר שתבחרי) ,לבחירתךהטקסט ישלח
               .זכרי - יצירת קשר עם אדם נוסף יכולה להציל את חייך
            </p>
          </div>
          : <SendMsg msg={msg} />
      }
    </div>
  );
};
export default RedFlag;
