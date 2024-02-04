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
        <Card style={{ width: '18rem' }} >
           <Card.Img variant="top" src={Bar} />
            <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta consequuntur omnis excepturi, eum labore mollitia fugiat eius molestiae saepe aperiam quam culpa, laudantium repellat maxime ipsa non nobis repudiandae.
                </Card.Text>
                <Card.Title>Is it bumpin!</Card.Title>
                <Card.Text>
                    The place is {place?.opening_hours?.open_now ? "open" : "closed"}
                </Card.Text>
                <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{
                        color: place?.opening_hours?.open_now ? "green" : "red",
                        fontSize: "2em",
                    }}
                />
                <Button variant="primary" onClick={clickHandler}>Do Something!</Button>
            </Card.Body> 
        </Card>

    )

}

export default PlaceCards;