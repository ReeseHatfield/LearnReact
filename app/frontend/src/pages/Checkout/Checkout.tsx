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

  // const total = cart.reduce((acc, item.price) => acc + item, 0);

  const handleCardChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCardNum(event.currentTarget.value);
  };

  let total: number = 0;

  Array.from(cart.values).forEach((item: number, index: number) => {
    console.log(item);
    total += item;
  });

  return (
    <div className="checkout">
      <h1>Total {JSON.stringify(cart)} </h1>
      <input onChange={handleCardChange} />
      <button onClick={finalizeCheckout} />
    </div>
  );
}

export default Checkout;

// let total: number = 0;
// cart.map((item) => {
//   total += item.price;
// });
//
// setCart([]);
//
// const creditCardNum: string = "79927398713";
//
// const response: Response = await fetch("http://localhost:3001/checkout", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ creditCardNum: creditCardNum }),
// });
//
// if (response.ok) {
//   alert("CARD WENT THRU");
// } else {
//   alert("NO CARD :(");
// }
