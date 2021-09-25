import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>This is a writer selection site</h1>
            <h4>Here you can select writers for your publication</h4>
            <h3>Total Budget: <b>50 Million</b></h3>
        </div>
    );
};

export default Header;