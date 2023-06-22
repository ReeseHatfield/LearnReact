import * as React from 'react';
import SaleItem from "../../components/SaleItem/SaleItem";
import './PointOfSale.css'
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useState} from "react";

interface PointOfSalePageProps{
    isUser: boolean
}

function PointOfSale({ isUser }: PointOfSalePageProps) {
    let isLoggedIn: boolean = false;

    isLoggedIn = isUser;

    const handleLogOut = (): void =>{
        navigate('/login')
    }

    if(!isLoggedIn){
        return userNotLoggedIn(handleLogOut);
    }

    const navigate: NavigateFunction = useNavigate();

    const [currentOrder, setCurrentOrder] = useState([])

    const handleAddItem = (name: string, price: number): void =>{
        console.log(`name: ${name}`);
        console.log(`price: ${price}`);
    }


    return (
        <>
            <div className='pos-container'>

                <div className='sale-items-container'>
                    {initializePOSItems(handleAddItem)}
                </div>

                <div className='util'>
                    <LogOutButton onLogOut={handleLogOut}/>
                </div>

            </div>
        </>


    );
}


function initializePOSItems(handleAddItem: (name: string, price: number) => void) {
    const items = [
        { name: 'Latte', price: 3.50 },
        { name: 'Pastry', price: 2.25 },
        { name: 'Sandwich', price: 6.75 },
        { name: 'Soup', price: 5.00 },
        { name: 'Salad', price: 7.00 },
        { name: 'Juice', price: 3.25 },
        { name: 'Pizza', price: 8.50 },
        { name: 'Soda', price: 1.75 },
        { name: 'Ice Cream', price: 4.50 },
        { name: 'Tea', price: 2.50 },
        { name: 'Cake', price: 4.00 },
        { name: 'Fruit', price: 1.00 },
        { name: 'Bagel', price: 1.50 },
        { name: 'Burger', price: 7.50 },
        { name: 'Fish', price: 9.00 },
        { name: 'Chips', price: 2.00 }
    ];

    return (
        <>
            {items.map((item, index) =>
                <SaleItem onClick={handleAddItem} key={index} name={item.name} price={item.price} />
            )}
        </>
    );
}


function userNotLoggedIn(handleLogOutFunc: () => void){
    return (
        <>
            <div>
                <h1>
                    Please exit and sign in
                </h1>

                <LogOutButton onLogOut={handleLogOutFunc}/>
            </div>
        </>
    )
}

export default PointOfSale;