
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


function App() {

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const [places, setPlaces] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const { lat, lng } = selectedLocation
  const backend = 'http://localhost:3001/places'

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  console.log(places)

  return (

    <div className="App">
      <h1>After Party</h1>
       <Router> 
        <NavBar />

        <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places}/>
        <GeneralMap places={places}/>

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/Login" element={<Login />} />
            <Route path="/app/SignUp" element={<SignUp setUser={setUser } setToken={setToken}/>} />
            <Route path="/app/Location" element={<Location />} />
            <Route path="/app/Maps" element={<Maps />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );

}





export default App