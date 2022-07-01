import React from "react";
import { DateTime } from "luxon";
import './Flight.css';

const Flight = ({ flight }) => {
  const { cityFrom, cityTo, aTime, dTime, price } = flight;
  return (
    <div className="container">
      <p> From: {cityFrom}</p>
      <p> To: {cityTo}</p>
      <p>
        Departure time: {DateTime.fromMillis(dTime * 1000).toFormat("hh:mm")}
      </p>
      <p>Arivale time: {DateTime.fromMillis(aTime * 1000).toFormat("hh:mm")}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Flight;
