import * as React from 'react'
import './SaleItem.css';

interface SaleItemProps{
    name: string;
    price: number;
    onClick: (name: string, price: number) => void
}

function SaleItem({name, price, onClick}: SaleItemProps) {

    const handleAddItem = () => {
        onClick(name, price);
    }

    return (
        <>
            <button
                onClick={handleAddItem}
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
