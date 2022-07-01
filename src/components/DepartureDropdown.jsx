import Form from "react-bootstrap/Form";
import '../style/nav.css';

export default function DepartureDropdown({ setDeparture, departure }) {
  return (
    <Form.Select
      aria-label="Departure Origin"
      onChange={(e) => setDeparture(e.target.value)}
      value={departure}
      className="Departure-dropdown"
    >
      <option className="dropdown">Select a destination</option>
      <option className="dropdown" value="BER">Berlin</option>
      <option className="dropdown"value="PED">Pardubice</option>
      <option className="dropdown"value="PRG">Prague</option>
      <option className="dropdown"value="WAW">Warsaw</option>
    </Form.Select>
  );
}
