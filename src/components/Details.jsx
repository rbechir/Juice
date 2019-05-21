import React from 'react';
import './Details.css';

const Details = ({ storage, key_element, key_product, completeDetail }) => {
    let color = 'red';
    const complete = storage[key_product].complete[key_element];
    const required = storage[key_product].require[key_element];
    const stock = storage[key_element].stock;
    if (complete) {
        if (stock < required) {
            completeDetail(key_product, key_element, false);
        } else {
            color = 'green';
        }
    } else {
        if (stock >= required) {
            color = 'green';
            completeDetail(key_product, key_element, true);
        }
    }
    return (
        <p className={`details-${color}`}>
            {stock} / {required} {key_element}
        </p>
    );
}

export default Details;