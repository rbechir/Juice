import React from 'react';
import Product from './Product';

const Products = ({ level, products, storage, production, workersCost, buyProduct, changeWorkerNumber }) => {
    return (
        products.map(key_product => {
            if (level >= storage[key_product].level) {
                return (
                    <Product
                        key={key_product}
                        key_product={key_product}
                        storage={storage}
                        production={production}
                        workersCost={workersCost}
                        buyProduct={buyProduct}
                        changeWorkerNumber={changeWorkerNumber} />);
            }
            return (null);
        })
    );
}

export default Products;