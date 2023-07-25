import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';


const MapView = () => {

    const[currentPosition, setCurrentPosition] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position){
            setCurrentPosition({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            })
        }, 
        )
    }, [])

    const customIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/4408/4408774.png',
        iconSize: [38,38]
    })
        
    console.log(currentPosition);

  return (

    <article>
            {currentPosition ? (
                <MapContainer center={currentPosition} zoom={14} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={currentPosition} icon={customIcon}>
                    <Popup>
                        <h2>Hello, I'm a popup!</h2>
                    </Popup>
                    </Marker>
                </MapContainer>
            ) : ( <p>Loading map...</p> )}
        </article>
  );
};

export default MapView;