import React = require("react")
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
                {name} {price}
            </button>

        </>
    );
}

export default SaleItem;
