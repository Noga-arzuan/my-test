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
                      
    עושה רושם שיש התנהגויות במערכת היחסים הזוגית שפוגעות בך, אך לא בהכרח מדובר בסימני אזהרה.
    חשוב לדבר עם בן הזוג ולהבהיר לו מה מתאים לך ומה צריך להשתנות. תשמעי גם את הצד שלו, כי תקשורת 
טובה היא אבן היסוד של מערכת יחסים בריאה. כמו כן מומלץ ללמוד עוד על ניהול זוגיות ומהם הסימנים של זוגיות פוגענית:.   


        <br></br>    
להעמקת הידע שלך בנושא זוגיות בריאה היכנסי 
            <a href='https://govextra.gov.il/molsa/domesticviolence/home/home/#CallCenter'> לאתר משרד הרווחה
        </a>
בכל זאת  חוששת שאת במערכת יחסים פוגענית?
    כאן מחכה לך  שליחת הודעה לחבר/ה קרוב/ה

            <button type="button" class="btn btn-link sendBtn wingsBtn" onClick={() => sendMsg()}>שליחת הודעה לחבר/ה קרוב/ה</button>
           
          </p>
          : <SendMsg msg={msg} />


      }
    </div>
  );
};
export default SecondStage;
