import { news } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Gallery from './Gallery/Gallery';
import { useState } from "react";


const Home = () => {

  const printNews = () => news.map(item => <Gallery head={item.headline} img={item.img} url={item.url}  key={uuidv4()} />)

  const [currentPage, setCurrentPage] = useState(1); // Estado para rastrear la página actual

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
      setCurrentPage(currentPage + 1);
  };



  return (
    <section>
        <h1>Hola ( NOMBRE DE USUARIO )</h1>
      <article>
        <h2>Mira tu progreso</h2>
        <img className="progressMapGame" src="https://img.freepik.com/vector-premium/mapa-niveles-juego-espacial-planetas-estrellas-fondo-espacio-botones-kit-interfaz-usuario-aplicacion-progreso-jugador_596401-437.jpg?w=2000" alt="Progreso" />
        <button>SEGUIR APRENDIENDO</button>
      </article>
      <article>
        <h2>Para ti</h2>
        {printNews()}
        <button onClick={goToPreviousPage}>Atrás</button>
        <button onClick={goToNextPage}>Siguiente</button>
      </article>
    </section>
  );
};

export default Home;
