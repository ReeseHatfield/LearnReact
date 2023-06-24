import * as React from "react";
import "./Checkout.css";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <input onChange={handleCardChange} />
      <button onClick={finalizeCheckout} />
      <button
        onClick={() => {
          navigate("/pos");
        }}
      />
    </div>
  );
}

export default Checkout;
