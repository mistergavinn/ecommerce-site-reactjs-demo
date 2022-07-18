import React from "react";
import Title from "./UI-Elements/Title";
import CartItem from "./UI-Elements/CartItem";
import CartPrice from "./UI-Elements/CartPrice";


const Cart = ({
  cartList,
  updateQuantity,
  subtotal,
  grandTotal,
  promoCode,
  onDelete,
  discount,
}) => {
  const title = "Promotion";
  const paragraph = (
    <span>
      Did you know that official run day falls on the 10th of June?
      <br />
      Use promo code: <b style={{ color: "var(--primary-color)" }}>
        RUNJUNE10
      </b>{" "}
      for 10% discount!
    </span>
  );

  return (
    <>
      <Title title={title} paragraph={paragraph} />

      <section>
        <div className="cart">
          <div className="cart-container">
            {!cartList.length ? (
              <h3>No item added to cart yet</h3>
            ) : (
              cartList.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                  onDelete={onDelete}
                  updateQuantity={updateQuantity}
                />
              ))
            )}
          </div>

          <div className="cart-price">
            <CartPrice
              subtotal={subtotal}
              grandTotal={grandTotal}
              promoCode={promoCode}
              discount={discount}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;