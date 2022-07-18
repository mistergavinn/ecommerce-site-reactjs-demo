import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../resources/images/facebook.png';
import twitter from '../../resources/images/twitter.png';
import instagram from '../../resources/images/instagram.png';

import '../../css/Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="btm-bar">
          <div className="page-link">
            <Link to="/shoe-warehouse/about">About us</Link>
            <Link to="/shoe-warehouse/contact">Contact Us</Link>
          </div>

          <div className="social-media">
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook link" />
            </a>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twitter link" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram link" />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;