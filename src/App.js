import './App.css';
import Header from './Components/Header/Header';
import Pockemonlist from './Components/Pockemonlist/Pockemonlist';
import Navigation from './Components/Navigatin/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Pockemonlist/>
    </div>
  );
}

export default App;
