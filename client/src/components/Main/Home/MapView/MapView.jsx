import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Home = () => {
  return (
    <article>
      <MapContainer  center={{lat:"40.419973", lng:"-3.701023"}} zoom={10} scrollWheelZoom={true}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
      </MapContainer>
    </article>
  );
};

export default Home;