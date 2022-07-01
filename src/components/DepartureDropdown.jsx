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
      <option>Select a destination</option>
      <option value="BER">Berlin</option>
      <option value="PED">Pardubice</option>
      <option value="PRG">Prague</option>
      <option value="WAW">Warsaw</option>
    </Form.Select>
  );
}
