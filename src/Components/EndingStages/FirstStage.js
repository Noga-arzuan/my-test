import React, { useState } from "react";
import SendMsg from "../SendMsg";
import homeImg from "./../../Images/home1.png";

const FirstStage = () => {
  const [showSummery, setShowSummery] = useState(true);
  const msg =
    "יקר/ה, שולחת לך את ההודעה הזאת כי אני מתלבטת בנוגע לתחום ממש חשוב בחיים שלי. אני מבולבלת ולא בטוחה מה אני רוצה לעשות עם זה ואשמח להתייעץ איתך בנושא אבל ממש חשוב לי שזה יישאר בנינו. תוכלי שנשב השבוע ונדבר במקום נייטרלי?";

  const sendMsg = () => {
    setShowSummery(false);
  };

  return (
    <div className={["item_text_wrapper", "border"]}>
      <div className={["sumery"]}>
        {/* <h1 className="header">לפרוש כנפיים ולעוף</h1> */}
        {showSummery ? (
          <h1 className="only">
            <br></br> הכל בסדר :) <br></br> עושה רושם שאת במערכת יחסים בריאה אבל
            אם יש לך תחושה שחברה או מכרה שלך נמצאת בזוגיות שפוגעת בה - את מוזמנת
            ללחוץ על כפתור השיתוף <br></br>
            להעמקת הידע שלך בנושא זוגיות בריאה היכנסי
            <a href="https://www.gov.il/he/Departments/General/molsa-118">
              {" "}
              לאתר משרד הרווחה
            </a>
          </h1>
        ) : (
          <SendMsg msg={msg} />
        )}
        <div className={["column", "right", "change"]}>
          <img src={homeImg} className="homeImg" alt="women in a chair" />
        </div>
      </div>
    </div>
  );
};
export default FirstStage;
