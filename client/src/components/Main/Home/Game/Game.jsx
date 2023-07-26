import {Routes, Route} from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Game = () => {
  return (
  <>
    <h1>Estoy en Game</h1>
    <Routes>
      <Route path="/quiz" element={<Quiz/>}/>
    </Routes>
  </>
  );
};

export default Game;
