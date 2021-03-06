import React, { useState } from "react";
import SendMsg from "../SendMsg";

const SecondStage = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = 'יקר/ה, שולחת לך את ההודעה הזאת כי אני מתלבטת בנוגע לתחום ממש חשוב בחיים שלי. אני מבולבלת ולא בטוחה מה אני רוצה לעשות עם זה ואשמח להתייעץ איתך בנושא אבל ממש חשוב לי שזה יישאר בנינו. תוכלי שנשב השבוע ונדבר במקום נייטרלי?'

  const sendMsg = () => {
    setShowSummery(false);
  }

  return (
    <div className="about">
      <h1 className="header">לפרוש כנפיים ולעוף</h1>
      {
        showSummery ?
          <p className="sumery">
            יתכן שתבחיני בכמה התנהגויות במערכת היחסים הזוגית שלך שאינם בריאים, אבל
            זה לא בהכרח אומר שהם סימני אזהרה. זה עדיין רעיון טוב לפקוח עין ולוודא
            שלא יתפתחו דפוסים שאינם בריאים. הדבר הטוב ביותר לעשות הוא לדבר עם בן
            זוגך וליידע אותו מה מתאים לך במערכת הזוגית ומה היית רוצה שישתנה. כדאי
            שתעודדי גם את בן זוגך לשתף אותך באותה דרך. זכרי, תקשורת חשובה תמיד
            בבניית מערכת יחסים בריאה. כדאי גם לקבל מידע כיצד לנהל זוגיות בריאה ומהם
            הסימנים של התנהגות זוגית לא בריאה. היינו ממליצות לך לבחור מה נכון לך
            מהאפשרויות הבאות:<br />
            - קיימים בקהילה מענים לכל שאלה לגבי זוגיות בריאה ומשפחה
            שתוכלי להיכנס אליהם בכל עת.<br />
            - בלחיצה על הקישור הבא תועברי למסך בו יחכה
            עבורך מכתב קצר אותו תוכלי לשלוח לאדם קרוב שאת סומכת עליו (חבר/ה קרוב/ה,
            קרוב/ת משפחה או כל אדם אחר שתבחרי).
            <br />
            <button type="button" class="btn btn-link sendBtn wingsBtn" onClick={() => sendMsg()}>שליחת הודעה לאדם קרוב</button>
            <br />
            <b>זכרי: </b>
            יצירת קשר עם אדם מחוץ למערכת היחסים יכולה להציל את
            חייך. <br /><br />

            אם אינך רוצה לפנות למישהו שאת מכירה ורוצה להישאר אנונימית, את
            יכולה להתקשר עכשיו למספר 118 או לשלוח הודעה למספר טלפון:<br />
            055-7000128,
            24 שעות ביממה. במוקד יושבים אנשי מקצוע <br />שיוכלו לייעץ לך.
            <br /><br />

          </p>
          : <SendMsg msg={msg} />


      }
    </div>
  );
};
export default SecondStage;
