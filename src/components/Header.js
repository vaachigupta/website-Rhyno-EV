import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import ContactUs from '../pages/ContactUs';
import PreBook from '../pages/PreBook';
import './styles.css';

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Style", "Elegance", "Minimalism", "Comfort"];
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  let content;

  if (location.pathname === '/about-us') {
    content = <AboutUs />;
  } else if (location.pathname.startsWith('/products')) {
    content = <Products />;
  } else if (location.pathname === '/contact-us') {
    content = <ContactUs />;
  } else if (location.pathname === '/pre-book') {
    content = <PreBook />;
  } else {
    content = (
      <div className="hero">
        <h1>Let's Elevate Your Ride Experience With Rhyno</h1>
        <p><h4>
          Where Superiority Meets <span className="rotating-text">{words[currentWordIndex]}</span>
          </h4>
        </p>
      </div>
    );
  }

  return (
    <header>
      <nav>
        <div className="logo">Rhyno EV</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="dropdown">
            <Link to="/products">Products</Link>
            <ul className="dropdown-content">
              <li><Link to="/products/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/products/se03">SE03</Link></li>
              <li><Link to="/products/se03-max">SE03 Max</Link></li>
              <li><Link to="/products/compare-all">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/pre-book" className="pre-book">Pre-book Now</Link></li>
        </ul>
      </nav>

      {content}
    </header>
  );
};

export default Header;

