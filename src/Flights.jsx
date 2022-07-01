import React, { useState, useEffect } from "react";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const url = "https://swapi.dev/api/films/";

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return setStarWars(data.results);
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(starWars);

  return <div>Flights</div>;
};

export default Flights;
