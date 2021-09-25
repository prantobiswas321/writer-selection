import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);
    // const [names, setNames] = useState([]);

    useEffect(() =>
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
        , [])

    const handleAddToCart = (writer) => {
        const newCart = [...cart, writer];
        setCart(newCart);
        // const newName = [...names, writer];
        // setNames(newName);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Writers;