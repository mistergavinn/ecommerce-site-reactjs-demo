import React, { useState } from 'react';
import Button from './Button';

const CartItem = ({ item, onDelete, updateQuantity}) => {
    const [ quantity, setQuantity ] = useState(item.quantity);
    const [ qtyPrice, setQtyPrice ] = useState(item.price * item.quantity);

    const upQty = (item) => {
        setQuantity(quantity + 1);
        setQtyPrice(qtyPrice + item.price);
        updateQuantity(item, true);
    };
    const downQty = (item) => {
        if (quantity === 1) {
            if (window.confirm("Remove this item from cart?")) {
              onDelete(item);
            }
          } else {
            setQuantity(quantity - 1);
            setQtyPrice(qtyPrice - item.price);
            updateQuantity(item, false);
          }
    };

    return (
      <div className="cart-item">
        <img src={item.image} alt="" />
        <div className="cart-details">
          <h3>{item.brand}</h3>
          <h3>{item.model}</h3>
          <span>{`$${qtyPrice}`}</span>
          <div className="quantity">
            <Button text="-" onClick={downQty.bind(this, item)} />{" "}
            {quantity} <Button text="+" onClick={upQty.bind(this, item)} />
          </div>
        </div>
      </div>
    );
}

export default CartItem;
