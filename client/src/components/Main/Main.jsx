import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import Quiz from './Quiz/Quiz';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </main>
)
};

export default Main;
