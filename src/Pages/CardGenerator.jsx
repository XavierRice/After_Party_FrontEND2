
import React, {useState, useEffect} from "react"
import PlaceCards from "../Components/PlaceCards"

const CardGenerator = ({places, API_KEY}) => {
    const [ fivePlaces, setFivePlaces] = useState([])
   
   useEffect( () => {
    let list = places.slice(0, 5)
     setFivePlaces(list)
   }, [places])

  console.log(fivePlaces)

  return (
     <div>
        {fivePlaces.map( (place) => (
            <PlaceCards place={place} API_KEY={API_KEY} key={place.place_id}/>
        ))}
     </div>
  )
}

export default CardGenerator;