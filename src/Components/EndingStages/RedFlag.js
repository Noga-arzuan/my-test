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
              <br></br>
              נראה שאת רואה כמה סימני אזהרה של קשר זוגי פוגעני
              <br></br> אל תתעלמי מהדגלים האדומים האלה
              <br></br>משהו שמתחיל בקטן יכול להחמיר עם הזמן
            </p>

            <p className=' flex-container'>
              <br></br>שום מערכת יחסים אינה מושלמת, היא דורשת עבודה אך במערכת יחסים
              בריאה לא תמצאי התנהגויות פוגעות
            </p>

            <p className='about'>
              <br></br>הצעד הראשון הוא לשוחח עם אדם אחר מחוץ למערכת היחסים ולשתף במה
              שעובר עלייך את לא צריכה להיות לבד, אנחנו כאן כדי לעזור לך
            </p>
            <p className=' flex-container'>
              את יכולה לבחור מה הכי נכון לך מהאפשרויות הבאות{' '}
            </p>
            <button type="button" class="btn btn-link sendBtn wingsBtn" onClick={() => sendMsg()}>בלחיצה כאן</button>
            <p className=' flex-container'>
              תועברי למסך בו יחכה עבורך טקסט קצר אותו תוכלי לשלוח לאדם קרוב שאת סומכת
              עליו (חבר/ה .קרוב/ת משפחה או כל אדם אחר שתבחרי) ,לבחירתך SMS הטקסט ישלח
              במייל או בהודעת .זכרי - יצירת קשר עם אדם נוסף יכולה להציל את חייך
              שיחת חינם <b><a href="tel:188">למספר 118</a></b> <br />  להעדפתך, את יכולה להתקשר
              118 או לשלוח הודעה .ל- 055-7000128, 24 שעות
              ביממה .במוקד יושבים אנשי מקצוע שיוכלו לייעץ לך{' '}
            </p>
          </div>
          : <SendMsg msg={msg} />
      }
    </div>
  );
};
export default RedFlag;
