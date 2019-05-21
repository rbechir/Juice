import React from 'react';
import Product from './Product';

const Products = ({ level, products, storage, completeDetail, buyProduct }) => {
    return (
        products.map(key_product => {
            if (level >= storage[key_product].level) {
                return (
                    <Product
                        key={key_product}
                        key_product={key_product}
                        storage={storage}
                        completeDetail={completeDetail}
                        buyProduct={buyProduct} />);
            } else {
                return (null);
            }
        })
    );
}

export default Products;