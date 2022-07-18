import React from 'react';
import { Link } from 'react-router-dom';

import "../../css/Topbar.css";

const Topbar = ({authorized, cartQty}) => {
    Topbar.defaultProps = {
        cartQty: 0
    };
    
    return (
      <header className="">
        <div className="top-bar">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>

          <div className="cart-btn">
            <Link to="/cart">
              Cart
              <div className={`cart-num ${cartQty ? "" : "none"}`}>
                {cartQty}
              </div>
            </Link>
          </div>

          <div className="login-btn">
            {authorized ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </header>
    );
}

export default Topbar;