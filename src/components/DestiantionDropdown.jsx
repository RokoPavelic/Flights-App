import Form from "react-bootstrap/Form";

export default function DestinationDropdown({ setDestination, destination }) {
  return (
    <Form.Select
      aria-label="Departure Origin"
      onChange={(e) => setDestination(e.target.value)}
      value={destination}
    >
      <option>Select a destination</option>
      <option value="ATH">Athens</option>
      <option value="BCN">Barcellona</option>
      <option value="MAD">Madrid</option>
      <option value="MXP">Milano</option>
      <option value="VLC">Valencia</option>
    </Form.Select>
  );
}
