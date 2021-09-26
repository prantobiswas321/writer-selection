import React from 'react';
import './Names.css';

const Names = (props) => {
    const { name } = props.names;
    return (
        // ul in the div for showing names in the cart
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default Names;