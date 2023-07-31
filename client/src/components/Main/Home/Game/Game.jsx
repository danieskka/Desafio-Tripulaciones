import {Link} from "react-router-dom";
import Navegation from '../../Navegation/Navegation';


const Game = () => {
  return (
    <>
      <section className="homeWrapper">
        <h1>Tu progreso</h1>
        <article></article>

        {/* <Link to="/minilecture"><article className="link_to_minilecture"></article></Link> */}
          <img className='link_to_minilecture' src="../../../public/assets/Camino.svg" />
        
      </section>
      <Navegation />

    </>
  );
};

export default Game;
