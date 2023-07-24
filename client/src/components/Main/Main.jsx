import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </main>
)
};

export default Main;
