import React from 'react';
import Popup from 'reactjs-popup';
import './Product.css'
import Details from './Details';
import Logo from './Logo';

const Product = ({ key_product, storage, buyProduct }) => {
    return (
        <div className='product'>
            <Logo
                storage={storage}
                key_product={key_product}
                buyProduct={buyProduct} />
            <Popup
                trigger={
                    <div className={`name-container tier${storage[key_product].level}`}>
                        <div className='name'>
                            <strong>{key_product}<br/>{storage[key_product].stock}</strong>
                        </div>
                    </div>}
                position='bottom center'
                offsetX={-25}
                on='hover'
                mouseEnterDelay={500}
                mouseLeaveDelay={0}>
                <Details
                    storage={storage}
                    key_product={key_product} />
            </Popup>
        </div>
    );
}

export default Product;