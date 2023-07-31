import { news } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Gallery from './Gallery/Gallery';
import { useState } from "react";
import Navegation from '../Navegation/Navegation';


const Home = () => {

  // Paginación 
  const itemsPage = 1; 
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = Math.ceil(news.length / itemsPage)
  //Pintar paginación
  const printNews = () => {
    const startIndex = (currentPage - 1) * itemsPage;
    const endIndex = startIndex + itemsPage;
    return news.slice(startIndex, endIndex).map(item => (
      <Gallery head={item.headline} img={item.img} url={item.url} key={uuidv4()} />
    ));
  }

  //Botones paginación
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
    const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };



  return (
    <>
      <section className="homeWrapper">
          <h1>Hola ( NOMBRE DE USUARIO )</h1>
        <article className="progressHomeContainer">
          <h2>Mira tu progreso</h2>
          <img className="progressMapGame" src="https://img.freepik.com/vector-premium/mapa-niveles-juego-espacial-planetas-estrellas-fondo-espacio-botones-kit-interfaz-usuario-aplicacion-progreso-jugador_596401-437.jpg?w=2000" alt="Progreso" />
          <button className="quizNextQuestion">SEGUIR APRENDIENDO</button>
        </article>
        <article className="galleryHomeContainer">
          <h2>Para ti</h2>
          <div className="gallery">
            <img className="galleryButtons" src="assets/ArrowL.png" alt="Artículo anterior" onClick={goToPreviousPage} disabled={currentPage === 1}/>
          {printNews()}
            <img className="galleryButtons" src="assets/ArrowR.png" alt="Artículo siguiente" onClick={goToNextPage} disabled={currentPage === totalPages} />
          </div>
        </article>
      </section>
      <Navegation />
    </>
  );
};

export default Home;
