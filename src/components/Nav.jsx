import DepartureDropdown from './DepartureDropdown';
import DestinationDropdown from './DestiantionDropdown';
import SearchBar from './SearchBar';
import Logo from "../img/4135662.png";


export default function Nav({setDeparture, setDestination, destination, departure, term, setTerm}) {

    return (
        <nav className='navbar'>
            <img src={<Logo />} alt="Logo" />
            <SearchBar term={term} setTerm={setTerm}/>

            <DepartureDropdown  setDeparture={setDeparture} departure={departure}/>
            <DestinationDropdown setDestination={setDestination} destination={destination}/>
        </nav>
    )
}