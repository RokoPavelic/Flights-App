import Form from "react-bootstrap/Form";

<<<<<<< HEAD


export default function DestinationDropdown() {

 return(
        <Form.Select aria-label="Departure Origin">
            <option>Select the destination</option>
            <option value="1">Athens</option>
            <option value="2">Barcellona</option>
            <option value="3">Madrid</option>
            <option value="4">Milano</option>
            <option value="5">Valencia</option>
        </Form.Select>
        )
       
}
=======
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
>>>>>>> deeff8c9f598c476c6a5cdc5ed1c0417c08c32e3
