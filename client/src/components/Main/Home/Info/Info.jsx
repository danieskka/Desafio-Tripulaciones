  import {Link} from "react-router-dom";
  import Navegation from '../../Navegation/Navegation';


const Info = () => {
  return (
    <>
      <section>

      <h2>Formación</h2>

      <Link to="/zone"><p>Tu Zona</p></Link>
      <Link to="/resources"><p>Recursos</p></Link>

    </section>
    <Navegation />
    </>
    )
};

export default Info;
