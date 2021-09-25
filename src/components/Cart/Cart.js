import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { cart, names } = props;
    let total = 0;
    let newNames = '';
    for (const writer of cart) {
        newNames = newNames + ' ' + writer.name;
        total = total + writer.salary;
    }
    // let newNames = '';
    // for (const writer of names) {
    //     newNames = newNames + ' ' + ' ' + writer.name;
    // }
    return (
        <div>
            <h4>Writers Added: {cart.length}</h4>
            <h4>Total Cost: ${total}</h4>
            <p>{newNames}</p>
        </div>
    );
};

export default Cart;