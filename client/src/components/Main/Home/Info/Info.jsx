  import {Link} from "react-router-dom";
  import Navegation from '../../Navegation/Navegation';


const Info = () => {
  return (
    <>
    <section className="info_general_container">
        <article className="game_title_quiz">
              <h1>Formación</h1>
        </article>
      <div className="infoContainer">
          <Link to="/chatbot">
          <article className="info_subsections">
            <img src="assets/MAR IA.svg" alt="asistente virtual"/>
          <h3>Profesora Virtual</h3>
          <p>Pregunta todas tus dudas a nuestra Profesora MAR-IA.</p>
          </article></Link>
          <Link to="/zone">
          <article className="info_subsections">
            <img src="assets/Screenshot_240.png" alt="mapa"/>
          <h3>Mapa de calor en tiempo real</h3>
          <p>Localiza tu zona de interés y su estado actual.</p>
          </article></Link>
          <Link to="/resources">
          <article className="info_subsections">
            <img src="assets/PICTURE 12.png" alt="red de personas"/>
          <h3>Recursos ante una ola de calor</h3>
          <p>Últimas noticias, consejos y recomendaciones.</p>
          </article></Link>
      </div>
    </section>
    <Navegation />
    </>
    )
};

export default Info;
