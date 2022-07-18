import React from 'react';
import Button from './Button';

const ProductCard = ({ item, onAdd }) => {
    return ( 
        <div className="item">
          <img src={item.image} alt="" />
        <div className="item-details">
          <div className="item-name">
            <h4>{item.brand}</h4>
            <h4>{item.model}</h4>
            <span>{`$${item.price}`}</span>
          </div>
          <div className="add-icon">
            <Button text="+" onClick={onAdd} />
          </div>
        </div>
      </div>
     );
};

export default ProductCard;