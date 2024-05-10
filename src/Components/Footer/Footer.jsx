import React from 'react';
import './Footer.css';
import Kurama from '../../Assets/kurama.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src={Kurama} alt="kurama" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><b>Email:</b> uzumakinaruto@gmail.com</p>
          <p><b>Phone:</b> 9876543210</p>
        </div>
        <div className="footer-column">
          <h3>Follow Me</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Uzumaki Naruto. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
