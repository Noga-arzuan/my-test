import React, { useState } from "react";
import Feel1 from "../../Components/Feel1/Feel1";
import FirstStage from "../../Components/EndingStages/FirstStage";
//import 'materialize-css/dist/css/materialize.min.css';
import CustomStepper from "../../Components/Stepper";
import { questions } from "./baseQuestions";

export default function Menu() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (score < 7) setCurrentQuestion(nextQuestion);
    else {
      setShowScore(true);
    }
  };

  return (
    <div className="main-container">
      {currentQuestion === 10 ? (
        <FirstStage />
      ) : showScore ? (
        <div className="score-section col s8 m4">
          <Feel1 />
        </div>
      ) : (
        <>
          <div className="question-section">
            <CustomStepper stepNum={1} />
            {questions[currentQuestion].questionText}
            <h1 className="safty"> אנא סמני את התשובה הנכונה ביותר עבורך</h1>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, key) => (
                  <button
                    key={key}
                    className="col s6 m3 wingsBtn"
                    onClick={() => {
                      handleAnswerOptionClick(answerOption.isCorrect);
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
