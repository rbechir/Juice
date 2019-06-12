import React from 'react';
import './Detail.css';
import './Logo.css';
import Logo from './Logo';

const Detail = ({ storage, key_element, key_product }) => {
    let color = 'red';
    const complete = storage[key_product].complete[key_element];
    const required = storage[key_product].require[key_element];
    const stock = storage[key_element].stock;

    if (complete) {
        color = 'green';
    }
    
    return (
        <div className='detail'>
            <Logo
                key_product={key_element}
                onClick={null}
                name='logo' />
            <div className={`stock ${color}`}>
                {stock} / {required}
            </div>
        </div>
    );
}
 
export default Detail;