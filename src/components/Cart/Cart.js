import React from 'react';
import Names from '../Names/Names';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;

    let total = 0;
    // let newNames = '';
    for (const writer of cart) {
        // newNames = newNames + ' ' + writer.name;
        total = total + writer.salary;
    }
    // let newNames = '';
    // for (const writer of names) {
    //     newNames = newNames + ' ' + ' ' + writer.name;
    // }
    return (
        <div className="cart">
            <h4>Writers Added: {cart.length}</h4>
            <h4>Total Cost: ${total}</h4>
            {/* <p>{newNames}</p> */}
            {
                cart.map((names, key) => <Names
                    key={key}
                    names={names}
                ></Names>)
            }
        </div>
    );
};

export default Cart;