import * as React from "react";
import "./Checkout.css";
import { useLocation } from "react-router-dom";

function Checkout() {
  const { state } = useLocation();

  return (
    <div className="checkout">
      <h1>{JSON.stringify(state)}</h1>
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
