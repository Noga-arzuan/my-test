import React from "react";
import homeImg from "./../../Images/home1.png";

function About() {
  return (
    <div className="main-container">
      <div className="score-section">
        {/* <h1 className="header"> פרויקט WINGS</h1> */}
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
          <h5>אתר זה פותח בהשראת השתתפות בהאקתון ע"ש מיכל סלה "Safe@Home"</h5>
        </p>
        <div className="about">
          <h6>להעמקת הידע שלך בנושא זוגיות בריאה היכנסי</h6>
        </div>
        <a
          className="contact"
          href="https://www.gov.il/he/Departments/General/molsa-118"
        >
          לאתר משרד הרווחה
        </a>
        <div>
          <img src={homeImg} className="homeImg" alt="super women" />
        </div>
      </div>
    </div>
  );
}
export default About;
