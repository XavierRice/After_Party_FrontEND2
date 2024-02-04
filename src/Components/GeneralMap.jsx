import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';

const GeneralMap = ({ places }) => {

console.log(places)

    const containerStyle = {
        width: '800px',
        height: '600px'
    };

    const center = {
        lat: 40.712776,
        lng: -74.005974
    };
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
        </GoogleMap>

    )

};
export default GeneralMap; 