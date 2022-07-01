import './App.css';
import DepartureDropdown from './components/DepartureDropdown';
import DestinationDropdown from './components/DestiantionDropdown';
import LoadingSpinner from './components/LoadingSpinner';


function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
     <DepartureDropdown />
     <DestinationDropdown />
     <LoadingSpinner />

    </div>
  );
}

export default App;
