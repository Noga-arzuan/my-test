
export const questions = [
    {
      questionText:
        'אני מרגישה שאני נמצאת במערכת יחסים שבה אני יכולה להביע את עצמי ',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: 'אני מרגישה שאין לי זמן לעשות  דברים שאני אוהבת  לעשות  ',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },

    {
      questionText: 'אני מרגישה שבן זוגי תומך בי ובמעשים שלי',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: '      בן הזוג שלי לא  אוהב לשמוע מה שאני חושבת ',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא', isCorrect: false },
      ],
    },

    {
      questionText:
        ' בן זוגי  מפרגן  לי שיש לי פעילויות  שלא קשורות למערכת היחסים שלנו',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: 'בן הזוג שלי שולח לי המון הודעות במשך היום ',
      answerOptions: [
        { answerText: 'כן', isCorrect: true },
        { answerText: 'לא ', isCorrect: false },
      ],
    },

    {
      questionText: ' לי ולבן זוגי אין כמעט ריבים ',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },

    {
      questionText: '      בן זוגי לרוב מודה כשהוא טועה ',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא', isCorrect: true },
      ],
    },

    {
      questionText: ' בן זוגי מדבר בלי בעיה על דברים שגורמים לו להראות לא טוב',
      answerOptions: [
        { answerText: 'כן', isCorrect: false },
        { answerText: 'לא ', isCorrect: true },
      ],
    },
<<<<<<< HEAD:src/Components/Menu.js
  ];

  return (
    <div className='main-container'>
        {currentQuestion === 7 ? (
          <FirstStage   /> 
        ) : showScore ? (
          <div className='score-section col s8 m4'>
            <Feel1 />
          </div>
        ) : (
          <>
            <div className='question-section'>
              <CustomStepper stepNum={1}/>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption,key) => (
                <button
                key={key}
                  className='col s6 m3'
                  onClick={() =>{
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
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
=======
  ];
>>>>>>> 709c06e37267c69bc60ce7c00704173b38201106:src/Pages/Menu/baseQuestions.js
