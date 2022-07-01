import DepartureDropdown from "./DepartureDropdown";
import DestinationDropdown from "./DestiantionDropdown";
import Logo from "../img/4135662.png";

export default function Nav({
  setDeparture,
  setDestination,
  destination,
  departure,
}) {
  return (
    <nav className="navbar">
      {/* <img src={Logo} style={{ width: "100px", height: "100px" }} alt="Logo" /> */}
      <DepartureDropdown setDeparture={setDeparture} departure={departure} />
      <DestinationDropdown
        setDestination={setDestination}
        destination={destination}
      />
    </nav>
  );
}
