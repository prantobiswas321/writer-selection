import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
        , [])

    const handleAddToCart = (writer) => {
        const newCart = [...cart, writer];
        setCart(newCart);
    }

    return (
        <div className="writers-container">
            <div className="writer-container">
                {
                    writers.map(writer => <Writer
                        key={writer.id}
                        handleAddToCart={handleAddToCart}
                        writer={writer}></Writer>)
                }
            </div>
            <div className="cart-container">
                <h4>Writers Added: {cart.length}</h4>
                <h4>Total Cost: $</h4>
            </div>
        </div>
    );
};

export default Writers;