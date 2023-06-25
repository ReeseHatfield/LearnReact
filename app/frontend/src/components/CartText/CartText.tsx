import * as React from "react";
import "./CartText.css";

interface CartTextProps {
  cart: any[];
}

function CartText({ cart }: CartTextProps) {
  const mappedItems: React.JSX.Element[] = cart.map(
    (item: { name: string; price: number }, index: number) => {
      return (
        <li key={index}>
          {item.name}: {item.price}
        </li>
      );
    }
  );

  return (
    <div className="text-area">
      <ul>{mappedItems}</ul>
    </div>
  );
}

export default CartText;
