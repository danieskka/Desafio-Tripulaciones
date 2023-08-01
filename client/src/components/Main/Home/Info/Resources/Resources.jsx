import { useState } from "react";
import { articles } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Articles from './Articles/Articles';
import Navegation from '../../../Navegation/Navegation';

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
      <section className="sectionResources">
        <div className="resourcesSliderMenu">
          <h2 className="h2Resources" onClick={toggleArticles}>Olas de Calor</h2>
          <h2 className="h2Resources" onClick={toggleHealthImage}>Primeros Auxilios</h2>
          <h2 className="h2Resources" onClick={toggleHealthImage}>Prevención Individual</h2>
          <h2 className="h2Resources" onClick={toggleHealthImage}>Información Global</h2>
          <h2 className="h2Resources" onClick={toggleHealthImage}>Últimas Noticias</h2>
          <h2 className="h2Resources" onClick={toggleHealthImage}>Videos/Webinar</h2>
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
