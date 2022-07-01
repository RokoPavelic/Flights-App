import DepartureDropdown from './DepartureDropdown';
import DestinationDropdown from './DestiantionDropdown';

import SearchBar from './SearchBar';


import logo from "../img/4135662.png";
import '../style/nav.css';



export default function Nav({setDeparture, setDestination, destination, departure, term, setTerm, setSearched, searched}) {

    return (
        <nav className='navbar'>


            <img src={logo} alt="Logo" className="Nav-logo"/>

          <div className="nav-items">

            <div className="nav-item">
            <label htmlFor="departure" className="DepartingFrom">Search:</label>
                <SearchBar term= {term} setTerm={setTerm} setSearched={setSearched} searched={searched}/>
            </div>

            <div className="nav-item">
              <label htmlFor="departure" className="DepartingFrom">From:</label>
               <DepartureDropdown  setDeparture={setDeparture} departure={departure}/>
            </div>
            
            <div className="nav-item">
              <label htmlFor="destination" className="Destination">To:</label>
              <DestinationDropdown setDestination={setDestination} destination={destination}/>
            </div>

          </div>

        </nav>
    )
}