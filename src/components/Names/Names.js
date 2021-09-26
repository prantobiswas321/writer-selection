import React from 'react';
import './Names.css';

const Names = (props) => {
    // console.log(props.names);
    const { name } = props.names;
    console.log(name);
    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default Names;