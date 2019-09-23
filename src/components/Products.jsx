import React from 'react';
import Product from './Product';

const Products = (props) => {
    return (
        props.products.map(key_product => {
            if (props.level >= props.storage[key_product].level) {
                return (
                    <Product
                        key={key_product}
                        key_product={key_product}
                        storage={props.storage}
                        production={props.production}
                        workersCost={props.workersCost}
                        buyProduct={props.buyProduct}
                        changeWorkerNumber={props.changeWorkerNumber} />);
            }
            return (null);
        })
    );
}

export default Products;