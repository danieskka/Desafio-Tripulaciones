import { useState } from "react";
import { articles } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Articles from './Articles/Articles';
import Navegation from '../../../Navegation/Navegation';
import { Link } from "react-router-dom";


const Resources = () => {
  const [showArticles, setShowArticles] = useState(true);
  const [showHealthImage, setShowHealthImage] = useState(false);

  const toggleArticles = () => {
    setShowArticles(true);
    setShowHealthImage(false);
  };

  const toggleHealthImage = () => {
    setShowHealthImage(!showHealthImage);
    setShowArticles(false)
  };

  const printArticles = () => {
    if (showArticles) {
      return articles.map(item => (
        <Articles title={item.title} body={item.body} img={item.img} key={uuidv4()} />
      ));
    }
    return null;
  };

  return (
    <>
    <Link to="/info"><section className="leftarrow"></section></Link>
      <section className="sectionResources">
        <div className="resourcesSliderMenu">
          <h3 className="h3Resources" onClick={toggleArticles}>Olas de Calor</h3>
          <h3 className="h3Resources" onClick={toggleHealthImage}>Primeros Auxilios</h3>
          <h3 className="h3Resources" onClick={toggleHealthImage}>Prevención Individual</h3>
          <h3 className="h3Resources" onClick={toggleHealthImage}>Información Global</h3>
          <h3 className="h3Resources" onClick={toggleHealthImage}>Últimas Noticias</h3>
          <h3 className="h3Resources" onClick={toggleHealthImage}>Videos/Webinar</h3>
        </div>
        <h1>Recursos</h1>
        {showHealthImage && (
          <div>
            <img className="articleNotFound" src="assets/isla_de_calor_urbano_mini_leccion.jpg" alt="isla de calor urbano" />
          </div>
        )}
      <article>
        {printArticles()}
      </article>
      </section>
      <Navegation />
    </>
  );
};

export default Resources;
