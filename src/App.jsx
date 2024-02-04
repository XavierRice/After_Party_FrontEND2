import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./Pages/Home";
import Location from "./Pages/Location";
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


  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const [places, setPlaces] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [LocationString, setLocationString] = useState("");
  const { lat, lng } = selectedLocation;
  const backend = 'http://localhost:3001/places';

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const OriginAddress = LocationString.split(" ").slice(0, 5).join(" ");
  console.log(LocationString);

  return (
    <div className="App">
      <h1>After Party</h1>
      <Router>
        <NavBar />
        <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString}/>
        <GeneralMap places={places}/> 
         <DirectionsMap API_KEY={API_KEY} OriginAddress={OriginAddress}/>
        <CardGenerator places={places} API_KEY={API_KEY}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/Login" element={<Login setUser={setUser} setToken={setToken}/>} />
            <Route path="/app/SignUp" element={<SignUp setUser={setUser} setToken={setToken} />} />
            <Route path="/app/Location" element={<CardGenerator places={places} API_KEY={API_KEY}/>} />
            <Route path="/app/Maps" element={<AutoMap API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString}/>} /> 
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
