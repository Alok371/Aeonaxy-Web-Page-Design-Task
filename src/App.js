import Home from './components/Home';
import Navbar from './components/Navbar';
import AcceptPayments from './components/AcceptPayments';
import Explore from './components/Explore';
import MakePayments from './components/MakePayments';
import AdditionalSolutions from './components/AdditionalSolutions';
import Api_SDK from './components/Api_SDK';
import DeveloperTools from './components/DeveloperTools';
import SupportPage from './components/SupportPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Explore />
      <AcceptPayments />
      <MakePayments />
      <AdditionalSolutions />
      <Api_SDK />
      <DeveloperTools />
      <SupportPage />
      <Footer />
    </>
  );
}

export default App;

