
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AutoPage from "./Pages/AutoPage";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Login from "./Pages/Login";
import Maps from "./Pages/Maps";
import SignUp from "./Pages/SignUp";
import GeneralMap from "./Components/GeneralMap";
import UserError from "./Pages/UserError";

import NavBar from "./Components/Navbar";

import PlacesAutocomplete from "./Components/PlacesAutoComplete";
import Directions from "./Components/Directions";
import DirectionsMap from "./Pages/DirectionsMap";

function App() {

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const [places, setPlaces] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [LocationString, setLocationString] = useState("")
  const { lat, lng } = selectedLocation
  const backend = 'http://localhost:3001/places'
  
  const OriginAddress = LocationString.split(" ").slice(0,5).join(" ")
  console.log(LocationString)

  return (

    <div className="App">
      <h1>After Party</h1>
       <Router> 
        <NavBar />
        <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString}/>
        <GeneralMap places={places}/>
        <DirectionsMap API_KEY={API_KEY} OriginAddress={OriginAddress}/>
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/Login" element={<Login />} />
            <Route path="/app/SignUp" element={<SignUp />} />
            <Route path="/app/Location" element={<Location />} />
            <Route path="/app/Maps" element={<DirectionsMap API_KEY={API_KEY} OriginAddress={OriginAddress}/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );

}





export default App