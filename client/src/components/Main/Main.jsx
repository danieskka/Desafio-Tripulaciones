import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';
import Info from './Home/Info/Info';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import LogOut from './LogOut/LogOut';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/signin" element={<LogIn/>}/>
        <Route path="/signout" element={<LogOut/>}/>
        <Route path="/game" element={<Quiz/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </main>
)
};

export default Main;
