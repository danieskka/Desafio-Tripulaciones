import {Link} from "react-router-dom";
import Navegation from '../../Navegation/Navegation';


const Game = () => {
  return (
    <>
      <section className="homeWrapper">
        <h1>Tu progreso</h1>
        <Link to="/minilecture">
          <img className="progressMapGame" src="https://img.freepik.com/vector-premium/mapa-niveles-juego-espacial-planetas-estrellas-fondo-espacio-botones-kit-interfaz-usuario-aplicacion-progreso-jugador_596401-437.jpg?w=2000" alt="Progreso" />
        </Link>
      </section>
      <Navegation />

    </>
  );
};

export default Game;
