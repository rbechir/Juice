import React from 'react';
import './Detail.css';
import './Logo.css';
import Logo from './Logo';

const Detail = ({ storage, key_element, key_product, completeDetail }) => {
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
        <div className='detail'>
            <Logo
                storage={storage}
                key_product={key_element}
                buyProduct={null} />
            <div className={`stock ${color}`}>
                {stock} / {required}
            </div>
        </div>
    );
}
 
export default Detail;