import React from 'react';
import Popup from 'reactjs-popup';
import './Product.css'
import Details from './Details';
import BuyProduct from './BuyProduct';
import Workers from './Workers';

const Product = ({ key_product, storage, production, workersCost, buyProduct, changeWorkerNumber }) => {
    return (
        <div className='product'>
            <BuyProduct
                complete={storage[key_product].complete}
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
            <Workers
                storage={storage}
                production={production}
                workersCost={workersCost}
                key_product={key_product}
                changeWorkerNumber={changeWorkerNumber} />
        </div>
    );
}

export default Product;