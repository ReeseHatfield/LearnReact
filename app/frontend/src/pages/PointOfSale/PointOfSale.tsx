import * as React from "react";
import SaleItem from "../../components/SaleItem/SaleItem";
import "./PointOfSale.css";
import LogOutButton from "../../components/Buttons/LogOutButton/LogOutButton";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckoutButton from "../../components/Buttons/CheckoutButton/CheckoutButton";
import ExportButton from "../../components/Buttons/ExportButton/ExportButton";

interface PointOfSalePageProps {
  isUser: boolean;
}

function PointOfSale({ isUser }: PointOfSalePageProps) {
  let isLoggedIn: boolean = isUser;
  const handleLogOut = (): void => {
    /*
        If user has not been verified by server, send them back to login page. This would
        occur if a user found a way to directly navigate to the /pos page
        from the electron app. Not entirely sure if this is possible, but feels like
        good security practice regardless
        */
    navigate("/login");
  };
  if (!isLoggedIn) return userNotLoggedIn(handleLogOut);

  const navigate: NavigateFunction = useNavigate();

  const [cart, setCart] = useState([]);

  const handleAddItem = (name: string, price: number): void => {
    appendToCart({ name, price });
  };

  const handleCheckout = async () => {
    let total: number = 0;
    cart.map((item) => {
      total += item.price;
    });

    setCart([]);

    const creditCardNum: string = "79927398713";

    const response: Response = await fetch("http://localhost:3001/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creditCardNum: creditCardNum }),
    });

    if (response.ok) {
      alert("CARD WENT THRU");
    } else {
      alert("NO CARD :(");
    }
  };

  const appendToCart = async (newItem) => {
    let currentCart = cart;
    currentCart.push(newItem);
    setCart(currentCart);
  };

  return (
    <>
      <div className="pos-container">
        <div className="sale-items-container">
          {initializePOSItems(handleAddItem)}
        </div>

        <div className="util">
          <LogOutButton onLogOut={handleLogOut} />
          <CheckoutButton handleCheckout={handleCheckout} />
          <ExportButton />
        </div>
      </div>
    </>
  );
}

function initializePOSItems(
  handleAddItem: (name: string, price: number) => void
) {
  const items = [
    { name: "Latte", price: 3.5 },
    { name: "Pastry", price: 2.25 },
    { name: "Sandwich", price: 6.75 },
    { name: "Soup", price: 5.0 },
    { name: "Salad", price: 7.0 },
    { name: "Juice", price: 3.25 },
    { name: "Pizza", price: 8.5 },
    { name: "Soda", price: 1.75 },
    { name: "Ice Cream", price: 4.5 },
    { name: "Tea", price: 2.5 },
    { name: "Cake", price: 4.0 },
    { name: "Fruit", price: 1.0 },
    { name: "Bagel", price: 1.5 },
    { name: "Burger", price: 7.5 },
    { name: "Fish", price: 9.0 },
    { name: "Chips", price: 2.0 },
  ];

  return (
    <>
      {items.map((item, index) => (
        <SaleItem
          onClick={handleAddItem}
          key={index}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
}

function userNotLoggedIn(handleLogOutFunc: () => void) {
  return (
    <>
      <div>
        <h1>Please exit and sign in</h1>

        <LogOutButton onLogOut={handleLogOutFunc} />
      </div>
    </>
  );
}

export default PointOfSale;
