  import {Link} from "react-router-dom";
  import Navegation from '../../Navegation/Navegation';
//import HeatyLogo from "../../../assets/IconIcon.png"


const Info = () => {
  return (
    <>
    <section className="info_general_container">
      
    <h2>Formación</h2>

    <Link to="/teacher"><article className="info_subsections"></article></Link>
    <article>
      <Link to="/teacher"><p>Profesora virtual</p></Link>
    </article>

    
    <Link to="/zone"><article className="info_subsections"></article></Link>
    <article>
      <Link to="/zone"><p>Mapa en tiempo real </p></Link>
    </article>

    
    <Link to="/resources"><article className="info_subsections"></article></Link>
    <article>
      <Link to="/resources"><p>Recursos</p></Link>
    </article>
    
    

    </section>
    <Navegation />
    </>
    )
};

export default Info;
