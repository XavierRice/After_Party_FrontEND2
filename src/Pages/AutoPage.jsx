import React, { useEffect, useState } from 'react'
import axios from 'axios'


//Components:

import ErrorBoundary from "./ErrorBoundary"
import GeneralMap from '../Components/GeneralMap'
import PlacesAutocomplete from '../Components/PlacesAutoComplete'

function AutoPage({places, setPlaces}) {

  
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
 // const [places, setPlaces] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const { lat, lng } = selectedLocation
  const backend = 'http://localhost:3001/places'
   
  const handleLocationSearch = (lat, lng) => {

    axios.get(backend, {
      params: {
        key: API_KEY,
        location: `${lat},${lng}`, // lat lng
        radius: "5000",
        type: "bar"   // liquor_store, night_club, restaurant ;type list
      }
    })
      .then(res => {
        setPlaces(res.data.results)
      })
      .catch(err => {

        console.error("err fetching yo' stuff!", err)
        console.error("error response data:", err.response.data)
      })
  };

console.log(places)

  useEffect(() => {
    handleLocationSearch(lat, lng)
  }, [selectedLocation])

  return (
    <ErrorBoundary>
      <PlacesAutocomplete setSelectedLocation={setSelectedLocation}/>
    </ErrorBoundary>
  )

}



export default AutoPage;
