import { MapContainer, TileLayer } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';


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
        
    console.log(currentPosition);

  return (

    <article>
            {currentPosition ? (
                <MapContainer center={currentPosition} zoom={16} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            ) : ( <p>Loading map...</p> )}
        </article>

//     <article>
//       <MapContainer  center={currentPosition} zoom={13} scrollWheelZoom={true}>
//       <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//       </MapContainer>
//     </article>
  );
};

export default MapView;