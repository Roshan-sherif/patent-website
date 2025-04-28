import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './components/Service'; // You'll create this component
import MainPage from './components/Home';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';




function App() {

  return (
   

    <Router>
   <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />


      {/* Add other Routes here */}
    </Routes>
  </Router>

  );
}
export default App;
