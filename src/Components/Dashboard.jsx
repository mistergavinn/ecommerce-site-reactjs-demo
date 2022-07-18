import React from 'react';
import { Navigate } from 'react-router-dom';
import Button from './UI-Elements/Button';
import Title from './UI-Elements/Title';
import DashboardItem from './DashboardItem';

import '../css/Dashboard.css';

const Dashboard = ({
    authorized,
    name,
    itemList,
    updateItemList,
    deleteItemList,
    updateAuthorization
}) => {
    if(!authorized) {
        return (
            <><Navigate to ='/login' />
            </>
        )
    };
    const logout = () => {
      let confirmation = window.confirm("Logout of current session?");
      if (confirmation) updateAuthorization(false);
    };

    return (
    <>
      <Title title={"Dashboard"} paragraph={`Welcome ${name}!`} />
      <Button cssClass="logout-btn" text="Logout" onClick={logout} />
      <section>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Price (SGD)</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {console.log(itemList)}
            {itemList.map((item) => (
              <DashboardItem
                key={item.id}
                item={item}
                updateItemList={updateItemList}
                deleteItemList={deleteItemList}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Dashboard;