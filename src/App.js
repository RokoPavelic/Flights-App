import { useState, useEffect } from "react";
import './App.css';
import Flight from "./Flight";
import Nav from "./components/Nav"
import LoadingSpinner from './components/LoadingSpinner';


function App() {
  const [flights, setFlights] = useState();
  const url =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106";

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return setFlights(data);
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(flights);
  return (
    <>
      <Nav />
      <div className="App">
        {flights ? (
          flights.data.map((flight, i) => <Flight flight={flight} />)
        ) : (
          <p>Loading...</p>
        )}
      
      </div>
    </>
  );
}

export default App;
