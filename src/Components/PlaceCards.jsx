import React, { useState } from "react"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Bar from "../assets/Bar.jpg"

const PlaceCards = ({ place, API_KEY }) => {
    // const isOpen = place?.opening_hours.open_now

    // const PlaceImage = ({ photo }) => {
    //     if (!photo || !photo.photo_reference) {
    //         return null
    //     }
    //     const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`;

    //     return (
    //         <Card.Img variant="top" src={photoUrl} />
    //     )
    // }

    const clickHandler = (event) => {
        console.log("You wanna do something!?")
    }
    // const photo = place?.photo[0]

    return (
        <Card style={{ width: '18rem'}} className="card border">
           <Card.Img variant="top" src={Bar} />
            <Card.Body style={{backgroundColor: "#100FOF"}} >
                <Card.Title style={{color: "#484B9D"}}>{place.name}</Card.Title>
                <Card.Text style={{textAlign: "center"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta consequuntur omnis excepturi, eum labore mollitia fugiat eius molestiae saepe aperiam quam culpa, laudantium repellat maxime ipsa non nobis repudiandae.
                </Card.Text>
                <Card.Text style={{textAlign: "center"}}>{place?.opening_hours?.open_now ? "It's bumpin!" : "AnotherTime"}  {place?.opening_hours?.open_now ? "👌🏾" : "👎🏾"}</Card.Text>
                <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{
                        color: place?.opening_hours?.open_now ? "#CEB91C" : "red",
                        fontSize: "2em",
                        textAlign: "center"
                    }}
                />
                <Button variant="primary" onClick={clickHandler} style={{textAlign:"center"}}>Get Directions</Button>
            </Card.Body> 
        </Card>

    )

}

export default PlaceCards;