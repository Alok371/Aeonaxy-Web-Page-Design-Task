import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AcceptPayments from './components/AcceptPayments';
import Explore from './components/Explore';
import MakePayments from './components/MakePayments';
import AdditionalSolutions from './components/AdditionalSolutions';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Explore />
      <AcceptPayments />
      <MakePayments />
      <AdditionalSolutions />
    </>
  );
}

export default App;

