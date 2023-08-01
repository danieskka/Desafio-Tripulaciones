import {Link} from "react-router-dom";



const Game = () => {
  return (
    <>
      <section className="game_general_container">
      
      <article className="game_title_quiz">
        <h1>Quiz</h1>
      </article>
      <article className="game_bg_quiz">
        {/* <Link to="/minilecture"><article className="link_to_minilecture"></article></Link> */}
        <img src="../../../public/assets/Camino.svg" />
      </article>

      
    <div className="nav_fixed">
      <Link to="/home">        
        <div className="iconNavigation">
          <img src="assets/Home.svg" alt="home" />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/game">        
        <div className="iconNavigation">
        <img src="assets/juego.svg" alt="juego" />
          <span>Juego</span>
        </div>
      </Link>
      <Link to="/info">        
        <div className="iconNavigation">
        <img className="formacion" src="assets/Formación.svg" alt="formación" />
          <span>Formación</span>
        </div>
      </Link>
      <Link to="/profile">  
        <div className="iconNavigation">
          <img src="assets/perfil.svg" alt="perfil" />
          <span>Perfil</span>
        </div>
      </Link>
      </div>
      


      </section>
     

    </>
  );
};

export default Game;
