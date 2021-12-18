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
              <br></br>את בהחלט רואה סימני אזהרה רבים וככל העולה מהתשובות את נמצאת בזוגיות פוגעת. חשוב מאוד שתתיחסי לנורות האדומות האלה. את רואה ומרגישה נכון, במערכת יחסים בריאה לא יעלו סימני האזהרה האלה. אנחנו ממליצות לך לפנות עוד היום להתייעץ עם גורמי מקצוע בתחום, לפני שיהיה מאוחר! 
אל תנסי לפתור לבד את העיניין!

              <br></br> הצעד הראשון הוא לפנות לגורמי מקצוע בתחום שקודם כל ישמעו אותך ויעזרו לך להבין איך נכון לפעול. חשוב לדעת במקרים של זוגיות פוגעת אסור להחליט החלטות לבד ובטח שלא להיפרד לבד, זה יכול לסכן את חייך! 
            </p>

            <p className=' flex-container'>
            </p>

            <p className='about'>
            </p>
            <p className=' flex-container'>
              את יכולה לבחור מה הכי נכון לך מהאפשרויות הבאות{' '}
חייגי בהקדם האפשרי ל- <b><a href="tel:188">למספר 118</a> לעובדות סוציאליות שמתמחות בתחום 
או למוקד <b><a href="tel:100">למספר 100</a> של המשטרה
אפשר גם לשלוח הודעה 24/7 למספר: 055-7000128

            </p>
            <button type="button" class="btn btn-link sendBtn wingsBtn" onClick={() => sendMsg()}>בלחיצה כאן</button>
            <p className=' flex-container'>
              תועברי למסך בו יחכה עבורך טקסט קצר אותו תוכלי לשלוח לאדם קרוב שאת סומכת
              עליו (חבר/ה .קרוב/ת משפחה או כל אדם אחר שתבחרי) ,לבחירתך SMS הטקסט ישלח
              במייל או בהודעת .זכרי - יצירת קשר עם אדם נוסף יכולה להציל את חייך
            </p>
          </div>
          : <SendMsg msg={msg} />
      }
    </div>
  );
};
export default RedFlag;
