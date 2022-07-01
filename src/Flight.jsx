import React from "react";
import { DateTime } from "luxon";

const Flight = ({ flight }) => {
  const { cityFrom, cityTo, aTime, dTime, price } = flight;
  return (
    <div>
      <p> From:{cityFrom}</p>
      <p> To:{cityTo}</p>
      <p>
        Departure time:{DateTime.fromMillis(dTime * 1000).toFormat("hh:mm")}
      </p>
      <p>Arrival time:{DateTime.fromMillis(aTime * 1000).toFormat("hh:mm")}</p>
      <p>Price:{price}</p>
    </div>
  );
};

export default Flight;
