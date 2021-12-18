import React, { useState } from "react";
import SendMsg from "../SendMsg";

const FirstStage = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg = 'יקר/ה, שולחת לך את ההודעה הזאת כי אני מתלבטת בנוגע לתחום ממש חשוב בחיים שלי. אני מבולבלת ולא בטוחה מה אני רוצה לעשות עם זה ואשמח להתייעץ איתך בנושא אבל ממש חשוב לי שזה יישאר בנינו. תוכלי שנשב השבוע ונדבר במקום נייטרלי?'

  const sendMsg = () => {
    setShowSummery(false);
  }

  return (
    <div className="about">
      {/* <h1 className="header">לפרוש כנפיים ולעוף</h1> */}
      {
        showSummery ?
          <p className="sumery">
                  <br></br>      הכל בסדר :)  <br></br>  עושה רושם שאת במערכת יחסים בריאה  <br></br>  
אבל אם יש לך תחושה שחברה או מכרה שלך נמצאת בזוגיות שפוגעת בה - 
את מוזמנת ללחוץ על כפתור השיתוף  <br></br>  


        <br></br>    
להעמקת הידע שלך בנושא זוגיות בריאה היכנסי 
            <a href='https://govextra.gov.il/molsa/domesticviolence/home/home/#CallCenter'> לאתר משרד הרווחה
        </a>

          </p>
          : <SendMsg msg={msg} />


      }
    </div>
  );
};
export default FirstStage;

