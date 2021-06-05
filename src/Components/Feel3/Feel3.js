import React, { useState } from 'react';
import Feel4 from '../Feel4/Feel4';
import ThirdStage from '../EndingStages/ThirdStage';
import CustomStepper from '../Stepper';
import { questions } from './questions3'


export default function Feel3() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 50);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 600) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='container'>
      <div className='app'>
        {currentQuestion === 7 ? (
          <ThirdStage />
        ) : showScore ? (
          <div className='score-section'>
            <Feel4 />
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
                <button
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
