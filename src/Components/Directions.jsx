import { useEffect, useState } from "react";
import { 
  Map,
  useMapsLibrary,
  useMap
} from '@vis.gl/react-google-maps'


const Directions = ({OriginAddress}) => {
   const map = useMap();
   const routesLibrary = useMapsLibrary("routes");
   const [directionsService, setDirectionsService] = useState();
   const [directionsRenderer, setDirectionsRenderer] = useState();

   const [routes, setRoutes]=useState([])
   const [routeIndex, setRouteIndex] = useState(0)

   const selectedRoute = routes[routeIndex]
   const leg = selectedRoute?.legs[0]
   
   

   useEffect(() => {
    if(!routesLibrary || !map) return

    setDirectionsService( new routesLibrary.DirectionsService());
    setDirectionsRenderer( new routesLibrary.DirectionsRenderer({map}))

   }, [routesLibrary, map])

    useEffect(()=> {
      if (!directionsService || !directionsRenderer ) return


      directionsService.route({
        origin: "304 Quincy St, Brooklyn NY",
        destination: "47-10 Austell Pl, Long Island City NY",
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      })
      .then(res => {
        directionsRenderer.setDirections(res)
        setRoutes(res.routes)
      })
    }, [directionsService, directionsRenderer])

console.log(routes)
 if(!leg) return null
  
let startAddy = leg.start_address?.split(",")[0];
let endAddy = leg.end_address?.split(",")[0];

 return (
  <div className="directions">
    <h2>{selectedRoute.summary}</h2>
    <p>
      {startAddy} to {endAddy}
    </p>
  </div>
 )

};

export default Directions;