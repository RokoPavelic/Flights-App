import React from "react";
import { DateTime } from "luxon";
import './Flight.css';

const Flight = ({ flight }) => {
  const { cityFrom, cityTo, aTime, dTime, price } = flight;
  return (
    <div className="container">
      <p> <strong>From:</strong> {cityFrom}</p>
      <p> <strong> To:</strong> {cityTo}</p>
      <p>
        <strong>Departure time:</strong> {DateTime.fromMillis(dTime * 1000).toFormat("hh:mm")}
      </p>

      <p><strong>Arrival time:</strong>{DateTime.fromMillis(aTime * 1000).toFormat("hh:mm")}</p>
      <p><strong>Price: $ </strong>{price}</p>

      <button className="btn1"> See Flight</button>
    </div>
  );
};

export default Flight;
