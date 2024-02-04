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

    const handleMapClick = () => {
        console.log("move to cards")
    }

    return (
        <div className='d-flex justify-content-center align-items-center pt-8 pb-7'>
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
                <input onClick={handleMapClick} />
            </GoogleMap>
        </div>

    )

};
export default GeneralMap; 