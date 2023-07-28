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

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/signin" element={<LogIn/>}/>
        <Route path="/signout" element={<LogOut/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/game/" element={<Game/>}/>
        <Route path="/zone" element={<Zone/>}/>
        <Route path="/resources" element={<Resources/>}/>  
      </Routes>
    </main>
)
};
export default Main;
