import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import Quiz from './Quiz/Quiz';
import Info from './Home/Info/Info';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/game" element={<Quiz/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </main>
)
};

export default Main;
