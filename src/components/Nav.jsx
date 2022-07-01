import DepartureDropdown from './components/DepartureDropdown';
import DestinationDropdown from './components/DestiantionDropdown';
import Logo from "../img/4135662.png";


export default function Nav() {

    return (
        <nav>
            <img src={<Logo />} alt="Logo" />
            <DepartureDropdown />
            <DestinationDropdown />
        </nav>
    )
}