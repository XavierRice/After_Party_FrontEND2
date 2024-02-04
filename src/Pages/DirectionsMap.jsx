import { useEffect, useState } from "react";

import Directions from "../Components/Directions";


import {
    APIProvider,
    Map,
    useMap,
    useMapsLibrary
} from "@vis.gl/react-google-maps"


const DirectionsMap = ({API_KEY, OriginAddress}) => {
    
    const position = {   lat: 40.712776, lng: -74.005974 } 

return <div style={{height:"100vh", width: "100%"}}>
  
    <APIProvider apiKey={API_KEY}>
        <Map
        center={position}
        zoom={9}
        fullscreenControl={false}       
        >
     <Directions OriginAddress={OriginAddress}/>
        </Map>
    </APIProvider>

   
</div>


};

export default DirectionsMap