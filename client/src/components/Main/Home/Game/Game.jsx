import {Link} from "react-router-dom";
import Navegation from '../../Navegation/Navegation';



const Game = () => {
  return (
    <>
      <section className="game_general_container">
            <article className="game_title_quiz">
              <h1>Quiz</h1>
            </article>
            <article className="game_bg_quiz">
              {/* <Link to="/minilecture"><article className="link_to_minilecture"></article></Link> */}
              <Link className="buttonGame" to='/minilecture' ><img src="assets/Camino 1.png" alt="boton" /></Link>
              <img src="assets/Camino.svg" />
            </article>
            <Navegation/>
      </section>
    </>
  );
};

export default Game;
