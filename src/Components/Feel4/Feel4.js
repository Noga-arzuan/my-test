import React, { useState } from "react";
import RedFlag from "../EndingStages/RedFlag";
import CustomStepper from "../Stepper";
import { questions } from "./questions4";
import homeImg from "./../../Images/home1.png";
import standImg from "./../../Images/stand.png";

export default function Feel4() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 100);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 200) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="main-container">
      {currentQuestion === 5 ? (
        <RedFlag />
      ) : showScore ? (
        <div className="score-section">
          <RedFlag />
        </div>
      ) : (
        <div className="row">
          <div className={["column", "right", "change"]}>
            <img src={homeImg} className="homeImg" alt="women in a chair" />
          </div>
          <div className={["column center"]}>
            <CustomStepper stepNum={5} />
            <h1 className="question-section">
              {questions[currentQuestion].questionText}
            </h1>
            <h1 className="safty"> אנא לחצי על את התשובה הנכונה ביותר עבורך</h1>

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

          <div className={[]}>
            <img
              src={standImg}
              className={["homeImg", "column", "left"]}
              alt="women stand"
            />
          </div>
        </div>
      )}
    </div>
  );
}
