import React from 'react';
import ProductCard from './UI-Elements/ProductCard';

import '../css/ProductTable.css';

const ProductTable = ({ itemList,updateCart }) => {
    const onAdd = (item) => {
        updateCart(item);
    };

    return (
      <div className="item-container">
        {itemList.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onAdd={onAdd.bind(this, item)}
          />
        ))}
      </div>
    );
}

export default ProductTable;