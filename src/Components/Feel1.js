

import React, { useState } from 'react';
import Feel2 from "./Feel2";
  

export default function Feel1() {
  



  const questions = [
      {
          questionText: 'אני מתביישת לספר לאנשים קרובים אלי מה באמת קורה ביני ובין בן זוגי',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {

          questionText: 'בן הזוג שלי מקנא לי המון ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {
        questionText: '  בן זוגי משתגע כשמסתכלים עליי ברחוב ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],

      },

      {
        questionText:'בן הזוג שלי דורש ממני דיווח על ההוצאות הכספיות שלי',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },


      {
        questionText:'גילית שבן זוגך חיטט לך בטלפון (וואטסאפ/ באינסטגרם/ בפייסבוק/ מייל/ ביקש ממך סיסמאות)?',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },


      {
        questionText:'בן זוגי אף פעם לא  ביקש ממני  למחוק תמונות שהעליתי לרשתות החברתיות',
          answerOptions: [
              { answerText: ' לא נכון ', isCorrect: true },
              { answerText: 'נכון', isCorrect: false },

          ],
      },

      {
        questionText:'בן הזוג שלי מתעקש לבוא איתי כשאני נפגשת עם חברות, ידידים או המשפחה הקרובה שלי',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {
          questionText: 'בן הזוג שלי מונע ממני לקיים מנהגים דתיים (לשים כיסוי ראש, להדליק נרות שבת, ללכת למקווה)  ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {
        questionText:'כשאת מסתכלת בעיניים של בן זוגך את מזהה מבטים רגועים ונעימים',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      },
      {
        questionText:'מאז שאני במערכת יחסים הזאת, לעיתים קרובות אני לא בטוחה בעצמי ומרגישה חוסר ביטחון עצמי',

          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect:false },

          ],
      },
      {
        questionText:'קשה לא להסכים עם בן הזוג שלי כי הוא מתרגז אם זה קורה',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      }, {
        questionText:'אני מרגישה שאני יכולה להצליח בהרבה  דברים בלי בן הזוג שלי ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      }, {
        questionText:'קשה לא להסכים עם בן הזוג שלי כי הוא מתרגז אם זה קורה',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      }, {
        questionText:'אני מרגישה שאני יכולה להצליח בהרבה  דברים בלי בן הזוג שלי ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      }, {
        questionText:'בן הזוג מפרגן לי על ההצלחות שלי',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      }, {
        questionText:'בן הזוג שלי חושד בי כל הזמן שאני לא נאמנה לו',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

 
const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 5);
  }

  const nextQuestion = currentQuestion + 1;
  if (score<30) {
    setCurrentQuestion(nextQuestion); 
  } else {
    setShowScore(true);
  }
};
return (
  <div className='app'>
    {showScore ? (
      <div className='score-section'>
       <Feel2/>
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
      </>
    )}
  </div>
);
}