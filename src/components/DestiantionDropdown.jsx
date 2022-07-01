import Form from 'react-bootstrap/Form'; 



export default function DestinationDropdown() {

 return(
        <Form.Select aria-label="Departure Origin">
            <option>Select a destination</option>
            <option value="1">Athens</option>
            <option value="2">Barcellona</option>
            <option value="3">Madrid</option>
            <option value="4">Milano</option>
            <option value="5">Valencia</option>
        </Form.Select>
        )
       
}