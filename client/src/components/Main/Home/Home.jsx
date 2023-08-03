import { news } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Gallery from './Gallery/Gallery';
import Navegation from '../Navegation/Navegation';
import { Link } from "react-router-dom";


/** 
  * <pre>
  * COMPONENTE HOME CON COMPONENTE ANIDADO GALLERY COMO SLIDER DE NOTICIAS. 
  * ARTÍCULOS DE NOTICIAS EXPORTADOS DESDE INDEX.JS Y MAPEADO PARA IMPRIMIR EN EL COMPONENTE GALLERY CON LINKS A OTRAS VISTAS COMO /zone.
  * ANIDADO TAMBIÉN AL PIE, EL COMPONENTE NAVEGATION PARA NAVEGACIÓN DE LA PÁGINA.
  * </pre>
  * @memberof Home 
  * @return {html} objeto con todas las ofertas encontradas
  */




const Home = () => {

  const printNews = () => {
    return news.map((item, index) => {
      if (index === 1) {
          return (
          <Gallery head={item.headline} img={item.img}  url="/zone" key={uuidv4()}   />
        );
      } else {
        return (
          <Gallery head={item.headline} img={item.img} url={item.url} key={uuidv4()}  />
        );
      }
    });
  };


  return (
    <>
      <section className="homeWrapper">
          <h1>Hola, Gozer</h1>
        <article className="progressHomeContainer">
          <h2>Mira tu progreso</h2>
          <img className="progressMapGame" src="assets/Acceso Directo a juego.svg" alt="Progreso" />
          <Link to="/game"> <button className="quizNextQuestion" id='home_keep_playing'>SEGUIR JUGANDO</button> </Link> 
        </article>
          <h2>Para ti</h2>
        <article className="galleryHomeContainer">
          <div className="gallery">
          {printNews()}
          </div>
        </article>
      </section>
      <Navegation />
    </>
  );
};

export default Home;
