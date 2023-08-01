import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Info from './Home/Info/Info';
import Game from './Home/Game/Game';
import Profile from './Home/Profile/Profile';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import LogOut from './LogOut/LogOut';
import Zone from './Home/Info/Zone/Zone';
import Resources from './Home/Info/Resources/Resources';
import MiniLecture from './Home/Game/MiniLecture/MiniLecture';
import Quiz from './Home/Game/Quiz/Quiz';
import Welcome from './Welcome/Welcome';
import Article from './Home/Info/Resources/Article/Article';
import ChatBot from './Home/Info/ChatBot/ChatBot';
import User from './Home/Profile/User/User';
import Admin from './Home/LoginAdmin/Admin/Admin';
import LoginAdmin from './Home/LoginAdmin/LoginAdmin';



const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<SignUp/>}/>   
          <Route path="/signin" element={<LogIn/>}/>
          <Route path="/signout" element={<LogOut/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/minilecture" element={<MiniLecture/>}/>
          <Route path="/gamequiz" element={<Quiz/>}/>
          <Route path="/zone" element={<Zone/>}/>
          <Route path="/resources" element={<Resources/>}/>  
          <Route path="/chatbot" element={<ChatBot/>}/>  
          <Route path="/article" element={<Article/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/adminlogin" element={<LoginAdmin/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </main>
    </>
)
};
export default Main;
