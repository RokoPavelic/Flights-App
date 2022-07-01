import DepartureDropdown from './DepartureDropdown';
import DestinationDropdown from './DestiantionDropdown';
import Logo from "../img/4135662.png";


export default function Nav() {

    return (
        <nav className='navbar'>
            <img src={<Logo />} alt="Logo" />
            <DepartureDropdown />
            <DestinationDropdown />
        </nav>
    )
}