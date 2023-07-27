import {Routes, Route} from 'react-router-dom';
import Profile from "./Profile/Profile";
import Game from "./Game/Game";
import Info from "./Info/Info";


const Home = () => {
  return (
    <section>
      <h1>Hola ( NOMBRE DE USUARIO )</h1>
      <h2>Mira tu progreso</h2>
      <img src="https://img.freepik.com/vector-premium/mapa-niveles-juego-espacial-planetas-estrellas-fondo-espacio-botones-kit-interfaz-usuario-aplicacion-progreso-jugador_596401-437.jpg?w=2000" alt="Progreso" />
      <button>SEGUIR APRENDIENDO</button>
      <H2>Para ti</H2>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game/*" element={<Game/>}/>
        <Route path="/info" element={<Info/>}/>       
      </Routes>
    </section>
  );
};

export default Home;
