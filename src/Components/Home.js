

import React, { useState } from 'react';
import Feel1 from "./Feel1";
  

export default function Home() {
  



  const questions = [
      {
          questionText: 'אני מרגישה שאני נמצאת במערכת יחסים שבה אני יכולה להביע את עצמי ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      },

      {

          questionText: 'אני מרגישה שאין לי זמן לעשות עוד דברים שאני אוהבת מלבד להיפגש עם בן זוגי ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {
          questionText: 'אני מרגישה שבן זוגי תומך בי ובמעשים שלי',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],

      },

      {
          questionText: 'בן הזוג שלי לא  אוהב לשמוע מה שאני חושבת ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },


      {
          questionText: 'בן הזוג שלי לא  מפרגן לי שיש לי פעילויות אחרות שלא קשורות למערכת היחסים שלנו ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },


      {
          questionText: 'בן הזוג שלי שולח לי המון הודעות במשך היום ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: true },
              { answerText: 'לא נכון', isCorrect: false },

          ],
      },

      {
          questionText: 'לי ולבן זוגי אין כמעט ריבי ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      },

      {
          questionText: ' בן זוגי לרוב מודה כשהוא טועה ',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      },

      {
          questionText: ' בן זוגי מדבר בלי בעיה על דברים שגורמים לו להראות לא טוב',
          answerOptions: [
              { answerText: 'נכון', isCorrect: false },
              { answerText: 'לא נכון', isCorrect: true },

          ],
      },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

 
const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (score<2) {
    setCurrentQuestion(nextQuestion); 
  } else {
    setShowScore(true);
  }
};
return (
  <div className="card">
    {showScore ? (
      <div className='score-section'>
       <Feel1/>
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