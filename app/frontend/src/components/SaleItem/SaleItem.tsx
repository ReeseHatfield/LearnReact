import * as React from 'react'
import './SaleItem.css';

interface SaleItemProps{
    name: string;
    price: number;
}

function SaleItem({name, price}: SaleItemProps) {
    return (
        <>
            <button
                type="button"
                className="btn"
            >
                <div>
                    {name} {price.toFixed(2)}
                </div>

            </button>

        </>
    );
}

export default SaleItem;
