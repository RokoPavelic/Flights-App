import { useState, useEffect } from "react";
import "./App.css";
import Flight from "./Flight";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/LoadingSpinner";
import Button from "./components/Button";

function App() {
  const [flights, setFlights] = useState();
  const [departure, setDeparture] = useState();
  const [limit, setLimit] = useState(5);
  const [destination, setDestination] = useState();
  const [stopovers, setStopovers] = useState(999);
  const url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&max_stopovers=${stopovers}&partner=data4youcbp202106&limit=${limit}`;

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return setFlights(data);
  }

  useEffect(() => {
    if (!departure || !destination) return;
    fetchData(url);
  }, [departure, destination, stopovers, limit]);

  console.log(flights);
  console.log(stopovers);

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
          onChange={(e) => setStopovers(e.target.checked ? 0 : 999)}
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
            <LoadingSpinner />
          )}
        </div>
      ) : (
        <p>Please Select Departure and Destination</p>
      )}
      {flights ? <Button onClick={() => setLimit(limit + 5)} /> : null}
    </div>
  );
}

export default App;
