import * as React from 'react';
import '../Buttons.css'

interface CheckoutButtonProps{
    handleCheckout: () => void
}

function CheckoutButton({ handleCheckout }: CheckoutButtonProps) {
    return (
        <div>
            <button
                type='button'
                className='util-btn'
                onClick={handleCheckout}
            >
                Checkout
            </button>
        </div>
    );
}

export default CheckoutButton;