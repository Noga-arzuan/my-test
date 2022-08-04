import React, { useState } from "react";
import Feel4 from "../Feel4/Feel4";
import ThirdStage from "../EndingStages/ThirdStage";
import CustomStepper from "../Stepper";
import { questions } from "./questions3";

export default function Feel3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 4) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="container">
      {currentQuestion === 10 ? (
        <ThirdStage />
      ) : showScore ? (
        <div className="score-section">
          <Feel4 />
        </div>
      ) : (
        <>
          <div className="question-section">
            <CustomStepper stepNum={4} />

            <div className="question-count">
              {/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, key) => (
                <button
                  className="wingsBtn"
                  key={key}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
