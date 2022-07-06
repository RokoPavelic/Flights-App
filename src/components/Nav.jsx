import DepartureDropdown from "./DepartureDropdown";
import DestinationDropdown from "./DestiantionDropdown";

import SearchBar from "./SearchBar";

import logo from "../img/4135662.png";
import "../style/nav.css";

export default function Nav({
  setDeparture,
  setDestination,
  destination,
  departure,
  term,
  setTerm,
  setSearched,
  searched,
  setStopover,
}) {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="nav-item">
          <label htmlFor="departure" className="DepartingFrom">
            From:
          </label>
          <DepartureDropdown
            setDeparture={setDeparture}
            departure={departure}
          />
        </div>

        <div className="nav-item">
          <label htmlFor="destination" className="Destination">
            To:
          </label>
          <DestinationDropdown
            setDestination={setDestination}
            destination={destination}
          />
          <div></div>
        </div>
      </div>
    </nav>
  );
}
