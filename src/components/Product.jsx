import React from 'react';
import Popup from 'reactjs-popup';
import './Product.css'
import Details from './Details';
import Logo from './Logo';

const Product = ({ key_product, storage, completeDetail, buyProduct }) => {
    return (
        <div className='product'>
            <Popup
                trigger={
                    <div>
                        <Logo
                            storage={storage}
                            key_product={key_product}
                            buyProduct={buyProduct} />
                    </div>}
                position='bottom left'
                on='hover'
                mouseEnterDelay={500}
                mouseLeaveDelay={0}>
                <Details
                    storage={storage}
                    key_product={key_product}
                    completeDetail={completeDetail} />
            </Popup>
            <div className={`name-container tier${storage[key_product].level}`}>
                <div className='name'>
                    <strong>{key_product}<br/>{storage[key_product].stock}</strong>
                </div>
            </div>
        </div>
    );
}

export default Product;