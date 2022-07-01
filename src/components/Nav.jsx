import DepartureDropdown from './DepartureDropdown';
import DestinationDropdown from './DestiantionDropdown';

import SearchBar from './SearchBar';
import '../style/nav.css';


export default function Nav({setDeparture, setDestination, destination, departure, term, setTerm}) {

    return (
        <nav className='navbar'>

            <img src={<Logo />} alt="Logo" />
            <SearchBar term={term} setTerm={setTerm}/>

            <DepartureDropdown  setDeparture={setDeparture} departure={departure}/>
            <DestinationDropdown setDestination={setDestination} destination={destination}/>

            <img src={logo} alt="Logo" className="Nav-logo"/>

          <div className="nav-items">

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