import React from "react";
import { Link } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";

function Home() {
  return (
    <div
    // style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="share1">
        <h6> הכנו עבורך שאלון קצר שינסה לענות לך על השאלה </h6>
        <h1 className="menue">האם אני נמצאת במערכת יחסים בריאה?</h1>
        {/* <h1 className="menu">שמחות שבאת</h1> */}

        <button className="wingsBtn">
          <Link to="Menu">בואי נתחיל!</Link>
        </button>
      </div>
      <div>
        שאלון הערכה עצמית זה הוא תוצר עבודת התנדבות של למעלה מעשרים עובדות
        סוציאליות ונשות טכנולוגיה, שמטרת מיגור תופעת האלימות במשפחה והצלת חיים
        קרובה לליבן. האתר לא שומר ולא עושה שימוש בשום מידע של משתמשות. שאלון זה
        נועד לתת לך כלי זמין להערכה ראשונית, וככזה הוא אמצעי למתן מידע כללי,
        ואינו מהווה ייעוץ אישי ו/או משפטי ו/או אחר או תחליף לייעוץ כאמור. אלימות
        במשפחה עלולה לסכן את גופך ואת נפשך ואת של אלו היקרים לך. אנו מפצירות בך
        לפנות לקבלת ייעוץ מקצועי המותאם לנסיבות האישיות שלך. הסתמכות על המידע
        המופיע באתר זה הנה על אחריות המשתמשת. תכני אתר זה מנוסחים בלשון נקבה, אך
        מיועדים לכל המינים. שימוש באתר זה מעיד על הסכמתך לתנאים אלו. אתר זה פותח
        במסגרת ההאקתון ע"ש מיכל סלה "Safe@Home"
      </div>
    </div>
  );
}

export default Home;
