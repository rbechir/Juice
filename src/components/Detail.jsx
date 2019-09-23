import React from 'react';
import '../css/Detail.css';
import '../css/Logo.css';
import Logo from './Logo';

const Detail = (props) => {
    let color = 'red';
    const complete = props.storage[props.key_product].complete[props.key_element];
    const required = props.storage[props.key_product].require[props.key_element];
    const stock = props.storage[props.key_element].stock;

    if (complete) {
        color = 'green';
    }

    return (
        <div className='detail'>
            <Logo
                key_product={props.key_element}
                onClick={null}
                name='logo' />
            <div className={`stock ${color}`}>
                {stock} / {required}
            </div>
        </div>
    );
}

export default Detail;