import { useState, useEffect } from "react";
import "./App.css";
import Flight from "./Flight";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [flights, setFlights] = useState();
  const [departure, setDeparture] = useState();
  const [destination, setDestination] = useState();
  const [stopovers, setStopovers] = useState(0);
  const url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&max_stopovers=${stopovers}&partner=data4youcbp202106`;

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return setFlights(data);
  }

  useEffect(() => {
    if (!departure || !destination) return;
    fetchData(url);
  }, [departure, destination, stopovers]);

  console.log(flights);
  return (
    <div className="App">
      <Nav
        setDeparture={setDeparture}
        setDestination={setDestination}
        departure={departure}
        destination={destination}
      />
      <div>
        <label htmlFor="DirectFlights">Direct Flights</label>
        <input
          onChange={(e) => setStopovers(e.target.value)}
          type="checkbox"
          name="DirectFlights"
        />
      </div>
      {departure && destination ? (
        <div>
          {flights ? (
            flights?.data?.map((flight, i) => (
              <Flight key={i} flight={flight} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <p>Please slect Departure and destination</p>
      )}
    </div>
  );
}

export default App;
