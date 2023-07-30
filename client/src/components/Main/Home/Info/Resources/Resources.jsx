import { useState } from "react";
import { articles } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Articles from './Articles/Articles';

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
        <Articles title={item.title} body={item.body} key={uuidv4()} />
      ));
    }
    return null;
  };

  return (
    <section>
      <h2 onClick={toggleArticles}>Olas de Calor</h2>
      <h2 onClick={toggleHealthImage}>Salud</h2>
      {showHealthImage && (
        <div>
          <img className="articleNotFound" src="assets/isla_de_calor_urbano_mini_leccion.jpg" alt="isla de calor urbano" />
        </div>
      )}
      <h3>Recursos</h3>
      {printArticles()}
    </section>
  );
};

export default Resources;
