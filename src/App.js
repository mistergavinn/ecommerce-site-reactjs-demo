import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import './App.css';
import Topbar from './Components/UI-Elements/Topbar';
import Home from './Components/Home';
import Footer from './Components/UI-Elements/Footer';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

const App = () => {
  // Product List
  const initialList = [
    {
      id: 1,
      brand: "adidas",
      model: "Boston 10",
      price: 120,
      image: require("./resources/images/boston10.png")
    },
    {
      id: 2,
      brand: "adidas",
      model: "Adizero Adios 6",
      price: 99,
      image: require("./resources/images/adios6.png")
    },
    {
      id: 3,
      brand: "Nike",
      model: "Zoom Fly 3",
      price: 120,
      image: require("./resources/images/zoomfly3.png")
    },
    {
      id: 4,
      brand: "Nike",
      model: "Vaporfly Next %",
      price: 180,
      image: require("./resources/images/vaporfly.png")
    },
    {
      id: 5,
      brand: "ASICS",
      model: "Novablast 2",
      price: 140,
      image: require("./resources/images/novablast2.png")
    },
    {
      id: 6,
      brand: "ASICS",
      model: "Metaspeed Sky",
      price: 180,
      image: require("./resources/images/metaspeedsky.png")
    },
    {
      id: 7,
      brand: "ASICS",
      model: "Magic Speed",
      price: 110,
      image: require("./resources/images/magicspeed.png")
    },
    {
      id: 8,
      brand: "Saucony",
      model: "Freedom 3",
      price: 120,
      image: require("./resources/images/freedom3.png")
    },
    {
      id: 9,
      brand: "Saucony",
      model: "Endorphin Speed 2",
      price: 140,
      image: require("./resources/images/endorphinspeed2.png")
    },
    {
      id: 10,
      brand: "Saucony",
      model: "Endorphin Pro 2",
      price: 180,
      image: require("./resources/images/endorphinpro2.png")
    },
  ];

  // States
  // Login / User
  const [ name, setName ] = useState(undefined);
  const [ authorized, setAuthorized ] = useState(false);

  // Cart
  const [ cartList, setCartList ] = useState([]);
  const [ totalQty, setTotalQty ] = useState(0);
  const [ subtotal, setSubtotal ] = useState(0);
  //const [ shippingFees, setShipping ] = useState(2.0);
  const [ grandTotal, setGrandTotal ] = useState(0);
  const [ discount, setDiscount ] = useState(0);

  // Dashboard
  const [itemList, setItemList] = useState(initialList);

  // Functions
  // Login
  const updateAuthorization = (value) => {
    console.log(authorized);
    setAuthorized(value);
  };
  const updateName = (name) => {
    setName(name);
  };

  // Cart
  const updateCart = (cartItem) => {
    console.log("updateCart called!", cartItem);
    if (cartList.length > 0) {
      for (let cartKey of cartList) {
        if (cartKey.id === cartItem.id) {
          cartKey.quantity += 1;
          setTotalQty(totalQty + 1);
          setSubtotal(subtotal + cartKey.price);
          updateGrandTotal(cartKey.price, true);
          return;
        }
      }
    }
    cartItem.quantity = 1;
    setCartList([...cartList, cartItem]);
    setTotalQty(totalQty + 1);
    setSubtotal(subtotal + cartItem.price);
    updateGrandTotal(cartItem.price, true);
  };
  const deleteCartItem = (cartItem) => {
    setCartList(cartList.filter((item) => item.model !== cartItem.model));
    setTotalQty(totalQty-1);
    setSubtotal(subtotal-cartItem.price);
    updateGrandTotal(cartItem.price, false);
  };
  const updateQuantity = (cartItem, add) => {
    for (let cartKey of cartList) {
      if (cartKey.id === cartItem.id) {
        if (add) {
          cartKey.quantity +=  1;
          setTotalQty(totalQty + 1);
          setSubtotal(subtotal + cartItem.price);
          updateGrandTotal(cartItem.price, true);
        } else {
          cartKey.quantity -= 1;
          setTotalQty(totalQty - 1);
          setSubtotal(subtotal - cartItem.price);
          updateGrandTotal(cartItem.price, false);
        }
        return ;
      }
    }
  }
  const updateGrandTotal = (price, add) => {
    if (!discount && add) {
      setGrandTotal(grandTotal + price);
    } else if (!discount && !add) {
      setGrandTotal(grandTotal - price);
    }

    if (discount && add) {
      setDiscount(discount + price * 0.1);
      setGrandTotal(grandTotal + price * 0.9);
    } else if (discount && !add) {
      setDiscount(discount - price * 0.1);
      setGrandTotal(grandTotal - price * 0.9);
    }
  };

  // Dashboard
  const updateItemList = (newChanges) => {
    console.log(itemList);
    setItemList(
      itemList.map((item) => {
        if (item.id === newChanges.id) {
          item.name = newChanges.name;
          item.price = newChanges.price;
        }
        return item;
      })
    );
  };

  const deleteItemList = (target) => {
    console.log(target);
    setItemList(itemList.filter((item) => item.id !== target));
  };

  return (
    <BrowserRouter>
      <div>
        <Topbar authorized={authorized} cartQty={totalQty} />
        <div className="">
          <Routes>
            <Route path="/" element={<Navigate to="/shoe-warehouse/home" />} />
            <Route
              path="/shoe-warehouse/home"
              element={<Home itemList={itemList} updateCart={updateCart} />}
            />
            <Route
              path="/shoe-warehouse/login"
              element={
                <Login
                  updateAuthorisation={updateAuthorization}
                  updateName={updateName}
                />
              }
            />
            <Route
              path="/shoe-warehouse/dashboard"
              element={
                <Dashboard
                  authorized={authorized}
                  updateAuthorization={updateAuthorization}
                  name={name}
                  itemList={itemList}
                  updateItemList={updateItemList}
                  deleteItemList={deleteItemList}
                />
              }
            />
            <Route
              path="/shoe-warehouse/cart"
              element={
                <Cart
                  cartList={cartList}
                  onDelete={deleteCartItem}
                  updateQuantity={updateQuantity}
                  subtotal={subtotal}
                  grandTotal={grandTotal}
                  //promoCode={promoCode}
                  //discount={discount}
                />
              }
            />
            <Route path="/shoe-warehouse/about-us" element={<AboutUs />} />
            <Route path="/shoe-warehouse/contact-us" element={<Contact />} />
             
            Company
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
