
import React, { useState } from 'react';
import Feel1 from "./Feel1";
import FirstStage from "./firstStage";
import 'materialize-css/dist/css/materialize.min.css';




export default function Menu() {
  
 
 

  const questions = [
      {
          questionText: 'אני מרגישה שאני נמצאת במערכת יחסים שבה אני יכולה להביע את עצמי ',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא ', isCorrect: true },

          ],
      },

      {

          questionText: 'אני מרגישה שאין לי זמן לעשות עוד דברים שאני אוהבת מלבד להיפגש עם בן זוגי ',
          answerOptions: [
              { answerText: 'כן', isCorrect: true },
              { answerText: 'לא ', isCorrect: false },

          ],
      },

      {
          questionText: 'אני מרגישה שבן זוגי תומך בי ובמעשים שלי',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא ', isCorrect: true },

          ],

      },

      {
          questionText: '      בן הזוג שלי לא  אוהב לשמוע מה שאני חושבת ',
          answerOptions: [
              { answerText: 'כן', isCorrect: true },
              { answerText: 'לא', isCorrect: false },

          ],
      },


      {
          questionText:' בן הזוג שלי מפרגן לי שיש לי פעילויות אחרות שלא קשורות למערכת היחסים שלנו',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא ', isCorrect: true },

          ],
      },


      {
          questionText: 'בן הזוג שלי שולח לי המון הודעות במשך היום ',
          answerOptions: [
              { answerText: 'כן', isCorrect: true },
              { answerText: 'לא ', isCorrect: false },

          ],
      },

      {
          questionText:' לי ולבן זוגי אין כמעט ריבים ',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא ', isCorrect: true },

          ],
      },

      {
          questionText: '      בן זוגי לרוב מודה כשהוא טועה ',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא כן', isCorrect: true },

          ],
      },

      {
          questionText: ' בן זוגי מדבר בלי בעיה על דברים שגורמים לו להראות לא טוב',
          answerOptions: [
              { answerText: 'כן', isCorrect: false },
              { answerText: 'לא ', isCorrect: true },

          ],
      },
  ];
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [toggle,setToggle]=useState(false);
  // const[formKey,setFormKey]=useState(5);
    const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
  if (score<3) {
    setCurrentQuestion(nextQuestion); 
    
  } else {
    setShowScore(true);
  }

 
};




  return (
    
 <div class="container">
    <div className='app' >
    

   {currentQuestion>5?<FirstStage/>:showScore}
 
      {showScore ? (
        <div className='score-section' class="col s8 m4">
         <Feel1/>
        </div>
      ) : (
        <>
          <div className='question-section' class="row col s12 truncate center-align ">
          
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length} 
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
             <button class="col s6 m3"  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              

            ))}
          </div>
        </>
      )}
      
    </div>
    </div>
  );
  }