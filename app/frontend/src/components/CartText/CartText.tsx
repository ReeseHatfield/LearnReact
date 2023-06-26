import * as React from "react";
import "./CartText.css";

interface CartTextProps {
  cart: any[];
}

function CartText({ cart }: CartTextProps) {
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
    <div className="text-area">
      <ul className="cart-list">{mappedItems}</ul>
    </div>
  );
}

export default CartText;
