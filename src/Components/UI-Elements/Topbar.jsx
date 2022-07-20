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
            <Link to="/shoe-warehouse/home">Home</Link>
          </div>

          <div className="cart-btn">
            <Link to="/shoe-warehouse/cart">
              Cart
              <div className={`cart-num ${cartQty ? "" : "none"}`}>
                {cartQty}
              </div>
            </Link>
          </div>

          <div className="login-btn">
            {authorized ? (
              <Link to="/shoe-warehouse/dashboard">Dashboard</Link>
            ) : (
              <Link to="/shoe-warehouse/login">Login</Link>
            )}
          </div>
        </div>
      </header>
    );
}

export default Topbar;