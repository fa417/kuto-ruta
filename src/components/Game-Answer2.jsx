import { useState } from 'react'
import { questions } from '../data/questions';


function GameAnswer2({ randomQuestion, setPage, setRandomQuestion, setCountIndex, setCountNumber }) {
  const goBack = () => {
    setPage('answer');
  };

  const goResult = () => {
    setPage('result');
  };

  const retry = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 20);
    setRandomQuestion(shuffled);
    setCountIndex(0);
    setCountNumber(0);
    setPage('question');
  };

  const goHome = () => {
    setPage('start');
  };


  return (
    <>

      <div className="game">

        <div className="game-area">

          <h3 className="page-title">答え合わせ</h3>

          <div className="answer-wrapper" id="answer-area2">
            {randomQuestion.slice(10, 20).map((q, index) => {
              const correct = q.answer.find(ans => ans.isCorrect)?.text;
              return (
                <div className="answer-block" key={index}>
                  <p className="count-number">第{index + 11}問</p>
                  <p className="question-text">{q.text}</p>
                  <p className="answer-correct">正解：{correct}</p>
                  <p className="answer-explanation">
                    <span className="label">解説</span>{q.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="game-links">
            <button className="return-page" onClick={goBack}>戻る</button>

            <button className="end" onClick={goResult}>結果発表を見る</button>

            <div className="game-links-row2">
              <button className="one-more" onClick={retry}>もう一回遊ぶ</button>
              <button className="home" onClick={goHome}>トップに戻る</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default GameAnswer2
