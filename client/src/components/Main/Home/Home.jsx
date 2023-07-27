import {Routes, Route} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Game from "./Game/Game";
import Info from "./Info/Info";


const Home = () => {
  return (
    <section>
      <h1>Soy el Home</h1>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game/*" element={<Game/>}/>
        <Route path="/info" element={<Info/>}/>       
      </Routes>
    </section>
  );
};

export default Home;
