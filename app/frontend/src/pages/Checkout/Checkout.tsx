import * as React from "react";
import "./Checkout.css";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";

function Checkout() {
  const { state } = useLocation();
  const cart = state;

  const navigate: NavigateFunction = useNavigate();
  const [cardNum, setCardNum] = useState("");

  const finalizeCheckout = async () => {
    if (cardNum == "") {
      alert("Please enter card info");
      return;
    }

    const response: Response = await fetch("http://localhost:3001/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creditCardNum: cardNum }),
    });

    if (response.ok) {
      alert("CARD WENT THRU");
      await recordTransaction(cart);
      navigate("/pos");
    } else {
      alert("NO CARD :(");
    }
  };

  const handleCardChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCardNum(event.currentTarget.value);
  };

  let total: number = 0;
  cart.forEach((item): void => {
    total += item.price;
  });

  return (
    <div className="checkout">
      <h1>Total {total} </h1>
      <div>
        <CheckoutCart cart={cart} />
      </div>

      <label>Please scan card: </label>
      <input onChange={handleCardChange} />

      <div>
        <button onClick={finalizeCheckout}>Purchase</button>
        <button
          onClick={(): void => {
            navigate("/pos");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Checkout;

async function recordTransaction(data: { name: string; price: number }[]) {
  const response: Response = await fetch(
    "http://localhost:3001/recordTransaction",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    alert("Transaction NOT recorded");
  }
}
