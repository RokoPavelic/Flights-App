import Form from "react-bootstrap/Form";

<<<<<<< HEAD


export default function DepartureDropdown() {

   return ( 
   <Form.Select aria-label="Departure Origin">
        <option>Select a departure</option>
        <option value="1">Berlin</option>
        <option value="2">Pardubice</option>
        <option value="3">Prague</option>
        <option value="4">Warsaw</option>
    </Form.Select>)
}
=======
export default function DepartureDropdown({ setDeparture, departure }) {
  return (
    <Form.Select
      aria-label="Departure Origin"
      onChange={(e) => setDeparture(e.target.value)}
      value={departure}
    >
      <option>Select a destination</option>
      <option value="BER">Berlin</option>
      <option value="PED">Pardubice</option>
      <option value="PRG">Prague</option>
      <option value="WAW">Warsaw</option>
    </Form.Select>
  );
}
>>>>>>> deeff8c9f598c476c6a5cdc5ed1c0417c08c32e3
