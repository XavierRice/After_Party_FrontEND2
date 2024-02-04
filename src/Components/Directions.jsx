import React, { useState, useEffect, useRef } from "react"


const Directions = ({lat, lng }) => {

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    
    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      };

      document.getElementById("start").addEventListener("change", onChangeHandler);
      document.getElementById("end").addEventListener("change", onChangeHandler);

      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        directionsService
          .route({
            origin: {
              query: document.getElementById("start").value,
            },
            destination: {
              query: document.getElementById("end").value,
            },
            travelMode: google.maps.TravelMode.DRIVING,
          })
          .then((response) => {
            directionsRenderer.setDirections(response);
          })
          .catch((e) => window.alert("Directions request failed due to " + status));
      }




    }