import React from "react";
import homeImg from "./../../Images/home1.png";

function About() {
  return (
    <div className="main-container">
      {/* <div className="score-section"> */}
      {/* <h1 className="header"> פרויקט WINGS</h1> */}
      <p className="about">
        שאלון הערכה עצמית זה הוא תוצר עבודת התנדבות של למעלה מעשרים עובדות
        סוציאליות ונשות ואנשי טכנולוגיה, שמטרת מיגור תופעת האלימות במשפחה והצלת
        חיים קרובים לליבם. האתר לא שומר ולא עושה שימוש בשום מידע של משתמשות.
        שאלון זה נועד לתת לך כלי זמין להערכה ראשונית, וככזה הוא אמצעי למתן מידע
        כללי, ואינו מהווה ייעוץ אישי ו/או משפטי ו/או אחר או תחליף לייעוץ כאמור.
        אלימות במשפחה עלולה לסכן את גופך ואת נפשך ואת של אלו היקרים לך. אנו
        מפצירות בך לפנות לקבלת ייעוץ מקצועי המותאם לנסיבות האישיות שלך. הסתמכות
        על המידע המופיע באתר זה הנה על אחריות המשתמשת. תכני אתר זה מנוסחים בלשון
        נקבה, אך מיועדים לכל המינים. שימוש באתר זה מעיד על הסכמתך לתנאים אלו.
        אתר זה פותח בהשראת השתתפות בהאקתון ע"ש מיכל סלה
      </p>

      <h6 className="about">להעמקת הידע שלך בנושא זוגיות בריאה היכנסי</h6>

      <a
        className="contact"
        href="https://www.gov.il/he/Departments/General/molsa-118"
      >
        לאתר משרד הרווחה
      </a>
      <div style={{ margin: "40px" }}>
        <h6 className="footer">
          ליצירת קשר:
          <a className="footer" href="mailto:wingsforyou2022@gmail.com">
            wingsforyou2022@gmail
          </a>
        </h6>
      </div>
      <div>
        <img src={homeImg} className="homeImg" alt="super women" />
      </div>
      {/* </div> */}
    </div>
  );
}
export default About;
