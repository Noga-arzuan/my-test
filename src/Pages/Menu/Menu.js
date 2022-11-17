import React, { useState, useEffect } from "react";
import Feel1 from "../../Components/Feel1/Feel1";
import FirstStage from "../../Components/EndingStages/FirstStage";
//import 'materialize-css/dist/css/materialize.min.css';
import CustomStepper from "../../Components/Stepper";
import { questions } from "./baseQuestions";
import homeImg from "./../../Images/home1.png";
import standImg from "./../../Images/stand.png";

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
        <div className="row">
          <div className={["column", "right", "change"]}>
            <img src={homeImg} className="homeImg" alt="women in a chair" />
          </div>
          <div className={["column center"]}>
            <CustomStepper stepNum={1} />
            <h1 className="question-section">
              {questions[currentQuestion].questionText}
            </h1>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, key) => (
                  <button
                    icon={"fa-solid fa-check"}
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
              <h1 className="safty"> אנא לחצי על התשובה הנכונה ביותר עבורך</h1>
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
