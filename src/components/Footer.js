import React from 'react';
import './styles.css'; 
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">Website Policy</a>
        <a href="#">Contact Us</a>
        <a href="#">Products</a>
        <a href="https://www.linkedin.com/company/your-company-link" target="_blank" rel="noopener noreferrer">Career</a>
        <a href="#">Rentals</a>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/your-company-link" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
