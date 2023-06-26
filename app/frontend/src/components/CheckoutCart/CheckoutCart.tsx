import * as React from "react";
import "./CheckoutCart.css";

interface CheckoutCartProps {
  cart: any[];
}

function CheckoutCart({ cart }: CheckoutCartProps) {
  const mappedItems: React.JSX.Element[] = cart.map(
    (item: { name: string; price: number }, index: number) => {
      return (
        <li className="cart-item" key={index}>
          <span className="item-name">{item.name}</span>{" "}
          <span className="item-price">${item.price}</span>
        </li>
      );
    }
  );

  return (
    <div className="checkout-cart">
      <ul className="cart-list">{mappedItems}</ul>
    </div>
  );
}

export default CheckoutCart;
