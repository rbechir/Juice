import React from 'react';
import Popup from 'reactjs-popup';
import '../css/Product.css'
import Details from './Details';
import BuyProduct from './BuyProduct';
import Workers from './Workers';

const Product = (props) => {
    return (
        <div className='product'>
            <BuyProduct
                complete={props.storage[props.key_product].complete}
                key_product={props.key_product}
                buyProduct={props.buyProduct} />
            <Popup
                trigger={
                    <div className={`name-container tier${props.storage[props.key_product].level}`}>
                        <div className='name'>
                            <strong>{props.key_product}<br />{props.storage[props.key_product].stock}</strong>
                        </div>
                    </div>}
                position='bottom center'
                offsetX={-25}
                on='hover'
                mouseEnterDelay={500}
                mouseLeaveDelay={0}>
                <Details
                    storage={props.storage}
                    key_product={props.key_product} />
            </Popup>
            <Workers
                storage={props.storage}
                production={props.production}
                workersCost={props.workersCost}
                key_product={props.key_product}
                changeWorkerNumber={props.changeWorkerNumber} />
        </div>
    );
}

export default Product;