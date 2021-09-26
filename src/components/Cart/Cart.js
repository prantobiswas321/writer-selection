import React from 'react';
import Names from '../Names/Names';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const writer of cart) {
        total = total + writer.salary;
    }

    return (
        <div className="cart">
            <h4 className="cart-text">Writers Added: {cart.length}</h4>
            <h4 className="cart-text">Total Cost: ${total}</h4>
            <p className="cart-text">Writers list:</p>
            {
                // mapping cart for names
                cart.map((names, key) => <Names
                    key={key}
                    names={names}
                ></Names>)
            }
        </div>
    );
};

export default Cart;