import React, { useState } from 'react';
import RedFlag from '../EndingStages/RedFlag';
import CustomStepper from '../Stepper';
import {questions} from './questions4'

export default function Feel4() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 100);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 300) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='container'>
      <div className='app'>
        {currentQuestion === 5 ? (
          <RedFlag />
        ) : showScore ? (
          <div className='score-section'>
            <RedFlag />
          </div>
        ) : (
          <>
            <div className='question-section'>
              <CustomStepper stepNum={4} />
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, key) => (

                <button className="wingsBtn"
                  key={key}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
