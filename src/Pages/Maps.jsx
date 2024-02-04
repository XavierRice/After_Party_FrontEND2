import React from 'react'
import AutoPage from "./AutoPage";
import GeneralMap from "../Components/GeneralMap";
import DirectionsMap from "./DirectionsMap";
import CardGenerator from "./CardGenerator";

 function Maps({places, setPlaces, setLocationString}) {

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const backend = 'http://localhost:3001/places'
  
  const OriginAddress = LocationString.split(" ").slice(0,5).join(" ")
  console.log(LocationString)

  return (
    <div>
      <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString}/>
      <GeneralMap places={places}/> 
      <DirectionsMap API_KEY={API_KEY} OriginAddress={OriginAddress}/>
      <CardGenerator places={places} API_KEY={API_KEY}/> 
    </div>
    
  )
}

export default Maps