import {Link} from "react-router-dom";
import MapView from './MapView/MapView';
import MapInfo from './MapInfo/MapInfo';

const Zone = () => {
  return (
  <section>
    <Link to="/info"><p>back to Formación</p></Link>
    <h2>Zone</h2>
    <map id='madmap'>
    <MapView />
    </map>
    <MapInfo />

</section>
)
};


export default Zone;
