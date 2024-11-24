import './App.css';
import {Route, Routes} from "react-router-dom";
import {NavbarSections} from './components/navbar/NavbarSections';
import { Contact, Gallery, Services, Home, Meet}  from './components/pages/';
import {Footer} from './components/footer/Footer.jsx';

/**
 * CREATE NAVBAR
 */
function App() {
  return (
    <div className="app">
      <NavbarSections />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/services" element={<Services />} /> 
        <Route exact path="/gallery" element={<Gallery />} /> 
        <Route exact path="/meet" element={<Meet />} /> 
        <Route exact path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
