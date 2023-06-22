import * as React from 'react';
import SaleItem from "../../components/SaleItem/SaleItem";

function PointOfSale() {
    return (
        <div className='sales-container'>
            <SaleItem name={'Bread'} price={4.50}></SaleItem>
            <SaleItem name={'Eggs'} price={3.65}></SaleItem>
            <SaleItem name={'Milk'} price={2.80}></SaleItem>
        </div>
    );
}

export default PointOfSale;