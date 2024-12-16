import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import PreBook from './pages/PreBook';
import Rentals from './pages/Rentals';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/pre-book">Pre-book Now</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
