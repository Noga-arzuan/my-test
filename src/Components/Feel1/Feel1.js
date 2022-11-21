import React, { useState } from "react";
import Feel2 from "../Feel2/Feel2";
import SecondStage from "../EndingStages/SecondStage ";
import CustomStepper from "../Stepper";
import { questions } from "./questions";
import homeImg from "./../../Images/home1.png";
import standImg from "./../../Images/stand.png";

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
    <div className="main-container">
      {currentQuestion === 8 ? (
        <SecondStage />
      ) : showScore ? (
        <div className="score-section col s8 m4">
          {props.handleNext}
          <Feel2 props />
        </div>
      ) : (
        <div className="row">
          <div className={["column", "right", "change"]}>
            <img src={homeImg} className="homeImg" alt="women in a chair" />
          </div>
          <div className={["column center"]}>
            <CustomStepper stepNum={2} />
            <h1 className="question-section">
              {questions[currentQuestion].questionText}
            </h1>
            <h1 className="safty"> אנא לחצי על התשובה הנכונה ביותר עבורך</h1>

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

          <div className={["column", "left"]}>
            <img src={standImg} className="standImg" alt="women stand" />
          </div>
        </div>
      )}
    </div>
  );
}
