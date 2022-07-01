import { useState, useEffect } from "react";
import "./App.css";
import Flight from "./Flight";
import DepartureDropdown from "./components/DepartureDropdown";
import DestinationDropdown from "./components/DestiantionDropdown";

function App() {
  const [flights, setFlights] = useState();
  const [departure, setDeparture] = useState("PRG");
  const [destination, setDestination] = useState("VLC");
  const url = `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&partner=data4youcbp202106`;

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return setFlights(data);
  }

  useEffect(() => {
    fetchData(url);
  }, [departure, destination]);

  console.log(flights);
  return (
    <div className="App">
      <DepartureDropdown setDeparture={setDeparture} departure={departure} />
      <DestinationDropdown
        setDestination={setDestination}
        destination={destination}
      />

      {flights ? (
        flights?.data?.map((flight, i) => <Flight key={i} flight={flight} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
