import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Writer.css';

const Writer = (props) => {
    const { img, name, age, country, salary } = props.writer;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props.writer);
    return (
        <div>
            <div className="card">
                <img src={img} alt="" className="card__image" />
                <p className="card__name">{name}</p>
                <div>
                    <p>Country: {country}</p>
                    <p>Age: {age}</p>
                    <p>Salary: ${salary}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.writer)} className="btn draw-border">{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Writer;