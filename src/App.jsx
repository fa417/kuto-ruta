import { useState } from 'react'
import GameStart from './components/Game-Start';
import GameQuestion from './components/Game-Question';
import GameEnd from './components/Game-End';
import GameAnswer from './components/Game-Answer';
import GameAnswer2 from './components/Game-Answer2';


function App() {
  const [page, setPage] = useState('start');
  const [randomQuestion, setRandomQuestion] = useState([]);
  const [countIndex, setCountIndex] = useState(0);
  const [countNumber, setCountNumber] = useState(0);

  return (
    <>
      {page === 'start' && (
        <GameStart
          setPage={setPage}
          setRandomQuestion={setRandomQuestion}
          setCountIndex={setCountIndex}
          setCountNumber={setCountNumber}
        />
      )}

      {page === 'question' && (
        <GameQuestion
          randomQuestion={randomQuestion}
          countIndex={countIndex}
          setCountIndex={setCountIndex}
          countNumber={countNumber}
          setCountNumber={setCountNumber}
          setPage={setPage}
        />
      )}

      {page === 'result' && (
        <GameEnd
          countNumber={countNumber}
          setPage={setPage}
          setCountIndex={setCountIndex}
          setCountNumber={setCountNumber}
          setRandomQuestion={setRandomQuestion}
        />
      )}

      {page === 'answer' && (
        <GameAnswer
          randomQuestion={randomQuestion}
          setPage={setPage}
          setRandomQuestion={setRandomQuestion}
          setCountIndex={setCountIndex}
          setCountNumber={setCountNumber}
        />
      )}

      {page === 'answer2' && (
        <GameAnswer2
          randomQuestion={randomQuestion}
          setPage={setPage}
          setRandomQuestion={setRandomQuestion}
          setCountIndex={setCountIndex}
          setCountNumber={setCountNumber}
        />
      )}
    </>
  )
}

export default App
