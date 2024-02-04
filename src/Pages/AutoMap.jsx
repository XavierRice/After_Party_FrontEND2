import React, { useState} from "react"
import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import AutoPage from "./AutoPage"
import GeneralMap from "../Components/GeneralMap"



const AutoMap = ({API_KEY, setPlaces, places, setLocationString}) => {

        <Container>
            <AutoPage API_KEY={API_KEY} setPlaces={setPlaces} places={places} setLocationString={setLocationString}/>
            <GeneralMap places={places}/>
        </Container>

};

export default AutoMap;