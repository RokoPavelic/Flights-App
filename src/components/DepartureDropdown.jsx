import Form from 'react-bootstrap/Form';



export default function DepartureDropdown() {

   return ( 
   <Form.Select aria-label="Departure Origin">
        <option>Select a destination</option>
        <option value="1">Berlin</option>
        <option value="2">Pardubice</option>
        <option value="3">Prague</option>
        <option value="4">Warsaw</option>
    </Form.Select>)
}