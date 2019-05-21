import React from 'react';
import Details from './Details';
import BuyProductButton from './BuyProductButton';

const Product = ({ key_product, storage, completeDetail, buyProduct }) => {
    return (
        <div className='product'>
            <h3>
                {key_product} {storage[key_product].stock}
            </h3>
            <p>
                {storage[key_product].stock * storage[key_product].production}ml/s
            </p>
            {Object.keys(storage[key_product].require)
                .map(key_element => (
                    <Details
                        key={key_element}
                        storage={storage}
                        key_element={key_element}
                        key_product={key_product}
                        completeDetail={completeDetail} />
                ))
            }
            <BuyProductButton
                storage={storage}
                key_product={key_product}
                buyProduct={buyProduct} />
        </div>
    );
}

export default Product;