import {Link} from "react-router-dom";
import MapView from './MapView/MapView';
import MapInfo from './MapInfo/MapInfo';
import Navegation from '../../../Navegation/Navegation';


const Zone = () => {
  return (
    <>
    
      
    <Link to="/info"><section className="leftarrow"></section></Link>
      
      
      <section className='zonegeneral'>
    
      <h1>Mapa de calor</h1>

        <MapView />
        <MapInfo />

      </section>
      <Navegation />
    </>
)
};


export default Zone;
