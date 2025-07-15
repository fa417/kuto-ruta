import { useState, useMemo } from 'react'


function GameQuestion({ randomQuestion, countIndex, setCountIndex, countNumber, setCountNumber, setPage }) {
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showNext, setShowNext] = useState(false);

    const currentQuestion = randomQuestion[countIndex];

    const handleAnswer = (isCorrectAns) => {
        console.log('クリックされた', isCorrectAns);
        setIsCorrect(isCorrectAns);
        setShowResult(true);
        console.log('showResult →', true);

        if (isCorrectAns) {
            setCountNumber(prev => prev + 1);
        }

        if (countIndex < randomQuestion.length - 1) {
            setShowNext(true);
        }
    };

    const shuffledAnswers = useMemo(() => {
        return [...currentQuestion.answer].sort(() => Math.random() - 0.5);
    }, [currentQuestion]);

    const nextQuestion = () => {
        setCountIndex(prev => prev + 1);
        setIsCorrect(null);
        setShowResult(false);
        setShowNext(false);
    };

    const goToResult = () => {
        setPage('result');
    };



    return (
        <>

            <div className="game">

                <div className="game-area">

                    <div className="question-inner">
                        <h3 className="question-title">第{countIndex + 1}問</h3>
                        <p className="text">{currentQuestion.text}</p>
                    </div>

                    <div className="cards">

                        {shuffledAnswers.map((choice, index) => {
                            const randomRotation = Math.floor(Math.random() * 30 - 15);

                            return (
                                <div
                                    key={index}
                                    className="card"
                                    onClick={() => handleAnswer(choice.isCorrect)}
                                    style={{
                                        pointerEvents: showResult ? 'none' : 'auto',
                                        transform: `rotate(${randomRotation}deg)`
                                    }}
                                >
                                    {choice.text}
                                </div>
                            );
                        })}

                    </div>
                </div>

                {showResult && (
                    <div className="banners-area">
                        <div className="action-banners">
                            {isCorrect === true && (
                                <div className="result-correct-banner">大正解！</div>
                            )}
                            {isCorrect === false && (
                                <div className="result-incorrect-banner">失敗...</div>
                            )}

                            {showNext ? (
                                <button className="result-next-banner" onClick={nextQuestion}>次の問題に進む</button>
                            ) : (
                                <>
                                    <p className="end-coment">\\ ここまでで終了 //</p>
                                    <button className="showresult-button" onClick={goToResult}>結果を見る</button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <div className="get-cards-count">
                    <p className="get-cards-title">獲得枚数</p>
                    <p className="number">{countNumber}枚</p>
                </div>

            </div>

        </>
    )
}

export default GameQuestion
