import { React, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
import axios from 'axios';


const BACKEND = import.meta.env.VITE_BASE_URL;
const GeneralMap = ({ places }) => {


useEffect(() => {
axios.get(`${BACKEND}/locations`)
  .then(response => {
    // Handle successful response
    console.log(response.data);
    // setPlaces(response.data.results);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching nearby places:', error);
    console.error('Error response data:', error.response.data);
  })}, [])

// console.log(places)

    const containerStyle = {
        width: '800px',
        height: '600px'
    };

    const center = {
        lat: 40.712776,
        lng: -74.005974
    };
    
    const handleMapClick = () => {
        console.log("move to cards")
    }

    return (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
        >
            {places.map((place, index) => (
            <Marker
                key={index}
                position={{
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng
                }}
                title={place.name}
            />
        ))}
        <input onClick={handleMapClick}/>
        </GoogleMap>

    )

};
export default GeneralMap; 