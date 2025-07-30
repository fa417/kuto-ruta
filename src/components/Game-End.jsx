import { useState } from 'react'
import { questions } from '../data/questions';


function GameEnd({ countNumber, setPage, setCountIndex, setCountNumber, setRandomQuestion }) {
  const total = 2;
  const notEarned = total - countNumber;

  const retry = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 2);
    
    setRandomQuestion(shuffled);
    setCountIndex(0);
    setCountNumber(0);
    setPage('question');
  };

  const goHome = () => {
    setCountIndex(0);
    setCountNumber(0);
    setRandomQuestion([]);
    setPage('start');
  };

  const goAnswer = () => {
    setPage('answer');
  };

  return (
    <>

      <div className="game">

        <div className="game-area">

          <h3 className="page-title">結果発表</h3>

          <div className="cards-reslut">

            <div className="acquisition-inner">

              <h4 className="acquisition-title">獲得枚数</h4>
              <p className="acquisition-cards">{countNumber}枚</p>

            </div>

            <div className="not-earned-inner">

              <h5 className="not-earned-title">取り逃し枚数</h5>
              <p className="not-earned-cards">{notEarned}枚</p>

            </div>
          </div>

          <div className="result-all-banner">
            <span style={{ fontSize: '16px' }}>20枚</span>/{countNumber}枚獲得
          </div>

          <div className="game-links">
            <button className="answer" onClick={goAnswer}>答え合わせを見る</button>

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

export default GameEnd
