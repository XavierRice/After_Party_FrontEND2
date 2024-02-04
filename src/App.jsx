import "./App.css"
document.body.style = 'background: black;';

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Maps from "./Pages/Maps";
import SignUp from "./Pages/SignUp";
import GeneralMap from "./Components/GeneralMap";
import UserError from "./Pages/UserError";
import CardGenerator from "./Pages/CardGenerator";
import AutoPage from "./Pages/AutoPage";
import NavBar from "./Components/Navbar";

import PlacesAutocomplete from "./Components/PlacesAutoComplete";
import Directions from "./Components/Directions";
import DirectionsMap from "./Pages/DirectionsMap";
import AutoMap from "./Pages/AutoMap";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)


  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const [places, setPlaces] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [LocationString, setLocationString] = useState("")
  const { lat, lng } = selectedLocation
  const backend = 'http://localhost:3001/places'

  const OriginAddress = LocationString.split(" ").slice(0, 5).join(" ")
  console.log(LocationString)

  return (

    <div className="App">
      <h1 style={{color: "gold", textAlign: "center"}}>After Party</h1>
      <NavBar user={user} setUser={setUser} setToken={setToken}/>
      <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString} />
      <GeneralMap places={places} />
      <CardGenerator places={places} API_KEY={API_KEY} />
      <DirectionsMap API_KEY={API_KEY} OriginAddress={OriginAddress} />

      <Routes>
        <Route path="/" element={<Home user={user} token={token}/>} />
        <Route path="/app/Login" element={<Login setUser={setUser} setToken={setToken} />} />
        <Route path="/app/SignUp" element={<SignUp setUser={setUser} setToken={setToken} />} />
        <Route path="/app/Location" element={<CardGenerator places={places} API_KEY={API_KEY} />} />
        <Route path="/app/Maps" element={<Maps API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString} />} />
        <Route path="/app/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );

}





export default App