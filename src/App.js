import './App.scss';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Offer from './pages/Offer';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Features />
    <Offer />
    <About />
    <Contact />
    </>
  );
}

export default App;
