
import React, {useState, useEffect} from "react"
import PlaceCards from "../Components/PlaceCards"
import { Row, Col } from "react-bootstrap"
const CardGenerator = ({places, API_KEY}) => {
    const [ fivePlaces, setFivePlaces] = useState([])
   
   useEffect( () => {
    let list = places.slice(0, 5)
     setFivePlaces(list)
   }, [places])

  console.log(fivePlaces)

  return (
     <Row>
        {fivePlaces.map( (place) => (
      <Col >
           <PlaceCards place={place} API_KEY={API_KEY} key={place.place_id}/>
           </Col>
        ))}
     </Row>
  )
}

export default CardGenerator;