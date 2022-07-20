import React, { useState } from 'react';
import Button from './Button';

const CartPrice = ({ subtotal, promoCode, discount, grandTotal }) => {
    const [ code, setCode ] = useState("");

    const useCode = () => {
        promoCode(code);
        setCode("");
    };

    return (
      <>
        {/* <label>PROMO CODE:</label>
        <div className="promo-code">
          <input
            type="text"
            placeholder="Enter promo code"
            onInput={(e) => setCode(e.target.value)}
            value={code}
          />
          <Button text="APPLY" onClick={useCode} />
        </div> */}
        <div className="price-row">
          <span>SUBTOTAL:</span>
          <span>{`$${subtotal}`}</span>
        </div>
        <div className="price-row">
          <span>SHIPPING:</span>
          <span>$1.90</span>
        </div>
        {/* <div className="price-row">
          <span>{`PROMO CODE: ${discount ? "10% OFF" : ""}`}</span>
          <span>{`-$${discount}`}</span>
        </div> */}
        <div className="price-row">
          <span>
            <b>GRAND TOTAL:</b>
          </span>
          <span>{`$${grandTotal}`}</span>
        </div>
        <div className="checkout-btn">
          <Button text="PROCEED TO PAY" />
        </div>
      </>
    );
}

export default CartPrice;