import React, { useEffect, useState } from 'react';
import './Writers.css';

const Writers = () => {
    const [writers, setWriters] = useState([]);

    useEffect(() =>
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
        , [])
    return (
        <div className="writers-container">
            <div className="writer-container">
                <h2>Here is writer: {writers.length}</h2>
                {
                    writers.map(writer => console.log(writer))
                }
            </div>
            <div className="cart-container">
                <h4>Writers Added:</h4>
                <h4>Total Cost: $</h4>
            </div>
        </div>
    );
};

export default Writers;