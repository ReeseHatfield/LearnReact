import * as React from 'react';
import SaleItem from "../../components/SaleItem/SaleItem";
import './PointOfSale.css'
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import {NavigateFunction, useNavigate} from "react-router-dom";

function PointOfSale() {

    const navigate: NavigateFunction = useNavigate();

    const handleLogOut = () =>{
        console.log("LOG OUT")
        navigate('/login')
    }

    return (
        <>
            <div className='pos-container'>

                <div className='sale-items-container'>
                    <SaleItem name={'Bread'} price={4.50}></SaleItem>
                    <SaleItem name={'Eggs'} price={3.65}></SaleItem>
                    <SaleItem name={'Milk'} price={2.80}></SaleItem>
                </div>

                <div className='util'>
                    <LogOutButton onLogOut={handleLogOut}/>
                </div>

            </div>
        </>


    );
}

export default PointOfSale;