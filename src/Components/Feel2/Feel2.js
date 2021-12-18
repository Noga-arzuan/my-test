import React, { useState } from 'react';
import Feel3 from '../Feel3/Feel3';
import SecondStage from '../EndingStages/SecondStage ';
import CustomStepper from '../Stepper';
import {questions} from './questions2'


export default function Feel2() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 80) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='container'>
        {currentQuestion === 9 ? (
          <SecondStage />
        ) : showScore ? (
          <div className='score-section'>
            <Feel3 props />
          </div>
        ) : (
          <>
            <div className='question-section'>
              <CustomStepper stepNum={3} />

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
  );
}
