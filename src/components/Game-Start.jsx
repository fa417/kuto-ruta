import { useState, useEffect } from 'react'
import { questions } from '../data/questions';


function GameStart({ setPage, setRandomQuestion, setCountIndex, setCountNumber }) {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const from = params.get('from');
        const isFromPortfolio = from === 'portfolio';
        const isSP = window.matchMedia('(max-width:768px)').matches;

        const backLink = document.getElementById('back-home');
        if (backLink && isFromPortfolio && isSP) {
            backLink.style.display = 'block';
        }
    }, []);

    const startBtn = () => {
        const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 2);
        setRandomQuestion(shuffled);
        setCountIndex(0);
        setCountNumber(0);
        setPage('question');
    };

    return (
        <>
            <div className="game">
                <div className="title-area">
                    <p>Reactの学習カルタゲーム</p>
                    <h1 className="game-title">くとルタ</h1>
                </div>

                <div className="game-detail">
                    <h2 className="category-title">遊び方</h2>
                    <p>
                        表示されたヒント（お題）に当てはまる「くとルタ札」をタッチしよう！<br className="sp-br" />
                        正解すると札がゲットできるよ！<br className="sp-br" />
                        すべての札を集めるとクリア！
                    </p>
                </div>

                <button onClick={startBtn} className="start">スタート</button>

                <footer>
                    <p>&copy; くとルタ制作局</p>
                </footer>
            </div>
            <a href="https://fuko-portfolio.vercel.app/html/java-ruta.html" id="back-home" style={{ display: 'none' }}>←</a >
        </>
    )
}

export default GameStart
