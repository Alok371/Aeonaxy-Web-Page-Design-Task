import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AcceptPayments from './components/AcceptPayments';
import Explore from './components/Explore';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Explore />
      <AcceptPayments />
    </>
  );
}

export default App;

