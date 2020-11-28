

    import React, { useState } from 'react';
    import Feel3 from "./Feel3";

    
    export default function Feel2() {
      
    
    
    
      const questions = [
          {
              questionText:'אני מקבלת מבן הזוג שלי המון הודעות וטלפונים בצורה מוגזמת/אובססיבית',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי חושב שאני משקיעה בעצמי יותר מידי (בעבודה, בלבוש, בלימודים, בבילויים)',
    
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי גורם לי להרגיש שאני יכולה לעשות הכל בצורה נכונה',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: false },
                  { answerText: 'לא נכון', isCorrect: true },
    
              ],
    
          },
    
          {
              questionText:'בן הזוג שלי לא מזלזל במה שאני מרגישה',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: false },
                  { answerText: 'לא נכון', isCorrect: true },
    
              ],
          },
    
    
          {
              questionText:'אני מרגישה שאני בן אדם פחות חופשי ממה שהרגשתי לפני היחסים',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
    
          {
              questionText:'אני מרגישה שיש חשיבות לדעה שלי, ולרוב בן זוגי ואני מחליטים החלטות משותפות ',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: false },
                  { answerText: 'לא נכון', isCorrect: true },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי מעליב אותי',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי יורד עליי או גורם לי להרגיש קטנה',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
    
          {
              questionText:'בן הזוג שלי גורם לי להרגיש שאני לא יכולה לעשות שום דבר בצורה נכונה',
              answerOptions: [
                  { answerText: 'נכון', isCorrect: true },
                  { answerText: 'לא נכון', isCorrect: false },
    
              ],
          },
          {
              questionText:'בן זוגי אף פעם לא מעיר לי על  צורת הלבוש שלי ',
            answerOptions: [
                { answerText: 'נכון', isCorrect: false },
                { answerText: 'לא נכון', isCorrect: true },
  
            ],
        },
        {
            questionText:'בן הזוג שלי בודק הרבה פעמים עם מי אני נפגשת או מדברת',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
        {
            questionText:'בן זוגי מסתכל על הודעות ומיילים שלי, ולא  חוקר אותי לגביהם ',
            answerOptions: [
                { answerText: 'נכון', isCorrect: false },
                { answerText: 'לא נכון', isCorrect: true },
  
            ],
        },
        {
            questionText:'בן הזוג מאוכזב ולא מרוצה ממני לעתים קרובות',
            answerOptions: [
                { answerText: 'נכון', isCorrect: true },
                { answerText: 'לא נכון', isCorrect: false },
  
            ],
        },
      ];
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
     
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score +10);
      }
    
      const nextQuestion = currentQuestion + 1;
      if (score<40) {
        setCurrentQuestion(nextQuestion); 
      } else {
        setShowScore(true);
      }
    };
    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
           <Feel3/>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
    }
		