import React from "react";
import { Link } from "react-router-dom";
import homeImg from "./../../Images/home1.png";
import standImg from "./../../Images/stand.png";

function Home() {
  return (
    <div className="main-text">
      <h1> הכנו בשבילך שאלון קצר שינסה לענות לך בזמן אמת </h1>
      <h2>האם מערכת היחסים שאת נמצאת בה בריאה?</h2>
      <h1>בסיום השאלון יוצג לך דף תוצאה לפי התשובות שבחרת </h1>

      <button className="wingsBtn">
        <Link to="Menu">בואי נתחיל!</Link>
      </button>
      {/* </div> */}

      <div>
        <p className="about">
          שאלון הערכה עצמית זה הוא תוצר עבודת התנדבות של למעלה מעשרים עובדות
          סוציאליות ונשות ואנשי טכנולוגיה, שמטרת מיגור תופעת האלימות במשפחה
          והצלת חיים קרובים לליבם. האתר לא שומר ולא עושה שימוש בשום מידע של
          משתמשות. שאלון זה נועד לתת לך כלי זמין להערכה ראשונית, וככזה הוא אמצעי
          למתן מידע כללי, ואינו מהווה ייעוץ אישי ו/או משפטי ו/או אחר או תחליף
          לייעוץ כאמור. <br></br>
          אלימות במשפחה עלולה לסכן את גופך ואת נפשך ואת של אלו היקרים לך. אנו
          מפצירות בך לפנות לקבלת ייעוץ מקצועי המותאם לנסיבות האישיות שלך.
          <br></br>
          הסתמכות על המידע המופיע באתר זה הנה על אחריות המשתמשת. תכני אתר זה
          מנוסחים בלשון נקבה, אך מיועדים לכל המינים. שימוש באתר זה מעיד על
          הסכמתך לתנאים אלו.
        </p>
        <h6 className="footer">
          אתר זה פותח בהשראת השתתפות בהאקתון ע"ש מיכל סלה
        </h6>
      </div>
      <div
        className="
      credit"
      >
        <h6 className="footer">Copyright © 2021 Wings. All rights reserved</h6>
        <h6 className="footer">
          <a className="footer" href="mailto:wingsforyou2022@gmail.com">
            wingsforyou2022@gmail
          </a>
        </h6>
        <h6 className="footer">
          <a style={{ fontSize: 5 }} href="https://www.freepik.com">
            designed by Freepik - Freepik.com
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Home;
