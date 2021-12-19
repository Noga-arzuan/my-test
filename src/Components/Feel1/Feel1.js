import React, { useState } from 'react';
import Feel2 from '../Feel2/Feel2';
import SecondStage from '../EndingStages/SecondStage ';
import CustomStepper from '../Stepper';
import { questions } from './questions'

export default function Feel1(props) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 20) {
      setCurrentQuestion(nextQuestion);
    } else {

      setShowScore(true);
    }
  };
  return (
    <div className='container'>

      {currentQuestion === 8 ? (
        <SecondStage />
      ) : showScore ? (
        <div className='score-section'>
          {props.handleNext}
          <Feel2 props />
        </div>
      ) : (
        <>
          <div className='question-section'>
            <CustomStepper stepNum={2} />
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
