import React, { useState } from 'react';
import Button from './UI-Elements/Button';

const DashboardItem = ({ item, updateItemList, deleteItemList }) => {
    const [brand, setBrand] = useState(item.brand);
    const [model, setModel] = useState(item.model);
    const [price, setPrice] = useState(item.price);

    const saveClicked = () => {
        let changes = { id: item.id, brand: brand, model: model, price: Number(price) };
        console.log(changes);
        updateItemList(changes);
      };
    
      const deleteClicked = () => {
        let confirmation = window.confirm("Remove item from list?");
        if (confirmation) {
          deleteItemList(item.id);
        }
      };
    return (
      <>
        <tr>
          <td className="img-container">
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>
          <td style={{}}>
            <Button
              cssClass="dashboard-btn"
              text="Save"
              onClick={saveClicked}
            />
          </td>
          <td>
            <Button
              cssClass="dashboard-btn"
              text="Delete"
              onClick={deleteClicked}
            />
          </td>
        </tr>
      </>
    );
}

export default DashboardItem;